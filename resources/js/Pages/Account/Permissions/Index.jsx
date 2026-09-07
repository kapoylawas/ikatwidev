import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function PermissionIndex() {
    //destruct props "permissions"
    const { permissions } = usePage().props;

    return (
        <>
            <Head>
                <title>Permissions - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-9 col-12 mb-2">
                                <Search URL={"/account/permissions"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-key"></i> Permissions</span>
                            </div>
                            <div className="card-body">
                                
                                <div className="table-responsive">
                                    <table className="table table-custom align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: '5%', textAlign: 'center' }}>No.</th>
                                                <th scope="col">Permission Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {permissions.data.map((permission, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        <span className="table-num-pill">
                                                            {++index + (permissions.current_page-1) * permissions.per_page}
                                                        </span>
                                                    </td>
                                                    <td className="fw-semibold text-dark">{permission.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={permissions.links} align={'end'}/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
