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
        transactions,
        statusAnggota,
        biodata,
        provinces,
        cities,
        pengajuan,
    } = usePage().props;

    console.log(pengajuan);

    const [id, setId] = useState(pengajuan.user_id);
    const [nama, setNama] = useState(pengajuan.name);
    const [kta, setKta] = useState(pengajuan.kta);
    const [provinceID, setProvinceID] = useState(pengajuan.province_id);
    const [cityID, setCityID] = useState(pengajuan.city_id);
    const [tglmutasi, setTglmutasi] = useState(pengajuan.tgl_mutasi);
    const [keterangan, setKeterangan] = useState(pengajuan.keterangan);
    const [tujuan, setTujuan] = useState(pengajuan.tujuan_mutasi);
    const [docmutasi, setDocmutasi] = useState(null);

    const updatePengajuan = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/pengajuan/${pengajuan.id}`,
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
                document: docmutasi,
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

    return (
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

                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Document Mutasi
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) =>
                                        setDocmutasi(e.target.files[0])
                                    }
                                />
                            </div>
                            {errors.document && (
                                <div className="alert alert-danger">
                                    {errors.document}
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
    );
}
