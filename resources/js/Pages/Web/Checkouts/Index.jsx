//import React
import React, { useState } from "react";

//import layout web
import LayoutWeb from '../../../Layouts/Web';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import formatPrice
import FormatPrice from '../../../Utils/FormatPrice';

//import axios
import axios from "axios";

//import component storeCheckout
import StoreCheckout from './StoreCheckout';

export default function CheckoutIndex() {

    //destruct props "provinces"
    const { provinces, dataCarts, biodata } = usePage().props;

    const dpw = biodata.province.id
    const dpc = biodata.city.id

    //define state
    const [provinceID, setProvinceID] = useState('');
    const [cityID, setCityID] = useState('');
    const [cities, setCities] = useState([]);

    // const [showCourier, setShowCourier] = useState(false);
    // const [courierName, setCourierName] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const [showOngkir, setShowOngkir] = useState(false);
    // const [ongkirs, setOngkirs] = useState([]);

    // const [courierService, setCourierService] = useState(0);
    // const [courierCost, setCourierCost] = useState(0);

    const [grandTotal, setGrandTotal] = useState(dataCarts.price);
    // const [address, setAddress] = useState('');

    //method getCityByProvince
    const getCityByProvince = async (province_id) => {

        //set state province ID
        setProvinceID(province_id);

        //get cities by province id
        axios.get(`/checkouts/cities?province_id=${province_id}`)
            .then(response => {
                setCities(response.data);
            })
    }

    //method show courier expedition
    const showCourierExpedition = (city_id) => {

        //set state cityID
        setCityID(city_id)

        //set state showCourier
        setShowCourier(true);
    }

    

    return (
        <>
            <Head>
                <title>Checkouts - Geek Store - Where Developer Shopping</title>
            </Head>
            <LayoutWeb>

                <div className="container mt-80 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                
                                <div className="card border-0 rounded-3 shadow-sm">
                                    <div className="card-header">
                                        <i className="fa fa-shopping-cart"></i> Tagihan Information
                                    </div>
                                    <div className="card-body">

                                        <div className="mb-3">
                                            <label className="mb-2 fw-bold">{biodata.province.name}</label>
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 fw-bold">{biodata.city.name}</label>
                                        </div>

                                        

                                    </div>
                                </div>

                                <div className="card border-0 rounded-3 shadow-sm mt-3 mb-3">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0 mt-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: '25%' }}>Total Orders</td>
                                                        <td style={{ width: '1%' }}>:</td>
                                                        <td><strong>Rp. {FormatPrice(dataCarts.price)}</strong></td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td style={{ width: '25%' }}>Shipping Cost</td>
                                                        <td style={{ width: '1%' }}>:</td>
                                                        <td><strong>Rp. {FormatPrice(courierCost)}</strong></td>
                                                    </tr> */}
                                                    <tr>
                                                        <td style={{ width: '25%' }}>Grand Total</td>
                                                        <td style={{ width: '1%' }}>:</td>
                                                        <td><strong>Rp. {FormatPrice(grandTotal)}</strong></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <StoreCheckout    
                                    provinceID={dpw}
                                    cityID={dpc}
                                    grandTotal={grandTotal}
                                    // courierName={courierName}
                                    // courierService={courierService}
                                    // courierCost={courierCost}
                                    // weight={dataCarts.weight}
                                    // address={address}
                                />    

                            </div>
                        </div>
                    </div>
                </div>

            </LayoutWeb>
        </>
    )

}