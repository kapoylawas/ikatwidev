import React, { useState } from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, Link, useForm
import { Head, usePage, Link, useForm } from "@inertiajs/inertia-react";

// Import Inertia untuk method post
import { Inertia } from "@inertiajs/inertia";

// Import permissions
import hasAnyPermission from "../../../Utils/Permissions";

// Import component search
import Search from "../../../Shared/Search";

// Import component pagination
import Pagination from "../../../Shared/Pagination";

// Import SweetAlert
import Swal from 'sweetalert2';

export default function VideosIndex() {
    const { videos, errors } = usePage().props;
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [deletingId, setDeletingId] = useState(null); // State untuk ID video yang sedang dihapus

    const { data, setData, processing, reset } = useForm({
        name: "",
        status: "draft",
        tahun: new Date().getFullYear(),
        linkvideo: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSaving(true);

        // Sending data menggunakan Inertia.post
        Inertia.post('/account/videos', {
            name: data.name,
            status: data.status,
            tahun: data.tahun,
            linkvideo: data.linkvideo,
        }, {
            onStart: () => {
                setIsSaving(true);
            },
            onSuccess: () => {
                // Show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Video saved successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });

                // Reset form
                reset();
                setShowCreateModal(false);
            },
            onError: (errors) => {
                // Show error alert if needed
                if (errors) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please check the form for errors',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            },
            onFinish: () => {
                setIsSaving(false);
            }
        });
    };

    // Fungsi untuk menghapus video
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            backdrop: true,
            allowOutsideClick: () => !Swal.isLoading(),
            customClass: {
                popup: 'swal2-popup-custom',
                confirmButton: 'swal2-confirm-custom',
                cancelButton: 'swal2-cancel-custom'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                setDeletingId(id);
                
                Inertia.delete(`/account/videos/${id}`, {
                    onStart: () => {
                        setDeletingId(id);
                    },
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Video has been deleted successfully.',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete video.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    },
                    onFinish: () => {
                        setDeletingId(null);
                    }
                });
            }
        });
    };

    // Fungsi untuk mendapatkan embed URL dari link YouTube
    const getEmbedUrl = (url) => {
        if (!url) return "";
        
        try {
            // Format youtu.be
            if (url.includes("youtu.be")) {
                const id = url.split("/").pop().split("?")[0];
                return `https://www.youtube.com/embed/${id}`;
            }
            
            // Format youtube.com/watch?v=
            if (url.includes("youtube.com/watch")) {
                const urlObj = new URL(url);
                const videoId = urlObj.searchParams.get("v");
                if (videoId) {
                    return `https://www.youtube.com/embed/${videoId}`;
                }
            }
            
            // Format embed
            if (url.includes("youtube.com/embed")) {
                return url;
            }
            
            return "";
        } catch (e) {
            console.error("Error parsing YouTube URL:", e);
            return "";
        }
    };

    // Fungsi untuk validasi URL YouTube
    const isValidYouTubeUrl = (url) => {
        const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return pattern.test(url);
    };

    return (
        <>
            <Head>
                <title>Master Videos - IKATWI</title>
                <style>
                    {`
                        /* Global Styles */
                        .videos-page {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }
                        
                        /* Card Styling */
                        .card-videos {
                            border: none;
                            border-radius: 12px;
                            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }
                        
                        .card-videos:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                        }
                        
                        .card-header-videos {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            border-radius: 12px 12px 0 0 !important;
                            border: none;
                            padding: 1.25rem 1.5rem;
                        }
                        
                        .card-header-videos span {
                            color: white;
                            font-size: 1.1rem;
                            font-weight: 600;
                        }
                        
                        /* Table Styling */
                        .table-videos {
                            margin-bottom: 0;
                            border-collapse: separate;
                            border-spacing: 0;
                        }
                        
                        .table-videos thead th {
                            background-color: #f8f9fa;
                            border-bottom: 2px solid #dee2e6;
                            font-weight: 600;
                            color: #495057;
                            padding: 1rem;
                            vertical-align: middle;
                        }
                        
                        .table-videos tbody td {
                            padding: 1rem;
                            vertical-align: middle;
                            border-top: 1px solid #e9ecef;
                        }
                        
                        .table-videos tbody tr {
                            transition: background-color 0.2s ease;
                        }
                        
                        .table-videos tbody tr:hover {
                            background-color: #f8fff9;
                        }
                        
                        /* Button Styling */
                        .btn-back {
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
                            border: none;
                            border-radius: 8px;
                            padding: 0.625rem 1.25rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                        }
                        
                        .btn-back:hover {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
                        }
                        
                        .btn-add-video {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            border: none;
                            border-radius: 8px;
                            padding: 0.625rem 1.25rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .btn-add-video:hover:not(:disabled) {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
                        }
                        
                        .btn-add-video:disabled {
                            opacity: 0.7;
                            cursor: not-allowed;
                            transform: none !important;
                            box-shadow: none !important;
                        }
                        
                        .btn-add-video-loading {
                            position: relative;
                            padding-left: 2.5rem !important;
                        }
                        
                        .btn-add-video-loading::before {
                            content: '';
                            position: absolute;
                            left: 1rem;
                            top: 50%;
                            width: 18px;
                            height: 18px;
                            margin-top: -9px;
                            border: 2px solid rgba(255, 255, 255, 0.3);
                            border-top-color: white;
                            border-radius: 50%;
                            animation: button-spinner 0.8s linear infinite;
                        }
                        
                        @keyframes button-spinner {
                            to {
                                transform: rotate(360deg);
                            }
                        }
                        
                        /* Badge Styling */
                        .badge-video {
                            padding: 0.5em 0.8em;
                            border-radius: 6px;
                            font-weight: 500;
                            font-size: 0.85em;
                        }
                        
                        .badge-published {
                            background: linear-gradient(135deg, #28a745 0%, #218838 100%);
                        }
                        
                        .badge-draft {
                            background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
                            color: #212529;
                        }
                        
                        .badge-archived {
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
                        }
                        
                        /* Video Preview in Table */
                        .video-preview-table {
                            max-width: 200px;
                            border-radius: 8px;
                            overflow: hidden;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        }
                        
                        .video-preview-table iframe {
                            display: block;
                            border: none;
                        }
                        
                        /* Action Buttons */
                        .btn-action {
                            width: 36px;
                            height: 36px;
                            border-radius: 8px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.3s ease;
                        }
                        
                        .btn-action:hover {
                            transform: translateY(-2px);
                        }
                        
                        /* Delete Button Styling */
                        .btn-delete {
                            background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
                            border: none;
                            color: white;
                        }
                        
                        .btn-delete:hover:not(:disabled) {
                            background: linear-gradient(135deg, #c82333 0%, #bd2130 100%);
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
                        }
                        
                        .btn-delete:disabled {
                            opacity: 0.7;
                            cursor: not-allowed;
                        }
                        
                        .btn-delete-loading {
                            position: relative;
                        }
                        
                        .btn-delete-loading i {
                            animation: fa-spin 1s linear infinite;
                        }
                        
                        @keyframes fa-spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        
                        /* View Button Styling */
                        .btn-view {
                            background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
                            border: none;
                            color: white;
                        }
                        
                        .btn-view:hover {
                            background: linear-gradient(135deg, #138496 0%, #117a8b 100%);
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(23, 162, 184, 0.3);
                        }
                        
                        /* Edit Button Styling */
                        .btn-edit {
                            background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
                            border: none;
                            color: white;
                        }
                        
                        .btn-edit:hover {
                            background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
                        }
                        
                        /* Empty State */
                        .empty-state {
                            padding: 3rem 1rem;
                            text-align: center;
                            background: linear-gradient(135deg, #f8fff9 0%, #f0f9ff 100%);
                            border-radius: 12px;
                        }
                        
                        .empty-state-icon {
                            font-size: 3rem;
                            color: #20c997;
                            margin-bottom: 1rem;
                        }
                        
                        /* Modal Styling */
                        .modal-backdrop-videos {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.5);
                            backdrop-filter: blur(4px);
                            z-index: 1040;
                            animation: fadeIn 0.3s ease;
                        }
                        
                        .modal-videos {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 1050;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 20px;
                            animation: slideIn 0.3s ease;
                        }
                        
                        .modal-content-videos {
                            background: white;
                            border-radius: 16px;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                            max-width: 800px;
                            width: 90%;
                            max-height: 90vh;
                            overflow-y: auto;
                            position: relative;
                        }
                        
                        .modal-header-videos {
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                            border-radius: 16px 16px 0 0;
                            padding: 1.5rem 2rem;
                            border: none;
                        }
                        
                        .modal-body-videos {
                            padding: 2rem;
                            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%);
                        }
                        
                        .modal-footer-videos {
                            padding: 1.5rem 2rem;
                            background: #f8f9fa;
                            border-top: 1px solid #e9ecef;
                            border-radius: 0 0 16px 16px;
                        }
                        
                        /* Form Controls */
                        .form-control-videos {
                            border: 2px solid #e9ecef;
                            border-radius: 8px;
                            padding: 0.75rem 1rem;
                            transition: all 0.3s ease;
                            background-color: white;
                        }
                        
                        .form-control-videos:focus {
                            border-color: #28a745;
                            box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.2);
                            background-color: white;
                        }
                        
                        .form-control-videos:disabled {
                            background-color: #f8f9fa;
                            cursor: not-allowed;
                            opacity: 0.7;
                        }
                        
                        .form-label-videos {
                            font-weight: 600;
                            color: #495057;
                            margin-bottom: 0.5rem;
                        }
                        
                        /* Video Preview Container */
                        .video-preview-container-modal {
                            background: linear-gradient(135deg, #f8fff9 0%, #f0f9ff 100%);
                            border: 2px dashed #28a745;
                            border-radius: 12px;
                            padding: 1.5rem;
                            margin-top: 1rem;
                        }
                        
                        /* Loading Overlay untuk Modal */
                        .modal-loading-overlay {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: rgba(255, 255, 255, 0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 10;
                            border-radius: 16px;
                            backdrop-filter: blur(3px);
                        }
                        
                        .loading-content {
                            text-align: center;
                            padding: 2rem;
                            background: white;
                            border-radius: 12px;
                            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                            border: 1px solid #e9ecef;
                            max-width: 300px;
                        }
                        
                        .loading-spinner-large {
                            width: 50px;
                            height: 50px;
                            border: 3px solid #f3f3f3;
                            border-top: 3px solid #28a745;
                            border-radius: 50%;
                            animation: modal-spinner 1s linear infinite;
                            margin: 0 auto 1.5rem;
                        }
                        
                        .loading-text {
                            font-size: 1.1rem;
                            font-weight: 600;
                            color: #28a745;
                            margin-bottom: 0.5rem;
                        }
                        
                        .loading-subtext {
                            color: #6c757d;
                            font-size: 0.9rem;
                        }
                        
                        @keyframes modal-spinner {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        
                        /* Loading Text Styling */
                        .btn-loading-text {
                            display: inline-flex;
                            align-items: center;
                            gap: 0.5rem;
                        }
                        
                        /* SweetAlert Custom Styling */
                        .swal2-popup-custom {
                            border-radius: 12px !important;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }
                        
                        .swal2-confirm-custom {
                            border-radius: 8px !important;
                            padding: 0.625rem 1.5rem !important;
                            font-weight: 500 !important;
                            background: linear-gradient(135deg, #dc3545 0%, #c82333 100%) !important;
                            border: none !important;
                        }
                        
                        .swal2-cancel-custom {
                            border-radius: 8px !important;
                            padding: 0.625rem 1.5rem !important;
                            font-weight: 500 !important;
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%) !important;
                            border: none !important;
                        }
                        
                        /* Animations */
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        
                        @keyframes slideIn {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        /* Pulse Animation untuk Loading */
                        @keyframes pulse {
                            0% { opacity: 1; }
                            50% { opacity: 0.5; }
                            100% { opacity: 1; }
                        }
                        
                        .pulse-text {
                            animation: pulse 1.5s ease-in-out infinite;
                        }
                        
                        /* Responsive Design */
                        @media (max-width: 768px) {
                            .modal-videos {
                                padding: 10px;
                            }
                            
                            .modal-content-videos {
                                width: 95%;
                            }
                            
                            .modal-body-videos {
                                padding: 1.5rem;
                            }
                            
                            .table-videos thead th,
                            .table-videos tbody td {
                                padding: 0.75rem;
                            }
                            
                            .video-preview-table {
                                max-width: 150px;
                            }
                            
                            .btn-action {
                                width: 32px;
                                height: 32px;
                                margin: 2px;
                            }
                            
                            .loading-content {
                                padding: 1.5rem;
                                max-width: 250px;
                            }
                            
                            .loading-spinner-large {
                                width: 40px;
                                height: 40px;
                            }
                            
                            .action-buttons-group {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 4px;
                            }
                        }
                        
                        @media (max-width: 576px) {
                            .card-header-videos {
                                padding: 1rem;
                            }
                            
                            .modal-header-videos {
                                padding: 1rem 1.5rem;
                            }
                            
                            .video-preview-table {
                                max-width: 120px;
                            }
                            
                            .action-buttons-group {
                                flex-direction: column;
                                align-items: center;
                            }
                        }
                    `}
                </style>
            </Head>
            
            <LayoutAccount>
                <div className="container-fluid mb-5 mt-5 videos-page">
                    {/* Header Section */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                                <div>
                                    <h1 className="h3 fw-bold text-dark mb-1">
                                        <i className="fa fa-video me-2 text-success"></i>
                                        Master Videos
                                    </h1>
                                    <p className="text-muted mb-0">
                                        Manage your YouTube videos and content
                                    </p>
                                </div>
                                <div className="d-flex gap-2">
                                    <Link
                                        href="/account/videos"
                                        className="btn btn-back text-white"
                                    >
                                        <i className="fa fa-arrow-left me-2"></i>
                                        Back
                                    </Link>
                                    <button
                                        onClick={() => setShowCreateModal(true)}
                                        className="btn btn-add-video text-white"
                                        disabled={isSaving}
                                    >
                                        <i className="fa fa-plus-circle me-2"></i>
                                        Add Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card card-videos">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <Search
                                                URL={"/account/videos"}
                                                placeholder={"Search videos by name..."}
                                            />
                                        </div>
                                        <div className="col-md-4 text-md-end">
                                            <span className="text-muted">
                                                Total: {videos.total} videos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Videos Table */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-videos">
                                <div className="card-header card-header-videos">
                                    <span>
                                        <i className="fa fa-list me-2"></i> Videos List
                                    </span>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-videos mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "5%" }}>No</th>
                                                    <th style={{ width: "25%" }}>Video Name</th>
                                                    <th style={{ width: "10%" }}>Year</th>
                                                    <th style={{ width: "10%" }}>Status</th>
                                                    <th style={{ width: "30%" }}>Preview</th>
                                                    <th style={{ width: "20%" }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {videos.data.length > 0 ? (
                                                    videos.data.map((video, index) => (
                                                        <tr key={video.id}>
                                                            <td className="text-center fw-semibold">
                                                                {++index +
                                                                    (videos.current_page - 1) *
                                                                    videos.per_page}
                                                            </td>
                                                            <td>
                                                                <div className="fw-medium text-dark">
                                                                    {video.name}
                                                                </div>
                                                                {video.linkvideo && (
                                                                    <small className="text-muted">
                                                                        <i className="fab fa-youtube text-danger me-1"></i>
                                                                        YouTube Link
                                                                    </small>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-secondary">
                                                                    {video.tahun}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span
                                                                    className={`badge badge-video ${
                                                                        video.status === "published"
                                                                            ? "badge-published"
                                                                            : video.status === "draft"
                                                                            ? "badge-draft"
                                                                            : "badge-archived"
                                                                    }`}
                                                                >
                                                                    {video.status}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                {video.linkvideo && getEmbedUrl(video.linkvideo) ? (
                                                                    <div className="video-preview-table">
                                                                        <iframe
                                                                            width="200"
                                                                            height="113"
                                                                            src={getEmbedUrl(video.linkvideo)}
                                                                            title={video.name}
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowFullScreen
                                                                        ></iframe>
                                                                    </div>
                                                                ) : (
                                                                    <span className="text-muted">No preview available</span>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex justify-content-center gap-2 action-buttons-group">
                                                                    {/* View Button */}
                                                                    {video.linkvideo && (
                                                                        <button
                                                                            className="btn btn-view btn-action"
                                                                            title="View on YouTube"
                                                                            onClick={() => window.open(video.linkvideo, '_blank')}
                                                                            disabled={deletingId === video.id}
                                                                        >
                                                                            <i className="fa fa-eye"></i>
                                                                        </button>
                                                                    )}
                                                                    
                                                                  
                                                                    
                                                                 
                                                                        <button
                                                                            onClick={() => deleteHandler(video.id)}
                                                                            className={`btn btn-delete btn-action ${deletingId === video.id ? 'btn-delete-loading disabled' : ''}`}
                                                                            title="Delete"
                                                                            disabled={deletingId === video.id}
                                                                        >
                                                                            {deletingId === video.id ? (
                                                                                <i className="fa fa-spinner fa-spin"></i>
                                                                            ) : (
                                                                                <i className="fa fa-trash-alt"></i>
                                                                            )}
                                                                        </button>
                                                                
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={6}>
                                                            <div className="empty-state">
                                                                <div className="empty-state-icon">
                                                                    <i className="fa fa-film"></i>
                                                                </div>
                                                                <h4 className="h5 fw-bold text-dark mb-2">
                                                                    No Videos Found
                                                                </h4>
                                                                <p className="text-muted mb-3">
                                                                    Start by adding your first video content
                                                                </p>
                                                                <button
                                                                    onClick={() => setShowCreateModal(true)}
                                                                    className="btn btn-add-video text-white"
                                                                    disabled={isSaving}
                                                                >
                                                                    <i className="fa fa-plus-circle me-2"></i>
                                                                    Add First Video
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                {/* Pagination */}
                                {videos.data.length > 0 && (
                                    <div className="card-footer border-0 bg-white pt-3">
                                        <div className="d-flex justify-content-end">
                                            <Pagination links={videos.links} align={"end"} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CREATE MODAL */}
                {showCreateModal && (
                    <>
                        <div 
                            className="modal-backdrop-videos"
                            onClick={() => {
                                if (!isSaving) {
                                    setShowCreateModal(false);
                                    reset();
                                }
                            }}
                        ></div>
                        
                        <div className="modal-videos">
                            <div className="modal-content-videos">
                                {/* Loading Overlay dengan tulisan */}
                                {isSaving && (
                                    <div className="modal-loading-overlay">
                                        <div className="loading-content">
                                            <div className="loading-spinner-large"></div>
                                            <div className="loading-text pulse-text">
                                                Loading...
                                            </div>
                                            <p className="loading-subtext">
                                                Please wait while we save your video
                                            </p>
                                            <div className="mt-3">
                                                <small className="text-muted">
                                                    <i className="fa fa-clock me-1"></i>
                                                    This may take a few seconds
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="modal-header-videos">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-white rounded-circle p-2 me-3">
                                            <i className="fa fa-video text-success fa-lg"></i>
                                        </div>
                                        <div>
                                            <h5 className="modal-title text-white fw-bold mb-0">
                                                Add New Video
                                            </h5>
                                            <small className="text-white-50">
                                                Fill in the details below
                                            </small>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        onClick={() => {
                                            if (!isSaving) {
                                                setShowCreateModal(false);
                                                reset();
                                            }
                                        }}
                                        aria-label="Close"
                                        disabled={isSaving}
                                    ></button>
                                </div>
                                
                                <form onSubmit={submitHandler}>
                                    <div className="modal-body-videos">
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <label className="form-label-videos">
                                                    <i className="fa fa-heading me-2 text-muted"></i>
                                                    Video Name <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-videos ${errors.name ? "is-invalid" : ""}`}
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    placeholder="Enter video title"
                                                    required
                                                    disabled={isSaving}
                                                />
                                                {errors.name && (
                                                    <div className="invalid-feedback d-block mt-2">
                                                        <i className="fa fa-exclamation-circle me-1"></i>
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label className="form-label-videos">
                                                    <i className="fa fa-tag me-2 text-muted"></i>
                                                    Status <span className="text-danger">*</span>
                                                </label>
                                                <select
                                                    className={`form-control form-control-videos ${errors.status ? "is-invalid" : ""}`}
                                                    value={data.status}
                                                    onChange={(e) => setData("status", e.target.value)}
                                                    required
                                                    disabled={isSaving}
                                                >
                                                    <option value="draft">Draft</option>
                                                    <option value="published">Published</option>
                                                    <option value="archived">Archived</option>
                                                </select>
                                                {errors.status && (
                                                    <div className="invalid-feedback d-block mt-2">
                                                        <i className="fa fa-exclamation-circle me-1"></i>
                                                        {errors.status}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="col-md-6 mb-4">
                                                <label className="form-label-videos">
                                                    <i className="fa fa-calendar me-2 text-muted"></i>
                                                    Year <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    className={`form-control form-control-videos ${errors.tahun ? "is-invalid" : ""}`}
                                                    value={data.tahun}
                                                    onChange={(e) => setData("tahun", e.target.value)}
                                                    min="1900"
                                                    max={new Date().getFullYear()}
                                                    required
                                                    disabled={isSaving}
                                                />
                                                {errors.tahun && (
                                                    <div className="invalid-feedback d-block mt-2">
                                                        <i className="fa fa-exclamation-circle me-1"></i>
                                                        {errors.tahun}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label-videos">
                                                <i className="fab fa-youtube me-2 text-danger"></i>
                                                YouTube Link <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="url"
                                                className={`form-control form-control-videos ${errors.linkvideo ? "is-invalid" : ""}`}
                                                value={data.linkvideo}
                                                onChange={(e) => setData("linkvideo", e.target.value)}
                                                placeholder="https://www.youtube.com/watch?v=..."
                                                required
                                                disabled={isSaving}
                                            />
                                            {errors.linkvideo && (
                                                <div className="invalid-feedback d-block mt-2">
                                                    <i className="fa fa-exclamation-circle me-1"></i>
                                                    {errors.linkvideo}
                                                </div>
                                            )}
                                            <div className="mt-2">
                                                <small className="text-muted">
                                                    <i className="fa fa-info-circle me-1"></i>
                                                    Supported formats: youtube.com/watch?v=... or youtu.be/...
                                                </small>
                                            </div>
                                        </div>

                                        {/* YouTube Preview */}
                                        {data.linkvideo && isValidYouTubeUrl(data.linkvideo) && (
                                            <div className="mb-4">
                                                <label className="form-label-videos">
                                                    <i className="fa fa-eye me-2 text-success"></i>
                                                    Video Preview
                                                </label>
                                                <div className="video-preview-container-modal">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe
                                                            src={getEmbedUrl(data.linkvideo)}
                                                            title="YouTube video preview"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                    <div className="mt-3 text-center">
                                                        <span className="badge bg-success">
                                                            <i className="fa fa-check-circle me-1"></i>
                                                            Valid YouTube Link
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="modal-footer-videos">
                                        <div className="d-flex justify-content-between w-100">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => {
                                                    if (!isSaving) {
                                                        setShowCreateModal(false);
                                                        reset();
                                                    }
                                                }}
                                                disabled={isSaving}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className={`btn btn-add-video text-white px-4 ${isSaving ? 'btn-add-video-loading' : ''}`}
                                                disabled={isSaving}
                                            >
                                                {isSaving ? (
                                                    <span className="btn-loading-text">
                                                        <i className="fa fa-spinner fa-spin me-2"></i>
                                                        Saving...
                                                    </span>
                                                ) : (
                                                    <span className="btn-loading-text">
                                                        <i className="fa fa-save me-2"></i>
                                                        Save Video
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </LayoutAccount>
        </>
    );
}