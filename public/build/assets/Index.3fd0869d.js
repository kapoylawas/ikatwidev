import{u as n,R as e,H as l}from"./app.04a89a5c.js";import{L as m}from"./Web.37ef8022.js";import{C as s}from"./CardCategory.f905186b.js";import{P as c}from"./Pagination.61d670b8.js";import"./index.84792986.js";function g(){const{categories:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(l,null,e.createElement("title",null,"Categories - IKATWI - Ikatan Terapis Wicara Indonesia")),e.createElement(m,null,e.createElement("div",{className:"container mt-80 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"alert alert-warning border-0 shadow-sm rounded-3"},e.createElement("strong",null,"All Categories"))),a.data.map((t,r)=>e.createElement(s,{category:t,key:r})),e.createElement("div",{className:"col-md-12 mt-4 mb-5"},e.createElement(c,{links:a.links,align:"center"})))))))))}export{g as default};