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

export default function DocumentCreatesip() {
    const { errors, users } = usePage().props;

    //define state
    const [filesip, setFilesip] = useState("");
    const [nosip, setNosip] = useState("");
    const [datesip, setDatesip] = useState("");
    const [datestart, setDatestart] = useState("");
    const [dateend, setDateend] = useState("");
    const [penerbit, setPenerbit] = useState("");

    // method store sip
    const storeSip = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/documents/storesip",
            {
                //data
                image: filesip,
                no_sip: nosip,
                date_sip: datesip,
                date_start: datestart,
                date_end: dateend,
                penerbit: penerbit,
                user_id: users.id,
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

                    //set state to null
                    setFilesip(null);
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Creat SIP - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    // href="/account/documents"
                                    href={`/account/documents/showsip/${users.id}`}
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
                                    <i className="fa fa-shopping-bag"></i>{" "}
                                    Upload SIP
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeSip}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            No SIP
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={nosip}
                                            onChange={(e) =>
                                                setNosip(e.target.value)
                                            }
                                            placeholder="NO SIP"
                                        />
                                    </div>
                                    {errors.no_sip && (
                                        <div className="alert alert-danger">
                                            {errors.no_sip}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                        Tanggal pengesahan SIP
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={datesip}
                                            onChange={(e) =>
                                                setDatesip(e.target.value)
                                            }
                                        />
                                    </div>
                                    {errors.date_sip && (
                                        <div className="alert alert-danger">
                                            {errors.date_sip}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                        Tanggal Mulai Berlaku SIP
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={datestart}
                                            onChange={(e) =>
                                                setDatestart(e.target.value)
                                            }
                                        />
                                    </div>
                                    {errors.date_start && (
                                        <div className="alert alert-danger">
                                            {errors.date_start}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                        Masa Berlaku SIP
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={dateend}
                                            onChange={(e) =>
                                                setDateend(e.target.value)
                                            }
                                        />
                                    </div>
                                    {errors.date_end && (
                                        <div className="alert alert-danger">
                                            {errors.date_end}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File SIP <li style={{ color: "red" }}>(File Wajib PDF, max 4 mb)</li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFilesip(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.file && (
                                        <div className="alert alert-danger">
                                            {errors.file}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Kabupaten/Kota penerbit SIP
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={penerbit}
                                            onChange={(e) =>
                                                setPenerbit(e.target.value)
                                            }
                                            placeholder="Kabupaten/Kota penerbit SIP"
                                        />
                                    </div>
                                    {errors.penerbit && (
                                        <div className="alert alert-danger">
                                            {errors.penerbit}
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
