//import React
import React from "react";

//import Link
import { Link } from '@inertiajs/inertia-react';

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
                                <Link href="/" className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none">
                                    <img src="/assets/images/logo.png" width="50" /> {"  "}
                                     <span style={styles}><h5> <strong> </strong> Ikatan Terapis Wicara Indonesia </h5></span>
                                     
                                        {/* <button className="btn btn-success-dark">
                                        <i className="fa fa-list-ul"></i></button> */}
                                    
                                </Link>
                                <div id="page-content-wrapper">
                                
                                </div>
                            </header>
                        </div>
                        <div className="col-md-1">
                            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
                                <Link href="/" className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none">
                                     
                                        <button className="btn btn-dark mt-1">
                                        <i className="fa fa-list-ul"></i></button>
                                    
                                </Link>
                                <div id="page-content-wrapper">
                                
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}