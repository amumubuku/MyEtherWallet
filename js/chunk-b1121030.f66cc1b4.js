(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1121030"],{"103a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mew-component--landing"},[a("div",{staticClass:"desktop-content d-none d-lg-block expandHeader"},[a("v-container",{staticClass:"banner-content-container d-flex align-center justify-space-between"},[a("v-card",{attrs:{color:"transparent",flat:"",tile:"","max-width":"430px"}},[a("div",{staticClass:"white--text mew-title"},[a("span",[t._v(" "+t._s(t._f("lokalise")(t.$t("home.tagline1"),"home.tagline1"))+" ")]),a("span",[t._v(" "+t._s(t._f("lokalise")(t.$t("home.tagline2"),"home.tagline2"))+" ")])]),a("p",{staticClass:"white--text mt-3"},[t._v(" "+t._s(t._f("lokalise")(t.$t("home.subheading"),"home.subheading"))+" ")]),a("div",{staticClass:"mt-9 d-flex"},[a("mew-button",{staticClass:"mr-3 HomeCreateWallet",attrs:{"has-full-width":!1,title:"Create a new wallet","btn-size":"xlarge"},nativeOn:{click:function(e){return t.$router.push({name:t.ROUTES_HOME.CREATE_WALLET.NAME,params:{}})}}}),a("mew-button",{staticClass:"HomeAccessWallet",attrs:{"has-full-width":!1,"btn-style":"outline",title:"Access my wallet","btn-size":"xlarge"},nativeOn:{click:function(e){return t.$router.push({name:t.ROUTES_HOME.ACCESS_WALLET.NAME,params:{}})}}})],1),a("div",{staticClass:"d-flex"},[a("mew-button",{staticClass:"extension-btns chrome-extension text-transform--none mt-5 mr-2",staticStyle:{"border-radius":"40px !important"},attrs:{"has-full-width":!1,"btn-style":"transparent","color-theme":"white","btn-size":"large"},nativeOn:{click:function(e){return t.openEnkrypt.apply(null,arguments)}}},[a("img",{staticClass:"mr-3 browser-icons",attrs:{src:t.browserLogo}}),t._v(" Get the Enkrypt Extension ")]),a("mew-button",{staticClass:"extension-btns app-extension mt-5",staticStyle:{"border-radius":"40px !important"},attrs:{"has-full-width":!1,"btn-style":"transparent","color-theme":"white","btn-size":"large"},nativeOn:{click:function(e){return t.openMewWallet.apply(null,arguments)}}},[a("img",{staticClass:"mr-2 app-icons",attrs:{src:n("4efb")}}),t._v(" Get the app ")])],1)]),a("img",{attrs:{src:n("b068"),alt:"Spaceman and his dog",height:"500"}})],1)],1),a("div",{staticClass:"mobile-content d-block d-lg-none expandHeader pt-5"},[a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{color:"transparent",flat:"",tile:"","max-width":"400px"}},[a("div",{staticClass:"white--text font-weight-bold mb-4",staticStyle:{"font-size":"3rem","line-height":"3.3rem"}},[a("span",[t._v(" "+t._s(t._f("lokalise")(t.$t("home.tagline1"),"home.tagline2"))+" ")]),a("span",[t._v(" "+t._s(t._f("lokalise")(t.$t("home.tagline2"),"home.tagline2"))+" ")])]),a("p",{staticClass:"white--text mt-3"},[t._v(" "+t._s(t._f("lokalise")(t.$t("home.subheading"),"home.subheading"))+" ")]),a("div",{staticClass:"mt-12"},[a("mew-button",{staticClass:"mb-3 width--full",attrs:{"has-full-width":!1,title:"Create a new wallet","btn-size":"xlarge"},nativeOn:{click:function(e){return t.$router.push({name:t.ROUTES_HOME.CREATE_WALLET.NAME,params:{}})}}}),a("mew-button",{staticClass:"width--full",attrs:{"has-full-width":!1,"btn-style":"outline",title:"Access my wallet","btn-size":"xlarge"},nativeOn:{click:function(e){return t.$router.push({name:t.ROUTES_HOME.ACCESS_WALLET.NAME,params:{}})}}}),a("mew-button",{staticClass:"extension-btns chrome-extension text-transform--none mt-5 mb-2",staticStyle:{"border-radius":"40px !important"},attrs:{"has-full-width":!0,"btn-style":"transparent","color-theme":"white","btn-size":"large"},nativeOn:{click:function(e){return t.openEnkrypt.apply(null,arguments)}}},[a("img",{staticClass:"mr-3 browser-icons",attrs:{src:t.browserLogo}}),t._v(" Get the Enkrypt Extension ")]),a("mew-button",{staticClass:"extension-btns app-extension",staticStyle:{"border-radius":"40px !important"},attrs:{"has-full-width":!0,"btn-style":"transparent","color-theme":"white","btn-size":"large"},nativeOn:{click:function(e){return t.openMewWallet.apply(null,arguments)}}},[a("img",{staticClass:"mr-2 app-icons",attrs:{src:n("4efb")}}),t._v(" Get the app ")])],1)])],1)],1)])},i=[],s=n("db3a"),o=n("5965"),r=n("302e"),l={name:"HomeLanding",components:{},mixins:[o["a"],r["a"]],data:function(){return{ROUTES_HOME:s["a"]}},mounted:function(){var t=this;setTimeout((function(){t.trackLandingPage()}),1e3)},methods:{}},c=l,p=(n("ef9b"),n("2877")),m=Object(p["a"])(c,a,i,!1,null,"0f54ae40",null);e["default"]=m.exports},"302e":function(t,e,n){"use strict";var a=n("5530"),i=(n("b0c0"),n("9911"),n("ac1f"),n("00b4"),n("faac")),s=n.n(i),o=n("2f62");e["a"]={name:"EnkryptMarketingMixing",data:function(){return{extensionLinks:{chrome:{link:"https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",img:n("6a8e")},firefox:{link:"https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",img:n("7e66")},opera:{link:"https://addons.opera.com/en/extensions/details/enkrypt/",img:n("57a7")},default:{link:"https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",img:n("6a8e")}}}},computed:Object(a["a"])(Object(a["a"])({},Object(o["e"])("popups",["enkryptLandingPopup"])),{},{browser:function(){var t=s.a.name.toLowerCase();return"chrome"!==t&&"firefox"!==t&&"opera"!==t?"default":t},text:function(){return"default"!==this.browser?"Install for ".concat(s.a.name):"Download Now"},browserLogo:function(){return this.extensionLinks[this.browser].img},browserLink:function(){return this.extensionLinks[this.browser].link},isMobile:function(){return this.$vuetify.breakpoint.mdAndDown}}),methods:{openEnkrypt:function(){window.open("https://www.enkrypt.com","_blank")},openMewWallet:function(){if(this.isMobile){var t=navigator.userAgent||navigator.vendor||window.opera,e=/android/i.test(t),n=/iPad|iPhone|iPod/.test(t)&&!window.MSStream;e?window.location.href="https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet":n&&(window.location.href="https://itunes.apple.com/app/id1464614025")}else window.open("https://www.mewwallet.com/","_blank")},openHelpCenter:function(){window.open("https://www.enkrypt.com","_blank")}}}},"4efb":function(t,e,n){t.exports=n.p+"img/icon-apple-google.3fab1b44.svg"},"57a7":function(t,e,n){t.exports=n.p+"img/icon-opera.b4b964d2.svg"},"6a8e":function(t,e,n){t.exports=n.p+"img/icon-chrome.d60a042e.svg"},"7e66":function(t,e,n){t.exports=n.p+"img/icon-firefox.8d650c53.svg"},8738:function(t,e,n){},9911:function(t,e,n){"use strict";var a=n("23e7"),i=n("857a"),s=n("af03");a({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},b068:function(t,e,n){t.exports=n.p+"img/bg-home-spaceman-and-dog.313ea5b0.svg"},ef9b:function(t,e,n){"use strict";n("8738")}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-b1121030.f66cc1b4.js.map