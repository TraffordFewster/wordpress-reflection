!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=93)}({86:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);n(86);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=wp.compose.compose,p=wp.data,f=p.withSelect,y=p.dispatch,m=wp.element,b=m.Component,d=m.Fragment,g=window.PGC_SGB_POST,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,e);var t,n,o,u=l(a);function a(){return r(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"copyToClipboard",value:function(){var __=wp.i18n.__;if(document.getElementsByClassName("pgc_sgb_shortcode_id")[0]){window.getSelection().removeAllRanges();var e=document.createRange();e.selectNodeContents(document.getElementsByClassName("pgc_sgb_shortcode_id")[0]),window.getSelection().addRange(e);try{document.execCommand("copy")?(console.log("Shortcode copied to clipboard."),y("core/notices").createNotice("success","".concat(__("Shortcode copied to clipboard.","simply-gallery-block")),{type:"snackbar",isDismissible:!0,id:"pgc-notic"})):y("core/notices").createNotice("warning","".concat(__("Cannot copy Shortcode.","simply-gallery-block")),{type:"snackbar",isDismissible:!0,id:"pgc-notic"})}catch(e){console.log(e)}window.getSelection().removeAllRanges()}}},{key:"render",value:function(){var __=wp.i18n.__,e=this.props,t=e.postID,n=e.blockCount,o=e.isCurrentPostPublished,r="[".concat(g.postType,' id="').concat(t,'"]');return wp.element.createElement(d,null,wp.element.createElement("div",{className:"pgc-sgb-post-plug"},wp.element.createElement("div",{className:"pgc-description"},wp.element.createElement("div",{className:"pgc-title"},__("Welcome!","simply-gallery-block")),__("The Shortcode is designed to transfer (clone) this gallery to various places (posts, pages, sitebars, footers, etc.) on your site. Also, the shortcode can be used to add a gallery when using third-party Page Builders (which have a shortcode widget).","simply-gallery-block")),0===n&&wp.element.createElement("div",{className:"pgc-info-notic"},__('Please add a Gallery Block using the "Plus" button. And then publish this post!',"simply-gallery-block")),n>1&&wp.element.createElement("div",{className:"pgc-warning-notic"},__("For the Shortcode to work correctly, we strongly recommend that you publish only one Gallery in this post.","simply-gallery-block")),1===n&&o&&wp.element.createElement(d,null,wp.element.createElement("div",{className:"pgc-success-notic"},__("The shortcode for this gallery is ready:","simply-gallery-block")),wp.element.createElement("div",{className:"pgc-sgb-flex-row"},wp.element.createElement("code",{className:"pgc_sgb_shortcode_id",role:"button",tabIndex:"0",onKeyDown:null,onClick:this.copyToClipboard},r)))))}}])&&c(t.prototype,n),o&&c(t,o),a}(b),w=s([f((function(e){return{postID:e("core/editor").getEditedPostAttribute("id"),blockCount:e("core/block-editor").getBlockCount(),isCurrentPostPublished:e("core/editor").isCurrentPostPublished()}}))])(h);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=k(e);if(t){var r=k(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=wp.element,R=j.Component,x=j.Fragment,C=wp.editPost,T=C.PluginSidebar,N=C.PluginSidebarMoreMenuItem,D="pgc-sgb-plugin-post-editor",B=wp.element.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("text",{fontWeight:"bold",fontStyle:"normal",xmlSpace:"preserve",textAnchor:"start",fontFamily:"Georgia, Times, 'Times New Roman', serif",fontSize:"18",id:"svg_11",y:"16",x:"0",strokeWidth:"0",stroke:"#fff",fill:"#0085ba"},"[/]"))),A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,o,r=O(c);function c(){return _(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var __=wp.i18n.__;return wp.element.createElement(x,null,wp.element.createElement(N,{target:D,icon:B},"SimpLy ".concat(__("Shortcode","simply-gallery-block"))),wp.element.createElement(T,{name:D,icon:B,title:"SimpLy ".concat(__("Shortcode","simply-gallery-block"))},wp.element.createElement(w,null)))}}])&&S(t.prototype,n),o&&S(t,o),c}(R);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=z(e);if(t){var r=z(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return L(this,n)}}function L(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(c,e);var t,n,o,r=W(c);function c(){return M(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return wp.element.createElement(w,null)}}])&&G(t.prototype,n),o&&G(t,o),c}(wp.element.Component),q=wp.element.render;document.getElementById("simply-gallery-block-post-editor")&&q(wp.element.createElement(K,null),document.getElementById("simply-gallery-block-post-editor"));(0,wp.plugins.registerPlugin)("pgc-sgb-plugin-post-editor",{render:A})}});