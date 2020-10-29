(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-010654d6"],{

/***/ "27ad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "adce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_4c5a2fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27ad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_4c5a2fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_4c5a2fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_4c5a2fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d8ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d21cfc6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoginDialog/component.vue?vue&type=template&id=4c5a2fab&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-dialog',{attrs:{"md-active":_vm.value}},[_c('md-dialog-title',[_vm._v("Login your Amazon SES account")]),_c('md-dialog-content',[_c('md-field',[_c('label',[_vm._v("Access Key ID")]),_c('md-input',{attrs:{"type":"password"},model:{value:(_vm.accessKeyId),callback:function ($$v) {_vm.accessKeyId=$$v},expression:"accessKeyId"}})],1),_c('md-field',[_c('label',[_vm._v("Secret Access Key")]),_c('md-input',{attrs:{"type":"password"},model:{value:(_vm.secretAccessKey),callback:function ($$v) {_vm.secretAccessKey=$$v},expression:"secretAccessKey"}})],1),_c('md-field',[_c('label',[_vm._v("Region")]),_c('md-select',{model:{value:(_vm.region),callback:function ($$v) {_vm.region=$$v},expression:"region"}},_vm._l((_vm.regions),function(region){return _c('md-option',{key:region,attrs:{"value":region}},[_vm._v(_vm._s(region))])}),1)],1),_c('md-checkbox',{staticClass:"md-primary",model:{value:(_vm.rememberAccount),callback:function ($$v) {_vm.rememberAccount=$$v},expression:"rememberAccount"}},[_vm._v("Remember my account")])],1),_c('md-dialog-actions',[_c('md-button',{staticClass:"dialog-button md-primary",on:{"click":_vm.login}},[_vm._v("Login")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoginDialog/component.vue?vue&type=template&id=4c5a2fab&scoped=true&

// EXTERNAL MODULE: ./src/modules/ses.js + 1 modules
var ses = __webpack_require__("239e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--13-0!./src/components/LoginDialog/model.js?vue&type=script&lang=js&

/* harmony default export */ var modelvue_type_script_lang_js_ = ({
  name: "login-dialog",
  props: {
    value: Boolean
  },
  created: function created() {
    if (localStorage.amazonSESTemplateManagement) {
      var _JSON$parse = JSON.parse(localStorage.amazonSESTemplateManagement),
          accessKeyId = _JSON$parse.accessKeyId,
          secretAccessKey = _JSON$parse.secretAccessKey,
          region = _JSON$parse.region;

      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.region = region;
      this.rememberAccount = true;
    }
  },
  data: function data() {
    return {
      accessKeyId: "",
      secretAccessKey: "",
      regions: ses["f" /* regions */],
      region: "",
      rememberAccount: false
    };
  },
  methods: {
    login: function login() {
      if (this.rememberAccount) {
        var storageValue = JSON.stringify({
          accessKeyId: this.accessKeyId,
          secretAccessKey: this.secretAccessKey,
          region: this.region
        });
        localStorage.setItem("amazonSESTemplateManagement", storageValue);
      } else {
        localStorage.removeItem("amazonSESTemplateManagement");
      }

      Object(ses["a" /* createSES */])(this.accessKeyId, this.secretAccessKey, this.region);
      this.$emit("input", false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/LoginDialog/model.js?vue&type=script&lang=js&
 /* harmony default export */ var LoginDialog_modelvue_type_script_lang_js_ = (modelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LoginDialog/style.scss?vue&type=style&index=0&id=4c5a2fab&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_4c5a2fab_lang_scss_scoped_true_ = __webpack_require__("adce");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/LoginDialog/component.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LoginDialog_modelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4c5a2fab",
  null
  
)

/* harmony default export */ var LoginDialog_component = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-010654d6.33aeeb44.js.map