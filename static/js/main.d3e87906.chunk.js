(this.webpackJsonpimpct=this.webpackJsonpimpct||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=(a(14),a(1)),s=a(2),o=a(5),u=a(4),m=a(3),d=l.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 450.391 450.391"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02\r c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465\r c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122\r C169.796,411.77,158.1,423.465,143.673,423.465z"}),l.a.createElement("path",{d:"M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02\r C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122\r c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"}),l.a.createElement("path",{d:"M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42\r C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004\r c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453\r c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449\r H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988\r c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228\r c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"})))),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.panel,a=e.setPanel;return l.a.createElement("div",{id:"header",className:"header"},l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"navlink menu"+("Menu"===t?" selected":""),onClick:function(e){return a("Menu"===t?"Page":"Menu")}},"Menu"===t?l.a.createElement("div",null,"X"):l.a.createElement("div",null,l.a.createElement("div",{className:"menu-line"}),l.a.createElement("div",{className:"menu-line"}),l.a.createElement("div",{className:"menu-line"}))),l.a.createElement("div",{className:"navlink home",onClick:function(e){return a("Page")}},"impct"),l.a.createElement("div",{className:"navlink cart"+("Cart"===t?" selected":""),onClick:function(e){return a("Cart"===t?"Page":"Cart")}},d)))}}]),a}(l.a.Component),v=function(e){var t=e.url;return l.a.createElement("img",{className:"avitar not-resized",src:t,alt:""})},f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={photoURL:""},n}return Object(s.a)(a,[{key:"handleFile",value:function(e){var t=this,a=e.currentTarget.files[0],n=new FileReader;n.onloadend=function(e){var a=e.target.result;t.setState({photoURL:a})},a&&n.readAsDataURL(a)}},{key:"render",value:function(){var e=this,t=this.state.photoURL;return l.a.createElement("div",{className:"profile-photo photo-container"},l.a.createElement(v,{url:t||"woman1.jpg",alt:""}),l.a.createElement("label",{className:"change-photo",htmlFor:"profile-photo"},"Update",l.a.createElement("input",{className:"profile-photo-file-input",type:"file",name:"profile-photo",id:"profile-photo",onChange:function(t){return e.handleFile(t)}})))}}]),a}(l.a.Component),p=a(8),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={edit:!1,fname:"Jane",lname:"Du",address1:"Section 1, Bade Road",address2:"No. 104\u865f, Section 1",city:"Zhongzheng District, Taipei City",state:"",country:"Taiwan",postalCode:"100"},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=this;return function(a){t.setState(Object(p.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({edit:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.fname,n=t.lname,r=t.address1,c=t.address2,i=t.city,s=t.state,o=t.country,u=t.postalCode;return t.edit?l.a.createElement("form",{className:"user-info",onSubmit:this.handleSubmit},l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"First name",value:a,onChange:this.handleChange("fname")}),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"Last name",value:n,onChange:this.handleChange("lname")}),l.a.createElement("div",{className:"user-info-message"},"(Only you can see the following)"),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"Address1",value:r,onChange:this.handleChange("address1")}),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"Address2",value:c,onChange:this.handleChange("address2")}),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"city",value:i,onChange:this.handleChange("city")}),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"State",value:s,onChange:this.handleChange("state")}),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"State",value:o,onChange:this.handleChange("country")}),l.a.createElement("input",{className:"user-info-input",type:"text",placeholder:"Postal code",value:u,onChange:this.handleChange("postalCode")}),l.a.createElement("button",{className:"save-user-info",onClick:this.handleSubmit},"Save")):l.a.createElement("div",{className:"user-info"},a||n?l.a.createElement("div",{className:"user-info-item name"},a," ",n):null,r||c||i||s||o?l.a.createElement("div",{className:"user-info-message"},"(Only you can see the following)"):null,r?l.a.createElement("div",{className:"user-info-item"},r):null,c?l.a.createElement("div",{className:"user-info-item"},c):null,i?l.a.createElement("div",{className:"user-info-item"},i):null,s?l.a.createElement("div",{className:"user-info-item"},s):null,o?l.a.createElement("div",{className:"user-info-item"},o," ",u):null,l.a.createElement("div",{className:"edit-user-info",onClick:function(t){return e.setState({edit:!0})}},"\u270e"))}}]),a}(l.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={tab:"Info"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tab;return l.a.createElement("div",{className:"profile-container"},l.a.createElement(f,null),l.a.createElement("div",{className:"profile-tabs"},l.a.createElement("div",{onClick:function(t){return e.setState({tab:"Investments"})},className:"profile-tab ".concat("Investments"===t?"selected":"")},"Investments"),l.a.createElement("div",{onClick:function(t){return e.setState({tab:"Info"})},className:"profile-tab ".concat("Info"===t?"selected":"")},"Info"),l.a.createElement("div",{onClick:function(t){return e.setState({tab:"Purchases"})},className:"profile-tab ".concat("Purchases"===t?"selected":"")},"Purchases")),"Info"===t?l.a.createElement(E,null):null)}}]),a}(l.a.Component),y=function(){return l.a.createElement("div",{className:"menu-container"},l.a.createElement("div",{className:"menu-item"},"Logout"))},b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state=e.item,n}return Object(s.a)(a,[{key:"handleChange",value:function(e,t){var a=this.props.setQty;if(isNaN(parseInt(t))&&""!==t)return null;a(e,t<0?0:t)}},{key:"render",value:function(){var e=this,t=this.state,a=t.desc,n=t.photoURL,r=t.price,c=t.qty,i=t.id;return l.a.createElement("div",{className:"cart-item"},l.a.createElement("div",{className:"photo-container"},l.a.createElement(v,{url:n,alt:""})),l.a.createElement("div",{className:"cart-item-details"},l.a.createElement("div",null,a),l.a.createElement("div",null,"$",r.toFixed(2)),l.a.createElement("div",{className:"qty"},"Qty: ",l.a.createElement("input",{type:"text",value:c,onChange:function(t){return e.handleChange(i,t.currentTarget.value)}}),l.a.createElement("div",null,l.a.createElement("div",{className:"qty-up",onClick:function(t){return e.handleChange(i,c+1)}},"v"),l.a.createElement("div",{className:"qty-down",onClick:function(t){return e.handleChange(i,c-1)}},"v")))))}}]),a}(l.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={item5:{desc:"impctcoffee gift card",photoURL:"coffee5.png",price:15,qty:1,id:"item5"},item1:{desc:"Uganda Nebbi Zombo Natural - Medium - Fruity",photoURL:"coffee1.png",price:14.5,qty:1,id:"item1"},item2:{desc:"Guatemala Asociaci\xf3n Barillense Organic - Medium - Sweet",photoURL:"coffee2.png",price:13.5,qty:1,id:"item2"},item3:{desc:"Colombia Medellin Smallholder - Swiss Water Process Decaf - Medium",photoURL:"coffee3.png",price:12,qty:1,id:"item3"},item4:{desc:"impctcoffee mug - drink coffee, change the world",photoURL:"coffee4.jpg",price:6,qty:1,id:"item4"}},n.setQty=n.setQty.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"remove",value:function(e){delete this.state[e],this.setState(this.state)}},{key:"subTotal",value:function(){var e=0;return Object.values(this.state).forEach((function(t){return e+=t.price*t.qty})),e.toFixed(2)}},{key:"setQty",value:function(e,t){this.state[e].qty=t,this.setState(this.state)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state);return l.a.createElement("div",{className:"cart-container"},l.a.createElement("div",{className:"cart-message"},"Your cart ",t.length?"":"is empty"),l.a.createElement("div",{className:"cart-items"},t.map((function(t,a){return l.a.createElement("div",{className:"cart-item-relative",key:t},l.a.createElement("div",{className:"remove-cart-item",onClick:function(a){return e.remove(t)}},"remove"),l.a.createElement("div",{className:"cart-counter"},l.a.createElement("div",null,a+1)),l.a.createElement(b,{item:e.state[t],setQty:e.setQty}))}))),l.a.createElement("div",null,t.length," items"),l.a.createElement("div",null,"Subtotal: $",this.subTotal()))}}]),a}(l.a.Component),N=function(e){var t=e.panel;return l.a.createElement("div",{id:"page",className:"page"},"Page"===t?l.a.createElement(g,null):null,"Menu"===t?l.a.createElement(y,null):null,"Cart"===t?l.a.createElement(C,null):null)},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={panel:"Page"},n.setState=n.setState.bind(Object(o.a)(n)),n.setPanel=n.setPanel.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"setPanel",value:function(e){this.setState({panel:e})}},{key:"render",value:function(){var e=this.state.panel;return l.a.createElement("div",{className:"body"},l.a.createElement(h,{setPanel:this.setPanel,panel:e}),l.a.createElement(N,{panel:e}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),setInterval((function(){for(var e=document.getElementsByClassName("not-resized"),t=0;t<e.length;t++)e[t].offsetHeight>e[t].offsetWidth?(e[t].style.width="100%",e[t].style.height="auto"):(e[t].style.height="100%",e[t].style.width="auto")}),200),window.addEventListener("resize",(function(e){return function(){var e=document.getElementById("header"),t=document.getElementById("page");if(e&&t){var a=e.offsetWidth;t.style.width="".concat(a,"px")}}()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d3e87906.chunk.js.map