import{u as r,R as e,H as m,L as c}from"./app.61f6e3d0.js";import{L as n}from"./Account.0f1de7bf.js";import{S as s}from"./Search.ab6e21d7.js";import{P as o}from"./Pagination.308037c1.js";import{D as d}from"./Delete.ef07ffbd.js";import"./Dropdown.0d39e509.js";import"./sweetalert2.all.d88d8392.js";function N(){const{dpc:t}=r().props;return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"Master DPC - IKATWI")),e.createElement(n,null,e.createElement("div",{class:"row mt-5"},e.createElement("div",{class:"col-md-8"},e.createElement("div",{class:"row"},e.createElement("div",{class:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/account/dpc/create",class:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{class:"fa fa-plus-circle me-2"}),"Tambah")),e.createElement("div",{class:"col-md-9 col-12 mb-2"},e.createElement(s,{URL:"/account/dpc"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," DPC")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name DPW"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name DPC"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.province.name),e.createElement("td",null,a.name),e.createElement("td",{className:"text-center"},e.createElement(c,{href:`/account/dpc/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),e.createElement(d,{URL:"/account/dpc",id:a.id}))))))),e.createElement(o,{links:t.links,align:"end"})))))))}export{N as default};
