import{u as m,r as s,R as e,H as u,L as a}from"./app.1e601966.js";import{L as d}from"./Account.3cbbfd66.js";import"./Dropdown.30a3cb7b.js";function p(){const{transactions:l,biodata:t,statusAnggota:n}=m().props,c=l.map(r=>r.status);return s.exports.useState(n.status_anggota),c.toString().replace("[","").replace("]","").replace('"',"").replace('"',""),e.createElement(e.Fragment,null,e.createElement(u,null,e.createElement("title",null,"User Document Kelengkapan - IKATWI")),e.createElement(d,null,e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-admin"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Berkas Document")),e.createElement("div",{className:"card-body"},e.createElement("table",{className:"table table-bordered"},e.createElement("tr",null,e.createElement("td",null,"FULL NAME"),e.createElement("td",null,":"),e.createElement("td",{className:"p-2"},t.name)),e.createElement("tr",null,e.createElement("td",null,"Email"),e.createElement("td",null,":"),e.createElement("td",{className:"p-2"},t.email)),e.createElement("tr",null,e.createElement("td",null,"Ijazah"),e.createElement("td",null,":"),e.createElement("td",null,e.createElement(a,{href:`/account/documents/showIjazah/${t.id}`,className:"btn"},e.createElement("i",{className:"fa fa-plus-circle"}," ","Lihat")," "))),e.createElement("tr",null,e.createElement("td",null,"SIP"),e.createElement("td",null,":"),e.createElement("td",null,e.createElement(a,{href:`/account/documents/showsip/${t.id}`,className:"btn"},e.createElement("i",{className:"fa fa-plus-circle"}," ","Lihat")," "))),e.createElement("tr",null,e.createElement("td",null,"STR"),e.createElement("td",null,":"),e.createElement("td",null,e.createElement(a,{href:`/account/documents/showstr/${t.id}`,className:"btn"},e.createElement("i",{className:"fa fa-plus-circle"}," ","Lihat")," "))))))))))}export{p as default};