//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component slider
import Slider from "../../../Components/Slider";

//import component card category
import CardCategory from "../../../Shared/CardCategory";

//import component slider
import CardProduct from "../../../Shared/CardProduct";
import Footer from "../../../Components/Footer";
import CardKegiatan from "../../../Shared/CardKegiatan";

export default function HomeIndex() {
    //destruct props "sliders", "categories", "products"
    const { auth, sliders, categories, products, kegiatans } = usePage().props;

    console.log(kegiatans);

    const currentDate = new Date();

    const menuItems = [
        { 
            name: "Profil", 
            icon: "profil.jpeg", 
            href: "/history", 
            color: "primary",
            description: "Sejarah dan profil organisasi",
            badge: null
        },
        { 
            name: "Visi Misi", 
            icon: "visimisi.jpeg", 
            href: "/visimisi", 
            color: "success",
            description: "Visi dan misi IKATWI",
            badge: null
        },
        { 
            name: "Kegiatan", 
            icon: "kegiatan.jpeg", 
            href: "/kegiatan", 
            color: "info",
            description: "Agenda dan aktivitas",
            badge: "New"
        },
        { 
            name: "Anggota", 
            icon: "anggota.jpeg", 
            href: "/anggota", 
            color: "warning",
            description: "Data anggota terapis",
            badge: null
        },
        { 
            name: "DPW", 
            icon: "dpw.jpeg", 
            href: "/wilayah", 
            color: "danger",
            description: "Dewan Pengurus Wilayah",
            badge: null
        },
        { 
            name: "DPC", 
            icon: "dpc.jpeg", 
            href: "/wilayahdpc", 
            color: "secondary",
            description: "Dewan Pengurus Cabang",
            badge: null
        },
        { 
            name: "SIPORLIN", 
            icon: "siporlin.jpeg", 
            href: "https://ikatwisiporlin-ktki.kemkes.go.id/", 
            color: "primary",
            description: "Sistem Informasi Online",
            badge: "External",
            external: true
        },
        { 
            name: "SIDU Nakes", 
            icon: "sidunakes.jpeg", 
            href: "https://siedunakes-ktki.kemkes.go.id/home/", 
            color: "success",
            description: "Sistem Informasi Nakes",
            badge: "External",
            external: true
        }
    ];

    return (
        <>
            <Head>
                <title>IKATWI - Ikatan Terapis Wicara Indonesia</title>
            </Head>
            <LayoutWeb>
                {/* Welcome Section for Logged In Users */}
                {auth.user && (
                    <div className="container" style={{ marginTop: "120px", maxWidth: '1140px' }}>
                        <div className="fade-in">
                            <div className="row justify-content-center">
                                <div className="col-md-8" style={{ width: '100%', maxWidth: '720px' }}>
                                    <div className="card border-0 rounded-4 shadow-lg profile-card">
                                        <div className="card-body p-5">
                                            {/* Profile Header dengan Background Gradient Hijau */}
                                            <div className="profile-header position-relative rounded-4 p-4 mb-4">
                                                <div className="background-pattern"></div>
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* Profile Photo dengan Frame Cantik */}
                                                        <div className="profile-photo-container position-relative">
                                                            <div className="profile-frame">
                                                                <img
                                                                    src={auth.user.image}
                                                                    className="profile-image"
                                                                    alt="Profile"
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = "/assets/images/user.png";
                                                                    }}
                                                                />
                                                            </div>
                                                            {/* Status Badge */}
                                                            <div className={`status-badge ${new Date(auth.user.date_exprd) >= currentDate ? 'active' : 'inactive'}`}>
                                                                <i className={`fas ${new Date(auth.user.date_exprd) >= currentDate ? 'fa-check' : 'fa-exclamation-triangle'}`}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="profile-info">
                                                            <h4 className="profile-name mb-2">{auth.user.name}</h4>
                                                            <p className="profile-email mb-3">
                                                                <i className="fas fa-envelope me-2"></i>
                                                                {auth.user.email}
                                                            </p>
                                                            <div className="profile-status">
                                                                {new Date(auth.user.date_exprd) >= currentDate ? (
                                                                    <span className="status-tag active">
                                                                        <i className="fas fa-shield-alt me-2"></i>
                                                                        STR Aktif
                                                                        <small className="ms-2">Berlaku hingga {new Date(auth.user.date_exprd).toLocaleDateString('id-ID')}</small>
                                                                    </span>
                                                                ) : (
                                                                    <span className="status-tag inactive">
                                                                        <i className="fas fa-exclamation-triangle me-2"></i>
                                                                        STR Non Aktif
                                                                        <small className="ms-2">Kadaluarsa sejak {new Date(auth.user.date_exprd).toLocaleDateString('id-ID')}</small>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Additional Info Section - Hijau seperti footer */}
                                            <div className="profile-details">
                                                <div className="row text-center">
                                                    <div className="col-6">
                                                        <div className="detail-item">
                                                            <div className="detail-icon">
                                                                <i className="fas fa-user-md"></i>
                                                            </div>
                                                            <div className="detail-content">
                                                                <h6 className="detail-value mb-1">Terapis</h6>
                                                                <small className="detail-label">Profesi</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="detail-item">
                                                            <div className="detail-icon">
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <div className="detail-content">
                                                                <h6 className="detail-value mb-1">Anggota</h6>
                                                                <small className="detail-label">Status</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Slider dengan lebar yang sama seperti menu utama */}
                <div className="container mt-4" style={{ maxWidth: '1240px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-8" style={{ width: '100%', maxWidth: '1160px' }}>
                            <Slider sliders={sliders} />
                        </div>
                    </div>
                </div>

                <div className="container mt-4 mb-5" style={{ maxWidth: '1140px' }}>
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            {/* Menu Utama Section - Same width as profile */}
                            <div className="col-md-8" style={{ width: '100%', maxWidth: '720px' }}>
                                {/* Categories Menu Section */}
                                <div className="section-header mb-4">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h4 className="fw-bold text-primary mb-0">
                                                <i className="fas fa-th-large me-2 text-primary"></i>
                                                Menu Utama
                                            </h4>
                                            <p className="text-muted mb-0 mt-1 small">
                                                Akses cepat ke berbagai layanan dan informasi IKATWI
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <div className="bg-gradient-green rounded-pill px-3 py-1 shadow-sm">
                                                <small className="text-white fw-semibold">
                                                    <i className="fas fa-bolt me-1"></i>
                                                    Quick Access
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center g-4 mb-5">
                                    {menuItems.map((item, index) => (
                                        <div className="col-lg-3 col-md-4 col-6" key={index}>
                                            {item.external ? (
                                                <a 
                                                    href={item.href} 
                                                    className="text-decoration-none menu-item-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className={`menu-card card border-0 rounded-3 shadow-sm h-100 transition-all position-relative overflow-hidden white-menu-card`}>
                                                        {/* Badge */}
                                                        {item.badge && (
                                                            <div className={`position-absolute top-0 end-0 m-2 badge ${item.badge === 'New' ? 'bg-success' : 'bg-warning'} rounded-pill z-2 shadow-sm`}>
                                                                <small className="fw-bold">{item.badge}</small>
                                                            </div>
                                                        )}
                                                        
                                                        <div className="card-body p-0 position-relative z-1 d-flex flex-column">
                                                            {/* Image Container - Full Width */}
                                                            <div className="image-container rounded-top-3 overflow-hidden position-relative" style={{ height: '120px' }}>
                                                                <img
                                                                    src={`/assets/images/icon/${item.icon}`}
                                                                    className="w-100 h-100 object-fit-cover transition-transform"
                                                                    alt={item.name}
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = "/assets/images/icon/default-icon.png";
                                                                    }}
                                                                />
                                                                {/* Overlay Gradient */}
                                                                <div className="position-absolute top-0 start-0 w-100 h-100 overlay-gradient"></div>
                                                            </div>
                                                            
                                                            {/* Content */}
                                                            <div className="content-section p-3 text-center flex-grow-1 d-flex flex-column">
                                                                <h6 className="fw-semibold text-gray-800 mb-1 transition-color">{item.name}</h6>
                                                                <p className="text-gray-600 small mb-2 transition-color flex-grow-1" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
                                                                    {item.description}
                                                                </p>
                                                                
                                                                {/* External Indicator */}
                                                                {item.external && (
                                                                    <div className="external-indicator mt-1">
                                                                        <small className="text-primary fw-semibold">
                                                                            <i className="fas fa-external-link-alt me-1"></i>
                                                                            External
                                                                        </small>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ) : (
                                                <Link href={item.href} className="text-decoration-none menu-item-link">
                                                    <div className={`menu-card card border-0 rounded-3 shadow-sm h-100 transition-all position-relative overflow-hidden white-menu-card`}>
                                                        {/* Badge */}
                                                        {item.badge && (
                                                            <div className="position-absolute top-0 end-0 m-2 badge bg-success rounded-pill z-2 shadow-sm">
                                                                <small className="fw-bold">{item.badge}</small>
                                                            </div>
                                                        )}
                                                        
                                                        <div className="card-body p-0 position-relative z-1 d-flex flex-column">
                                                            {/* Image Container - Full Width */}
                                                            <div className="image-container rounded-top-3 overflow-hidden position-relative" style={{ height: '120px' }}>
                                                                <img
                                                                    src={`/assets/images/icon/${item.icon}`}
                                                                    className="w-100 h-100 object-fit-cover transition-transform"
                                                                    alt={item.name}
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = "/assets/images/icon/default-icon.png";
                                                                    }}
                                                                />
                                                                {/* Overlay Gradient */}
                                                                <div className="position-absolute top-0 start-0 w-100 h-100 overlay-gradient"></div>
                                                            </div>
                                                            
                                                            {/* Content */}
                                                            <div className="content-section p-3 text-center flex-grow-1 d-flex flex-column">
                                                                <h6 className="fw-semibold text-gray-800 mb-1 transition-color">{item.name}</h6>
                                                                <p className="text-gray-600 small mb-0 transition-color flex-grow-1" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Agenda Kegiatan Section - Same width as profile */}
                                <div className="section-header mb-4">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h4 className="fw-bold text-primary mb-0">
                                                <i className="fas fa-calendar-alt me-2 text-primary"></i>
                                                Agenda Kegiatan Terbaru
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <Link href="/kegiatan" className="btn btn-outline-primary btn-sm rounded-pill professional-btn">
                                                Lihat Semua <i className="fas fa-arrow-right ms-1"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-3 mb-4">
                                    {kegiatans.map((kegiatan, index) => (
                                        <div className="col-12" key={index}>
                                            <CardKegiatan kegiatan={kegiatan} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer dengan lebar yang sama */}
                <div className="container" style={{ maxWidth: '1140px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-8" style={{ width: '100%', maxWidth: '720px' }}>
                            <Footer />
                        </div>
                    </div>
                </div>
            </LayoutWeb>

            <style jsx>{`
                /* Profile Card Styles */
                .profile-card {
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                    border: 1px solid #e2e8f0;
                    position: relative;
                    overflow: hidden;
                }

                .profile-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #059669, #10b981, #34d399);
                }

                .profile-header {
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .background-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
                }

                .profile-photo-container {
                    display: inline-block;
                    position: relative;
                }

                .profile-frame {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    padding: 4px;
                    background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                    position: relative;
                    transition: all 0.3s ease;
                }

                .profile-frame:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 35px rgba(0,0,0,0.2);
                }

                .profile-image {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 3px solid white;
                }

                .status-badge {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 3px solid white;
                    font-size: 12px;
                }

                .status-badge.active {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                }

                .status-badge.inactive {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                    color: white;
                }

                .profile-info {
                    color: white;
                }

                .profile-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .profile-email {
                    opacity: 0.9;
                    font-size: 0.95rem;
                    margin-bottom: 1rem;
                }

                .profile-status {
                    margin-top: 1rem;
                }

                .status-tag {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }

                .status-tag.active {
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.3);
                }

                .status-tag.inactive {
                    background: rgba(239,68,68,0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(239,68,68,0.3);
                }

                .status-tag small {
                    opacity: 0.8;
                    font-weight: 400;
                }

                /* Profile Details Section - Warna Hijau */
                .profile-details {
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #e2e8f0;
                }

                .detail-item {
                    padding: 0.5rem;
                }

                .detail-icon {
                    width: 50px;
                    height: 50px;
                    margin: 0 auto 0.75rem;
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.25rem;
                    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
                }

                .detail-value {
                    font-weight: 700;
                    color: #1e293b;
                    font-size: 0.9rem;
                }

                .detail-label {
                    color: #64748b;
                    font-size: 0.75rem;
                }

                /* Gradient Hijau untuk Quick Access */
                .bg-gradient-green {
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%) !important;
                }

                /* Menu Card Styles */
                .white-menu-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid #e2e8f0;
                    cursor: pointer;
                    background: white;
                }
                
                .menu-item-link:hover .white-menu-card {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
                    border-color: #cbd5e1;
                    background: #f8fafc;
                }
                
                .menu-item-link:hover .image-container img {
                    transform: scale(1.05);
                }
                
                .menu-item-link:hover .transition-color {
                    color: #1e293b !important;
                }
                
                .image-container {
                    background: #f8fafc;
                    position: relative;
                }
                
                .object-fit-cover {
                    object-fit: cover;
                }
                
                .overlay-gradient {
                    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%);
                    pointer-events: none;
                }
                
                .content-section {
                    background: white;
                    border-bottom-left-radius: 0.75rem;
                    border-bottom-right-radius: 0.75rem;
                }
                
                .professional-btn {
                    border: 1px solid #cbd5e1;
                    color: #475569;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .professional-btn:hover {
                    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                    color: white;
                    border-color: #059669;
                    transform: translateY(-1px);
                }
                
                .transition-all {
                    transition: all 0.3s ease;
                }
                
                .transition-transform {
                    transition: transform 0.3s ease;
                }
                
                .transition-color {
                    transition: color 0.3s ease;
                }
                
                .section-header {
                    border-bottom: 1px solid #e2e8f0;
                    padding-bottom: 1rem;
                }

                /* Slider Container Styles */
                .slider-container {
                    width: 100%;
                    max-width: 720px;
                    margin: 0 auto;
                }
                
                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .profile-header .row {
                        text-align: center;
                    }
                    
                    .profile-photo-container {
                        margin-bottom: 1rem;
                    }
                    
                    .profile-frame {
                        width: 80px;
                        height: 80px;
                    }
                    
                    .profile-name {
                        font-size: 1.25rem;
                        text-align: center;
                        margin-bottom: 0.5rem;
                        margin-top: 0.5rem;
                        display: block;
                        width: 100%;
                        text-align: center;
                        padding-left: 0;
                        justify-content: center;
                        margin-left: 0;
                        margin-right: 0;
                        text-align: center;
                        display: block;
                    }

                    .profile-info {
                        text-align: center;
                        width: 100%;
                    }

                    .profile-status {
                        text-align: center;
                        justify-content: center;
                        display: flex;
                    }

                    .status-tag {
                        justify-content: center;
                        text-align: center;
                    }
                    
                    .detail-item {
                        margin-bottom: 1rem;
                    }
                    
                    .image-container {
                        height: 100px !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .profile-card .card-body {
                        padding: 1.5rem !important;
                    }
                    
                    .profile-header {
                        padding: 1.5rem !important;
                    }
                    
                    .image-container {
                        height: 90px !important;
                    }
                    
                    .content-section {
                        padding: 1rem !important;
                    }
                }
            `}</style>
        </>
    );
}