//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component delete
import Delete from "../../../Shared/Delete";

export default function DocumentShowSip() {
    const { users } = usePage().props;
    const currentDate = new Date();

    return (
        <LayoutAccount>
            <Head title="Detail Dokumen SIP - IKATWI" />

            <div className="container-fluid py-4 show-doc-container">
                {/* Header Banner */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-file-medical fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-0 fw-bold header-main-title">
                                    Dokumen Surat Izin Praktik (SIP)
                                </h4>
                                <p className="header-subtitle mb-0 mt-1">
                                    Daftar izin operasional praktik pelayanan terapis wicara di fasilitas kesehatan.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap flex-shrink-0">
                            <Link
                                href={`/account/documents/createsip/${users.id}`}
                                className="btn btn-add-doc-teal rounded-pill px-4 py-2 fw-bold shadow-sm"
                            >
                                <i className="fa fa-plus-circle me-1.5"></i>
                                <span>Tambah SIP Baru</span>
                            </Link>
                            <Link
                                href="/account/documents"
                                className="btn btn-back-doc rounded-pill px-4 py-2 fw-bold shadow-sm"
                            >
                                <i className="fa fa-arrow-left me-1.5 text-primary"></i>
                                <span>Kembali ke Dokumen</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Table Card */}
                <div className="card main-table-card rounded-4 shadow-sm overflow-hidden mb-4">
                    <div className="card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <span className="card-icon-pill bg-teal-icon-pill shadow-sm">
                                <i className="fa fa-hospital-user text-white"></i>
                            </span>
                            <div>
                                <h5 className="mb-0 fw-bold table-header-title">
                                    Daftar Surat Izin Praktik (SIP)
                                </h5>
                                <span className="table-header-sub">
                                    Arsip Izin Praktik Terdaftar
                                </span>
                            </div>
                        </div>
                        <span className="badge-total-pill shadow-sm">
                            Total: <strong>{users.surat_sip?.data?.length || 0}</strong> Data
                        </span>
                    </div>

                    <div className="card-body p-0">
                        {users.surat_sip?.data?.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0 custom-doc-table">
                                    <thead className="custom-thead">
                                        <tr>
                                            <th className="ps-4 text-center" style={{ width: "5%" }}>NO</th>
                                            <th style={{ width: "20%" }}>NO. SIP</th>
                                            <th className="text-center" style={{ width: "15%" }}>TGL PENGESAHAN</th>
                                            <th className="text-center" style={{ width: "15%" }}>MASA BERLAKU</th>
                                            <th style={{ width: "20%" }}>KAB/KOTA PENERBIT</th>
                                            <th className="text-center" style={{ width: "10%" }}>STATUS</th>
                                            <th className="text-center" style={{ width: "8%" }}>BERKAS</th>
                                            <th className="pe-4 text-end" style={{ width: "7%" }}>AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="custom-tbody">
                                        {users.surat_sip.data.map((sip, index) => {
                                            const isActive = sip.date_end ? new Date(sip.date_end) >= currentDate : false;
                                            return (
                                                <tr key={sip.id || index} className="doc-row">
                                                    <td className="ps-4 text-center">
                                                        <span className="table-num-pill">
                                                            {index + 1 + (users.surat_sip.current_page - 1) * users.surat_sip.per_page}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="font-monospace fw-bold text-slate-900">
                                                            {sip.no_sip || "-"}
                                                        </div>
                                                    </td>
                                                    <td className="text-center text-slate-700 small">
                                                        {sip.date_start ? new Date(sip.date_start).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                                    </td>
                                                    <td className="text-center text-slate-700 small">
                                                        {sip.date_end ? new Date(sip.date_end).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                                    </td>
                                                    <td className="text-slate-800 fw-semibold">
                                                        {sip.penerbit || "-"}
                                                    </td>
                                                    <td className="text-center">
                                                        {isActive ? (
                                                            <span className="badge-status-active shadow-sm">
                                                                <i className="fa fa-check-circle me-1"></i> Aktif
                                                            </span>
                                                        ) : (
                                                            <span className="badge-status-expired shadow-sm">
                                                                <i className="fa fa-times-circle me-1"></i> Kedaluwarsa
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="text-center">
                                                        {sip.image ? (
                                                            <a
                                                                className="btn-doc-pdf shadow-sm"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                href={sip.image}
                                                            >
                                                                <i className="fa fa-file-pdf me-1"></i>
                                                                <span>PDF</span>
                                                            </a>
                                                        ) : (
                                                            <span className="text-slate-400 small">-</span>
                                                        )}
                                                    </td>
                                                    <td className="pe-4 text-end">
                                                        <Delete
                                                            URL={"/account/documents/hapus_sip"}
                                                            id={sip.id}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-5 text-center empty-state-box">
                                <div className="empty-icon-wrap icon-wrap-teal mb-3 shadow">
                                    <i className="fa fa-file-medical text-teal"></i>
                                </div>
                                <h5 className="fw-bold text-slate-900 mb-2">Belum Ada Dokumen SIP</h5>
                                <p className="text-slate-600 small mb-4">
                                    Silakan tambahkan data dan berkas Surat Izin Praktik (SIP) Anda.
                                </p>
                                <Link
                                    href={`/account/documents/createsip/${users.id}`}
                                    className="btn btn-add-doc-teal rounded-pill px-4 py-2 fw-bold shadow-sm"
                                >
                                    <i className="fa fa-plus-circle me-1.5"></i>
                                    <span>Tambah SIP Sekarang</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .show-doc-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #0891b2 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(8, 145, 178, 0.35);
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
                .btn-add-doc-teal {
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-add-doc-teal:hover {
                    background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(8, 145, 178, 0.35);
                }
                .btn-back-doc {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-back-doc:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Main Table Card */
                .main-table-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 4px solid #0891b2 !important;
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
                .bg-teal-icon-pill {
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1.5px solid #a5f3fc;
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
                    font-size: 0.74rem;
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
                    font-size: 0.86rem;
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
                }
                .badge-status-active {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-weight: 700;
                    font-size: 0.76rem;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-status-expired {
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fecaca;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-weight: 700;
                    font-size: 0.76rem;
                    display: inline-flex;
                    align-items: center;
                }
                .btn-doc-pdf {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    border-radius: 9999px;
                    padding: 4px 10px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-doc-pdf:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                }

                /* Empty state */
                .empty-state-box {
                    padding: 60px 20px !important;
                }
                .empty-icon-wrap {
                    width: 72px;
                    height: 72px;
                    border-radius: 20px;
                    background-color: #ecfeff;
                    border: 2px solid #a5f3fc;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                }
            `}</style>
        </LayoutAccount>
    );
}
