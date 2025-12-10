//import react
import React, { useState, useEffect, useRef } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import html2canvas from "html2canvas";
import { QRCodeSVG } from "qrcode.react";

// Import SweetAlert2
import Swal from "sweetalert2";

export default function SigIndex() {
    const { sig, errors, user, allSigs, transactions } = usePage().props;
    const { flash } = usePage().props;

    console.log(user);

    const [tahun, setTahun] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatingCard, setGeneratingCard] = useState(false);
    const [currentYear] = useState(new Date().getFullYear());
    const [nextYear] = useState(new Date().getFullYear() + 1);

    // Ref untuk kartu yang akan di-generate
    const cardRef = useRef(null);

    // Cek status transaksi pembayaran
    const isPaid = transactions.some(
        (transaction) =>
            transaction.status === "PAID" || transaction.status === "paid"
    );

    // Cek apakah user adalah Anggota Kehormatan
    const isAnggotaKehormatan = user?.name === "Anggota Kehormatan";

    // Cek apakah user berhak mendaftar SIG
    const canRegisterForSIG = isPaid || isAnggotaKehormatan;

    // Set tahun default ke tahun berjalan
    useEffect(() => {
        setTahun(currentYear);
    }, [currentYear]);

    // Gunakan sig untuk tahun ini, jika tidak ada cari dari allSigs
    const findSigForCurrentYear = () => {
        if (sig && parseInt(sig.tahun) === currentYear) {
            return sig;
        }
        return allSigs?.find((s) => parseInt(s.tahun) === currentYear);
    };

    const currentSig = findSigForCurrentYear();

    // FIXED: Gunakan parseInt untuk membandingkan tahun
    const hasRegisteredForCurrentYear =
        currentSig && parseInt(currentSig.tahun) === currentYear;

    // Cek apakah status approved
    const isStatusApproved = currentSig && currentSig.status === "approved";

    // Cek apakah harus menampilkan kartu (approved DAN tahun ini)
    const shouldShowCard = hasRegisteredForCurrentYear && isStatusApproved;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi apakah user berhak mendaftar
        if (!canRegisterForSIG) {
            Swal.fire({
                title: "Akses Ditolak!",
                text: "Anda tidak dapat mendaftar SIG. Harap menyelesaikan pembayaran iuran terlebih dahulu.",
                icon: "error",
                confirmButtonText: "Mengerti",
            });
            return;
        }

        setLoading(true);

        const formData = {
            tahun: tahun,
        };

        Inertia.post("/account/sig", formData, {
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Pendaftaran SIG berhasil disimpan!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2500,
                    toast: true,
                    position: "top-end",
                    timerProgressBar: true,
                });
            },
            onError: (errors) => {
                if (errors.tahun) {
                    Swal.fire({
                        title: "Kesalahan!",
                        text: errors.tahun,
                        icon: "error",
                        confirmButtonText: "Mengerti",
                    });
                } else {
                    Swal.fire({
                        title: "Kesalahan!",
                        text: "Terjadi kesalahan saat mendaftar SIG",
                        icon: "error",
                        confirmButtonText: "Mengerti",
                    });
                }
            },
            onFinish: () => {
                setLoading(false);
            },
        });
    };

    // Fungsi untuk generate kartu sebagai gambar
    const generateCardImage = () => {
        if (!cardRef.current) return;

        setGeneratingCard(true);

        html2canvas(cardRef.current, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            logging: false,
        })
            .then((canvas) => {
                const image = canvas.toDataURL("image/jpeg", 1.0);

                const link = document.createElement("a");
                link.download = `Kartu-SIG-${
                    user?.name || "anggota"
                }-${currentYear}.jpg`;
                link.href = image;
                link.click();

                setGeneratingCard(false);

                Swal.fire({
                    title: "Berhasil!",
                    text: "Kartu SIG berhasil diunduh sebagai gambar",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    position: "top-end",
                });
            })
            .catch((error) => {
                console.error("Error generating card:", error);
                setGeneratingCard(false);

                Swal.fire({
                    title: "Kesalahan!",
                    text: "Gagal mengenerate kartu",
                    icon: "error",
                    confirmButtonText: "Mengerti",
                });
            });
    };

    // Status color mapping
    const getStatusClass = (status) => {
        switch (status) {
            case "pending":
                return {
                    bg: "bg-yellow-50",
                    text: "text-yellow-800",
                    border: "border-yellow-300",
                    badge: "bg-yellow-500 text-white",
                    icon: "bi-clock-history",
                };
            case "approved":
                return {
                    bg: "bg-green-50",
                    text: "text-green-800",
                    border: "border-green-300",
                    badge: "bg-success text-white",
                    icon: "bi-check-circle",
                };
            case "rejected":
                return {
                    bg: "bg-red-50",
                    text: "text-red-800",
                    border: "border-red-300",
                    badge: "bg-danger text-white",
                    icon: "bi-x-circle",
                };
            default:
                return {
                    bg: "bg-gray-100",
                    text: "text-gray-800",
                    border: "border-gray-300",
                    badge: "bg-secondary text-white",
                    icon: "bi-question-circle",
                };
        }
    };

    // Status label mapping
    const getStatusLabel = (status) => {
        switch (status) {
            case "pending":
                return "Menunggu Verifikasi";
            case "approved":
                return "Disetujui";
            case "rejected":
                return "Ditolak";
            default:
                return "Tidak Diketahui";
        }
    };

    // Format tanggal untuk kartu
    const formatDateForCard = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <>
            <Head>
                <title>SIG - IKATWI</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                />
            </Head>
            <LayoutAccount>
                <div
                    className="container-fluid py-4"
                    style={{ backgroundColor: "#f8f9fa" }}
                >
                    {/* Header */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h1
                                        className="h3 mb-2 fw-bold"
                                        style={{ color: "#2c3e50" }}
                                    >
                                        <i
                                            className="bi bi-people me-2"
                                            style={{ color: "#3498db" }}
                                        ></i>
                                        Sistem Informasi Generasi (SIG)
                                    </h1>
                                    <p
                                        className="mb-0"
                                        style={{ color: "#7f8c8d" }}
                                    >
                                        <i className="bi bi-calendar3 me-1"></i>
                                        Program Tahunan - {currentYear}
                                    </p>
                                </div>
                                {hasRegisteredForCurrentYear && currentSig && (
                                    <div
                                        className={`badge ${
                                            getStatusClass(currentSig.status)
                                                .badge
                                        } fs-6 px-3 py-2 shadow-sm`}
                                    >
                                        <i
                                            className={`bi ${
                                                getStatusClass(
                                                    currentSig.status
                                                ).icon
                                            } me-1`}
                                        ></i>
                                        {getStatusLabel(currentSig.status)} -{" "}
                                        {currentYear}
                                    </div>
                                )}
                            </div>

                            {/* Informasi tahun berjalan */}
                            <div
                                className="alert alert-info border-0 shadow-sm mb-3"
                                style={{
                                    backgroundColor: "#e3f2fd",
                                    borderLeft: "4px solid #2196F3",
                                }}
                            >
                                <div className="d-flex align-items-center">
                                    <i
                                        className="bi bi-info-circle-fill fs-4 me-3"
                                        style={{ color: "#2196F3" }}
                                    ></i>
                                    <div>
                                        <h6
                                            className="alert-heading mb-1 fw-bold"
                                            style={{ color: "#0d47a1" }}
                                        >
                                            Program Tahunan
                                        </h6>
                                        <p
                                            className="mb-0"
                                            style={{ color: "#1565c0" }}
                                        >
                                            {hasRegisteredForCurrentYear
                                                ? `✅ Anda sudah terdaftar untuk SIG ${currentYear}.`
                                                : `📝 Silakan daftar untuk mengikuti SIG ${currentYear}.`}{" "}
                                            Pendaftaran berlaku per tahun dan
                                            akan direset setiap tahun baru.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flash Messages */}
                    <div className="row mb-4">
                        <div className="col-12">
                            {flash?.success && (
                                <div
                                    className="alert alert-success alert-dismissible fade show shadow-sm border-0"
                                    role="alert"
                                    style={{
                                        backgroundColor: "#d4edda",
                                        borderLeft: "4px solid #28a745",
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <i
                                            className="bi bi-check-circle-fill fs-4 me-3"
                                            style={{ color: "#28a745" }}
                                        ></i>
                                        <div className="flex-grow-1">
                                            <h6
                                                className="alert-heading mb-1 fw-bold"
                                                style={{ color: "#155724" }}
                                            >
                                                Berhasil!
                                            </h6>
                                            <p
                                                className="mb-0"
                                                style={{ color: "#155724" }}
                                            >
                                                {flash.success}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                </div>
                            )}

                            {flash?.error && (
                                <div
                                    className="alert alert-danger alert-dismissible fade show shadow-sm border-0"
                                    role="alert"
                                    style={{
                                        backgroundColor: "#f8d7da",
                                        borderLeft: "4px solid #dc3545",
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <i
                                            className="bi bi-exclamation-triangle-fill fs-4 me-3"
                                            style={{ color: "#dc3545" }}
                                        ></i>
                                        <div className="flex-grow-1">
                                            <h6
                                                className="alert-heading mb-1 fw-bold"
                                                style={{ color: "#721c24" }}
                                            >
                                                Perhatian!
                                            </h6>
                                            <p
                                                className="mb-0"
                                                style={{ color: "#721c24" }}
                                            >
                                                {flash.error}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                </div>
                            )}

                            {errors && Object.keys(errors).length > 0 && (
                                <div
                                    className="alert alert-danger alert-dismissible fade show shadow-sm border-0"
                                    role="alert"
                                    style={{
                                        backgroundColor: "#f8d7da",
                                        borderLeft: "4px solid #dc3545",
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <i
                                            className="bi bi-exclamation-octagon-fill fs-4 me-3"
                                            style={{ color: "#dc3545" }}
                                        ></i>
                                        <div className="flex-grow-1">
                                            <h6
                                                className="alert-heading mb-1 fw-bold"
                                                style={{ color: "#721c24" }}
                                            >
                                                Terdapat{" "}
                                                {Object.keys(errors).length}{" "}
                                                kesalahan yang perlu diperbaiki
                                            </h6>
                                            <ul className="mb-0 mt-2 ps-3">
                                                {Object.keys(errors).map(
                                                    (key) => (
                                                        <li
                                                            key={key}
                                                            style={{
                                                                color: "#721c24",
                                                            }}
                                                        >
                                                            {errors[key]}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        {/* Kolom Kiri - Form/Kartu */}
                        <div className="col-lg-8 mb-4">
                            {/* KARTU ANGGOTA JIKA STATUS APPROVED DAN TAHUN INI */}
                            {shouldShowCard ? (
                                <div
                                    className="card border-0 shadow-lg mb-4"
                                    style={{ borderRadius: "10px" }}
                                >
                                    <div
                                        className="card-header py-3"
                                        style={{
                                            backgroundColor: "#2c3e50",
                                            color: "white",
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                        }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="bg-white rounded-circle p-2 me-3"
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                    }}
                                                >
                                                    <i
                                                        className="bi bi-card-text fs-5"
                                                        style={{
                                                            color: "#2c3e50",
                                                        }}
                                                    ></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-0 fw-bold">
                                                        Kartu Anggota SIG{" "}
                                                        {currentYear}
                                                    </h5>
                                                    <small className="opacity-75">
                                                        Kartu digital resmi Anda
                                                    </small>
                                                </div>
                                            </div>
                                            <button
                                                onClick={generateCardImage}
                                                disabled={generatingCard}
                                                className="btn btn-success btn-sm"
                                            >
                                                {generatingCard ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                                        Generating...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-download me-2"></i>
                                                        Download Gambar
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="card-body p-4">
                                        {/* Debug info */}
                                        <div className="alert alert-success mb-3">
                                            <i className="bi bi-check-circle-fill me-2"></i>
                                            <strong>
                                                Kartu anggota tersedia!
                                            </strong>{" "}
                                            Status Anda telah disetujui untuk
                                            SIG {currentYear}.
                                        </div>

                                        {/* Kartu yang akan di-generate - UKURAN SEPERTI KTP */}
                                        <div
                                            ref={cardRef}
                                            className="mx-auto"
                                            style={{
                                                width: "640px",
                                                height: "400px",
                                                maxWidth: "100%",
                                                border: "2px solid #ddd",
                                                borderRadius: "15px",
                                                overflow: "hidden",
                                                backgroundColor: "white",
                                                boxShadow:
                                                    "0 10px 30px rgba(0,0,0,0.15)",
                                                position: "relative",
                                            }}
                                        >
                                            {/* Background pattern */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background:
                                                        "linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.1) 100%)",
                                                    zIndex: 0,
                                                }}
                                            ></div>

                                            {/* Header Kartu */}
                                            <div
                                                style={{
                                                    backgroundColor: "#2c3e50",
                                                    color: "white",
                                                    padding: "15px 20px",
                                                    position: "relative",
                                                    height: "80px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "space-between",
                                                    borderBottom:
                                                        "3px solid #3498db",
                                                    zIndex: 1,
                                                }}
                                            >
                                                {/* Logo di kiri */}
                                                <div
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        backgroundColor:
                                                            "white",
                                                        borderRadius: "8px",
                                                        padding: "5px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        boxShadow:
                                                            "0 2px 8px rgba(0,0,0,0.2)",
                                                        border: "2px solid #3498db",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <img
                                                        src="/assets/images/logo.png"
                                                        alt="Logo IKATWI"
                                                        style={{
                                                            maxWidth: "100%",
                                                            maxHeight: "100%",
                                                            objectFit:
                                                                "contain",
                                                            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                                                        }}
                                                        onError={(e) => {
                                                            e.target.onerror =
                                                                null;
                                                            e.target.src =
                                                                "/images/logo.png";
                                                        }}
                                                    />
                                                </div>

                                                {/* Text utama di tengah */}
                                                <div
                                                    style={{
                                                        flex: 1,
                                                        textAlign: "center",
                                                        margin: "0 20px",
                                                    }}
                                                >
                                                    <h2
                                                        style={{
                                                            fontWeight: "800",
                                                            fontSize: "24px",
                                                            marginBottom: "3px",
                                                            letterSpacing:
                                                                "1px",
                                                            textShadow:
                                                                "1px 1px 2px rgba(0,0,0,0.3)",
                                                            lineHeight: "1.1",
                                                        }}
                                                    >
                                                        KARTU ANGGOTA SIG
                                                    </h2>
                                                    <p
                                                        style={{
                                                            opacity: "0.95",
                                                            fontSize: "14px",
                                                            marginBottom: "0",
                                                            fontWeight: "400",
                                                            letterSpacing:
                                                                "0.5px",
                                                            lineHeight: "1.2",
                                                        }}
                                                    >
                                                        IKATWI -{" "}
                                                        {currentSig.tahun}
                                                    </p>
                                                </div>

                                                {/* Tahun di kanan */}
                                                <div
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        backgroundColor:
                                                            "rgba(255,255,255,0.15)",
                                                        borderRadius: "8px",
                                                        padding: "5px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        border: "2px solid rgba(255,255,255,0.3)",
                                                        flexShrink: 0,
                                                        flexDirection: "column",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            color: "rgba(255,255,255,0.9)",
                                                            fontSize: "10px",
                                                            fontWeight: "bold",
                                                            lineHeight: "1",
                                                            marginBottom: "2px",
                                                        }}
                                                    >
                                                        TAHUN
                                                    </div>
                                                    <div
                                                        style={{
                                                            color: "white",
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                            lineHeight: "1",
                                                        }}
                                                    >
                                                        {currentSig.tahun}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Body Kartu - Layout seperti KTP */}
                                            <div
                                                style={{
                                                    padding: "25px 30px",
                                                    height: "calc(100% - 80px)",
                                                    position: "relative",
                                                    zIndex: 1,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        height: "100%",
                                                        gap: "30px",
                                                    }}
                                                >
                                                    {/* Kolom Kiri - Data Pribadi */}
                                                    <div
                                                        style={{
                                                            flex: 1,
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        {/* Nama dan Nomor Anggota */}
                                                        <div>
                                                            {/* Nama */}
                                                            <div
                                                                style={{
                                                                    marginBottom:
                                                                        "10px",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        marginBottom:
                                                                            "5px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "24px",
                                                                            height: "24px",
                                                                            backgroundColor:
                                                                                "#3498db",
                                                                            borderRadius:
                                                                                "50%",
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            justifyContent:
                                                                                "center",
                                                                            marginRight:
                                                                                "8px",
                                                                            flexShrink: 0,
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="bi bi-person"
                                                                            style={{
                                                                                color: "white",
                                                                                fontSize:
                                                                                    "12px",
                                                                            }}
                                                                        ></i>
                                                                    </div>
                                                                    <h3
                                                                        style={{
                                                                            color: "#2c3e50",
                                                                            fontWeight:
                                                                                "700",
                                                                            fontSize:
                                                                                "22px",
                                                                            margin: 0,
                                                                            lineHeight:
                                                                                "1.2",
                                                                            letterSpacing:
                                                                                "0.3px",
                                                                        }}
                                                                    >
                                                                        {user?.name?.toUpperCase() ||
                                                                            "NAMA ANGGOTA"}
                                                                    </h3>
                                                                </div>

                                                                {/* Nomor Anggota */}
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        marginLeft:
                                                                            "32px",
                                                                        marginTop:
                                                                            "3px",
                                                                    }}
                                                                >
                                                                    <i
                                                                        className="bi bi-hash"
                                                                        style={{
                                                                            color: "#7f8c8d",
                                                                            marginRight:
                                                                                "6px",
                                                                            fontSize:
                                                                                "14px",
                                                                        }}
                                                                    ></i>
                                                                    <span
                                                                        style={{
                                                                            color: "#2c3e50",
                                                                            fontSize:
                                                                                "16px",
                                                                            fontWeight:
                                                                                "600",
                                                                            letterSpacing:
                                                                                "0.5px",
                                                                        }}
                                                                    >
                                                                        
                                                                        {user?.no_anggota
                                                                            ?.toString()
                                                                            .padStart(
                                                                                6,
                                                                                "0"
                                                                            ) ||
                                                                            "000000"}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Garis pembatas */}
                                                            <div
                                                                style={{
                                                                    borderBottom:
                                                                        "2px solid #3498db",
                                                                    width: "100%",
                                                                    margin: "15px 0 20px 0",
                                                                }}
                                                            ></div>

                                                            {/* Informasi Detail dalam grid */}
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "grid",
                                                                    gridTemplateColumns:
                                                                        "repeat(2, 1fr)",
                                                                    gap: "18px 30px",
                                                                }}
                                                            >
                                                                {/* Email */}
                                                                <div>
                                                                    <div
                                                                        style={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            marginBottom:
                                                                                "4px",
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="bi bi-envelope me-2"
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "12px",
                                                                            }}
                                                                        ></i>
                                                                        <span
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "11px",
                                                                                fontWeight:
                                                                                    "500",
                                                                                letterSpacing:
                                                                                    "0.3px",
                                                                            }}
                                                                        >
                                                                            EMAIL
                                                                        </span>
                                                                    </div>
                                                                    <p
                                                                        style={{
                                                                            color: "#2c3e50",
                                                                            fontWeight:
                                                                                "600",
                                                                            fontSize:
                                                                                "14px",
                                                                            margin: 0,
                                                                            paddingLeft:
                                                                                "20px",
                                                                            lineHeight:
                                                                                "1.3",
                                                                            wordBreak:
                                                                                "break-word",
                                                                        }}
                                                                    >
                                                                        {user?.email ||
                                                                            "-"}
                                                                    </p>
                                                                </div>

                                                                {/* Status Anggota */}
                                                                <div>
                                                                    <div
                                                                        style={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            marginBottom:
                                                                                "4px",
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="bi bi-award me-2"
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "12px",
                                                                            }}
                                                                        ></i>
                                                                        <span
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "11px",
                                                                                fontWeight:
                                                                                    "500",
                                                                                letterSpacing:
                                                                                    "0.3px",
                                                                            }}
                                                                        >
                                                                            STATUS
                                                                            ANGGOTA
                                                                        </span>
                                                                    </div>
                                                                    <p
                                                                        style={{
                                                                            color: "#2c3e50",
                                                                            fontWeight:
                                                                                "600",
                                                                            fontSize:
                                                                                "14px",
                                                                            margin: 0,
                                                                            paddingLeft:
                                                                                "20px",
                                                                            lineHeight:
                                                                                "1.3",
                                                                        }}
                                                                    >
                                                                        {isAnggotaKehormatan
                                                                            ? "ANGGOTA KEHORMATAN"
                                                                            : "ANGGOTA BIASA"}
                                                                    </p>
                                                                </div>

                                                                {/* Tanggal Bergabung */}
                                                                <div>
                                                                    <div
                                                                        style={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            marginBottom:
                                                                                "4px",
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="bi bi-calendar-check me-2"
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "12px",
                                                                            }}
                                                                        ></i>
                                                                        <span
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "11px",
                                                                                fontWeight:
                                                                                    "500",
                                                                                letterSpacing:
                                                                                    "0.3px",
                                                                            }}
                                                                        >
                                                                            TANGGAL
                                                                            BERGABUNG
                                                                        </span>
                                                                    </div>
                                                                    <p
                                                                        style={{
                                                                            color: "#2c3e50",
                                                                            fontWeight:
                                                                                "600",
                                                                            fontSize:
                                                                                "14px",
                                                                            margin: 0,
                                                                            paddingLeft:
                                                                                "20px",
                                                                            lineHeight:
                                                                                "1.3",
                                                                        }}
                                                                    >
                                                                        {formatDateForCard(
                                                                            currentSig.created_at
                                                                        )}
                                                                    </p>
                                                                </div>

                                                                {/* Masa Berlaku */}
                                                                <div>
                                                                    <div
                                                                        style={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            marginBottom:
                                                                                "4px",
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="bi bi-calendar-range me-2"
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "12px",
                                                                            }}
                                                                        ></i>
                                                                        <span
                                                                            style={{
                                                                                color: "#7f8c8d",
                                                                                fontSize:
                                                                                    "11px",
                                                                                fontWeight:
                                                                                    "500",
                                                                                letterSpacing:
                                                                                    "0.3px",
                                                                            }}
                                                                        >
                                                                            MASA
                                                                            BERLAKU
                                                                        </span>
                                                                    </div>
                                                                    <p
                                                                        style={{
                                                                            color: "#2c3e50",
                                                                            fontWeight:
                                                                                "600",
                                                                            fontSize:
                                                                                "14px",
                                                                            margin: 0,
                                                                            paddingLeft:
                                                                                "20px",
                                                                            lineHeight:
                                                                                "1.3",
                                                                        }}
                                                                    >
                                                                        31
                                                                        DESEMBER{" "}
                                                                        {
                                                                            currentSig.tahun
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Status Badge dan Footer */}
                                                        <div>
                                                            {/* Status Badge */}
                                                            <div
                                                                style={{
                                                                    marginBottom:
                                                                        "15px",
                                                                }}
                                                            >
                                                                <div
                                                                    className="badge"
                                                                    style={{
                                                                        backgroundColor:
                                                                            "#27ae60",
                                                                        color: "white",
                                                                        fontSize:
                                                                            "14px",
                                                                        padding:
                                                                            "8px 20px",
                                                                        borderRadius:
                                                                            "20px",
                                                                        fontWeight:
                                                                            "700",
                                                                        display:
                                                                            "inline-flex",
                                                                        alignItems:
                                                                            "center",
                                                                        letterSpacing:
                                                                            "0.5px",
                                                                        boxShadow:
                                                                            "0 2px 4px rgba(39, 174, 96, 0.2)",
                                                                    }}
                                                                >
                                                                    <i className="bi bi-shield-check me-2"></i>
                                                                    ANGGOTA
                                                                    AKTIF
                                                                </div>
                                                            </div>

                                                            {/* Footer kecil */}
                                                        </div>
                                                    </div>

                                                    {/* Kolom Kanan - Foto dan QR Code */}
                                                    <div
                                                        style={{
                                                            width: "180px",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        {/* Area Foto - MENGGUNAKAN user.image */}
                                                        <div
                                                            style={{
                                                                width: "140px",
                                                                height: "160px",
                                                                backgroundColor:
                                                                    "#f8f9fa",
                                                                borderRadius:
                                                                    "8px",
                                                                border: "2px solid #ddd",
                                                                marginBottom:
                                                                    "10px",
                                                                display: "flex",
                                                                flexDirection:
                                                                    "column",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                position:
                                                                    "relative",
                                                                overflow:
                                                                    "hidden",
                                                                boxShadow:
                                                                    "0 3px 10px rgba(0,0,0,0.1)",
                                                            }}
                                                        >
                                                            {user?.image ? (
                                                                <img
                                                                    src={
                                                                        user.image
                                                                    }
                                                                    alt="Foto Profil"
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit:
                                                                            "cover",
                                                                    }}
                                                                    onError={(
                                                                        e
                                                                    ) => {
                                                                        e.target.style.display =
                                                                            "none";
                                                                        // Tampilkan placeholder
                                                                        const placeholder =
                                                                            e.target.parentElement.querySelector(
                                                                                ".placeholder-photo"
                                                                            );
                                                                        if (
                                                                            placeholder
                                                                        ) {
                                                                            placeholder.style.display =
                                                                                "flex";
                                                                        }
                                                                    }}
                                                                />
                                                            ) : null}

                                                            {/* Placeholder jika tidak ada foto */}
                                                            <div
                                                                className="placeholder-photo"
                                                                style={{
                                                                    display:
                                                                        user?.image
                                                                            ? "none"
                                                                            : "flex",
                                                                    flexDirection:
                                                                        "column",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "center",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    backgroundColor:
                                                                        "#f8f9fa",
                                                                }}
                                                            >
                                                                <i
                                                                    className="bi bi-person-circle"
                                                                    style={{
                                                                        fontSize:
                                                                            "50px",
                                                                        color: "#bdc3c7",
                                                                    }}
                                                                ></i>
                                                                <span
                                                                    style={{
                                                                        fontSize:
                                                                            "9px",
                                                                        color: "#95a5a6",
                                                                        marginTop:
                                                                            "8px",
                                                                        fontWeight:
                                                                            "500",
                                                                    }}
                                                                >
                                                                    FOTO ANGGOTA
                                                                </span>
                                                            </div>

                                                            {/* Label di atas foto */}
                                                            <div
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    top: "5px",
                                                                    left: 0,
                                                                    right: 0,
                                                                    textAlign:
                                                                        "center",
                                                                    zIndex: 2,
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        backgroundColor:
                                                                            "rgba(52, 152, 219, 0.9)",
                                                                        color: "white",
                                                                        fontSize:
                                                                            "9px",
                                                                        fontWeight:
                                                                            "bold",
                                                                        padding:
                                                                            "2px 8px",
                                                                        borderRadius:
                                                                            "3px",
                                                                        display:
                                                                            "inline-block",
                                                                    }}
                                                                >
                                                                    FOTO ANGGOTA
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* QR Code */}
                                                        {/* QR Code */}
                                                        <div
                                                            style={{
                                                                width: "140px",
                                                                height: "140px",
                                                                backgroundColor:
                                                                    "white",
                                                                borderRadius:
                                                                    "8px",
                                                                border: "2px solid #3498db",
                                                                padding: "12px",
                                                                display: "flex",
                                                                flexDirection:
                                                                    "column",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                boxShadow:
                                                                    "0 3px 12px rgba(52, 152, 219, 0.2)",
                                                                marginBottom:
                                                                    "12px",
                                                                position:
                                                                    "relative",
                                                            }}
                                                        >
                                                            {/* Label QR Code di atas */}
                                                            <div
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    top: "-10px",
                                                                    left: "50%",
                                                                    transform:
                                                                        "translateX(-50%)",
                                                                    backgroundColor:
                                                                        "#3498db",
                                                                    color: "white",
                                                                    fontSize:
                                                                        "10px",
                                                                    fontWeight:
                                                                        "bold",
                                                                    padding:
                                                                        "3px 10px",
                                                                    borderRadius:
                                                                        "4px",
                                                                    zIndex: 2,
                                                                    letterSpacing:
                                                                        "0.5px",
                                                                }}
                                                            >
                                                                QR CODE
                                                            </div>

                                                            <div
                                                                style={{
                                                                    width: "115px",
                                                                    height: "115px",
                                                                    backgroundColor:
                                                                        "white",
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "center",
                                                                    borderRadius:
                                                                        "5px",
                                                                    padding:
                                                                        "5px",
                                                                }}
                                                            >
                                                                {/* QR Code dengan data user */}
                                                                <QRCodeSVG
                                                                    value={JSON.stringify(
                                                                        {
                                                                            type: "SIG_MEMBER",
                                                                            id:
                                                                                user?.no_anggota ||
                                                                                "",
                                                                            name:
                                                                                user?.name ||
                                                                                "",
                                                                            year: currentSig.tahun,
                                                                            status: "ACTIVE",
                                                                        }
                                                                    )}
                                                                    size={110}
                                                                    level="H"
                                                                    includeMargin={
                                                                        true
                                                                    }
                                                                    bgColor="#ffffff"
                                                                    fgColor="#2c3e50"
                                                                    style={{
                                                                        borderRadius:
                                                                            "4px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Label Scan */}
                                                        <div
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color: "#7f8c8d",
                                                                    fontSize:
                                                                        "9px",
                                                                    margin: 0,
                                                                    fontWeight:
                                                                        "600",
                                                                    letterSpacing:
                                                                        "0.5px",
                                                                    backgroundColor:
                                                                        "#f8f9fa",
                                                                    padding:
                                                                        "4px 8px",
                                                                    borderRadius:
                                                                        "3px",
                                                                    border: "1px solid #eee",
                                                                }}
                                                            >
                                                                <i className="bi bi-upc-scan me-1"></i>
                                                                SCAN UNTUK
                                                                VERIFIKASI
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tanda tangan digital di kiri bawah */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    bottom: "15px",
                                                    left: "30px",
                                                    textAlign: "left",
                                                    maxWidth: "200px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        borderTop:
                                                            "1px solid #ddd",
                                                        paddingTop: "5px",
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            color: "#2c3e50",
                                                            fontSize: "9px",
                                                            margin: "0",
                                                            fontWeight: "700",
                                                            letterSpacing:
                                                                "0.5px",
                                                        }}
                                                    >
                                                        SISTEM INFORMASI
                                                        GENERASI
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Nomor seri kartu di kanan bawah */}

                                            {/* Garis dekoratif di bagian bawah */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    bottom: "0",
                                                    left: "0",
                                                    right: "0",
                                                    height: "3px",
                                                    background:
                                                        "linear-gradient(90deg, #3498db 0%, #2c3e50 50%, #3498db 100%)",
                                                }}
                                            ></div>
                                        </div>

                                        {/* Informasi tambahan */}
                                        <div className="mt-4">
                                            <div
                                                className="alert border-0"
                                                style={{
                                                    backgroundColor: "#e8f4fd",
                                                    borderLeft:
                                                        "4px solid #3498db",
                                                }}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <i
                                                        className="bi bi-info-circle-fill fs-4 me-3"
                                                        style={{
                                                            color: "#3498db",
                                                        }}
                                                    ></i>
                                                    <div>
                                                        <h6
                                                            className="alert-heading mb-1 fw-bold"
                                                            style={{
                                                                color: "#0d47a1",
                                                            }}
                                                        >
                                                            Tentang Kartu
                                                            Digital
                                                        </h6>
                                                        <p
                                                            className="mb-0 small"
                                                            style={{
                                                                color: "#1565c0",
                                                            }}
                                                        >
                                                            Kartu ini adalah
                                                            tanda keanggotaan
                                                            resmi SIG{" "}
                                                            {currentYear} dengan
                                                            format seperti kartu
                                                            KTP. Foto anggota
                                                            akan ditampilkan
                                                            jika tersedia di
                                                            profil Anda.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* FORM PENDAFTARAN JIKA BELUM DAFTAR TAHUN INI ATAU STATUS BUKAN APPROVED */
                                <div
                                    className="card border-0 shadow-lg h-100"
                                    style={{ borderRadius: "10px" }}
                                >
                                    <div
                                        className="card-header py-3"
                                        style={{
                                            backgroundColor: "#2c3e50",
                                            color: "white",
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                        }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="bg-white rounded-circle p-2 me-3"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            >
                                                <i
                                                    className="bi bi-pencil-square fs-5"
                                                    style={{ color: "#2c3e50" }}
                                                ></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 fw-bold">
                                                    {hasRegisteredForCurrentYear
                                                        ? `Status Pendaftaran SIG ${currentYear}`
                                                        : `Formulir Pendaftaran SIG ${currentYear}`}
                                                </h5>
                                                <small className="opacity-75">
                                                    {hasRegisteredForCurrentYear
                                                        ? "Pendaftaran tahun ini sudah dilakukan"
                                                        : `Daftar untuk mengikuti SIG ${currentYear}`}
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body p-4">
                                        {/* PERINGATAN JIKA TIDAK BERHAK MENDAFTAR */}
                                        {!canRegisterForSIG && (
                                            <div
                                                className="alert alert-warning border-0 shadow-sm mb-4"
                                                style={{
                                                    backgroundColor: "#fff9e6",
                                                    borderLeft:
                                                        "4px solid #f39c12",
                                                }}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <i
                                                        className="bi bi-exclamation-triangle-fill fs-4 me-3"
                                                        style={{
                                                            color: "#f39c12",
                                                        }}
                                                    ></i>
                                                    <div>
                                                        <h6
                                                            className="alert-heading mb-1 fw-bold"
                                                            style={{
                                                                color: "#7d6608",
                                                            }}
                                                        >
                                                            Akses Terbatas
                                                        </h6>
                                                        <p
                                                            className="mb-0"
                                                            style={{
                                                                color: "#7d6608",
                                                            }}
                                                        >
                                                            Anda belum dapat
                                                            mendaftar SIG
                                                            karena:
                                                            <ul className="mt-2 mb-0">
                                                                {!isPaid && (
                                                                    <li>
                                                                        <i className="bi bi-x-circle me-1"></i>
                                                                        Belum
                                                                        melakukan
                                                                        pembayaran
                                                                        iuran
                                                                        (Status:{" "}
                                                                        {transactions.length >
                                                                        0
                                                                            ? transactions[0]
                                                                                  .status
                                                                            : "Tidak ada transaksi"}
                                                                        )
                                                                    </li>
                                                                )}
                                                                {!isAnggotaKehormatan && (
                                                                    <li>
                                                                        <i className="bi bi-x-circle me-1"></i>
                                                                        Bukan
                                                                        Anggota
                                                                        Kehormatan
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        </p>
                                                        <div className="mt-3">
                                                            <Link
                                                                href="/account/transactions"
                                                                className="btn btn-sm btn-primary me-2"
                                                            >
                                                                <i className="bi bi-credit-card me-1"></i>
                                                                Cek Pembayaran
                                                            </Link>
                                                            <Link
                                                                href="/account/profile"
                                                                className="btn btn-sm btn-outline-primary"
                                                            >
                                                                <i className="bi bi-person me-1"></i>
                                                                Profil Saya
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* TAMPILKAN FORM JIKA BELUM DAFTAR UNTUK TAHUN INI DAN BERHAK MENDAFTAR */}
                                        {!hasRegisteredForCurrentYear &&
                                        canRegisterForSIG ? (
                                            <>
                                                {/* Jika pernah daftar tahun sebelumnya */}
                                                {currentSig &&
                                                    parseInt(currentSig.tahun) <
                                                        currentYear && (
                                                        <div
                                                            className="alert border-0 shadow-sm mb-4"
                                                            style={{
                                                                backgroundColor:
                                                                    "#fff9e6",
                                                                borderLeft:
                                                                    "4px solid #f39c12",
                                                            }}
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <i
                                                                    className="bi bi-arrow-repeat fs-4 me-3"
                                                                    style={{
                                                                        color: "#f39c12",
                                                                    }}
                                                                ></i>
                                                                <div>
                                                                    <h6
                                                                        className="alert-heading mb-1 fw-bold"
                                                                        style={{
                                                                            color: "#7d6608",
                                                                        }}
                                                                    >
                                                                        Daftar
                                                                        Ulang
                                                                        untuk{" "}
                                                                        {
                                                                            currentYear
                                                                        }
                                                                    </h6>
                                                                    <p
                                                                        className="mb-0"
                                                                        style={{
                                                                            color: "#7d6608",
                                                                        }}
                                                                    >
                                                                        Anda
                                                                        terakhir
                                                                        mendaftar
                                                                        untuk
                                                                        SIG{" "}
                                                                        {
                                                                            currentSig.tahun
                                                                        }
                                                                        .
                                                                        Sekarang
                                                                        saatnya
                                                                        mendaftar
                                                                        ulang
                                                                        untuk
                                                                        SIG{" "}
                                                                        {
                                                                            currentYear
                                                                        }
                                                                        .
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                {/* Jika belum pernah daftar sama sekali */}
                                                {!currentSig && (
                                                    <div
                                                        className="alert alert-info border-0 shadow-sm mb-4"
                                                        style={{
                                                            backgroundColor:
                                                                "#e3f2fd",
                                                            borderLeft:
                                                                "4px solid #2196F3",
                                                        }}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <i
                                                                className="bi bi-info-circle-fill fs-4 me-3"
                                                                style={{
                                                                    color: "#2196F3",
                                                                }}
                                                            ></i>
                                                            <div>
                                                                <h6
                                                                    className="alert-heading mb-1 fw-bold"
                                                                    style={{
                                                                        color: "#0d47a1",
                                                                    }}
                                                                >
                                                                    Pendaftaran
                                                                    Pertama Kali
                                                                </h6>
                                                                <p
                                                                    className="mb-0"
                                                                    style={{
                                                                        color: "#1565c0",
                                                                    }}
                                                                >
                                                                    Selamat
                                                                    datang!
                                                                    Silakan
                                                                    daftarkan
                                                                    diri Anda
                                                                    untuk
                                                                    mengikuti
                                                                    program SIG{" "}
                                                                    {
                                                                        currentYear
                                                                    }
                                                                    .
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-4">
                                                        <label
                                                            htmlFor="tahun"
                                                            className="form-label fw-semibold"
                                                            style={{
                                                                color: "#2c3e50",
                                                            }}
                                                        >
                                                            <i
                                                                className="bi bi-calendar3 me-2"
                                                                style={{
                                                                    color: "#3498db",
                                                                }}
                                                            ></i>
                                                            Tahun Program
                                                            <span className="text-danger ms-1">
                                                                *
                                                            </span>
                                                        </label>
                                                        <div className="input-group input-group-lg shadow-sm">
                                                            <span
                                                                className="input-group-text border-0"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#f8f9fa",
                                                                }}
                                                            >
                                                                <i
                                                                    className="bi bi-calendar-event"
                                                                    style={{
                                                                        color: "#3498db",
                                                                    }}
                                                                ></i>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control border-0 ps-0"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#f8f9fa",
                                                                    color: "#2c3e50",
                                                                }}
                                                                value={`SIG Tahun ${currentYear}`}
                                                                readOnly
                                                                disabled
                                                            />
                                                        </div>
                                                        <div
                                                            className="form-text ms-1 mt-2"
                                                            style={{
                                                                color: "#7f8c8d",
                                                            }}
                                                        >
                                                            <i className="bi bi-lightbulb me-1"></i>
                                                            Anda mendaftar untuk
                                                            program SIG tahun{" "}
                                                            {currentYear}
                                                        </div>
                                                    </div>

                                                    <div className="border-top pt-4 mt-4">
                                                        <div className="d-flex justify-content-end">
                                                            <button
                                                                type="submit"
                                                                disabled={
                                                                    loading
                                                                }
                                                                className="btn btn-lg px-5 shadow-sm fw-bold"
                                                                style={{
                                                                    backgroundColor:
                                                                        loading
                                                                            ? "#bdc3c7"
                                                                            : "#3498db",
                                                                    color: "white",
                                                                    border: "none",
                                                                    borderRadius:
                                                                        "8px",
                                                                    transition:
                                                                        "all 0.3s",
                                                                }}
                                                                onMouseOver={(
                                                                    e
                                                                ) => {
                                                                    if (
                                                                        !loading
                                                                    ) {
                                                                        e.target.style.backgroundColor =
                                                                            "#2980b9";
                                                                        e.target.style.transform =
                                                                            "translateY(-2px)";
                                                                    }
                                                                }}
                                                                onMouseOut={(
                                                                    e
                                                                ) => {
                                                                    if (
                                                                        !loading
                                                                    ) {
                                                                        e.target.style.backgroundColor =
                                                                            "#3498db";
                                                                        e.target.style.transform =
                                                                            "translateY(0)";
                                                                    }
                                                                }}
                                                            >
                                                                {loading ? (
                                                                    <>
                                                                        <span
                                                                            className="spinner-border spinner-border-sm me-2"
                                                                            role="status"
                                                                        ></span>
                                                                        Sedang
                                                                        Memproses...
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <i className="bi bi-send-check me-2"></i>
                                                                        Daftar
                                                                        SIG{" "}
                                                                        {
                                                                            currentYear
                                                                        }
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </>
                                        ) : /* TAMPILAN JIKA SUDAH DAFTAR TAPI STATUS BUKAN APPROVED */
                                        hasRegisteredForCurrentYear ? (
                                            <div className="text-center py-5">
                                                <div className="mb-4">
                                                    <div
                                                        className={`rounded-circle d-inline-flex p-4 ${
                                                            getStatusClass(
                                                                currentSig.status
                                                            ).bg
                                                        }`}
                                                    >
                                                        <i
                                                            className={`bi ${
                                                                getStatusClass(
                                                                    currentSig.status
                                                                ).icon
                                                            } fs-1 ${
                                                                getStatusClass(
                                                                    currentSig.status
                                                                ).text
                                                            }`}
                                                        ></i>
                                                    </div>
                                                </div>
                                                <h4
                                                    className="fw-bold mb-3"
                                                    style={{ color: "#2c3e50" }}
                                                >
                                                    <i
                                                        className={`bi ${
                                                            getStatusClass(
                                                                currentSig.status
                                                            ).icon
                                                        } me-2 ${
                                                            getStatusClass(
                                                                currentSig.status
                                                            ).text
                                                        }`}
                                                    ></i>
                                                    {getStatusLabel(
                                                        currentSig.status
                                                    )}{" "}
                                                    untuk {currentYear}
                                                </h4>

                                                <div
                                                    className={`alert border-0 mx-auto mb-4 ${
                                                        getStatusClass(
                                                            currentSig.status
                                                        ).bg
                                                    }`}
                                                    style={{
                                                        maxWidth: "500px",
                                                        borderLeft: `4px solid ${
                                                            currentSig.status ===
                                                            "pending"
                                                                ? "#f39c12"
                                                                : currentSig.status ===
                                                                  "approved"
                                                                ? "#27ae60"
                                                                : "#e74c3c"
                                                        }`,
                                                    }}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i
                                                            className={`bi ${
                                                                getStatusClass(
                                                                    currentSig.status
                                                                ).icon
                                                            } fs-4 me-3 ${
                                                                getStatusClass(
                                                                    currentSig.status
                                                                ).text
                                                            }`}
                                                        ></i>
                                                        <div className="text-start">
                                                            <h6
                                                                className="alert-heading mb-1 fw-bold"
                                                                style={getStatusClass(
                                                                    currentSig.status
                                                                )}
                                                            >
                                                                Status
                                                                Pendaftaran
                                                            </h6>
                                                            <p
                                                                className="mb-0"
                                                                style={getStatusClass(
                                                                    currentSig.status
                                                                )}
                                                            >
                                                                {currentSig.status ===
                                                                    "pending" &&
                                                                    "Pendaftaran Anda sedang dalam proses verifikasi oleh admin."}
                                                                {currentSig.status ===
                                                                    "rejected" &&
                                                                    "Mohon maaf, pendaftaran Anda belum dapat disetujui. Silakan hubungi admin."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="alert border-0 mt-4"
                                                    style={{
                                                        backgroundColor:
                                                            "#e8f4fd",
                                                        borderLeft:
                                                            "4px solid #3498db",
                                                        maxWidth: "500px",
                                                        margin: "0 auto",
                                                    }}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i
                                                            className="bi bi-info-circle-fill fs-4 me-3"
                                                            style={{
                                                                color: "#3498db",
                                                            }}
                                                        ></i>
                                                        <div>
                                                            <p
                                                                className="mb-0 small"
                                                                style={{
                                                                    color: "#1565c0",
                                                                }}
                                                            >
                                                                {currentSig.status ===
                                                                    "pending" &&
                                                                    'Setelah status menjadi "Disetujui", kartu anggota akan tersedia di sini.'}
                                                                {currentSig.status ===
                                                                    "rejected" &&
                                                                    "Anda dapat mendaftar ulang setelah menerima informasi dari admin."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Informasi tentang tahun berikutnya */}
                                                <div className="mt-4 pt-3 border-top">
                                                    <p className="text-muted small">
                                                        <i className="bi bi-info-circle me-1"></i>
                                                        Pendaftaran berlaku per
                                                        tahun. Tahun depan (
                                                        {nextYear}) Anda perlu
                                                        mendaftar ulang.
                                                    </p>
                                                </div>
                                            </div>
                                        ) : !canRegisterForSIG ? (
                                            /* TAMPILAN JIKA TIDAK BERHAK MENDAFTAR */
                                            <div className="text-center py-5">
                                                <div className="mb-4">
                                                    <div className="bg-warning rounded-circle d-inline-flex p-4">
                                                        <i className="bi bi-lock fs-1 text-white"></i>
                                                    </div>
                                                </div>
                                                <h4
                                                    className="fw-bold mb-3"
                                                    style={{ color: "#2c3e50" }}
                                                >
                                                    Akses Dibatasi
                                                </h4>
                                                <div
                                                    className="alert alert-warning border-0 mx-auto mb-4"
                                                    style={{
                                                        maxWidth: "500px",
                                                    }}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i className="bi bi-exclamation-triangle fs-4 me-3"></i>
                                                        <div className="text-start">
                                                            <h6 className="alert-heading mb-1 fw-bold">
                                                                Persyaratan
                                                                Tidak Terpenuhi
                                                            </h6>
                                                            <p className="mb-0">
                                                                Untuk mendaftar
                                                                SIG{" "}
                                                                {currentYear},
                                                                Anda harus:
                                                                <ul className="mt-2 mb-0">
                                                                    <li>
                                                                        <strong>
                                                                            Status
                                                                            pembayaran
                                                                            "PAID"
                                                                        </strong>
                                                                        (Status
                                                                        Anda:{" "}
                                                                        {transactions.length >
                                                                        0
                                                                            ? transactions[0]
                                                                                  .status
                                                                            : "Tidak ada transaksi"}
                                                                        )
                                                                    </li>
                                                                    <li>
                                                                        <strong>
                                                                            ATAU
                                                                        </strong>{" "}
                                                                        memiliki
                                                                        status
                                                                        "Anggota
                                                                        Kehormatan"
                                                                    </li>
                                                                </ul>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <Link
                                                        href="/account/transactions"
                                                        className="btn btn-primary me-2"
                                                    >
                                                        <i className="bi bi-credit-card me-1"></i>
                                                        Cek Pembayaran
                                                    </Link>
                                                    <Link
                                                        href="/account/profile"
                                                        className="btn btn-outline-primary"
                                                    >
                                                        <i className="bi bi-person me-1"></i>
                                                        Profil Saya
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Kolom Kanan - Status Card */}
                        <div className="col-lg-4 mb-4">
                            <div className="sticky-top" style={{ top: "20px" }}>
                                <div
                                    className="card border-0 shadow-lg h-100"
                                    style={{ borderRadius: "10px" }}
                                >
                                    <div
                                        className="card-header py-3"
                                        style={{
                                            backgroundColor: "#34495e",
                                            color: "white",
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                        }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="bg-white rounded-circle p-2 me-3"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            >
                                                <i
                                                    className="bi bi-clipboard-check fs-5"
                                                    style={{ color: "#34495e" }}
                                                ></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 fw-bold">
                                                    Riwayat & Informasi
                                                </h5>
                                                <small className="opacity-75">
                                                    Status dan ketentuan program
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body p-4">
                                        {/* Status Keanggotaan */}
                                        <div
                                            className="rounded-3 p-4 mb-4 border"
                                            style={{
                                                backgroundColor: "#f8f9fa",
                                                borderColor: "#dee2e6",
                                            }}
                                        >
                                            <h6
                                                className="fw-bold mb-3"
                                                style={{ color: "#2c3e50" }}
                                            >
                                                <i className="bi bi-person-check me-2"></i>
                                                Status Keanggotaan
                                            </h6>

                                            <div className="row g-3 mb-3">
                                                <div className="col-12">
                                                    <div className="p-3 border rounded bg-white">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i
                                                                className="bi bi-credit-card me-2"
                                                                style={{
                                                                    color: isPaid
                                                                        ? "#27ae60"
                                                                        : "#e74c3c",
                                                                }}
                                                            ></i>
                                                            <small className="text-muted">
                                                                Status
                                                                Pembayaran
                                                            </small>
                                                        </div>
                                                        <strong
                                                            className="d-block"
                                                            style={{
                                                                color: isPaid
                                                                    ? "#27ae60"
                                                                    : "#e74c3c",
                                                            }}
                                                        >
                                                            {isPaid
                                                                ? "PAID"
                                                                : "BELUM LUNAS"}
                                                        </strong>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="p-3 border rounded bg-white">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i
                                                                className="bi bi-award me-2"
                                                                style={{
                                                                    color: isAnggotaKehormatan
                                                                        ? "#f39c12"
                                                                        : "#7f8c8d",
                                                                }}
                                                            ></i>
                                                            <small className="text-muted">
                                                                Status Anggota
                                                            </small>
                                                        </div>
                                                        <strong
                                                            className="d-block"
                                                            style={{
                                                                color: isAnggotaKehormatan
                                                                    ? "#f39c12"
                                                                    : "#2c3e50",
                                                            }}
                                                        >
                                                            {isAnggotaKehormatan
                                                                ? "Anggota Kehormatan"
                                                                : "Anggota Biasa"}
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="alert border-0"
                                                style={{
                                                    backgroundColor:
                                                        canRegisterForSIG
                                                            ? "#e8f6f3"
                                                            : "#fde8e8",
                                                    borderLeft: `4px solid ${
                                                        canRegisterForSIG
                                                            ? "#1abc9c"
                                                            : "#e74c3c"
                                                    }`,
                                                }}
                                            >
                                                <div className="d-flex">
                                                    <i
                                                        className={`bi ${
                                                            canRegisterForSIG
                                                                ? "bi-check-circle"
                                                                : "bi-x-circle"
                                                        } fs-4 me-3`}
                                                        style={{
                                                            color: canRegisterForSIG
                                                                ? "#1abc9c"
                                                                : "#e74c3c",
                                                        }}
                                                    ></i>
                                                    <div>
                                                        <h6
                                                            className="alert-heading mb-1 fw-bold"
                                                            style={{
                                                                color: canRegisterForSIG
                                                                    ? "#0d6254"
                                                                    : "#721c24",
                                                            }}
                                                        >
                                                            {canRegisterForSIG
                                                                ? "Berhak Mendaftar SIG"
                                                                : "Tidak Berhak Mendaftar SIG"}
                                                        </h6>
                                                        <p
                                                            className="mb-0 small"
                                                            style={{
                                                                color: canRegisterForSIG
                                                                    ? "#0d6254"
                                                                    : "#721c24",
                                                            }}
                                                        >
                                                            {canRegisterForSIG
                                                                ? "Anda memenuhi syarat untuk mendaftar program SIG."
                                                                : "Anda belum memenuhi syarat untuk mendaftar SIG."}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {currentSig ? (
                                            <div
                                                className={`rounded-3 p-4 ${
                                                    getStatusClass(
                                                        currentSig.status
                                                    ).bg
                                                } border ${
                                                    getStatusClass(
                                                        currentSig.status
                                                    ).border
                                                }`}
                                            >
                                                <div className="text-center mb-4">
                                                    <div className="mb-3">
                                                        <div
                                                            className={`rounded-circle d-inline-flex p-3 ${
                                                                getStatusClass(
                                                                    currentSig.status
                                                                ).bg
                                                            }`}
                                                        >
                                                            <i
                                                                className={`bi ${
                                                                    getStatusClass(
                                                                        currentSig.status
                                                                    ).icon
                                                                } fs-1 ${
                                                                    getStatusClass(
                                                                        currentSig.status
                                                                    ).text
                                                                }`}
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <h4
                                                        className="fw-bold mb-1"
                                                        style={{
                                                            color: "#2c3e50",
                                                        }}
                                                    >
                                                        SIG {currentSig.tahun}
                                                    </h4>
                                                    <div
                                                        className={`badge ${
                                                            getStatusClass(
                                                                currentSig.status
                                                            ).badge
                                                        } px-3 py-2 fs-6 mb-3 shadow-sm`}
                                                    >
                                                        {getStatusLabel(
                                                            currentSig.status
                                                        )}
                                                    </div>
                                                    <p className="text-muted small">
                                                        <i className="bi bi-hash me-1"></i>
                                                        ID: #
                                                        {currentSig.id
                                                            .toString()
                                                            .padStart(5, "0")}
                                                    </p>
                                                </div>

                                                <div className="row g-3 mb-4">
                                                    <div className="col-12">
                                                        <div
                                                            className="p-3 border rounded"
                                                            style={{
                                                                backgroundColor:
                                                                    "white",
                                                            }}
                                                        >
                                                            <div className="d-flex align-items-center mb-2">
                                                                <i
                                                                    className="bi bi-calendar-plus me-2"
                                                                    style={{
                                                                        color: "#3498db",
                                                                    }}
                                                                ></i>
                                                                <small className="text-muted">
                                                                    Tanggal
                                                                    Pendaftaran
                                                                </small>
                                                            </div>
                                                            <strong
                                                                className="d-block"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                {new Date(
                                                                    currentSig.created_at
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div
                                                            className="p-3 border rounded"
                                                            style={{
                                                                backgroundColor:
                                                                    "white",
                                                            }}
                                                        >
                                                            <div className="d-flex align-items-center mb-2">
                                                                <i
                                                                    className="bi bi-calendar-check me-2"
                                                                    style={{
                                                                        color: "#2ecc71",
                                                                    }}
                                                                ></i>
                                                                <small className="text-muted">
                                                                    Terakhir
                                                                    Diperbarui
                                                                </small>
                                                            </div>
                                                            <strong
                                                                className="d-block"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                {new Date(
                                                                    currentSig.updated_at
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Informasi tentang kartu */}
                                                {shouldShowCard && (
                                                    <div className="border-top pt-4 mt-3">
                                                        <h6
                                                            className="fw-semibold mb-3"
                                                            style={{
                                                                color: "#2c3e50",
                                                            }}
                                                        >
                                                            <i
                                                                className="bi bi-card-text me-2"
                                                                style={{
                                                                    color: "#3498db",
                                                                }}
                                                            ></i>
                                                            Kartu Anggota
                                                        </h6>
                                                        <div
                                                            className="alert border-0"
                                                            style={{
                                                                backgroundColor:
                                                                    "#eafaf1",
                                                                borderLeft:
                                                                    "4px solid #27ae60",
                                                            }}
                                                        >
                                                            <div className="d-flex">
                                                                <i
                                                                    className="bi bi-check-circle fs-4 me-3"
                                                                    style={{
                                                                        color: "#27ae60",
                                                                    }}
                                                                ></i>
                                                                <div>
                                                                    <h6
                                                                        className="alert-heading mb-1 fw-bold"
                                                                        style={{
                                                                            color: "#196f3d",
                                                                        }}
                                                                    >
                                                                        Kartu
                                                                        Tersedia
                                                                    </h6>
                                                                    <p
                                                                        className="mb-0 small"
                                                                        style={{
                                                                            color: "#196f3d",
                                                                        }}
                                                                    >
                                                                        Status
                                                                        Anda
                                                                        telah{" "}
                                                                        <strong>
                                                                            disetujui
                                                                        </strong>
                                                                        . Kartu
                                                                        anggota
                                                                        tersedia
                                                                        di panel
                                                                        kiri dan
                                                                        bisa
                                                                        di-download
                                                                        sebagai
                                                                        gambar.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Informasi reset tahunan */}
                                                <div className="border-top pt-4 mt-3">
                                                    <h6
                                                        className="fw-semibold mb-3"
                                                        style={{
                                                            color: "#2c3e50",
                                                        }}
                                                    >
                                                        <i
                                                            className="bi bi-arrow-repeat me-2"
                                                            style={{
                                                                color: "#3498db",
                                                            }}
                                                        ></i>
                                                        Sistem Reset Tahunan
                                                    </h6>
                                                    <div
                                                        className="alert border-0"
                                                        style={{
                                                            backgroundColor:
                                                                "#e8f4fd",
                                                            borderLeft:
                                                                "4px solid #3498db",
                                                        }}
                                                    >
                                                        <div className="d-flex">
                                                            <i
                                                                className="bi bi-calendar2-check fs-4 me-3"
                                                                style={{
                                                                    color: "#3498db",
                                                                }}
                                                            ></i>
                                                            <div>
                                                                <h6
                                                                    className="alert-heading mb-1 fw-bold"
                                                                    style={{
                                                                        color: "#0d47a1",
                                                                    }}
                                                                >
                                                                    Pendaftaran{" "}
                                                                    {nextYear}
                                                                </h6>
                                                                <p
                                                                    className="mb-0 small"
                                                                    style={{
                                                                        color: "#1565c0",
                                                                    }}
                                                                >
                                                                    Pendaftaran
                                                                    tahun{" "}
                                                                    {
                                                                        currentSig.tahun
                                                                    }{" "}
                                                                    akan
                                                                    berakhir
                                                                    pada{" "}
                                                                    <strong>
                                                                        31
                                                                        Desember{" "}
                                                                        {
                                                                            currentSig.tahun
                                                                        }
                                                                    </strong>
                                                                    . Untuk
                                                                    mengikuti
                                                                    SIG{" "}
                                                                    {nextYear},
                                                                    Anda perlu
                                                                    mendaftar
                                                                    ulang di
                                                                    tahun baru.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center py-5">
                                                <div className="mb-4">
                                                    <div
                                                        className="bg-light rounded-circle d-inline-flex p-4"
                                                        style={{
                                                            backgroundColor:
                                                                "#f8f9fa",
                                                        }}
                                                    >
                                                        <i
                                                            className="bi bi-clipboard fs-1"
                                                            style={{
                                                                color: "#95a5a6",
                                                            }}
                                                        ></i>
                                                    </div>
                                                </div>
                                                <h5
                                                    className="fw-bold mb-2"
                                                    style={{ color: "#2c3e50" }}
                                                >
                                                    Belum Ada Pendaftaran
                                                </h5>
                                                <p className="text-muted mb-4">
                                                    Anda belum pernah mendaftar
                                                    program SIG.
                                                </p>
                                                {!canRegisterForSIG && (
                                                    <div
                                                        className="alert border-0 mb-4"
                                                        style={{
                                                            backgroundColor:
                                                                "#fde8e8",
                                                            borderLeft:
                                                                "4px solid #e74c3c",
                                                        }}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <i
                                                                className="bi bi-exclamation-triangle fs-4 me-3"
                                                                style={{
                                                                    color: "#e74c3c",
                                                                }}
                                                            ></i>
                                                            <p
                                                                className="mb-0 small"
                                                                style={{
                                                                    color: "#721c24",
                                                                }}
                                                            >
                                                                <strong>
                                                                    Perhatian:
                                                                </strong>{" "}
                                                                Anda belum dapat
                                                                mendaftar karena
                                                                belum memenuhi
                                                                syarat.
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                                {canRegisterForSIG && (
                                                    <div
                                                        className="alert border-0"
                                                        style={{
                                                            backgroundColor:
                                                                "#e8f4fd",
                                                            borderLeft:
                                                                "4px solid #3498db",
                                                        }}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <i
                                                                className="bi bi-lightbulb fs-4 me-3"
                                                                style={{
                                                                    color: "#3498db",
                                                                }}
                                                            ></i>
                                                            <p
                                                                className="mb-0 small"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                <strong>
                                                                    Mulai
                                                                    Sekarang:
                                                                </strong>{" "}
                                                                Daftar untuk SIG{" "}
                                                                {currentYear}{" "}
                                                                dan ikuti
                                                                program
                                                                pengembangan
                                                                generasi muda
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Informasi Penting */}
                                        <div className="mt-4">
                                            <div
                                                className="alert border-0 shadow-sm"
                                                style={{
                                                    backgroundColor: "#e8f6f3",
                                                    borderLeft:
                                                        "4px solid #1abc9c",
                                                }}
                                            >
                                                <h6
                                                    className="alert-heading fw-bold mb-3"
                                                    style={{ color: "#0d6254" }}
                                                >
                                                    <i className="bi bi-exclamation-circle me-2"></i>
                                                    Persyaratan SIG
                                                </h6>
                                                <div className="row g-2">
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start mb-2">
                                                            <i
                                                                className="bi bi-credit-card me-2 mt-1"
                                                                style={{
                                                                    color: "#27ae60",
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="small"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                Status
                                                                pembayaran harus{" "}
                                                                <strong>
                                                                    PAID
                                                                </strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start mb-2">
                                                            <i
                                                                className="bi bi-award me-2 mt-1"
                                                                style={{
                                                                    color: "#f39c12",
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="small"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                <strong>
                                                                    ATAU
                                                                </strong>{" "}
                                                                berstatus
                                                                Anggota
                                                                Kehormatan
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start mb-2">
                                                            <i
                                                                className="bi bi-calendar-check me-2 mt-1"
                                                                style={{
                                                                    color: "#3498db",
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="small"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                Pendaftaran
                                                                berlaku per
                                                                tahun kalender
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start">
                                                            <i
                                                                className="bi bi-arrow-repeat me-2 mt-1"
                                                                style={{
                                                                    color: "#3498db",
                                                                }}
                                                            ></i>
                                                            <span
                                                                className="small"
                                                                style={{
                                                                    color: "#2c3e50",
                                                                }}
                                                            >
                                                                Reset otomatis
                                                                setiap 1 Januari
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
