//import hook react
import React, { useState, useEffect } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Login() {
    const { errors } = usePage().props;

    const [noanggota, setNoanggota] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    // Gunakan langsung errors dari props tanpa state tambahan
    const formErrors = errors || {};

    //function "loginHandler" yang diperbaiki
    const loginHandler = async (e) => {
        e.preventDefault();
        
        setIsLoading(true);

        // Validasi client-side sederhana
        if (!noanggota.trim() || !password.trim()) {
            setIsLoading(false);
            return;
        }

        // Kirim request login
        Inertia.post("/loginAnggotaLama", {
            no_anggota: noanggota,
            password: password,
        });
    };

    // Reset loading state ketika navigation selesai
    useEffect(() => {
        const unsubscribe = Inertia.on('finish', (event) => {
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Reset errors ketika user mulai mengetik di field
    useEffect(() => {
        if (noanggota.trim() && formErrors.no_anggota) {
            // Errors akan di-reset otomatis oleh Inertia ketika form di-submit kembali
        }
    }, [noanggota, formErrors.no_anggota]);

    useEffect(() => {
        if (password.trim() && formErrors.password) {
            // Errors akan di-reset otomatis oleh Inertia ketika form di-submit kembali
        }
    }, [password, formErrors.password]);

    return (
        <>
            <Head>
                <title>Login Account - IKATWI</title>
            </Head>
            
            {/* Background dengan gradient sesuai IKATWI */}
            <div className="login-container">
                <div className="background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center min-vh-100">
                        <div className="col-11 col-sm-8 col-md-6 col-lg-4 col-xl-3">
                            {/* Card Login */}
                            <div className="login-card">
                                {/* Header Card */}
                                <div className="card-header-custom">
                                    <div className="logo-container">
                                        <Link href="/" className="logo-link">
                                            <img
                                                src="/assets/images/logo.png"
                                                width="70"
                                                className="logo-img"
                                                alt="IKATWI Logo"
                                                onError={(e) => {
                                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMyOGE3NDUiLz4KPHRleHQgeD0iMzUiIHk9IjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5JS0FUV0k8L3RleHQ+Cjwvc3ZnPgo=';
                                                }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="brand-text">
                                        <h4 className="brand-title">IKATWI</h4>
                                        <p className="brand-subtitle">Ikatan Terapis Wicara Indonesia</p>
                                    </div>
                                </div>
                                
                                {/* Body Card */}
                                <div className="card-body-custom">
                                    {/* Error Message Global */}
                                    {(formErrors.no_anggota || formErrors.password) && (
                                        <div className="global-error-message">
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Terdapat kesalahan dalam input data. Silakan periksa kembali.
                                        </div>
                                    )}

                                    <div className="welcome-section">
                                        <h5 className="welcome-title">Selamat Datang</h5>
                                        <p className="welcome-subtitle">Masuk ke akun anggota Anda</p>
                                    </div>

                                    <form onSubmit={loginHandler} className="login-form">
                                        {/* No Anggota Field */}
                                        <div className={`form-group ${focusedField === 'noanggota' ? 'focused' : ''}`}>
                                            <label className="form-label">
                                                <i className="fas fa-id-card"></i>
                                                No Anggota
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-input ${formErrors.no_anggota ? 'error' : ''}`}
                                                value={noanggota}
                                                onChange={(e) => setNoanggota(e.target.value)}
                                                onFocus={() => setFocusedField('noanggota')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Masukkan nomor anggota"
                                                disabled={isLoading}
                                            />
                                            {formErrors.no_anggota && (
                                                <div className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {formErrors.no_anggota}
                                                </div>
                                            )}
                                        </div>

                                        {/* Password Field */}
                                        <div className={`form-group ${focusedField === 'password' ? 'focused' : ''}`}>
                                            <div className="password-header">
                                                <label className="form-label">
                                                    <i className="fas fa-lock"></i>
                                                    Password
                                                </label>
                                                <Link 
                                                    href="/reset-password" 
                                                    className="forgot-password"
                                                >
                                                    Lupa Password?
                                                </Link>
                                            </div>
                                            <input
                                                type="password"
                                                className={`form-input ${formErrors.password ? 'error' : ''}`}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setFocusedField('password')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Masukkan password"
                                                disabled={isLoading}
                                            />
                                            {formErrors.password && (
                                                <div className="error-message">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    {formErrors.password}
                                                </div>
                                            )}
                                        </div>

                                        {/* Login Button */}
                                        <button
                                            className={`login-button ${isLoading ? 'loading' : ''}`}
                                            type="submit"
                                            disabled={isLoading || !noanggota.trim() || !password.trim()}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="button-spinner"></div>
                                                    Memproses...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-sign-in-alt"></i>
                                                    Masuk ke Akun
                                                </>
                                            )}
                                        </button>

                                        {/* Home Button */}
                                        <Link href="/" className="home-link">
                                            <button
                                                className="home-button"
                                                type="button"
                                                disabled={isLoading}
                                            >
                                                <i className="fas fa-arrow-left"></i>
                                                Kembali ke Beranda
                                            </button>
                                        </Link>
                                    </form>

                                    {/* Register Section */}
                                    <div className="register-section">
                                        <p className="register-text">
                                            Belum menjadi anggota?{" "}
                                            <Link href="/info" className="register-link">
                                                Daftar sekarang
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="login-footer">
                                <p className="footer-text">
                                    &copy; {new Date().getFullYear()} IKATWI. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .login-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #1a5f23 0%, #2e7d32 25%, #4caf50 50%, #66bb6a 75%, #81c784 100%);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .background-shapes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 1;
                }

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    animation: float 6s ease-in-out infinite;
                }

                .shape-1 {
                    width: 200px;
                    height: 200px;
                    top: -50px;
                    left: -50px;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 150px;
                    height: 150px;
                    top: 20%;
                    right: 10%;
                    animation-delay: 2s;
                }

                .shape-3 {
                    width: 100px;
                    height: 100px;
                    bottom: 10%;
                    left: 10%;
                    animation-delay: 4s;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }

                .login-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    overflow: hidden;
                    position: relative;
                    z-index: 2;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .login-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .card-header-custom {
                    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
                    padding: 2.5rem 2rem 2rem;
                    text-align: center;
                    position: relative;
                }

                .logo-container {
                    margin-bottom: 1rem;
                }

                .logo-link {
                    display: inline-block;
                    transition: transform 0.3s ease;
                }

                .logo-link:hover {
                    transform: scale(1.05);
                }

                .logo-img {
                    border-radius: 50%;
                    background: white;
                    padding: 8px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .brand-text {
                    color: white;
                }

                .brand-title {
                    font-weight: 700;
                    font-size: 1.75rem;
                    margin-bottom: 0.25rem;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }

                .brand-subtitle {
                    font-size: 0.9rem;
                    opacity: 0.9;
                    margin: 0;
                    font-weight: 500;
                }

                .card-body-custom {
                    padding: 2.5rem 2rem;
                }

                .global-error-message {
                    background: rgba(211, 47, 47, 0.1);
                    border: 1px solid rgba(211, 47, 47, 0.2);
                    border-left: 4px solid #d32f2f;
                    color: #d32f2f;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 500;
                }

                .welcome-section {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .welcome-title {
                    font-weight: 600;
                    color: #1b5e20;
                    margin-bottom: 0.5rem;
                    font-size: 1.25rem;
                }

                .welcome-subtitle {
                    color: #666;
                    margin: 0;
                    font-size: 0.9rem;
                }

                .login-form {
                    space-y: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                    transition: all 0.3s ease;
                }

                .form-group.focused {
                    transform: translateX(5px);
                }

                .form-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 600;
                    color: #1b5e20;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                }

                .form-label i {
                    width: 16px;
                    text-align: center;
                }

                .form-input {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    border: 2px solid #e0e0e0;
                    border-radius: 12px;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    background: #fafafa;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #2e7d32;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
                    transform: translateY(-2px);
                }

                .form-input.error {
                    border-color: #d32f2f;
                    background: rgba(211, 47, 47, 0.02);
                }

                .form-input.error:focus {
                    border-color: #d32f2f;
                    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
                }

                .form-input:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .password-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .forgot-password {
                    color: #2e7d32;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }

                .forgot-password:hover {
                    color: #1b5e20;
                    text-decoration: underline;
                }

                .error-message {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d32f2f;
                    font-size: 0.85rem;
                    margin-top: 0.5rem;
                    padding: 0.5rem;
                    background: rgba(211, 47, 47, 0.05);
                    border-radius: 8px;
                    border-left: 3px solid #d32f2f;
                }

                .login-button {
                    width: 100%;
                    padding: 1rem;
                    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .login-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(27, 94, 32, 0.3);
                }

                .login-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                    background: #cccccc;
                }

                .login-button.loading {
                    background: linear-gradient(135deg, #388e3c 0%, #4caf50 100%);
                }

                .button-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .home-link {
                    text-decoration: none;
                    display: block;
                }

                .home-button {
                    width: 100%;
                    padding: 0.875rem;
                    background: transparent;
                    color: #2e7d32;
                    border: 2px solid #2e7d32;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .home-button:hover:not(:disabled) {
                    background: #2e7d32;
                    color: white;
                    transform: translateY(-2px);
                }

                .home-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .register-section {
                    text-align: center;
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #e0e0e0;
                }

                .register-text {
                    color: #666;
                    margin: 0;
                    font-size: 0.9rem;
                }

                .register-link {
                    color: #2e7d32;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                .register-link:hover {
                    color: #1b5e20;
                    text-decoration: underline;
                }

                .login-footer {
                    text-align: center;
                    margin-top: 2rem;
                    position: relative;
                    z-index: 2;
                }

                .footer-text {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.85rem;
                    margin: 0;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .login-container {
                        padding: 15px;
                    }

                    .card-body-custom {
                        padding: 2rem 1.5rem;
                    }

                    .card-header-custom {
                        padding: 2rem 1.5rem 1.5rem;
                    }

                    .brand-title {
                        font-size: 1.5rem;
                    }

                    .welcome-title {
                        font-size: 1.1rem;
                    }

                    .form-input {
                        padding: 0.75rem 0.875rem;
                    }

                    .login-button, .home-button {
                        padding: 0.875rem;
                    }
                }

                @media (max-width: 480px) {
                    .card-body-custom {
                        padding: 1.5rem 1rem;
                    }

                    .card-header-custom {
                        padding: 1.5rem 1rem 1rem;
                    }

                    .shape {
                        display: none;
                    }

                    .password-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }

                    .forgot-password {
                        align-self: flex-end;
                    }
                }
            `}</style>
        </>
    );
}