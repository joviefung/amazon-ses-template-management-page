(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e9081fc"],{"355d":function(e,t){t.f={}.propertyIsEnumerable},5176:function(e,t,a){e.exports=a("51b6")},"51b6":function(e,t,a){a("a3c3"),e.exports=a("584a").Object.assign},6477:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"template-details-root"},[a("md-card",{staticClass:"template-details-card"},[a("md-card-header",[a("md-card-header-text",[a("md-field",[a("label",[e._v("Template Name")]),a("md-input",{model:{value:e.updatedTemplate.name,callback:function(t){e.$set(e.updatedTemplate,"name",t)},expression:"updatedTemplate.name"}})],1)],1)],1),a("md-card-content",[a("md-field",[a("label",[e._v("Mail Subject")]),a("md-input",{model:{value:e.updatedTemplate.mailSubject,callback:function(t){e.$set(e.updatedTemplate,"mailSubject",t)},expression:"updatedTemplate.mailSubject"}})],1),a("div",{staticClass:"mail-html-input"},[a("label",[e._v("Mail HTML")]),a("html-editor",{ref:"htmlEditor",staticClass:"html-editor",on:{change:function(t){e.updatedTemplate.mailHtml=t}}}),a("div",{domProps:{innerHTML:e._s(e.updatedTemplate.mailHtml)}})],1),a("md-field",[a("label",[e._v("Mail Text")]),a("md-textarea",{model:{value:e.updatedTemplate.mailText,callback:function(t){e.$set(e.updatedTemplate,"mailText",t)},expression:"updatedTemplate.mailText"}})],1)],1),a("md-card-actions",[a("md-button",{attrs:{disabled:e.loading},on:{click:function(t){e.$emit("cancel")}}},[e._v("Cancel")]),a("md-button",{attrs:{disabled:e.loading},on:{click:e.save}},[e.loading?a("md-progress-spinner",{attrs:{"md-diameter":20,"md-stroke":2,"md-mode":"indeterminate"}}):a("span",[e._v("Save")])],1)],1)],1)],1)},i=[],l=(a("7f7f"),a("5176")),d=a.n(l),s=a("239e"),c=a("fe88"),m=function(){return a.e("chunk-4a893029").then(a.bind(null,"e4b0"))},o={name:"edit-template-details",components:{HtmlEditor:m},props:{isVisible:Boolean,template:c["a"]},data:function(){return{loading:!1,updatedTemplate:new c["a"]}},computed:{isAdding:function(){return!this.template}},watch:{isVisible:function(){this.isVisible&&(this.template?this.updatedTemplate=d()(new c["a"],this.template):this.updatedTemplate=new c["a"],this.$refs.htmlEditor&&this.$refs.htmlEditor.setContent(this.updatedTemplate.mailHtml))}},methods:{save:function(){var e=this;this.loading=!0,this.isAdding?Object(s["b"])(this.updatedTemplate).then(function(){e.$emit("showMessage","Template added."),e.$emit("add",e.updatedTemplate.name),e.$emit("cancel")},function(t){e.$emit("showMessage",t)}).finally(function(){e.loading=!1}):Object(s["g"])(this.updatedTemplate).then(function(){e.$emit("showMessage","Template updated."),e.$emit("edit"),e.$emit("cancel")},function(t){e.$emit("showMessage",t)}).finally(function(){e.loading=!1})}}},u=o,p=(a("aad7"),a("2877")),r=Object(p["a"])(u,n,i,!1,null,"0ba61c26",null);r.options.__file="component.vue";t["default"]=r.exports},9306:function(e,t,a){"use strict";var n=a("c3a1"),i=a("9aa9"),l=a("355d"),d=a("241e"),s=a("335c"),c=Object.assign;e.exports=!c||a("294c")(function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach(function(e){t[e]=e}),7!=c({},e)[a]||Object.keys(c({},t)).join("")!=n})?function(e,t){var a=d(e),c=arguments.length,m=1,o=i.f,u=l.f;while(c>m){var p,r=s(arguments[m++]),f=o?n(r).concat(o(r)):n(r),h=f.length,b=0;while(h>b)u.call(r,p=f[b++])&&(a[p]=r[p])}return a}:c},"9aa9":function(e,t){t.f=Object.getOwnPropertySymbols},a3c3:function(e,t,a){var n=a("63b6");n(n.S+n.F,"Object",{assign:a("9306")})},aad7:function(e,t,a){"use strict";var n=a("db26"),i=a.n(n);i.a},db26:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6e9081fc.228d4afb.js.map