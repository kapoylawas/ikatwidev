//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function LupaPassword() {
    const { errors } = usePage().props;

    const [nik, setNik] = useState("");
    const [noAnggota, setNoAnggota] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const resetHandler = async (e) => {
        e.preventDefault();
        
        // Set loading state
        setIsLoading(true);

        //register
        Inertia.post(
            "/resetPassword",
            {
                no_anggota: noAnggota,
                nik: nik,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Password berhasil direset!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setIsLoading(false);
                },
                onError: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Forgot Password - IKATWI</title>
            </Head>
            
            <div className="min-vh-100 d-flex align-items-center justify-content-center background-ikatwi">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            {/* Header */}
                            <div className="text-center mb-4">
                                <Link href="/" className="text-decoration-none">
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <img 
                                            src="/assets/images/logo.png" 
                                            width="70" 
                                            alt="IKATWI Logo"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h2 className="text-white fw-bold">IKATWI</h2>
                                </Link>
                                <p className="text-white-50">Reset Password Anggota</p>
                            </div>

                            {/* Info Card */}
                            <div className="card border-0 rounded-3 shadow-sm mb-4 info-card">
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h6 className="fw-bold text-success mb-3">
                                            <i className="fas fa-info-circle me-2"></i>
                                            INFORMASI RESET PASSWORD
                                        </h6>
                                        <div className="info-steps">
                                            <div className="step-item d-flex align-items-start mb-3">
                                                <div className="step-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                                    <span className="fw-bold">1</span>
                                                </div>
                                                <div className="step-content text-start">
                                                    <p className="mb-0 text-muted">
                                                        Masukkan data <strong>NIK</strong> dan <strong>No Anggota/KTA</strong> dengan benar
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="step-item d-flex align-items-start">
                                                <div className="step-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                                    <span className="fw-bold">2</span>
                                                </div>
                                                <div className="step-content text-start">
                                                    <p className="mb-0 text-muted">
                                                        Password akan direset menjadi <strong>NIK Anda</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Reset Form Card */}
                            <div className="card shadow-lg border-0 rounded-3 glass-effect">
                                <div className="card-header ikatwi-header text-white text-center py-3 border-0 rounded-top-3">
                                    <h5 className="mb-0 fw-bold">
                                        🔐 RESET PASSWORD ANGGOTA
                                    </h5>
                                </div>
                                
                                <div className="card-body p-4">
                                    {/* Error Message */}
                                    {errors.meta && (
                                        <div className="alert alert-danger border-0 shadow-sm mb-4">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <small className="fw-semibold">{errors.meta}</small>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={resetHandler}>
                                        {/* NIK Input */}
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">
                                                <i className="fas fa-id-card me-2"></i>
                                                NIK (Nomor Induk Kependudukan)
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.nik ? 'is-invalid' : ''}`}
                                                value={nik}
                                                onChange={(e) => setNik(e.target.value)}
                                                placeholder="Masukkan 16 digit NIK"
                                                maxLength={16}
                                            />
                                            {errors.nik && (
                                                <div className="invalid-feedback">
                                                    {errors.nik}
                                                </div>
                                            )}
                                        </div>

                                        {/* No Anggota Input */}
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-dark">
                                                <i className="fas fa-address-card me-2"></i>
                                                No Anggota / No KTA
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.no_anggota ? 'is-invalid' : ''}`}
                                                value={noAnggota}
                                                onChange={(e) => setNoAnggota(e.target.value)}
                                                placeholder="Masukkan No Anggota/KTA"
                                                maxLength={7}
                                            />
                                            {errors.no_anggota && (
                                                <div className="invalid-feedback">
                                                    {errors.no_anggota}
                                                </div>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            className={`btn btn-ikatwi btn-lg rounded-2 px-5 w-100 fw-semibold shadow-sm ${isLoading ? 'loading' : ''}`}
                                            type="submit"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="spinner-border spinner-border-sm me-2" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                    PROSES RESET...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-redo-alt me-2"></i>
                                                    RESET PASSWORD
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {/* Login Link */}
                                    <div className="text-center mt-4">
                                        <p className="text-muted mb-0">
                                            Ingat password?{" "}
                                            <Link href="/login" className="text-ikatwi fw-semibold text-decoration-none">
                                                Login di sini!
                                            </Link>
                                        </p>
                                    </div>
                                </div>
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
                    padding: 2rem 0;
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
                
                .info-card {
                    background: rgba(255, 255, 255, 0.9);
                    border-left: 4px solid #28a745;
                }
                
                .ikatwi-header {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                }
                
                .btn-ikatwi {
                    background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
                    border: none;
                    color: white;
                    transition: all 0.3s ease;
                    padding: 12px 24px;
                }
                
                .btn-ikatwi:hover:not(:disabled) {
                    background: linear-gradient(135deg, #234325 0%, #3d6a4a 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(44, 85, 48, 0.4);
                    color: white;
                }
                
                .btn-ikatwi:disabled {
                    background: #6c757d;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .btn-ikatwi.loading {
                    background: linear-gradient(135deg, #234325 0%, #3d6a4a 100%);
                    cursor: wait;
                }
                
                .text-ikatwi {
                    color: #2c5530 !important;
                }
                
                .text-ikatwi:hover {
                    color: #234325 !important;
                }
                
                .form-control {
                    border: 1px solid #e2e8f0;
                    padding: 12px 16px;
                    transition: all 0.3s ease;
                }
                
                .form-control:focus {
                    border-color: #2c5530;
                    box-shadow: 0 0 0 0.2rem rgba(44, 85, 48, 0.25);
                }
                
                .step-icon {
                    width: 28px;
                    height: 28px;
                    font-size: 0.75rem;
                }
                
                .info-steps {
                    margin-left: 10px;
                }
                
                .spinner-border-sm {
                    width: 1rem;
                    height: 1rem;
                }
            `}</style>
        </>
    );
}