(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f670d7a8"],{4528:function(t,e,n){},ad63:function(t,e,n){"use strict";var i=n("4528"),r=n.n(i);r.a},e4b0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"textareaContainer",staticClass:"textarea-container"})},r=[],o=n("56b3"),a=n.n(o),s={name:"html-editor",data:function(){return{editor:null,codeMirrorOptions:{mode:"htmlmixed",lineNumbers:!0}}},methods:{setContent:function(t){var e=this;this.editor||(this.$refs.textareaContainer.firstChild&&this.$refs.textareaContainer.removeChild(this.$refs.textareaContainer.firstChild),this.editor=a()(this.$refs.textareaContainer,this.codeMirrorOptions),this.editor.on("change",function(){e.$emit("change",e.editor.getValue())})),this.editor.setValue(t)},getContent:function(){return this.editor.getValue()}}},d=s,u=(n("ad63"),n("2877")),c=Object(u["a"])(d,i,r,!1,null,"0dd7e834",null);c.options.__file="component.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f670d7a8.c2e433d3.js.map