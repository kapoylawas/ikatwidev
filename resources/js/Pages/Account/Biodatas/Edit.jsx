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
    const { errors, biodata } = usePage().props;

    // state user
    const [name, setName] = useState(biodata.name);
    const [nik, setNik] = useState(biodata.nik);
    const [email, setEmail] = useState(biodata.email);
    const [phone, setPhone] = useState(biodata.phone);
    const [alamat, setAlamat] = useState(biodata.alamat);
    const [tempatlahir, setTempatlahir] = useState(biodata.tempat_lahir);
    const [tgllahir, setTgllahir] = useState(biodata.tgl_lahir);
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
                image: image,
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
                <div className="row mt-5">
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
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Edit New
                                    User
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateUser}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Image
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
                                                <label className="form-label fw-bold">
                                                    Name dan Gelar
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
                                                <label className="form-label fw-bold">
                                                    Email Address
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
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Phone
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

                                    {/*  */}
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label className="mb-1">
                                                Alamat
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
                                                    placeholder="Alamat Lengkap"
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
