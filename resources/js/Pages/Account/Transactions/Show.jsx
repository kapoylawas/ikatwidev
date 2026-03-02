import React from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage } from "@inertiajs/inertia-react";
import FormatPrice from "../../../Utils/FormatPrice";

export default function TransactionShow() {
    const { transaction } = usePage().props;

    // Helper untuk status badge
    const getStatusBadge = (status) => {
        switch (status) {
            case "PAID":
                return (
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                        <i className="fa fa-check-circle me-2"></i>
                        LUNAS
                    </span>
                );
            case "UNPAID":
                return (
                    <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill">
                        <i className="fa fa-clock me-2"></i>
                        MENUNGGU PEMBAYARAN
                    </span>
                );
            case "CANCELLED":
                return (
                    <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill">
                        <i className="fa fa-times-circle me-2"></i>
                        DIBATALKAN
                    </span>
                );
            default:
                return (
                    <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill">
                        {status}
                    </span>
                );
        }
    };

    return (
        <>
            <Head>
                <title>Detail Transaksi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-4 p-3 bg-white rounded-3 shadow-sm">
                        <div className="bg-primary p-3 rounded-circle me-3">
                            <i className="fa fa-receipt fa-2x text-white"></i>
                        </div>
                        <div>
                            <h4 className="mb-1 fw-bold text-dark">Detail Transaksi</h4>
                            <p className="text-muted mb-0">Invoice: {transaction.invoice}</p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Status Card */}
                        <div className="col-12">
                            <div className="card border-0 rounded-4 shadow-sm bg-white">
                                <div className="card-body d-flex align-items-center justify-content-between py-4">
                                    <div className="d-flex align-items-center">
                                        <div className={`p-3 rounded-circle me-3 ${transaction.status === 'UNPAID' ? 'bg-warning' : transaction.status === 'PAID' ? 'bg-success' : 'bg-danger'}`}>
                                            <i className={`fa fa-${transaction.status === 'PAID' ? 'check' : transaction.status === 'UNPAID' ? 'clock' : 'times'} fa-2x text-white`}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 fw-bold text-dark">Status Pembayaran</h5>
                                            {getStatusBadge(transaction.status)}
                                        </div>
                                    </div>
                                    {transaction.status === "UNPAID" && (
                                        <a
                                            href={`https://app-prod.duitku.com/redirect_checkout?reference=${transaction.reference}&lang=id`}
                                            className="btn btn-success btn-lg px-4 rounded-pill shadow-sm"
                                        >
                                            <i className="fa fa-credit-card me-2"></i>
                                            Bayar Sekarang
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Transaction Info */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100">
                                <div className="card-header bg-white border-0 py-3">
                                    <h5 className="mb-0 fw-bold">
                                        <i className="fa fa-user-circle me-2 text-primary"></i>
                                        Informasi Pembeli
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase">Nama Lengkap</small>
                                        <p className="mb-0 fw-semibold fs-5">{transaction.user.name}</p>
                                    </div>
                                    <div className="mb-3">
                                        <small className="text-muted text-uppercase">DPC (Kota)</small>
                                        <p className="mb-0 fw-semibold">{transaction.city.name}</p>
                                    </div>
                                    <div className="mb-0">
                                        <small className="text-muted text-uppercase">DPW (Provinsi)</small>
                                        <p className="mb-0 fw-semibold">{transaction.province.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100">
                                <div className="card-header bg-white border-0 py-3">
                                    <h5 className="mb-0 fw-bold">
                                        <i className="fa fa-money-bill-wave me-2 text-primary"></i>
                                        Informasi Pembayaran
                                    </h5>
                                </div>
                                <div className="card-body">
                                    {transaction.tahun && (
                                        <div className="mb-3">
                                            <small className="text-muted text-uppercase">
                                                {transaction.tahun === "-" || transaction.tahun === "" ? "Jenis" : "Iuran Tahun"}
                                            </small>
                                            <p className="mb-0 fw-semibold">
                                                {transaction.tahun === "-" || transaction.tahun === "" ? "Donasi" : transaction.tahun}
                                            </p>
                                        </div>
                                    )}
                                    <div className="mb-0">
                                        <small className="text-muted text-uppercase">Total Pembayaran</small>
                                        <p className="mb-0 fw-bold fs-3 text-primary">
                                            Rp {FormatPrice(transaction.grand_total)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="col-12">
                            <div className="card border-0 rounded-4 shadow-sm">
                                <div className="card-header bg-white border-0 py-3">
                                    <h5 className="mb-0 fw-bold">
                                        <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                        Detail Produk
                                    </h5>
                                </div>
                                <div className="card-body">
                                    {transaction.transaction_details.map((detail, index) => (
                                        <div key={index} className="d-flex align-items-center p-3 mb-3 bg-light rounded-3">
                                            <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                                                <i className="fa fa-gift fa-2x text-primary"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1 fw-bold">{detail.product.title}</h6>
                                                <span className="badge bg-primary bg-opacity-10 text-primary">
                                                    {detail.size}
                                                </span>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-0 fw-bold fs-5 text-primary">
                                                    Rp {FormatPrice(detail.price)}
                                                </p>
                                                <small className="text-muted">{detail.qty} x item</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
