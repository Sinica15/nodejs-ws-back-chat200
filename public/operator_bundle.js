!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=11)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),c=null,l=0,p=[],u=t(4);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);e>=0&&p.splice(e,1)}function x(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return m(e,n.attrs),h(n,e),e}function m(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=x(e)),r=y.bind(null,t,a,!1),o=y.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=x(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){g(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(f(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,w=(b=[],function(n,e){return b[n]=e,b.filter(Boolean).join("\n")});function y(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 98.8%;\n    font-weight: 400;\n}\nbody {\n    height: 100vh;\n}\n.operator-dashbord{\n    padding: 6px 5px 5px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    height: 100%;\n    width: 100%;\n}\n.user-form{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n/*=====*/\n.user-panel{\n    height: calc(100% - 260px);\n    width: 155px;\n}\n.user-panel h3{\n    text-align: center;\n}\n.user-panel input{\n    width: 145px;\n    margin: 5px;\n}\n.user-panel select{\n    width: 100px;\n    margin: 0 5px 5px;\n}\n.user-panel button{\n    /*width: 20px;*/\n    padding: 0 5px;\n}\n.user-panel > div:last-child{\n    height: 85%;\n    width: 150px;\n    margin: 0 5px 5px;\n    border: #00000052 solid 1px;\n    border-radius: 2px;\n    overflow: auto;\n}\n.user-panel li{\n    border-bottom: #00000052 solid 1px;\n    padding: 2px;\n}\n.client-busy-block, .operator-block{\n    cursor: not-allowed;\n}\n.user-panel li.client-block{\n    cursor: pointer;\n}\n.client-block{\n    transition: 0.4s;\n}\n.client-block:hover{\n    background-color: #e0e0e0;\n    transition: 0.4s;\n}\n.personcl{\n    position: relative;\n    height: 35px;\n}\n.pers-uuid{\n    position: absolute;\n    right: 0px;\n    bottom: 3px;\n    width: 44px;\n    height: 11px;\n    overflow: hidden;\n    font-size: 75%;\n}\n.pers-status{\n    position: absolute;\n    left: 2px;\n    bottom: 1px;\n}\n.pers-regtime{\n    position: absolute;\n    right: 2px;\n    top: 1px;\n}\n.pers-nick{\n    position: absolute;\n    top: 1px;\n    left: 2px;\n}\n.pers-unread{\n    position: absolute;\n    top: 1px;\n    left: calc(43% - 4px);\n    background-color: #adbdecb5;\n    width: 10px;\n    text-align: center;\n    border-radius: 2px;\n\n}",""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var r=t(6);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'.form-container, .user-panel{\n    /*width: 70%;*/\n}\n.form-container{\n    width: 160px;\n    padding: 0 5px;\n}\n.form-container label{\n    display: inline-block;\n    /*text-align: center;*/\n    width: 130px;\n}\n.form-container label[for="position"]{\n    width: 97px;\n}\n.form-container > form > div{\n    padding: 3px;\n}\n.form-container input[type="text"]{\n    width: 145px;\n}\n.send-btn-config{\n    padding: 2px 36px;\n}',""])},function(n,e,t){var r=t(8);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".chat-controls{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    /*flex-wrap: wrap;*/\n    /*width: 120%;*/\n}\n.active-user{\n    text-align: center;\n    width: 100%;\n    /*height: 20px;*/\n}\n.user-chat,.control-window{\n    height: calc(100% - 6px);\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n}\n.control-window > div:last-child{\n    height: 100%;\n    /*width: 150px;*/\n    margin: 0 5px 5px;\n    border: #00000052 solid 1px;\n    border-radius: 2px;\n}\n.command-win{\n    text-align: center;\n    margin: 0 5px 5px;\n}\n.command-win select {\n    padding: 2px 0;\n    box-sizing: content-box;\n    /*height: 18px;*/\n    margin: 1px;\n}\n.command-win > span:last-of-type button {\n    margin: 1px;\n    padding: 2px;\n}\n.userchat-controlwindow{\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n}\n.chat-input{\n    border-radius: 2px;\n    padding: 5px;\n    margin: 5px;\n    resize: none;\n}\n.user-chat > button{\n    margin: 5px;\n    padding: 2px 0;\n}\n.commands-log{\n    overflow: auto;\n}",""])},function(n,e,t){var r=t(10);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'.chat-window {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: 100%;\n    margin: 0 5px 5px;\n    border: #00000052 solid 1px;\n    border-radius: 2px;\n    overflow: auto;\n    padding-top: 5px\n}\n\n.chat-window > div {\n    padding-left: 25px;\n    margin: 0 0 10px;\n    position: relative;\n}\n.chat-window > div:before {\n    content: "";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    left: 8px;\n    top: 4px;\n    border-radius: 2px;\n    background-color: #b6ffa5;\n\n}\n.chat-window > div.sender-Operator:before{\n    background-color: brown;\n}\n.sender-datetime > .sender {\n    font-weight: 500;\n}\n.sender-datetime > .datetime {\n    color: hsla(220,8%,51%,.6);\n}\n.chat-window > div p:last-of-type{\n    max-width: 350px;\n}\n',""])},function(n,e,t){"use strict";t.r(e);t(2),t(5),t(7),t(9);let r=n=>document.getElementById(n);function o(n){function e(n){return parseInt(n)<10?"0"+n:n}let t=new Date(n),r="";return r+=e(t.getHours())+":",r+=e(t.getMinutes())+" ",t.getDay()==(new Date).getDay()&&t.getMonth()==(new Date).getMonth()&&t.getFullYear()==(new Date).getFullYear()?r:(r+=e(t.getDate())+".",r+=e(t.getMonth()))}let i={};let a={};function s(n){let e=a=JSON.parse(n);!function(n){let e="";n.clients.forEach(n=>e+=l(n,!1)),n.operators.forEach(n=>e+=l(n,!0)),r("userlist").innerHTML=e}(e),function(n){if(void 0===i)return;let e=[],t=0;n.clients.some(n=>{if(n.uuid==i.uuid)return e=n.messageHistory,t=n.unreadMsgs,0});let o="";e.forEach(n=>o+=c(n)),r("chat-window").innerHTML=o}(e)}function c(n){return`<div class="sender-${n.fromWho}">`+'<p class="sender-datetime">'+`<span class="sender">${n.fromWho}</span> `+`<span class="datetime">${o(n.date)}</span>`+"</p>"+`<p>${n.message}</p>`+"</div>"}function l(n,e){let t=0==n.unreadMsgs?"":`<span id="pers-unread" class="pers-unread">${n.unreadMsgs}</span> `;t=void 0===n.unreadMsgs?"":t;let r="client-block";return e&&(r="operator-block"),e||"in conversation"!=n.currentStaus||(r="client-busy-block"),`<li class="${r} personcl">`+`<span  class="pers-nick">${n.nick}</span> `+`<span  class="pers-regtime">${o(n.connctionTime)}</span>`+`<span  class="pers-status">${n.currentStaus}</span> `+`<span  class="pers-uuid">${n.uuid}</span>`+t+"</li>"}function p(n){n.hasOwnProperty("action")?function(n){switch(n.action){case"getClientsList":s(n.message);break;case"":break;default:console.log(`wrong action: ${n.action}`)}}(n):function(n){r("chat-window").insertAdjacentHTML("afterbegin",c(n))}(n)}let u=function(){let n=1;9e3==location.port&&(n=5);const e=+location.port+n;let t=new WebSocket("ws://"+location.hostname+":"+e+"/chat");return console.log("connected"),t.onopen=()=>{d("registration","operator")},t.onmessage=n=>p(JSON.parse(n.data)),t.onclose=()=>console.log("WebSocket connection closed"),t}();function d(n,e){u.send(JSON.stringify({msgType:"service",action:n,message:e}))}function f(n){u.send(JSON.stringify({message:n}))}r("send-btn").addEventListener("click",function(){!function(n){const e="http://"+location.hostname+":"+location.port+"/setconfig";console.log(n);let t=new XMLHttpRequest;t.open("POST",e,!0),t.setRequestHeader("Content-type","application/json;charset=utf-8"),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&console.log(t.responseText)},t.send(n)}({chat_title:r("chat-title").value,bot_name:r("bot-name").value,position:r("position").value,allow_to_minimize:r("allow-to-minimize").checked,allow_drag:r("allow-drag").checked,require_name:r("require-name").checked,show_data_time:r("show-data-time").checked})}),r("userlist").addEventListener("click",n=>{let e=void 0,t=void 0,o=void 0;n.path.some(n=>{if("li"==n.localName)return i.uuid=e=n.children[3].innerText,i.person=t=n.children[0].innerText,i.status=o=n.children[2].innerText,0}),"Client"==t&&"free"==o&&(d("client connectClient",e),r("active-user").innerText=`${t} ${e}`)}),function(){let n=document.querySelector(".user-chat .chat-input");n.addEventListener("keypress",function(e){if(13===e.keyCode&&""!=n.value.trim())return f(n.value.trim()),n.value="",e.preventDefault&&e.preventDefault(),!1}),r("chat-send").addEventListener("click",()=>{""!=n.value.trim()&&(f(n.value.trim()),n.value="")})}(),r("param-btns").addEventListener("click",n=>{"button"==n.path[0].localName&&void 0!==i.uuid&&(console.log("sending",i.uuid,n.path[0].innerText),d(n.path[0].innerText,i.uuid))})}]);