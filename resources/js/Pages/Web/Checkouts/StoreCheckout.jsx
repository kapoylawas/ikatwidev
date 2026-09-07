import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function StoreCheckout({ provinceID, cityID, grandTotal }) {
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

    const storeCheckout = () => {
        setIsCheckoutLoading(true);
        Inertia.post(
            "/checkouts",
            {
                province_id: provinceID,
                city_id: cityID,
                grand_total: grandTotal,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Invoice Dibuat!",
                        text: "Mengarahkan ke halaman pembayaran...",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                },
                onError: () => {
                    setIsCheckoutLoading(false);
                    Swal.fire({
                        title: "Gagal Checkout",
                        text: "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.",
                        icon: "error",
                    });
                },
                onFinish: () => {
                    setIsCheckoutLoading(false);
                },
            }
        );
    };

    return (
        <button
            onClick={storeCheckout}
            className="btn btn-success btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm d-flex align-items-center justify-content-center"
            disabled={grandTotal <= 0 || isCheckoutLoading}
        >
            {isCheckoutLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Memproses Pembayaran...
                </>
            ) : (
                <>
                    <i className="fa fa-credit-card me-2"></i>
                    PROSES PEMBAYARAN SEKARANG
                </>
            )}
        </button>
    );
}
