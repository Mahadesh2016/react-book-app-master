(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(75)},47:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=a(15),u=a(5),m=a(36),p=a(13),d={books:[],menu:[],value:"",search:[],author:[],likes:[],add:[],description:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return Object(p.a)({},e,{books:t.data});case"GET_DESCRIPTION":return Object(p.a)({},e,{description:t.data});case"CLEAR_DESCRIPTION":return Object(p.a)({},e,{description:"Fetching description for this book..."});case"INPUT_CHANGE":console.log("Input",t);var a=e.books.filter(function(e){return-1!==e.best_book.title.toLowerCase().search(t.input.toLowerCase())});return Object(p.a)({},e,{search:a,value:t.input});case"CLEAR_CHANGE":return console.log("Clear",t),Object(p.a)({},e,{search:[],value:""});default:return e}},b=(a(47),a(6)),f=a(7),v=a(10),g=a(8),E=a(9),k=a(1),w=a(11),O=function(e){return r.a.createElement("div",{className:"cards"},e.booksList.map(function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("div",{className:"overlay"},r.a.createElement("img",{src:e.best_book.image_url,alt:""}),r.a.createElement("div",{className:"strip"},r.a.createElement("div",{className:"like-menu"}))),r.a.createElement(k.b,{to:"/"+e.best_book.id},r.a.createElement("h2",null,e.best_book.title)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("b",null,"Author:")," ",e.best_book.author.name),r.a.createElement("div",null,r.a.createElement("b",null,"Avg. Rating:")," ",e.average_rating))}))},N=a(25),y=a.n(N),j=a(26),_=a(27);function C(e){var t=(new DOMParser).parseFromString(e,"application/xml");if(!t.getElementsByTagName("parsererror").length)return Object(j.a)(Array,Object(_.a)(t.getElementsByTagName("work"))).map(function(e){return function e(t){var a=Object(j.a)(Array,Object(_.a)(t.children));var n={};a.forEach(function(t){t.children.length?n[t.nodeName]=e(t):n[t.nodeName]=t.innerHTML});return n}(e)});this.setState({error:"There was an error fetching results.",fetchingData:!1})}var T=void 0,A="kHZsEVYjvn6Hh865MHrrag",I=function(e){return function(t){var a="https://cors-anywhere.herokuapp.com/"+"https://www.goodreads.com/book/show/".concat(e,"?key=").concat(A);return y.a.get(a).then(function(e){return e.data}).then(function(e){return t({type:"GET_DESCRIPTION",data:function(e){var t=(new DOMParser).parseFromString(e,"application/xml"),a="";return t.getElementsByTagName("parsererror").length?this.setState({error:"There was an error fetching results."}):(a=(a=t.getElementsByTagName("description")[0].innerHTML).replace("<![CDATA[","").replace("]]>",""))||(a="No description found."),a}(e)})}).catch(function(e){T.setState({error:e.toString()})})}},L=function(e){function t(e){return Object(b.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement(k.b,{to:"/search"},r.a.createElement("i",{className:"fa fa-search fa-2x top-bar","aria-hidden":"true"})),r.a.createElement("h1",null,"Good Reads Library")),r.a.createElement("h2",{className:"cards-title"},"Favourite"),r.a.createElement(O,{booksList:this.props.booksList}))}}]),t}(n.Component);var S=Object(u.b)(function(){return{booksList:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).books}},function(e){return{fetchBooks:function(){e(function(e){var t="https://cors-anywhere.herokuapp.com/"+"https://www.goodreads.com/search/index.xml?key=".concat(A,"&q=").concat("programming languages");return y.a.get(t).then(function(e){return e.data}).then(function(t){return e({type:"FETCH_BOOKS",data:C(t)})})})}}})(L);var x=Object(u.b)(function(e){return console.log(e.value),{lists:e.search,value:e.value}})(function(e){return r.a.createElement("div",{className:"search-list"},e.value&&e.lists.map(function(e,t){return r.a.createElement(k.b,{className:"item",key:t,to:"/"+e.best_book.id},r.a.createElement("div",{className:"item-title"},e.best_book.title),r.a.createElement("div",{className:"item-author"},e.best_book.author.name))}))}),D=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).ismounted=!1,a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.clearInput()}},{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement(k.b,{to:"/"},r.a.createElement("i",{className:"fa fa-times fa-2x top-bar","aria-hidden":"true"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"input",value:this.props.input,onChange:this.props.handleInput})),r.a.createElement(x,null))}}]),t}(n.Component);var R=Object(u.b)(function(e){return this.ismounted?(this.ismounted=!1,{input:""}):{input:e.input}},function(e){return{handleInput:function(t){e({type:"INPUT_CHANGE",input:t.target.value})},clearInput:function(t){e({type:"CLEAR_CHANGE",input:""})}}})(D),H=function(e){function t(e){return Object(b.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.getDescription()}},{key:"render",value:function(){return this.props.book?r.a.createElement("div",{className:"div","data-sal":"zoom-out","data-sal-delay":"500","data-sal-duration":"1200","data-sal-easing":"ease-out-bounce"},r.a.createElement(k.b,{to:"/search"},r.a.createElement("i",{className:"fa fa-search fa-2x top-bar","aria-hidden":"true"})),r.a.createElement("div",{className:"single-card"},r.a.createElement("div",{className:"book"},r.a.createElement("img",{src:this.props.book.best_book.image_url,alt:""}),r.a.createElement("div",{class:"rating"},r.a.createElement("b",null,"Avg. Rating:")," ",this.props.book.average_rating)),r.a.createElement("div",{className:"book-text"},r.a.createElement("h1",null," ",this.props.book.best_book.title),r.a.createElement("div",{className:"col-lg-10 col-sm-8 innercontainer"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.description}})),r.a.createElement("div",null,r.a.createElement("p",null,"Published Date:"," ","".concat(this.props.book.original_publication_day,"/").concat(this.props.book.original_publication_month,"/").concat(this.props.book.original_publication_year),"."," ",r.a.createElement("a",{href:"https://www.goodreads.com/book/show/".concat(this.props.book.best_book.id)},"Learn More"))),r.a.createElement(k.b,{to:"/",className:"btn-back"},"Go back")))):r.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"})}}]),t}(n.Component),P=Object(u.b)(function(e,t){var a=t.match.params.item_slug;return{book:e.books.find(function(e){return e.best_book.id===a}),description:e.description}},function(e,t){var a=t.match.params.item_slug;return{getDescription:function(){e({type:"CLEAR_DESCRIPTION",payload:""}),e(I(a))}}})(H),B=function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",exact:!0,component:S}),r.a.createElement(w.a,{path:"/search",exact:!0,component:R}),r.a.createElement(w.a,{path:"/:item_slug",exact:!0,component:P}))))}}]),t}(n.Component),M=Object(l.c)(h,Object(l.a)(m.a));c.a.render(r.a.createElement(u.a,{store:M},r.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-book-app-master",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-book-app-master","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[38,2,1]]]);
//# sourceMappingURL=main.f83579b3.chunk.js.map