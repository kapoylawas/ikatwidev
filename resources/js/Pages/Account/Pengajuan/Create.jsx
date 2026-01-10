//import react
import React, { useState, useEffect, useCallback } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function PengajuanCreate() {
    const { errors, transactions, statusAnggota, biodata, provinces, cities, pengajuans } =
        usePage().props;

    const status = transactions && transactions.map ? transactions.map((ts) => ts.status) : [];
    const [name] = useState(statusAnggota?.status_anggota || '');

    const filter = status && status.length > 0
        ? status.toString()
            .replace("[", "")
            .replace("]", "")
            .replace('"', "")
            .replace('"', "")
        : "";

    // State untuk pembatasan akses
    const [canCreateSubmission, setCanCreateSubmission] = useState(false);
    const [restrictionMessage, setRestrictionMessage] = useState("");
    const [currentMonthSubmissions, setCurrentMonthSubmissions] = useState(0);
    const [currentMonthName, setCurrentMonthName] = useState("");

    // State form dengan default values yang aman
    const [id, setId] = useState(biodata?.id || "");
    const [nama, setNama] = useState(biodata?.name || "");
    const [kta, setKta] = useState(biodata?.no_anggota || "");
    const [provinceID, setProvinceID] = useState(biodata?.province_id || "");
    const [cityID, setCityID] = useState(biodata?.city_id || "");
    const [tglmutasi, setTglmutasi] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [tujuan, setTujuan] = useState("");
    const [tujuandpc, setTujuandpc] = useState("");
    const [tipePindah, setTipePindah] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // =========== STATE UNTUK CEKLIST PERSYARATAN ===========
    const [documentFile, setDocumentFile] = useState(null);
    const [documentFileName, setDocumentFileName] = useState("");
    
    // State untuk ceklist persyaratan
    const [checklistItems, setChecklistItems] = useState([
        {
            id: 1,
            label: "Surat keterangan dari DPW/DPC",
            description: "Surat keterangan resmi dari DPW/DPC asal",
            checked: false,
            required: true
        },
        {
            id: 2,
            label: "Akun Satu Sehat aktif",
            description: "Screenshot profil biodata akun Satu Sehat yang aktif",
            checked: false,
            required: true
        },
        {
            id: 3,
            label: "STR Seumur Hidup",
            description: "Scan STR Seumur Hidup yang masih berlaku",
            checked: false,
            required: true
        },
        {
            id: 4,
            label: "Pencabutan SIP tempat lama",
            description: "Scan dokumen pencabutan SIP di tempat kerja lama",
            checked: false,
            required: true
        },
        {
            id: 5,
            label: "Surat permohonan mutasi",
            description: "Surat permohonan mutasi yang ditandatangani",
            checked: false,
            required: true
        }
    ]);

    // =========== FUNGSI UNTUK CEKLIST PERSYARATAN ===========
    // Fungsi untuk menandai item ceklist
    const toggleChecklistItem = (id) => {
        if (!canCreateSubmission) return;
        setChecklistItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Fungsi untuk memeriksa apakah semua persyaratan sudah dicentang
    const validateChecklist = () => {
        return checklistItems.every(item => !item.required || item.checked);
    };

    // Fungsi untuk menghitung persentase kelengkapan
    const getChecklistCompletion = () => {
        const totalRequired = checklistItems.filter(item => item.required).length;
        const completed = checklistItems.filter(item => item.required && item.checked).length;
        return {
            completed,
            total: totalRequired,
            percentage: Math.round((completed / totalRequired) * 100)
        };
    };

    // Fungsi untuk menangani upload file PDF gabungan
    const handleFileUpload = (e) => {
        if (!canCreateSubmission) return;
        
        const file = e.target.files[0];
        if (file) {
            // Validasi ukuran file (maksimal 10MB karena gabungan dokumen)
            if (file.size > 10 * 1024 * 1024) {
                Swal.fire({
                    title: "File Terlalu Besar!",
                    text: "Ukuran file maksimal 10MB untuk dokumen gabungan",
                    icon: "error",
                    confirmButtonText: "Mengerti"
                });
                return;
            }

            // Validasi tipe file (PDF saja)
            if (file.type !== "application/pdf") {
                Swal.fire({
                    title: "Format File Salah!",
                    text: "Hanya file PDF yang diizinkan",
                    icon: "error",
                    confirmButtonText: "Mengerti"
                });
                return;
            }

            setDocumentFile(file);
            setDocumentFileName(file.name);
        }
    };

    // Fungsi untuk menghapus file
    const handleRemoveFile = () => {
        setDocumentFile(null);
        setDocumentFileName("");
    };

    // Fungsi untuk memvalidasi dokumen gabungan
    const validateDocument = () => {
        return documentFile !== null;
    };

    // =========== FUNGSI YANG SUDAH ADA ===========
    // Fungsi untuk memeriksa apakah bulan saat ini termasuk dalam periode yang diizinkan
    const isAllowedMonth = () => {
        const currentMonth = new Date().getMonth() + 1; // January = 1, December = 12
        return currentMonth === 1 || currentMonth === 8 || currentMonth === 11; // Januari, Agustus, November
    };

    // Fungsi untuk mendapatkan nama bulan saat ini
    const getCurrentMonthName = () => {
        return new Date().toLocaleString('id-ID', { month: 'long' });
    };

    // PERBAIKAN: Fungsi untuk memeriksa jumlah pengajuan di bulan ini - lebih robust
    const getCurrentMonthSubmissionsCount = useCallback(() => {
        // Pastikan pengajuans dan pengajuans.data ada
        if (!pengajuans || !pengajuans.data || !Array.isArray(pengajuans.data)) {
            return 0;
        }

        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();

        const count = pengajuans.data.filter(pengajuan => {
            // Pastikan pengajuan dan created_at ada
            if (!pengajuan || !pengajuan.created_at) {
                return false;
            }

            try {
                const submissionDate = new Date(pengajuan.created_at);
                return submissionDate.getMonth() + 1 === currentMonth &&
                    submissionDate.getFullYear() === currentYear;
            } catch (error) {
                console.error('Error parsing date:', error);
                return false;
            }
        }).length;

        console.log('Current month submissions count:', count);
        return count;
    }, [pengajuans]);

    // PERBAIKAN: Fungsi untuk memeriksa apakah pengguna bisa membuat pengajuan baru
    const checkSubmissionEligibility = useCallback(() => {
        // Update nama bulan saat ini
        const monthName = getCurrentMonthName();
        setCurrentMonthName(monthName);

        if (filter !== "PAID") {
            setCanCreateSubmission(false);
            setRestrictionMessage("Hanya anggota dengan status PAID yang dapat membuat pengajuan");
            return;
        }

        if (!isAllowedMonth()) {
            setCanCreateSubmission(false);
            setRestrictionMessage(`Pengajuan mutasi hanya dapat dibuat pada bulan Januari, Agustus, dan November. Saat ini bulan ${monthName}`);
            return;
        }

        const submissionsCount = getCurrentMonthSubmissionsCount();
        console.log('Eligibility check - submissions count:', submissionsCount);
        setCurrentMonthSubmissions(submissionsCount);

        // PENTING: Pembatasan maksimal 3 pengajuan per bulan - PERBAIKAN: menggunakan >= 3
        if (submissionsCount >= 3) {
            setCanCreateSubmission(false);
            setRestrictionMessage(`Anda telah mencapai batas maksimal 3 pengajuan dalam bulan ${monthName} ini. Tidak dapat membuat pengajuan baru.`);
            return;
        }

        setCanCreateSubmission(true);
        setRestrictionMessage("");
    }, [filter, getCurrentMonthSubmissionsCount]);

    // PERBAIKAN: Effect untuk memeriksa kelayakan pembuatan pengajuan
    useEffect(() => {
        checkSubmissionEligibility();
    }, [checkSubmissionEligibility]);

    // Effect untuk auto-refresh status setiap menit (opsional, untuk real-time)
    useEffect(() => {
        const interval = setInterval(() => {
            checkSubmissionEligibility();
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [checkSubmissionEligibility]);

    // Fungsi untuk mendapatkan nama bulan yang diizinkan
    const getAllowedMonths = () => {
        return "Januari, Agustus, dan November";
    };

    // Fungsi untuk mendapatkan informasi batas pengajuan
    const getSubmissionLimitInfo = () => {
        const remaining = Math.max(0, 3 - currentMonthSubmissions);

        return {
            current: currentMonthSubmissions,
            max: 3,
            remaining: remaining
        };
    };

    const limitInfo = getSubmissionLimitInfo();

    // Fungsi untuk mendapatkan status periode (BUKA/TUTUP)
    const getPeriodStatus = () => {
        if (filter !== "PAID") return "AKSES DITOLAK";
        if (!isAllowedMonth()) return "TUTUP";
        if (currentMonthSubmissions >= 3) return "KUOTA HABIS";
        return "BUKA";
    };

    // Fungsi untuk mendapatkan warna status periode
    const getPeriodStatusColor = () => {
        const status = getPeriodStatus();
        switch (status) {
            case "BUKA": return "success";
            case "TUTUP": return "danger";
            case "KUOTA HABIS": return "warning";
            case "AKSES DITOLAK": return "secondary";
            default: return "secondary";
        }
    };

    // Fungsi untuk mendapatkan icon status periode
    const getPeriodStatusIcon = () => {
        const status = getPeriodStatus();
        switch (status) {
            case "BUKA": return "fa-lock-open";
            case "TUTUP": return "fa-lock";
            case "KUOTA HABIS": return "fa-ban";
            case "AKSES DITOLAK": return "fa-user-slash";
            default: return "fa-lock";
        }
    };

    // Reset tujuan ketika tipe pindah berubah
    const handleTipePindahChange = (e) => {
        if (!canCreateSubmission) return; // Jangan proses jika form terkunci

        const selectedTipe = e.target.value;
        setTipePindah(selectedTipe);

        if (selectedTipe === "dpc") {
            setTujuan(provinceID);
            // Pastikan cities ada sebelum filter
            if (cities && Array.isArray(cities)) {
                setFilteredCities(cities.filter(city => city.province_id == provinceID));
            }
        } else {
            setTujuan("");
            setFilteredCities([]);
        }
        setTujuandpc("");
    };

    // Filter cities ketika tujuan DPW berubah (untuk pindah DPW)
    const handleTujuanChange = (e) => {
        if (!canCreateSubmission) return; // Jangan proses jika form terkunci

        const selectedProvinceId = e.target.value;
        setTujuan(selectedProvinceId);

        if (selectedProvinceId && cities && Array.isArray(cities)) {
            const filtered = cities.filter(city => city.province_id == selectedProvinceId);
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }
        setTujuandpc("");
    };

    // =========== PERBAIKAN: method "storePengajuan" dengan validasi CEKLIST ===========
    const storePengajuan = async (e) => {
        e.preventDefault();

        // Validasi FINAL sebelum submit - lebih ketat
        const currentCount = getCurrentMonthSubmissionsCount();
        console.log('Final validation - current count:', currentCount);

        if (currentCount >= 3) {
            Swal.fire({
                title: "Batas Pengajuan Tercapai!",
                text: `Anda telah mencapai batas maksimal 3 pengajuan dalam bulan ${getCurrentMonthName()} ini. Tidak dapat membuat pengajuan baru.`,
                icon: "warning",
                confirmButtonText: "Mengerti"
            });
            setCanCreateSubmission(false);
            setRestrictionMessage(`Anda telah mencapai batas maksimal 3 pengajuan dalam bulan ${getCurrentMonthName()} ini`);
            checkSubmissionEligibility(); // Refresh status
            return;
        }

        if (!canCreateSubmission) {
            Swal.fire({
                title: "Akses Ditolak!",
                text: restrictionMessage,
                icon: "error",
                confirmButtonText: "Mengerti"
            });
            return;
        }

        // Validasi ceklist persyaratan
        if (!validateChecklist()) {
            Swal.fire({
                title: "Persyaratan Belum Lengkap!",
                text: "Harap centang semua persyaratan yang diperlukan sebelum mengajukan mutasi",
                icon: "warning",
                confirmButtonText: "Mengerti"
            });
            return;
        }

        // Validasi dokumen gabungan
        if (!validateDocument()) {
            Swal.fire({
                title: "Dokumen Belum Dilampirkan!",
                text: "Harap unggah dokumen PDF gabungan yang berisi semua persyaratan",
                icon: "warning",
                confirmButtonText: "Mengerti"
            });
            return;
        }

        // Set loading state
        setIsLoading(true);

        // Prepare data based on tipe pindah
        const formData = new FormData();
        formData.append('user_id', id);
        formData.append('name', nama);
        formData.append('kta', kta);
        formData.append('province_id', provinceID);
        formData.append('city_id', cityID);
        formData.append('tgl_mutasi', tglmutasi);
        formData.append('keterangan', keterangan);
        formData.append('tipe_pindah', tipePindah);
        // Tambahkan dokumen gabungan
        formData.append('document', documentFile);
        
        // Tambahkan status ceklist sebagai JSON string
        const checklistStatus = checklistItems.map(item => ({
            label: item.label,
            checked: item.checked
        }));
        formData.append('checklist_status', JSON.stringify(checklistStatus));

        // Add conditional fields based on tipe pindah
        if (tipePindah === "dpw") {
            formData.append('tujuan_mutasi', tujuan);
            formData.append('dpc_mutasi', tujuandpc);
        } else if (tipePindah === "dpc") {
            formData.append('tujuan_mutasi', provinceID);
            formData.append('dpc_mutasi', tujuandpc);
        }

        //sending data
        Inertia.post(
            "/account/pengajuan",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data Pengajuan Anda Sudah Terkirim!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2500,
                    });

                    // PERBAIKAN: Tidak update count di sini, biarkan effect yang handle
                    // Refresh eligibility setelah beberapa detik untuk memastikan data terupdate
                    setTimeout(() => {
                        checkSubmissionEligibility();
                    }, 1000);
                },
                onError: (errors) => {
                    Swal.fire({
                        title: "Error!",
                        text: "Terjadi kesalahan saat mengajukan mutasi",
                        icon: "error",
                        confirmButtonText: "Mengerti"
                    });
                },
                onFinish: () => {
                    setIsLoading(false);
                }
            }
        );
    };

    // Dapatkan nama DPW Asal untuk ditampilkan
    const getDpwAsalName = () => {
        if (!provinces || !Array.isArray(provinces)) {
            return "DPW Asal";
        }
        const dpwAsal = provinces.find(province => province.id == provinceID);
        return dpwAsal ? dpwAsal.name : "DPW Asal";
    };

    // Dapatkan nama DPW Tujuan untuk ditampilkan
    const getDpwTujuanName = () => {
        if (!provinces || !Array.isArray(provinces)) {
            return "DPW Tujuan";
        }
        const dpwTujuan = provinces.find(province => province.id == tujuan);
        return dpwTujuan ? dpwTujuan.name : "DPW Tujuan";
    };

    // =========== PERBAIKAN: Fungsi untuk mengecek apakah form valid - termasuk CEKLIST ===========
    const isFormValid = () => {
        if (!canCreateSubmission) return false;

        // Final check untuk batas pengajuan
        const currentCount = getCurrentMonthSubmissionsCount();
        if (currentCount >= 3) return false;

        // Validasi form utama
        const isMainFormValid = tglmutasi &&
            keterangan &&
            tipePindah &&
            ((tipePindah === "dpw" && tujuan && tujuandpc) ||
                (tipePindah === "dpc" && tujuandpc)) &&
            isConfirmed;

        // Validasi ceklist persyaratan
        const isChecklistValid = validateChecklist();

        // Validasi dokumen gabungan
        const isDocumentValid = validateDocument();

        return isMainFormValid && isChecklistValid && isDocumentValid;
    };

    // Fungsi untuk mendapatkan class form berdasarkan status akses
    const getFormClass = () => {
        return !canCreateSubmission ? 'bg-light' : '';
    };

    // PERBAIKAN: Fungsi untuk mendapatkan status disabled form - lebih ketat
    const isFormDisabled = () => {
        return !canCreateSubmission || getCurrentMonthSubmissionsCount() >= 3;
    };

    // Safe rendering untuk arrays
    const safeProvinces = provinces && Array.isArray(provinces) ? provinces : [];
    const safeCities = cities && Array.isArray(cities) ? cities : [];

    // Get checklist completion
    const checklistCompletion = getChecklistCompletion();

    return (
        <>
            <Head>
                <title>User Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>

                {/* Informasi Pembatasan Akses */}
                {!canCreateSubmission && (
                    <div className="row mb-4 mt-4">
                        <div className="col-12">
                            <div className="card border-danger">
                                <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">
                                        <i className="fas fa-ban me-2"></i>
                                        Akses Pengajuan Dibatasi
                                    </h6>
                                    <span className="badge bg-light text-white">
                                        <i className="fas fa-calendar me-1"></i>
                                        {currentMonthName}
                                    </span>
                                </div>
                                <div className="card-body">
                                    <div className="alert alert-warning mb-0">
                                        <div className="d-flex">
                                            <i className="fas fa-exclamation-triangle fa-2x me-3 text-warning"></i>
                                            <div>
                                                <h6 className="alert-heading mb-2">{restrictionMessage}</h6>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i className="fas fa-calendar-check text-primary me-2"></i>
                                                            <span>Periode Pengajuan: <strong>{getAllowedMonths()}</strong></span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i className="fas fa-clock text-info me-2"></i>
                                                            <span>Bulan Saat Ini: <strong>{currentMonthName}</strong></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i className="fas fa-chart-bar text-warning me-2"></i>
                                                            <span>Batas: <strong>3 pengajuan per bulan</strong></span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <i className="fas fa-chart-pie text-success me-2"></i>
                                                            <span>Status: <strong className={`text-${getPeriodStatusColor()}`}>{getPeriodStatus()}</strong></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {filter !== "PAID" && (
                                                    <div className="mt-2">
                                                        <small className="text-muted">
                                                            Status anggota Anda saat ini: <strong>{name}</strong>.
                                                            Hubungi admin untuk memperbarui status ke PAID.
                                                        </small>
                                                    </div>
                                                )}
                                                {currentMonthSubmissions >= 3 && (
                                                    <div className="mt-2">
                                                        <small className="text-danger">
                                                            <i className="fas fa-info-circle me-1"></i>
                                                            Anda telah menggunakan semua kuota pengajuan untuk bulan {currentMonthName}.
                                                            Tunggu hingga bulan {getAllowedMonths()} berikutnya untuk membuat pengajuan baru.
                                                        </small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats Cards untuk Informasi Kuota */}
                {filter === "PAID" && (
                    <div className="row mb-4 mt-4">
                        <div className="col-md-3">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Pengajuan {currentMonthName}
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                {currentMonthSubmissions}/3
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-file-alt fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Sisa Kuota
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                {limitInfo.remaining}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-tachometer-alt fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                Status Periode
                                            </div>
                                            <div className="h6 mb-0 font-weight-bold text-gray-800">
                                                <span className={`text-${getPeriodStatusColor()}`}>
                                                    {getPeriodStatus()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas ${getPeriodStatusIcon()} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Bulan Saat Ini
                                            </div>
                                            <div className="h6 mb-0 font-weight-bold text-gray-800">
                                                {currentMonthName}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Progress Bar */}
                {filter === "PAID" && isAllowedMonth() && (
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted">
                                            Penggunaan kuota pengajuan bulan {currentMonthName}
                                        </span>
                                        <span className={`badge bg-${limitInfo.remaining === 0 ? 'danger' : limitInfo.remaining <= 1 ? 'warning' : 'success'}`}>
                                            {limitInfo.current} / {limitInfo.max}
                                        </span>
                                    </div>
                                    <div className="progress" style={{ height: "10px" }}>
                                        <div
                                            className={`progress-bar bg-${limitInfo.current >= limitInfo.max ? 'danger' : limitInfo.current >= 2 ? 'warning' : 'success'}`}
                                            role="progressbar"
                                            style={{ width: `${(limitInfo.current / limitInfo.max) * 100}%` }}
                                            aria-valuenow={limitInfo.current}
                                            aria-valuemin="0"
                                            aria-valuemax={limitInfo.max}
                                        ></div>
                                    </div>
                                    <small className="text-muted mt-2 d-block">
                                        {limitInfo.remaining > 0
                                            ? `Anda masih dapat membuat ${limitInfo.remaining} pengajuan lagi bulan ${currentMonthName} ini`
                                            : `Anda telah mencapai batas maksimal 3 pengajuan bulan ${currentMonthName} ini. Tidak dapat membuat pengajuan baru.`
                                        }
                                    </small>
                                    {limitInfo.current >= 3 && (
                                        <div className="alert alert-danger mt-2 mb-0 py-2">
                                            <i className="fas fa-exclamation-triangle me-2"></i>
                                            <strong>Batas Tercapai!</strong> Anda tidak dapat membuat pengajuan baru hingga bulan berikutnya yang diizinkan.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form Pengajuan */}
                <div className="col-md-12 mt-2">
                    <div className={`card border-0 shadow-sm ${!canCreateSubmission ? 'opacity-75' : ''}`}>
                        <div className={`card-header ${canCreateSubmission ? 'bg-primary' : 'bg-secondary'} text-white`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-0">
                                    <i className={`fas ${canCreateSubmission ? 'fa-exchange-alt' : 'fa-lock'} me-2`}></i>
                                    Form Pengajuan Mutasi
                                    {canCreateSubmission && (
                                        <small className="ms-2 opacity-75">- Periode {currentMonthName} {getPeriodStatus()}</small>
                                    )}
                                </h5>
                                {!canCreateSubmission ? (
                                    <span className="badge bg-warning">
                                        <i className="fas fa-ban me-1"></i>
                                        Terkunci
                                    </span>
                                ) : (
                                    <span className={`badge bg-${getPeriodStatusColor()}`}>
                                        <i className={`fas ${getPeriodStatusIcon()} me-1`}></i>
                                        {getPeriodStatus()}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="card-body">

                            {/* Alert untuk informasi akses */}
                            {canCreateSubmission && limitInfo.remaining > 0 && (
                                <div className="alert alert-success mb-4">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-check-circle fa-lg me-3 text-success"></i>
                                        <div>
                                            <h6 className="alert-heading mb-1">Akses Diberikan! - Periode {currentMonthName} BUKA</h6>
                                            <p className="mb-0">
                                                Anda dapat membuat pengajuan mutasi. Sisa kuota: <strong>{limitInfo.remaining} dari {limitInfo.max}</strong> pengajuan bulan {currentMonthName}.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Peringatan kuota hampir habis */}
                            {canCreateSubmission && limitInfo.remaining === 1 && (
                                <div className="alert alert-warning mb-4">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-exclamation-triangle fa-lg me-3 text-warning"></i>
                                        <div>
                                            <h6 className="alert-heading mb-1">Kuota Hampir Habis!</h6>
                                            <p className="mb-0">
                                                Ini adalah pengajuan terakhir yang dapat Anda buat bulan {currentMonthName} ini.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={storePengajuan}>
                                {/* Data Diri Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-user me-2"></i>
                                            Data Diri
                                        </h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light"
                                                value={nama}
                                                onChange={(e) =>
                                                    setNama(e.target.value)
                                                }
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nomor KTA
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light"
                                                value={kta}
                                                onChange={(e) =>
                                                    setKta(e.target.value)
                                                }
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Asal Keanggotaan Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-map-marker-alt me-2"></i>
                                            Asal Keanggotaan
                                        </h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                DPW Asal
                                            </label>
                                            <select
                                                className="form-select bg-light"
                                                disabled
                                                value={provinceID}
                                                onChange={(e) =>
                                                    setProvinceID(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Pilih DPW --
                                                </option>
                                                {safeProvinces.map((province) => (
                                                    <option
                                                        value={province.id}
                                                        key={province.id}
                                                    >
                                                        {province.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                DPC Asal
                                            </label>
                                            <select
                                                className="form-select bg-light"
                                                disabled
                                                value={cityID}
                                                onChange={(e) =>
                                                    setCityID(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Pilih DPC --
                                                </option>
                                                {safeCities.map((city) => (
                                                    <option
                                                        value={city.id}
                                                        key={city.id}
                                                    >
                                                        {city.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Data Mutasi Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-file-alt me-2"></i>
                                            Data Mutasi
                                        </h6>
                                    </div>

                                    {/* Tipe Pindah */}
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Tipe Pindah <span className="text-danger">*</span>
                                            </label>
                                            <select
                                                className={`form-select ${getFormClass()}`}
                                                value={tipePindah}
                                                onChange={handleTipePindahChange}
                                                required
                                                disabled={isFormDisabled()}
                                            >
                                                <option value="">
                                                    -- Pilih Tipe Pindah --
                                                </option>
                                                <option value="dpw">
                                                    Pindah DPW (Pindah Provinsi)
                                                </option>
                                                <option value="dpc">
                                                    Pindah DPC (Pindah Kabupaten/Kota dalam Provinsi yang sama)
                                                </option>
                                            </select>
                                            {errors.tipe_pindah && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.tipe_pindah}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Tanggal Mutasi <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control ${getFormClass()}`}
                                                value={tglmutasi}
                                                onChange={(e) =>
                                                    setTglmutasi(e.target.value)
                                                }
                                                placeholder="Pilih Tanggal Mutasi"
                                                required
                                                disabled={isFormDisabled()}
                                            />
                                            {errors.tgl_mutasi && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.tgl_mutasi}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Tujuan Mutasi Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-location-arrow me-2"></i>
                                            Tujuan Mutasi
                                        </h6>
                                    </div>

                                    {/* Tujuan DPW - tampil untuk kedua tipe pindah */}
                                    {(tipePindah === "dpw" || tipePindah === "dpc") && (
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    {tipePindah === "dpw" ? "Tujuan DPW" : "DPW"} <span className="text-danger">*</span>
                                                </label>
                                                {tipePindah === "dpw" ? (
                                                    <select
                                                        className={`form-select ${getFormClass()}`}
                                                        value={tujuan}
                                                        onChange={handleTujuanChange}
                                                        required
                                                        disabled={isFormDisabled()}
                                                    >
                                                        <option value="">
                                                            -- Pilih Tujuan DPW --
                                                        </option>
                                                        {safeProvinces.map((province) => (
                                                            <option
                                                                value={province.id}
                                                                key={province.id}
                                                            >
                                                                {province.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type="text"
                                                        className="form-control bg-light"
                                                        value={getDpwAsalName()}
                                                        disabled
                                                    />
                                                )}
                                                {errors.tujuan_mutasi && (
                                                    <div className="alert alert-danger mt-2">
                                                        {errors.tujuan_mutasi}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tujuan DPC - tampil untuk kedua tipe pindah */}
                                    {(tipePindah === "dpw" || tipePindah === "dpc") && (
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Tujuan DPC <span className="text-danger">*</span>
                                                </label>
                                                <select
                                                    className={`form-select ${getFormClass()}`}
                                                    value={tujuandpc}
                                                    onChange={(e) =>
                                                        setTujuandpc(e.target.value)
                                                    }
                                                    required
                                                    disabled={isFormDisabled() || (tipePindah === "dpw" && !tujuan)}
                                                >
                                                    <option value="">
                                                        {tipePindah === "dpw" && !tujuan
                                                            ? "-- Pilih DPW terlebih dahulu --"
                                                            : "-- Pilih Tujuan DPC --"
                                                        }
                                                    </option>
                                                    {filteredCities.map((dpc) => (
                                                        <option
                                                            value={dpc.id}
                                                            key={dpc.id}
                                                        >
                                                            {dpc.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {tipePindah === "dpw" && !tujuan && (
                                                    <div className="form-text text-warning">
                                                        Pilih DPW tujuan terlebih dahulu untuk melihat DPC yang tersedia
                                                    </div>
                                                )}
                                                {errors.dpc_mutasi && (
                                                    <div className="alert alert-danger mt-2">
                                                        {errors.dpc_mutasi}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Informasi untuk pindah DPC */}
                                    {tipePindah === "dpc" && (
                                        <div className="col-12">
                                            <div className="alert alert-info">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Informasi:</strong> Anda melakukan mutasi DPC dalam Provinsi <strong>{getDpwAsalName()}</strong>.
                                                Tujuan DPW akan tetap di <strong>{getDpwAsalName()}</strong>.
                                            </div>
                                        </div>
                                    )}

                                    {/* Informasi untuk pindah DPW */}
                                    {tipePindah === "dpw" && tujuan && (
                                        <div className="col-12">
                                            <div className="alert alert-info">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Informasi:</strong> Anda melakukan mutasi ke Provinsi <strong>{getDpwTujuanName()}</strong>.
                                                Pilih DPC tujuan di provinsi tersebut.
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* =========== CEKLIST PERSYARATAN MUTASI =========== */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-clipboard-check me-2"></i>
                                            Ceklist Persyaratan Mutasi
                                        </h6>
                                        
                                        {/* Progress Bar Kelengkapan */}
                                        <div className="card mb-3 border-success">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <span className="fw-bold">Kelengkapan Persyaratan</span>
                                                    <span className={`badge bg-${checklistCompletion.percentage === 100 ? 'success' : checklistCompletion.percentage >= 50 ? 'warning' : 'danger'}`}>
                                                        {checklistCompletion.percentage}%
                                                    </span>
                                                </div>
                                                <div className="progress" style={{ height: "10px" }}>
                                                    <div
                                                        className={`progress-bar bg-${checklistCompletion.percentage === 100 ? 'success' : checklistCompletion.percentage >= 50 ? 'warning' : 'danger'}`}
                                                        role="progressbar"
                                                        style={{ width: `${checklistCompletion.percentage}%` }}
                                                        aria-valuenow={checklistCompletion.percentage}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <small className="text-muted mt-2 d-block">
                                                    {checklistCompletion.completed} dari {checklistCompletion.total} persyaratan telah dipenuhi
                                                </small>
                                                {checklistCompletion.percentage === 100 && (
                                                    <div className="alert alert-success mt-2 mb-0 py-2">
                                                        <i className="fas fa-check-circle me-2"></i>
                                                        <strong>Semua persyaratan sudah terpenuhi!</strong> Silakan lanjutkan dengan mengunggah dokumen.
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Card untuk Ceklist Persyaratan */}
                                        <div className="card mb-4 border-primary">
                                            <div className="card-header bg-primary text-white">
                                                <h6 className="mb-0">
                                                    <i className="fas fa-list-check me-2"></i>
                                                    CEKLIS PERSYARATAN MUTASI (WAJIB DIPENUHI SEMUA)
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="alert alert-light mb-3">
                                                    <strong>Instruksi:</strong> Centang semua persyaratan di bawah ini untuk melanjutkan pengajuan mutasi. 
                                                    Setelah semua dicentang, unggah satu file PDF yang berisi semua dokumen yang diperlukan.
                                                </div>
                                                
                                                {/* Daftar Ceklist */}
                                                <div className="mb-4">
                                                    <h6 className="fw-bold mb-3">Dokumen yang Diperlukan:</h6>
                                                    <div className="list-group">
                                                        {checklistItems.map((item) => (
                                                            <div key={item.id} className="list-group-item list-group-item-action">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="form-check flex-grow-1">
                                                                        <input
                                                                            className="form-check-input me-3"
                                                                            type="checkbox"
                                                                            id={`checklist-${item.id}`}
                                                                            checked={item.checked}
                                                                            onChange={() => toggleChecklistItem(item.id)}
                                                                            disabled={isFormDisabled()}
                                                                        />
                                                                        <label 
                                                                            className="form-check-label d-flex align-items-center" 
                                                                            htmlFor={`checklist-${item.id}`}
                                                                        >
                                                                            <div>
                                                                                <strong className={`${item.checked ? 'text-success' : 'text-dark'}`}>
                                                                                    {item.label}
                                                                                </strong>
                                                                                <div className="form-text small">
                                                                                    {item.description}
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div>
                                                                        {item.checked ? (
                                                                            <span className="badge bg-success">
                                                                                <i className="fas fa-check me-1"></i>
                                                                                Terpenuhi
                                                                            </span>
                                                                        ) : (
                                                                            <span className="badge bg-secondary">
                                                                                <i className="fas fa-times me-1"></i>
                                                                                Belum
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Upload File PDF Gabungan */}
                                                <div className="border rounded p-3 bg-light">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">
                                                            Upload Dokumen PDF Gabungan <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="alert alert-info mb-3">
                                                            <i className="fas fa-info-circle me-2"></i>
                                                            <strong>Catatan:</strong> Gabungkan semua dokumen yang tercantum di atas menjadi SATU file PDF.
                                                            File harus berisi semua dokumen yang diperlukan dalam urutan yang rapi.
                                                        </div>
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={documentFileName}
                                                                placeholder="Belum ada file dipilih"
                                                                disabled
                                                            />
                                                            <label 
                                                                className={`btn ${documentFile ? 'btn-outline-success' : 'btn-outline-primary'}`}
                                                                htmlFor="fileUpload"
                                                                disabled={isFormDisabled()}
                                                            >
                                                                <i className={`fas ${documentFile ? 'fa-check' : 'fa-upload'} me-1`}></i>
                                                                {documentFile ? 'Ganti File' : 'Pilih File'}
                                                            </label>
                                                            <input
                                                                type="file"
                                                                className="form-control d-none"
                                                                id="fileUpload"
                                                                accept=".pdf,.PDF"
                                                                onChange={handleFileUpload}
                                                                disabled={isFormDisabled()}
                                                            />
                                                            {documentFile && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-outline-danger"
                                                                    onClick={handleRemoveFile}
                                                                    disabled={isFormDisabled()}
                                                                >
                                                                    <i className="fas fa-trash me-1"></i>
                                                                    Hapus
                                                                </button>
                                                            )}
                                                        </div>
                                                        <div className="form-text">
                                                            <i className="fas fa-info-circle me-1"></i>
                                                            <span className="fst-italic">Format: PDF (maksimal 10MB)</span>
                                                            {documentFile && (
                                                                <span className="text-success ms-2">
                                                                    <i className="fas fa-check-circle me-1"></i>
                                                                    File siap diunggah
                                                                </span>
                                                            )}
                                                        </div>
                                                        {errors.document && (
                                                            <div className="alert alert-danger mt-2">
                                                                {errors.document}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Informasi File yang Diunggah */}
                                                    {documentFile && (
                                                        <div className="alert alert-success">
                                                            <div className="d-flex align-items-center">
                                                                <i className="fas fa-file-pdf fa-lg me-3 text-danger"></i>
                                                                <div>
                                                                    <strong>Dokumen yang diunggah:</strong>
                                                                    <div className="small">
                                                                        <i className="fas fa-file me-1"></i>
                                                                        {documentFileName} 
                                                                        <span className="text-muted ms-2">
                                                                            ({Math.round(documentFile.size / 1024)} KB)
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* Pesan jika belum memenuhi semua persyaratan */}
                                                {!validateChecklist() && (
                                                    <div className="alert alert-warning mt-3">
                                                        <i className="fas fa-exclamation-triangle me-2"></i>
                                                        <strong>Perhatian:</strong> Anda belum mencentang semua persyaratan yang diperlukan.
                                                        Harap pastikan semua dokumen sudah tersedia sebelum mengunggah file PDF.
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Keterangan Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-sticky-note me-2"></i>
                                            Keterangan
                                        </h6>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Alasan Mutasi <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className={`form-control ${getFormClass()}`}
                                                rows="4"
                                                value={keterangan}
                                                onChange={(e) =>
                                                    setKeterangan(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Contoh: Mutasi karena pindah tempat kerja, pindah domisili, atau alasan lainnya..."
                                                required
                                                disabled={isFormDisabled()}
                                            />
                                            <div className="form-text">
                                                Jelaskan alasan Anda melakukan mutasi dengan jelas.
                                            </div>
                                            {errors.keterangan && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.keterangan}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Konfirmasi Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="card border-warning">
                                            <div className="card-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        required
                                                        id="confirmationCheck"
                                                        checked={isConfirmed}
                                                        onChange={(e) => setIsConfirmed(e.target.checked)}
                                                        disabled={isFormDisabled()}
                                                    />
                                                    <label
                                                        className="form-check-label fw-bold text-warning"
                                                        htmlFor="confirmationCheck"
                                                    >
                                                        <i className="fas fa-exclamation-triangle me-2"></i>
                                                        Saya menyatakan bahwa data yang saya inputkan adalah benar dan sesuai.
                                                        Saya bertanggung jawab penuh atas kebenaran data mutasi ini.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="d-flex gap-2 justify-content-end">
                                            <Link
                                                href="/account/pengajuan"
                                                className="btn btn-secondary"
                                            >
                                                <i className="fas fa-arrow-left me-2"></i>
                                                Kembali
                                            </Link>
                                            <button
                                                type="reset"
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    setTipePindah("");
                                                    setTujuan("");
                                                    setTujuandpc("");
                                                    setFilteredCities([]);
                                                    setChecklistItems(prev => 
                                                        prev.map(item => ({ ...item, checked: false }))
                                                    );
                                                    setDocumentFile(null);
                                                    setDocumentFileName("");
                                                    setIsConfirmed(false);
                                                }}
                                                disabled={isFormDisabled() || isLoading}
                                            >
                                                <i className="fas fa-redo me-2"></i>
                                                Reset
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-success"
                                                disabled={!isFormValid() || isLoading || isFormDisabled()}
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <i className="fas fa-spinner fa-spin me-2"></i>
                                                        Memproses...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fas fa-paper-plane me-2"></i>
                                                        {canCreateSubmission ? 'Ajukan Mutasi' : 'Akses Ditolak'}
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Pesan Akses Ditolak */}
                                {!canCreateSubmission && (
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="alert alert-danger">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-lock me-3 fa-lg"></i>
                                                    <div>
                                                        <h6 className="alert-heading mb-1">Form Terkunci</h6>
                                                        <p className="mb-0">{restrictionMessage}</p>
                                                        {currentMonthSubmissions >= 3 && (
                                                            <p className="mb-0 mt-2">
                                                                <strong>Solusi:</strong> Tunggu hingga bulan {getAllowedMonths()} berikutnya untuk membuat pengajuan baru.
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}