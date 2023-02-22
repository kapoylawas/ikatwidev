//import React
import React, { useState } from "react";

//import layout web
import LayoutWeb from '../../../Layouts/Web';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import formatPrice
import FormatPrice from '../../../Utils/FormatPrice';

//import component add to cart
import AddTocart from './AddToCart';

export default function ProductShow() {

    //destruct props "product"
    const { product } = usePage().props;

    //define state
    const [productImage, setProductImage] = useState(product.product_images[0].image);
    const [size, setSize] = useState(product.product_sizes[0].size);
    const [price, setPrice] = useState(product.product_sizes[0].price);

    return (
        <>
            <Head>
                <title>{`${product.title} - IKATWI - Where Developer Shopping`}</title>
            </Head>
            <LayoutWeb>
                <br></br>
                <div className="container mt-55 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                <div className="card border-0 bg-gray rounded-0 shadow-sm pt-2 mb-0">
                                    <div className="card-body text-center">
                                        <img src={productImage} width="300" className="rounded-3" />
                                    </div>
                                </div>
                                <div className="card border-0 rounded-top-none rounded shadow-sm mt-0 mb-3">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-md-6 col-6 text-start">
                                                <h5>{product.title}</h5>
                                            </div>
                                            <div className="col-md-6 col-6 text-end">
                                                <h5>Rp. {FormatPrice(price)}</h5>
                                            </div>
                                        </div>

                                        
                                        <hr />
                                        <div className="colors mt-4">
                                            <i>Kegiatan</i>
                                            <div className="mt-2">
                                                {product.product_sizes.map((size, index) => (
                                                    <button className="btn btn-success btn-sm me-10 border-10 shadow-sm w-10" key={index}>{size.size}</button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0 rounded shadow-sm mb-5">
                                    <div className="card-body">
                                        <h5>Description</h5>
                                        <hr />
                                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                    </div>
                                </div>

                                <AddTocart
                                    product_id={product.id}
                                    productImage={productImage}                
                                    size={size}
                                    price={price}
                                    weight={product.weight}                
                                />

                            </div>
                        </div>
                    </div>
                </div>

            </LayoutWeb>
        </>
    )

}