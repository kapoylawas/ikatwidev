// resources/js/Pages/Web/VerifyResultSig.jsx
import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";

export default function VerifyResultSig() {
    const { success, message, data, scanDate, qrTimestamp, errorCode } =
        usePage().props;

    // Format tanggal
    const formatDate = (dateString) => {
        if (!dateString) return "-";
        try {
            if (dateString.includes("-")) {
                const [day, month, year, ...time] = dateString.split(/[- :]/);
                const date = new Date(year, month - 1, day, ...time);
                return date.toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                });
            }
            return dateString;
        } catch (error) {
            return dateString;
        }
    };

    // Status badge sederhana
    const getStatusBadge = (status) => {
        switch (status?.toLowerCase()) {
            case "approved":
                return (
                    <span className="badge bg-success px-3 py-2">
                        <i className="bi bi-check-circle me-1"></i> Disetujui
                    </span>
                );
            case "pending":
                return (
                    <span className="badge bg-warning text-dark px-3 py-2">
                        <i className="bi bi-clock me-1"></i> Menunggu
                    </span>
                );
            case "rejected":
                return (
                    <span className="badge bg-danger px-3 py-2">
                        <i className="bi bi-x-circle me-1"></i> Ditolak
                    </span>
                );
            default:
                return (
                    <span className="badge bg-secondary px-3 py-2">
                        {status}
                    </span>
                );
        }
    };

    return (
        <div className="min-vh-100 bg-white">
            <Head>
                <title>Hasil Verifikasi SIG - IKATWI</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>

            {/* Header Sederhana */}
            <div
                className={`${
                    success ? "bg-success" : "bg-danger"
                } text-white py-4`}
            >
                <div className="container">
                    <div className="d-flex align-items-center">
                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-sm btn-light rounded-circle me-3 d-flex align-items-center justify-content-center"
                            style={{ width: "40px", height: "40px" }}
                        >
                            <i className="bi bi-arrow-left text-dark"></i>
                        </button>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center justify-content-center flex-column text-center">
                                <div
                                    className={`rounded-circle d-flex align-items-center justify-content-center mb-3 ${
                                        success
                                            ? "bg-white bg-opacity-25"
                                            : "bg-white bg-opacity-25"
                                    }`}
                                    style={{ width: "54px", height: "54px" }}
                                >
                                    <i
                                        className={`bi ${
                                            success
                                                ? "bi-check-circle"
                                                : "bi-x-circle"
                                        } fs-3 text-white`}
                                    ></i>
                                </div>
                                <div>
                                    <h1 className="h3 mb-1 fw-bold text-white">
                                        {success
                                            ? "VERIFIKASI BERHASIL"
                                            : "VERIFIKASI GAGAL"}
                                    </h1>
                                    <small className="text-white opacity-90 d-block">
                                        {message}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info tanggal scan */}
            <div className="bg-light py-2 border-bottom">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <small className="text-muted">
                            <i className="bi bi-calendar me-1"></i>
                            Scan dilakukan pada:
                        </small>
                        <small className="fw-medium">
                            {formatDate(scanDate)}
                        </small>
                    </div>
                </div>
            </div>

            <div className="container py-4 px-3">
                {data ? (
                    <>
                        {/* Card Informasi Anggota */}
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-header bg-white border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-person-badge text-primary fs-5 me-2"></i>
                                    <h3 className="h6 mb-0 fw-bold">
                                        Informasi Anggota
                                    </h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <small className="text-muted d-block mb-1">
                                            No. Anggota
                                        </small>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-hash text-primary me-2"></i>
                                            <strong className="fs-5">
                                                {data.member_id}
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <small className="text-muted d-block mb-1">
                                            Tahun SIG
                                        </small>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-calendar text-primary me-2"></i>
                                            <strong className="fs-5">
                                                {data.year}
                                            </strong>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <small className="text-muted d-block mb-1">
                                        Nama Lengkap
                                    </small>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person text-primary me-2"></i>
                                        <strong className="fs-5">
                                            {data.member_name}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Status */}
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-header bg-white border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-card-checklist text-info fs-5 me-2"></i>
                                    <h3 className="h6 mb-0 fw-bold">
                                        Status Keanggotaan SIG
                                    </h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <small className="text-muted d-block mb-1">
                                            Status
                                        </small>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-shield-check text-info me-2"></i>
                                            <span>{data.status_label}</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <small className="text-muted d-block mb-1">
                                            Tanggal Daftar
                                        </small>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-calendar-plus text-info me-2"></i>
                                            <span>
                                                {formatDate(
                                                    data.registered_date
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <small className="text-muted d-block mb-1">
                                            Berlaku Hingga
                                        </small>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-calendar-x text-info me-2"></i>
                                            <span>
                                                {formatDate(data.expiry_date)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <small className="text-muted d-block mb-1">
                                            Sisa Waktu
                                        </small>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-clock text-info me-2"></i>
                                            <span>
                                                {data.days_remaining > 0
                                                    ? `${data.days_remaining} hari`
                                                    : data.days_remaining === 0
                                                    ? "Hari ini"
                                                    : "Kadaluarsa"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="mt-3 pt-3 border-top text-center">
                                    {getStatusBadge(data.status)}
                                </div>
                            </div>
                        </div>

                        {/* Info QR Code */}
                        {data.qr_generated && (
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white border-bottom">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-qr-code text-success fs-5 me-2"></i>
                                        <h3 className="h6 mb-0 fw-bold">
                                            Informasi QR Code
                                        </h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <small className="text-muted d-block mb-1">
                                                Dibuat Pada
                                            </small>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-clock-history text-success me-2"></i>
                                                <span>
                                                    {formatDate(
                                                        data.qr_generated
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <small className="text-muted d-block mb-1">
                                                Di-scan Pada
                                            </small>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-check-circle text-success me-2"></i>
                                                <span>
                                                    {formatDate(scanDate)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Error Info */}
                        {errorCode && !success && (
                            <div className="card border-danger border mb-4">
                                <div className="card-header bg-white border-bottom border-danger">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-exclamation-triangle text-danger fs-5 me-2"></i>
                                        <h3 className="h6 mb-0 fw-bold text-danger">
                                            Detail Error
                                        </h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <small className="text-muted d-block mb-2">
                                        Kode Error:
                                    </small>
                                    <div className="bg-light p-3 rounded border">
                                        <code className="text-danger">
                                            {errorCode}
                                        </code>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tombol Aksi */}
                        <div className="mt-5">
                            {/* <button
                                onClick={() =>
                                    (window.location.href = "/sig/verify")
                                }
                                className="btn btn-primary btn-lg w-100 mb-3 py-3 fw-bold"
                            >
                                <i className="bi bi-qr-code-scan me-2"></i>
                                Scan Kartu Lain
                            </button> */}

                            <button
                                onClick={() => (window.location.href = "/")}
                                className="btn btn-outline-secondary w-100 py-3"
                            >
                                <i className="bi bi-house me-2"></i>
                                Kembali ke Beranda
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="card border-0 shadow-sm">
                        <div className="card-body text-center py-5">
                            <i className="bi bi-exclamation-triangle text-warning fs-1 mb-3"></i>
                            <h4 className="h5 mb-2">Data Tidak Ditemukan</h4>
                            <p className="text-muted mb-4">
                                Tidak ada data yang dapat ditampilkan.
                            </p>
                            <button
                                onClick={() =>
                                    (window.location.href = "/sig/verify")
                                }
                                className="btn btn-primary px-4"
                            >
                                <i className="bi bi-arrow-repeat me-2"></i>
                                Coba Lagi
                            </button>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="text-center mt-5 pt-4 border-top">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <i className="bi bi-shield-check text-primary me-2"></i>
                        <small className="fw-bold text-dark">
                            SISTEM VERIFIKASI SIG
                        </small>
                    </div>
                    <small className="text-muted d-block">
                        IKATWI - Ikatan Terapis Wicara Indonesia
                    </small>
                    <small className="text-muted">
                        © {new Date().getFullYear()} All rights reserved
                    </small>
                </div>
            </div>
        </div>
    );
}
