import React from "react";
import hasAnyPermission from "../Utils/Permissions";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Sidebar() {
    const { url, auth } = usePage();

    const logoutHandler = async (e) => {
        e.preventDefault();
        Inertia.post("/logout");
    };

    const isLinkActive = (path) => {
        if (path === "/account/dashboard") {
            return url === "/account/dashboard" || url === "/account";
        }
        return url.startsWith(path);
    };

    const getLinkClass = (path) => {
        return isLinkActive(path) ? "sidebar-item active" : "sidebar-item";
    };

    const user = auth?.user;
    const userRole = user?.roles?.[0]?.name || user?.status_anggota || "Anggota";
    const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "A";

    return (
        <>
            <aside className="ikatwi-sidebar">
                {/* Brand Header */}
                <div className="sidebar-brand-box">
                    <Link href="/account/dashboard" className="brand-link">
                        <div className="brand-logo-frame">
                            <img
                                src="/assets/images/logo.png"
                                alt="Logo IKATWI"
                                className="brand-logo-img"
                            />
                        </div>
                        <div className="brand-meta">
                            <div className="brand-title-wrap">
                                <span className="brand-name">IKATWI</span>
                                <span className="brand-badge">PORTAL</span>
                            </div>
                            <span className="brand-tagline">Ikatan Terapis Wicara Indonesia</span>
                        </div>
                    </Link>
                </div>

                {/* Member Profile Compact Card */}
                <div className="sidebar-user-card">
                    <div className="user-avatar-wrap">
                        <div className="user-avatar-circle">
                            {userInitial}
                        </div>
                        <span className="user-status-dot" title="Status Online"></span>
                    </div>
                    <div className="user-details">
                        <span className="user-fullname" title={user?.name || "Anggota IKATWI"}>
                            {user?.name || "Anggota IKATWI"}
                        </span>
                        <div className="user-meta-row">
                            <span className="user-role-label">{userRole}</span>
                            {user?.no_anggota && (
                                <span className="user-id-badge">{user.no_anggota}</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation Scrollable Body */}
                <nav className="sidebar-nav-container">
                    {/* SECTION: UTAMA */}
                    <div className="nav-section">
                        <div className="nav-heading">MENU UTAMA</div>
                        <Link href="/account/dashboard" className={getLinkClass("/account/dashboard")}>
                            <div className="item-icon-box">
                                <i className="fa fa-th-large"></i>
                            </div>
                            <span className="item-label">Dashboard</span>
                        </Link>
                    </div>

                    {/* SECTION: DATA MASTER */}
                    {(hasAnyPermission(["categories.index"]) ||
                        hasAnyPermission(["dpw.index"]) ||
                        hasAnyPermission(["dpc.index"]) ||
                        hasAnyPermission(["wilayah.index"])) && (
                        <div className="nav-section">
                            <div className="nav-heading">DATA MASTER</div>

                            {hasAnyPermission(["categories.index"]) && (
                                <Link href="/account/categories" className={getLinkClass("/account/categories")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-folder"></i>
                                    </div>
                                    <span className="item-label">Kategori</span>
                                </Link>
                            )}

                            {hasAnyPermission(["dpw.index"]) && (
                                <Link href="/account/dpw" className={getLinkClass("/account/dpw")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-landmark"></i>
                                    </div>
                                    <span className="item-label">Master DPW</span>
                                </Link>
                            )}

                            {hasAnyPermission(["dpc.index"]) && (
                                <Link href="/account/dpc" className={getLinkClass("/account/dpc")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-city"></i>
                                    </div>
                                    <span className="item-label">Master DPC</span>
                                </Link>
                            )}

                            {hasAnyPermission(["wilayah.index"]) && (
                                <Link href="/account/wilayah" className={getLinkClass("/account/wilayah")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-map-marked-alt"></i>
                                    </div>
                                    <span className="item-label">Wilayah DPW</span>
                                </Link>
                            )}

                            {hasAnyPermission(["wilayah.index"]) && (
                                <Link href="/account/areadpc" className={getLinkClass("/account/areadpc")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-map-signs"></i>
                                    </div>
                                    <span className="item-label">Wilayah DPC</span>
                                </Link>
                            )}

                            {hasAnyPermission(["videos.index"]) && (
                                <Link href="/account/videos" className={getLinkClass("/account/videos")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-play-circle"></i>
                                    </div>
                                    <span className="item-label">Video Manajemen</span>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* SECTION: KEANGGOTAAN */}
                    {(hasAnyPermission(["biodatas.index"]) ||
                        hasAnyPermission(["pengurus.index"]) ||
                        hasAnyPermission(["ekta.index"])) && (
                        <div className="nav-section">
                            <div className="nav-heading">KEANGGOTAAN</div>

                            {hasAnyPermission(["biodatas.index"]) && (
                                <Link href="/account/biodatas" className={getLinkClass("/account/biodatas")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-id-card"></i>
                                    </div>
                                    <span className="item-label">Biodata Anggota</span>
                                </Link>
                            )}

                            {hasAnyPermission(["users.index"]) && (
                                <Link href="/account/verifikasi-users" className={getLinkClass("/account/verifikasi-users")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-user-check"></i>
                                    </div>
                                    <span className="item-label">Verifikasi Anggota Baru</span>
                                    {auth?.pendingUsersCount > 0 && (
                                        <span
                                            className="badge rounded-pill"
                                            style={{
                                                backgroundColor: '#ef4444',
                                                color: '#ffffff',
                                                fontSize: '0.65rem',
                                                fontWeight: 700,
                                                padding: '0.15rem 0.45rem',
                                                boxShadow: '0 1px 2px rgba(239, 68, 68, 0.4)'
                                            }}
                                        >
                                            {auth.pendingUsersCount}
                                        </span>
                                    )}
                                </Link>
                            )}

                            {hasAnyPermission(["pengurus.index"]) && (
                                <Link href="/account/pengurus" className={getLinkClass("/account/pengurus")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-users-cog"></i>
                                    </div>
                                    <span className="item-label">Struktur Pengurus</span>
                                </Link>
                            )}

                            {hasAnyPermission(["ekta.index"]) && (
                                <Link href="/account/ekta" className={getLinkClass("/account/ekta")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-address-card"></i>
                                    </div>
                                    <span className="item-label">E-KTA Digital</span>
                                </Link>
                            )}

                            {hasAnyPermission(["ekta.index"]) && (
                                <Link href="/account/sig" className={getLinkClass("/account/sig")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-certificate"></i>
                                    </div>
                                    <span className="item-label">SIG Keanggotaan</span>
                                </Link>
                            )}

                            {hasAnyPermission(["videousers.index"]) && (
                                <Link href="/account/materi" className={getLinkClass("/account/materi")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-film"></i>
                                    </div>
                                    <span className="item-label">Materi Pembelajaran</span>
                                </Link>
                            )}

                            {hasAnyPermission(["videousers.index"]) && (
                                <Link href="/account/donasi" className={getLinkClass("/account/donasi")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-hand-holding-heart"></i>
                                    </div>
                                    <span className="item-label">Program Donasi</span>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* SECTION: KEUANGAN */}
                    {(hasAnyPermission(["tagihan.index"]) ||
                        hasAnyPermission(["transactions.index"])) && (
                        <div className="nav-section">
                            <div className="nav-heading">KEUANGAN & IURAN</div>

                            {hasAnyPermission(["tagihan.index"]) && (
                                <Link href="/account/tagihan" className={getLinkClass("/account/tagihan")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-receipt"></i>
                                    </div>
                                    <span className="item-label">Pusat Tagihan & Iuran</span>
                                    <span className="item-badge-new">Iuran</span>
                                </Link>
                            )}

                            {hasAnyPermission(["transactions.index"]) && (
                                <Link href="/account/transactions" className={getLinkClass("/account/transactions")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-history"></i>
                                    </div>
                                    <span className="item-label">Riwayat Transaksi</span>
                                </Link>
                            )}

                            {(hasAnyPermission(["transactions.index"]) ||
                                hasAnyPermission(["users.index"]) ||
                                hasAnyPermission(["tagihan.index"])) && (
                                <Link href="/account/monitoring-iuran" className={getLinkClass("/account/monitoring-iuran")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-chart-line"></i>
                                    </div>
                                    <span className="item-label">Monitoring Iuran Anggota</span>
                                    <span className="badge rounded-pill" style={{ backgroundColor: '#ecfdf5', color: '#059669', fontSize: '0.65rem', fontWeight: 700, border: '1px solid #a7f3d0' }}>
                                        Tahunan
                                    </span>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* SECTION: KEGIATAN */}
                    {(hasAnyPermission(["products.index"]) ||
                        hasAnyPermission(["kegiatan.index"])) && (
                        <div className="nav-section">
                            <div className="nav-heading">KEGIATAN & EVENT</div>

                            {hasAnyPermission(["products.index"]) && (
                                <Link href="/account/products" className={getLinkClass("/account/products")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-calendar-alt"></i>
                                    </div>
                                    <span className="item-label">Daftar Kegiatan</span>
                                </Link>
                            )}

                            {hasAnyPermission(["kegiatan.index"]) && (
                                <Link href="/account/kegiatan" className={getLinkClass("/account/kegiatan")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-tasks"></i>
                                    </div>
                                    <span className="item-label">Agenda Kegiatan</span>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* SECTION: DOKUMEN & MUTASI */}
                    {(hasAnyPermission(["documents.index"]) ||
                        hasAnyPermission(["ejurnal.index"]) ||
                        hasAnyPermission(["pengajuan.index"]) ||
                        hasAnyPermission(["verifPengajuan.index"]) ||
                        hasAnyPermission(["verifPengajuanDpw.index"]) ||
                        hasAnyPermission(["verifPengajuanDpc.index"]) ||
                        hasAnyPermission(["arsips.index"])) && (
                        <div className="nav-section">
                            <div className="nav-heading">DOKUMEN & MUTASI</div>

                            {hasAnyPermission(["documents.index"]) && (
                                <Link href="/account/documents" className={getLinkClass("/account/documents")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-file-alt"></i>
                                    </div>
                                    <span className="item-label">Dokumen Kelengkapan</span>
                                </Link>
                            )}

                            {hasAnyPermission(["ejurnal.index"]) && (
                                <Link href="/account/ejurnal" className={getLinkClass("/account/ejurnal")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-book-open"></i>
                                    </div>
                                    <span className="item-label">E-Jurnal IKATWI</span>
                                </Link>
                            )}

                            {hasAnyPermission(["pengajuan.index"]) && (
                                <>
                                    <Link href="/account/pengajuan" className={getLinkClass("/account/pengajuan")}>
                                        <div className="item-icon-box">
                                            <i className="fa fa-paper-plane"></i>
                                        </div>
                                        <span className="item-label">Pengajuan Mutasi</span>
                                    </Link>

                                    <Link href="/account/print" className={getLinkClass("/account/print")}>
                                        <div className="item-icon-box">
                                            <i className="fa fa-print"></i>
                                        </div>
                                        <span className="item-label">Pengajuan Print</span>
                                    </Link>
                                </>
                            )}

                            {/* Verifikasi Sub-group */}
                            {(hasAnyPermission(["verifPengajuan.index"]) ||
                                hasAnyPermission(["verifPengajuanDpw.index"]) ||
                                hasAnyPermission(["verifPengajuanDpc.index"])) && (
                                <div className="sub-section-box">
                                    <div className="sub-heading">VERIFIKASI MUTASI</div>

                                    {hasAnyPermission(["verifPengajuan.index"]) && (
                                        <Link href="/account/verifPengajuan" className={getLinkClass("/account/verifPengajuan")}>
                                            <div className="item-icon-box">
                                                <i className="fa fa-check-circle"></i>
                                            </div>
                                            <span className="item-label">Verifikasi Utama</span>
                                        </Link>
                                    )}

                                    {hasAnyPermission(["verifPengajuanDpw.index"]) && (
                                        <Link href="/account/verifPengajuanDpw" className={getLinkClass("/account/verifPengajuanDpw")}>
                                            <div className="item-icon-box">
                                                <i className="fa fa-check-double"></i>
                                            </div>
                                            <span className="item-label">Verifikasi DPW</span>
                                        </Link>
                                    )}

                                    {hasAnyPermission(["verifPengajuanDpc.index"]) && (
                                        <Link href="/account/verifPengajuanDpc" className={getLinkClass("/account/verifPengajuanDpc")}>
                                            <div className="item-icon-box">
                                                <i className="fa fa-clipboard-check"></i>
                                            </div>
                                            <span className="item-label">Verifikasi DPC</span>
                                        </Link>
                                    )}

                                    {hasAnyPermission(["verifPengajuan.index"]) && (
                                        <Link href="/account/arsips" className={getLinkClass("/account/arsips")}>
                                            <div className="item-icon-box">
                                                <i className="fa fa-archive"></i>
                                            </div>
                                            <span className="item-label">Arsip Pengajuan</span>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* SECTION: PENGATURAN SISTEM */}
                    {(hasAnyPermission(["sliders.index"]) ||
                        hasAnyPermission(["roles.index"]) ||
                        hasAnyPermission(["permissions.index"]) ||
                        hasAnyPermission(["users.index"])) && (
                        <div className="nav-section">
                            <div className="nav-heading">PENGATURAN SISTEM</div>

                            {hasAnyPermission(["sliders.index"]) && (
                                <Link href="/account/sliders" className={getLinkClass("/account/sliders")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-images"></i>
                                    </div>
                                    <span className="item-label">Banner Slider</span>
                                </Link>
                            )}

                            {hasAnyPermission(["roles.index"]) && (
                                <Link href="/account/roles" className={getLinkClass("/account/roles")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-shield-alt"></i>
                                    </div>
                                    <span className="item-label">Peran & Wewenang</span>
                                </Link>
                            )}

                            {hasAnyPermission(["permissions.index"]) && (
                                <Link href="/account/permissions" className={getLinkClass("/account/permissions")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-key"></i>
                                    </div>
                                    <span className="item-label">Hak Akses</span>
                                </Link>
                            )}

                            {hasAnyPermission(["users.index"]) && (
                                <Link href="/account/users" className={getLinkClass("/account/users")}>
                                    <div className="item-icon-box">
                                        <i className="fa fa-user-cog"></i>
                                    </div>
                                    <span className="item-label">Manajemen User</span>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* SECTION: TAUTAN LAINNYA */}
                    <div className="nav-section">
                        <div className="nav-heading">PORTAL & AKUN</div>
                        <Link href="/" className={getLinkClass("/")}>
                            <div className="item-icon-box">
                                <i className="fa fa-globe"></i>
                            </div>
                            <span className="item-label">Website Utama</span>
                        </Link>
                    </div>
                </nav>

                {/* Sidebar Footer Box */}
                <div className="sidebar-footer-box">
                    <button onClick={logoutHandler} className="sidebar-logout-btn">
                        <i className="fa fa-sign-out-alt logout-icon"></i>
                        <span className="logout-text">Keluar Sistem</span>
                    </button>
                    <div className="sidebar-version-tag">
                        <span>IKATWI PORTAL</span>
                        <span>•</span>
                        <span>v2.5</span>
                    </div>
                </div>
            </aside>

            <style>{`
                .ikatwi-sidebar {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    background-color: #0c1322;
                    color: #94a3b8;
                    border-right: 1px solid #1e293b;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    position: sticky;
                    top: 0;
                    user-select: none;
                }

                /* Brand Header */
                .sidebar-brand-box {
                    padding: 1.1rem 1.15rem;
                    background: linear-gradient(180deg, #0f172a 0%, #0c1322 100%);
                    border-bottom: 1px solid #1e293b;
                }

                .brand-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                }

                .brand-logo-frame {
                    width: 40px;
                    height: 40px;
                    background: #ffffff;
                    border-radius: 10px;
                    padding: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    flex-shrink: 0;
                }

                .brand-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .brand-meta {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                }

                .brand-title-wrap {
                    display: flex;
                    align-items: center;
                    gap: 0.45rem;
                }

                .brand-name {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: 0.05em;
                    line-height: 1.2;
                }

                .brand-badge {
                    font-size: 0.62rem;
                    font-weight: 700;
                    color: #059669;
                    background: #d1fae5;
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    letter-spacing: 0.05em;
                }

                .brand-tagline {
                    font-size: 0.68rem;
                    color: #64748b;
                    font-weight: 500;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Member Profile Card in Sidebar */
                .sidebar-user-card {
                    margin: 0.85rem 0.85rem 0.35rem 0.85rem;
                    padding: 0.75rem 0.85rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                }

                .user-avatar-wrap {
                    position: relative;
                    flex-shrink: 0;
                }

                .user-avatar-circle {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.88rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .user-status-dot {
                    position: absolute;
                    bottom: -1px;
                    right: -1px;
                    width: 9px;
                    height: 9px;
                    background-color: #10b981;
                    border: 2px solid #0c1322;
                    border-radius: 50%;
                }

                .user-details {
                    min-width: 0;
                    flex: 1;
                }

                .user-fullname {
                    display: block;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #f1f5f9;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.25;
                }

                .user-meta-row {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    margin-top: 0.15rem;
                }

                .user-role-label {
                    font-size: 0.68rem;
                    color: #10b981;
                    font-weight: 600;
                    text-transform: capitalize;
                }

                .user-id-badge {
                    font-size: 0.62rem;
                    color: #64748b;
                    font-family: monospace;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0 0.25rem;
                    border-radius: 3px;
                }

                /* Nav Container */
                .sidebar-nav-container {
                    flex: 1;
                    overflow-y: auto;
                    padding: 0.6rem 0.65rem 1.5rem 0.65rem;
                    scrollbar-width: thin;
                    scrollbar-color: #1e293b transparent;
                }

                .sidebar-nav-container::-webkit-scrollbar {
                    width: 4px;
                }

                .sidebar-nav-container::-webkit-scrollbar-track {
                    background: transparent;
                }

                .sidebar-nav-container::-webkit-scrollbar-thumb {
                    background: #1e293b;
                    border-radius: 4px;
                }

                .sidebar-nav-container::-webkit-scrollbar-thumb:hover {
                    background: #334155;
                }

                .nav-section {
                    margin-bottom: 1.1rem;
                }

                .nav-heading {
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    color: #64748b;
                    padding: 0.4rem 0.75rem 0.3rem 0.75rem;
                    text-transform: uppercase;
                }

                /* Sub section for verifikasi */
                .sub-section-box {
                    margin-top: 0.35rem;
                    padding-top: 0.35rem;
                    border-top: 1px dashed rgba(255, 255, 255, 0.08);
                }

                .sub-heading {
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    color: #475569;
                    padding: 0.3rem 0.75rem 0.25rem 0.75rem;
                    text-transform: uppercase;
                }

                /* Sidebar Item Link */
                .sidebar-item {
                    display: flex;
                    align-items: center;
                    gap: 0.65rem;
                    padding: 0.52rem 0.75rem;
                    border-radius: 8px;
                    color: #94a3b8;
                    text-decoration: none;
                    font-size: 0.83rem;
                    font-weight: 500;
                    transition: all 0.15s ease-in-out;
                    margin-bottom: 2px;
                    position: relative;
                }

                .sidebar-item:hover {
                    color: #f8fafc;
                    background-color: rgba(255, 255, 255, 0.05);
                    text-decoration: none;
                }

                .sidebar-item.active {
                    color: #ffffff;
                    background: linear-gradient(90deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.03) 100%);
                    border-left: 3px solid #10b981;
                    font-weight: 600;
                }

                .item-icon-box {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    color: #64748b;
                    flex-shrink: 0;
                    transition: color 0.15s ease-in-out;
                }

                .sidebar-item:hover .item-icon-box {
                    color: #cbd5e1;
                }

                .sidebar-item.active .item-icon-box {
                    color: #10b981;
                }

                .item-label {
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .item-badge-new {
                    font-size: 0.62rem;
                    font-weight: 700;
                    padding: 0.1rem 0.35rem;
                    border-radius: 4px;
                    background-color: rgba(16, 185, 129, 0.2);
                    color: #10b981;
                    border: 1px solid rgba(16, 185, 129, 0.3);
                }

                /* Sidebar Footer Box */
                .sidebar-footer-box {
                    padding: 0.85rem 0.85rem;
                    border-top: 1px solid #1e293b;
                    background-color: #090e1a;
                }

                .sidebar-logout-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.55rem;
                    background: rgba(239, 68, 68, 0.08);
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    border-radius: 8px;
                    color: #f87171;
                    font-size: 0.82rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.15s ease-in-out;
                }

                .sidebar-logout-btn:hover {
                    background: #dc2626;
                    border-color: #dc2626;
                    color: #ffffff;
                }

                .logout-icon {
                    font-size: 0.85rem;
                }

                .sidebar-version-tag {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.4rem;
                    margin-top: 0.55rem;
                    font-size: 0.65rem;
                    color: #475569;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                }
            `}</style>
        </>
    );
}