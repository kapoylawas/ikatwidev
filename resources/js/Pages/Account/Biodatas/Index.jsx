//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, Link, usePage } from "@inertiajs/inertia-react";

import { QRCodeSVG } from "qrcode.react";

export default function BiodataIndex() {
    const { biodata, transactions, statusAnggota } = usePage().props;

    const [copiedText, setCopiedText] = useState("");

    const isPaid = transactions && transactions.some((ts) => ts.status === "PAID");
    const isHonorary = statusAnggota?.status_anggota === "Anggota Kehormatan";
    const canAccessEkta = isPaid || isHonorary;

    // Copy to clipboard helper
    const handleCopy = (text, type) => {
        if (!text || text === "-") return;
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(""), 2000);
    };

    // Format date in Indonesian
    const formatDate = (dateString) => {
        if (!dateString) return "-";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    return (
        <>
            <Head>
                <title>Biodata Anggota - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid px-0 py-2">
                    
                    {/* Hero Profile Banner */}
                    <div className="bio-hero-card mb-4">
                        <div className="row align-items-center g-3">
                            <div className="col-auto">
                                <div className="bio-avatar-wrapper">
                                    <img
                                        src={biodata.image}
                                        className="bio-avatar-img"
                                        alt={biodata.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/assets/images/user.png";
                                        }}
                                    />
                                    <span className="bio-status-badge" title="Anggota Terdaftar">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                                    <h3 className="bio-name mb-0">{biodata.name}</h3>
                                    <span className={`badge ${biodata.status_anggota === 'Anggota Biasa' ? 'bg-success' : 'bg-info'} text-white fw-semibold px-2.5 py-1`}>
                                        {biodata.status_anggota || "Anggota"}
                                    </span>
                                </div>

                                <div className="d-flex flex-wrap align-items-center gap-3 text-white-50 small mt-1">
                                    <div className="d-inline-flex align-items-center gap-1.5 text-white">
                                        <i className="fa fa-id-card text-warning"></i>
                                        <span>No. KTA: <strong>{biodata.no_anggota || "-"}</strong></span>
                                        {biodata.no_anggota && (
                                            <button
                                                type="button"
                                                className="btn btn-link text-white-50 p-0 ms-1 bio-copy-btn"
                                                onClick={() => handleCopy(biodata.no_anggota, "kta")}
                                                title="Salin No. Anggota"
                                            >
                                                <i className={`fa ${copiedText === 'kta' ? 'fa-check text-success' : 'fa-copy'}`}></i>
                                            </button>
                                        )}
                                    </div>

                                    {(biodata.province?.name || biodata.city?.name) && (
                                        <div className="d-inline-flex align-items-center gap-1.5 text-white">
                                            <i className="fa fa-map-marker-alt text-danger"></i>
                                            <span>
                                                {biodata.province?.name ? `DPW ${biodata.province.name}` : ''}
                                                {biodata.city?.name ? ` • DPC ${biodata.city.name}` : ''}
                                            </span>
                                        </div>
                                    )}

                                    <div className="d-inline-flex align-items-center gap-1.5 text-white">
                                        <i className={`fa fa-circle ${canAccessEkta ? 'text-success' : 'text-warning'}`} style={{ fontSize: '9px' }}></i>
                                        <span>Iuran {new Date().getFullYear()}: <strong>{canAccessEkta ? "Lunas (Aktif)" : "Belum Lunas"}</strong></span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="col-12 col-lg-auto d-flex flex-wrap gap-2 pt-2 pt-lg-0">
                                <Link
                                    href={`/account/biodatas/${biodata.id}/edit`}
                                    className="btn btn-warning text-dark fw-bold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-3"
                                >
                                    <i className="fa fa-edit"></i>
                                    <span>Edit Biodata</span>
                                </Link>

                                <Link
                                    href="/account/ekta"
                                    className="btn btn-light fw-semibold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-3 text-dark"
                                >
                                    <i className="fa fa-id-card text-success"></i>
                                    <span>E-KTA</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Information Grid */}
                    {/* Information Grid */}
                    <div className="row g-4">
                        
                        {/* 1. Informasi Pribadi & Kontak (Emerald / Green Theme) */}
                        <div className="col-12 col-lg-6">
                            <div className="card bio-info-card bio-card-emerald h-100">
                                <div className="card-header bio-header-emerald d-flex align-items-center gap-2.5 py-3">
                                    <div className="bio-card-icon-wrap bg-emerald-main text-white shadow-sm">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-emerald-dark">Data Pribadi & Kontak</h6>
                                        <small className="text-emerald-sub">Identitas kependudukan dan kontak anggota</small>
                                    </div>
                                </div>
                                <div className="card-body p-3.5">
                                    <div className="row g-3">
                                        
                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-emerald">
                                                <span className="bio-label text-emerald-label"><i className="fa fa-fingerprint me-1.5 text-success"></i>NIK</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="bio-value">{biodata.nik || "-"}</span>
                                                    {biodata.nik && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-link p-0 text-muted bio-copy-btn"
                                                            onClick={() => handleCopy(biodata.nik, "nik")}
                                                            title="Salin NIK"
                                                        >
                                                            <i className={`fa ${copiedText === 'nik' ? 'fa-check text-success' : 'fa-copy'}`}></i>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-emerald">
                                                <span className="bio-label text-emerald-label"><i className="fa fa-certificate me-1.5 text-success"></i>No. STR</span>
                                                <span className="bio-value">{biodata.no_str || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-emerald">
                                                <span className="bio-label text-emerald-label"><i className="fa fa-envelope me-1.5 text-success"></i>Email</span>
                                                <span className="bio-value text-truncate d-block" title={biodata.email}>
                                                    {biodata.email ? (
                                                        <a href={`mailto:${biodata.email}`} className="text-decoration-none text-dark hover-emerald">
                                                            {biodata.email}
                                                        </a>
                                                    ) : "-"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-emerald">
                                                <span className="bio-label text-emerald-label"><i className="fa fa-phone me-1.5 text-success"></i>No. Telepon / WhatsApp</span>
                                                <span className="bio-value">
                                                    {biodata.phone ? (
                                                        <a href={`https://wa.me/${biodata.phone.replace(/^0/, '62').replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-decoration-none text-success fw-semibold">
                                                            <i className="fab fa-whatsapp me-1"></i>{biodata.phone}
                                                        </a>
                                                    ) : "-"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-emerald">
                                                <span className="bio-label text-emerald-label"><i className="fa fa-birthday-cake me-1.5 text-success"></i>Tempat, Tanggal Lahir</span>
                                                <span className="bio-value">
                                                    {biodata.tempat_lahir || "-"}, {formatDate(biodata.tgl_lahir)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-emerald">
                                                <span className="bio-label text-emerald-label"><i className="fa fa-map-marked-alt me-1.5 text-success"></i>Alamat Lengkap (KTP)</span>
                                                <span className="bio-value">{biodata.alamat || "-"}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Riwayat Pendidikan (Blue / Cyan Theme) */}
                        <div className="col-12 col-lg-6">
                            <div className="card bio-info-card bio-card-blue h-100">
                                <div className="card-header bio-header-blue d-flex align-items-center gap-2.5 py-3">
                                    <div className="bio-card-icon-wrap bg-blue-main text-white shadow-sm">
                                        <i className="fa fa-graduation-cap"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-blue-dark">Riwayat Pendidikan</h6>
                                        <small className="text-blue-sub">Kualifikasi akademik dan almamater</small>
                                    </div>
                                </div>
                                <div className="card-body p-3.5">
                                    <div className="row g-3">
                                        
                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-blue">
                                                <span className="bio-label text-blue-label"><i className="fa fa-user-graduate me-1.5 text-primary"></i>Pendidikan Terapi Wicara</span>
                                                <span className="bio-value fw-bold text-primary">{biodata.pendidikan || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-blue">
                                                <span className="bio-label text-blue-label"><i className="fa fa-university me-1.5 text-primary"></i>Institusi / Perguruan Tinggi</span>
                                                <span className="bio-value">{biodata.istitusi || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-blue">
                                                <span className="bio-label text-blue-label"><i className="fa fa-map-pin me-1.5 text-primary"></i>Alamat Perguruan Tinggi</span>
                                                <span className="bio-value">{biodata.almtistitusi || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-blue">
                                                <span className="bio-label text-blue-label"><i className="fa fa-award me-1.5 text-primary"></i>Pendidikan Non-Terapi Wicara</span>
                                                <span className="bio-value">{biodata.nonlinear || "Tidak ada"}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Informasi Pekerjaan (Purple / Violet Theme) */}
                        <div className="col-12 col-lg-6">
                            <div className="card bio-info-card bio-card-purple h-100">
                                <div className="card-header bio-header-purple d-flex align-items-center gap-2.5 py-3">
                                    <div className="bio-card-icon-wrap bg-purple-main text-white shadow-sm">
                                        <i className="fa fa-briefcase"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-purple-dark">Informasi Pekerjaan</h6>
                                        <small className="text-purple-sub">Status kepegawaian dan unit kerja faskes</small>
                                    </div>
                                </div>
                                <div className="card-body p-3.5">
                                    <div className="row g-3">
                                        
                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-purple">
                                                <span className="bio-label text-purple-label"><i className="fa fa-user-tag me-1.5 text-purple"></i>Status Kepegawaian</span>
                                                <span className="bio-value">{biodata.kepegawaian || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-purple">
                                                <span className="bio-label text-purple-label"><i className="fa fa-clinic-medical me-1.5 text-purple"></i>Tempat Bekerja</span>
                                                <span className="bio-value">{biodata.bekerja || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-purple">
                                                <span className="bio-label text-purple-label"><i className="fa fa-hospital me-1.5 text-purple"></i>Nama Institusi / Faskes</span>
                                                <span className="bio-value">{biodata.lokasi_pekerjaan || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bio-field-box bio-field-purple">
                                                <span className="bio-label text-purple-label"><i className="fa fa-building me-1.5 text-purple"></i>Alamat Tempat Bekerja</span>
                                                <span className="bio-value">{biodata.alamat_tempat_bekerja || "-"}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Status Organisasi & E-KTA Verifikasi (Amber / Gold Theme) */}
                        <div className="col-12 col-lg-6">
                            <div className="card bio-info-card bio-card-amber h-100">
                                <div className="card-header bio-header-amber d-flex align-items-center gap-2.5 py-3">
                                    <div className="bio-card-icon-wrap bg-amber-main text-white shadow-sm">
                                        <i className="fa fa-id-badge"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-amber-dark">Status Keanggotaan & QR Code</h6>
                                        <small className="text-amber-sub">Afiliasi wilayah dan verifikasi keabsahan</small>
                                    </div>
                                </div>
                                <div className="card-body p-3.5">
                                    <div className="row g-3">
                                        
                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-amber">
                                                <span className="bio-label text-amber-label"><i className="fa fa-map me-1.5 text-warning"></i>Dewan Pengurus Wilayah (DPW)</span>
                                                <span className="bio-value fw-semibold">{biodata.province?.name || "-"}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="bio-field-box bio-field-amber">
                                                <span className="bio-label text-amber-label"><i className="fa fa-city me-1.5 text-warning"></i>Dewan Pengurus Cabang (DPC)</span>
                                                <span className="bio-value fw-semibold">{biodata.city?.name || "-"}</span>
                                            </div>
                                        </div>

                                        {/* QR Code Card Frame */}
                                        <div className="col-12">
                                            <div className="bio-qr-box p-3.5 rounded-3 text-center">
                                                <span className="d-block small fw-bold mb-2 text-amber-dark">
                                                    <i className="fa fa-qrcode me-1 text-warning"></i> QR Code E-KTA Resmi IKATWI
                                                </span>
                                                
                                                {canAccessEkta ? (
                                                    <div className="d-flex flex-column align-items-center">
                                                        <div className="p-2.5 bg-white rounded-3 shadow-sm d-inline-block border border-warning border-opacity-25">
                                                            <QRCodeSVG
                                                                value={`${window.location.origin}/sig/verify?user=${biodata.no_anggota || biodata.id}`}
                                                                size={130}
                                                                level="M"
                                                                includeMargin={false}
                                                            />
                                                        </div>
                                                        <span className="badge bg-success bg-opacity-10 text-success fw-semibold mt-2.5 px-3 py-1.5 rounded-pill border border-success border-opacity-25">
                                                            <i className="fa fa-check-circle me-1"></i> Keanggotaan Terverifikasi Aktif
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="alert alert-warning border-0 mb-0 py-3 text-center rounded-3" style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}>
                                                        <i className="fa fa-exclamation-triangle fs-4 text-warning mb-2 d-block"></i>
                                                        <strong className="d-block mb-1 text-dark">Status Iuran Belum Lunas</strong>
                                                        <p className="small text-muted mb-2">
                                                            Selesaikan pembayaran iuran tahunan untuk mengaktifkan E-KTA dan QR Code verifikasi.
                                                        </p>
                                                        <Link href="/account/tagihan" className="btn btn-sm btn-success fw-bold px-3 shadow-sm">
                                                            <i className="fa fa-credit-card me-1"></i> Bayar Iuran Sekarang
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </LayoutAccount>

            <style>{`
                .bio-hero-card {
                    background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
                    border-radius: 20px;
                    padding: 24px 28px;
                    box-shadow: 0 10px 30px -5px rgba(6, 78, 59, 0.25);
                    position: relative;
                    overflow: hidden;
                }
                .bio-hero-card::before {
                    content: '';
                    position: absolute;
                    top: -60px;
                    right: -60px;
                    width: 200px;
                    height: 200px;
                    background: rgba(255, 255, 255, 0.08);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .bio-avatar-wrapper {
                    position: relative;
                    width: 96px;
                    height: 96px;
                }
                .bio-avatar-img {
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 3.5px solid #ffffff;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    background: #ffffff;
                }
                .bio-status-badge {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 24px;
                    height: 24px;
                    background: #10b981;
                    color: #ffffff;
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                }
                .bio-name {
                    color: #ffffff;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }
                .bio-copy-btn {
                    text-decoration: none;
                    transition: transform 0.15s;
                }
                .bio-copy-btn:hover {
                    transform: scale(1.15);
                    color: #059669 !important;
                }
                
                /* Base Card Styling */
                .bio-info-card {
                    border-radius: 16px;
                    overflow: hidden;
                    background: #ffffff;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .bio-info-card:hover {
                    transform: translateY(-3px);
                }

                .bio-card-icon-wrap {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }

                /* 1. Theme Emerald (Data Pribadi) */
                .bio-card-emerald {
                    border: 1.5px solid #a7f3d0;
                    box-shadow: 0 4px 20px -2px rgba(5, 150, 105, 0.08);
                }
                .bio-card-emerald:hover {
                    box-shadow: 0 8px 25px -2px rgba(5, 150, 105, 0.15);
                }
                .bio-header-emerald {
                    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                    border-bottom: 1.5px solid #a7f3d0;
                }
                .bg-emerald-main { background: #059669; }
                .text-emerald-dark { color: #065f46; }
                .text-emerald-sub { color: #047857; font-size: 0.78rem; }
                .text-emerald-label { color: #047857; }
                .bio-field-emerald {
                    background: #f0fdf4;
                    border: 1px solid #bbf7d0;
                    border-left: 4px solid #059669;
                }
                .bio-field-emerald:hover {
                    background: #ecfdf5;
                    border-color: #86efac;
                }

                /* 2. Theme Blue (Pendidikan) */
                .bio-card-blue {
                    border: 1.5px solid #bfdbfe;
                    box-shadow: 0 4px 20px -2px rgba(37, 99, 235, 0.08);
                }
                .bio-card-blue:hover {
                    box-shadow: 0 8px 25px -2px rgba(37, 99, 235, 0.15);
                }
                .bio-header-blue {
                    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                    border-bottom: 1.5px solid #bfdbfe;
                }
                .bg-blue-main { background: #2563eb; }
                .text-blue-dark { color: #1e40af; }
                .text-blue-sub { color: #1d4ed8; font-size: 0.78rem; }
                .text-blue-label { color: #1d4ed8; }
                .bio-field-blue {
                    background: #f8faff;
                    border: 1px solid #dbeafe;
                    border-left: 4px solid #2563eb;
                }
                .bio-field-blue:hover {
                    background: #eff6ff;
                    border-color: #93c5fd;
                }

                /* 3. Theme Purple (Pekerjaan) */
                .bio-card-purple {
                    border: 1.5px solid #e9d5ff;
                    box-shadow: 0 4px 20px -2px rgba(124, 58, 237, 0.08);
                }
                .bio-card-purple:hover {
                    box-shadow: 0 8px 25px -2px rgba(124, 58, 237, 0.15);
                }
                .bio-header-purple {
                    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
                    border-bottom: 1.5px solid #e9d5ff;
                }
                .bg-purple-main { background: #7c3aed; }
                .text-purple-dark { color: #6b21a8; }
                .text-purple-sub { color: #7e22ce; font-size: 0.78rem; }
                .text-purple-label { color: #7e22ce; }
                .text-purple { color: #7c3aed; }
                .bio-field-purple {
                    background: #fdfaff;
                    border: 1px solid #f3e8ff;
                    border-left: 4px solid #7c3aed;
                }
                .bio-field-purple:hover {
                    background: #faf5ff;
                    border-color: #d8b4fe;
                }

                /* 4. Theme Amber (Organisasi & QR) */
                .bio-card-amber {
                    border: 1.5px solid #fde68a;
                    box-shadow: 0 4px 20px -2px rgba(217, 119, 6, 0.08);
                }
                .bio-card-amber:hover {
                    box-shadow: 0 8px 25px -2px rgba(217, 119, 6, 0.15);
                }
                .bio-header-amber {
                    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                    border-bottom: 1.5px solid #fde68a;
                }
                .bg-amber-main { background: #d97706; }
                .text-amber-dark { color: #92400e; }
                .text-amber-sub { color: #b45309; font-size: 0.78rem; }
                .text-amber-label { color: #b45309; }
                .bio-field-amber {
                    background: #fffdf7;
                    border: 1px solid #fef3c7;
                    border-left: 4px solid #d97706;
                }
                .bio-field-amber:hover {
                    background: #fffbeb;
                    border-color: #fde68a;
                }
                .bio-qr-box {
                    background: linear-gradient(135deg, #fffdf5 0%, #fffbeb 100%);
                    border: 1.5px dashed #fde68a;
                }

                /* Common Field Box Styling */
                .bio-field-box {
                    padding: 11px 14px;
                    border-radius: 10px;
                    height: 100%;
                    transition: all 0.15s ease;
                }
                .bio-label {
                    display: block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 4px;
                }
                .bio-value {
                    font-size: 0.92rem;
                    font-weight: 600;
                    color: #0f172a;
                    line-height: 1.4;
                }

                @media (max-width: 768px) {
                    .bio-hero-card {
                        padding: 18px 18px;
                    }
                    .bio-avatar-wrapper, .bio-avatar-img {
                        width: 76px;
                        height: 76px;
                    }
                    .bio-name {
                        font-size: 1.25rem;
                    }
                }
            `}</style>
        </>
    );
}