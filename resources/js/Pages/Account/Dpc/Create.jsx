//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function DpcCreate() {
    const { errors, provinces } = usePage().props;

    const [name, setName] = useState("");
    const [provinceID, setProvinceID] = useState("");

    const storeDpc = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/dpc",
            {
                //data
                province_id: provinceID,
                name: name,
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
                <title>Master Create DPC - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> Add New DPW
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeDpc}>
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
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            DPC Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Enter DPW Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}

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
