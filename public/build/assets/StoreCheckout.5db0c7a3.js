import{R as e,d as r}from"./app.5538efc0.js";import{S as u}from"./sweetalert2.all.18d86552.js";function l({provinceID:s,cityID:c,grandTotal:t,address:o}){const n=()=>{r.Inertia.post("/checkouts",{province_id:s,city_id:c,grand_total:t,address:o},{onSuccess:()=>{u.fire({title:"Success!",text:"Checkout successfully!",icon:"success",showConfirmButton:!1,timer:3e3})}})};return e.createElement(e.Fragment,null,e.createElement("button",{onClick:n,className:"btn btn-success btn-md border-0 shadow rounded-3 w-100 mb-5",disabled:t==0},"BAYAR SEKARANG"))}export{l as default};