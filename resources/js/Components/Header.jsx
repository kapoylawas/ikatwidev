//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Header() {
    let styles = {
        marginLeft: "7px",
    };

    return (
        <>
            <nav className="navbar-expand-md navbar-dark fixed-top bg-navbar shadow">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
                                <Link
                                    href="/"
                                    className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none"
                                >
                                    <img
                                        src="/assets/images/logo.png"
                                        width="50"
                                        alt="Deskripsi gambar"
                                    />{" "}
                                    {"  "}
                                    <span style={styles}>
                                        <h5>
                                            {" "}
                                            <strong> </strong> Ikatan Terapis
                                            Wicara Indonesia{" "}
                                        </h5>
                                    </span>
                                    {/* <button className="btn btn-success-dark">
                                        <i className="fa fa-list-ul"></i></button> */}
                                </Link>
                                <div id="page-content-wrapper"></div>
                            </header>
                        </div>
                        <div className="col-md-1">
                            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
                                <div className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        variant="success"
                                        className="mt-1"
                                    >
                                        <Link href="/history">
                                            <Dropdown.Item href="#/action-2">
                                                Sejarah & Pengurus
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/visimisi">
                                            <Dropdown.Item href="#/action-2">
                                                Visi & Misi
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/kegiatan">
                                            <Dropdown.Item href="#/action-3">
                                                Kegiatan
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/anggota">
                                            <Dropdown.Item href="#/action-4">
                                                Anggota
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/wilayah">
                                            <Dropdown.Item href="#/action-5">
                                                Wilayah DPW
                                            </Dropdown.Item>
                                        </Link>

                                        <Link href="/wilayahdpc">
                                            <Dropdown.Item href="#/action-6">
                                                Wilayah DPC
                                            </Dropdown.Item>
                                        </Link>

                                        <Dropdown.Item
                                            href="https://ikatwisiporlin-ktki.kemkes.go.id/"
                                            target="_blank"
                                        >
                                            Siporlin
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="https://siedunakes-ktki.kemkes.go.id/home/"
                                            target="_blank"
                                        >
                                            Siedunakes
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
