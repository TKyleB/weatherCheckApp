(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),c=n.n(o)()(r());c.push([e.id,"body {\n    background-color: rgb(110, 204, 175);\n    color: rgb(52, 77, 103);\n}\n.main-content {\n    background-color: rgb(250, 249, 246);\n}",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);a&&c[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},c=[],s=0;s<e.length;s++){var i=e[s],d=a.base?i[0]+a.base:i[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=n(l),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var s=n(o[c]);t[s].references--}for(var i=a(e,r),d=0;d<o.length;d++){var p=n(o[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=()=>{const e=document.createElement("header");e.classList.add("text-center");const t=document.createElement("h1");return t.textContent="weatherCheckApp",e.appendChild(t),e},t=()=>{const e=document.createElement("div");return e.classList.add("vstack","text-center","border-end","border-bottom","px-3"),e},a=e=>{const t=document.createElement("h5");return t.classList.add("m-0"),t.textContent=e,t},r=()=>{const e=document.createElement("div");return e.classList.add("vstack","text-center"),e},o=e=>{const t=document.createElement("span");return t.classList.add("mb-4","mt-2"),t.textContent=e,t},c=(e,t)=>{const n=document.createElement("span");return n.textContent=e+" "+t,n};var s=n(379),i=n.n(s),d=n(795),p=n.n(d),l=n(569),u=n.n(l),m=n(565),f=n.n(m),v=n(216),h=n.n(v),y=n(589),g=n.n(y),b=n(426),E={};E.styleTagTransform=g(),E.setAttributes=f(),E.insert=u().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=h(),i()(b.Z,E),b.Z&&b.Z.locals&&b.Z.locals;const x="9e2784936f680d48653338cba21190e3",C=document.getElementById("root"),L=t=>{C.innerHTML="",C.append(e(),(e=>{const t=document.createElement("section");t.classList.add("row","justify-content-md-center");const n=document.createElement("form");n.classList.add("col","col-md-6");const a=document.createElement("div");a.classList.add("input-group","mb-3");const r=document.createElement("input");r.classList.add("form-control"),r.type="text",r.name="location",r.id="location",r.placeholder="Enter your Location";const o=(()=>{const e=document.createElement("button");e.id="locationButton";const t=document.createElement("i");return t.classList.add("bi","bi-geo-alt-fill"),e.classList.add("btn","btn-secondary"),e.appendChild(t),e})(),c=(()=>{const e=document.createElement("button");return e.classList.add("btn","btn-primary"),e.id="go",e.textContent="Go",e})();if(a.appendChild(r),a.appendChild(o),a.appendChild(c),n.appendChild(a),e){const e=document.createElement("div");e.classList.add("text-center"),e.classList.add("alert","alert-danger"),e.textContent="There was an error! Try Again",n.append(e)}return t.appendChild(n),t})(t)),document.getElementById("go").addEventListener("click",(e=>{e.preventDefault(),M(null,document.getElementById("location").value)})),document.getElementById("locationButton").addEventListener("click",(e=>{e.preventDefault(),navigator.geolocation.getCurrentPosition((async function(e){await M(e,null)}))}))},w=(n,s,i,d,p,l,u,m,f,v)=>{C.innerHTML="";const h=document.createElement("div");h.classList.add("border","border-1");const y=document.createElement("section");y.classList.add("main-content"),h.append(((e,n,r)=>{const o=document.createElement("div");o.classList.add("d-flex","justify-content-center","align-items-center");const c=t(),s=a("Temperature"),i=document.createElement("span");i.textContent=e+" "+r,c.append(s,i);const d=a("Current Conditions"),p=t();return p.append(d,document.createElement("span").textContent=n),o.append(c,p),o})(i,T(d),v),((e,t,n,a,s,i,d,p,l)=>{const u=document.createElement("div");u.classList.add("d-flex","gap-5","px-3");const m=r(),f=o("Feels Like: ");f.append(c(e,"F")),m.append(f);const v=o("Pressure: ");v.append(c(t,"hPa")),m.append(v);const h=r(),y=o("Min Temp: ");y.append(c(n,"F")),h.append(y);const g=o("Humidity: ");g.append(c(a,"%")),h.append(g);const b=r(),E=o("Max Temp: ");E.append(c(s,"F")),b.append(E);const x=o("Wind Speed: ");return x.append(c(i,"mph")),b.append(x),u.append(m,h,b),u})(Math.round(parseInt(s)),f,Math.round(parseInt(p)),u,Math.round(parseInt(l)),m),(()=>{const e=document.createElement("div");return e.classList.add("d-flex","justify-content-center","gap-2","m-2"),e.append(((e,t,n)=>{const a=document.createElement("button");return a.classList.add("btn","btn-success","w-100"),a.id="reset",a.textContent="New City?",a})()),e})()),y.append(h),C.append(e(),(e=>{const t=document.createElement("section");t.classList.add("row","justify-content-center","text-center");const n=document.createElement("h2");return n.classList.add("col-8","col-md-9","col-lg-12"),n.textContent=`Current weather in ${e}`,t.appendChild(n),t})(n),y),document.getElementById("reset").addEventListener("click",(e=>{e.preventDefault(),L()}))},T=e=>e.split(" ").map((e=>e[0].toUpperCase()+e.substring(1))).join(" ");async function M(e,t){if(e){const t=e;console.log(t);const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t.coords.latitude}&lon=${t.coords.longitude}&units=imperial&appid=${x}`),a=await n.json();w(a.name,a.main.feels_like,a.main.temp,a.weather[0].description,a.main.temp_min,a.main.temp_max,a.main.humidity,a.wind.speed,a.main.pressure,"F")}else{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=imperial&appid=${x}`);if(e.ok){const t=await e.json();w(t.name,t.main.feels_like,t.main.temp,t.weather[0].description,t.main.temp_min,t.main.temp_max,t.main.humidity,t.wind.speed,t.main.pressure,"F")}else L(!0)}}L()})()})();