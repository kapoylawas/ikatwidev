import{r,R as t,d as u}from"./app.3527a5c0.js";import{S as i}from"./sweetalert2.all.ac8f1b21.js";function m({provinceID:o,cityID:c,grandTotal:e}){const[s,n]=r.exports.useState(!1),a=()=>{n(!0),u.Inertia.post("/checkouts",{province_id:o,city_id:c,grand_total:e},{onSuccess:()=>{i.fire({title:"Success!",text:"Checkout successfully!",icon:"success",showConfirmButton:!1,timer:3e3})}}),setIsButtonLoading(!1)};return t.createElement(t.Fragment,null,t.createElement("button",{onClick:a,className:"btn btn-success btn-md border-0 shadow rounded-3 w-100 mb-5",disabled:e==0||s},s?"Loading...":"BAYAR SEKARANG"))}export{m as default};
