//import hook react
import React from "react";

//import Head, usePage and Link
import { Head, Link } from "@inertiajs/inertia-react";

export default function Info() {
    return (
        <>
            <Head>
                <title>Info Register - IKATWI</title>
            </Head>
            
            <div className="min-vh-100 d-flex align-items-center justify-content-center background-ikatwi">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            {/* Header */}
                            <div className="text-center mb-5">
                                <Link href="/" className="text-decoration-none">
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <img 
                                            src="/assets/images/logo.png" 
                                            width="80" 
                                            alt="IKATWI Logo"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h2 className="text-white fw-bold">IKATWI</h2>
                                </Link>
                                <p className="text-white-50">Informasi Pendaftaran Anggota</p>
                            </div>

                            {/* Card Content */}
                            <div className="card shadow-lg border-0 rounded-3 glass-effect">
                                <div className="card-header ikatwi-header text-white text-center py-4 border-0 rounded-top-3">
                                    <h5 className="mb-0 fw-bold">
                                        📋 INFO REGISTER AKUN ANGGOTA
                                    </h5>
                                </div>
                                
                                <div className="card-body p-4">
                                    <div className="mb-4">
                                        <div className="info-steps">
                                            <div className="step-item d-flex align-items-start mb-4">
                                                <div className="step-icon ikatwi-step-icon text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                                    <span className="fw-bold">1</span>
                                                </div>
                                                <div className="step-content">
                                                    <h6 className="fw-semibold mb-2 text-dark">Tutorial Pengisian Data</h6>
                                                    <p className="text-muted mb-2">
                                                        Untuk panduan lengkap pengisian data, silakan download tutorial berikut:
                                                    </p>
                                                    <a href="#" className="btn btn-ikatwi-outline btn-sm">
                                                        📥 Download Tutorial PDF
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="step-item d-flex align-items-start mb-4">
                                                <div className="step-icon ikatwi-step-icon text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                                    <span className="fw-bold">2</span>
                                                </div>
                                                <div className="step-content">
                                                    <h6 className="fw-semibold mb-2 text-dark">Pakta Integritas</h6>
                                                    <p className="text-muted mb-2">
                                                        Download dan baca pakta integritas sebelum melanjutkan pendaftaran:
                                                    </p>
                                                    <a 
                                                        target="_blank" 
                                                        href="/assets/files/pakta_integritas.pdf"
                                                        className="btn btn-ikatwi-outline btn-sm"
                                                    >
                                                        📄 Download Pakta Integritas
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mt-4">
                                        <Link href="/register">
                                            <button
                                                className="btn btn-white-ikatwi btn-lg rounded-2 px-5 w-100 fw-semibold shadow-sm"
                                                type="button"
                                            >
                                                🚀 LANJUTKAN REGISTER
                                            </button>
                                        </Link>
                                        
                                        <div className="mt-3">
                                            <Link 
                                                href="/" 
                                                className="text-muted text-decoration-none small"
                                            >
                                                ← Kembali ke Beranda
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="text-center mt-4">
                                <p className="text-white small">
                                    Butuh bantuan? <a href="#" className="text-white text-decoration-underline">Hubungi Admin</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .background-ikatwi {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .background-ikatwi::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
                }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .ikatwi-header {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                }
                
                .ikatwi-step-icon {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                }
                
                .btn-white-ikatwi {
                    background: white;
                    border: none;
                    color: #2c5530;
                    transition: all 0.3s ease;
                    font-weight: 600;
                }
                
                .btn-white-ikatwi:hover {
                    background: #f8f9fa;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
                    color: #2c5530;
                }
                
                .btn-ikatwi-outline {
                    border: 1px solid #2c5530;
                    color: #2c5530;
                    background: transparent;
                    transition: all 0.3s ease;
                }
                
                .btn-ikatwi-outline:hover {
                    background: #2c5530;
                    color: white;
                    transform: translateY(-1px);
                }
                
                .step-icon {
                    width: 32px;
                    height: 32px;
                    font-size: 0.875rem;
                }
                
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
                }
                
                .info-steps {
                    border-left: 2px solid #e9ecef;
                    margin-left: 16px;
                    padding-left: 20px;
                }
            `}</style>
        </>
    );
}