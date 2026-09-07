//import React
import React, { useState } from "react";

//import link
import { Link, usePage } from '@inertiajs/inertia-react';

//import axios
import axios from "axios";

export default function Menu() {
    //destruct props "auth" & "url"
    const { auth } = usePage().props;

    //define state
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const isCurrent = (path) => {
        if (path === '/' && (window.location.pathname === '/' || window.location.pathname === '')) return true;
        if (path !== '/' && window.location.pathname.startsWith(path)) return true;
        return false;
    };

    const searchHandler = (e) => {
        const val = e.target.value;
        setSearchQuery(val);
        if (!val.trim()) {
            setProducts([]);
            return;
        }

        setIsLoading(true);
        axios.post(`/search`, { q: val })
            .then(response => {
                setIsLoading(false);
                setProducts(response.data.products || []);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            {/* Floating 3D Mobile Navigation Dock - Max Width 820px to match cards */}
            <nav
                className="fixed-bottom mx-auto p-1"
                style={{
                    maxWidth: '820px',
                    width: 'calc(100% - 24px)',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1040,
                }}
            >
                <div
                    className="d-flex align-items-center justify-content-around py-2 px-2 shadow-lg"
                    style={{
                        backgroundColor: 'rgba(6, 78, 59, 0.95)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 12px 30px -4px rgba(6, 78, 59, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                    }}
                >
                    {/* Item: Beranda */}
                    <Link
                        href="/"
                        className="text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item"
                        style={{
                            color: isCurrent('/') ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center mb-1"
                            style={{
                                width: '38px',
                                height: '38px',
                                backgroundColor: isCurrent('/') ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                                transform: isCurrent('/') ? 'scale(1.1) translateY(-2px)' : 'none',
                                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                boxShadow: isCurrent('/') ? '0 4px 12px rgba(0, 0, 0, 0.25)' : 'none',
                            }}
                        >
                            <i className="fas fa-home" style={{ fontSize: '1.15rem' }}></i>
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: isCurrent('/') ? 700 : 500, letterSpacing: '0.02em' }}>
                            Beranda
                        </span>
                    </Link>

                    {/* Item: Iuran / Tagihan */}
                    <Link
                        href={auth && auth.user ? "/account/tagihan" : "/login"}
                        className="text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item"
                        style={{
                            color: isCurrent('/account/tagihan') ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center mb-1"
                            style={{
                                width: '38px',
                                height: '38px',
                                backgroundColor: isCurrent('/account/tagihan') ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                                transform: isCurrent('/account/tagihan') ? 'scale(1.1) translateY(-2px)' : 'none',
                                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                boxShadow: isCurrent('/account/tagihan') ? '0 4px 12px rgba(0, 0, 0, 0.25)' : 'none',
                            }}
                        >
                            <i className="fas fa-file-invoice-dollar" style={{ fontSize: '1.05rem' }}></i>
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: isCurrent('/account/tagihan') ? 700 : 500, letterSpacing: '0.02em' }}>
                            Tagihan
                        </span>
                    </Link>

                    {/* Item: e-KTA */}
                    <Link
                        href={auth && auth.user ? "/account/ekta" : "/login"}
                        className="text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item"
                        style={{
                            color: isCurrent('/account/ekta') ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center mb-1"
                            style={{
                                width: '38px',
                                height: '38px',
                                backgroundColor: isCurrent('/account/ekta') ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                                transform: isCurrent('/account/ekta') ? 'scale(1.1) translateY(-2px)' : 'none',
                                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                boxShadow: isCurrent('/account/ekta') ? '0 4px 12px rgba(0, 0, 0, 0.25)' : 'none',
                            }}
                        >
                            <i className="fas fa-id-card" style={{ fontSize: '1.05rem' }}></i>
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: isCurrent('/account/ekta') ? 700 : 500, letterSpacing: '0.02em' }}>
                            e-KTA
                        </span>
                    </Link>

                    {/* Item: Akun / Dashboard */}
                    <Link
                        href={auth && auth.user ? "/account/dashboard" : "/login"}
                        className="text-decoration-none text-center flex-fill d-flex flex-column align-items-center position-relative py-1 nav-dock-item"
                        style={{
                            color: isCurrent('/account/dashboard') || isCurrent('/login') ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center mb-1"
                            style={{
                                width: '38px',
                                height: '38px',
                                backgroundColor: (isCurrent('/account/dashboard') || isCurrent('/login')) ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                                transform: (isCurrent('/account/dashboard') || isCurrent('/login')) ? 'scale(1.1) translateY(-2px)' : 'none',
                                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                boxShadow: (isCurrent('/account/dashboard') || isCurrent('/login')) ? '0 4px 12px rgba(0, 0, 0, 0.25)' : 'none',
                            }}
                        >
                            <i className="fas fa-user-circle" style={{ fontSize: '1.15rem' }}></i>
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: (isCurrent('/account/dashboard') || isCurrent('/login')) ? 700 : 500, letterSpacing: '0.02em' }}>
                            {auth && auth.user ? "Akun" : "Masuk"}
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Search Modal */}
            <div className="modal fade" id="search" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
                        <div className="modal-header text-white" style={{ backgroundColor: '#064e3b' }}>
                            <h6 className="modal-title fw-bold" id="exampleModalLabel">
                                <i className="fas fa-search me-2"></i> Pencarian
                            </h6>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="position-relative mb-3">
                                <input
                                    type="text"
                                    className="form-control rounded-3 py-2 ps-4"
                                    value={searchQuery}
                                    onChange={searchHandler}
                                    placeholder="Cari layanan, kegiatan, produk..."
                                    style={{ borderColor: '#cbd5e1' }}
                                />
                            </div>

                            {isLoading && (
                                <div className="text-center py-4">
                                    <div className="spinner-border text-success spinner-border-sm" role="status"></div>
                                    <p className="text-muted small mt-2 mb-0">Mencari data...</p>
                                </div>
                            )}

                            <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
                                {products.map((product, index) => (
                                    <a href={`/products/${product.slug}`} className="text-decoration-none text-dark d-block mb-2" key={index}>
                                        <div className="p-2.5 rounded-3 bg-light border hover-bg-emerald transition-all">
                                            <div className="fw-semibold small">{product.title}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .nav-dock-item:active {
                    transform: scale(0.92);
                }
                .hover-bg-emerald:hover {
                    background-color: #ecfdf5 !important;
                    border-color: #a7f3d0 !important;
                }
            `}</style>
        </>
    );
}