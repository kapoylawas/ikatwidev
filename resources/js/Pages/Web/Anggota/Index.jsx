//import React
import React, { useState } from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head } from "@inertiajs/inertia-react";

//import axios
import axios from "axios";
import Pagination from "../../../Shared/Pagination";

export default function AnggotaIndex({ provinces, cities }) {
    //define state
    const [anggotas, setAnggota] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const currentDate = new Date();

    //define method "searchhandler"
    // const searchHandler = (e) => {
    const searchHandler = (q, dpc, dpw) => {
        //set isLoading to true
        setIsLoading(true);

        //set products to null
        setAnggota([]);

        axios
            .post(`/searchAnggota`, {
                // q: e.target.value,
                q, dpc, dpw
            })
            .then((response) => {
                //set isLoading to false
                setIsLoading(false);
                //set response to state
                setAnggota(response.data.anggota.data);
            });
    };

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        searchHandler(term, selectedCity, selectedProvince);
    };

    const handleProvinceChange = (e) => {
        const selectedProvinceValue = e.target.value;
        setSelectedProvince(selectedProvinceValue);
        searchHandler(searchTerm, selectedCity, selectedProvinceValue);
    };

    const handleCityChange = (e) => {
        const selectedCityValue = e.target.value;
        setSelectedCity(selectedCityValue);
        searchHandler(searchTerm, selectedCityValue, selectedProvince);
    };

    return (
        <>
            <Head>
                <title>IKATWI - Ikatan Terapis Wicara</title>
            </Head>
            <br />
            <LayoutWeb>
                <div className="container" style={{ marginTop: "65px", marginBottom: "50px" }}>
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        // onChange={(e) => searchHandler(e)}
                                        onChange={handleInputChange}
                                        placeholder="Cari disini..."
                                    />
                                </div>
                                <div className="input-group mt-2">
                                    <select
                                        className="form-select mx-2"
                                        onChange={handleProvinceChange}
                                        value={selectedProvince}
                                    >
                                        <option value="">Pilih DPW</option>
                                        {provinces.map((province) => (
                                            <option key={province.id} value={province.id}>
                                                {province.name}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className="form-select mx-2"
                                        onChange={handleCityChange}
                                        value={selectedCity}
                                    >
                                        <option value="">Pilih DPC</option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div
                                className="container"
                                style={{ marginTop: "20px" }}
                            >
                                <div className="fade-in">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <div className="card border-0 rounded shadow-sm border-top-admin">
                                                <div className="card-header">
                                                    <span className="font-weight-bold">
                                                        <i className="fa fa-users"></i>{" "}
                                                        Anggota Ikatwi
                                                    </span>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        {isLoading && (
                                                            <div className="row justify-content-center">
                                                                <div className="col-md-1">
                                                                    <div className="col-md-3 col-6 mb-3">
                                                                        <div className="card-body text-center">
                                                                            <div
                                                                                className="spinner-border text-success justify-content-center mt-3 text-center"
                                                                                role="status"
                                                                            >
                                                                                <span className="visually-hidden">
                                                                                    Loading...
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                        <table className="table table-bordered table-striped table-hovered">
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "3%",
                                                                        }}
                                                                    >
                                                                        No
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "8%",
                                                                        }}
                                                                    >
                                                                        Foto
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "10%",
                                                                        }}
                                                                    >
                                                                        No
                                                                        Anggota
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "15%",
                                                                        }}
                                                                    >
                                                                        Name
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "15%",
                                                                        }}
                                                                    >
                                                                        DPW
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "15%",
                                                                        }}
                                                                    >
                                                                        DPC
                                                                    </th>
                                                                    {/* <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "10%",
                                                                        }}
                                                                    >
                                                                        No str
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "13%",
                                                                        }}
                                                                    >
                                                                        Experide
                                                                    </th> */}
                                                                    <th
                                                                        scope="col"
                                                                        style={{
                                                                            width: "14%",
                                                                        }}
                                                                    >
                                                                        Status
                                                                        STR
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {anggotas.map(
                                                                    (
                                                                        anggota,
                                                                        index
                                                                    ) => (
                                                                        <tr
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <td>
                                                                                {
                                                                                    ++index
                                                                                }
                                                                            </td>
                                                                            <td className="text-center">
                                                                                <img
                                                                                    src={
                                                                                        anggota.image
                                                                                    }
                                                                                    className="rounded-3"
                                                                                    width={
                                                                                        "50"
                                                                                    }
                                                                                    alt="Deskripsi gambar"
                                                                                    onError={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.target.onerror =
                                                                                            null; // menghindari infinite loop jika terjadi kesalahan lagi
                                                                                        e.target.src =
                                                                                            "/assets/images/user.png"; // mengganti gambar dengan gambar "tidak ditemukan"
                                                                                    }}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    anggota.no_anggota
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    anggota.name
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    anggota.province.name
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {anggota.city === 0 ? (
                                                                                    <p>DPC tidak ada</p>
                                                                                ) : (
                                                                                    anggota.city.name
                                                                                )}
                                                                            </td>
                                                                            {/* <td>
                                                                                {anggota.surat_strs.map((str) =>
                                                                                    str.no_str
                                                                                )}
                                                                            </td>
                                                                            <td>
                                                                                {anggota.surat_strs.map((str) =>
                                                                                    str.date_end
                                                                                )}
                                                                            </td> */}
                                                                            <td>
                                                                                {new Date(
                                                                                    anggota.surat_strs.map((str) =>
                                                                                        str.date_end
                                                                                    )
                                                                                ) >=
                                                                                    currentDate ? (
                                                                                    <span className="btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2">
                                                                                        Aktif
                                                                                    </span>
                                                                                ) : (
                                                                                    <span className="btn btn-danger btn-sm shadow-sm border-0 ms-2 mb-2">
                                                                                        Non Aktif
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    {/* <Pagination links={anggotas.links} align={"end"} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
