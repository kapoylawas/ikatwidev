//import React
import React from "react";

//import permissions
import hasAnyPermission from "../Utils/Permissions";

//import Link and usePage
import { Link, usePage } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Sidebar() {
    //destruct URL from props
    const { url } = usePage();

    //function logout
    const logoutHandler = async (e) => {
        e.preventDefault();
        Inertia.post("/logout");
    };

    // Function to determine active class
    const getActiveClass = (path) => {
        return url.startsWith(path)
            ? "active list-group-item list-group-item-action p-3 fw-semibold"
            : "list-group-item list-group-item-action p-3";
    };

    return (
        <>
            <div className="list-group list-group-flush sidebar-container">
                {/* Dashboard */}
                {hasAnyPermission(["dashboard.index"]) && (
                    <Link href="/account/dashboard" className={getActiveClass("/account/dashboard")}>
                        <i className="fa fa-tachometer-alt me-3"></i> Dashboard
                    </Link>
                )}

                {/* Data Master */}
                {(hasAnyPermission(["categories.index"]) ||
                    hasAnyPermission(["dpw.index"]) ||
                    hasAnyPermission(["dpc.index"]) ||
                    hasAnyPermission(["wilayah.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                                <i className="fa fa-database me-2"></i> Data Master
                            </div>

                            {hasAnyPermission(["categories.index"]) && (
                                <Link href="/account/categories" className={getActiveClass("/account/categories")}>
                                    <i className="fa fa-folder me-3"></i> Kategori
                                </Link>
                            )}

                            {hasAnyPermission(["dpw.index"]) && (
                                <Link href="/account/dpw" className={getActiveClass("/account/dpw")}>
                                    <i className="fa fa-university me-3"></i> Master DPW
                                </Link>
                            )}

                            {hasAnyPermission(["dpc.index"]) && (
                                <Link href="/account/dpc" className={getActiveClass("/account/dpc")}>
                                    <i className="fa fa-building me-3"></i> Master DPC
                                </Link>
                            )}

                            {hasAnyPermission(["wilayah.index"]) && (
                                <Link href="/account/wilayah" className={getActiveClass("/account/wilayah")}>
                                    <i className="fa fa-map-marker me-3"></i> Wilayah DPW
                                </Link>
                            )}

                            {hasAnyPermission(["wilayah.index"]) && (
                                <Link href="/account/areadpc" className={getActiveClass("/account/areadpc")}>
                                    <i className="fa fa-map me-3"></i> Wilayah DPC
                                </Link>
                            )}
                        </div>
                    )}

                {/* Keanggotaan */}
                {(hasAnyPermission(["biodatas.index"]) ||
                    hasAnyPermission(["pengurus.index"]) ||
                    hasAnyPermission(["ekta.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                                <i className="fa fa-users me-2"></i> Keanggotaan
                            </div>

                            {hasAnyPermission(["biodatas.index"]) && (
                                <Link href="/account/biodatas" className={getActiveClass("/account/biodatas")}>
                                    <i className="fa fa-id-card me-3"></i> Biodata
                                </Link>
                            )}

                            {hasAnyPermission(["pengurus.index"]) && (
                                <Link href="/account/pengurus" className={getActiveClass("/account/pengurus")}>
                                    <i className="fa fa-user-tie me-3"></i> Pengurus
                                </Link>
                            )}

                            {hasAnyPermission(["ekta.index"]) && (
                                <Link href="/account/ekta" className={getActiveClass("/account/ekta")}>
                                    <i className="fa fa-address-card me-3"></i> E-KTA
                                </Link>
                            )}
                        </div>
                    )}

                {/* Keuangan */}
                {(hasAnyPermission(["tagihan.index"]) ||
                    hasAnyPermission(["transactions.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                                <i className="fa fa-wallet me-2"></i> Keuangan
                            </div>

                            {hasAnyPermission(["tagihan.index"]) && (
                                <Link href="/account/tagihan" className={getActiveClass("/account/tagihan")}>
                                    <i className="fa fa-credit-card me-3"></i> Tagihan Iuran
                                </Link>
                            )}

                            {hasAnyPermission(["transactions.index"]) && (
                                <Link href="/account/transactions" className={getActiveClass("/account/transactions")}>
                                    <i className="fa fa-exchange-alt me-3"></i> Transaksi
                                </Link>
                            )}
                        </div>
                    )}

                {/* Kegiatan & Agenda */}
                {(hasAnyPermission(["products.index"]) ||
                    hasAnyPermission(["kegiatan.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                                <i className="fa fa-calendar-alt me-2"></i> Kegiatan
                            </div>

                            {hasAnyPermission(["products.index"]) && (
                                <Link href="/account/products" className={getActiveClass("/account/products")}>
                                    <i className="fa fa-tasks me-3"></i> Kegiatan
                                </Link>
                            )}

                            {hasAnyPermission(["kegiatan.index"]) && (
                                <Link href="/account/kegiatan" className={getActiveClass("/account/kegiatan")}>
                                    <i className="fa fa-calendar-check me-3"></i> Agenda Kegiatan
                                </Link>
                            )}
                        </div>
                    )}

                {/* Dokumen & Mutasi */}
                {(hasAnyPermission(["documents.index"]) ||
                    hasAnyPermission(["ejurnal.index"]) ||
                    hasAnyPermission(["pengajuan.index"]) ||
                    hasAnyPermission(["verifPengajuan.index"]) ||
                    hasAnyPermission(["verifPengajuanDpw.index"]) ||
                    hasAnyPermission(["verifPengajuanDpc.index"]) ||
                    hasAnyPermission(["arsips.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                                <i className="fa fa-folder-open me-2"></i> Dokumen & Mutasi
                            </div>

                            {hasAnyPermission(["documents.index"]) && (
                                <Link href="/account/documents" className={getActiveClass("/account/documents")}>
                                    <i className="fa fa-file-pdf me-3"></i> Dokumen Kelengkapan
                                </Link>
                            )}

                            {hasAnyPermission(["ejurnal.index"]) && (
                                <Link href="/account/ejurnal" className={getActiveClass("/account/ejurnal")}>
                                    <i className="fa fa-book me-3"></i> E-Jurnal
                                </Link>
                            )}

                            {hasAnyPermission(["pengajuan.index"]) && (
                                <>
                                    <Link href="/account/pengajuan" className={getActiveClass("/account/pengajuan")}>
                                        <i className="fa fa-paper-plane me-3"></i> Pengajuan Mutasi
                                    </Link>

                                    <Link href="/account/print" className={getActiveClass("/account/print")}>
                                        <i className="fa fa-print me-3"></i> Pengajuan Print
                                    </Link>
                                </>
                            )}

                            {/* Verifikasi Mutasi */}
                            {(hasAnyPermission(["verifPengajuan.index"]) ||
                                hasAnyPermission(["verifPengajuanDpw.index"]) ||
                                hasAnyPermission(["verifPengajuanDpc.index"])) && (
                                    <div className="verification-section">
                                        <div className="sidebar-subheader px-3 py-2 small fw-semibold">
                                            <i className="fa fa-check-double me-2"></i> Verifikasi Mutasi
                                        </div>

                                        {hasAnyPermission(["verifPengajuan.index"]) && (
                                            <Link href="/account/verifPengajuan" className={getActiveClass("/account/verifPengajuan")}>
                                                <i className="fa fa-check-circle me-3"></i> Verifikasi Utama
                                            </Link>
                                        )}

                                        {hasAnyPermission(["verifPengajuanDpw.index"]) && (
                                            <Link href="/account/verifPengajuanDpw" className={getActiveClass("/account/verifPengajuanDpw")}>
                                                <i className="fa fa-check-circle me-3"></i> Verifikasi DPW
                                            </Link>
                                        )}

                                        {hasAnyPermission(["verifPengajuanDpc.index"]) && (
                                            <Link href="/account/verifPengajuanDpc" className={getActiveClass("/account/verifPengajuanDpc")}>
                                                <i className="fa fa-check-circle me-3"></i> Verifikasi DPC
                                            </Link>
                                        )}

                                        {hasAnyPermission(["verifPengajuan.index"]) && (
                                            <Link href="/account/arsips" className={getActiveClass("/account/arsips")}>
                                                <i className="fa fa-archive me-3"></i> Arsip Pengajuan
                                            </Link>
                                        )}
                                    </div>
                                )}
                        </div>
                    )}

                {/* Konten & Sistem */}
                {(hasAnyPermission(["sliders.index"]) ||
                    hasAnyPermission(["roles.index"]) ||
                    hasAnyPermission(["permissions.index"]) ||
                    hasAnyPermission(["users.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                                <i className="fa fa-cogs me-2"></i> Sistem
                            </div>

                            {hasAnyPermission(["sliders.index"]) && (
                                <Link href="/account/sliders" className={getActiveClass("/account/sliders")}>
                                    <i className="fa fa-images me-3"></i> Sliders
                                </Link>
                            )}

                            {hasAnyPermission(["roles.index"]) && (
                                <Link href="/account/roles" className={getActiveClass("/account/roles")}>
                                    <i className="fa fa-user-shield me-3"></i> Roles
                                </Link>
                            )}

                            {hasAnyPermission(["permissions.index"]) && (
                                <Link href="/account/permissions" className={getActiveClass("/account/permissions")}>
                                    <i className="fa fa-key me-3"></i> Permissions
                                </Link>
                            )}

                            {hasAnyPermission(["users.index"]) && (
                                <Link href="/account/users" className={getActiveClass("/account/users")}>
                                    <i className="fa fa-user-cog me-3"></i> Users
                                </Link>
                            )}
                        </div>
                    )}

                {/* Navigasi Utama */}
                <div className="sidebar-section">
                    <div className="sidebar-section-header p-3 text-uppercase small fw-bold">
                        <i className="fa fa-compass me-2"></i> Navigasi
                    </div>

                    <Link href="/" className={getActiveClass("/")}>
                        <i className="fa fa-home me-3"></i> Beranda
                    </Link>

                    <Link onClick={logoutHandler} className={getActiveClass("/logout")}>
                        <i className="fa fa-sign-out-alt me-3"></i> Logout
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .sidebar-container {
                    background: linear-gradient(135deg, 
                        #ffffff 0%, 
                        #f8fafc 25%, 
                        #f1f5f9 50%, 
                        #e2e8f0 75%, 
                        #ffffff 100%);
                    background-size: 400% 400%;
                    animation: gentleFlow 25s ease infinite;
                    position: relative;
                    overflow: hidden;
                    border-right: 1px solid #e2e8f0;
                    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.04);
                }

                .sidebar-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.02) 0%, transparent 50%);
                }

                @keyframes gentleFlow {
                    0%, 100% { background-position: 0% 50% }
                    50% { background-position: 100% 50% }
                }

                .sidebar-section {
                    border-bottom: 1px solid #f1f5f9;
                    position: relative;
                    z-index: 1;
                }
                
                .sidebar-section:last-child {
                    border-bottom: none;
                }
                
                .sidebar-section-header {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    border-left: 4px solid #6366f1;
                    color: #475569;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    border-bottom: 1px solid #e2e8f0;
                    position: relative;
                    overflow: hidden;
                }

                .sidebar-section-header::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 0;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #6366f1, transparent);
                    transition: width 0.3s ease;
                }

                .sidebar-section-header:hover::after {
                    width: 100%;
                }
                
                .sidebar-subheader {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    font-size: 0.75rem;
                    border-left: 3px solid #10b981;
                    margin: 0.5rem;
                    color: #64748b;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
                }
                
                .verification-section {
                    background: #ffffff;
                    margin: 0.5rem;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                    overflow: hidden;
                }
                
                .list-group-item {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: none;
                    color: #475569;
                    background: transparent;
                    border-radius: 0;
                    position: relative;
                    overflow: hidden;
                    font-weight: 500;
                    border-left: 3px solid transparent;
                }
                
                .list-group-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, 
                        transparent, 
                        rgba(99, 102, 241, 0.05), 
                        transparent);
                    transition: left 0.6s ease;
                }
                
                .list-group-item:hover::before {
                    left: 100%;
                }
                
                .list-group-item:hover {
                    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                    transform: translateX(5px);
                    color: #6366f1;
                    border-left: 3px solid #6366f1;
                    box-shadow: inset 4px 0 0 #6366f1;
                }
                
                .list-group-item.active {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.08) 0%, 
                        rgba(99, 102, 241, 0.12) 100%);
                    color: #6366f1;
                    border-left: 4px solid #6366f1;
                    font-weight: 600;
                    box-shadow: 
                        inset 4px 0 0 #6366f1,
                        0 4px 12px rgba(99, 102, 241, 0.1);
                }
                
                .list-group-item.active::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 16px;
                    transform: translateY(-50%);
                    width: 6px;
                    height: 6px;
                    background: #6366f1;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #6366f1;
                }
                
                .list-group-item i {
                    width: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                    color: #64748b;
                }
                
                .list-group-item:hover i {
                    transform: scale(1.1);
                    color: #6366f1;
                }
                
                .list-group-item.active i {
                    color: #6366f1;
                    transform: scale(1.1);
                }

                /* Icon colors for different sections */
                .sidebar-section-header i {
                    color: #6366f1;
                }

                .sidebar-subheader i {
                    color: #10b981;
                }

                /* Scrollbar styling */
                .sidebar-container::-webkit-scrollbar {
                    width: 4px;
                }

                .sidebar-container::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }

                .sidebar-container::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #6366f1, #8b5cf6);
                    border-radius: 10px;
                }

                .sidebar-container::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #8b5cf6, #6366f1);
                }

                /* Responsive design */
                @media (max-width: 768px) {
                    .sidebar-container {
                        border-right: none;
                        border-bottom: 1px solid #e2e8f0;
                    }
                }
            `}</style>
        </>
    );
}