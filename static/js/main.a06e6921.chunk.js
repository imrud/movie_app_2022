(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,e,r){t.exports=r(63)},36:function(t,e,r){},37:function(t,e,r){},60:function(t,e,r){},61:function(t,e,r){},62:function(t,e,r){},63:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(25),i=r.n(a),c=(r(36),r(4)),s=r(1);r(37);var u=function(t){return console.log(t),o.a.createElement("div",{className:"about__container"},o.a.createElement("span",null,'"400 years in the future, set in the year 2415, Aeon Flux is a mysterious assassin. Four centuries after a virus nearly annihilated the human race,leaving only five million survivors in a utopian city called Bregna.Aeon is struggling to destroy the Goodchild regime led by its namesake,Trevor Goodchild, the ruler of Bregna and a descendant of the man who found a cure for the deadly virus.As instructed by the Handler, Aeon is assigned to assassinate Goodchild,but there are deeper secrets to be discovered, and conspiracies to be foiled."'),o.a.createElement("span",null,"- aeon-flux-2005"))},l=r(26),h=r(8),f=r(9),m=r(11),p=r(10),d=r(12),v=r(27),y=r.n(v);r(60);var g=function(t){var e=t.id,r=t.year,n=t.title,a=t.summary,i=t.poster,s=t.genres;return o.a.createElement("div",{className:"movie"},o.a.createElement(c.b,{to:{pathname:"/movie/".concat(e),state:{year:r,title:n,summary:a,poster:i,genres:s}}},o.a.createElement("img",{src:i,alt:n,title:n}),o.a.createElement("div",{className:"movie__data"},o.a.createElement("h3",{className:"movie__title"},n),o.a.createElement("h5",{className:"movie__year"},r),o.a.createElement("ul",{className:"movie__genres"},s.map(function(t,e){return o.a.createElement("li",{key:e,className:"genres__genre"},t)})),o.a.createElement("p",{className:"movie__summary"},a.slice(0,140),"..."))))};r(61);function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var l={};function h(){}function f(){}function m(){}var p={};c(p,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==e&&r.call(v,o)&&(p=v);var y=m.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(s.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,c(y,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var E=function(t){function e(){var t,r;Object(h.a)(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).state={isLoading:!0,movies:[]},r.getMovies=Object(l.a)(w().mark(function t(){var e,n;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:e=t.sent,n=e.data.data.movies,r.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}},t)})),r}return Object(d.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var t=this.state,e=t.isLoading,r=t.movies;return o.a.createElement("section",{className:"container"},e?o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader__text"},"Loading...")):o.a.createElement("div",{className:"movies"},r.map(function(t){return o.a.createElement(g,{key:t.id,id:t.id,year:t.year,title:t.title,summary:t.summary,poster:t.medium_cover_image,genres:t.genres})})))}}]),e}(o.a.Component);r(62);var b=function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(c.b,{to:"/"},"home"),o.a.createElement(c.b,{to:"/about"},"about"))},_=function(t){function e(){return Object(h.a)(this,e),Object(m.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.location,r=t.history;void 0===e.state&&r.push("/")}},{key:"render",value:function(){var t=this.props.location;return t.state?t.state.title:null}}]),e}(o.a.Component);var x=function(){return o.a.createElement(c.a,null,o.a.createElement(b,null),o.a.createElement(s.a,{path:"/",exact:!0,component:E}),o.a.createElement(s.a,{path:"/about",component:u}),o.a.createElement(s.a,{path:"/movie-detail",component:_}))};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(x,null))}},[[28,1,2]]]);
//# sourceMappingURL=main.a06e6921.chunk.js.map