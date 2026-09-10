<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class EktaController extends Controller
{
    public function index(Request $request)
    {
        $authUser = auth()->user();
        $targetUserId = $authUser->id;

        // Cek hak akses jika admin/pengurus ingin melihat/memvalidasi E-KTA anggota tertentu
        $userRoles = $authUser->getRoleNames()->toArray();
        $canManageUsers = !empty(array_intersect($userRoles, ['super admin', 'admin', 'admin wilayah', 'timver dpw', 'admin cabang', 'timver dpc']))
            || $authUser->can('users.index')
            || $authUser->can('transactions.index')
            || $authUser->can('verifPengajuan.index');

        if ($request->filled('user_id') && $canManageUsers) {
            $targetUserId = (int) $request->user_id;
        }

        $user = User::findOrFail($targetUserId);
        $biodata = $user;
        $memberStatus = $biodata->status_anggota ?? 'Anggota Biasa';

        // Retrieve all PAID transactions of the user
        $transactions = Transaction::with('user', 'transactionDetails')
            ->where('user_id', $user->id)
            ->where('status', 'PAID')
            ->get();

        $unpaidYears = Transaction::getUnpaidYears($user);
        $currentYear = (int) date('Y');
        $isCurrentYearPaid = Transaction::isYearPaid($user->id, $currentYear);

        $isAdminPreview = ($canManageUsers && $targetUserId != $authUser->id);

        // Anggota Kehormatan bebas iuran; Anggota Biasa aktif E-KTA jika sudah membayar lunas iuran tahun berjalan
        // Khusus Admin/Pengurus selalu bisa melihat tampilan kartu untuk keperluan pengecekan/verifikasi
        if ($memberStatus === 'Anggota Kehormatan' || $isAdminPreview) {
            $isPaid = true;
        } else {
            $isPaid = $isCurrentYearPaid;
        }

        return inertia('Account/Ekta/Index', [
            'biodata'        => $biodata,
            'transactions'   => $transactions,
            'statusAnggota'  => $biodata,
            'isPaid'         => $isPaid,
            'unpaidYears'    => $unpaidYears,
            'isAdminPreview' => $isAdminPreview,
            'targetUserId'   => $targetUserId,
        ]);
    }

    public function cetakekta(Request $request)
    {
        $authUser = auth()->user();
        $targetUserId = $authUser->id;

        $userRoles = $authUser->getRoleNames()->toArray();
        $canManageUsers = !empty(array_intersect($userRoles, ['super admin', 'admin', 'admin wilayah', 'timver dpw', 'admin cabang', 'timver dpc']))
            || $authUser->can('users.index')
            || $authUser->can('transactions.index')
            || $authUser->can('verifPengajuan.index');

        if ($request->filled('user_id') && $canManageUsers) {
            $targetUserId = (int) $request->user_id;
        }

        $user = User::findOrFail($targetUserId);
        $biodata = $user;
        $memberStatus = $biodata->status_anggota ?? 'Anggota Biasa';

        $transactions = Transaction::with('user', 'transactionDetails')
            ->where('user_id', $user->id)
            ->where('status', 'PAID')
            ->get();

        $unpaidYears = Transaction::getUnpaidYears($user);
        $currentYear = (int) date('Y');
        $isCurrentYearPaid = Transaction::isYearPaid($user->id, $currentYear);

        $isAdminPreview = ($canManageUsers && $targetUserId != $authUser->id);

        if ($memberStatus === 'Anggota Kehormatan' || $isAdminPreview) {
            $isPaid = true;
        } else {
            $isPaid = $isCurrentYearPaid;
        }

        if (!$isPaid) {
            return redirect()->route('account.ekta.index');
        }

        return inertia('Account/Cetak/Index', [
            'biodata'        => $biodata,
            'transactions'   => $transactions,
            'statusAnggota'  => $biodata,
            'isPaid'         => $isPaid,
            'unpaidYears'    => $unpaidYears,
            'isAdminPreview' => $isAdminPreview,
            'targetUserId'   => $targetUserId,
        ]);
    }
}
