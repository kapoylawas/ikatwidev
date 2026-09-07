//import React
import React from "react";

//import usePage
import { usePage } from '@inertiajs/inertia-react';

export default function Slider() {
    //destruct props sliders
    const { sliders = [] } = usePage().props;

    const hasSliders = Array.isArray(sliders) && sliders.length > 0;

    return (
        <div className="slider-wrapper mb-4">
            {hasSliders ? (
                <div
                    id="carouselHomeSlider"
                    className="carousel slide shadow-lg overflow-hidden"
                    data-bs-ride="carousel"
                    style={{
                        borderRadius: '20px',
                        boxShadow: '0 15px 35px -5px rgba(6, 78, 59, 0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                    }}
                >
                    <div className="carousel-indicators">
                        {sliders.map((_, index) => (
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
                        {sliders.map((slider, index) => (
                            <div className={`${index === 0 ? "active carousel-item" : "carousel-item"}`} key={index}>
                                <img
                                    src={slider.image}
                                    className="d-block w-100 object-fit-cover"
                                    alt={slider.title || "IKATWI Slider"}
                                    style={{
                                        maxHeight: '340px',
                                        minHeight: '180px',
                                        objectFit: 'cover',
                                    }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/assets/images/logo.png";
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon rounded-circle p-3" style={{ backgroundColor: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon rounded-circle p-3" style={{ backgroundColor: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }} aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            ) : (
                <div
                    className="hero-3d-banner p-4 p-md-5 text-white position-relative overflow-hidden shadow-lg"
                    style={{
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
                        boxShadow: '0 20px 40px -10px rgba(6, 78, 59, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    }}
                >
                    <div className="hero-pattern position-absolute top-0 start-0 w-100 h-100 opacity-20"></div>
                    <div className="position-relative z-1">
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                            <i className="fa fa-award text-warning"></i>
                            <span className="small fw-bold">Organisasi Profesi Resmi Terapis Wicara</span>
                        </div>
                        <h3 className="fw-extrabold mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                            Selamat Datang di Portal IKATWI
                        </h3>
                        <p className="mb-0 text-white-50 small" style={{ maxWidth: '540px', lineHeight: '1.5' }}>
                            Mewujudkan pelayanan terapi wicara yang profesional, mandiri, bermartabat, dan terpercaya di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}