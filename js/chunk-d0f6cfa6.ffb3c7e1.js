(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0f6cfa6"],{"413a":function(t,e,l){},8641:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("Form",{staticClass:"form",attrs:{model:t.form,"label-position":"top"}},[l("List",[l("ListItem",[l("FormItem",{attrs:{label:"标签宽度"}},[l("InputNumber",{attrs:{min:0},on:{"on-change":function(e){return t.formChange("labelWidth")}},model:{value:t.form.labelWidth,callback:function(e){t.$set(t.form,"labelWidth",e)},expression:"form.labelWidth"}})],1)],1),l("ListItem",[l("FormItem",{attrs:{label:"标签对齐方式"}},[l("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(e){return t.formChange("labelAlign")}},model:{value:t.form.labelAlign,callback:function(e){t.$set(t.form,"labelAlign",e)},expression:"form.labelAlign"}},t._l(t.alignList,(function(e){return l("Radio",{key:e.value,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1)],1),l("ListItem",[l("FormItem",{attrs:{label:"输入框对齐方式"}},[l("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(e){return t.formChange("inputAlign")}},model:{value:t.form.inputAlign,callback:function(e){t.$set(t.form,"inputAlign",e)},expression:"form.inputAlign"}},t._l(t.alignList,(function(e){return l("Radio",{key:e.value,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1)],1),l("ListItem",[l("FormItem",{attrs:{label:"标签添加冒号"}},[l("i-switch",{model:{value:t.form.colon,callback:function(e){t.$set(t.form,"colon",e)},expression:"form.colon"}})],1)],1),l("ListItem",[l("FormItem",{attrs:{label:"自定义Class"}},[l("Input",{attrs:{placeholder:"多个class以,隔开"},on:{"on-change":function(e){return t.formChange("customClass")}},model:{value:t.form.customClass,callback:function(e){t.$set(t.form,"customClass",e)},expression:"form.customClass"}})],1)],1)],1)],1)},o=[],a={name:"FormProperty",computed:{form:function(){return this.$store.state.formDesign.form.config}},data:function(){return{alignList:[{value:"left",label:"左对齐"},{value:"center",label:"中对齐"},{value:"right",label:"右对齐"}]}},methods:{}},r=a,s=(l("fa1b"),l("2877")),i=Object(s["a"])(r,n,o,!1,null,"4607e366",null);e["default"]=i.exports},fa1b:function(t,e,l){"use strict";var n=l("413a"),o=l.n(n);o.a}}]);