//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function VisiMisiIndex() {
    return (
        <>
            <Head>
                <title>IKATWI Visi & Misi - Ikatan Terapis Wicara</title>
            </Head>
            <LayoutWeb>
                <div
                    className="container"
                    style={{ marginTop: "130px", marginBottom: "50px" }}
                >
                    <div className="fade-in mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                {/* Header Section */}
                                <div className="text-center mb-5">
                                    <h4 className="font-weight-bold text-dark mb-3">
                                        Visi & Misi
                                    </h4>
                                    <div className="divider bg-gradient-primary mx-auto"
                                        style={{ width: "60px", height: "3px", borderRadius: "2px" }}>
                                    </div>
                                </div>

                                {/* Vision Card */}
                                <div className="card vision-card border-0 rounded-lg shadow-sm mb-4">
                                    <div className="card-header bg-gradient-primary text-white py-3 rounded-top">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="fas fa-bullseye fa-lg me-2"></i>
                                            <h5 className="mb-0 font-weight-bold">Visi</h5>
                                        </div>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="vision-content text-center">
                                            <p className="fw-semibold text-dark mb-0" style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
                                                MEWUJUDKAN IKATWI SEBAGAI WADAH ORGANISASI YANG BERORIENTASKAN PADA
                                                <span className="text-primary fw-bold"> TRANSPARANSI</span>,
                                                <span className="text-success fw-bold"> AKUNTABILITAS</span>,
                                                <span className="text-warning fw-bold"> KUALITAS</span> DAN
                                                <span className="text-info fw-bold"> KEILMUAN TERAPI WICARA</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mission Card */}
                                <div className="card mission-card border-0 rounded-lg shadow-sm mb-4">
                                    <div className="card-header bg-gradient-success text-white py-3 rounded-top">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="fas fa-rocket fa-lg me-2"></i>
                                            <h5 className="mb-0 font-weight-bold">Misi</h5>
                                        </div>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mission-content">
                                            <div className="mission-item text-center p-4 mb-3 rounded-lg border-0 bg-white shadow-sm">
                                                <div className="mission-icon mb-3">
                                                    <i className="fas fa-sync-alt fa-2x text-primary"></i>
                                                </div>
                                                <h6 className="font-weight-bold text-dark mb-2">
                                                    Transformasi Tata Kelola
                                                </h6>
                                                <p className="text-muted mb-0 small" style={{ lineHeight: "1.5" }}>
                                                    MELAKUKAN TRANSFORMASI TATA KELOLA ORGANISASI
                                                </p>
                                            </div>
                                            <div className="mission-item text-center p-4 rounded-lg border-0 bg-white shadow-sm">
                                                <div className="mission-icon mb-3">
                                                    <i className="fas fa-gavel fa-2x text-success"></i>
                                                </div>
                                                <h6 className="font-weight-bold text-dark mb-2">
                                                    Penguatan Legalitas
                                                </h6>
                                                <p className="text-muted mb-0 small" style={{ lineHeight: "1.5" }}>
                                                    MENGUATKAN ASPEK LEGAL ORGANISASI
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Info */}
                                <div className="text-center mt-4 mb-5">
                                    <div className="commitment-card bg-white rounded-lg p-4 border-0 shadow-sm">
                                        <div className="commitment-icon mb-3">
                                            <i className="fas fa-heart fa-2x text-danger"></i>
                                        </div>
                                        <h6 className="text-dark mb-3 fw-bold">Komitmen Kami</h6>
                                        <p className="text-dark mb-0" style={{ lineHeight: "1.6", fontSize: "0.9rem" }}>
                                            IKATWI berkomitmen untuk terus berkembang dan memberikan kontribusi terbaik
                                            dalam bidang terapi wicara di Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .vision-card {
                        background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
                        border-left: 4px solid #007bff !important;
                        transition: transform 0.3s ease;
                    }
                    
                    .vision-card:hover {
                        transform: translateY(-2px);
                    }
                    
                    .mission-card {
                        background: linear-gradient(135deg, #f0fff4 0%, #ffffff 100%);
                        border-left: 4px solid #28a745 !important;
                        transition: transform 0.3s ease;
                    }
                    
                    .mission-card:hover {
                        transform: translateY(-2px);
                    }
                    
                    .mission-item {
                        transition: all 0.3s ease;
                        background: white !important;
                    }
                    
                    .mission-item:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
                    }
                    
                    .bg-gradient-primary {
                        background: linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important;
                    }
                    
                    .bg-gradient-success {
                        background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%) !important;
                    }
                    
                    .card-header {
                        border-bottom: none;
                    }
                    
                    .divider {
                        background: linear-gradient(135deg, #007bff 0%, #28a745 100%) !important;
                    }
                    
                    .commitment-icon {
                        opacity: 0.8;
                    }
                    
                    .commitment-card {
                        transition: all 0.3s ease;
                    }
                    
                    .commitment-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
                    }
                `}</style>
            </LayoutWeb>
        </>
    );
}