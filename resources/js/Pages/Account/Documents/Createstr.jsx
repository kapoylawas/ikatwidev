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

export default function DocumentCreatestr() {
    const { errors, users } = usePage().props;

    //define state
    const [filestr, setFilestr] = useState("");
    const [nostr, setNostr] = useState("");
    const [datestart, setDatestart] = useState("");
    const [nosertifikat, setNosertifikat] = useState("");

    //method storeImage
    const storeStr = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/documents/storestr",
            {
                //data
                image: filestr,
                no_str: nostr,
                date_start: datestart,
                no_sertifikat: nosertifikat,
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
                    setFilestr(null);
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Creat STR - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    // href="/account/documents"
                                    href={`/account/documents/showstr/${users.id}`}
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
                                    Upload STR
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeStr}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            No STR
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={nostr}
                                            onChange={(e) =>
                                                setNostr(e.target.value)
                                            }
                                            placeholder="NO STR"
                                        />
                                    </div>
                                    {errors.no_str && (
                                        <div className="alert alert-danger">
                                            {errors.no_str}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tanggal Pengesahan STR
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
                                            Nomor sertifikat kompetensi
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={nosertifikat}
                                            onChange={(e) =>
                                                setNosertifikat(e.target.value)
                                            }
                                            placeholder="Nomor sertifikat kompetensi"
                                        />
                                    </div>
                                    {errors.no_sertifikat && (
                                        <div className="alert alert-danger">
                                            {errors.no_sertifikat}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File STR{" "}
                                            <li style={{ color: "red" }}>
                                                (File Wajib PDF, max 4 mb)
                                            </li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFilestr(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.file && (
                                        <div className="alert alert-danger">
                                            {errors.file}
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
