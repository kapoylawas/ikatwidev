import{u as n,R as e,H as r,L as c}from"./app.fe88b502.js";import{L as s,h as m}from"./Account.904742c1.js";import{S as d}from"./Search.504419a8.js";import{P as o}from"./Pagination.6b855f41.js";import{D as i}from"./Delete.f258a3dc.js";import"./sweetalert2.all.3a2dcc21.js";function f(){const{wilayah:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(r,null,e.createElement("title",null,"Wilayah DPC - IKATWI")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/account/areadpc/create",className:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(d,{URL:"/account/areadpc"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Wilayah DPC")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Wilayah DPC"),e.createElement("th",{scope:"col",style:{width:"15%"}},"name ketua"),e.createElement("th",{scope:"col",style:{width:"15%"}},"alamat"),e.createElement("th",{scope:"col",style:{width:"7%"}},"phone"),e.createElement("th",{scope:"col",style:{width:"15%"}},"email"),e.createElement("th",{scope:"col",style:{width:"15%"}},"instagram"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(a.current_page-1)*a.per_page),e.createElement("td",null,t.city.name),e.createElement("td",null,t.name_ketua),e.createElement("td",null,t.alamat),e.createElement("td",null,t.phone),e.createElement("td",null,t.email),e.createElement("td",null,t.instagram),e.createElement("td",{className:"text-center"},m(["wilayah.edit"])&&e.createElement(c,{href:`/account/areadpc/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),m(["wilayah.delete"])&&e.createElement(i,{URL:"/account/areadpc",id:t.id}))))))),e.createElement(o,{links:a.links,align:"end"})))))))}export{f as default};
