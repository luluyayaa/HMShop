(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"1fe6":function(n,t,e){"use strict";e.r(t);var u=e("d731"),r=e("841b");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("77da");var i=e("2877"),o=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"49a0":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,u,r,a,i){try{var o=n[a](i),s=o.value}catch(c){return void e(c)}o.done?t(s):Promise.resolve(s).then(u,r)}function i(n){return function(){var t=this,e=arguments;return new Promise(function(u,r){var i=n.apply(t,e);function o(n){a(i,u,r,o,s,"next",n)}function s(n){a(i,u,r,o,s,"throw",n)}o(void 0)})}}var o=function(){return e.e("components/news-item/news-item").then(e.bind(null,"e617"))},s={data:function(){return{newsList:[]}},methods:{getNews:function(){var n=i(u.default.mark(function n(){var t;return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$myRuquest({url:"/api/getnewslist"});case 2:t=n.sent,this.newsList=t.data.message;case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),goDetail:function(t){n.navigateTo({url:"/pages/news-detail/news-detail?id="+t})}},components:{"news-item":o},onLoad:function(){this.getNews()}};t.default=s}).call(this,e("6e42")["default"])},"77da":function(n,t,e){"use strict";var u=e("d804"),r=e.n(u);r.a},"841b":function(n,t,e){"use strict";e.r(t);var u=e("49a0"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},d731:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},d754:function(n,t,e){"use strict";(function(n){e("4c89"),e("921b");u(e("66fd"));var t=u(e("1fe6"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d804:function(n,t,e){}},[["d754","common/runtime","common/vendor"]]]);