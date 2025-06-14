import React from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage } from "@inertiajs/inertia-react";

export default function PengajuanPrintIndex() {
    const { biodata } = usePage().props;

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
                <title>Formulir Mutasi Anggota - IKATWI</title>
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
                        <div className="letter-head">
                            <div style={{ fontSize: '18pt', fontWeight: 'bold', marginBottom: '5px' }}>
                                IKATAN TERAPIS WICARA INDONESIA
                            </div>
                            <div style={{ fontSize: '14pt', marginBottom: '10px' }}>(IKATWI)</div>
                            <div style={{ fontSize: '11pt' }}>Jl. Prof. Dr. Soepomo No. 123, Jakarta 12345</div>
                            <div style={{ fontSize: '11pt' }}>Telp. (021) 1234567 | Email: sekretariat@ikatwi.org</div>
                        </div>

                        {/* Nomor Surat */}
                        {/* <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
                            <div>Nomor: {data.nomorSurat}</div>
                            <div>Hal: Permohonan Mutasi Keanggotaan</div>
                            <div>{data.tempat}, {data.tanggal}</div>
                        </div> */}

                        {/* Isi Surat */}
                        <div className="content-block">
                            <p>Kepada Yth:</p>
                            <p style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Ketua Ikatwi Pusat</p>
                            <p style={{ marginLeft: '2rem' }}>di Tempat</p>
                        </div>

                        <div className="content-block">
                            <p style={{ textIndent: '2rem' }}>Dengan hormat,</p>
                            <p style={{ textIndent: '2rem', marginTop: '1rem' }}>
                                Bersama ini kami sampaikan permohonan mutasi keanggotaan atas:
                            </p>
                        </div>

                        {/* Data Anggota */}
                        <table className="data-table">
                            <tbody>
                                <tr>
                                    <td>Nama Lengkap</td>
                                    <td>: {biodata.name}</td>
                                </tr>
                                <tr>
                                    <td>Nomor KTA</td>
                                    <td>: {biodata.no_anggota}</td>
                                </tr>
                                <tr>
                                    <td>Asal DPW</td>
                                    <td>: {biodata.province.name}</td>
                                </tr>
                                <tr>
                                    <td>Asal DPC</td>
                                    <td>: {biodata.city.name}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="content-block">
                            <p style={{ textIndent: '2rem' }}>
                                Mengajukan mutasi keanggotaan IKATWI dengan tujuan :.
                            </p>
                        </div>

                        <table className="data-table">
                            <tbody>
                                <tr>
                                    <td>Nama Lengkap</td>
                                    <td>: {biodata.name}</td>
                                </tr>
                                <tr>
                                    <td>Nomor KTA</td>
                                    <td>: {biodata.no_anggota}</td>
                                </tr>
                                <tr>
                                    <td>DPW</td>
                                    <td>: {biodata.pengajuan?.tujuan?.name || '-'}</td>
                                </tr>
                                <tr>
                                    <td>DPC</td>
                                    <td>: {biodata.pengajuan?.tujuan_dpc?.name || '-'}</td>
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
                        <div className="signature-block" style={{ marginLeft: 'auto', width: 'fit-content' }}>
                            <p>Hormat kami,</p>
                            <div style={{ marginTop: '10px', position: 'relative' }}>
                                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Ketua Ikatwi Pusat</p>
                                <div style={{ marginTop: '60px' }}>
                                    {/* <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{data.nama}</p> */}
                                    {/* <p>NIK: {data.nomorKTA}</p> */}
                                </div>
                            </div>
                        </div>

                        {/* Tembusan */}
                        {/* <div style={{ marginTop: '3rem' }}>
                            <p style={{ fontWeight: 'bold' }}>Tembusan:</p>
                            <ol style={{ listStyleType: 'decimal', marginLeft: '1.5rem' }}>
                                <li>Ketua Umum IKATWI Pusat</li>
                                <li>Ketua {data.tujuanDPC}</li>
                                <li>Arsip</li>
                            </ol>
                        </div> */}
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}