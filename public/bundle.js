!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),c=null,l=0,p=[],d=e(4);function u(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(v(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function f(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):e.push(o[s]={id:s,parts:[a]})}return e}function m(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),p.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertAt.before,e);e.insertBefore(t,r)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=p.indexOf(n);t>=0&&p.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return b(t,n.attrs),m(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var s=l++;e=c||(c=h(t)),o=w.bind(null,e,s,!1),r=w.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),m(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,t),r=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){g(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return u(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var s=e[r];(a=i[s.id]).refs--,o.push(a)}n&&u(f(n,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var y,x=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}},function(n,t,e){var o=e(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"* {\n\tbox-sizing: border-box;\n\tfont: 14px monospace;\n}\n\nbody {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.chat-main-container {\n\tposition: fixed;\n\twidth: 400px;\n}\n\n.chat-body-container {\n\twidth: 400px;\n\theight: 600px;\n\tmargin: 0 auto;\n\t/*padding: 40px 20px;*/\n\tborder: 1px solid #b7b7b7;\n\toverflow: hidden;\n\ttransition: 1s;\n}\n\n.common-button {\n    vertical-align: middle;\n\tpadding: 4px;\n\tbackground-color: #b6ffa5;\n\ttext-align: center;\n\tborder-radius: 2px;\n\tborder: 1px solid #0000003d;\n\tcursor: pointer;\n\ttransition: 1s;\n}\n\n.common-button:hover {\n\tbackground-color: #7ff563;\n\ttransition: 1s;\n}\n\n.def_input {\n\twidth: 100%;\n\tpadding: 5px;\n\tmargin-bottom: 10px;\n}\n\n.msgType-area {\n\theight: 82px;\n\tborder-top: 1px solid #b7b7b7;\n\tpadding: 5px;\n\tbackground-color: #fff;\n\t/*position: absolute;*/\n\t/*z-index: 10;*/\n}\n\n#message_buttons_container {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n}\n\n@keyframes enter {\n\tfrom {\n\t\ttransform: none;\n\t}\n\t50% {\n\t\ttransform: scale(1.05);\n\t}\n\tto {\n\t\ttransform: none;\n\t}\n}\n",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var o=e(6);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"#form_back {\n\t/*  */\n\tdisplay: none;\n\t/*  */\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #e6ffe0;\n\tz-index: 10;\n}\n\n#register_form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: fixed;\n\ttop: 40%;\n\tleft: calc(50% - 250px / 2);\n\twidth: 250px;\n}\n\n#register_form span {\n\ttext-align: left;\n\tpadding-left: 85px;\n}\n\n#register_form span * {\n\tdisplay: inline;\n}\n\n#register_form span input {\n\twidth: 13px;\n}\n\n.bottom-button {\n\tdisplay: inline-block;\n\tmargin-left: 6px;\n}\n",""])},function(n,t,e){var o=e(8);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".chat{\n    display: flex;\n    flex-direction: column-reverse;\n    height: 83%;\n    overflow: auto;\n    padding: 0 6px;\n    padding-top: 5px;\n    padding-bottom: 7px;\n}\n\n.chat article{\n    margin: 10px 0;\n    position: relative;\n}\n\n.chat p {\n    margin: 3px;\n    font-weight: 300\n}\n\n.chat p:hover + p{\n    transition: 0.3s;\n    opacity: 1;\n}\n\n.button-chat-probe{\n    height: 60px;\n}\n\n.chat article p:first-of-type{\n    border-radius: 5px;\n    max-width: 300px;\n    display: inline-block;\n    background: #eee;\n    padding: 10px;\n    margin: 0 0;\n    word-wrap: break-word;\n    position: relative;\n}\n\n.chat article.sender-article{\n    text-align: right;\n}\n\n.chat article .sender-datetime span{\n    font-size: 10px;\n}\n\n.chat article .sender-datetime{\n    position: absolute;\n    opacity: 0;\n    transition: 0.7s;\n    left: 10px;\n    /*display: none;*/\n}\n\n.chat article.sender-article .sender-datetime{\n    right: 10px;\n}\n\n.chat article p:first-of-type{\n    transition: 1s;\n}\n\n.chat article p:first-of-type:hover{\n    border-radius: 20px;\n    transition: 1s;\n}\n",""])},function(n,t,e){var o=e(10);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'\n:root{\n    --top-corner: 14px;\n}\n\n.top-controls{\n    height: calc(var(--top-corner) + 1px);\n    width: 100%;\n    border-bottom: 1px solid #b7b7b7;\n    display: flex;\n    flex-direction: row;\n}\n\n.userlist{\n    display: inline-block;\n    width: calc( 100% - var(--top-corner) );\n    transition: 1s;\n    border-right: 1px solid #b7b7b7;\n}\n\n.top-hide{\n    position: relative;\n    display: inline-block;\n    width: var(--top-corner);\n    height: 100%;\n    transition: 1s;\n}\n\n.top-hide:hover:before{\n    content: "";\n    position: absolute;\n    top: 6px;\n    left: 1px;\n    width: 12px;\n    height: 2px;\n    background-color: #848484;\n    transition: 1s;\n}\n',""])},function(n,t,e){"use strict";e.r(t);e(2),e(5),e(7),e(9);function o(n){let t=document.cookie.match("(^|;) ?"+n+"=([^;]*)(;|$)");return t?unescape(t[2]):null}function r(n,t,e){let o=(e=e||{}).expires;if("number"==typeof o&&o){var r=new Date;r.setTime(r.getTime()+1e3*o),o=e.expires=r}o&&o.toUTCString&&(e.expires=o.toUTCString());let i=n+"="+(t=encodeURIComponent(t));for(let n in e){i+="; "+n;let t=e[n];!0!==t&&(i+="="+t)}document.cookie=i,console.log("cook set")}var i=document.createElement("div");i.className="chat-main-container",i.id="chat_main",document.body.appendChild(i);let s=o("chatHeight");null==s&&(s="600px"),i.innerHTML='<div id="form_back">\n    <div id="register_form">\n        <input type="text" placeholder="Type your Name" id="userName">\n        <span>\n            <input type="radio" id="agent" name="userType">\n            <label for="agent">Agent</label>\n        </span>\n        <span>\n            <input type="radio" id="client" name="userType">\n            <label for="client">Client</label>\n        </span>\n        <div class="common-button" id="register_button">Register</div>\n    </div>\n</div>\n<div id="body_container" class="chat-body-container" style="height:'+s+'">\n    <div class="top-controls" id="top_controls">        <span id="userlist" class="userlist"></span>        <span class="top-hide" id="hide_window"></span>    </div>    <div id="chat" class="chat">\n        \x3c!-- Built by JS --\x3e\n    </div>\n    <div class="msgType-area">\n        <div class="chatControls">\n          <input id="message" class="def_input" placeholder="Type your message">\n          <div id="message_buttons_container">\n              <div class="bottom-button common-button" id="send_button">Send</div>\n          </div>\n        </div>\n    </div>\n</div>';let a=n=>document.getElementById(n);const c=+location.port+1;let l=new WebSocket("ws://"+location.hostname+":"+c+"/chat");function p(n,t){t=t||"message",""==n&&"message"==t||(console.log("sending"),l.send(JSON.stringify({message:n})),"message"==t&&(a("message").value="",d({message:n,fromWho:"sender",date:(new Date).toString()})))}function d(n){console.log(n),function(n){null==o("messages")&&(r("messages",JSON.stringify({msgs:[]})),console.log("messages",JSON.stringify({msgs:[]})));let t=JSON.parse(o("messages"));console.log(t),t.msgs.push(n),r("messages",JSON.stringify(t)),console.log("messages",JSON.stringify(t))}(n),function(n){console.log("rendering");let t=new Date(n.date),e=t.toLocaleDateString()+" "+t.toLocaleTimeString("ru"),o=`<article class="${n.fromWho+"-article"}">`+`<p>${n.message}</p>`+'<p class="sender-datetime">'+`<span class="sender">${n.fromWho} </span>`+`<span class="datetime">${e}</span>`+"</p></article>";a("chat").insertAdjacentHTML("afterbegin",o)}(n)}console.log("connected"),l.onopen=()=>{l.send(JSON.stringify({msgType:"service",action:"setConnectionType"}))},l.onmessage=n=>d(JSON.parse(n.data)),l.onclose=()=>console.log("WebSocket connection closed"),a("message").addEventListener("keypress",function(n){13===n.keyCode&&p(n.target.value)}),a("send_button").addEventListener("click",()=>p(a("message").value)),a("register_button").addEventListener("click",()=>{""==a("userName").value.trim()&&alert("Name field can't be empty")});let u=document.getElementById("top_controls"),f=document.getElementById("chat_main");u.onmousedown=function(n){let t=function(n){let t=n.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset}}(f),e=n.pageX-t.left,o=n.pageY-t.top;document.onmousemove=function(n){!function(n){f.style.left=n.pageX-e+"px",f.style.top=n.pageY-o+"px"}(n)},u.onmouseup=function(){document.onmousemove=null,u.onmouseup=null}},u.ondragstart=function(){return!1};let m=document.getElementById("hide_window"),g=document.getElementById("body_container");m.onclick=function(){"600px"==g.style.height?(g.style.height="16px",r("chatHeight","16px")):(g.style.height="600px",r("chatHeight","600px"))}}]);