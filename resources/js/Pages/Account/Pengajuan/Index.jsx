//import react
import React, { useState, useEffect } from "react";

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

    // State untuk mengelola pembatasan akses
    const [canCreateSubmission, setCanCreateSubmission] = useState(false);
    const [restrictionMessage, setRestrictionMessage] = useState("");

    // Fungsi untuk memeriksa apakah bulan saat ini termasuk dalam periode yang diizinkan
    const isAllowedMonth = () => {
        const currentMonth = new Date().getMonth() + 1; // January = 1, December = 12
        return currentMonth === 4 || currentMonth === 8 || currentMonth === 11; // April, Agustus, November
    };

    // Fungsi untuk memeriksa jumlah pengajuan di bulan ini
    const getCurrentMonthSubmissions = () => {
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();

        return pengajuans.data.filter(pengajuan => {
            const submissionDate = new Date(pengajuan.created_at);
            return submissionDate.getMonth() + 1 === currentMonth &&
                submissionDate.getFullYear() === currentYear;
        }).length;
    };

    // Fungsi untuk memeriksa apakah pengguna bisa membuat pengajuan baru
    const checkSubmissionEligibility = () => {
        if (filter !== "PAID") {
            setCanCreateSubmission(false);
            setRestrictionMessage("Hanya anggota dengan status PAID yang dapat membuat pengajuan");
            return;
        }

        if (!isAllowedMonth()) {
            setCanCreateSubmission(false);
            const currentMonth = new Date().toLocaleString('id-ID', { month: 'long' });
            setRestrictionMessage(`Pengajuan mutasi hanya dapat dibuat pada bulan April, Agustus, dan November. Saat ini bulan ${currentMonth}`);
            return;
        }

        const currentMonthSubmissions = getCurrentMonthSubmissions();
        if (currentMonthSubmissions >= 3) {
            setCanCreateSubmission(false);
            setRestrictionMessage(`Anda telah mencapai batas maksimal 3 pengajuan dalam bulan ini`);
            return;
        }

        setCanCreateSubmission(true);
        setRestrictionMessage("");
    };

    // Effect untuk memeriksa kelayakan pembuatan pengajuan
    useEffect(() => {
        checkSubmissionEligibility();
    }, [pengajuans, filter]);

    // Fungsi untuk mendapatkan nama bulan yang diizinkan
    const getAllowedMonths = () => {
        return "April, Agustus, dan November";
    };

    // Fungsi untuk mendapatkan informasi batas pengajuan
    const getSubmissionLimitInfo = () => {
        const currentMonthSubmissions = getCurrentMonthSubmissions();
        const remaining = Math.max(0, 3 - currentMonthSubmissions);

        return {
            current: currentMonthSubmissions,
            max: 3,
            remaining: remaining
        };
    };

    const limitInfo = getSubmissionLimitInfo();

    // Fungsi untuk mendapatkan class status berdasarkan nilai
    const getStatusClass = (status) => {
        switch (status) {
            case "selesai":
                return "bg-success text-white";
            case "dikirim":
                return "bg-info text-white";
            case "setujui":
                return "bg-success text-white";
            case "ditunda":
                return "bg-warning text-dark";
            case "revisi":
                return "bg-warning text-dark";
            case "tolak":
            case "ditolak":
                return "bg-danger text-white";
            default:
                return "bg-secondary text-white";
        }
    };

    // Fungsi untuk mendapatkan icon status
    const getStatusIcon = (status) => {
        switch (status) {
            case "selesai":
                return "fas fa-check-double";
            case "dikirim":
                return "fas fa-paper-plane";
            case "setujui":
                return "fas fa-check-circle";
            case "ditunda":
                return "fas fa-pause-circle";
            case "revisi":
                return "fas fa-edit";
            case "tolak":
            case "ditolak":
                return "fas fa-times-circle";
            default:
                return "fas fa-clock";
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
            case "ditolak":
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
            case "ditolak":
                return "Pengajuan mutasi ditolak";
            default:
                return "Pengajuan sedang menunggu proses verifikasi";
        }
    };

    return (
        <>
            <Head>
                <title>Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {/* Header Section */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body py-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4 className="mb-1 text-primary fw-bold">
                                                <i className="fas fa-exchange-alt me-2"></i>
                                                Pengajuan Mutasi
                                            </h4>
                                            <p className="text-muted mb-0">
                                                Kelola pengajuan pindah Anda
                                            </p>
                                        </div>
                                        <div className="col-md-4 text-md-end">
                                            {canCreateSubmission ? (
                                                <Link
                                                    href="/account/pengajuan/create"
                                                    className="btn btn-success btn-lg shadow-sm px-4 py-2"
                                                >
                                                    <i className="fas fa-plus-circle me-2"></i>
                                                    Buat Pengajuan Baru
                                                </Link>
                                            ) : (
                                                <button
                                                    className="btn btn-secondary btn-lg shadow-sm px-4 py-2"
                                                    disabled
                                                    title={restrictionMessage}
                                                >
                                                    <i className="fas fa-ban me-2"></i>
                                                    Buat Pengajuan Baru
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="row mb-4">
                        <div className="col-xl-2 col-md-4 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <div className="bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-file-alt fa-2x text-white"></i>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">{pengajuans.total}</h3>
                                    <p className="text-muted mb-0">Total Pengajuan</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-4 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <div className="bg-success rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-calendar-check fa-2x text-white"></i>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">{getCurrentMonthSubmissions()}</h3>
                                    <p className="text-muted mb-0">Bulan Ini</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-4 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <div className="bg-info rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-tachometer-alt fa-2x text-white"></i>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">
                                        {isAllowedMonth() && filter === "PAID" ? limitInfo.remaining : 0}
                                    </h3>
                                    <p className="text-muted mb-0">Sisa Kuota</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-4 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <div className={`rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center ${isAllowedMonth() ? 'bg-success' : 'bg-warning'}`}
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className={`fas ${isAllowedMonth() ? 'fa-lock-open' : 'fa-lock'} fa-2x text-white`}></i>
                                    </div>
                                    <h6 className="fw-bold mb-1">
                                        {isAllowedMonth() ?
                                            <span className="text-success">Periode Buka</span> :
                                            <span className="text-warning">Periode Tutup</span>
                                        }
                                    </h6>
                                    <p className="text-muted mb-0">Status Periode</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-4 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body text-center">
                                    <div className={`rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center ${filter === "PAID" ? 'bg-success' : 'bg-warning'}`}
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className={`fas ${filter === "PAID" ? 'fa-user-check' : 'fa-user-clock'} fa-2x text-white`}></i>
                                    </div>
                                    <h6 className="fw-bold mb-1">
                                        {filter === "PAID" ?
                                            <span className="text-success">Aktif</span> :
                                            <span className="text-warning">{name}</span>
                                        }
                                    </h6>
                                    <p className="text-muted mb-0">Status Anggota</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Informasi Pembatasan */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-primary text-white py-3">
                                    <h5 className="mb-0">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Informasi Pembatasan Pengajuan
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-primary rounded-circle p-2 me-3">
                                                    <i className="fas fa-calendar-alt text-white"></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">Periode Pengajuan</h6>
                                                    <p className="mb-0 text-muted">
                                                        Hanya bulan: <strong>{getAllowedMonths()}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-warning rounded-circle p-2 me-3">
                                                    <i className="fas fa-chart-bar text-white"></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">Batas Pengajuan</h6>
                                                    <p className="mb-0 text-muted">
                                                        Maksimal <strong>3 pengajuan</strong> per bulan
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    {isAllowedMonth() && filter === "PAID" && (
                                        <div className="mt-3">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <small className="text-muted">
                                                    Pengajuan bulan ini: {limitInfo.current} dari {limitInfo.max}
                                                </small>
                                                <small className={`fw-bold ${limitInfo.remaining === 0 ? 'text-danger' : 'text-success'}`}>
                                                    Sisa: {limitInfo.remaining}
                                                </small>
                                            </div>
                                            <div className="progress" style={{ height: "8px" }}>
                                                <div
                                                    className={`progress-bar ${limitInfo.current >= limitInfo.max ? 'bg-danger' : 'bg-success'}`}
                                                    role="progressbar"
                                                    style={{ width: `${(limitInfo.current / limitInfo.max) * 100}%` }}
                                                    aria-valuenow={limitInfo.current}
                                                    aria-valuemin="0"
                                                    aria-valuemax={limitInfo.max}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alert Messages */}
                    {filter !== "PAID" && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="alert alert-warning border-0 shadow-sm">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-exclamation-triangle fa-2x me-3"></i>
                                        <div>
                                            <h6 className="alert-heading mb-1">Status Anggota: {name}</h6>
                                            <p className="mb-0">
                                                Hanya anggota dengan status <strong>PAID</strong> yang diperbolehkan
                                                mengajukan mutasi. Silakan hubungi admin untuk informasi lebih lanjut.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {filter === "PAID" && !isAllowedMonth() && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="alert alert-info border-0 shadow-sm">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-calendar-times fa-2x me-3"></i>
                                        <div>
                                            <h6 className="alert-heading mb-1">Periode Pengajuan Ditutup</h6>
                                            <p className="mb-0">
                                                {restrictionMessage}. Pengajuan mutasi hanya dapat dibuat pada bulan {getAllowedMonths()}.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {filter === "PAID" && isAllowedMonth() && limitInfo.remaining === 0 && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="alert alert-warning border-0 shadow-sm">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-exclamation-circle fa-2x me-3"></i>
                                        <div>
                                            <h6 className="alert-heading mb-1">Batas Pengajuan Tercapai</h6>
                                            <p className="mb-0">
                                                {restrictionMessage}. Anda dapat membuat pengajuan lagi pada bulan {getAllowedMonths()} di periode berikutnya.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-primary text-white py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">
                                            <i className="fas fa-list-alt me-2"></i>
                                            Daftar Pengajuan
                                        </h5>
                                        <span className="badge bg-success text-white">
                                            {pengajuans.total} items
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th className="ps-4 py-3 text-center" style={{ width: "5%" }}>
                                                        No.
                                                    </th>
                                                    <th className="py-3" style={{ width: "20%" }}>
                                                        <i className="fas fa-user me-2"></i>
                                                        Pengaju
                                                    </th>
                                                    <th className="py-3" style={{ width: "25%" }}>
                                                        <i className="fas fa-sticky-note me-2"></i>
                                                        Keterangan
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "25%" }}>
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        Status
                                                    </th>
                                                    <th className="pe-4 py-3 text-center" style={{ width: "15%" }}>
                                                        <i className="fas fa-cogs me-2"></i>
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pengajuans.data.length > 0 ? (
                                                    pengajuans.data.map((pengajuan, index) => (
                                                        <tr key={pengajuan.id} className="border-bottom">
                                                            <td className="ps-4 text-center fw-bold text-primary">
                                                                {++index +
                                                                    (pengajuans.current_page - 1) *
                                                                    pengajuans.per_page}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                                                        style={{ width: '45px', height: '45px' }}>
                                                                        <i className="fas fa-user text-white"></i>
                                                                    </div>
                                                                    <div>
                                                                        <h6 className="mb-1 fw-semibold">{pengajuan.name}</h6>
                                                                        <small className="text-muted">
                                                                            <i className="fas fa-calendar me-1"></i>
                                                                            {new Date(pengajuan.created_at).toLocaleDateString('id-ID', {
                                                                                day: '2-digit',
                                                                                month: 'short',
                                                                                year: 'numeric'
                                                                            })}
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="mb-0 text-muted">
                                                                    {pengajuan.keterangan || "-"}
                                                                </p>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="d-flex flex-column align-items-center">
                                                                    <span className={`badge ${getStatusClass(pengajuan.status)} px-3 py-2 mb-2`}>
                                                                        <i className={`${getStatusIcon(pengajuan.status)} me-2`}></i>
                                                                        {getStatusText(pengajuan.status)}
                                                                    </span>
                                                                    <small className="text-muted text-center">
                                                                        {getStatusDescription(pengajuan.status)}
                                                                    </small>
                                                                    {(pengajuan.status === "revisi" || pengajuan.status === "tolak" || pengajuan.status === "ditunda" || pengajuan.status === "ditolak") &&
                                                                        pengajuan.keterangan_revisi && (
                                                                            <div className="mt-2">
                                                                                <div className="alert alert-warning py-2 small mb-0">
                                                                                    <i className="fas fa-info-circle me-1"></i>
                                                                                    {pengajuan.keterangan_revisi}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                </div>
                                                            </td>
                                                            <td className="pe-4 text-center">
                                                                <div className="d-flex justify-content-center gap-2">
                                                                    {(pengajuan.status === "revisi" || pengajuan.status === "ditunda") && (
                                                                        <Link
                                                                            href={`/account/pengajuan/${pengajuan.id}/edit`}
                                                                            className="btn btn-primary btn-sm rounded-pill px-3 py-2"
                                                                            title="Edit Pengajuan"
                                                                        >
                                                                            <i className="fas fa-edit me-1"></i>
                                                                            Edit
                                                                        </Link>
                                                                    )}
                                                                    {(pengajuan.status === "setujui" || pengajuan.status === "dikirim" || pengajuan.status === "selesai") && (
                                                                        <Link
                                                                            href={`/account/pengajuan/${pengajuan.id}/edit`}
                                                                            className="btn btn-info btn-sm rounded-pill px-3 py-2"
                                                                            title="Lihat Detail"
                                                                        >
                                                                            <i className="fas fa-eye me-1"></i>
                                                                            Lihat
                                                                        </Link>
                                                                    )}
                                                                    {(pengajuan.status === "belum" || pengajuan.status === "revisi") && (
                                                                        <Delete
                                                                            URL={"/account/pengajuan"}
                                                                            id={pengajuan.id}
                                                                            className="btn btn-danger btn-sm rounded-pill px-3 py-2"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center py-5">
                                                            <div className="py-4">
                                                                <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
                                                                <h5 className="text-muted">Belum ada pengajuan</h5>
                                                                <p className="text-muted mb-3">
                                                                    {filter === "PAID" && isAllowedMonth()
                                                                        ? "Mulai dengan membuat pengajuan mutasi pertama Anda"
                                                                        : filter !== "PAID"
                                                                            ? "Anda perlu memiliki status PAID untuk membuat pengajuan mutasi"
                                                                            : "Saat ini bukan periode pengajuan. Tunggu bulan April, Agustus, atau November"
                                                                    }
                                                                </p>
                                                                {canCreateSubmission ? (
                                                                    <Link
                                                                        href="/account/pengajuan/create"
                                                                        className="btn btn-success px-4 py-2"
                                                                    >
                                                                        <i className="fas fa-plus-circle me-2"></i>
                                                                        Buat Pengajuan Baru
                                                                    </Link>
                                                                ) : (
                                                                    <button className="btn btn-secondary px-4 py-2" disabled>
                                                                        <i className="fas fa-ban me-2"></i>
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
                                </div>

                                {/* Pagination */}
                                {pengajuans.data.length > 0 && (
                                    <div className="card-footer bg-white border-0">
                                        <div className="d-flex justify-content-center">
                                            <Pagination
                                                links={pengajuans.links}
                                                align={"center"}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}