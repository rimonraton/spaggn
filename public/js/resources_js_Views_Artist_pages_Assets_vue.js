"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Artist_pages_Assets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/helpers/assetform.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/helpers/assetform.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    bottomCloseButton: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['close'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var formData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      name: '',
      description: '',
      rights: false,
      terms: false,
      asset: null,
      fileExtension: '',
      fileFormat: '',
      videosrc: null,
      propertyData: [{
        property: "",
        value: ""
      }]
    });

    var addProperty = function addProperty() {
      formData.propertyData.push({
        property: '',
        value: ''
      });
    };

    var remove = function remove(index) {
      formData.propertyData.splice(index, 1);
    };

    var onFileChangePhoto = function onFileChangePhoto(e, photo) {
      if (e.target.files[0]) {
        var mimeType = e.target.files[0].type;
        console.log('split..', mimeType.split('/'));

        if (mimeType.split('/')[0] === 'image') {
          var reader = new FileReader(); // instance of the FileReader

          reader.readAsDataURL(e.target.files[0]); // read the local file

          reader.onloadend = function () {
            // set video data as background of div
            formData[photo] = reader.result;
            formData.fileFormat = mimeType.split('/')[0];
            formData.fileExtension = mimeType.split('/')[1];
          };
        } else if (mimeType.split('/')[0] === 'video') {
          formData.videosrc = e.target.files[0];
          var reader = new FileReader(); // instance of the FileReader

          reader.readAsDataURL(e.target.files[0]); // read the local file

          reader.onloadend = function () {
            // set video data as background of div
            formData[photo] = reader.result;
            formData.fileFormat = mimeType.split('/')[0];
            formData.fileExtension = mimeType.split('/')[1];
          };
        } else {
          formData[photo] = e.target.files[0];
        }
      } else {
        alert("file is empty!");
      }
    };

    var saveArtistAssetData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var assetData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log('form data...',formData)
                // return
                assetData = new FormData();
                assetData.append("name", formData.name);
                assetData.append("description", formData.description);
                assetData.append("rights", formData.rights);
                assetData.append("terms", formData.terms);
                assetData.append("asset", formData.asset);
                assetData.append("fileExtension", formData.fileExtension);
                assetData.append("fileFormat", formData.fileFormat);
                assetData.append("videosrc", formData.videosrc);
                assetData.append("propertyData", JSON.stringify(formData.propertyData));
                _context.prev = 10;
                loading.value = true;
                _context.next = 14;
                return store.dispatch('artistModule/createArtistAsset', assetData);

              case 14:
                clear();
                router.push('/view-your-assets');
                loading.value = false;

                if (props.bottomCloseButton) {
                  emit('close');
                }

                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](10);
                console.log(_context.t0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[10, 20]]);
      }));

      return function saveArtistAssetData() {
        return _ref2.apply(this, arguments);
      };
    }();

    var toggleModal = function toggleModal() {
      emit('close');
    };

    var clear = function clear() {
      formData.name = '', formData.description = '', formData.rights = false, formData.terms = false, formData.asset = null, formData.fileExtension = '', formData.fileFormat = '', formData.videosrc = null, formData.propertyData = [{
        property: "",
        value: ""
      }];
    };

    var __returned__ = {
      props: props,
      store: store,
      router: router,
      loading: loading,
      formData: formData,
      addProperty: addProperty,
      remove: remove,
      onFileChangePhoto: onFileChangePhoto,
      saveArtistAssetData: saveArtistAssetData,
      emit: emit,
      toggleModal: toggleModal,
      clear: clear,
      reactive: vue__WEBPACK_IMPORTED_MODULE_1__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore,
      useRouter: vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Assets.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Assets.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_assetform_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/assetform.vue */ "./resources/js/Views/Artist/helpers/assetform.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      AssetForm: _helpers_assetform_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/helpers/assetform.vue?vue&type=template&id=cac6cdbe":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/helpers/assetform.vue?vue&type=template&id=cac6cdbe ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white py-4 px-4 rounded-lg"
};
var _hoisted_2 = {
  "class": "container mx-auto lg:w-5/6"
};
var _hoisted_3 = {
  "class": "px-4 py-2 sm:px-0 text-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-xl font-medium leading-6 text-gray-900"
}, "Add New Asset", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red-500 h-6 w-6 text-2xl block"
}, " × ", -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  "class": "md:grid md:grid-cols-1 md:gap-6"
};
var _hoisted_8 = {
  "class": "mt-5 md:mt-0"
};
var _hoisted_9 = ["onSubmit"];
var _hoisted_10 = {
  "class": "grid md:grid-cols-1 md:gap-6 mb-6"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-xl font-medium text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Upload File "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red-500"
}, "*")], -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm"
}, "Add your unique image / video / audio file", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
};
var _hoisted_14 = {
  "class": "space-y-1 text-center"
};
var _hoisted_15 = {
  key: 0
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "mx-auto h-12 w-12 text-gray-400",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})], -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = ["src"];
var _hoisted_21 = {
  key: 1
};
var _hoisted_22 = {
  width: "200",
  controls: ""
};
var _hoisted_23 = ["src"];

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your browser does not support HTML5 video. ");

