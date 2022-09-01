"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Artist_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Home.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Home.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var profile = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    var gotoComment = function gotoComment() {
      var element = document.getElementById('comments');
      element.scrollIntoView({
        behavior: 'smooth'
      });
    };

    var gotoUp = function gotoUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    var getArtistProfile = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return store.dispatch('artistModule/getArtistProfile');

              case 2:
                res = _context.sent;
                profile.value = res;
                console.log('res', res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getArtistProfile() {
        return _ref2.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      getArtistProfile();
    });
    var __returned__ = {
      store: store,
      profile: profile,
      gotoComment: gotoComment,
      gotoUp: gotoUp,
      getArtistProfile: getArtistProfile,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Home.vue?vue&type=template&id=aa4dc7fa":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Home.vue?vue&type=template&id=aa4dc7fa ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex"
};
var _hoisted_2 = {
  id: "home"
};
var _hoisted_3 = {
  "class": "block"
};
var _hoisted_4 = {
  "class": "col-span-4"
};
var _hoisted_5 = {
  "class": "bg-white shadow"
};
var _hoisted_6 = {
  "class": "flex flex-row px-2 py-3 mx-3"
};
var _hoisted_7 = {
  "class": "flex flex-col mb-2 ml-4 mt-1"
};
var _hoisted_8 = {
  "class": "text-gray-600 text-2xl font-semibold"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full mt-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-gray-400 font-thin text-sm"
}, " Details about John Doe ")], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"bg-white shadow\"><div class=\"flex flex-row px-2 py-2 mx-3\"><div class=\"flex flex-col mb-2 ml-4 mt-1\"><div class=\"text-gray-600 text-2xl font-semibold\"> Bio </div><div class=\"w-full mt-1\"><div class=\"text-gray-400 font-thin text-l\"> Aaron Penne (&quot;peh-nay&quot;; he/him; b. 1988) is the Director of Engineering at Art Blocks and is the first AB artist to be featured in Curated, Playground, and Factory. He has been making generative artwork since 2017. Born in Chico, CA, Aaron graduated from the University of California San Diego with a master&#39;s degree in Electrical Engineering. He worked in that field before pivoting to software (data engineering) at Amazon Web Services (AWS) in Seattle. His artwork explores the space between algorithmic and organic. </div></div></div></div></div><div class=\"bg-white shadow rounded-lg mb-6\"><div class=\"flex flex-row px-2 py-3 mx-3\"><div class=\"flex flex-col mb-2 ml-4 mt-1\"><div class=\"text-gray-600 text-2xl font-semibold\"> Art Blocks Projects </div></div></div><div class=\"border-b border-gray-100\"></div><div class=\"text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2\"><div class=\"grid grid-cols-6 col-span-2 gap-2\"><div class=\"overflow-hidden rounded-xl col-span-3 max-h-[14rem]\"><img class=\"h-full w-full object-cover\" src=\"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80\" alt=\"\"></div><div class=\"overflow-hidden rounded-xl col-span-3 max-h-[14rem]\"><img class=\"h-full w-full object-cover\" src=\"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80\" alt=\"\"></div><div class=\"overflow-hidden rounded-xl col-span-2 max-h-[10rem]\"><img class=\"h-full w-full object-cover\" src=\"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80\" alt=\"\"></div><div class=\"overflow-hidden rounded-xl col-span-2 max-h-[10rem]\"><img class=\"h-full w-full object-cover\" src=\"https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80\" alt=\"\"></div><div class=\"relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]\"><img class=\"h-full w-full object-cover\" src=\"https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80\" alt=\"\"></div></div></div></div><div class=\"bg-white shadow rounded-lg mb-6\"><div class=\"flex flex-row px-2 py-3 mx-3\"><div class=\"flex flex-col mb-2 ml-4 mt-1\"><div class=\"text-gray-600 text-2xl font-semibold\"> Websites/Social Links </div><div class=\"flex gap-2 cursor-pointer\"><div><img src=\"https://tailus.io/sources/blocks/social/preview/images/google.svg\" class=\"w-5\" alt=\"google logo\"></div><div class=\"block font-semibold tracking-wide text-blue-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:underline\"> Google</div></div><div class=\"flex gap-2 cursor-pointer\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"w-5 text-gray-700\" viewBox=\"0 0 16 16\"><path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg><div class=\"block font-semibold tracking-wide text-blue-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:underline\"> Github</div></div><div class=\"flex gap-2 cursor-pointer\"><img src=\"https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg\" class=\"w-5\" alt=\"Facebook logo\"><div class=\"block font-semibold tracking-wide text-blue-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:underline\"> Facebook</div></div></div></div></div><div class=\"bg-white shadow rounded-lg mb-6\" id=\"comments\"><div class=\"rounded-xl border p-5 shadow-md w-full bg-white\"><div class=\"w-full border-b pb-3\"><div class=\"text-lg font-bold text-slate-700\">Comments</div></div><div class=\"mt-4 mb-6\"><!-- &lt;div class=&quot;mb-3 text-xl font-bold&quot;&gt;Nulla sed leo tempus, feugiat velit vel, rhoncus neque?&lt;/div&gt; --><div class=\"text-sm text-neutral-600\"> No comments yet.. </div></div></div></div>", 4);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.profile != null ? $setup.profile.name : ''), 1
  /* TEXT */
  ), _hoisted_9])])]), _hoisted_10])])])]);
}

/***/ }),

/***/ "./resources/js/Views/Artist/pages/Home.vue":
/*!**************************************************!*\
  !*** ./resources/js/Views/Artist/pages/Home.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_aa4dc7fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=aa4dc7fa */ "./resources/js/Views/Artist/pages/Home.vue?vue&type=template&id=aa4dc7fa");
/* harmony import */ var _Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Views/Artist/pages/Home.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_spaggn_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_spaggn_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_aa4dc7fa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Artist/pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Artist/pages/Home.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Views/Artist/pages/Home.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Home.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Artist/pages/Home.vue?vue&type=template&id=aa4dc7fa":
/*!********************************************************************************!*\
  !*** ./resources/js/Views/Artist/pages/Home.vue?vue&type=template&id=aa4dc7fa ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_aa4dc7fa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_aa4dc7fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=aa4dc7fa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Home.vue?vue&type=template&id=aa4dc7fa");


/***/ })

}]);