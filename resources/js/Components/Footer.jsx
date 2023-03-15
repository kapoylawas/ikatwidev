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
                        <div className="card bg-gray border-0 rounded shadow-sm">
                            <div className="card-header">
                                <div className="col-sm-8 text-center col-md-12 order-sm-0 order-md-0 py-5">
                                    <p className="mt-2 text-dark">
                                        Website Ikatan Terapi Wicara Indonesia
                                    </p>
                                    <div className="mt-4">
                                        <span style={styles}>
                                            <a
                                                href="https://www.facebook.com/ikatwi.pusat"
                                                title="Facebook"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="38"
                                                    height="38"
                                                    fill="currentColor"
                                                    className="bi bi-facebook text-fb mb-2 icon-footer mr-4"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                                </svg>
                                            </a>
                                        </span>

                                        <span style={styles}>
                                            <a
                                                href="https://www.instagram.com/ikatwipusat/"
                                                title="Instagram"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
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
                                                title="Telegran"
                                                className="text-decoration-none"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-brand-telegram text-tele mb-2 icon-footer mr-4"
                                                    width="40"
                                                    height="40"
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
                                                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
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
                                    </div>
                                </div>
                            </div>
                                <div class="col-sm-8 col-md-12 text-center order-sm-2 order-md-1 bg-light-custom py-4">
                                    ©2023 Pengurus Besar Ikatan Terapi Indonesia.
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
