<<<<<<<< HEAD:public/build/assets/Index.03a01b5d.js
import{u as n,R as e,H as c,L as m}from"./app.c8c6bc0a.js";import{L as s}from"./Account.cfa79397.js";import{P as r}from"./Pagination.1844c4c7.js";import{D as d}from"./Delete.0148b357.js";import"./Dropdown.def6e8bd.js";import"./sweetalert2.all.1a5845b1.js";function b(){const{verif:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(s,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," ","Pengajuan Pindah")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nama"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPC"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tujuan DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tujuan DPC"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Document"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Keterangan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Status"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",null,++l+(a.current_page-1)*a.per_page),e.createElement("td",null,t.name),e.createElement("td",null,t.province.name),e.createElement("td",null,t.city.name),e.createElement("td",null,t.tujuan.name),e.createElement("td",null,t.tujuan_dpc.name),e.createElement("td",null,e.createElement("a",{className:"btn btn-admin",target:"_blank",href:t.document},e.createElement("i",{className:"fa fa-pdf"}," ","Lihat")," ")),e.createElement("td",null,t.keterangan),e.createElement("td",null,t.status=="sudah"&&e.createElement("button",{className:"btn btn-sm btn-success"},e.createElement("i",{className:"fa fa-check-circle"})," ","Sudah disetujui"),t.status=="belum"&&e.createElement("button",{className:"btn btn-sm btn-danger"},e.createElement("i",{className:"fa fa-times"})," ","Belum disetujui")),e.createElement("td",{className:"text-center"},e.createElement(m,{href:`/account/verifPengajuan/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),e.createElement(d,{URL:"/account/verifPengajuan",id:t.id}))))))),e.createElement(r,{links:a.links,align:"end"}))))))))}export{b as default};
========
import{u as n,R as e,H as c,L as m}from"./app.f885a81d.js";import{L as s}from"./Account.8ff4b1ff.js";import{P as r}from"./Pagination.a3023001.js";import{D as d}from"./Delete.a2fb58b8.js";import"./Dropdown.0c92de7d.js";import"./sweetalert2.all.e84ab885.js";function b(){const{verif:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement("title",null,"User Pengajuan Mutasi - IKATWI")),e.createElement(s,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," ","Pengajuan Pindah")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nama"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"DPC"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tujuan DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tujuan DPC"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Document"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Keterangan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Status"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",null,++l+(a.current_page-1)*a.per_page),e.createElement("td",null,t.name),e.createElement("td",null,t.province.name),e.createElement("td",null,t.city.name),e.createElement("td",null,t.tujuan.name),e.createElement("td",null,t.tujuan_dpc.name),e.createElement("td",null,e.createElement("a",{className:"btn btn-admin",target:"_blank",href:t.document},e.createElement("i",{className:"fa fa-pdf"}," ","Lihat")," ")),e.createElement("td",null,t.keterangan),e.createElement("td",null,t.status=="sudah"&&e.createElement("button",{className:"btn btn-sm btn-success"},e.createElement("i",{className:"fa fa-check-circle"})," ","Sudah disetujui"),t.status=="belum"&&e.createElement("button",{className:"btn btn-sm btn-danger"},e.createElement("i",{className:"fa fa-times"})," ","Belum disetujui")),e.createElement("td",{className:"text-center"},e.createElement(m,{href:`/account/verifPengajuan/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),e.createElement(d,{URL:"/account/verifPengajuan",id:t.id}))))))),e.createElement(r,{links:a.links,align:"end"}))))))))}export{b as default};
>>>>>>>> refs/remotes/origin/main:public/build/assets/Index.07fab18e.js
