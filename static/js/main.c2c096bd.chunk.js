(this["webpackJsonpnasa-api"]=this["webpackJsonpnasa-api"]||[]).push([[0],{15:function(e,a,t){e.exports=t(31)},20:function(e,a,t){},22:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),o=t.n(r),s=(t(20),t(4)),l=t.n(s),i=t(11),m=t(14),u="72VeDTbYQjwGOvfk1mQyYUt31D6ddNYPgYdjyDpo";function p(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(u));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?c.a.createElement("div",{className:"apod-container"},c.a.createElement("div",{className:"nasa-photo nasa-item"},c.a.createElement("h1",{className:"title"},"Astronomy Picture of the Day"),c.a.createElement("img",{src:t.url,alt:t.title,className:"photo"})),c.a.createElement("div",{className:"nasa-data nasa-item"},c.a.createElement("h1",{className:"title"},t.title),c.a.createElement("p",{className:"date"},t.date),c.a.createElement("p",{className:"author"},t.copyright),c.a.createElement("p",{className:"explanation"},t.explanation))):c.a.createElement("div",null)}t(22);var h=t(13);function d(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"home"},c.a.createElement(p,null)))}t(23).config();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c2c096bd.chunk.js.map