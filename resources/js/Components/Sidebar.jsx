//import React
import React, { useRef, useEffect, useState } from "react";

//import permissions
import hasAnyPermission from "../Utils/Permissions";

//import Link and usePage
import { Link, usePage } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Sidebar() {
    //destruct URL from props
    const { url } = usePage();
    
    // Ref untuk sidebar container
    const sidebarRef = useRef(null);
    
    // State untuk mengontrol visibilitas tombol scroll
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showScrollBottom, setShowScrollBottom] = useState(false);

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

    // Function untuk scroll ke atas
    const scrollToTop = () => {
        if (sidebarRef.current) {
            sidebarRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    // Function untuk scroll ke bawah
    const scrollToBottom = () => {
        if (sidebarRef.current) {
            sidebarRef.current.scrollTo({
                top: sidebarRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    // Effect untuk memantau posisi scroll
    useEffect(() => {
        const handleScroll = () => {
            if (sidebarRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
                
                // Tampilkan tombol scroll ke atas jika tidak di posisi paling atas
                setShowScrollTop(scrollTop > 50);
                
                // Tampilkan tombol scroll ke bawah jika tidak di posisi paling bawah
                setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 50);
            }
        };

        const sidebarElement = sidebarRef.current;
        if (sidebarElement) {
            sidebarElement.addEventListener('scroll', handleScroll);
            
            // Panggil sekali untuk set status awal
            handleScroll();
            
            return () => {
                sidebarElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <>
            <div 
                className="list-group list-group-flush sidebar-container"
                ref={sidebarRef}
            >
                {/* Tombol Scroll ke Atas */}
                {showScrollTop && (
                    <button 
                        className="scroll-btn scroll-top-btn"
                        onClick={scrollToTop}
                        aria-label="Scroll ke atas"
                    >
                        <i className="fa fa-chevron-up"></i>
                    </button>
                )}

                {/* Tombol Scroll ke Bawah */}
                {showScrollBottom && (
                    <button 
                        className="scroll-btn scroll-bottom-btn"
                        onClick={scrollToBottom}
                        aria-label="Scroll ke bawah"
                    >
                        <i className="fa fa-chevron-down"></i>
                    </button>
                )}

                {/* Header KATWI */}
                <div className="sidebar-header">
                    <div className="katwi-logo">
                        <div className="logo-icon">
                            <i className="fa fa-users"></i>
                        </div>
                        <div className="logo-text">
                            <span className="katwi-title">KATWI</span>
                            <span className="katwi-subtitle">Management System</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard - Menu Utama - TANPA PERMISSION CHECK DULU */}
                <Link href="/account/dashboard" className={`dashboard-menu ${getActiveClass("/account/dashboard")}`}>
                    <i className="fa fa-tachometer-alt me-3"></i> Dashboard
                </Link>

                {/* Data Master */}
                {(hasAnyPermission(["categories.index"]) ||
                    hasAnyPermission(["dpw.index"]) ||
                    hasAnyPermission(["dpc.index"]) ||
                    hasAnyPermission(["wilayah.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header">
                                <i className="fa fa-database me-2"></i> DATA MASTER
                            </div>

                            <div className="menu-items">
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
                        </div>
                    )}

                {/* Keanggotaan */}
                {(hasAnyPermission(["biodatas.index"]) ||
                    hasAnyPermission(["pengurus.index"]) ||
                    hasAnyPermission(["ekta.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header">
                                <i className="fa fa-users me-2"></i> KEANGGOTAAN
                            </div>

                            <div className="menu-items">
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

                                {hasAnyPermission(["ekta.index"]) && (
                                    <Link href="/account/sig" className={getActiveClass("/account/sig")}>
                                        <i className="fa fa-address-card me-3"></i> SIG
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}

                {/* Keuangan */}
                {(hasAnyPermission(["tagihan.index"]) ||
                    hasAnyPermission(["transactions.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header">
                                <i className="fa fa-wallet me-2"></i> KEUANGAN
                            </div>

                            <div className="menu-items">
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
                        </div>
                    )}

                {/* Kegiatan & Agenda */}
                {(hasAnyPermission(["products.index"]) ||
                    hasAnyPermission(["kegiatan.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header">
                                <i className="fa fa-calendar-alt me-2"></i> KEGIATAN
                            </div>

                            <div className="menu-items">
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
                            <div className="sidebar-section-header">
                                <i className="fa fa-folder-open me-2"></i> DOKUMEN & MUTASI
                            </div>

                            <div className="menu-items">
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
                                            <div className="sidebar-subheader">
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
                        </div>
                    )}

                {/* Sistem */}
                {(hasAnyPermission(["sliders.index"]) ||
                    hasAnyPermission(["roles.index"]) ||
                    hasAnyPermission(["permissions.index"]) ||
                    hasAnyPermission(["users.index"])) && (
                        <div className="sidebar-section">
                            <div className="sidebar-section-header">
                                <i className="fa fa-cogs me-2"></i> SISTEM
                            </div>

                            <div className="menu-items">
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
                        </div>
                    )}

                {/* Navigasi Utama */}
                <div className="sidebar-section">
                    <div className="sidebar-section-header">
                        <i className="fa fa-compass me-2"></i> NAVIGASI
                    </div>

                    <div className="menu-items">
                        <Link href="/" className={getActiveClass("/")}>
                            <i className="fa fa-home me-3"></i> Beranda
                        </Link>

                        <Link onClick={logoutHandler} className={getActiveClass("/logout")}>
                            <i className="fa fa-sign-out-alt me-3"></i> Logout
                        </Link>
                    </div>
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
                    overflow-y: auto;
                    overflow-x: hidden;
                    border-right: 1px solid #e2e8f0;
                    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.04);
                    max-height: 100vh;
                    height: 100%;
                    scroll-behavior: smooth;
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

                /* Header KATWI */
                .sidebar-header {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    padding: 1.5rem 1rem;
                    border-bottom: 1px solid #e2e8f0;
                    margin-bottom: 0;
                }

                .katwi-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .logo-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(10px);
                }

                .logo-icon i {
                    color: white;
                    font-size: 1.2rem;
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                }

                .katwi-title {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    line-height: 1.2;
                }

                .katwi-subtitle {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.7rem;
                    font-weight: 500;
                }

                /* Dashboard Menu - FIXED DAN PASTI TAMPIL */
                .dashboard-menu {
                    display: flex !important;
                    align-items: center;
                    padding: 1rem 1.5rem !important;
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.05) 0%, 
                        rgba(99, 102, 241, 0.02) 100%) !important;
                    border-bottom: 1px solid #e2e8f0 !important;
                    margin: 0 !important;
                    position: relative;
                    z-index: 2;
                    font-weight: 600;
                    color: #475569 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                    border-left: 4px solid transparent;
                    width: 100%;
                    box-sizing: border-box;
                }

                .dashboard-menu:hover {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.08) 0%, 
                        rgba(99, 102, 241, 0.04) 100%) !important;
                    color: #6366f1 !important;
                    transform: translateX(5px);
                    border-left: 4px solid #6366f1;
                }

                .dashboard-menu.active {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.1) 0%, 
                        rgba(99, 102, 241, 0.06) 100%) !important;
                    color: #6366f1 !important;
                    border-left: 4px solid #6366f1;
                }

                .dashboard-menu i {
                    width: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                    color: #64748b;
                }

                .dashboard-menu:hover i,
                .dashboard-menu.active i {
                    color: #6366f1;
                    transform: scale(1.1);
                }

                /* Section Styling */
                .sidebar-section {
                    border-bottom: 1px solid #f1f5f9;
                    position: relative;
                    z-index: 1;
                }
                
                .sidebar-section:first-of-type {
                    margin-top: 0;
                }
                
                .sidebar-section:last-child {
                    border-bottom: none;
                }
                
                .sidebar-section-header {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    padding: 0.75rem 1rem;
                    color: #475569;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    border-bottom: 1px solid #e2e8f0;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                }

                .sidebar-section-header i {
                    color: #6366f1;
                    width: 16px;
                    text-align: center;
                }
                
                .menu-items {
                    padding: 0.25rem 0;
                }
                
                .sidebar-subheader {
                    background: linear-gradient(135deg, 
                        #f8fafc 0%, 
                        #f1f5f9 100%);
                    font-size: 0.75rem;
                    border-left: 3px solid #10b981;
                    margin: 0.5rem;
                    padding: 0.5rem 0.75rem;
                    color: #64748b;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                    font-weight: 600;
                }
                
                .verification-section {
                    background: #ffffff;
                    margin: 0.5rem;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
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
                    padding: 0.75rem 1rem;
                    display: block;
                    text-decoration: none;
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
                }
                
                .list-group-item.active {
                    background: linear-gradient(135deg, 
                        rgba(99, 102, 241, 0.08) 0%, 
                        rgba(99, 102, 241, 0.12) 100%);
                    color: #6366f1;
                    border-left: 4px solid #6366f1;
                    font-weight: 600;
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

                /* Tombol scroll styling */
                .scroll-btn {
                    position: absolute;
                    right: 10px;
                    z-index: 10;
                    background: rgba(99, 102, 241, 0.9);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }

                .scroll-btn:hover {
                    background: #6366f1;
                    transform: scale(1.1);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .scroll-top-btn {
                    top: 80px;
                }

                .scroll-bottom-btn {
                    bottom: 10px;
                }

                /* Scrollbar styling */
                .sidebar-container::-webkit-scrollbar {
                    width: 6px;
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
                    
                    .scroll-btn {
                        width: 28px;
                        height: 28px;
                        right: 8px;
                    }
                    
                    .scroll-top-btn {
                        top: 70px;
                    }
                    
                    .scroll-bottom-btn {
                        bottom: 8px;
                    }

                    .sidebar-header {
                        padding: 1rem 0.75rem;
                    }

                    .katwi-title {
                        font-size: 1.3rem;
                    }

                    .logo-icon {
                        width: 35px;
                        height: 35px;
                    }

                    .dashboard-menu {
                        padding: 0.875rem 1.25rem !important;
                    }
                }
            `}</style>
        </>
    );
}