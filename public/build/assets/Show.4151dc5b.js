import{u as m,R as e,H as l}from"./app.f5263ca2.js";import{L as n}from"./Web.ec4a87f3.js";import{C as o}from"./CardProduct.fdf0548c.js";import"./index.0655d53b.js";import"./FormatPrice.72b07cf2.js";function p(){const{category:t}=m().props;return e.createElement(e.Fragment,null,e.createElement(l,null,e.createElement("title",null,`${t.name} - Geek Store - Where Developer Shopping`)),e.createElement(n,null,e.createElement("div",{className:"container mt-80 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"alert alert-warning border-0 shadow-sm rounded-3"},"Products Category : ",e.createElement("strong",null,t.name))),t.products.map((a,r)=>e.createElement(o,{product:a,key:r})))))))))}export{p as default};