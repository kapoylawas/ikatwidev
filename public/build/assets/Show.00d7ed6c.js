<<<<<<<< HEAD:public/build/assets/Show.75e4bebc.js
import{u as n,r as o,R as e,H as d,d as i}from"./app.c8c6bc0a.js";import{L as u}from"./Account.cfa79397.js";import{P as p}from"./Pagination.1844c4c7.js";import{D as E}from"./Delete.0148b357.js";import{S as g}from"./sweetalert2.all.1a5845b1.js";import"./Dropdown.def6e8bd.js";function y(){const{errors:s,product:a}=n().props,[l,c]=o.exports.useState(""),m=async t=>{t.preventDefault(),i.Inertia.post("/account/products/store_image_product",{image:l,product_id:a.id},{onSuccess:()=>{g.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),c(null),setColorID("")}})};return e.createElement(e.Fragment,null,e.createElement(d,null,e.createElement("title",null,"Detail Kegiatan - IKATWI")),e.createElement(u,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Upload Kegiatan Image")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:m},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Image"),e.createElement("input",{type:"file",className:"form-control",onChange:t=>c(t.target.files[0])})),s.image&&e.createElement("div",{className:"alert alert-danger"},s.image),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))))),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Kegiatan Image")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"20%"}},"Image"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.product_images.data.map((t,r)=>e.createElement("tr",{key:r},e.createElement("td",{className:"text-center"},++r+(a.product_images.current_page-1)*a.product_images.per_page),e.createElement("td",{className:"text-center"},e.createElement("img",{src:t.image,width:"200",className:"rounded-3"})),e.createElement("td",{className:"text-center"},e.createElement(E,{URL:"/account/products/destroy_image_product",id:t.id}))))))),e.createElement(p,{links:a.product_images.links,align:"end"})))))))}export{y as default};
========
import{u as n,r as o,R as e,H as d,d as i}from"./app.f885a81d.js";import{L as u}from"./Account.8ff4b1ff.js";import{P as p}from"./Pagination.a3023001.js";import{D as E}from"./Delete.a2fb58b8.js";import{S as g}from"./sweetalert2.all.e84ab885.js";import"./Dropdown.0c92de7d.js";function y(){const{errors:s,product:a}=n().props,[l,c]=o.exports.useState(""),m=async t=>{t.preventDefault(),i.Inertia.post("/account/products/store_image_product",{image:l,product_id:a.id},{onSuccess:()=>{g.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500}),c(null),setColorID("")}})};return e.createElement(e.Fragment,null,e.createElement(d,null,e.createElement("title",null,"Detail Kegiatan - IKATWI")),e.createElement(u,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Upload Kegiatan Image")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:m},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Image"),e.createElement("input",{type:"file",className:"form-control",onChange:t=>c(t.target.files[0])})),s.image&&e.createElement("div",{className:"alert alert-danger"},s.image),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset"))))))),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," ","Kegiatan Image")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"20%"}},"Image"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.product_images.data.map((t,r)=>e.createElement("tr",{key:r},e.createElement("td",{className:"text-center"},++r+(a.product_images.current_page-1)*a.product_images.per_page),e.createElement("td",{className:"text-center"},e.createElement("img",{src:t.image,width:"200",className:"rounded-3"})),e.createElement("td",{className:"text-center"},e.createElement(E,{URL:"/account/products/destroy_image_product",id:t.id}))))))),e.createElement(p,{links:a.product_images.links,align:"end"})))))))}export{y as default};
>>>>>>>> refs/remotes/origin/main:public/build/assets/Show.00d7ed6c.js
