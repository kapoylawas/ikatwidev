//import React
import React, { useRef, useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import component Head and usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import hasAnyPermission from "../../../Utils/Permissions";

import Chart from "react-apexcharts";
import html2canvas from "html2canvas";
import { QRCodeSVG } from "qrcode.react";
import Swal from "sweetalert2";

export default function Dashboard() {
    //destruct props - PERUBAHAN: Gunakan nilai default untuk props yang undefined
    const {
        auth,
        count,
        usersCountByProvince,
        usersCountByProvincebyBekerja,
        sig,
        transactions = [],
        isPaid = false,
        isAnggotaKehormatan = false,
        canShowSigCard = false,
        currentYear = new Date().getFullYear().toString(),
    } = usePage().props;

    console.log("=== DEBUG PAYMENT STATUS ===");
    console.log("isPaid:", isPaid);
    console.log("isAnggotaKehormatan:", isAnggotaKehormatan);
    console.log("canShowSigCard:", canShowSigCard);
    console.log("Transaksi:", transactions);
    console.log("Current Year:", currentYear);

    // Log detail transaksi
    if (transactions && transactions.length > 0) {
        console.log("Transaction status:", transactions[0].status);
        console.log("Transaction year:", transactions[0].tahun);
    }
    console.log("============================");

    const [generatingCard, setGeneratingCard] = useState(false);
    const cardRef = useRef(null);

    // Fungsi untuk mengecek status pembayaran berdasarkan transaksi
    const checkPaymentStatus = () => {
        // Cek apakah ada transaksi PAID untuk tahun berjalan
        if (!transactions || transactions.length === 0) {
            console.log("Tidak ada transaksi");
            return false;
        }

        const currentYearTransaction = transactions.find(
            (trans) => trans.tahun === currentYear.toString()
        );

        console.log("Current Year Transaction:", currentYearTransaction);

        if (currentYearTransaction) {
            console.log(
                "Found transaction for current year:",
                currentYearTransaction.status
            );
            return currentYearTransaction.status === "PAID";
        }

        // Jika tidak ada transaksi untuk tahun ini, cek transaksi terakhir
        const latestTransaction = transactions[0];
        console.log("Latest Transaction:", latestTransaction);
        console.log("Latest Transaction Status:", latestTransaction?.status);

        return latestTransaction?.status === "PAID";
    };

    // Tentukan status pembayaran user
    const isUserPaid = isPaid || checkPaymentStatus();
    console.log("isUserPaid FINAL:", isUserPaid);

    // Tentukan apakah user bisa melihat kartu SIG
    const canShowCard = canShowSigCard || isUserPaid || isAnggotaKehormatan;
    console.log("canShowCard:", canShowCard);

    // Jika tidak ada data, tampilkan loading atau pesan error
    if (!auth) {
        return (
            <LayoutAccount>
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Memuat data...</p>
                </div>
            </LayoutAccount>
        );
    }

    // Cek apakah ada data untuk chart (jika tidak, gunakan array kosong)
    const provinceLabels =
        usersCountByProvince?.map((item) => item.province_name) || [];
    const provinceCounts =
        usersCountByProvince?.map((item) => item.user_count) || [];
    const categories = [...provinceLabels];

    const provinceNames =
        usersCountByProvincebyBekerja?.map((item) => item.province_name) || [];
    const belumBekerjaCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.belum_bekerja) || 0
        ) || [];
    const freelanceCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.freelance) || 0
        ) || [];
    const klinikSwastaCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.klinik_swasta) || 0
        ) || [];
    const perguruanTinggiCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.perguruan_tinggi) || 0
        ) || [];
    const puskesmasCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.puskesmas_count) || 0
        ) || [];
    const rumahSakitKhususCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.rumah_sakit_khusus) || 0
        ) || [];
    const rumahSakitMiliterCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.rumah_sakit_militer) || 0
        ) || [];
    const rumahSakitSwastaCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.rumah_sakit_swasta) || 0
        ) || [];
    const rumahSakitUmumDaerahCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.rumah_sakit_umum_daerah) || 0
        ) || [];
    const rumahSakitUmumPusatCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.rumah_sakit_umum_pusat) || 0
        ) || [];
    const sekolahLuarBiasaCounts =
        usersCountByProvincebyBekerja?.map(
            (item) => parseInt(item.sekolah_luar_biasa) || 0
        ) || [];

    // Function to generate random colors
    const getRandomColorPie = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to generate random colors
    const generateRandomColors = (count) => {
        return Array.from({ length: count }, () => getRandomColorPie());
    };

    // Data untuk grafik bar
    const barChartByBekerjaOptions = {
        chart: {
            type: "bar",
            height: 550,
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                },
            },
        },
        xaxis: {
            categories: provinceNames,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: "55%",
                endingShape: "rounded",
                dataLabels: {
                    position: "center",
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#000"],
                fontSize: "12px",
                fontWeight: "bold",
            },
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            fontSize: "14px",
            fontWeight: 600,
        },
        colors: [
            "#3B82F6",
            "#10B981",
            "#8B5CF6",
            "#F59E0B",
            "#EF4444",
            "#06B6D4",
            "#84CC16",
            "#F97316",
            "#6366F1",
            "#EC4899",
            "#14B8A6",
            "#78716C",
        ],
    };

    // Create series data for the new bar chart
    const barChartByBekerjaSeriesData = [
        {
            name: "Belum Bekerja",
            data: belumBekerjaCounts,
        },
        {
            name: "Freelance",
            data: freelanceCounts,
        },
        {
            name: "Klinik Swasta",
            data: klinikSwastaCounts,
        },
        {
            name: "Perguruan Tinggi",
            data: perguruanTinggiCounts,
        },
        {
            name: "Puskesmas",
            data: puskesmasCounts,
        },
        {
            name: "Rumah Sakit Khusus",
            data: rumahSakitKhususCounts,
        },
        {
            name: "Rumah Sakit Militer",
            data: rumahSakitMiliterCounts,
        },
        {
            name: "Rumah Sakit Swasta",
            data: rumahSakitSwastaCounts,
        },
        {
            name: "Rumah Sakit Umum Daerah",
            data: rumahSakitUmumDaerahCounts,
        },
        {
            name: "Rumah Sakit Umum Pusat",
            data: rumahSakitUmumPusatCounts,
        },
        {
            name: "Sekolah Luar Biasa",
            data: sekolahLuarBiasaCounts,
        },
    ];

    // Create series data with random colors
    const seriesData = [
        {
            name: "Jumlah Pengguna",
            data: provinceCounts,
        },
    ];

    // Data for the bar chart
    const barChartOptions = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: true,
            },
        },
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    fontSize: "12px",
                    fontWeight: 600,
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "12px",
                colors: ["#000"],
            },
        },
        colors: [
            "#3B82F6",
            "#10B981",
            "#8B5CF6",
            "#F59E0B",
            "#EF4444",
            "#06B6D4",
            "#84CC16",
        ],
    };

    // Common pie chart options
    const pieChartOptions = (labels) => ({
        chart: {
            type: "pie",
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                },
            },
        },
        labels: labels,
        colors: generateRandomColors(labels.length),
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: "bottom",
                        fontSize: "10px",
                    },
                },
            },
        ],
        legend: {
            position: "bottom",
            fontSize: "12px",
            fontWeight: 600,
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "11px",
                fontWeight: "bold",
            },
            dropShadow: {
                enabled: false,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
    });

    // Status pekerjaan - gunakan nilai default jika count undefined
    const statusPekerjaan = {
        series: [
            count?.pns || 0,
            count?.swasta || 0,
            count?.kontrak || 0,
            count?.pppk || 0,
            count?.belumBekerja || 0,
        ],
        options: pieChartOptions([
            `PNS: ${count?.pns || 0}`,
            `Swasta: ${count?.swasta || 0}`,
            `BLU/KONTRAK: ${count?.kontrak || 0}`,
            `PPPK: ${count?.pppk || 0}`,
            `Belum Bekerja: ${count?.belumBekerja || 0}`,
        ]),
    };

    // lulusan univ
    const lulusanUniv = {
        series: [
            count?.poltekesKemenkesSurakarta || 0,
            count?.akademiTerapiWicaraYayasanBinaWicaraJakarta || 0,
            count?.politeknikAlIslamBandung || 0,
            count?.stikesMercubaktijayaPadang || 0,
            count?.lainLain || 0,
        ],
        options: pieChartOptions([
            `Poltekes Kemenkes: ${count?.poltekesKemenkesSurakarta || 0}`,
            `Akademi Terapi Wicara: ${
                count?.akademiTerapiWicaraYayasanBinaWicaraJakarta || 0
            }`,
            `Politeknik AL Islam: ${count?.politeknikAlIslamBandung || 0}`,
            `Stikes Mercubaktijaya: ${count?.stikesMercubaktijayaPadang || 0}`,
            `Lain-Lain: ${count?.lainLain || 0}`,
        ]),
    };

    // tempat bekerja
    const tempatBekerja = {
        series: [
            count?.klinikSwasta || 0,
            count?.rumahSakitSwasta || 0,
            count?.rumahSakitUmumPusat || 0,
            count?.rumahSakitUmumDaerah || 0,
            count?.rumahSakitMiliter || 0,
            count?.rumahSakitKhusus || 0,
            count?.puskesmas || 0,
            count?.sekolahLuarBiasa || 0,
            count?.perguruanTinggi || 0,
            count?.belum_bekerja || 0,
            count?.freelance || 0,
            count?.lainnya || 0,
        ],
        options: pieChartOptions([
            `Klinik Swasta: ${count?.klinikSwasta || 0}`,
            `RS Swasta: ${count?.rumahSakitSwasta || 0}`,
            `RS Umum Pusat: ${count?.rumahSakitUmumPusat || 0}`,
            `RS Umum Daerah: ${count?.rumahSakitUmumDaerah || 0}`,
            `RS Militer: ${count?.rumahSakitMiliter || 0}`,
            `RS Khusus: ${count?.rumahSakitKhusus || 0}`,
            `Puskesmas: ${count?.puskesmas || 0}`,
            `SLB: ${count?.sekolahLuarBiasa || 0}`,
            `Perguruan Tinggi: ${count?.perguruanTinggi || 0}`,
            `Belum Bekerja: ${count?.belum_bekerja || 0}`,
            `Freelance: ${count?.freelance || 0}`,
            `Lainnya: ${count?.lainnya || 0}`,
        ]),
    };

    // jenjang pendidikan
    const jenjangPendidikan = {
        series: [
            count?.D3 || 0,
            count?.D4 || 0,
            count?.S2 || 0,
            count?.S3 || 0,
        ],
        options: pieChartOptions([
            `DIII: ${count?.D3 || 0}`,
            `DIV: ${count?.D4 || 0}`,
            `S2: ${count?.S2 || 0}`,
            `S3: ${count?.S3 || 0}`,
        ]),
    };

    // kelengkapan data
    const dataKelengkapan = {
        series: [
            count?.kelengkapan || 0,
            count?.countSIP || 0,
            count?.countSTR || 0,
        ],
        options: pieChartOptions([
            `Data Lengkap: ${count?.kelengkapan || 0}`,
            `Memiliki SIP: ${count?.countSIP || 0}`,
            `Memiliki STR: ${count?.countSTR || 0}`,
        ]),
    };

    const dataIuran = {
        series: [count?.paidUsersCount || 0, count?.unpaidUsersCount || 0],
        options: pieChartOptions([
            `Sudah Bayar ${currentYear}: ${count?.paidUsersCount || 0}`,
            `Belum Bayar ${currentYear}: ${count?.unpaidUsersCount || 0}`,
        ]),
    };

    // Format tanggal untuk kartu
    const formatDateForCard = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    // Fungsi untuk generate kartu sebagai gambar - DIPERBAIKI
    const generateCardImage = () => {
        // Cek status pembayaran menggunakan fungsi yang sudah diperbaiki
        if (!isUserPaid && !isAnggotaKehormatan) {
            const status = transactions?.[0]?.status || "NO TRANSACTION";
            Swal.fire({
                title: "Akses Ditolak!",
                text: `Anda tidak dapat mengunduh kartu karena status pembayaran belum PAID. Status: ${status}`,
                icon: "error",
                confirmButtonText: "Mengerti",
            });
            return;
        }

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
                    auth?.user?.name || "anggota"
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

    return (
        <>
            <Head>
                <title>Dashboard - IKATWI</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
                />
            </Head>
            <LayoutAccount>
                {/* Welcome Section */}
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="welcome-card bg-gradient-primary text-white border-0 shadow-lg rounded-3 p-4 mb-4">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h4 className="mb-1">
                                        Selamat Datang,{" "}
                                        <strong>
                                            {auth.user?.name || "Anggota"}
                                        </strong>
                                        !
                                    </h4>
                                    <p className="mb-0 opacity-75">
                                        Sistem Informasi IKATWI - Terapi Wicara
                                        Indonesia
                                    </p>
                                </div>
                                <div className="welcome-icon">
                                    <i className="fas fa-user-circle fa-3x opacity-75"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SIMPLIFIED LOGIC: Tampilkan kartu jika ada transaksi PAID */}
                {isUserPaid && sig && (
                    <div className="row mb-4">
                        <div className="col-12">
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
                                                    style={{ color: "#2c3e50" }}
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
                                    {/* Kartu yang akan di-generate */}
                                    <div
                                        ref={cardRef}
                                        className="mx-auto sig-card-container"
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
                                                justifyContent: "space-between",
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
                                                    backgroundColor: "white",
                                                    borderRadius: "8px",
                                                    padding: "5px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
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
                                                        objectFit: "contain",
                                                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                                                    }}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
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
                                                        letterSpacing: "1px",
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
                                                        letterSpacing: "0.5px",
                                                        lineHeight: "1.2",
                                                    }}
                                                >
                                                    IKATWI -{" "}
                                                    {sig?.tahun || currentYear}
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
                                                    justifyContent: "center",
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
                                                    {sig?.tahun || currentYear}
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
                                                {/* Kolom Kiri - Data Pribadi (70%) */}
                                                <div
                                                    style={{
                                                        flex: 7,
                                                        display: "flex",
                                                        flexDirection: "column",
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
                                                                    {auth?.user?.name?.toUpperCase() ||
                                                                        "NAMA ANGGOTA"}
                                                                </h3>
                                                            </div>

                                                            {/* Nomor Anggota dengan Badge di samping */}
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "space-between",
                                                                    marginLeft:
                                                                        "32px",
                                                                    marginTop:
                                                                        "3px",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
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
                                                                        {auth?.user?.no_anggota
                                                                            ?.toString()
                                                                            .padStart(
                                                                                6,
                                                                                "0"
                                                                            ) ||
                                                                            "000000"}
                                                                    </span>
                                                                </div>

                                                                {/* Badge ANGGOTA AKTIF di samping nomor anggota */}
                                                                <div
                                                                    className="badge"
                                                                    style={{
                                                                        backgroundColor:
                                                                            "#27ae60",
                                                                        color: "white",
                                                                        fontSize:
                                                                            "10px",
                                                                        padding:
                                                                            "4px 8px",
                                                                        borderRadius:
                                                                            "10px",
                                                                        fontWeight:
                                                                            "700",
                                                                        display:
                                                                            "inline-flex",
                                                                        alignItems:
                                                                            "center",
                                                                        letterSpacing:
                                                                            "0.3px",
                                                                        boxShadow:
                                                                            "0 1px 3px rgba(39, 174, 96, 0.3)",
                                                                        whiteSpace:
                                                                            "nowrap",
                                                                        marginLeft:
                                                                            "15px",
                                                                    }}
                                                                >
                                                                    <i
                                                                        className="bi bi-shield-check me-1"
                                                                        style={{
                                                                            fontSize:
                                                                                "9px",
                                                                        }}
                                                                    ></i>
                                                                    ANGGOTA
                                                                    AKTIF
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Jenis SIG */}
                                                        <div
                                                            style={{
                                                                marginBottom:
                                                                    "15px",
                                                            }}
                                                        >
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
                                                                    className="bi bi-tags me-2"
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
                                                                    JENIS SIG
                                                                </span>
                                                            </div>
                                                            <p
                                                                style={{
                                                                    color: "#3498db",
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
                                                                {sig?.jenis_sig ||
                                                                    "-"}
                                                            </p>
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
                                                                display: "grid",
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
                                                                    {auth?.user
                                                                        ?.email ||
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
                                                                        sig?.created_at ||
                                                                            new Date()
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
                                                                    31 DESEMBER{" "}
                                                                    {sig?.tahun ||
                                                                        currentYear}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Footer di kolom kiri */}
                                                    <div
                                                        style={{
                                                            textAlign: "left",
                                                            borderTop:
                                                                "1px solid #ddd",
                                                            paddingTop: "8px",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                color: "#2c3e50",
                                                                fontSize: "9px",
                                                                margin: "0",
                                                                fontWeight:
                                                                    "700",
                                                                letterSpacing:
                                                                    "0.5px",
                                                                textTransform:
                                                                    "uppercase",
                                                            }}
                                                        >
                                                            SISTEM INFORMASI
                                                            GENERASI - IKATWI
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Kolom Kanan - Foto dan QR Code */}
                                                <div
                                                    style={{
                                                        flex: 3,
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                        minWidth: "170px",
                                                    }}
                                                >
                                                    {/* FOTO - TANPA TULISAN "FOTO ANGGOTA" */}
                                                    <div
                                                        style={{
                                                            width: "155px",
                                                            height: "200px",
                                                            backgroundColor:
                                                                "white",
                                                            borderRadius: "8px",
                                                            border: "2px solid #3498db",
                                                            overflow: "hidden",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                            boxShadow:
                                                                "0 3px 10px rgba(52, 152, 219, 0.15)",
                                                        }}
                                                    >
                                                        {auth?.user?.image ? (
                                                            <img
                                                                src={
                                                                    auth.user
                                                                        .image
                                                                }
                                                                alt="Foto Profil"
                                                                style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit:
                                                                        "cover",
                                                                    objectPosition:
                                                                        "center center",
                                                                }}
                                                                onError={(
                                                                    e
                                                                ) => {
                                                                    e.target.style.display =
                                                                        "none";
                                                                    e.target.parentElement.innerHTML = `
                                                    <div style="text-align: center; color: #666; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #f8f9fa;">
                                                        <i class="bi bi-person" style="font-size: 50px; margin-bottom: 10px; color: #95a5a6;"></i>
                                                        <div style="font-size: 11px; color: #7f8c8d;">Foto tidak tersedia</div>
                                                    </div>
                                                `;
                                                                }}
                                                            />
                                                        ) : (
                                                            <div
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                    color: "#666",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    display:
                                                                        "flex",
                                                                    flexDirection:
                                                                        "column",
                                                                    alignItems:
                                                                        "center",
                                                                    justifyContent:
                                                                        "center",
                                                                    backgroundColor:
                                                                        "#f8f9fa",
                                                                }}
                                                            >
                                                                <i
                                                                    className="bi bi-person"
                                                                    style={{
                                                                        fontSize:
                                                                            "50px",
                                                                        marginBottom:
                                                                            "10px",
                                                                        color: "#95a5a6",
                                                                    }}
                                                                ></i>
                                                                <div
                                                                    style={{
                                                                        fontSize:
                                                                            "11px",
                                                                        color: "#7f8c8d",
                                                                    }}
                                                                >
                                                                    Foto tidak
                                                                    tersedia
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* QR CODE - KECIL */}
                                                    <div
                                                        style={{
                                                            width: "100px",
                                                            height: "100px",
                                                            backgroundColor:
                                                                "white",
                                                            borderRadius: "6px",
                                                            border: "1px solid #ddd",
                                                            padding: "5px",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                            marginBottom: "5px",
                                                            marginTop: "15px",
                                                            boxShadow:
                                                                "0 2px 5px rgba(0,0,0,0.05)",
                                                        }}
                                                    >
                                                        <QRCodeSVG
                                                            value={`https://ikatwi.org/sig/verify?mid=${
                                                                auth?.user
                                                                    ?.no_anggota
                                                            }&y=${currentYear}&t=${Date.now()}&jenis_sig=${encodeURIComponent(
                                                                sig?.jenis_sig ||
                                                                    ""
                                                            )}`}
                                                            size={85}
                                                            level="H"
                                                            includeMargin={true}
                                                            bgColor="#ffffff"
                                                            fgColor="#2c3e50"
                                                        />
                                                    </div>

                                                    {/* Label kecil untuk QR Code */}
                                                    <div
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: "7px",
                                                                color: "#666",
                                                                fontWeight:
                                                                    "500",
                                                                backgroundColor:
                                                                    "#f8f9fa",
                                                                padding:
                                                                    "2px 6px",
                                                                borderRadius:
                                                                    "3px",
                                                                border: "1px solid #eee",
                                                            }}
                                                        >
                                                            SCAN QR CODE
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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
                                                borderLeft: "4px solid #3498db",
                                            }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <i
                                                    className="bi bi-info-circle-fill fs-4 me-3"
                                                    style={{ color: "#3498db" }}
                                                ></i>
                                                <div>
                                                    <h6
                                                        className="alert-heading mb-1 fw-bold"
                                                        style={{
                                                            color: "#0d47a1",
                                                        }}
                                                    >
                                                        Tentang Kartu Digital
                                                    </h6>
                                                    <p
                                                        className="mb-0 small"
                                                        style={{
                                                            color: "#1565c0",
                                                        }}
                                                    >
                                                        Kartu ini adalah tanda
                                                        keanggotaan resmi SIG{" "}
                                                        {currentYear} dengan
                                                        format seperti kartu
                                                        KTP. Foto anggota akan
                                                        ditampilkan jika
                                                        tersedia di profil Anda.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SIMPLIFIED LOGIC: Tampilkan pesan jika belum bayar */}
                {!isUserPaid && !isAnggotaKehormatan && (
                    <div className="row mb-4">
                        <div className="col-12">
                            <div
                                className="card border-0 shadow-lg mb-4"
                                style={{ borderRadius: "10px" }}
                            >
                                <div
                                    className="card-header py-3"
                                    style={{
                                        backgroundColor: "#e74c3c",
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
                                                className="bi bi-credit-card fs-5"
                                                style={{ color: "#e74c3c" }}
                                            ></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">
                                                Status Pembayaran
                                            </h5>
                                            <small className="opacity-75">
                                                Lengkapi pembayaran untuk akses
                                                SIG
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="alert alert-danger border-0">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-exclamation-triangle-fill fs-4 me-3"></i>
                                            <div>
                                                <h6 className="alert-heading mb-1 fw-bold">
                                                    Pembayaran Belum Lunas
                                                </h6>
                                                <p className="mb-0">
                                                    Anda belum dapat mengakses
                                                    kartu SIG karena status
                                                    pembayaran iuran tahun{" "}
                                                    {currentYear} belum lunas.
                                                    Status transaksi terakhir:{" "}
                                                    <strong>
                                                        {transactions?.[0]
                                                            ?.status ||
                                                            "NO TRANSACTION"}
                                                    </strong>
                                                </p>
                                                <div className="mt-3">
                                                    <a
                                                        href="/account/transactions"
                                                        className="btn btn-danger btn-sm"
                                                    >
                                                        <i className="bi bi-credit-card me-1"></i>
                                                        Cek Status Pembayaran
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SIMPLIFIED LOGIC: Tampilkan pesan jika belum daftar SIG */}
                {!sig && (
                    <div className="row mb-4">
                        <div className="col-12">
                            <div
                                className="card border-0 shadow-lg mb-4"
                                style={{ borderRadius: "10px" }}
                            >
                                <div
                                    className="card-header py-3"
                                    style={{
                                        backgroundColor: "#f39c12",
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
                                                className="bi bi-card-text fs-5"
                                                style={{ color: "#f39c12" }}
                                            ></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">
                                                Program SIG {currentYear}
                                            </h5>
                                            <small className="opacity-75">
                                                Daftar untuk mendapatkan kartu
                                                anggota
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="alert alert-warning border-0">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-info-circle-fill fs-4 me-3"></i>
                                            <div>
                                                <h6 className="alert-heading mb-1 fw-bold">
                                                    Belum Terdaftar SIG
                                                </h6>
                                                <p className="mb-0">
                                                    Anda belum mendaftar program
                                                    SIG {currentYear}. Silakan
                                                    daftar di menu{" "}
                                                    <strong>SIG</strong> untuk
                                                    mendapatkan kartu anggota.
                                                </p>
                                                <div className="mt-3">
                                                    <a
                                                        href="/account/sig"
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        <i className="bi bi-arrow-right me-1"></i>
                                                        Daftar SIG {currentYear}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Statistics Cards */}
                {hasAnyPermission(["dashboard.statistics"]) && count && (
                    <>
                        <div className="row mt-2">
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-primary">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-clock fa-2x text-primary"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-primary">
                                                    {count.unpaid || 0}
                                                </div>
                                                <div className="stat-label text-muted text-uppercase">
                                                    MENUNGGU PEMBAYARAN
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-success">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-check-circle fa-2x text-success"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-success">
                                                    {count.paid || 0}
                                                </div>
                                                <div className="stat-label text-muted text-uppercase">
                                                    SUDAH BAYAR
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-warning">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-exclamation-triangle fa-2x text-warning"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-warning">
                                                    {count.expired || 0}
                                                </div>
                                                <div className="stat-label text-muted text-uppercase">
                                                    KADALUARSA
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-danger">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-times-circle fa-2x text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-danger">
                                                    {count.cancelled || 0}
                                                </div>
                                                <div className="stat-label text-muted text-uppercase">
                                                    DIBATALKAN
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Charts Section - hanya jika ada data count */}
                        {count && (
                            <div className="container-fluid mt-4">
                                <div className="card shadow-lg border-0">
                                    <div className="card-header bg-white py-3">
                                        <h5 className="mb-0 text-primary">
                                            <i className="fas fa-chart-bar me-2"></i>
                                            STATISTIK DAN GRAFIK
                                        </h5>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul
                                            className="nav nav-tabs nav-fill custom-tabs"
                                            id="dashboardTabs"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="status-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#status"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-briefcase me-2"></i>
                                                    Status Pekerjaan
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="lulusan-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#lulusan"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-graduation-cap me-2"></i>
                                                    Lulusan
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="tempat-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#tempat"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-building me-2"></i>
                                                    Tempat Kerja
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="jenjang-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#jenjang"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-user-graduate me-2"></i>
                                                    Pendidikan
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="user-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#user"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-users me-2"></i>
                                                    User per DPW
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="kelengkapan-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#kelengkapan"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-clipboard-check me-2"></i>
                                                    Kelengkapan
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="iuran-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#iuran"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-money-bill-wave me-2"></i>
                                                    Iuran
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="bekerja-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#bekerja"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-chart-line me-2"></i>
                                                    Pekerjaan per DPW
                                                </button>
                                            </li>
                                        </ul>

                                        <div
                                            className="tab-content p-4"
                                            id="dashboardTabsContent"
                                        >
                                            {/* Status Pekerjaan */}
                                            <div
                                                className="tab-pane fade show active"
                                                id="status"
                                                role="tabpanel"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    statusPekerjaan.options
                                                                }
                                                                series={
                                                                    statusPekerjaan.series
                                                                }
                                                                type="pie"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Lulusan Universitas */}
                                            <div
                                                className="tab-pane fade"
                                                id="lulusan"
                                                role="tabpanel"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    lulusanUniv.options
                                                                }
                                                                series={
                                                                    lulusanUniv.series
                                                                }
                                                                type="pie"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tempat Bekerja */}
                                            <div
                                                className="tab-pane fade"
                                                id="tempat"
                                                role="tabpanel"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    tempatBekerja.options
                                                                }
                                                                series={
                                                                    tempatBekerja.series
                                                                }
                                                                type="pie"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Jenjang Pendidikan */}
                                            <div
                                                className="tab-pane fade"
                                                id="jenjang"
                                                role="tabpanel"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    jenjangPendidikan.options
                                                                }
                                                                series={
                                                                    jenjangPendidikan.series
                                                                }
                                                                type="pie"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* User per DPW */}
                                            <div
                                                className="tab-pane fade"
                                                id="user"
                                                role="tabpanel"
                                            >
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="alert alert-primary border-0 shadow-sm mb-4">
                                                            <i className="fas fa-info-circle me-2"></i>
                                                            Total User Aktif:{" "}
                                                            <strong>
                                                                {count.totalUserAktif ||
                                                                    0}
                                                            </strong>
                                                        </div>
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    barChartOptions
                                                                }
                                                                series={
                                                                    seriesData
                                                                }
                                                                type="bar"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Kelengkapan Data */}
                                            <div
                                                className="tab-pane fade"
                                                id="kelengkapan"
                                                role="tabpanel"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    dataKelengkapan.options
                                                                }
                                                                series={
                                                                    dataKelengkapan.series
                                                                }
                                                                type="pie"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Iuran */}
                                            <div
                                                className="tab-pane fade"
                                                id="iuran"
                                                role="tabpanel"
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="chart-container">
                                                            <Chart
                                                                options={
                                                                    dataIuran.options
                                                                }
                                                                series={
                                                                    dataIuran.series
                                                                }
                                                                type="pie"
                                                                height="400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Pekerjaan per DPW */}
                                            <div
                                                className="tab-pane fade"
                                                id="bekerja"
                                                role="tabpanel"
                                            >
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="alert alert-primary border-0 shadow-sm mb-4">
                                                            <i className="fas fa-info-circle me-2"></i>
                                                            Total User Aktif:{" "}
                                                            <strong>
                                                                {count.totalUserAktif ||
                                                                    0}
                                                            </strong>
                                                        </div>
                                                        <div className="chart-container mb-5">
                                                            <Chart
                                                                options={
                                                                    barChartByBekerjaOptions
                                                                }
                                                                series={
                                                                    barChartByBekerjaSeriesData
                                                                }
                                                                type="bar"
                                                                height="600"
                                                            />
                                                        </div>

                                                        <div className="card border-0 shadow-sm mt-4">
                                                            <div className="card-header bg-white py-3">
                                                                <h6 className="mb-0 text-primary">
                                                                    <i className="fas fa-table me-2"></i>
                                                                    DETAIL
                                                                    PEKERJAAN
                                                                    PER DPW
                                                                </h6>
                                                            </div>
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-hover table-striped mb-0">
                                                                        <thead className="bg-light">
                                                                            <tr>
                                                                                <th>
                                                                                    DPW
                                                                                </th>
                                                                                <th>
                                                                                    Belum
                                                                                    Bekerja
                                                                                </th>
                                                                                <th>
                                                                                    Freelance
                                                                                </th>
                                                                                <th>
                                                                                    Klinik
                                                                                    Swasta
                                                                                </th>
                                                                                <th>
                                                                                    Perguruan
                                                                                    Tinggi
                                                                                </th>
                                                                                <th>
                                                                                    Puskesmas
                                                                                </th>
                                                                                <th>
                                                                                    RS
                                                                                    Khusus
                                                                                </th>
                                                                                <th>
                                                                                    RS
                                                                                    Militer
                                                                                </th>
                                                                                <th>
                                                                                    RS
                                                                                    Swasta
                                                                                </th>
                                                                                <th>
                                                                                    RS
                                                                                    Umum
                                                                                    Daerah
                                                                                </th>
                                                                                <th>
                                                                                    RS
                                                                                    Umum
                                                                                    Pusat
                                                                                </th>
                                                                                <th>
                                                                                    Sekolah
                                                                                    Luar
                                                                                    Biasa
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {usersCountByProvincebyBekerja?.map(
                                                                                (
                                                                                    total,
                                                                                    index
                                                                                ) => (
                                                                                    <tr
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <td className="fw-bold text-primary">
                                                                                            {
                                                                                                total.province_name
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.belum_bekerja
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.freelance
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.klinik_swasta
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.perguruan_tinggi
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.puskesmas_count
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.rumah_sakit_khusus
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.rumah_sakit_militer
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.rumah_sakit_swasta
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.rumah_sakit_umum_daerah
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.rumah_sakit_umum_pusat
                                                                                            }
                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            {
                                                                                                total.sekolah_luar_biasa
                                                                                            }
                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            )}
                                                                        </tbody>
                                                                    </table>
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
                        )}
                    </>
                )}
            </LayoutAccount>

            {/* CSS Responsif untuk Kartu */}
            <style>{`
                @media (max-width: 768px) {
                    .sig-card-container {
                        width: 100% !important;
                    }
                    
                    .sig-card-container > div {
                        flex-direction: column !important;
                    }
                    
                    .sig-card-container > div > div {
                        width: 100% !important;
                        min-width: 100% !important;
                    }
                }
                
                .welcome-card {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .stat-card {
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                }
                
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
                }
                
                .stat-card-primary {
                    border-left: 4px solid #3B82F6;
                }
                
                .stat-card-success {
                    border-left: 4px solid #10B981;
                }
                
                .stat-card-warning {
                    border-left: 4px solid #F59E0B;
                }
                
                .stat-card-danger {
                    border-left: 4px solid #EF4444;
                }
                
                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 1;
                }
                
                .stat-label {
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }
                
                .stat-icon {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: rgba(59, 130, 246, 0.1);
                }
                
                .stat-card-success .stat-icon {
                    background: rgba(16, 185, 129, 0.1);
                }
                
                .stat-card-warning .stat-icon {
                    background: rgba(245, 158, 11, 0.1);
                }
                
                .stat-card-danger .stat-icon {
                    background: rgba(239, 68, 68, 0.1);
                }
                
                .custom-tabs .nav-link {
                    border: none;
                    color: #6c757d;
                    font-weight: 500;
                    padding: 1rem 1.5rem;
                    transition: all 0.3s ease;
                }
                
                .custom-tabs .nav-link.active {
                    color: #3B82F6;
                    background: transparent;
                    border-bottom: 3px solid #3B82F6;
                }
                
                .custom-tabs .nav-link:hover {
                    color: #3B82F6;
                    background: rgba(59, 130, 246, 0.05);
                }
                
                .chart-container {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                
                .table th {
                    background: #f8f9fa;
                    border-bottom: 2px solid #dee2e6;
                    font-weight: 600;
                    color: #495057;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .table td {
                    vertical-align: middle;
                    font-size: 0.9rem;
                }
                
                .card-header {
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
            `}</style>
        </>
    );
}
