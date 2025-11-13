import React from "react";

export default function Footer() {
    let styles = {
        marginRight: "15px",
    };

    return (
        <>
            <div className="fade-in" style={{ marginBottom: "100px" }}>
                <div className="card bg-footer border-0 rounded-4 shadow-lg">
                    <div className="card-body p-0">
                        {/* Main Content */}
                        <div className="text-center py-5 px-4">
                            <h5 className="text-white mt-2">
                                Dewan Pengurus Pusat
                            </h5>
                            <h3 className="text-white fw-bold mt-2">
                                Ikatan Terapis Wicara Indonesia
                            </h3>
                            
                            {/* Social Media Icons */}
                            <div className="mt-4 d-flex justify-content-center flex-wrap">
                                {[
                                    { 
                                        href: "https://www.instagram.com/ikatwipusat/", 
                                        title: "Instagram", 
                                        icon: (
                                            <svg
                                                style={{ color: "white" }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-brand-instagram"
                                                width={32}
                                                height={32}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
                                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                                                <path d="M16.5 7.5l0 0"/>
                                            </svg>
                                        )
                                    },
                                    { 
                                        href: "https://api.whatsapp.com/send/?phone=6285867544115&text&type=phone_number&app_absent=0", 
                                        title: "Whatsapp", 
                                        icon: (
                                            <svg
                                                style={{ color: "white" }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-brand-whatsapp"
                                                width={32}
                                                height={32}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/>
                                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/>
                                            </svg>
                                        )
                                    },
                                    { 
                                        href: "https://www.youtube.com/@ikatwipusat", 
                                        title: "YouTube", 
                                        icon: (
                                            <svg
                                                style={{ color: "white" }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-brand-youtube"
                                                width={34}
                                                height={34}
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"/>
                                                <path d="M10 9l5 3l-5 3z"/>
                                            </svg>
                                        )
                                    },
                                    { 
                                        href: "https://twitter.com/ikatwipusat?t=vc7fkhNEu_h-Xvb04UeffQ&s=08", 
                                        title: "Twitter", 
                                        icon: (
                                            <svg
                                                style={{ color: "white" }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="bi bi-twitter"
                                                width={32}
                                                height={32}
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                            </svg>
                                        )
                                    },
                                    { 
                                        href: "https://www.facebook.com/ikatwi.pusat", 
                                        title: "Facebook", 
                                        icon: (
                                            <svg
                                                style={{ color: "white" }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={32}
                                                height={32}
                                                fill="currentColor"
                                                className="bi bi-facebook"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                            </svg>
                                        )
                                    }
                                ].map((social, index) => (
                                    <span key={index} className="mx-2 mb-2">
                                        <a
                                            href={social.href}
                                            title={social.title}
                                            className="text-decoration-none social-icon"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {social.icon}
                                        </a>
                                    </span>
                                ))}
                            </div>

                            {/* Contact Information */}
                            <div className="text-white mt-4">
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    <i className="fa fa-phone me-2"></i>
                                    <span>Kontak Support (085867544155)</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fa fa-envelope me-2"></i>
                                    <span>Email (ikatwipusat@gmail.com)</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Copyright Section */}
                        <div className="bg-footer-copyright text-center py-3 rounded-bottom-4">
                            <p className="text-white mb-0 small">
                                ©{new Date().getFullYear()} DPP Ikatan Terapis Wicara Indonesia
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-footer {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    /* Hijau Emerald yang elegan */
                }
                .bg-footer-copyright {
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(10px);
                }
                .social-icon {
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .social-icon:hover {
                    transform: translateY(-3px) scale(1.1);
                }
                .card {
                    margin-bottom: 0;
                }
                .rounded-bottom-4 {
                    border-bottom-left-radius: 1rem !important;
                    border-bottom-right-radius: 1rem !important;
                }
            `}</style>
        </>
    );
}