(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=(n(14),n(15),n(8)),u=n(7),l=n(1),i=n(2),m=n(4),d=n(3),b=function(e){var t=e.totalUniqueCounters,n=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("span",null,r.a.createElement("a",{className:"navbar-brand",href:"#navlink"},"Total of Unique Items: ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},t)),r.a.createElement("a",{className:"navbar-brand",href:"#navlink"},"Total Items: ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},n))))},v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment "),r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete "))}}]),n}(a.Component),h=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.counters,n=e.onIncrement,a=e.onDelete,o=e.onReset;return r.a.createElement("div",null,r.a.createElement("button",{onClick:o,className:"btn btn-primary btn-sm m-2"},"Reset "),t.map((function(e){return r.a.createElement(v,{counter:e,key:e.id,onIncrement:n,onDelete:a})})))}}]),n}(a.Component),p=(n(16),{counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0},{id:5,value:0}]}),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a.handleReset=function(){if(a.state.counters.length>0){var e=a.state.counters.map((function(e){return e.value=0,e}));a.setState({counters:e})}else a.setState(p)},a.handleDelete=function(e){var t=a.state.counters.filter((function(t){return t.id!==e}));a.setState({counters:t})},a.handleIncrement=function(e){var t=Object(u.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(s.a)({},e),t[n].value++,a.setState({counters:t})},a.state=p,a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{totalUniqueCounters:this.state.counters.filter((function(e){return e.value>0})).length,totalCounters:this.state.counters.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0)})," ",r.a.createElement("main",{className:"container"},r.a.createElement(h,{counters:this.state.counters,onIncrement:this.handleIncrement,onDelete:this.handleDelete,onReset:this.handleReset})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=document.getElementById("root");c.a.render(r.a.createElement(f,null),g),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.dbe12a2d.chunk.js.map