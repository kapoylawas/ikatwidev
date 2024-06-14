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

export default function UserIndex() {
    //destruct props "users"
    const { users } = usePage().props;

    const currentDate = new Date();

    return (
        <>
            <Head>
                <title>User - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    {hasAnyPermission(["users.delete"]) && (
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3 col-12 mb-2">
                                    <Link
                                        href="/account/users/create"
                                        className="btn btn-md btn-admin border-0 shadow w-100"
                                        type="button"
                                    >
                                        <i className="fa fa-plus-circle me-2"></i>
                                        Add
                                    </Link>
                                </div>
                                <div className="col-md-9 col-12 mb-2">
                                    <Search URL={"/account/users"} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
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
                                                    style={{ width: "3%" }}
                                                >
                                                    File Pakta Integritas
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
                                                <tr
                                                    className={`verif-${
                                                        user.confirm == "true"
                                                    }`}
                                                    key={index}
                                                >
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
                                                        <a
                                                            href={
                                                                user.filepakta
                                                            }
                                                            target="_blank"
                                                        >
                                                            Lihat File
                                                        </a>
                                                    </td>
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
                                                        {hasAnyPermission([
                                                            "users.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/account/users/${user.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "users.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/account/users/verifikasiAnggota/${user.id}`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                Verif
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "users.delete",
                                                        ]) && (
                                                            <Delete
                                                                URL={
                                                                    "/account/users"
                                                                }
                                                                id={user.id}
                                                            />
                                                        )}
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
