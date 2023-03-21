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

export default function DocumentsIndex() {
    //destruct props "users"
    const { users, transactions } = usePage().props;

    console.log(transactions);

    const status = transactions.map((ts) => ts.status);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    console.log(filter);

    //  const [status, setStatus] = useState(transactions.status);

    return (
        <>
            <Head>
                <title>User - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        {filter === "PAID" ? (
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
                                                        style={{ width: "10%" }}
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{ width: "10%" }}
                                                    >
                                                        Ijazah
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
                                                {users.data.map(
                                                    (user, index) => (
                                                        <tr key={index}>
                                                            <td>{user.name}</td>
                                                            <td>
                                                                <a
                                                                target="_blank"
                                                                    href={
                                                                        user.ijazah
                                                                    }
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-link">
                                                                        {" "}
                                                                        Lihat
                                                                    </i>
                                                                </a>
                                                            </td>
                                                            <td className="text-center">
                                                                <Link
                                                                    href={`/account/documents/${user.id}/edit`}
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >
                                                                    <i className="fa fa-upload"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination
                                        links={users.links}
                                        align={"end"}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="row mt-5">
                                <div className="col-12 col-md-12 col-lg-12 mb-4">
                                    <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                        <h5>
                                            Anda belum membayar tagihan IURAN.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
