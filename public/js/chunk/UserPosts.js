(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunk/UserPosts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserPosts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/User/UserPosts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/posts/NewPost */ "./resources/js/components/posts/NewPost.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserPosts",
  components: {
    NewPost: _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "\u067E\u0633\u062A \u0647\u0627\u06CC ".concat(this.user.name)
    };
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var posts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    var user = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    axios.get("/api/user-posts/".concat(root.$route.params.username)).then(function (_ref2) {
      var data = _ref2.data;
      user.value = data.user;
      posts.value = data.posts;
    });

    var fetchNextPosts = function fetchNextPosts() {
      axios.get(posts.value.next_page_url).then(function (_ref3) {
        var _posts$value$data;

        var data = _ref3.data;
        posts.value.next_page_url = data.posts.next_page_url;

        (_posts$value$data = posts.value.data).push.apply(_posts$value$data, _toConsumableArray(data.posts.data));
      });
    };

    var followUser = function followUser() {
      axios.post("/api/follows/".concat(user.value.username)).then(function () {
        user.value.is_follows = !user.value.is_follows;
      });
    };

    return {
      posts: posts,
      user: user,
      fetchNextPosts: fetchNextPosts,
      followUser: followUser
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/User/UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _vm.posts.data
        ? _c(
            "v-container",
            [
              _c(
                "v-row",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "8" } },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex flex-row align-center" },
                        [
                          _c("v-img", {
                            attrs: {
                              src: _vm.user.profile_src,
                              "max-width": "75px"
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "title mr-5" }, [
                            _vm._v(_vm._s(_vm.user.name))
                          ]),
                          _vm._v(" "),
                          _vm.$store.state.user.isLoggedIn &&
                          _vm.user.id !== _vm.$store.state.user.user.id
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "darken-2 px-5 mr-3 mb-3",
                                  attrs: {
                                    color: _vm.user.is_follows
                                      ? "info"
                                      : "grey",
                                    rounded: "",
                                    dark: "",
                                    small: ""
                                  },
                                  on: { click: _vm.followUser }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.user.is_follows
                                          ? "دنبال میکنید"
                                          : "دنبال کنید"
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("div", [
                        _c("p", [
                          _vm._v(
                            "تعداد نوشته های مربوطه: " +
                              _vm._s(_vm.user.posts_count)
                          )
                        ]),
                        _vm._v(" "),
                        _c("p")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "8" } },
                    [
                      _vm._l(_vm.posts.data, function(post) {
                        return _c("new-post", {
                          key: post.slug,
                          staticClass: "mt-10",
                          attrs: { data: post }
                        })
                      }),
                      _vm._v(" "),
                      !_vm.posts.data.length
                        ? _c("span", [
                            _vm._v("پست برای این دسته بندی وجود ندارد!")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !!_vm.posts.next_page_url
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "mt-10",
                              on: { click: _vm.fetchNextPosts }
                            },
                            [_vm._v("صفحه بعدی\n                ")]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/User/UserPosts.vue":
/*!**********************************************!*\
  !*** ./resources/js/view/User/UserPosts.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserPosts_vue_vue_type_template_id_4b53fbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true& */ "./resources/js/view/User/UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true&");
/* harmony import */ var _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=script&lang=js& */ "./resources/js/view/User/UserPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPosts_vue_vue_type_template_id_4b53fbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserPosts_vue_vue_type_template_id_4b53fbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b53fbc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/User/UserPosts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/User/UserPosts.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/view/User/UserPosts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/User/UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/view/User/UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_4b53fbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/UserPosts.vue?vue&type=template&id=4b53fbc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_4b53fbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_4b53fbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);