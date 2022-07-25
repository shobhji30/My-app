(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(5),c=t.n(o),r=(t(16),t(3));t(18);function s(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","dark"===e.mode?"Lightmode":"Darkmode")))),n.a.createElement("div",{onClick:e.colorChange,className:"colorPallets mx-3"},n.a.createElement("input",{type:"color",id:"colorpicker"}))))}function i(e){var a=Object(l.useState)("Enter text here"),t=Object(r.a)(a,2),o=t[0],c=t[1],s=Object(l.useState)("No email found!"),i=Object(r.a)(s,2),m=i[0],d=i[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"grey"}},n.a.createElement("h1",null,"Enter your text below to analyze"),n.a.createElement("form",null,n.a.createElement("div",{className:"mb-3 "},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"grey"},id:"exampleFormControlTextarea1",rows:"8"}),n.a.createElement("button",{className:"btn btn-primary my-2 mx-1",onClick:function(e){var a=o.toUpperCase();c(a),e.preventDefault()}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-1",onClick:function(e){var a=o.toLowerCase();c(a),e.preventDefault()}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-1",onClick:function(e){var a=function(e){return e.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)}(o);0===a.length?(d("No E-mail found!"),e.preventDefault()):(d(a),e.preventDefault())}},"Extract emails")))),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"grey"}},n.a.createElement("h1",null,"Your text summary"),n.a.createElement("p",null,o.split(" ").length," words and ",o.length," characters"),n.a.createElement("h3",null,"E-mails:-"),n.a.createElement("p",null,m)))}function m(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Darkmode"),s=Object(r.a)(c,2),i=s[0],m=s[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-3",style:t},n.a.createElement("h2",null,"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item",style:t},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item",style:t},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item",style:t},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))),n.a.createElement("div",{className:"container"},n.a.createElement("button",{className:"btn btn-primary",onClick:function(){"white"==t.color?(o({color:"black",backgroundColor:"white"}),m("Enable Darkmode")):(o({color:"white",backgroundColor:"black",border:"1px solid white"}),m("Enable Lightmode"))}},i)))}var d=t(6),u=t(0);var h=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(s,{title:"TextUtils",colorChange:function(){var e=document.getElementById("colorpicker").value;document.body.style.backgroundColor=e},mode:t,togglemode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#343a40"):(o("light"),document.body.style.backgroundColor="white")}}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/",element:n.a.createElement(i,{mode:t})}),n.a.createElement(u.a,{path:"about/*",element:n.a.createElement(m,null)})))))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,21)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),b()},7:function(e,a,t){e.exports=t(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.0cf1622d.chunk.js.map