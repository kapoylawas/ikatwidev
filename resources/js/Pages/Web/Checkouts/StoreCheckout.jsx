//import React
import React, { useState } from "react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function StoreCheckout({ provinceID, cityID, grandTotal }) {
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

    //method checkout
    const storeCheckout = () => {
        setIsCheckoutLoading(true);
        Inertia.post(
            "/checkouts",
            {
                //data
                province_id: provinceID,
                city_id: cityID,
                grand_total: grandTotal,
                // address: address
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Checkout successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                },
            }
        );
        setIsButtonLoading(false);
    };

    return (
        <>
            <button
                onClick={storeCheckout}
                className="btn btn-success btn-md border-0 shadow rounded-3 w-100 mb-5"
                disabled={grandTotal == 0 || isCheckoutLoading}
            >
                {isCheckoutLoading ? "Loading..." : "BAYAR SEKARANG"}
            </button>
        </>
    );
}
