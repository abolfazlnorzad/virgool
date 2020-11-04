(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunk/PostShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-jalaali */ "./node_modules/moment-jalaali/index.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_jalaali__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Service/EventBus */ "./resources/js/Service/EventBus.js");
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
  name: "PostComments",
  props: ['data'],
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var showReply = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var showUpdate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var reply = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({
      content: null,
      comment_id: props.data.id
    });
    var cm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(props.data);

    var updateComment = function updateComment() {
      axios.patch("/api/comments/".concat(cm.value.id), reply.value).then(function (_ref2) {
        var data = _ref2.data;
        showUpdate.value = false;
        reply.value.content = null;
        cm.value.content = data.data.content;
      })["catch"](function () {
        errors.value.show = true;
        errors.value.msg = error.response.data.errors.content[0];
      });
    };

    var saveReply = function saveReply() {
      axios.post("/api/replies/".concat(root.$route.params.slug), reply.value).then(function () {
        showReply.value = false;
        reply.value.content = null;
      })["catch"](function (error) {
        errors.value.show = true;
        errors.value.msg = error.response.data.errors.content[0];
      });
    };

    var cancelReply = function cancelReply() {
      showReply.value = false;
      reply.value.content = null;
      showUpdate.value = false;
    };

    var errors = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({
      show: false,
      msg: ''
    });
    var showDeleteIconOrUpdate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return root.$store.state.user.isLoggedIn && root.$store.state.user.user.id == cm.value.user_id;
    });

    var deleteComment = function deleteComment() {
      axios["delete"]("/api/comments/".concat(cm.value.id));
    };

    var select = function select() {
      return showUpdate.value ? updateComment() : saveReply();
    };

    var opentTextareaForUpdate = function opentTextareaForUpdate() {
      reply.value.content = cm.value.content;
      showUpdate.value = true;
    };

    Echo.channel("virgool_reply_".concat(cm.value.id)).listen('.reply.created', function (_ref3) {
      var reply = _ref3.reply;
      cm.value.replies.push(reply);
      _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('comment_created');
    });
    Echo.channel("virgool_reply_".concat(props.data.id)).listen('CommentDeletedEvent', function (_ref4) {
      var comment = _ref4.comment;
      cm.value.replies = cm.value.replies.filter(function (c) {
        return c.id !== comment.id;
      });
      _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('comment_deleted');
    });
    return {
      deleteComment: deleteComment,
      showReply: showReply,
      moment: moment_jalaali__WEBPACK_IMPORTED_MODULE_0___default.a,
      saveReply: saveReply,
      reply: reply,
      cancelReply: cancelReply,
      errors: errors,
      showDeleteIconOrUpdate: showDeleteIconOrUpdate,
      showUpdate: showUpdate,
      select: select,
      cm: cm,
      opentTextareaForUpdate: opentTextareaForUpdate
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-jalaali */ "./node_modules/moment-jalaali/index.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_jalaali__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/posts/PostComments */ "./resources/js/components/posts/PostComments.vue");
/* harmony import */ var _Service_EventBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Service/EventBus */ "./resources/js/Service/EventBus.js");
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




moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default.a.loadPersian({
  usePersianDigits: true
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PostShow",
  components: {
    PostComments: _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.post.title,
      meta: [{
        name: 'description',
        content: this.post.description
      }]
    };
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var post = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var related_post = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var short_link = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    var comment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      content: '',
      post_id: null
    });
    var errors = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      show: false,
      msg: ''
    });
    axios.get("/api/posts/".concat(root.$route.params.slug)).then(function (_ref2) {
      var data = _ref2.data;
      post.value = data.post;
      related_post.value = data.related_post;
      short_link.value = "blog.test/link/".concat(data.post.short_link);
      comment.value.post_id = data.post.id;
      Echo.channel("virgool_comment_".concat(post.value.id)).listen('.comment.created', function (_ref3) {
        var comment = _ref3.comment;
        post.value.parent_comments.push(comment);
        _Service_EventBus__WEBPACK_IMPORTED_MODULE_3__["default"].$emit('comment_created');
      });
      Echo.channel("virgool_comment_".concat(post.value.id)).listen('CommentDeletedEvent', function (_ref4) {
        var comment = _ref4.comment;
        post.value.parent_comments = post.value.parent_comments.filter(function (c) {
          return c.id !== comment.id;
        });
        _Service_EventBus__WEBPACK_IMPORTED_MODULE_3__["default"].$emit('comment_deleted');
      });
    });
    _Service_EventBus__WEBPACK_IMPORTED_MODULE_3__["default"].$on('comment_created', function () {
      post.value.comments_count++;
    });
    _Service_EventBus__WEBPACK_IMPORTED_MODULE_3__["default"].$on('comment_deleted', function () {
      post.value.comments_count--;
    });

    var onCopy = function onCopy() {
      var link = short_link.value;
      short_link.value = 'کپی شد !';
      setTimeout(function () {
        short_link.value = link;
      }, 1500);
    };

    var sendComment = function sendComment() {
      axios.post("/api/comments/".concat(post.value.slug), comment.value).then(function (_ref5) {
        var data = _ref5.data;
        comment.value.content = null;
      })["catch"](function (error) {
        errors.value.show = true;
        errors.value.msg = error.response.data.errors.content[0];
      });
    };

    var bookmark = function bookmark(postModel) {
      postModel.is_bookmarked = !postModel.is_bookmarked;
      var reqType = postModel.is_bookmarked ? 'post' : 'delete';
      axios[reqType]("/api/bookmarks/".concat(postModel.slug));
    };

    var like = function like() {
      post.value.is_liked = !post.value.is_liked;
      var reqType = post.value.is_liked ? 'post' : 'delete';
      axios[reqType]("/api/likes/".concat(post.value.slug)).then(function () {
        post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
      });
    };

    var follow = function follow() {
      axios.post("/api/follows/".concat(post.value.user.username)).then(function () {
        post.value.user.is_follows = !post.value.user.is_follows;
      });
    };

    return {
      follow: follow,
      like: like,
      bookmark: bookmark,
      post: post,
      related_post: related_post,
      moment: moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default.a,
      short_link: short_link,
      onCopy: onCopy,
      comment: comment,
      sendComment: sendComment,
      errors: errors
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.body-text[data-v-e4eb1740] {\n    text-align: justify;\n    line-height: 2.3rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "mt-12" },
    [
      _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c(
            "div",
            { staticClass: "d-flex flex-row" },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    [_c("v-img", { attrs: { src: _vm.cm.user.profile_src } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(_vm._s(_vm.cm.user.name))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _vm._v(_vm._s(_vm.moment(_vm.cm.created_at).fromNow()))
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm.$store.state.user.isLoggedIn
                ? _c(
                    "v-icon",
                    {
                      staticClass: "mx-5",
                      on: {
                        click: function($event) {
                          _vm.showReply = true
                        }
                      }
                    },
                    [_vm._v("mdi-undo\n            ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.showDeleteIconOrUpdate
                ? _c(
                    "v-icon",
                    { staticClass: "ml-7", on: { click: _vm.deleteComment } },
                    [_vm._v("mdi-delete\n            ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.showDeleteIconOrUpdate
                ? _c(
                    "v-icon",
                    {
                      staticClass: "ml-7",
                      on: { click: _vm.opentTextareaForUpdate }
                    },
                    [
                      _vm._v(
                        "\n\n                mdi-file-document-edit\n            "
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v("\n            " + _vm._s(_vm.cm.content) + "\n        ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.showReply || _vm.showUpdate
        ? _c(
            "div",
            [
              _c("p", [_vm._v("دیدگاه ها")]),
              _vm._v(" "),
              [
                _c("v-textarea", {
                  attrs: {
                    outlined: "",
                    filled: "",
                    label: "نظر خود را بنویسید"
                  },
                  model: {
                    value: _vm.reply.content,
                    callback: function($$v) {
                      _vm.$set(_vm.reply, "content", $$v)
                    },
                    expression: "reply.content"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex flex-row" },
                  [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "info", large: "", rounded: "" },
                        on: { click: _vm.cancelReply }
                      },
                      [_vm._v("لغو\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "success", large: "", rounded: "" },
                        on: { click: _vm.select }
                      },
                      [_vm._v("ارسال دیدگاه\n                ")]
                    )
                  ],
                  1
                )
              ]
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.data.replies, function(comment) {
        return _c("post-comments", {
          key: comment.id,
          staticClass: "mr-4",
          attrs: { data: comment }
        })
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: "error" },
          model: {
            value: _vm.errors.show,
            callback: function($$v) {
              _vm.$set(_vm.errors, "show", $$v)
            },
            expression: "errors.show"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.errors.msg) + "\n    ")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _vm.post.user
    ? _c(
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
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            { attrs: { size: "80" } },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { size: "80" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.post.user.profile_src }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "v-list-item-title",
                                { staticClass: "font-weight-bold" },
                                [
                                  _vm._v(
                                    "\n                               " +
                                      _vm._s(_vm.post.user.name) +
                                      "\n                               "
                                  ),
                                  _vm.$store.state.user.isLoggedIn &&
                                  _vm.post.user.id !==
                                    _vm.$store.state.user.user.id
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "darken-2 px-5 mr-3 mb-3",
                                          attrs: {
                                            color: _vm.post.user.is_follows
                                              ? "info"
                                              : "grey",
                                            rounded: "",
                                            dark: "",
                                            small: ""
                                          },
                                          on: { click: _vm.follow }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                   " +
                                              _vm._s(
                                                _vm.post.user.is_follows
                                                  ? "دنبال میکنید"
                                                  : "دنبال کنید"
                                              ) +
                                              "                                "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-subtitle",
                                { staticClass: "body-2 grey--text" },
                                [
                                  _vm._v(
                                    "\n                               " +
                                      _vm._s(_vm.post.user.bio) +
                                      "\n                           "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-subtitle",
                                { staticClass: "caption grey--text" },
                                [
                                  _vm._v(
                                    "\n                               " +
                                      _vm._s(
                                        _vm
                                          .moment(_vm.post.created_at)
                                          .fromNow()
                                      ) +
                                      " / خواندن " +
                                      _vm._s(_vm.post.min_read) +
                                      " دقیقه\n                           "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-10" }, [
                        _c("h1", { staticClass: "title" }, [
                          _vm._v(_vm._s(_vm.post.title) + " ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [_c("v-img", { attrs: { src: _vm.post.image } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "mt-12",
                        domProps: { innerHTML: _vm._s(_vm.post.content) }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "my-10" },
                        _vm._l(_vm.post.categories, function(cate) {
                          return _c(
                            "v-btn",
                            {
                              key: cate.slug,
                              staticClass: "mr-5 ",
                              attrs: { depressed: "" }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "post-category",
                                      params: { slug: cate.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                              " +
                                      _vm._s(cate.title) +
                                      "\n                          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex flex-row mb-5" },
                        [
                          _vm.$store.state.user.isLoggedIn
                            ? _c(
                                "span",
                                {
                                  staticClass: "ml-5",
                                  on: {
                                    click: function($event) {
                                      return _vm.bookmark(_vm.post)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(
                                      "\n                               " +
                                        _vm._s(
                                          _vm.post.is_bookmarked
                                            ? "mdi-bookmark"
                                            : " mdi-bookmark-outline"
                                        ) +
                                        "\n                           "
                                    )
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.state.user.isLoggedIn
                            ? _c(
                                "span",
                                {
                                  staticClass: "ml-5",
                                  on: { click: _vm.like }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      class: { "red--text": _vm.post.is_liked }
                                    },
                                    [
                                      _vm._v(
                                        "\n                               " +
                                          _vm._s(
                                            _vm.post.is_liked
                                              ? "mdi-heart"
                                              : "mdi-heart-outline"
                                          ) +
                                          "\n\n                           "
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "\n" +
                                      _vm._s(_vm.post.likes_count) +
                                      "\n                       "
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "ml-5" },
                            [
                              _c("v-icon", [_vm._v("mdi-comment-outline")]),
                              _vm._v(
                                "\n                          " +
                                  _vm._s(_vm.post.comments_count) +
                                  "\n                       "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-icon", [_vm._v("mdi-telegram")]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              directives: [
                                {
                                  name: "clipboard",
                                  rawName: "v-clipboard:copy",
                                  value: _vm.short_link,
                                  expression: "short_link",
                                  arg: "copy"
                                },
                                {
                                  name: "clipboard",
                                  rawName: "v-clipboard:success",
                                  value: _vm.onCopy,
                                  expression: "onCopy",
                                  arg: "success"
                                }
                              ],
                              staticClass: "mr-3",
                              attrs: {
                                outlined: "",
                                rounded: "",
                                disabled: _vm.short_link == "کپی شد !"
                              }
                            },
                            [
                              _vm._v(
                                "\n                           " +
                                  _vm._s(_vm.short_link) +
                                  "\n\n                       "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-12" },
                        [
                          _c("p", { staticClass: "body-2 font-weight-bold" }, [
                            _vm._v("شاید از این نوشته‌ها هم خوشتان بیاید")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "v-row",
                                _vm._l(_vm.related_post, function(related) {
                                  return _c(
                                    "v-col",
                                    {
                                      key: related.slug,
                                      attrs: { cols: "12", md: "4" }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "post-show",
                                                  params: { slug: related.slug }
                                                }
                                              }
                                            },
                                            [
                                              _c("v-img", {
                                                attrs: { src: related.image }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-title",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "post-show",
                                                      params: {
                                                        slug: related.slug
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                               " +
                                                      _vm._s(related.title) +
                                                      "\n                                           "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            [
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-avatar",
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "user-posts",
                                                                  params: {
                                                                    username:
                                                                      related
                                                                        .user
                                                                        .username
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("v-img", {
                                                                attrs: {
                                                                  src:
                                                                    related.user
                                                                      .profile_src
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c(
                                                        "v-list-item-title",
                                                        {
                                                          staticClass:
                                                            "body-2 font-weight-bold"
                                                        },
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "user-posts",
                                                                  params: {
                                                                    username:
                                                                      related
                                                                        .user
                                                                        .username
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                           " +
                                                                  _vm._s(
                                                                    related.user
                                                                      .name
                                                                  ) +
                                                                  "\n                                                       "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          staticClass:
                                                            "caption grey--text"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                       " +
                                                              _vm._s(
                                                                related.min_read
                                                              ) +
                                                              "\n                                                   "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _vm.$store.state.user.isLoggedIn
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass: "ml-5",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.bookmark(
                                                            related
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "\n                               " +
                                                            _vm._s(
                                                              related.is_bookmarked
                                                                ? "mdi-bookmark"
                                                                : " mdi-bookmark-outline"
                                                            ) +
                                                            "\n                           "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-12" },
                        [
                          _c("p", [_vm._v("دیدگاه ها")]),
                          _vm._v(" "),
                          _vm.$store.state.user.isLoggedIn
                            ? [
                                _c("v-textarea", {
                                  attrs: {
                                    outlined: "",
                                    filled: "",
                                    label: "نظر خود را بنویسید"
                                  },
                                  model: {
                                    value: _vm.comment.content,
                                    callback: function($$v) {
                                      _vm.$set(_vm.comment, "content", $$v)
                                    },
                                    expression: "comment.content"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex flex-row" },
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "success",
                                          large: "",
                                          rounded: ""
                                        },
                                        on: { click: _vm.sendComment }
                                      },
                                      [
                                        _vm._v(
                                          "ارسال دیدگاه\n                               "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            : [
                                _c("span", [
                                  _vm._v(
                                    "برای ارسال دیدگاه باید وارد حساب کاربری تان شوید"
                                  )
                                ])
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.post.parent_comments, function(comment) {
                        return _c("post-comments", {
                          key: comment.id,
                          attrs: { data: comment }
                        })
                      })
                    ],
                    2
                  )
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
              attrs: { color: "error" },
              model: {
                value: _vm.errors.show,
                callback: function($$v) {
                  _vm.$set(_vm.errors, "show", $$v)
                },
                expression: "errors.show"
              }
            },
            [_vm._v("\n           " + _vm._s(_vm.errors.msg) + "\n       ")]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Service/EventBus.js":
/*!******************************************!*\
  !*** ./resources/js/Service/EventBus.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostComments.vue?vue&type=template&id=4443491b&scoped=true& */ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&");
/* harmony import */ var _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComments.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4443491b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PostComments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostComments.vue?vue&type=template&id=4443491b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue":
/*!*********************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& */ "./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&");
/* harmony import */ var _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostShow.vue?vue&type=script&lang=js& */ "./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& */ "./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e4eb1740",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Post/PostShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);