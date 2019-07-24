(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,a,t){e.exports=t.p+"static/media/icon-01.354862b7.svg"},122:function(e,a){e.exports={project1:{title:"Taxi Insights",tech:"React, PostgreSQL, Express, HTML/CSS",description:"Taxi Insights is an app that lets you interactively explore the NYC TLC data set.  The app renders and animates Charts and Chloropleth Maps in real-time."},project2:{title:"Ultimate Software\u2122 Hackathon App ",tech:"Angular 2, MongoDB, Node.JS, Agile/SCRUM methods",description:"Ultimate Software\u2122 official hackathon utility for assisting with event and schedule tracking during their 2017 competition"},project3:{title:"Python Tkinter PostgreSQL Developer",tech:"Python, ttk, PostgreSQL",description:"A GUI Application to interface with a local PostgreSQL database, built entirely with native Python libraries"}}},127:function(e,a,t){e.exports=t.p+"static/media/taxiinsights-01.c85a66fb.svg"},128:function(e,a,t){e.exports=t.p+"static/media/ultimate.af099200.svg"},129:function(e,a,t){e.exports=t.p+"static/media/python.62a7aae3.svg"},139:function(e,a,t){e.exports=t(270)},144:function(e,a,t){},145:function(e,a,t){},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},269:function(e,a,t){},270:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(30),l=t.n(i);t(116),t(144);var r=t(17),o=t(18),s=t(21),d=t(19),m=t(54),u=t(22),b=t(36),E=(t(145),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={scrollingLock:!1},t.handleScroll=t.handleScroll.bind(Object(m.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.scrollY>.85*window.innerHeight?(console.log("should lock"),this.setState({scrollingLock:!0})):window.scrollY<.85*window.innerHeight&&(console.log("not locked"),this.setState({scrollingLock:!1}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"landing"},c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"header"},"Hello.")),c.a.createElement("div",{className:"body-container"},c.a.createElement("div",{className:"body"},c.a.createElement("p",null,"My name is Jason. "),c.a.createElement("p",null,"I'm a full-stack developer with a passion for Machine Learning and Data Visualization."),c.a.createElement("p",null,"Scroll down to see some of my work."))),c.a.createElement("div",{className:this.state.scrollingLock?"scrolllock":"button-container"},c.a.createElement("div",{className:"resume-button"},c.a.createElement("div",{id:"landing-button-1"},c.a.createElement(b.a,{loading:!0,name:"asterisk"}),"Resum\xe9.")),c.a.createElement("div",{className:"contact-button"},c.a.createElement("div",{id:"landing-button-1"},c.a.createElement(b.a,{loading:!0,name:"certificate"}),"Contact.")),c.a.createElement("div",{className:"projects-button"},c.a.createElement("div",{id:"landing-button-1"},c.a.createElement(b.a,{loading:!0,name:"spinner"}),"Projects."))))}}]),a}(n.Component)),h=t(58),v=t(274),g=t(130),p=t(122),f=t.n(p),N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={options:f.a[e.options],image:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("a",{href:"http://icky-class.surge.sh"},c.a.createElement(v.a,{fluid:!0},c.a.createElement(g.a,{src:this.props.image,wrapped:!0,ui:!1}),c.a.createElement(v.a.Content,null,c.a.createElement(v.a.Header,null,this.state.options.title),c.a.createElement(v.a.Meta,null,c.a.createElement("span",{className:"date"},this.state.options.tech)))))}}]),a}(n.Component),j=t(127),k=t.n(j),w=t(128),y=t.n(w),O=t(129),S=t.n(O),C=t(80),L=t.n(C),x=(t(262),function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e;return c.a.createElement("div",{className:"projects"},c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"header"},"Projects.")),c.a.createElement("div",{className:"card-container"},c.a.createElement("div",{className:"card1"},c.a.createElement(N,{id:"card1",options:"project1",image:k.a})),c.a.createElement("img",{src:L.a,className:"line-break"}),c.a.createElement("div",{className:"card2"},c.a.createElement(N,(e={id:"card2"},Object(h.a)(e,"id","card2-semantic"),Object(h.a)(e,"options","project2"),Object(h.a)(e,"image",y.a),e))),c.a.createElement("img",{src:L.a,className:"line-break2"}),c.a.createElement("div",{className:"card3"},c.a.createElement(N,{id:"card3",options:"project3",image:S.a}))))}}]),a}(n.Component)),P=(t(263),function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"contacts"},c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"header"},"Contact.")))}}]),a}(n.Component)),M=t(275),T=(t(264),function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"skills"},c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"header"},"Skills.")),c.a.createElement("div",{className:"language-container"},c.a.createElement("div",{className:"subheader-container1"},c.a.createElement("div",{className:"header"},"Languages:")),c.a.createElement("div",{className:"language-buttons"},c.a.createElement("div",{className:"button-badge-1"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"Javascript")),c.a.createElement("div",{className:"button-badge-2"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"Python")),c.a.createElement("div",{className:"button-badge-3"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"SQL")),c.a.createElement("div",{className:"button-badge-7"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"C/C#")))),c.a.createElement("div",{className:"framework-container"},c.a.createElement("div",{className:"subheader-container2"},c.a.createElement("div",{className:"header"},"Frameworks:")),c.a.createElement("div",{className:"framework-buttons"},c.a.createElement("div",{className:"button-badge-4"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"Angular")),c.a.createElement("div",{className:"button-badge-5"},c.a.createElement(M.a,{id:"ilanding-button",fluid:!0},"React.js")))),c.a.createElement("div",{className:"technology-container"},c.a.createElement("div",{className:"subheader-container3"},c.a.createElement("div",{className:"header"},"Technologies:")),c.a.createElement("div",{className:"technology-buttons"},c.a.createElement("div",{className:"button-badge-6"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"Oracle")),c.a.createElement("div",{className:"button-badge-8"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"MongoDB")),c.a.createElement("div",{className:"button-badge-9"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"Node.js")),c.a.createElement("div",{className:"button-badge-10"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"Express")),c.a.createElement("div",{className:"button-badge-11"},c.a.createElement(M.a,{id:"landing-button",fluid:!0},"PostgreSQL")))))}}]),a}(n.Component));t(269);var A=function(){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(x,null),c.a.createElement(T,null),c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,a,t){e.exports=t.p+"static/media/break-01.10f6864a.svg"}},[[139,1,2]]]);
//# sourceMappingURL=main.428dec9c.chunk.js.map