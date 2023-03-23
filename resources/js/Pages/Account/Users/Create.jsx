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

export default function UserCreate() {
    //destruct props "errors" & "roles"
    const { errors, roles, provinces, cities } = usePage().props;

    // state user
    const [name, setName] = useState("");
    const [nik, setNik] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [provinceID, setProvinceID] = useState("");
    const [cityID, setCityID] = useState("");
    const [rolesData, setRolesData] = useState([]);
    const [image, setImage] = useState(null);



    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        //define data
        let data = rolesData;

        //check item already exists, if so, remove with filter
        if (data.some((name) => name === e.target.value)) {
            data = data.filter((name) => name !== e.target.value);
        } else {
            //push new item to array
            data.push(e.target.value);
        }

        //set data to state
        setRolesData(data);
    };

    //method "storeUser"
    const storeUser = async (e) => {
        e.preventDefault();
        
        //sending data
        Inertia.post('/account/users', {

            //data
            name: name,
            nik: nik,
            province_id: provinceID,
            city_id: cityID,
            email: email,
            alamat: alamat,
            password: password,
            password_confirmation: passwordConfirmation,
            roles: rolesData,
            image: image,
        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data saved successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    return (
        <>
            <Head>
                <title>Create Users - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-admin">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Add New User
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeUser}>
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                NIK
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={nik}
                                                    onChange={(e) =>
                                                        setNik(e.target.value)
                                                    }
                                                    placeholder="No Induk Kependudukan"
                                                />
                                            </div>
                                            {errors.nik && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.nik}
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="Enter Full Name"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Enter Email Address"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
                                    <div className="row mt-2">
                                        <div className="mb-1">
                                            <label className="form-label">
                                                DPC
                                            </label>
                                            <select
                                                className="form-select"
                                                value={cityID}
                                                onChange={(e) =>
                                                    setCityID(e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    -- Select DPC --
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
                                            {errors.city_id && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.city_id}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label className="mb-1">
                                                Alamat
                                            </label>
                                            <div className="input-group mb-3">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={alamat}
                                                    onChange={(e) =>
                                                        setAlamat(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Alamat Lengkap"
                                                />
                                            </div>
                                            {errors.alamat && (
                                                <div className="alert alert-danger">
                                                    {errors.alamat}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Password Confirmation
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) =>
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Password Confirmation"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="fw-bold">Roles</label>
                                        <br />
                                        {roles.map((role, index) => (
                                            <div
                                                className="form-check form-check-inline"
                                                key={index}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={role.name}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                    id={`check-${role.id}`}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`check-${role.id}`}
                                                >
                                                    {role.name}
                                                </label>
                                            </div>
                                        ))}

                                        {errors.roles && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.roles}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Save</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
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
