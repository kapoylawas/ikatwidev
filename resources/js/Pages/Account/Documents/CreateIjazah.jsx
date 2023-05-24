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

export default function DocumentCreateIjazah() {
    const { errors, users } = usePage().props;

    //define state
    const [ijazahAkhir, setIjazahAkhir] = useState("");
    const [universitas, setUniversitas] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [akredetasi, setAkredetasi] = useState("");
    const [tahunlulus, setTahunlulus] = useState("");
    const [noijazah, setNoijazah] = useState("");
    const [dateijazah, setDateijazah] = useState("");
    const [ipk, setIpk] = useState("");
    const [transkip, setTranskip] = useState("");
    const [ijazah, setIjazah] = useState("");

    // store metod upload ijazah
    const storeIjazah = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/documents/storeijazah",
            {
                //data
                user_id: users.id,
                ijazah_akhir: ijazahAkhir,
                name_universitas: universitas,
                jurusan: jurusan,
                akredetasi: akredetasi,
                tahun_lulus: tahunlulus,
                no_ijazah: noijazah,
                date_ijazah: dateijazah,
                ipk: ipk,
                transkip: transkip,
                ijazah: ijazah,
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
                    setTranskip(null);
                    setIjazah(null);
                },
            }
        );
    };
    

    return (
        <>
            <Head>
                <title>Creat Ijazah - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href={`/account/documents/showIjazah/${users.id}`}
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
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-folder"></i> Upload
                                    Ijazah
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeIjazah}>
                                    {/* <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Ijazah terakhir pendidikan terapis
                                            wicara
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={ijazahAkhir}
                                            onChange={(e) =>
                                                setIjazahAkhir(e.target.value)
                                            }
                                            placeholder="Ijazah Terakhir"
                                        />
                                    </div> */}
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                Ijazah terakhir pendidikan terapis wicara
                                            </label>
                                            <select
                                                className="form-select"
                                                value={ijazahAkhir}
                                                onChange={(e) =>
                                                    setIjazahAkhir(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Pilih Ijazah Terakhir --
                                                </option>
                                                <option
                                                    value="DIII"
                                                >
                                                       DIII
                                                </option>
                                                <option
                                                    value="S1"
                                                >
                                                        S1
                                                </option>
                                                <option
                                                    value="S2"
                                                >
                                                        S2
                                                </option>
                                                
                                            </select>
                                            {errors.status_anggota && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.status_anggota}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {errors.ijazah_akhir && (
                                        <div className="alert alert-danger">
                                            {errors.ijazah_akhir}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Universitas
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={universitas}
                                            onChange={(e) =>
                                                setUniversitas(e.target.value)
                                            }
                                            placeholder="Nama perguruan tinggi pilihan"
                                        />
                                    </div>
                                    {errors.ijazah_akhir && (
                                        <div className="alert alert-danger">
                                            {errors.ijazah_akhir}
                                        </div>
                                    )}
                                    {errors.ijazah_akhir && (
                                        <div className="alert alert-danger">
                                            {errors.ijazah_akhir}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Jurusan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={jurusan}
                                            onChange={(e) =>
                                                setJurusan(e.target.value)
                                            }
                                            placeholder="Nama Jurusan"
                                        />
                                    </div>
                                    {errors.jurusan && (
                                        <div className="alert alert-danger">
                                            {errors.jurusan}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Akredetasi
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={akredetasi}
                                            onChange={(e) =>
                                                setAkredetasi(e.target.value)
                                            }
                                            placeholder="Akredetasi jurusan"
                                        />
                                    </div>
                                    {errors.akredetasi && (
                                        <div className="alert alert-danger">
                                            {errors.akredetasi}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tahun lulus
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={tahunlulus}
                                            onChange={(e) =>
                                                setTahunlulus(e.target.value)
                                            }
                                            placeholder="Tahun lulus"
                                        />
                                    </div>
                                    {errors.tahun_lulus && (
                                        <div className="alert alert-danger">
                                            {errors.tahun_lulus}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            No ijazah
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={noijazah}
                                            onChange={(e) =>
                                                setNoijazah(e.target.value)
                                            }
                                            placeholder="No Ijazah"
                                        />
                                    </div>
                                    {errors.no_ijazah && (
                                        <div className="alert alert-danger">
                                            {errors.no_ijazah}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tanggal Ijazah
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={dateijazah}
                                            onChange={(e) =>
                                                setDateijazah(e.target.value)
                                            }
                                            placeholder="Tanggal Ijazah"
                                        />
                                    </div>
                                    {errors.no_ijazah && (
                                        <div className="alert alert-danger">
                                            {errors.no_ijazah}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            IPK
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={ipk}
                                            onChange={(e) =>
                                                setIpk(e.target.value)
                                            }
                                            placeholder="Index Prestasi Akademik"
                                        />
                                    </div>
                                    {errors.no_ijazah && (
                                        <div className="alert alert-danger">
                                            {errors.no_ijazah}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File Transkip <li style={{ color: "red" }}>(File Wajib PDF, max 4 mb)</li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setTranskip(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.transkip && (
                                        <div className="alert alert-danger">
                                            {errors.transkip}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File Ijazah  <li style={{ color: "red" }}>(File Wajib PDF, max 4 mb)</li>
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
                                        <div className="alert alert-danger">
                                            {errors.ijazah}
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
