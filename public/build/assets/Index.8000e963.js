import{u as m,R as e,H as c}from"./app.3344b0a1.js";import{L as d}from"./Account.2cf7f95e.js";import"./Dropdown.75af8c55.js";function g(){var a,n,l,r;const{biodata:t}=m().props,o=()=>{const i=window.open("","_blank");i.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Formulir Mutasi Anggota - IKATWI</title>
                <style>
                    @page {
                        size: A4;
                        margin: 2.5cm;
                    }
                    body {
                        font-family: "Times New Roman", Times, serif;
                        line-height: 1.6;
                        color: #333;
                        font-size: 12pt;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .container-surat {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 0;
                    }
                    .letter-head {
                        border-bottom: 3px double #333;
                        padding-bottom: 1rem;
                        margin-bottom: 1.5rem;
                        text-align: center;
                    }
                    .letter-title {
                        font-size: 14pt;
                        text-align: center;
                        text-decoration: underline;
                        margin: 1.5rem 0;
                        font-weight: bold;
                    }
                    .content-block {
                        margin-bottom: 1.2rem;
                        text-align: justify;
                    }
                    .signature-block {
                        margin-top: 4rem;
                        text-align: right;
                        padding-right: 20%;
                    }
                    .checkbox {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        border: 1px solid #333;
                        margin-right: 8px;
                        text-align: center;
                        vertical-align: middle;
                        position: relative;
                        top: -1px;
                    }
                    .checked {
                        background-color: #333;
                        color: white;
                    }
                    .data-table {
                        margin: 1rem 0;
                        width: 100%;
                    }
                    .data-table td {
                        padding: 0.2rem 0;
                        vertical-align: top;
                    }
                    .data-table td:first-child {
                        width: 35%;
                        font-weight: 500;
                    }
                </style>
            </head>
            <body>
                <div class="container-surat">
                    ${document.querySelector(".container-surat .body").innerHTML}
                </div>
                <script>
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            window.close();
                        }, 200);
                    };
                <\/script>
            </body>
            </html>
        `),i.document.close()};return e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement("title",null,"Formulir Mutasi Anggota - IKATWI"),e.createElement("style",null,`
                    @page {
                        size: A4;
                        margin: 2.5cm;
                    }
                    body.print {
                        font-family: "Times New Roman", Times, serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .container-surat {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .letter-head {
                        border-bottom: 3px double #333;
                        padding-bottom: 1rem;
                        margin-bottom: 1.5rem;
                        text-align: center;
                    }
                    .letter-title {
                        font-size: 14pt;
                        text-align: center;
                        text-decoration: underline;
                        margin: 1.5rem 0;
                        font-weight: bold;
                    }
                    .content-block {
                        margin-bottom: 1.2rem;
                        text-align: justify;
                    }
                    .signature-block {
                        margin-top: 4rem;
                        text-align: right;
                        padding-right: 20%;
                    }
                    .checkbox {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        border: 1px solid #333;
                        margin-right: 8px;
                        text-align: center;
                        vertical-align: middle;
                        position: relative;
                        top: -1px;
                    }
                    .checked {
                        background-color: #333;
                        color: white;
                    }
                    .data-table {
                        margin: 1rem 0;
                        width: 100%;
                    }
                    .data-table td {
                        padding: 0.2rem 0;
                        vertical-align: top;
                    }
                    .data-table td:first-child {
                        width: 35%;
                        font-weight: 500;
                    }
                    .no-print {
                        text-align: center;
                        margin-bottom: 2rem;
                    }
                    .print-btn {
                        padding: 10px 25px;
                        background: #2c5282;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    .print-btn:hover {
                        background: #1a365d;
                        transform: translateY(-2px);
                        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    }
                    @media print {
                        .no-print {
                            display: none !important;
                        }
                        body, body.print {
                            font-size: 12pt;
                        }
                        .container-surat {
                            padding: 0;
                        }
                        body {
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                    }
                    @media (max-width: 768px) {
                        .container-surat {
                            padding: 15px;
                        }
                        .data-table td:first-child {
                            width: 40%;
                        }
                        .signature-block {
                            padding-right: 10%;
                        }
                    }
                `)),e.createElement(d,null,e.createElement("div",{className:"container-surat"},e.createElement("div",{className:"no-print"},e.createElement("button",{onClick:o,className:"print-btn"},"\u{1F5A8}\uFE0F Cetak Surat Mutasi")),e.createElement("div",{className:"body print"},e.createElement("div",{className:"letter-head"},e.createElement("div",{style:{fontSize:"18pt",fontWeight:"bold",marginBottom:"5px"}},"IKATAN TERAPIS WICARA INDONESIA"),e.createElement("div",{style:{fontSize:"14pt",marginBottom:"10px"}},"(IKATWI)"),e.createElement("div",{style:{fontSize:"11pt"}},"Jl. Prof. Dr. Soepomo No. 123, Jakarta 12345"),e.createElement("div",{style:{fontSize:"11pt"}},"Telp. (021) 1234567 | Email: sekretariat@ikatwi.org")),e.createElement("div",{className:"content-block"},e.createElement("p",null,"Kepada Yth:"),e.createElement("p",{style:{fontWeight:"bold",marginLeft:"2rem"}},"Ketua Ikatwi Pusat"),e.createElement("p",{style:{marginLeft:"2rem"}},"di Tempat")),e.createElement("div",{className:"content-block"},e.createElement("p",{style:{textIndent:"2rem"}},"Dengan hormat,"),e.createElement("p",{style:{textIndent:"2rem",marginTop:"1rem"}},"Bersama ini kami sampaikan permohonan mutasi keanggotaan atas:")),e.createElement("table",{className:"data-table"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Nama Lengkap"),e.createElement("td",null,": ",t.name)),e.createElement("tr",null,e.createElement("td",null,"Nomor KTA"),e.createElement("td",null,": ",t.no_anggota)),e.createElement("tr",null,e.createElement("td",null,"Asal DPW"),e.createElement("td",null,": ",t.province.name)),e.createElement("tr",null,e.createElement("td",null,"Asal DPC"),e.createElement("td",null,": ",t.city.name)))),e.createElement("div",{className:"content-block"},e.createElement("p",{style:{textIndent:"2rem"}},"Mengajukan mutasi keanggotaan IKATWI dengan tujuan :.")),e.createElement("table",{className:"data-table"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Nama Lengkap"),e.createElement("td",null,": ",t.name)),e.createElement("tr",null,e.createElement("td",null,"Nomor KTA"),e.createElement("td",null,": ",t.no_anggota)),e.createElement("tr",null,e.createElement("td",null,"DPW"),e.createElement("td",null,": ",((n=(a=t.pengajuan)==null?void 0:a.tujuan)==null?void 0:n.name)||"-")),e.createElement("tr",null,e.createElement("td",null,"DPC"),e.createElement("td",null,": ",((r=(l=t.pengajuan)==null?void 0:l.tujuan_dpc)==null?void 0:r.name)||"-")))),e.createElement("div",{className:"content-block"},e.createElement("p",null,"Adapun kelengkapan administrasi yang telah dipenuhi:"),e.createElement("div",{style:{marginLeft:"2rem",marginTop:"0.5rem"}},e.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.3rem"}},e.createElement("span",{className:"checkbox checked"},"\u2713"),e.createElement("span",null,"Iuran Keanggotaan telah lunas")),e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("span",{className:"checkbox checked"},"\u2713"),e.createElement("span",null,"Akun Satu Sehat SDMK telah terdaftar")))),e.createElement("div",{className:"content-block"},e.createElement("p",null,"Demikian formulir ini dibuat sebagai catatan mutasi keanggotaan atas nama di atas.")),e.createElement("div",{className:"signature-block",style:{marginLeft:"auto",width:"fit-content"}},e.createElement("p",null,"Hormat kami,"),e.createElement("div",{style:{marginTop:"10px",position:"relative"}},e.createElement("p",{style:{fontWeight:"bold",textDecoration:"underline"}},"Ketua Ikatwi Pusat"),e.createElement("div",{style:{marginTop:"60px"}})))))))}export{g as default};
