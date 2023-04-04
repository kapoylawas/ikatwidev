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

export default function WilayahCabangCreate() {
    const { wilayah, errors } = usePage().props;

    const [cityid, setCityid] = useState("");
    const [alamat, setAlamat] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [instagram, setInstagram] = useState("");
    const [nameketua, setNameketua] = useState("");

    const storeWilayah = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/areadpc",
            {
                //data
                province_id: cityid,
                alamat: alamat,
                phone: phone,
                email: email,
                instagram: instagram,
                name_ketua: nameketua,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
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
                <title>Create Wilayah - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> Add New
                                    Wilayah DPC
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeWilayah}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Wilayah DPW
                                                </label>
                                                <select
                                                    className="form-select"
                                                    value={cityid}
                                                    onChange={(e) =>
                                                        setCityid(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        -- Select DPW --
                                                    </option>
                                                    {wilayah.map((wilaya) => (
                                                        <option
                                                            value={wilaya.id}
                                                            key={wilaya.id}
                                                        >
                                                            {wilaya.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {errors.province_id && (
                                                <div className="alert alert-danger">
                                                    {errors.province_id}
                                                </div>
                                            )}

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Name Ketua
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={nameketua}
                                                    onChange={(e) =>
                                                        setNameketua(e.target.value)
                                                    }
                                                    placeholder="Enter Name Ketua"
                                                />
                                            </div>
                                            {errors.name_ketua && (
                                                <div className="alert alert-danger">
                                                    {errors.name_ketua}
                                                </div>
                                            )}

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Alamat
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={alamat}
                                                    onChange={(e) =>
                                                        setAlamat(e.target.value)
                                                    }
                                                    placeholder="Enter Alamat"
                                                />
                                            </div>
                                            {errors.alamat && (
                                                <div className="alert alert-danger">
                                                    {errors.alamat}
                                                </div>
                                            )}

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    No Telepon
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                    placeholder="Enter No Telepon"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <div className="alert alert-danger">
                                                    {errors.phone}
                                                </div>
                                            )}

                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Enter Email"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Instagram
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={instagram}
                                                    onChange={(e) =>
                                                        setInstagram(e.target.value)
                                                    }
                                                    placeholder="Enter Instagram"
                                                />
                                            </div>
                                            {errors.instagram && (
                                                <div className="alert alert-danger">
                                                    {errors.instagram}
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
