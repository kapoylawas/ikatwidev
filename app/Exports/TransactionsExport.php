<?php

namespace App\Exports;

use App\Models\Transaction;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TransactionsExport implements FromView
{
    public function view(): View
    {
        $data = Transaction::with('user', 'province')->get();

        return view('transaction', [
            'data' => $data,
        ]);
    }
}
