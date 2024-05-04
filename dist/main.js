(()=>{"use strict";var n,e,i,o,r,t,a,c,d,s,l,u,f,p,m={208:(n,e,i)=>{i.d(e,{A:()=>c});var o=i(601),r=i.n(o),t=i(314),a=i.n(t)()(r());a.push([n.id,"html {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\nbody {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    margin: 0; \n    padding: 0;\n}\n.main-container{\n    border: solid black ;\n    width: 70vw;\n    right: auto;\n}\n\n/*-----------------------------------------------------*/\n\n.search-bar{\n    margin-top: 1rem;\n    width: 100%;\n    display: flex;\n    padding: 0.7rem 2rem;\n    border-radius: 2rem;\n    background-color: antiquewhite;\n    border: solid black;\n}\n\n.input{\n    width: 100%;\n    font-size: 1.3rem;\n    padding: .6rem 2rem;\n    border: none;\n    background: transparent;\n}\n.input:focus {\n    outline: none; /* Remove focus outline */\n    border-color: transparent; /* Make border transparent on focus */\n}\n\n/*-------------------------------------------------------------------*/\n.current-info-container{\n    border: solid red;\n    height: 60%;\n    margin-top: 1rem;\n    display: flex;\n}\n.main-info{\n    border: solid blue;\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.current-info{\n    border: solid yellow 3px;\n    min-height: 300px;\n    min-width: 400px;\n    display: flex;\n    padding-top: 1rem;\n}\n.cw-info{\n    border: solid brown;\n    flex: 1;  \n    display: flex;\n    flex-direction: column;\n}\n.cw-temp{\n    font-size: 6rem;\n}\n.cw-weather{\n    border: solid;\n    font-size: 1.5rem;\n    padding-left: 0.9rem;\n    font-style: italic;\n}\n.cw-icon-container{\n    border: dotted;\n}\n.cw-icon-container img{\n    border: solid black;\n    flex: 1;\n    width: 200px;\n    height: 200px;\n}\n.cw-min-max{\n    border: solid yellow;\n    padding: 1rem 0;\n    display: flex;\n}\n.cw-min,\n.cw-max{\n    border: solid red;\n    display: flex;\n    padding: 0 0.5rem 0 0;\n}\n.cw-min-icon,\n.cw-max-icon{\n    border: solid blue;\n    width: 50px;\n}\n.cw-max-info-heading,\n.cw-min-info-heading{\n    border: solid;\n}\n.cw-min-info-heading,\n.cw-max-info-heading{\n    font-size: 1.1rem;\n    padding: 0.5rem 0.5rem 0 0.5rem;\n    font-style: italic;\n}\n.cw-min-info-temp,\n.cw-max-info-temp{\n    border: solid;\n    padding: 0.5rem 0.5rem 0 0.5rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n\n\n/*--------------------------------------------------*/\n\n.additional-info {\n    border: solid blue 3px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.additional-info > div {\n    width: calc(25% - 20px); /* 25% width for 4 divs in a row, minus margin */\n    margin: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    text-align: center;\n    border: solid;\n}\n\n.additional-info img {\n    width: 50px; /* Adjust the width of the icons as needed */\n    height: auto;\n    border: solid;\n}\n\n.additional-info .ai-cor-info-container,\n.additional-info .ai-w-info-container,\n.additional-info .ai-sr-info-container,\n.additional-info .ai-ss-info-container,\n.additional-info .ai-uv-info-container,\n.additional-info .ai-p-info-container,\n.additional-info .ai-h-info-container,\n.additional-info .ai-g-info-container {\n    margin-top: 5px; /* Adjust the spacing between icon and info */\n    border: solid;\n}\n.ai-cor-info-heading,\n.ai-w-info-heading,\n.ai-sr-info-heading,\n.ai-ss-info-heading,\n.ai-uv-info-heading,\n.ai-p-info-heading,\n.ai-h-info-heading,\n.ai-g-info-heading{\n    border: solid;\n    padding: 0.5rem 0;\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",o=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),o&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),o&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,o,r,t){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==t&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=t),i&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=i):l[2]=i),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function i(n){for(var i=-1,o=0;o<e.length;o++)if(e[o].identifier===n){i=o;break}return i}function o(n,o){for(var t={},a=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var f=i(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,r){var t=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<t.length;a++){var c=i(t[a]);e[c].references--}for(var d=o(n,r),s=0;s<t.length;s++){var l=i(t[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}t=d}}},659:n=>{var e={};n.exports=function(n,i){var o=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,i)=>{n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,r&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var t=i.sourceMap;t&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function y(n){var e=h[n];if(void 0!==e)return e.exports;var i=h[n]={id:n,exports:{}};return m[n](i,i.exports,y),i.exports}y.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return y.d(e,{a:e}),e},y.d=(n,e)=>{for(var i in e)y.o(e,i)&&!y.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},y.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),y.nc=void 0,n=y(72),e=y.n(n),i=y(825),o=y.n(i),r=y(659),t=y.n(r),a=y(56),c=y.n(a),d=y(540),s=y.n(d),l=y(113),u=y.n(l),f=y(208),(p={}).styleTagTransform=u(),p.setAttributes=c(),p.insert=t().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=s(),e()(f.A,p),f.A&&f.A.locals&&f.A.locals,document.querySelector(".input").addEventListener("keypress",(async function(n){if("Enter"===n.key){const n=document.querySelector(".input").value;try{const i=await(e=n,new Promise(((n,i)=>{fetch(`http://api.weatherapi.com/v1/forecast.json?key=7fe00839801248baa93112333240105&q=${e}&days=3&aqi=yes&alerts=yes`,{mode:"cors"}).then((e=>{if(!e.ok)return i("Invalid location");n(e.json())})).then((e=>n(e))).catch((n=>i(n)))})));!function(n){console.log(n);const e=n.current.temp_c,i=n.current.condition.text,o=Math.floor(n.forecast.forecastday[0].day.mintemp_c),r=Math.floor(n.forecast.forecastday[0].day.maxtemp_c),t=n.current.condition.code,a=n.current.is_day;document.querySelector(".cw-icon").setAttribute("src",`/src/images/weather/${t}-${a}.svg`),document.querySelector(".cw-temp").innerHTML=`${e}<sup>o</sup>C`,document.querySelector(".cw-weather").innerHTML=`${i}`,document.querySelector(".cw-min-info-temp").innerHTML=`${o}<sup>o</sup>C`,document.querySelector(".cw-max-info-temp").innerHTML=`${r}<sup>o</sup>C`}(i),function(n){const{current:e,forecast:i,location:o}=n,{forecastday:r}=i,[t]=r,{wind_kph:a,uv:c,pressure_in:d,humidity:s,gust_kph:l,condition:u,is_day:f}=e,{code:p}=u,{astro:m}=t,{sunset:h,sunrise:y}=m;document.querySelector(".ai-cor-info").innerHTML=t.day.daily_chance_of_rain,document.querySelector(".ai-w-info").innerHTML=a,document.querySelector(".ai-sr-info").innerHTML=y,document.querySelector(".ai-ss-info").innerHTML=h,document.querySelector(".ai-uv-info").innerHTML=c,document.querySelector(".ai-p-info").innerHTML=d,document.querySelector(".ai-h-info").innerHTML=s,document.querySelector(".ai-g-info").innerHTML=l}(i)}catch(n){console.log(`ERROR: ${n}`)}}var e}))})();