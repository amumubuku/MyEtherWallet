(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71de2342"],{"3d76":function(t,e,a){t.exports=a.p+"img/button-app-store.cb4296cb.svg"},"42ca":function(t,e,a){},"560c":function(t,e,a){t.exports=a.p+"img/button-play-store.eb328107.svg"},a57b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("div",{staticClass:"user-message text-center"},[o("div",{staticClass:"d-flex align-center justify-center"},[o("div",{staticClass:"mew-heading-2"},[t._v("Redirecting to app store")]),o("span",{staticClass:"loading-dots text-left mew-heading-2"},[t._v(" "+t._s(t.loadingDots)+" ")])]),o("div",{staticClass:"mt-3 mx-auto",staticStyle:{"max-width":"400px"}},[t._v(" Click app store button, if you don't get redirected to app store automatically. ")]),o("div",{staticClass:"mt-10"},[o("a",{attrs:{href:"https://itunes.apple.com/app/id1464614025",target:"_blank"}},[o("img",{staticClass:"mr-1",attrs:{src:a("3d76"),alt:"Play store",height:"35"}})]),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet",target:"_blank"}},[o("img",{attrs:{src:a("560c"),alt:"App store",height:"35"}})])])])])},s=[],n=(a("ac1f"),a("00b4"),a("db3a")),i={name:"ModuleQrCode",components:{},props:{},data:function(){return{loadingDots:""}},beforeCreate:function(){},mounted:function(){this.downloadMEWWalletApp(),this.animateLoadingDots()},methods:{downloadMEWWalletApp:function(){var t=navigator.userAgent||navigator.vendor||window.opera,e=/windows phone/i.test(t),a=/android/i.test(t),o=/iPad|iPhone|iPod/.test(t)&&!window.MSStream;e||(a?window.location.href="https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet":o?window.location.href="https://itunes.apple.com/app/id1464614025":(this.$router.push({name:n["a"].HOME.NAME}),window.open("https://www.mewwallet.com/","_blank")))},animateLoadingDots:function(){var t=this,e=4;setInterval((function(){t.loadingDots.length<e?t.loadingDots=t.loadingDots+".":t.loadingDots=""}),400)}}},l=i,r=(a("d86e"),a("2877")),d=Object(r["a"])(l,o,s,!1,null,"16f4f6ed",null);e["default"]=d.exports},d86e:function(t,e,a){"use strict";a("42ca")}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-71de2342.53f0a1d0.js.map