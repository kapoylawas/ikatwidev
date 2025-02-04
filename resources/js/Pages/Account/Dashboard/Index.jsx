//import React
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import component Head and usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import hasAnyPermission from "../../../Utils/Permissions";

import Chart from 'react-apexcharts';


export default function Dashboard() {
    //destruct props
    const { auth, count } = usePage().props;
    console.log(count);


    // Data for the pie chart
    const statusPekerjaan = {
        series: [count.pns, count.swasta, count.kontrak, count.pppk, count.belumBekerja],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['PNS', 'Swasta', 'BLU/KONTRAK', 'PPPK', 'Belum Bekerja'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    };

    const lulusanUniv = {
        series: [count.poltekesKemenkesSurakarta, count.akademiTerapiWicaraYayasanBinaWicaraJakarta, count.politeknikAlIslamBandung, count.stikesMercubaktijayaPadang, count.lainLain],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Poltekes Kemenkes Surakarta', 'Akademi Terapi Wicara Yayasan Bina Wicara Jakarta', 'Politeknik AL Islam Bandung', 'Stikes Mercubaktijaya Padang', 'Lain-Lain'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    };

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

                {hasAnyPermission(["dashboard.statistics"]) && (
                    <>
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

                        <div className="row mt-2 justify-content-center">
                            <div className="col-12 col-lg-5 mb-4">
                                <div className="card border-0 rounded shadow-sm overflow-hidden">
                                    <div className="card-header">
                                        <h5 className="mb-0 text-center">Status Pekerjaan</h5>
                                    </div>
                                    <Chart
                                        options={statusPekerjaan.options}
                                        series={statusPekerjaan.series}
                                        type="pie"
                                        width="100%"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mb-4">
                                <div className="card border-0 rounded shadow-sm overflow-hidden">
                                    <div className="card-header">
                                        <h5 className="mb-0 text-center">Asal Lulusan Perguruan Tinggi</h5>
                                    </div>
                                    <Chart
                                        options={lulusanUniv.options}
                                        series={lulusanUniv.series}
                                        type="pie"
                                        width="107%"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </LayoutAccount>
        </>
    );
}
