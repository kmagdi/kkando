(this.webpackJsonpkkando=this.webpackJsonpkkando||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/T2.ace9699f.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/SZ3.caa4ac49.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/G1.9c6eaf72.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/eszt2.1ea094f5.jpg"},104:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=a(9),i=a(5),m=a(16),s=a(26),u=a(31),d=a(30);var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:";",a=e.slice(0,e.indexOf("\n")).split(t),n=e.slice(e.indexOf("\n")+1).split("\n");return n.map((function(e){var n=e.split(t);return a.reduce((function(e,t,a){return e[t]=n[a],e}),{})}))},E=a(29),k=a(47),f=a.n(k),g=(a(65),function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{onClick:function(){c(!r)},className:"react-card-flip-container"},l.a.createElement(f.a,{isFlipped:r,flipDirection:"horizontal",infinite:"true"},l.a.createElement("div",null,e.tema),l.a.createElement("div",null,e.adatok[e.id])))}),h=a(21),v=function(e){var t=Object(h.useController)().parallaxController;window.addEventListener("resize",(function(){t.update()}));var a=l.a.createElement(h.ParallaxBanner,{className:"parallax-panel "+e.className,layers:[{image:e.img,amount:void 0===e.amount?.15:e.amount}],style:{height:e.height}},l.a.createElement(l.a.Fragment,null,e.children));return void 0===e.div?l.a.createElement(l.a.Fragment,null,a):l.a.createElement("div",{id:e.div},a)},b=function(e){var t=void 0!==e.image,n=void 0!==e.title;return l.a.createElement(v,{div:"top-banner-container",img:a(85),amount:.15,height:"100vh"},l.a.createElement("div",{className:"kozep"},t?l.a.createElement("img",{src:e.image,id:"welcome-image-logo",alt:"logo",className:"fade-in-img"}):null,n?t?l.a.createElement("p",{id:"welcome-text",className:"fade-in-p"},e.title):l.a.createElement("h1",{id:"welcome-title",className:"fade-in-h"},e.title):null))},z=(a(86),a(48)),x=a.n(z),j=a(49),y=a.n(j),N=function(){return l.a.createElement(x.a,{src:[y.a],playing:!0})},w=a(57),O=function e(){Object(m.a)(this,e)};O.scrollToTop=function(){document.getElementsByTagName("html")[0].setAttribute("smooth","false"),document.body.scrollTop=0,document.documentElement.scrollTop=0,document.getElementsByTagName("html")[0].setAttribute("smooth","true")};var S=function(e){return O.scrollToTop(),l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{onBeforeunload:function(e){e.preventDefault(),e.returnValue=""}},l.a.createElement(b,{title:e.adatok.leiras}),l.a.createElement("div",{className:"col"},l.a.createElement(N,null),Object.keys(e.temaKorok).filter((function(t){return e.temaKorok[t].length>5})).map((function(t,a){return l.a.createElement(g,{key:t,tema:e.temaKorok[t],id:t,adatok:e.adatok})}))),l.a.createElement("div",{className:"col",style:{padding:"0"}},e.fotok.map((function(e,t){return l.a.createElement("img",{key:e,src:e,alt:"foto",style:{maxWidth:"100vw"}})})))))},T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this)).state={temaKorok:[],adatok:{},fotok:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv").then((function(e){return e.text()})).then((function(t){var a=p(t,";"),n=a.filter((function(t){return t.kod===e.props.id}));e.setState({temaKorok:a[0]}),console.log("obj keys:"+Object.keys(n[0])),e.setState({adatok:n[0]});for(var l=parseInt(e.state.adatok.fotok),r=[];l>0;)r.push("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/"+e.props.id+"img"+(l-1)+".jpg"),l--;e.setState({fotok:r})}))}},{key:"render",value:function(){return console.log("kod="+this.state.adatok.kod),l.a.createElement("div",null,l.a.createElement(S,{temaKorok:this.state.temaKorok,adatok:this.state.adatok,fotok:this.state.fotok}))}}]),a}(n.Component),C=function(e){var t=e.match;return console.log("match.params="+t.params),l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{id:t.params.id}))},L=(a(91),function(e){return l.a.createElement("div",null,l.a.createElement("div",{id:"footer",className:"row"},l.a.createElement("div",{className:"col-lg-6 footer-col footer-col-first"},l.a.createElement("p",null,l.a.createElement("b",null,"Sz\xe9khely:"),l.a.createElement("br",null),e.contactData.location),l.a.createElement("p",null,l.a.createElement("b",null,"Levelez\xe9si c\xedm:"),l.a.createElement("br",null),e.contactData.adress),l.a.createElement("p",null,l.a.createElement("b",null,"Telefon:"),l.a.createElement("br",null),e.contactData.tel),l.a.createElement("p",null,l.a.createElement("b",null,"E-mail:"),l.a.createElement("br",null),e.contactData.email),l.a.createElement("p",null,l.a.createElement("b",null,"OM azonos\xedt\xf3:"),l.a.createElement("br",null),e.contactData.omid)),l.a.createElement("div",{className:"col-lg-6 footer-col footer-col-second",style:{textAlign:"center",fontSize:"125%"}},l.a.createElement("p",null,'Valami "k\xf6z\xe9pre" igaz\xedtott sz\xf6veg'))))}),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={contactData:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/contactDataKando.csv").then((function(e){return e.text()})).then((function(t){var a=p(t,";");e.setState({contactData:a[0]})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(L,{contactData:this.state.contactData}))}}]),a}(n.Component),K=a(114),I=(a(92),function(){return l.a.createElement(K.a,{id:"szakok",className:"justify-content-center",interval:null,prevLabel:"K\xf6vetkez\u0151 szak",nextLabel:"K\xf6vetkez\u0151 szak"},l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(93),alt:"kep1"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/T1"},l.a.createElement("h2",null,"Szoftverfejleszt\u0151")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(96),alt:"kep2"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/T3"},l.a.createElement("h2",null,"Mechatronikai technikus")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(97),alt:"kep3"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/SZ1"},l.a.createElement("h2",null,"Asztalos")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(98),alt:"kep4"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/SZ2"},l.a.createElement("h2",null,"Mechatronikus karbantart\xf3")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(99),alt:"kep5"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/T4"},l.a.createElement("h2",null,"Automatikai technikus")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(100),alt:"kep6"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/T2"},l.a.createElement("h2",null,"G\xe9pgy\xe1rt\xe1s-technol\xf3giai technikus")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(101),alt:"kep7"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/SZ3"},l.a.createElement("h2",null,"Hegeszt\u0151")),l.a.createElement("p",null,"description"))),l.a.createElement(K.a.Item,null,l.a.createElement("img",{src:a(102),alt:"kep8"}),l.a.createElement(K.a.Caption,null,l.a.createElement(o.Link,{to:"/kkando/szak/G1"},l.a.createElement("h2",null,"K\xe9pz\u0151- \xe9s iparm\u0171v\xe9szeti munkat\xe1rs")),l.a.createElement("p",null,"description"))))}),B=function(){var e=l.a.createElement("div",{style:{backgroundColor:"#eee",height:"200px"}});return l.a.createElement("div",null,l.a.createElement(b,{id:"home",image:a(46),title:"Lorem ipsum dolor sit amet."}),e,l.a.createElement(v,{img:a(103),amount:.25,height:"100vh"}),e,l.a.createElement("div",{id:"szakok",className:"row justify-content-center"},l.a.createElement(I,null)),l.a.createElement(D,null))},Z=a(115),H=a(113),M=a(24),A=(a(104),function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=function(){var e=document.getElementById("top-banner-container");if(null==e||null==e.getBoundingClientRect())return 1;var t=(window.innerHeight-document.getElementById("top-banner-container").getBoundingClientRect().bottom)/window.innerHeight;return t<1?t>.05?Math.round(1e3*(t+Number.EPSILON))/1e3:0:1}();c(e)}))}),[]),l.a.createElement(Z.a,{style:{textDecoration:"none",opacity:r,display:0===r?"none":"flex"},collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},l.a.createElement(M.NavHashLink,{to:"/kkando/#home"},l.a.createElement(Z.a.Brand,null,l.a.createElement("img",{src:a(46),height:"30px",alt:"Kand\xf3 logo"}))),l.a.createElement(Z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(Z.a.Collapse,{id:"responsive-navbar-snav"},l.a.createElement(H.a,{className:"mr-auto"},l.a.createElement(M.NavHashLink,{to:"/kkando/#rolunk"},l.a.createElement("p",{className:"nav-link link",role:"button"},"R\xf3lunk")),l.a.createElement(M.NavHashLink,{to:"/kkando/#szakok"},l.a.createElement("p",{className:"nav-link",role:"button"},"Szakok-"))),l.a.createElement(H.a,null,l.a.createElement(M.NavHashLink,{to:"/kkando/#something",className:"nav-link",role:"button"},"Something"))))}),F=(a(108),function(){return l.a.createElement(h.ParallaxProvider,null,l.a.createElement(o.BrowserRouter,null,l.a.createElement(A,null),l.a.createElement(i.g,null,l.a.createElement(i.d,{exact:!0,path:"/",component:B}),l.a.createElement(i.d,{exact:!0,path:"/home",component:B}),l.a.createElement(i.d,{exact:!0,path:"/kkando",component:B}),l.a.createElement(i.d,{exact:!0,path:"/szak/:id",component:C}),l.a.createElement(i.d,{path:"/kkando/szak/:id",component:C}))))});a(109),a(110);window.addEventListener("beforeunload",(function(){O.scrollToTop()})),c.a.render(l.a.createElement(F,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/logo.099ab748.png"},49:function(e,t,a){e.exports=a.p+"static/media/T1.15626718.mp3"},60:function(e,t,a){e.exports=a(111)},65:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/eszt.15dce6bd.png"},86:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/T1.908ec899.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/T3.a327171d.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/SZ1.93a1a747.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/SZ2.5e95016b.jpg"},99:function(e,t,a){e.exports=a.p+"static/media/T4.d8845ebd.jpg"}},[[60,1,2]]]);
//# sourceMappingURL=main.e068687d.chunk.js.map