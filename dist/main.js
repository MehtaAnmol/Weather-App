(()=>{"use strict";var n,e,t,r,o,i,a,c,s,d,l,u,p,f,m={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"html {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\nbody {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    margin: 0; \n    padding: 0;\n}\n.main-container{\n    border: solid black ;\n    width: 70vw;\n    right: auto;\n}\n\n/*-----------------------------------------------------*/\n\n.search-bar{\n    margin-top: 1rem;\n    width: 100%;\n    display: flex;\n    padding: 0.7rem 2rem;\n    border-radius: 2rem;\n    background-color: antiquewhite;\n    border: solid black;\n}\n\n.input{\n    width: 100%;\n    font-size: 1.3rem;\n    padding: .6rem 2rem;\n    border: none;\n    background: transparent;\n}\n.input:focus {\n    outline: none; /* Remove focus outline */\n    border-color: transparent; /* Make border transparent on focus */\n}\n\n/*-------------------------------------------------------------------*/\n.current-info-container{\n    border: solid red;\n    height: 60%;\n    margin-top: 1rem;\n    display: flex;\n}\n.main-info{\n    border: solid blue;\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.current-info{\n    border: solid yellow 3px;\n    min-height: 300px;\n    min-width: 400px;\n    display: flex;\n    padding-top: 1rem;\n}\n.cw-info{\n    border: solid brown;\n    flex: 1;  \n    display: flex;\n    flex-direction: column;\n}\n.cw-temp{\n    font-size: 6rem;\n}\n.cw-weather{\n    border: solid;\n    font-size: 1.5rem;\n    padding-left: 0.9rem;\n    font-style: italic;\n}\n.cw-icon-container{\n    border: dotted;\n}\n.cw-icon-container img{\n    border: solid black;\n    flex: 1;\n    width: 200px;\n    height: 200px;\n}\n.cw-min-max{\n    border: solid yellow;\n    padding: 1rem;\n    display: flex;\n}\n.cw-min,\n.cw-max{\n    border: solid red;\n    display: flex;\n    padding: 0.5rem;\n}\n.cw-min-icon,\n.cw-max-icon{\n    border: solid blue;\n    width: 50px;\n}\n.cw-max-info-heading,\n.cw-min-info-heading{\n    border: solid;\n}\n.cw-min-info-heading,\n.cw-max-info-heading{\n    font-size: 1.2rem;\n    padding: 0.5rem 0.5rem 0 0.5rem;\n    font-style: italic;\n}\n.cw-min-info-temp,\n.cw-max-info-temp{\n    border: solid;\n    padding: 0.5rem 0.5rem 0 0.5rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.additional-info{\n    border: solid orange;\n    flex: 1;\n}\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function y(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,y),t.exports}y.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return y.d(e,{a:e}),e},y.d=(n,e)=>{for(var t in e)y.o(e,t)&&!y.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},y.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),y.nc=void 0,n=y(72),e=y.n(n),t=y(825),r=y.n(t),o=y(659),i=y.n(o),a=y(56),c=y.n(a),s=y(540),d=y.n(s),l=y(113),u=y.n(l),p=y(208),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.A,f),p.A&&p.A.locals&&p.A.locals,document.querySelector(".input").addEventListener("keypress",(async function(n){if("Enter"===n.key){const n=document.querySelector(".input").value;try{!function(n){console.log(n);const e=n.current.temp_c,t=n.current.condition.text,r=n.forecast.forecastday[0].day.mintemp_c,o=n.forecast.forecastday[0].day.maxtemp_c,i=n.current.condition.code,a=n.current.is_day;document.querySelector(".cw-icon").setAttribute("src",`/src/images/weather/${i}-${a}.svg`),document.querySelector(".cw-temp").innerHTML=`${e}<sup>o</sup>C`,document.querySelector(".cw-weather").innerHTML=`${t}`,document.querySelector(".cw-min-info-temp").innerHTML=`${r}<sup>o</sup>C`,document.querySelector(".cw-max-info-temp").innerHTML=`${o}<sup>o</sup>C`}(await(e=n,new Promise(((n,t)=>{fetch(`http://api.weatherapi.com/v1/forecast.json?key=7fe00839801248baa93112333240105&q=${e}&days=3&aqi=yes&alerts=yes`,{mode:"cors"}).then((e=>{if(!e.ok)return t("Invalid location");n(e.json())})).then((e=>n(e))).catch((n=>t(n)))}))))}catch(n){console.log(`ERROR: ${n}`)}}var e})),document.querySelector(".cw-temp")})();