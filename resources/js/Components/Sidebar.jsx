//import React
import React from "react";

//import permissions
import hasAnyPermission from "../Utils/Permissions";

//import Link and usePage
import { Link, usePage } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Sidebar() {
    //destruct URL from props
    const { url } = usePage();

    //function logout
    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post("/logout");
    };

    return (
        <>
            <div className="list-group list-group-flush">
                {hasAnyPermission(["dashboard.index"]) && (
                    <Link
                        href="/account/dashboard"
                        className={`${
                            url.startsWith("/account/dashboard")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-tachometer-alt me-2"></i> Dashboard
                    </Link>
                )}
                {hasAnyPermission(["categories.index"]) && (
                    <Link
                        href="/account/categories"
                        className={`${
                            url.startsWith("/account/categories")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-folder me-2"></i> Categories
                    </Link>
                )}

                <Link
                    href="/account/biodatas"
                    className={`${
                        url.startsWith("/account/biodatas")
                            ? "active list-group-item list-group-item-action list-group-item-light p-3"
                            : "list-group-item list-group-item-action list-group-item-light p-3"
                    }`}
                >
                    <i className="fa fa-user me-2"></i> Biodata
                </Link>
                
                <Link
                    href="/account/tagihan"
                    className={`${
                        url.startsWith("/account/tagihan")
                            ? "active list-group-item list-group-item-action list-group-item-light p-3"
                            : "list-group-item list-group-item-action list-group-item-light p-3"
                    }`}
                >
                    <i className="fa fa-money-bill me-2"></i> Tagihan Iuran
                </Link>
                <Link
                    href="/account/documents"
                    className={`${
                        url.startsWith("/account/documents")
                            ? "active list-group-item list-group-item-action list-group-item-light p-3"
                            : "list-group-item list-group-item-action list-group-item-light p-3"
                    }`}
                >
                    <i className="fa fa-file-pdf me-2"></i> Dokumen
                </Link>

                {hasAnyPermission(["products.index"]) && (
                    <Link
                        href="/account/products"
                        className={`${
                            url.startsWith("/account/products")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-shopping-bag me-2"></i> Kegiatan
                    </Link>
                )}
                {hasAnyPermission(["wilayah.index"]) && (
                    <Link
                        href="/account/wilayah"
                        className={`${
                            url.startsWith("/account/wilayah")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-map-marker me-2"></i> Wilayah
                    </Link>
                )}
                {hasAnyPermission(["transactions.index"]) && (
                    <Link
                        href="/account/transactions"
                        className={`${
                            url.startsWith("/account/transactions")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-shopping-cart me-2"></i>{" "}
                        Transactions
                    </Link>
                )}
                {hasAnyPermission(["sliders.index"]) && (
                    <Link
                        href="/account/sliders"
                        className={`${
                            url.startsWith("/account/sliders")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-images me-2"></i> Sliders
                    </Link>
                )}
                {hasAnyPermission(["roles.index"]) && (
                    <Link
                        href="/account/roles"
                        className={`${
                            url.startsWith("/account/roles")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-shield-alt me-2"></i> Roles
                    </Link>
                )}
                {hasAnyPermission(["permissions.index"]) && (
                    <Link
                        href="/account/permissions"
                        className={`${
                            url.startsWith("/account/permissions")
                                ? "active list-group-item list-group-item-action list-group-item-light p-3"
                                : "list-group-item list-group-item-action list-group-item-light p-3"
                        }`}
                    >
                        <i className="fa fa-key me-2"></i> Permissions
                    </Link>
                )}
                {hasAnyPermission(["users.index"]) && (
                <Link
                    href="/account/users"
                    className={`${
                        url.startsWith("/account/users")
                            ? "active list-group-item list-group-item-action list-group-item-light p-3"
                            : "list-group-item list-group-item-action list-group-item-light p-3"
                    }`}
                >
                    <i className="fa fa-users me-2"></i> Users
                </Link>
                )}
                <Link
                    onClick={logoutHandler}
                    className={`${
                        url.startsWith("/logout")
                            ? "active list-group-item list-group-item-action list-group-item-light p-3"
                            : "list-group-item list-group-item-action list-group-item-light p-3"
                    }`}
                >
                    <i className="fa fa-sign-out-alt me-2"></i> Logout
                </Link>
                <Link
                    href="/"
                    className={`${
                        url.startsWith("home")
                            ? "active list-group-item list-group-item-action list-group-item-light p-3"
                            : "list-group-item list-group-item-action list-group-item-light p-3"
                    }`}
                >
                    <i className="fa fa-sign-out-alt me-2"></i> Home
                </Link>
            </div>
        </>
    );
}
