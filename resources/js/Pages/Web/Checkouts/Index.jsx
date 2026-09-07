import React from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import FormatPrice from "../../../Utils/FormatPrice";
import StoreCheckout from "./StoreCheckout";

export default function CheckoutIndex() {
    const { dataCarts, biodata } = usePage().props;

    const dpw = biodata?.province?.id || 1;
    const dpc = biodata?.city?.id || 1;
    const grandTotal = dataCarts?.price || 0;

    return (
        <>
            <Head title="Konfirmasi Checkout - IKATWI" />
            <LayoutWeb>
                <div className="container py-5 mt-5">
                    {/* Header */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 bg-white rounded-4 shadow-sm border-0">
                        <div className="d-flex align-items-center">
                            <div className="bg-primary bg-gradient p-3 rounded-4 me-3 text-white shadow-sm">
                                <i className="fa fa-cash-register fa-2x"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark">Konfirmasi Checkout</h4>
                                <p className="text-muted mb-0">
                                    Periksa identitas keanggotaan dan rincian tagihan sebelum membuat invoice pembayaran.
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 mt-md-0">
                            <span className="badge bg-light text-muted border px-3 py-2 rounded-pill">
                                Langkah 3 dari 4
                            </span>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Member Information & Payment Methods */}
                        <div className="col-lg-7">
                            {/* Member Details */}
                            <div className="card border-0 rounded-4 shadow-sm bg-white mb-4">
                                <div className="card-header bg-white border-0 py-3 ps-4">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="fa fa-user-check me-2 text-primary"></i>
                                        Data Anggota
                                    </h5>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="text-secondary text-uppercase d-block mb-1">Nama Lengkap</small>
                                                <strong className="text-dark fs-6">{biodata?.name}</strong>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="text-secondary text-uppercase d-block mb-1">No. Anggota</small>
                                                <strong className="text-dark fs-6">{biodata?.no_anggota || "-"}</strong>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="text-secondary text-uppercase d-block mb-1">DPW (Provinsi)</small>
                                                <span className="fw-semibold text-dark">{biodata?.province?.name || "-"}</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="text-secondary text-uppercase d-block mb-1">DPC (Kota/Kab)</small>
                                                <span className="fw-semibold text-dark">{biodata?.city?.name || "-"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Channel Preview */}
                            <div className="card border-0 rounded-4 shadow-sm bg-white">
                                <div className="card-header bg-white border-0 py-3 ps-4">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="fa fa-wallet me-2 text-primary"></i>
                                        Metode Pembayaran Tersedia
                                    </h5>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <p className="text-secondary small mb-3">
                                        Setelah menekan tombol "Proses Pembayaran", Anda akan diarahkan ke pop-up / halaman <strong>Duitku Payment Gateway</strong> untuk memilih metode berikut:
                                    </p>
                                    <div className="row g-2">
                                        <div className="col-6 col-md-4">
                                            <div className="border rounded-3 p-2 text-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="fw-bold d-block text-dark">Mandiri VA</small>
                                                <small className="text-muted">Otomatis</small>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="border rounded-3 p-2 text-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="fw-bold d-block text-dark">BNI VA</small>
                                                <small className="text-muted">Otomatis</small>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="border rounded-3 p-2 text-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="fw-bold d-block text-dark">BRI VA (BRIVA)</small>
                                                <small className="text-muted">Otomatis</small>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="border rounded-3 p-2 text-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="fw-bold d-block text-dark">Permata VA</small>
                                                <small className="text-muted">Otomatis</small>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="border rounded-3 p-2 text-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="fw-bold d-block text-dark">CIMB Niaga VA</small>
                                                <small className="text-muted">Otomatis</small>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="border rounded-3 p-2 text-center" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                <small className="fw-bold d-block text-dark">QRIS & E-Wallet</small>
                                                <small className="text-muted">Instant</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary & Action */}
                        <div className="col-lg-5">
                            <div className="card border-0 rounded-4 shadow-sm bg-white sticky-top" style={{ top: "90px" }}>
                                <div className="card-header bg-primary bg-gradient text-white border-0 py-3 rounded-top-4">
                                    <h5 className="mb-0 fw-bold">
                                        <i className="fa fa-receipt me-2"></i>
                                        Rincian Tagihan
                                    </h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Total Tagihan Item:</span>
                                        <strong className="text-dark">Rp {FormatPrice(grandTotal)}</strong>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="text-muted">Biaya Administrasi:</span>
                                        <span className="text-success fw-bold">Rp 0</span>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <span className="fw-bold text-dark fs-6">Grand Total:</span>
                                        <span className="fw-bold fs-3 text-primary">
                                            Rp {FormatPrice(grandTotal)}
                                        </span>
                                    </div>

                                    {/* Action button */}
                                    <StoreCheckout
                                        provinceID={dpw}
                                        cityID={dpc}
                                        grandTotal={grandTotal}
                                    />

                                    <div className="mt-3 text-center">
                                        <Link href="/carts" className="text-muted text-decoration-none small">
                                            <i className="fa fa-arrow-left me-1"></i> Kembali ke Keranjang
                                        </Link>
                                    </div>

                                    <div className="alert alert-warning border-0 rounded-3 mt-4 mb-0 small">
                                        <i className="fa fa-clock me-1 text-warning"></i>
                                        <strong>Penting:</strong> Setelah invoice dibuat, Anda memiliki waktu <strong>24 Jam (1x24 Jam)</strong> untuk menyelesaikan pembayaran.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}