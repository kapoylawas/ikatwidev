import React from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, Link } from "@inertiajs/inertia-react";

export default function VisiMisiIndex() {
    return (
        <>
            <Head>
                <title>Visi &amp; Misi - Ikatan Terapis Wicara Indonesia (IKATWI)</title>
                <meta name="description" content="Visi, Misi, dan Nilai-Nilai Luhur Ikatan Terapis Wicara Indonesia (IKATWI)." />
            </Head>
            <LayoutWeb>
                <div className="visimisi-page-wrapper">
                    {/* Background Decorative Mesh Gradients */}
                    <div className="bg-glow-orb bg-glow-1"></div>
                    <div className="bg-glow-orb bg-glow-2"></div>
                    <div className="bg-glow-orb bg-glow-3"></div>

                    <div className="container py-5 position-relative" style={{ marginTop: "40px", marginBottom: "60px" }}>
                        {/* Hero Header */}
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-12 col-lg-9">
                                <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-2 mb-3 hero-tag-badge shadow-sm">
                                    <span className="pulse-dot"></span>
                                    <span className="fw-bold fs-7 text-emerald-800">Arah &amp; Tujuan Strategis Organisasi</span>
                                </div>
                                <h1 className="display-5 fw-extrabold text-slate-900 mb-3 hero-main-title">
                                    Visi, Misi &amp; Nilai Luhur <span className="gradient-text-emerald">IKATWI</span>
                                </h1>
                                <p className="text-slate-600 fs-6 mx-auto mb-0 hero-subtitle">
                                    Meneguhkan dedikasi dan profesionalisme Ikatan Terapis Wicara Indonesia dalam membangun masa depan pelayanan kesehatan komunikasi, bicara, bahasa, suara, dan menelan yang berstandar unggul di Indonesia.
                                </p>
                            </div>
                        </div>

                        {/* Grand Vision Showcase Card */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-lg-11">
                                <div className="card border-0 rounded-4 shadow-lg overflow-hidden grand-vision-card">
                                    <div className="grand-vision-bg-pattern"></div>
                                    <div className="card-body p-4 p-md-5 position-relative z-1">
                                        
                                        {/* Card Top Badges (Kotak / Rectangular) */}
                                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                                            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-2 vision-badge-box">
                                                <i className="fa fa-bullseye text-emerald-400"></i>
                                                <span className="fw-extrabold text-uppercase text-white letter-spacing-1 fs-7">
                                                    Visi Utama Organisasi
                                                </span>
                                            </div>
                                            
                                            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-2 vision-tag-right">
                                                <i className="fa fa-compass text-emerald-300"></i>
                                                <span className="text-white small fw-bold">
                                                    Orientasi Strategis IKATWI
                                                </span>
                                            </div>
                                        </div>

                                        {/* Vision Statement Quote */}
                                        <div className="vision-statement-box mb-4 text-center py-3">
                                            <i className="fa fa-quote-left quote-watermark-left d-none d-md-inline-block"></i>
                                            <h2 className="vision-quote-text fw-extrabold text-white mb-0 lh-base">
                                                "Mewujudkan IKATWI sebagai wadah organisasi yang berorientasikan pada{" "}
                                                <span className="highlight-pill highlight-blue">Transparansi</span>,{" "}
                                                <span className="highlight-pill highlight-emerald">Akuntabilitas</span>,{" "}
                                                <span className="highlight-pill highlight-amber">Kualitas</span>, dan{" "}
                                                <span className="highlight-pill highlight-cyan">Keilmuan Terapi Wicara</span>."
                                            </h2>
                                            <i className="fa fa-quote-right quote-watermark-right d-none d-md-inline-block"></i>
                                        </div>

                                        {/* 4 Pillars Grid inside Vision */}
                                        <div className="row g-3 pt-3 border-top border-white border-opacity-15">
                                            {/* Pillar 1 */}
                                            <div className="col-12 col-sm-6 col-lg-3">
                                                <div className="pillar-item-card h-100 p-3.5 rounded-3">
                                                    <div className="pillar-icon-box icon-blue mb-2.5">
                                                        <i className="fa fa-eye"></i>
                                                    </div>
                                                    <h6 className="fw-bold text-white mb-1.5 fs-6">Transparansi</h6>
                                                    <p className="pillar-desc mb-0 lh-sm">
                                                        Keterbukaan informasi kebijakan, program kerja, dan layanan bagi seluruh anggota secara inklusif.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Pillar 2 */}
                                            <div className="col-12 col-sm-6 col-lg-3">
                                                <div className="pillar-item-card h-100 p-3.5 rounded-3">
                                                    <div className="pillar-icon-box icon-emerald mb-2.5">
                                                        <i className="fa fa-scale-balanced"></i>
                                                    </div>
                                                    <h6 className="fw-bold text-white mb-1.5 fs-6">Akuntabilitas</h6>
                                                    <p className="pillar-desc mb-0 lh-sm">
                                                        Tata kelola organisasi yang bertanggung jawab, beretika tinggi, dan taat asas regulasi.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Pillar 3 */}
                                            <div className="col-12 col-sm-6 col-lg-3">
                                                <div className="pillar-item-card h-100 p-3.5 rounded-3">
                                                    <div className="pillar-icon-box icon-amber mb-2.5">
                                                        <i className="fa fa-award"></i>
                                                    </div>
                                                    <h6 className="fw-bold text-white mb-1.5 fs-6">Kualitas</h6>
                                                    <p className="pillar-desc mb-0 lh-sm">
                                                        Standarisasi mutu pelayanan klinis dan keahlian terapis wicara yang unggul dan terpercaya.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Pillar 4 */}
                                            <div className="col-12 col-sm-6 col-lg-3">
                                                <div className="pillar-item-card h-100 p-3.5 rounded-3">
                                                    <div className="pillar-icon-box icon-cyan mb-2.5">
                                                        <i className="fa fa-brain"></i>
                                                    </div>
                                                    <h6 className="fw-bold text-white mb-1.5 fs-6">Keilmuan</h6>
                                                    <p className="pillar-desc mb-0 lh-sm">
                                                        Pengembangan riset medis, inovasi klinis, dan praktik berbasis bukti ilmiah (EBP).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Missions Section */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-lg-11">
                                <div className="text-center mb-4">
                                    <span className="badge-section-box mb-2">
                                        <i className="fa fa-rocket me-1.5 text-emerald-600"></i> Langkah &amp; Strategi Aksi
                                    </span>
                                    <h3 className="fw-extrabold text-slate-900 fs-3 mb-2" style={{ letterSpacing: "-0.02em" }}>
                                        Misi Pembangunan Organisasi
                                    </h3>
                                    <p className="text-slate-500 small mx-auto" style={{ maxWidth: "600px" }}>
                                        Langkah terukur dan terarah IKATWI dalam memajukan profesi dan melindungi kepentingan praktisi terapis wicara di Indonesia.
                                    </p>
                                </div>

                                <div className="row g-4">
                                    {/* Mission 1 */}
                                    <div className="col-12 col-md-6">
                                        <div className="card h-100 border-0 rounded-4 shadow-sm p-4 mission-card-epic">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="mission-number-badge">01</div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                        <div className="mission-icon-circle icon-indigo">
                                                            <i className="fa-solid fa-arrows-rotate"></i>
                                                        </div>
                                                        <span className="badge-mission-tag text-indigo-700 bg-indigo-50 border-indigo-200">
                                                            TATA KELOLA MODERN
                                                        </span>
                                                    </div>
                                                    <h5 className="fw-bold text-slate-900 mb-2">Transformasi Tata Kelola Organisasi</h5>
                                                    <p className="text-slate-600 mb-0 small lh-base">
                                                        Melakukan transformasi menyeluruh terhadap sistem tata kelola organisasi yang adaptif, berbasis digital, dan terintegrasi secara harmonis mulai dari tingkat Dewan Pengurus Pusat (DPP), Wilayah (DPW), hingga Cabang (DPC).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mission 2 */}
                                    <div className="col-12 col-md-6">
                                        <div className="card h-100 border-0 rounded-4 shadow-sm p-4 mission-card-epic">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="mission-number-badge">02</div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                        <div className="mission-icon-circle icon-emerald">
                                                            <i className="fa-solid fa-gavel"></i>
                                                        </div>
                                                        <span className="badge-mission-tag text-emerald-700 bg-emerald-50 border-emerald-200">
                                                            ASPEK HUKUM &amp; REGULASI
                                                        </span>
                                                    </div>
                                                    <h5 className="fw-bold text-slate-900 mb-2">Penguatan Legalitas &amp; Perlindungan Profesi</h5>
                                                    <p className="text-slate-600 mb-0 small lh-base">
                                                        Menguatkan aspek legal organisasi, standardisasi penerbitan STR/SIP, kepastian hukum praktik, serta membangun advokasi dan kemitraan strategis dengan Kementerian Kesehatan dan lembaga terkait.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mission 3 */}
                                    <div className="col-12 col-md-6">
                                        <div className="card h-100 border-0 rounded-4 shadow-sm p-4 mission-card-epic">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="mission-number-badge">03</div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                        <div className="mission-icon-circle icon-amber">
                                                            <i className="fa-solid fa-graduation-cap"></i>
                                                        </div>
                                                        <span className="badge-mission-tag text-amber-700 bg-amber-50 border-amber-200">
                                                            P2KB &amp; RISET KLINIS
                                                        </span>
                                                    </div>
                                                    <h5 className="fw-bold text-slate-900 mb-2">Pendidikan Berkelanjutan &amp; Kompetensi</h5>
                                                    <p className="text-slate-600 mb-0 small lh-base">
                                                        Menyelenggarakan program Pengembangan Keprofesian Berkelanjutan (P2KB), seminar ilmiah, workshop spesialisasi klinis, dan mendorong penelitian terapi wicara terapan di Indonesia.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mission 4 */}
                                    <div className="col-12 col-md-6">
                                        <div className="card h-100 border-0 rounded-4 shadow-sm p-4 mission-card-epic">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="mission-number-badge">04</div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                        <div className="mission-icon-circle icon-rose">
                                                            <i className="fa-solid fa-hand-holding-heart"></i>
                                                        </div>
                                                        <span className="badge-mission-tag text-rose-700 bg-rose-50 border-rose-200">
                                                            PENGABDIAN MASYARAKAT
                                                        </span>
                                                    </div>
                                                    <h5 className="fw-bold text-slate-900 mb-2">Pengabdian Masyarakat &amp; Edukasi Publik</h5>
                                                    <p className="text-slate-600 mb-0 small lh-base">
                                                        Meningkatkan kesadaran masyarakat mengenai pentingnya deteksi dini dan penanganan gangguan bahasa, bicara, suara, irama kelancaran, serta gangguan menelan (disfagia) secara inklusif.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Core Values / Nilai Luhur */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-lg-11">
                                <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5 core-values-card">
                                    <div className="row align-items-center mb-4">
                                        <div className="col-12 col-md-7">
                                            <span className="badge-section-box mb-2">
                                                <i className="fa fa-gem me-1.5 text-blue-600"></i> Budaya &amp; Karakter
                                            </span>
                                            <h3 className="fw-extrabold text-slate-900 fs-4 mb-1">
                                                Nilai-Nilai Utama (Core Values)
                                            </h3>
                                            <p className="text-slate-500 small mb-0">
                                                Prinsip etis yang menjadi pedoman seluruh anggota IKATWI dalam bertindak dan melayani.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row g-3">
                                        {/* Value 1 */}
                                        <div className="col-6 col-lg-3">
                                            <div className="value-mini-box p-3 rounded-3 h-100">
                                                <div className="value-icon mb-2">
                                                    <i className="fa fa-shield-heart text-emerald-600"></i>
                                                </div>
                                                <h6 className="fw-bold text-slate-900 mb-1">Integritas</h6>
                                                <p className="text-slate-500 small mb-0 lh-sm">
                                                    Jujur, etis, dan memegang teguh sumpah kode etik profesi.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Value 2 */}
                                        <div className="col-6 col-lg-3">
                                            <div className="value-mini-box p-3 rounded-3 h-100">
                                                <div className="value-icon mb-2">
                                                    <i className="fa fa-user-doctor text-blue-600"></i>
                                                </div>
                                                <h6 className="fw-bold text-slate-900 mb-1">Profesionalisme</h6>
                                                <p className="text-slate-500 small mb-0 lh-sm">
                                                    Berkompetensi tinggi dan berdedikasi melayani pasien terbaik.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Value 3 */}
                                        <div className="col-6 col-lg-3">
                                            <div className="value-mini-box p-3 rounded-3 h-100">
                                                <div className="value-icon mb-2">
                                                    <i className="fa fa-people-group text-purple-600"></i>
                                                </div>
                                                <h6 className="fw-bold text-slate-900 mb-1">Kolaborasi</h6>
                                                <p className="text-slate-500 small mb-0 lh-sm">
                                                    Sinergis dengan tenaga medis, akademisi, dan masyarakat.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Value 4 */}
                                        <div className="col-6 col-lg-3">
                                            <div className="value-mini-box p-3 rounded-3 h-100">
                                                <div className="value-icon mb-2">
                                                    <i className="fa fa-lightbulb text-amber-600"></i>
                                                </div>
                                                <h6 className="fw-bold text-slate-900 mb-1">Inovasi</h6>
                                                <p className="text-slate-500 small mb-0 lh-sm">
                                                    Terus belajar, berkembang, dan menerapkan riset terkini.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Commitment & CTA Banner */}
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-11">
                                <div className="card border-0 rounded-4 shadow-lg commitment-banner-card overflow-hidden text-white p-4 p-md-5 text-center">
                                    <div className="commitment-watermark">
                                        <i className="fa fa-heart-pulse"></i>
                                    </div>
                                    <div className="position-relative z-1">
                                        <div className="d-inline-flex align-items-center justify-content-center commitment-icon-badge mb-3 shadow">
                                            <i className="fa fa-heart text-white fs-4"></i>
                                        </div>
                                        <h3 className="fw-extrabold text-white mb-2 fs-3">
                                            Komitmen Kami untuk Negeri
                                        </h3>
                                        <p className="commitment-subtitle-text fs-6 mx-auto mb-4" style={{ maxWidth: "680px" }}>
                                            IKATWI berkomitmen untuk terus berkembang, mengayomi seluruh terapis wicara, dan memberikan kontribusi terbaik dalam meningkatkan kualitas hidup komunikasi masyarakat Indonesia.
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                                            <Link
                                                href="/wilayah"
                                                className="btn btn-light rounded-3 px-4 py-2.5 fw-bold text-emerald-800 shadow-sm d-inline-flex align-items-center gap-2 btn-hover-scale"
                                            >
                                                <i className="fa fa-map-marked-alt text-emerald-600"></i>
                                                <span>Lihat Wilayah DPW &amp; DPC</span>
                                            </Link>
                                            <Link
                                                href="/register"
                                                className="btn btn-outline-light rounded-3 px-4 py-2.5 fw-bold d-inline-flex align-items-center gap-2 btn-hover-scale"
                                            >
                                                <i className="fa fa-user-plus"></i>
                                                <span>Bergabung Jadi Anggota</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .visimisi-page-wrapper {
                        position: relative;
                        overflow: hidden;
                        background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                        min-height: 100vh;
                    }

                    /* Floating Decorative Glow Orbs */
                    .bg-glow-orb {
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(80px);
                        opacity: 0.45;
                        pointer-events: none;
                        z-index: 0;
                    }
                    .bg-glow-1 {
                        width: 450px;
                        height: 450px;
                        top: 2%;
                        left: -100px;
                        background: radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.05) 70%);
                    }
                    .bg-glow-2 {
                        width: 500px;
                        height: 500px;
                        top: 30%;
                        right: -150px;
                        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.05) 70%);
                    }
                    .bg-glow-3 {
                        width: 400px;
                        height: 400px;
                        bottom: 5%;
                        left: 10%;
                        background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.05) 70%);
                    }

                    .text-slate-900 { color: #0f172a !important; }
                    .text-slate-800 { color: #1e293b !important; }
                    .text-slate-700 { color: #334155 !important; }
                    .text-slate-600 { color: #475569 !important; }
                    .text-slate-500 { color: #64748b !important; }
                    .text-slate-300 { color: #cbd5e1 !important; }
                    .text-emerald-800 { color: #065f46 !important; }

                    .fs-7 { font-size: 0.82rem; }
                    .letter-spacing-1 { letter-spacing: 0.08em; }

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
                    .pulse-dot {
                        width: 8px;
                        height: 8px;
                        background-color: #10b981;
                        border-radius: 50%;
                        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                        animation: pulseGlow 2s infinite;
                    }
                    @keyframes pulseGlow {
                        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                        70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
                        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                    }

                    /* Grand Vision Card */
                    .grand-vision-card {
                        background: linear-gradient(135deg, #064e3b 0%, #0f2d24 40%, #0f172a 100%);
                        border: 1.5px solid rgba(255, 255, 255, 0.2) !important;
                        position: relative;
                        box-shadow: 0 20px 40px rgba(6, 78, 59, 0.28) !important;
                    }
                    .grand-vision-bg-pattern {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        opacity: 0.08;
                        background-image: radial-gradient(#ffffff 1.2px, transparent 1.2px);
                        background-size: 24px 24px;
                    }

                    /* Rectangular Box Badges */
                    .vision-badge-box {
                        background-color: rgba(16, 185, 129, 0.25);
                        border: 1.5px solid rgba(110, 231, 183, 0.5);
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                        border-radius: 6px;
                    }
                    .vision-tag-right {
                        background-color: rgba(255, 255, 255, 0.12);
                        border: 1.5px solid rgba(255, 255, 255, 0.25);
                        backdrop-filter: blur(4px);
                        border-radius: 6px;
                    }

                    .vision-quote-text {
                        font-size: 1.55rem;
                        letter-spacing: -0.01em;
                        color: #ffffff !important;
                    }

                    .highlight-pill {
                        display: inline-block;
                        padding: 3px 12px;
                        border-radius: 6px;
                        font-weight: 800;
                        margin: 2px 0;
                    }
                    .highlight-blue {
                        background-color: rgba(59, 130, 246, 0.28);
                        color: #bfdbfe !important;
                        border: 1.5px solid #60a5fa;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                    }
                    .highlight-emerald {
                        background-color: rgba(16, 185, 129, 0.28);
                        color: #a7f3d0 !important;
                        border: 1.5px solid #34d399;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                    }
                    .highlight-amber {
                        background-color: rgba(245, 158, 11, 0.28);
                        color: #fef08a !important;
                        border: 1.5px solid #fbbf24;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                    }
                    .highlight-cyan {
                        background-color: rgba(6, 182, 212, 0.28);
                        color: #a5f3fc !important;
                        border: 1.5px solid #22d3ee;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                    }

                    .quote-watermark-left, .quote-watermark-right {
                        font-size: 1.8rem;
                        color: rgba(255, 255, 255, 0.25);
                        margin: 0 12px;
                    }

                    /* Pillar Cards */
                    .pillar-item-card {
                        background: rgba(255, 255, 255, 0.08);
                        border: 1.5px solid rgba(255, 255, 255, 0.16);
                        backdrop-filter: blur(10px);
                        transition: all 0.25s ease;
                    }
                    .pillar-item-card:hover {
                        background: rgba(255, 255, 255, 0.14);
                        transform: translateY(-3px);
                        border-color: rgba(255, 255, 255, 0.35);
                    }
                    .pillar-desc {
                        color: #e2e8f0 !important;
                        font-size: 0.82rem;
                    }
                    .pillar-icon-box {
                        width: 42px;
                        height: 42px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.15rem;
                    }
                    .icon-blue { background: rgba(59, 130, 246, 0.3); color: #93c5fd; border: 1px solid rgba(147, 197, 253, 0.4); }
                    .icon-emerald { background: rgba(16, 185, 129, 0.3); color: #6ee7b7; border: 1px solid rgba(110, 231, 183, 0.4); }
                    .icon-amber { background: rgba(245, 158, 11, 0.3); color: #fcd34d; border: 1px solid rgba(252, 211, 77, 0.4); }
                    .icon-cyan { background: rgba(6, 182, 212, 0.3); color: #67e8f9; border: 1px solid rgba(103, 232, 249, 0.4); }

                    /* Mission Cards */
                    .badge-section-box {
                        display: inline-flex;
                        align-items: center;
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 4px 12px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.78rem;
                    }
                    .mission-card-epic {
                        background-color: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                        transition: all 0.25s ease;
                    }
                    .mission-card-epic:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08) !important;
                        border-color: #94a3b8 !important;
                    }
                    .mission-number-badge {
                        font-size: 1.8rem;
                        font-weight: 900;
                        color: #cbd5e1;
                        font-family: monospace;
                        line-height: 1;
                    }
                    .mission-icon-circle {
                        width: 32px;
                        height: 32px;
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                    }
                    .icon-indigo { background: #e0e7ff; color: #4338ca; }
                    .icon-rose { background: #ffe4e6; color: #e11d48; }
                    .badge-mission-tag {
                        padding: 3px 8px;
                        border-radius: 4px;
                        font-weight: 800;
                        font-size: 0.68rem;
                        letter-spacing: 0.05em;
                        border: 1px solid;
                    }
                    .text-indigo-700 { color: #4338ca !important; }
                    .bg-indigo-50 { background-color: #eef2ff !important; }
                    .border-indigo-200 { border-color: #c7d2fe !important; }
                    .text-emerald-700 { color: #047857 !important; }
                    .bg-emerald-50 { background-color: #ecfdf5 !important; }
                    .border-emerald-200 { border-color: #a7f3d0 !important; }
                    .text-amber-700 { color: #b45309 !important; }
                    .bg-amber-50 { background-color: #fffbeb !important; }
                    .border-amber-200 { border-color: #fde68a !important; }
                    .text-rose-700 { color: #be123c !important; }
                    .bg-rose-50 { background-color: #fff1f2 !important; }
                    .border-rose-200 { border-color: #fecdd3 !important; }

                    /* Core Values */
                    .core-values-card {
                        background: #ffffff;
                        border: 1.5px solid #cbd5e1 !important;
                    }
                    .value-mini-box {
                        background-color: #f8fafc;
                        border: 1px solid #e2e8f0;
                        transition: all 0.2s ease;
                    }
                    .value-mini-box:hover {
                        background-color: #f1f5f9;
                        transform: translateY(-2px);
                        border-color: #cbd5e1;
                    }
                    .value-icon {
                        font-size: 1.4rem;
                    }
                    .text-purple-600 { color: #9333ea !important; }
                    .text-amber-600 { color: #d97706 !important; }

                    /* Commitment Banner */
                    .commitment-banner-card {
                        background: linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%);
                        border: 1.5px solid #34d399 !important;
                        position: relative;
                    }
                    .commitment-watermark {
                        position: absolute;
                        right: 20px;
                        bottom: -30px;
                        font-size: 12rem;
                        opacity: 0.08;
                        pointer-events: none;
                        color: #ffffff;
                    }
                    .commitment-icon-badge {
                        width: 56px;
                        height: 56px;
                        border-radius: 12px;
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(8px);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                    }
                    .commitment-subtitle-text {
                        color: #d1fae5 !important;
                    }
                    .btn-hover-scale {
                        transition: all 0.2s ease;
                    }
                    .btn-hover-scale:hover {
                        transform: translateY(-2px);
                    }

                    @media (max-width: 768px) {
                        .vision-quote-text {
                            font-size: 1.25rem;
                        }
                    }
                `}</style>
            </LayoutWeb>
        </>
    );
}