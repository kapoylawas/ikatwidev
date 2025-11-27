//import react
import React, { useState, useEffect } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function SigIndex() {
    const { transactions, statusAnggota, pengajuans } = usePage().props;
    return (
        <>
            <Head>
                <title>SIG - IKATWI</title>
            </Head>
            <LayoutAccount>
                <h1 className="text-2xl font-semibold mb-6">SIG</h1>
            </LayoutAccount>
        </>
    );
}
