// resources/js/Pages/Web/VerifyResultSig.jsx
import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";

export default function VerifyResultSig() {
    const { success, message, data, scanDate, qrTimestamp, errorCode } = usePage().props;

    // Format tanggal
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Get status label
    const getStatusBadge = (status) => {
        switch(status?.toLowerCase()) {
            case 'approved': 
                return <span className="badge bg-success">Disetujui</span>;
            case 'pending': 
                return <span className="badge bg-warning text-dark">Menunggu</span>;
            case 'rejected': 
                return <span className="badge bg-danger">Ditolak</span>;
            default: 
                return <span className="badge bg-secondary">{status}</span>;
        }
    };

    // Get status icon
    const getStatusIcon = () => {
        if (success) {
            return (
                <div className="text-success fs-1">
                    <i className="bi bi-check-circle-fill"></i>
                </div>
            );
        } else {
            return (
                <div className="text-danger fs-1">
                    <i className="bi bi-x-circle-fill"></i>
                </div>
            );
        }
    };

    return (
        <div className="min-vh-100 bg-light d-flex flex-column">
            <Head>
                <title>Hasil Verifikasi SIG - IKATWI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* Header Mobile */}
            <div className={`${success ? 'bg-success' : 'bg-danger'} text-white py-3 px-3`}>
                <div className="d-flex align-items-center">
                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-sm btn-light me-3"
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <div>
                        <h1 className="h5 mb-0">Hasil Verifikasi</h1>
                        <small>{success ? 'Berhasil' : 'Gagal'}</small>
                    </div>
                </div>
            </div>

            <div className="container-fluid flex-grow-1 py-3 px-3">
                {/* Status Card */}
                <div className="card shadow-sm border-0 mb-3">
                    <div className="card-body text-center">
                        {getStatusIcon()}
                        <h2 className="h5 mt-2">
                            {success ? 'Verifikasi Berhasil' : 'Verifikasi Gagal'}
                        </h2>
                        <p className="text-muted small mb-0">
                            {message}
                        </p>
                        <hr className="my-3" />
                        <div className="d-flex justify-content-between text-muted small">
                            <span>Tanggal Scan:</span>
                            <span>{formatDate(scanDate)}</span>
                        </div>
                    </div>
                </div>

                {data ? (
                    <>
                        {/* Card Data Anggota */}
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="card-header bg-white border-bottom">
                                <h3 className="h6 mb-0">
                                    <i className="bi bi-person-circle me-2"></i>
                                    Informasi Anggota
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <small className="text-muted d-block">No. Anggota</small>
                                        <strong className="d-block">{data.member_id || '-'}</strong>
                                    </div>
                                    <div className="col-6">
                                        <small className="text-muted d-block">Tahun</small>
                                        <strong className="d-block">{data.year || '-'}</strong>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <small className="text-muted d-block">Nama Lengkap</small>
                                    <strong className="d-block">{data.member_name || '-'}</strong>
                                </div>
                            </div>
                        </div>

                        {/* Card Status SIG */}
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="card-header bg-white border-bottom">
                                <h3 className="h6 mb-0">
                                    <i className="bi bi-card-checklist me-2"></i>
                                    Status SIG
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <small className="text-muted d-block">Status</small>
                                        <div className="mt-1">
                                            {getStatusBadge(data.status)}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <small className="text-muted d-block">Tanggal Daftar</small>
                                        <strong className="d-block">{data.registered_date || '-'}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Masa Berlaku */}
                        {data.expiry_date && (
                            <div className="card shadow-sm border-0 mb-3">
                                <div className="card-header bg-white border-bottom">
                                    <h3 className="h6 mb-0">
                                        <i className="bi bi-calendar-check me-2"></i>
                                        Masa Berlaku
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <small className="text-muted d-block">Berlaku hingga</small>
                                            <strong className="d-block">{data.expiry_date}</strong>
                                        </div>
                                        {data.days_remaining !== undefined && (
                                            <span className={`badge ${data.days_remaining > 0 ? 'bg-primary' : 'bg-warning text-dark'}`}>
                                                {data.days_remaining > 0 
                                                    ? `${data.days_remaining} hari` 
                                                    : 'Kadaluarsa'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* QR Generation Info */}
                        {qrTimestamp && (
                            <div className="alert alert-info mb-3">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-qr-code fs-4 me-3"></i>
                                    <div>
                                        <small className="d-block">QR Code dibuat pada</small>
                                        <strong className="d-block">
                                            {new Date(parseInt(qrTimestamp)).toLocaleDateString('id-ID', {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Detail Error */}
                        {errorCode && !success && (
                            <div className="card shadow-sm border-0 mb-3 border-danger">
                                <div className="card-header bg-white border-bottom border-danger">
                                    <h3 className="h6 mb-0 text-danger">
                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                        Detail Error
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <small className="text-muted d-block mb-2">Kode Error:</small>
                                    <code className="d-block p-2 bg-light text-dark rounded border">
                                        {errorCode}
                                    </code>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="alert alert-warning">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        Tidak ada data yang ditemukan
                    </div>
                )}

                {/* Action Buttons */}
                <div className="mt-4">
                    <button
                        onClick={() => window.location.href = '/sig/verify'}
                        className="btn btn-primary w-100 mb-2"
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Scan Lagi
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="btn btn-outline-secondary w-100"
                    >
                        <i className="bi bi-house me-2"></i>
                        Ke Beranda
                    </button>
                </div>

                {/* Footer */}
                <div className="text-center mt-4 pt-3 border-top">
                    <small className="text-muted">
                        Sistem Verifikasi SIG - IKATWI
                    </small>
                    <div className="mt-1">
                        <small className="text-muted">
                            {new Date().getFullYear()} © All rights reserved
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}