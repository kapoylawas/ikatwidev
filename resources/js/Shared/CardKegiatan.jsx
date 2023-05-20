//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function CardKegiatan({ kegiatan }) {
    return (
        <>
            <div className="col-md-12 mb-4 col-12 center">
                <div className="card border-0 h-100 rounded-3 shadow-sm product">
                    <div className="card-image">
                        {/* {kegiatan.image.length > 0 ? (
                                <img
                                    src={kegiatan.image[0].image}
                                    className="w-100 rounded-top"
                                />
                            ) : (
                                <img
                                    src="/assets/images/image.png"
                                    className="w-100 rounded-top"
                                />
                            )} */}
                        <img
                            src={kegiatan.image}
                            className="w-100 rounded-top"
                        />
                    </div>
                    <div className="card-body h-50">
                        <h6 className="card-title text-center">
                            {kegiatan.name}
                        </h6>
                    </div>
                    <div className="text-center">

                    <h5>
                      Link Pendaftaran:
                        <a href={kegiatan.link} target="_blank">
                            {" "}
                            klik disini{" "}
                        </a>
                    </h5>
                    </div>
                </div>
            </div>
        </>
    );
}
