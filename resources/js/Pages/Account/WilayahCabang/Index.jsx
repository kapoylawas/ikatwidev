//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function WilayaCabangIndex() {
    const { wilayah } = usePage().props;
    console.log(wilayah);

    return (
        <>
            <Head>
                <title>Wilayah - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3 col-12 mb-2">
                                    <Link
                                        href="/account/wilayah/create"
                                        className="btn btn-md btn-admin border-0 shadow w-100"
                                        type="button"
                                    >
                                        <i className="fa fa-plus-circle me-2"></i>
                                        Add
                                    </Link>
                                </div>
                                <div className="col-md-9 col-12 mb-2">
                                    <Search URL={"/account/wilayah"} />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> Categories
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
                                                    Wilayah DPW
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    name ketua
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    alamat
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "7%" }}
                                                >
                                                    phone
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    email
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    instagram
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
                                            {wilayah.data.map(
                                                (wilaya, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (wilayah.current_page -
                                                                    1) *
                                                                    wilayah.per_page}
                                                        </td>
                                                        <td>{wilaya.province.name}</td>
                                                        <td>{wilaya.name_ketua}</td>
                                                        <td>{wilaya.alamat}</td>
                                                        <td>{wilaya.phone}</td>
                                                        <td>{wilaya.email}</td>
                                                        <td>{wilaya.instagram}</td>                                                        
                                                        <td className="text-center">
                                                            {hasAnyPermission([
                                                                "wilayah.edit",
                                                            ]) && (
                                                                <Link
                                                                    href={`/account/wilayah/${wilaya.id}/edit`}
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-pencil-alt"></i>
                                                                </Link>
                                                            )}
                                                            {hasAnyPermission([
                                                                "wilayah.delete",
                                                            ]) && (
                                                                <Delete URL={'/account/wilayah'} id={wilaya.id} />
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination
                                    links={wilayah.links}
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
