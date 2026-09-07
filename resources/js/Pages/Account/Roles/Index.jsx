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
import Delete from '../../../Shared/Delete';

export default function RoleIndex() {
    const { roles } = usePage().props;

    return (
        <>
            <Head>
                <title>Roles - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3 col-12 mb-2">
                                <Link
                                    href="/account/roles/create"
                                    class="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i class="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                            <div class="col-md-9 col-12 mb-2">
                                <Search URL={"/account/roles"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shield-alt"></i> Roles
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-custom align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: "5%", textAlign: "center" }}>
                                                    No.
                                                </th>
                                                <th scope="col" style={{ width: "20%" }}>
                                                    Role Name
                                                </th>
                                                <th scope="col" style={{ width: "60%" }}>
                                                    Permissions
                                                </th>
                                                <th scope="col" style={{ width: "15%", textAlign: "center" }}>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roles.data.map((role, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        <span className="table-num-pill">
                                                            {++index +
                                                                (roles.current_page -
                                                                    1) *
                                                                    roles.per_page}
                                                        </span>
                                                    </td>
                                                    <td className="fw-bold text-dark">{role.name}</td>
                                                    <td>
                                                        <div className="d-flex flex-wrap gap-1">
                                                            {role.permissions.map(
                                                                (permission, pIndex) => (
                                                                    <span
                                                                        className="badge px-2 py-1 rounded"
                                                                        style={{
                                                                            backgroundColor: '#eff6ff',
                                                                            color: '#1d4ed8',
                                                                            border: '1px solid #bfdbfe',
                                                                            fontSize: '0.74rem',
                                                                            fontWeight: 600
                                                                        }}
                                                                        key={pIndex}
                                                                    >
                                                                        {permission.name}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center gap-1">
                                                            {hasAnyPermission([
                                                                "roles.edit",
                                                            ]) && (
                                                                <Link
                                                                    href={`/account/roles/${role.id}/edit`}
                                                                    className="btn btn-sm d-inline-flex align-items-center justify-content-center shadow-sm"
                                                                    style={{
                                                                        width: '32px',
                                                                        height: '32px',
                                                                        borderRadius: '6px',
                                                                        backgroundColor: '#eff6ff',
                                                                        border: '1px solid #93c5fd',
                                                                        color: '#1d4ed8'
                                                                    }}
                                                                    title="Edit Role"
                                                                >
                                                                    <i className="fa fa-pen" style={{ fontSize: '0.78rem' }}></i>
                                                                </Link>
                                                            )}
                                                            {hasAnyPermission([
                                                                "roles.delete",
                                                            ]) && (
                                                                <Delete URL={'/account/roles'} id={role.id} />
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination links={roles.links} align={'end'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
