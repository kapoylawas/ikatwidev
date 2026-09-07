import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Sidebar from "../Components/Sidebar";

export default function LayoutAccount({ children }) {
    const { auth } = usePage().props;
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const sidebarToggleHandler = (e) => {
        e.preventDefault();
        if (!sidebarToggle) {
            document.body.classList.add("sb-sidenav-toggled");
            setSidebarToggle(true);
        } else {
            document.body.classList.remove("sb-sidenav-toggled");
            setSidebarToggle(false);
        }
    };

    const logoutHandler = async (e) => {
        e.preventDefault();
        Inertia.post("/logout");
    };

    const userInitial = auth?.user?.name ? auth.user.name.charAt(0).toUpperCase() : "A";
    const userRole = auth?.user?.roles?.[0]?.name || auth?.user?.status_anggota || "Anggota";

    // Format current date in Indonesian
    const todayFormatted = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date());

    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Mobile Backdrop Overlay */}
                {sidebarToggle && (
                    <div
                        className="sidebar-mobile-backdrop d-md-none"
                        onClick={sidebarToggleHandler}
                        title="Tutup Menu"
                    ></div>
                )}

                {/* Sidebar Wrapper */}
                <div id="sidebar-wrapper" className="sidebar-container-col">
                    <Sidebar />
                </div>

                {/* Main Content Column */}
                <div id="page-content-wrapper" className="content-container-col">
                    {/* Top Professional Header Bar */}
                    <header className="top-header-bar">
                        <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                            {/* Left: Sidebar Toggle & Portal Title */}
                            <div className="d-flex align-items-center gap-3">
                                <button
                                    className="header-toggle-btn"
                                    onClick={sidebarToggleHandler}
                                    title="Buka/Tutup Menu Sidebar"
                                    type="button"
                                >
                                    <i className="fa fa-bars"></i>
                                </button>

                                <div className="d-flex align-items-center gap-2">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="header-brand-title">Portal IKATWI</span>
                                            <span className="header-status-badge">
                                                <span className="status-indicator-dot"></span>
                                                Sistem Aktif
                                            </span>
                                        </div>
                                        <span className="header-date-text d-none d-md-block">
                                            <i className="fa fa-calendar-alt me-1 text-muted"></i>
                                            {todayFormatted}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Quick Links & User Dropdown */}
                            <div className="d-flex align-items-center gap-2 gap-sm-3">
                                {/* Direct link to Tagihan */}
                                <Link
                                    href="/account/tagihan"
                                    className="btn-quick-tagihan d-none d-sm-inline-flex"
                                    title="Pusat Tagihan & Iuran"
                                >
                                    <i className="fa fa-receipt text-emerald-600"></i>
                                    <span>Tagihan & Iuran</span>
                                </Link>

                                {/* Direct link to Public Website */}
                                <Link
                                    href="/"
                                    className="btn-website-link d-none d-md-inline-flex"
                                    title="Kunjungi Website Utama"
                                >
                                    <i className="fa fa-globe"></i>
                                    <span>Web IKATWI</span>
                                </Link>

                                <div className="header-divider d-none d-sm-block"></div>

                                {/* User Profile Dropdown */}
                                <NavDropdown
                                    title={
                                        <div className="user-profile-pill">
                                            <div className="profile-avatar-box">
                                                {userInitial}
                                            </div>
                                            <div className="profile-text-wrap d-none d-sm-block">
                                                <div className="profile-name-text" title={auth?.user?.name || "Anggota"}>
                                                    {auth?.user?.name || "Anggota"}
                                                </div>
                                                <small className="profile-role-text">
                                                    {userRole}
                                                </small>
                                            </div>
                                            <i className="fa fa-chevron-down profile-arrow-icon d-none d-sm-inline-block"></i>
                                        </div>
                                    }
                                    id="account-user-dropdown"
                                    className="custom-user-dropdown"
                                    align="end"
                                >
                                    <div className="dropdown-user-header">
                                        <div className="text-uppercase dropdown-label">Login Sebagai</div>
                                        <strong className="dropdown-username" title={auth?.user?.name || "Anggota"}>
                                            {auth?.user?.name || "Anggota"}
                                        </strong>
                                        <div className="dropdown-user-id">
                                            <div
                                                className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded"
                                                style={{
                                                    backgroundColor: '#f1f5f9',
                                                    color: '#334155',
                                                    fontSize: '0.72rem',
                                                    fontWeight: 600,
                                                    fontFamily: 'monospace',
                                                    border: '1px solid #e2e8f0',
                                                    marginTop: '4px'
                                                }}
                                            >
                                                <i className="fa fa-id-card text-emerald-600 me-1" style={{ fontSize: '0.75rem' }}></i>
                                                <span>{auth?.user?.no_anggota || auth?.user?.email || "ID Anggota"}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <NavDropdown.Item as={Link} href="/account/biodatas" className="dropdown-nav-item">
                                        <div className="dropdown-icon-frame" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                                            <i className="fa fa-user-circle"></i>
                                        </div>
                                        <div>
                                            <div className="fw-semibold text-dark">Profil Biodata</div>
                                            <small className="text-muted">Kelola identitas anggota</small>
                                        </div>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item as={Link} href="/account/tagihan" className="dropdown-nav-item">
                                        <div className="dropdown-icon-frame" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
                                            <i className="fa fa-receipt"></i>
                                        </div>
                                        <div>
                                            <div className="fw-semibold text-dark">Tagihan & Iuran</div>
                                            <small className="text-muted">Cek & bayar iuran tahunan</small>
                                        </div>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item as={Link} href="/account/ekta" className="dropdown-nav-item">
                                        <div className="dropdown-icon-frame" style={{ backgroundColor: '#fffbeb', color: '#d97706' }}>
                                            <i className="fa fa-id-card"></i>
                                        </div>
                                        <div>
                                            <div className="fw-semibold text-dark">E-KTA Digital</div>
                                            <small className="text-muted">Kartu tanda anggota resmi</small>
                                        </div>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider className="my-1" />

                                    <NavDropdown.Item onClick={logoutHandler} className="dropdown-nav-item text-danger">
                                        <div className="dropdown-icon-frame" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
                                            <i className="fa fa-sign-out-alt"></i>
                                        </div>
                                        <div>
                                            <div className="fw-bold text-danger">Keluar Sistem</div>
                                            <small className="text-muted">Akhiri sesi portal</small>
                                        </div>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="main-portal-content">
                        {children}
                    </main>

                    {/* Clean Footer */}
                    <footer className="portal-footer">
                        <div className="container-fluid d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
                            <span>&copy; {new Date().getFullYear()} <strong>IKATWI</strong> (Ikatan Terapis Wicara Indonesia). All rights reserved.</span>
                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>Sistem Informasi Keanggotaan Terpadu</span>
                        </div>
                    </footer>
                </div>
            </div>

            <style>{`
                /* Layout structural styles */
                .sidebar-container-col {
                    background-color: #0c1322;
                    width: 260px;
                    min-width: 260px;
                    z-index: 1050;
                    transition: all 0.25s ease-in-out;
                }

                .content-container-col {
                    background-color: #f8fafc;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    min-width: 0;
                }

                /* Mobile Backdrop */
                .sidebar-mobile-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(2px);
                    z-index: 1040;
                }

                /* Top Navigation Bar */
                .top-header-bar {
                    background-color: #ffffff;
                    border-bottom: 1px solid #e2e8f0;
                    min-height: 64px;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    padding: 0.6rem 1.25rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03);
                }

                .header-toggle-btn {
                    width: 38px;
                    height: 38px;
                    border-radius: 9px;
                    background-color: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.15s ease-in-out;
                }

                .header-toggle-btn:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    border-color: #cbd5e1;
                }

                .header-brand-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #0f172a;
                    letter-spacing: -0.01em;
                }

                .header-status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1px solid #a7f3d0;
                    border-radius: 9999px;
                    padding: 0.15rem 0.55rem;
                    font-size: 0.72rem;
                    font-weight: 600;
                }

                .status-indicator-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #10b981;
                }

                .header-date-text {
                    font-size: 0.75rem;
                    color: #64748b;
                    font-weight: 500;
                    margin-top: 1px;
                }

                /* Quick Action Buttons */
                .btn-quick-tagihan {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    background-color: #f0fdf4;
                    border: 1px solid #bbf7d0;
                    color: #15803d;
                    font-size: 0.82rem;
                    font-weight: 600;
                    padding: 0.4rem 0.85rem;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.15s ease-in-out;
                }

                .btn-quick-tagihan:hover {
                    background-color: #dcfce7;
                    color: #166534;
                    border-color: #86efac;
                }

                .btn-website-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    background-color: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #475569;
                    font-size: 0.82rem;
                    font-weight: 500;
                    padding: 0.4rem 0.85rem;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.15s ease-in-out;
                }

                .btn-website-link:hover {
                    background-color: #f1f5f9;
                    color: #0f172a;
                    border-color: #cbd5e1;
                }

                .header-divider {
                    width: 1px;
                    height: 24px;
                    background-color: #e2e8f0;
                }

                /* User Profile Pill */
                .user-profile-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.65rem;
                    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
                    border-radius: 30px;
                    border: 1px solid transparent;
                    transition: all 0.15s ease-in-out;
                    cursor: pointer;
                }

                .user-profile-pill:hover {
                    background-color: #f8fafc;
                    border-color: #e2e8f0;
                }

                .profile-avatar-box {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    border: 2px solid #ffffff;
                }

                .profile-text-wrap {
                    text-align: left;
                    line-height: 1.2;
                }

                .profile-name-text {
                    font-size: 0.86rem;
                    font-weight: 600;
                    color: #0f172a;
                    max-width: 180px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .profile-role-text {
                    font-size: 0.72rem;
                    color: #64748b;
                    text-transform: capitalize;
                    display: block;
                }

                .profile-arrow-icon {
                    font-size: 0.68rem;
                    color: #64748b;
                    margin-left: 0.25rem;
                    transition: transform 0.2s ease;
                }

                /* Dropdown Custom Styling */
                .custom-user-dropdown .dropdown-toggle::after {
                    display: none !important;
                }

                .custom-user-dropdown .nav-link,
                .custom-user-dropdown .dropdown-toggle {
                    padding: 0 !important;
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    text-decoration: none !important;
                }

                .custom-user-dropdown .dropdown-menu {
                    background-color: #ffffff !important;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
                    border: 1px solid #e2e8f0;
                    padding: 0.5rem;
                    min-width: 260px;
                    margin-top: 0.5rem !important;
                }

                .dropdown-user-header {
                    padding: 0.65rem 0.75rem 0.75rem 0.75rem;
                    border-bottom: 1px solid #f1f5f9;
                    margin-bottom: 0.35rem;
                }

                .dropdown-label {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: #94a3b8;
                    letter-spacing: 0.05em;
                }

                .dropdown-username {
                    font-size: 0.9rem;
                    color: #0f172a;
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .dropdown-user-id {
                    margin-top: 0.3rem;
                }

                .dropdown-nav-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.55rem 0.75rem;
                    border-radius: 8px;
                    font-size: 0.84rem;
                    transition: all 0.15s ease-in-out;
                    text-decoration: none;
                }

                .dropdown-nav-item:hover {
                    background-color: #f8fafc;
                }

                .dropdown-icon-frame {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }

                .main-portal-content {
                    padding: 1.25rem 1.5rem;
                    flex-grow: 1;
                }

                .portal-footer {
                    padding: 1rem 1.5rem;
                    background-color: #ffffff;
                    border-top: 1px solid #e2e8f0;
                    font-size: 0.8rem;
                    color: #64748b;
                }
            `}</style>

        </>
    );
}

