import React, { useState, useEffect } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import FormatPrice from "../../../Utils/FormatPrice";
import Swal from "sweetalert2";

export default function TransactionShow(props) {
    const pageProps = usePage().props || {};
    const transaction = props.transaction || pageProps.transaction;

    // Countdown state (in seconds)
    const [secondsRemaining, setSecondsRemaining] = useState(
        transaction?.seconds_remaining || 0
    );

    useEffect(() => {
        if (!transaction || transaction.status !== "UNPAID" || secondsRemaining <= 0) return;

        const interval = setInterval(() => {
            setSecondsRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [transaction?.status, secondsRemaining]);

    if (!transaction) {
        return (
            <LayoutAccount>
                <div className="container-fluid py-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Memuat...</span>
                    </div>
                </div>
            </LayoutAccount>
        );
    }

    const formatCountdown = (totalSeconds) => {
        if (totalSeconds <= 0) return "00:00:00 (Batas Waktu Habis)";
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, "0")} Jam ${String(minutes).padStart(2, "0")} Menit ${String(seconds).padStart(2, "0")} Detik`;
    };

    const handleCancelTransaction = () => {
        Swal.fire({
            title: "Batalkan Transaksi?",
            text: "Transaksi ini akan dibatalkan dan Anda dapat membuat tagihan baru jika diperlukan.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Ya, Batalkan!",
            cancelButtonText: "Kembali",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.post(`/account/transactions/${transaction.invoice}/cancel`, {}, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Dibatalkan",
                            text: "Transaksi berhasil dibatalkan.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    },
                });
            }
        });
    };

    const handleRetryTransaction = () => {
        Inertia.post(`/account/transactions/${transaction.invoice}/retry`);
    };

    // Helper untuk status badge
    const getStatusBadge = (status) => {
        switch (status) {
            case "PAID":
                return (
                    <span className="badge-status-pill badge-status-paid">
                        <i className="fa fa-check-circle fs-6"></i>
                        <span>LUNAS &amp; TERVERIFIKASI</span>
                    </span>
                );
            case "UNPAID":
                return (
                    <span className="badge-status-pill badge-status-unpaid">
                        <i className="fa fa-clock fs-6"></i>
                        <span>MENUNGGU PEMBAYARAN</span>
                    </span>
                );
            case "EXPIRED":
                return (
                    <span className="badge-status-pill badge-status-expired">
                        <i className="fa fa-hourglass-end fs-6"></i>
                        <span>KADALUARSA (LEBIH DARI 24 JAM)</span>
                    </span>
                );
            case "CANCELLED":
                return (
                    <span className="badge-status-pill badge-status-cancelled">
                        <i className="fa fa-times-circle fs-6"></i>
                        <span>DIBATALKAN</span>
                    </span>
                );
            default:
                return (
                    <span className="badge bg-secondary px-3 py-2 rounded-pill fs-6">
                        {status || "UNKNOWN"}
                    </span>
                );
        }
    };

    return (
        <>
            <Head title={`Detail Transaksi ${transaction.invoice} - IKATWI`} />
            <LayoutAccount>
                <div className="container-fluid py-4 transaction-detail-page">
                    {/* Header Card */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 rounded-4 shadow-sm border-0 header-card">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-receipt fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                                    Detail Transaksi
                                </h4>
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="text-slate-muted small fw-medium">No. Invoice:</span>
                                    <span className="invoice-pill font-monospace">
                                        <i className="fa fa-hashtag me-1 text-primary"></i>
                                        {transaction.invoice}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-2 flex-wrap">
                            <Link href="/account/transactions" className="btn btn-outline-slate rounded-pill px-3 py-2 fw-semibold" style={{ fontSize: '0.84rem' }}>
                                <i className="fa fa-arrow-left me-1"></i> Daftar Transaksi
                            </Link>
                            <Link href="/account/tagihan" className="btn btn-menu-tagihan rounded-pill px-4 py-2 fw-semibold shadow-sm" style={{ fontSize: '0.84rem' }}>
                                <i className="fa fa-credit-card me-1"></i> Menu Tagihan
                            </Link>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Status & Action Hero Card */}
                        <div className="col-12">
                            <div className={`card border-0 rounded-4 shadow-sm overflow-hidden status-hero-card ${
                                transaction.status === "PAID"
                                    ? "status-card-paid"
                                    : transaction.status === "UNPAID"
                                    ? "status-card-unpaid"
                                    : "status-card-expired"
                            }`}>
                                <div className="card-body p-4">
                                    <div className="row align-items-center g-3">
                                        <div className="col-12 col-md-6 d-flex align-items-center">
                                            <div className={`status-icon-wrap me-3 ${
                                                transaction.status === "PAID"
                                                    ? "bg-paid-icon"
                                                    : transaction.status === "UNPAID"
                                                    ? "bg-unpaid-icon"
                                                    : "bg-expired-icon"
                                            }`}>
                                                <i className={`fa fa-${transaction.status === "PAID" ? "check" : transaction.status === "UNPAID" ? "clock" : "times"} fa-2x text-white`}></i>
                                            </div>
                                            <div>
                                                <span className="status-label-sub d-block">
                                                    STATUS PEMBAYARAN
                                                </span>
                                                <div className="mt-2">{getStatusBadge(transaction.status)}</div>
                                            </div>
                                        </div>

                                        {/* Actions based on status */}
                                        <div className="col-12 col-md-6 text-md-end">
                                            {transaction.status === "UNPAID" && (
                                                <div className="d-flex flex-column flex-sm-row justify-content-md-end gap-2 align-items-sm-center">
                                                    {transaction.reference && (
                                                        <a
                                                            href={`https://app-prod.duitku.com/redirect_checkout?reference=${transaction.reference}&lang=id`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-bayar-action btn-lg px-4 rounded-pill shadow fw-bold d-inline-flex align-items-center justify-content-center"
                                                        >
                                                            <i className="fa fa-external-link-alt me-2"></i>
                                                            BAYAR SEKARANG
                                                        </a>
                                                    )}
                                                    <button
                                                        onClick={handleCancelTransaction}
                                                        className="btn btn-outline-danger rounded-pill px-3 py-2 small fw-semibold"
                                                    >
                                                        <i className="fa fa-ban me-1"></i> Batalkan
                                                    </button>
                                                </div>
                                            )}

                                            {(transaction.status === "EXPIRED" || transaction.status === "CANCELLED") && (
                                                <button
                                                    onClick={handleRetryTransaction}
                                                    className="btn btn-retry-action btn-lg px-4 rounded-pill shadow fw-bold"
                                                >
                                                    <i className="fa fa-redo me-2"></i>
                                                    Buat Tagihan Baru / Bayar Ulang
                                                </button>
                                            )}

                                            {transaction.status === "PAID" && (
                                                <Link
                                                    href="/account/ekta"
                                                    className="btn btn-ekta-action btn-lg px-4 py-2 rounded-pill fw-bold d-inline-flex align-items-center justify-content-center shadow"
                                                >
                                                    <i className="fa fa-id-card me-2 fs-5"></i>
                                                    Lihat E-KTA Anggota
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* 24-Hour Expiry Alert for UNPAID */}
                                    {transaction.status === "UNPAID" && (
                                        <div className="mt-4 p-3 countdown-alert-box rounded-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                                                <div className="countdown-icon-circle me-3">
                                                    <i className="fa fa-stopwatch text-amber-700 fa-lg"></i>
                                                </div>
                                                <div>
                                                    <strong className="text-dark d-block fw-bold">Batas Waktu Pembayaran (1x24 Jam)</strong>
                                                    <small className="text-slate-600">
                                                        Transaksi ini akan otomatis kadaluarsa jika tidak dibayar sebelum waktu habis.
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="countdown-timer-pill font-monospace">
                                                <i className="fa fa-hourglass-half me-1 text-amber-900"></i>
                                                {formatCountdown(secondsRemaining)}
                                            </div>
                                        </div>
                                    )}

                                    {/* EXPIRED Alert */}
                                    {transaction.status === "EXPIRED" && (
                                        <div className="mt-4 p-3 expired-alert-box rounded-3 d-flex align-items-center">
                                            <i className="fa fa-exclamation-triangle fa-2x text-rose-600 me-3"></i>
                                            <div>
                                                <strong className="text-rose-700 d-block fw-bold">Transaksi Telah Kadaluarsa</strong>
                                                <small className="text-slate-600">
                                                    Batas waktu 24 jam telah terlewati. Silakan klik tombol <strong>"Buat Tagihan Baru / Bayar Ulang"</strong> di atas untuk memproses ulang pembayaran.
                                                </small>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Customer Info Card (Vibrant Blue & Indigo Accent) */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100 detail-card card-member-info">
                                <div className="card-header detail-card-header member-card-header py-3 px-4 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="card-icon-pill bg-blue-icon-pill shadow-sm">
                                            <i className="fa fa-user-circle text-white"></i>
                                        </span>
                                        <div>
                                            <h5 className="mb-0 fw-bold member-header-title">
                                                Informasi Anggota
                                            </h5>
                                            <span className="text-slate-600 small" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Data pemegang tagihan iuran</span>
                                        </div>
                                    </div>
                                    <span className="badge-member-status-pill shadow-sm">
                                        <i className="fa fa-check-circle me-1"></i> Terdaftar Resmi
                                    </span>
                                </div>
                                <div className="card-body p-4 d-flex flex-column gap-3">
                                    {/* Nama Lengkap Box */}
                                    <div className="p-3 rounded-3 info-box-blue">
                                        <small className="info-box-label d-block mb-1 text-blue-label">
                                            NAMA LENGKAP
                                        </small>
                                        <div className="fw-bold fs-5 text-slate-900 d-flex align-items-center gap-2">
                                            <span className="name-icon-avatar">
                                                <i className="fa fa-user text-primary"></i>
                                            </span>
                                            <span className="text-uppercase" style={{ letterSpacing: '0.01em' }}>
                                                {transaction.user?.name || "-"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* No Anggota & NIK Box */}
                                    <div className="p-3 rounded-3 info-box-blue">
                                        <small className="info-box-label d-block mb-2 text-blue-label">
                                            NOMOR ANGGOTA &amp; NIK
                                        </small>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span className="badge-kta-pill shadow-sm">
                                                <i className="fa fa-id-card me-1 text-primary"></i>
                                                <strong>KTA:</strong> {transaction.user?.no_anggota || "-"}
                                            </span>
                                            {transaction.user?.nik && (
                                                <span className="badge-nik-pill shadow-sm">
                                                    <i className="fa fa-fingerprint me-1 text-slate-500"></i>
                                                    <strong>NIK:</strong> {transaction.user.nik}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Wilayah DPW & DPC Box */}
                                    <div className="p-3 rounded-3 info-box-blue">
                                        <small className="info-box-label d-block mb-2 text-blue-label">
                                            WILAYAH PENGURUS (DPW &amp; DPC)
                                        </small>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            {transaction.province?.name && (
                                                <span className="badge-dpw-highlight shadow-sm">
                                                    <i className="fa fa-landmark me-1 text-emerald-600"></i>
                                                    {transaction.province.name.startsWith("DPW") ? transaction.province.name : `DPW ${transaction.province.name}`}
                                                </span>
                                            )}
                                            {transaction.city?.name && (
                                                <span className="badge-dpc-highlight shadow-sm">
                                                    <i className="fa fa-city me-1 text-indigo-600"></i>
                                                    {transaction.city.name.startsWith("DPC") ? transaction.city.name : `DPC ${transaction.city.name}`}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Info Card (Rich Emerald & Forest Green Accent) */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100 detail-card card-payment-info">
                                <div className="card-header detail-card-header payment-card-header py-3 px-4 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="card-icon-pill bg-emerald-icon-pill shadow-sm">
                                            <i className="fa fa-money-bill-wave text-white"></i>
                                        </span>
                                        <div>
                                            <h5 className="mb-0 fw-bold payment-header-title">
                                                Rincian Pembayaran
                                            </h5>
                                            <span className="text-slate-600 small" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Detail waktu dan total transaksi</span>
                                        </div>
                                    </div>
                                    <span className="badge-iuran-status-pill shadow-sm">
                                        <i className="fa fa-shield-alt me-1"></i> Iuran Resmi
                                    </span>
                                </div>
                                <div className="card-body p-4 d-flex flex-column gap-3">
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <div className="p-3 rounded-3 h-100 info-box-emerald">
                                                <small className="info-box-label d-block mb-1 text-emerald-label">
                                                    TAHUN IURAN / JENIS
                                                </small>
                                                <span className="badge-tahun-hero shadow-sm">
                                                    <i className="fa fa-calendar-alt text-amber-300 me-1"></i>
                                                    {transaction.tahun && transaction.tahun !== "-" ? `Tahun ${transaction.tahun}` : "Iuran / Donasi"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <div className="p-3 rounded-3 h-100 info-box-emerald">
                                                <small className="info-box-label d-block mb-1 text-emerald-label">
                                                    TANGGAL TRANSAKSI
                                                </small>
                                                <div className="fw-bold text-slate-800 small d-flex align-items-center gap-2">
                                                    <span className="time-icon-badge">
                                                        <i className="fa fa-clock text-emerald-700"></i>
                                                    </span>
                                                    <span style={{ fontSize: '0.86rem' }}>{transaction.created_at}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total Tagihan Box (Hero Gradient Container) */}
                                    <div className="p-4 rounded-4 total-tagihan-hero-card shadow">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <span className="text-uppercase fw-bold text-emerald-100 total-tagihan-title">
                                                {transaction.status === "PAID" ? "TOTAL TELAH DIBAYAR" : "TOTAL TAGIHAN"}
                                            </span>
                                            <span className="total-idr-pill">
                                                IDR
                                            </span>
                                        </div>
                                        <div className="fw-extrabold total-tagihan-amount my-1">
                                            Rp {FormatPrice(transaction.grand_total)}
                                        </div>
                                        <div className="d-flex align-items-center gap-2 mt-2 text-emerald-100 small" style={{ fontSize: '0.78rem' }}>
                                            <i className="fa fa-check-circle text-emerald-300 fs-6"></i>
                                            <span>Pembayaran iuran tahunan resmi terverifikasi sistem pusat IKATWI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Items Details (Slate & Indigo Breakdown) */}
                        <div className="col-12">
                            <div className="card border-0 rounded-4 shadow-sm detail-card card-items-info">
                                <div className="card-header detail-card-header items-card-header py-3 px-4 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="card-icon-pill bg-slate-icon-pill shadow-sm">
                                            <i className="fa fa-shopping-bag text-white"></i>
                                        </span>
                                        <div>
                                            <h5 className="mb-0 fw-bold items-header-title">
                                                Item Tagihan &amp; Rincian Transaksi
                                            </h5>
                                            <span className="text-slate-600 small" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Daftar item tagihan iuran yang diproses</span>
                                        </div>
                                    </div>
                                    <span className="badge-items-count-pill shadow-sm">
                                        {(transaction.transaction_details || transaction.transactionDetails || []).length} Item Terdaftar
                                    </span>
                                </div>
                                <div className="card-body p-4">
                                    {(transaction.transaction_details || transaction.transactionDetails || []).map((detail, index) => (
                                        <div key={index} className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between p-3 mb-2 rounded-3 item-row-card gap-3">
                                            <div className="d-flex align-items-center">
                                                <div className="item-icon-circle p-3 rounded-3 me-3 shadow-sm">
                                                    <i className="fa fa-id-badge fa-2x text-emerald-600"></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-bold text-slate-900 fs-6">
                                                        {detail.product?.title || "Iuran Anggota IKATWI"}
                                                    </h6>
                                                    <div className="d-flex gap-2 align-items-center flex-wrap mt-1">
                                                        <span className="badge-item-tag shadow-sm">
                                                            <i className="fa fa-tag me-1 text-primary"></i>
                                                            {detail.size || "Iuran Anggota"}
                                                        </span>
                                                        {detail.tahun && (
                                                            <span className="badge-item-year shadow-sm">
                                                                <i className="fa fa-calendar-check me-1 text-warning"></i>
                                                                Tahun {detail.tahun}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-sm-end ps-4 ps-sm-0">
                                                <div className="fw-bold fs-4 text-emerald-700" style={{ letterSpacing: '-0.02em' }}>
                                                    Rp {FormatPrice(detail.price)}
                                                </div>
                                                <span className="badge-qty-pill shadow-sm mt-1">
                                                    <i className="fa fa-layer-group me-1.5 text-slate-500"></i>
                                                    <span>{detail.qty}x Item Tagihan</span>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .transaction-detail-page {
                        animation: fadeIn 0.25s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .text-slate-900 {
                        color: #0f172a;
                    }
                    .text-slate-600 {
                        color: #475569;
                    }
                    .text-slate-muted {
                        color: #64748b;
                    }
                    .text-blue-label {
                        color: #1d4ed8;
                    }
                    .text-emerald-label {
                        color: #047857;
                    }

                    /* Header Card */
                    .header-card {
                        background: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .header-icon-wrap {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #064e3b 0%, #059669 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }
                    .invoice-pill {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        border-radius: 8px;
                        padding: 4px 12px;
                        font-weight: 700;
                        font-size: 0.88rem;
                    }
                    .btn-outline-slate {
                        background-color: #ffffff;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        transition: all 0.2s ease;
                    }
                    .btn-outline-slate:hover {
                        background-color: #f1f5f9;
                        color: #0f172a;
                        border-color: #94a3b8;
                    }
                    .btn-menu-tagihan {
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                        color: #ffffff;
                        border: 1.5px solid #0f172a;
                        transition: all 0.2s ease;
                    }
                    .btn-menu-tagihan:hover {
                        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }

                    /* Status Hero Card */
                    .status-hero-card {
                        border-radius: 16px;
                        transition: all 0.2s ease;
                    }
                    .status-card-paid {
                        background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #ffffff 100%);
                        border: 1.5px solid #86efac !important;
                        border-left: 7px solid #059669 !important;
                    }
                    .status-card-unpaid {
                        background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffffff 100%);
                        border: 1.5px solid #fde68a !important;
                        border-left: 7px solid #d97706 !important;
                    }
                    .status-card-expired {
                        background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #ffffff 100%);
                        border: 1.5px solid #fca5a5 !important;
                        border-left: 7px solid #e11d48 !important;
                    }

                    .status-icon-wrap {
                        width: 56px;
                        height: 56px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 16px;
                    }
                    .bg-paid-icon {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.4);
                    }
                    .bg-unpaid-icon {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4);
                    }
                    .bg-expired-icon {
                        background: linear-gradient(135deg, #ef4444 0%, #be123c 100%);
                        box-shadow: 0 4px 14px rgba(225, 29, 72, 0.4);
                    }

                    .status-label-sub {
                        color: #64748b;
                        text-transform: uppercase;
                        font-weight: 700;
                        font-size: 0.72rem;
                        letter-spacing: 0.06em;
                    }
                    .badge-status-pill {
                        padding: 7px 16px;
                        border-radius: 9999px;
                        font-size: 0.86rem;
                        font-weight: 700;
                        letter-spacing: 0.02em;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .badge-status-paid {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
                    }
                    .badge-status-unpaid {
                        background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                        color: #ffffff;
                        box-shadow: 0 2px 8px rgba(217, 119, 6, 0.3);
                    }
                    .badge-status-expired {
                        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                        color: #ffffff;
                        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.3);
                    }
                    .badge-status-cancelled {
                        background: linear-gradient(135deg, #64748b 0%, #475569 100%);
                        color: #ffffff;
                    }

                    .btn-ekta-action {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        border: none;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                        font-size: 0.95rem;
                        transition: all 0.2s ease;
                    }
                    .btn-ekta-action:hover {
                        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                        color: #ffffff;
                        transform: translateY(-1.5px);
                        box-shadow: 0 6px 18px rgba(5, 150, 105, 0.45);
                    }

                    .btn-bayar-action {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        color: #ffffff;
                        border: none;
                        box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
                        transition: all 0.2s ease;
                    }
                    .btn-bayar-action:hover {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        transform: translateY(-1.5px);
                    }

                    .btn-retry-action {
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                        color: #ffffff;
                        border: none;
                        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
                        transition: all 0.2s ease;
                    }
                    .btn-retry-action:hover {
                        background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
                        color: #ffffff;
                        transform: translateY(-1.5px);
                    }

                    .countdown-alert-box {
                        background-color: #fffbeb;
                        border: 1.5px solid #fde68a;
                    }
                    .countdown-icon-circle {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background-color: #fef3c7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .countdown-timer-pill {
                        background-color: #f59e0b;
                        color: #ffffff;
                        font-weight: 700;
                        font-size: 0.88rem;
                        padding: 7px 14px;
                        border-radius: 9999px;
                        box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);
                    }
                    .expired-alert-box {
                        background-color: #fff1f2;
                        border: 1.5px solid #fecdd3;
                    }

                    /* Detail Cards */
                    .detail-card {
                        border-radius: 16px;
                        background-color: #ffffff;
                        overflow: hidden;
                    }
                    .detail-card-header {
                        border-bottom: 1.5px solid;
                        padding: 16px 20px !important;
                    }
                    .card-member-info {
                        border: 1.5px solid #bfdbfe !important;
                        border-top: 4px solid #2563eb !important;
                    }
                    .member-card-header {
                        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        border-color: #bfdbfe;
                    }
                    .member-header-title {
                        color: #1e3a8a;
                        font-size: 1.05rem;
                    }
                    .badge-member-status-pill {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        font-weight: 700;
                        font-size: 0.76rem;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        display: inline-flex;
                        align-items: center;
                    }

                    .card-payment-info {
                        border: 1.5px solid #a7f3d0 !important;
                        border-top: 4px solid #059669 !important;
                    }
                    .payment-card-header {
                        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                        border-color: #a7f3d0;
                    }
                    .payment-header-title {
                        color: #064e3b;
                        font-size: 1.05rem;
                    }
                    .badge-iuran-status-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1.5px solid #a7f3d0;
                        font-weight: 700;
                        font-size: 0.76rem;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        display: inline-flex;
                        align-items: center;
                    }

                    .card-items-info {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #334155 !important;
                    }
                    .items-card-header {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-color: #cbd5e1;
                    }
                    .items-header-title {
                        color: #0f172a;
                        font-size: 1.05rem;
                    }
                    .badge-items-count-pill {
                        background-color: #f1f5f9;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        font-weight: 700;
                        font-size: 0.76rem;
                        padding: 6px 14px;
                        border-radius: 9999px;
                        display: inline-flex;
                        align-items: center;
                    }

                    /* Icon Pills */
                    .card-icon-pill {
                        width: 38px;
                        height: 38px;
                        border-radius: 10px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                        flex-shrink: 0;
                    }
                    .bg-blue-icon-pill {
                        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                    }
                    .bg-emerald-icon-pill {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    }
                    .bg-slate-icon-pill {
                        background: linear-gradient(135deg, #475569 0%, #1e293b 100%);
                    }

                    /* Info Boxes */
                    .info-box-blue {
                        background-color: #f8fbff;
                        border: 1.5px solid #dbeafe;
                        padding: 16px 18px !important;
                        border-radius: 12px;
                        transition: all 0.2s ease;
                    }
                    .info-box-blue:hover {
                        border-color: #bfdbfe;
                        background-color: #f0f7ff;
                    }
                    .info-box-emerald {
                        background-color: #f9fdfa;
                        border: 1.5px solid #d1fae5;
                        padding: 16px 18px !important;
                        border-radius: 12px;
                        transition: all 0.2s ease;
                    }
                    .info-box-emerald:hover {
                        border-color: #a7f3d0;
                        background-color: #ecfdf5;
                    }
                    .info-box-label {
                        font-weight: 700;
                        font-size: 0.72rem;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                    }
                    .name-icon-avatar {
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        background-color: #eff6ff;
                        border: 1px solid #bfdbfe;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                    }
                    .time-icon-badge {
                        width: 24px;
                        height: 24px;
                        border-radius: 6px;
                        background-color: #ecfdf5;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                    }

                    /* Badges */
                    .badge-kta-pill {
                        background-color: #eff6ff;
                        color: #1e40af;
                        border: 1.5px solid #bfdbfe;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-family: monospace;
                        font-weight: 700;
                        font-size: 0.86rem;
                    }
                    .badge-nik-pill {
                        background-color: #f8fafc;
                        color: #334155;
                        border: 1.5px solid #cbd5e1;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-family: monospace;
                        font-weight: 700;
                        font-size: 0.86rem;
                    }
                    .badge-dpw-highlight {
                        background-color: #ecfdf5;
                        color: #065f46;
                        border: 1.5px solid #a7f3d0;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-weight: 700;
                        font-size: 0.84rem;
                    }
                    .badge-dpc-highlight {
                        background-color: #eef2ff;
                        color: #3730a3;
                        border: 1.5px solid #c7d2fe;
                        border-radius: 8px;
                        padding: 6px 14px;
                        font-weight: 700;
                        font-size: 0.84rem;
                    }
                    .badge-tahun-hero {
                        display: inline-flex;
                        align-items: center;
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                        color: #ffffff;
                        padding: 6px 14px;
                        border-radius: 8px;
                        font-weight: 700;
                        font-size: 0.88rem;
                    }

                    /* Total Tagihan Hero Card */
                    .total-tagihan-hero-card {
                        background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
                        color: #ffffff;
                        border: 1.5px solid #059669;
                        padding: 24px 22px !important;
                    }
                    .total-tagihan-title {
                        font-size: 0.76rem;
                        letter-spacing: 0.06em;
                    }
                    .total-tagihan-amount {
                        font-size: 2.2rem;
                        color: #ffffff;
                        letter-spacing: -0.02em;
                        line-height: 1.15;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                    }

                    /* Item Breakdown */
                    .item-row-card {
                        background-color: #f8fafc;
                        border: 1.5px solid #e2e8f0;
                        padding: 18px 20px !important;
                        border-radius: 14px;
                        transition: all 0.2s ease;
                    }
                    .item-row-card:hover {
                        background-color: #f1f5f9;
                        border-color: #cbd5e1;
                        transform: translateY(-1px);
                    }
                    .item-icon-circle {
                        background-color: #ecfdf5;
                        border: 1.5px solid #a7f3d0;
                    }
                    .badge-item-tag {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1px solid #bfdbfe;
                        border-radius: 6px;
                        padding: 4px 10px;
                        font-size: 0.78rem;
                        font-weight: 600;
                    }
                    .badge-item-year {
                        background-color: #0f172a;
                        color: #ffffff;
                        border-radius: 6px;
                        padding: 4px 10px;
                        font-size: 0.78rem;
                        font-weight: 600;
                    }
                    .badge-qty-pill {
                        background-color: #f1f5f9;
                        color: #0f172a !important;
                        border: 1.5px solid #cbd5e1;
                        border-radius: 9999px;
                        padding: 4px 12px;
                        font-size: 0.78rem;
                        font-weight: 700;
                        display: inline-flex;
                        align-items: center;
                    }
                    .total-idr-pill {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: #ffffff !important;
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 800;
                        letter-spacing: 0.05em;
                        display: inline-block;
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}
