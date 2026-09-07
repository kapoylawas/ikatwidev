//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import formatPrice
import FormatPrice from "../../../Utils/FormatPrice";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function TransactionIndex() {
    //destruct props "transactions" & "filters"
    const { transactions, filters = {} } = usePage().props;

    //state search and status filter
    const [search, setSearch] = useState(filters.q || "");
    const [status, setStatus] = useState(filters.status || "");
    const [isLoading, setIsLoading] = useState(false);

    //handle search & filter submit
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const params = {};
        if (search.trim()) params.q = search.trim();
        if (status) params.status = status;

        Inertia.get("/account/transactions", params, {
            preserveState: true,
            onFinish: () => setIsLoading(false),
        });
    };

    //handle reset filter
    const handleReset = () => {
        setSearch("");
        setStatus("");
        setIsLoading(true);
        Inertia.get("/account/transactions", {}, {
            onFinish: () => setIsLoading(false),
        });
    };

    const hasActiveFilters = search.trim() !== "" || status !== "";

    const destroy = (invoice) => {
        Swal.fire({
            title: "Hapus Transaksi?",
            text: "Data transaksi akan dihapus permanen dan tidak dapat dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/account/transactions/${invoice}`, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Terhapus!",
                            text: "Transaksi berhasil dihapus.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    },
                });
            }
        });
    };

    return (
        <>
            <Head>
                <title>Riwayat Transaksi - IKATWI</title>
            </Head>
            <LayoutAccount>
                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 mt-2">
                    <div>
                        <h4 className="fw-bold mb-1" style={{ color: '#0f172a', letterSpacing: '-0.02em' }}>
                            <i className="fa fa-receipt text-primary me-2"></i>
                            Riwayat Transaksi
                        </h4>
                        <p className="text-muted mb-0" style={{ fontSize: '0.86rem' }}>
                            Pantau, verifikasi, dan kelola seluruh transaksi pembayaran iuran anggota IKATWI
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        {hasAnyPermission(["permissions.index"]) && (
                            <a
                                href="/account/reports/transaction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #cbd5e1',
                                    color: '#1e293b',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.84rem',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <i className="fa fa-file-excel" style={{ color: '#059669', fontSize: '1rem' }}></i>
                                <span>Export ke Excel</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Filter & Search Card */}
                <div
                    className="card border-0 shadow-sm mb-4"
                    style={{
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                    }}
                >
                    <div className="card-body p-3 p-md-4">
                        <form onSubmit={handleFilterSubmit} className="row g-3 align-items-end">
                            {/* Search Input */}
                            <div className="col-12 col-md-5">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-search me-1 text-muted"></i> Cari Transaksi
                                </label>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm pe-4"
                                        placeholder="No. Invoice, Nama, No. Anggota, Email..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        style={{
                                            height: '40px',
                                            borderRadius: '8px',
                                            borderColor: '#cbd5e1',
                                            backgroundColor: '#f8fafc',
                                            fontSize: '0.85rem',
                                            color: '#1e293b',
                                        }}
                                    />
                                    {search && (
                                        <button
                                            type="button"
                                            onClick={() => setSearch("")}
                                            className="btn btn-sm position-absolute top-50 end-0 translate-middle-y text-muted border-0 bg-transparent p-2 me-1"
                                            title="Hapus teks pencarian"
                                        >
                                            <i className="fa fa-times"></i>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Filter Status */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <label className="form-label small fw-bold text-dark mb-1">
                                    <i className="fa fa-filter me-1 text-muted"></i> Status Pembayaran
                                </label>
                                <select
                                    className="form-select form-select-sm"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    style={{
                                        height: '40px',
                                        borderRadius: '8px',
                                        borderColor: '#cbd5e1',
                                        backgroundColor: '#f8fafc',
                                        fontSize: '0.85rem',
                                        color: '#1e293b',
                                    }}
                                >
                                    <option value="">Semua Status Transaksi</option>
                                    <option value="PAID">PAID (Lunas)</option>
                                    <option value="UNPAID">UNPAID (Belum Bayar)</option>
                                    <option value="EXPIRED">EXPIRED (Kadaluarsa)</option>
                                    <option value="CANCELLED">CANCELLED (Dibatalkan)</option>
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="col-12 col-sm-6 col-md-4 d-flex gap-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn btn-sm text-white d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1 shadow-sm"
                                    style={{
                                        height: '40px',
                                        borderRadius: '8px',
                                        backgroundColor: '#0284c7',
                                        borderColor: '#0284c7',
                                        fontWeight: 600,
                                        fontSize: '0.85rem',
                                    }}
                                >
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <i className="fa fa-search"></i>
                                    )}
                                    <span>Cari Data</span>
                                </button>

                                {hasActiveFilters && (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        disabled={isLoading}
                                        className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 px-3 shadow-sm"
                                        style={{
                                            height: '40px',
                                            borderRadius: '8px',
                                            backgroundColor: '#f1f5f9',
                                            borderColor: '#cbd5e1',
                                            color: '#475569',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                        }}
                                        title="Reset semua filter"
                                    >
                                        <i className="fa fa-rotate-left"></i>
                                        <span>Reset</span>
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Table Data Card */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div
                            className="card border-0 shadow-sm"
                            style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid #e2e8f0',
                            }}
                        >
                            <div
                                className="card-header bg-white py-3 px-4 d-flex justify-content-between align-items-center"
                                style={{ borderBottom: '1px solid #f1f5f9' }}
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            backgroundColor: '#f0f9ff',
                                            color: '#0284c7',
                                        }}
                                    >
                                        <i className="fa fa-shopping-cart" style={{ fontSize: '0.85rem' }}></i>
                                    </div>
                                    <span className="fw-bold" style={{ color: '#0f172a', fontSize: '0.95rem' }}>
                                        Daftar Transaksi
                                    </span>
                                </div>
                                <span className="badge px-3 py-1.5 rounded-pill" style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.78rem', fontWeight: 600 }}>
                                    Total: {transactions.total || 0} Data
                                </span>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-custom align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: "5%", textAlign: "center" }}>
                                                    No.
                                                </th>
                                                <th scope="col" style={{ width: "24%" }}>
                                                    Nama & Invoice
                                                </th>
                                                <th scope="col" style={{ width: "16%" }}>
                                                    Total Pembayaran
                                                </th>
                                                <th scope="col" style={{ width: "15%", textAlign: "center" }}>
                                                    Status
                                                </th>
                                                <th scope="col" style={{ width: "25%" }}>
                                                    Tanggal Transaksi
                                                </th>
                                                <th scope="col" style={{ width: "15%", textAlign: "center" }}>
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.data.length > 0 ? (
                                                transactions.data.map(
                                                    (transaction, index) => (
                                                        <tr key={transaction.id || index}>
                                                            <td className="text-center">
                                                                <span className="table-num-pill">
                                                                    {++index +
                                                                        (transactions.current_page -
                                                                            1) *
                                                                            transactions.per_page}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="fw-bold text-dark" style={{ fontSize: '0.9rem' }}>
                                                                    {transaction.user?.name || "-"}
                                                                </div>
                                                                <div className="font-monospace text-muted" style={{ fontSize: '0.75rem' }}>
                                                                    {transaction.invoice}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="fw-bold text-dark font-monospace" style={{ fontSize: '0.88rem' }}>
                                                                    Rp. {FormatPrice(transaction.grand_total)}
                                                                </span>
                                                            </td>
                                                            <td className="text-center">
                                                                {transaction.status === "UNPAID" && (
                                                                    <span
                                                                        className="badge px-2.5 py-1 rounded-pill"
                                                                        style={{
                                                                            backgroundColor: '#fefce8',
                                                                            color: '#854d0e',
                                                                            border: '1px solid #fde047',
                                                                            fontSize: '0.75rem',
                                                                            fontWeight: 700
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-clock me-1 text-warning"></i> UNPAID
                                                                    </span>
                                                                )}
                                                                {transaction.status === "PAID" && (
                                                                    <span
                                                                        className="badge px-2.5 py-1 rounded-pill"
                                                                        style={{
                                                                            backgroundColor: '#ecfdf5',
                                                                            color: '#047857',
                                                                            border: '1px solid #a7f3d0',
                                                                            fontSize: '0.75rem',
                                                                            fontWeight: 700
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-check-circle me-1 text-success"></i> PAID
                                                                    </span>
                                                                )}
                                                                {transaction.status === "CANCELLED" && (
                                                                    <span
                                                                        className="badge px-2.5 py-1 rounded-pill"
                                                                        style={{
                                                                            backgroundColor: '#fef2f2',
                                                                            color: '#991b1b',
                                                                            border: '1px solid #fecaca',
                                                                            fontSize: '0.75rem',
                                                                            fontWeight: 700
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-times-circle me-1 text-danger"></i> CANCELLED
                                                                    </span>
                                                                )}
                                                                {transaction.status === "EXPIRED" && (
                                                                    <span
                                                                        className="badge px-2.5 py-1 rounded-pill"
                                                                        style={{
                                                                            backgroundColor: '#f1f5f9',
                                                                            color: '#475569',
                                                                            border: '1px solid #cbd5e1',
                                                                            fontSize: '0.75rem',
                                                                            fontWeight: 700
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-history me-1 text-muted"></i> EXPIRED
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <div className="fw-semibold text-dark" style={{ fontSize: '0.82rem' }}>
                                                                    {transaction.created_at}
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="d-flex justify-content-center gap-1">
                                                                    {hasAnyPermission([
                                                                        "transactions.show",
                                                                    ]) && (
                                                                        <Link
                                                                            href={`/account/transactions/${transaction.invoice}`}
                                                                            className="btn btn-sm d-inline-flex align-items-center justify-content-center shadow-sm"
                                                                            style={{
                                                                                width: '32px',
                                                                                height: '32px',
                                                                                borderRadius: '6px',
                                                                                backgroundColor: '#0f172a',
                                                                                border: '1px solid #0f172a',
                                                                                color: '#ffffff'
                                                                            }}
                                                                            title="Lihat Detail Transaksi"
                                                                        >
                                                                            <i className="fa fa-list-ul" style={{ fontSize: '0.78rem' }}></i>
                                                                        </Link>
                                                                    )}
                                                                    {hasAnyPermission([
                                                                        "transactions.index",
                                                                    ]) && (
                                                                        <button
                                                                            onClick={() => destroy(transaction.invoice)}
                                                                            className="btn btn-sm d-inline-flex align-items-center justify-content-center shadow-sm"
                                                                            style={{
                                                                                width: '32px',
                                                                                height: '32px',
                                                                                borderRadius: '6px',
                                                                                backgroundColor: '#fef2f2',
                                                                                border: '1px solid #fca5a5',
                                                                                color: '#dc2626'
                                                                            }}
                                                                            title="Hapus Transaksi"
                                                                        >
                                                                            <i className="fa fa-trash" style={{ fontSize: '0.78rem' }}></i>
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ),
                                                )
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="text-center py-5">
                                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                                            <div
                                                                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                                                                style={{
                                                                    width: '56px',
                                                                    height: '56px',
                                                                    backgroundColor: '#f8fafc',
                                                                    border: '1px solid #e2e8f0',
                                                                    color: '#94a3b8',
                                                                    fontSize: '1.5rem',
                                                                }}
                                                            >
                                                                <i className="fa fa-search"></i>
                                                            </div>
                                                            <h6 className="fw-bold text-dark mb-1">
                                                                Tidak Ada Data Transaksi
                                                            </h6>
                                                            <p className="text-muted small mb-3" style={{ maxWidth: '350px' }}>
                                                                {hasActiveFilters
                                                                    ? "Tidak ditemukan transaksi yang sesuai dengan kata kunci atau filter yang Anda pilih."
                                                                    : "Belum ada riwayat transaksi yang tersimpan di sistem."}
                                                            </p>
                                                            {hasActiveFilters && (
                                                                <button
                                                                    type="button"
                                                                    onClick={handleReset}
                                                                    className="btn btn-sm btn-outline-secondary px-3"
                                                                    style={{ borderRadius: '8px' }}
                                                                >
                                                                    <i className="fa fa-rotate-left me-1"></i> Reset Pencarian
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination
                                    links={transactions.links}
                                    align={"end"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
