//import React
import React, { useState } from "react";

//import usePage
import { usePage } from '@inertiajs/inertia-react';

export default function Slider() {
    //destruct props sliders
    const { sliders = [] } = usePage().props;
    const [brokenImages, setBrokenImages] = useState({});

    const validSliders = Array.isArray(sliders) ? sliders.filter((_, idx) => !brokenImages[idx]) : [];
    const hasValidSliders = validSliders.length > 0;

    return (
        <div className="slider-wrapper mb-4">
            {hasValidSliders ? (
                <div
                    id="carouselHomeSlider"
                    className="carousel slide shadow-md overflow-hidden"
                    data-bs-ride="carousel"
                    style={{
                        borderRadius: '20px',
                        boxShadow: '0 12px 30px -5px rgba(6, 78, 59, 0.25)',
                    }}
                >
                    <div className="carousel-indicators">
                        {validSliders.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselHomeSlider"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : "false"}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {validSliders.map((slider, index) => (
                            <div className={`${index === 0 ? "active carousel-item" : "carousel-item"}`} key={index}>
                                <img
                                    src={slider.image}
                                    className="d-block w-100 object-fit-cover"
                                    alt={slider.title || "IKATWI Banner"}
                                    style={{
                                        maxHeight: '220px',
                                        minHeight: '160px',
                                        objectFit: 'cover',
                                    }}
                                    onError={() => {
                                        setBrokenImages(prev => ({ ...prev, [index]: true }));
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    {validSliders.length > 1 && (
                        <>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon rounded-circle p-2.5" style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }} aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon rounded-circle p-2.5" style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }} aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </>
                    )}
                </div>
            ) : (
                /* 3D Modern Hero Banner */
                <div
                    className="hero-3d-banner p-4 p-sm-4 text-white position-relative overflow-hidden shadow-lg"
                    style={{
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #064e3b 0%, #047857 45%, #059669 100%)',
                        boxShadow: '0 16px 36px -8px rgba(6, 78, 59, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset',
                    }}
                >
                    <div
                        className="position-absolute end-0 bottom-0 opacity-10 pointer-events-none p-2"
                        style={{ transform: 'translate(10%, 15%)' }}
                    >
                        <img src="/assets/images/logo.png" alt="IKATWI Watermark" style={{ width: '180px', height: 'auto' }} />
                    </div>

                    <div className="position-relative z-1">
                        <div
                            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2.5"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                            }}
                        >
                            <i className="fas fa-award text-warning"></i>
                            <span className="fw-bold" style={{ fontSize: '0.72rem', letterSpacing: '0.02em' }}>
                                Organisasi Profesi Resmi Terapis Wicara
                            </span>
                        </div>
                        <h4 className="fw-bold mb-1.5 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.25)', letterSpacing: '-0.01em' }}>
                            Portal Digital IKATWI
                        </h4>
                        <p className="mb-0 text-white-50 small" style={{ maxWidth: '520px', lineHeight: 1.45, fontSize: '0.8rem' }}>
                            Mewujudkan pelayanan terapi wicara yang profesional, mandiri, bermartabat, dan terstandarisasi di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}