//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

import { QRCodeSVG } from "qrcode.react";

export default function BiodataIndex() {
    //destruct props "users"
    const { biodata, transactions } = usePage().props;

    const status = transactions.map((ts) => ts.status);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    return (
        <>
            <Head>
                <title>User - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Profil
                                    Biodata
                                </span>
                                <Link
                                    href={`/account/biodatas/${biodata.id}/edit`}
                                    className="btn btn-primary me-5"
                                    style={{ marginLeft: "1%" }}
                                >
                                    <i className="fa fa-pencil-alt"></i>
                                    
                                </Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
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
                                        <td>FULL NAME</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.name}</td>
                                    </tr>
                                    <tr>
                                        <td>NIK</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.nik}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.email}</td>
                                    </tr>
                                    <tr>
                                        <td>No Anggota</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.no_anggota}</td>
                                    </tr>
                                    <tr>
                                        <td>Status Anggota</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.status_anggota}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>:</td>
                                        <td className="p-2">{biodata.phone}</td>
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
                                        <td>Alamat</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.alamat}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alamat Pekerjaan</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {biodata.lokasi_pekerjaan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Status Member Aktif</td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {filter === "PAID" ? (
                                                <QRCodeSVG
                                                    value={
                                                        biodata.name
                                                    }
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
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
