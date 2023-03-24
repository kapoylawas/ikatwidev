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

export default function DocumentsEdit() {
    const { errors, document, cities, provinces } = usePage().props;

    // state user
    const [name, setName] = useState(document.name);
    const [email, setEmail] = useState(document.email);
    const [provinceID, setProvinceID] = useState(document.province_id);
    const [cityID, setCityID] = useState(document.city_id);
    const [ijazah, setIjazah] = useState(null);
    const [str, setStr] = useState(null);
    const [sip, setSip] = useState(null);
    const [dateexprd, setDateExprd] = useState(document.date_exprd);
    

    const updateDocument = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/documents/${document.id}`,
            {
                //data
                name: name,
                email: email,
                ijazah: ijazah,
                str: str,
                sip: sip,
                date_exprd: dateexprd,
                province_id: provinceID,
                city_id: cityID,
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
                <title>Upload Documents - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/account/documents"
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
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Upload
                                    Documents
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateDocument}>
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
                                                    disabled
                                                />
                                            </div>
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
                                                    disabled
                                                />
                                            </div>
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
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File Ijazah
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setIjazah(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.ijazah && (
                                        <div className="alert alert-danger mt-2">
                                            {errors.ijazah}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File SIP
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setSip(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.sip && (
                                        <div className="alert alert-danger mt-2">
                                            {errors.sip}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File STR
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setStr(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.str && (
                                        <div className="alert alert-danger mt-2">
                                            {errors.str}
                                        </div>
                                    )}
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label fw-bold">
                                                Tanggal expired STR
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={dateexprd}
                                                    onChange={(e) =>
                                                        setDateExprd(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Tanggal Expired STR"
                                                />
                                            </div>
                                            {errors.date_exprd && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.date_exprd}
                                                </div>
                                            )}
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
