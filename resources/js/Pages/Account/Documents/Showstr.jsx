//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function DocumentShowstr() {
    const { errors, users } = usePage().props;
    console.log("data =", users);
    //define state
    const [filestr, setFilestr] = useState("");
    const [nostr, setNostr] = useState("");
    const [datestr, setDatestr] = useState("");
    const [datestart, setDatestart] = useState("");
    const [dateend, setDateend] = useState("");

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
                date_str: datestr,
                date_start: datestart,
                date_end: dateend,
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
                <title>Detail Document - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3 col-12 mb-2">
                                <Link
                                    href={`/account/documents/createstr/${users.id}`}
                                    class="btn btn-md btn-admin border-0 shadow w-100"
                                    type="button"
                                >
                                    <i class="fa fa-plus-circle me-2"></i>
                                    Tambah
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shopping-bag"></i>{" "}
                                    Upload Kegiatan Image
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeStr}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            No STR
                                        </label>
                                        <input
                                            type="number"
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
                                            Date STR
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={datestr}
                                            onChange={(e) =>
                                                setDatestr(e.target.value)
                                            }
                                        />
                                    </div>
                                    {errors.date_str && (
                                        <div className="alert alert-danger">
                                            {errors.date_str}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tanggal Dibuat STR
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
                                            Tanggal Kaduluarsa STR
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
                                            File STR
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFilestr(e.target.files[0])
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
                </div> */}
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> STR File
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "3%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    No STR
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "6%" }}
                                                >
                                                    Tanggal STR
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tanggal Awal
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "8%" }}
                                                >
                                                    Tanggal Akhir
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "30%" }}
                                                >
                                                    File
                                                </th>

                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.surat_strs.data.map(
                                                (strs, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (users
                                                                    .surat_strs
                                                                    .current_page -
                                                                    1) *
                                                                    users
                                                                        .surat_strs
                                                                        .per_page}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.no_str}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.date_str}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.date_start}
                                                        </td>
                                                        <td className="text-center">
                                                            {strs.date_end}
                                                        </td>
                                                        <td className="text-center">
                                                            <iframe
                                                                src={strs.image}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "200px",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></iframe>
                                                        </td>
                                                        <td className="text-center"></td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
