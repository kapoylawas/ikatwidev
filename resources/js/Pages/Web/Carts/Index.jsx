import React from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Delete from "../../../Shared/Delete";
import FormatPrice from "../../../Utils/FormatPrice";

export default function CartIndex() {
    const { dataCarts, carts = [] } = usePage().props;

    return (
        <>
            <Head title="Keranjang Pembayaran - IKATWI" />
            <LayoutWeb>
                <div className="container py-5 mt-5">
                    {/* Header */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 p-4 bg-white rounded-4 shadow-sm border-0">
                        <div className="d-flex align-items-center">
                            <div className="bg-primary bg-gradient p-3 rounded-4 me-3 text-white shadow-sm">
                                <i className="fa fa-shopping-cart fa-2x"></i>
                            </div>
                            <div>
                                <h4 className="mb-1 fw-bold text-dark">Keranjang Pembayaran</h4>
                                <p className="text-muted mb-0">
                                    Tinjau rincian tagihan iuran atau donasi Anda sebelum melanjutkan ke checkout.
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 mt-md-0">
                            <Link href="/account/tagihan" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                                <i className="fa fa-arrow-left me-1"></i> Kembali ke Menu Tagihan
                            </Link>
                        </div>
                    </div>

                    {carts.length > 0 ? (
                        <div className="row g-4">
                            {/* Cart Items */}
                            <div className="col-lg-8">
                                <div className="card border-0 shadow-sm rounded-4 bg-white">
                                    <div className="card-header bg-white border-0 py-3 ps-4 d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 fw-bold text-dark">
                                            <i className="fa fa-list-check me-2 text-primary"></i>
                                            Daftar Item ({carts.length})
                                        </h5>
                                        <span className="badge bg-light text-muted border px-3 py-1 rounded-pill">
                                            Langkah 2 dari 4
                                        </span>
                                    </div>
                                    <div className="card-body p-4 pt-0">
                                        {carts.map((cart, index) => {
                                            const isIuran = cart.size === "Iuran" || (cart.product && cart.product.title && cart.product.title.toLowerCase().includes("iuran"));

                                            return (
                                                <div key={index}>
                                                    <div className="d-flex align-items-center p-3 border rounded-3" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                                        {/* Icon/Image */}
                                                        <div className={`p-3 rounded-3 me-3 text-white ${isIuran ? "bg-primary" : "bg-success"}`}>
                                                            <i className={`fa ${isIuran ? "fa-id-card" : "fa-hand-holding-heart"} fa-2x`}></i>
                                                        </div>

                                                        {/* Info */}
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 fw-bold text-dark">
                                                                {cart.product?.title || "Iuran Anggota IKATWI"}
                                                            </h6>
                                                            <div className="d-flex flex-wrap gap-2 align-items-center">
                                                                <span className={`badge ${isIuran ? "bg-primary" : "bg-success"}`}>
                                                                    {cart.size || "Iuran"}
                                                                </span>
                                                                {cart.tahun && cart.tahun !== "-" && (
                                                                    <span className="badge bg-dark text-white">
                                                                        Tahun {cart.tahun}
                                                                    </span>
                                                                )}
                                                                {cart.keterangan && (
                                                                    <small className="text-muted fst-italic">
                                                                        ({cart.keterangan})
                                                                    </small>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Price */}
                                                        <div className="text-end me-3">
                                                            <h5 className="mb-0 fw-bold text-primary">
                                                                Rp {FormatPrice(cart.price)}
                                                            </h5>
                                                            <small className="text-muted">{cart.qty}x Item</small>
                                                        </div>

                                                        {/* Delete button */}
                                                        <div>
                                                            <Delete URL={"/carts"} id={cart.id} />
                                                        </div>
                                                    </div>
                                                    {index < carts.length - 1 && <hr className="my-3 opacity-25" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Payment Guarantee Banner */}
                                <div className="p-3 bg-white border rounded-4 shadow-sm mt-4 d-flex align-items-center">
                                    <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3 text-success">
                                        <i className="fa fa-shield-check fa-2x"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-dark">Pembayaran Resmi & Terverifikasi</h6>
                                        <small className="text-muted">
                                            Didukung oleh Duitku Payment Gateway dengan Virtual Account (BCA, Mandiri, BNI, BRI, Permata) & QRIS otomatis.
                                        </small>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm rounded-4 sticky-top bg-white" style={{ top: "90px" }}>
                                    <div className="card-header bg-primary bg-gradient text-white border-0 py-3 rounded-top-4">
                                        <h5 className="mb-0 fw-bold">
                                            <i className="fa fa-calculator me-2"></i>
                                            Ringkasan Pembayaran
                                        </h5>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Jumlah Item:</span>
                                            <span className="fw-bold">{dataCarts.count} Item</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="text-muted">Biaya Layanan:</span>
                                            <span className="text-success fw-bold">Gratis (Rp 0)</span>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <span className="fw-bold text-dark fs-6">Total Pembayaran:</span>
                                            <span className="fw-bold fs-3 text-primary">
                                                Rp {FormatPrice(dataCarts.price)}
                                            </span>
                                        </div>

                                        <Link
                                            href="/checkouts"
                                            className="btn btn-success btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm d-flex align-items-center justify-content-center"
                                        >
                                            <span>Lanjutkan ke Checkout</span>
                                            <i className="fa fa-arrow-right ms-2"></i>
                                        </Link>

                                        <div className="text-center mt-3">
                                            <Link href="/account/tagihan" className="text-muted text-decoration-none small">
                                                <i className="fa fa-arrow-left me-1"></i> Kembali ke Menu Tagihan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-5 bg-white rounded-4 shadow-sm border" style={{ borderColor: '#e2e8f0' }}>
                            <div className="rounded-circle p-5 d-inline-block mb-4 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                                <i className="fa fa-shopping-cart fa-4x text-muted opacity-50"></i>
                            </div>
                            <h4 className="fw-bold text-dark mb-2">Keranjang Pembayaran Kosong</h4>
                            <p className="text-muted mb-4">
                                Anda belum memiliki tagihan atau donasi yang dipilih untuk dibayar.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Link
                                    href="/account/tagihan"
                                    className="btn btn-primary btn-lg rounded-pill px-4 fw-semibold"
                                >
                                    <i className="fa fa-credit-card me-2"></i>
                                    Lihat Tagihan Iuran
                                </Link>
                                <Link
                                    href="/account/donasi"
                                    className="btn btn-outline-secondary btn-lg rounded-pill px-4 fw-semibold"
                                >
                                    <i className="fa fa-donate me-2"></i>
                                    Program Donasi
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </LayoutWeb>
        </>
    );
}
