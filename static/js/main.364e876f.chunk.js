(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{163:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(49),c=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);var l=t(7);function i(e){var a=e.opened;return n.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ".concat(a?"":"toggled")},n.a.createElement("span",{className:"hover sidebar-brand d-flex align-items-center justify-content-center"},n.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},n.a.createElement("i",{className:"fas fa-laugh-wink"})),n.a.createElement("div",{className:"sidebar-brand-text mx-3"},"SB Admin ",n.a.createElement("sup",null,"2"))),n.a.createElement("hr",{className:"sidebar-divider my-0"}),n.a.createElement("li",{className:"nav-item active hover"},n.a.createElement("span",{className:"nav-link"},n.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),n.a.createElement("span",null," Dashboard"))),n.a.createElement("hr",{className:"sidebar-divider my-0"}))}function s(e){var a=e.onToggleSideBar;return n.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},n.a.createElement("button",{className:"btn btn-link d-md-none rounded-circle mr-3",onClick:a},n.a.createElement("i",{className:"fa fa-bars"})),n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-primary",type:"button"},n.a.createElement("i",{className:"fas fa-search fa-sm"}))))))}function d(e){var a=e.onRandomize;return n.a.createElement("div",{className:"d-flex align-items-center justify-content-between mb-4"},n.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Dashboard"),n.a.createElement("button",{type:"button",className:"d-none d-sm-inline-block btn btn-primary shadow-sm",onClick:a},"Randomize ",n.a.createElement("i",{className:"fas fa-random fa-sm text-white-50 align-middle"})),n.a.createElement("button",{type:"button",className:"d-inline-block d-sm-none btn btn-primary btn-xs shadow-sm",onClick:a},"Randomize ",n.a.createElement("i",{className:"fas fa-random fa-sm text-white-50 align-middle"})))}var m=t(14),b=t(21),u=t(2);function f(e){var a=e.type,t=e.title,r=e.content,o=e.icon,c=e.withProgress,l=e.progress;return n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-".concat(a," shadow h-100 py-2")},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-".concat(a," text-uppercase mb-1")},t),!c&&n.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},r),c&&n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("div",{className:"h5 mb-0 mr-3 font-weight-bold text-gray-800"},r)),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"progress progress-sm mr-2"},n.a.createElement("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"".concat(l,"%")},"aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"}))))),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas ".concat(o," fa-2x text-gray-300")}))))))}var g=function(e){return Object(b.format)(e,{code:"USD",precision:0})};var v=Object(r.forwardRef)((function(e,a){var t=Object(r.useState)(4e4),o=Object(m.a)(t,2),c=o[0],l=o[1],i=Object(r.useState)(125e3),s=Object(m.a)(i,2),d=s[0],b=s[1],v=Object(r.useState)(50),p=Object(m.a)(v,2),E=p[0],h=p[1],y=Object(r.useState)(18),N=Object(m.a)(y,2),w=N[0],k=N[1];return Object(r.useImperativeHandle)(a,(function(){return{randomize:function(){var e=Object(u.random)(1e4,5e4);l(e),b(e*Object(u.random)(3,7)),h(Object(u.random)(5,100)),k(Object(u.random)(5,50))}}})),n.a.createElement("div",{className:"row"},n.a.createElement(f,{title:"Earnings (Monthly)",content:g(c),icon:"fa-calendar",type:"primary"}),n.a.createElement(f,{title:"Earnings (Annual)",content:g(d),icon:"fa-dollar-sign",type:"success"}),n.a.createElement(f,{withProgress:!0,progress:E,title:"Tasks",content:"".concat(E,"%"),icon:"fa-clipboard-list",type:"info"}),n.a.createElement(f,{title:"Pending Requests",content:w,icon:"fa-comments",type:"warning"}))})),p=t(6);p.d.global.defaultFontFamily="Nunito";var E=function(e){return Object(b.format)(e,{code:"USD",precision:0})},h={datasets:[{lineTension:.3,backgroundColor:"rgba(78, 115, 223, 0.05)",borderColor:"rgba(78, 115, 223, 1)",pointRadius:3,pointBackgroundColor:"rgba(78, 115, 223, 1)",pointBorderColor:"rgba(78, 115, 223, 1)",pointHoverRadius:3,pointHoverBackgroundColor:"rgba(78, 115, 223, 1)",pointHoverBorderColor:"rgba(78, 115, 223, 1)",pointHitRadius:10,pointBorderWidth:2}]},y={maintainAspectRatio:!1,layout:{padding:{}},scales:{xAxes:[{time:{unit:"date"},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{ticks:{maxTicksLimit:5,padding:10,callback:E},gridLines:{color:"#f0f0f0",zeroLineColor:"rgb(234, 236, 244)",drawBorder:!1}}]},legend:{display:!1},tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",titleMarginBottom:10,titleFontColor:"#6e707e",titleFontSize:14,borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,intersect:!1,mode:"index",caretPadding:10,callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"";return"".concat(t," ").concat(E(e.yLabel))}}}};var N=function(e){var a=e.title,t=e.labels,r=e.data,o=e.addPadding;return h.labels=t,h.datasets[0].label=a,h.datasets[0].data=r,y.layout.padding=o?{left:10,right:25,top:25,bottom:0}:{left:0,right:0,top:0,bottom:0},n.a.createElement("div",{className:"chart-area"},n.a.createElement(p.c,{data:h,options:y}))},w={threeQuarter:"col-sm-8",quarter:"col-sm-4",half:"col-sm-6"};var k=function(e){var a=e.children,t=e.title,r=e.size,o=void 0===r?"quarter":r;return n.a.createElement("div",{className:w[o]},n.a.createElement("div",{className:"card shadow mb-4"},n.a.createElement("div",{className:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},n.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},t)),n.a.createElement("div",{className:"card-body"},a)))},x=t(22),j=t.n(x),O=t(13),C=t.n(O),S={datasets:[{backgroundColor:["#4e73df","#1cc88a","#36b9cc"],hoverBackgroundColor:["#2e59d9","#17a673","#2c9faf"],hoverBorderColor:"rgba(234, 236, 244, 1)"}]},P={maintainAspectRatio:!1,tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,caretPadding:10},legend:{display:!1},cutoutPercentage:80};var B=function(e){var a=e.labels,t=e.data;S.labels=a,S.datasets[0].data=t;var r=j()({count:a.length,hue:"random"}),o=r.map((function(e){return C()(e).darken(.3).string()}));return S.datasets[0].backgroundColor=r,S.datasets[0].hoverBackgroundColor=o,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chart-pie"},n.a.createElement(p.b,{data:S,options:P})),n.a.createElement("div",{className:"mt-4 text-center small"},a.map((function(e,a){return n.a.createElement("span",{key:e,className:"mr-2"},n.a.createElement("i",{className:"fas fa-circle",style:{color:r[a]}})," ".concat(e," (").concat(t[a],")"))}))))},z={maintainAspectRatio:!1,scales:{yAxes:[{display:!0,ticks:{maxTicksLimit:10,suggestedMin:0,suggestedMax:100,callback:function(e){return"".concat(e,"%")}}}]},tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",titleMarginBottom:10,titleFontColor:"#6e707e",titleFontSize:14,borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,intersect:!1,caretPadding:10,callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label;return"".concat(t," - ").concat(e.yLabel,"%")}}}};var R=function(e){var a=e.title,t=e.labels,r=e.data,o=j()({count:t.length,hue:"random"});z.tooltips.callbacks.title=function(){return a};var c=t.map((function(e,a){return{label:e,backgroundColor:o[a],borderColor:o[a],hoverBackgroundColor:C()(o[a]).darken(.3).string(),hoverBorderColor:C()(o[a]).darken(.3).string(),borderWidth:1,data:[r[a]]}}));return n.a.createElement("div",{className:"chart-area"},n.a.createElement(p.a,{data:{datasets:c},options:z}))},A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],F=["Direct","Referral","Social"],M=["Aadya","Sinead","Palash","Conor","Jordi"],D=["Sales","Marketing","HR","IT"];var L=Object(r.forwardRef)((function(e,a){var t=e.isMobile,o=Object(r.useState)([0,1e4,5e3,15e3,1e4,2e4,15e3,25e3,2e4,3e4,25e3,4e4]),c=Object(l.a)(o,2),i=c[0],s=c[1],d=Object(r.useState)([55,30,15]),m=Object(l.a)(d,2),b=m[0],f=m[1],g=Object(r.useState)([50,70,33,81,60]),v=Object(l.a)(g,2),p=v[0],E=v[1],h=Object(r.useState)([60,42,78,89]),y=Object(l.a)(h,2),w=y[0],x=y[1];return Object(r.useImperativeHandle)(a,(function(){return{randomize:function(){s(A.map((function(){return Object(u.random)(0,6e4)}))),E(M.map((function(){return Object(u.random)(0,100)}))),x(D.map((function(){return Object(u.random)(0,100)})));var e=100,a=F.map((function(a,t){if(t===F.length-1)return e;var r=Object(u.random)(0,e);return e-=r,r}));f(a)}}})),n.a.createElement("div",{className:"row"},n.a.createElement(k,{title:"Earnings Overview",size:"threeQuarter"},n.a.createElement(N,{addPadding:!t,title:"Earnings",labels:A,data:i})),n.a.createElement(k,{title:"Revenue Sources",size:"quarter"},n.a.createElement(B,{labels:F,data:b})),n.a.createElement(k,{title:"Directors Performance",size:"half"},n.a.createElement(R,{title:"Directors Performance",labels:M,data:p})),n.a.createElement(k,{title:"Teams Performance",size:"half"},n.a.createElement(R,{title:"Teams Performance",labels:D,data:w})))}));function T(){var e=Object(r.createRef)(),a=Object(r.createRef)(),t=Object(r.useState)(!1),o=Object(l.a)(t,2),c=o[0],m=o[1];return Object(r.useEffect)((function(){var e=function(){var e=document.documentElement.clientWidth;m(e<501)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[m]),n.a.createElement("div",{id:"wrapper"},n.a.createElement(i,{opened:!c}),n.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},n.a.createElement(s,{onToggleSideBar:function(){return m(!c)}}),n.a.createElement("div",{className:"container-fluid"},n.a.createElement(d,{onRandomize:function(){e.current.randomize(),a.current.randomize()}}),n.a.createElement(v,{ref:e}),n.a.createElement(L,{isMobile:c,ref:a}))))}c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,a,t){e.exports=t(163)},56:function(e,a,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.364e876f.chunk.js.map