(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),s=t.n(r),c=(t(14),t(3)),i=t(4),u=t(6),l=t(5),d=t(7),h=(t(16),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={users:[]},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/users/data").then(function(e){return e.json()}).then(function(n){return e.setState({users:n})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Users"),this.state.users.map(function(e){return o.a.createElement("div",{key:e.id},"user: ",e.name," Password: ",e.password)}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){e.exports=t(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.1579634c.chunk.js.map