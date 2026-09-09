import React from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Search from "../../../Shared/Search";
import Pagination from "../../../Shared/Pagination";
import Delete from "../../../Shared/Delete";
import hasAnyPermission from "../../../Utils/Permissions";

export default function KegiatanIndex() {
    const { kegiatans } = usePage().props;
    const totalData = kegiatans?.total || (kegiatans?.data ? kegiatans.data.length : 0);

    return (
        <>
            <Head>
                <title>Kelola Agenda Kegiatan - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid px-0 py-3">
                    {/* Header Banner */}
                    <div className="card border-0 rounded-4 shadow-sm mb-4 bg-white p-4">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="kegiatan-icon-square shadow-sm">
                                    <i className="fa fa-calendar-alt text-white fs-4"></i>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <h4 className="fw-extrabold text-slate-900 mb-0">
                                            Agenda Kegiatan IKATWI
                                        </h4>
                                        <span className="badge-official-pill">Manajemen Acara</span>
                                    </div>
                                    <p className="mb-0 text-slate-500 small">
                                        Kelola jadwal seminar, workshop, dan agenda kegiatan resmi organisasi.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                {hasAnyPermission(["kegiatan.create"]) && (
                                    <Link
                                        href="/account/kegiatan/create"
                                        className="btn btn-add-kegiatan rounded-2 px-4 py-2 fw-bold shadow-sm"
                                    >
                                        <i className="fa fa-plus-circle me-1.5"></i>
                                        Tambah Kegiatan
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Toolbar Card */}
                    <div className="card border-0 rounded-4 shadow-sm mb-4 bg-white p-3 p-md-4">
                        <div className="row g-3 align-items-center justify-content-between">
                            <div className="col-12 col-md-7 col-lg-6">
                                <Search URL={"/account/kegiatan"} />
                            </div>

                            <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-md-end align-items-center">
                                <span className="badge-count-pill">
                                    <i className="fa fa-calendar-check me-1.5 text-emerald-600"></i>
                                    Total <strong>{totalData}</strong> Agenda Tercatat
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Table Card */}
                    <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden mb-4 table-card-box">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-thead-custom">
                                        <tr>
                                            <th className="ps-4 py-3" style={{ width: "6%" }}>NO</th>
                                            <th className="py-3" style={{ width: "12%" }}>BANNER</th>
                                            <th className="py-3" style={{ width: "35%" }}>NAMA KEGIATAN</th>
                                            <th className="py-3" style={{ width: "30%" }}>LINK PENDAFTARAN / INFO</th>
                                            <th className="pe-4 py-3 text-end" style={{ width: "17%" }}>AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kegiatans?.data && kegiatans.data.length > 0 ? (
                                            kegiatans.data.map((kegiatan, index) => {
                                                const hasLink = kegiatan.link && kegiatan.link.trim() !== "";
                                                const targetUrl = hasLink
                                                    ? kegiatan.link.startsWith("http")
                                                        ? kegiatan.link
                                                        : `https://${kegiatan.link}`
                                                    : null;

                                                return (
                                                    <tr key={index} className="table-row-custom">
                                                        <td className="ps-4">
                                                            <span className="row-num-pill">
                                                                {++index + (kegiatans.current_page - 1) * kegiatans.per_page}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={kegiatan.image}
                                                                alt={kegiatan.name}
                                                                className="rounded-3 object-fit-cover shadow-sm border"
                                                                style={{ width: "70px", height: "45px" }}
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "/assets/images/logo.png";
                                                                }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <strong className="text-slate-900 d-block fs-6">
                                                                {kegiatan.name}
                                                            </strong>
                                                            <span className="text-slate-400 small" style={{ fontSize: "0.74rem" }}>
                                                                ID: EVT-{kegiatan.id}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            {targetUrl ? (
                                                                <a
                                                                    href={targetUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-primary small fw-semibold text-truncate d-inline-flex align-items-center gap-1.5 text-decoration-none"
                                                                    style={{ maxWidth: "280px" }}
                                                                >
                                                                    <i className="fa fa-arrow-up-right-from-square"></i>
                                                                    <span className="text-truncate">{kegiatan.link}</span>
                                                                </a>
                                                            ) : (
                                                                <span className="text-slate-400 small fst-italic">
                                                                    Tidak ada tautan
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td className="text-end pe-4">
                                                            <div className="d-flex justify-content-end gap-1.5">
                                                                {hasAnyPermission(["kegiatan.edit"]) && (
                                                                    <Link
                                                                        href={`/account/kegiatan/${kegiatan.id}/edit`}
                                                                        className="btn btn-sm btn-edit-action rounded-circle d-flex align-items-center justify-content-center"
                                                                        style={{ width: "32px", height: "32px" }}
                                                                        title="Edit Agenda"
                                                                    >
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>
                                                                )}
                                                                {hasAnyPermission(["kegiatan.delete"]) && (
                                                                    <Delete
                                                                        URL={"/account/kegiatan"}
                                                                        id={kegiatan.id}
                                                                    />
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-5 text-secondary">
                                                    <i className="fa fa-calendar-times fa-3x mb-3 text-slate-300 d-block"></i>
                                                    <h6 className="fw-bold text-slate-700 mb-1">
                                                        Belum Ada Data Agenda Kegiatan
                                                    </h6>
                                                    <p className="text-slate-500 small mb-0">
                                                        Klik tombol "Tambah Kegiatan" di atas untuk menambahkan agenda baru.
                                                    </p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    {kegiatans?.data && kegiatans.data.length > 0 && (
                        <div className="d-flex justify-content-center justify-content-md-end mt-4 mb-3">
                            <Pagination links={kegiatans.links} align="end" />
                        </div>
                    )}
                </div>

                <style>{`
                    .text-slate-900 { color: #0f172a; }
                    .text-slate-700 { color: #334155; }
                    .text-slate-500 { color: #64748b; }
                    .text-slate-400 { color: #94a3b8; }

                    .kegiatan-icon-square {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    }

                    .badge-official-pill {
                        background-color: #ecfdf5;
                        color: #047857;
                        border: 1px solid #a7f3d0;
                        padding: 3px 10px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.74rem;
                    }

                    .btn-add-kegiatan {
                        background: linear-gradient(135deg, #059669 0%, #047857 100%);
                        color: #ffffff;
                        border: none;
                        transition: all 0.2s ease;
                    }
                    .btn-add-kegiatan:hover {
                        background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
                        color: #ffffff;
                        transform: translateY(-1px);
                    }

                    .badge-count-pill {
                        background-color: #f8fafc;
                        color: #334155;
                        border: 1.5px solid #e2e8f0;
                        padding: 6px 14px;
                        border-radius: 6px;
                        font-size: 0.8rem;
                    }

                    .table-card-box {
                        border: 1.5px solid #cbd5e1 !important;
                        border-top: 4px solid #059669 !important;
                    }
                    .table-thead-custom {
                        background-color: #f8fafc;
                        color: #1e293b;
                        font-size: 0.75rem;
                        letter-spacing: 0.04em;
                        border-bottom: 1.5px solid #e2e8f0;
                    }
                    .table-row-custom {
                        transition: background-color 0.15s ease;
                    }
                    .table-row-custom:hover {
                        background-color: #f8fafc;
                    }

                    .row-num-pill {
                        background-color: #f1f5f9;
                        color: #475569;
                        border: 1px solid #cbd5e1;
                        padding: 3px 8px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 0.75rem;
                    }

                    .btn-edit-action {
                        background-color: #eff6ff;
                        color: #1d4ed8;
                        border: 1.5px solid #bfdbfe;
                        transition: all 0.2s ease;
                    }
                    .btn-edit-action:hover {
                        background-color: #1d4ed8;
                        color: #ffffff;
                        border-color: #1d4ed8;
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}
