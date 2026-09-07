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
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d",
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
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fs-6">
                        <i className="fa fa-check-circle me-2"></i>
                        LUNAS
                    </span>
                );
            case "UNPAID":
                return (
                    <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill fs-6">
                        <i className="fa fa-clock me-2"></i>
                        MENUNGGU PEMBAYARAN
                    </span>
                );
            case "EXPIRED":
                return (
                    <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fs-6">
                        <i className="fa fa-hourglass-end me-2"></i>
                        KADALUARSA (LEBIH DARI 24 JAM)
                    </span>
                );
            case "CANCELLED":
                return (
                    <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill fs-6">
                        <i className="fa fa-times-circle me-2"></i>
                        DIBATALKAN
                    </span>
                );
            default:
                return (
                    <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill fs-6">
                        {status || "UNKNOWN"}
                    </span>
                );
        }
    };

    return (
        <>
            <Head title={`Detail Transaksi ${transaction.invoice} - IKATWI`} />
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {/* Header */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 bg-white rounded-4 shadow-sm border-0">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <div className="bg-primary bg-gradient p-3 rounded-4 me-3 text-white shadow-sm">
                                <i className="fa fa-receipt fa-2x"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark">Detail Transaksi</h4>
                                <p className="text-muted mb-0 font-monospace">
                                    Invoice: <strong>{transaction.invoice}</strong>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <Link href="/account/transactions" className="btn btn-outline-secondary rounded-pill px-3">
                                <i className="fa fa-arrow-left me-1"></i> Daftar Transaksi
                            </Link>
                            <Link href="/account/tagihan" className="btn btn-primary rounded-pill px-3">
                                <i className="fa fa-credit-card me-1"></i> Menu Tagihan
                            </Link>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Status & Action Hero Card */}
                        <div className="col-12">
                            <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden">
                                <div className="card-body p-4">
                                    <div className="row align-items-center g-3">
                                        <div className="col-12 col-md-6 d-flex align-items-center">
                                            <div className={`p-3 rounded-circle me-3 ${transaction.status === "UNPAID" ? "bg-warning text-white" : transaction.status === "PAID" ? "bg-success text-white" : "bg-danger text-white"}`}>
                                                <i className={`fa fa-${transaction.status === "PAID" ? "check" : transaction.status === "UNPAID" ? "clock" : "times"} fa-2x`}></i>
                                            </div>
                                            <div>
                                                <small className="text-muted text-uppercase d-block">Status Pembayaran</small>
                                                <div className="mt-1">{getStatusBadge(transaction.status)}</div>
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
                                                            className="btn btn-success btn-lg px-4 rounded-pill shadow-sm fw-bold"
                                                        >
                                                            <i className="fa fa-external-link-alt me-2"></i>
                                                            BAYAR SEKARANG
                                                        </a>
                                                    )}
                                                    <button
                                                        onClick={handleCancelTransaction}
                                                        className="btn btn-outline-danger rounded-pill px-3 py-2 small"
                                                    >
                                                        <i className="fa fa-ban me-1"></i> Batalkan
                                                    </button>
                                                </div>
                                            )}

                                            {(transaction.status === "EXPIRED" || transaction.status === "CANCELLED") && (
                                                <button
                                                    onClick={handleRetryTransaction}
                                                    className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm fw-bold"
                                                >
                                                    <i className="fa fa-redo me-2"></i>
                                                    Buat Tagihan Baru / Bayar Ulang
                                                </button>
                                            )}

                                            {transaction.status === "PAID" && (
                                                <Link
                                                    href="/account/ekta"
                                                    className="btn btn-outline-success btn-lg px-4 rounded-pill fw-bold"
                                                >
                                                    <i className="fa fa-id-card me-2"></i>
                                                    Lihat E-KTA Anggota
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* 24-Hour Expiry Alert for UNPAID */}
                                    {transaction.status === "UNPAID" && (
                                        <div className="mt-4 p-3 bg-warning bg-opacity-10 border border-warning rounded-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                                                <i className="fa fa-stopwatch fa-2x text-warning me-3"></i>
                                                <div>
                                                    <strong className="text-dark d-block">Batas Waktu Pembayaran (1x24 Jam)</strong>
                                                    <small className="text-muted">
                                                        Transaksi ini akan otomatis kadaluarsa jika tidak dibayar sebelum waktu habis.
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="badge bg-warning text-dark fs-6 font-monospace px-3 py-2 rounded-pill">
                                                <i className="fa fa-hourglass-half me-1"></i>
                                                {formatCountdown(secondsRemaining)}
                                            </div>
                                        </div>
                                    )}

                                    {/* EXPIRED Alert */}
                                    {transaction.status === "EXPIRED" && (
                                        <div className="mt-4 p-3 bg-danger bg-opacity-10 border border-danger rounded-3 d-flex align-items-center">
                                            <i className="fa fa-exclamation-triangle fa-2x text-danger me-3"></i>
                                            <div>
                                                <strong className="text-danger d-block">Transaksi Telah Kadaluarsa</strong>
                                                <small className="text-muted">
                                                    Batas waktu 24 jam telah terlewati. Silakan klik tombol <strong>"Buat Tagihan Baru / Bayar Ulang"</strong> di atas untuk memproses ulang pembayaran.
                                                </small>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Customer & Payment Info */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100 bg-white">
                                <div className="card-header bg-white border-0 py-3 ps-4">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="fa fa-user-circle me-2 text-primary"></i>
                                        Informasi Anggota
                                    </h5>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase d-block mb-1">Nama Lengkap</small>
                                        <p className="mb-0 fw-semibold fs-5 text-dark">{transaction.user?.name || "-"}</p>
                                    </div>
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase d-block mb-1">No. Anggota / NIK</small>
                                        <p className="mb-0 fw-semibold text-dark">{transaction.user?.no_anggota || "-"} / {transaction.user?.nik || "-"}</p>
                                    </div>
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase d-block mb-1">DPC (Kota/Kabupaten)</small>
                                        <p className="mb-0 fw-semibold text-dark">{transaction.city?.name || "-"}</p>
                                    </div>
                                    <div className="mb-0">
                                        <small className="text-muted text-uppercase d-block mb-1">DPW (Provinsi)</small>
                                        <p className="mb-0 fw-semibold text-dark">{transaction.province?.name || "-"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100 bg-white">
                                <div className="card-header bg-white border-0 py-3 ps-4">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="fa fa-money-bill-wave me-2 text-primary"></i>
                                        Rincian Pembayaran
                                    </h5>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase d-block mb-1">Tahun Iuran / Jenis</small>
                                        <span className="badge bg-dark px-3 py-2 rounded-pill fs-6">
                                            {transaction.tahun && transaction.tahun !== "-" ? `Tahun ${transaction.tahun}` : "Donasi / Lainnya"}
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase d-block mb-1">Tanggal Transaksi</small>
                                        <p className="mb-0 fw-semibold text-dark">{transaction.created_at}</p>
                                    </div>
                                    <div className="mb-0">
                                        <small className="text-muted text-uppercase d-block mb-1">Total Tagihan</small>
                                        <p className="mb-0 fw-bold fs-2 text-primary">
                                            Rp {FormatPrice(transaction.grand_total)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Items Details */}
                        <div className="col-12">
                            <div className="card border-0 rounded-4 shadow-sm bg-white">
                                <div className="card-header bg-white border-0 py-3 ps-4">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                        Item Tagihan
                                    </h5>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    {(transaction.transaction_details || transaction.transactionDetails || []).map((detail, index) => (
                                        <div key={index} className="d-flex align-items-center p-3 mb-2 rounded-3 border shadow-sm" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                            <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3 text-primary">
                                                <i className="fa fa-id-badge fa-2x"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1 fw-bold text-dark">{detail.product?.title || "Iuran Anggota IKATWI"}</h6>
                                                <div className="d-flex gap-2">
                                                    <span className="badge bg-primary bg-opacity-10 text-primary">
                                                        {detail.size || "Iuran"}
                                                    </span>
                                                    {detail.tahun && (
                                                        <span className="badge bg-dark">
                                                            Tahun {detail.tahun}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-0 fw-bold fs-5 text-primary">
                                                    Rp {FormatPrice(detail.price)}
                                                </p>
                                                <small className="text-muted">{detail.qty}x Item</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
