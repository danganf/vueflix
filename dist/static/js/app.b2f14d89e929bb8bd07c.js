webpackJsonp([1],{"+Dsq":function(t,e){},"7xb5":function(t,e){},ABYE:function(t,e){},FsJg:function(t,e,a){var s={"./cat":"MGUO","./cat.js":"MGUO","./cd":"OkV7","./cd.js":"OkV7","./chmod":"thPH","./chmod.js":"thPH","./common":"8y2q","./common.js":"8y2q","./cp":"kEp2","./cp.js":"kEp2","./dirs":"lK6y","./dirs.js":"lK6y","./echo":"IRJ8","./echo.js":"IRJ8","./error":"HxTw","./error.js":"HxTw","./exec":"VQ1x","./exec.js":"VQ1x","./find":"r+ID","./find.js":"r+ID","./grep":"T3mR","./grep.js":"T3mR","./head":"jMmx","./head.js":"jMmx","./ln":"4Bxg","./ln.js":"4Bxg","./ls":"MULN","./ls.js":"MULN","./mkdir":"3ORl","./mkdir.js":"3ORl","./mv":"PcVt","./mv.js":"PcVt","./popd":"h3Dv","./popd.js":"h3Dv","./pushd":"PGBa","./pushd.js":"PGBa","./pwd":"+UCj","./pwd.js":"+UCj","./rm":"EaF0","./rm.js":"EaF0","./sed":"/j+X","./sed.js":"/j+X","./set":"c0cj","./set.js":"c0cj","./sort":"yc2b","./sort.js":"yc2b","./tail":"i//j","./tail.js":"i//j","./tempdir":"RvNk","./tempdir.js":"RvNk","./test":"U9dR","./test.js":"U9dR","./to":"xlaY","./to.js":"xlaY","./toEnd":"Lk2e","./toEnd.js":"Lk2e","./touch":"0Qa2","./touch.js":"0Qa2","./uniq":"lTxy","./uniq.js":"lTxy","./which":"GiAy","./which.js":"GiAy"};function r(t){return a(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="FsJg"},JVVr:function(t,e){},M9CI:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={components:{},data:function(){return{}},methods:{},mounted:function(){document.getElementById("search-btn").addEventListener("click",function(){var t=document.getElementById("header__search");-1===t.className.indexOf("header__search--active")?(t.classList.add("header__search--active"),t.getElementsByTagName("input")[0].focus()):t.classList.remove("header__search--active")},!1),this.$refs.btnMenuMobile.addEventListener("click",function(){var t=document.getElementsByClassName("header__nav")[0];-1===t.className.indexOf("header__nav--active")?(t.classList.add("header__nav--active"),this.classList.add("header__btn--active")):(t.classList.remove("header__nav--active"),this.classList.remove("header__btn--active"))},!1)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"header__content"},[t._m(0),t._v(" "),a("ul",{staticClass:"header__nav"},[a("li",{staticClass:"header__nav-item"},[a("router-link",{staticClass:"header__nav-link",attrs:{to:{name:"home"},role:"button"}},[t._v("Inicio")])],1),t._v(" "),a("li",{staticClass:"header__nav-item"},[a("a",{staticClass:"dropdown-toggle header__nav-link",attrs:{href:"#",role:"button"}},[t._v("Catalogo")]),t._v(" "),a("ul",{staticClass:"dropdown-menu header__dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuCatalog"}},[a("li",[a("router-link",{staticClass:"header__nav-link",attrs:{to:{name:"media-list",force:!0,params:{media:"movie"}},role:"button"}},[t._v("Filmes")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"header__nav-link",attrs:{to:{name:"media-list",force:!0,params:{media:"tv"}},role:"button"}},[t._v("Séries")])],1)])])]),t._v(" "),t._m(1),t._v(" "),a("button",{ref:"btnMenuMobile",staticClass:"header__btn",attrs:{type:"button"}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])])])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header__logo",attrs:{href:""}},[this._v("\n                            VUE"),e("span",{staticClass:"last"},[this._v("FLIX")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header__auth"},[e("button",{staticClass:"header__search-btn",attrs:{id:"search-btn",type:"button"}},[e("i",{staticClass:"icon ion-ios-search"})]),this._v(" "),e("a",{staticClass:"header__sign-in",attrs:{href:"#"}},[e("i",{staticClass:"icon ion-ios-log-in"}),this._v(" "),e("span",[this._v("entrar")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"header__search",attrs:{action:"#",id:"header__search"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"header__search-content"},[e("input",{attrs:{type:"text",placeholder:"Procure um filmes e séries de TV"}}),this._v(" "),e("button",{attrs:{type:"button"}},[this._v("buscar")])])])])])])}]};var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-3"},[a("h6",{staticClass:"footer__title"},[t._v("Baixe nosso aplicativo")]),t._v(" "),a("ul",{staticClass:"footer__app"},[a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"static/img/Download_on_the_App_Store_Badge.svg",alt:""}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"static/img/google-play-badge.png",alt:""}})])])])]),t._v(" "),a("div",{staticClass:"col-6 col-sm-4 col-md-3"},[a("h6",{staticClass:"footer__title"},[t._v("Sobre nós")]),t._v(" "),a("ul",{staticClass:"footer__list"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Sobre")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Preços")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contato")])])])]),t._v(" "),a("div",{staticClass:"col-6 col-sm-4 col-md-3"},[a("h6",{staticClass:"footer__title"},[t._v("Outros")]),t._v(" "),a("ul",{staticClass:"footer__list"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Termos de uso")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Politica de privacidade")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Suporte")])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-4 col-md-3"},[a("h6",{staticClass:"footer__title"},[t._v("Contato")]),t._v(" "),a("ul",{staticClass:"footer__list"},[a("li",[a("a",{attrs:{href:"tel:+18002345678"}},[t._v("+55 21 98169-2318")])]),t._v(" "),a("li",[a("a",{attrs:{href:"mailto:support@moviego.com"}},[t._v("danielazevedo2k2@gmail.com")])])]),t._v(" "),a("ul",{staticClass:"footer__social"},[a("li",{staticClass:"facebook"},[a("a",{attrs:{href:"https://www.facebook.com/dazevedoguimaraes#"}},[a("i",{staticClass:"icon ion-logo-facebook"})])]),t._v(" "),a("li",{staticClass:"instagram"},[a("a",{attrs:{href:"https://www.instagram.com/danielaze2k12/"}},[a("i",{staticClass:"icon ion-logo-instagram"})])]),t._v(" "),a("li",{staticClass:"twitter"},[a("a",{attrs:{href:"https://twitter.com/danganf"}},[a("i",{staticClass:"icon ion-logo-twitter"})])])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"footer__copyright"},[a("small",[a("a",{attrs:{target:"_blank",href:"https://www.templateshub.net"}},[t._v("VUEFLIX")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Termos de uso")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Politica de privacidade")])])])])])])])])}]};var o={name:"App",components:{CHeader:a("VU/8")(r,i,!1,function(t){a("pGqQ")},null,null).exports,CFooter:a("VU/8")({components:{},data:function(){return{}},methods:{},mounted:function(){}},n,!1,function(t){a("+Dsq")},null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("c-header"),this._v("ssss\n    "),e("transition",{attrs:{name:"moveInUp"}},[e("router-view",{key:this.$route.fullPath})],1),this._v(" "),e("c-footer")],1)},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("OZHo")},null,null).exports,d=a("/ocq"),_=a("Xxa5"),u=a.n(_),p=a("exGp"),v=a.n(p),m=a("j7an"),h={props:{product:{type:Object,required:!0},mediaType:{type:String,default:"movie"},className:{type:String,default:"card--big"}},data:function(){return{}},methods:{toDetail:function(t){this.$router.push({name:"prod-detail",params:{type:this.mediaType,id:t}})}},mounted:function(){}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",class:t.className},[a("div",{staticClass:"card__cover"},[a("img",{class:{"no-cover":!t.product.poster_path},attrs:{src:t.product.poster_path||"static/img/covers/no.png",alt:""}}),t._v(" "),a("a",{staticClass:"card__play",on:{click:function(e){return t.toDetail(t.product.id)}}},[a("i",{staticClass:"icon ion-ios-play"})])]),t._v(" "),a("div",{staticClass:"card__content"},[a("h3",{staticClass:"card__title",on:{click:function(e){return t.toDetail(t.product.id)}}},[a("a",[t._v(t._s(t.product.title))])]),t._v(" "),t._m(0),t._v(" "),a("span",{staticClass:"card__rate"},[a("i",{staticClass:"icon ion-ios-star"}),t._v(t._s(t.product.vote_average))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"card__category"},[e("a",{attrs:{href:"#"}},[this._v("Action")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("Triler")])])}]};var g=a("VU/8")(h,f,!1,function(t){a("7xb5")},"data-v-767dc7f6",null).exports,C=a("W8vS"),w={components:{CProdCard:g},data:function(){return{productsPopularity:[],products:[],preloader:!1}},methods:{initSwiper:function(){new m.a(".carrousel-container",{spaceBetween:30,speed:500,slidesPerView:4,slidesPerColumn:1,watchSlidesVisibility:!0,autoplay:!1,loop:!0,breakpoints:{0:{slidesPerView:1},375:{slidesPerView:1},425:{slidesPerView:2},576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:4}},navigation:{nextEl:".home__nav--next",prevEl:".home__nav--prev"},paginationClickable:!1})},getProducts:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preloader=!0,e.next=3,window.axios.get("https://vue-flix-backend.herokuapp.com/media/home").then(function(e){t.preloader=!1,t.productsPopularity=e.data[0],e.data.splice(0,1),t.products=e.data}).catch(function(e){console.log(e),t.preloader=!1});case 3:case"end":return e.stop()}},e,t)}))()}},updated:function(){this.initSwiper()},mounted:function(){this.getProducts()}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"home"},[t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 n-p-l"},[a("h1",{staticClass:"home__title"},[t._v("Os mais "),a("b",[t._v("populares")]),t._v(" "),t.preloader?a("i",{staticClass:"fas fa-spinner fa-pulse fa-1x"}):t._e()]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"col-12 carrousel-container"},[a("div",{staticClass:"owl-carousel home__carousel swiper-wrapper"},t._l(t.productsPopularity.data,function(e,s){return a("div",{key:"c-prod-card"+s,staticClass:"item swiper-slide"},[a("c-prod-card",{attrs:{"media-type":t.productsPopularity.media,product:e}})],1)}),0)])])])]),t._v(" "),t._l(t.products,function(e,s){return a("section",{key:"c-prod-card"+s,staticClass:"section section--bg"},[a("div",{staticClass:"content__head"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",{staticClass:"section__title"},[t._v(t._s(e.label)+" "),t.preloader?a("i",{staticClass:"fas fa-spinner fa-pulse fa-1x"}):t._e()])])]),t._v(" "),a("div",{staticClass:"row"},t._l(e.data,function(t,s){return a("div",{key:"c-prod-card"+s,staticClass:"col-6 col-sm-4 col-lg-3 col-xl-2"},[a("c-prod-card",{attrs:{"class-name":"","media-type":e.media,product:t}})],1)}),0),t._v(" "),t._m(3,!0)])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"owl-carousel home__bg"},[e("div",{staticClass:"home__cover",staticStyle:{background:"url('static/img/home/home__bg4.jpg') center center / cover no-repeat"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"home__nav home__nav--prev",attrs:{type:"button"}},[e("i",{staticClass:"icon ion-ios-arrow-round-back"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"home__nav home__nav--next",attrs:{type:"button"}},[e("i",{staticClass:"icon ion-ios-arrow-round-forward"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 btn-see-more"},[e("a",{staticClass:"section__btn",attrs:{href:"#"}},[this._v("Veja +")])])}]};var y=a("VU/8")(w,b,!1,function(t){a("iFbj")},"data-v-2ac90839",null).exports,k=a("c/Tr"),x=a.n(k),j=a("0knB"),P=a.n(j),D=a("fZjL"),E=a.n(D),$=a("Zx67"),V=a.n($),S=a("Zrlr"),O=a.n(S),F=a("wxAW"),N=a.n(F),A=a("zwoO"),I=a.n(A),U=a("Pf15"),L=a.n(U),R=a("d7EF"),B=a.n(R),M=a("W3Iv"),T=a.n(M),q=a("uA3I"),G=a.n(q),H={genre:"",genre_name:"",sort:"",sort_name:"",dir:"",dir_name:"",year:""},W=function(t){function e(t){return O()(this,e),I()(this,(e.__proto__||V()(e)).call(this,"filter-"+t,H,"",1))}return L()(e,t),N()(e,[{key:"getUrlFilter",value:function(){var t=this.getStorageData();return delete t.genre_name,delete t.sort_name,delete t.dir_name,E()(t).map(function(e){return e+"="+(t[e]||"")}).join("&")}}]),e}(function(){function t(e,a,s,r,i){O()(this,t),r=void 0!==r?r:6,i=void 0!==i?i:"hour",this.storageName=e,this.valDefault=void 0!==s?s:"",this.__attrs=a,this.__force=!0,this.__time=r,this.__unidTime=i,this.myStorage=G()(C.b,r,i),this.__resetAll(!0),delete this.__force}return N()(t,[{key:"getStorageData",value:function(){return this.myStorage.get(this.storageName)}},{key:"setStorageData",value:function(t){return T()(t).length>0&&this.myStorage.set(this.storageName,t),this}},{key:"set",value:function(t,e){return(this.hasOwnProperty("__"+t)||void 0!==this.__force)&&(e=void 0!==e?e:"",this["__"+t]!==e&&(this["__"+t]=e,this.__persist(t))),this}},{key:"get",value:function(t,e){return e=void 0!==e?e:this.valDefault,t="__"+t,this.hasOwnProperty(t)?this[t]:e}},{key:"remove",value:function(){this.myStorage.remove(this.storageName),this.__resetAll()}},{key:"__resetAll",value:function(t){var e=this,a=this.getStorageData();T()(this.__attrs).forEach(function(s){var r=B()(s,2),i=r[0],n=r[1];a&&(!0===t&&(e.__noPersist=!0),a.hasOwnProperty(i)&&(n=a[i])),e.set(i,n)})}},{key:"__persist",value:function(t){var e=this.getStorageData(),a={};if(e){if(void 0!==t){var s="__"+t;this.hasOwnProperty(s)&&(e[t]=this[s]?this[s]:this.valDefault,a=e)}}else a=this.__attrs;return void 0===this.__noPersist?this.setStorageData(a):delete this.__noPersist,this}}]),t}()),X={props:{media:{type:String,required:!0}},components:{vueCustomScrollbar:P.a},data:function(){return{settings:{suppressScrollX:!0,wheelPropagation:!1,scrollingThreshold:500},genres:[],sort:[],dir:[{id:"asc",name:"Ascendente"},{id:"desc",name:"Decrescente"}],preloader:!1,storage:new W(this.media)}},methods:{selectItemDropDown:function(t,e){var a="Selecione",s=null;null!==t&&(s=t.id,a=t.name),this.storage.set(e,s),this.storage.set(e+"_name",a),this.__closeOpenDropDown()},getGenresList:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preloader=!0,e.next=3,window.axios.get("https://vue-flix-backend.herokuapp.com/genres/"+t.media).then(function(e){t.preloader=!1,t.genres=e.data}).catch(function(e){t.preloader=!1});case 3:case"end":return e.stop()}},e,t)}))()},filtering:function(){this.$emit("emit-filter")},minus:function(){this.__closeOpenDropDown();var t=parseInt(this.storage.get("year"));t>=1900&&this.storage.set("year",--t)},max:function(){this.__closeOpenDropDown();var t=parseInt(this.storage.get("year"));this.storage.set("year",++t)},__closeOpenDropDown:function(t){var e=document.getElementsByClassName("divDropDown");x()(e).forEach(function(e){if((void 0===t||t.getAttribute("data-action")!==e.getAttribute("data-action"))&&"true"===e.getAttribute("aria-expanded"))return document.getElementsByClassName("dropmenu-"+e.getAttribute("data-action"))[0].classList.remove("show"),void e.setAttribute("aria-expanded","false")})}},mounted:function(){this.storage.get("year")||(this.storage.set("genre_name","Selecione"),this.storage.set("sort","popularity"),this.storage.set("sort_name","Popularidade"),this.storage.set("dir","desc"),this.storage.set("dir_name","Decrescente"),this.storage.set("year",2020)),this.getGenresList(),this.sort.push({id:"voto_average",name:"Média dos Votos"}),this.sort.push({id:"popularity",name:"Popularidade"}),this.sort.push({id:"release_date",name:"Ano lançamento"}),"movie"===this.media&&(this.sort.push({id:"original_title",name:"Título"}),this.sort.push({id:"revenue",name:"Mais rentáveis"})),this.$refs.year.addEventListener("click",function(){this.select()},!1);var t=this,e=document.getElementsByClassName("divDropDown");x()(e).forEach(function(e){e.addEventListener("click",function(){t.__closeOpenDropDown(e);var a=document.getElementsByClassName("dropmenu-"+this.getAttribute("data-action"))[0];-1===a.className.indexOf("show")?(a.classList.add("show"),this.setAttribute("aria-expanded","true")):(a.classList.remove("show"),this.setAttribute("aria-expanded","false"))},!1)})}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"filter__content"},[a("div",{staticClass:"filter__items"},[a("div",{staticClass:"filter__item",attrs:{id:"filter__genre"}},[a("span",{staticClass:"filter__item-label"},[t._v("GÊNERO:"),t.preloader?a("i",{staticClass:"fas fa-spinner fa-pulse preloader fa-1x"}):t._e()]),t._v(" "),a("div",{staticClass:"filter__item-btn dropdown-toggle divDropDown",attrs:{"data-action":"genre",role:"navigation",id:"filter-genre","data-toggle":"dropdown","aria-expanded":"false"}},[a("input",{ref:"genre",attrs:{type:"button",value:t.storage.get("genre_name")}}),t._v(" "),a("span")]),t._v(" "),a("vue-custom-scrollbar",{key:"drop-genre",staticClass:"dropmenu-genre filter__item-menu dropdown-menu scrollbar-dropdown",attrs:{tagname:"ul",settings:t.settings,"aria-labelledby":"filter-genre"}},[a("li",{on:{click:function(e){return t.selectItemDropDown(null,"genre")}}},[t._v("Todos")]),t._v(" "),t._l(t.genres,function(e){return a("li",{key:"genre"+e.id,class:{active:e.id===t.storage.get("genre")},on:{click:function(a){return t.selectItemDropDown(e,"genre")}}},[t._v(t._s(e.name))])})],2)],1),t._v(" "),a("div",{staticClass:"filter__item",attrs:{id:"filter__sort"}},[a("span",{staticClass:"filter__item-label"},[t._v("ordenação:")]),t._v(" "),a("div",{staticClass:"filter__item-btn dropdown-toggle divDropDown",attrs:{"data-action":"sort",role:"navigation",id:"filter-sort","data-toggle":"dropdown","aria-expanded":"false"}},[a("input",{attrs:{type:"button",value:t.storage.get("sort_name")}}),t._v(" "),a("span")]),t._v(" "),a("vue-custom-scrollbar",{key:"drop-sort",staticClass:"dropmenu-sort filter__item-menu dropdown-menu scrollbar-dropdown",attrs:{tagname:"ul",settings:t.settings,"aria-labelledby":"filter-sort"}},t._l(t.sort,function(e){return a("li",{key:"sort-"+e.id,on:{click:function(a){return t.selectItemDropDown(e,"sort")}}},[t._v(t._s(e.name))])}),0)],1),t._v(" "),a("div",{staticClass:"filter__item",attrs:{id:"filter__year"}},[a("span",{staticClass:"filter__item-label"},[t._v("Ano:")]),t._v(" "),a("div",{staticClass:"filter__item-btn dropdown-toggle",attrs:{role:"navigation",id:"filter-quality","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"icon ion-ios-arrow-back",on:{click:t.minus}}),t._v(" "),a("input",{ref:"year",staticStyle:{"margin-right":"10px"},attrs:{type:"button",value:t.storage.get("year")}}),t._v(" "),a("i",{staticClass:"icon ion-ios-arrow-forward",on:{click:t.max}})])]),t._v(" "),a("div",{staticClass:"filter__item",attrs:{id:"filter__dir"}},[a("span",{staticClass:"filter__item-label"},[t._v("direção:")]),t._v(" "),a("div",{staticClass:"filter__item-btn dropdown-toggle divDropDown",attrs:{"data-action":"dir",role:"navigation",id:"filter-dir","data-toggle":"dropdown","aria-expanded":"false"}},[a("input",{attrs:{type:"button",value:t.storage.get("dir_name")}}),t._v(" "),a("span")]),t._v(" "),a("vue-custom-scrollbar",{key:"drop-dir",staticClass:"dropmenu-dir filter__item-menu dropdown-menu scrollbar-dropdown",attrs:{tagname:"ul",settings:t.settings,"aria-labelledby":"filter-dir"}},t._l(t.dir,function(e){return a("li",{key:"sort-"+e.id,on:{click:function(a){return t.selectItemDropDown(e,"dir")}}},[t._v(t._s(e.name))])}),0)],1)]),t._v(" "),a("button",{staticClass:"filter__btn",attrs:{type:"button"},on:{click:function(e){return t.filtering()}}},[t._v("filtrar")])])])])])])},staticRenderFns:[]};var Y=a("VU/8")(X,J,!1,function(t){a("pfjO")},"data-v-a949d5d2",null).exports,z={props:{route_name:{type:String,required:!0},current_page:{type:Number,default:0},total_pages:{type:Number,default:0},total_results:{type:Number,default:0},limit:{type:Number,default:0},links:{type:Number,default:2}},data:function(){return{last:null,start:null,end:null}},methods:{range:function(t,e){return Array(e-t+1).fill().map(function(e,a){return t+a})},clickPage:function(t){this.current_page!==t&&this.$router.push({name:this.route_name,params:{type:this.$route.params.media,page:t}})}},updated:function(){this.last=this.total_pages,this.start=this.current_page-this.links>0?this.current_page-this.links:1,this.end=this.current_page+this.links<this.last?this.current_page+this.links:this.last}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.total_results>0?a("ul",{staticClass:"paginator"},[1!=t.current_page?a("li",{staticClass:"paginator__item paginator__item--prev"},[a("a",{on:{click:function(e){return t.clickPage(t.current_page-1)}}},[a("i",{staticClass:"icon ion-ios-arrow-back"})])]):t._e(),t._v(" "),t.start>1?a("li",{staticClass:"paginator__item"},[a("a",{on:{click:function(e){return t.clickPage(1)}}},[t._v("1")])]):t._e(),t._v(" "),t.start>1?a("li",{staticClass:"paginator__item"},[a("a",{staticClass:"no-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.range(t.start,t.end),function(e){return a("li",{key:"page-item"+e,staticClass:"paginator__item",class:{"paginator__item--active":e===t.current_page}},[a("a",{on:{click:function(a){return t.clickPage(e)}}},[t._v(t._s(e))])])}),t._v(" "),t.end<t.last?a("li",{staticClass:"paginator__item"},[a("a",{staticClass:"no-link"},[t._v("...")])]):t._e(),t._v(" "),t.end<t.last?a("li",{staticClass:"paginator__item"},[a("a",{on:{click:function(e){return t.clickPage(t.last)}}},[t._v(t._s(t.last))])]):t._e(),t._v(" "),t.current_page!=t.last?a("li",{staticClass:"paginator__item paginator__item--next"},[a("a",{on:{click:function(e){return t.clickPage(t.current_page+1)}}},[a("i",{staticClass:"icon ion-ios-arrow-forward"})])]):t._e()],2):t._e()])},staticRenderFns:[]};var Z={props:{},components:{CFilter:Y,CProdCard:g,CPaginator:a("VU/8")(z,Q,!1,function(t){a("rchi")},"data-v-1fabdea0",null).exports},data:function(){return{preloader:!1,load:!1,media:this.$route.params.media,products:[],current_page:0,total_pages:0,total_results:0,urlFilter:"",storage:new W(this.$route.params.media)}},methods:{getList:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.load=!1,t.preloader=!0,t.products=[],e.next=5,window.axios.get("https://vue-flix-backend.herokuapp.com/media/"+t.media+"/search/"+t.current_page+"?"+t.urlFilter).then(function(e){t.preloader=!1,t.products=e.data,t.total_results=parseInt(e.headers["x-paginator-total-results"]),t.total_pages=parseInt(e.headers["x-paginator-total-pages"])}).catch(function(e){t.preloader=!1});case 5:case"end":return e.stop()}},e,t)}))()},filter:function(){this.urlFilter=this.storage.getUrlFilter(),this.load=!0,this.current_page>1&&(this.current_page=1,this.$router.push({name:this.$route.name,params:{media:this.media,page:this.current_page}}))},newPage:function(t){var e=this;return v()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.current_page=t,e.load=!0,e.$router.push({name:e.$route.name,params:{media:e.media,page:e.current_page}});case 3:case"end":return a.stop()}},a,e)}))()}},watch:{load:function(t){!0===t&&this.getList()}},updated:function(){},mounted:function(){this.urlFilter=this.storage.getUrlFilter(),this.$route.params.page?this.current_page=parseInt(this.$route.params.page):this.current_page=1,this.load=!0}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"section section--first section--bg media-grid",staticStyle:{background:"url(static/img/section.jpg) center center / cover no-repeat"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"section__wrap"},[a("h2",{staticClass:"section__title"},[t._v(t._s(t.media))]),t._v(" "),a("ul",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb__item"},[a("router-link",{attrs:{to:{name:"home"}}},[t._v("Inicio")])],1),t._v(" "),a("li",{staticClass:"breadcrumb__item breadcrumb__item--active"},[t._v(t._s(t.media))])])])])])])]),t._v(" "),a("c-filter",{attrs:{media:t.media},on:{"emit-filter":t.filter}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.preloader,expression:"!preloader"}],staticClass:"col-12"},[a("c-paginator",{key:"paginator-top",attrs:{route_name:"media-list",current_page:t.current_page,total_pages:t.total_pages,total_results:t.total_results,limit:20},on:{"emit-paginator-page":t.newPage}})],1),t._v(" "),a("div",{staticClass:"catalog"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t.preloader?a("div",{staticStyle:{"text-align":"center",width:"100%","margin-bottom":"50px"}},[a("i",{staticClass:"fas fa-spinner fa-pulse preloader fa-1x"})]):t._e(),t._v(" "),t._l(t.products,function(e,s){return a("div",{key:"prod"+s,staticClass:"col-6 col-sm-4 col-lg-3 col-xl-2"},[a("c-prod-card",{attrs:{"class-name":"","media-type":t.media,product:e}})],1)})],2)])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.preloader,expression:"!preloader"}],staticClass:"col-12"},[a("c-paginator",{key:"paginator-bottom",attrs:{route_name:"media-list",current_page:t.current_page,total_pages:t.total_pages,total_results:t.total_results,limit:20},on:{"emit-paginator-page":t.newPage}})],1)],1)},staticRenderFns:[]};var tt=a("VU/8")(Z,K,!1,function(t){a("wYNg")},"data-v-0eb99390",null).exports,et={props:{product:{type:Object,required:!0}}},at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"details__title"},[t._v(t._s(t.product.title))])]),t._v(" "),a("div",{staticClass:"col-10"},[a("div",{staticClass:"card card--details card--series"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3"},[a("div",{staticClass:"card__cover"},[a("img",{attrs:{src:t.product.poster_path,alt:"poster_path"}})])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9"},[a("div",{staticClass:"card__content"},[a("div",{staticClass:"card__wrap"},[a("span",{staticClass:"card__rate"},[a("i",{staticClass:"icon ion-ios-star"}),t._v(t._s(t.product.vote_average))])]),t._v(" "),a("ul",{staticClass:"card__meta"},[a("li",[a("span",[t._v("Gênero:")]),t._v(" "),t._l(t.product.genres,function(e,s){return a("a",{key:"genres-"+s,attrs:{href:"#"}},[t._v(t._s(e.name))])})],2),t._v(" "),a("li",[a("span",[t._v("Popularidade:")]),t._v(" "+t._s(t.product.popularity))]),t._v(" "),a("li",[a("span",[t._v("Produção:")]),t._v(" "),a("br"),t._l(t.product.production_companies,function(e,s){return a("a",{key:"production_companies-"+s,attrs:{href:"#"}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"card__description card__description--details"},[t._v("\n                                        "+t._s(t.product.overview)+"\n                                    ")])])])])])])])])])},staticRenderFns:[]};var st=a("VU/8")(et,at,!1,function(t){a("JVVr")},"data-v-19c9c308",null).exports,rt={props:{product:{type:Object,required:!0}}},it={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"details__title"},[t._v(t._s(t.product.name))])]),t._v(" "),a("div",{staticClass:"col-10"},[a("div",{staticClass:"card card--details card--series"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3"},[a("div",{staticClass:"card__cover"},[a("img",{attrs:{src:t.product.poster_path,alt:"poster_path"}})])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9"},[a("div",{staticClass:"card__content"},[a("div",{staticClass:"card__wrap"},[a("span",{staticClass:"card__rate"},[a("i",{staticClass:"icon ion-ios-star"}),t._v(t._s(t.product.vote_average))])]),t._v(" "),a("ul",{staticClass:"card__meta"},[a("li",[a("span",[t._v("Gênero:")]),t._v(" "),t._l(t.product.genres,function(e,s){return a("a",{key:"genres-"+s,attrs:{href:"#"}},[t._v(t._s(e.name))])})],2),t._v(" "),a("li",[a("span",[t._v("Popularidade:")]),t._v(" "+t._s(t.product.popularity))]),t._v(" "),a("li",[a("span",[t._v("Produção:")]),t._v(" "),a("br"),t._l(t.product.production_companies,function(e,s){return a("a",{key:"production_companies-"+s,attrs:{href:"#"}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"card__description card__description--details"},[t._v("\n                                        "+t._s(t.product.overview)+"\n                                    ")])])])])])])])])])},staticRenderFns:[]};var nt={props:{},data:function(){return{preloader:!1,product:null,layout:null}},components:{CMovieDetail:st,CTvDetail:a("VU/8")(rt,it,!1,function(t){a("M9CI")},"data-v-847c2d2e",null).exports},updated:function(){this.product&&(this.layout="c-"+this.$route.params.type+"-detail")},methods:{getDetail:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preloader=!0,e.next=3,window.axios.get("https://vue-flix-backend.herokuapp.com/media/"+t.$route.params.type+"/"+ +t.$route.params.id).then(function(e){t.preloader=!1,t.product=e.data}).catch(function(e){console.log(e),t.preloader=!1});case 3:case"end":return e.stop()}},e,t)}))()}},created:function(){this.getDetail()}},ot={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section details"},[t.preloader?a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"fas fa-spinner fa-pulse preloader fa-1x"})]):t._e(),t._v(" "),t.product?a("div",{staticClass:"details__bg",style:"background: url("+t.product.backdrop_path+") center center / cover no-repeat;"}):t._e(),t._v(" "),a(t.layout,{tag:"component",attrs:{product:t.product}})],1)},staticRenderFns:[]};var ct={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v("Página de 404")])])}]},lt=[{path:"/",component:y,name:"home"},{path:"/detail/:type/:id",component:a("VU/8")(nt,ot,!1,function(t){a("ABYE")},"data-v-01c2cf1e",null).exports,name:"prod-detail"},{path:"/:media/:page?",component:tt,name:"media-list"},{path:"*",name:"404",component:a("VU/8")(null,ct,!1,null,null,null).exports}];a("YW59");s.a.use(d.a);var dt=new d.a({routes:lt});dt.beforeEach(function(t,e,a){a()});var _t=dt;a("kBzv"),s.a.config.productionTip=!1,new s.a({el:"#app",router:_t,components:{App:l},template:"<App/>"})},OZHo:function(t,e){},W8vS:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"a",function(){return r});var s="vueflix",r="668c7a3f4c06597eb4ec7315cfaa1f47"},iFbj:function(t,e){},kBzv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("W8vS"),r=a("uA3I"),i=a.n(r);window.myStorage=i()(s.b,6,"hour"),window.axios=a("mtWM"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.axios.defaults.headers.common["x-backend-token"]=s.a},pGqQ:function(t,e){},pfjO:function(t,e){},rchi:function(t,e){},wYNg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b2f14d89e929bb8bd07c.js.map