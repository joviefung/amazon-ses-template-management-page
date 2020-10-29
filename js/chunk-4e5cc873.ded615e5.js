(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4e5cc873"],{

/***/ "3d7a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6477":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7d21cfc6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditTemplateDetails/component.vue?vue&type=template&id=0ba61c26&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"template-details-root"},[_c('md-card',{staticClass:"template-details-card"},[_c('md-card-header',[_c('md-card-header-text',[_c('md-field',[_c('label',[_vm._v("Template Name")]),_c('md-input',{model:{value:(_vm.updatedTemplate.name),callback:function ($$v) {_vm.$set(_vm.updatedTemplate, "name", $$v)},expression:"updatedTemplate.name"}})],1)],1)],1),_c('md-card-content',[_c('md-field',[_c('label',[_vm._v("Mail Subject")]),_c('md-input',{model:{value:(_vm.updatedTemplate.mailSubject),callback:function ($$v) {_vm.$set(_vm.updatedTemplate, "mailSubject", $$v)},expression:"updatedTemplate.mailSubject"}})],1),_c('div',{staticClass:"mail-html-input"},[_c('label',[_vm._v("Mail HTML")]),_c('html-editor',{ref:"htmlEditor",staticClass:"html-editor",on:{"change":function (content) { _vm.updatedTemplate.mailHtml = content }}}),_c('div',{domProps:{"innerHTML":_vm._s(_vm.updatedTemplate.mailHtml)}})],1),_c('md-field',[_c('label',[_vm._v("Mail Text")]),_c('md-textarea',{model:{value:(_vm.updatedTemplate.mailText),callback:function ($$v) {_vm.$set(_vm.updatedTemplate, "mailText", $$v)},expression:"updatedTemplate.mailText"}})],1)],1),_c('md-card-actions',[_c('md-button',{attrs:{"disabled":_vm.loading},on:{"click":function($event){return _vm.$emit('cancel')}}},[_vm._v("Cancel")]),_c('md-button',{attrs:{"disabled":_vm.loading},on:{"click":_vm.save}},[(_vm.loading)?_c('md-progress-spinner',{attrs:{"md-diameter":20,"md-stroke":2,"md-mode":"indeterminate"}}):_c('span',[_vm._v("Save")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EditTemplateDetails/component.vue?vue&type=template&id=0ba61c26&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./src/modules/ses.js + 1 modules
var ses = __webpack_require__("239e");

// EXTERNAL MODULE: ./src/models/TemplateDetails.js
var TemplateDetails = __webpack_require__("fe88");

// CONCATENATED MODULE: ./src/components/HtmlEditor/index.js
/* harmony default export */ var HtmlEditor = (function () {
  return __webpack_require__.e(/* import() */ "chunk-49c0b7dc").then(__webpack_require__.bind(null, "e4b0"));
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--13-0!./src/components/EditTemplateDetails/model.js?vue&type=script&lang=js&




/* harmony default export */ var modelvue_type_script_lang_js_ = ({
  name: "edit-template-details",
  components: {
    HtmlEditor: HtmlEditor
  },
  props: {
    isVisible: Boolean,
    template: TemplateDetails["a" /* default */]
  },
  data: function data() {
    return {
      loading: false,
      updatedTemplate: new TemplateDetails["a" /* default */]()
    };
  },
  computed: {
    isAdding: function isAdding() {
      return !this.template;
    }
  },
  watch: {
    isVisible: function isVisible() {
      if (this.isVisible) {
        if (this.template) {
          this.updatedTemplate = Object.assign(new TemplateDetails["a" /* default */](), this.template);
        } else {
          this.updatedTemplate = new TemplateDetails["a" /* default */]();
        }

        if (this.$refs.htmlEditor) {
          this.$refs.htmlEditor.setContent(this.updatedTemplate.mailHtml);
        }
      }
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loading = true;

      if (this.isAdding) {
        Object(ses["b" /* createTemplate */])(this.updatedTemplate).then(function () {
          _this.$emit("showMessage", "Template added.");

          _this.$emit("add", _this.updatedTemplate.name);

          _this.$emit("cancel");
        }, function (err) {
          _this.$emit("showMessage", err);
        }).finally(function () {
          _this.loading = false;
        });
      } else {
        Object(ses["g" /* updateTemplate */])(this.updatedTemplate).then(function () {
          _this.$emit("showMessage", "Template updated.");

          _this.$emit("edit");

          _this.$emit("cancel");
        }, function (err) {
          _this.$emit("showMessage", err);
        }).finally(function () {
          _this.loading = false;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/EditTemplateDetails/model.js?vue&type=script&lang=js&
 /* harmony default export */ var EditTemplateDetails_modelvue_type_script_lang_js_ = (modelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/EditTemplateDetails/style.scss?vue&type=style&index=0&id=0ba61c26&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_0ba61c26_lang_scss_scoped_true_ = __webpack_require__("aad7");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/EditTemplateDetails/component.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EditTemplateDetails_modelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0ba61c26",
  null
  
)

/* harmony default export */ var EditTemplateDetails_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "aad7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_0ba61c26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d7a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_0ba61c26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_0ba61c26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_0ba61c26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-4e5cc873.ded615e5.js.map