var _hoisted_25 = {
  "class": "flex text-sm text-gray-600"
};
var _hoisted_26 = {
  "for": "file-upload",
  "class": "relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Upload a file", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pl-1"
}, "or drag and drop", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xs text-gray-500"
}, "JPG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb.", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "mb-6 w-full group"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "floating_email",
  "class": "peer-focus:font-medium text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red-500"
}, "*")], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Choose a unique name for your NFT", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "relative mb-6 w-full"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "personal_story",
  "class": "block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Description "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm"
}, "Describe your NFT, help other users understand what's unique about it")], -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grid grid-cols-1 md:grid-cols-5 md:gap-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-span-1 md:col-span-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-xl font-medium text-gray-700"
}, " Properties "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm"
}, "List attributes that represents your NFT (color, shape, mood, etc..)")])], -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "mb-6 w-full group col-span-2"
};
var _hoisted_38 = ["onUpdate:modelValue"];
var _hoisted_39 = {
  "class": "mb-6 w-full group col-span-2"
};
var _hoisted_40 = ["onUpdate:modelValue"];
var _hoisted_41 = {
  "class": "relative z-0 mb-6 w-12 col-span-1 group"
};
var _hoisted_42 = ["onClick"];
var _hoisted_43 = {
  "class": "mb-6"
};
var _hoisted_44 = {
  "class": "flex items-center mb-4"
};
var _hoisted_45 = {
  "for": "default-checkbox",
  "class": "text-sm font-medium text-gray-900 dark:text-gray-300"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I approve that I'm the owner or have the rights of publication and sale. ");

var _hoisted_47 = {
  "class": "flex items-center"
};
var _hoisted_48 = {
  "for": "checked-checkbox",
  "class": "text-sm font-medium text-gray-900 dark:text-gray-300"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" I approve NFTrade's Terms & Conditions ");

var _hoisted_50 = {
  "class": "w-full"
};
var _hoisted_51 = {
  key: 0,
  type: "submit",
  "class": "bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase"
};
var _hoisted_52 = {
  key: 1,
  "class": "inline-flex items-center justify-center px-4 py-2 font-semibold w-full leading-6 text-sm shadow rounded-md text-white bg-blue-700 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed uppercase",
  disabled: ""
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
})], -1
/* HOISTED */
);

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your Asset is Uploading... ");

