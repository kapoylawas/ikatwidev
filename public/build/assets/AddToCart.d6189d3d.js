import{u as m,R as t,d as e}from"./app.95b5dec4.js";import{S as s}from"./sweetalert2.all.543bdec7.js";function f({product_id:a,productImage:o,size:r,price:n,weight:c}){const{auth:i}=m().props,l=()=>{if(!i.user)return s.fire({title:"Oopss!",text:"Please login!",icon:"error",showConfirmButton:!1,timer:3e3}),e.Inertia.visit("/login");e.Inertia.post("/carts",{product_id:a,product_image:o.split("\\").pop().split("/").pop(),size:r,price:n,qty:1,weight:c},{onSuccess:()=>{s.fire({title:"Success!",text:"Add to Cart successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return t.createElement(t.Fragment,null,t.createElement("div",{className:"justify-content-center fixed-bottom"},t.createElement("button",{onClick:()=>l(),className:"btn btn-success btn-sm btn-cart p-2 pe-2"}," ",t.createElement("i",{className:"fa fa-shopping-cart me-2"}),"Add to Card")))}export{f as default};
