(this["webpackJsonpdpischalka.github.io"]=this["webpackJsonpdpischalka.github.io"]||[]).push([[0],{12:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),o=n.n(i),r=(n(17),n(18),n(19),n(11)),s=n(3),l=n(2),m=n(4),d=n(10),u=(n(20),n(9));n(26);var h,f,E=function(e){var t=e.className,n=e.title,a=e.icon,i=e.href,o=e.iconSize,r=void 0===o?"3x":o,s=c.a.createElement(u.a,{className:"contact-item-icon",icon:a,size:r}),l=c.a.createElement("a",{className:"contact-item contact-item-link ".concat(t),rel:"noopener noreferrer",target:"_blank",href:i,title:i},c.a.createElement("span",{className:"contact-item-icon"},s),c.a.createElement("span",{className:"contact-item-title"},n)),m=c.a.createElement("div",{className:"contact-item ".concat(t),title:n},c.a.createElement("span",{className:"contact-item-icon"},s),c.a.createElement("span",{className:"contact-item-title"},n));return i?l:m};!function(e){e.TABLET="TABLET",e.DESKTOP="DESKTOP",e.WIDESCREEN="WIDESCREEN",e.FULLHD="FULLHD"}(f||(f={}));var p,v=(h={},Object(l.a)(h,f.TABLET,769),Object(l.a)(h,f.DESKTOP,1024),Object(l.a)(h,f.WIDESCREEN,1216),Object(l.a)(h,f.FULLHD,1408),h);var b=(p={},Object(l.a)(p,f.TABLET,"3x"),Object(l.a)(p,f.DESKTOP,"3x"),Object(l.a)(p,f.FULLHD,"3x"),Object(l.a)(p,f.WIDESCREEN,"3x"),p),w=[{title:"dpischalka@gmail.com",icon:d.a,className:"mail"},{title:"dpischalka",icon:m.d,href:"https://twitter.com/dpischalka",className:"twitter"},{title:"dpischalka",icon:m.a,href:"https://github.com/dpischalka",className:"github"},{title:"dpischalka",icon:m.b,href:"https://www.linkedin.com/in/dpischalka/",className:"linkedIn"},{title:"dpischalka",icon:m.c,href:"https://medium.com/@dpischalka/",className:"medium"}];function g(e,t){var n,a=null!==(n=function(e){var t=v[f.TABLET],n=v[f.DESKTOP],a=v[f.WIDESCREEN],c=v[f.FULLHD];switch(!0){case e<t:return f.TABLET;case e>=t&&e<=n:return f.DESKTOP;case e>=n&&e<=a:return f.WIDESCREEN;case e>=a&&e<=c:case e>=c:return f.FULLHD;default:return null}}(window.innerWidth))&&void 0!==n?n:null;a&&t(w.filter((function(e){var t=e.icon,n=e.title;return Boolean(t&&n)})).map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{className:"column media-link-item-".concat(t," ").concat(e.className),iconSize:b[a]})})))}var N=function e(){var t=Object(a.useState)(w),n=Object(r.a)(t,2),i=n[0],o=n[1],l=i.filter((function(e){var t=e.icon,n=e.title;return Boolean(t&&n)})).map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{className:"column media-link-item-".concat(t," ").concat(e.className)})}));return Object(a.useEffect)((function(){window.addEventListener("resize",g.bind(e,i,o)),window.addEventListener("load",g.bind(e,i,o))}),[i]),c.a.createElement("div",{className:"media-links-container columns is-mobile is-gapless"},l.map((function(e,t){return c.a.createElement(E,Object.assign({key:t},e))})))};var k=function(){return c.a.createElement("main",{className:"content-part container"},c.a.createElement("div",{className:"is-hidden-mobile flex-centred-horizontal"},c.a.createElement("h1",{className:"is-size-1 content-part-title has-text-centered"},"Dmitry Pischalka")),c.a.createElement("div",{className:"is-flex-mobile hidden flex-centred-horizontal"},c.a.createElement("h1",{className:"is-size-2 content-part-title has-text-centered"},"Dmitry Pischalka")),c.a.createElement("div",{className:"content-description has-text-centered"},"Senior Front-End Developer, geek, blogger."),c.a.createElement("div",{className:"content-temporary-notification has-text-centered"},"Coming soon for blog, additional info, other..."),c.a.createElement(N,null))};var O=function(){return c.a.createElement("div",{className:"app-component has-text-centered container"},c.a.createElement(k,null))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.d80a547b.chunk.js.map