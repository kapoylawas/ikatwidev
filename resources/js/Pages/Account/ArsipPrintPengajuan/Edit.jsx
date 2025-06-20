//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function ArsipPrintPengajuanEdit() {

    const {
        errors,
        provinces,
        cities,
        arsip,
    } = usePage().props;

    console.log(arsip);

    const noUruts = arsip.user.no_anggota

    const noSurat = noUruts.slice(3, 6);

    const dateString = "100720";

    // Ambil bagian bulan (2 digit di tengah: posisi 2-4)
    const monthNumber = parseInt(dateString.substring(2, 4));

    // Konversi angka ke Romawi
    const romanNumerals = [
        '', 'I', 'II', 'III', 'IV', 'V', 'VI',
        'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
    ];

    const bulanRomawi = romanNumerals[monthNumber]


    // Data contoh
    const data = {
        nama: "Dr. Amelia Suryani, M.Kes",
        nomorKTA: "IKATWI/2023/12345",
        asalDPW: "DPW IKATWI Jawa Barat",
        asalDPC: "DPC IKATWI Kota Bandung",
        tujuanDPW: "DPW IKATWI DKI Jakarta",
        tujuanDPC: "DPC IKATWI Jakarta Selatan",
        iuranKeanggotaan: true,
        akunSatuSehat: true,
        tanggal: "12 Juni 2025",
        tempat: "Bandung",
        nomorSurat: "123/IKATWI-DPB/VI/2025"
    };


    // Fungsi untuk handle print
    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Formulir Mutasi Anggota - IKATWI</title>
                <style>
                    @page {
                        size: A4;
                        margin: 2.5cm;
                    }
                    body {
                        font-family: "Times New Roman", Times, serif;
                        line-height: 1.6;
                        color: #333;
                        font-size: 12pt;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .container-surat {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 0;
                    }
                    .letter-head {
                        border-bottom: 3px double #333;
                        padding-bottom: 1rem;
                        margin-bottom: 1.5rem;
                        text-align: center;
                    }
                    .letter-title {
                        font-size: 14pt;
                        text-align: center;
                        text-decoration: underline;
                        margin: 1.5rem 0;
                        font-weight: bold;
                    }
                    .content-block {
                        margin-bottom: 1.2rem;
                        text-align: justify;
                    }
                    .signature-block {
                        margin-top: 4rem;
                        text-align: right;
                        padding-right: 20%;
                    }
                    .checkbox {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        border: 1px solid #333;
                        margin-right: 8px;
                        text-align: center;
                        vertical-align: middle;
                        position: relative;
                        top: -1px;
                    }
                    .checked {
                        background-color: #333;
                        color: white;
                    }
                    .data-table {
                        margin: 1rem 0;
                        width: 100%;
                    }
                    .data-table td {
                        padding: 0.2rem 0;
                        vertical-align: top;
                    }
                    .data-table td:first-child {
                        width: 35%;
                        font-weight: 500;
                    }
                </style>
            </head>
            <body>
                <div class="container-surat">
                    ${document.querySelector('.container-surat .body').innerHTML}
                </div>
                <script>
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            window.close();
                        }, 200);
                    };
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };



    return (
        <>
            <Head>
                <title>Arsip Berkas Anggota - IKATWI</title>
                <style>{`
                                @page {
                                    size: A4;
                                    margin: 2.5cm;
                                }
                                body.print {
                                    font-family: "Times New Roman", Times, serif;
                                    line-height: 1.6;
                                    color: #333;
                                }
                                .container-surat {
                                    max-width: 800px;
                                    margin: 0 auto;
                                    padding: 20px;
                                }
                                .letter-head {
                                    border-bottom: 3px double #333;
                                    padding-bottom: 1rem;
                                    margin-bottom: 1.5rem;
                                    text-align: center;
                                }
                                .letter-title {
                                    font-size: 14pt;
                                    text-align: center;
                                    text-decoration: underline;
                                    margin: 1.5rem 0;
                                    font-weight: bold;
                                }
                                .content-block {
                                    margin-bottom: 1.2rem;
                                    text-align: justify;
                                }
                                .signature-block {
                                    margin-top: 4rem;
                                    text-align: right;
                                    padding-right: 20%;
                                }
                                .checkbox {
                                    display: inline-block;
                                    width: 18px;
                                    height: 18px;
                                    border: 1px solid #333;
                                    margin-right: 8px;
                                    text-align: center;
                                    vertical-align: middle;
                                    position: relative;
                                    top: -1px;
                                }
                                .checked {
                                    background-color: #333;
                                    color: white;
                                }
                                .data-table {
                                    margin: 1rem 0;
                                    width: 100%;
                                }
                                .data-table td {
                                    padding: 0.2rem 0;
                                    vertical-align: top;
                                }
                                .data-table td:first-child {
                                    width: 35%;
                                    font-weight: 500;
                                }
                                .no-print {
                                    text-align: center;
                                    margin-bottom: 2rem;
                                }
                                .print-btn {
                                    padding: 10px 25px;
                                    background: #2c5282;
                                    color: white;
                                    border: none;
                                    border-radius: 4px;
                                    font-size: 16px;
                                    cursor: pointer;
                                    transition: all 0.3s;
                                }
                                .print-btn:hover {
                                    background: #1a365d;
                                    transform: translateY(-2px);
                                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                                }
                                @media print {
                                    .no-print {
                                        display: none !important;
                                    }
                                    body, body.print {
                                        font-size: 12pt;
                                    }
                                    .container-surat {
                                        padding: 0;
                                    }
                                    body {
                                        -webkit-print-color-adjust: exact;
                                        print-color-adjust: exact;
                                    }
                                }
                                @media (max-width: 768px) {
                                    .container-surat {
                                        padding: 15px;
                                    }
                                    .data-table td:first-child {
                                        width: 40%;
                                    }
                                    .signature-block {
                                        padding-right: 10%;
                                    }
                                }
                            `}</style>
            </Head>
            <LayoutAccount>
                <div className="container-surat">
                    {/* Tombol Cetak - akan hilang saat print */}
                    <div className="no-print">
                        <button onClick={handlePrint} className="print-btn">
                            🖨️ Cetak Surat Mutasi
                        </button>
                    </div>

                    {/* Surat Resmi */}
                    <div className="body print">
                        {/* Kop Surat */}
                        <div className="letter-head" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            {/* Logo container */}
                            <div style={{ width: '100px' }}> {/* Adjust width as needed */}
                                <img
                                    src="/assets/images/logo.png"
                                    alt="IKATWI Logo"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>

                            {/* Text container */}
                            <div>
                                <div style={{ fontSize: '14pt', fontWeight: 'bold', marginBottom: '5px' }}>
                                    IKATAN TERAPIS WICARA INDONESIA (IKATWI)
                                </div>
                                <div style={{ fontSize: '14pt', marginBottom: '10px' }}>The Indonesian Speech Therapist Association</div>
                                <div style={{ fontSize: '9pt' }}>Kampus Jurusan Terapi Wicara Poltekkes Kemenkes Surakarta</div>
                                <div style={{ fontSize: '9pt' }}>Jl. Letjend Sutoyo, Mojosongo, Jebres, Surakarta, Jawa Tengah, Indonesia Hotline: 085867544115</div>
                                <div style={{ fontSize: '9pt' }}>Website: www.ikatwi.or.id | Email: ikatwipusat@gmail.com , sekretaris.dppikatwi@gmail.com</div>
                            </div>
                        </div>

                        {/* Nomor Surat */}
                        <div style={{ textAlign: 'center', marginBottom: '2.0rem' }}>
                            <div><b>FORMULIR MUTASI</b></div>
                            <div><b>ANGGOTA IKATWI</b></div>
                            <div><b>No. : {noSurat}/IKATWI/MUT/{bulanRomawi}/{new Date().getFullYear()}</b></div>
                        </div>

                        {/* Isi Surat */}
                        {/* <div className="content-block">
                                       <p>Kepada Yth:</p>
                                       <p style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Ketua Ikatwi Pusat</p>
                                       <p style={{ marginLeft: '2rem' }}>di Tempat</p>
                                   </div> */}

                        <div className="content-block">
                            <p style={{ textIndent: '2rem', marginTop: '1rem' }}>
                                Data Anggota IKATWI berikut, yaitu:
                            </p>
                        </div>

                        {/* Data Anggota */}
                        <table className="data-table">
                            <tbody>
                                <tr>
                                    <td>Nama Lengkap</td>
                                    <td>: {arsip.name}</td>
                                </tr>
                                <tr>
                                    <td>Nomor KTA</td>
                                    <td>: {arsip.user.no_anggota}</td>
                                </tr>
                                <tr>
                                    <td>Asal DPW</td>
                                    <td>: {arsip.province.name}</td>
                                </tr>
                                <tr>
                                    <td>Asal DPC</td>
                                    <td>: {arsip.city.name}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="content-block">
                            <p style={{ textIndent: '2rem' }}>
                                Mengajukan mutasi keanggotaan IKATWI dengan tujuan :
                            </p>
                        </div>

                        <table className="data-table">
                            <tbody>
                                <tr>
                                    <td>Nama Lengkap</td>
                                    <td>: {arsip.name}</td>
                                </tr>
                                <tr>
                                    <td>Nomor KTA</td>
                                    <td>: {arsip.no_anggota}</td>
                                </tr>
                                <tr>
                                    <td>DPW</td>
                                    <td>: {arsip.pengajuan?.tujuan?.name || '-'}</td>
                                </tr>
                                <tr>
                                    <td>DPC</td>
                                    <td>: {arsip.pengajuan?.tujuan_dpc?.name || '-'}</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Kelengkapan Dokumen */}
                        <div className="content-block">
                            <p>Adapun kelengkapan administrasi yang telah dipenuhi:</p>
                            <div style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.3rem' }}>
                                    <span className={`checkbox ${data.iuranKeanggotaan ? 'checked' : ''}`}>
                                        {data.iuranKeanggotaan ? '✓' : ''}
                                    </span>
                                    <span>Iuran Keanggotaan telah lunas</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={`checkbox ${data.akunSatuSehat ? 'checked' : ''}`}>
                                        {data.akunSatuSehat ? '✓' : ''}
                                    </span>
                                    <span>Akun Satu Sehat SDMK telah terdaftar</span>
                                </div>
                            </div>
                        </div>

                        <div className="content-block">
                            <p>
                                Demikian formulir ini dibuat sebagai catatan mutasi keanggotaan atas nama di atas.
                            </p>
                        </div>

                        {/* Tanda Tangan */}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {/* Signature Block Kanan (untuk Ketua) */}
                            <div className="signature-block" style={{ width: '55%', textAlign: 'left' }}>
                                <p>(Tempat, Tanggal )</p>
                                <div style={{ marginTop: '40px' }}>
                                    <div style={{ marginTop: '60px' }}>
                                        <p style={{ fontSize: '9pt', fontWeight: 'bold', textDecoration: 'underline' }}>Admin Verifikator Wilayah</p>
                                    </div>
                                </div>
                            </div>

                            {/* Signature Block Kiri */}
                            <div className="signature-block" style={{ width: '50%', textAlign: 'left' }}>
                                <div style={{ marginTop: '40px' }}>
                                    <p style={{ textAlign: 'center' }}>Mengetahui,</p>
                                    <p style={{ fontSize: '9pt', marginTop: '20px', fontWeight: 'bold', textAlign: 'center', whiteSpace: 'nowrap' }}>DEWAN PENGURUS PUSAT IKATWI</p>
                                    <p style={{ fontSize: '9pt', fontWeight: 'bold', textAlign: 'center' }}>KETUA UMUM</p>
                                    <div style={{ marginTop: '60px' }}>
                                        <p style={{ fontSize: '8pt', fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center' }}>Hafidz Triantoro Aji P., SST.TW, MPH</p>
                                        <p style={{ fontSize: '8pt', textAlign: 'center' }}>No. KTA: 100685</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )
}