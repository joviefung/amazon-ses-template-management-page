(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c0b7dc"],{"21fe":function(t,e,n){"use strict";var i=n("e527"),r=n.n(i);r.a},e4b0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"textareaContainer",staticClass:"textarea-container"})},r=[],o=n("56b3"),a=n.n(o),s={name:"html-editor",data:function(){return{editor:null,codeMirrorOptions:{mode:"htmlmixed",lineNumbers:!0}}},methods:{setContent:function(t){var e=this;this.editor||(this.$refs.textareaContainer.firstChild&&this.$refs.textareaContainer.removeChild(this.$refs.textareaContainer.firstChild),this.editor=a()(this.$refs.textareaContainer,this.codeMirrorOptions),this.editor.on("change",(function(){e.$emit("change",e.editor.getValue())}))),this.editor.setValue(t)},getContent:function(){return this.editor.getValue()}}},c=s,u=(n("21fe"),n("2877")),d=Object(u["a"])(c,i,r,!1,null,"b923c53e",null);e["default"]=d.exports},e527:function(t,e,n){}}]);
//# sourceMappingURL=chunk-49c0b7dc.3b2f6cf0.js.map