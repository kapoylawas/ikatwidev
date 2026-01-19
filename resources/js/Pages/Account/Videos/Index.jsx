import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link, useForm
import { Head, usePage, Link, useForm } from "@inertiajs/inertia-react";

//import Inertia untuk method post
import { Inertia } from "@inertiajs/inertia";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

//import SweetAlert
import Swal from 'sweetalert2';

export default function VideosIndex() {
    const { videos, errors } = usePage().props;
    const [showCreateModal, setShowCreateModal] = useState(false);
    
    // Debug: check if permission works
    console.log("Has create permission:", hasAnyPermission(["videos.create"]));
    console.log("Show modal state:", showCreateModal);
    
    const { data, setData, processing, reset } = useForm({
        name: "",
        status: "draft",
        tahun: new Date().getFullYear(),
        linkvideo: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();

        //sending data menggunakan Inertia.post (seperti contoh sliders)
        Inertia.post('/account/videos', {
            //data
            name: data.name,
            status: data.status,
            tahun: data.tahun,
            linkvideo: data.linkvideo,
        }, {
            onSuccess: () => {
                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Video saved successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });

                //reset form
                reset();
                setShowCreateModal(false);
            },
            onError: (errors) => {
                //show error alert if needed
                if (errors) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please check the form for errors',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }
        });
    };

    // Fungsi untuk mendapatkan embed URL dari link YouTube
    const getEmbedUrl = (url) => {
        if (!url) return "";
        
        // Format youtu.be
        if (url.includes("youtu.be")) {
            const id = url.split("/").pop().split("?")[0];
            return `https://www.youtube.com/embed/${id}`;
        }
        
        // Format youtube.com/watch?v=
        if (url.includes("youtube.com/watch")) {
            try {
                const urlObj = new URL(url);
                const videoId = urlObj.searchParams.get("v");
                if (videoId) {
                    return `https://www.youtube.com/embed/${videoId}`;
                }
            } catch (e) {
                return "";
            }
        }
        
        // Format embed
        if (url.includes("youtube.com/embed")) {
            return url;
        }
        
        return "";
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
                        .modal-backdrop-custom {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0,0,0,0.5);
                            z-index: 9999;
                        }
                        
                        .modal-custom {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 10000;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                        .btn-success {
                            background-color: #28a745 !important;
                            border-color: #28a745 !important;
                        }
                        
                        .btn-success:hover {
                            background-color: #218838 !important;
                            border-color: #1e7e34 !important;
                        }
                    `}
                </style>
            </Head>
            <LayoutAccount>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3 col-12 mb-2">
                                    <Link
                                        href="/account/videos"
                                        className="btn btn-md btn-primary border-0 shadow w-100"
                                        type="button"
                                    >
                                        <i className="fa fa-long-arrow-alt-left me-2"></i>
                                        Back
                                    </Link>
                                </div>
                                <div className="col-md-9 col-12 mb-2">
                                    <div className="row">
                                        <div className="col-md-8 col-12 mb-2">
                                            {/* Search Component */}
                                            <Search
                                                URL={"/account/videos"}
                                                placeholder={"Search by video name..."}
                                            />
                                        </div>
                                        <div className="col-md-4 col-12 mb-2">
                                            <button
                                                onClick={() => {
                                                    console.log("Add Video clicked!");
                                                    setShowCreateModal(true);
                                                }}
                                                className="btn btn-md btn-success border-0 shadow w-100"
                                                type="button"
                                            >
                                                <i className="fa fa-plus-circle me-2"></i>
                                                Add Video
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="card border-0 rounded shadow-sm border-top-success">
                                <div className="card-header">
                                    <span className="fw-bold">
                                        <i className="fa fa-video me-2"></i> Master Videos
                                    </span>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hovered">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "5%" }}>
                                                        No.
                                                    </th>
                                                    <th scope="col" style={{ width: "25%" }}>
                                                        Video Name
                                                    </th>
                                                    <th scope="col" style={{ width: "10%" }}>
                                                        Tahun
                                                    </th>
                                                    <th scope="col" style={{ width: "10%" }}>
                                                        Status
                                                    </th>
                                                    <th scope="col" style={{ width: "30%" }}>
                                                        Video Preview
                                                    </th>
                                                    <th scope="col" style={{ width: "20%" }}>
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {videos.data.length > 0 ? (
                                                    videos.data.map((video, index) => (
                                                        <tr key={video.id}>
                                                            <td className="text-center">
                                                                {++index +
                                                                    (videos.current_page - 1) *
                                                                        videos.per_page}
                                                            </td>
                                                            <td>{video.name}</td>
                                                            <td>{video.tahun}</td>
                                                            <td>
                                                                <span
                                                                    className={`badge ${
                                                                        video.status === "published"
                                                                            ? "bg-success"
                                                                            : video.status === "draft"
                                                                            ? "bg-warning"
                                                                            : "bg-secondary"
                                                                    }`}
                                                                >
                                                                    {video.status}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                {video.linkvideo && (
                                                                    <div className="video-preview">
                                                                        <a
                                                                            href={video.linkvideo}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="d-block mb-2"
                                                                        >
                                                                            <i className="fab fa-youtube text-danger me-1"></i>
                                                                            Link Video
                                                                        </a>
                                                                        <iframe
                                                                            width="200"
                                                                            height="113"
                                                                            src={getEmbedUrl(video.linkvideo)}
                                                                            title={video.name}
                                                                            frameBorder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowFullScreen
                                                                        ></iframe>
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td className="text-center">
                                                                {hasAnyPermission([
                                                                    "videos.edit",
                                                                ]) && (
                                                                    <Link
                                                                        href={`/account/videos/${video.id}/edit`}
                                                                        className="btn btn-primary btn-sm me-2"
                                                                    >
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>
                                                                )}
                                                                {hasAnyPermission([
                                                                    "videos.delete",
                                                                ]) && (
                                                                    <Delete
                                                                        URL={"/account/videos"}
                                                                        id={video.id}
                                                                    />
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={6}>
                                                            <div
                                                                className="alert alert-danger border-0 rounded shadow-sm w-100 text-center"
                                                                role="alert"
                                                            >
                                                                No Data Found!
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination links={videos.links} align={"end"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CREATE MODAL */}
                {showCreateModal && (
                    <>
                        {/* Backdrop */}
                        <div 
                            className="modal-backdrop-custom"
                            onClick={() => {
                                setShowCreateModal(false);
                                reset();
                            }}
                        ></div>
                        
                        {/* Modal Content */}
                        <div className="modal-custom">
                            <div className="modal-dialog modal-lg" style={{ width: "90%", maxWidth: "800px" }}>
                                <div className="modal-content">
                                    <div className="modal-header bg-success text-white">
                                        <h5 className="modal-title">
                                            <i className="fa fa-video me-2"></i> Add New Video
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white"
                                            onClick={() => {
                                                setShowCreateModal(false);
                                                reset();
                                            }}
                                            aria-label="Close"
                                            disabled={processing}
                                        ></button>
                                    </div>
                                    <form onSubmit={submitHandler}>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Video Name <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    placeholder="Enter video name"
                                                    required
                                                />
                                                {errors.name && (
                                                    <div className="invalid-feedback">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">
                                                            Status <span className="text-danger">*</span>
                                                        </label>
                                                        <select
                                                            className={`form-control ${errors.status ? "is-invalid" : ""}`}
                                                            value={data.status}
                                                            onChange={(e) => setData("status", e.target.value)}
                                                            required
                                                        >
                                                            <option value="draft">Draft</option>
                                                            <option value="published">Published</option>
                                                            <option value="archived">Archived</option>
                                                        </select>
                                                        {errors.status && (
                                                            <div className="invalid-feedback">
                                                                {errors.status}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">
                                                            Tahun <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className={`form-control ${errors.tahun ? "is-invalid" : ""}`}
                                                            value={data.tahun}
                                                            onChange={(e) => setData("tahun", e.target.value)}
                                                            min="1900"
                                                            max={new Date().getFullYear()}
                                                            placeholder="Enter year"
                                                            required
                                                        />
                                                        {errors.tahun && (
                                                            <div className="invalid-feedback">
                                                                {errors.tahun}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    YouTube Link <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="url"
                                                    className={`form-control ${errors.linkvideo ? "is-invalid" : ""}`}
                                                    value={data.linkvideo}
                                                    onChange={(e) => setData("linkvideo", e.target.value)}
                                                    placeholder="https://www.youtube.com/watch?v=..."
                                                    required
                                                />
                                                {errors.linkvideo && (
                                                    <div className="invalid-feedback">
                                                        {errors.linkvideo}
                                                    </div>
                                                )}
                                                <small className="text-muted">
                                                    Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                                    atau https://youtu.be/dQw4w9WgXcQ
                                                </small>
                                            </div>

                                            {/* YouTube Preview */}
                                            {data.linkvideo && isValidYouTubeUrl(data.linkvideo) && (
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Video Preview
                                                    </label>
                                                    <div className="border rounded p-3 bg-light">
                                                        <div className="ratio ratio-16x9">
                                                            <iframe
                                                                src={getEmbedUrl(data.linkvideo)}
                                                                title="YouTube video preview"
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                        <p className="text-muted mt-2 mb-0">
                                                            Pastikan video YouTube dapat diakses publik
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => {
                                                    setShowCreateModal(false);
                                                    reset();
                                                }}
                                                disabled={processing}
                                            >
                                                <i className="fa fa-times me-2"></i>
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-success"
                                                disabled={processing}
                                            >
                                                {processing ? (
                                                    <>
                                                        <span
                                                            className="spinner-border spinner-border-sm me-2"
                                                            role="status"
                                                            aria-hidden="true"
                                                        ></span>
                                                        Saving...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fa fa-save me-2"></i>
                                                        Save Video
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </LayoutAccount>
        </>
    );
}