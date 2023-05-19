import React from "react";

export default function Footer() {
    let styles = {
        marginRight: "15px",
    };

    return (
        <>
            <div className="fade-in mb-5" style={{ marginBottom: "50px" }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card bg-footer border-0 rounded shadow-sm">
                            <div className="card-header">
                                <div className="col-sm-8 text-center col-md-12 order-sm-0 order-md-0 py-5">
                                    <h5
                                        style={{ color: "white" }}
                                        className="mt-2"
                                    >
                                        Dewan Pengurus Pusat
                                    </h5>
                                    <br></br>
                                    <h3 style={{ color: "white" }}>
                                        <strong>
                                            Ikatan Terapis Wicara Indonesia
                                        </strong>
                                    </h3>
                                    <div className="mt-4">
                                        <span style={styles}>
                                            <a
                                                href="https://www.instagram.com/ikatwipusat/"
                                                title="Instagram"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    style={{ color: "white" }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-brand-instagram text-ig mb-2 mr-4"
                                                    width={37}
                                                    height={37}
                                                    viewBox={"0 0 24 24"}
                                                    stroke-width={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    ></path>
                                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                    <path d="M16.5 7.5l0 0"></path>
                                                </svg>
                                            </a>
                                        </span>

                                        <span style={styles}>
                                            <a
                                                href="https://api.whatsapp.com/send/?phone=6285867544115&text&type=phone_number&app_absent=0"
                                                title="Whatsapp"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    style={{ color: "white" }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-brand-whatsapp mb-2 mr-4"
                                                    width={37}
                                                    height={37}
                                                    viewBox={"0 0 24 24"}
                                                    stroke-width={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    ></path>
                                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                                                </svg>
                                            </a>
                                        </span>

                                        <span style={styles}>
                                            <a
                                                href="https://www.youtube.com/@ikatwipusat"
                                                title="YouTube"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    style={{ color: "white" }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-brand-youtube text-yt mb-2"
                                                    width="39"
                                                    height="39"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    ></path>
                                                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                                    <path d="M10 9l5 3l-5 3z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <span style={styles}>
                                            <a
                                                href="https://twitter.com/ikatwipusat?t=vc7fkhNEu_h-Xvb04UeffQ&s=08"
                                                title="Twitter"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    style={{ color: "white" }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="bi bi-twitter"
                                                    width="36"
                                                    height="36"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span style={styles}>
                                            <a
                                                href="https://www.facebook.com/ikatwi.pusat"
                                                title="Facebook"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    style={{ color: "white" }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="36"
                                                    height="36"
                                                    fill="currentColor"
                                                    className="bi bi-facebook text-fb mb-2 icon-footer mr-4"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                    <div
                                        style={{ color: "white" }}
                                        className="mt-4"
                                    >
                                        <div className="fa fa-phone"></div>.
                                        Kontak Support (085867544155)
                                        <br></br>
                                        <div className="fa fa-envelope"></div>.
                                        Email(ikatwipusat@gmail.com)
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8 col-md-12 text-center order-sm-2 order-md-1 bg-light-custom py-4">
                                <h5>
                                    <p  style={{ color: "white" }}>
                                    ©{new Date().getFullYear()} DPP Ikatan Terapis Wicara Indonesia.
                                    </p>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
