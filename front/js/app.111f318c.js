(function(t){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"64a9":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:{name:"products"}}},[t._v("Home")]),n("router-view")],1)},a=[],i=n("d225"),c=n("308d"),u=n("6bb5"),l=n("4e2b"),s=n("9ab4"),p=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[t.loading?n("div",{staticClass:"loading"},[t._v("\n        Загрузка...\n    ")]):t._e(),t.error?n("div",{staticClass:"error"},[t._v("\n        "+t._s(t.error)+"\n    ")]):t._e(),t.products?n("div",{staticClass:"content"},[n("table",[t._m(0),n("tbody",t._l(t.products,function(e){return n("tr",{key:e.id,on:{click:function(n){t.clicked(e.id,n)}}},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.description))]),n("td",[t._v(t._s(e.location))]),n("td",[t.deleting?n("input",{directives:[{name:"model",rawName:"v-model",value:t.forDelete.id,expression:"forDelete.id"}],attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(t.forDelete.id)?t._i(t.forDelete.id,null)>-1:t.forDelete.id},on:{change:function(e){var n=t.forDelete.id,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&t.$set(t.forDelete,"id",n.concat([a])):i>-1&&t.$set(t.forDelete,"id",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.forDelete,"id",o)}}}):t._e()])])}),0)]),n("button",{on:{click:t.add}},[t._v("Добавить товар")]),n("button",{on:{click:t.deleteProducts}},[t._v("Удалить товары")])]):t._e()])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("№")]),n("td",[t._v("Название")]),n("td",[t._v("Описание")]),n("td",[t._v("Местоположение")])])])}],f=(n("6b54"),n("b0b4")),m=n("7338"),h=n.n(m),g=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.loading=!1,t.error="",t.products=[],t.forDelete={},t.deleting=!1,t}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"created",value:function(){this.getProducts()}},{key:"clicked",value:function(t){this.deleting?this.forDelete[t]=!0:this.$router.push({name:"productEdit",params:{id:t.toString()}})}},{key:"getProducts",value:function(){var t=this;this.loading=!0,h.a.get("/products").then(function(e){return t.products=e.data}).catch(function(e){return t.error=e}).then(function(){return t.loading=!1})}},{key:"add",value:function(){this.$router.push({name:"new"})}},{key:"deleteProducts",value:function(){this.deleting=!0}}]),e}(p["c"]);s["a"]([Object(p["d"])("$route")],g.prototype,"getProducts",null),g=s["a"]([p["a"]],g);var b=g,_=b,y=n("2877"),O=Object(y["a"])(_,d,v,!1,null,null,null),j=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-edit"},[t.loading?n("div",{staticClass:"loading"},[t._v("\n        Загрузка...\n    ")]):t._e(),t.error?n("div",{staticClass:"error"},[t._v("\n        "+t._s(t.error)+"\n    ")]):t._e(),t.product?n("div",{staticClass:"content"},[n("ImageInput",{model:{value:t.imgInfo,callback:function(e){t.imgInfo=e},expression:"imgInfo"}},[n("img",{attrs:{slot:"activator",src:t.imgInfo.url,width:"255",height:"255",alt:"картинка не найдена"},slot:"activator"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],attrs:{placeholder:"Введите название товара"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],attrs:{placeholder:"Введите описание товара"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.location,expression:"product.location"}],attrs:{placeholder:"Введите местоположение товара"},domProps:{value:t.product.location},on:{input:function(e){e.target.composing||t.$set(t.product,"location",e.target.value)}}}),n("p"),n("PropertyPicker",{attrs:{description:"Дата доставки"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.date,expression:"product.date"}],attrs:{type:"date"},domProps:{value:t.product.date},on:{input:function(e){e.target.composing||t.$set(t.product,"date",e.target.value)}}})]),n("p"),n("PropertyPicker",{attrs:{description:"Количество"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.count,expression:"product.count"}],attrs:{type:"number"},domProps:{value:t.product.count},on:{input:function(e){e.target.composing||t.$set(t.product,"count",e.target.value)}}})]),n("p"),n("PropertyPicker",{attrs:{description:"Страна производитель"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.product.country,expression:"product.country"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.product,"country",e.target.multiple?n:n[0])}}},t._l(t.countries,function(e){return n("option",{key:e.id},[t._v("  \n                    "+t._s(e.name)+"\n                ")])}),0)]),n("p"),n("PropertyPicker",{attrs:{description:"Коментарий"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.comment,expression:"product.comment"}],attrs:{placeholder:"Введите коментарий к товару"},domProps:{value:t.product.comment},on:{input:function(e){e.target.composing||t.$set(t.product,"comment",e.target.value)}}})]),n("button",{on:{click:t.save}},[t._v("Сохранить изменения")]),n("button",{on:{click:t.deleteProduct}},[t._v("Удалить товар")])],1):t._e()])},P=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("div",{on:{click:t.launchFilePicker}},[t._t("activator")],2),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){t.handleFileUpload(e.target.files)}}})])},$=[],x=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.value={},t.url="",t.$refs={file:HTMLInputElement},t}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"handleFileUpload",value:function(t){this.img=t[0],this.url=window.URL.createObjectURL(this.img),this.$emit("input",{url:this.url,image:this.img})}},{key:"launchFilePicker",value:function(){this.$refs.file.click()}}]),e}(p["c"]);s["a"]([Object(p["b"])({type:Object})],x.prototype,"value",void 0),x=s["a"]([p["a"]],x);var I=x,D=I,E=Object(y["a"])(D,w,$,!1,null,null,null),C=E.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("input",{attrs:{placeholder:"Введите название товара"},domProps:{value:t.value.name},on:{input:function(e){t.$emit("input",t.value)}}}),n("p"),n("textarea",{attrs:{placeholder:"Введите описание товара"},domProps:{value:t.value.description},on:{input:function(e){t.$emit("input",t.value)}}}),n("p"),n("input",{attrs:{placeholder:"Введите местоположение товара"},domProps:{value:t.value.location},on:{input:function(e){t.$emit("input",t.value)}}})])},F=[],T=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.value={},t}return Object(l["a"])(e,t),e}(p["c"]);s["a"]([Object(p["b"])({type:Object})],T.prototype,"value",void 0),T=s["a"]([p["a"]],T);var L=T,M=L,S=Object(y["a"])(M,N,F,!1,null,null,null),U=S.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{on:{click:t.pick}},[t._v(t._s(t.description))]),t.show?t._t("default"):t._e()],2)},H=[],R=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.description="",t.show=!1,t}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"pick",value:function(){this.show=!this.show}}]),e}(p["c"]);s["a"]([Object(p["b"])()],R.prototype,"description",void 0),R=s["a"]([p["a"]],R);var J=R,q=J,z=Object(y["a"])(q,A,H,!1,null,null,null),B=z.exports,G=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.loading=!1,t.error="",t.product={},t.imgInfo={},t.countries=[{id:1,name:"Россия"},{id:2,name:"Германия"},{id:3,name:"Испания"}],t.$refs={file:HTMLInputElement},t}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"created",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;this.loading=!0;var e="/products/"+this.$route.params.id;h.a.get(e).then(function(n){t.product=n.data,t.imgInfo.url=h.a.defaults.baseURL+e+"/image"}).catch(function(e){return t.error=e.data}).then(function(){return t.loading=!1})}},{key:"save",value:function(){var t=this,e="/products/"+this.$route.params.id;this.product.count&&(this.product.count=+this.product.count),this.product.date&&(this.product.date=Date.parse(this.product.date)),h.a.post(e,this.product).then(function(){var n=new FormData;n.append("img",t.imgInfo.image),h.a.post(e+"/image",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){return console.log("success")}).catch(function(e){return t.error=e.data})})}},{key:"deleteProduct",value:function(){var t=this;h.a.delete("/products/"+this.$route.params.id).then(function(){return t.$router.push({name:"products"})}).catch(function(e){return t.error=e.data})}}]),e}(p["c"]);s["a"]([Object(p["d"])("$route")],G.prototype,"fetchData",null),G=s["a"]([Object(p["a"])({components:{ImageInput:C,ProductInfo:U,PropertyPicker:B}})],G);var K=G,Q=K,V=Object(y["a"])(Q,k,P,!1,null,null,null),W=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("ImageInput",{model:{value:t.imgInfo,callback:function(e){t.imgInfo=e},expression:"imgInfo"}},[n("img",{attrs:{slot:"activator",src:t.imgInfo.url,width:"255",height:"255",alt:"картинка не найдена"},slot:"activator"})]),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"Введите название товара"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{placeholder:"Введите описание товара"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{placeholder:"Введите местоположение товара"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}}),n("p"),n("button",{on:{click:t.submit}},[t._v("Добавить товар")])],1)},Y=[],Z=(n("7f7f"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.name="",t.description="",t.location="",t.imgInfo={},t.$refs={file:HTMLInputElement},t}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"submit",value:function(){var t=new FormData;t.append("name",this.name),t.append("description",this.description),t.append("location",this.location),t.append("img",this.imgInfo.image),h.a.post("/products",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){return console.log("success")}).catch(function(t){return console.log(t)})}}]),e}(p["c"]));Z=s["a"]([Object(p["a"])({components:{ImageInput:C}})],Z);var tt=Z,et=tt,nt=Object(y["a"])(et,X,Y,!1,null,null,null),rt=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("404 Не найдено")])},at=[],it=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(p["c"]);it=s["a"]([p["a"]],it);var ct=it,ut=ct,lt=Object(y["a"])(ut,ot,at,!1,null,null,null),st=lt.exports,pt=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(p["c"]);pt=s["a"]([Object(p["a"])({components:{Products:j,ProductEdit:W,ProductNew:rt,NotFound:st}})],pt);var dt=pt,vt=dt,ft=(n("034f"),Object(y["a"])(vt,o,a,!1,null,null,null)),mt=ft.exports,ht=n("8c4f");r["default"].use(ht["a"]);var gt=new ht["a"]({mode:"history",routes:[{name:"products",path:"/products",component:j},{name:"new",path:"/products/new",component:rt},{name:"productEdit",path:"/products/:id",props:!0,component:W},{name:"notFound",path:"*",component:st}]});h.a.defaults.baseURL="http://localhost:3000/api",r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(mt)},router:gt}).$mount("#app")}});
//# sourceMappingURL=app.111f318c.js.map