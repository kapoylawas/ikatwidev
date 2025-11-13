import{u as p,R as e,H as g}from"./app.e0571e48.js";import{L as E}from"./Account.325ef98c.js";import{Q as b}from"./index.60003a45.js";import"./Dropdown.469c59b9.js";function w(){var n,a,l,i,r,o;const{biodata:t}=p().props,c=parseInt("100720".substring(2,4)),d=["","","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"][c],s=((n=t==null?void 0:t.pengajuan)==null?void 0:n.status)||"default_value",u=()=>{const m=window.open("","_blank");m.document.write(`
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
        `),m.document.close()};return e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement("title",null,"Formulir Mutasi Anggota - IKATWI"),e.createElement("style",null,`
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
                `)),e.createElement(E,null,e.createElement("div",{className:"container-surat"},e.createElement("div",{className:"no-print"},e.createElement("button",{onClick:u,className:"print-btn"},"\u{1F5A8}\uFE0F Cetak Surat Mutasi")),e.createElement("div",{className:"body print"},e.createElement("div",{className:"letter-head",style:{display:"flex",alignItems:"center",gap:"20px"}},e.createElement("div",{style:{width:"100px"}}," ",e.createElement("img",{src:"/assets/images/logo.png",alt:"IKATWI Logo",style:{width:"100%",height:"auto"}})),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14pt",fontWeight:"bold",marginBottom:"5px"}},"IKATAN TERAPIS WICARA INDONESIA (IKATWI)"),e.createElement("div",{style:{fontSize:"14pt",marginBottom:"10px"}},"The Indonesian Speech Therapist Association"),e.createElement("div",{style:{fontSize:"9pt"}},"Kampus Jurusan Terapi Wicara Poltekkes Kemenkes Surakarta"),e.createElement("div",{style:{fontSize:"9pt"}},"Jl. Letjend Sutoyo, Mojosongo, Jebres, Surakarta, Jawa Tengah, Indonesia Hotline: 085867544115"),e.createElement("div",{style:{fontSize:"9pt"}},"Website: www.ikatwi.or.id | Email: ikatwipusat@gmail.com , sekretaris.dppikatwi@gmail.com"))),e.createElement("div",{style:{textAlign:"center",marginBottom:"2.0rem"}},e.createElement("div",null,e.createElement("b",null,"FORMULIR MUTASI")),e.createElement("div",null,e.createElement("b",null,"ANGGOTA IKATWI")),e.createElement("div",null,e.createElement("b",null,"No. : ",((a=t==null?void 0:t.pengajuan)==null?void 0:a.no_urut)||"Belum ada nomor urut dan belum di setujui","/IKATWI/MUT/",d,"/",new Date().getFullYear()))),e.createElement("div",{className:"content-block"},e.createElement("p",{style:{textIndent:"2rem",marginTop:"1rem"}},"Data Anggota IKATWI berikut, yaitu:")),e.createElement("table",{className:"data-table"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Nama Lengkap"),e.createElement("td",null,": ",t.name)),e.createElement("tr",null,e.createElement("td",null,"Nomor KTA"),e.createElement("td",null,": ",t.no_anggota)),e.createElement("tr",null,e.createElement("td",null,"Asal DPW"),e.createElement("td",null,": ",t.province.name)),e.createElement("tr",null,e.createElement("td",null,"Asal DPC"),e.createElement("td",null,": ",t.city.name)))),e.createElement("div",{className:"content-block"},e.createElement("p",{style:{textIndent:"2rem"}},"Mengajukan mutasi keanggotaan IKATWI dengan tujuan :")),e.createElement("table",{className:"data-table"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Nama Lengkap"),e.createElement("td",null,": ",t.name)),e.createElement("tr",null,e.createElement("td",null,"Nomor KTA"),e.createElement("td",null,": ",t.no_anggota)),e.createElement("tr",null,e.createElement("td",null,"DPW"),e.createElement("td",null,": ",((i=(l=t.pengajuan)==null?void 0:l.tujuan)==null?void 0:i.name)||"-")),e.createElement("tr",null,e.createElement("td",null,"DPC"),e.createElement("td",null,": ",((o=(r=t.pengajuan)==null?void 0:r.tujuan_dpc)==null?void 0:o.name)||"-")))),e.createElement("div",{className:"content-block"},e.createElement("p",null,"Adapun kelengkapan administrasi yang telah dipenuhi:"),e.createElement("div",{style:{marginLeft:"2rem",marginTop:"0.5rem"}},e.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.3rem"}},e.createElement("span",{className:"checkbox checked"},"\u2713"),e.createElement("span",null,"Iuran Keanggotaan telah lunas")),e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("span",{className:"checkbox checked"},"\u2713"),e.createElement("span",null,"Akun Satu Sehat SDMK telah terdaftar")))),e.createElement("div",{className:"content-block"},e.createElement("p",null,"Demikian formulir ini dibuat sebagai catatan mutasi keanggotaan atas nama di atas.")),e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("div",{className:"signature-block",style:{width:"55%",textAlign:"left"}},e.createElement("p",null,"(Tempat, Tanggal )"),e.createElement("div",{style:{marginTop:"40px"}},e.createElement("div",{style:{marginTop:"60px"}},e.createElement("p",{style:{fontSize:"9pt",fontWeight:"bold",textDecoration:"underline"}},"Admin Verifikator Wilayah")))),e.createElement("div",{className:"signature-block",style:{width:"50%",textAlign:"left"}},e.createElement("div",{style:{marginTop:"40px"}},e.createElement("p",{style:{textAlign:"center"}},"Mengetahui,"),e.createElement("p",{style:{fontSize:"9pt",marginTop:"20px",fontWeight:"bold",textAlign:"center",whiteSpace:"nowrap"}},"DEWAN PENGURUS PUSAT IKATWI"),e.createElement("p",{style:{fontSize:"9pt",fontWeight:"bold",textAlign:"center"}},"KETUA UMUM"),e.createElement("div",{style:{marginTop:"10px",display:"flex",justifyContent:"center"}},e.createElement("div",{style:{textAlign:"center"}},s==="selesai"?e.createElement(e.Fragment,null,e.createElement(b,{value:"Hafidz Triantoro Aji P., SST.TW, MPH, No. KTA: 100685",size:111,renderAs:"canvas"})):e.createElement("p",{style:{fontSize:"9pt",fontStyle:"italic",color:"#999"}},"Belum disetujui"),e.createElement("p",{style:{fontSize:"8pt",fontWeight:"bold",textDecoration:"underline",marginTop:"8px"}},"Hafidz Triantoro Aji P., SST.TW, MPH"),e.createElement("p",{style:{fontSize:"8pt"}},"No. KTA: 100685"))))))))))}export{w as default};
