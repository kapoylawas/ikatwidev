import{R as e,L as a}from"./app.050d9cdf.js";import{f as r}from"./FormatPrice.72b07cf2.js";function s({product:t}){return e.createElement(e.Fragment,null,e.createElement("div",{className:"col-md-6 mb-4 col-6"},e.createElement(a,{href:`/products/${t.slug}`,className:"text-dark text-decoration-none"},e.createElement("div",{className:"card border-0 h-100 rounded-3 shadow-sm product"},e.createElement("div",{className:"card-image"},t.product_images.length>0?e.createElement("img",{src:t.product_images[0].image,className:"w-100 rounded-top"}):e.createElement("img",{src:"/assets/images/image.png",className:"w-100 rounded-top"})),e.createElement("div",{className:"card-body h-100"},e.createElement("h6",{className:"card-title text-center title-book"},t.title)),e.createElement("div",{className:"card border-0 rounded shadow-sm mb-5"},e.createElement("div",{className:"card-body"},e.createElement("h5",null,"Description"),e.createElement("hr",null),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}}))),e.createElement("div",{className:"card-footer"},e.createElement("div",{className:"row justify-content-between"},e.createElement("div",{className:"col-md-6 col-12 text-start final-price"},e.createElement("strong",null,"Rp."," ",r(t.product_sizes[0].price)))))))))}export{s as C};
