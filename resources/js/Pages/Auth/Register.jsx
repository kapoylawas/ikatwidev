//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

//import axios
import axios from "axios";

export default function Register() {
    const { errors, provinces } = usePage().props;

    // state user
    const [name, setName] = useState("");
    const [nik, setNik] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [provinceID, setProvinceID] = useState("");
    const [cityID, setCityID] = useState("");
    const [filePaktaIntegritas, setFilePaktaIntegritas] = useState("");
    const [cities, setCities] = useState([]);

    const [isChecked, setIsChecked] = useState(false);

    const adminAlan = `https://wa.me/6285752145518`;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    //method getCityByProvince
    const getCityByProvince = async (province_id) => {
        //set state province ID
        setProvinceID(province_id);

        //get cities by province id
        axios
            .get(`/register/cities?province_id=${province_id}`)
            .then((response) => {
                setCities(response.data);
            });
    };

    const showCity = (city_id) => {
        //set state cityID
        setCityID(city_id);
    };

    //function "registerHandler"
    const registerHandler = async (e) => {
        e.preventDefault();

        //register
        Inertia.post(
            "/register",
            {
                name: name,
                nik: nik,
                province_id: provinceID,
                city_id: cityID,
                email: email,
                alamat: alamat,
                filepakta: filePaktaIntegritas,
                password: password,
                password_confirmation: passwordConfirmation,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Register saved successfully!",
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
                <title>Register Akun - IKATWI</title>
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-80">
                        <div className="text-center mb-2">
                            <img src="/assets/images/logo.png" width={"60"} />
                            <h4>
                                <strong className="text-black">IKATWI</strong>
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">
                                        REGISTER AKUN ANGGOTA
                                    </h6>
                                    <hr />
                                    <div className="alert alert-danger border-0 shadow-sm mb-2">
                                        Setelah Register Silahkan Menghubungi,{" "}
                                        <br />
                                        <a target="_blank" href={adminAlan}>
                                            {" "}
                                            {""} Hp.085752145518
                                        </a>
                                        <strong> Admin </strong>
                                    </div>
                                </div>

                                <form onSubmit={registerHandler}>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                NIK
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={nik}
                                                    onChange={(e) =>
                                                        setNik(e.target.value)
                                                    }
                                                    placeholder="No Induk Kependudukan"
                                                    maxLength={16}
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
                                            <label className="mb-1">
                                                Nama Lengkap
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="Nama Lengkap"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Alamat Email
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Alamat Email"
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
                                                DPW
                                            </label>
                                            <select
                                                className="form-select"
                                                value={provinceID}
                                                onChange={(e) =>
                                                    getCityByProvince(
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
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                DPC
                                            </label>
                                            <select
                                                className="form-select"
                                                onChange={(e) =>
                                                    showCity(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Select City --
                                                </option>
                                                {cities.map((city, index) => (
                                                    <option
                                                        key={index}
                                                        value={city.id}
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
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="mb-1">
                                                Alamat
                                            </label>
                                            <div className="input-group mb-2">
                                                <span className="input-group-text">
                                                    <i className="fa fa-folder"></i>
                                                </span>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={alamat}
                                                    onChange={(e) =>
                                                        setAlamat(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Alamat Lengkap Anda"
                                                />
                                            </div>
                                            {errors.alamat && (
                                                <div className="alert alert-danger">
                                                    {errors.alamat}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-1">
                                                <label className="form-label">
                                                    Upload Pakta Integritas
                                                    Format PDF Dan Ukuran 2mb
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept=".pdf"
                                                    onChange={(e) =>
                                                        setFilePaktaIntegritas(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                            </div>
                                            {errors.filepakta && (
                                                <div className="alert alert-danger">
                                                    {errors.filepakta}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Password
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Password"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Password Confirmation
                                            </label>
                                            <div className="input-group mb-2">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) =>
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Password Confirmation"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mb-2">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                            />
                                            {"  "} Bahwa Saya Mengisi Data
                                            Dengan Benar
                                        </label>
                                    </div>
                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                        disabled={!isChecked}
                                    >
                                        REGISTER
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Sudah Punya Akun? <Link href="/login">Login!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
