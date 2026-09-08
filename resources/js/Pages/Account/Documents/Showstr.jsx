//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component delete
import Delete from "../../../Shared/Delete";

export default function DocumentShowStr() {
    const { users } = usePage().props;
    const currentDate = new Date();

    return (
        <LayoutAccount>
            <Head title="Detail Dokumen STR - IKATWI" />

            <div className="container-fluid py-4 show-doc-container">
                {/* Header Banner */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-certificate fa-2x text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-0 fw-bold header-main-title">
                                    Dokumen Surat Tanda Registrasi (STR)
                                </h4>
                                <p className="header-subtitle mb-0 mt-1">
                                    Arsip bukti registrasi tenaga kesehatan terapis wicara resmi dari pemerintah.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap flex-shrink-0">
                            <Link
                                href={`/account/documents/createstr/${users.id}`}
                                className="btn btn-add-doc-emerald rounded-pill px-4 py-2 fw-bold shadow-sm"
                            >
                                <i className="fa fa-plus-circle me-1.5"></i>
                                <span>Tambah STR Baru</span>
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
                            <span className="card-icon-pill bg-emerald-icon-pill shadow-sm">
                                <i className="fa fa-file-contract text-white"></i>
                            </span>
                            <div>
                                <h5 className="mb-0 fw-bold table-header-title">
                                    Daftar Surat Tanda Registrasi (STR)
                                </h5>
                                <span className="table-header-sub">
                                    Arsip STR Terapis Wicara Terdaftar
                                </span>
                            </div>
                        </div>
                        <span className="badge-total-pill shadow-sm">
                            Total: <strong>{users.surat_strs?.data?.length || 0}</strong> Data
                        </span>
                    </div>

                    <div className="card-body p-0">
                        {users.surat_strs?.data?.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0 custom-doc-table">
                                    <thead className="custom-thead">
                                        <tr>
                                            <th className="ps-4 text-center" style={{ width: "5%" }}>NO</th>
                                            <th style={{ width: "20%" }}>NO. STR</th>
                                            <th className="text-center" style={{ width: "15%" }}>TGL PENGESAHAN</th>
                                            <th className="text-center" style={{ width: "15%" }}>MASA BERLAKU</th>
                                            <th style={{ width: "20%" }}>NO. SERTIFIKAT KOMPETENSI</th>
                                            <th className="text-center" style={{ width: "10%" }}>STATUS</th>
                                            <th className="text-center" style={{ width: "8%" }}>BERKAS</th>
                                            <th className="pe-4 text-end" style={{ width: "7%" }}>AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="custom-tbody">
                                        {users.surat_strs.data.map((strs, index) => {
                                            const isActive = strs.date_end ? new Date(strs.date_end) >= currentDate : false;
                                            return (
                                                <tr key={strs.id || index} className="doc-row">
                                                    <td className="ps-4 text-center">
                                                        <span className="table-num-pill">
                                                            {index + 1 + (users.surat_strs.current_page - 1) * users.surat_strs.per_page}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="font-monospace fw-bold text-slate-900">
                                                            {strs.no_str || "-"}
                                                        </div>
                                                    </td>
                                                    <td className="text-center text-slate-700 small">
                                                        {strs.date_start ? new Date(strs.date_start).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                                    </td>
                                                    <td className="text-center text-slate-700 small">
                                                        {strs.date_end ? new Date(strs.date_end).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                                    </td>
                                                    <td className="font-monospace text-slate-800 small">
                                                        {strs.no_sertifikat || "-"}
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
                                                        {strs.image ? (
                                                            <a
                                                                className="btn-doc-pdf shadow-sm"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                href={strs.image}
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
                                                            URL={"/account/documents/hapus_str"}
                                                            id={strs.id}
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
                                <div className="empty-icon-wrap icon-wrap-emerald mb-3 shadow">
                                    <i className="fa fa-certificate text-emerald-600"></i>
                                </div>
                                <h5 className="fw-bold text-slate-900 mb-2">Belum Ada Dokumen STR</h5>
                                <p className="text-slate-600 small mb-4">
                                    Silakan tambahkan data dan berkas Surat Tanda Registrasi (STR) Anda.
                                </p>
                                <Link
                                    href={`/account/documents/createstr/${users.id}`}
                                    className="btn btn-add-doc-emerald rounded-pill px-4 py-2 fw-bold shadow-sm"
                                >
                                    <i className="fa fa-plus-circle me-1.5"></i>
                                    <span>Tambah STR Sekarang</span>
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
                    border-left: 6px solid #059669 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
                .btn-add-doc-emerald {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-add-doc-emerald:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
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
                    background-color: #ecfdf5;
                    border: 2px solid #a7f3d0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                }
            `}</style>
        </LayoutAccount>
    );
}
