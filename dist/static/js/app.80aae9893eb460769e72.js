webpackJsonp([7],{118:function(n,t){},119:function(n,t){},125:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},18:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return i}),e.d(t,"e",function(){return c}),e.d(t,"f",function(){return a}),e.d(t,"g",function(){return f}),e.d(t,"h",function(){return s}),e.d(t,"i",function(){return p}),e.d(t,"j",function(){return d}),e.d(t,"k",function(){return h}),e.d(t,"l",function(){return l});var r="SEARCH",o="BOOKDETAIL",u="GETSOURCE",i="GETCHAPTERLIST",c="GETCONTENT",a="SETHISTORY",f="SETKEYWORD",s="SETCURRENTSOURCE",p="SETCURRENTCHAPTER",d="GETCATEGORYLIST",h="SETBACKPOSITION",l="SETRANK"},46:function(n,t,e){"use strict";var r=e(10),o=e(126),u=function(n){return e.e(1).then(function(){var t=[e(131)];n.apply(null,t)}.bind(this)).catch(e.oe)},i=function(n){return e.e(2).then(function(){var t=[e(134)];n.apply(null,t)}.bind(this)).catch(e.oe)},c=function(n){return e.e(0).then(function(){var t=[e(133)];n.apply(null,t)}.bind(this)).catch(e.oe)},a=function(n){return e.e(4).then(function(){var t=[e(132)];n.apply(null,t)}.bind(this)).catch(e.oe)},f=function(n){return e.e(5).then(function(){var t=[e(135)];n.apply(null,t)}.bind(this)).catch(e.oe)},s=function(n){return e.e(3).then(function(){var t=[e(136)];n.apply(null,t)}.bind(this)).catch(e.oe)};r.default.use(o.a),t.a=new o.a({routes:[{path:"/",name:"Home",component:u},{path:"/bookCat/detail",name:"bookCatDetail",component:i},{path:"/book/:bookId",name:"book",component:c},{path:"/Reader/:id",name:"Reader",component:a},{path:"/rankList",name:"rankList",redirect:"/rankList/weekRank",component:f,children:[{path:"/rankList/*",name:"rankListDetail",component:s}]}]})},47:function(n,t,e){"use strict";var r=e(10),o=e(54),u=e(93),i=(e(18),e(92)),c=e(56);r.default.use(o.a);var a={searchList:[],bookInfo:{},sourceList:[],chapterList:[],content:{title:"",body:""},history:JSON.parse(e.i(c.a)("history"))||[],keyword:"",currentSource:{},currentChapter:{},categoryList:{},previousPosition:"书架",rank:{}},f={searchList:function(n){return n.searchList},bookInfo:function(n){return n.bookInfo},sourceList:function(n){return n.sourceList},chapterList:function(n){return n.chapterList},content:function(n){return n.content},history:function(n){return n.history},keyword:function(n){return n.keyword},currentSource:function(n){return n.currentSource},currentChapter:function(n){return n.currentChapter},categoryList:function(n){return n.categoryList},previousPosition:function(n){return n.previousPosition},rank:function(n){return n.rank}};t.a=new o.a.Store({state:a,actions:i,getters:f,mutations:u.a})},49:function(n,t){},50:function(n,t,e){function r(n){e(119)}var o=e(52)(e(90),e(125),r,null,null);n.exports=o.exports},55:function(n,t,e){"use strict";e.d(t,"a",function(){return u}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return c}),e.d(t,"d",function(){return a}),e.d(t,"e",function(){return f}),e.d(t,"l",function(){return s}),e.d(t,"h",function(){return p}),e.d(t,"g",function(){return d}),e.d(t,"j",function(){return l}),e.d(t,"k",function(){return h}),e.d(t,"i",function(){return m}),e.d(t,"f",function(){return v});var r=e(25),o=e.n(r),u=function(n){return o.a.get("/api/book/fuzzy-search",{params:{query:n,start:0}})},i=function(n){return o.a.get("/api/book/"+n,{})},c=function(n){return o.a.get("/api/toc/",{params:{view:"summary",book:n}})},a=function(n){return o.a.get("/api/toc/"+n,{params:{view:"chapters"}})},f=function(n){return o.a.get("/chapter/"+n,{params:{k:"2124b73d7e2e1945",t:"1468223717"}})},s=function(){return o.a.get("/api/cats/lv2/statistics")},p=function(){return o.a.get("/api/cats/lv2")},d=function(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:20;return o.a.get("/api/book/by-categories",{params:{gender:n,type:t,major:e,minor:r,start:u,limit:i}})},h=function(){return o.a.get("/api/book/search-hotwords")},l=function(n){return o.a.get("/api/book/auto-complete?query="+n)},m=function(){return o.a.get("/api/ranking/gender")},v=function(n){return o.a.get("/api/ranking/"+n)}},56:function(n,t,e){"use strict";e.d(t,"c",function(){return u}),e.d(t,"a",function(){return i}),e.d(t,"d",function(){return c}),e.d(t,"b",function(){return a});var r=e(94),o=e.n(r),u=function(n,t){n&&("string"!=typeof t&&(t=o()(t)),window.localStorage.setItem(n,t))},i=function(n){if(n)return JSON.parse(window.localStorage.getItem(n))},c=function(n){n&&window.localStorage.removeItem(n)},a="http://statics.zhuishushenqi.com"},90:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(118);e.n(r);t.default={name:"app"}},91:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(48),o=e.n(r),u=e(10),i=e(50),c=e.n(i),a=e(46),f=e(51),s=e.n(f),p=e(25),d=e.n(p),h=e(28),l=e.n(h),m=e(49),v=(e.n(m),e(47));s.a.config.swipe={direction:"horizontal"},u.default.use(s.a,{name:"v-touch"}),u.default.use(l.a),d.a.interceptors.request.use(function(n){return n},function(n){return o.a.reject(n)}),d.a.interceptors.response.use(function(n){if(200===n.status)return n.data},function(n){return o.a.reject(n)}),u.default.config.productionTip=!1,new u.default({el:"#app",router:a.a,store:v.a,template:"<App/>",components:{App:c.a}})},92:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"search",function(){return u}),e.d(t,"bookDetail",function(){return i}),e.d(t,"getSource",function(){return c}),e.d(t,"getChapterList",function(){return a}),e.d(t,"getContent",function(){return f});var r=e(18),o=e(55),u=function(n,t){var e=n.commit;return o.a(t).then(function(n){e(r.a,n.books)})},i=function(n,t){var e=n.commit;return o.b(t).then(function(n){e(r.b,n)})},c=function(n,t){var e=n.commit;return o.c(t).then(function(n){e(r.c,n)})},a=function(n,t){var e=n.commit;return o.d(t).then(function(n){e(r.d,n.chapters)})},f=function(n,t){var e=n.commit;return o.e(t).then(function(n){e(r.e,n.chapter)})}},93:function(n,t,e){"use strict";var r,o=e(96),u=e.n(o),i=e(18);t.a=(r={},u()(r,i.a,function(n,t){n.searchList=t}),u()(r,i.b,function(n,t){n.bookInfo=t}),u()(r,i.c,function(n,t){n.sourceList=t}),u()(r,i.d,function(n,t){n.chapterList=t}),u()(r,i.e,function(n,t){n.content=t}),u()(r,i.f,function(n,t){n.history=t}),u()(r,i.g,function(n,t){n.keyword=t}),u()(r,i.h,function(n,t){n.currentSource=t}),u()(r,i.i,function(n,t){n.currentChapter=t}),u()(r,i.j,function(n,t){n.categoryList=t}),u()(r,i.k,function(n,t){n.previousPosition=t}),u()(r,i.l,function(n,t){n.rank=t}),r)}},[91]);
//# sourceMappingURL=app.80aae9893eb460769e72.js.map