<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Exception;
use Illuminate\Http\Request;

class CallbackController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $duitkuConfig = new \Duitku\Config(config('duitku.merchant_key'), config('duitku.merchant_code'));
        // true for sandbox mode, false for production mode
        $duitkuConfig->setSandboxMode(config('duitku.sandbox_mode'));
        // set sanitizer (default : true)
        $duitkuConfig->setSanitizedMode(true);
        // set log parameter (default : true)
        $duitkuConfig->setDuitkuLogs(false);

        try {
            $callback = \Duitku\Api::callback($duitkuConfig);
        
            header('Content-Type: application/json');
            $notif = json_decode($callback);
        
            //get transaction
            $transaction = Transaction::where('invoice', $notif->merchantOrderId)->first();
        
            if ($notif->resultCode == "00") {
                
                // Action Success
                $transaction->status = 'PAID';
                $transaction->save();

                // Auto-cancel previous superseded UNPAID transactions for this user for all covered years
                $coveredYears = $transaction->transactionDetails()->pluck('tahun')->filter()->unique()->values()->all();
                if ($transaction->tahun && !in_array($transaction->tahun, $coveredYears)) {
                    $coveredYears[] = $transaction->tahun;
                }

                if (!empty($coveredYears)) {
                    Transaction::where('user_id', $transaction->user_id)
                        ->where('id', '!=', $transaction->id)
                        ->where('status', 'UNPAID')
                        ->where(function ($q) use ($coveredYears) {
                            $q->whereIn('tahun', $coveredYears)
                              ->orWhereHas('transactionDetails', function ($qd) use ($coveredYears) {
                                  $qd->whereIn('tahun', $coveredYears);
                              });
                        })
                        ->update(['status' => 'CANCELLED']);
                }

            } else if ($notif->resultCode == "01") {
                
                // Action Failed
                $transaction->status = 'UNPAID';
                $transaction->save();
                
            } else if ($notif->resultCode == "02") {
                
                // Action Failed
                $transaction->status = 'CANCELLED';
                $transaction->save();
            }
        } catch (Exception $e) {
            http_response_code(400);
            echo $e->getMessage();
        }
    }
}
