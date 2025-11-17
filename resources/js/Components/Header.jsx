//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Header() {
    let styles = {
        marginLeft: "7px",
    };

    return (
        <>
            <nav className="navbar-expand-md navbar-dark fixed-top shadow custom-green-header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
                                <Link
                                    href="/"
                                    className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"
                                >
                                    <img
                                        src="/assets/images/logo.png"
                                        width="50"
                                        alt="Logo Ikatan Terapis Wicara Indonesia"
                                        className="header-logo"
                                    />
                                    <span style={styles}>
                                        <h5 className="header-title">
                                            <strong>Ikatan Terapis Wicara Indonesia</strong>
                                        </h5>
                                    </span>
                                </Link>
                                <div id="page-content-wrapper"></div>
                            </header>
                        </div>
                        <div className="col-md-1">
                            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
                                <div className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="Menu"
                                        className="custom-dropdown mt-1"
                                        variant="success"
                                    >
                                        <Link href="/history">
                                            <Dropdown.Item href="#/action-2" className="dropdown-item-custom">
                                                Sejarah & Pengurus
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/visimisi">
                                            <Dropdown.Item href="#/action-2" className="dropdown-item-custom">
                                                Visi & Misi
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/kegiatan">
                                            <Dropdown.Item href="#/action-3" className="dropdown-item-custom">
                                                Kegiatan
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/anggota">
                                            <Dropdown.Item href="#/action-4" className="dropdown-item-custom">
                                                Anggota
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/wilayah">
                                            <Dropdown.Item href="#/action-5" className="dropdown-item-custom">
                                                Wilayah DPW
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/wilayahdpc">
                                            <Dropdown.Item href="#/action-6" className="dropdown-item-custom">
                                                Wilayah DPC
                                            </Dropdown.Item>
                                        </Link>

                                        <Dropdown.Item
                                            href="https://ikatwisiporlin-ktki.kemkes.go.id/"
                                            target="_blank"
                                            className="dropdown-item-custom"
                                        >
                                            Siporlin
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="https://siedunakes-ktki.kemkes.go.id/home/"
                                            target="_blank"
                                            className="dropdown-item-custom"
                                        >
                                            Siedunakes
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                .custom-green-header {
                    background: linear-gradient(135deg, #0d966d 0%, #047852 50%, #036745 100%) !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .header-logo {
                    transition: all 0.3s ease;
                }
                
                .header-logo:hover {
                    transform: scale(1.05);
                }
                
                .header-title {
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    font-weight: 500;
                    margin: 0;
                    color: rgba(255, 255, 255, 0.95);
                    letter-spacing: 0.5px;
                }
                
                .custom-dropdown .btn-success {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%) !important;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 0.6rem;
                    padding: 0.5rem 1rem;
                    font-weight: 500;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                    color: rgba(255, 255, 255, 0.95);
                    font-size: 0.9rem;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
                
                .custom-dropdown .btn-success:hover {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: rgba(255, 255, 255, 0.98);
                }
                
                .custom-dropdown .btn-success:active,
                .custom-dropdown .btn-success:focus {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%) !important;
                    transform: translateY(0);
                    color: rgba(255, 255, 255, 0.95);
                }
                
                .custom-dropdown .dropdown-menu {
                    background: linear-gradient(135deg, #0d966d 0%, #047852 100%) !important;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 0.6rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
                    backdrop-filter: blur(10px);
                    overflow: hidden;
                }
                
                .dropdown-item-custom {
                    color: rgba(255, 255, 255, 0.9) !important;
                    padding: 0.7rem 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    font-size: 0.9rem;
                }
                
                .dropdown-item-custom::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
                    transition: left 0.5s;
                }
                
                .dropdown-item-custom:hover::before {
                    left: 100%;
                }
                
                .dropdown-item-custom:hover {
                    background-color: rgba(255, 255, 255, 0.12) !important;
                    color: rgba(255, 255, 255, 0.95) !important;
                    padding-left: 1.3rem;
                }
                
                .dropdown-item-custom:active {
                    background-color: rgba(255, 255, 255, 0.18) !important;
                    color: rgba(255, 255, 255, 0.95) !important;
                }
                
                /* Responsive design */
                @media (max-width: 768px) {
                    .header-title {
                        font-size: 0.95rem;
                    }
                    
                    .header-logo {
                        width: 40px;
                    }
                    
                    .custom-dropdown .btn-success {
                        padding: 0.4rem 0.8rem;
                        font-size: 0.85rem;
                    }
                }
                
                @media (max-width: 576px) {
                    .header-title {
                        font-size: 0.85rem;
                        margin-left: 5px !important;
                        line-height: 1.2;
                    }
                    
                    .custom-dropdown {
                        width: 100%;
                        text-align: center;
                    }
                    
                    .custom-dropdown .btn-success {
                        width: 100%;
                        margin-bottom: 0.5rem;
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </>
    );
}