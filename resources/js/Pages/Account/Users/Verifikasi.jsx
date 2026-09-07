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

            <div className="verifikasi-page">
                {/* Header Title Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <h1 className="h4 text-dark fw-bold mb-0 d-flex align-items-center gap-2" style={{ letterSpacing: '-0.01em' }}>
                                <i className="fa fa-user-check text-dark"></i>
                                <span>Verifikasi Anggota Baru</span>
                            </h1>
                            {users.total > 0 && (
                                <span
                                    className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill fw-bold"
                                    style={{
                                        backgroundColor: '#fef2f2',
                                        color: '#dc2626',
                                        border: '1px solid #fecaca',
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    <i className="fa fa-clock" style={{ fontSize: '0.7rem' }}></i>
                                    {users.total} Menunggu
                                </span>
                            )}
                        </div>
                        <p className="text-muted small mb-0 mt-1">
                            Kelola pendaftaran anggota baru IKATWI, periksa berkas pakta integritas, dan terbitkan Nomor Anggota resmi.
                        </p>
                    </div>

                    <div className="d-flex gap-2">
                        <Link
                            href="/account/users"
                            className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 text-decoration-none shadow-sm"
                            style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#334155', borderRadius: '8px', fontWeight: 600, fontSize: '0.84rem' }}
                        >
                            <i className="fa fa-users text-dark"></i>
                            <span>Semua User Terdaftar</span>
                        </Link>
                    </div>
                </div>

                {/* Filter & Search Bar Card */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <div className="card-body p-3 p-md-4">
                        <form onSubmit={handleFilterSubmit} className="row g-3 align-items-end">
                            {/* Search Input */}
                            <div className="col-12 col-md-4">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-search me-1 text-muted"></i> Cari Anggota
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Ketik Nama, Email, NIK, atau No HP..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem', color: '#1e293b' }}
                                />
                            </div>

                            {/* Filter DPW */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-landmark me-1 text-muted"></i> Filter DPW (Provinsi)
                                </label>
                                <select
                                    className="form-select form-select-sm"
                                    value={selectedDpw}
                                    onChange={handleDpwChange}
                                    style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem', color: '#1e293b' }}
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
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-city me-1 text-muted"></i> Filter DPC (Kota/Kab)
                                </label>
                                <select
                                    className="form-select form-select-sm"
                                    value={selectedDpc}
                                    onChange={(e) => setSelectedDpc(e.target.value)}
                                    style={{ height: '40px', borderRadius: '8px', borderColor: '#cbd5e1', backgroundColor: '#f8fafc', fontSize: '0.85rem', color: '#1e293b' }}
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
                                    className="btn btn-sm flex-fill d-inline-flex align-items-center justify-content-center gap-2 text-white border-0 shadow-sm"
                                    style={{
                                        height: '40px',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        backgroundColor: '#0f172a',
                                        fontSize: '0.85rem'
                                    }}
                                >
                                    <i className="fa fa-filter"></i>
                                    <span>Filter</span>
                                </button>
                                {(search || selectedDpw || selectedDpc) && (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="btn btn-sm d-inline-flex align-items-center justify-content-center"
                                        style={{ height: '40px', borderRadius: '8px', width: '40px', borderColor: '#cbd5e1', backgroundColor: '#ffffff', color: '#64748b', border: '1px solid #cbd5e1' }}
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
                <div className="card border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}>
                    <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center" style={{ borderColor: '#e2e8f0' }}>
                        <div className="d-flex align-items-center gap-2">
                            <i className="fa fa-user-clock text-dark fs-5"></i>
                            <span className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>Daftar Pendaftar Baru Menunggu Persetujuan</span>
                        </div>
                        <div
                            className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill"
                            style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '0.8rem', fontWeight: 600 }}
                        >
                            <span className="text-muted fw-normal">Total:</span> <strong className="text-dark">{users.total}</strong> pendaftar
                        </div>
                    </div>

                    <div className="card-body p-0">
                        {users.data.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-custom align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th className="ps-4" style={{ width: '5%', textAlign: 'center' }}>No</th>
                                            <th style={{ width: '6%', textAlign: 'center' }}>Foto</th>
                                            <th style={{ width: '26%' }}>Nama & Identitas</th>
                                            <th style={{ width: '24%' }}>Wilayah (DPW / DPC)</th>
                                            <th style={{ width: '14%', textAlign: 'center' }}>Pakta Integritas</th>
                                            <th style={{ width: '13%' }}>Tanggal Daftar</th>
                                            <th className="pe-4" style={{ width: '12%', textAlign: 'center' }}>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((user, index) => {
                                            const rowNumber = index + 1 + (users.current_page - 1) * users.per_page;
                                            return (
                                                <tr key={user.id}>
                                                    <td className="ps-4 text-center">
                                                        <span className="table-num-pill">{rowNumber}</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="position-relative d-inline-block">
                                                            <img
                                                                src={user.image || "/assets/images/user.png"}
                                                                alt={user.name}
                                                                className="rounded-circle"
                                                                style={{
                                                                    width: '38px',
                                                                    height: '38px',
                                                                    objectFit: 'cover',
                                                                    border: '2px solid #cbd5e1',
                                                                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                                                                }}
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "/assets/images/user.png";
                                                                }}
                                                            />
                                                            <span
                                                                className="position-absolute bottom-0 end-0 bg-warning border border-white rounded-circle"
                                                                style={{ width: '10px', height: '10px' }}
                                                                title="Menunggu Verifikasi"
                                                            ></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="fw-bold" style={{ fontSize: '0.92rem', color: '#0f172a', letterSpacing: '-0.01em' }}>
                                                            {user.name}
                                                        </div>
                                                        {user.email && (
                                                            <div className="d-flex align-items-center gap-1 mt-0.5" style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>
                                                                <i className="fa fa-envelope text-muted" style={{ width: '14px', fontSize: '0.72rem' }}></i>
                                                                <span>{user.email}</span>
                                                            </div>
                                                        )}
                                                        {user.nik && (
                                                            <div className="d-flex align-items-center gap-1 font-monospace mt-0.5" style={{ color: '#334155', fontSize: '0.78rem', fontWeight: 600 }}>
                                                                <i className="fa fa-id-card text-muted" style={{ width: '14px', fontSize: '0.72rem' }}></i>
                                                                <span>NIK: {user.nik}</span>
                                                            </div>
                                                        )}
                                                        {user.phone && (
                                                            <div className="d-flex align-items-center gap-1 mt-0.5" style={{ color: '#475569', fontSize: '0.78rem', fontWeight: 500 }}>
                                                                <i className="fa fa-phone text-muted" style={{ width: '14px', fontSize: '0.72rem' }}></i>
                                                                <span>{user.phone}</span>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div
                                                            style={{
                                                                backgroundColor: '#f0fdf4',
                                                                color: '#166534',
                                                                border: '1px solid #bbf7d0',
                                                                fontSize: '0.78rem',
                                                                fontWeight: 700,
                                                                borderRadius: '6px',
                                                                padding: '3px 9px',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '6px'
                                                            }}
                                                        >
                                                            <i className="fa fa-landmark text-success" style={{ fontSize: '0.72rem' }}></i>
                                                            <span>{user.province?.name || "Belum diatur"}</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-1 mt-1" style={{ color: '#334155', fontSize: '0.78rem', fontWeight: 600 }}>
                                                            <i className="fa fa-city text-secondary" style={{ fontSize: '0.72rem' }}></i>
                                                            <span>{user.city?.name || "Belum diatur"}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        {user.filepakta ? (
                                                            <a
                                                                href={user.filepakta}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="d-inline-flex align-items-center gap-1 px-2.5 py-1 rounded-pill text-decoration-none shadow-sm"
                                                                style={{
                                                                    backgroundColor: '#fef2f2',
                                                                    color: '#dc2626',
                                                                    border: '1px solid #fca5a5',
                                                                    fontSize: '0.75rem',
                                                                    fontWeight: 700
                                                                }}
                                                            >
                                                                <i className="fa fa-file-pdf"></i>
                                                                <span>Lihat PDF</span>
                                                            </a>
                                                        ) : (
                                                            <span
                                                                className="d-inline-flex align-items-center px-2 py-1 rounded"
                                                                style={{ backgroundColor: '#f1f5f9', color: '#94a3b8', border: '1px solid #e2e8f0', fontSize: '0.74rem' }}
                                                            >
                                                                Belum Upload
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div className="fw-semibold text-dark" style={{ fontSize: '0.82rem' }}>
                                                            {user.created_at ? new Date(user.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                                                        </div>
                                                    </td>
                                                    <td className="pe-4 text-center">
                                                        <div className="d-flex justify-content-center gap-1">
                                                            {/* Approve / Verify Button */}
                                                            {hasAnyPermission(["users.edit"]) && (
                                                                <Link
                                                                    href={`/account/users/verifikasiAnggota/${user.id}`}
                                                                    className="btn btn-sm d-inline-flex align-items-center gap-1 px-2.5 py-1 text-white text-decoration-none shadow-sm border-0"
                                                                    style={{
                                                                        backgroundColor: '#059669',
                                                                        borderRadius: '8px',
                                                                        fontSize: '0.78rem',
                                                                        fontWeight: 600
                                                                    }}
                                                                    title="Verifikasi & Terbitkan No Anggota"
                                                                >
                                                                    <i className="fa fa-check-circle"></i>
                                                                    <span>Verifikasi</span>
                                                                </Link>
                                                            )}

                                                            {/* Edit Detail */}
                                                            {hasAnyPermission(["users.edit"]) && (
                                                                <Link
                                                                    href={`/account/users/${user.id}/edit`}
                                                                    className="btn btn-sm d-inline-flex align-items-center justify-content-center shadow-sm"
                                                                    style={{
                                                                        width: '34px',
                                                                        height: '34px',
                                                                        borderRadius: '8px',
                                                                        backgroundColor: '#eff6ff',
                                                                        border: '1px solid #93c5fd',
                                                                        color: '#1d4ed8'
                                                                    }}
                                                                    title="Edit Data User"
                                                                >
                                                                    <i className="fa fa-pen" style={{ fontSize: '0.8rem' }}></i>
                                                                </Link>
                                                            )}

                                                            {/* Delete User */}
                                                            {hasAnyPermission(["users.delete"]) && (
                                                                <Delete
                                                                    URL={"/account/users"}
                                                                    id={user.id}
                                                                    className="btn btn-sm d-inline-flex align-items-center justify-content-center shadow-sm"
                                                                    style={{
                                                                        width: '34px',
                                                                        height: '34px',
                                                                        borderRadius: '8px',
                                                                        backgroundColor: '#fef2f2',
                                                                        border: '1px solid #fca5a5',
                                                                        color: '#dc2626'
                                                                    }}
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
                            <div className="p-5 text-center">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                                    style={{ width: '64px', height: '64px', backgroundColor: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' }}
                                >
                                    <i className="fa fa-check-circle fs-2"></i>
                                </div>
                                <h5 className="fw-bold text-dark">Tidak Ada Anggota Menunggu Verifikasi</h5>
                                <p className="text-muted small mb-3">
                                    Semua pendaftaran baru sudah diverifikasi atau tidak ada data yang cocok dengan filter yang dipilih.
                                </p>
                                {(search || selectedDpw || selectedDpc) && (
                                    <button
                                        onClick={handleReset}
                                        className="btn btn-sm btn-light border rounded-pill px-3"
                                        style={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', color: '#475569' }}
                                    >
                                        <i className="fa fa-undo me-1"></i> Reset Filter
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Pagination Footer */}
                    {users.data.length > 0 && (
                        <div className="card-footer bg-white border-top py-3 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2" style={{ borderColor: '#e2e8f0' }}>
                            <div className="text-muted small">
                                Menampilkan <strong>{users.data.length}</strong> dari <strong>{users.total}</strong> pendaftar baru
                            </div>
                            <Pagination links={users.links} align="end" />
                        </div>
                    )}
                </div>
            </div>
        </LayoutAccount>
    );
}

