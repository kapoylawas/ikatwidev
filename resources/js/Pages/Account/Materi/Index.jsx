import React, { useState, useEffect } from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, Link, useForm
import { Head, usePage, Link, useForm } from "@inertiajs/inertia-react";

// Import permissions
import hasAnyPermission from "../../../Utils/Permissions";

// Import component pagination
import Pagination from "../../../Shared/Pagination";

// Icons
import {
    FaYoutube,
    FaCalendarAlt,
    FaPlay,
    FaEye,
    FaFilter,
    FaExternalLinkAlt,
    FaRegClock,
    FaThumbsUp,
    FaList,
    FaTh,
    FaBookmark,
} from "react-icons/fa";
import {
    MdPublishedWithChanges,
    MdOutlineSlowMotionVideo,
    MdOutlineFilterAlt,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

export default function MateriIndex() {
    const { materiVideos, errors, transactions, statusAnggota } =
        usePage().props;

    const statusAnggotaName = statusAnggota?.status_anggota || "";

    // Get latest transaction status
    const latestTransaction = transactions.length > 0 ? transactions[0] : null;
    const transactionStatus = latestTransaction ? latestTransaction.status : "";

    // Check if user has access
    const hasAccess = transactionStatus === "PAID" || statusAnggotaName === "Anggota Kehormatan";

    const [selectedYear, setSelectedYear] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [playingVideo, setPlayingVideo] = useState(null);
    const [viewMode, setViewMode] = useState("grid");
    const [savedVideos, setSavedVideos] = useState([]);
    const [filterExpanded, setFilterExpanded] = useState(false);

    // Extract unique years from data
    const years = [
        ...new Set(materiVideos.data.map((item) => item.tahun)),
    ].sort((a, b) => b - a);

    // Filter videos based on selected filters
    const filteredVideos = materiVideos.data.filter((video) => {
        const yearMatch =
            selectedYear === "all" || video.tahun === selectedYear;
        const statusMatch =
            selectedStatus === "all" || video.status === selectedStatus;
        return yearMatch && statusMatch;
    });

    // Function to extract YouTube video ID from URL
    const getYouTubeId = (url) => {
        if (!url) return null;

        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        return match && match[2].length === 11 ? match[2] : null;
    };

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    // Format duration (if available)
    const formatDuration = (seconds) => {
        if (!seconds) return "--:--";
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
        }
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };

    // Close video player
    const closeVideoPlayer = () => {
        setPlayingVideo(null);
        document.body.style.overflow = "auto";
    };

    // Open video player
    const openVideoPlayer = (video) => {
        if (!hasAccess) return; // Prevent opening if no access
        
        const videoId = getYouTubeId(video.linkvideo);
        if (videoId) {
            setPlayingVideo({
                id: video.id,
                title: video.name,
                videoId: videoId,
                year: video.tahun,
                status: video.status,
            });
            document.body.style.overflow = "hidden";
        }
    };

    // Close video on ESC key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                closeVideoPlayer();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <Head>
                <title>Materi Video - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {!hasAccess ? (
                        /* Access Denied Message */
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card border-0 shadow-lg">
                                    <div className="card-body text-center p-5">
                                        <div className="mb-4">
                                            <div className="access-denied-icon mb-4">
                                                <FaYoutube className="text-danger" />
                                            </div>
                                            <h2 className="fw-bold text-danger mb-3">
                                                Akses Ditolak!
                                            </h2>
                                            <p className="text-muted mb-4">
                                                Anda tidak memiliki akses untuk melihat materi video.
                                                <br />
                                                Akses hanya diberikan kepada anggota yang telah membayar iuran atau Anggota Kehormatan.
                                            </p>
                                            
                                            <div className="alert alert-info mb-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-3">
                                                        <FaThumbsUp className="fs-4 text-info" />
                                                    </div>
                                                    <div className="text-start">
                                                        <h6 className="fw-bold mb-1">Status Keanggotaan Anda:</h6>
                                                        <p className="mb-0">
                                                            <strong>Status Pembayaran:</strong> {transactionStatus || "Belum Bayar"}
                                                            <br />
                                                            <strong>Status Anggota:</strong> {statusAnggotaName || "Anggota Biasa"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex gap-3 justify-content-center">
                                                <Link 
                                                    href="/account/dashboard" 
                                                    className="btn btn-primary"
                                                >
                                                    Kembali ke Dashboard
                                                </Link>
                                                <Link 
                                                    href="/account/tagihan" 
                                                    className="btn btn-success"
                                                >
                                                    Bayar Iuran
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Main Content - Only shown when has access */
                        <>
                            {/* Header */}
                            <div className="row mb-5">
                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="icon-wrapper me-3">
                                                <FaYoutube className="fs-1 text-white" />
                                            </div>
                                            <div>
                                                <h1 className="h1 fw-bold mb-1 text-dark">
                                                    Materi Video
                                                </h1>
                                                <p className="text-muted mb-0">
                                                    Koleksi video pembelajaran IKATWI
                                                    yang inspiratif dan informatif
                                                </p>
                                                <div className="mt-2">
                                                    <span className="badge bg-success">
                                                        <FaThumbsUp className="me-1" />
                                                        Akses Diberikan
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="row">
                                {/* Sidebar Filters */}
                                <div className="col-lg-3 mb-4">
                                    <div
                                        className="card border-0 shadow-sm sticky-top"
                                        style={{ top: "20px" }}
                                    >
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <h5 className="fw-bold mb-0 d-flex align-items-center">
                                                    <MdOutlineFilterAlt className="me-2 text-primary" />
                                                    Filter Video
                                                </h5>
                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => {
                                                        setSelectedYear("all");
                                                        setSelectedStatus("all");
                                                    }}
                                                >
                                                    Reset
                                                </button>
                                            </div>

                                            {/* Year Filter */}
                                            <div className="mb-4">
                                                <label className="form-label fw-semibold text-muted mb-3">
                                                    <FaCalendarAlt className="me-2" />
                                                    Tahun
                                                </label>
                                                <div className="d-flex flex-column gap-2">
                                                    <button
                                                        onClick={() =>
                                                            setSelectedYear("all")
                                                        }
                                                        className={`filter-chip ${selectedYear === "all" ? "active" : ""}`}
                                                    >
                                                        Semua Tahun
                                                    </button>
                                                    {years.map((year) => (
                                                        <button
                                                            key={year}
                                                            onClick={() =>
                                                                setSelectedYear(year)
                                                            }
                                                            className={`filter-chip ${selectedYear === year ? "active" : ""}`}
                                                        >
                                                            {year}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Status Filter */}
                                            <div className="mb-4">
                                                <label className="form-label fw-semibold text-muted mb-3">
                                                    <MdPublishedWithChanges className="me-2" />
                                                    Status
                                                </label>
                                                <div className="d-flex flex-column gap-2">
                                                    <button
                                                        onClick={() =>
                                                            setSelectedStatus("all")
                                                        }
                                                        className={`filter-chip ${selectedStatus === "all" ? "active" : ""}`}
                                                    >
                                                        Semua Status
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setSelectedStatus(
                                                                "published",
                                                            )
                                                        }
                                                        className={`filter-chip status-published ${selectedStatus === "published" ? "active" : ""}`}
                                                    >
                                                        <span className="status-dot bg-success"></span>
                                                        Published
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setSelectedStatus("draft")
                                                        }
                                                        className={`filter-chip status-draft ${selectedStatus === "draft" ? "active" : ""}`}
                                                    >
                                                        <span className="status-dot bg-warning"></span>
                                                        Draft
                                                    </button>
                                                </div>
                                            </div>

                                            {/* View Mode */}
                                            <div className="mb-4">
                                                <label className="form-label fw-semibold text-muted mb-3">
                                                    Tampilan
                                                </label>
                                                <div className="d-flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            setViewMode("grid")
                                                        }
                                                        className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                                                    >
                                                        <FaTh />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setViewMode("list")
                                                        }
                                                        className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
                                                    >
                                                        <FaList />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Quick Stats */}
                                            <div className="border-top pt-4">
                                                <h6 className="fw-semibold mb-3">
                                                    Statistik
                                                </h6>
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="text-muted">
                                                            Total Video
                                                        </span>
                                                        <span className="fw-bold">
                                                            {materiVideos.total}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="text-muted">
                                                            Tersedia
                                                        </span>
                                                        <span className="fw-bold text-success">
                                                            {
                                                                materiVideos.data.filter(
                                                                    (v) =>
                                                                        v.status ===
                                                                        "published",
                                                                ).length
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="text-muted">
                                                            Draft
                                                        </span>
                                                        <span className="fw-bold text-warning">
                                                            {
                                                                materiVideos.data.filter(
                                                                    (v) =>
                                                                        v.status ===
                                                                        "draft",
                                                                ).length
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="text-muted">
                                                            Tahun
                                                        </span>
                                                        <span className="fw-bold text-info">
                                                            {years.length}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Video Content */}
                                <div className="col-lg-9">
                                    {/* Header Controls */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <h4 className="fw-bold mb-0 text-dark">
                                                Video Pembelajaran
                                            </h4>
                                            <p className="text-muted small mb-0">
                                                {filteredVideos.length} video ditemukan
                                            </p>
                                        </div>

                                        {/* Mobile Filter Toggle */}
                                        <button
                                            className="btn btn-primary d-lg-none"
                                            onClick={() =>
                                                setFilterExpanded(!filterExpanded)
                                            }
                                        >
                                            <FaFilter className="me-2" />
                                            Filter
                                        </button>
                                    </div>

                                    {/* Mobile Filter */}
                                    {filterExpanded && (
                                        <div className="card mb-4 d-lg-none">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-6 mb-3">
                                                        <label className="form-label">
                                                            Tahun
                                                        </label>
                                                        <select
                                                            value={selectedYear}
                                                            onChange={(e) =>
                                                                setSelectedYear(
                                                                    e.target.value,
                                                                )
                                                            }
                                                            className="form-select"
                                                        >
                                                            <option value="all">
                                                                Semua Tahun
                                                            </option>
                                                            {years.map((year) => (
                                                                <option
                                                                    key={year}
                                                                    value={year}
                                                                >
                                                                    {year}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <label className="form-label">
                                                            Status
                                                        </label>
                                                        <select
                                                            value={selectedStatus}
                                                            onChange={(e) =>
                                                                setSelectedStatus(
                                                                    e.target.value,
                                                                )
                                                            }
                                                            className="form-select"
                                                        >
                                                            <option value="all">
                                                                Semua Status
                                                            </option>
                                                            <option value="published">
                                                                Published
                                                            </option>
                                                            <option value="draft">
                                                                Draft
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {filteredVideos.length === 0 ? (
                                        /* Empty State */
                                        <div className="empty-state">
                                            <div className="empty-state-icon">
                                                <MdOutlineSlowMotionVideo />
                                            </div>
                                            <h4 className="mt-4 text-danger">
                                                Tidak ada video ditemukan
                                            </h4>
                                            <p className="text-muted mb-4">
                                                Coba ubah filter pencarian Anda atau
                                                kembali nanti
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setSelectedYear("all");
                                                    setSelectedStatus("all");
                                                }}
                                                className="btn btn-primary"
                                            >
                                                Tampilkan Semua Video
                                            </button>
                                        </div>
                                    ) : viewMode === "grid" ? (
                                        /* Grid View */
                                        <div className="row g-4">
                                            {filteredVideos.map((video) => {
                                                const youtubeId = getYouTubeId(
                                                    video.linkvideo,
                                                );
                                                const thumbnailUrl = youtubeId
                                                    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
                                                    : "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop";

                                                return (
                                                    <div
                                                        key={video.id}
                                                        className="col-xl-4 col-lg-6"
                                                    >
                                                        <div className="video-card">
                                                            {/* Thumbnail */}
                                                            <div
                                                                className="video-thumbnail"
                                                                onClick={() =>
                                                                    openVideoPlayer(
                                                                        video,
                                                                    )
                                                                }
                                                            >
                                                                <img
                                                                    src={thumbnailUrl}
                                                                    alt={video.name}
                                                                />
                                                                <div className="video-overlay">
                                                                    <div className="play-button">
                                                                        <FaPlay />
                                                                    </div>
                                                                    <div className="video-duration">
                                                                        {formatDuration(
                                                                            video.duration,
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="video-content">
                                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                                    <div>
                                                                        <span
                                                                            className={`status-badge ${video.status === "published" ? "published" : "draft"}`}
                                                                        >
                                                                            {video.status ===
                                                                            "published"
                                                                                ? "Tersedia"
                                                                                : "Draft"}
                                                                        </span>
                                                                        <span className="year-badge ms-2">
                                                                            {
                                                                                video.tahun
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="video-actions">
                                                                        <button className="btn btn-sm btn-link text-muted">
                                                                            <BsThreeDots />
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <h6
                                                                    className="video-title"
                                                                    onClick={() =>
                                                                        openVideoPlayer(
                                                                            video,
                                                                        )
                                                                    }
                                                                >
                                                                    {video.name}
                                                                </h6>

                                                                <div className="video-meta">
                                                                    <div className="d-flex align-items-center text-muted small">
                                                                        <MdPublishedWithChanges className="me-2" />
                                                                        {formatDate(
                                                                            video.created_at,
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                <div className="video-actions-bottom mt-3">
                                                                    <button
                                                                        onClick={() =>
                                                                            openVideoPlayer(
                                                                                video,
                                                                            )
                                                                        }
                                                                        className="btn btn-play"
                                                                    >
                                                                        <FaPlay className="me-2" />
                                                                        Tonton Sekarang
                                                                    </button>
                                                                    {hasAnyPermission([
                                                                        "materi-videos.edit",
                                                                    ]) && (
                                                                        <Link
                                                                            href={`/account/materi/${video.id}/edit`}
                                                                            className="btn btn-outline"
                                                                        >
                                                                            <FaEye className="me-2" />
                                                                            Detail
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        /* List View */
                                        <div className="card border-0 shadow-sm">
                                            <div className="card-body p-0">
                                                <div className="list-view">
                                                    {filteredVideos.map((video) => {
                                                        const youtubeId = getYouTubeId(
                                                            video.linkvideo,
                                                        );
                                                        return (
                                                            <div
                                                                key={video.id}
                                                                className="list-item"
                                                            >
                                                                <div
                                                                    className="list-thumbnail"
                                                                    onClick={() =>
                                                                        openVideoPlayer(
                                                                            video,
                                                                        )
                                                                    }
                                                                >
                                                                    <img
                                                                        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                                                                        alt={video.name}
                                                                    />
                                                                    <div className="thumbnail-overlay">
                                                                        <FaPlay />
                                                                    </div>
                                                                </div>
                                                                <div className="list-content">
                                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                                        <div>
                                                                            <span
                                                                                className={`status-badge ${video.status === "published" ? "published" : "draft"}`}
                                                                            >
                                                                                {video.status ===
                                                                                "published"
                                                                                    ? "Tersedia"
                                                                                    : "Draft"}
                                                                            </span>
                                                                            <span className="year-badge ms-2">
                                                                                {
                                                                                    video.tahun
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <h6
                                                                        className="mb-2"
                                                                        onClick={() =>
                                                                            openVideoPlayer(
                                                                                video,
                                                                            )
                                                                        }
                                                                    >
                                                                        {video.name}
                                                                    </h6>

                                                                    <div className="text-muted small mb-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <MdPublishedWithChanges className="me-2" />
                                                                            Dibuat{" "}
                                                                            {formatDate(
                                                                                video.created_at,
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex gap-2">
                                                                        <button
                                                                            onClick={() =>
                                                                                openVideoPlayer(
                                                                                    video,
                                                                                )
                                                                            }
                                                                            className="btn btn-sm btn-play"
                                                                        >
                                                                            <FaPlay className="me-2" />
                                                                            Play
                                                                        </button>
                                                                        {hasAnyPermission(
                                                                            [
                                                                                "materi-videos.edit",
                                                                            ],
                                                                        ) && (
                                                                            <Link
                                                                                href={`/account/materi/${video.id}/edit`}
                                                                                className="btn btn-sm btn-outline"
                                                                            >
                                                                                <FaEye className="me-2" />
                                                                                Detail
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Pagination */}
                                    {materiVideos.links &&
                                        materiVideos.links.length > 3 && (
                                            <div className="mt-5">
                                                <div className="card border-0 shadow-sm">
                                                    <div className="card-body">
                                                        <Pagination
                                                            links={materiVideos.links}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>

                            {/* Video Player Modal */}
                            {playingVideo && (
                                <div className="video-player-modal">
                                    <div
                                        className="video-player-overlay"
                                        onClick={closeVideoPlayer}
                                    ></div>
                                    <div className="video-player-container">
                                        <div className="video-player-header">
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className={`status-indicator ${playingVideo.status === "published" ? "published" : "draft"}`}
                                                ></div>
                                                <div className="ms-2">
                                                    <h6 className="mb-0 text-truncate pe-4">
                                                        {playingVideo.title}
                                                    </h6>
                                                    <small className="text-white-50">
                                                        {playingVideo.year}
                                                    </small>
                                                </div>
                                            </div>
                                            <button
                                                className="btn-close btn-close-white"
                                                onClick={closeVideoPlayer}
                                            ></button>
                                        </div>
                                        <div className="video-player-body">
                                            <div className="ratio ratio-16x9">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${playingVideo.videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                                                    title={playingVideo.title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                                <div>
                                                    <small className="text-muted">
                                                        <FaYoutube className="text-danger me-1" />
                                                        YouTube Video • Auto Play
                                                    </small>
                                                </div>
                                                <a
                                                    href={`https://www.youtube.com/watch?v=${playingVideo.videoId}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    <FaExternalLinkAlt className="me-1" />
                                                    Buka di YouTube
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Custom CSS */}
                <style>{`
                    /* Global Variables */
                    :root {
                        --primary-color: #3b82f6;
                        --primary-light: #eff6ff;
                        --secondary-color: #64748b;
                        --success-color: #10b981;
                        --warning-color: #f59e0b;
                        --danger-color: #ef4444;
                        --dark-color: #1e293b;
                        --light-color: #f8fafc;
                        --border-radius: 12px;
                        --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
                        --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
                        --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
                    }

                    /* Icon Wrapper */
                    .icon-wrapper {
                        width: 70px;
                        height: 70px;
                        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                        border-radius: var(--border-radius);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    /* Access Denied Icon */
                    .access-denied-icon {
                        width: 100px;
                        height: 100px;
                        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto;
                    }

                    .access-denied-icon svg {
                        font-size: 48px;
                    }

                    /* Filter Chips */
                    .filter-chip {
                        padding: 0.5rem 1rem;
                        border: 2px solid #e5e7eb;
                        background: white;
                        border-radius: 50px;
                        font-size: 0.875rem;
                        font-weight: 500;
                        color: var(--secondary-color);
                        transition: all 0.2s ease;
                        text-align: left;
                    }

                    .filter-chip:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                        background: var(--primary-light);
                    }

                    .filter-chip.active {
                        background: var(--primary-color);
                        color: white;
                        border-color: var(--primary-color);
                    }

                    .status-dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        margin-right: 6px;
                        display: inline-block;
                    }

                    /* View Toggle */
                    .view-toggle-btn {
                        width: 40px;
                        height: 40px;
                        border: 2px solid #e5e7eb;
                        background: white;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--secondary-color);
                        transition: all 0.2s ease;
                    }

                    .view-toggle-btn:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                    }

                    .view-toggle-btn.active {
                        background: var(--primary-color);
                        border-color: var(--primary-color);
                        color: white;
                    }

                    /* Video Card */
                    .video-card {
                        background: white;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: var(--shadow-sm);
                        transition: all 0.3s ease;
                        height: 100%;
                    }

                    .video-card:hover {
                        box-shadow: var(--shadow-lg);
                        transform: translateY(-4px);
                    }

                    .video-thumbnail {
                        position: relative;
                        height: 200px;
                        overflow: hidden;
                        cursor: pointer;
                    }

                    .video-thumbnail img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }

                    .video-card:hover .video-thumbnail img {
                        transform: scale(1.05);
                    }

                    .video-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .video-thumbnail:hover .video-overlay {
                        opacity: 1;
                    }

                    .play-button {
                        width: 50px;
                        height: 50px;
                        background: rgba(239, 68, 68, 0.9);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 1.25rem;
                        transform: scale(0.9);
                        transition: transform 0.3s ease;
                    }

                    .video-thumbnail:hover .play-button {
                        transform: scale(1);
                    }

                    .video-duration {
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.8);
                        color: white;
                        padding: 0.25rem 0.5rem;
                        border-radius: 4px;
                        font-size: 0.75rem;
                    }

                    .video-content {
                        padding: 1.25rem;
                    }

                    .status-badge {
                        display: inline-block;
                        padding: 0.25rem 0.75rem;
                        border-radius: 50px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .status-badge.published {
                        background: rgba(16, 185, 129, 0.1);
                        color: var(--success-color);
                    }

                    .status-badge.draft {
                        background: rgba(245, 158, 11, 0.1);
                        color: var(--warning-color);
                    }

                    .year-badge {
                        display: inline-block;
                        padding: 0.25rem 0.75rem;
                        background: rgba(59, 130, 246, 0.1);
                        color: var(--primary-color);
                        border-radius: 50px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .video-title {
                        font-weight: 600;
                        margin: 0.75rem 0;
                        cursor: pointer;
                        transition: color 0.2s ease;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .video-title:hover {
                        color: var(--primary-color);
                    }

                    .btn-play {
                        background: var(--primary-color);
                        color: white;
                        border: none;
                        padding: 0.5rem 1.25rem;
                        border-radius: 8px;
                        font-weight: 500;
                        transition: all 0.2s ease;
                        flex: 1;
                    }

                    .btn-play:hover {
                        background: #2563eb;
                        color: white;
                    }

                    .btn-outline {
                        border: 2px solid #e5e7eb;
                        background: white;
                        color: var(--secondary-color);
                        padding: 0.5rem 1.25rem;
                        border-radius: 8px;
                        font-weight: 500;
                        transition: all 0.2s ease;
                        flex: 1;
                    }

                    .btn-outline:hover {
                        border-color: var(--primary-color);
                        color: var(--primary-color);
                    }

                    .video-actions-bottom {
                        display: flex;
                        gap: 0.75rem;
                    }

                    /* List View */
                    .list-item {
                        display: flex;
                        padding: 1.25rem;
                        border-bottom: 1px solid #e5e7eb;
                        transition: background 0.2s ease;
                    }

                    .list-item:hover {
                        background: var(--primary-light);
                    }

                    .list-thumbnail {
                        width: 120px;
                        height: 80px;
                        border-radius: 8px;
                        overflow: hidden;
                        position: relative;
                        flex-shrink: 0;
                        margin-right: 1.25rem;
                        cursor: pointer;
                    }

                    .list-thumbnail img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .thumbnail-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0,0,0,0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        opacity: 0;
                        transition: opacity 0.2s ease;
                    }

                    .list-thumbnail:hover .thumbnail-overlay {
                        opacity: 1;
                    }

                    .list-content {
                        flex: 1;
                    }

                    /* Empty State */
                    .empty-state {
                        text-align: center;
                        padding: 4rem 2rem;
                    }

                    .empty-state-icon {
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, var(--primary-light) 0%, #c12f2fff 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto;
                        color: var(--primary-color);
                        font-size: 2rem;
                    }

                    /* Video Player Modal */
                    .video-player-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1050;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .video-player-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        backdrop-filter: blur(8px);
                    }

                    .video-player-container {
                        position: relative;
                        z-index: 1;
                        width: 90%;
                        max-width: 1000px;
                        background: white;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                        animation: modalSlideIn 0.3s ease;
                    }

                    .video-player-header {
                        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                        color: white;
                        padding: 1.25rem 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .status-indicator {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                    }

                    .status-indicator.published {
                        background: var(--success-color);
                    }

                    .status-indicator.draft {
                        background: var(--warning-color);
                    }

                    .video-player-body {
                        padding: 2rem;
                    }

                    @keyframes modalSlideIn {
                        from {
                            opacity: 0;
                            transform: translateY(-30px) scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    /* Responsive */
                    @media (max-width: 992px) {
                        .video-thumbnail {
                            height: 180px;
                        }
                    }

                    @media (max-width: 768px) {
                        .list-item {
                            flex-direction: column;
                        }
                        
                        .list-thumbnail {
                            width: 100%;
                            height: 160px;
                            margin-right: 0;
                            margin-bottom: 1rem;
                        }
                        
                        .video-player-container {
                            width: 95%;
                            margin: 1rem;
                        }
                    }
                `}</style>
            </LayoutAccount>
        </>
    );
}