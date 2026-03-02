import React from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Delete from "../../../Shared/Delete";
import FormatPrice from "../../../Utils/FormatPrice";

export default function CartIndex() {
    const { dataCarts, carts } = usePage().props;

    return (
        <>
            <Head>
                <title>Keranjang - IKATWI</title>
            </Head>
            <LayoutWeb>
                <div className="container py-5 mt-5">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-4 p-3 bg-white rounded-3 shadow-sm">
                        <div className="bg-primary p-3 rounded-circle me-3">
                            <i className="fa fa-shopping-cart fa-2x text-white"></i>
                        </div>
                        <div>
                            <h4 className="mb-1 fw-bold text-dark">Keranjang Pembayaran</h4>
                            <p className="text-muted mb-0">Review item donasi Anda sebelum checkout</p>
                        </div>
                    </div>

                    {carts.length > 0 ? (
                        <div className="row g-4">
                            {/* Cart Items */}
                            <div className="col-lg-8">
                                <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-header bg-white border-0 py-3">
                                        <h5 className="mb-0 fw-bold">
                                            <i className="fa fa-list me-2 text-primary"></i>
                                            Item Donasi ({carts.length})
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        {carts.map((cart, index) => (
                                            <div key={index}>
                                                <div className="d-flex align-items-center p-3 border rounded-3">
                                                    {/* Image */}
                                                    <div className="bg-primary p-3 rounded-3 me-3">
                                                        <i className="fa fa-hand-holding-heart fa-2x text-white"></i>
                                                    </div>
                                                    
                                                    {/* Info */}
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1 fw-bold text-dark">
                                                            {cart.product.title}
                                                        </h6>
                                                        <span className="badge bg-primary text-white">
                                                            {cart.size}
                                                        </span>
                                                        {cart.tahun && cart.tahun !== "-" && (
                                                            <span className="badge bg-dark text-white ms-2">
                                                                {cart.tahun}
                                                            </span>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Price */}
                                                    <div className="text-end me-3">
                                                        <h5 className="mb-0 fw-bold text-primary">
                                                            Rp {FormatPrice(cart.price)}
                                                        </h5>
                                                        <small className="text-dark">{cart.qty} item</small>
                                                    </div>
                                                    
                                                    {/* Delete */}
                                                    <Delete URL={'/carts'} id={cart.id} />
                                                </div>
                                                {index < carts.length - 1 && <hr className="my-3" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="col-lg-4">
                                <div className="card border-0 shadow-lg rounded-4 sticky-top" style={{ top: '20px' }}>
                                    <div className="card-header bg-primary text-white border-0 py-3">
                                        <h5 className="mb-0 fw-bold">
                                            <i className="fa fa-calculator me-2"></i>
                                            Ringkasan
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="text-muted">Total Item</span>
                                            <span className="fw-bold">{dataCarts.count} item</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <span className="fw-bold fs-5">Total</span>
                                            <span className="fw-bold fs-3 text-primary">
                                                Rp {FormatPrice(dataCarts.price)}
                                            </span>
                                        </div>
                                        
                                        <Link
                                            href="/checkouts"
                                            className="btn btn-success btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm"
                                        >
                                            Lanjutkan Pembayaran
                                            <i className="fa fa-arrow-right ms-2"></i>
                                        </Link>
                                        
                                        <div className="text-center mt-3">
                                            <Link href="/account/donasi" className="text-muted text-decoration-none small">
                                                <i className="fa fa-arrow-left me-1"></i>
                                                Kembali ke Donasi
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <div className="bg-light rounded-circle p-5 d-inline-block mb-4">
                                <i className="fa fa-shopping-cart fa-4x text-muted"></i>
                            </div>
                            <h4 className="text-muted mb-2">Keranjang Kosong</h4>
                            <p className="text-muted mb-4">Anda belum menambahkan donasi ke keranjang</p>
                            <Link
                                href="/account/donasi"
                                className="btn btn-primary btn-lg rounded-pill px-5"
                            >
                                <i className="fa fa-donate me-2"></i>
                                Mulai Donasi
                            </Link>
                        </div>
                    )}
                </div>
            </LayoutWeb>
        </>
    );
}