var _hoisted_55 = [_hoisted_53, _hoisted_54];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, $props.bottomCloseButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", {
    key: 0,
    "class": "text-3xl font-semibold cursor-pointer absolute right-0 top-0",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleModal();
    })
  }, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p class=\"mt-1 text-sm text-gray-600\">This information will be displayed publicly so be careful what you share.\r\n          </p> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.saveArtistAssetData, ["prevent"]),
    enctype: "multipart/form-data"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_11, _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [$setup.formData.asset == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, _hoisted_17)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [$setup.formData.fileFormat == 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "mx-auto w-12 h-12",
    src: $setup.formData.asset
  }, null, 8
  /* PROPS */
  , _hoisted_20)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.formData.fileFormat == 'video' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("video", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("source", {
    src: $setup.formData.asset,
    id: "video_here"
  }, null, 8
  /* PROPS */
  , _hoisted_23), _hoisted_24])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "file-upload",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $setup.onFileChangePhoto($event, 'asset');
    }),
    name: "file-upload",
    type: "file",
    "class": "sr-only"
  }, null, 32
  /* HYDRATE_EVENTS */
  )]), _hoisted_28]), _hoisted_29])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, _hoisted_32, _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.formData.name = $event;
    }),
    id: "floating_email",
    "class": "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    placeholder: "Enter the NTF's name",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.formData.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "personal_story",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.formData.description = $event;
    }),
    rows: "4",
    "class": "block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300",
    placeholder: "NFT description..."
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.formData.description]])]), _hoisted_36, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.formData.propertyData, function (pd, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "grid grid-cols-1 md:grid-cols-5 md:gap-6",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return pd.property = $event;
      },
      name: "floating_first_name",
      id: "floating_first_name",
      "class": "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      placeholder: "Property"
    }, null, 8
    /* PROPS */
    , _hoisted_38), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pd.property]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return pd.value = $event;
      },
      name: "floating_last_name",
      id: "floating_last_name",
      "class": "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      placeholder: "Value"
    }, null, 8
    /* PROPS */
    , _hoisted_40), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, pd.value]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "bg-red-500 px-3 py-2 rounded text-xl text-white cursor-pointer mr-2",
      onClick: function onClick($event) {
        return $setup.remove(index);
      }
    }, "X", 8
    /* PROPS */
    , _hoisted_42), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index > 0]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "bg-blue-500 px-3 py-2 rounded text-xl text-white cursor-pointer",
      onClick: $setup.addProperty
    }, "+", 512
    /* NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index == 0]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "default-checkbox",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.formData.rights = $event;
    }),
    type: "checkbox",
    value: "rights",
    "class": "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.formData.rights]]), _hoisted_46])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "checked-checkbox",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.formData.terms = $event;
    }),
    type: "checkbox",
    value: "terms",
    "class": "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.formData.terms]]), _hoisted_49])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [!$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_51, " Upload Your Asset ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_52, _hoisted_55))])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_9)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Assets.vue?vue&type=template&id=3afc54b2":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Assets.vue?vue&type=template&id=3afc54b2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AssetForm"]);
}

/***/ }),

/***/ "./resources/js/Views/Artist/helpers/assetform.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Views/Artist/helpers/assetform.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assetform_vue_vue_type_template_id_cac6cdbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetform.vue?vue&type=template&id=cac6cdbe */ "./resources/js/Views/Artist/helpers/assetform.vue?vue&type=template&id=cac6cdbe");
/* harmony import */ var _assetform_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetform.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Views/Artist/helpers/assetform.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_spaggn_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_spaggn_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_assetform_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_assetform_vue_vue_type_template_id_cac6cdbe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Artist/helpers/assetform.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Artist/pages/Assets.vue":
/*!****************************************************!*\
  !*** ./resources/js/Views/Artist/pages/Assets.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Assets_vue_vue_type_template_id_3afc54b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets.vue?vue&type=template&id=3afc54b2 */ "./resources/js/Views/Artist/pages/Assets.vue?vue&type=template&id=3afc54b2");
/* harmony import */ var _Assets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Views/Artist/pages/Assets.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_spaggn_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_spaggn_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Assets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Assets_vue_vue_type_template_id_3afc54b2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Artist/pages/Assets.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Artist/helpers/assetform.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Views/Artist/helpers/assetform.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_assetform_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_assetform_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assetform.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/helpers/assetform.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Artist/pages/Assets.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Views/Artist/pages/Assets.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Assets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Assets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Assets.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Assets.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Artist/helpers/assetform.vue?vue&type=template&id=cac6cdbe":
/*!***************************************************************************************!*\
  !*** ./resources/js/Views/Artist/helpers/assetform.vue?vue&type=template&id=cac6cdbe ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_assetform_vue_vue_type_template_id_cac6cdbe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_assetform_vue_vue_type_template_id_cac6cdbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assetform.vue?vue&type=template&id=cac6cdbe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/helpers/assetform.vue?vue&type=template&id=cac6cdbe");


/***/ }),

/***/ "./resources/js/Views/Artist/pages/Assets.vue?vue&type=template&id=3afc54b2":
/*!**********************************************************************************!*\
  !*** ./resources/js/Views/Artist/pages/Assets.vue?vue&type=template&id=3afc54b2 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Assets_vue_vue_type_template_id_3afc54b2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Assets_vue_vue_type_template_id_3afc54b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Assets.vue?vue&type=template&id=3afc54b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Artist/pages/Assets.vue?vue&type=template&id=3afc54b2");


/***/ })

}]);