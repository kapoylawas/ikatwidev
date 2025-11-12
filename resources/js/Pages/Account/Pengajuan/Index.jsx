//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function PengajuanIndex() {
    const { transactions, statusAnggota, pengajuans } = usePage().props;

    const status = transactions.map((ts) => ts.status);
    const [name] = useState(statusAnggota.status_anggota);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    // Fungsi untuk mendapatkan class status berdasarkan nilai
    const getStatusClass = (status) => {
        switch (status) {
            case "selesai":
                return "status-completed";
            case "dikirim":
                return "status-sent";
            case "setujui":
                return "status-approved";
            case "ditunda":
                return "status-pending";
            case "revisi":
                return "status-revision";
            case "tolak":
                return "status-rejected";
            default:
                return "status-pending";
        }
    };

    // Fungsi untuk mendapatkan icon status
    const getStatusIcon = (status) => {
        switch (status) {
            case "selesai":
                return "fa-check-double";
            case "dikirim":
                return "fa-paper-plane";
            case "setujui":
                return "fa-check-circle";
            case "ditunda":
                return "fa-pause-circle";
            case "revisi":
                return "fa-edit";
            case "tolak":
                return "fa-times-circle";
            default:
                return "fa-clock";
        }
    };

    // Fungsi untuk mendapatkan teks status
    const getStatusText = (status) => {
        switch (status) {
            case "selesai":
                return "Mutasi Selesai";
            case "dikirim":
                return "Terkirim ke Tujuan";
            case "setujui":
                return "Disetujui Asal";
            case "ditunda":
                return "Ditunda Perbaikan";
            case "revisi":
                return "Perlu Revisi";
            case "tolak":
                return "Ditolak";
            default:
                return "Menunggu";
        }
    };

    // Fungsi untuk mendapatkan deskripsi status
    const getStatusDescription = (status) => {
        switch (status) {
            case "selesai":
                return "Pengajuan mutasi telah selesai dan diterima oleh DPW/DPC tujuan";
            case "dikirim":
                return "Pengajuan telah disetujui oleh DPW/DPC asal dan dikirim ke tujuan";
            case "setujui":
                return "Pengajuan telah disetujui oleh DPW/DPC asal";
            case "ditunda":
                return "Pengajuan ditunda menunggu perbaikan dokumen";
            case "revisi":
                return "Pengajuan perlu direvisi sebelum dapat diproses";
            case "tolak":
                return "Pengajuan mutasi ditolak";
            default:
                return "Pengajuan sedang menunggu proses verifikasi";
        }
    };

    return (
        <>
            <Head>
                <title>User Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                {/* Header Section */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-8">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h1 className="h3 mb-0 text-gray-800">
                                    Pengajuan Mutasi
                                </h1>
                                <p className="mb-0 text-muted">
                                    Kelola pengajuan pindah Anda
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-end">
                        {filter === "PAID" ? (
                            <Link
                                href="/account/pengajuan/create"
                                className="btn btn-primary btn-lg shadow-sm"
                            >
                                <i className="fas fa-plus-circle me-2"></i>
                                Buat Pengajuan Baru
                            </Link>
                        ) : (
                            <button
                                className="btn btn-secondary btn-lg shadow-sm"
                                disabled
                                title="Hanya anggota dengan status PAID yang dapat membuat pengajuan"
                            >
                                <i className="fas fa-ban me-2"></i>
                                Buat Pengajuan Baru
                            </button>
                        )}
                    </div>
                </div>

                {/* Status Member Alert */}
                {filter !== "PAID" && (
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="alert alert-warning d-flex align-items-center" role="alert">
                                <i className="fas fa-exclamation-triangle me-3 fa-lg"></i>
                                <div>
                                    <h6 className="alert-heading mb-1">Status Anggota: {name}</h6>
                                    <p className="mb-0">
                                        Saat ini Anda tidak dapat membuat pengajuan mutasi.
                                        Hanya anggota dengan status <strong>PAID</strong> yang diperbolehkan
                                        mengajukan mutasi. Silakan hubungi admin untuk informasi lebih lanjut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats Cards */}
                <div className="row mb-4">
                    <div className="col-xl-2 col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Pengajuan
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {pengajuans.total}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-file-alt fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ... (stats cards lainnya tetap sama) ... */}
                </div>

                {/* Main Content */}
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-header bg-white py-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">
                                        <i className="fas fa-list-alt me-2 text-primary"></i>
                                        Daftar Pengajuan
                                    </h5>
                                    <span className="badge bg-primary">
                                        {pengajuans.total} items
                                    </span>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th className="ps-4" style={{ width: "5%" }}>
                                                    No.
                                                </th>
                                                <th style={{ width: "20%" }}>
                                                    Nama Pengaju
                                                </th>
                                                <th style={{ width: "25%" }}>
                                                    Keterangan
                                                </th>
                                                <th style={{ width: "25%" }}>
                                                    Status Mutasi
                                                </th>
                                                <th className="text-center" style={{ width: "15%" }}>
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pengajuans.data.length > 0 ? (
                                                pengajuans.data.map((pengajuan, index) => (
                                                    <tr key={pengajuan.id} className="align-middle">
                                                        <td className="ps-4 fw-bold text-muted">
                                                            {++index +
                                                                (pengajuans.current_page - 1) *
                                                                pengajuans.per_page}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-sm bg-primary rounded-circle me-3 d-flex align-items-center justify-content-center">
                                                                    <span className="text-white fw-bold">
                                                                        {pengajuan.name.charAt(0).toUpperCase()}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-0">{pengajuan.name}</h6>
                                                                    <small className="text-muted">
                                                                        {new Date(pengajuan.created_at).toLocaleDateString('id-ID')}
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">
                                                                {pengajuan.keterangan || "-"}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="mb-2">
                                                                    <span className={`status-badge ${getStatusClass(pengajuan.status)}`}>
                                                                        <i className={`fas ${getStatusIcon(pengajuan.status)} me-2`}></i>
                                                                        {getStatusText(pengajuan.status)}
                                                                    </span>
                                                                </div>
                                                                <div className="status-description">
                                                                    <small className="text-muted">
                                                                        {getStatusDescription(pengajuan.status)}
                                                                    </small>
                                                                </div>
                                                                {(pengajuan.status === "revisi" || pengajuan.status === "tolak" || pengajuan.status === "ditunda") &&
                                                                    pengajuan.keterangan_revisi && (
                                                                        <div className="mt-2">
                                                                            <small className="text-muted d-block mb-1">
                                                                                Catatan:
                                                                            </small>
                                                                            <div className="alert alert-sm alert-warning p-2 mb-0">
                                                                                <i className="fas fa-info-circle me-1"></i>
                                                                                {pengajuan.keterangan_revisi}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="btn-group" role="group">
                                                                {(pengajuan.status === "revisi" || pengajuan.status === "ditunda") && (
                                                                    <Link
                                                                        href={`/account/pengajuan/${pengajuan.id}/edit`}
                                                                        className="btn btn-outline-primary btn-sm me-1"
                                                                        title="Edit Pengajuan"
                                                                    >
                                                                        <i className="fas fa-edit"></i>
                                                                    </Link>
                                                                )}
                                                                {(pengajuan.status === "setujui" || pengajuan.status === "dikirim" || pengajuan.status === "selesai") && (
                                                                    <Link
                                                                        href={`/account/pengajuan/${pengajuan.id}/edit`}
                                                                        className="btn btn-outline-info btn-sm me-1"
                                                                        title="Lihat Detail"
                                                                    >
                                                                        <i className="fas fa-eye"></i>
                                                                    </Link>
                                                                )}
                                                                {(pengajuan.status === "belum" || pengajuan.status === "revisi") && (
                                                                    <Delete
                                                                        URL={"/account/pengajuan"}
                                                                        id={pengajuan.id}
                                                                    />
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="text-center py-5">
                                                        <div className="text-muted">
                                                            <i className="fas fa-inbox fa-3x mb-3"></i>
                                                            <h5>Belum ada pengajuan</h5>
                                                            <p>
                                                                {filter === "PAID"
                                                                    ? "Mulai dengan membuat pengajuan mutasi pertama Anda"
                                                                    : "Anda perlu memiliki status PAID untuk membuat pengajuan mutasi"
                                                                }
                                                            </p>
                                                            {filter === "PAID" ? (
                                                                <Link
                                                                    href="/account/pengajuan/create"
                                                                    className="btn btn-primary"
                                                                >
                                                                    Buat Pengajuan Baru
                                                                </Link>
                                                            ) : (
                                                                <button className="btn btn-secondary" disabled>
                                                                    Buat Pengajuan Baru
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                {pengajuans.data.length > 0 && (
                                    <div className="card-footer bg-white">
                                        <Pagination
                                            links={pengajuans.links}
                                            align={"center"}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS Styles */}
                <style jsx>{`
                    .status-badge {
                        padding: 0.5rem 1rem;
                        border-radius: 50px;
                        font-size: 0.875rem;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        white-space: nowrap;
                    }
                    
                    .status-completed {
                        background-color: #d1fae5;
                        color: #065f46;
                        border: 1px solid #a7f3d0;
                    }
                    
                    .status-sent {
                        background-color: #e0f2fe;
                        color: #075985;
                        border: 1px solid #7dd3fc;
                    }
                    
                    .status-approved {
                        background-color: #dcfce7;
                        color: #166534;
                        border: 1px solid #86efac;
                    }
                    
                    .status-pending {
                        background-color: #fef3c7;
                        color: #92400e;
                        border: 1px solid #fcd34d;
                    }
                    
                    .status-revision {
                        background-color: #dbeafe;
                        color: #1e40af;
                        border: 1px solid #93c5fd;
                    }
                    
                    .status-rejected {
                        background-color: #fee2e2;
                        color: #991b1b;
                        border: 1px solid #fca5a5;
                    }
                    
                    .status-description {
                        font-size: 0.8rem;
                        line-height: 1.3;
                    }
                    
                    .avatar-sm {
                        width: 40px;
                        height: 40px;
                        font-size: 1rem;
                    }
                    
                    .card {
                        border: none;
                        border-radius: 12px;
                    }
                    
                    .card-header {
                        border-bottom: 1px solid #e3e6f0;
                        border-radius: 12px 12px 0 0 !important;
                    }
                    
                    .table > :not(caption) > * > * {
                        padding: 1rem 0.75rem;
                        border-bottom-color: #e3e6f0;
                    }
                    
                    .btn-outline-primary {
                        border-color: #4e73df;
                        color: #4e73df;
                    }
                    
                    .btn-outline-primary:hover {
                        background-color: #4e73df;
                        color: white;
                    }
                    
                    .btn-outline-info {
                        border-color: #36b9cc;
                        color: #36b9cc;
                    }
                    
                    .btn-outline-info:hover {
                        background-color: #36b9cc;
                        color: white;
                    }
                    
                    .border-left-primary {
                        border-left: 4px solid #4e73df;
                    }
                    
                    .border-left-success {
                        border-left: 4px solid #1cc88a;
                    }
                    
                    .border-left-info {
                        border-left: 4px solid #36b9cc;
                    }
                    
                    .border-left-warning {
                        border-left: 4px solid #f6c23e;
                    }
                    
                    .border-left-secondary {
                        border-left: 4px solid #858796;
                    }
                    
                    .border-left-danger {
                        border-left: 4px solid #e74a3b;
                    }
                    
                    .alert-warning {
                        background-color: #fff3cd;
                        border-color: #ffeaa7;
                        color: #856404;
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}