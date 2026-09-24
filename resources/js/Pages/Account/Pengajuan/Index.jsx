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

    // Fungsi untuk memeriksa apakah saat ini dalam jadwal uji coba anggota (Sabtu & Minggu, 26 - 27 September 2026)
    const isTrialPeriod = () => {
        const now = new Date();
        return now.getFullYear() === 2026 && (now.getMonth() + 1) === 9 && (now.getDate() === 26 || now.getDate() === 27);
    };

    // Fungsi untuk memeriksa apakah bulan saat ini termasuk dalam periode yang diizinkan
    const isAllowedMonth = () => {
        const currentMonth = new Date().getMonth() + 1; // January = 1, December = 12
        return currentMonth === 1 || currentMonth === 8 || currentMonth === 11 || isTrialPeriod(); // Januari, Agustus, November atau Uji Coba 26-27 September 2026
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
            setRestrictionMessage(`Pengajuan mutasi dibuka pada bulan Januari, Agustus, dan November, atau jadwal uji coba anggota (Sabtu & Minggu, 26 - 27 September 2026). Saat ini bulan ${currentMonth}`);
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
        return "Januari, Agustus, dan November (Khusus Uji Coba: 26 - 27 September 2026)";
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

    // Fungsi untuk mendapatkan style badge status (High Contrast Neo-Brutalist)
    const getStatusBadgeStyle = (status) => {
        switch (status) {
            case "selesai":
                return { backgroundColor: '#86efac', color: '#000000', border: '2px solid #000000' };
            case "dikirim":
                return { backgroundColor: '#93c5fd', color: '#000000', border: '2px solid #000000' };
            case "setujui":
                return { backgroundColor: '#86efac', color: '#000000', border: '2px solid #000000' };
            case "ditunda":
                return { backgroundColor: '#fef08a', color: '#000000', border: '2px solid #000000' };
            case "revisi":
                return { backgroundColor: '#fed7aa', color: '#000000', border: '2px solid #000000' };
            case "tolak":
            case "ditolak":
                return { backgroundColor: '#fca5a5', color: '#000000', border: '2px solid #000000' };
            default:
                return { backgroundColor: '#e2e8f0', color: '#000000', border: '2px solid #000000' };
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
                <style>{`
                    .neo-card {
                        background: #ffffff !important;
                        border: 2.5px solid #000000 !important;
                        border-radius: 14px !important;
                        box-shadow: 4px 4px 0px #000000 !important;
                        transition: all 0.15s ease-in-out;
                    }
                    .neo-card:hover {
                        transform: translate(-1px, -1px);
                        box-shadow: 5px 5px 0px #000000 !important;
                    }
                    .neo-badge {
                        display: inline-flex;
                        align-items: center;
                        border: 2px solid #000000 !important;
                        border-radius: 6px !important;
                        font-weight: 800 !important;
                        box-shadow: 2px 2px 0px #000000 !important;
                        line-height: 1.2;
                    }
                    .neo-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border: 2px solid #000000 !important;
                        border-radius: 8px !important;
                        font-weight: 800 !important;
                        box-shadow: 3px 3px 0px #000000 !important;
                        transition: all 0.1s ease;
                        text-decoration: none;
                        cursor: pointer;
                    }
                    .neo-btn:hover:not(:disabled) {
                        transform: translate(-1px, -1px);
                        box-shadow: 4px 4px 0px #000000 !important;
                    }
                    .neo-btn:active:not(:disabled) {
                        transform: translate(2px, 2px);
                        box-shadow: 1px 1px 0px #000000 !important;
                    }
                    .neo-btn-square {
                        border-radius: 8px !important;
                    }
                    .stat-card-neo {
                        background: #ffffff !important;
                        border: 2.5px solid #000000 !important;
                        border-radius: 14px !important;
                        box-shadow: 4px 4px 0px #000000 !important;
                        transition: all 0.15s ease-in-out;
                    }
                    .stat-card-neo:hover {
                        transform: translate(-2px, -2px);
                        box-shadow: 6px 6px 0px #000000 !important;
                    }
                    .stat-icon-neo {
                        width: 46px;
                        height: 46px;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 10px auto;
                        font-size: 1.2rem;
                        border: 2px solid #000000;
                        box-shadow: 2px 2px 0px #000000;
                    }
                    .stat-num-neo {
                        font-size: 2rem;
                        font-weight: 900;
                        line-height: 1.1;
                        color: #000000;
                    }
                    .stat-title-neo {
                        font-size: 0.75rem;
                        font-weight: 900;
                        letter-spacing: 0.5px;
                        text-transform: uppercase;
                        color: #000000;
                        margin-top: 6px;
                    }
                `}</style>
                <div className="container-fluid py-4">
                    {/* Header Section */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="neo-card p-3 px-4">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '48px',
                                                height: '48px',
                                                backgroundColor: '#2563eb',
                                                color: '#ffffff',
                                                border: '2px solid #000000',
                                                borderRadius: '12px',
                                                boxShadow: '2px 2px 0px #000000',
                                                fontSize: '1.25rem',
                                                flexShrink: 0
                                            }}>
                                            <i className="fas fa-exchange-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="mb-0 fw-bolder" style={{ color: '#000000', fontWeight: 900 }}>
                                                PENGAJUAN MUTASI
                                            </h4>
                                            <p className="mb-0 fw-bold" style={{ color: '#000000', fontSize: '0.85rem' }}>
                                                Kelola pengajuan pindah DPW dan DPC anggota IKATWI
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
                                        {canCreateSubmission ? (
                                            <div className="d-flex align-items-center justify-content-lg-end gap-2 flex-wrap">
                                                {isTrialPeriod() && (
                                                    <span className="neo-badge px-3 py-1.5" style={{ backgroundColor: '#93c5fd', color: '#000000', fontSize: '0.82rem' }}>
                                                        <i className="fas fa-flask me-1.5"></i> Uji Coba Terbuka
                                                    </span>
                                                )}
                                                <Link
                                                    href="/account/pengajuan/create"
                                                    className="neo-btn px-4 py-2"
                                                    style={{ backgroundColor: '#22c55e', color: '#000000', fontSize: '0.88rem' }}
                                                >
                                                    <i className="fas fa-plus-circle me-2"></i>
                                                    Buat Pengajuan Baru
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className="d-flex align-items-center justify-content-lg-end gap-2 flex-wrap">
                                                <span
                                                    className="neo-badge px-3 py-1.5"
                                                    style={{ backgroundColor: filter !== "PAID" ? '#fde047' : '#fca5a5', color: '#000000', fontSize: '0.82rem' }}
                                                    title={restrictionMessage}
                                                >
                                                    <i className={`fas ${filter !== "PAID" ? 'fa-exclamation-triangle' : 'fa-lock'} me-1.5`}></i>
                                                    {filter !== "PAID" ? "Perlu Status PAID" : "Pendaftaran Tutup"}
                                                </span>
                                                <button
                                                    className="neo-btn px-4 py-2"
                                                    disabled
                                                    title={restrictionMessage}
                                                    style={{ backgroundColor: '#f1f5f9', color: '#64748b', cursor: 'not-allowed', fontSize: '0.88rem' }}
                                                >
                                                    <i className="fas fa-ban me-2 text-danger"></i>
                                                    Buat Pengajuan Baru
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 mb-4">
                        {/* Card 1: Total Pengajuan */}
                        <div className="col">
                            <div className="stat-card-neo h-100 p-3 text-center">
                                <div className="stat-icon-neo" style={{ backgroundColor: '#dbeafe', color: '#1d4ed8' }}>
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="stat-num-neo">{pengajuans.total}</div>
                                <div className="stat-title-neo">Total Pengajuan</div>
                                <div className="mt-2">
                                    <span className="neo-badge px-2.5 py-1" style={{ backgroundColor: '#dbeafe', color: '#000000', fontSize: '0.72rem' }}>
                                        <i className="fas fa-history me-1"></i> Semua Pengajuan
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Bulan Ini */}
                        <div className="col">
                            <div className="stat-card-neo h-100 p-3 text-center">
                                <div className="stat-icon-neo" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <div className="stat-num-neo">{getCurrentMonthSubmissions()}</div>
                                <div className="stat-title-neo">Bulan Ini</div>
                                <div className="mt-2">
                                    <span className="neo-badge px-2.5 py-1" style={{ backgroundColor: '#dcfce7', color: '#000000', fontSize: '0.72rem' }}>
                                        <i className="fas fa-clock me-1"></i> Bulan Berjalan
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Sisa Kuota */}
                        <div className="col">
                            <div className="stat-card-neo h-100 p-3 text-center">
                                <div className="stat-icon-neo" style={{ backgroundColor: '#ccfbf1', color: '#0f766e' }}>
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                <div className="stat-num-neo">{isAllowedMonth() && filter === "PAID" ? limitInfo.remaining : 0}</div>
                                <div className="stat-title-neo">Sisa Kuota</div>
                                <div className="mt-2">
                                    <span className="neo-badge px-2.5 py-1" style={{ backgroundColor: '#ccfbf1', color: '#000000', fontSize: '0.72rem' }}>
                                        <i className="fas fa-chart-pie me-1"></i> Dari 3 Kuota
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Status Periode */}
                        <div className="col">
                            <div className="stat-card-neo h-100 p-3 text-center">
                                <div className="stat-icon-neo"
                                    style={{
                                        backgroundColor: isTrialPeriod() ? '#e0e7ff' : isAllowedMonth() ? '#dcfce7' : '#fee2e2',
                                        color: isTrialPeriod() ? '#4338ca' : isAllowedMonth() ? '#15803d' : '#dc2626'
                                    }}>
                                    <i className={`fas ${isTrialPeriod() ? 'fa-flask' : isAllowedMonth() ? 'fa-lock-open' : 'fa-lock'}`}></i>
                                </div>
                                <div className="stat-title-neo mt-0">Status Periode</div>
                                <div className="my-2">
                                    <span className="neo-badge px-2.5 py-1"
                                        style={{
                                            backgroundColor: isTrialPeriod() ? '#e0e7ff' : isAllowedMonth() ? '#dcfce7' : '#fee2e2',
                                            color: '#000000',
                                            fontSize: '0.74rem'
                                        }}>
                                        <i className={`fas ${isTrialPeriod() ? 'fa-flask' : isAllowedMonth() ? 'fa-check-circle' : 'fa-lock'} me-1`}></i>
                                        {isTrialPeriod() ? 'Uji Coba Buka' : isAllowedMonth() ? 'Periode Buka' : 'Periode Tutup'}
                                    </span>
                                </div>
                                <div className="fw-bolder" style={{ color: '#000000', fontSize: '0.78rem' }}>
                                    {isTrialPeriod() ? '26 - 27 Sept' : isAllowedMonth() ? 'Akses Terbuka' : 'Belum Dibuka'}
                                </div>
                            </div>
                        </div>

                        {/* Card 5: Status Anggota */}
                        <div className="col">
                            <div className="stat-card-neo h-100 p-3 text-center">
                                <div className="stat-icon-neo"
                                    style={{
                                        backgroundColor: filter === "PAID" ? '#dcfce7' : '#fef08a',
                                        color: filter === "PAID" ? '#15803d' : '#a16207'
                                    }}>
                                    <i className={`fas ${filter === "PAID" ? 'fa-user-check' : 'fa-user-clock'}`}></i>
                                </div>
                                <div className="stat-title-neo mt-0">Status Anggota</div>
                                <div className="my-2">
                                    <span className="neo-badge px-2.5 py-1"
                                        style={{
                                            backgroundColor: filter === "PAID" ? '#dcfce7' : '#fef08a',
                                            color: '#000000',
                                            fontSize: '0.74rem'
                                        }}>
                                        <i className={`fas ${filter === "PAID" ? 'fa-check-circle' : 'fa-exclamation-circle'} me-1`}></i>
                                        {filter === "PAID" ? 'Aktif (PAID)' : (name || 'Belum Aktif')}
                                    </span>
                                </div>
                                <div className="fw-bolder" style={{ color: '#000000', fontSize: '0.78rem' }}>
                                    {filter === "PAID" ? 'Iuran Lunas' : 'Perlu Status PAID'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Informasi Pembatasan */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="neo-card overflow-hidden">
                                <div className="p-3 px-4 d-flex align-items-center justify-content-between"
                                    style={{ borderBottom: '2.5px solid #000000', backgroundColor: '#ffffff' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{ width: '38px', height: '38px', backgroundColor: '#2563eb', color: '#ffffff', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000' }}>
                                            <i className="fas fa-info-circle"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bolder" style={{ color: '#000000', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.95rem' }}>
                                                INFORMASI PEMBATASAN PENGAJUAN
                                            </h6>
                                            <small className="fw-bold" style={{ color: '#000000' }}>
                                                Ketentuan jadwal pembukaan dan batas kuota mutasi anggota
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="neo-card p-3 h-100 d-flex align-items-start gap-3"
                                                style={{ border: '2px solid #000000', boxShadow: '3px 3px 0px #000000' }}>
                                                <div style={{ width: '6px', height: '36px', backgroundColor: '#2563eb', borderRadius: '4px', flexShrink: 0 }}></div>
                                                <div className="d-flex align-items-center justify-content-center"
                                                    style={{ width: '42px', height: '42px', backgroundColor: '#dbeafe', color: '#1d4ed8', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000', flexShrink: 0 }}>
                                                    <i className="fas fa-calendar-alt"></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-bolder" style={{ color: '#000000', fontWeight: 900, fontSize: '0.9rem' }}>
                                                        PERIODE PENGAJUAN RESMI
                                                    </h6>
                                                    <p className="mb-0" style={{ color: '#000000', fontSize: '0.88rem' }}>
                                                        Bulan: <strong>{getAllowedMonths()}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="neo-card p-3 h-100 d-flex align-items-start gap-3"
                                                style={{ border: '2px solid #000000', boxShadow: '3px 3px 0px #000000' }}>
                                                <div style={{ width: '6px', height: '36px', backgroundColor: '#16a34a', borderRadius: '4px', flexShrink: 0 }}></div>
                                                <div className="d-flex align-items-center justify-content-center"
                                                    style={{ width: '42px', height: '42px', backgroundColor: '#dcfce7', color: '#15803d', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000', flexShrink: 0 }}>
                                                    <i className="fas fa-chart-bar"></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-bolder" style={{ color: '#000000', fontWeight: 900, fontSize: '0.9rem' }}>
                                                        BATAS KUOTA PENGAJUAN
                                                    </h6>
                                                    <p className="mb-0" style={{ color: '#000000', fontSize: '0.88rem' }}>
                                                        Maksimal <strong>3 pengajuan</strong> per bulan
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    {isAllowedMonth() && filter === "PAID" && (
                                        <div className="mt-4 pt-3" style={{ borderTop: '2px solid #000000' }}>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <strong className="fw-bolder" style={{ color: '#000000', fontSize: '0.88rem' }}>
                                                    PENGGUNAAN KUOTA BULAN INI: {limitInfo.current} DARI {limitInfo.max}
                                                </strong>
                                                <span className="neo-badge px-3 py-1"
                                                    style={{ backgroundColor: limitInfo.remaining === 0 ? '#fca5a5' : '#86efac', color: '#000000', fontSize: '0.8rem' }}>
                                                    Sisa: {limitInfo.remaining} kuota
                                                </span>
                                            </div>
                                            <div style={{ height: "16px", borderRadius: "6px", backgroundColor: "#ffffff", border: '2px solid #000000', overflow: 'hidden' }}>
                                                <div
                                                    role="progressbar"
                                                    style={{
                                                        width: `${(limitInfo.current / limitInfo.max) * 100}%`,
                                                        height: '100%',
                                                        backgroundColor: limitInfo.current >= limitInfo.max ? '#ef4444' : '#22c55e',
                                                        borderRight: limitInfo.current > 0 ? '2px solid #000000' : 'none'
                                                    }}
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

                    {/* Alert Banner Section (Matching image 2) */}
                    {filter !== "PAID" && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="neo-card p-3 px-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
                                    style={{ backgroundColor: '#dc2626', color: '#ffffff' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{ width: '46px', height: '46px', backgroundColor: '#facc15', color: '#000000', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000', flexShrink: 0 }}>
                                            <i className="fas fa-exclamation-triangle fa-lg"></i>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                                                <h5 className="mb-0 fw-bolder text-white" style={{ fontSize: '1.05rem', letterSpacing: '0.3px' }}>
                                                    STATUS ANGGOTA:
                                                </h5>
                                                <span className="neo-badge px-3 py-1" style={{ backgroundColor: '#facc15', color: '#000000', fontSize: '0.82rem' }}>
                                                    {name || "Belum Aktif"}
                                                </span>
                                            </div>
                                            <p className="mb-0 fw-bold text-white" style={{ fontSize: '0.88rem' }}>
                                                Hanya anggota berstatus <strong>PAID</strong> yang dapat mengajukan mutasi. Selesaikan iuran Anda untuk membuka akses.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link
                                            href="/account/tagihan"
                                            className="neo-btn neo-btn-square px-3.5 py-2.5"
                                            style={{ backgroundColor: '#facc15', color: '#000000', fontSize: '0.88rem' }}
                                        >
                                            <i className="fas fa-receipt me-2"></i>
                                            Bayar Iuran Sekarang
                                            <i className="fas fa-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {filter === "PAID" && !isAllowedMonth() && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="neo-card p-3 px-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
                                    style={{ backgroundColor: '#0284c7', color: '#ffffff' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{ width: '46px', height: '46px', backgroundColor: '#facc15', color: '#000000', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000', flexShrink: 0 }}>
                                            <i className="fas fa-calendar-times fa-lg"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 fw-bolder text-white" style={{ fontSize: '1.05rem' }}>
                                                PERIODE PENGAJUAN SEDANG DITUTUP
                                            </h5>
                                            <p className="mb-0 fw-bold text-white" style={{ fontSize: '0.88rem' }}>
                                                {restrictionMessage}. Dibuka pada Januari, Agustus, November, atau sesi uji coba anggota.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <span className="neo-badge px-3 py-2" style={{ backgroundColor: '#facc15', color: '#000000', fontSize: '0.85rem' }}>
                                            <i className="fas fa-calendar-alt me-1.5"></i>
                                            Uji Coba: 26 - 27 Sept 2026
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {filter === "PAID" && isTrialPeriod() && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="neo-card p-3 px-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
                                    style={{ backgroundColor: '#16a34a', color: '#ffffff' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{ width: '46px', height: '46px', backgroundColor: '#facc15', color: '#000000', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000', flexShrink: 0 }}>
                                            <i className="fas fa-flask fa-lg"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 fw-bolder text-white" style={{ fontSize: '1.05rem' }}>
                                                SESI UJI COBA ANGGOTA SEDANG TERBUKA!
                                            </h5>
                                            <p className="mb-0 fw-bold text-white" style={{ fontSize: '0.88rem' }}>
                                                Pengajuan mutasi saat ini sedang dibuka khusus untuk <strong>Uji Coba Anggota (Sabtu & Minggu, 26 - 27 September 2026)</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link
                                            href="/account/pengajuan/create"
                                            className="neo-btn neo-btn-square px-3.5 py-2.5"
                                            style={{ backgroundColor: '#facc15', color: '#000000', fontSize: '0.88rem' }}
                                        >
                                            <i className="fas fa-plus-circle me-2"></i>
                                            Ajukan Pengajuan Sekarang
                                            <i className="fas fa-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {filter === "PAID" && isAllowedMonth() && limitInfo.remaining === 0 && (
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="neo-card p-3 px-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
                                    style={{ backgroundColor: '#dc2626', color: '#ffffff' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{ width: '46px', height: '46px', backgroundColor: '#facc15', color: '#000000', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000', flexShrink: 0 }}>
                                            <i className="fas fa-exclamation-circle fa-lg"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 fw-bolder text-white" style={{ fontSize: '1.05rem' }}>
                                                BATAS KUOTA PENGAJUAN TERCAPAI
                                            </h5>
                                            <p className="mb-0 fw-bold text-white" style={{ fontSize: '0.88rem' }}>
                                                {restrictionMessage}. Anda dapat membuat pengajuan lagi pada periode berikutnya ({getAllowedMonths()}).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Content: Table */}
                    <div className="row">
                        <div className="col-12">
                            <div className="neo-card overflow-hidden">
                                <div className="p-3 px-4 d-flex justify-content-between align-items-center"
                                    style={{ borderBottom: '2.5px solid #000000', backgroundColor: '#ffffff' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center"
                                            style={{ width: '38px', height: '38px', backgroundColor: '#2563eb', color: '#ffffff', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000' }}>
                                            <i className="fas fa-list-alt"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bolder" style={{ color: '#000000', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem' }}>
                                                DAFTAR PENGAJUAN MUTASI
                                            </h5>
                                            <small className="fw-bold" style={{ color: '#000000' }}>Riwayat dan status seluruh pengajuan anggota</small>
                                        </div>
                                    </div>
                                    <span className="neo-badge px-3 py-1.5"
                                        style={{ backgroundColor: '#dbeafe', color: '#000000', fontSize: '0.82rem' }}>
                                        {pengajuans.total} DATA
                                    </span>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead style={{ backgroundColor: '#f1f5f9', borderBottom: '2.5px solid #000000' }}>
                                                <tr>
                                                    <th className="ps-4 py-3 text-center" style={{ width: "5%", color: '#000000', fontWeight: 900, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                                                        No.
                                                    </th>
                                                    <th className="py-3" style={{ width: "22%", color: '#000000', fontWeight: 900, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                                                        <i className="fas fa-user me-2 text-primary"></i>
                                                        Pengaju
                                                    </th>
                                                    <th className="py-3" style={{ width: "28%", color: '#000000', fontWeight: 900, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                                                        <i className="fas fa-sticky-note me-2 text-primary"></i>
                                                        Keterangan
                                                    </th>
                                                    <th className="py-3 text-center" style={{ width: "25%", color: '#000000', fontWeight: 900, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                                                        <i className="fas fa-info-circle me-2 text-primary"></i>
                                                        Status
                                                    </th>
                                                    <th className="pe-4 py-3 text-center" style={{ width: "20%", color: '#000000', fontWeight: 900, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                                                        <i className="fas fa-cogs me-2 text-primary"></i>
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pengajuans.data.length > 0 ? (
                                                    pengajuans.data.map((pengajuan, index) => (
                                                        <tr key={pengajuan.id} style={{ borderBottom: '2px solid #000000' }}>
                                                            <td className="ps-4 text-center fw-bolder" style={{ color: '#000000', fontSize: '0.95rem' }}>
                                                                {++index +
                                                                    (pengajuans.current_page - 1) *
                                                                    pengajuans.per_page}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="d-flex align-items-center justify-content-center me-3"
                                                                        style={{ width: '40px', height: '40px', backgroundColor: '#dbeafe', color: '#1d4ed8', border: '2px solid #000000', borderRadius: '10px', boxShadow: '2px 2px 0px #000000' }}>
                                                                        <i className="fas fa-user"></i>
                                                                    </div>
                                                                    <div>
                                                                        <h6 className="mb-0 fw-bolder" style={{ color: '#000000' }}>{pengajuan.name}</h6>
                                                                        <small className="fw-bold" style={{ color: '#000000' }}>
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
                                                                <p className="mb-0 fw-semibold" style={{ color: '#000000', fontSize: '0.85rem' }}>
                                                                    {pengajuan.keterangan || "-"}
                                                                </p>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="d-flex flex-column align-items-center">
                                                                    <span className="neo-badge px-3 py-1.5 mb-1" style={getStatusBadgeStyle(pengajuan.status)}>
                                                                        <i className={`${getStatusIcon(pengajuan.status)} me-1.5`}></i>
                                                                        {getStatusText(pengajuan.status)}
                                                                    </span>
                                                                    <small className="fw-bold text-center" style={{ fontSize: '0.75rem', color: '#000000' }}>
                                                                        {getStatusDescription(pengajuan.status)}
                                                                    </small>
                                                                    {(pengajuan.status === "revisi" || pengajuan.status === "tolak" || pengajuan.status === "ditunda" || pengajuan.status === "ditolak") &&
                                                                        pengajuan.keterangan_revisi && (
                                                                            <div className="mt-2 w-100">
                                                                                <div className="py-1 px-2 fw-bold small mb-0 text-start"
                                                                                    style={{ backgroundColor: '#fef08a', color: '#000000', border: '1.5px solid #000000', borderRadius: '6px' }}>
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
                                                                            className="neo-btn neo-btn-square px-3 py-1.5"
                                                                            style={{ backgroundColor: '#60a5fa', color: '#000000', fontSize: '0.8rem' }}
                                                                            title="Edit Pengajuan"
                                                                        >
                                                                            <i className="fas fa-edit me-1"></i>
                                                                            Edit
                                                                        </Link>
                                                                    )}
                                                                    {(pengajuan.status === "setujui" || pengajuan.status === "dikirim" || pengajuan.status === "selesai") && (
                                                                        <Link
                                                                            href={`/account/pengajuan/${pengajuan.id}/edit`}
                                                                            className="neo-btn neo-btn-square px-3 py-1.5"
                                                                            style={{ backgroundColor: '#67e8f9', color: '#000000', fontSize: '0.8rem' }}
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
                                                                            className="neo-btn neo-btn-square px-3 py-1.5 text-white"
                                                                            style={{ backgroundColor: '#ef4444' }}
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
                                                                <div className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                                                    style={{ width: '64px', height: '64px', backgroundColor: '#f1f5f9', color: '#000000', border: '2.5px solid #000000', borderRadius: '16px', boxShadow: '3px 3px 0px #000000' }}>
                                                                    <i className="fas fa-inbox fa-2x"></i>
                                                                </div>
                                                                <h5 className="fw-bolder mb-1" style={{ color: '#000000', fontWeight: 900 }}>
                                                                    BELUM ADA PENGAJUAN MUTASI
                                                                </h5>
                                                                <p className="fw-bold mb-3 mx-auto" style={{ maxWidth: '440px', color: '#000000', fontSize: '0.88rem' }}>
                                                                    {filter === "PAID" && isAllowedMonth()
                                                                        ? "Mulai dengan membuat pengajuan mutasi pertama Anda."
                                                                        : filter !== "PAID"
                                                                            ? "Anda perlu memiliki status PAID untuk membuat pengajuan mutasi."
                                                                            : "Saat ini bukan periode pengajuan. Tunggu bulan Januari, Agustus, November, atau jadwal uji coba (26 - 27 September 2026)."
                                                                    }
                                                                </p>
                                                                {canCreateSubmission ? (
                                                                    <Link
                                                                        href="/account/pengajuan/create"
                                                                        className="neo-btn px-4 py-2"
                                                                        style={{ backgroundColor: '#22c55e', color: '#000000', fontSize: '0.9rem' }}
                                                                    >
                                                                        <i className="fas fa-plus-circle me-2"></i>
                                                                        Buat Pengajuan Baru
                                                                    </Link>
                                                                ) : (
                                                                    <button
                                                                        className="neo-btn px-4 py-2"
                                                                        disabled
                                                                        style={{ backgroundColor: '#e2e8f0', color: '#64748b', cursor: 'not-allowed', fontSize: '0.9rem' }}
                                                                    >
                                                                        <i className="fas fa-ban me-2 text-danger"></i>
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
                                    <div className="card-footer bg-white py-3" style={{ borderTop: '2.5px solid #000000' }}>
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