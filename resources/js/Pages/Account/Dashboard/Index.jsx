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
    const { auth, count, usersCountByProvince } = usePage().props;

    const currentYear = new Date().getFullYear();
    const provinceLabels = usersCountByProvince.map(item => item.province_name);
    const provinceCounts = usersCountByProvince.map(item => item.user_count);
    const categories = [...provinceLabels];

    // Function to generate random colors 
    const getRandomColorPie = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to generate random colors
    const generateRandomColors = (count) => {
        return Array.from({ length: count }, () => getRandomColorPie());
    };

    // Create series data with random colors
    const seriesData = [{
        name: 'Users Count',
        data: provinceCounts,
    }];

    // Data for the bar chart
    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        xaxis: {
            categories: categories,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: true,
        },
        colors: provinceCounts.map(() => getRandomColorPie()), // Assign random colors to the bars
    };

    // Data for the pie chart
    const statusPekerjaan = {
        series: [
            count.pns,
            count.swasta,
            count.kontrak,
            count.pppk,
            count.belumBekerja
        ],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [
                `PNS: ${count.pns}`,
                `Swasta: ${count.swasta}`,
                `BLU/KONTRAK: ${count.kontrak}`,
                `PPPK: ${count.pppk}`,
                `Belum Bekerja: ${count.belumBekerja}`
            ],
            colors: generateRandomColors(
                count.pns,
                count.swasta,
                count.kontrak,
                count.pppk,
                count.belumBekerja
            ),
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

    // lulusan univ
    const lulusanUniv = {
        series: [
            count.poltekesKemenkesSurakarta,
            count.akademiTerapiWicaraYayasanBinaWicaraJakarta,
            count.politeknikAlIslamBandung,
            count.stikesMercubaktijayaPadang,
            count.lainLain
        ],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [
                `Poltekes Kemenkes Surakarta: ${count.poltekesKemenkesSurakarta}`,
                `Akademi Terapi Wicara Yayasan Bina Wicara Jakarta: ${count.akademiTerapiWicaraYayasanBinaWicaraJakarta}`,
                `Politeknik AL Islam Bandung: ${count.politeknikAlIslamBandung}`,
                `Stikes Mercubaktijaya Padang: ${count.stikesMercubaktijayaPadang}`,
                `Lain-Lain: ${count.lainLain}`
            ],
            colors: generateRandomColors(
                count.poltekesKemenkesSurakarta,
                count.akademiTerapiWicaraYayasanBinaWicaraJakarta,
                count.politeknikAlIslamBandung,
                count.stikesMercubaktijayaPadang,
                count.lainLain
            ),
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

    // tempat bekerja
    const tempatBekerja = {
        series: [
            count.klinikSwasta,
            count.rumahSakitSwasta,
            count.rumahSakitUmumPusat,
            count.rumahSakitUmumDaerah,
            count.rumahSakitMiliter,
            count.rumahSakitKhusus,
            count.puskesmas,
            count.sekolahLuarBiasa,
            count.perguruanTinggi,
            count.belum_bekerja,
            count.freelance,
            count.lainnya,
        ],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [
                `Klinik Swasta: ${count.klinikSwasta}`,
                `Rumah Sakit Swasta: ${count.rumahSakitSwasta}`,
                `Rumah Sakit Umum Pusat: ${count.rumahSakitUmumPusat}`,
                `Rumah Sakit Umum Daerah: ${count.rumahSakitUmumDaerah}`,
                `Rumah Sakit Militer: ${count.rumahSakitMiliter}`,
                `Rumah Sakit Khusus: ${count.rumahSakitKhusus}`,
                `Puskesmas: ${count.puskesmas}`,
                `Sekolah Luar Biasa: ${count.sekolahLuarBiasa}`,
                `Perguruan Tinggi: ${count.perguruanTinggi}`,
                `Belum Bekerja: ${count.belum_bekerja}`,
                `Freelance: ${count.freelance}`,
                `Lainnya: ${count.lainnya}`
            ],
            colors: generateRandomColors(
                count.klinikSwasta,
                count.rumahSakitSwasta,
                count.rumahSakitUmumPusat,
                count.rumahSakitUmumDaerah,
                count.rumahSakitMiliter,
                count.rumahSakitKhusus,
                count.puskesmas,
                count.sekolahLuarBiasa,
                count.perguruanTinggi,
                count.belum_bekerja,
                count.freelance,
                count.lainnya,
            ),
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

    // jenjang pendidikan
    const jenjangPendidikan = {
        series: [
            count.D3,
            count.D4,
            count.S2,
            count.S3,
        ],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [
                `DIII: ${count.D3}`,
                `DIV: ${count.D4}`,
                `S2 (Magister Terapi Wicara): ${count.S2}`,
                `S3 (Doktor Terapi Wicara): ${count.S3}`,
            ],
            colors: generateRandomColors(count.D3, count.D4, count.S2, count.S3),
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

    // tempat bekerja
    const dataKelengkapan = {
        series: [
            count.kelengkapan,
            count.countSIP,
            count.countSTR,
        ],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [
                `Melengkapi Data: ${count.kelengkapan}`,
                `Memiliki SIP: ${count.countSIP}`,
                `Memiliki STR: ${count.countSTR}`,
            ],
            colors: generateRandomColors(count.kelengkapan, count.countSIP, count.countSTR), // Terapkan warna acak di sini
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

    const dataIuran = {
        series: [
            count.paidUsersCount,
            count.unpaidUsersCount,
        ],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [
                `Sudah Membayar tahun ${currentYear} : ${count.paidUsersCount}`,
                `Belum Membayar tahun ${currentYear} : ${count.unpaidUsersCount}`,
            ],
            colors: generateRandomColors(count.paidUsersCount, count.unpaidUsersCount), // Terapkan warna acak di sini
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
                        <div className="container mt-4">
                            <div class="card col-md-12">
                                <div class="card-header">
                                    <h5 class="mb-0">GRAFIK</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="status-tab" data-bs-toggle="tab" href="#status" role="tab" aria-controls="status" aria-selected="true">Status Pekerjaan</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="lulusan-tab" data-bs-toggle="tab" href="#lulusan" role="tab" aria-controls="lulusan" aria-selected="false">Asal Lulusan Perguruan Tinggi</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="tempat-tab" data-bs-toggle="tab" href="#tempat" role="tab" aria-controls="tempat" aria-selected="false">Tempat Pekerjaan</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="jenjang-tab" data-bs-toggle="tab" href="#jenjang" role="tab" aria-controls="jenjang" aria-selected="false">Jenjang Pendidikan</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="user-tab" data-bs-toggle="tab" href="#user" role="tab" aria-controls="user" aria-selected="false">User Total DPW</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="kelengkapan-tab" data-bs-toggle="tab" href="#kelengkapan" role="tab" aria-controls="kelengkapan" aria-selected="false">Kelengkapan Data</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="iuran-tab" data-bs-toggle="tab" href="#iuran" role="tab" aria-controls="iuran" aria-selected="false">Iuran</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="status-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-7 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={statusPekerjaan.options}
                                                                series={statusPekerjaan.series}
                                                                type="pie"
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="lulusan" role="tabpanel" aria-labelledby="lulusan-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-7 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={lulusanUniv.options}
                                                                series={lulusanUniv.series}
                                                                type="pie"
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tempat" role="tabpanel" aria-labelledby="tempat-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-7 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={tempatBekerja.options}
                                                                series={tempatBekerja.series}
                                                                type="pie"
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="jenjang" role="tabpanel" aria-labelledby="jenjang-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-7 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={jenjangPendidikan.options}
                                                                series={jenjangPendidikan.series}
                                                                type="pie"
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="user" role="tabpanel" aria-labelledby="user-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-10 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={barChartOptions}
                                                                series={seriesData}
                                                                type="bar"
                                                                height={350}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="kelengkapan" role="tabpanel" aria-labelledby="kelengkapan-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-7 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={dataKelengkapan.options}
                                                                series={dataKelengkapan.series}
                                                                type="pie"
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="iuran" role="tabpanel" aria-labelledby="iuran-tab">
                                            <div className="row mt-2 justify-content-center">
                                                <div className="col-12 col-lg-7 mb-4">
                                                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                                                        <div className="card-body">
                                                            <Chart
                                                                options={dataIuran.options}
                                                                series={dataIuran.series}
                                                                type="pie"
                                                                width="100%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </LayoutAccount>
        </>
    );
}
