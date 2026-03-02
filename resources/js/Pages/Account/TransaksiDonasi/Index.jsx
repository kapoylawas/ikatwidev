import React from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import FormatPrice from "../../../Utils/FormatPrice";
import Pagination from "../../../Shared/Pagination";

export default function TransaksiDonasiIndex() {
    const { transaksiDonasi } = usePage().props;

    const getStatusBadge = (status) => {
        switch (status) {
            case "PAID":
                return (
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                        <i className="fa fa-check-circle me-1"></i> LUNAS
                    </span>
                );
            case "UNPAID":
                return (
                    <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill">
                        <i className="fa fa-clock me-1"></i> MENUNGGU
                    </span>
                );
            case "CANCELLED":
                return (
                    <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill">
                        <i className="fa fa-times-circle me-1"></i> BATAL
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
        <LayoutAccount>
            <Head title="Transaksi Donasi - IKATWI" />

            <div className="container-fluid py-4">
                {/* Header */}
                <div className="d-flex align-items-center mb-4 p-3 bg-white rounded-3 shadow-sm">
                    <div className="bg-primary p-3 rounded-circle me-3">
                        <i className="fa fa-hand-holding-heart fa-2x text-white"></i>
                    </div>
                    <div>
                        <h4 className="mb-1 fw-bold text-dark">Transaksi Donasi</h4>
                        <p className="text-muted mb-0">Daftar semua donasi yang masuk</p>
                    </div>
                </div>

                {/* Stats Card */}
                <div className="row g-3 mb-4">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 bg-primary text-white">
                            <div className="card-body d-flex align-items-center">
                                <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                                    <i className="fa fa-donate fa-2x"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0 text-white-50">Total Donasi</h6>
                                    <h4 className="mb-0 fw-bold">{transaksiDonasi.total || transaksiDonasi.data.length}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 bg-success text-white">
                            <div className="card-body d-flex align-items-center">
                                <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                                    <i className="fa fa-check-circle fa-2x"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0 text-white-50">Lunas</h6>
                                    <h4 className="mb-0 fw-bold">
                                        {transaksiDonasi.data.filter(t => t.status === 'PAID').length}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 bg-warning text-white">
                            <div className="card-body d-flex align-items-center">
                                <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                                    <i className="fa fa-clock fa-2x"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0 text-white-50">Menunggu</h6>
                                    <h4 className="mb-0 fw-bold">
                                        {transaksiDonasi.data.filter(t => t.status === 'UNPAID').length}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-header bg-white border-0 py-3">
                        <h5 className="mb-0 fw-bold">
                            <i className="fa fa-list me-2 text-primary"></i>
                            Daftar Transaksi Donasi
                        </h5>
                    </div>
                    <div className="card-body">
                        {transaksiDonasi.data.length > 0 ? (
                            <>
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle">
                                        <thead className="bg-light">
                                            <tr>
                                                <th className="border-0">No. Invoice</th>
                                                <th className="border-0">Nama Donatur</th>
                                                {/* <th className="border-0">DPC/DPW</th> */}
                                                <th className="border-0">Nominal</th>
                                                <th className="border-0">Status</th>
                                                <th className="border-0">Tanggal</th>
                                                <th className="border-0">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transaksiDonasi.data.map((transaksi, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span className="fw-bold text-primary">
                                                            {transaksi.invoice}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2">
                                                                <i className="fa fa-user text-primary"></i>
                                                            </div>
                                                            <span className="fw-semibold">
                                                                {transaksi.user.name}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    {/* <td>
                                                        <small className="d-block text-muted">
                                                            {transaksi.city?.name}
                                                        </small>
                                                        <small className="text-muted">
                                                            {transaksi.province?.name}
                                                        </small>
                                                    </td> */}
                                                    <td>
                                                        <span className="fw-bold text-primary fs-5">
                                                            Rp {FormatPrice(transaksi.grand_total)}
                                                        </span>
                                                    </td>
                                                    <td>{getStatusBadge(transaksi.status)}</td>
                                                    <td>
                                                        <small className="text-muted">
                                                            {new Date(transaksi.created_at).toLocaleDateString('id-ID', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })}
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            href={`/account/transactions/${transaksi.invoice}`}
                                                            className="btn btn-sm btn-primary rounded-pill"
                                                        >
                                                            <i className="fa fa-eye me-1"></i> Detail
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination links={transaksiDonasi.links} align={'end'} />
                            </>
                        ) : (
                            <div className="text-center py-5">
                                <div className="bg-light rounded-circle p-4 d-inline-block mb-3">
                                    <i className="fa fa-inbox fa-3x text-muted"></i>
                                </div>
                                <h5 className="text-muted">Belum ada transaksi donasi</h5>
                                <p className="text-muted">Data donasi akan muncul di sini</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutAccount>
    );
}
