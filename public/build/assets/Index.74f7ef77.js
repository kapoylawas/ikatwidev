import{u as m,r as c,R as e,H as o}from"./app.60477eb5.js";import{L as u}from"./Account.4b441ae7.js";import"./Dropdown.a287075f.js";function p(){const{transactions:t,statusAnggota:a}=m().props,l=t.map(s=>s.status),[r]=c.exports.useState(a.status_anggota),n=l.toString().replace("[","").replace("]","").replace('"',"").replace('"',"");return e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement("title",null,"User E-Jurnal - IKATWI")),e.createElement(u,null,e.createElement("div",{className:"col-md-12 mt-5"},n==="PAID"||r==="Anggota Kehormatan"?e.createElement(e.Fragment,null):e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-12 col-md-12 col-lg-12 mb-4"},e.createElement("div",{className:"alert text-center alert-danger border-0 shadow-sm mb-0"},e.createElement("h5",null,"Anda belum membayar tagihan IURAN.")))))))}export{p as default};