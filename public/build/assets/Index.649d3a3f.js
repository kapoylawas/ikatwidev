import{u as n,R as e,H as r,L as c}from"./app.253740c9.js";import{L as s}from"./Account.d15ebc08.js";import{P as m}from"./Pagination.628ebe6c.js";function E(){const{tagihans:t}=n().props;return e.createElement(e.Fragment,null,e.createElement(r,null,e.createElement("title",null,"Tagihan Iuran - IKATWI")),e.createElement(s,null,e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Users")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"3%"}},"No."),e.createElement("th",{scope:"col",style:{width:"7%"}},"nama"),e.createElement("th",{scope:"col",style:{width:"7%"}},"Tagihan"),e.createElement("th",{scope:"col",style:{width:"10%"}},"Tahun"),e.createElement("th",{scope:"col",style:{width:"4%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.user.name),e.createElement("td",null,a.price),e.createElement("td",null,a.tahun),e.createElement("td",{className:"text-center"},e.createElement(c,{href:"/carts",className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-list-ul"})))))))),e.createElement(m,{links:t.links,align:"end"})))))))}export{E as default};
