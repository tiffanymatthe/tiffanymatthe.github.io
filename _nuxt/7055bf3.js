(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,5,6],{259:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},260:function(t,e,r){var n=r(262);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.__esModule=!0,t.exports.default=t.exports},261:function(t,e,r){r(35),r(25),r(31),r(10),r(51),r(30),r(52);var n=r(259),o=r(260),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(75),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,h=data.staticClass,style=data.style,x=data.staticStyle,y=data.attrs,m=void 0===y?{}:y,O=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-sun",v,h],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m)},O),d.concat([r("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),r("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),r("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),r("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),r("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),r("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),r("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),r("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),r("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})]))}}},262:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.__esModule=!0,t.exports.default=t.exports},263:function(t,e,r){r(35),r(25),r(31),r(10),r(51),r(30),r(52);var n=r(259),o=r(260),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(75),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,h=data.staticClass,style=data.style,x=data.staticStyle,y=data.attrs,m=void 0===y?{}:y,O=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-moon",v,h],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m)},O),d.concat([r("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})]))}}},264:function(t,e,r){"use strict";r.r(e);var n=r(261),o=r.n(n),l=r(263),c=r.n(l),f={components:{IconLight:o.a,IconDark:c.a},computed:{btnLabel:function(){return"light"===this.$colorMode.preference?"dark":"light"}},methods:{changeMode:function(){this.$colorMode.preference="light"===this.$colorMode.preference?"dark":"light"}}},d=r(50),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn capitalize",on:{click:t.changeMode}},[r("div",{staticClass:"svg-icon svg-baseline"},[r("icon-"+t.btnLabel,{tag:"component"})],1)])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,r){"use strict";r.r(e);var n=r(50),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"mt-20 flex flex-wrap items-center justify-between py-5"},[r("NuxtLink",{staticClass:"no-highlight text-2xl font-serif",attrs:{to:"/"}},[t._v("Tiffany Matthé")]),t._v(" "),r("div",{staticClass:"w-full md:w-auto md:flex text-left md:text-right mt-5 md:mt-0"},[r("NuxtLink",{staticClass:"no-highlight block md:inline-block mx-1 md:mx-3 my-3 pb-1 nav-item",attrs:{to:"/about"}},[t._v("about")]),t._v(" "),r("NuxtLink",{staticClass:"no-highlight block md:inline-block mx-1 md:mx-3 my-3 pb-1 nav-item",attrs:{to:"/now"}},[t._v("now")]),t._v(" "),r("NuxtLink",{staticClass:"no-highlight block md:inline-block mx-1 md:mx-3 my-3 pb-1 nav-item",attrs:{to:"/read"}},[t._v("read")]),t._v(" "),r("ColorMode")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ColorMode:r(264).default})},266:function(t,e,r){"use strict";r.r(e);var n=r(50),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-auto pt-20 pb-10"},[r("div",{staticClass:"mx-auto flex justify-between"},[r("div",[t._v("Vancouver 2021 - "),r("a",{attrs:{target:"_blank",href:"https://github.com/tiffanymatthe"}},[t._v("Github")])]),t._v(" "),r("div",[r("a",{staticClass:"no-highlight",attrs:{href:"#top"}},[t._v("↑")])])])])}],!1,null,null,null);e.default=component.exports},281:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(36),{name:"AboutPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("single-pages/about").only(["title","body","type"]).fetch();case 3:return n=e.sent,e.abrupt("return",{page:n});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(50),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-4/5 mx-auto md:w-1/2 flex flex-col h-screen",attrs:{id:"top"}},[r("NavigationBar"),t._v(" "),r("div",[r("h1",{staticClass:"text-5xl pb-3 mt-2 z-10"},[t._v(t._s(t.page.title))]),t._v(" "),r("nuxt-content",{staticClass:"mt-4 prose dark:prose-dark max-w-none",attrs:{document:t.page}})],1),t._v(" "),r("PageFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationBar:r(265).default,PageFooter:r(266).default})}}]);