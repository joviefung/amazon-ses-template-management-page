(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31ba27e2"],{"8ac5":function(e,c,t){"use strict";var s=t("c362"),n=t.n(s);n.a},a21f:function(e,c,t){var s=t("584a"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},c362:function(e,c,t){},d8ce:function(e,c,t){"use strict";t.r(c);var s=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("md-dialog",{attrs:{"md-active":e.value}},[t("md-dialog-title",[e._v("Login your Amazon SES account")]),t("md-dialog-content",[t("md-field",[t("label",[e._v("Access Key ID")]),t("md-input",{attrs:{type:"password"},model:{value:e.accessKeyId,callback:function(c){e.accessKeyId=c},expression:"accessKeyId"}})],1),t("md-field",[t("label",[e._v("Secret Access Key")]),t("md-input",{attrs:{type:"password"},model:{value:e.secretAccessKey,callback:function(c){e.secretAccessKey=c},expression:"secretAccessKey"}})],1),t("md-field",[t("label",[e._v("Region")]),t("md-select",{model:{value:e.region,callback:function(c){e.region=c},expression:"region"}},e._l(e.regions,function(c){return t("md-option",{key:c,attrs:{value:c}},[e._v(e._s(c))])}),1)],1),t("md-checkbox",{staticClass:"md-primary",model:{value:e.rememberAccount,callback:function(c){e.rememberAccount=c},expression:"rememberAccount"}},[e._v("Remember my account")])],1),t("md-dialog-actions",[t("md-button",{on:{click:e.login}},[e._v("Login")])],1)],1)},n=[],a=t("f499"),o=t.n(a),i=t("239e"),r={name:"login-dialog",props:{value:Boolean},created:function(){if(localStorage.amazonSESTemplateManagement){var e=JSON.parse(localStorage.amazonSESTemplateManagement),c=e.accessKeyId,t=e.secretAccessKey,s=e.region;this.accessKeyId=c,this.secretAccessKey=t,this.region=s,this.rememberAccount=!0}},data:function(){return{accessKeyId:"",secretAccessKey:"",regions:i["f"],region:"",rememberAccount:!1}},methods:{login:function(){if(this.rememberAccount){var e=o()({accessKeyId:this.accessKeyId,secretAccessKey:this.secretAccessKey,region:this.region});localStorage.setItem("amazonSESTemplateManagement",e)}else localStorage.removeItem("amazonSESTemplateManagement");Object(i["a"])(this.accessKeyId,this.secretAccessKey,this.region),this.$emit("input",!1)}}},l=r,m=(t("8ac5"),t("2877")),u=Object(m["a"])(l,s,n,!1,null,"4ae3071b",null);u.options.__file="component.vue";c["default"]=u.exports},f499:function(e,c,t){e.exports=t("a21f")}}]);
//# sourceMappingURL=chunk-31ba27e2.40cbb944.js.map