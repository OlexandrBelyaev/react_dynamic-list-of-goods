(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),u=n(1),s=n.n(u),i=n(2),l=n(5),f=n(6),p=n(8),d=n(7);var m=function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.name,style:{color:t.color}},t.name)})))};n(15);function v(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,n=e.filter((function(t,e){return e<5&&!0})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,n=e.filter((function(t){return"red"===t.color&&!0})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",onClick:Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)})))},"Get All"),a.a.createElement("button",{type:"button",onClick:Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)})))},"Get red"),a.a.createElement("button",{type:"button",onClick:Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)})))},"Get 5 first"),a.a.createElement(m,{goods:this.state.goods}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(y,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d6f42fb6.chunk.js.map