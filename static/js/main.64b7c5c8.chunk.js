(this.webpackJsonptinder=this.webpackJsonptinder||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),i=(n(53),n(54),n(55),n(40)),o=n.n(i),u=n(41),l=n.n(u),j=n(102),d=n(2);var b=function(){return Object(d.jsxs)("div",{className:"Header",children:[Object(d.jsx)(j.a,{children:Object(d.jsx)(o.a,{className:"header__icon"})}),Object(d.jsx)("img",{src:"https://cdn.worldvectorlogo.com/logos/tinder-2.svg",alt:"logo",className:"header__logo"}),Object(d.jsx)(j.a,{children:Object(d.jsx)(l.a,{className:"header__icon"})})]})},f=n(16),p=n.n(f),h=n(29),O=n(30),m=n(42),x=n.n(m);n(65);var v=function(e){var t=e.item;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card__img",style:{backgroundImage:'url("'.concat(t.url,'")')}}),Object(d.jsx)("div",{className:"card__footer",children:Object(d.jsx)("div",{className:"card__name",children:t.name})})]})},g=(n(66),n(44)),_=n.n(g),N=n(43),w=n.n(N),k=n(26),y=n(27);var S=function(e){var t=e.swipe;return Object(d.jsxs)("div",{className:"buttonbar",children:[Object(d.jsx)(j.a,{onClick:function(){return t("left")},className:"button",children:Object(d.jsx)(w.a,{className:"button__icon",fontSize:"large",style:{color:k.a[500]}})}),Object(d.jsx)(j.a,{onClick:function(){return t("right")},className:"button",children:Object(d.jsx)(_.a,{className:"button__icon",fontSize:"large",style:{color:y.a[500]}})})]})},C=n(45),F=n.n(C).a.create({baseURL:"https://tinder-backend42.herokuapp.com"}),L=(n(85),[]);var E=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(O.a)(s,2),o=i[0],u=i[1];Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/tinder/card");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,Array(n.length).fill(0).map((function(e){return a.a.createRef()}));case 3:t=e.sent,console.log(t),u(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var l=function(e){var t=n;t.splice(e,1),r(t)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"cardbar",children:Object(d.jsx)("div",{className:"cardbar__container",children:n.map((function(e,t){return Object(d.jsx)(x.a,{ref:o[t],className:"swipe",onSwipe:function(e){return function(e,t){L.push(t),l(0)}(0,t)},onCardLeftScreen:function(){return l(t)},preventSwipe:["up","down"],children:Object(d.jsx)(v,{item:e})},t)}))})}),Object(d.jsx)(S,{swipe:function(e){var t=n.length-1;t>-1&&(L.push(t),o[t].current.swipe(e),l(t))}})]})};var I=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(E,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),z()}},[[87,1,2]]]);
//# sourceMappingURL=main.64b7c5c8.chunk.js.map