webpackJsonp([4],{gfHy:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],attrs:{id:"page-about"}},[e("h1",[this._v(this._s(this.title))]),e("p",[this._v(this._s(this.content))])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"wV/N":function(t,e,n){"use strict";e.a={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:"published"}).then(function(t){return{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.Content}})},mounted:function(){this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})}}},yPeL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("wV/N"),o=n("gfHy"),s=n("VU/8")(i.a,o.a,!1,null,null,null);s.options.__file="pages\\about\\index.vue",e.default=s.exports}});