(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7HaR":function(t,e,s){"use strict";s.r(e);var a={name:"Dashboard",metaInfo:{title:"داشبورد ادمین"},data:function(){return{search:null,model:null,isLoading:!1,counts:{},items:[],breadcrumbs:[{text:"داشبورد",disabled:!0,to:{name:"admin-dashboard"},exact:!0}],posts:[]}},watch:{search:function(t){var e=this;t.length<=0||this.isLoading||(this.isLoading=!0,axios.get("/api/admin/feature-posts-search?q=".concat(t)).then((function(t){var s=t.data;e.items=s.data})).finally((function(){return e.isLoading=!1})))}},created:function(){var t=this;this.fetchFeaturePosts(),axios.get("/api/admin/dashboard").then((function(e){var s=e.data;t.counts=s.data}))},methods:{sendPost:function(t){var e=this;axios.post("/api/admin/feature-post/".concat(t.slug)).then((function(){e.fetchFeaturePosts(),e.model=null,e.search=null}))},fetchFeaturePosts:function(){var t=this;axios.get("/api/admin/feature-posts").then((function(e){var s=e.data;t.posts=s.posts}))},deleteFeaturePost:function(t){var e=this;axios.delete("/api/admin/feature-post/".concat(t)).then((function(){e.fetchFeaturePosts()}))}}},n=(s("G+MC"),s("KHd+")),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-container",[s("v-row",[s("v-col",{staticClass:"mt-10",attrs:{cols:"12"}},[s("p",{staticClass:"headline font-weight-bold mb-8"},[t._v("داشبورد")]),t._v(" "),s("div",{staticClass:"d-flex flex-row justify-space-between"},[s("div",{staticClass:"d-flex flex-row users-count py-5 px-3"},[s("span",{staticClass:"white--text"},[t._v("تعداد کاربران")]),t._v(" "),s("v-spacer"),t._v(" "),s("span",{staticClass:"white--text"},[t._v(t._s(t.counts.users_count))])],1),t._v(" "),s("div",{staticClass:"d-flex flex-row posts-count py-5 px-3"},[s("span",{staticClass:"white--text"},[t._v("تعداد پست ها")]),t._v(" "),s("v-spacer"),t._v(" "),s("span",{staticClass:"white--text"},[t._v(t._s(t.counts.posts_count))])],1),t._v(" "),s("div",{staticClass:"d-flex flex-row categories-count py-5 px-3"},[s("span",{staticClass:"white--text"},[t._v("تعداد دسته بندی ها")]),t._v(" "),s("v-spacer"),t._v(" "),s("span",{staticClass:"white--text"},[t._v(t._s(t.counts.categories_count))])],1),t._v(" "),s("div",{staticClass:"d-flex flex-row comments-count py-5 px-3"},[s("span",{staticClass:"white--text"},[t._v("تعداد نظرات")]),t._v(" "),s("v-spacer"),t._v(" "),s("span",{staticClass:"white--text"},[t._v(t._s(t.counts.comments_count))])],1)]),t._v(" "),s("v-breadcrumbs",{staticClass:"mb-10",attrs:{items:t.breadcrumbs}}),t._v(" "),s("p",{staticClass:"headline mb-10"},[t._v("پست های ویژه صفحه اصلی")]),t._v(" "),s("v-autocomplete",{attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","hide-selected":"","item-text":"title","item-value":"slug",label:"اضافه کردن به پست های ویژه",placeholder:"جستجو در همه عنوان و محتوای پست ها","return-object":"",outlined:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:t.sendPost},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),t._v(" "),s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-right"},[t._v("عکس نوشته")]),t._v(" "),s("th",{staticClass:"text-right"},[t._v("عنوان نوشته")]),t._v(" "),s("th",{staticClass:"text-right"},[t._v("نویسنده")]),t._v(" "),s("th",{staticClass:"text-right"})])]),t._v(" "),s("tbody",t._l(t.posts,(function(e){return s("tr",{key:e.post.slug},[s("td",[s("v-img",{staticClass:"my-3",attrs:{src:e.post.image,"max-width":"80px","max-height":"80px"}})],1),t._v(" "),s("td",[t._v(t._s(e.post.title))]),t._v(" "),s("td",[t._v(t._s(e.post.user.name))]),t._v(" "),s("td",[s("v-btn",{on:{click:function(s){return t.deleteFeaturePost(e.post.slug)}}},[s("v-icon",{staticClass:"red--text"},[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,"016b03ca",null);e.default=o.exports},"7qXO":function(t,e,s){var a=s("a8zq");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},"G+MC":function(t,e,s){"use strict";s("7qXO")},"KHd+":function(t,e,s){"use strict";function a(t,e,s,a,n,o,i,c){var r,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=s,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),i?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=r):n&&(r=c?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(d.functional){d._injectStyles=r;var u=d.render;d.render=function(t,e){return r.call(e),u(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,r):[r]}return{exports:t,options:d}}s.d(e,"a",(function(){return a}))},a8zq:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".users-count[data-v-016b03ca]{background:#b92b27;background:linear-gradient(90deg,#1565c0,#b92b27)}.posts-count[data-v-016b03ca],.users-count[data-v-016b03ca]{border-radius:.6rem;width:20%}.posts-count[data-v-016b03ca]{background:#11998e;background:linear-gradient(90deg,#38ef7d,#11998e)}.categories-count[data-v-016b03ca]{border-radius:.6rem;width:20%;background:#fc4a1a;background:linear-gradient(90deg,#f7b733,#fc4a1a)}.comments-count[data-v-016b03ca]{border-radius:.6rem;width:20%;background:#43c6ac;background:linear-gradient(90deg,#191654,#43c6ac)}",""])}}]);