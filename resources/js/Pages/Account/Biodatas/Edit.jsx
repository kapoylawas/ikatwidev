//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function UserEdit() {
    const { errors, biodata, cities, provinces } = usePage().props;

    // state user
    const [name, setName] = useState(biodata.name);
    const [nik, setNik] = useState(biodata.nik);
    const [email, setEmail] = useState(biodata.email);
    const [phone, setPhone] = useState(biodata.phone);
    const [alamat, setAlamat] = useState(biodata.alamat);
    const [tempatlahir, setTempatlahir] = useState(biodata.tempat_lahir);
    const [tgllahir, setTgllahir] = useState(biodata.tgl_lahir);
    const [lokasipekerjaan, setLokasipekerjaan] = useState(
        biodata.lokasi_pekerjaan
    );
    const [alamatTempatBekerja, setAlamatTempatBekerja] = useState(
        biodata.alamat_tempat_bekerja
    );
    const [provinceID, setProvinceID] = useState(biodata.province_id);
    const [cityID, setCityID] = useState(biodata.city_id);
    const [statusAnggota, setStatusAnggota] = useState(biodata.status_anggota);
    const [pendidikan, setPendidikan] = useState(biodata.pendidikan);
    const [nonlinear, setNonlinear] = useState(biodata.nonlinear);
    const [kepegawaian, setKepegawaian] = useState(biodata.kepegawaian);
    const [bekerja, setBekerja] = useState(biodata.bekerja);
    const [istitusi, setIstitusi] = useState(biodata.istitusi);
    const [almtistitusi, setAlmtistitusi] = useState(biodata.almtistitusi);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [image, setImage] = useState("");

    //method updateUser
    const updateUser = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/biodatas/${biodata.id}`,
            {
                //data
                name: name,
                email: email,
                nik: nik,
                phone: phone,
                alamat: alamat,
                tempat_lahir: tempatlahir,
                tgl_lahir: tgllahir,
                lokasi_pekerjaan: lokasipekerjaan,
                status_anggota: statusAnggota,
                image: image,
                province_id: provinceID,
                city_id: cityID,
                pendidikan: pendidikan,
                nonlinear: nonlinear,
                kepegawaian: kepegawaian,
                bekerja: bekerja,
                istitusi: istitusi,
                almtistitusi: almtistitusi,
                alamat_tempat_bekerja: alamatTempatBekerja,
                password: password,
                password_confirmation: passwordConfirmation,
                _method: "PUT",
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Edit Users - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/account/biodatas"
                                    className="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-arrow-left me-2"></i>
                                    KEMBALI
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Edit User
                                    Ikatwi
                                </span>
                            </div>

                            <div className="card-body">
                                <label className="form-label fw-bold">
                                    Biodata Pribadi :
                                </label>
                                <form onSubmit={updateUser}>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Pas Foto
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setImage(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                NIK
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={nik}
                                                    onChange={(e) =>
                                                        setNik(e.target.value)
                                                    }
                                                    placeholder="No Induk Kependudukan"
                                                />
                                            </div>
                                            {errors.nik && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.nik}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Nama dan Gelar
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="Enter Full Name"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Alamat Email
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Enter Email Address"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Tempat Lahir
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={tempatlahir}
                                                    onChange={(e) =>
                                                        setTempatlahir(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Tempat Kelahiran"
                                                />
                                            </div>
                                            {errors.tempat_lahir && (
                                                <div className="alert alert-danger">
                                                    {errors.tempat_lahir}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Tanggal Lahir
                                                </label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={tgllahir}
                                                    onChange={(e) =>
                                                        setTgllahir(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Tanggal Lahir"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                No. Tlpn/HP
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                    placeholder="No Telephone"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label className="mb-1">
                                                Alamat Sesuai KTP
                                            </label>
                                            <div className="input-group mb-3">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={alamat}
                                                    onChange={(e) =>
                                                        setAlamat(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Alamat Lengkap Sesuai KTP"
                                                />
                                            </div>
                                            {errors.alamat && (
                                                <div className="alert alert-danger">
                                                    {errors.alamat}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr />
                                    <label className="form-label fw-bold">
                                        Riwayat Pendidikan :
                                    </label>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Pendidikan Terapi Wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={pendidikan}
                                                onChange={(e) =>
                                                    setPendidikan(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Select Jenjang Pendidikan
                                                    --
                                                </option>
                                                <option value="D3">DIII</option>
                                                <option value="D4">DIV</option>
                                                <option value="S2 (Magister Terapi Wicara)">
                                                    S2 (Magister Terapi Wicara)
                                                </option>
                                                <option value="S3 (Doktor Terapi Wicara)">
                                                    S3 (Doktor Terapi Wicara)
                                                </option>
                                            </select>
                                            {errors.status_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.status_anggota}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label className="mb-1">
                                                Nama Perguruan Tinggi Terapi
                                                Wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={istitusi}
                                                onChange={(e) =>
                                                    setIstitusi(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Select Perguruan Tinggi
                                                    Terapi Wicara --
                                                </option>
                                                <option value="Poltekes Kemenkes Surakarta">
                                                    Poltekes Kemenkes Surakarta
                                                </option>
                                                <option value="Akademi Terapi Wicara Yayasan Bina Wicara Jakarta">
                                                    Akademi Terapi Wicara
                                                    Yayasan Bina Wicara Jakarta
                                                </option>
                                                <option value="Politeknik AL Islam Bandung">
                                                    Politeknik AL Islam Bandung
                                                </option>
                                                <option value="Stikes Mercubaktijaya Padang">
                                                    Stikes Mercubaktijaya Padang
                                                </option>
                                                <option value="Lain-Lain">
                                                    Lain-Lain
                                                </option>
                                            </select>
                                            {errors.istitusi && (
                                                <div className="alert alert-danger">
                                                    {errors.istitusi}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label className="mb-1">
                                                Alamat Perguruan Tinggi Terapi
                                                Wicara
                                            </label>
                                            <div className="input-group mb-3">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={almtistitusi}
                                                    onChange={(e) =>
                                                        setAlmtistitusi(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Alamat Lengkap Istitusi"
                                                />
                                            </div>
                                            {errors.almtistitusi && (
                                                <div className="alert alert-danger">
                                                    {errors.almtistitusi}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Pendidikan Non Terapi Wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={nonlinear}
                                                onChange={(e) =>
                                                    setNonlinear(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Select Jenjang Pendidikan
                                                    Non Linear --
                                                </option>
                                                <option value="Sarjana">
                                                    Sarjana
                                                </option>
                                                <option value="Magister">
                                                    Magister
                                                </option>
                                                <option value="Doktor">
                                                    Doktor
                                                </option>
                                                <option value="Tidak">
                                                    Tidak Ada
                                                </option>
                                            </select>
                                            {errors.status_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.status_anggota}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr />
                                    <label className="form-label fw-bold">
                                        Informasi Pekerjaan :
                                    </label>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Status Kepegawaian
                                            </label>
                                            <select
                                                className="form-select"
                                                value={kepegawaian}
                                                onChange={(e) =>
                                                    setKepegawaian(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Select Status Kepegawaian
                                                    --
                                                </option>
                                                <option value="BLU/KONTRAK">
                                                    BLU/KONTRAK
                                                </option>
                                                <option value="Swasta">
                                                    Swasta
                                                </option>
                                                <option value="PNS">PNS</option>
                                                <option value="PPPK">
                                                    PPPK
                                                </option>
                                                <option value="Belum Bekerja">
                                                    Belum Bekerja
                                                </option>
                                            </select>
                                            {errors.status_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.status_anggota}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Tempat Bekerja
                                            </label>
                                            <select
                                                className="form-select"
                                                value={bekerja}
                                                onChange={(e) =>
                                                    setBekerja(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Select Tempat Bekerja --
                                                </option>
                                                <option value="Klinik Swasta">
                                                    Klinik Swasta
                                                </option>
                                                <option value="Rumah Sakit Swasta">
                                                    Rumah Sakit Swasta
                                                </option>
                                                <option value="Rumah Sakit Umum Pusat">
                                                    Rumah Sakit Umum Pusat
                                                </option>
                                                <option value="Rumah Sakit Umum Daerah">
                                                    Rumah Sakit Umum Daerah
                                                </option>
                                                <option value="Rumah Sakit Militer">
                                                    Rumah Sakit Militer
                                                </option>
                                                <option value="Rumah Sakit Khusus">
                                                    Rumah Sakit Khusus
                                                </option>
                                                <option value="Puskesmas">
                                                    Puskesmas
                                                </option>
                                                <option value="Sekolah Luar Biasa">
                                                    Sekolah Luar Biasa
                                                </option>
                                                <option value="Perguruan Tinggi">
                                                    Perguruan Tinggi
                                                </option>
                                                <option value="Belum Bekerja">
                                                    Belum Bekerja
                                                </option>
                                                <option value="Freelance">
                                                    Freelance
                                                </option>
                                                <option value="Lainnya">
                                                    Lainnya
                                                </option>
                                            </select>
                                            {errors.status_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.status_anggota}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Nama Institusi Tempat Bekerja
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={lokasipekerjaan}
                                                    onChange={(e) =>
                                                        setLokasipekerjaan(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder=" Nama Institusi Tempat Bekerja"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Alamat Institusi Tempat Bekerja
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={alamatTempatBekerja}
                                                    onChange={(e) =>
                                                        setAlamatTempatBekerja(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder=" Nama Institusi Tempat Bekerja"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <label className="form-label fw-bold">
                                        Status Keanggotaan :
                                    </label>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Status Anggota
                                            </label>
                                            <select
                                                className="form-select"
                                                value={statusAnggota}
                                                disabled
                                                onChange={(e) =>
                                                    setStatusAnggota(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Select Status Keanggotaan
                                                    --
                                                </option>
                                                <option value="Anggota Biasa">
                                                    Anggota Biasa
                                                </option>
                                                <option value="Anggota Luar Biasa">
                                                    Anggota Luar Biasa
                                                </option>
                                                <option value="Anggota Kehormatan">
                                                    Anggota Kehormatan
                                                </option>
                                            </select>
                                            {errors.status_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.status_anggota}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                DPW
                                            </label>
                                            <select
                                                className="form-select"
                                                disabled
                                                value={provinceID}
                                                onChange={(e) =>
                                                    setProvinceID(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Select DPW --
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
                                            {errors.province_id && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.province_id}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                DPC
                                            </label>
                                            <select
                                                className="form-select"
                                                disabled
                                                value={cityID}
                                                onChange={(e) =>
                                                    setCityID(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Select DPC --
                                                </option>
                                                {cities.map((city) => (
                                                    <option
                                                        value={city.id}
                                                        key={city.id}
                                                    >
                                                        {city.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.city_id && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.city_id}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Password Confirmation
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) =>
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Password Confirmation"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
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
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
