import React from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Pagination from "../../../Shared/Pagination";
import Search from "../../../Shared/Search";

export default function KegiatanIndex() {
    const { kegiatans } = usePage().props;

    return (
        <>
            <Head>
                <title>Agenda &amp; Kegiatan - Ikatan Terapis Wicara Indonesia (IKATWI)</title>
                <meta
                    name="description"
                    content="Daftar agenda kegiatan, seminar ilmiah, workshop, dan event resmi Ikatan Terapis Wicara Indonesia."
                />
            </Head>
            <LayoutWeb>
                <div className="agenda-page-wrapper">
                    {/* Floating Decorative Glow Orbs */}
                    <div className="bg-glow-orb bg-glow-1"></div>
                    <div className="bg-glow-orb bg-glow-2"></div>

                    <div className="container py-5 position-relative" style={{ marginTop: "40px", marginBottom: "60px" }}>
                        {/* Hero Header */}
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-12 col-lg-8">
                                <div className="d-inline-flex align-items-center gap-2 px-3.5 py-1.5 rounded-2 mb-3 hero-tag-badge shadow-sm">
                                    <i className="fa fa-calendar-alt text-emerald-600"></i>
                                    <span className="fw-bold fs-7 text-emerald-800">Agenda &amp; Acara Resmi IKATWI</span>
                                </div>
                                <h1 className="display-5 fw-extrabold text-slate-900 mb-3 hero-main-title">
                                    Agenda <span className="gradient-text-emerald">Kegiatan</span>
                                </h1>
                                <p className="text-slate-600 fs-6 mx-auto mb-0 hero-subtitle" style={{ maxWidth: "620px" }}>
                                    Temukan informasi jadwal seminar, lokakarya ilmiah, pelatihan P2KB, serta berbagai agenda kegiatan resmi yang diselenggarakan oleh IKATWI.
                                </p>
                            </div>
                        </div>

                        {/* Search Toolbar (Kotak Rapi) */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-md-8 col-lg-6">
                                <Search URL={"/kegiatan"} />
                            </div>
                        </div>

                        {/* Events Grid or Empty State */}
                        <div className="row g-4 mb-5">
                            {kegiatans?.data && kegiatans.data.length > 0 ? (
                                kegiatans.data.map((kegiatan, index) => {
                                    const hasLink = kegiatan.link && kegiatan.link.trim() !== "";
                                    const isExternal = hasLink && kegiatan.link.startsWith("http");
                                    const targetUrl = hasLink
                                        ? isExternal
                                            ? kegiatan.link
                                            : `https://${kegiatan.link}`
                                        : "#";

                                    return (
                                        <div key={index} className="col-12 col-md-6 col-lg-4">
                                            <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden agenda-card">
                                                {/* Image Thumbnail Container */}
                                                <div className="agenda-img-box position-relative overflow-hidden">
                                                    <img
                                                        src={kegiatan.image}
                                                        alt={kegiatan.name}
                                                        className="agenda-img w-100 h-100 object-fit-cover"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = "/assets/images/logo.png";
                                                        }}
                                                    />
                                                    <div className="position-absolute top-0 start-0 m-3">
                                                        <span className="badge bg-emerald-600 text-white rounded-2 px-2.5 py-1.5 small fw-bold shadow-sm">
                                                            <i className="fa fa-calendar-check me-1"></i> Agenda IKATWI
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Card Body */}
                                                <div className="card-body p-4 d-flex flex-column justify-content-between">
                                                    <div>
                                                        <h5 className="fw-bold text-slate-900 mb-2.5 agenda-title lh-base">
                                                            {kegiatan.name}
                                                        </h5>
                                                        <p className="text-slate-500 small mb-4 lh-sm">
                                                            Kegiatan resmi Ikatan Terapis Wicara Indonesia. Klik tombol di bawah untuk melihat rincian &amp; pendaftaran.
                                                        </p>
                                                    </div>

                                                    {/* Card Footer / Action */}
                                                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                                                        <span className="text-slate-400 small" style={{ fontSize: "0.75rem" }}>
                                                            <i className="fa fa-info-circle me-1"></i> Informasi Acara
                                                        </span>

                                                        {hasLink ? (
                                                            <a
                                                                href={targetUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn btn-sm btn-action-agenda rounded-2 px-3 py-1.5 fw-bold shadow-sm d-inline-flex align-items-center gap-1.5"
                                                            >
                                                                <span>Buka Link</span>
                                                                <i className="fa fa-arrow-up-right-from-square"></i>
                                                            </a>
                                                        ) : (
                                                            <span className="badge bg-slate-100 text-slate-500 rounded-2 px-2.5 py-1.5 small">
                                                                Link Segera Hadir
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                /* Empty State */
                                <div className="col-12">
                                    <div className="card border-0 rounded-4 shadow-sm p-5 text-center bg-white empty-agenda-box">
                                        <div className="empty-icon-circle mx-auto mb-3.5 shadow-sm">
                                            <i className="fa fa-calendar-times text-emerald-600 fa-2x"></i>
                                        </div>
                                        <h4 className="fw-extrabold text-slate-900 mb-2">
                                            Belum Ada Agenda Kegiatan
                                        </h4>
                                        <p className="text-slate-500 mx-auto small mb-4" style={{ maxWidth: "480px" }}>
                                            Saat ini belum ada jadwal agenda kegiatan yang dipublikasikan atau cocok dengan kata kunci pencarian Anda. Silakan cek kembali secara berkala.
                                        </p>
                                        <div className="d-flex justify-content-center gap-2">
                                            <Link
                                                href="/"
                                                className="btn btn-outline-secondary rounded-2 px-4 py-2 small fw-semibold"
                                            >
                                                <i className="fa fa-home me-1.5"></i> Kembali ke Beranda
                                            </Link>
                                            <Link
                                                href="/wilayah"
                                                className="btn btn-emerald-action rounded-2 px-4 py-2 small fw-bold text-white shadow-sm"
                                            >
                                                <i className="fa fa-map-marked-alt me-1.5"></i> Lihat Wilayah DPW
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {kegiatans?.data && kegiatans.data.length > 0 && (
                            <div className="d-flex justify-content-center mt-4">
                                <Pagination links={kegiatans.links} align="center" />
                            </div>
                        )}
                    </div>
                </div>

                <style jsx>{`
                    .agenda-page-wrapper {
                        position: relative;
                        overflow: hidden;
                        background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                        min-height: 100vh;
                    }

                    /* Floating Decorative Glow */
                    .bg-glow-orb {
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(80px);
                        opacity: 0.4;
                        pointer-events: none;
                        z-index: 0;
                    }
                    .bg-glow-1 {
                        width: 450px;
                        height: 450px;
                        top: 5%;
                        left: -120px;
                        background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.05) 70%);
                    }
                    .bg-glow-2 {
                        width: 450px;
                        height: 450px;
                        top: 25%;
                        right: -120px;
                        background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.05) 70%);
                    }

                    .text-slate-900 { color: #0f172a !important; }
                    .text-slate-800 { color: #1e293b !important; }
                    .text-slate-700 { color: #334155 !important; }
                    .text-slate-600 { color: #475569 !important; }
                    .text-slate-500 { color: #64748b !important; }
                    .text-slate-400 { color: #94a3b8 !important; }
                    .text-emerald-800 { color: #065f46 !important; }
                    .bg-emerald-600 { background-color: #059669 !important; }

                    .fs-7 { font-size: 0.82rem; }

                    .gradient-text-emerald {
                        background: linear-gradient(135deg, #059669 0%, #0284c7 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .hero-tag-badge {
                        background-color: #ffffff;
                        color: #047857;
                        border: 1.5px solid #a7f3d0;
                    }

                    /* Agenda Cards */
                    .agenda-card {
                        background-color: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                        transition: all 0.25s ease;
                    }
                    .agenda-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08) !important;
                        border-color: #94a3b8 !important;
                    }

                    .agenda-img-box {
                        height: 200px;
                        background-color: #f1f5f9;
                    }
                    .agenda-img {
                        transition: transform 0.4s ease;
                    }
                    .agenda-card:hover .agenda-img {
                        transform: scale(1.05);
                    }

                    .agenda-title {
                        font-size: 1.05rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .btn-action-agenda {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-action-agenda:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }

                    /* Empty State Box */
                    .empty-agenda-box {
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .empty-icon-circle {
                        width: 72px;
                        height: 72px;
                        border-radius: 20px;
                        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                        border: 1.5px solid #a7f3d0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .btn-emerald-action {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-emerald-action:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }
                `}</style>
            </LayoutWeb>
        </>
    );
}
