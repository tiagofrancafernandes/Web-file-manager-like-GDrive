"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[915],{5022:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(3645),s=a.n(r)()((function(t){return t[1]}));s.push([t.id,".label[data-v-03d13328]{align-items:center;display:flex}.label .label-dot[data-v-03d13328]{border-radius:8px;display:block;flex:none;height:8px;margin-right:10px;width:8px}.label .label-dot.success[data-v-03d13328]{background:#0abb87}.label .label-dot.danger[data-v-03d13328]{background:#fd397a}.label .label-dot.warning[data-v-03d13328]{background:#ffb822}.label .label-dot.info[data-v-03d13328]{background:#5578eb}.label .label-dot.primary[data-v-03d13328]{background:red}.label .label-dot.purple[data-v-03d13328]{background:#9d66fe}.label .label-dot.secondary[data-v-03d13328]{background:#e1e1ef}.label .label-title[data-v-03d13328]{font-size:16px;font-weight:700}",""]);const n=s},8003:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(3645),s=a.n(r)()((function(t){return t[1]}));s.push([t.id,".chart-progress.success[data-v-596eaf42]{background:#0abb87;box-shadow:0 3px 10px rgba(10,187,135,.5)}.chart-progress.danger[data-v-596eaf42]{background:#fd397a;box-shadow:0 3px 10px rgba(253,57,122,.5)}.chart-progress.warning[data-v-596eaf42]{background:#ffb822;box-shadow:0 3px 10px rgba(255,184,34,.5)}.chart-progress.info[data-v-596eaf42]{background:#5578eb;box-shadow:0 3px 10px rgba(85,120,235,.5)}.chart-progress.purple[data-v-596eaf42]{background:#9d66fe;box-shadow:0 3px 10px rgba(157,102,254,.5)}.chart-progress.secondary[data-v-596eaf42]{background:#e1e1ef;box-shadow:0 3px 10px rgba(225,225,239,.5)}.dark .chart-progress.secondary[data-v-596eaf42]{background:#282a2f!important;box-shadow:0 3px 10px rgba(40,42,47,.5)!important}",""]);const n=s},6303:(t,e,a)=>{a.d(e,{Z:()=>s});const r={name:"PageTab",props:["isLoading"],components:{Spinner:a(8524).Z}};const s=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[a("Spinner")],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports},1463:(t,e,a)=>{a.d(e,{Z:()=>o});const r={name:"Bar",props:["bar"],data:function(){return{isVisible:!1}}};var s=a(1900);const n={name:"BarChart",props:["color","data"],components:{Bar:(0,s.Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative flex items-center justify-center block cursor-pointer lg:mx-1 lg:w-2 2xl:w-3",style:{height:t.bar.percentage>0?t.bar.percentage+"%":"8px"},on:{mouseover:function(e){t.isVisible=!0},mouseleave:function(e){t.isVisible=!1}}},[t.isVisible||85.5===t.bar.percentage?a("div",{staticClass:"absolute -top-4 z-10 -translate-y-full transform rounded-lg bg-gray-800 py-2 px-3 shadow-lg dark:bg-white"},[a("b",{staticClass:"mb-2 block whitespace-nowrap text-xs text-white dark:text-gray-800"},[t._v("\n                "+t._s(t.bar.created_at)+"\n            ")]),t._v(" "),a("div",{staticClass:"flex items-center pb-1"},[a("span",{staticClass:"bg-theme mr-2 block h-3 w-3 rounded"}),t._v(" "),a("b",{staticClass:"whitespace-nowrap text-xs text-white dark:text-gray-800"},[t._v("\n                    "+t._s(t.bar.amount)+"\n                ")])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("span",{staticClass:"block h-full w-full rounded-lg",class:{"bg-theme":t.bar.percentage>0,"dark:bg-gray-700 bg-gray-200":0===t.bar.percentage}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute -bottom-2.5 left-0 right-0 mx-auto inline-block w-[17px] overflow-hidden"},[e("div",{staticClass:"h-3 w-3 origin-top-left -rotate-45 transform bg-gray-800 dark:bg-white"})])}],!1,null,null,null).exports}};const o=(0,s.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid h-20 grid-flow-col items-end gap-1 sm:h-28 sm:gap-2 lg:flex lg:items-end lg:justify-between lg:gap-0"},t._l(t.data,(function(t,e){return a("Bar",{key:e,attrs:{bar:t}})})),1)}),[],!1,null,null,null).exports},2611:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(9101);const s={name:"FormLabel",props:["icon"],components:{TrendingUpIcon:r.Zab,WifiIcon:r.kVp,ListIcon:r.DE2,MailIcon:r.bV6,InfoIcon:r.szr,DatabaseIcon:r.VHe,UsersIcon:r.oyc,CreditCardIcon:r.ciH,DollarSignIcon:r.bkH,SmartphoneIcon:r.BEV,HardDriveIcon:r.zvn,BarChartIcon:r.eJP,SettingsIcon:r.ewm,FileTextIcon:r.zPP,ShieldIcon:r.b7C,FrownIcon:r.eFi,Edit2Icon:r.me4,BellIcon:r.Dkj,KeyIcon:r._m8}};const n=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-8 flex items-center"},[t.icon?t._e():a("edit-2-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}),t._v(" "),"frown"===t.icon?a("frown-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"list"===t.icon?a("list-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"info"===t.icon?a("info-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"database"===t.icon?a("database-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"file-text"===t.icon?a("file-text-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"dollar"===t.icon?a("dollar-sign-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"credit-card"===t.icon?a("credit-card-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"bar-chart"===t.icon?a("bar-chart-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"settings"===t.icon?a("settings-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"hard-drive"===t.icon?a("hard-drive-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"mail"===t.icon?a("mail-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?a("smartphone-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"shield"===t.icon?a("shield-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"bell"===t.icon?a("bell-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?a("key-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"users"===t.icon?a("users-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"wifi"===t.icon?a("wifi-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"trending-up"===t.icon?a("trending-up-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),a("b",{staticClass:"text-md font-bold dark:text-gray-200 sm:text-lg"},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},6064:(t,e,a)=>{a.d(e,{Z:()=>u});const r={name:"DotLabel",props:["color","title"]};var s=a(3379),n=a.n(s),o=a(5022),i={insert:"head",singleton:!1};n()(o.Z,i);o.Z.locals;var l=a(1900);const c={name:"ProgressLine",props:["data"],components:{DotLabel:(0,l.Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label"},[a("span",{class:["label-dot",t.color]}),t._v(" "),a("b",{staticClass:"label-title"},[t._v("\n        "+t._s(t.title)+"\n    ")])])}),[],!1,null,"03d13328",null).exports}};var d=a(8003),b={insert:"head",singleton:!1};n()(d.Z,b);d.Z.locals;const u=(0,l.Z)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mb-4 flex h-2.5 items-center rounded bg-light-300 dark:bg-2x-dark-foreground"},t._l(t.data,(function(e,r){return a("div",{key:r,staticClass:"chart-wrapper",style:{width:(e.progress>1?e.progress:0)+"%"}},[1===t.data.length?a("span",{staticClass:"chart-progress block h-2.5 w-full",class:[{"rounded-tl-lg rounded-bl-lg border-r-2 border-white dark:border-gray-800":e.progress<100,"rounded-lg border-none":e.progress>=100},e.color]}):t._e(),t._v(" "),t.data.length>1&&e.progress>0?a("span",{staticClass:"chart-progress block h-2.5 w-full",class:[{"rounded-tl-lg rounded-bl-lg border-r-2 border-white dark:border-gray-800":0===r,"border-r-2 border-white dark:border-gray-800":r<t.data.length-1,"rounded-tr-lg rounded-br-lg":r===t.data.length-1},e.color]}):t._e()])})),0),t._v(" "),a("footer",{staticClass:"flex w-full items-center overflow-x-auto"},t._l(t.data,(function(t,e){return a("DotLabel",{key:e,staticClass:"mr-5",attrs:{color:t.color,title:t.title}})})),1)])}),[],!1,null,"596eaf42",null).exports},356:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var r=a(6064),s=a(2611),n=a(6303),o=a(9669),i=a.n(o),l=a(1463),c=a(629);function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const u={name:"Storage",components:{BarChart:l.Z,ProgressLine:r.Z,FormLabel:s.Z,PageTab:n.Z},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,c.Se)(["config"])),data:function(){return{isLoading:!0,distribution:void 0,storage:void 0}},created:function(){var t=this;i().get("/api/user/storage").then((function(e){t.distribution=t.$mapStorageUsage(e.data),t.storage=e.data,t.isLoading=!1}))}};const h=(0,a(1900).Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageTab",[t.distribution?a("div",{staticClass:"card shadow-card"},[a("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n            "+t._s(t.$t("storage_usage"))+"\n        ")]),t._v(" "),a("b",{staticClass:"-mt-3 block text-2xl font-extrabold sm:text-3xl"},[t._v("\n            "+t._s(t.storage.data.attributes.used)+"\n        ")]),t._v(" "),t.config.storageLimit?a("b",{staticClass:"mt-0.5 block text-sm dark:text-gray-500 text-gray-400"},[t._v("\n            "+t._s(t.$t("total_of",{capacity:t.storage.data.attributes.capacity}))+"\n            "+t._s(t.$t("used"))+"\n        ")]):t._e(),t._v(" "),"0B"!==t.storage.data.attributes.used?a("ProgressLine",{staticClass:"mt-5",attrs:{data:t.distribution}}):t._e()],1):t._e(),t._v(" "),t.distribution?a("div",{staticClass:"card shadow-card"},[a("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n            "+t._s(t.$t("upload"))+"\n        ")]),t._v(" "),a("b",{staticClass:"-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"},[t._v("\n            "+t._s(t.storage.data.meta.traffic.upload)+"\n        ")]),t._v(" "),a("b",{staticClass:"mb-3 mb-5 block text-sm dark:text-gray-500 text-gray-400"},[t._v("\n            "+t._s(t.$t("in_last_x_days"))+"\n        ")]),t._v(" "),a("BarChart",{attrs:{data:t.storage.data.meta.traffic.chart.upload,color:"#FFBD2D"}})],1):t._e(),t._v(" "),t.distribution?a("div",{staticClass:"card shadow-card"},[a("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n            "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),a("b",{staticClass:"-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"},[t._v("\n            "+t._s(t.storage.data.meta.traffic.download)+"\n        ")]),t._v(" "),a("b",{staticClass:"mb-3 mb-5 block text-sm dark:text-gray-500 text-gray-400"},[t._v("\n            "+t._s(t.$t("in_last_x_days"))+"\n        ")]),t._v(" "),a("BarChart",{attrs:{data:t.storage.data.meta.traffic.chart.download,color:"#9d66fe"}})],1):t._e()])}),[],!1,null,null,null).exports}}]);