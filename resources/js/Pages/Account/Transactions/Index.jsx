//import react
import React from "react";

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

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function TransactionIndex() {
    //destruct props "transactions"
    const { transactions } = usePage().props;

    const destroy = (invoice) => {
        Swal.fire({
            title: "Hapus Transaksi?",
            text: "Data transaksi akan dihapus permanen dan tidak dapat dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d",
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
                <title>Transactions - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-8 col-12 mb-2">
                                <Search URL={"/account/transactions"} />
                            </div>
                            {hasAnyPermission(["permissions.index"]) && (
                                <div class="col-md-4 col-12 mb-2">
                                    <a
                                        href="/account/reports/transaction"
                                        target="_blank"
                                        class="btn btn-admin btn-md border-0 shadow w-100 text-white"
                                    >
                                        <i class="fa fa-file-excel"></i>{" "}
                                        DOWNLOAD EXCEL
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shopping-cart"></i>{" "}
                                    Transactions
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
                                                <th scope="col" style={{ width: "22%" }}>
                                                    Nama Lengkap
                                                </th>
                                                <th scope="col" style={{ width: "15%" }}>
                                                    Total Pembayaran
                                                </th>
                                                <th scope="col" style={{ width: "14%", textAlign: "center" }}>
                                                    Status
                                                </th>
                                                <th scope="col" style={{ width: "26%" }}>
                                                    Tanggal Transaksi
                                                </th>
                                                <th scope="col" style={{ width: "12%", textAlign: "center" }}>
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.data.map(
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
