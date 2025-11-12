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

export default function CategoryEdit() {

    const {
        errors,
        provinces,
        cities,
        verifPengajuan,
    } = usePage().props;

    const [id, setId] = useState(verifPengajuan.user_id);
    const [nama, setNama] = useState(verifPengajuan.name);
    const [kta, setKta] = useState(verifPengajuan.kta);
    const [provinceID, setProvinceID] = useState(verifPengajuan.province_id);
    const [cityID, setCityID] = useState(verifPengajuan.city_id);
    const [tglmutasi, setTglmutasi] = useState(verifPengajuan.tgl_mutasi);
    const [keterangan, setKeterangan] = useState(verifPengajuan.keterangan);
    const [tujuan, setTujuan] = useState(verifPengajuan.tujuan_mutasi);
    const [tujuandpc, setTujuandpc] = useState(verifPengajuan.dpc_mutasi);
    const [status, setStatus] = useState(verifPengajuan.status);
    const [keteranganRefisi, setKeteranganRefisi] = useState(verifPengajuan.keterangan_revisi);

    const updatePengajuan = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            `/account/verifPengajuan/${verifPengajuan.id}`,
            {
                //data
                user_id: id,
                name: nama,
                kta: kta,
                province_id: provinceID,
                city_id: cityID,
                tgl_mutasi: tglmutasi,
                keterangan: keterangan,
                tujuan_mutasi: tujuan,
                dpc_mutasi: tujuandpc,
                status: status,
                keterangan_revisi: keteranganRefisi,
                _method: "PUT"
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data Pengajuan Anda Berhasil di Update!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2500,
                    });
                },
            }
        );
    };

    // Fungsi untuk mendapatkan class CSS berdasarkan status
    const getStatusClass = (statusValue) => {
        switch (statusValue) {
            case 'ditunda':
                return 'bg-warning text-dark';
            case 'dikirim':
                return 'bg-info text-white';
            case 'selesai':
                return 'bg-success text-white';
            case 'tolak':
                return 'bg-danger text-white';
            case 'setujui':
                return 'bg-success text-white';
            case 'revisi':
                return 'bg-warning text-dark';
            default:
                return 'bg-secondary text-white';
        }
    };

    // Fungsi untuk mendapatkan label status yang lebih user-friendly
    const getStatusLabel = (statusValue) => {
        switch (statusValue) {
            case 'ditunda':
                return 'Ditunda untuk perbaikan';
            case 'dikirim':
                return 'Disetujui mutasi oleh DPW/DPC Asal (Terkirim)';
            case 'selesai':
                return 'Diterima DPW/DPC Tujuan (Mutasi Selesai)';
            case 'tolak':
                return 'Ditolak';
            case 'setujui':
                return 'Disetujui';
            case 'revisi':
                return 'Perlu Revisi';
            default:
                return statusValue;
        }
    };

    // Fungsi untuk mendapatkan icon berdasarkan status
    const getStatusIcon = (statusValue) => {
        switch (statusValue) {
            case 'ditunda':
                return 'fas fa-clock';
            case 'dikirim':
                return 'fas fa-paper-plane';
            case 'selesai':
                return 'fas fa-check-circle';
            case 'tolak':
                return 'fas fa-times-circle';
            case 'setujui':
                return 'fas fa-check-circle';
            case 'revisi':
                return 'fas fa-edit';
            default:
                return 'fas fa-info-circle';
        }
    };

    return (
        <>
            <Head>
                <title>Verif Pengajuan - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="container-fluid py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-primary text-white py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="mb-0">
                                            <i className="fas fa-edit me-2"></i>
                                            Verif Pengajuan Mutasi
                                        </h4>
                                        <div className={`badge ${getStatusClass(status)} px-3 py-2`}>
                                            <i className={`${getStatusIcon(status)} me-2`}></i>
                                            {getStatusLabel(status)}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <form onSubmit={updatePengajuan}>
                                        <div className="row mb-4">
                                            <div className="col-md-12">
                                                <h5 className="text-primary mb-3 border-bottom pb-2">
                                                    <i className="fas fa-user-circle me-2"></i>
                                                    Informasi Anggota
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Nama Lengkap
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-user"></i>
                                                        </span>
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
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Nomor KTA
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-id-card"></i>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control bg-light"
                                                            value={kta}
                                                            onChange={(e) => setKta(e.target.value)}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        DPW Asal
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-map-marker-alt"></i>
                                                        </span>
                                                        <select
                                                            className="form-select bg-light"
                                                            disabled
                                                            value={provinceID}
                                                            onChange={(e) =>
                                                                setProvinceID(e.target.value)
                                                            }
                                                        >
                                                            <option value="">-- Pilih DPW --</option>
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
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        DPC Asal
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-map-pin"></i>
                                                        </span>
                                                        <select
                                                            className="form-select bg-light"
                                                            disabled
                                                            value={cityID}
                                                            onChange={(e) => setCityID(e.target.value)}
                                                        >
                                                            <option value="">-- Pilih DPC --</option>
                                                            {cities.map((city) => (
                                                                <option value={city.id} key={city.id}>
                                                                    {city.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-4 mt-4">
                                            <div className="col-md-12">
                                                <h5 className="text-primary mb-3 border-bottom pb-2">
                                                    <i className="fas fa-exchange-alt me-2"></i>
                                                    Data Mutasi
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Tanggal Mutasi
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-calendar-alt"></i>
                                                        </span>
                                                        <input
                                                            type="date"
                                                            className="form-control bg-light"
                                                            value={tglmutasi}
                                                            onChange={(e) =>
                                                                setTglmutasi(e.target.value)
                                                            }
                                                            disabled
                                                        />
                                                    </div>
                                                    {errors.tgl_mutasi && (
                                                        <div className="text-danger small mt-1">
                                                            <i className="fas fa-exclamation-circle me-1"></i>
                                                            {errors.tgl_mutasi}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Status Verifikasi
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-check-circle"></i>
                                                        </span>
                                                        <select
                                                            className="form-select"
                                                            value={status}
                                                            onChange={(e) => setStatus(e.target.value)}
                                                        >
                                                            <option value="">-- Pilih Status --</option>
                                                            <option value="ditunda">Ditunda untuk perbaikan</option>
                                                            <option value="dikirim">Disetujui mutasi oleh DPW/DPC Asal (Terkirim)</option>
                                                            <option value="selesai">Diterima DPW/DPC Tujuan (Mutasi Selesai)</option>
                                                        </select>
                                                    </div>
                                                    {errors.status && (
                                                        <div className="text-danger small mt-1">
                                                            <i className="fas fa-exclamation-circle me-1"></i>
                                                            {errors.status}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Preview */}
                                        {status && (
                                            <div className="row mb-3">
                                                <div className="col-md-12">
                                                    <div className="alert alert-info border-0">
                                                        <div className="d-flex align-items-center">
                                                            <i className={`${getStatusIcon(status)} fa-lg me-3`}></i>
                                                            <div>
                                                                <h6 className="mb-1 fw-bold">Preview Status:</h6>
                                                                <span className={`badge ${getStatusClass(status)} px-3 py-2`}>
                                                                    <i className={`${getStatusIcon(status)} me-2`}></i>
                                                                    {getStatusLabel(status)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Tujuan Mutasi (DPW)
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-map-marker-alt"></i>
                                                        </span>
                                                        <select
                                                            className="form-select bg-light"
                                                            value={tujuan}
                                                            onChange={(e) => setTujuan(e.target.value)}
                                                            disabled
                                                        >
                                                            <option value="">
                                                                -- Pilih DPW Tujuan --
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
                                                    {errors.tujuan_mutasi && (
                                                        <div className="text-danger small mt-1">
                                                            <i className="fas fa-exclamation-circle me-1"></i>
                                                            {errors.tujuan_mutasi}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Tujuan Mutasi (DPC)
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light">
                                                            <i className="fas fa-map-pin"></i>
                                                        </span>
                                                        <select
                                                            className="form-select bg-light"
                                                            value={tujuandpc}
                                                            onChange={(e) =>
                                                                setTujuandpc(e.target.value)
                                                            }
                                                            disabled
                                                        >
                                                            <option value="">
                                                                -- Pilih DPC Tujuan --
                                                            </option>
                                                            {cities.map((dpc) => (
                                                                <option value={dpc.id} key={dpc.id}>
                                                                    {dpc.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    {errors.dpc_mutasi && (
                                                        <div className="text-danger small mt-1">
                                                            <i className="fas fa-exclamation-circle me-1"></i>
                                                            {errors.dpc_mutasi}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Keterangan Mutasi
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light align-items-start pt-2">
                                                            <i className="fas fa-sticky-note"></i>
                                                        </span>
                                                        <textarea
                                                            className="form-control bg-light"
                                                            rows="3"
                                                            value={keterangan}
                                                            onChange={(e) =>
                                                                setKeterangan(e.target.value)
                                                            }
                                                            placeholder="Contoh: mutasi karena pindah tempat kerja"
                                                            disabled
                                                        />
                                                    </div>
                                                    {errors.keterangan && (
                                                        <div className="text-danger small mt-1">
                                                            <i className="fas fa-exclamation-circle me-1"></i>
                                                            {errors.keterangan}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold text-dark">
                                                        Keterangan Revisi
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light align-items-start pt-2">
                                                            <i className="fas fa-edit"></i>
                                                        </span>
                                                        <textarea
                                                            className="form-control"
                                                            rows="3"
                                                            value={keteranganRefisi}
                                                            onChange={(e) =>
                                                                setKeteranganRefisi(e.target.value)
                                                            }
                                                            placeholder="Masukkan keterangan revisi jika diperlukan"
                                                        />
                                                    </div>
                                                    {errors.keterangan_revisi && (
                                                        <div className="text-danger small mt-1">
                                                            <i className="fas fa-exclamation-circle me-1"></i>
                                                            {errors.keterangan_revisi}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <div className="d-flex justify-content-end gap-2 border-top pt-4">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-outline-secondary px-4"
                                                    >
                                                        <i className="fas fa-redo me-2"></i> Reset
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success px-4"
                                                    >
                                                        <i className="fas fa-save me-2"></i> Simpan Perubahan
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )
}