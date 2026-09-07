//import React
import React from "react";

//import Link
import { Link, usePage } from "@inertiajs/inertia-react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
    const { auth } = usePage().props;

    return (
        <header
            className="fixed-top shadow-sm"
            style={{
                backgroundColor: '#064e3b',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                zIndex: 1030,
            }}
        >
            <div className="container" style={{ maxWidth: '960px' }}>
                <div className="d-flex align-items-center justify-content-between py-2 px-1" style={{ minHeight: '60px' }}>
                    
                    {/* Brand Logo & Name */}
                    <Link
                        href="/"
                        className="d-flex align-items-center gap-2.5 text-decoration-none text-white"
                    >
                        <div
                            className="rounded-circle p-1 bg-white shadow-sm d-flex align-items-center justify-content-center"
                            style={{ width: '38px', height: '38px' }}
                        >
                            <img
                                src="/assets/images/logo.png"
                                width="28"
                                height="28"
                                alt="Logo IKATWI"
                                className="object-fit-contain"
                            />
                        </div>
                        <div>
                            <div className="fw-bold text-white mb-0" style={{ fontSize: '0.98rem', letterSpacing: '-0.01em', lineHeight: 1.15 }}>
                                IKATWI
                            </div>
                            <div className="text-emerald-200 small" style={{ fontSize: '0.68rem', color: '#a7f3d0', fontWeight: 500, letterSpacing: '0.02em' }}>
                                Ikatan Terapis Wicara Indonesia
                            </div>
                        </div>
                    </Link>

                    {/* Right Action: Menu & Dashboard shortcut */}
                    <div className="d-flex align-items-center gap-2">
                        {auth && auth.user ? (
                            <Link
                                href="/account/dashboard"
                                className="btn btn-sm d-inline-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill text-white shadow-sm"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                                    border: '1px solid rgba(255, 255, 255, 0.28)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}
                            >
                                <i className="fas fa-chart-pie text-warning"></i>
                                <span className="d-none d-sm-inline">Dashboard</span>
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="btn btn-sm d-inline-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill text-white shadow-sm"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                                    border: '1px solid rgba(255, 255, 255, 0.28)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}
                            >
                                <i className="fas fa-sign-in-alt"></i>
                                <span>Masuk</span>
                            </Link>
                        )}

                        <Dropdown align="end">
                            <Dropdown.Toggle
                                id="header-menu-dropdown"
                                className="btn btn-sm d-inline-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill text-white border-0 shadow-sm custom-header-btn"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                                    border: '1px solid rgba(255, 255, 255, 0.28)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}
                            >
                                <i className="fas fa-bars"></i>
                                <span className="d-none d-sm-inline">Menu</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                className="border-0 shadow-lg p-2 mt-2"
                                style={{
                                    borderRadius: '16px',
                                    minWidth: '220px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                }}
                            >
                                <div className="px-3 py-1.5 mb-1 text-muted fw-bold" style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Navigasi Utama
                                </div>

                                <Dropdown.Item as={Link} href="/history" className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center gap-2.5">
                                    <i className="fas fa-university text-primary" style={{ width: '18px' }}></i>
                                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Sejarah & Profil</span>
                                </Dropdown.Item>

                                <Dropdown.Item as={Link} href="/visimisi" className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center gap-2.5">
                                    <i className="fas fa-bullseye text-success" style={{ width: '18px' }}></i>
                                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Visi & Misi</span>
                                </Dropdown.Item>

                                <Dropdown.Item as={Link} href="/kegiatan" className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center gap-2.5">
                                    <i className="fas fa-calendar-alt text-purple" style={{ width: '18px', color: '#7c3aed' }}></i>
                                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Agenda Kegiatan</span>
                                </Dropdown.Item>

                                <Dropdown.Item as={Link} href="/anggota" className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center gap-2.5">
                                    <i className="fas fa-users text-warning" style={{ width: '18px' }}></i>
                                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Data Anggota</span>
                                </Dropdown.Item>

                                <Dropdown.Item as={Link} href="/wilayah" className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center gap-2.5">
                                    <i className="fas fa-map-marked-alt text-danger" style={{ width: '18px' }}></i>
                                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Pengurus Wilayah (DPW)</span>
                                </Dropdown.Item>

                                <Dropdown.Item as={Link} href="/wilayahdpc" className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center gap-2.5">
                                    <i className="fas fa-building text-info" style={{ width: '18px' }}></i>
                                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Pengurus Cabang (DPC)</span>
                                </Dropdown.Item>

                                <Dropdown.Divider className="my-1 border-light" />

                                <div className="px-3 py-1.5 mb-1 text-muted fw-bold" style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Layanan Eksternal
                                </div>

                                <Dropdown.Item
                                    href="https://ikatwisiporlin-ktki.kemkes.go.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center justify-content-between"
                                >
                                    <div className="d-flex align-items-center gap-2.5">
                                        <i className="fas fa-laptop-medical text-primary" style={{ width: '18px' }}></i>
                                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>SIPORLIN KTKI</span>
                                    </div>
                                    <i className="fas fa-external-link-alt text-muted" style={{ fontSize: '0.7rem' }}></i>
                                </Dropdown.Item>

                                <Dropdown.Item
                                    href="https://siedunakes-ktki.kemkes.go.id/home/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center justify-content-between"
                                >
                                    <div className="d-flex align-items-center gap-2.5">
                                        <i className="fas fa-id-card-alt text-success" style={{ width: '18px' }}></i>
                                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>SIDU Nakes</span>
                                    </div>
                                    <i className="fas fa-external-link-alt text-muted" style={{ fontSize: '0.7rem' }}></i>
                                </Dropdown.Item>

                                <Dropdown.Item
                                    href="https://jslcr.com/index.php/jslcr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dropdown-item-modern rounded-3 py-2 px-3 d-flex align-items-center justify-content-between"
                                >
                                    <div className="d-flex align-items-center gap-2.5">
                                        <i className="fas fa-book-open text-purple" style={{ width: '18px', color: '#7c3aed' }}></i>
                                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>Jurnal Ilmiah JSLCR</span>
                                    </div>
                                    <i className="fas fa-external-link-alt text-muted" style={{ fontSize: '0.7rem' }}></i>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .custom-header-btn:hover {
                    background-color: rgba(255, 255, 255, 0.28) !important;
                }
                .dropdown-item-modern:hover {
                    background-color: #f1f5f9 !important;
                }
                .dropdown-toggle::after {
                    margin-left: 0.35em;
                }
            `}</style>
        </header>
    );
}