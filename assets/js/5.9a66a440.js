(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{412:function(t,e,a){},413:function(t,e,a){},414:function(t,e,a){},418:function(t,e,a){},419:function(t,e,a){"use strict";a(31),a(44),a(35),a(423),a(216);var n=a(25),o={props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},filters:{formatDateValue:function(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));var e=Number(t.substr(11,2)),a=Number(t.substr(14,2)),o=Number(t.substr(17,2));return e>0||a>0||o>0?Object(n.f)(t):Object(n.f)(t,"yyyy-MM-dd")}},methods:{goTags:function(t){this.$route.path!=="/tag/".concat(t,"/")&&this.$router.push({path:"/tag/".concat(t,"/")})}}},s=(a(425),a(4)),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-info"},[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?a("i",{staticClass:"iconfont reco-account"},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("i",{staticClass:"iconfont reco-date"},[a("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("i",{staticClass:"iconfont reco-eye"},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(e,n){return a("span",{key:n,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return a.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()])}),[],!1,null,"0efa1f05",null);e.a=r.exports},425:function(t,e,a){"use strict";a(412)},426:function(t,e,a){"use strict";a(413)},427:function(t,e,a){"use strict";a(414)},428:function(t,e,a){"use strict";a(215);e.a={methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},429:function(t,e,a){"use strict";a(31);var n={components:{PageInfo:a(419).a},props:["item","currentPage","currentTag"]},o=(a(426),a(4)),s={components:{NoteAbstractItem:Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-item draw",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?a("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),a("div",{staticClass:"cover"},[a("img",{staticClass:"cover-img",attrs:{src:t.item.frontmatter.cover||"https://tva1.sinaimg.cn/large/e6c9d24ely1go71bxll33j21hb0u0npl.jpg",alt:t.item.title}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)])}),[],!1,null,"a96f4a62",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData:function(){var t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},r=(a(427),Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"166365f0",null));e.a=r.exports},434:function(t,e,a){"use strict";a(418)},435:function(t,e,a){"use strict";var n=a(30),o=(a(121),a(125)),s={props:{currentTag:{type:String,default:""}},computed:{tags:function(){return[{name:this.$recoLocales.tag.all,path:"/tag/"}].concat(Object(n.a)(this.$tags.list))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)},getOneColor:o.a}},r=(a(434),a(4)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,n){return a("span",{key:n,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"361d6d7c",null);e.a=i.exports},454:function(t,e,a){},455:function(t,e,a){},456:function(t,e,a){},457:function(t,e,a){},458:function(t,e,a){},459:function(t,e,a){},484:function(t,e,a){"use strict";a(454)},485:function(t,e,a){"use strict";a(455)},487:function(t,e,a){"use strict";a(456)},488:function(t,e,a){"use strict";a(457)},489:function(t,e,a){"use strict";a(458)},490:function(t){t.exports=JSON.parse('{"a":"1.5.5"}')},491:function(t,e,a){"use strict";a(459)},496:function(t,e,a){"use strict";a.r(e);var n=a(436),o=a(416),s=a(415),r={mixins:[s.a],components:{NavLink:n.a,ModuleTransition:o.a},computed:{actionLink:function(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},i=(a(484),a(4)),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco"))]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=(a(63),a(19),a(435)),u=a(8),h=(a(45),a(422)),d=a.n(h),f=a(125),g={data:function(){return{popupWindowStyle:{},isPC:!0}},mounted:function(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:this.isPC=!0},computed:{dataAddColor:function(){var t=this.$themeConfig.friendLink;return t&&t.length>0?t=t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{color:Object(f.a)()})})):[]}},methods:{getMd5:function(t){return d()(t)},showDetail:function(t){var e=this,a=t.target,n=a.querySelector(".popup-window-wrapper"),o=a.querySelector(".popup-window"),s=document.querySelector(".info-wrapper");n.style.display="block";var r=a.clientWidth,i=o.clientWidth,c=o.clientHeight;if(this.isPC)this.popupWindowStyle={left:(r-i)/2+"px",top:-c+"px"},s.style.overflow="visible",this.$nextTick((function(){e._adjustPosition(a.querySelector(".popup-window"))}));else{var l=function(t){var e=document,a=t.getBoundingClientRect(),n=a.left,o=a.top;return{left:n+=e.documentElement.scrollLeft||e.body.scrollLeft,top:o+=e.documentElement.scrollTop||e.body.scrollTop}};s.style.overflow="hidden";var u=l(a).left-l(s).left;this.popupWindowStyle={left:-u+(s.clientWidth-o.clientWidth)/2+"px",top:-c+"px"}}},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl:function(t){var e=t.logo,a=t.email;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):"//1.gravatar.com/avatar/".concat(this.getMd5(a||""),"?s=50&amp;d=mm&amp;r=x")},_adjustPosition:function(t){var e=document.body.offsetWidth,a=t.getBoundingClientRect(),n=e-(a.x+a.width);if(n<0){var o=t.offsetLeft;this.popupWindowStyle=Object(u.a)(Object(u.a)({},this.popupWindowStyle),{},{left:o+n+"px"})}}}},p=(a(485),Object(i.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,n){return a("div",{key:n,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"35b399cf",null).exports),m=a(429),v=a(428),_=a(465),C=a(486),w=a.n(C),y={mixins:[v.a,s.a],components:{NoteAbstract:m.a,TagList:l.a,FriendLink:p,ModuleTransition:o.a,PersonalInfo:_.a},data:function(){return{recoShow:!1,currentPage:1,tags:[],zh:"",en:""}},computed:{homeBlogCfg:function(){return this.$recoLocales.homeBlog},actionLink:function(){var t=this.$frontmatter;return{link:t.actionLink,text:t.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{}},bgImageStyle:function(){},heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){this.motto(),this.recoShow=!0,this._setPage(this._getStoragePage()),w.a.init()},methods:{motto:function(){var t=this;this.$axios.get("http://dawn.houcy7.com/ciba").then((function(e){t.zh=e.data.note||"努力不一定成功 但放弃一定失败",t.en=e.data.content||"Presistence not necessarily bring success,but giving up is bound to fail."})).catch((function(e){console.log(e);var a={zh:"愿你保持初心和善良,笑里尽是温暖与坦荡。",en:"May you keep your original heart and kindness, and smile with warmth and magnanimity."};t.zh=a.content,t.en=a.content}))},getCurrentPage:function(t){var e=this;this._setPage(t),setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPages:function(){var t=this.$site.pages;t=t.filter((function(t){var e=t.frontmatter,a=e.home,n=e.date;return!(1==a||void 0===n)})),this.pages=0==t.length?[]:t},getPagesByTags:function(t){this.$router.push({path:t.path})},_setPage:function(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:f.a}},$=(a(487),Object(i.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-blog"},[a("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[a("div",{staticClass:"motto"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04",duration:"0.5"}},[t.recoShowModule&&t.zh?a("h1",{staticClass:"longcang"},[t._v("\n                    "+t._s(t.zh)+"\n                ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08",duration:"0.5"}},[t.recoShowModule&&t.en?a("p",{staticClass:"description"},[t._v("\n                    "+t._s(t.en)+"\n                ")]):t._e()]),t._v(" "),a("a",{staticClass:"scroll-down bounce-enter-active down-arrow",attrs:{href:"#anchor"}})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper",attrs:{id:"anchor"}},[a("div",{staticClass:"blog-list"},[a("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),a("div",{staticClass:"info-wrapper"},[a("PersonalInfo"),t._v(" "),a("h4",[a("i",{staticClass:"iconfont reco-category"}),t._v(" "+t._s(t.homeBlogCfg.category))]),t._v(" "),a("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,n){return a("li",{key:n,staticClass:"category-item"},[a("router-link",{attrs:{to:e.path}},[a("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),a("hr"),t._v(" "),0!==t.$tags.list.length?a("h4",[a("i",{staticClass:"iconfont reco-tag"}),t._v(" "+t._s(t.homeBlogCfg.tag))]):t._e(),t._v(" "),a("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?a("h4",[a("i",{staticClass:"iconfont reco-friend"}),t._v(" "+t._s(t.homeBlogCfg.friendLink))]):t._e(),t._v(" "),a("FriendLink")],1)])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),b=(a(44),a(35),a(419)),S=a(25),k=a(61),x=a(30),P=(a(121),{computed:{headers:function(){return this.$showSubSideBar?this.$page.headers:[]}},methods:{isLinkActive:function(t){var e=Object(S.g)(this.$route,this.$page.path+"#"+t.slug);return e&&setTimeout((function(){document.querySelector(".reco-".concat(t.slug)).scrollIntoView()}),300),e}},render:function(t){var e=this;return t("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},Object(x.a)(this.headers.map((function(a){return t("li",{class:Object(k.a)({active:e.isLinkActive(a)},"level-".concat(a.level),!0),attr:{key:a.title}},[t("router-link",{class:Object(k.a)({"sidebar-link":!0},"reco-".concat(a.slug),!0),props:{to:"".concat(e.$page.path,"#").concat(a.slug)}},a.title)])}))))}}),T=(a(488),Object(i.a)(P,void 0,void 0,!1,null,"3f16d8a9",null).exports);function M(t,e,a){var n=[];!function t(e,a){for(var n=0,o=e.length;n<o;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(var o=0;o<n.length;o++){var s=n[o];if("page"===s.type&&s.path===decodeURIComponent(t.path))return n[o+a]}}var I={mixins:[s.a],components:{PageInfo:b.a,ModuleTransition:o.a,SubSidebar:T},props:["sidebarItems"],data:function(){return{isHasKey:!0}},computed:{shouldShowComments:function(){var t=this.$frontmatter.isShowComments,e=(this.$themeConfig.valineConfig||{showComment:!0}).showComment;return!1!==e&&!1!==t||!1===e&&!0===t},showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return!(!e||0==e.visitor)},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$frontmatter.prev;return!1===a?void 0:a?Object(S.m)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,-1))},next:function(){var t,e,a=this.$frontmatter.next;return!1===a?void 0:a?Object(S.m)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,a=t.editLinks,n=t.docsDir,o=void 0===n?"":n,s=t.docsBranch,r=void 0===s?"master":s,i=t.docsRepo,c=void 0===i?e:i;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,o,r,this.$page.relativePath):""},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"},pageStyle:function(){return this.$showSubSideBar?{}:{paddingRight:"0"}}},created:function(){},methods:{createEditLink:function(t,e,a,n,o){return/bitbucket.org/.test(t)?(S.k.test(e)?e:t).replace(S.d,"")+"/src"+"/".concat(n,"/")+(a?a.replace(S.d,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(S.k.test(e)?e:"https://github.com/".concat(e)).replace(S.d,"")+"/edit"+"/".concat(n,"/")+(a?a.replace(S.d,"")+"/":"")+o}}},L=(a(489),Object(i.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",style:t.pageStyle},[a("ModuleTransition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule&&t.$page.title,expression:"recoShowModule && $page.title"}],staticClass:"page-title"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?a("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule?a("SubSidebar",{staticClass:"side-bar"}):t._e()],1)],1)}),[],!1,null,null,null).exports),O=a(490),j={data:function(){return{version:O.a}},computed:{showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return!(!e||0==e.visitor)}}},N=(a(491),Object(i.a)(j,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("i",{staticClass:"iconfont reco-theme"}),t._v(" "),a("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("vuepress-theme-reco@"+t.version))])]),t._v(" "),t.$themeConfig.record?a("span",[a("i",{staticClass:"iconfont reco-beian"}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),a("span",[a("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),a("a",[t.$themeConfig.author||t.$site.title?a("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[a("i",{staticClass:"iconfont reco-eye"}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),a("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"4e1e9007",null).exports),B={components:{HomeBlog:$,Home:c,Page:L,Common:a(432).a,Footer:N},computed:{sidebarItems:function(){return Object(S.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom:function(){var t=this.$themeConfig.type;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"},all:function(){var t=this.$frontmatter.all;return void 0!==t&&t}}},A=(a(417),Object(i.a)(B,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{attrs:{sidebarItems:t.sidebarItems,all:t.all}},[t.$frontmatter.home?a(t.homeCom,{tag:"component"}):a("Page",{attrs:{"sidebar-items":t.sidebarItems}}),t._v(" "),t.$frontmatter.home?a("Footer",{staticClass:"footer"}):t._e()],1)}),[],!1,null,null,null));e.default=A.exports}}]);