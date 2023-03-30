//import React
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import component Head and usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import hasAnyPermission from "../../../Utils/Permissions";

export default function Dashboard() {
    //destruct props
    const { auth, count } = usePage().props;

    return (
        <>
            <Head>
                <title>Dashboard - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12 col-md-12 col-lg-12 mb-4">
                        <div className="alert alert-success border-0 shadow-sm mb-0">
                            Selamat Datang, <strong>{auth.user.name}</strong>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-12 col-lg-3 mb-4">
                        <div className="card border-0 shadow-sm overflow-hidden">
                            <div className="card-body p-0 d-flex align-items-center">
                                <div
                                    className="bg-primary py-4 px-5 mfe-3"
                                    style={{ width: "130px" }}
                                >
                                    <i className="fas fa-circle-notch fa-spin fa-2x text-white"></i>
                                </div>
                                <div>
                                    <div className="text-value text-primary">
                                        {count.unpaiduser}
                                    </div>
                                    <div className="text-muted text-uppercase font-weight-bold small">
                                        UNPAID
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                        <div className="card border-0 rounded shadow-sm overflow-hidden">
                            <div className="card-body p-0 d-flex align-items-center">
                                <div
                                    className="bg-success py-4 px-5 mfe-3"
                                    style={{ width: "130px" }}
                                >
                                    <i className="fas fa-check-circle fa-2x text-white"></i>
                                </div>
                                <div>
                                    <div className="text-value text-success">
                                        {count.paiduser}
                                    </div>
                                    <div className="text-muted text-uppercase font-weight-bold small">
                                        PAID
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                        <div className="card border-0 rounded shadow-sm overflow-hidden">
                            <div className="card-body p-0 d-flex align-items-center">
                                <div
                                    className="bg-warning py-4 px-5 mfe-3"
                                    style={{ width: "130px" }}
                                >
                                    <i className="fas fa-exclamation-triangle fa-2x text-white"></i>
                                </div>
                                <div>
                                    <div className="text-value text-warning">
                                        {count.expireduser}
                                    </div>
                                    <div className="text-muted text-uppercase font-weight-bold small">
                                        EXPIRED
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 rounded shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-danger py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-times fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-danger">
                                            {count.cancelleduser}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            CANCELLED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                {/* <body>
                    <section style={{ border: "1pxsolid" }}>
                        <table width="100%">
                            <tr>
                                <td className="text-center-member">
                                    <div className="box">
                                        <img
                                            src="/assets/images/member.png"
                                            alt="card"
                                            width={"100%"}
                                        />

                                        <div className="logo mt-3">
                                            <img
                                                className="text-center"
                                                src="/assets/images/logo.png"
                                                alt="logo"
                                            />
                                        </div>
                                        <div
                                            style={{ marginRight: "auto" }}
                                            className="nama"
                                        >
                                            <strong>{auth.user.name}</strong>
                                        </div>
                                        <div className="telepon">01111111</div>
                                        <div
                                            style={{ marginTop: "120px" }}
                                            className="barcode text-left"
                                        >
                                            <QRCodeSVG
                                                value={auth.user.name}
                                                size={50}
                                                renderAs="canvas"
                                            />
                                        </div>
                                    </div>
                                </td>

                                <td
                                    class="text-center"
                                    style={{ width: "50%" }}
                                ></td>
                            </tr>
                        </table>
                    </section>
                </body> */}



               

                {hasAnyPermission(["dashboard.statistics"]) && (
                    <div className="row mt-2">
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-primary py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-circle-notch fa-spin fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-primary">
                                            {count.unpaid}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            UNPAID
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 rounded shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-success py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-check-circle fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-success">
                                            {count.paid}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            PAID
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 rounded shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-warning py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-exclamation-triangle fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-warning">
                                            {count.expired}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            EXPIRED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 rounded shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-danger py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-times fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-danger">
                                            {count.cancelled}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            CANCELLED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </LayoutAccount>
        </>
    );
}
