import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search
import Search from "../../../Shared/Search";

//import component pagination
import Pagination from "../../../Shared/Pagination";

//import component delete
import Delete from "../../../Shared/Delete";

export default function VideosIndex() {
    const { videos } = usePage().props;
    return (
        <>
            <Head>
                <title>Master Videos - IKATWI</title>
            </Head>
            <LayoutAccount>
                <h1>halaman videos</h1>
            </LayoutAccount>
        </>
    );
}   