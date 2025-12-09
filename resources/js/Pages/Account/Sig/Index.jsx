//import react
import React, { useState, useEffect, useRef } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import html2canvas from "html2canvas";

// Import SweetAlert2
import Swal from "sweetalert2";

export default function SigIndex() {
    const { sig, errors, user, allSigs } = usePage().props;
    const { flash } = usePage().props;

    const [tahun, setTahun] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatingCard, setGeneratingCard] = useState(false);
    const [currentYear] = useState(new Date().getFullYear());
    const [nextYear] = useState(new Date().getFullYear() + 1);

    // Ref untuk kartu yang akan di-generate
    const cardRef = useRef(null);

    // Set tahun default ke tahun berjalan
    useEffect(() => {
        setTahun(currentYear);
    }, [currentYear]);

    // Debug: Cek semua data SIG
    useEffect(() => {
        console.log("=== DEBUG SIG DATA ===");
        console.log("All SIGs from controller:", allSigs);
        console.log("Current SIG from controller:", sig);
        console.log("Current Year:", currentYear, "Type:", typeof currentYear);
        console.log("User:", user);

        // Cari SIG untuk tahun ini dari allSigs
        const sigForCurrentYear = allSigs?.find(
            (s) => parseInt(s.tahun) === currentYear,
        );
        console.log("SIG for current year (from allSigs):", sigForCurrentYear);

        // Log kondisi
        console.log("Has SIG data:", !!sig);
        console.log("SIG tahun:", sig?.tahun, "Type:", typeof sig?.tahun);
        console.log("SIG status:", sig?.status);
        console.log(
            "Match current year (with parseInt):",
            sig && parseInt(sig.tahun) === currentYear,
        );
        console.log("Is approved:", sig?.status === "approved");
        console.log(
            "Should show card:",
            sig &&
                parseInt(sig.tahun) === currentYear &&
                sig.status === "approved",
        );
        console.log("=== END DEBUG ===");
    }, [sig, allSigs, currentYear, user]);

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
                link.download = `Kartu-SIG-${user?.name || "anggota"}-${currentYear}.jpg`;
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
                    {/* Temporary Debug View - HAPUS NANTI */}
                    <div className="alert alert-info mb-3">
                        <h6>Debug Information:</h6>
                        <ul className="mb-0">
                            <li>
                                <strong>Current Year:</strong> {currentYear}{" "}
                                (type: {typeof currentYear})
                            </li>
                            <li>
                                <strong>Current SIG Data:</strong>{" "}
                                {JSON.stringify(currentSig)}
                            </li>
                            <li>
                                <strong>SIG Tahun:</strong> {currentSig?.tahun}{" "}
                                (type: {typeof currentSig?.tahun})
                            </li>
                            <li>
                                <strong>SIG Status:</strong>{" "}
                                {currentSig?.status}
                            </li>
                            <li>
                                <strong>User:</strong> {user?.name}
                            </li>
                            <li>
                                <strong>
                                    Has Registered for Current Year:
                                </strong>
                                {hasRegisteredForCurrentYear ? "YES" : "NO"}
                                (Compare: {parseInt(
                                    currentSig?.tahun || 0,
                                )} === {currentYear} ={" "}
                                {parseInt(currentSig?.tahun || 0) ===
                                currentYear
                                    ? "true"
                                    : "false"}
                                )
                            </li>
                            <li>
                                <strong>Is Status Approved:</strong>{" "}
                                {isStatusApproved ? "YES" : "NO"}
                            </li>
                            <li>
                                <strong>Should Show Card:</strong>{" "}
                                {shouldShowCard ? "YES" : "NO"}
                            </li>
                        </ul>
                    </div>
                    {/* End Debug View */}

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
                                        className={`badge ${getStatusClass(currentSig.status).badge} fs-6 px-3 py-2 shadow-sm`}
                                    >
                                        <i
                                            className={`bi ${getStatusClass(currentSig.status).icon} me-1`}
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
                                                    ),
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

                                        {/* Kartu yang akan di-generate */}
                                        <div
                                            ref={cardRef}
                                            className="mx-auto"
                                            style={{
                                                width: "600px",
                                                maxWidth: "100%",
                                                border: "1px solid #ddd",
                                                borderRadius: "15px",
                                                overflow: "hidden",
                                                backgroundColor: "white",
                                                boxShadow:
                                                    "0 10px 30px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            {/* Header Kartu - VERSI DIPERBAIKI */}
                                            <div
                                                style={{
                                                    backgroundColor: "#2c3e50",
                                                    color: "white",
                                                    padding:
                                                        "25px 20px 15px 20px", // Padding atas lebih besar untuk logo
                                                    textAlign: "center",
                                                    position: "relative",
                                                    marginBottom: "25px", // Menambahkan margin bottom yang signifikan
                                                    borderBottom:
                                                        "3px solid #3498db", // Garis pembatas di bawah
                                                }}
                                            >
                                                {/* Logo di kiri atas - diperbaiki */}
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "15px",
                                                        left: "20px",
                                                        width: "70px",
                                                        height: "70px",
                                                        backgroundColor:
                                                            "white",
                                                        borderRadius: "8px",
                                                        padding: "8px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        boxShadow:
                                                            "0 2px 10px rgba(0,0,0,0.2)",
                                                        border: "2px solid #3498db", // Border untuk logo
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
                                                        onErrorCapture={(e) => {
                                                            e.target.onerror =
                                                                null;
                                                            e.target.src =
                                                                "data:image/svg+xml;base64," +
                                                                btoa(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <rect width="100" height="100" fill="#2c3e50"/>
                        <text x="50" y="50" text-anchor="middle" fill="white" font-family="Arial" font-size="24" dy=".3em">IKATWI</text>
                    </svg>
                `);
                                                        }}
                                                    />
                                                </div>

                                                {/* Logo di kanan atas - untuk simetri */}
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "15px",
                                                        right: "20px",
                                                        width: "70px",
                                                        height: "70px",
                                                        backgroundColor:
                                                            "rgba(255,255,255,0.1)",
                                                        borderRadius: "8px",
                                                        padding: "8px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        border: "2px dashed rgba(255,255,255,0.3)",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            color: "rgba(255,255,255,0.8)",
                                                            fontSize: "10px",
                                                            textAlign: "center",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        TAHUN
                                                        <br />
                                                        {currentSig.tahun}
                                                    </div>
                                                </div>

                                                {/* Text utama */}
                                                <div
                                                    style={{
                                                        margin: "0 100px",
                                                    }}
                                                >
                                                    {" "}
                                                    {/* Memberikan ruang untuk logo di kiri dan kanan */}
                                                    <h2
                                                        style={{
                                                            fontWeight: "800",
                                                            fontSize: "32px",
                                                            marginBottom: "5px",
                                                            letterSpacing:
                                                                "1px",
                                                            textShadow:
                                                                "1px 1px 3px rgba(0,0,0,0.3)",
                                                        }}
                                                    >
                                                        KARTU ANGGOTA SIG
                                                    </h2>
                                                    <p
                                                        style={{
                                                            opacity: "0.95",
                                                            fontSize: "17px",
                                                            marginBottom: "5px",
                                                            fontWeight: "300",
                                                            letterSpacing:
                                                                "0.5px",
                                                        }}
                                                    >
                                                        Sistem Informasi
                                                        Generasi
                                                    </p>
                                                    <p
                                                        style={{
                                                            opacity: "0.9",
                                                            fontSize: "15px",
                                                            marginBottom: "0",
                                                            fontWeight: "500",
                                                            color: "#3498db", // Warna biru untuk highlight
                                                        }}
                                                    >
                                                        IKATWI -{" "}
                                                        {currentSig.tahun}
                                                    </p>
                                                </div>

                                                {/* Dekorasi tambahan */}
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        bottom: "-3px",
                                                        left: "0",
                                                        right: "0",
                                                        height: "3px",
                                                        background:
                                                            "linear-gradient(90deg, #3498db 0%, #2c3e50 50%, #3498db 100%)",
                                                        borderRadius:
                                                            "0 0 15px 15px",
                                                    }}
                                                ></div>
                                            </div>

                                            {/* Body Kartu */}
                                            <div style={{ padding: "30px" }}>
                                                <div className="row">
                                                    {/* Kolom Kiri - Data Pribadi */}
                                                    <div className="col-8">
                                                        <div className="mb-4">
                                                            <h3
                                                                style={{
                                                                    color: "#2c3e50",
                                                                    fontWeight:
                                                                        "bold",
                                                                    fontSize:
                                                                        "24px",
                                                                    marginBottom:
                                                                        "10px",
                                                                }}
                                                            >
                                                                {user?.name ||
                                                                    "Nama Anggota"}
                                                            </h3>
                                                            <div
                                                                style={{
                                                                    borderBottom:
                                                                        "2px solid #3498db",
                                                                    width: "100px",
                                                                    marginBottom:
                                                                        "20px",
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <div className="row mb-3">
                                                            <div className="col-6">
                                                                <p
                                                                    style={{
                                                                        color: "#7f8c8d",
                                                                        marginBottom:
                                                                            "5px",
                                                                        fontSize:
                                                                            "14px",
                                                                    }}
                                                                >
                                                                    <i className="bi bi-person-badge me-2"></i>
                                                                    ID Anggota
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        color: "#2c3e50",
                                                                        fontWeight:
                                                                            "bold",
                                                                        fontSize:
                                                                            "18px",
                                                                    }}
                                                                >
                                                                    #
                                                                    {currentSig.id
                                                                        .toString()
                                                                        .padStart(
                                                                            5,
                                                                            "0",
                                                                        )}
                                                                </p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p
                                                                    style={{
                                                                        color: "#7f8c8d",
                                                                        marginBottom:
                                                                            "5px",
                                                                        fontSize:
                                                                            "14px",
                                                                    }}
                                                                >
                                                                    <i className="bi bi-calendar-event me-2"></i>
                                                                    Tahun
                                                                    Program
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        color: "#2c3e50",
                                                                        fontWeight:
                                                                            "bold",
                                                                        fontSize:
                                                                            "18px",
                                                                    }}
                                                                >
                                                                    {
                                                                        currentSig.tahun
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-3">
                                                            <div className="col-6">
                                                                <p
                                                                    style={{
                                                                        color: "#7f8c8d",
                                                                        marginBottom:
                                                                            "5px",
                                                                        fontSize:
                                                                            "14px",
                                                                    }}
                                                                >
                                                                    <i className="bi bi-calendar-check me-2"></i>
                                                                    Tanggal
                                                                    Bergabung
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        color: "#2c3e50",
                                                                        fontWeight:
                                                                            "bold",
                                                                        fontSize:
                                                                            "16px",
                                                                    }}
                                                                >
                                                                    {formatDateForCard(
                                                                        currentSig.created_at,
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p
                                                                    style={{
                                                                        color: "#7f8c8d",
                                                                        marginBottom:
                                                                            "5px",
                                                                        fontSize:
                                                                            "14px",
                                                                    }}
                                                                >
                                                                    <i className="bi bi-shield-check me-2"></i>
                                                                    Status
                                                                </p>
                                                                <span
                                                                    className="badge bg-success"
                                                                    style={{
                                                                        fontSize:
                                                                            "14px",
                                                                        padding:
                                                                            "8px 15px",
                                                                    }}
                                                                >
                                                                    ANGGOTA
                                                                    AKTIF
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {user?.email && (
                                                            <div className="mb-3">
                                                                <p
                                                                    style={{
                                                                        color: "#7f8c8d",
                                                                        marginBottom:
                                                                            "5px",
                                                                        fontSize:
                                                                            "14px",
                                                                    }}
                                                                >
                                                                    <i className="bi bi-envelope me-2"></i>
                                                                    Email
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        color: "#2c3e50",
                                                                        fontWeight:
                                                                            "bold",
                                                                        fontSize:
                                                                            "16px",
                                                                    }}
                                                                >
                                                                    {user.email}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Kolom Kanan - QR Code */}
                                                    <div className="col-4 text-center">
                                                        <div
                                                            style={{
                                                                backgroundColor:
                                                                    "#f8f9fa",
                                                                padding: "20px",
                                                                borderRadius:
                                                                    "10px",
                                                                border: "1px dashed #ddd",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: "120px",
                                                                    height: "120px",
                                                                    backgroundColor:
                                                                        "#f8f9fa",
                                                                    margin: "0 auto 15px",
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "center",
                                                                    fontSize:
                                                                        "12px",
                                                                    color: "#7f8c8d",
                                                                }}
                                                            >
                                                                [QR Code]
                                                            </div>
                                                            <p
                                                                style={{
                                                                    fontSize:
                                                                        "12px",
                                                                    color: "#7f8c8d",
                                                                    marginBottom:
                                                                        "0",
                                                                }}
                                                            >
                                                                Scan untuk
                                                                verifikasi
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Footer Kartu */}
                                                <div
                                                    style={{
                                                        marginTop: "30px",
                                                        paddingTop: "20px",
                                                        borderTop:
                                                            "1px solid #eee",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            color: "#7f8c8d",
                                                            fontSize: "12px",
                                                            marginBottom: "5px",
                                                        }}
                                                    >
                                                        <i className="bi bi-info-circle me-1"></i>
                                                        Kartu ini berlaku selama
                                                        periode program SIG{" "}
                                                        {currentSig.tahun}
                                                    </p>
                                                    <p
                                                        style={{
                                                            color: "#7f8c8d",
                                                            fontSize: "11px",
                                                            marginBottom: "0",
                                                        }}
                                                    >
                                                        Dikeluarkan oleh: IKATWI
                                                        - Sistem Informasi
                                                        Generasi
                                                    </p>
                                                </div>
                                            </div>
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
                                                            {currentYear}. Anda
                                                            dapat mengunduhnya
                                                            sebagai gambar JPG
                                                            untuk keperluan
                                                            administratif.
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
                                        {/* TAMPILKAN FORM JIKA BELUM DAFTAR UNTUK TAHUN INI */}
                                        {!hasRegisteredForCurrentYear ? (
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
                                                                    e,
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
                                                                    e,
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
                                        ) : (
                                            /* TAMPILAN JIKA SUDAH DAFTAR TAPI STATUS BUKAN APPROVED */
                                            <div className="text-center py-5">
                                                <div className="mb-4">
                                                    <div
                                                        className={`rounded-circle d-inline-flex p-4 ${getStatusClass(currentSig.status).bg}`}
                                                    >
                                                        <i
                                                            className={`bi ${getStatusClass(currentSig.status).icon} fs-1 ${getStatusClass(currentSig.status).text}`}
                                                        ></i>
                                                    </div>
                                                </div>
                                                <h4
                                                    className="fw-bold mb-3"
                                                    style={{ color: "#2c3e50" }}
                                                >
                                                    <i
                                                        className={`bi ${getStatusClass(currentSig.status).icon} me-2 ${getStatusClass(currentSig.status).text}`}
                                                    ></i>
                                                    {getStatusLabel(
                                                        currentSig.status,
                                                    )}{" "}
                                                    untuk {currentYear}
                                                </h4>

                                                <div
                                                    className={`alert border-0 mx-auto mb-4 ${getStatusClass(currentSig.status).bg}`}
                                                    style={{
                                                        maxWidth: "500px",
                                                        borderLeft: `4px solid ${currentSig.status === "pending" ? "#f39c12" : currentSig.status === "approved" ? "#27ae60" : "#e74c3c"}`,
                                                    }}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i
                                                            className={`bi ${getStatusClass(currentSig.status).icon} fs-4 me-3 ${getStatusClass(currentSig.status).text}`}
                                                        ></i>
                                                        <div className="text-start">
                                                            <h6
                                                                className="alert-heading mb-1 fw-bold"
                                                                style={getStatusClass(
                                                                    currentSig.status,
                                                                )}
                                                            >
                                                                Status
                                                                Pendaftaran
                                                            </h6>
                                                            <p
                                                                className="mb-0"
                                                                style={getStatusClass(
                                                                    currentSig.status,
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
                                        )}
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
                                        {currentSig ? (
                                            <div
                                                className={`rounded-3 p-4 ${getStatusClass(currentSig.status).bg} border ${getStatusClass(currentSig.status).border}`}
                                            >
                                                <div className="text-center mb-4">
                                                    <div className="mb-3">
                                                        <div
                                                            className={`rounded-circle d-inline-flex p-3 ${getStatusClass(currentSig.status).bg}`}
                                                        >
                                                            <i
                                                                className={`bi ${getStatusClass(currentSig.status).icon} fs-1 ${getStatusClass(currentSig.status).text}`}
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
                                                        className={`badge ${getStatusClass(currentSig.status).badge} px-3 py-2 fs-6 mb-3 shadow-sm`}
                                                    >
                                                        {getStatusLabel(
                                                            currentSig.status,
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
                                                                    currentSig.created_at,
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    },
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
                                                                    currentSig.updated_at,
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    },
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
                                                                Mulai Sekarang:
                                                            </strong>{" "}
                                                            Daftar untuk SIG{" "}
                                                            {currentYear} dan
                                                            ikuti program
                                                            pengembangan
                                                            generasi muda
                                                        </p>
                                                    </div>
                                                </div>
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
                                                    Cara Kerja Sistem
                                                </h6>
                                                <div className="row g-2">
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
                                                        <div className="d-flex align-items-start mb-2">
                                                            <i
                                                                className="bi bi-check-circle me-2 mt-1"
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
                                                                Status{" "}
                                                                <strong>
                                                                    approved
                                                                </strong>{" "}
                                                                menampilkan
                                                                kartu anggota
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start mb-2">
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
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start mb-2">
                                                            <i
                                                                className="bi bi-clock me-2 mt-1"
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
                                                                Tombol daftar
                                                                muncul lagi di
                                                                tahun baru
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-start">
                                                            <i
                                                                className="bi bi-database me-2 mt-1"
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
                                                                Data pendaftaran
                                                                disimpan sebagai
                                                                riwayat
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
