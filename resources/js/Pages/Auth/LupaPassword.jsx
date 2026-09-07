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

    const [identifier, setIdentifier] = useState("");
    const [nik, setNik] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const resetHandler = async (e) => {
        e.preventDefault();
        
        if (!identifier.trim() || !nik.trim()) {
            Swal.fire({
                title: "Perhatian",
                text: "Harap isi Nomor Anggota / Email dan NIK Anda.",
                icon: "warning",
                confirmButtonColor: "#059669",
            });
            return;
        }

        setIsLoading(true);

        Inertia.post(
            "/resetPassword",
            {
                no_anggota: identifier.trim(),
                nik: nik.trim(),
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Reset Berhasil! 🎉",
                        html: `
                            <p class="mb-2">Password akun Anda telah berhasil direset menjadi <strong>16 Digit NIK</strong> Anda.</p>
                            <div class="p-3 bg-light rounded text-start small border mt-3">
                                <div><strong>Username:</strong> ${identifier.trim()}</div>
                                <div><strong>Password Baru:</strong> 16 Digit NIK Anda</div>
                            </div>
                        `,
                        icon: "success",
                        confirmButtonText: "Lanjut ke Halaman Login",
                        confirmButtonColor: "#059669",
                    }).then(() => {
                        Inertia.visit("/login");
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
                <title>Reset Password Anggota - IKATWI</title>
            </Head>
            
            <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 background-ikatwi">
                <div className="container" style={{ maxWidth: "560px" }}>
                    
                    {/* Brand Header */}
                    <div className="text-center mb-4">
                        <Link href="/" className="text-decoration-none d-inline-block">
                            <div className="logo-badge bg-white rounded-circle shadow-lg mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', border: '3px solid rgba(255,255,255,0.4)' }}>
                                <img 
                                    src="/assets/images/logo.png" 
                                    width="52" 
                                    alt="IKATWI Logo"
                                    className="img-fluid"
                                />
                            </div>
                            <h3 className="text-white fw-bold mb-0" style={{ letterSpacing: '0.04em' }}>IKATWI</h3>
                        </Link>
                        <p className="text-white-50 small mb-0 mt-1">Ikatan Terapis Wicara Indonesia</p>
                    </div>

                    {/* Main Card */}
                    <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '24px', backgroundColor: '#ffffff' }}>
                        
                        {/* Header Title */}
                        <div className="p-4 text-center text-white" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)' }}>
                            <div 
                                className="d-inline-flex align-items-center justify-content-center px-3.5 py-1.5 rounded-pill mb-2 fw-bold text-uppercase shadow-sm" 
                                style={{ 
                                    backgroundColor: '#ffffff', 
                                    color: '#064e3b', 
                                    fontSize: '0.76rem', 
                                    letterSpacing: '0.06em' 
                                }}
                            >
                                <i className="fas fa-shield-alt text-warning me-2" style={{ fontSize: '0.85rem' }}></i>
                                <span>Pemulihan Akun Resmi</span>
                            </div>
                            <h4 className="fw-bold mb-1 text-white">Reset Password Anggota</h4>
                            <p className="text-white small mb-0" style={{ fontSize: '0.86rem', opacity: 0.92 }}>
                                Pulihkan akses ke akun IKATWI Anda dengan verifikasi data NIK
                            </p>
                        </div>

                        <div className="p-4 p-sm-4.5">

                            {/* Informational Guidance Box */}
                            <div className="p-3.5 rounded-3 mb-4" style={{ backgroundColor: '#f0fdf4', border: '1.5px solid #bbf7d0', padding: '16px' }}>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <i className="fas fa-info-circle text-success" style={{ fontSize: '1.15rem' }}></i>
                                    <span className="fw-bold" style={{ fontSize: '0.9rem', color: '#064e3b' }}>Panduan Reset Password:</span>
                                </div>
                                <div className="d-flex flex-column gap-2.5" style={{ fontSize: '0.84rem', lineHeight: '1.45', color: '#334155' }}>
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="badge rounded-circle bg-success text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '22px', height: '22px', fontSize: '0.72rem', backgroundColor: '#059669' }}>1</span>
                                        <span>Masukkan <strong>Nomor Anggota (No. KTA)</strong> atau <strong>Email Terdaftar</strong>.</span>
                                    </div>
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="badge rounded-circle bg-success text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '22px', height: '22px', fontSize: '0.72rem', backgroundColor: '#059669' }}>2</span>
                                        <span>Masukkan <strong>16 Digit NIK</strong> sesuai dengan KTP / database anggota Anda.</span>
                                    </div>
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="badge rounded-circle bg-success text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '22px', height: '22px', fontSize: '0.72rem', backgroundColor: '#059669' }}>3</span>
                                        <span>Setelah klik tombol reset, password akun Anda otomatis menjadi <strong>16 Digit NIK Anda</strong>.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Error Alert */}
                            {errors.meta && (
                                <div className="alert alert-danger border-0 shadow-sm mb-4 d-flex align-items-center gap-2.5 rounded-3" style={{ fontSize: '0.84rem' }}>
                                    <i className="fas fa-exclamation-circle text-danger fs-5 flex-shrink-0"></i>
                                    <div>{errors.meta}</div>
                                </div>
                            )}

                            {/* Reset Form */}
                            <form onSubmit={resetHandler}>
                                
                                {/* Identifier Input */}
                                <div className="mb-3.5">
                                    <label className="form-label fw-bold text-dark mb-1" style={{ fontSize: '0.85rem' }}>
                                        <i className="fas fa-id-badge text-success me-1.5"></i>
                                        Nomor Anggota (No. KTA) / Email Terdaftar
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-end-0 text-muted" style={{ borderColor: '#cbd5e1' }}>
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className={`form-control border-start-0 ps-1 ${errors.no_anggota ? 'is-invalid' : ''}`}
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            placeholder="Contoh: 101007 atau email@domain.com"
                                            style={{ borderColor: '#cbd5e1', fontSize: '0.9rem', height: '46px' }}
                                        />
                                    </div>
                                    {errors.no_anggota && (
                                        <div className="text-danger small mt-1" style={{ fontSize: '0.78rem' }}>
                                            {errors.no_anggota}
                                        </div>
                                    )}
                                </div>

                                {/* NIK Input */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold text-dark mb-1" style={{ fontSize: '0.85rem' }}>
                                        <i className="fas fa-id-card text-success me-1.5"></i>
                                        NIK (16 Digit Nomor Induk Kependudukan)
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-end-0 text-muted" style={{ borderColor: '#cbd5e1' }}>
                                            <i className="fas fa-key"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className={`form-control border-start-0 ps-1 ${errors.nik ? 'is-invalid' : ''}`}
                                            value={nik}
                                            onChange={(e) => setNik(e.target.value)}
                                            placeholder="Masukkan 16 digit NIK Anda"
                                            maxLength={16}
                                            style={{ borderColor: '#cbd5e1', fontSize: '0.9rem', height: '46px' }}
                                        />
                                    </div>
                                    {errors.nik && (
                                        <div className="text-danger small mt-1" style={{ fontSize: '0.78rem' }}>
                                            {errors.nik}
                                        </div>
                                    )}
                                    <div className="form-text text-muted mt-1" style={{ fontSize: '0.75rem' }}>
                                        <i className="fas fa-shield-alt text-success me-1"></i>
                                        NIK digunakan sebagai verifikasi keamanan identitas resmi anggota.
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    className="btn btn-emerald-submit w-100 fw-bold py-2.5 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                                    type="submit"
                                    disabled={isLoading}
                                    style={{
                                        background: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
                                        color: '#ffffff',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        height: '48px',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="spinner-border spinner-border-sm text-light" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            <span>Memproses Reset...</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-redo-alt"></i>
                                            <span>Reset Password Sekarang</span>
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Back to Login Link */}
                            <div className="text-center mt-4 pt-3 border-top">
                                <p className="text-muted small mb-0">
                                    Sudah ingat password Anda?{" "}
                                    <Link href="/login" className="text-success fw-bold text-decoration-none hover-underline">
                                        Masuk di Sini →
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Support Info */}
                    <div className="text-center mt-3 text-white-50 small" style={{ fontSize: '0.78rem' }}>
                        Butuh bantuan teknis? Hubungi Admin Pengurus Wilayah (DPW) atau DPC Anda.
                    </div>

                </div>
            </div>

            <style jsx>{`
                .background-ikatwi {
                    background: linear-gradient(135deg, #042f2e 0%, #064e3b 50%, #065f46 100%);
                    min-height: 100vh;
                }
                
                .btn-emerald-submit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px -2px rgba(5, 150, 105, 0.4) !important;
                    filter: brightness(1.08);
                }

                .btn-emerald-submit:active {
                    transform: scale(0.98);
                }

                .hover-underline:hover {
                    text-decoration: underline !important;
                }
            `}</style>
        </>
    );
}