//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";


export default function BiodataIndex() {
    //destruct props "users"
    const { users } = usePage().props;

    const currentDate = new Date();

    return (
        <>
            <Head>
                <title>User - IKATWI</title>
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
                                                    style={{ width: "10%" }}
                                                >
                                                    Foto
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "10%" }}
                                                >
                                                    No Anggota
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "3%" }}
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    DPW
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    DPC
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    No Str
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tgl ex
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "10%" }}
                                                >
                                                    Role
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "30%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.data.map((user, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (users.current_page -
                                                                1) *
                                                                users.per_page}
                                                    </td>
                                                    <td className="text-center">
                                                        <img
                                                            src={user.image}
                                                            className="rounded-3"
                                                            width={"50"}
                                                            alt="Deskripsi gambar"
                                                            onError={(e) => {
                                                                e.target.onerror =
                                                                    null; // menghindari infinite loop jika terjadi kesalahan lagi
                                                                e.target.src =
                                                                    "/assets/images/user.png"; // mengganti gambar dengan gambar "tidak ditemukan"
                                                            }}
                                                        />
                                                    </td>
                                                    <td>{user.no_anggota}</td>
                                                    <td>{user.name}</td>
                                                    <td>
                                                        {user.province.name}
                                                    </td>
                                                    <td>
                                                        {user.city_id === 0 ? (
                                                            <p>DPC tidak ada</p>
                                                        ) : (
                                                            user.city.name
                                                        )}
                                                    </td>
                                                    <td>{user.no_str}</td>
                                                    <td>{user.date_exprd}</td>
                                                    <td>
                                                        {new Date(
                                                            user.date_exprd
                                                        ) >= currentDate
                                                            ? "Aktif"
                                                            : "Tidak Aktif"}
                                                    </td>
                                                    <td>
                                                        {user.roles.map(
                                                            (role, index) => (
                                                                <span
                                                                    className="btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2"
                                                                    key={index}
                                                                >
                                                                    {role.name}
                                                                </span>
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="text-center">
                                                        
                                                            <Link
                                                                href={`/account/biodatas/${user.id}/edit`}
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
                                <Pagination links={users.links} align={"end"} />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
