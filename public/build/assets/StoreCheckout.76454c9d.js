import{R as e,d as n}from"./app.17cb206a.js";import{S as r}from"./sweetalert2.all.d51ada13.js";function i({provinceID:s,cityID:c,grandTotal:t}){const o=()=>{n.Inertia.post("/checkouts",{province_id:s,city_id:c,grand_total:t},{onSuccess:()=>{r.fire({title:"Success!",text:"Checkout successfully!",icon:"success",showConfirmButton:!1,timer:3e3})}})};return e.createElement(e.Fragment,null,e.createElement("button",{onClick:o,className:"btn btn-success btn-md border-0 shadow rounded-3 w-100 mb-5",disabled:t==0},"BAYAR SEKARANG"))}export{i as default};
