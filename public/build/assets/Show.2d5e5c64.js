import{u as n,r as a,R as e,H as o}from"./app.3f3b94b9.js";import{L as d}from"./Web.19c9da96.js";import{f as i}from"./FormatPrice.72b07cf2.js";import u from"./AddToCart.7c4b499e.js";import"./index.70463760.js";import"./sweetalert2.all.1ca2ca56.js";function y(){const{product:t}=n().props,[r,p]=a.exports.useState(t.product_images[0].image),[s,E]=a.exports.useState(t.product_sizes[0].size),[c,b]=a.exports.useState(t.product_sizes[0].price);return e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement("title",null,`${t.title} - IKATWI - Where Developer Shopping`)),e.createElement(d,null,e.createElement("br",null),e.createElement("div",{className:"container mt-55 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"card border-0 bg-gray rounded-0 shadow-sm pt-2 mb-0"},e.createElement("div",{className:"card-body text-center"},e.createElement("img",{src:r,width:"300",className:"rounded-3"}))),e.createElement("div",{className:"card border-0 rounded-top-none rounded shadow-sm mt-0 mb-3"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6 col-6 text-start"},e.createElement("h5",null,t.title)),e.createElement("div",{className:"col-md-6 col-6 text-end"},e.createElement("h5",null,"Rp. ",i(c)))),e.createElement("hr",null),e.createElement("div",{className:"colors mt-4"},e.createElement("i",null,"Kegiatan"),e.createElement("div",{className:"mt-2"},t.product_sizes.map((m,l)=>e.createElement("button",{className:"btn btn-success btn-sm me-10 border-10 shadow-sm w-10",key:l},m.size)))))),e.createElement("div",{className:"card border-0 rounded shadow-sm mb-5"},e.createElement("div",{className:"card-body"},e.createElement("h5",null,"Description"),e.createElement("hr",null),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}}))),e.createElement(u,{product_id:t.id,productImage:r,size:s,price:c,weight:t.weight})))))))}export{y as default};
