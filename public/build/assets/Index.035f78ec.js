import{u as n,R as e,H as m}from"./app.d0bb8290.js";import{L as c}from"./Account.48cd0585.js";import{Q as s}from"./index.ad3e38db.js";function u(){const{biodata:t,transactions:l}=n().props,r=l.map(a=>a.status).toString().replace("[","").replace("]","").replace('"',"").replace('"',"");return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"User E-KTA - IKATWI")),e.createElement(c,null,e.createElement("div",{className:"col-md-12 mt-5"},r==="PAID"?e.createElement("div",{className:"card border-0 shadow-custom rounded"},e.createElement("div",{className:"card-header text-dark"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-certificate mb-1",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}),e.createElement("path",{d:"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}),e.createElement("path",{d:"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"}),e.createElement("path",{d:"M6 9l12 0"}),e.createElement("path",{d:"M6 12l3 0"}),e.createElement("path",{d:"M6 15l2 0"})),"E-KTA"),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6 mt-3"},e.createElement("div",{className:"col-md-6 col-lg-4"},e.createElement("div",{className:"kartu"},e.createElement("div",{style:{marginTop:"90px"},className:"tex"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-4"},e.createElement("table",{className:"table-responsive",width:"100%"},e.createElement("tr",null,e.createElement("td",{style:{width:"50%"}},e.createElement("img",{src:t.image,className:"rounded-3 mt-1",style:{marginLeft:"-12%"},width:"103",alt:"Deskripsi gambar",onError:a=>{a.target.onerror=null,a.target.src="/assets/images/user.png"}}))))),e.createElement("div",{className:"col-md-6"},e.createElement("table",{className:"table-responsive ",width:"100%"},e.createElement("tr",null,e.createElement("td",{style:{width:"51%",marginLeft:"-10%"}},e.createElement("strong",{style:{fontSize:"0.875em"}},t.name))),e.createElement("tr",null,e.createElement("td",{style:{width:"51%"}},e.createElement("strong",{style:{fontSize:"0.875em"}},t.alamat))),e.createElement("tr",null,e.createElement("td",{style:{width:"51%"}},e.createElement("p",{className:"hidden"},t.name))),e.createElement("tr",null,e.createElement("td",{style:{width:"51%"}},e.createElement("strong",{style:{fontSize:"0.875em"}},t.no_anggota))),e.createElement("tr",null,e.createElement("td",{style:{width:"51%"}},e.createElement("strong",{style:{fontSize:"0.875em"}},t.status_anggota))))))),e.createElement("br",null))))),e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6 mt-4"},e.createElement("div",{className:"col-md-6 col-lg-4"},e.createElement("div",{className:"kartubelakang"},e.createElement("div",{style:{marginTop:"78px"},className:"tex"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6"},e.createElement("table",{className:"table-responsive mt-5",width:"100%"},e.createElement("tr",null,e.createElement("td",{style:{width:"41%"}}),e.createElement("td",{style:{width:"100%"}},e.createElement("strong",{style:{fontSize:"0.875em"}}))))),e.createElement("div",{className:"col-md-6"},e.createElement("table",{className:"table-responsive mt-3",width:"100%"},e.createElement("tr",null,e.createElement("td",{style:{width:"50%"}}),e.createElement("td",{style:{width:"100%"}},e.createElement("strong",{style:{fontSize:"0.875em"}},e.createElement(s,{value:t.name,style:{marginLeft:"-10%"},size:121,renderAs:"canvas"})))))))))))))):e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-12 col-md-12 col-lg-12 mb-4"},e.createElement("div",{className:"alert text-center alert-danger border-0 shadow-sm mb-0"},e.createElement("h5",null,"Anda belum membayar tagihan IURAN.")))))))}export{u as default};
