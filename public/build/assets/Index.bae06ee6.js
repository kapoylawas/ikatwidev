import{u as r,R as e,H as m,L as c}from"./app.328fbefb.js";import{L as n}from"./Account.5ee17f8b.js";import{S as s}from"./Search.061ff90e.js";import{P as o}from"./Pagination.1803bbce.js";import{D as d}from"./Delete.fe121e67.js";import"./Dropdown.3a61b81e.js";import"./sweetalert2.all.54eeb38c.js";function w(){const{dpw:t}=r().props;return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"Master DPW - IKATWI")),e.createElement(n,null,e.createElement("div",{class:"row mt-5"},e.createElement("div",{class:"col-md-8"},e.createElement("div",{class:"row"},e.createElement("div",{class:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/account/dpw/create",class:"btn btn-md btn-admin border-0 shadow w-100",type:"button"},e.createElement("i",{class:"fa fa-plus-circle me-2"}),"Tambah")),e.createElement("div",{class:"col-md-9 col-12 mb-2"},e.createElement(s,{URL:"/account/dpw"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Categories")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.name),e.createElement("td",{className:"text-center"},e.createElement(c,{href:`/account/dpw/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),e.createElement(d,{URL:"/account/dpw",id:a.id}))))))),e.createElement(o,{links:t.links,align:"end"})))))))}export{w as default};
