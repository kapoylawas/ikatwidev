//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from '../../../Shared/Delete';

export default function KegiatanIndex() {
    const { kegiatans } = usePage().props;

    return (
        <>
            <Head>
                <title>Admin Kegiatan - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3 col-12 mb-2">
                                <Link
                                    href="/account/kegiatan/create"
                                    class="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i class="fa fa-plus-circle me-2"></i>
                                    Tambah
                                </Link>
                            </div>
                            <div class="col-md-9 col-12 mb-2">
                                <Search URL={"/account/kegiatan"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> Agenda Kegiatan
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Kegiatan Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Link
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Image
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {kegiatans.data.map(
                                                (kegiatan, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (kegiatans.current_page -
                                                                    1) *
                                                                    kegiatans.per_page}
                                                        </td>
                                                        <td>{kegiatan.name}</td>
                                                        <td>{kegiatan.link}</td>
                                                        <td className="text-center">
                                                            <img
                                                                src={
                                                                    kegiatan.image
                                                                }
                                                                className="rounded-3"
                                                                width={"50"}
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                           
                                                                <Link
                                                                    href={`/account/kegiatan/${kegiatan.id}/edit`}
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-pencil-alt"></i>
                                                                </Link>
                                                         
                                                            
                                                                <Delete
                                                                    URL={
                                                                        "/account/kegiatan"
                                                                    }
                                                                    id={
                                                                        kegiatan.id
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
                                    links={kegiatans.links}
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
