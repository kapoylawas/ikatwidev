//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function ProductShow() {
    //destruct props "product"
    const { errors, product } = usePage().props;

    //define state
    const [image, setImage] = useState("");

    //method storeImage
    const storeImage = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/products/store_image_product",
            {
                //data
                image: image,
                product_id: product.id,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    //set state to null
                    setImage(null);
                    setColorID("");
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Detail Kegiatan - IKATWI</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shopping-bag"></i>{" "}
                                    Upload Kegiatan Image
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeImage}>
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

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i> Save
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-md btn-warning"
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shopping-bag"></i>{" "}
                                    Kegiatan Image
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "20%" }}
                                                >
                                                    Image
                                                </th>

                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.product_images.data.map(
                                                (image, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">
                                                            {++index +
                                                                (product
                                                                    .product_images
                                                                    .current_page -
                                                                    1) *
                                                                    product
                                                                        .product_images
                                                                        .per_page}
                                                        </td>
                                                        <td className="text-center">
                                                            <img
                                                                src={
                                                                    image.image
                                                                }
                                                                width={"200"}
                                                                className="rounded-3"
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            <Delete
                                                                URL={
                                                                    "/account/products/destroy_image_product"
                                                                }
                                                                id={image.id}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination
                                    links={product.product_images.links}
                                    align={"end"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
