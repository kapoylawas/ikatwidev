import React, { useState } from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Pagination from "../../../Shared/Pagination";
import Search from "../../../Shared/Search";

export default function WilayahCabangIndex() {
    const { wilayah } = usePage().props;

    const formatPhone = (phone) => {
        if (!phone) return null;
        let clean = phone.replace(/[^0-9]/g, "");
        if (clean.startsWith("0")) clean = "62" + clean.slice(1);
        return clean;
    };

    const formatInstagram = (ig) => {
        if (!ig || ig === "-") return null;
        if (ig.startsWith("http")) return ig;
        const clean = ig.replace("@", "").trim();
        return `https://instagram.com/${clean}`;
    };

    return (
        <>
            <Head>
                <title>Wilayah DPW - Ikatan Terapis Wicara Indonesia (IKATWI)</title>
            </Head>
            <LayoutWeb>
                <div className="container py-5 web-portal-wilayah-page">
                    {/* Hero Section */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 col-lg-10 text-center">
                            <span className="badge-portal-category mb-2">
                                <i className="fa fa-map-marked-alt me-1.5"></i> Dewan Pengurus Wilayah (DPW)
                            </span>
                            <h2 className="fw-extrabold text-slate-900 mb-3 display-6" style={{ letterSpacing: "-0.03em" }}>
                                Wilayah DPW IKATWI Seluruh Indonesia
                            </h2>
                            <p className="text-slate-600 mx-auto fs-6" style={{ maxWidth: "680px" }}>
                                Temukan informasi resmi sekretariat, pimpinan pengurus wilayah, kontak telepon/WhatsApp, dan lokasi kantor DPW di provinsi Anda.
                            </p>

                            {/* Switcher Tab DPW & DPC */}
                            <div className="d-inline-flex p-1.5 rounded-pill bg-slate-100 border mt-3 shadow-sm">
                                <Link
                                    href="/wilayah"
                                    className="btn btn-sm rounded-pill px-4 py-2 fw-bold btn-emerald-active text-white shadow-sm"
                                >
                                    <i className="fa fa-landmark me-1.5"></i> Wilayah DPW (Provinsi)
                                </Link>
                                <Link
                                    href="/wilayahdpc"
                                    className="btn btn-sm rounded-pill px-4 py-2 fw-semibold text-slate-600 bg-transparent border-0"
                                >
                                    <i className="fa fa-city me-1.5 text-blue-600"></i> Wilayah DPC (Kabupaten/Kota)
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Search Toolbar */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-12 col-md-8 col-lg-6">
                            <Search URL={"/wilayah"} />
                        </div>
                    </div>

                    {/* Grid of Wilayah DPW Cards */}
                    <div className="row g-4 mb-5">
                        {wilayah?.data && wilayah.data.length > 0 ? (
                            wilayah.data.map((item, idx) => {
                                const rawPhone = item.phone ? item.phone.trim() : "";
                                const cleanPhone = formatPhone(rawPhone);
                                const igUrl = formatInstagram(item.instagram);
                                const mapSrc =
                                    item.lat && item.long
                                        ? `https://maps.google.com/maps?q=${item.lat},${item.long}&hl=id&output=embed`
                                        : `https://maps.google.com/maps?q=${encodeURIComponent(
                                              (item.province?.name || "Indonesia") + " Indonesia"
                                          )}&hl=id&output=embed`;

                                const gmapsDirectUrl =
                                    item.lat && item.long
                                        ? `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.long}`
                                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                              (item.province?.name || "") + " " + (item.alamat || "")
                                          )}`;

                                return (
                                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                                        <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden portal-card-public">
                                            {/* Header */}
                                            <div className="card-header border-0 py-3 px-4 d-flex justify-content-between align-items-center portal-header-bg">
                                                <div className="d-flex align-items-center gap-2.5 overflow-hidden">
                                                    <span className="portal-dpw-icon shadow-sm">
                                                        <i className="fa fa-landmark text-white"></i>
                                                    </span>
                                                    <div>
                                                        <h5 className="mb-0 fw-extrabold text-slate-900 fs-6 text-truncate" title={item.province?.name}>
                                                            {item.province?.name || "Wilayah DPW"}
                                                        </h5>
                                                        <span className="text-emerald-700 fw-bold" style={{ fontSize: "0.72rem" }}>
                                                            Tingkat Provinsi
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="badge-public-official">Resmi</span>
                                            </div>

                                            {/* Map Container */}
                                            <div className="portal-map-box position-relative">
                                                <iframe
                                                    src={mapSrc}
                                                    className="portal-map-frame"
                                                    title={`Peta ${item.province?.name}`}
                                                    loading="lazy"
                                                ></iframe>
                                                <a
                                                    href={gmapsDirectUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-light btn-open-maps-public shadow-sm rounded-pill"
                                                >
                                                    <i className="fa fa-external-link-alt text-primary me-1"></i> Buka Maps
                                                </a>
                                            </div>

                                            {/* Body */}
                                            <div className="card-body p-4 d-flex flex-column justify-content-between">
                                                <div>
                                                    {/* Ketua Box */}
                                                    <div className="p-3 rounded-3 mb-3 portal-ketua-box d-flex align-items-center gap-3">
                                                        <div className="portal-ketua-avatar shadow-sm">
                                                            <i className="fa fa-user-tie text-emerald-800"></i>
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <span className="text-slate-500 text-uppercase fw-bold d-block" style={{ fontSize: "0.68rem", letterSpacing: "0.05em" }}>
                                                                KETUA DPW
                                                            </span>
                                                            <strong className="text-slate-900 fs-6 text-truncate d-block" title={item.name_ketua}>
                                                                {item.name_ketua || "-"}
                                                            </strong>
                                                        </div>
                                                    </div>

                                                    {/* Alamat */}
                                                    <div className="mb-3 d-flex align-items-start gap-2 text-slate-700 small">
                                                        <i className="fa fa-map-marker-alt text-rose-500 mt-1 flex-shrink-0"></i>
                                                        <span className="lh-sm text-slate-600">
                                                            {item.alamat || "Alamat sekretariat belum diatur."}
                                                        </span>
                                                    </div>

                                                    {/* Contact Chips */}
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {cleanPhone && (
                                                            <a
                                                                href={`https://wa.me/${cleanPhone}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn btn-contact-chip btn-whatsapp"
                                                                title="Hubungi via WhatsApp"
                                                            >
                                                                <i className="fa fa-phone-alt me-1.5 text-emerald-600"></i>
                                                                <span>{rawPhone}</span>
                                                            </a>
                                                        )}

                                                        {item.email && (
                                                            <a
                                                                href={`mailto:${item.email}`}
                                                                className="btn btn-contact-chip btn-email"
                                                                title="Kirim Email"
                                                            >
                                                                <i className="fa fa-envelope me-1.5 text-blue-600"></i>
                                                                <span className="text-truncate" style={{ maxWidth: "160px" }}>{item.email}</span>
                                                            </a>
                                                        )}

                                                        {igUrl && (
                                                            <a
                                                                href={igUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn btn-contact-chip btn-instagram"
                                                                title="Kunjungi Instagram"
                                                            >
                                                                <i className="fab fa-instagram me-1.5 text-pink-600"></i>
                                                                <span>Instagram</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-12">
                                <div className="card border-0 rounded-4 shadow-sm p-5 text-center bg-white">
                                    <i className="fa fa-map-marked-alt fa-3x mb-3 text-slate-300"></i>
                                    <h5 className="fw-bold text-slate-800 mb-1">Data Wilayah DPW Tidak Ditemukan</h5>
                                    <p className="text-slate-500 small">
                                        Silakan gunakan kata kunci pencarian yang lain.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-center mb-5">
                        <Pagination links={wilayah.links} align="center" />
                    </div>
                </div>

                <style>{`
                    .text-slate-900 { color: #0f172a; }
                    .text-slate-800 { color: #1e293b; }
                    .text-slate-700 { color: #334155; }
                    .text-slate-600 { color: #475569; }
                    .text-slate-500 { color: #64748b; }
                    .text-slate-400 { color: #94a3b8; }

                    .badge-portal-category {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 5px 14px;
                        border-radius: 9999px;
                        font-weight: 700;
                        font-size: 0.8rem;
                        display: inline-flex;
                        align-items: center;
                    }
                    .btn-emerald-active {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        border: none;
                    }

                    .portal-card-public {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                        transition: all 0.25s ease;
                        background-color: #ffffff;
                    }
                    .portal-card-public:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 14px 28px rgba(15, 23, 42, 0.09) !important;
                        border-color: #94a3b8 !important;
                    }
                    .portal-header-bg {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .portal-dpw-icon {
                        width: 38px;
                        height: 38px;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }
                    .badge-public-official {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 3px 10px;
                        border-radius: 9999px;
                        font-size: 0.72rem;
                        font-weight: 700;
                    }

                    .portal-map-box {
                        height: 190px;
                        width: 100%;
                        background-color: #f1f5f9;
                        overflow: hidden;
                    }
                    .portal-map-frame {
                        width: 100%;
                        height: 100%;
                        border: 0;
                        filter: saturate(0.9);
                    }
                    .btn-open-maps-public {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        font-size: 0.74rem;
                        font-weight: 700;
                        padding: 4px 12px;
                        background-color: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(4px);
                        border: 1px solid #cbd5e1;
                    }

                    .portal-ketua-box {
                        background-color: #f0fdf4;
                        border: 1.5px solid #bbf7d0;
                    }
                    .portal-ketua-avatar {
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        background-color: #dcfce7;
                        border: 1.5px solid #86efac;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 15px;
                        flex-shrink: 0;
                    }

                    .btn-contact-chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 12px;
                        border-radius: 9999px;
                        font-size: 0.76rem;
                        font-weight: 600;
                        text-decoration: none;
                        transition: all 0.2s ease;
                        border: 1px solid;
                    }
                    .btn-whatsapp {
                        background-color: #f0fdf4;
                        color: #166534;
                        border-color: #bbf7d0;
                    }
                    .btn-whatsapp:hover {
                        background-color: #dcfce7;
                        color: #14532d;
                    }
                    .btn-email {
                        background-color: #eff6ff;
                        color: #1e40af;
                        border-color: #bfdbfe;
                    }
                    .btn-email:hover {
                        background-color: #dbeafe;
                        color: #1e3a8a;
                    }
                    .btn-instagram {
                        background-color: #fdf2f8;
                        color: #9d174d;
                        border-color: #fbcfe8;
                    }
                    .btn-instagram:hover {
                        background-color: #fce7f3;
                        color: #831843;
                    }
                `}</style>
            </LayoutWeb>
        </>
    );
}
