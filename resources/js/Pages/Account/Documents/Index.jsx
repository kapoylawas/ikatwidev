//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function DocumentsIndex() {
    const { biodata, statusAnggota } = usePage().props;

    return (
        <LayoutAccount>
            <Head title="Berkas Dokumen Profesi - IKATWI" />

            <div className="container-fluid py-4 documents-page-container">
                {/* Header Banner */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-folder-open fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <h4 className="mb-0 fw-bold header-main-title">
                                        Berkas &amp; Dokumen Profesi
                                    </h4>
                                    <span className="badge-status-pill shadow-sm">
                                        <i className="fa fa-user-check me-1 text-emerald-600"></i>
                                        {biodata?.status_anggota || statusAnggota?.status_anggota || "Anggota Biasa"}
                                    </span>
                                </div>
                                <p className="header-subtitle mb-0 mt-1">
                                    Kelola kelengkapan berkas arsip legalitas profesi: Ijazah Pendidikan, Surat Izin Praktik (SIP), STR, dan Pakta Integritas.
                                </p>
                            </div>
                        </div>

                        {biodata?.no_anggota && (
                            <div className="badge-no-anggota-banner shadow-sm">
                                <i className="fa fa-id-badge text-primary me-2"></i>
                                <span>No. Anggota:</span> <strong>{biodata.no_anggota}</strong>
                            </div>
                        )}
                    </div>
                </div>

                {/* Member Profile Summary Strip */}
                <div className="card member-strip-card rounded-4 shadow-sm mb-4">
                    <div className="card-body p-3 p-md-4">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="position-relative">
                                    <img
                                        src={biodata?.image || "/assets/images/user.png"}
                                        alt={biodata?.name}
                                        className="rounded-circle member-avatar-img shadow-sm"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/assets/images/user.png";
                                        }}
                                    />
                                    <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle avatar-online-dot"></span>
                                </div>
                                <div>
                                    <h5 className="mb-1 fw-bold text-slate-900" style={{ letterSpacing: '-0.01em' }}>
                                        {biodata?.name}
                                    </h5>
                                    <div className="d-flex align-items-center gap-2 flex-wrap text-slate-600 small">
                                        <span>
                                            <i className="fa fa-envelope text-slate-400 me-1"></i>
                                            {biodata?.email}
                                        </span>
                                        {biodata?.nik && (
                                            <>
                                                <span className="text-slate-300">•</span>
                                                <span className="font-monospace">
                                                    <i className="fa fa-fingerprint text-slate-400 me-1"></i>
                                                    NIK: {biodata.nik}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                {biodata?.province?.name && (
                                    <span className="badge-region-dpw shadow-sm">
                                        <i className="fa fa-landmark me-1 text-emerald-600"></i>
                                        {biodata.province.name}
                                    </span>
                                )}
                                {biodata?.city?.name && (
                                    <span className="badge-region-dpc shadow-sm">
                                        <i className="fa fa-city me-1 text-indigo-600"></i>
                                        {biodata.city.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4 Interactive Document Cards Grid */}
                <div className="row g-3 mb-4">
                    {/* Card 1: Ijazah */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card h-100 doc-grid-card doc-card-blue shadow-sm rounded-4">
                            <div className="card-body p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="doc-icon-wrap icon-wrap-blue shadow-sm">
                                            <i className="fa fa-graduation-cap text-white"></i>
                                        </div>
                                        <span className="doc-type-pill pill-blue">Pendidikan</span>
                                    </div>
                                    <h5 className="fw-bold text-slate-900 mb-1">Ijazah Terakhir</h5>
                                    <p className="text-slate-600 small mb-4 doc-desc">
                                        Arsip ijazah kelulusan dan riwayat pendidikan tinggi terapis wicara.
                                    </p>
                                </div>
                                <Link
                                    href={`/account/documents/showIjazah/${biodata.id}`}
                                    className="btn btn-doc-action btn-action-blue shadow-sm"
                                >
                                    <span>Lihat &amp; Kelola Ijazah</span>
                                    <i className="fa fa-arrow-right ms-1.5"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: SIP */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card h-100 doc-grid-card doc-card-teal shadow-sm rounded-4">
                            <div className="card-body p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="doc-icon-wrap icon-wrap-teal shadow-sm">
                                            <i className="fa fa-file-medical text-white"></i>
                                        </div>
                                        <span className="doc-type-pill pill-teal">Izin Praktik</span>
                                    </div>
                                    <h5 className="fw-bold text-slate-900 mb-1">Surat Izin Praktik (SIP)</h5>
                                    <p className="text-slate-600 small mb-4 doc-desc">
                                        Surat izin operasional praktik pelayanan terapi wicara di faskes.
                                    </p>
                                </div>
                                <Link
                                    href={`/account/documents/showsip/${biodata.id}`}
                                    className="btn btn-doc-action btn-action-teal shadow-sm"
                                >
                                    <span>Lihat &amp; Kelola SIP</span>
                                    <i className="fa fa-arrow-right ms-1.5"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: STR */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card h-100 doc-grid-card doc-card-emerald shadow-sm rounded-4">
                            <div className="card-body p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="doc-icon-wrap icon-wrap-emerald shadow-sm">
                                            <i className="fa fa-certificate text-white"></i>
                                        </div>
                                        <span className="doc-type-pill pill-emerald">Registrasi</span>
                                    </div>
                                    <h5 className="fw-bold text-slate-900 mb-1">Surat Tanda Registrasi</h5>
                                    <p className="text-slate-600 small mb-4 doc-desc">
                                        Bukti tanda registrasi tenaga kesehatan terapis wicara resmi.
                                    </p>
                                </div>
                                <Link
                                    href={`/account/documents/showstr/${biodata.id}`}
                                    className="btn btn-doc-action btn-action-emerald shadow-sm"
                                >
                                    <span>Lihat &amp; Kelola STR</span>
                                    <i className="fa fa-arrow-right ms-1.5"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Pakta Integritas */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card h-100 doc-grid-card doc-card-rose shadow-sm rounded-4">
                            <div className="card-body p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="doc-icon-wrap icon-wrap-rose shadow-sm">
                                            <i className="fa fa-file-signature text-white"></i>
                                        </div>
                                        <span className="doc-type-pill pill-rose">Format PDF</span>
                                    </div>
                                    <h5 className="fw-bold text-slate-900 mb-1">Pakta Integritas</h5>
                                    <p className="text-slate-600 small mb-4 doc-desc">
                                        Surat pernyataan pakta integritas keanggotaan resmi IKATWI.
                                    </p>
                                </div>
                                {biodata?.filepakta ? (
                                    <a
                                        href={biodata.filepakta}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-doc-action btn-action-rose shadow-sm"
                                    >
                                        <span>Buka Dokumen PDF</span>
                                        <i className="fa fa-external-link-alt ms-1.5" style={{ fontSize: '0.75rem' }}></i>
                                    </a>
                                ) : (
                                    <button disabled className="btn btn-doc-action btn-action-disabled">
                                        <i className="fa fa-info-circle me-1"></i> Belum Diunggah
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Document Summary Table Card */}
                <div className="card main-table-card rounded-4 shadow-sm overflow-hidden mb-4">
                    <div className="card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <span className="card-icon-pill bg-emerald-icon-pill shadow-sm">
                                <i className="fa fa-list-check text-white"></i>
                            </span>
                            <div>
                                <h5 className="mb-0 fw-bold table-header-title">
                                    Daftar Ringkasan Dokumen Anggota
                                </h5>
                                <span className="table-header-sub">
                                    Status kelengkapan dan tautan berkas resmi
                                </span>
                            </div>
                        </div>
                        <span className="badge-total-pill shadow-sm">
                            <strong>4</strong> Dokumen Pokok
                        </span>
                    </div>

                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0 custom-doc-table">
                                <thead className="custom-thead">
                                    <tr>
                                        <th className="ps-4" style={{ width: '5%', textAlign: 'center' }}>NO</th>
                                        <th style={{ width: '30%' }}>NAMA DOKUMEN</th>
                                        <th style={{ width: '25%' }}>DESKRIPSI DOKUMEN</th>
                                        <th className="text-center" style={{ width: '20%' }}>TIPE / FORMAT</th>
                                        <th className="pe-4 text-end" style={{ width: '20%' }}>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody className="custom-tbody">
                                    {/* Row 1: Ijazah */}
                                    <tr className="doc-row">
                                        <td className="ps-4 text-center">
                                            <span className="table-num-pill">1</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2.5">
                                                <div className="table-doc-icon icon-blue">
                                                    <i className="fa fa-graduation-cap"></i>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900">Ijazah Pendidikan</div>
                                                    <small className="text-slate-600">Ijazah Terakhir Kelulusan Profesi</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-slate-600 small">
                                            Riwayat perguruan tinggi, jurusan, akreditasi &amp; tahun kelulusan
                                        </td>
                                        <td className="text-center">
                                            <span className="badge-doc-type bg-blue-subtle text-primary border border-blue-subtle">
                                                <i className="fa fa-file-alt me-1"></i> Data &amp; Scan PDF
                                            </span>
                                        </td>
                                        <td className="pe-4 text-end">
                                            <Link
                                                href={`/account/documents/showIjazah/${biodata.id}`}
                                                className="btn btn-sm btn-action-table btn-table-blue shadow-sm"
                                            >
                                                <i className="fa fa-eye me-1.5"></i>
                                                <span>Lihat Detail</span>
                                            </Link>
                                        </td>
                                    </tr>

                                    {/* Row 2: SIP */}
                                    <tr className="doc-row">
                                        <td className="ps-4 text-center">
                                            <span className="table-num-pill">2</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2.5">
                                                <div className="table-doc-icon icon-teal">
                                                    <i className="fa fa-file-medical"></i>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900">Surat Izin Praktik (SIP)</div>
                                                    <small className="text-slate-600">SIP Pelayanan Terapi Wicara</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-slate-600 small">
                                            Nomor SIP, tempat praktik faskes, masa berlaku &amp; lampiran
                                        </td>
                                        <td className="text-center">
                                            <span className="badge-doc-type bg-teal-subtle text-teal border border-teal-subtle">
                                                <i className="fa fa-file-medical me-1"></i> Data &amp; Scan PDF
                                            </span>
                                        </td>
                                        <td className="pe-4 text-end">
                                            <Link
                                                href={`/account/documents/showsip/${biodata.id}`}
                                                className="btn btn-sm btn-action-table btn-table-teal shadow-sm"
                                            >
                                                <i className="fa fa-eye me-1.5"></i>
                                                <span>Lihat Detail</span>
                                            </Link>
                                        </td>
                                    </tr>

                                    {/* Row 3: STR */}
                                    <tr className="doc-row">
                                        <td className="ps-4 text-center">
                                            <span className="table-num-pill">3</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2.5">
                                                <div className="table-doc-icon icon-emerald">
                                                    <i className="fa fa-certificate"></i>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900">Surat Tanda Registrasi (STR)</div>
                                                    <small className="text-slate-600">STR Nakes Terapis Wicara</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-slate-600 small">
                                            Nomor registrasi resmi, masa berlaku STR &amp; lampiran berkas
                                        </td>
                                        <td className="text-center">
                                            <span className="badge-doc-type bg-emerald-subtle text-success border border-emerald-subtle">
                                                <i className="fa fa-certificate me-1"></i> Data &amp; Scan PDF
                                            </span>
                                        </td>
                                        <td className="pe-4 text-end">
                                            <Link
                                                href={`/account/documents/showstr/${biodata.id}`}
                                                className="btn btn-sm btn-action-table btn-table-emerald shadow-sm"
                                            >
                                                <i className="fa fa-eye me-1.5"></i>
                                                <span>Lihat Detail</span>
                                            </Link>
                                        </td>
                                    </tr>

                                    {/* Row 4: Pakta Integritas */}
                                    <tr className="doc-row">
                                        <td className="ps-4 text-center">
                                            <span className="table-num-pill">4</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2.5">
                                                <div className="table-doc-icon icon-rose">
                                                    <i className="fa fa-file-signature"></i>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900">Pakta Integritas</div>
                                                    <small className="text-slate-600">Surat Pakta Keanggotaan IKATWI</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-slate-600 small">
                                            Surat pernyataan komitmen pakta integritas yang ditandatangani
                                        </td>
                                        <td className="text-center">
                                            <span className="badge-doc-type bg-rose-subtle text-danger border border-rose-subtle">
                                                <i className="fa fa-file-pdf me-1"></i> Dokumen PDF
                                            </span>
                                        </td>
                                        <td className="pe-4 text-end">
                                            {biodata?.filepakta ? (
                                                <a
                                                    href={biodata.filepakta}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-action-table btn-table-rose shadow-sm"
                                                >
                                                    <i className="fa fa-file-pdf me-1.5"></i>
                                                    <span>Buka PDF</span>
                                                </a>
                                            ) : (
                                                <span className="badge-unloaded small">Belum Upload</span>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .documents-page-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #059669 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    flex-shrink: 0;
                }
                .header-main-title {
                    color: #0f172a;
                    font-size: 1.35rem;
                    letter-spacing: -0.02em;
                }
                .header-subtitle {
                    color: #475569;
                    font-size: 0.88rem;
                    font-weight: 500;
                }
                .badge-status-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-no-anggota-banner {
                    background-color: #f8fafc;
                    border: 1.5px solid #cbd5e1;
                    color: #0f172a;
                    padding: 8px 18px;
                    border-radius: 12px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                }

                /* Member Profile Strip */
                .member-strip-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                }
                .member-avatar-img {
                    width: 48px;
                    height: 48px;
                    object-fit: cover;
                    border: 2px solid #cbd5e1;
                }
                .avatar-online-dot {
                    width: 13px;
                    height: 13px;
                }
                .badge-region-dpw {
                    background-color: #ecfdf5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                    border-radius: 8px;
                    padding: 6px 12px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-region-dpc {
                    background-color: #eef2ff;
                    color: #3730a3;
                    border: 1px solid #c7d2fe;
                    border-radius: 8px;
                    padding: 6px 12px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }

                /* Document Grid Cards */
                .doc-grid-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    transition: all 0.22s ease;
                }
                .doc-grid-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.12) !important;
                }
                .doc-card-blue {
                    border-top: 4px solid #2563eb !important;
                }
                .doc-card-teal {
                    border-top: 4px solid #0891b2 !important;
                }
                .doc-card-emerald {
                    border-top: 4px solid #059669 !important;
                }
                .doc-card-rose {
                    border-top: 4px solid #e11d48 !important;
                }
                .doc-icon-wrap {
                    width: 46px;
                    height: 46px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }
                .icon-wrap-blue {
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                }
                .icon-wrap-teal {
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
                }
                .icon-wrap-emerald {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }
                .icon-wrap-rose {
                    background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
                }
                .doc-type-pill {
                    font-size: 0.72rem;
                    font-weight: 700;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                }
                .pill-blue {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                }
                .pill-teal {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1px solid #a5f3fc;
                }
                .pill-emerald {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                }
                .pill-rose {
                    background-color: #fff1f2;
                    color: #be123c;
                    border: 1px solid #fecdd3;
                }
                .doc-desc {
                    line-height: 1.45;
                    min-height: 38px;
                }
                .btn-doc-action {
                    width: 100%;
                    border-radius: 10px;
                    padding: 9px 14px;
                    font-weight: 700;
                    font-size: 0.84rem;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-action-blue {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: #ffffff;
                }
                .btn-action-blue:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
                }
                .btn-action-teal {
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #ffffff;
                }
                .btn-action-teal:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(8, 145, 178, 0.35);
                }
                .btn-action-emerald {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                }
                .btn-action-emerald:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
                }
                .btn-action-rose {
                    background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
                    color: #ffffff;
                }
                .btn-action-rose:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);
                }
                .btn-action-disabled {
                    background-color: #f1f5f9;
                    border: 1.5px solid #cbd5e1;
                    color: #94a3b8;
                    cursor: not-allowed;
                }

                /* Main Table Card */
                .main-table-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #059669 !important;
                    box-shadow: 0 6px 20px -2px rgba(15, 23, 42, 0.08);
                }
                .table-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .card-icon-pill {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .bg-emerald-icon-pill {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }
                .table-header-title {
                    color: #0f172a;
                    font-size: 1.05rem;
                }
                .table-header-sub {
                    color: #475569;
                    font-size: 0.78rem;
                    font-weight: 600;
                    display: block;
                }
                .badge-total-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 700;
                }

                /* Table Styling */
                .custom-doc-table {
                    border-collapse: separate;
                    border-spacing: 0;
                }
                .custom-thead th {
                    background-color: #f1f5f9;
                    color: #1e293b;
                    font-size: 0.76rem;
                    font-weight: 800;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    border-bottom: 2px solid #cbd5e1;
                    padding-top: 14px;
                    padding-bottom: 14px;
                }
                .doc-row td {
                    padding: 16px 12px;
                    border-bottom: 1px solid #e2e8f0;
                    vertical-align: middle;
                }
                .doc-row:hover td {
                    background-color: #f8fafc;
                }
                .table-num-pill {
                    display: inline-block;
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                    font-weight: 800;
                    font-size: 0.78rem;
                    padding: 3px 8px;
                    border-radius: 6px;
                    min-width: 24px;
                }
                .table-doc-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .table-doc-icon.icon-blue {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                }
                .table-doc-icon.icon-teal {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1px solid #a5f3fc;
                }
                .table-doc-icon.icon-emerald {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                }
                .table-doc-icon.icon-rose {
                    background-color: #fff1f2;
                    color: #be123c;
                    border: 1px solid #fecdd3;
                }
                .badge-doc-type {
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .bg-blue-subtle { background-color: #eff6ff; }
                .border-blue-subtle { border-color: #bfdbfe !important; }
                .bg-teal-subtle { background-color: #ecfeff; }
                .text-teal { color: #0891b2 !important; }
                .border-teal-subtle { border-color: #a5f3fc !important; }
                .bg-emerald-subtle { background-color: #ecfdf5; }
                .border-emerald-subtle { border-color: #a7f3d0 !important; }
                .bg-rose-subtle { background-color: #fff1f2; }
                .border-rose-subtle { border-color: #fecdd3 !important; }

                .btn-action-table {
                    border-radius: 8px;
                    padding: 6px 14px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    display: inline-flex;
                    align-items: center;
                    border: none;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-table-blue {
                    background-color: #eff6ff;
                    border: 1.5px solid #93c5fd;
                    color: #1d4ed8;
                }
                .btn-table-blue:hover {
                    background-color: #2563eb;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .btn-table-teal {
                    background-color: #ecfeff;
                    border: 1.5px solid #67e8f9;
                    color: #0e7490;
                }
                .btn-table-teal:hover {
                    background-color: #0891b2;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .btn-table-emerald {
                    background-color: #ecfdf5;
                    border: 1.5px solid #a7f3d0;
                    color: #047857;
                }
                .btn-table-emerald:hover {
                    background-color: #059669;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .btn-table-rose {
                    background-color: #fff1f2;
                    border: 1.5px solid #fecdd3;
                    color: #be123c;
                }
                .btn-table-rose:hover {
                    background-color: #e11d48;
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .badge-unloaded {
                    background-color: #f1f5f9;
                    color: #94a3b8;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-size: 0.76rem;
                    font-weight: 600;
                    display: inline-block;
                }
            `}</style>
        </LayoutAccount>
    );
}
