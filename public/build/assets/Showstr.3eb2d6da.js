import{u as n,R as e,H as s,L as c}from"./app.7133bd6d.js";import{L as m}from"./Account.1e4e3389.js";import{D as o}from"./Delete.1b3f0046.js";import"./Dropdown.36a697d6.js";import"./sweetalert2.all.ce3a4097.js";function p(){const{users:a}=n().props,r=new Date;return e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement("title",null,"Detail Document STR - IKATWI")),e.createElement(m,null,e.createElement("div",{class:"row mt-3"},e.createElement("div",{class:"col-md-8"},e.createElement("div",{class:"row"},e.createElement("div",{class:"col-md-3 col-12 mb-2"},e.createElement(c,{href:`/account/documents/createstr/${a.id}`,class:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{class:"fa fa-plus-circle me-2"}),"Tambah")),e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/account/documents",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-arrow-left me-2"}),"KEMBALI"))))),e.createElement("div",{className:"row mt-2"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," STR File")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"3%"}},"No."),e.createElement("th",{scope:"col",style:{width:"5%"}},"No STR"),e.createElement("th",{scope:"col",style:{width:"8%"}},"Tanggal Awal"),e.createElement("th",{scope:"col",style:{width:"8%"}},"Tanggal Akhir"),e.createElement("th",{scope:"col",style:{width:"3%"}},"Status"),e.createElement("th",{scope:"col",style:{width:"30%"}},"File"),e.createElement("th",{scope:"col",style:{width:"5%"}},"Actions"))),e.createElement("tbody",null,a.surat_strs.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(a.surat_strs.current_page-1)*a.surat_strs.per_page),e.createElement("td",{className:"text-center"},t.no_str),e.createElement("td",{className:"text-center"},t.date_start),e.createElement("td",{className:"text-center"},t.date_end),e.createElement("td",null,new Date(t.date_end)>=r?"Aktif":"Tidak Aktif"),e.createElement("td",{className:"text-center"},e.createElement("iframe",{src:t.image,style:{width:"100%",height:"200px",objectFit:"cover"}})),e.createElement("td",{className:"text-center"},e.createElement(o,{URL:"/account/documents/hapus_str",id:t.id})))))))))))))}export{p as default};
