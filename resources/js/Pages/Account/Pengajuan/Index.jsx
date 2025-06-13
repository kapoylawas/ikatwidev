//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function PengajuanIndex() {
    const { transactions, statusAnggota, pengajuans } = usePage().props;

    const status = transactions.map((ts) => ts.status);
    const [name] = useState(statusAnggota.status_anggota);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    return (
        <>
            <Head>
                <title>User Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-5 col-12 mb-2">
                                <Link
                                    href="/account/pengajuan/create"
                                    class="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i class="fa fa-plus-circle me-2"></i>
                                    Form Pengajuan Mutasi
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-2">
                    {/* {filter === "PAID" || name === "Anggota Kehormatan" ? ( */}
                    <>
                        <div className="row mt-2 mb-4">
                            <div className="col-12">
                                <div className="card border-0 rounded shadow-sm border-top-admin">
                                    <div className="card-header">
                                        <span className="font-weight-bold">
                                            <i className="fa fa-folder"></i>{" "}
                                            Pengajuan Pindah
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-hovered">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            style={{
                                                                width: "5%",
                                                            }}
                                                        >
                                                            No.
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            style={{
                                                                width: "15%",
                                                            }}
                                                        >
                                                            Nama
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            style={{
                                                                width: "15%",
                                                            }}
                                                        >
                                                            Keterangan
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            style={{
                                                                width: "15%",
                                                            }}
                                                        >
                                                            Status
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            style={{
                                                                width: "15%",
                                                            }}
                                                        >
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {pengajuans.data.map(
                                                        (
                                                            pengajuan,
                                                            index
                                                        ) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    {++index +
                                                                        (pengajuans.current_page -
                                                                            1) *
                                                                        pengajuans.per_page}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        pengajuan.name
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        pengajuan.keterangan
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {pengajuan.status ==
                                                                        "sudah" && (
                                                                            <button className="btn btn-sm btn-success">
                                                                                <i className="fa fa-check-circle"></i>{" "}
                                                                                Sudah disetujui
                                                                            </button>
                                                                        )}
                                                                    {pengajuan.status ==
                                                                        "belum" && (
                                                                            <button className="btn btn-sm btn-danger">
                                                                                <i className="fa fa-times"></i>{" "}
                                                                                Belum disetujui
                                                                            </button>
                                                                        )}
                                                                </td>
                                                                <td className="text-center">
                                                                    <Link
                                                                        href={`/account/pengajuan/${pengajuan.id}/edit`}
                                                                        className="btn btn-primary btn-sm me-2"
                                                                    >
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>

                                                                    <Delete
                                                                        URL={
                                                                            "/account/pengajuan"
                                                                        }
                                                                        id={
                                                                            pengajuan.id
                                                                        }
                                                                    />
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                        <Pagination
                                            links={pengajuans.links}
                                            align={"end"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    {/* ) : (
                        <div className="row mt-5">
                            <div className="col-12 col-md-12 col-lg-12 mb-4">
                                <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                    <h5>Anda belum membayar tagihan IURAN.</h5>
                                </div>
                            </div>
                        </div>
                    )} */}
                </div>
            </LayoutAccount>
        </>
    );
}
