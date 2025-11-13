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
    const { auth, count, usersCountByProvince, usersCountByProvincebyBekerja } = usePage().props;

    const currentYear = new Date().getFullYear();
    const provinceLabels = usersCountByProvince.map(item => item.province_name);
    const provinceCounts = usersCountByProvince.map(item => item.user_count);
    const categories = [...provinceLabels];

    const provinceNames = usersCountByProvincebyBekerja.map(item => item.province_name);
    const belumBekerjaCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.belum_bekerja) || 0);
    const freelanceCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.freelance) || 0);
    const klinikSwastaCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.klinik_swasta) || 0);
    const perguruanTinggiCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.perguruan_tinggi) || 0);
    const puskesmasCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.puskesmas_count) || 0);
    const rumahSakitKhususCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.rumah_sakit_khusus) || 0);
    const rumahSakitMiliterCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.rumah_sakit_militer) || 0);
    const rumahSakitSwastaCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.rumah_sakit_swasta) || 0);
    const rumahSakitUmumDaerahCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.rumah_sakit_umum_daerah) || 0);
    const rumahSakitUmumPusatCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.rumah_sakit_umum_pusat) || 0);
    const sekolahLuarBiasaCounts = usersCountByProvincebyBekerja.map(item => parseInt(item.sekolah_luar_biasa) || 0);

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

    // Data untuk grafik bar
    const barChartByBekerjaOptions = {
        chart: {
            type: 'bar',
            height: 550,
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true
                }
            }
        },
        xaxis: {
            categories: provinceNames,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '55%',
                endingShape: 'rounded',
                dataLabels: {
                    position: 'center',
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#000'],
                fontSize: '12px',
                fontWeight: 'bold'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            fontSize: '14px',
            fontWeight: 600,
        },
        colors: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#06B6D4', '#84CC16', '#F97316', '#6366F1', '#EC4899', '#14B8A6', '#78716C'],
    };

    // Create series data for the new bar chart
    const barChartByBekerjaSeriesData = [
        {
            name: 'Belum Bekerja',
            data: belumBekerjaCounts,
        },
        {
            name: 'Freelance',
            data: freelanceCounts,
        },
        {
            name: 'Klinik Swasta',
            data: klinikSwastaCounts,
        },
        {
            name: 'Perguruan Tinggi',
            data: perguruanTinggiCounts,
        },
        {
            name: 'Puskesmas',
            data: puskesmasCounts,
        },
        {
            name: 'Rumah Sakit Khusus',
            data: rumahSakitKhususCounts,
        },
        {
            name: 'Rumah Sakit Militer',
            data: rumahSakitMiliterCounts,
        },
        {
            name: 'Rumah Sakit Swasta',
            data: rumahSakitSwastaCounts,
        },
        {
            name: 'Rumah Sakit Umum Daerah',
            data: rumahSakitUmumDaerahCounts,
        },
        {
            name: 'Rumah Sakit Umum Pusat',
            data: rumahSakitUmumPusatCounts,
        },
        {
            name: 'Sekolah Luar Biasa',
            data: sekolahLuarBiasaCounts,
        },
    ];

    // Create series data with random colors
    const seriesData = [{
        name: 'Jumlah Pengguna',
        data: provinceCounts,
    }];

    // Data for the bar chart
    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: true
            }
        },
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    fontSize: '12px',
                    fontWeight: 600
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
                colors: ["#000"]
            }
        },
        colors: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#06B6D4', '#84CC16'],
    };

    // Common pie chart options
    const pieChartOptions = (labels) => ({
        chart: {
            type: 'pie',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                }
            }
        },
        labels: labels,
        colors: generateRandomColors(labels.length),
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom',
                    fontSize: '10px'
                }
            }
        }],
        legend: {
            position: 'bottom',
            fontSize: '12px',
            fontWeight: 600,
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '11px',
                fontWeight: 'bold'
            },
            dropShadow: {
                enabled: false
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        }
    });

    // Status pekerjaan
    const statusPekerjaan = {
        series: [
            count.pns,
            count.swasta,
            count.kontrak,
            count.pppk,
            count.belumBekerja
        ],
        options: pieChartOptions([
            `PNS: ${count.pns}`,
            `Swasta: ${count.swasta}`,
            `BLU/KONTRAK: ${count.kontrak}`,
            `PPPK: ${count.pppk}`,
            `Belum Bekerja: ${count.belumBekerja}`
        ])
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
        options: pieChartOptions([
            `Poltekes Kemenkes: ${count.poltekesKemenkesSurakarta}`,
            `Akademi Terapi Wicara: ${count.akademiTerapiWicaraYayasanBinaWicaraJakarta}`,
            `Politeknik AL Islam: ${count.politeknikAlIslamBandung}`,
            `Stikes Mercubaktijaya: ${count.stikesMercubaktijayaPadang}`,
            `Lain-Lain: ${count.lainLain}`
        ])
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
        options: pieChartOptions([
            `Klinik Swasta: ${count.klinikSwasta}`,
            `RS Swasta: ${count.rumahSakitSwasta}`,
            `RS Umum Pusat: ${count.rumahSakitUmumPusat}`,
            `RS Umum Daerah: ${count.rumahSakitUmumDaerah}`,
            `RS Militer: ${count.rumahSakitMiliter}`,
            `RS Khusus: ${count.rumahSakitKhusus}`,
            `Puskesmas: ${count.puskesmas}`,
            `SLB: ${count.sekolahLuarBiasa}`,
            `Perguruan Tinggi: ${count.perguruanTinggi}`,
            `Belum Bekerja: ${count.belum_bekerja}`,
            `Freelance: ${count.freelance}`,
            `Lainnya: ${count.lainnya}`
        ])
    };

    // jenjang pendidikan
    const jenjangPendidikan = {
        series: [
            count.D3,
            count.D4,
            count.S2,
            count.S3,
        ],
        options: pieChartOptions([
            `DIII: ${count.D3}`,
            `DIV: ${count.D4}`,
            `S2: ${count.S2}`,
            `S3: ${count.S3}`
        ])
    };

    // kelengkapan data
    const dataKelengkapan = {
        series: [
            count.kelengkapan,
            count.countSIP,
            count.countSTR,
        ],
        options: pieChartOptions([
            `Data Lengkap: ${count.kelengkapan}`,
            `Memiliki SIP: ${count.countSIP}`,
            `Memiliki STR: ${count.countSTR}`
        ])
    };

    const dataIuran = {
        series: [
            count.paidUsersCount,
            count.unpaidUsersCount,
        ],
        options: pieChartOptions([
            `Sudah Bayar ${currentYear}: ${count.paidUsersCount}`,
            `Belum Bayar ${currentYear}: ${count.unpaidUsersCount}`
        ])
    };

    return (
        <>
            <Head>
                <title>Dashboard - IKATWI</title>
            </Head>
            <LayoutAccount>
                {/* Welcome Section */}
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="welcome-card bg-gradient-primary text-white border-0 shadow-lg rounded-3 p-4 mb-4">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h4 className="mb-1">Selamat Datang, <strong>{auth.user.name}</strong>!</h4>
                                    <p className="mb-0 opacity-75">Sistem Informasi IKATWI - Terapi Wicara Indonesia</p>
                                </div>
                                <div className="welcome-icon">
                                    <i className="fas fa-user-circle fa-3x opacity-75"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Cards */}
                {hasAnyPermission(["dashboard.statistics"]) && (
                    <>
                        <div className="row mt-2">
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-primary">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-clock fa-2x text-primary"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-primary">{count.unpaid}</div>
                                                <div className="stat-label text-muted text-uppercase">MENUNGGU PEMBAYARAN</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-success">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-check-circle fa-2x text-success"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-success">{count.paid}</div>
                                                <div className="stat-label text-muted text-uppercase">SUDAH BAYAR</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-warning">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-exclamation-triangle fa-2x text-warning"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-warning">{count.expired}</div>
                                                <div className="stat-label text-muted text-uppercase">KADALUARSA</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-4">
                                <div className="card stat-card border-0 shadow-sm h-100 stat-card-danger">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="stat-icon me-3">
                                                <i className="fas fa-times-circle fa-2x text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="stat-value text-danger">{count.cancelled}</div>
                                                <div className="stat-label text-muted text-uppercase">DIBATALKAN</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Charts Section */}
                        <div className="container-fluid mt-4">
                            <div className="card shadow-lg border-0">
                                <div className="card-header bg-white py-3">
                                    <h5 className="mb-0 text-primary">
                                        <i className="fas fa-chart-bar me-2"></i>
                                        STATISTIK DAN GRAFIK
                                    </h5>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="nav nav-tabs nav-fill custom-tabs" id="dashboardTabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="status-tab" data-bs-toggle="tab" data-bs-target="#status" type="button" role="tab">
                                                <i className="fas fa-briefcase me-2"></i>Status Pekerjaan
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="lulusan-tab" data-bs-toggle="tab" data-bs-target="#lulusan" type="button" role="tab">
                                                <i className="fas fa-graduation-cap me-2"></i>Lulusan
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tempat-tab" data-bs-toggle="tab" data-bs-target="#tempat" type="button" role="tab">
                                                <i className="fas fa-building me-2"></i>Tempat Kerja
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="jenjang-tab" data-bs-toggle="tab" data-bs-target="#jenjang" type="button" role="tab">
                                                <i className="fas fa-user-graduate me-2"></i>Pendidikan
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="user-tab" data-bs-toggle="tab" data-bs-target="#user" type="button" role="tab">
                                                <i className="fas fa-users me-2"></i>User per DPW
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="kelengkapan-tab" data-bs-toggle="tab" data-bs-target="#kelengkapan" type="button" role="tab">
                                                <i className="fas fa-clipboard-check me-2"></i>Kelengkapan
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="iuran-tab" data-bs-toggle="tab" data-bs-target="#iuran" type="button" role="tab">
                                                <i className="fas fa-money-bill-wave me-2"></i>Iuran
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="bekerja-tab" data-bs-toggle="tab" data-bs-target="#bekerja" type="button" role="tab">
                                                <i className="fas fa-chart-line me-2"></i>Pekerjaan per DPW
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content p-4" id="dashboardTabsContent">
                                        
                                        {/* Status Pekerjaan */}
                                        <div className="tab-pane fade show active" id="status" role="tabpanel">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-8">
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={statusPekerjaan.options}
                                                            series={statusPekerjaan.series}
                                                            type="pie"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lulusan Universitas */}
                                        <div className="tab-pane fade" id="lulusan" role="tabpanel">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-8">
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={lulusanUniv.options}
                                                            series={lulusanUniv.series}
                                                            type="pie"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tempat Bekerja */}
                                        <div className="tab-pane fade" id="tempat" role="tabpanel">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-8">
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={tempatBekerja.options}
                                                            series={tempatBekerja.series}
                                                            type="pie"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Jenjang Pendidikan */}
                                        <div className="tab-pane fade" id="jenjang" role="tabpanel">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-8">
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={jenjangPendidikan.options}
                                                            series={jenjangPendidikan.series}
                                                            type="pie"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* User per DPW */}
                                        <div className="tab-pane fade" id="user" role="tabpanel">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="alert alert-primary border-0 shadow-sm mb-4">
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        Total User Aktif: <strong>{count.totalUserAktif}</strong>
                                                    </div>
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={barChartOptions}
                                                            series={seriesData}
                                                            type="bar"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Kelengkapan Data */}
                                        <div className="tab-pane fade" id="kelengkapan" role="tabpanel">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-8">
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={dataKelengkapan.options}
                                                            series={dataKelengkapan.series}
                                                            type="pie"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Iuran */}
                                        <div className="tab-pane fade" id="iuran" role="tabpanel">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-8">
                                                    <div className="chart-container">
                                                        <Chart
                                                            options={dataIuran.options}
                                                            series={dataIuran.series}
                                                            type="pie"
                                                            height="400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pekerjaan per DPW */}
                                        <div className="tab-pane fade" id="bekerja" role="tabpanel">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="alert alert-primary border-0 shadow-sm mb-4">
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        Total User Aktif: <strong>{count.totalUserAktif}</strong>
                                                    </div>
                                                    <div className="chart-container mb-5">
                                                        <Chart
                                                            options={barChartByBekerjaOptions}
                                                            series={barChartByBekerjaSeriesData}
                                                            type="bar"
                                                            height="600"
                                                        />
                                                    </div>

                                                    <div className="card border-0 shadow-sm mt-4">
                                                        <div className="card-header bg-white py-3">
                                                            <h6 className="mb-0 text-primary">
                                                                <i className="fas fa-table me-2"></i>
                                                                DETAIL PEKERJAAN PER DPW
                                                            </h6>
                                                        </div>
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <table className="table table-hover table-striped mb-0">
                                                                    <thead className="bg-light">
                                                                        <tr>
                                                                            <th>DPW</th>
                                                                            <th>Belum Bekerja</th>
                                                                            <th>Freelance</th>
                                                                            <th>Klinik Swasta</th>
                                                                            <th>Perguruan Tinggi</th>
                                                                            <th>Puskesmas</th>
                                                                            <th>RS Khusus</th>
                                                                            <th>RS Militer</th>
                                                                            <th>RS Swasta</th>
                                                                            <th>RS Umum Daerah</th>
                                                                            <th>RS Umum Pusat</th>
                                                                            <th>Sekolah Luar Biasa</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {usersCountByProvincebyBekerja.map((total, index) => (
                                                                            <tr key={index}>
                                                                                <td className="fw-bold text-primary">{total.province_name}</td>
                                                                                <td className="text-center">{total.belum_bekerja}</td>
                                                                                <td className="text-center">{total.freelance}</td>
                                                                                <td className="text-center">{total.klinik_swasta}</td>
                                                                                <td className="text-center">{total.perguruan_tinggi}</td>
                                                                                <td className="text-center">{total.puskesmas_count}</td>
                                                                                <td className="text-center">{total.rumah_sakit_khusus}</td>
                                                                                <td className="text-center">{total.rumah_sakit_militer}</td>
                                                                                <td className="text-center">{total.rumah_sakit_swasta}</td>
                                                                                <td className="text-center">{total.rumah_sakit_umum_daerah}</td>
                                                                                <td className="text-center">{total.rumah_sakit_umum_pusat}</td>
                                                                                <td className="text-center">{total.sekolah_luar_biasa}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
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

            <style jsx>{`
                .welcome-card {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .stat-card {
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                }
                
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
                }
                
                .stat-card-primary {
                    border-left: 4px solid #3B82F6;
                }
                
                .stat-card-success {
                    border-left: 4px solid #10B981;
                }
                
                .stat-card-warning {
                    border-left: 4px solid #F59E0B;
                }
                
                .stat-card-danger {
                    border-left: 4px solid #EF4444;
                }
                
                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 1;
                }
                
                .stat-label {
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }
                
                .stat-icon {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: rgba(59, 130, 246, 0.1);
                }
                
                .stat-card-success .stat-icon {
                    background: rgba(16, 185, 129, 0.1);
                }
                
                .stat-card-warning .stat-icon {
                    background: rgba(245, 158, 11, 0.1);
                }
                
                .stat-card-danger .stat-icon {
                    background: rgba(239, 68, 68, 0.1);
                }
                
                .custom-tabs .nav-link {
                    border: none;
                    color: #6c757d;
                    font-weight: 500;
                    padding: 1rem 1.5rem;
                    transition: all 0.3s ease;
                }
                
                .custom-tabs .nav-link.active {
                    color: #3B82F6;
                    background: transparent;
                    border-bottom: 3px solid #3B82F6;
                }
                
                .custom-tabs .nav-link:hover {
                    color: #3B82F6;
                    background: rgba(59, 130, 246, 0.05);
                }
                
                .chart-container {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                
                .table th {
                    background: #f8f9fa;
                    border-bottom: 2px solid #dee2e6;
                    font-weight: 600;
                    color: #495057;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .table td {
                    vertical-align: middle;
                    font-size: 0.9rem;
                }
                
                .card-header {
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
            `}</style>
        </>
    );
}