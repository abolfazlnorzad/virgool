(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunk/PostCategory"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostCategory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostCategory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/posts/NewPost */ "./resources/js/components/posts/NewPost.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PostCategory",
  components: {
    NewPost: _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.category.title
    };
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var posts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    var category = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    axios.get("/api/posts/category/".concat(root.$route.params.slug)).then(function (_ref2) {
      var data = _ref2.data;
      posts.value = data.posts;
      category.value = data.category;
    });

    var fetchNextPost = function fetchNextPost() {
      axios.get(posts.value.next_page_url).then(function (_ref3) {
        var _posts$value$data;

        var data = _ref3.data;

        (_posts$value$data = posts.value.data).push.apply(_posts$value$data, _toConsumableArray(data.posts.data));

        posts.value.next_page_url = data.posts.next_page_url;
      });
    };

    return {
      posts: posts,
      category: category,
      fetchNextPost: fetchNextPost
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c(
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
                  _c("div", [
                    _c("p", [_vm._v("نوشته های مربوط به دسته بندی")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "title" }, [
                      _vm._v(_vm._s(_vm.category.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("div", [
                    _c("p", [
                      _vm._v(
                        "تعداد نوشته های مربوطه: " +
                          _vm._s(_vm.category.posts_count)
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
                      key: post.id,
                      staticClass: "mt-10",
                      attrs: { data: post }
                    })
                  }),
                  _vm._v(" "),
                  !!_vm.posts.next_page_url
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "mt-12 mx-auto",
                          on: { click: _vm.fetchNextPost }
                        },
                        [
                          _vm._v(
                            "\n                    بارگذاری مطالب بیشتر\n                "
                          )
                        ]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/Post/PostCategory.vue":
/*!*************************************************!*\
  !*** ./resources/js/view/Post/PostCategory.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostCategory_vue_vue_type_template_id_d2b25f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true& */ "./resources/js/view/Post/PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true&");
/* harmony import */ var _PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCategory.vue?vue&type=script&lang=js& */ "./resources/js/view/Post/PostCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostCategory_vue_vue_type_template_id_d2b25f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostCategory_vue_vue_type_template_id_d2b25f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d2b25f3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Post/PostCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Post/PostCategory.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/view/Post/PostCategory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Post/PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/view/Post/PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_d2b25f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostCategory.vue?vue&type=template&id=d2b25f3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_d2b25f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_d2b25f3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);