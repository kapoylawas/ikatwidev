//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function PengajuanCreate() {
    const { errors, transactions, statusAnggota, biodata, provinces, cities } =
        usePage().props;

    const status = transactions.map((ts) => ts.status);
    const [name] = useState(statusAnggota.status_anggota);

    const filter = status
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "");

    const [id, setId] = useState(biodata.id);
    const [nama, setNama] = useState(biodata.name);
    const [kta, setKta] = useState(biodata.no_anggota);
    const [provinceID, setProvinceID] = useState(biodata.province_id);
    const [cityID, setCityID] = useState(biodata.city_id);
    const [tglmutasi, setTglmutasi] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [tujuan, setTujuan] = useState("");
    const [tujuandpc, setTujuandpc] = useState("");
    const [tipePindah, setTipePindah] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);

    // Reset tujuan ketika tipe pindah berubah
    const handleTipePindahChange = (e) => {
        const selectedTipe = e.target.value;
        setTipePindah(selectedTipe);

        if (selectedTipe === "dpc") {
            // Jika pindah DPC, otomatis isi tujuan_mutasi dengan DPW Asal
            setTujuan(provinceID);
            setFilteredCities(cities.filter(city => city.province_id == provinceID));
        } else {
            setTujuan("");
            setFilteredCities([]);
        }
        setTujuandpc("");
    };

    // Filter cities ketika tujuan DPW berubah (untuk pindah DPW)
    const handleTujuanChange = (e) => {
        const selectedProvinceId = e.target.value;
        setTujuan(selectedProvinceId);

        if (selectedProvinceId) {
            // Filter cities berdasarkan province yang dipilih
            const filtered = cities.filter(city => city.province_id == selectedProvinceId);
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }
        setTujuandpc(""); // Reset DPC ketika DPW berubah
    };

    //method "storePengajuan"
    const storePengajuan = async (e) => {
        e.preventDefault();

        // Prepare data based on tipe pindah
        const formData = {
            user_id: id,
            name: nama,
            kta: kta,
            province_id: provinceID,
            city_id: cityID,
            tgl_mutasi: tglmutasi,
            keterangan: keterangan,
            tipe_pindah: tipePindah,
        };

        // Add conditional fields based on tipe pindah
        if (tipePindah === "dpw") {
            formData.tujuan_mutasi = tujuan;
            formData.dpc_mutasi = tujuandpc;
        } else if (tipePindah === "dpc") {
            // Untuk pindah DPC, tujuan_mutasi adalah DPW Asal (province_id)
            formData.tujuan_mutasi = provinceID;
            formData.dpc_mutasi = tujuandpc;
        }

        //sending data
        Inertia.post(
            "/account/pengajuan",
            formData,
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data Pengajuan Anda Sudah Terkirim!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2500,
                    });
                },
            }
        );
    };

    // Dapatkan nama DPW Asal untuk ditampilkan
    const getDpwAsalName = () => {
        const dpwAsal = provinces.find(province => province.id == provinceID);
        return dpwAsal ? dpwAsal.name : "DPW Asal";
    };

    // Dapatkan nama DPW Tujuan untuk ditampilkan
    const getDpwTujuanName = () => {
        const dpwTujuan = provinces.find(province => province.id == tujuan);
        return dpwTujuan ? dpwTujuan.name : "DPW Tujuan";
    };

    return (
        <>
            <Head>
                <title>User Pengajuan Mutasi - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="col-md-12 mt-2">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h5 className="card-title mb-0">
                                <i className="fas fa-exchange-alt me-2"></i>
                                Form Pengajuan Mutasi
                            </h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storePengajuan}>
                                {/* Data Diri Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-user me-2"></i>
                                            Data Diri
                                        </h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light"
                                                value={nama}
                                                onChange={(e) =>
                                                    setNama(e.target.value)
                                                }
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nomor KTA
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light"
                                                value={kta}
                                                onChange={(e) =>
                                                    setKta(e.target.value)
                                                }
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Asal Keanggotaan Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-map-marker-alt me-2"></i>
                                            Asal Keanggotaan
                                        </h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                DPW Asal
                                            </label>
                                            <select
                                                className="form-select bg-light"
                                                disabled
                                                value={provinceID}
                                                onChange={(e) =>
                                                    setProvinceID(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Pilih DPW --
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
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                DPC Asal
                                            </label>
                                            <select
                                                className="form-select bg-light"
                                                disabled
                                                value={cityID}
                                                onChange={(e) =>
                                                    setCityID(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Pilih DPC --
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
                                        </div>
                                    </div>
                                </div>

                                {/* Data Mutasi Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-file-alt me-2"></i>
                                            Data Mutasi
                                        </h6>
                                    </div>

                                    {/* Tipe Pindah */}
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Tipe Pindah <span className="text-danger">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                value={tipePindah}
                                                onChange={handleTipePindahChange}
                                                required
                                            >
                                                <option value="">
                                                    -- Pilih Tipe Pindah --
                                                </option>
                                                <option value="dpw">
                                                    Pindah DPW (Pindah Provinsi)
                                                </option>
                                                <option value="dpc">
                                                    Pindah DPC (Pindah Kabupaten/Kota dalam Provinsi yang sama)
                                                </option>
                                            </select>
                                            {errors.tipe_pindah && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.tipe_pindah}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Tanggal Mutasi <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={tglmutasi}
                                                onChange={(e) =>
                                                    setTglmutasi(e.target.value)
                                                }
                                                placeholder="Pilih Tanggal Mutasi"
                                                required
                                            />
                                            {errors.tgl_mutasi && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.tgl_mutasi}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Tujuan Mutasi Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-location-arrow me-2"></i>
                                            Tujuan Mutasi
                                        </h6>
                                    </div>

                                    {/* Tujuan DPW - tampil untuk kedua tipe pindah */}
                                    {(tipePindah === "dpw" || tipePindah === "dpc") && (
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    {tipePindah === "dpw" ? "Tujuan DPW" : "DPW"} <span className="text-danger">*</span>
                                                </label>
                                                {tipePindah === "dpw" ? (
                                                    // Untuk pindah DPW - user memilih tujuan
                                                    <select
                                                        className="form-select"
                                                        value={tujuan}
                                                        onChange={handleTujuanChange}
                                                        required
                                                    >
                                                        <option value="">
                                                            -- Pilih Tujuan DPW --
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
                                                ) : (
                                                    // Untuk pindah DPC - otomatis DPW Asal (disabled)
                                                    <input
                                                        type="text"
                                                        className="form-control bg-light"
                                                        value={getDpwAsalName()}
                                                        disabled
                                                    />
                                                )}
                                                {errors.tujuan_mutasi && (
                                                    <div className="alert alert-danger mt-2">
                                                        {errors.tujuan_mutasi}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tujuan DPC - tampil untuk kedua tipe pindah */}
                                    {(tipePindah === "dpw" || tipePindah === "dpc") && (
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Tujuan DPC <span className="text-danger">*</span>
                                                </label>
                                                <select
                                                    className="form-select"
                                                    value={tujuandpc}
                                                    onChange={(e) =>
                                                        setTujuandpc(e.target.value)
                                                    }
                                                    required
                                                    disabled={tipePindah === "dpw" && !tujuan}
                                                >
                                                    <option value="">
                                                        {tipePindah === "dpw" && !tujuan
                                                            ? "-- Pilih DPW terlebih dahulu --"
                                                            : "-- Pilih Tujuan DPC --"
                                                        }
                                                    </option>
                                                    {filteredCities.map((dpc) => (
                                                        <option
                                                            value={dpc.id}
                                                            key={dpc.id}
                                                        >
                                                            {dpc.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {tipePindah === "dpw" && !tujuan && (
                                                    <div className="form-text text-warning">
                                                        Pilih DPW tujuan terlebih dahulu untuk melihat DPC yang tersedia
                                                    </div>
                                                )}
                                                {errors.dpc_mutasi && (
                                                    <div className="alert alert-danger mt-2">
                                                        {errors.dpc_mutasi}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Informasi untuk pindah DPC */}
                                    {tipePindah === "dpc" && (
                                        <div className="col-12">
                                            <div className="alert alert-info">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Informasi:</strong> Anda melakukan mutasi DPC dalam Provinsi <strong>{getDpwAsalName()}</strong>.
                                                Tujuan DPW akan tetap di <strong>{getDpwAsalName()}</strong>.
                                            </div>
                                        </div>
                                    )}

                                    {/* Informasi untuk pindah DPW */}
                                    {tipePindah === "dpw" && tujuan && (
                                        <div className="col-12">
                                            <div className="alert alert-info">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Informasi:</strong> Anda melakukan mutasi ke Provinsi <strong>{getDpwTujuanName()}</strong>.
                                                Pilih DPC tujuan di provinsi tersebut.
                                            </div>
                                        </div>
                                    )}

                                    {/* Pesan informasi umum */}
                                    <div className="col-12">
                                        <div className="alert alert-light border mt-2">
                                            <small>
                                                <i className="fas fa-info-circle me-2"></i>
                                                {tipePindah === "dpw"
                                                    ? "Pindah DPW: Anda akan pindah ke provinsi lain. Pilih tujuan DPW dan DPC."
                                                    : tipePindah === "dpc"
                                                        ? "Pindah DPC: Anda akan pindah ke kabupaten/kota lain dalam provinsi yang sama."
                                                        : "Pilih tipe pindah terlebih dahulu."
                                                }
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* Keterangan Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <h6 className="text-primary mb-3 border-bottom pb-2">
                                            <i className="fas fa-sticky-note me-2"></i>
                                            Keterangan
                                        </h6>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Alasan Mutasi <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                value={keterangan}
                                                onChange={(e) =>
                                                    setKeterangan(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Contoh: Mutasi karena pindah tempat kerja, pindah domisili, atau alasan lainnya..."
                                                required
                                            />
                                            <div className="form-text">
                                                Jelaskan alasan Anda melakukan mutasi dengan jelas.
                                            </div>
                                            {errors.keterangan && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.keterangan}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Konfirmasi Section */}
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="card border-warning">
                                            <div className="card-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        required
                                                        id="confirmationCheck"
                                                    />
                                                    <label
                                                        className="form-check-label fw-bold text-warning"
                                                        htmlFor="confirmationCheck"
                                                    >
                                                        <i className="fas fa-exclamation-triangle me-2"></i>
                                                        Saya menyatakan bahwa data yang saya inputkan adalah benar dan sesuai.
                                                        Saya bertanggung jawab penuh atas kebenaran data mutasi ini.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="d-flex gap-2 justify-content-end">
                                            <Link
                                                href="/account/pengajuan"
                                                className="btn btn-secondary"
                                            >
                                                <i className="fas fa-arrow-left me-2"></i>
                                                Kembali
                                            </Link>
                                            <button
                                                type="reset"
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    setTipePindah("");
                                                    setTujuan("");
                                                    setTujuandpc("");
                                                    setFilteredCities([]);
                                                }}
                                            >
                                                <i className="fas fa-redo me-2"></i>
                                                Reset
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-success"
                                            >
                                                <i className="fas fa-paper-plane me-2"></i>
                                                Ajukan Mutasi
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}