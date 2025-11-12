//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function UserIndex() {
    //destruct props "users"
    const { users, users2 } = usePage().props;

    return (
        <>
            <Head>
                <title>Manajemen User - IKATWI</title>
                <style>{`
                    .page-header {
                        border-bottom: 2px solid #e9ecef;
                        padding-bottom: 1rem;
                    }
                    
                    .action-card {
                        border: 1px solid #dee2e6;
                        border-radius: 0.5rem;
                        background: #f8f9fa;
                    }
                    
                    .avatar-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }
                    
                    .avatar-img {
                        object-fit: cover;
                        border: 2px solid #dee2e6;
                    }
                    
                    .border-top-admin {
                        border-top: 4px solid #007bff !important;
                    }
                    
                    .table > :not(caption) > * > * {
                        padding: 0.75rem 0.5rem;
                        vertical-align: middle;
                    }
                    
                    .user-table {
                        font-size: 0.9rem;
                    }
                    
                    .user-table th {
                        background-color: #f8f9fa;
                        font-weight: 600;
                        color: #495057;
                        border-bottom: 2px solid #dee2e6;
                    }
                    
                    .status-verified {
                        background-color: #d1e7dd !important;
                        border-left: 4px solid #198754;
                    }
                    
                    .status-pending {
                        background-color: #fff3cd !important;
                        border-left: 4px solid #ffc107;
                    }
                    
                    .table-hover tbody tr:hover {
                        background-color: rgba(0, 123, 255, 0.08) !important;
                        transform: translateY(-1px);
                        transition: all 0.2s ease;
                    }
                    
                    .badge-role {
                        font-size: 0.75em;
                        padding: 0.35em 0.65em;
                    }
                    
                    .badge-dpw {
                        background-color: #17a2b8;
                    }
                    
                    .badge-dpc {
                        background-color: #6c757d;
                    }
                    
                    .btn-action {
                        width: 32px;
                        height: 32px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0.375rem;
                    }
                    
                    .section-title {
                        color: #2c3e50;
                        font-weight: 600;
                        margin-bottom: 1rem;
                    }
                    
                    .empty-state {
                        padding: 3rem 1rem;
                        text-align: center;
                        color: #6c757d;
                    }
                    
                    .empty-state i {
                        font-size: 4rem;
                        margin-bottom: 1rem;
                        opacity: 0.5;
                    }
                    
                    .card-header-custom {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        font-weight: 600;
                    }
                    
                    .card-header-warning {
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        color: white;
                        font-weight: 600;
                    }
                    
                    .new-user-badge {
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        width: 12px;
                        height: 12px;
                        background-color: #dc3545;
                        border: 2px solid white;
                        border-radius: 50%;
                    }
                    
                    .status-text-pending {
                        font-size: 0.75rem;
                        color: #856404;
                        font-weight: 500;
                    }
                    
                    .status-text-verified {
                        font-size: 0.75rem;
                        color: #155724;
                        font-weight: 500;
                    }
                    
                    @media (max-width: 768px) {
                        .table-responsive {
                            font-size: 0.8rem;
                            border: 1px solid #dee2e6;
                        }
                        
                        .btn-action {
                            width: 28px;
                            height: 28px;
                            font-size: 0.75rem;
                        }
                        
                        .badge-role {
                            font-size: 0.65em;
                            padding: 0.25em 0.5em;
                        }
                        
                        .new-user-badge {
                            width: 10px;
                            height: 10px;
                        }
                    }
                `}</style>
            </Head>
            <LayoutAccount>
                {/* Header Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="page-header">
                            <h1 className="h3 text-dark mb-2">
                                <i className="fas fa-users me-2"></i>
                                Manajemen User
                            </h1>
                            <p className="text-muted mb-0">
                                Kelola data anggota dan verifikasi user baru sistem IKATWI
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons Section */}
                {hasAnyPermission(["users.create"]) && (
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card action-card border-0 shadow-sm">
                                <div className="card-body py-3">
                                    <div className="row g-3 align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <Link
                                                href="/account/users/create"
                                                className="btn btn-primary w-100 d-flex align-items-center justify-content-center py-2"
                                            >
                                                <i className="fas fa-plus-circle me-2"></i>
                                                Tambah User Baru
                                            </Link>
                                        </div>
                                        <div className="col-lg-5 col-md-8 col-sm-12">
                                            <Search URL={"/account/users"} />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <a
                                                href="/account/export-users"
                                                target="_blank"
                                                className="btn btn-success w-100 d-flex align-items-center justify-content-center py-2"
                                            >
                                                <i className="fas fa-file-excel me-2"></i>
                                                Export ke Excel
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* New Members Section */}
                {users2.data.length > 0 && (
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header card-header-warning border-0 py-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-user-clock me-2"></i>
                                        <h5 className="mb-0 fw-bold">Anggota Baru Menunggu Verifikasi</h5>
                                        <span className="badge bg-light text-white ms-2 fs-6">
                                            {users2.data.length} user menunggu
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover user-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th width="5%" className="ps-3">No</th>
                                                    <th width="10%">Foto</th>
                                                    <th width="12%">No Anggota</th>
                                                    <th width="15%">Nama Lengkap</th>
                                                    <th width="12%">Pakta Integritas</th>
                                                    <th width="12%">DPW</th>
                                                    <th width="12%">DPC</th>
                                                    <th width="12%">Hak Akses</th>
                                                    <th width="10%" className="text-center pe-3">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users2.data.map((user, index) => (
                                                    <UserTableRow
                                                        key={user.id}
                                                        user={user}
                                                        index={index}
                                                        users={users2}
                                                        isNew={true}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* All Users Section */}
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header card-header-custom border-0 py-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-users me-2"></i>
                                        <h5 className="mb-0 fw-bold">Semua User Terdaftar</h5>
                                    </div>
                                    <span className="badge bg-light text-white fs-6">
                                        Total: {users.total} user
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover user-table">
                                        <thead>
                                            <tr>
                                                <th width="5%" className="ps-3">No</th>
                                                <th width="10%">Foto</th>
                                                <th width="12%">No Anggota</th>
                                                <th width="15%">Nama Lengkap</th>
                                                <th width="12%">Pakta Integritas</th>
                                                <th width="12%">DPW</th>
                                                <th width="12%">DPC</th>
                                                <th width="12%">Hak Akses</th>
                                                <th width="10%" className="text-center pe-3">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.data.map((user, index) => (
                                                <UserTableRow
                                                    key={user.id}
                                                    user={user}
                                                    index={index}
                                                    users={users}
                                                    isNew={false}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                {users.data.length > 0 && (
                                    <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                                        <div className="text-muted">
                                            Menampilkan {users.data.length} dari {users.total} user
                                        </div>
                                        <Pagination links={users.links} align={"end"} />
                                    </div>
                                )}

                                {/* Empty State */}
                                {users.data.length === 0 && (
                                    <div className="empty-state">
                                        <i className="fas fa-users"></i>
                                        <h5 className="text-muted">Belum ada data user</h5>
                                        <p className="text-muted mb-4">Mulai dengan menambahkan user baru ke sistem</p>
                                        {hasAnyPermission(["users.create"]) && (
                                            <Link
                                                href="/account/users/create"
                                                className="btn btn-primary btn-lg"
                                            >
                                                <i className="fas fa-plus-circle me-2"></i>
                                                Tambah User Pertama
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}

// Component untuk baris tabel user
function UserTableRow({ user, index, users, isNew }) {
    const rowClass = user.confirm === "true" ? "status-verified" : "status-pending";
    const statusText = user.confirm === "true" ? "Terverifikasi" : "Menunggu Verifikasi";
    const statusClass = user.confirm === "true" ? "status-text-verified" : "status-text-pending";

    return (
        <tr className={rowClass}>
            <td className="text-center fw-bold ps-3">
                {++index + (users.current_page - 1) * users.per_page}
            </td>

            {/* Foto Profil */}
            <td className="text-center">
                <div className="avatar-container">
                    <img
                        src={user.image}
                        className="avatar-img rounded-circle"
                        width="45"
                        height="45"
                        alt={user.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/images/user.png";
                        }}
                    />
                    {isNew && user.confirm !== "true" && (
                        <div className="new-user-badge" title="User Baru"></div>
                    )}
                </div>
            </td>

            {/* No Anggota */}
            <td>
                <span className="badge bg-dark badge-role font-monospace">
                    {user.no_anggota || 'Belum ada'}
                </span>
            </td>

            {/* Nama */}
            <td>
                <div className="fw-semibold text-dark">{user.name}</div>
                {user.email && (
                    <small className="text-muted d-block">{user.email}</small>
                )}
                <div className={statusClass}>
                    <i className={`fas ${user.confirm === "true" ? "fa-check-circle" : "fa-clock"} me-1`}></i>
                    {statusText}
                </div>
            </td>

            {/* File Pakta Integritas */}
            <td>
                {user.filepakta ? (
                    <a
                        href={user.filepakta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm d-inline-flex align-items-center"
                    >
                        <i className="fas fa-file-pdf me-1"></i>
                        Lihat
                    </a>
                ) : (
                    <span className="badge bg-light text-muted badge-role">Tidak ada</span>
                )}
            </td>

            {/* DPW */}
            <td>
                <span className="badge badge-dpw badge-role text-white">
                    {user.province?.name || 'Belum diatur'}
                </span>
            </td>

            {/* DPC */}
            <td>
                {user.city_id === 0 ? (
                    <span className="badge bg-light text-muted badge-role">Tidak ada DPC</span>
                ) : (
                    <span className="badge badge-dpc badge-role text-white">
                        {user.city?.name || 'Belum diatur'}
                    </span>
                )}
            </td>

            {/* Role */}
            <td>
                <div className="d-flex flex-wrap gap-1">
                    {user.roles.map((role, roleIndex) => (
                        <span
                            className="badge bg-success badge-role"
                            key={roleIndex}
                        >
                            {role.name}
                        </span>
                    ))}
                    {user.roles.length === 0 && (
                        <span className="badge bg-secondary badge-role">No Role</span>
                    )}
                </div>
            </td>

            {/* Actions */}
            <td className="text-center pe-3">
                <div className="d-flex gap-2 justify-content-center">
                    {hasAnyPermission(["users.edit"]) && (
                        <Link
                            href={`/account/users/${user.id}/edit`}
                            className="btn btn-outline-primary btn-action"
                            title="Edit User"
                        >
                            <i className="fas fa-edit"></i>
                        </Link>
                    )}

                    {hasAnyPermission(["users.edit"]) && user.confirm !== "true" && (
                        <Link
                            href={`/account/users/verifikasiAnggota/${user.id}`}
                            className="btn btn-success btn-action"
                            title="Verifikasi User"
                        >
                            <i className="fas fa-check"></i>
                        </Link>
                    )}

                    {hasAnyPermission(["users.delete"]) && (
                        <Delete
                            URL={"/account/users"}
                            id={user.id}
                            className="btn-action btn-outline-danger"
                            title="Hapus User"
                        />
                    )}
                </div>
            </td>
        </tr>
    );
}