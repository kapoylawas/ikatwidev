//import react
import React, { useState, useEffect, useRef } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import Swal from "sweetalert2";

// Responsive Card Scaler Component (Auto-fits 100% mobile width without scrollbars)
function ResponsiveCardWrapper({ children }) {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.clientWidth;
            if (containerWidth > 0) {
                const targetScale = Math.min(1, containerWidth / 650);
                setScale(targetScale);
            }
        };

        updateScale();
        window.addEventListener("resize", updateScale);

        let observer = null;
        if (window.ResizeObserver && containerRef.current) {
            observer = new ResizeObserver(updateScale);
            observer.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener("resize", updateScale);
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="card-responsive-scaler"
            style={{
                width: "100%",
                maxWidth: "650px",
                height: `${Math.round(382 * scale)}px`,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                overflow: "hidden",
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                    width: "650px",
                    height: "382px",
                    flexShrink: 0,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default function EktaIndex() {
    const { biodata, transactions = [], statusAnggota } = usePage().props;

    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadTarget, setDownloadTarget] = useState("");

    const frontCardRef = useRef(null);
    const backCardRef = useRef(null);
    const bothCardsRef = useRef(null);

    const status = (transactions || []).map((ts) => ts.status);
    const memberStatus = statusAnggota?.status_anggota || biodata?.status_anggota || "Anggota Biasa";

    const isPaid =
        transactions.some((ts) => ts.status === "PAID" || ts.status === "SUCCESS") ||
        status.includes("PAID") ||
        memberStatus === "Anggota Kehormatan" ||
        biodata?.confirm === "true";

    const currentYear = new Date().getFullYear();

    // Download Card Handler (PNG or JPG)
    const handleDownload = async (format = "png", side = "front") => {
        try {
            setIsDownloading(true);
            setDownloadTarget(`${side}-${format}`);

            let imageURL = "";
            let fileName = "";
            const mimeType = format === "jpeg" ? "image/jpeg" : "image/png";
            const ext = format === "jpeg" ? "jpg" : "png";

            const canvasOptions = {
                scale: 3, // High-resolution export (3x)
                useCORS: true,
                allowTaint: true,
                backgroundColor: format === "jpeg" ? "#ffffff" : null,
                logging: false,
            };

            if (side === "front") {
                if (!frontCardRef.current) throw new Error("Elemen kartu depan tidak ditemukan");
                fileName = `E-KTA-Depan-${biodata?.no_anggota || biodata?.name || "IKATWI"}`;
                const canvas = await html2canvas(frontCardRef.current, canvasOptions);
                imageURL = canvas.toDataURL(mimeType, 1.0);
            } else if (side === "back") {
                if (!backCardRef.current) throw new Error("Elemen kartu belakang tidak ditemukan");
                fileName = `E-KTA-Belakang-${biodata?.no_anggota || biodata?.name || "IKATWI"}`;
                const canvas = await html2canvas(backCardRef.current, canvasOptions);
                imageURL = canvas.toDataURL(mimeType, 1.0);
            } else {
                // Both cards (Side by Side) without labels, buttons, or preview containers
                if (!frontCardRef.current || !backCardRef.current) {
                    throw new Error("Elemen kartu tidak ditemukan");
                }
                fileName = `E-KTA-Lengkap-${biodata?.no_anggota || biodata?.name || "IKATWI"}`;

                const [canvasFront, canvasBack] = await Promise.all([
                    html2canvas(frontCardRef.current, canvasOptions),
                    html2canvas(backCardRef.current, canvasOptions),
                ]);

                const gap = 30 * 3; // 30px scaled gap
                const mergedCanvas = document.createElement("canvas");
                mergedCanvas.width = canvasFront.width + canvasBack.width + gap;
                mergedCanvas.height = Math.max(canvasFront.height, canvasBack.height);

                const ctx = mergedCanvas.getContext("2d");
                if (format === "jpeg") {
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0, 0, mergedCanvas.width, mergedCanvas.height);
                }

                ctx.drawImage(canvasFront, 0, 0);
                ctx.drawImage(canvasBack, canvasFront.width + gap, 0);

                imageURL = mergedCanvas.toDataURL(mimeType, 1.0);
            }

            const downloadLink = document.createElement("a");
            downloadLink.download = `${fileName}.${ext}`;
            downloadLink.href = imageURL;
            downloadLink.click();

            Swal.fire({
                title: "Berhasil!",
                text: `Kartu E-KTA (${side === "both" ? "Lengkap" : side === "front" ? "Sisi Depan" : "Sisi Belakang"}) berhasil diunduh murni format ${ext.toUpperCase()}.`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
                toast: true,
                position: "top-end",
            });
        } catch (error) {
            console.error("Error generating E-KTA image:", error);
            Swal.fire({
                title: "Gagal Mengunduh",
                text: "Terjadi kesalahan saat memproses gambar E-KTA. Silakan coba kembali.",
                icon: "error",
            });
        } finally {
            setIsDownloading(false);
            setDownloadTarget("");
        }
    };

    // Print Handler
    const handlePrint = () => {
        window.print();
    };

    return (
        <LayoutAccount>
            <Head title="User E-KTA - IKATWI" />

            <div className="container-fluid py-4 ekta-page-container">
                {/* Header Banner */}
                <div className="header-banner-box p-4 rounded-4 mb-4 shadow-sm">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="d-flex align-items-center">
                            <div className="header-icon-wrap me-3 shadow">
                                <i className="fa fa-id-card fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <h4 className="mb-0 fw-bold header-main-title">
                                        Kartu Tanda Anggota Elektronik (E-KTA)
                                    </h4>
                                    <span className="badge-status-pill shadow-sm">
                                        <i className="fa fa-check-circle me-1 text-emerald-600"></i>
                                        {memberStatus}
                                    </span>
                                </div>
                                <p className="header-subtitle mb-0 mt-1">
                                    Kartu identitas resmi profesi Ikatan Terapis Wicara Indonesia (IKATWI) yang dapat diunduh (JPG/PNG) &amp; dicetak.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap flex-shrink-0">
                            {biodata?.no_anggota && (
                                <div className="badge-no-anggota-banner shadow-sm">
                                    <i className="fa fa-award text-emerald-600 me-2"></i>
                                    <span>No. Anggota:</span> <strong>{biodata.no_anggota}</strong>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {isPaid ? (
                    <>
                        {/* Download & Print Control Toolbar */}
                        <div className="card control-card rounded-4 shadow-sm mb-4">
                            <div className="card-body p-3 p-md-4">
                                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
                                    <div className="d-flex align-items-center gap-2.5">
                                        <span className="toolbar-icon-pill shadow-sm">
                                            <i className="fa fa-download text-primary"></i>
                                        </span>
                                        <div>
                                            <h6 className="fw-bold text-slate-900 mb-0">Opsi Unduh &amp; Cetak Kartu</h6>
                                            <small className="text-slate-600">Format gambar HD (PNG / JPG 300 DPI) kartu murni tanpa tombol</small>
                                        </div>
                                    </div>

                                    {/* Download Action Buttons */}
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        {/* Download Depan */}
                                        <div className="btn-group shadow-sm">
                                            <button
                                                type="button"
                                                onClick={() => handleDownload("png", "front")}
                                                disabled={isDownloading}
                                                className="btn btn-sm btn-primary-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2"
                                            >
                                                {isDownloading && downloadTarget === "front-png" ? (
                                                    <span className="spinner-border spinner-border-sm" role="status"></span>
                                                ) : (
                                                    <i className="fa fa-image"></i>
                                                )}
                                                <span>Unduh Depan (PNG)</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDownload("jpeg", "front")}
                                                disabled={isDownloading}
                                                className="btn btn-sm btn-outline-primary-custom px-2.5 py-2 fw-bold"
                                                title="Unduh format JPG"
                                            >
                                                JPG
                                            </button>
                                        </div>

                                        {/* Download Belakang */}
                                        <div className="btn-group shadow-sm">
                                            <button
                                                type="button"
                                                onClick={() => handleDownload("png", "back")}
                                                disabled={isDownloading}
                                                className="btn btn-sm btn-teal-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2"
                                            >
                                                {isDownloading && downloadTarget === "back-png" ? (
                                                    <span className="spinner-border spinner-border-sm" role="status"></span>
                                                ) : (
                                                    <i className="fa fa-qrcode"></i>
                                                )}
                                                <span>Unduh Belakang (PNG)</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDownload("jpeg", "back")}
                                                disabled={isDownloading}
                                                className="btn btn-sm btn-outline-teal-custom px-2.5 py-2 fw-bold"
                                                title="Unduh format JPG"
                                            >
                                                JPG
                                            </button>
                                        </div>

                                        {/* Download Lengkap (Gabungan) */}
                                        <div className="btn-group shadow-sm">
                                            <button
                                                type="button"
                                                onClick={() => handleDownload("png", "both")}
                                                disabled={isDownloading}
                                                className="btn btn-sm btn-emerald-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2"
                                            >
                                                {isDownloading && downloadTarget === "both-png" ? (
                                                    <span className="spinner-border spinner-border-sm" role="status"></span>
                                                ) : (
                                                    <i className="fa fa-layer-group"></i>
                                                )}
                                                <span>Unduh Lengkap (PNG)</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDownload("jpeg", "both")}
                                                disabled={isDownloading}
                                                className="btn btn-sm btn-outline-emerald-custom px-2.5 py-2 fw-bold"
                                                title="Unduh format JPG Lengkap"
                                            >
                                                JPG
                                            </button>
                                        </div>

                                        {/* Print Button */}
                                        <button
                                            type="button"
                                            onClick={handlePrint}
                                            className="btn btn-sm btn-print-custom fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2 shadow-sm"
                                        >
                                            <i className="fa fa-print"></i>
                                            <span>Cetak E-KTA</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Combined Cards Container for Rendering & Export */}
                        <div ref={bothCardsRef} className="printable-cards-wrapper">
                            <div className="row g-4 justify-content-center">
                                {/* Front Card Section */}
                                <div className="col-12 col-xl-6 d-flex justify-content-center">
                                    <div className="card-preview-box">
                                        <div className="preview-box-header d-flex align-items-center justify-content-between mb-3">
                                            <span className="badge-side-pill pill-front shadow-sm">
                                                <i className="fa fa-id-card me-1.5"></i> Sisi Depan (Front Side)
                                            </span>
                                            <div className="d-flex gap-1.5">
                                                <button
                                                    onClick={() => handleDownload("png", "front")}
                                                    className="btn btn-badge-action shadow-sm"
                                                    title="Unduh PNG Depan"
                                                >
                                                    <i className="fa fa-download text-primary"></i>
                                                    <span>PNG</span>
                                                </button>
                                                <button
                                                    onClick={() => handleDownload("jpeg", "front")}
                                                    className="btn btn-badge-action shadow-sm"
                                                    title="Unduh JPG Depan"
                                                >
                                                    <i className="fa fa-download text-secondary"></i>
                                                    <span>JPG</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card Showcase Stage Backdrop */}
                                        <div className="card-display-stage">
                                            <ResponsiveCardWrapper>
                                                <div ref={frontCardRef} className="ekta-card-front shadow">
                                                    {/* Left: Avatar Frame */}
                                                    <div className="card-avatar-container">
                                                        <div className="avatar-frame shadow-sm">
                                                            <img
                                                                src={biodata?.image || "/assets/images/user.png"}
                                                                alt={biodata?.name}
                                                                className="avatar-photo"
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "/assets/images/user.png";
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Left: Validity Box */}
                                                    <div className="card-validity-container text-center">
                                                        <span className="validity-label">Berlaku Sampai :</span>
                                                        <span className="validity-date">31 DESEMBER {currentYear}</span>
                                                    </div>

                                                    {/* Right: Member Details */}
                                                    <div className="card-info-container">
                                                        <div className="info-row">
                                                            <span className="info-label">Nama</span>
                                                            <span className="info-colon">:</span>
                                                            <span className="info-value text-uppercase fw-bold">{biodata?.name || "-"}</span>
                                                        </div>
                                                        <div className="info-row">
                                                            <span className="info-label">Alamat</span>
                                                            <span className="info-colon">:</span>
                                                            <span className="info-value address-value">{biodata?.alamat || "-"}</span>
                                                        </div>
                                                        <div className="info-row">
                                                            <span className="info-label">No</span>
                                                            <span className="info-colon">:</span>
                                                            <span className="info-value font-monospace fw-bold">{biodata?.no_anggota || "-"}</span>
                                                        </div>
                                                        <div className="info-row">
                                                            <span className="info-label">Status</span>
                                                            <span className="info-colon">:</span>
                                                            <span className="info-value">{memberStatus}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ResponsiveCardWrapper>
                                        </div>
                                    </div>
                                </div>

                                {/* Back Card Section */}
                                <div className="col-12 col-xl-6 d-flex justify-content-center">
                                    <div className="card-preview-box">
                                        <div className="preview-box-header d-flex align-items-center justify-content-between mb-3">
                                            <span className="badge-side-pill pill-back shadow-sm">
                                                <i className="fa fa-qrcode me-1.5"></i> Sisi Belakang (Back Side)
                                            </span>
                                            <div className="d-flex gap-1.5">
                                                <button
                                                    onClick={() => handleDownload("png", "back")}
                                                    className="btn btn-badge-action shadow-sm"
                                                    title="Unduh PNG Belakang"
                                                >
                                                    <i className="fa fa-download text-teal"></i>
                                                    <span>PNG</span>
                                                </button>
                                                <button
                                                    onClick={() => handleDownload("jpeg", "back")}
                                                    className="btn btn-badge-action shadow-sm"
                                                    title="Unduh JPG Belakang"
                                                >
                                                    <i className="fa fa-download text-secondary"></i>
                                                    <span>JPG</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card Showcase Stage Backdrop */}
                                        <div className="card-display-stage">
                                            <ResponsiveCardWrapper>
                                                <div ref={backCardRef} className="ekta-card-back shadow">
                                                    {/* Centered QR Code precisely inside the cyan square box */}
                                                    <div className="card-qr-container">
                                                        <div className="qr-wrapper">
                                                            <QRCodeSVG
                                                                value={biodata?.no_anggota ? `https://ikatwi.org/verify/${biodata.no_anggota}` : (biodata?.name || "IKATWI")}
                                                                size={120}
                                                                renderAs="canvas"
                                                                level="H"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </ResponsiveCardWrapper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info & Validation Notice Box */}
                        <div className="card notice-card rounded-4 shadow-sm mt-4">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-start gap-3">
                                    <div className="notice-icon-circle shadow-sm flex-shrink-0">
                                        <i className="fa fa-shield-alt text-emerald-600"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-slate-900 mb-1">Informasi Keabsahan Kartu E-KTA</h6>
                                        <p className="text-slate-600 small mb-0" style={{ lineHeight: 1.6 }}>
                                            E-KTA IKATWI ini adalah dokumen identitas keanggotaan profesi resmi terapis wicara Indonesia. QR Code pada bagian belakang kartu dapat dipindai langsung oleh instansi kesehatan atau masyarakat umum untuk memvalidasi keaslian status keanggotaan secara real-time di sistem pusat IKATWI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Unpaid / Pending Dues Notice */
                    <div className="card unpaid-card rounded-4 shadow-sm mt-4 p-5 text-center">
                        <div className="unpaid-icon-wrap mb-3 shadow">
                            <i className="fa fa-credit-card text-amber-600"></i>
                        </div>
                        <h4 className="fw-bold text-slate-900 mb-2">E-KTA Belum Dapat Diterbitkan</h4>
                        <p className="text-slate-600 mx-auto mb-4" style={{ maxWidth: '520px', fontSize: '0.92rem' }}>
                            Untuk mengaktifkan dan mengunduh Kartu Tanda Anggota Elektronik (E-KTA) periode {currentYear}, silakan selesaikan pembayaran tagihan iuran tahunan Anda melalui Portal Pembayaran IKATWI.
                        </p>
                        <div className="d-flex justify-content-center gap-2">
                            <Link
                                href="/account/tagihan"
                                className="btn btn-pay-now rounded-pill px-4 py-2.5 fw-bold shadow"
                            >
                                <i className="fa fa-receipt me-1.5"></i>
                                <span>Buka Pusat Tagihan &amp; Bayar Iuran</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .ekta-page-container {
                    color: #1e293b;
                }

                /* Header Banner */
                .header-banner-box {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 6px solid #059669 !important;
                    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
                }
                .header-icon-wrap {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                    flex-shrink: 0;
                }
                .header-main-title {
                    color: #0f172a;
                    font-size: 1.35rem;
                    letter-spacing: -0.02em;
                }
                .header-subtitle {
                    color: #475569;
                    font-size: 0.88rem;
                    font-weight: 500;
                }
                .badge-status-pill {
                    background-color: #ecfdf5;
                    color: #047857;
                    border: 1.5px solid #a7f3d0;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                }
                .badge-no-anggota-banner {
                    background-color: #f8fafc;
                    border: 1.5px solid #cbd5e1;
                    color: #0f172a;
                    padding: 8px 18px;
                    border-radius: 12px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                }

                /* Control Card */
                .control-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-top: 3.5px solid #2563eb !important;
                }
                .toolbar-icon-pill {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background-color: #eff6ff;
                    border: 1px solid #bfdbfe;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .btn-primary-custom {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: #ffffff;
                    border: 1px solid #1d4ed8;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-primary-custom:hover {
                    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
                    color: #ffffff;
                }
                .btn-outline-primary-custom {
                    background-color: #eff6ff;
                    border: 1px solid #93c5fd;
                    color: #1d4ed8;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-outline-primary-custom:hover {
                    background-color: #2563eb;
                    color: #ffffff;
                }
                .btn-teal-custom {
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #ffffff;
                    border: 1px solid #0e7490;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-teal-custom:hover {
                    background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
                    color: #ffffff;
                }
                .btn-outline-teal-custom {
                    background-color: #ecfeff;
                    border: 1px solid #a5f3fc;
                    color: #0e7490;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-outline-teal-custom:hover {
                    background-color: #0891b2;
                    color: #ffffff;
                }
                .btn-emerald-custom {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: 1px solid #047857;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-emerald-custom:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                }
                .btn-outline-emerald-custom {
                    background-color: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    color: #047857;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-outline-emerald-custom:hover {
                    background-color: #059669;
                    color: #ffffff;
                }
                .btn-print-custom {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1;
                    color: #1e293b;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }
                .btn-print-custom:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    transform: translateY(-1px);
                }

                /* Preview Box & Badges */
                .card-preview-box {
                    background-color: #ffffff;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 18px;
                    padding: 18px 18px 22px 18px;
                    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06);
                    max-width: 694px;
                    width: 100%;
                }
                .badge-side-pill {
                    font-size: 0.8rem;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                }
                .pill-front {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                    border: 1.5px solid #bfdbfe;
                }
                .pill-back {
                    background-color: #ecfeff;
                    color: #0e7490;
                    border: 1.5px solid #a5f3fc;
                }
                .btn-badge-action {
                    background-color: #ffffff;
                    border: 1px solid #cbd5e1;
                    color: #334155;
                    border-radius: 6px;
                    padding: 4px 10px;
                    font-size: 0.76rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    transition: all 0.2s ease;
                }
                .btn-badge-action:hover {
                    background-color: #f8fafc;
                    border-color: #94a3b8;
                    color: #0f172a;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
                }

                /* Card Showcase Stage Backdrop */
                .card-display-stage {
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 16px 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    width: 100%;
                    box-sizing: border-box;
                }

                /* Exact E-KTA Dimensions, Border & Backgrounds */
                .ekta-card-front {
                    width: 650px;
                    min-width: 650px;
                    height: 382px;
                    border-radius: 12px;
                    background-image: url('/assets/images/depan.jpeg');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    border: 1.5px solid #cbd5e1;
                    position: relative;
                    box-sizing: border-box;
                    box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.06);
                    overflow: hidden;
                }

                .ekta-card-back {
                    width: 650px;
                    min-width: 650px;
                    height: 382px;
                    border-radius: 12px;
                    background-image: url('/assets/images/belakang.jpeg');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    border: 1.5px solid #cbd5e1;
                    position: relative;
                    box-sizing: border-box;
                    box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.06);
                    overflow: hidden;
                }

                /* Front Card Positioned Elements */
                .card-avatar-container {
                    position: absolute;
                    top: 112px;
                    left: 36px;
                    width: 112px;
                    height: 136px;
                }
                .avatar-frame {
                    width: 112px;
                    height: 136px;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 2.5px solid #ffffff;
                    background-color: #ffffff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                }
                .avatar-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .card-validity-container {
                    position: absolute;
                    top: 258px;
                    left: 20px;
                    width: 144px;
                    text-align: center;
                }
                .validity-label {
                    display: block;
                    font-size: 0.68rem;
                    font-weight: 700;
                    color: #1e293b;
                    line-height: 1.1;
                }
                .validity-date {
                    display: block;
                    font-size: 0.74rem;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1.2;
                    margin-top: 1px;
                }

                /* Front Member Info */
                .card-info-container {
                    position: absolute;
                    top: 110px;
                    left: 172px;
                    width: 450px;
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }
                .info-row {
                    display: grid;
                    grid-template-columns: 56px 8px 1fr;
                    align-items: baseline;
                    font-size: 0.84rem;
                    color: #0f172a;
                    line-height: 1.3;
                }
                .info-label {
                    font-weight: 700;
                    color: #334155;
                    font-size: 0.82rem;
                }
                .info-colon {
                    font-weight: 700;
                    color: #334155;
                }
                .info-value {
                    font-weight: 600;
                    color: #0f172a;
                }
                .address-value {
                    max-width: 320px;
                    font-size: 0.76rem;
                    line-height: 1.25;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Back Card Positioned QR Code */
                .card-qr-container {
                    position: absolute;
                    top: 124px;
                    left: 464px;
                    width: 130px;
                    height: 130px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .qr-wrapper {
                    background-color: #ffffff;
                    padding: 2px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 0;
                }

                /* Notice Card */
                .notice-card {
                    background-color: #ffffff;
                    border: 1.5px solid #cbd5e1 !important;
                    border-left: 5px solid #059669 !important;
                }
                .notice-icon-circle {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background-color: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }

                /* Unpaid State */
                .unpaid-card {
                    background-color: #ffffff;
                    border: 1.5px solid #fde68a !important;
                    border-top: 5px solid #d97706 !important;
                }
                .unpaid-icon-wrap {
                    width: 76px;
                    height: 76px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                    border: 2px solid #fde68a;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 34px;
                }
                .btn-pay-now {
                    background: linear-gradient(135deg, #059669 0%, #047857 100%);
                    color: #ffffff;
                    border: none;
                    font-size: 0.92rem;
                    transition: all 0.2s ease;
                }
                .btn-pay-now:hover {
                    background: linear-gradient(135deg, #047857 0%, #065f46 100%);
                    color: #ffffff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
                /* Responsive Mobile Adjustments */
                @media (max-width: 768px) {
                    .card-preview-box {
                        padding: 14px 12px 18px 12px;
                        border-radius: 16px;
                    }
                    .card-display-stage {
                        padding: 12px 8px;
                        border-radius: 12px;
                    }
                }
                @media (max-width: 576px) {
                    .card-preview-box {
                        padding: 12px 8px 14px 8px;
                        border-radius: 14px;
                    }
                    .card-display-stage {
                        padding: 8px 4px;
                        border-radius: 10px;
                    }
                    .header-banner-box {
                        padding: 16px !important;
                    }
                }

                /* Print Media Styles */
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .printable-cards-wrapper, .printable-cards-wrapper * {
                        visibility: visible;
                    }
                    .printable-cards-wrapper {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    .preview-box-header, .header-banner-box, .control-card, .notice-card {
                        display: none !important;
                    }
                    .ekta-card-front, .ekta-card-back {
                        page-break-inside: avoid;
                        margin-bottom: 24px;
                        box-shadow: none !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style>
        </LayoutAccount>
    );
}
