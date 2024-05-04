(()=>{"use strict";var n,e,r,t,o,a,i,c,s,d,l,u,p,f,m={208:(n,e,r)=>{r.d(e,{A:()=>c});var t=r(601),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([n.id,"html {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\nbody {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    margin: 0; \n    padding: 0;\n}\n.main-container{\n    border: solid black ;\n    width: 70vw;\n    right: auto;\n}\n\n/*-----------------------------------------------------*/\n\n.search-bar{\n    margin-top: 1rem;\n    width: 100%;\n    display: flex;\n    padding: 0.7rem 2rem;\n    border-radius: 2rem;\n    background-color: antiquewhite;\n    border: solid black;\n}\n\n.input{\n    width: 100%;\n    font-size: 1.3rem;\n    padding: .6rem 2rem;\n    border: none;\n    background: transparent;\n}\n.input:focus {\n    outline: none; /* Remove focus outline */\n    border-color: transparent; /* Make border transparent on focus */\n}\n\n/*-------------------------------------------------------------------*/\n.current-info-container{\n    border: solid red;\n    height: 60%;\n    margin-top: 1rem;\n    display: flex;\n}\n.main-info{\n    border: solid blue;\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.current-info{\n    border: solid yellow 3px;\n    min-height: 300px;\n    min-width: 400px;\n    display: flex;\n    padding-top: 1rem;\n}\n.cw-info{\n    border: solid brown;\n    flex: 1;  \n    display: flex;\n    flex-direction: column;\n    padding-top: 1rem;\n}\n.cw-temp{\n    border: solid black;\n    font-size: 3rem;\n}\n.cw-weather{\n    border: solid blue;\n    font-size: 1.5rem;\n    padding: 1rem;\n    margin-top: 1rem;\n}\n.cw-icon img{\n    border: solid black;\n    flex: 1;\n    width: 250px;\n}\n.cw-min-max{\n    border: solid yellow;\n    padding: 1rem;\n    margin-top: 1rem;\n}\n\n.additional-info{\n    border: solid orange;\n    flex: 1;\n}\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=r(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var r=h[n]={id:n,exports:{}};return m[n](r,r.exports,v),r.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(72),e=v.n(n),r=v(825),t=v.n(r),o=v(659),a=v.n(o),i=v(56),c=v.n(i),s=v(540),d=v.n(s),l=v(113),u=v.n(l),p=v(208),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),e()(p.A,f),p.A&&p.A.locals&&p.A.locals,document.querySelector(".input").addEventListener("keypress",(async function(n){if("Enter"===n.key){const n=document.querySelector(".input").value;try{e=await(r=n,new Promise(((n,e)=>{fetch(`http://api.weatherapi.com/v1/forecast.json?key=7fe00839801248baa93112333240105&q=${r}&days=3&aqi=yes&alerts=yes`,{mode:"cors"}).then((r=>{if(!r.ok)return e("Invalid location");n(r.json())})).then((e=>n(e))).catch((n=>e(n)))}))),console.log(e),e.forecast.forecastday.forEach((n=>{console.log(n.date)}))}catch(n){console.log(`ERROR: ${n}`)}}var e,r}))})();