import React, { useState } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../../Shared/Pagination";
import Delete from "../../../Shared/Delete";
import hasAnyPermission from "../../../Utils/Permissions";

export default function VerifikasiList() {
    const { users, provinces, cities, filters } = usePage().props;

    const [search, setSearch] = useState(filters?.q || "");
    const [selectedDpw, setSelectedDpw] = useState(filters?.province_id || "");
    const [selectedDpc, setSelectedDpc] = useState(filters?.city_id || "");

    // Filter cities based on selected DPW
    const filteredCities = selectedDpw
        ? (cities || []).filter((city) => String(city.province_id) === String(selectedDpw))
        : (cities || []);

    const handleDpwChange = (e) => {
        const dpwId = e.target.value;
        setSelectedDpw(dpwId);
        setSelectedDpc(""); // reset DPC selection when DPW changes
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        Inertia.get("/account/verifikasi-users", {
            q: search,
            province_id: selectedDpw,
            city_id: selectedDpc,
        }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleReset = () => {
        setSearch("");
        setSelectedDpw("");
        setSelectedDpc("");
        Inertia.get("/account/verifikasi-users", {}, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <LayoutAccount>
            <Head title="Verifikasi Anggota Baru - IKATWI" />

            <div className="container-fluid py-4 verifikasi-page-container">
                {/* Header Banner Box */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-user-check fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <h4 className="mb-0 fw-bold header-main-title">
                                        Verifikasi Anggota Baru
                                    </h4>
                                    {users.total > 0 ? (
                                        <span className="badge-pending-count shadow-sm">
                                            <i className="fa fa-clock me-1"></i>
                                            {users.total} Menunggu Verifikasi
                                        </span>
                                    ) : (
                                        <span className="badge-verified-all shadow-sm">
                                            <i className="fa fa-check-circle me-1"></i>
                                            Semua Sudah Terverifikasi
                                        </span>
                                    )}
                                </div>
                                <p className="header-subtitle mb-0 mt-1">
                                    Kelola pendaftaran anggota baru IKATWI, periksa berkas pakta integritas, dan terbitkan Nomor Anggota resmi.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap flex-shrink-0">
                            <Link
                                href="/account/users"
                                className="btn btn-all-users rounded-pill px-4 py-2 fw-bold shadow-sm"
                            >
                                <i className="fa fa-users me-1.5 text-primary"></i>
                                <span>Semua User Terdaftar</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Filter & Search Bar Card */}
                <div className="card filter-card rounded-4 shadow-sm mb-4">
                    <div className="card-header filter-card-header py-2.5 px-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <i className="fa fa-sliders-h text-primary"></i>
                            <span className="fw-bold small text-uppercase text-slate-800" style={{ letterSpacing: '0.05em' }}>
                                Filter &amp; Pencarian Data
                            </span>
                        </div>
                        {(search || selectedDpw || selectedDpc) && (
                            <span className="badge-active-filter shadow-sm">
                                <i className="fa fa-filter me-1"></i> Filter Aktif
                            </span>
                        )}
                    </div>
                    <div className="card-body p-4">
                        <form onSubmit={handleFilterSubmit} className="row g-3 align-items-end">
                            {/* Search Input */}
                            <div className="col-12 col-md-4">
                                <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                    <i className="fa fa-search me-1.5 text-primary"></i> Cari Anggota
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-custom"
                                    placeholder="Ketik Nama, Email, NIK, atau No HP..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            {/* Filter DPW */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                    <i className="fa fa-landmark me-1.5 text-emerald-600"></i> Filter DPW (Provinsi)
                                </label>
                                <select
                                    className="form-select form-control-custom"
                                    value={selectedDpw}
                                    onChange={handleDpwChange}
                                >
                                    <option value="">Semua Wilayah DPW</option>
                                    {(provinces || []).map((prov) => (
                                        <option key={prov.id} value={prov.id}>
                                            {prov.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Filter DPC */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <label className="form-label small fw-bold text-slate-800 mb-1.5 text-uppercase">
                                    <i className="fa fa-city me-1.5 text-indigo-600"></i> Filter DPC (Kota/Kab)
                                </label>
                                <select
                                    className="form-select form-control-custom"
                                    value={selectedDpc}
                                    onChange={(e) => setSelectedDpc(e.target.value)}
                                >
                                    <option value="">Semua Cabang DPC</option>
                                    {filteredCities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="col-12 col-md-2 d-flex gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-filter-action flex-fill d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"
                                >
                                    <i className="fa fa-filter"></i>
                                    <span>Terapkan</span>
                                </button>
                                {(search || selectedDpw || selectedDpc) && (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="btn btn-reset-action d-inline-flex align-items-center justify-content-center shadow-sm"
                                        title="Reset Filter"
                                    >
                                        <i className="fa fa-undo"></i>
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Main Table Card */}
                <div className="card main-table-card rounded-4 shadow-sm overflow-hidden mb-4">
                    <div className="card-header table-card-header py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-3">
                            <span className="card-icon-pill bg-emerald-icon-pill shadow-sm">
                                <i className="fa fa-user-clock text-white"></i>
                            </span>
                            <div>
                                <h5 className="mb-0 fw-bold table-header-title">
                                    Daftar Pendaftar Baru Menunggu Persetujuan
                                </h5>
                                <span className="table-header-sub">
                                    Verifikasi berkas pakta integritas &amp; terbitkan nomor anggota resmi IKATWI
                                </span>
                            </div>
                        </div>
                        <div className="badge-total-pill shadow-sm">
                            <span className="text-slate-600 fw-normal">Total:</span> <strong>{users.total}</strong> pendaftar
                        </div>
                    </div>

                    <div className="card-body p-0">
                        {users.data.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0 custom-verif-table">
                                    <thead className="custom-thead">
                                        <tr>
                                            <th className="ps-4 text-center" style={{ width: '5%' }}>NO</th>
                                            <th className="text-center" style={{ width: '6%' }}>FOTO</th>
                                            <th style={{ width: '28%' }}>NAMA &amp; IDENTITAS</th>
                                            <th style={{ width: '23%' }}>WILAYAH (DPW / DPC)</th>
                                            <th className="text-center" style={{ width: '13%' }}>PAKTA INTEGRITAS</th>
                                            <th style={{ width: '13%' }}>TANGGAL DAFTAR</th>
                                            <th className="pe-4 text-end" style={{ width: '12%' }}>AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="custom-tbody">
                                        {users.data.map((user, index) => {
                                            const rowNumber = index + 1 + (users.current_page - 1) * users.per_page;
                                            return (
                                                <tr key={user.id} className="verif-row">
                                                    <td className="ps-4 text-center">
                                                        <span className="table-num-pill">{rowNumber}</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="position-relative d-inline-block">
                                                            <img
                                                                src={user.image || "/assets/images/user.png"}
                                                                alt={user.name}
                                                                className="rounded-circle user-avatar-img shadow-sm"
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "/assets/images/user.png";
                                                                }}
                                                            />
                                                            <span
                                                                className="position-absolute bottom-0 end-0 bg-warning border border-white rounded-circle avatar-status-dot"
                                                                title="Menunggu Verifikasi"
                                                            ></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="fw-bold text-slate-900 fs-6" style={{ letterSpacing: '-0.01em' }}>
                                                            {user.name}
                                                        </div>
                                                        {user.email && (
                                                            <div className="d-flex align-items-center gap-1.5 mt-1 text-slate-600 small" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                                                                <i className="fa fa-envelope text-slate-400" style={{ width: '14px', fontSize: '0.75rem' }}></i>
                                                                <span>{user.email}</span>
                                                            </div>
                                                        )}
                                                        {user.nik && (
                                                            <div className="d-flex align-items-center gap-1.5 mt-1">
                                                                <span className="badge-nik-sub shadow-sm font-monospace">
                                                                    <i className="fa fa-fingerprint me-1 text-slate-500"></i>
                                                                    NIK: {user.nik}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {user.phone && (
                                                            <div className="d-flex align-items-center gap-1.5 mt-1 text-slate-600 small" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                                                                <i className="fa fa-phone text-slate-400" style={{ width: '14px', fontSize: '0.75rem' }}></i>
                                                                <span>{user.phone}</span>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span className="badge-dpw-sub shadow-sm">
                                                                <i className="fa fa-landmark text-emerald-600 me-1"></i>
                                                                <span>{user.province?.name || "Belum diatur"}</span>
                                                            </span>
                                                        </div>
                                                        <div className="mt-1.5">
                                                            <span className="badge-dpc-sub shadow-sm">
                                                                <i className="fa fa-city text-indigo-600 me-1"></i>
                                                                <span>{user.city?.name || "Belum diatur"}</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        {user.filepakta ? (
                                                            <a
                                                                href={user.filepakta}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn-pakta-pdf shadow-sm"
                                                            >
                                                                <i className="fa fa-file-pdf me-1"></i>
                                                                <span>Lihat PDF</span>
                                                            </a>
                                                        ) : (
                                                            <span className="badge-no-pakta">
                                                                Belum Upload
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div className="fw-semibold text-slate-700 small">
                                                            <i className="fa fa-calendar-alt text-slate-400 me-1"></i>
                                                            {user.created_at ? new Date(user.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                                        </div>
                                                    </td>
                                                    <td className="pe-4 text-end">
                                                        <div className="d-flex justify-content-end gap-1.5">
                                                            {/* Approve / Verify Button */}
                                                            {hasAnyPermission(["users.edit"]) && (
                                                                <Link
                                                                    href={`/account/users/verifikasiAnggota/${user.id}`}
                                                                    className="btn btn-sm btn-verif-action shadow-sm"
                                                                    title="Verifikasi & Terbitkan No Anggota"
                                                                >
                                                                    <i className="fa fa-check-circle me-1"></i>
                                                                    <span>Verifikasi</span>
                                                                </Link>
                                                            )}

                                                            {/* Edit Detail */}
                                                            {hasAnyPermission(["users.edit"]) && (
                                                                <Link
                                                                    href={`/account/users/${user.id}/edit`}
                                                                    className="btn btn-sm btn-action-edit shadow-sm"
                                                                    title="Edit Data User"
                                                                >
                                                                    <i className="fa fa-pen"></i>
                                                                </Link>
                                                            )}

                                                            {/* Delete User */}
                                                            {hasAnyPermission(["users.delete"]) && (
                                                                <Delete
                                                                    URL={"/account/users"}
                                                                    id={user.id}
                                                                    className="btn btn-sm btn-action-delete shadow-sm"
                                                                    title="Hapus User"
                                                                />
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-5 text-center empty-state-box">
                                <div className="empty-icon-wrap mb-3 shadow">
                                    <i className="fa fa-shield-alt text-emerald-600"></i>
                                </div>
                                <h4 className="fw-bold text-slate-900 mb-2">Tidak Ada Anggota Menunggu Verifikasi</h4>
                                <p className="text-slate-600 mx-auto mb-4 empty-desc">
                                    Semua pendaftaran anggota baru telah selesai diverifikasi atau tidak ada data pendaftar yang cocok dengan kriteria filter saat ini.
                                </p>
                                <div className="d-flex justify-content-center gap-2 flex-wrap">
                                    {(search || selectedDpw || selectedDpc) ? (
                                        <button
                                            onClick={handleReset}
                                            className="btn btn-outline-emerald rounded-pill px-4 py-2 fw-bold shadow-sm"
                                        >
                                            <i className="fa fa-undo me-1.5"></i> Reset Filter Pencarian
                                        </button>
                                    ) : (
                                        <Link
                                            href="/account/users"
                                            className="btn btn-outline-emerald rounded-pill px-4 py-2 fw-bold shadow-sm"
                                        >
                                            <i className="fa fa-users me-1.5"></i> Lihat Semua Anggota Terdaftar
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pagination Footer */}
                    {users.data.length > 0 && (
                        <div className="card-footer table-card-footer py-3 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
                            <div className="text-slate-600 small">
                                Menampilkan <strong>{users.data.length}</strong> dari <strong>{users.total}</strong> pendaftar baru
                            </div>
                            <Pagination links={users.links} align="end" />
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .verifikasi-page-container {
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
                .badge-pending-count {
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-verified-all {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .btn-all-users {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-all-users:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
                }

                /* Filter Card */
                .filter-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 3.5px solid #3b82f6 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .filter-card-header {
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    border-bottom: 1.5px solid #e2e8f0;
                }
                .badge-active-filter {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1px solid #bfdbfe;
                    padding: 3px 10px;
                    border-radius: 9999px;
                    font-size: 0.74rem;
                    font-weight: 700;
                }
                .form-control-custom {
                    height: 42px;
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    font-size: 0.86rem;
                    color: #0f172a;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .form-control-custom:focus {
                    background-color: #ffffff;
                    border-color: #059669;
                    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
                    color: #0f172a;
                }
                .btn-filter-action {
                    height: 42px;
                    border-radius: 10px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-filter-action:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
                }
                .btn-reset-action {
                    height: 42px;
                    width: 42px;
                    border-radius: 10px;
                    border: 1.5px solid #cbd5e1;
                    background-color: #ffffff;
                    color: #475569;
                    transition: all 0.2s ease;
                }
                .btn-reset-action:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    border-color: #94a3b8;
                    transform: translateY(-1px);
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
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }

                /* Table Styling */
                .custom-verif-table {
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
                .verif-row td {
                    padding: 16px 12px;
                    border-bottom: 1px solid #e2e8f0;
                    vertical-align: middle;
                }
                .verif-row:hover td {
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
                .user-avatar-img {
                    width: 42px;
                    height: 42px;
                    object-fit: cover;
                    border: 2px solid #cbd5e1;
                }
                .avatar-status-dot {
                    width: 12px;
                    height: 12px;
                }
                .badge-nik-sub {
                    background-color: #eff6ff;
                    color: #1e40af;
                    border: 1px solid #bfdbfe;
                    border-radius: 6px;
                    padding: 2px 8px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-dpw-sub {
                    background-color: #ecfdf5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                    border-radius: 6px;
                    padding: 3px 10px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-dpc-sub {
                    background-color: #eef2ff;
                    color: #3730a3;
                    border: 1px solid #c7d2fe;
                    border-radius: 6px;
                    padding: 3px 10px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .btn-pakta-pdf {
                    display: inline-flex;
                    align-items: center;
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1.5px solid #fca5a5;
                    border-radius: 9999px;
                    padding: 5px 12px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .btn-pakta-pdf:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                }
                .badge-no-pakta {
                    display: inline-flex;
                    align-items: center;
                    background-color: #f1f5f9;
                    color: #94a3b8;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    padding: 3px 8px;
                    font-size: 0.74rem;
                    font-weight: 600;
                }

                /* Action buttons */
                .btn-verif-action {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    padding: 6px 14px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                .btn-verif-action:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(5, 150, 105, 0.35);
                }
                .btn-action-edit {
                    width: 34px;
                    height: 34px;
                    border-radius: 8px;
                    background-color: #eff6ff;
                    border: 1.5px solid #93c5fd;
                    color: #1d4ed8;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                }
                .btn-action-edit:hover {
                    background-color: #dbeafe;
                    color: #1e40af;
                    transform: translateY(-1px);
                }
                .btn-action-delete {
                    width: 34px;
                    height: 34px;
                    border-radius: 8px;
                    background-color: #fef2f2;
                    border: 1.5px solid #fca5a5;
                    color: #dc2626;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                }
                .btn-action-delete:hover {
                    background-color: #fee2e2;
                    color: #b91c1c;
                    transform: translateY(-1px);
                }

                /* Empty state */
                .empty-state-box {
                    padding: 65px 24px !important;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                }
                .empty-icon-wrap {
                    width: 76px;
                    height: 76px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
                    border: 2px solid #6ee7b7;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 36px;
                    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.2);
                }
                .empty-desc {
                    max-width: 520px;
                    font-size: 0.92rem;
                    font-weight: 500;
                    line-height: 1.5;
                }
                .btn-outline-emerald {
                    background-color: #ffffff;
                    border: 1.5px solid #059669;
                    color: #059669;
                    font-size: 0.86rem;
                    transition: all 0.2s ease;
                }
                .btn-outline-emerald:hover {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border-color: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
                }

                /* Footer */
                .table-card-footer {
                    background-color: #f8fafc;
                    border-top: 1.5px solid #e2e8f0;
                }
            `}</style>
        </LayoutAccount>
    );
}
