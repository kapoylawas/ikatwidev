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

export default function KegiatanEdit() {
    //destruct props
    const { errors, kegiatan } = usePage().props;

    //state
    const [name, setName] = useState(kegiatan.name);
    const [link, setLink] = useState(kegiatan.link);
    const [image, setImage] = useState(null);

    const updateKegiatan = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/kegiatan/${kegiatan.id}`,
            {
                //data
                name: name,
                link: link,
                image: image,
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
                <title>Edit Kegiatan - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> Edit Agenda
                                    Kegiatan
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateKegiatan}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Agenda Kegiatan Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Enter Agenda Kegiatan Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Link
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={link}
                                            onChange={(e) =>
                                                setLink(e.target.value)
                                            }
                                            placeholder="Enter Link"
                                        />
                                    </div>
                                    {errors.link && (
                                        <div className="alert alert-danger">
                                            {errors.link}
                                        </div>
                                    )}

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
                                    {errors.image && (
                                        <div className="alert alert-danger">
                                            {errors.image}
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
