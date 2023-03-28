//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import component delete
import Delete from "../../../Shared/Delete";

export default function DocumentShowstr() {

    const { users } = usePage().props;  
    const currentDate = new Date();

    return(
        <>
            <Head>
                <title>Detail Document SIP - IKATWI</title>
            </Head>
            <LayoutAccount>
                
            </LayoutAccount>
        </>
    )

}