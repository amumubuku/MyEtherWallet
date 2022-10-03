(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe755e8c"],{"022b":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("success-modal",{attrs:{"show-success-modal":t.showSuccessModal,"show-success-swap":t.showSuccessSwap,"success-title":t.successTitle,"reset-success":t.resetSuccess,reset:t.reset,network:t.network,links:t.links,"success-body-text":t.successBodyText,"has-close-button":!1}}),s("cross-chain-confirmation",{attrs:{"show-cross-chain-modal":t.showCrossChainModal,"tx-obj":t.tx,title:t.title,reset:t.rejectTransaction,"sent-btc":t.sendCrossChain}}),s("app-modal",{attrs:{show:t.showTxOverlay,title:""!==t.title?t.title:"Confirmation",close:t.rejectTransaction,"btn-action":t.btnAction,"btn-enabled":t.disableBtn,"btn-text":t.toNonEth?"Proceed with swap":"Confirm & Send",scrollable:!0,anchored:!0,width:"650"},on:{close:t.rejectTransaction},scopedSlots:t._u([{key:"dialogBody",fn:function(){return[s("v-card-text",{ref:"scrollableContent",staticClass:"py-0 px-4 px-md-0"},[t.toNonEth?s("div",{staticClass:"px-4 py-6 pr-6 textBlack2--text border-radius--5px mb-5"},[s("b",[t._v("Please double check everything.")]),t._v(" MEW team will not be able to reverse your transaction once its submitted. You will still be charged gas fee even if the transaction fails. "),s("a",{attrs:{href:t.getArticle("my-txn-failed-charged"),target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more.")])]):t._e(),t.isSwap?s("confirmation-swap-transaction-details",{attrs:{to:t.swapInfo.to,from:t.swapInfo.from,"from-img":t.swapInfo.fromImg,"from-type":t.swapInfo.fromType,"to-type":t.swapInfo.toType,"to-img":t.swapInfo.toImg,"from-val":t.swapInfo.fromVal,"to-val":t.swapInfo.toVal,provider:t.swapInfo.selectedProvider,"to-usd":t.swapInfo.toUsdVal,"from-usd":t.swapInfo.fromUsdVal,"tx-fee":t.swapInfo.txFee,"gas-price-type":t.swapInfo.gasPriceType,"is-hardware":t.isHardware,"is-to-non-eth":t.toNonEth,"to-currency":t.swapInfo.toType,"to-address":t.swapInfo.to}}):s("confirmation-send-transaction-details",{attrs:{to:t.txTo,network:t.network,"tx-fee":t.txFee,"tx-fee-usd":t.txFeeUSD,value:t.value,"to-tx-data":t.tx.toTxData,"to-details":t.allToDetails,"send-currency":t.sendCurrency}}),s("div",{staticClass:"px-4 py-6 pr-6 textBlack2--text border-radius--5px mb-5"},[s("b",[t._v("Make sure all the information is correct.")]),t._v(" Cancelling or reversing a transaction cannot be guaranteed. You will still be charged gas fee even if transaction fails. "),s("a",{attrs:{href:t.getArticle("my-txn-failed-charged"),target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more.")])]),t.isOnLedger?s("div",{staticClass:"ledger-warning d-flex justify-space-between px-4 py-6 border-radius--5px mb-5"},[s("div",[s("v-img",{staticClass:"ml-15",attrs:{src:n("8a64"),alt:"Ledger Wallet","max-width":"11em","max-height":"2.5em",contain:""}})],1),s("span",{staticClass:"textBlack2--text ml-2"},[s("b",[t._v("Using Ledger?")]),t._v(" Consider turning off 'debug data' before proceeding. Additional steps associated with the 'debug "),s("br"),t._v(" feature'on Ledger may be required to approve this transaction. ")])]):t._e(),t.showConfirmWithWallet?s("confirm-with-wallet",{attrs:{"tx-length":t.unsignedTxArr.length>0?t.unsignedTxArr.length:1,signed:t.signingPending,error:t.error}}):t._e(),s("v-expansion-panels",{staticClass:"expansion-border",attrs:{accordion:"",multiple:"",flat:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.transactions,(function(e,n){return s("v-expansion-panel",{key:""+e.title+e.value+n,class:{"expansion-panel-border-bottom":t.transactions.length>1&&n!==t.transactions.length-1},on:{click:function(e){return t.scrollToElement(n)}}},[s("v-expansion-panel-header",{staticClass:"expansion-header",attrs:{"disable-icon-rotate":t.signing}},[s("v-row",{staticClass:"align-center pr-7 pl-2"},[s("p",{staticClass:"ma-0 pl-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("Transaction "+t._s(t.transactions.length>1?""+(n+1):"details")+" ")]),s("br"),t.isBatch?s("span",{staticClass:"ma-0 mew-label greyPrimary--text"},[t._v(t._s(t.isSwap?"Swap ":"")+" part "+t._s(n+1)+" - "+t._s(t.dataToAction(t.unsignedTxArr[n])))]):""!==t.dataToAction(t.tx)?s("span",{staticClass:"ma-0 mew-label greyPrimary--text"},[t._v(t._s(t.dataToAction(t.tx)))]):t._e()]),s("v-spacer"),t.signing?s("div",[s("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:""===t.error&&t.isBatch&&t.signedTxArray.length<n+1,expression:"\n                      error === '' && isBatch && signedTxArray.length < i + 1\n                    "}],staticClass:"pr-7",attrs:{indeterminate:"",color:"greenPrimary",size:"20",width:"2"}}),s("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:!t.isBatch&&0===Object.keys(t.signedTxObject).length,expression:"\n                      !isBatch && Object.keys(signedTxObject).length === 0\n                    "}],staticClass:"pr-7",attrs:{indeterminate:"",color:"greenPrimary",size:"20",width:"2"}}),s("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isBatch&&0!==Object.keys(t.signedTxObject).length,expression:"\n                      !isBatch && Object.keys(signedTxObject).length !== 0\n                    "}],attrs:{color:"greenPrimary"}},[t._v(" mdi-check ")]),s("v-icon",{directives:[{name:"show",rawName:"v-show",value:""===t.error&&t.isBatch&&t.signedTxArray.length>=n+1,expression:"\n                      error === '' && isBatch && signedTxArray.length >= i + 1\n                    "}],attrs:{color:"greenPrimary"}},[t._v(" mdi-check ")])],1):t._e()],1)],1),s("v-expansion-panel-content",{attrs:{id:n}},[s("div",{staticClass:"pa-6 pt-0"},t._l(e,(function(e){return s("v-row",{key:""+e.title+e.value,staticClass:"d-flex justify-space-between mt-3",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"d-flex d-sm-block ma-0 greyPrimary--text",attrs:{cols:"12",md:"3"}},[t._v(" "+t._s(e.title)+" ")]),s("v-col",{attrs:{cols:"12",md:"9"}},[s("app-scroll-block",[s("div",{staticClass:"data-values text-md-right"},[t._v(" "+t._s(e.value)+" ")])])],1)],1)})),1)])],1)})),1),t.toNonEth?s("div",{staticClass:"pt-4"},[t._v(" By clicking 'Proceed with swap', I agree to the "),s("a",{attrs:{href:"https://changelly.com/aml-kyc",target:"_blank"}},[t._v(" Changelly AML/KYC ")]),t._v(" and "),s("router-link",{attrs:{to:t.termRoute}},[t._v("Terms of Service")])],1):t._e()],1)]},proxy:!0}])}),s("mew-overlay",{attrs:{footer:{text:"Need help?",linkTitle:"Contact support",link:"mailto:support@myetherwallet.com"},"show-overlay":t.showSignOverlay,title:t.title?t.title:"Message",close:t.reset,"content-size":"large"}},[s("confirmation-messsage",{ref:"messageConfirmationContainer",attrs:{msg:t.signature,copy:t.copyToClipboard}})],1)],1)},r=[],a=n("dc07"),i=a["a"],o=(n("24d8"),n("2877")),c=Object(o["a"])(i,s,r,!1,null,"38dcfcf6",null);e["default"]=c.exports},"24d8":function(t,e,n){"use strict";n("73f6")},"2f09":function(t,e,n){"use strict";var s=n("99e5"),r=n.n(s),a={"0x095ea7b3":function(t){var e=t.data,n=(new r.a).eth.abi.decodeParameters(["address","uint256"],"".concat(e.substr(10))),s=r.a.utils.toBN(n[1]);return s.isZero()?"Reset Approval":"Approval"},"0x7c025200":function(){return"Swap"},"0x28ed4f6c":function(){return"Set ENS controller"},"0x23b872dd":function(){return"Transfer ENS name"},"0xacf1a841":function(){return"Renew ENS name"},"0xac9650d8":function(){return"Set ENS coins/text records"},"0xa9059cbb":function(){return"Transfer Tokens"},"0xca0bfcce":function(){return"Eth2 Staking"},"0xf14fcbc8":function(){return"ENS Commitment"},"0xf7a16963":function(){return"ENS Registration"},"0x33aaf6f2":function(){return"ETH Blocks Mint"}},i=function(t){return t.substr(0,10)};e["a"]=function(t){return t.data&&"0x"!==t.data&&a[i(t.data)]?a[i(t.data)]({from:t.from,to:t.to,data:t.data,value:t.value}):""}},"73f6":function(t,e,n){},"84e4":function(t,e,n){"use strict";n("d3b7"),n("25f0"),n("b680");var s=n("901e"),r=n.n(s),a=n("27ca"),i=n("99e5"),o=n.n(i);function c(t,e){var n=new o.a,s=a["a"].getters["external/contractToToken"](e),i={constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},c=n.eth.abi.encodeFunctionSignature(i),l={tokenTransferTo:"",tokenTransferVal:"",tokenSymbol:""};if(t.substr(0,10)===c){var u=n.eth.abi.decodeParameters(["address","uint256"],"".concat(t.substr(10))),h=new r.a(u[1]);l.tokenTransferTo=u[0],l.tokenTransferVal=s?h.div(new r.a(10).pow(s.decimals)).toFixed().toString():h.toString(),l.tokenSymbol=s?s.symbol:"Unidentified Token"}return l}e["a"]=c},"8a64":function(t,e,n){t.exports=n.p+"img/Ledger-Nano-X-Label-Icon.e56dc6a3.svg"},dc07:function(t,e,n){"use strict";(function(t){var s=n("c7eb"),r=n("1da1"),a=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("7db0"),n("25f0"),n("b680"),n("e9c4"),n("caad"),n("2532"),n("b0c0"),n("d81d"),n("ac1f"),n("5319"),n("4de4"),n("5ba3")),o=n("2ef0"),c=n("2f62"),l=n("901e"),u=n.n(l),h=n("8ded"),d=n("217a"),f=n("0421"),g=n("9b88"),p=n("84e4"),x=n("068e"),b=n("56ff"),m=n("3492"),w=n("2f09"),v=n("5965"),T=n("db3a"),y=n("2623");e["a"]={name:"ModuleConfirmation",components:{AppScrollBlock:function(){return n.e("chunk-6eac12a8").then(n.bind(null,"8d1b"))},ConfirmationMesssage:function(){return n.e("chunk-2c5b6588").then(n.bind(null,"f791"))},AppModal:function(){return n.e("chunk-67d389f9").then(n.bind(null,"3820c"))},ConfirmationSwapTransactionDetails:function(){return n.e("chunk-2d0df7c6").then(n.bind(null,"89b1"))},ConfirmationSendTransactionDetails:function(){return n.e("chunk-2d21e946").then(n.bind(null,"d5ba"))},ConfirmWithWallet:function(){return n.e("chunk-c22c7b20").then(n.bind(null,"e55c"))},SuccessModal:function(){return n.e("chunk-7f63ac24").then(n.bind(null,"65dc"))},CrossChainConfirmation:function(){return n.e("chunk-78d57c34").then(n.bind(null,"5015"))}},mixins:[v["a"]],data:function(){return{showTxOverlay:!1,showSignOverlay:!1,showSuccessModal:!1,showSuccessSwap:!1,showCrossChainModal:!1,toNonEth:!1,tx:{},resolver:function(){},title:"",signedTxObject:{},signature:"",unsignedTxArr:[],signedTxArray:[],swapInfo:{},sendCurrency:{},toDetails:{},signing:!1,links:{ethvm:"",explorer:""},error:"",panel:[],termRoute:T["a"].TERMS_OF_SERVICE.NAME}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(c["e"])("wallet",["instance","web3","address","identifier","isHardware"])),Object(c["c"])("external",["fiatValue"])),Object(c["c"])("global",["network","getFiatValue"])),Object(c["c"])("article",["getArticle"])),Object(c["e"])("addressBook",["addressBookStore"])),{},{txTo:function(){return this.isBatch?this.unsignedTxArr[0].to:this.tx.hasOwnProperty("toTxData")?this.tx.toTxData.to:this.tx.to},isWeb3Wallet:function(){return this.identifier===d["a"].WEB3_WALLET||this.identifier===d["a"].WALLET_CONNECT},isOtherWallet:function(){return this.identifier===d["a"].MEW_CONNECT||this.identifier===d["a"].WALLET_LINK},isOnLedger:function(){return"0x"!==this.tx.data&&this.identifier===d["a"].LEDGER},isNotSoftware:function(){return this.isHardware||this.isWeb3Wallet||this.isOtherWallet},showConfirmWithWallet:function(){return this.isNotSoftware&&(this.signing||""!==this.error)},transactions:function(){var t=this.unsignedTxArr.length>0?[].concat(this.unsignedTxArr):Object(o["isEmpty"])(this.tx)?[]:[this.tx];return this.arrayParser(t)},allToDetails:function(){var t=this,e=this.addressBookStore.find((function(e){var n,s;return(null===(n=t.tx.to)||void 0===n?void 0:n.toLowerCase())===(null===(s=e.address)||void 0===s?void 0:s.toLowerCase())}));return{ensName:"RESOLVED"===this.toDetails.type?this.toDetails.value:"",nickname:e?e.nickname:"",selected:this.toDetails.type}},gasPrice:function(){if(!this.isBatch){var t=this.tx.gasPrice?this.tx.gasPrice:"0x";return Object(i["fromWei"])(Object(i["hexToNumberString"])(t),"gwei")}var e=this.unsignedTxArr[0].gasPrice;return Object(i["fromWei"])(Object(i["hexToNumberString"])(e),"gwei")},gasLimit:function(){if(!this.isBatch){var t=this.tx.gasLimit?this.tx.gasLimit:this.tx.gas?this.tx.gas:"0x";return Object(i["hexToNumberString"])(t)}var e=this.unsignedTxArr.reduce((function(t,e){return t.plus(e.gas)}),u()(0));return Object(i["hexToNumberString"])(e)},txFee:function(){var t=u()(Object(i["toWei"])(this.gasPrice,"gwei")).times(this.gasLimit).toString();return Object(i["fromWei"])(t)},txFeeUSD:function(){return this.getFiatValue(u()(this.txFee).times(this.fiatValue).toFixed(2))},value:function(){if(!this.isBatch){var t=this.tx.value?this.tx.hasOwnProperty("toTxData")?this.tx.toTxData.amount:Object(i["fromWei"])(Object(i["hexToNumberString"])(this.tx.value)):"0x";return t}return"0"},disableBtn:function(){return""!==this.error||(!this.signing||this.txSigned)},txSigned:function(){return this.isBatch?this.signedTxArray.length>0&&this.signedTxArray.length===this.unsignedTxArr.length:!Object(o["isEmpty"])(this.signedTxObject)},isSwap:function(){return!Object(o["isEmpty"])(this.swapInfo)||!Object(o["isEmpty"])(this.tx)&&this.tx.hasOwnProperty("fromTokenType")&&!this.tx.fromTokenType.isEth},isBatch:function(){return this.unsignedTxArr.length>0},signingPending:function(){return this.isBatch?this.unsignedTxArr.length===this.signedTxArray.length:!Object(o["isEmpty"])(this.signedTxObject)},successTitle:function(){return this.showSuccessSwap?"Swap initiated":"Transaction initiated"},successBodyText:function(){return this.showSuccessSwap?"Once completed, the token amount will be deposited to your wallet. This should take a few minutes depending on how congested the Ethereum network is.":"Once completed, the token amount will be deposited to the address you provided. This should take a few minutes depending on how congested the Ethereum network is."}}),watch:{error:function(t){""!==t&&(this.signedTxArray=[],this.signedTxObject={})},address:function(t){t&&this.resetSuccess()},signedTxArray:{handler:function(t){this.isWeb3Wallet&&0!==t.length&&t.length===this.unsignedTxArr.length&&(this.showTxOverlay=!1,this.showSuccess(t))},deep:!0,immediate:!0}},created:function(){var e=this,n=this;x["a"].$on(f["a"].SHOW_TX_CONFIRM_MODAL,function(){var t=Object(r["a"])(Object(s["a"])().mark((function t(r,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.parseRawData(r[0]),n.title="Transaction Confirmation",n.tx=r[0],n.resolver=a,n.showTxOverlay=!0,n.tx.transactionFee=e.txFee,r[0].transactionFee=e.txFee,r.length>1&&(n.toDetails=r[1],n.sendCurrency=r[2]),e.isHardware||e.identifier===d["a"].WEB3_WALLET){t.next=11;break}return t.next=11,e.signTx();case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),x["a"].$on(f["a"].SHOW_SWAP_TX_MODAL,function(){var t=Object(r["a"])(Object(s["a"])().mark((function t(e,r){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.tx=e[0],n.swapInfo=e[1],n.resolver=r,n.showTxOverlay=!0,n.title="Verify Swap",n.toNonEth=!n.swapInfo.toTokenType.isEth,n.isHardware||n.identifier===d["a"].WEB3_WALLET){t.next=9;break}return t.next=9,n.signTx();case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),x["a"].$on(f["a"].SHOW_BATCH_TX_MODAL,function(){var t=Object(r["a"])(Object(s["a"])().mark((function t(e,r,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.isHardwareWallet=a,e[0].hasOwnProperty("confirmInfo")&&(n.swapInfo=e[0].confirmInfo,n.title="Verify Swap"),n.unsignedTxArr=e,r||(n.resolver=function(){}),n.resolver=r,n.showTxOverlay=!0,a||n.identifier===d["a"].WEB3_WALLET||n.signBatchTx();case 7:case"end":return t.stop()}}),t)})));return function(e,n,s){return t.apply(this,arguments)}}()),x["a"].$on(f["a"].SHOW_MSG_CONFIRM_MODAL,(function(e,s){n.title="Message Signed",n.instance.signMessage(e).then((function(r){var a=t.from(r).toString("hex");n.signature=JSON.stringify({address:n.address,msg:e,sig:a,version:"3",signer:n.isHardware?n.identifier:"MEW"},null,2),n.signedMessage=a,s(a),n.showSignOverlay=!0})).catch((function(t){n.reset(),n.instance.errorHandler(t)}))})),x["a"].$on(f["a"].SHOW_CROSS_CHAIN_MODAL,(function(t,e){n.title="Send ".concat(t.fromType),n.tx=t,n.showCrossChainModal=!0,n.resolver=function(t){e(t),n.reset()}}))},methods:{rejectTransaction:function(){this.resolver({rejected:!0}),this.reset()},sendCrossChain:function(t){this.trackSwap("swapSendCrossChain"),this.resolver(t)},dataToAction:function(t){return Object(w["a"])(t)},scrollToElement:function(t){var e=this;setTimeout((function(){if(e.panel.includes(t)){var n=document.getElementById(t),s=e.$refs.scrollableContent,r={duration:500,offset:-60};e.$vuetify.goTo(n,Object(a["a"])({container:s},r))}}),500)},resetSuccess:function(){this.showSuccessSwap=!1,this.reset()},reset:function(){this.showTxOverlay=!1,this.showSignOverlay=!1,this.showSuccessModal=!1,this.showCrossChainModal=!1,this.tx={},this.resolver=function(){},this.title="",this.signedTxObject={},this.signature="",this.unsignedTxArr=[],this.signedTxArray=[],this.swapInfo={},this.sendCurrency={},this.toDetails={},this.signing=!1,this.links={ethvm:"",explorer:""},this.error=""},parseRawData:function(t){var e={};t.to&&t.data&&"0xa9059cbb"===t.data.substr(0,10)&&(e=Object(p["a"])(t.data,t.to),t.fromTxData={currency:this.network.type.currencyName,amount:t.amount},t.toTxData={currency:e.tokenSymbol,amount:e.tokenTransferVal,to:e.tokenTransferTo}),t.network=this.network.type.name},sendBatchTransaction:function(){var t=this;return Object(r["a"])(Object(s["a"])().mark((function e(){var n,r,a,o;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.web3,r="sendSignedTransaction",a=t.signedTxArray,o=a.map((function(e,s){var o=e.tx;o.from=t.address;var c=e.rawTransaction,l=n.eth[r](c);return o.network=t.network.type.name,o.gasPrice=Object(i["isHex"])(o.gasPrice)?Object(i["hexToNumberString"])(o.gasPrice):o.gasPrice,o.transactionFee=Object(i["fromWei"])(u()(o.gasPrice).times(o.gas).toString()),o.gasLimit=o.gas,Object(b["b"])(l,o,t.$store.dispatch),l.once("transactionHash",(function(e){var n=Object(i["sha3"])("".concat(t.network.type.name,"-").concat(t.address.toLowerCase())),r=h["get"](n);h["set"](n,{nonce:Object(m["f"])(new u.a(r.nonce).plus(1).toString(16)),timestamp:r.timestamp}),s+1===a.length&&(t.isSwap&&(t.showSuccessSwap=!0),t.reset(),t.showSuccess(e))})),l})),t.resolver(o);case 5:case"end":return e.stop()}}),e)})))()},sendSignedTx:function(){var t=this.signedTxObject.tx.hash;this.resolver(this.signedTxObject),this.isSwap&&(this.showSuccessSwap=!0),this.tx.data&&this.tx.data.includes("0x33aaf6f2")&&this.trackDapp("ethBlocksMinted"),this.reset(),this.showSuccess(t)},showSuccess:function(t){if(this.isSwap&&(this.trackSwap("successModal"),this.trackSwap("swapTransactionSuccessfullySent")),Object(o["isArray"])(t)){var e=t[t.length-1].tx.hash;return this.links.ethvm=this.network.type.isEthVMSupported.supported?this.network.type.isEthVMSupported.blockExplorerTX.replace("[[txHash]]",e):"",this.links.explorer=this.network.type.blockExplorerTX.replace("[[txHash]]",e),void(this.showSuccessModal=!0)}this.links.ethvm=this.network.type.isEthVMSupported.supported?this.network.type.isEthVMSupported.blockExplorerTX.replace("[[txHash]]",t):"",this.links.explorer=this.network.type.blockExplorerTX.replace("[[txHash]]",t),this.showSuccessModal=!0},signTx:function(){var t=this;return Object(r["a"])(Object(s["a"])().mark((function e(){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.error="",t.isNotSoftware&&(t.signing=!0),!t.isWeb3Wallet){e.next=8;break}n=t.instance.signTransaction(t.tx),n.on("transactionHash",(function(e){t.showTxOverlay=!1,t.showSuccess(e)})).catch((function(e){t.signedTxObject={},t.error=Object(y["a"])(e),t.signing=!1})),t.resolver(n),e.next=10;break;case 8:return e.next=10,t.instance.signTransaction(t.tx).then((function(e){t.signedTxObject=e,t.isHardware&&t.txSigned&&t.btnAction()})).catch((function(e){t.signedTxObject={},t.error=Object(y["a"])(e),t.signing=!1,t.instance.errorHandler(e.message)}));case 10:case"end":return e.stop()}}),e)})))()},signBatchTx:function(){var t=this;return Object(r["a"])(Object(s["a"])().mark((function e(){var n,r,a,i,c,l;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.error="",n=[],r=[],t.isNotSoftware&&(t.signing=!0),a=0;case 5:if(!(a<t.unsignedTxArr.length)){e.next=35;break}if(i=Object(o["cloneDeep"])(t.unsignedTxArr[a]),delete i["handleNotification"],delete i["currency"],delete i["confirmInfo"],e.prev=10,t.isWeb3Wallet){e.next=20;break}return e.next=14,t.instance.signTransaction(i);case 14:c=e.sent,t.unsignedTxArr[a].hasOwnProperty("handleNotification")&&(c.tx["handleNotification"]=t.unsignedTxArr[a].handleNotification),n.push(c),t.isHardware&&t.txSigned&&t.btnAction(),e.next=23;break;case 20:l=t.instance.signTransaction(i),r.push(l),l.on("transactionHash",(function(t){n.push({tx:{hash:t}})})).catch((function(e){t.instance.errorHandler(e.message)}));case 23:t.signedTxArray=n,t.isWeb3Wallet&&t.resolver(r),e.next=32;break;case 27:return e.prev=27,e.t0=e["catch"](10),t.error=Object(y["a"])(e.t0),t.signedTxArray=[],e.abrupt("return");case 32:a++,e.next=5;break;case 35:t.isWeb3Wallet||t.isHardware||t.isOtherWallet||(t.signing=!1);case 36:case"end":return e.stop()}}),e,null,[[10,27]])})))()},btnAction:function(){if(this.isSwap&&this.trackSwap("swapTransactionSend"),!this.isWeb3Wallet)return(0===this.signedTxArray.length||this.signedTxArray.length<this.unsignedTxArr.length)&&Object(o["isEmpty"])(this.signedTxObject)?void(this.isBatch?this.signBatchTx():this.signTx()):void(this.isBatch?this.sendBatchTransaction():this.sendSignedTx());this.isBatch?this.signBatchTx():this.signTx()},copyToClipboard:function(){this.$refs.messageConfirmationContainer.$refs.signatureContent.$refs.input.select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),Object(g["e"])(this.$t("common.copied"),{},g["d"]),this.reset()},arrayParser:function(t){var e=this,n=t.map((function(t){var n=t.gasLimit?t.gasLimit:t.gas?t.gas:"0x",s=t.gasPrice?t.gasPrice:"0x",r=t.data?t.data:t.hasOwnProperty("encodeABI")?t.encodeABI():"0x",a=Object(o["isEmpty"])(e.sendCurrency)?e.network.type.currencyName:e.sendCurrency.symbol,c="0x"!==r&&(e.isSwap||e.isBatch)?"0 ".concat(e.network.type.currencyName):"".concat(e.value," ").concat(a),l=t.from?t.from:e.address,u=t.to?t.to:e.txTo;return[{title:"Network",value:e.network.type.name_long},{title:"From ENS",value:""},{title:"From address",value:l},{title:"0x"===r||e.isBatch?"To address":"Via Contract Address",value:u},{title:"Sending",value:c},{title:"Gas Price",value:Object(i["fromWei"])(Object(i["hexToNumberString"])(s),"gwei")+" gwei"},{title:"Gas Limit",value:Object(i["hexToNumberString"])(n)},{title:"Nonce",value:Object(i["hexToNumber"])(t.nonce)},{title:"Data",value:r}].filter((function(t){if(""!==t.value)return t}))}));return n}}}}).call(this,n("1c35").Buffer)}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-fe755e8c.6e19dd7a.js.map