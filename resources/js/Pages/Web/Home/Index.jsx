//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component slider
import Slider from "../../../Components/Slider";

//import components
import Footer from "../../../Components/Footer";
import CardKegiatan from "../../../Shared/CardKegiatan";

export default function HomeIndex() {
    //destruct props
    const { auth, sliders, kegiatans = [] } = usePage().props;

    const menuItems = [
        {
            name: "Profil",
            subtitle: "Sejarah Organisasi",
            icon: "fas fa-university",
            gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            shadowColor: "rgba(37, 99, 235, 0.35)",
            href: "/history",
            badge: null,
            external: false,
        },
        {
            name: "Visi Misi",
            subtitle: "Tujuan IKATWI",
            icon: "fas fa-bullseye",
            gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
            shadowColor: "rgba(5, 150, 105, 0.35)",
            href: "/visimisi",
            badge: null,
            external: false,
        },
        {
            name: "Kegiatan",
            subtitle: "Agenda & Webinar",
            icon: "fas fa-calendar-alt",
            gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
            shadowColor: "rgba(124, 58, 237, 0.35)",
            href: "/kegiatan",
            badge: "Agenda",
            external: false,
        },
        {
            name: "Anggota",
            subtitle: "Database Terapis",
            icon: "fas fa-users",
            gradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
            shadowColor: "rgba(217, 119, 6, 0.35)",
            href: "/anggota",
            badge: null,
            external: false,
        },
        {
            name: "DPW",
            subtitle: "Pengurus Wilayah",
            icon: "fas fa-map-marked-alt",
            gradient: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
            shadowColor: "rgba(225, 29, 72, 0.35)",
            href: "/wilayah",
            badge: null,
            external: false,
        },
        {
            name: "DPC",
            subtitle: "Pengurus Cabang",
            icon: "fas fa-building",
            gradient: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
            shadowColor: "rgba(8, 145, 178, 0.35)",
            href: "/wilayahdpc",
            badge: null,
            external: false,
        },
        {
            name: "SIPORLIN",
            subtitle: "SKP Online KTKI",
            icon: "fas fa-laptop-medical",
            gradient: "linear-gradient(135deg, #4338ca 0%, #3730a3 100%)",
            shadowColor: "rgba(67, 56, 202, 0.35)",
            href: "https://ikatwisiporlin-ktki.kemkes.go.id/",
            badge: "KTKI",
            external: true,
        },
        {
            name: "SIDU Nakes",
            subtitle: "Portal Kemenkes",
            icon: "fas fa-id-card-alt",
            gradient: "linear-gradient(135deg, #15803d 0%, #166534 100%)",
            shadowColor: "rgba(21, 128, 61, 0.35)",
            href: "https://siedunakes-ktki.kemkes.go.id/home/",
            badge: "Kemkes",
            external: true,
        },
    ];

    return (
        <>
            <Head>
                <title>IKATWI - Ikatan Terapis Wicara Indonesia</title>
            </Head>
            <LayoutWeb>
                <div className="home-wrapper" style={{ paddingTop: '82px', paddingBottom: '70px', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
                    <div className="container" style={{ maxWidth: '960px' }}>
                        
                        {/* 1. Slider / Hero Banner */}
                        <Slider sliders={sliders} />

                        {/* 2. Section: 3D Member Digital Card (For Logged In Users) */}
                        {auth && auth.user ? (
                            <div className="mb-4">
                                <div
                                    className="card-3d-kta position-relative overflow-hidden text-white p-4 shadow-lg"
                                    style={{
                                        borderRadius: '24px',
                                        background: 'linear-gradient(135deg, #064e3b 0%, #047857 45%, #065f46 80%, #022c22 100%)',
                                        boxShadow: '0 16px 36px -8px rgba(5, 150, 105, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {/* Subtle Ambient Glow */}
                                    <div
                                        className="position-absolute top-0 end-0 w-100 h-100 pointer-events-none"
                                        style={{ background: 'radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)' }}
                                    ></div>

                                    {/* Card Header: Brand & Smart Chip */}
                                    <div className="d-flex justify-content-between align-items-center mb-3 position-relative z-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="bg-white rounded-circle p-1 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                                <img
                                                    src="/assets/images/logo.png"
                                                    alt="IKATWI"
                                                    style={{ width: '26px', height: '26px' }}
                                                />
                                            </div>
                                            <div>
                                                <div className="fw-bold text-white text-uppercase" style={{ fontSize: '0.76rem', letterSpacing: '0.06em', lineHeight: 1.15 }}>
                                                    IKATAN TERAPIS WICARA INDONESIA
                                                </div>
                                                <div className="text-white-50" style={{ fontSize: '0.64rem', letterSpacing: '0.04em' }}>
                                                    KARTU ANGGOTA DIGITAL (e-KTA)
                                                </div>
                                            </div>
                                        </div>

                                        {/* Smart Chip & Contactless */}
                                        <div className="d-flex align-items-center gap-2">
                                            <div
                                                className="emv-chip d-flex align-items-center justify-content-center shadow-sm"
                                                style={{
                                                    width: '38px',
                                                    height: '28px',
                                                    borderRadius: '6px',
                                                    background: 'linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)',
                                                    border: '1px solid #fde047',
                                                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                                                }}
                                            >
                                                <i className="fas fa-microchip text-dark" style={{ fontSize: '0.9rem', opacity: 0.8 }}></i>
                                            </div>
                                            <i className="fas fa-wifi fa-rotate-90 text-white-50" style={{ fontSize: '0.9rem' }}></i>
                                        </div>
                                    </div>

                                    {/* Card Body: User Info */}
                                    <div className="d-flex align-items-center gap-3 my-3 position-relative z-2">
                                        <div className="position-relative flex-shrink-0">
                                            <div
                                                className="rounded-circle p-1"
                                                style={{
                                                    background: 'linear-gradient(135deg, #fef08a, #10b981)',
                                                    boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                                                }}
                                            >
                                                <img
                                                    src={auth.user.image || "/assets/images/user.png"}
                                                    alt={auth.user.name}
                                                    className="rounded-circle object-fit-cover"
                                                    style={{ width: '60px', height: '60px', backgroundColor: '#ffffff', display: 'block' }}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "/assets/images/user.png";
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className="position-absolute bottom-0 end-0 rounded-circle d-flex align-items-center justify-content-center text-white"
                                                style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    backgroundColor: auth.user.no_anggota ? '#10b981' : '#f59e0b',
                                                    border: '2px solid #064e3b',
                                                    fontSize: '0.65rem',
                                                }}
                                            >
                                                <i className={`fas ${auth.user.no_anggota ? 'fa-check' : 'fa-clock'}`}></i>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden">
                                            <h5 className="fw-bold mb-1 text-truncate text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontSize: '1.08rem' }}>
                                                {auth.user.name}
                                            </h5>
                                            <div className="text-white-50 small mb-1.5 text-truncate" style={{ fontSize: '0.78rem' }}>
                                                <i className="fas fa-envelope me-1 opacity-75"></i>
                                                {auth.user.email}
                                            </div>
                                            <div
                                                className="d-inline-flex align-items-center gap-1.5 px-2.5 py-0.5 rounded-pill"
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                                    backdropFilter: 'blur(4px)',
                                                    fontSize: '0.72rem',
                                                    fontWeight: 600,
                                                    border: '1px solid rgba(255, 255, 255, 0.25)',
                                                }}
                                            >
                                                <span
                                                    className="rounded-circle"
                                                    style={{
                                                        width: '6px',
                                                        height: '6px',
                                                        backgroundColor: auth.user.no_anggota ? '#34d399' : '#fbbf24',
                                                        display: 'inline-block',
                                                    }}
                                                ></span>
                                                <span>{auth.user.no_anggota ? "Anggota Aktif" : "Menunggu Verifikasi"}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer: No Anggota & Button */}
                                    <div className="pt-2.5 border-top border-white border-opacity-15 d-flex justify-content-between align-items-end position-relative z-2">
                                        <div>
                                            <div className="text-white-50" style={{ fontSize: '0.64rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                Nomor Anggota IKATWI
                                            </div>
                                            <div className="font-monospace fw-bold text-white" style={{ fontSize: '1.05rem', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                                {auth.user.no_anggota || "BELUM TERBIT"}
                                            </div>
                                        </div>

                                        <Link
                                            href="/account/ekta"
                                            className="btn btn-sm text-white px-3.5 py-1.5 rounded-pill d-inline-flex align-items-center gap-1.5 shadow-sm"
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                                                backdropFilter: 'blur(8px)',
                                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                                fontSize: '0.78rem',
                                                fontWeight: 600,
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <span>Buka e-KTA</span>
                                            <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                                        </Link>
                                    </div>
                                </div>

                                {/* Quick Stat Chips Below Card */}
                                <div className="row g-2 mt-2">
                                    <div className="col-6 col-md-3">
                                        <div
                                            className="p-2.5 rounded-3 bg-white text-center d-flex flex-column align-items-center justify-content-center"
                                            style={{ border: '1.5px solid #cbd5e1', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.05)', minHeight: '70px' }}
                                        >
                                            <div className="d-flex align-items-center gap-1.5 mb-0.5">
                                                <i className="fas fa-user-md text-primary" style={{ fontSize: '0.95rem' }}></i>
                                                <span className="fw-bold" style={{ fontSize: '0.84rem', color: '#0f172a' }}>Terapis</span>
                                            </div>
                                            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>Profesi Resmi</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div
                                            className="p-2.5 rounded-3 bg-white text-center d-flex flex-column align-items-center justify-content-center"
                                            style={{ border: '1.5px solid #cbd5e1', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.05)', minHeight: '70px' }}
                                        >
                                            <div className="d-flex align-items-center gap-1.5 mb-0.5">
                                                <i className="fas fa-check-circle text-success" style={{ fontSize: '0.95rem' }}></i>
                                                <span className="fw-bold" style={{ fontSize: '0.84rem', color: '#0f172a' }}>
                                                    {auth.user.confirm === 'true' ? 'Terverifikasi' : 'Proses'}
                                                </span>
                                            </div>
                                            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>Status Berkas</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <Link
                                            href="/account/tagihan"
                                            className="p-2.5 rounded-3 bg-white text-center d-flex flex-column align-items-center justify-content-center text-decoration-none quick-stat-btn"
                                            style={{ border: '1.5px solid #cbd5e1', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.05)', minHeight: '70px', transition: 'all 0.2s ease' }}
                                        >
                                            <div className="d-flex align-items-center gap-1.5 mb-0.5">
                                                <i className="fas fa-file-invoice-dollar text-warning" style={{ fontSize: '0.95rem' }}></i>
                                                <span className="fw-bold" style={{ fontSize: '0.84rem', color: '#0f172a' }}>Iuran 2026</span>
                                            </div>
                                            <span className="fw-semibold" style={{ fontSize: '0.72rem', color: '#059669' }}>Cek Tagihan →</span>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <Link
                                            href="/account/dashboard"
                                            className="p-2.5 rounded-3 bg-white text-center d-flex flex-column align-items-center justify-content-center text-decoration-none quick-stat-btn"
                                            style={{ border: '1.5px solid #cbd5e1', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.05)', minHeight: '70px', transition: 'all 0.2s ease' }}
                                        >
                                            <div className="d-flex align-items-center gap-1.5 mb-0.5">
                                                <i className="fas fa-chart-pie text-info" style={{ fontSize: '0.95rem' }}></i>
                                                <span className="fw-bold" style={{ fontSize: '0.84rem', color: '#0f172a' }}>Dashboard</span>
                                            </div>
                                            <span className="fw-semibold" style={{ fontSize: '0.72rem', color: '#059669' }}>Buka Panel →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Guest Welcome Card */
                            <div
                                className="p-4 rounded-4 text-white mb-4 shadow-lg position-relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
                                    borderRadius: '24px',
                                    boxShadow: '0 16px 36px -8px rgba(5, 150, 105, 0.4)',
                                }}
                            >
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                                    <div>
                                        <h5 className="fw-bold mb-1">Selamat Datang di Portal IKATWI</h5>
                                        <p className="text-white-50 small mb-0">Masuk untuk mengakses e-KTA digital, status iuran, dan layanan profesi.</p>
                                    </div>
                                    <div className="d-flex gap-2 flex-shrink-0">
                                        <Link href="/login" className="btn btn-sm btn-light fw-bold px-3 py-2 rounded-pill shadow-sm" style={{ color: '#064e3b', fontSize: '0.82rem' }}>
                                            <i className="fas fa-sign-in-alt me-1"></i> Masuk
                                        </Link>
                                        <Link href="/register" className="btn btn-sm btn-outline-light fw-bold px-3 py-2 rounded-pill" style={{ fontSize: '0.82rem' }}>
                                            Daftar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. Section: 3D App Menu Utama (Squircle App Grid) */}
                        <div className="mb-4 mt-3 mt-sm-4 pt-1">
                            <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                                <div>
                                    <h5 className="fw-bold mb-0" style={{ color: '#0f172a', letterSpacing: '-0.02em', fontSize: '1.12rem' }}>
                                        <i className="fas fa-th-large text-success me-2"></i>
                                        Menu Utama
                                    </h5>
                                    <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>
                                        Akses cepat layanan & informasi resmi organisasi
                                    </span>
                                </div>
                                <span className="badge px-3 py-1.5 rounded-pill shadow-sm" style={{ backgroundColor: '#ecfdf5', color: '#047857', border: '1.5px solid #a7f3d0', fontSize: '0.78rem', fontWeight: 700 }}>
                                    <i className="fas fa-bolt me-1 text-warning"></i> 8 Layanan
                                </span>
                            </div>

                            {/* 3D App Grid: 2 columns on mobile, 4 columns on desktop with generous spacing */}
                            <div className="row gx-2.5 gy-3 gx-sm-3 gy-sm-3.5">
                                {menuItems.map((item, index) => {
                                    const CardContent = (
                                        <div
                                            className="app-3d-card card text-center h-100 position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center"
                                            style={{
                                                borderRadius: '20px',
                                                backgroundColor: '#ffffff',
                                                border: '1.5px solid #cbd5e1',
                                                boxShadow: '0 6px 18px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
                                                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                minHeight: '136px',
                                                padding: '24px 14px 18px 14px',
                                            }}
                                        >
                                            {/* Top Badge */}
                                            {item.badge && (
                                                <div
                                                    className="position-absolute top-0 end-0 m-2 badge rounded-pill shadow-sm"
                                                    style={{
                                                        backgroundColor: item.badge === 'Agenda' ? '#f59e0b' : item.badge === 'Kemkes' ? '#059669' : '#0284c7',
                                                        color: '#ffffff',
                                                        fontSize: '0.62rem',
                                                        fontWeight: 800,
                                                        letterSpacing: '0.03em',
                                                        padding: '3px 8px',
                                                        border: '1px solid rgba(255,255,255,0.4)',
                                                    }}
                                                >
                                                    {item.badge}
                                                </div>
                                            )}

                                            {/* 3D Squircle Icon Container */}
                                            <div
                                                className="app-3d-icon d-flex align-items-center justify-content-center mb-2.5 mt-1"
                                                style={{
                                                    width: '52px',
                                                    height: '52px',
                                                    borderRadius: '16px',
                                                    background: item.gradient,
                                                    boxShadow: `0 8px 20px -3px ${item.shadowColor}, inset 0 1px 1px rgba(255,255,255,0.5)`,
                                                    color: '#ffffff',
                                                    fontSize: '1.35rem',
                                                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                }}
                                            >
                                                <i className={item.icon}></i>
                                            </div>

                                            {/* Label */}
                                            <div className="card-item-title fw-bold w-100 text-truncate px-1" style={{ fontSize: '0.9rem', color: '#0f172a', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                                                {item.name}
                                            </div>
                                            <div className="card-item-subtitle w-100 text-truncate px-1 mt-0.5" style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
                                                {item.subtitle}
                                            </div>
                                        </div>
                                    );

                                    return (
                                        <div className="col-6 col-sm-6 col-md-3" key={index}>
                                            {item.external ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-decoration-none d-block h-100"
                                                >
                                                    {CardContent}
                                                </a>
                                            ) : (
                                                <Link href={item.href} className="text-decoration-none d-block h-100">
                                                    {CardContent}
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 5. Section: Jurnal Ilmiah JSLCR (Embedded Interactive Frame) */}
                        <div className="mb-4">
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-3 px-1">
                                <div>
                                    <div className="d-flex align-items-center gap-2">
                                        <h5 className="fw-bold mb-0 text-dark" style={{ letterSpacing: '-0.02em', fontSize: '1.08rem' }}>
                                            <i className="fas fa-book-reader text-success me-2"></i>
                                            Jurnal Ilmiah JSLCR
                                        </h5>
                                        <span className="badge rounded-pill" style={{ backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', fontSize: '0.68rem', fontWeight: 700 }}>
                                            Riset & Publikasi
                                        </span>
                                    </div>
                                    <span className="text-muted small" style={{ fontSize: '0.76rem' }}>
                                        Journal of Speech, Language and Communication Research — Publikasi Ilmiah Resmi IKATWI
                                    </span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <a
                                        href="https://jslcr.com/index.php/jslcr/about/submissions"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm btn-outline-success rounded-pill px-3 py-1 fw-semibold d-inline-flex align-items-center gap-1.5"
                                        style={{ fontSize: '0.74rem' }}
                                    >
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span>Submit Paper</span>
                                    </a>
                                    <a
                                        href="https://jslcr.com/index.php/jslcr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm text-white rounded-pill px-3 py-1 fw-semibold d-inline-flex align-items-center gap-1.5 shadow-sm"
                                        style={{ backgroundColor: '#059669', fontSize: '0.74rem' }}
                                    >
                                        <span>Buka Tab Baru</span>
                                        <i className="fas fa-external-link-alt" style={{ fontSize: '0.65rem' }}></i>
                                    </a>
                                </div>
                            </div>

                            {/* 3D Browser Mockup Window */}
                            <div
                                className="journal-browser-card card border-0 shadow-lg overflow-hidden"
                                style={{
                                    borderRadius: '20px',
                                    border: '1px solid #e2e8f0',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 16px 36px -8px rgba(5, 150, 105, 0.15), 0 4px 12px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                {/* Window Titlebar */}
                                <div
                                    className="d-flex align-items-center justify-content-between px-3 py-2.5"
                                    style={{
                                        backgroundColor: '#064e3b',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                                    }}
                                >
                                    {/* Mac OS Window Dots */}
                                    <div className="d-flex align-items-center gap-1.5">
                                        <span className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#ef4444' }}></span>
                                        <span className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#f59e0b' }}></span>
                                        <span className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#10b981' }}></span>
                                    </div>

                                    {/* Simulated URL Bar */}
                                    <div
                                        className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill flex-grow-1 mx-3"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                            maxWidth: '480px',
                                            fontSize: '0.74rem',
                                            color: '#a7f3d0',
                                            border: '1px solid rgba(255, 255, 255, 0.18)',
                                        }}
                                    >
                                        <i className="fas fa-lock text-warning" style={{ fontSize: '0.68rem' }}></i>
                                        <span className="text-white text-truncate font-monospace" style={{ fontSize: '0.72rem' }}>
                                            https://jslcr.com/index.php/jslcr
                                        </span>
                                    </div>

                                    {/* Direct Link Icon */}
                                    <a
                                        href="https://jslcr.com/index.php/jslcr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white-50 text-decoration-none hover-white"
                                        title="Kunjungi Web Jurnal"
                                    >
                                        <i className="fas fa-globe" style={{ fontSize: '0.9rem' }}></i>
                                    </a>
                                </div>

                                {/* Iframe Viewport */}
                                <div className="position-relative" style={{ width: '100%', minHeight: '520px', height: '580px', backgroundColor: '#f8fafc' }}>
                                    <iframe
                                        src="https://jslcr.com/index.php/jslcr"
                                        title="Jurnal JSLCR IKATWI"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            display: 'block',
                                        }}
                                        loading="lazy"
                                        allow="fullscreen"
                                    ></iframe>
                                </div>

                                {/* Window Bottom Status Bar */}
                                <div
                                    className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center px-3 py-2 bg-light border-top gap-1"
                                    style={{ fontSize: '0.72rem', color: '#64748b' }}
                                >
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fas fa-check-circle text-success"></i>
                                        <span>Peer-Reviewed & Open Access Scientific Journal</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <a href="https://jslcr.com/index.php/jslcr/issue/archive" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted hover-emerald">
                                            Arsip Edisi
                                        </a>
                                        <span>•</span>
                                        <a href="https://jslcr.com/index.php/jslcr/about/editorialTeam" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted hover-emerald">
                                            Dewan Redaksi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6. Footer */}
                        <Footer />

                    </div>
                </div>
            </LayoutWeb>

            <style jsx>{`
                .card-3d-kta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 44px -10px rgba(5, 150, 105, 0.45) !important;
                }

                .quick-stat-btn:hover {
                    transform: translateY(-2px);
                    border-color: #059669 !important;
                    box-shadow: 0 8px 18px -2px rgba(5, 150, 105, 0.15) !important;
                }

                .app-3d-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 16px 30px -6px rgba(5, 150, 105, 0.22), 0 4px 10px -2px rgba(0, 0, 0, 0.05) !important;
                    border-color: #059669 !important;
                }

                .app-3d-card:hover .card-item-title {
                    color: #047857 !important;
                }

                .app-3d-card:hover .app-3d-icon {
                    transform: scale(1.1) translateY(-2px) rotate(3deg);
                }

                .app-3d-card:active {
                    transform: scale(0.96);
                }
            `}</style>
        </>
    );
}