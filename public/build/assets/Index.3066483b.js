import{u as m,R as e,H as n,L as t}from"./app.79bcb0e8.js";import{L as o}from"./Web.ccdb8ec9.js";import{C as d}from"./CardCategory.f079712f.js";import{C as i}from"./CardProduct.132c6798.js";import"./FormatPrice.72b07cf2.js";function E(){const{sliders:r}=m().props;return e.createElement(e.Fragment,null,e.createElement("div",{className:"container",style:{marginTop:"80px"}},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-bs-ride":"carousel"},e.createElement("div",{className:"carousel-inner"},r.map((l,a)=>e.createElement("div",{className:`${a==0?"active carousel-item":"carousel-item"}`,key:a},e.createElement("img",{src:l.image,className:"d-block img-carousel rounded-3"})))),e.createElement("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev"},e.createElement("i",{className:"fa fa-long-arrow-alt-left carousel-custom text-dark shadow"}),e.createElement("span",{className:"visually-hidden"},"Previous")),e.createElement("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next"},e.createElement("i",{className:"fa fa-long-arrow-alt-right carousel-custom text-dark shadow"}),e.createElement("span",{className:"visually-hidden"},"Next"))))))))}function f(){const{sliders:r,categories:l,products:a}=m().props;return e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement("title",null,"IKATWI - Ikatan Terapis Wicara")),e.createElement(o,null,e.createElement(E,{sliders:r}),e.createElement("div",{className:"container mt-4 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row justify-content-between mb-3"},e.createElement("div",{className:"col-md-6 col-6 text-start"},e.createElement("strong",null," Categories")),e.createElement("div",{className:"col-md-6 col-6 text-end"},e.createElement(t,{href:"/categories",className:"text-dark"},e.createElement("strong",null,"Lihat Semua"," ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))),e.createElement("div",{className:"row justify-content-center"},l.map((s,c)=>e.createElement(d,{category:s,key:c})),e.createElement("div",{className:"col-md-3 col-6 mb-3"},e.createElement(t,{href:"/categories/",className:"text-decoration-none text-dark"},e.createElement("div",{className:"card border-0 rounded-3  shadow-sm"},e.createElement("div",{className:"card-body text-center"},e.createElement("img",{src:"/assets/images/newspaper.png",width:"50"}),e.createElement("p",{className:"card-title mt-3"},"Berita"))))),e.createElement("div",{className:"col-md-3 col-6 mb-3"},e.createElement(t,{href:"/categories/",className:"text-decoration-none text-dark"},e.createElement("div",{className:"card border-0 rounded-3  shadow-sm"},e.createElement("div",{className:"card-body text-center"},e.createElement("img",{src:"/assets/images/article.png",width:"50"}),e.createElement("p",{className:"card-title mt-3"},"Artikel"))))),e.createElement("div",{className:"col-md-3 col-6 mb-3"},e.createElement(t,{href:"/categories/",className:"text-decoration-none text-dark"},e.createElement("div",{className:"card border-0 rounded-3  shadow-sm"},e.createElement("div",{className:"card-body text-center"},e.createElement("img",{src:"/assets/images/history.png",width:"50"}),e.createElement("p",{className:"card-title mt-3"},"History")))))),e.createElement("div",{className:"row justify-content-between mb-3 mt-4"},e.createElement("div",{className:"col-md-6 col-6 text-start"},e.createElement("strong",null,"Kegiatan Terbaru")),e.createElement("div",{className:"col-md-6 col-6 text-end"},e.createElement(t,{href:"/products",className:"text-dark"},e.createElement("strong",null,"Lihat Semua"," ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))),e.createElement("div",{className:"row mb-5"},a.map((s,c)=>e.createElement(i,{product:s,key:c})))))))))}export{f as default};
