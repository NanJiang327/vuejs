webpackJsonp([1],{"+oKY":function(t,e){},"9n10":function(t,e){},HBFW:function(t,e){},Hi0J:function(t,e){},Lukx:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("tlOn")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),u={name:"MainHeader",computed:c()({},Object(l.d)(["city"]),Object(l.b)(["doubleCity"]))},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-down"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    Enter cities\n  ")])}]};var h=i("VU/8")(u,d,!1,function(t){i("fhZb")},"data-v-495025ac",null).exports,p={name:"MainSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{showSwiper:function(){return this.swiperList.length}},props:{swiperList:Array}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,function(e){return i("swiper-slide",{key:e.id},[i("img",{staticClass:"swiper-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("p",{staticClass:"swiper-text"},[t._v(t._s(e.text))])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},staticRenderFns:[]};var m=i("VU/8")(p,v,!1,function(t){i("s7gR")},"data-v-4324f8fe",null).exports,f={name:"MainIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t},showIcons:function(){return this.iconList.length}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[t.showIcons?i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.iconUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-text"},[t._v(t._s(e.text))])])}))})):t._e()],1)},staticRenderFns:[]};var C=i("VU/8")(f,_,!1,function(t){i("pGlv")},"data-v-4eb05a24",null).exports,w={name:"MainRecommend",props:{recommendList:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("Recommended Trips")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-text"},[t._v(t._s(e.text))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("Find out more")])])])}))])},staticRenderFns:[]};var g=i("VU/8")(w,y,!1,function(t){i("jhav")},"data-v-ff99d900",null).exports,b={name:"MainWeekend",props:{weekendList:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("Weekend")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-text"},[t._v(t._s(e.text))])])])}))])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("i8mQ")},"data-v-f3c0fbfe",null).exports,L=i("mtWM"),$=i.n(L),S={name:"Main",components:{MainHeader:h,MainSwiper:m,MainIcons:C,MainRecommend:g,MainWeekend:x},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.d)(["city"])),methods:{getHomeInfo:function(){$.a.get("https://raw.githubusercontent.com/NanJiang327/vuejs/master/TravelVueExample/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("main-header"),t._v(" "),i("main-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("main-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("main-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("main-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var I=i("VU/8")(S,E,!1,function(t){i("abjx")},null,null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("Choose a city\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var U=i("VU/8")({name:"CityHeader"},T,!1,function(t){i("Hi0J")},"data-v-52bf722d",null).exports,F=i("GQaK"),N={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},mounted:function(){this.scroll=new F.a(this.$refs.search)},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.c)(["changeCity"])),computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.toUpperCase().indexOf(t.keyword.toUpperCase())>-1||i.name.toUpperCase().indexOf(t.keyword.toUpperCase())>-1)&&e.push(i)});t.list=e},100):this.list=[]}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper"},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Enter city name"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        No result found\n      ")])],2)])])},staticRenderFns:[]};var j=i("VU/8")(N,R,!1,function(t){i("+oKY")},"data-v-0b9e7dbd",null).exports,A={name:"CityList",mounted:function(){this.scroll=new F.a(this.$refs.wrapper)},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.c)(["changeCity"])),computed:c()({},Object(l.d)({currentCity:"city"})),props:{cities:Object,hotCities:Array,letter:String},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("\n        Current City\n      ")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("\n        Hot Cities\n      ")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s.substring(0,1),refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(" "+t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var V=i("VU/8")(A,O,!1,function(t){i("ZddJ")},"data-v-70bb5bc5",null).exports,M={name:"CityAlphabet",props:{alphabetList:Array},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.alphabetList)t.push(this.alphabetList[e]);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},5))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var G={name:"City",components:{CityHeader:U,CitySearch:j,CityList:V,CityAlphabet:i("VU/8")(M,D,!1,function(t){i("PBRs")},"data-v-5e9e26c7",null).exports},data:function(){return{alphabetList:[],hotCities:[],cities:{},letter:""}},methods:{getCityInfo:function(){$.a.get("https://raw.githubusercontent.com/NanJiang327/vuejs/master/TravelVueExample/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.alphabetList=e.alphabet,this.hotCities=e.hotCities,this.cities=e.cities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{alphabetList:t.alphabetList},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(G,H,!1,function(t){i("Tvhq")},"data-v-11d98e74",null).exports,Y={name:"CommonGallery",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var J={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var P={name:"DetailBanner",components:{CommonGallary:i("VU/8")(Y,W,!1,function(t){i("UG/Y")},"data-v-5cca9e4d",null).exports,FadeAnimation:i("VU/8")({name:"Fade"},J,!1,function(t){i("ww8e")},"data-v-9b7187fe",null).exports},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},props:{sightName:String,bannerImg:String,bannerImgs:Array}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-num"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var q=i("VU/8")(P,z,!1,function(t){i("WuC4")},"data-v-43887657",null).exports,Z={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    Details\n  ")],1)],1)},staticRenderFns:[]};var Q=i("VU/8")(Z,K,!1,function(t){i("yr1z")},"data-v-fc4884fa",null).exports,X={name:"DetailList",props:{list:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var et={name:"Detail",components:{DetailBanner:q,DetailHeader:Q,DetailList:i("VU/8")(X,tt,!1,function(t){i("HBFW")},"data-v-d0d95558",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){$.a.get("https://raw.githubusercontent.com/NanJiang327/vuejs/master/TravelVueExample/static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){try{localStorage.id=this.$route.params.id}catch(t){}this.getDetailInfo()},activated:function(){if(localStorage.id)localStorage.id!==this.$route.params.id&&this.getDetailInfo();else try{localStorage.id=this.$route.params.id}catch(t){}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("detail-list",{attrs:{list:this.list}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("Lukx")},"data-v-db68582c",null).exports;s.a.use(r.a);var nt=new r.a({routes:[{path:"/",name:"Main",component:I},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at=i("F3EI"),rt=i.n(at),ot=i("v5o6"),ct=i.n(ot),lt="Auckland";try{localStorage.city&&(lt=localStorage.city)}catch(t){}var ut={city:lt},dt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ht=new l.a.Store({state:ut,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:dt,getters:{doubleCity:function(t){return t.city+" "+t.city}}});i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns"),i("j1ja");s.a.config.productionTip=!1,ct.a.attach(document.body),s.a.use(rt.a),new s.a({el:"#app",router:nt,store:ht,components:{App:a},template:"<App/>"})},PBRs:function(t,e){},Tvhq:function(t,e){},TzC8:function(t,e){},"UG/Y":function(t,e){},WuC4:function(t,e){},ZddJ:function(t,e){},abjx:function(t,e){},fhZb:function(t,e){},i8mQ:function(t,e){},jhav:function(t,e){},pGlv:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},s7gR:function(t,e){},tlOn:function(t,e){},v2ns:function(t,e){},ww8e:function(t,e){},yr1z:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0bd7060fb089248078d1.js.map