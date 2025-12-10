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
        <div className="min-vh-100 bg-light">
            <Head>
                <title>Hasil Verifikasi SIG - IKATWI</title>
            </Head>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        {/* Card utama */}
                        <div className="card shadow border-0">
                            {/* Header */}
                            <div className={`card-header ${success ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-3">
                                        {getStatusIcon()}
                                        <div>
                                            <h1 className="h4 mb-0">
                                                {success ? 'Verifikasi Berhasil' : 'Verifikasi Gagal'}
                                            </h1>
                                            <p className="mb-0 opacity-75">
                                                {message}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <small className="d-block opacity-75">Tanggal Scan</small>
                                        <strong>{formatDate(scanDate)}</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="card-body">
                                {data ? (
                                    <>
                                        {/* Informasi Anggota */}
                                        <div className="row mb-4">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <div className="card h-100 border">
                                                    <div className="card-header bg-light">
                                                        <h3 className="h6 mb-0">Informasi Anggota</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <dl className="mb-0">
                                                            <dt className="text-muted small">ID Anggota</dt>
                                                            <dd className="mb-2">
                                                                <strong>{data.member_id || '-'}</strong>
                                                            </dd>
                                                            
                                                            <dt className="text-muted small">Nama</dt>
                                                            <dd className="mb-2">
                                                                <strong>{data.member_name || '-'}</strong>
                                                            </dd>
                                                            
                                                            {data.member_email && (
                                                                <>
                                                                    <dt className="text-muted small">Email</dt>
                                                                    <dd className="mb-0">
                                                                        <strong>{data.member_email}</strong>
                                                                    </dd>
                                                                </>
                                                            )}
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="card h-100 border">
                                                    <div className="card-header bg-light">
                                                        <h3 className="h6 mb-0">Informasi SIG</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <dl className="mb-0">
                                                            <dt className="text-muted small">Tahun</dt>
                                                            <dd className="mb-2">
                                                                <strong>{data.year || '-'}</strong>
                                                            </dd>
                                                            
                                                            <dt className="text-muted small">Status</dt>
                                                            <dd className="mb-2">
                                                                {getStatusBadge(data.status)}
                                                            </dd>
                                                            
                                                            {data.registered_date && (
                                                                <>
                                                                    <dt className="text-muted small">Tanggal Daftar</dt>
                                                                    <dd className="mb-0">
                                                                        <strong>{data.registered_date}</strong>
                                                                    </dd>
                                                                </>
                                                            )}
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Masa Berlaku */}
                                        {data.expiry_date && (
                                            <div className="alert alert-info mb-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h4 className="alert-heading h6 mb-1">Masa Berlaku</h4>
                                                        <p className="mb-0">
                                                            Berlaku hingga: <strong>{data.expiry_date}</strong>
                                                        </p>
                                                    </div>
                                                    {data.days_remaining !== undefined && (
                                                        <div className="text-end">
                                                            <span className={`badge ${data.days_remaining > 0 ? 'bg-primary' : 'bg-warning text-dark'}`}>
                                                                {data.days_remaining > 0 
                                                                    ? `${data.days_remaining} hari lagi` 
                                                                    : 'Sudah kadaluarsa'}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Detail Error */}
                                        {errorCode && !success && (
                                            <div className="alert alert-warning">
                                                <h4 className="alert-heading h6">Detail Error</h4>
                                                <p className="mb-2">Kode Error:</p>
                                                <code className="d-block p-2 bg-dark text-white rounded">
                                                    {errorCode}
                                                </code>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="alert alert-warning">
                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                        Tidak ada data yang ditemukan
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="card-footer bg-light">
                                <div className="d-flex justify-content-between align-items-center">
                                    <button
                                        onClick={() => window.location.href = '/sig/verify'}
                                        className="btn btn-primary"
                                    >
                                        <i className="bi bi-arrow-left me-2"></i>
                                        Kembali ke Verifikasi
                                    </button>
                                    <small className="text-muted">
                                        Sistem Verifikasi SIG - IKATWI
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}