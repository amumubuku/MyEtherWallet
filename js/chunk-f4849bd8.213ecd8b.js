(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4849bd8"],{"3156a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"full-width"},[a("h3",{staticClass:"mb-6"},[e._v("Enter your private key")]),a("mew-input",{staticClass:"PrivateKeyInput",attrs:{label:"Private Key",placeholder:"Enter your Private Key",rules:e.privKeyRulles,type:"password"},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}}),a("div",{staticClass:"text-center"},[a("mew-checkbox",{staticClass:"justify-center PrivateKeyTerms",attrs:{label:"To access my wallet, I accept ",link:e.link},model:{value:e.acceptTerms,callback:function(t){e.acceptTerms=t},expression:"acceptTerms"}}),a("v-row",{staticClass:"align-center justify-center pt-4",attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("mew-button",{staticClass:"PrivateKeyAccess",attrs:{"has-full-width":"",title:"Access Wallet","btn-size":"xlarge",disabled:!e.disableBtn},nativeOn:{click:function(t){return e.unlockBtn.apply(null,arguments)}}})],1)],1)],1)],1)},s=[],r=a("9879"),c=r["a"],l=a("2877"),n=Object(l["a"])(c,i,s,!1,null,null,null);t["default"]=n.exports},9879:function(e,t,a){"use strict";(function(e){a("ac1f"),a("5319");var i=a("5b66"),s=a("2ef0"),r=a("9609"),c=a("3492");t["a"]={name:"AccessWalletPrivateKey",props:{handlerAccessWallet:{type:Object,default:function(){return{}}}},data:function(){return{privateKey:"",acceptTerms:!1,link:{title:"Terms",url:"https://www.myetherwallet.com/terms-of-service"}}},computed:{disableBtn:function(){return this.acceptTerms&&this.isPrivKey},isPrivKey:function(){var t=e.isBuffer(this.actualPrivateKey)?this.actualPrivateKey:Object(c["c"])(Object(c["f"])(this.actualPrivateKey));return Object(r["b"])(this.privateKey)&&Object(i["isValidPrivate"])(t)},actualPrivateKey:function(){return Object(s["isString"])(this.privateKey)?this.privateKey&&"0x"===this.privateKey.substr(0,2)?this.privateKey.replace("0x",""):this.privateKey:""},privKeyRulles:function(){return[function(e){return!!e||"Required"},function(e){return Object(r["b"])(e)||"This is not a real private Key"}]}},methods:{unlockBtn:function(){this.handlerAccessWallet.unlockPrivateKeyWallet(this.actualPrivateKey),this.$emit("unlock"),this.privateKey=""}}}}).call(this,a("1c35").Buffer)}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-f4849bd8.213ecd8b.js.map