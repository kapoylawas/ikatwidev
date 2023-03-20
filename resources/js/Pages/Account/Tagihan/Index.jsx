//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function TagihanIndex() {

    //destruct props "users"
    const { tagihans } = usePage().props;

    console.log(tagihans);

    return(
        <>
            <Head>
                <title>Tagihan Iuran - IKATWI</title>
            </Head>
            <LayoutAccount>
            <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Users
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "3%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "7%" }}
                                                >
                                                    nama
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "7%" }}
                                                >
                                                    Tagihan
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "10%" }}
                                                >
                                                    Tahun
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "4%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                      
                                            {tagihans.data.map((tagihan, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (tagihans.current_page -
                                                                1) *
                                                                tagihans.per_page}
                                                    </td>
                                                    <td>{tagihan.user.name}</td>
                                                    <td>
                                                        {tagihan.price}
                                                    </td>
                                                    <td>
                                                        {tagihan.tahun}
                                                    </td>
                                                    <td className="text-center">
                                                        
                                                            <Link
                                                                href={`/account/tagihan/${tagihan.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        
                                                    </td>
                                                </tr>
                                            ))}
                                          
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination links={tagihans.links} align={"end"} />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )
}