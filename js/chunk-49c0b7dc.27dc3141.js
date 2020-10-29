(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-49c0b7dc"],{

/***/ "21fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_b923c53e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e527");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_b923c53e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_b923c53e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_b923c53e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e4b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d21cfc6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HtmlEditor/component.vue?vue&type=template&id=b923c53e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"textareaContainer",staticClass:"textarea-container"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HtmlEditor/component.vue?vue&type=template&id=b923c53e&scoped=true&

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.js
var codemirror = __webpack_require__("56b3");
var codemirror_default = /*#__PURE__*/__webpack_require__.n(codemirror);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--13-0!./src/components/HtmlEditor/model.js?vue&type=script&lang=js&

/* harmony default export */ var modelvue_type_script_lang_js_ = ({
  name: "html-editor",
  data: function data() {
    return {
      editor: null,
      codeMirrorOptions: {
        mode: "htmlmixed",
        lineNumbers: true
      }
    };
  },
  methods: {
    setContent: function setContent(content) {
      var _this = this;

      if (!this.editor) {
        if (this.$refs.textareaContainer.firstChild) {
          this.$refs.textareaContainer.removeChild(this.$refs.textareaContainer.firstChild);
        }

        this.editor = codemirror_default()(this.$refs.textareaContainer, this.codeMirrorOptions);
        this.editor.on("change", function () {
          _this.$emit("change", _this.editor.getValue());
        });
      }

      this.editor.setValue(content);
    },
    getContent: function getContent() {
      return this.editor.getValue();
    }
  }
});
// CONCATENATED MODULE: ./src/components/HtmlEditor/model.js?vue&type=script&lang=js&
 /* harmony default export */ var HtmlEditor_modelvue_type_script_lang_js_ = (modelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HtmlEditor/style.scss?vue&type=style&index=0&id=b923c53e&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_b923c53e_lang_scss_scoped_true_ = __webpack_require__("21fe");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/HtmlEditor/component.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HtmlEditor_modelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b923c53e",
  null
  
)

/* harmony default export */ var HtmlEditor_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e527":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-49c0b7dc.27dc3141.js.map