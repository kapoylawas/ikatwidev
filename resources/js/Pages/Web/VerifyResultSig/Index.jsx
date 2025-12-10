//import react
import React, { useState, useEffect, useRef } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function VerifyResultSigIndex() {
    const { verifyResult, scanDate } = usePage().props;

    return (
        <LayoutAccount>
            <Head>
                <title>Hasil Verifikasi SIG - IKATWI</title>
            </Head>

            <di className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    Hasil Verifikasi SIG
                </h1>
            </di>
        </LayoutAccount>
    );
}
