//import React
import React from "react";

//import layout web
import LayoutWeb from "../../../Layouts/Web";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component slider
import Slider from "../../../Components/Slider";

//import component card category
import CardCategory from "../../../Shared/CardCategory";

//import component slider
import CardProduct from "../../../Shared/CardProduct";
import Footer from "../../../Components/Footer";

export default function HomeIndex() {
    //destruct props "sliders", "categories", "products"
    const { auth, sliders, categories, products } = usePage().props;

    const currentDate = new Date();

    return (
        <>
            <Head>
                <title>IKATWI - Ikatan Terapis Wicara</title>
            </Head>
            <LayoutWeb>
                <div className="container" style={{ marginTop: "100px" }}>
                    {auth.user == null ? (
                        auth.user
                    ) : (
                        <div className="fade-in">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    {/* <div className="alert alert-success border-0 shadow-sm mb-0">
                                        Selamat Datang, {auth.user.name}
                                    </div> */}
                                    <div className="card border-0 rounded shadow-sm">
                                        <div className="card-header">
                                            <div className="card-body">
                                                <div className="text-center my-6">
                                                    <img
                                                        src={auth.user.image}
                                                        className="rounded-3"
                                                        width={"50"}
                                                        alt="Deskripsi gambar"
                                                        onError={(e) => {
                                                            e.target.onerror =
                                                                null; // menghindari infinite loop jika terjadi kesalahan lagi
                                                            e.target.src =
                                                                "/assets/images/user.png"; // mengganti gambar dengan gambar "tidak ditemukan"
                                                        }}
                                                    />
                                                    <a
                                                        href="#"
                                                        className="d-block h5 mb-0"
                                                    >
                                                        {auth.user.name}
                                                    </a>
                                                    <button className="btn btn-success btn-block mt-2 mb-2">
                                                        <span className="fa fa-envelope"></span>{" "}
                                                        {auth.user.email}
                                                    </button>
                                                    <br></br>
                                                    {new Date(
                                                        auth.user.date_exprd
                                                    ) >= currentDate ? (
                                                        <span className="btn btn-success btn-sm shadow-sm mb-2">
                                                            STR Anda Masih Aktif
                                                        </span>
                                                    ) : (
                                                        <span className="btn btn-danger btn-sm shadow-sm mb-2">
                                                            STR Anda Non Aktif
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Slider sliders={sliders} />

                <div className="container mt-4 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                {/** categories */}
                                <div className="row justify-content-between mb-3">
                                    <div className="col-md-6 col-6 text-start">
                                        <strong> Categories Menu</strong>
                                    </div>
                                    <div className="col-md-6 col-6 text-end">
                                        <Link
                                            href="/categories"
                                            className="text-dark"
                                        >
                                            <strong>
                                                Lihat Semua{" "}
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </strong>
                                        </Link>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                <div className="col-md-3 col-6 mb-3">
                                        <Link
                                            href="/history"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <img
                                                        src="/assets/images/script.png"
                                                        width="50"
                                                    />
                                                    <p className="kotak-title mt-3">
                                                        Sejarah
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <Link
                                            href="/visimisi"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <img
                                                        src="/assets/images/purpose.png"
                                                        width="50"
                                                    />
                                                    <p className="kotak-title mt-3">
                                                        Visi & Misi
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {categories.map((category, index) => (
                                        <CardCategory
                                            category={category}
                                            key={index}
                                        />
                                    ))}

                                    <div className="col-md-3 col-6 mb-3">
                                        <Link
                                            href="/anggota"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <img
                                                        src="/assets/images/organization.png"
                                                        width="50"
                                                    />
                                                    <p className="kotak-title mt-3">
                                                        Anggota
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <Link
                                            href="/wilayah"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-map-search"
                                                        width={50}
                                                        height={50}
                                                        viewBox="0 0 24 24"
                                                        stroke-width={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        ></path>
                                                        <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v8"></path>
                                                        <path d="M9 4v13"></path>
                                                        <path d="M15 7v5"></path>
                                                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                        <path d="M20.2 20.2l1.8 1.8"></path>
                                                    </svg>
                                                    <p className="kotak-title mt-3">
                                                        Wilayah DPW
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <Link
                                            href="/wilayahdpc"
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-map-search"
                                                        width={50}
                                                        height={50}
                                                        viewBox="0 0 24 24"
                                                        stroke-width={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        ></path>
                                                        <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v8"></path>
                                                        <path d="M9 4v13"></path>
                                                        <path d="M15 7v5"></path>
                                                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                        <path d="M20.2 20.2l1.8 1.8"></path>
                                                    </svg>
                                                    <p className="kotak-title mt-3">
                                                        Wilayah DPC
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                   
                                    <div className="col-md-3 col-6 mb-3">
                                        <a
                                            href="https://ikatwisiporlin-ktki.kemkes.go.id/"
                                            className="text-decoration-none text-dark"
                                            target="_blank"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <img
                                                        src="/assets/images/siporlin.png"
                                                        width="50"
                                                    />
                                                    <p className="kotak-title mt-3">
                                                        Siporlin
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <a
                                            href="https://siedunakes-ktki.kemkes.go.id/home/"
                                            className="text-decoration-none text-dark"
                                            target="_blank"
                                        >
                                            <div className="kotak border-0 rounded-3  shadow-sm">
                                                <div className="kotak-body text-center">
                                                    <img
                                                        src="/assets/images/insurance.png"
                                                        width="50"
                                                    />
                                                    <p className="kotak-title mt-3">
                                                        Siedunakes
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                

                                {/** products */}
                                {/* <div className="row justify-content-between mb-3 mt-4">
                                    <div className="col-md-6 col-6 text-start">
                                        <strong>Kegiatan Terbaru</strong>
                                    </div>
                                    <div className="col-md-6 col-6 text-end">
                                        <Link
                                            href="/products"
                                            className="text-dark"
                                        >
                                            <strong>
                                                Lihat Semua{" "}
                                                <i className="fa fa-long-arrow-alt-right"></i>
                                            </strong>
                                        </Link>
                                    </div>
                                </div> */}

                                {/* <div className="row mb-5">
                                    {products.map((product, index) => (
                                        <CardProduct
                                            product={product}
                                            key={index}
                                        />
                                    ))}
                                </div> */}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
