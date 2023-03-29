//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component delete
import Delete from "../../../Shared/Delete";

export default function DocumentShowIjazah() {
    const { users } = usePage().props;
    console.log("data =", users);

    return(
        <>
            <Head>
                <title>Detail Document Ijazah - IKATWI</title>
            </Head>
            <LayoutAccount>

            </LayoutAccount>
        </>
    )
}