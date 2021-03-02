(function(e){function t(t){for(var n,c,l=t[0],a=t[1],u=t[2],s=0,p=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},i=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=a;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Todo App")]),o("TodoApp")],1)},i=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTitle,expression:"newTitle"}],attrs:{type:"text",placeholder:"todo"},domProps:{value:e.newTitle},on:{input:function(t){t.target.composing||(e.newTitle=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newDescription,expression:"newDescription"}],attrs:{type:"text",placeholder:"description todo"},domProps:{value:e.newDescription},on:{input:function(t){t.target.composing||(e.newDescription=t.target.value)}}}),o("button",{on:{click:e.addItem}},[e._v("Add item")])]),e._l(e.todos,(function(t){return o("TodoItem",{key:t.id,attrs:{todo:t},on:{removeClicked:e.removeItem,deleteClicked:e.deleteItem}})}))],2)},l=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"item",class:{done:e.todo.done}},[o("h2",[e._v(e._s(e.todo.title))]),o("p",[e._v(e._s(e.todo.description))]),e.todo.done?e._e():o("button",{on:{click:e.removeItem}},[e._v("Done")]),!1===!e.todo.done?o("button",{on:{click:e.deleteItem}},[e._v("Remove from list")]):e._e()])},u=[],d={props:["todo"],methods:{removeItem:function(){console.log(this.todo.done),this.$emit("removeClicked",this.todo.id)},deleteItem:function(){this.$emit("deleteClicked",this.todo.id)}}},s=d,p=o("2877"),f=Object(p["a"])(s,a,u,!1,null,null,null),v=f.exports,m=o("d4ec"),h=o("bee2"),g=o("bc3a"),b=o.n(g),w=b.a.create({baseURL:"http://localhost:8000/api",headers:{"Content-type":"application/json"}}),y=function(){function e(){Object(m["a"])(this,e)}return Object(h["a"])(e,[{key:"getAll",value:function(){return w.get("/todos")}},{key:"get",value:function(e){return w.get("/todos/".concat(e))}},{key:"create",value:function(e){return w.post("/todos",e)}},{key:"update",value:function(e,t){return w.put("/todos/".concat(e),t)}},{key:"delete",value:function(e){return w.delete("/todos/".concat(e))}}]),e}(),_=new y,T={components:{TodoItem:v},data:function(){return{todo:{id:null,title:"",description:"",done:!1},todos:[],newTitle:"",newDescription:""}},methods:{retriveTodos:function(){var e=this;_.getAll().then((function(t){e.todos=t.data,console.log(t.data)})).catch((function(e){console.log(e)}))},addItem:function(){var e=this;console.log(this.newTitle);var t={title:this.newTitle,description:this.newDescription};_.create(t).then((function(t){e.todo.id=t.data.id,console.log(t.data),e.retriveTodos()})).catch((function(e){console.log(e)})),this.newItem=""},removeItem:function(e){var t=this,o={done:!0};console.log(o),_.update(e,o).then((function(e){console.log(e.data),t.retriveTodos()})).catch((function(e){console.log(e)}))},deleteItem:function(e){var t=this;_.delete(e).then((function(e){console.log(e.data),t.retriveTodos()})).catch((function(e){console.log(e)}))}},mounted:function(){this.retriveTodos()}},k=T,O=Object(p["a"])(k,c,l,!1,null,null,null),j=O.exports,x={components:{TodoApp:j}},I=x,P=Object(p["a"])(I,r,i,!1,null,null,null),C=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.017ea242.js.map