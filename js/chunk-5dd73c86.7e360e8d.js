(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dd73c86"],{1386:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("header",{staticClass:"layout-head"},[n("Row",{attrs:{type:"flex",justify:"space-between"}},[n("Tabs",{staticClass:"tabs-bar",on:{"on-click":e.navChange},model:{value:e.navActiveName,callback:function(t){e.navActiveName=t},expression:"navActiveName"}},e._l(e.tabNavs,(function(e){return n("TabPane",{key:e.route,attrs:{name:e.route,label:e.label,icon:e.icon}})})),1),n("Settings")],1)],1),n("Content",{staticClass:"f-h100 layout-content"},[n("transition",{attrs:{appear:"",mode:"out-in",name:"component-fade"}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},o=[],c=(n("d3b7"),function(){return n.e("chunk-d907cdca").then(n.bind(null,"ca75"))}),s={name:"Index",components:{Settings:c},data:function(){return{navActiveName:"/page-design",tabNavs:[{label:"页面设计器",icon:"ios-construct",route:"/page-design"},{label:"JS",icon:"logo-nodejs",route:"/page-design/js-code"},{label:"组件属性",icon:"md-albums",route:"/page-design/control-property"}]}},mounted:function(){this.navActiveName=this.$route.path},methods:{navChange:function(e){this.navActiveName=e,this.$router.push({path:e})}}},i=s,u=(n("87a0"),n("2877")),r=Object(u["a"])(i,a,o,!1,null,"30005e59",null);t["default"]=r.exports},"87a0":function(e,t,n){"use strict";var a=n("c23f"),o=n.n(a);o.a},c23f:function(e,t,n){}}]);