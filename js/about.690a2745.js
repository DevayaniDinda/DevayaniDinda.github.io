(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("HelloKedua")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-iterator",{attrs:{items:t.drinks,"items-per-page":t.itemsPerPage},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Crud Atma Pedia")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("buat minuman")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Drinks name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:t.editedItem.calories,callback:function(e){t.$set(t.editedItem,"calories",e)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:t.editedItem.fat,callback:function(e){t.$set(t.editedItem,"fat",e)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:t.editedItem.carbs,callback:function(e){t.$set(t.editedItem,"carbs",e)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:t.editedItem.protein,callback:function(e){t.$set(t.editedItem,"protein",e)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"default",fn:function(e){return[a("v-row",t._l(e.items,(function(e){return a("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",[a("v-card-subtitle",[t._v("MINUMAN")]),a("v-divider"),a("v-card-title",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-content",[t._v("Calories")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(": "+t._s(e.calories))])],1),a("v-list-item",[a("v-list-item-content",[t._v("Fat")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(": "+t._s(e.fat))])],1),a("v-list-item",[a("v-list-item-content",[t._v("Carbs")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(": "+t._s(e.carbs))])],1),a("v-list-item",[a("v-list-item-content",[t._v("Protein")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(": "+t._s(e.protein))])],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"mb-2",attrs:{color:"blue"},on:{click:function(a){return t.editItem(e)}}},[t._v("EDIT")]),a("v-btn",{staticClass:"mb-2",attrs:{color:"red"},on:{click:function(a){return t.deleteItem(e)}}},[t._v("DELETE")])],1)],1)],1)})),1)]}}])})},l=[],d=(a("b0c0"),a("dc59")),r={data:function(){return{search:"",cek:-1,dialog:!1,itemsPerPage:4,drinks:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{drinks:d["b"]},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},methods:{close:function(){this.dialog=!1},save:function(){this.cek>-1?(d["b"].child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(d["b"].push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.calories=0,this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1},editItem:function(t){this.editedIndex=t[".key"],this.cek=0,this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){confirm("Are you sure you want to delete this item?")&&d["b"].child(t[".key"]).remove()}}},o=r,c=a("2877"),m=a("6544"),v=a.n(m),u=a("8336"),f=a("b0af"),b=a("99d9"),I=a("62ad"),h=a("a523"),p=a("c377"),k=a("169a"),_=a("ce7e"),g=a("8860"),x=a("da13"),C=a("5d23"),V=a("0fd9"),w=a("2fa4"),P=a("8654"),y=a("71d9"),T=a("2a7f"),E=Object(c["a"])(o,n,l,!1,null,null,null),$=E.exports;v()(E,{VBtn:u["a"],VCard:f["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCol:I["a"],VContainer:h["a"],VDataIterator:p["a"],VDialog:k["a"],VDivider:_["a"],VList:g["a"],VListItem:x["a"],VListItemContent:C["a"],VRow:V["a"],VSpacer:w["a"],VTextField:P["a"],VToolbar:y["a"],VToolbarTitle:T["a"]});var D={name:"kedua",components:{HelloKedua:$}},S=D,A=Object(c["a"])(S,i,s,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=about.690a2745.js.map