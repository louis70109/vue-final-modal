import{ref as e,inject as t,reactive as n,computed as o,watch as r,onMounted as i,onBeforeUnmount as a,nextTick as l,withScopeId as u,pushScopeId as s,popScopeId as c,withDirectives as f,openBlock as d,createBlock as v,withKeys as p,createVNode as m,Transition as y,mergeProps as h,createCommentVNode as b,withModifiers as g,renderSlot as w,Fragment as x,renderList as E,vShow as S,resolveDynamicComponent as O,toHandlers as z,createSlots as T,withCtx as k,shallowReactive as C}from"vue";function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t,n,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(o,r)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var I=function(e){return function(e,t){return P(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},V=function(e){return e==document.activeElement},D=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,n,o;return t=e,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||V(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;V(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=I(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&L(t.prototype,n),o&&L(t,o),e}(),R=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},H=function(e,t,n){return"number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)},$=function(e){return e&&Number(e.replace(/px$/,""))||0},K={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},U=function(e,t,n){t.addEventListener(K[e].pc,n),t.addEventListener(K[e].m,n,{passive:!1})},F=function(e,t,n){t.removeEventListener(K[e].pc,n),t.removeEventListener(K[e].m,n)},W=!1;if("undefined"!=typeof window){var Y={get passive(){W=!0}};window.addEventListener("testPassive",null,Y),window.removeEventListener("testPassive",null,Y)}var q,G,X="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),Z=[],J=!1,Q=0,ee=-1,te=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},ne=function(e){return Z.some((function(){return te(e,-Q)}))},oe=function(e){var t=e||window.event;return!!ne(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},re=function(e,t){if(e){if(!Z.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};Z=[].concat(P(Z),[n]),X?(e.ontouchstart=function(e){1===e.targetTouches.length&&(ee=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){Q=e.targetTouches[0].clientY-ee,!ne(e.target)&&(t&&0===t.scrollTop&&Q>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&Q<0?oe(e):e.stopPropagation())}(t,e)},J||(document.addEventListener("touchmove",oe,W?{passive:!1}:void 0),J=!0)):function(e){if(void 0===G){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);G=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===q&&(q=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},ie=function(e){e?(Z=Z.filter((function(t){return t.targetElement!==e})),X?(e.ontouchstart=null,e.ontouchmove=null,J&&0===Z.length&&(document.removeEventListener("touchmove",oe,W?{passive:!1}:void 0),J=!1)):Z.length||(void 0!==G&&(document.body.style.paddingRight=G,G=void 0),void 0!==q&&(document.body.style.overflow=q,q=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},ae=function(){},le="enter",ue="entering",se="leave",ce="leavng",fe={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},de={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=A(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(t){return-1!==e.indexOf(t)})).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(u,s){var c=s.emit,f=Symbol("vfm"),d=e(null),v=e(null),p=e(null),m=e(null),y=e(null),h=e(null),b=t(u.options.key),g=e(null),w=new D,x=e(!1),E=n({modal:!1,overlay:!1,resize:!1}),S=e(null),O=e(null),z=e(!1),T=e({}),k=e({}),C=e(null),A=ae,M=ae,L=o((function(){return"string"==typeof u.overlayTransition?{name:u.overlayTransition}:j({},u.overlayTransition)})),_=o((function(){return"string"==typeof u.transition?{name:u.transition}:j({},u.transition)})),N=o((function(){return(u.hideOverlay||S.value===se)&&O.value===se})),I=o((function(){return!1===u.zIndex?!!u.zIndexAuto&&+u.zIndexBase+2*(g.value||0):u.zIndex})),V=o((function(){return j({},!1!==I.value&&{zIndex:I.value})})),K=o((function(){var e=[k.value];return Array.isArray(u.contentStyle)?e.push.apply(e,P(u.contentStyle)):e.push(u.contentStyle),e}));function W(){return{uid:f,props:u,emit:c,vfmContainer:v,vfmContent:p,vfmResize:m,vfmOverlayTransition:y,vfmTransition:h,getAttachElement:X,modalStackIndex:g,visibility:E,handleLockScroll:G,$focusTrap:w,toggle:ee,params:T}}function Y(){if(u.modelValue){if(c("_before-open",Z({type:"_before-open"})),J("before-open",!1))return void M("show");var e=X();if(e||!1===u.attach){!1!==u.attach&&e.appendChild(d.value);var t=b.openedModals.findIndex((function(e){return e.uid===f}));-1!==t&&b.openedModals.splice(t,1),b.openedModals.push(W()),g.value=b.openedModals.length-1,G(),b.openedModals.filter((function(e){return e.uid!==f})).forEach((function(t,n){t.getAttachElement()===e&&(t.modalStackIndex.value=n,t.visibility.overlay=!1)})),x.value=!0,E.overlay=!0,E.modal=!0}else!1!==e&&console.warn("Unable to locate target ".concat(u.attach))}}function q(){var e=b.openedModals.findIndex((function(e){return e.uid===f}));if(-1!==e&&b.openedModals.splice(e,1),b.openedModals.length>0){var t=b.openedModals[b.openedModals.length-1];t.props.focusTrap&&t.$focusTrap.firstElement().focus(),(t.props.focusRetain||t.props.focusTrap)&&t.vfmContainer.value.focus(),!t.props.hideOverlay&&(t.visibility.overlay=!0)}u.drag&&oe(),u.resize&&ve(),C.value=null,E.overlay=!1,E.modal=!1}function G(){u.modelValue&&l((function(){u.lockScroll?re(v.value,{reserveScrollBarGap:!0}):ie(v.value)}))}function X(){return!1!==u.attach&&("string"==typeof u.attach?!!window&&window.document.querySelector(u.attach):u.attach)}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j({ref:W()},e)}function J(e,t){var n=!1,o=Z({type:e,stop:function(){n=!0}});return c(e,o),!!n&&(z.value=!0,l((function(){c("update:modelValue",t)})),!0)}function Q(e,t,n){C.value="".concat(t,":").concat(n),c(C.value,e)}function ee(e,t){var n=arguments;return new Promise((function(o,r){A=function(e){o(e),A=ae},M=function(e){r(e),M=ae};var i="boolean"==typeof e?e:!u.modelValue;i&&2===n.length&&(T.value=t),c("update:modelValue",i)}))}function te(e){e.stopPropagation();var t,n="resize",o="drag",r=e.target.getAttribute("direction");if(r)t=n;else{if(!function(e,t,n){return""===n||P(t.querySelectorAll(n)).includes(e.target)}(e,p.value,u.dragSelector))return;t=o}Q(e,t,"start");var i,a,l,s,c=R(e),f=v.value.getBoundingClientRect(),d=p.value.getBoundingClientRect(),m="absolute"===window.getComputedStyle(p.value).position,y=$(k.value.top),h=$(k.value.left),b=function(){if(u.fitParent){var e={absolute:function(){return{minTop:0,minLeft:0,maxTop:f.height-d.height,maxLeft:f.width-d.width}},relative:function(){return{minTop:y+f.top-d.top,minLeft:h+f.left-d.left,maxTop:y+f.bottom-d.bottom,maxLeft:h+f.right-d.right}}};return m?e.absolute():e.relative()}return{}}(),g=t===n&&(i=document.body,a="cursor",l=fe[r],s=i.style[a],i.style[a]=l,function(){i.style[a]=s}),w=function(e){e.stopPropagation(),Q(e,t,"move");var i,a,l=R(e),s={x:l.x-c.x,y:l.y-c.y};t===n&&(s=function(e,t,n,o,r){var i=function(e){var n,o=t[e.axis];o=u.fitParent?H(e.min,o,e.max):o;var i=H(e.minEdge,e.getEdge(o),e.maxEdge);return o=e.getOffsetAxis(i,r),B(n={},e.edgeName,i),B(n,e.axis,o),n},a=function(e,t,r,i){var a,l=o[t],s=n[e]-o[e],c=(a=t).charAt(0).toUpperCase()+a.slice(1);return{axis:r,edgeName:t,min:i?s:-l,max:i?l:s,minEdge:u["min".concat(c)],maxEdge:u["max".concat(c)],getEdge:function(e){return o[t]-e*(i?1:-1)},getOffsetAxis:function(e,n){var r=o[t]-e;return n?i?r:0:(i?1:-1)*r/2}}},l={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},s={x:0,y:0};return e.split("").forEach((function(e){var t=a.apply(void 0,P(l[e]));s=j(j({},s),i(t))})),s}(r,s,f,d,m)),m?(i=d.top-f.top+s.y,a=d.left-f.left+s.x):(i=y+s.y,a=h+s.x),t===o&&u.fitParent&&(i=H(b.minTop,i,b.maxTop),a=H(b.minLeft,a,b.maxLeft));var v=j(j(j({position:"relative",top:i+"px",left:a+"px",margin:"unset",touchAction:"none"},m&&{position:"absolute",transform:"unset",width:d.width+"px",height:d.height+"px"}),s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"});k.value=j(j({},k.value),v)};U("move",document,w),U("up",document,(function e(o){o.stopPropagation(),t===n&&g&&g(),setTimeout((function(){Q(o,t,"end")})),F("move",document,w),F("up",document,e)}))}function ne(){U("down",p.value,te),k.value.touchAction="none"}function oe(){F("down",p.value,te)}function de(){E.resize=!0,l((function(){U("down",m.value,te)}))}function ve(){F("down",m.value,te),E.resize=!1}return r((function(){return u.modelValue}),(function(e){if(z.value)z.value=!1;else if(Y(),!e){if(J("before-close",!0))return void M("hide");q()}})),r((function(){return u.lockScroll}),G),r((function(){return u.hideOverlay}),(function(e){u.modelValue&&!e&&(E.overlay=!0)})),r((function(){return u.attach}),Y),r(N,(function(e){e&&(x.value=!1,v.value.style.display="none")}),{flush:"post"}),r((function(){return u.drag}),(function(e){x.value&&(e?ne():oe())})),r((function(){return u.resize}),(function(e){x.value&&(e?de():ve())})),r((function(){return u.keepChangedStyle}),(function(e){e||(k.value={})})),b.modals.push(W()),i((function(){Y()})),a((function(){var e;q(),u.lockScroll&&v.value&&ie(v.value),null==d||null===(e=d.value)||void 0===e||e.remove();var t=b.modals.findIndex((function(e){return e.uid===f}));b.modals.splice(t,1)})),{root:d,vfmContainer:v,vfmContent:p,vfmResize:m,vfmOverlayTransition:y,vfmTransition:h,computedOverlayTransition:L,computedTransition:_,visible:x,visibility:E,params:T,calculateZIndex:I,bindStyle:V,bindContentStyle:K,beforeOverlayEnter:function(){S.value=ue},afterOverlayEnter:function(){S.value=le},beforeOverlayLeave:function(){S.value=ce},afterOverlayLeave:function(){S.value=se},beforeModalEnter:function(){O.value=ue},afterModalEnter:function(){O.value=le,(u.focusRetain||u.focusTrap)&&v.value.focus(),u.focusTrap&&w.enable(v.value),u.drag&&ne(),u.resize&&de(),c("_opened"),c("opened",Z({type:"opened"})),A("show")},beforeModalLeave:function(){O.value=ce,w.enabled()&&w.disable()},afterModalLeave:function(){O.value=se,g.value=null,u.lockScroll&&ie(v.value),u.keepChangedStyle||(k.value={});var e=!1,t=Z({type:"closed",stop:function(){e=!0}});c("_closed"),c("closed",t),A("hide"),e||(T.value={})},onClickContainer:function(){"resize:move"!==C.value&&(c("click-outside",Z({type:"click-outside"})),u.clickToClose&&c("update:modelValue",!1))},onEsc:function(){x.value&&u.escToClose&&c("update:modelValue",!1)}}}},ve=u("data-v-2836fdb5");s("data-v-2836fdb5");var pe={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};c();var me=ve((function(e,t,n,o,r,i){return n.ssr||o.visible?f((d(),v("div",{key:0,ref:"root",style:o.bindStyle,class:["vfm vfm--inset",[!1===n.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":n.preventClick}]],onKeydown:t[2]||(t[2]=p((function(){return o.onEsc&&o.onEsc.apply(o,arguments)}),["esc"]))},[m(y,h(o.computedOverlayTransition,{onBeforeEnter:o.beforeOverlayEnter,onAfterEnter:o.afterOverlayEnter,onBeforeLeave:o.beforeOverlayLeave,onAfterLeave:o.afterOverlayLeave}),{default:ve((function(){return[!n.hideOverlay&&o.visibility.overlay?(d(),v("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass],style:n.overlayStyle},null,6)):b("v-if",!0)]})),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),m(y,h(o.computedTransition,{onBeforeEnter:o.beforeModalEnter,onAfterEnter:o.afterModalEnter,onBeforeLeave:o.beforeModalLeave,onAfterLeave:o.afterModalLeave}),{default:ve((function(){return[f(m("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes],style:n.styles,"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:t[1]||(t[1]=g((function(){return o.onClickContainer&&o.onClickContainer.apply(o,arguments)}),["self"]))},[m("div",{ref:"vfmContent",class:["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.preventClick}]],style:o.bindContentStyle},[w(e.$slots,"default",{params:o.params,close:function(){return e.$emit("update:modelValue")}}),o.visibility.resize&&o.visibility.modal?(d(),v("div",pe,[(d(!0),v(x,null,E(n.resizeDirections,(function(e){return d(),v("div",{key:e,direction:e,class:["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])})),128))],512)):b("v-if",!0)],6)],14,["aria-expanded"]),[[S,o.visibility.modal]])]})),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[S,!n.ssr||o.visible]]):b("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-2836fdb5] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-2836fdb5] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-2836fdb5],\n.vfm--resize-br[data-v-2836fdb5],\n.vfm--resize-bl[data-v-2836fdb5],\n.vfm--resize-tl[data-v-2836fdb5] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-2836fdb5] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-2836fdb5] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-2836fdb5] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-2836fdb5] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-2836fdb5] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-2836fdb5] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-2836fdb5] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-2836fdb5] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),de.render=me,de.__scopeId="data-v-2836fdb5",de.__file="lib/VueFinalModal.vue";var ye={props:{},computed:{api:function(){return this[this.options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t,n){var o,r=this;return(o=function*(){e.ref.params.value=t.params,yield r.$nextTick(),yield r.$nextTick(),t.value||(r.slice(n),t.reject("show"))},function(){var e=this,t=arguments;return new Promise((function(n,r){var i=o.apply(e,t);function a(e){M(i,n,r,a,l,"next",e)}function l(e){M(i,n,r,a,l,"throw",e)}a(void 0)}))})()},isString:function(e){return"string"==typeof e}}},he={class:"modals-container"};function be(e,t){var n=j({},e);return Object.assign(n.props,{options:{type:Object,default:function(){return t}}}),n}function ge(e,t){var n=function(e){return function(){return{show:function(t){for(var n=this,o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];switch(A(t)){case"string":return this.toggle.apply(this,[t,!0].concat(r));case"object":return Promise.allSettled([new Promise((function(o,i){var a={value:!0,id:Symbol("dynamicModal"),component:e.componentName,bind:{},slots:{},on:{},params:r[0],reject:i,opened:function(){o("show")}};n.dynamicModals.push(C(Object.assign(a,t)))}))])}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)},hideAll:function(){return this.hide.apply(this,P(this.openedModals.map((function(e){return e.props.name}))))},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,P(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,n)})))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.props.name)}))},dynamicModals:C([]),openedModals:[],modals:[]}}}(t)();Object.defineProperty(e.config.globalProperties,t.key,{get:function(){return n}}),e.provide(t.key,n)}ye.render=function(e,t,n,o,r,i){return d(),v("div",he,[(d(!0),v(x,null,E(i.api.dynamicModals,(function(e,t){return d(),v(O(e.component),h({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t}},z(e.on),{on_closed:function(e){return i.slice(t)},on_beforeOpen:function(t){return i.beforeOpen(t,e)},on_opened:e.opened}),T({_:2},[E(e.slots,(function(e,t){return{name:t,fn:k((function(){return[b(" eslint-disable vue/no-v-html "),i.isString(e)?(d(),v("div",{key:0,innerHTML:e},null,8,["innerHTML"])):(d(),v(O(e.component),h({key:1},e.bind,z(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_closed","on_beforeOpen","on_opened"])})),128))])},ye.__file="lib/ModalsContainer.vue";var we={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};export default function(e){return{install:function(t,n){var o=Object.assign({},we,e,n);(function(e,t,n){return!(e||t||n)||("undefined"==typeof window||(e&&console.error("[vue-final-modal] Duplicate registration API key of VueFinalModal."),t&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),n&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")),!1)})(t.config.globalProperties[o.key],t._context.components[o.componentName],t._context.components[o.dynamicContainerName])&&(ge(t,o),function(e,t){e.component(t.componentName,be(de,t))}(t,o),function(e,t){e.component(t.dynamicContainerName,be(ye,t))}(t,o))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
