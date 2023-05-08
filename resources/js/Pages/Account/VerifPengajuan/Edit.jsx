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

export default function CategoryEdit() {

    const {
        errors,
        provinces,
        cities,
        verifPengajuan,
    } = usePage().props;

    console.log(verifPengajuan);

    const [id, setId] = useState(verifPengajuan.user_id);
    const [nama, setNama] = useState(verifPengajuan.name);
    const [kta, setKta] = useState(verifPengajuan.kta);
    const [provinceID, setProvinceID] = useState(verifPengajuan.province_id);
    const [cityID, setCityID] = useState(verifPengajuan.city_id);
    const [tglmutasi, setTglmutasi] = useState(verifPengajuan.tgl_mutasi);
    const [keterangan, setKeterangan] = useState(verifPengajuan.keterangan);
    const [tujuan, setTujuan] = useState(verifPengajuan.tujuan_mutasi);
    const [tujuandpc, setTujuandpc] = useState(verifPengajuan.dpc_mutasi);
    const [status, setStatus] = useState(verifPengajuan.status);

    const updatePengajuan = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/verifPengajuan/${verifPengajuan.id}`,
            {
                //data
                user_id: id,
                name: nama,
                kta: kta,
                province_id: provinceID,
                city_id: cityID,
                tgl_mutasi: tglmutasi,
                keterangan: keterangan,
                tujuan_mutasi: tujuan,
                dpc_mutasi: tujuandpc,
                status: status,
                _method: "PUT"
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data Pengajuan Anda Berhasil di Update!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2500,
                    });
                },
            }
        );
    };

    return(
        <>
             <Head>
                <title>Edit Pengajuan - IKATWI</title>
            </Head>
            <LayoutAccount>
            <div className="card-body">
                    <form onSubmit={updatePengajuan}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nama}
                                        onChange={(e) =>
                                            setNama(e.target.value)
                                        }
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        KTA
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={kta}
                                        onChange={(e) => setKta(e.target.value)}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                                <label className="form-label fw-bold">
                                    DPW
                                </label>
                                <select
                                    className="form-select"
                                    disabled
                                    value={provinceID}
                                    onChange={(e) =>
                                        setProvinceID(e.target.value)
                                    }
                                >
                                    <option value="">-- Select DPW --</option>
                                    {provinces.map((province) => (
                                        <option
                                            value={province.id}
                                            key={province.id}
                                        >
                                            {province.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                                <label className="form-label fw-bold">
                                    DPC
                                </label>
                                <select
                                    className="form-select"
                                    disabled
                                    value={cityID}
                                    onChange={(e) => setCityID(e.target.value)}
                                >
                                    <option value="">-- Select DPC --</option>
                                    {cities.map((city) => (
                                        <option value={city.id} key={city.id}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Tanggal Mutasi
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={tglmutasi}
                                    onChange={(e) =>
                                        setTglmutasi(e.target.value)
                                    }
                                    placeholder="Enter Tanggal Lahir"
                                />
                            </div>
                            {errors.tgl_mutasi && (
                                <div className="alert alert-danger">
                                    {errors.tgl_mutasi}
                                </div>
                            )}
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <label className="form-label fw-bold">
                                    Keterangan
                                </label>
                                <div className="input-group mb-3">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        value={keterangan}
                                        onChange={(e) =>
                                            setKeterangan(e.target.value)
                                        }
                                        placeholder="Keterangan Contoh : mutasi karena pindah tempat kerja"
                                    />
                                </div>
                                {errors.keterangan && (
                                    <div className="alert alert-danger">
                                        {errors.keterangan}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                                <label className="form-label fw-bold">
                                    Tujuan Mutasi
                                </label>
                                <select
                                    className="form-select"
                                    value={tujuan}
                                    onChange={(e) => setTujuan(e.target.value)}
                                >
                                    <option value="">
                                        -- Pilih Tujuan Mutasi --
                                    </option>
                                    {provinces.map((province) => (
                                        <option
                                            value={province.id}
                                            key={province.id}
                                        >
                                            {province.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.tujuan_mutasi && (
                                    <div className="alert alert-danger mt-2">
                                        {errors.tujuan_mutasi}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                                <label className="form-label fw-bold">
                                    Tujuan DPC
                                </label>
                                <select
                                    className="form-select"
                                    value={tujuandpc}
                                    onChange={(e) =>
                                        setTujuandpc(e.target.value)
                                    }
                                >
                                    <option value="">
                                        -- Pilih Tujuan DPC --
                                    </option>
                                    {cities.map((dpc) => (
                                        <option value={dpc.id} key={dpc.id}>
                                            {dpc.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.dpc_mutasi && (
                                    <div className="alert alert-danger mt-2">
                                        {errors.dpc_mutasi}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                                <label className="form-label fw-bold">
                                    Verifikasi
                                </label>
                                <select
                                    className="form-select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="">
                                        -- Pilih Verifikasi --
                                    </option>
                                    <option value="belum">
                                        belum
                                    </option>
                                    <option value="sudah">
                                        sudah
                                    </option>
                                </select>
                                {errors.tujuan_mutasi && (
                                    <div className="alert alert-danger mt-2">
                                        {errors.tujuan_mutasi}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-3 mb-5">
                            <button
                                type="submit"
                                className="btn btn-md btn-success me-2"
                            >
                                <i className="fa fa-save"></i> Save
                            </button>
                            <button
                                type="reset"
                                className="btn btn-md btn-warning"
                            >
                                <i className="fa fa-redo"></i> Reset
                            </button>
                        </div>
                    </form>
                </div>
            </LayoutAccount>
        </>
    )
}