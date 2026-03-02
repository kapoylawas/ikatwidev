import React, { useState } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";

export default function DonasiIndex() {
    const { donasi } = usePage().props;
    const [displayNominal, setDisplayNominal] = useState("");

    const { data, setData, post, processing, errors } = useForm({
        product_id: donasi?.id || "",
        price: "",
        size: "Donasi",
    });

    const formatRupiah = (value) => {
        const number = value.replace(/[^0-9]/g, "");
        return number ? new Intl.NumberFormat("id-ID").format(number) : "";
    };

    const handleNominalChange = (e) => {
        const value = e.target.value;
        const rawValue = value.replace(/[^0-9]/g, "");
        setDisplayNominal(formatRupiah(value));
        setData("price", rawValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validasi minimal donasi Rp 10.000
        const minDonasi = 10000;
        const nominal = parseInt(data.price) || 0;
        
        if (nominal < minDonasi) {
            Swal.fire({
                icon: "warning",
                title: "Nominal Terlalu Kecil",
                text: "Minimal donasi adalah Rp 10.000",
                confirmButtonText: "Mengerti",
                confirmButtonColor: "#0d6efd",
            });
            return;
        }
        
        post("/account/donasi", {
            onSuccess: () => setDisplayNominal(""),
        });
    };

    // Quick amount buttons
    const quickAmounts = [50000, 100000, 250000, 500000, 1000000];

    return (
        <LayoutAccount>
            <Head title="Donasi - IKATWI" />

            <div className="container-fluid py-4">
                {/* Header */}
                <div className="d-flex align-items-center mb-4 p-3 bg-white rounded-3 shadow-sm">
                    <div className="bg-primary p-3 rounded-circle me-3">
                        <i className="fa fa-donate fa-2x text-white"></i>
                    </div>
                    <div>
                        <h4 className="mb-1 fw-bold text-dark">Program Donasi</h4>
                        <p className="text-muted mb-0">Berikan kontribusi terbaik Anda untuk membantu sesama</p>
                    </div>
                </div>

                {donasi ? (
                    <div className="row g-4">
                        {/* Left Column - Program Info */}
                        <div className="col-lg-7">
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-header bg-primary text-white border-0 py-4">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                                            <i className="fa fa-hand-holding-heart fa-2x"></i>
                                        </div>
                                        <div>
                                            <span className="badge bg-white bg-opacity-25 text-white mb-1">
                                                {donasi.category?.name || "Donasi"}
                                            </span>
                                            <h5 className="mb-0 fw-bold">{donasi.title}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h6 className="text-primary fw-bold mb-3">
                                        <i className="fa fa-info-circle me-2"></i>Tentang Program
                                    </h6>
                                    <div
                                        className="text-dark lh-lg mb-4"
                                        dangerouslySetInnerHTML={{
                                            __html: donasi.description || "Tidak ada deskripsi tersedia.",
                                        }}
                                    />
                                    
                                    <div className="d-flex align-items-center">
                                        {donasi.status === "active" ? (
                                            <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                                                <i className="fa fa-check-circle me-2"></i> Program Aktif
                                            </span>
                                        ) : (
                                            <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill">
                                                <i className="fa fa-clock me-2"></i> Program Nonaktif
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Donation Form */}
                        <div className="col-lg-5">
                            <div className="card border-0 shadow-lg rounded-4 bg-white">
                                <div className="card-header bg-white border-0 pt-4 pb-0">
                                    <h5 className="fw-bold text-dark">
                                        <i className="fa fa-heart text-danger me-2"></i>
                                        Masukkan Nominal
                                    </h5>
                                </div>
                                <div className="card-body p-4">
                                    <form onSubmit={handleSubmit}>
                                        {/* Quick Amount Buttons */}
                                        <div className="mb-3">
                                            <label className="form-label text-muted small fw-bold text-uppercase">
                                                Pilih Nominal Cepat
                                            </label>
                                            <div className="row g-2">
                                                {quickAmounts.map((amount) => (
                                                    <div className="col-6" key={amount}>
                                                        <button
                                                            type="button"
                                                            className={`btn w-100 rounded-3 fw-semibold ${
                                                                data.price === amount.toString()
                                                                    ? "btn-primary"
                                                                    : "btn-outline-primary"
                                                            }`}
                                                            onClick={() => {
                                                                setDisplayNominal(formatRupiah(amount.toString()));
                                                                setData("price", amount.toString());
                                                            }}
                                                        >
                                                            Rp {formatRupiah(amount.toString())}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="text-center text-muted mb-3">— atau —</div>

                                        {/* Nominal Input */}
                                        <div className="mb-4">
                                            <label className="form-label text-muted small fw-bold text-uppercase">
                                                Nominal Lainnya
                                            </label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-primary text-white border-0 fw-bold fs-5">
                                                    Rp
                                                </span>
                                                <input
                                                    type="text"
                                                    className={`form-control border-2 fs-5 ${
                                                        errors.price ? "border-danger is-invalid" : "border-primary"
                                                    }`}
                                                    placeholder="0"
                                                    value={displayNominal}
                                                    onChange={handleNominalChange}
                                                    required
                                                />
                                            </div>
                                            {errors.price && (
                                                <div className="invalid-feedback d-block">{errors.price}</div>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="alert alert-info border-0 rounded-3 d-flex align-items-center mb-4">
                                            <i className="fa fa-info-circle fa-lg me-3 text-primary"></i>
                                            <div>
                                                <small className="d-block text-dark">
                                                    <strong>Minimal donasi:</strong> Rp 10.000
                                                </small>
                                                <small className="text-muted">
                                                    Donasi Anda akan disalurkan untuk program ini
                                                </small>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm"
                                            disabled={processing || !data.price}
                                        >
                                            <i className="fa fa-heart me-2"></i>
                                            {processing ? "Memproses..." : "Donasi Sekarang"}
                                        </button>

                                        <div className="text-center mt-3">
                                            <small className="text-muted">
                                                <i className="fa fa-shield-alt me-1 text-success"></i>
                                                Pembayaran aman & terpercaya
                                            </small>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <div className="bg-light rounded-circle p-4 d-inline-block mb-3">
                            <i className="fa fa-inbox fa-3x text-muted"></i>
                        </div>
                        <h5 className="text-muted">Program donasi tidak ditemukan</h5>
                        <p className="text-muted">Silakan cek kembali nanti</p>
                    </div>
                )}
            </div>
        </LayoutAccount>
    );
}