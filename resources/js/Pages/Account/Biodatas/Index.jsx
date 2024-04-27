//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, Link, usePage } from "@inertiajs/inertia-react";

import { QRCodeSVG } from "qrcode.react";

export default function EktaIndex() {
    const { biodata, transactions, statusAnggota } = usePage().props;

    const status = transactions.map((ts) => ts.status);
    const [name] = useState(statusAnggota.status_anggota);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    return (
        <>
            <Head>
                <title>User E-KTA - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Biodata
                                </span>
                                <span>
                                    <Link
                                        href={`/account/biodatas/${biodata.id}/edit`}
                                        className="btn btn-primary mr-4"
                                    >
                                        <i className="fa fa-pencil-alt"> </i>{" "}
                                    </Link>
                                </span>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <tr>
                                        <td className="fw-bold">
                                            Biodata Pribadi
                                        </td>
                                        <td></td>
                                        <td className="p-2"></td>
                                    </tr>
                                    <tr>
                                        <td>Foto</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            <img
                                                src={biodata.image}
                                                className="rounded-3"
                                                width={"100"}
                                                alt="Deskripsi gambar"
                                                onError={(e) => {
                                                    e.target.onerror = null; // menghindari infinite loop jika terjadi kesalahan lagi
                                                    e.target.src =
                                                        "/assets/images/user.png"; // mengganti gambar dengan gambar "tidak ditemukan"
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>NIK</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.nik}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Lengkap dan Gelar</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat Email</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Tempat Lahir</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.tempat_lahir}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal Lahir</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.tgl_lahir}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>No. Tlpn/HP</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat Sesuai KTP</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.alamat}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">
                                            Riwayat Pendidikan
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pendidikan Terapi Wicara</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.pendidikan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nama Perguruan Tinggi Terapi Wicara
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.istitusi}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Alamat Perguruan Tinggi Terapi
                                            Wicara
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.almtistitusi}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pendidikan Non Terapi Wicara</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.nonlinear}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">
                                            Informasi Pekerjaan
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Status Kepegawaian</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.kepegawaian}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tempat Bekerja</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.bekerja}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nama Institusi Tempat Bekerja</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.lokasi_pekerjaan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alamat Institusi Tempat Bekerja</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.alamat_tempat_bekerja}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">
                                            Status Keanggotaan :
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DPW</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.province.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DPC</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.city.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>No Anggota</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.no_anggota}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Status Anggota</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.status_anggota}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Status Member Aktif</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {filter === "PAID" ||
                                            name === "Anggota Kehormatan" ? (
                                                <QRCodeSVG
                                                    value={biodata.name}
                                                    style={{ marginLeft: "2%" }}
                                                    size={80}
                                                    renderAs="canvas"
                                                />
                                            ) : (
                                                <div className="row mt-2">
                                                    <div className="col-12 col-md-12 col-lg-12 mb-4">
                                                        <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                                            <h5>
                                                                Anda belum
                                                                membayar tagihan
                                                                IURAN.
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">
                                            Berkas Pakta Integritas :
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="row justify-content-center">
                                                <div className="col-md-12">
                                                    <div className="card rounded">
                                                        <div className="text-center">
                                                            File Pakta
                                                            Integritas
                                                        </div>
                                                        { biodata.filepakta === null ? (
                                                            <div className="col-12 col-md-12 col-lg-12 mb-4">
                                                            <div className="alert text-center alert-danger border-0 shadow-sm mb-0">
                                                                <h5>
                                                                    Belum Upload Pakta Integritas
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        ) : (
                                                            <iframe
                                                            src={
                                                                biodata.filepakta
                                                            }
                                                            title="Embedded Content"
                                                            className="embed-responsive-item"
                                                            height="400"
                                                            allowFullScreen
                                                        />
                                                        )}
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>File</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            
                                        </td>
                                    </tr> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
