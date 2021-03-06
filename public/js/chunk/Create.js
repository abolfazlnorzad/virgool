(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunk/Create"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _components_TipTap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TipTap */ "./resources/js/components/TipTap.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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
  name: "Create",
  components: {
    TipTap: _components_TipTap__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup(props, _ref) {
    var root = _ref.root,
        refs = _ref.refs;
    var title = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    var content = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    var requestType = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('post');
    var requestURI = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('/api/posts/create');
    var snackbar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["reactive"])({
      saved: false,
      error: false
    });
    var link = root.$route.params.link;

    if (link) {
      requestType.value = 'patch';
      requestURI.value = '/api/drafts/' + link;
      axios.get("/api/drafts/".concat(link)).then(function (_ref2) {
        var data = _ref2.data;
        title.value = data.title;
        content.value = data.content;
        refs.tiptap.editor.setContent(data.content);
      })["catch"](function (_ref3) {
        var response = _ref3.response;

        if (response.status === 404) {
          root.$router.push({
            name: 'not-found'
          });
        }

        if (response.status === 403) {
          root.$router.push({
            name: 'access-denied'
          });
        }
      });
    }

    var setContent = function setContent(event) {
      content.value = event;
    };

    var changeDraft = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
      saveDraftUpdate().then(function (_ref4) {
        var data = _ref4.data;

        if (requestType.value === 'post') {
          history.replaceState({}, ' ', data.link);
          requestURI.value = "/api".concat(data.link);
        }

        requestType.value = 'patch';
        snackbar.saved = true;
      })["catch"](function () {
        snackbar.error = true;
      });
    }, 2000);

    var saveDraftUpdate = function saveDraftUpdate() {
      return root.$store.dispatch('draft/saveDraft', {
        requestType: requestType.value,
        requestURI: requestURI.value,
        title: title.value,
        content: content.value
      });
    };

    var saveDraft = function saveDraft() {
      changeDraft.cancel();
      saveDraftUpdate().then(function (_ref5) {
        var data = _ref5.data;
        root.$router.push("".concat(data.link, "/save"));
      });
    };

    var showDraftSave = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return title.value && content.value;
    });
    return {
      saveDraft: saveDraft,
      showDraftSave: showDraftSave,
      title: title,
      requestType: requestType,
      content: content,
      requestURI: requestURI,
      snackbar: snackbar,
      changeDraft: changeDraft,
      setContent: setContent
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor {\n  position: relative;\n}\n.editor__floating-menu {\n  position: absolute;\n  z-index: 1;\n  margin-top: -0.25rem;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.editor__floating-menu.is-active {\n  opacity: 1;\n  visibility: visible;\n}\n.editor p.is-editor-empty:first-child::before {\n  content: attr(data-empty-text);\n  float: right;\n  color: #aaa;\n  pointer-events: none;\n  height: 0;\n  font-style: italic;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=template&id=89852642&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/Create.vue?vue&type=template&id=89852642& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-form",
                { staticClass: "editor" },
                [
                  _c("v-text-field", {
                    attrs: { placeholder: "عنوان متن" },
                    on: { input: _vm.changeDraft },
                    model: {
                      value: _vm.title,
                      callback: function($$v) {
                        _vm.title = $$v
                      },
                      expression: "title"
                    }
                  }),
                  _vm._v(" "),
                  _c("tip-tap", {
                    ref: "tiptap",
                    on: { input: _vm.changeDraft },
                    model: {
                      value: _vm.content,
                      callback: function($$v) {
                        _vm.content = $$v
                      },
                      expression: "content"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.showDraftSave
                ? _c(
                    "v-btn",
                    {
                      attrs: { color: "info" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.saveDraft($event)
                        }
                      }
                    },
                    [_vm._v("\n                دخیره ی پیش نویس\n            ")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: "primary", timeout: "3000" },
          model: {
            value: _vm.snackbar.saved,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "saved", $$v)
            },
            expression: "snackbar.saved"
          }
        },
        [
          _vm._v("\n        پیش نویس شما با موفقیت ذخیره گردید\n        "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  _vm.snackbar.saved = false
                }
              }
            },
            [_vm._v("\n            بستن\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: "error", timeout: "0" },
          model: {
            value: _vm.snackbar.error,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "error", $$v)
            },
            expression: "snackbar.error"
          }
        },
        [
          _vm._v("\n        پیش نویس شما با موفقیت ایجاد نشد\n        "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  _vm.snackbar.error = false
                }
              }
            },
            [_vm._v("\n            بستن\n        ")]
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

/***/ "./resources/js/view/Post/Create.vue":
/*!*******************************************!*\
  !*** ./resources/js/view/Post/Create.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_89852642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=89852642& */ "./resources/js/view/Post/Create.vue?vue&type=template&id=89852642&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/view/Post/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_89852642___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_89852642___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Post/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Post/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/view/Post/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/view/Post/Create.vue?vue&type=template&id=89852642&":
/*!**************************************************************************!*\
  !*** ./resources/js/view/Post/Create.vue?vue&type=template&id=89852642& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_89852642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=89852642& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/Create.vue?vue&type=template&id=89852642&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_89852642___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_89852642___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);