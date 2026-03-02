import React, { useState } from "react";

// Import layout
import LayoutAccount from "../../../Layouts/Account";

// Import Head, usePage, useForm
import { Head, usePage, useForm } from "@inertiajs/inertia-react";

export default function DonasiIndex() {
    // Destructure props "donasi" - single product object
    const { donasi } = usePage().props;

    // State for formatted display
    const [displayNominal, setDisplayNominal] = useState("");

    // useForm for submission
    const { data, setData, post, processing, errors } = useForm({
        product_id: donasi?.id || "",
        price: "",
        size: "Donasi",
    });

    // Format to Rupiah
    const formatRupiah = (value) => {
        const number = value.replace(/[^0-9]/g, "");
        return number ? new Intl.NumberFormat("id-ID").format(number) : "";
    };

    // Handle input change
    const handleNominalChange = (e) => {
        const value = e.target.value;
        const rawValue = value.replace(/[^0-9]/g, "");
        setDisplayNominal(formatRupiah(value));
        setData("price", rawValue);
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/account/donasi", {
            onSuccess: () => {
                setDisplayNominal("");
            },
        });
    };

    return (
        <LayoutAccount>
            <Head title="Donasi - IKATWI" />

            {/* Header Section */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="d-flex align-items-center mb-4">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                            <i className="fa fa-donate fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 className="mb-1 fw-bold text-dark">Program Donasi</h4>
                            <p className="text-muted mb-0">Berikan kontribusi terbaik Anda untuk membantu sesama</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donasi Detail Card */}
            <div className="row justify-content-center">
                {donasi ? (
                    <div className="col-lg-8 col-md-10 col-12">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            {/* Card Header with Gradient */}
                            <div className="card-header bg-primary text-white border-0 py-5 text-center">
                                <div className="bg-white bg-opacity-25 p-4 rounded-circle d-inline-block mb-3">
                                    <i className="fa fa-hand-holding-heart fa-3x"></i>
                                </div>
                                <h3 className="fw-bold mb-0">{donasi.title}</h3>
                            </div>

                            {/* Card Body */}
                            <div className="card-body p-5">
                                {/* Category Badge */}
                                <div className="text-center mb-4">
                                    <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill fs-6">
                                        <i className="fa fa-tag me-2"></i>
                                        {donasi.category?.name || "Donasi"}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <h6 className="text-muted mb-3 text-uppercase fs-7 fw-bold letter-spacing-1">
                                        Deskripsi
                                    </h6>
                                    <div
                                        className="text-dark fs-5 lh-lg"
                                        dangerouslySetInnerHTML={{
                                            __html: donasi.description || "Tidak ada deskripsi tersedia.",
                                        }}
                                    />
                                </div>

                                {/* Status */}
                                <div className="text-center mb-4">
                                    {donasi.status === "active" ? (
                                        <span className="badge bg-success bg-opacity-10 text-success px-4 py-2 rounded-pill fs-6">
                                            <i className="fa fa-check-circle me-2"></i> Program Aktif
                                        </span>
                                    ) : (
                                        <span className="badge bg-secondary bg-opacity-10 text-secondary px-4 py-2 rounded-pill fs-6">
                                            <i className="fa fa-clock me-2"></i> Program Nonaktif
                                        </span>
                                    )}
                                </div>

                                {/* Divider */}
                                <hr className="my-4" />

                                {/* Donation Form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Nominal Input */}
                                    <div className="mb-4">
                                        <label className="form-label fw-bold text-dark">
                                            <i className="fa fa-money-bill-wave me-2 text-primary"></i>
                                            Nominal Donasi
                                        </label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-primary text-white border-0 fw-bold">
                                                Rp
                                            </span>
                                            <input
                                                type="text"
                                                className={`form-control border border-2 ${errors.price ? "border-danger is-invalid" : "border-primary"}`}
                                                placeholder="Masukkan nominal donasi"
                                                value={displayNominal}
                                                onChange={handleNominalChange}
                                                required
                                                style={{ fontSize: '1.25rem', fontWeight: '600' }}
                                            />
                                        </div>
                                        {errors.price && (
                                            <div className="invalid-feedback d-block">{errors.price}</div>
                                        )}
                                        <small className="text-muted mt-2 d-block">
                                            <i className="fa fa-info-circle me-1"></i>
                                            Minimal donasi Rp 10.000
                                        </small>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm"
                                            disabled={processing || !data.price}
                                        >
                                            <i className="fa fa-heart me-2"></i>
                                            {processing ? "Memproses..." : "Donasi Sekarang"}
                                        </button>
                                        <p className="text-muted mt-3 mb-0 small">
                                            <i className="fa fa-shield-alt me-1"></i>
                                            Pembayaran aman & terpercaya
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-12">
                        <div className="text-center py-5">
                            <div className="bg-light rounded-circle p-4 d-inline-block mb-3">
                                <i className="fa fa-inbox fa-3x text-muted"></i>
                            </div>
                            <h5 className="text-muted">Program donasi tidak ditemukan</h5>
                            <p className="text-muted">Silakan cek kembali nanti</p>
                        </div>
                    </div>
                )}
            </div>
        </LayoutAccount>
    );
}