<<<<<<< HEAD
import{ref as e,inject as t,reactive as n,computed as o,watch as r,onMounted as a,onBeforeUnmount as l,nextTick as i,withScopeId as u,withDirectives as c,openBlock as s,createBlock as d,createVNode as f,Transition as v,createCommentVNode as p,withModifiers as m,renderSlot as y,vShow as b,Fragment as h,renderList as g,resolveDynamicComponent as E,mergeProps as w,toHandlers as O,createSlots as S,withCtx as k,shallowReactive as C}from"vue";function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var I=function(e){return function(e,t){return j(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},V=function(e){return e==document.activeElement},N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,n,o;return t=e,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||V(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;V(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=I(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&A(t.prototype,n),o&&A(t,o),e}(),P=!1;if("undefined"!=typeof window){var _={get passive(){P=!0}};window.addEventListener("testPassive",null,_),window.removeEventListener("testPassive",null,_)}var D,z,K="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),R=[],H=!1,U=0,$=-1,F=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},Y=function(e){return R.some((function(){return F(e,-U)}))},q=function(e){var t=e||window.event;return!!Y(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},G=function(e,t){if(e){if(!R.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};R=[].concat(j(R),[n]),K?(e.ontouchstart=function(e){1===e.targetTouches.length&&($=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){U=e.targetTouches[0].clientY-$,!Y(e.target)&&(t&&0===t.scrollTop&&U>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&U<0?q(e):e.stopPropagation())}(t,e)},H||(document.addEventListener("touchmove",q,P?{passive:!1}:void 0),H=!0)):function(e){if(void 0===z){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);z=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===D&&(D=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},W=function(e){e?(R=R.filter((function(t){return t.targetElement!==e})),K?(e.ontouchstart=null,e.ontouchmove=null,H&&0===R.length&&(document.removeEventListener("touchmove",q,P?{passive:!1}:void 0),H=!1)):R.length||(void 0!==z&&(document.body.style.paddingRight=z,z=void 0),void 0!==D&&(document.body.style.overflow=D,D=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},Z="enter",J="entering",Q="leave",X="leavng",ee={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=M(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(u,c){var s=c.emit,d=Symbol("vfm"),f=e(null),v=e(null),p=t(u.options.key),m=e(null),y=new N,b=e(!1),h=n({modal:!1,overlay:!1}),g=e(null),E=e(null),w=e(!1),O=e({}),S=o((function(){return(u.hideOverlay||g.value===Q)&&E.value===Q})),k=o((function(){return!1===u.zIndex?!!u.zIndexAuto&&+u.zIndexBase+2*(m.value||0):u.zIndex})),C=o((function(){return B({},!1!==k.value&&{zIndex:k.value})}));function M(){return{uid:d,props:u,emit:s,vfmContainer:v,getAttachElement:j,modalStackIndex:m,visibility:h,handleLockScroll:x,$focusTrap:y,toggle:V,params:O}}function A(){if(u.modelValue){if(I("before-open",!1))return;var e=j();if(e||!1===u.attach){!1!==u.attach&&e.appendChild(f.value);var t=p.openedModals.findIndex((function(e){return e.uid===d}));-1!==t&&p.openedModals.splice(t,1),p.openedModals.push(M()),m.value=p.openedModals.length-1,x(),p.openedModals.filter((function(e){return e.uid!==d})).forEach((function(t,n){t.getAttachElement()===e&&(t.modalStackIndex.value=n,t.visibility.overlay=!1)})),b.value=!0,i((function(){h.overlay=!0,h.modal=!0}))}else!1!==e&&console.warn("Unable to locate target ".concat(u.attach))}}function T(){var e=p.openedModals.findIndex((function(e){return e.uid===d}));if(-1!==e&&p.openedModals.splice(e,1),p.openedModals.length>0){var t=p.openedModals[p.openedModals.length-1];t.props.focusTrap&&t.$focusTrap.firstElement().focus(),(t.props.focusRetain||t.props.focusTrap)&&t.vfmContainer.value.focus(),!t.props.hideOverlay&&(t.visibility.overlay=!0)}h.overlay=!1,h.modal=!1}function x(){u.modelValue&&i((function(){u.lockScroll?G(v.value,{reserveScrollBarGap:!0}):W(v.value)}))}function j(){return!1!==u.attach&&("string"==typeof u.attach?!!window&&window.document.querySelector(u.attach):u.attach)}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return B({ref:M()},e)}function I(e,t){var n=!1,o=L({type:e,stop:function(){n=!0}});return s(e,o),!!n&&(w.value=!0,i((function(){s("update:modelValue",t)})),!0)}function V(e,t){var n="boolean"==typeof e?e:!u.modelValue;n&&2===arguments.length&&(O.value=t),s("update:modelValue",n)}return r((function(){return u.modelValue}),(function(e){if(w.value)w.value=!1;else if(A(),!e){if(I("before-close",!0))return;T()}})),r((function(){return u.lockScroll}),x),r((function(){return u.hideOverlay}),(function(e){u.modelValue&&!e&&(h.overlay=!0)})),r((function(){return u.attach}),A),r(S,(function(e){e&&(b.value=!1)}),{flush:"post"}),p.modals.push(M()),a((function(){A()})),l((function(){var e;T(),u.lockScroll&&v.value&&W(v.value),null==f||null===(e=f.value)||void 0===e||e.remove();var t=p.modals.findIndex((function(e){return e.uid===d}));p.modals.splice(t,1)})),{root:f,vfmContainer:v,visible:b,visibility:h,params:O,calculateZIndex:k,bindStyle:C,beforeOverlayEnter:function(){g.value=J},afterOverlayEnter:function(){g.value=Z},beforeOverlayLeave:function(){g.value=X},afterOverlayLeave:function(){g.value=Q},beforeModalEnter:function(){E.value=J},afterModalEnter:function(){E.value=Z,(u.focusRetain||u.focusTrap)&&v.value.focus(),u.focusTrap&&y.enable(v.value),s("opened",L({type:"opened"}))},beforeModalLeave:function(){E.value=X,y.enabled()&&y.disable()},afterModalLeave:function(){E.value=Q,m.value=null,u.lockScroll&&W(v.value);var e=!1,t=L({type:"closed",stop:function(){e=!0}});s("closed",t),e||(O.value={})},onClickContainer:function(){s("click-outside",L({type:"click-outside"})),u.clickToClose&&s("update:modelValue",!1)},onEsc:function(e){27===e.keyCode&&b.value&&u.escToClose&&s("update:modelValue",!1)}}}},te=u("data-v-2836fdb5"),ne=te((function(e,t,n,o,r,a){return n.ssr||o.visible?c((s(),d("div",{key:0,ref:"root",style:o.bindStyle,class:["vfm vfm--inset",[!1===n.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":n.preventClick}]],onKeydown:t[2]||(t[2]=function(){return o.onEsc&&o.onEsc.apply(o,arguments)})},[f(v,{name:n.overlayTransition,onBeforeEnter:o.beforeOverlayEnter,onAfterEnter:o.afterOverlayEnter,onBeforeLeave:o.beforeOverlayLeave,onAfterLeave:o.afterOverlayLeave},{default:te((function(){return[!n.hideOverlay&&o.visibility.overlay?(s(),d("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass],style:n.overlayStyle},null,6)):p("v-if",!0)]})),_:1},8,["name","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),f(v,{name:n.transition,onBeforeEnter:o.beforeModalEnter,onAfterEnter:o.afterModalEnter,onBeforeLeave:o.beforeModalLeave,onAfterLeave:o.afterModalLeave},{default:te((function(){return[c(f("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes],style:n.styles,"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:t[1]||(t[1]=m((function(){return o.onClickContainer&&o.onClickContainer.apply(o,arguments)}),["self"]))},[f("div",{class:["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.preventClick}]],style:n.contentStyle},[y(e.$slots,"default",{params:o.params})],6)],14,["aria-expanded"]),[[b,o.visibility.modal]])]})),_:3},8,["name","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[b,!n.ssr||o.visible]]):p("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),ee.render=ne,ee.__scopeId="data-v-2836fdb5",ee.__file="lib/VueFinalModal.vue";var oe={props:{},computed:{api:function(){return this[this.options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t){e.ref.params.value=t.params}}},re={class:"modals-container"};function ae(e,t){var n=B({},e);return Object.assign(n.props,{options:{type:Object,default:function(){return t}}}),n}function le(e,t){var n=function(e){return function(){return{show:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];switch(M(t)){case"string":this.toggle.apply(this,[t,!0].concat(o));break;case"object":var a={value:!0,id:Symbol("dynamicModal"),component:e.componentName,bind:{},slots:{},on:{},params:o[0]};this.dynamicModals.push(C(Object.assign(a,t)))}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.toggle(t,!1)},hideAll:function(){for(var e=this.openedModals.length-1;e>=0;e--)this.openedModals[e].emit("update:modelValue",!1)},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];(Array.isArray(e)?this.get.apply(this,j(e)):this.get(e)).forEach((function(e){return e.toggle.apply(e,n)}))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.props.name)}))},dynamicModals:C([]),openedModals:[],modals:[]}}}(t)();Object.defineProperty(e.config.globalProperties,t.key,{get:function(){return n}}),e.provide(t.key,n)}oe.render=function(e,t,n,o,r,a){return s(),d("div",re,[(s(!0),d(h,null,g(a.api.dynamicModals,(function(e,t){return s(),d(E(e.component),w({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t}},O(e.on),{onClosed:function(e){return a.slice(t)},onBeforeOpen:function(t){return a.beforeOpen(t,e)}}),S({_:2},[g(e.slots,(function(e,t){return{name:t,fn:k((function(){return[(s(),d(E(e.component),w(e.bind,O(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","onClosed","onBeforeOpen"])})),128))])},oe.__file="lib/ModalsContainer.vue";var ie={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};export default function(){return{install:function(e,t){var n=Object.assign({},ie,t),o=e.config.globalProperties[n.key],r=e._context.components[n.componentName],a=e._context.components[n.dynamicContainerName];r||a?"undefined"!=typeof window&&(o&&console.error("[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal."),r&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),a&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")):(o||le(e,n),function(e,t){e.component(t.componentName,ae(ee,t))}(e,n),function(e,t){e.component(t.dynamicContainerName,ae(oe,t))}(e,n))}}}
=======
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=function(e){return function(e,t){return a(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},l=function(e){return e==document.activeElement},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,o,i;return n=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||l(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;l(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=s(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&t(n.prototype,o),i&&t(n,i),e}(),d=!1;if("undefined"!=typeof window){var u={get passive(){d=!0}};window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}var f,v,h="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),m=[],p=!1,y=0,b=-1,g=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},E=function(e){return m.some((function(){return g(e,-y)}))},w=function(e){var t=e||window.event;return!!E(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},S=function(e,t){if(e){if(!m.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};m=[].concat(a(m),[n]),h?(e.ontouchstart=function(e){1===e.targetTouches.length&&(b=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){y=e.targetTouches[0].clientY-b,!E(e.target)&&(t&&0===t.scrollTop&&y>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&y<0?w(e):e.stopPropagation())}(t,e)},p||(document.addEventListener("touchmove",w,d?{passive:!1}:void 0),p=!0)):function(e){if(void 0===v){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);v=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===f&&(f=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},T=function(e){e?(m=m.filter((function(t){return t.targetElement!==e})),h?(e.ontouchstart=null,e.ontouchmove=null,p&&0===m.length&&(document.removeEventListener("touchmove",w,d?{passive:!1}:void 0),p=!1)):m.length||(void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==f&&(document.body.style.overflow=f,f=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},C="enter",k="entering",O="leave",_="leavng";var x={type:[String,Object,Array],default:""},M={props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:x,overlayClass:x,contentClass:x,styles:x,overlayStyle:x,contentStyle:x,lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,stopEvent:!1,params:{}}},computed:{api:function(){return this[this.$_options.key]},isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===O)&&this.modalTransitionState===O},calculateZIndex:function(){return!1===this.zIndex?!!this.zIndexAuto&&+this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex},bindStyle:function(){return i({},!1!==this.calculateZIndex&&{zIndex:this.calculateZIndex})}},watch:{value:function(e){if(this.stopEvent)this.stopEvent=!1;else if(this.mounted(),!e){if(this.emitEvent("before-close",!0))return;this.close()}},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new c,this.mounted()},beforeDestroy:function(){var e,t=this;this.close(),this.lockScroll&&this.$refs.vfmContainer&&T(this.$refs.vfmContainer),null==this||null===(e=this.$el)||void 0===e||e.remove();var n=this.api.modals.findIndex((function(e){return e===t}));this.api.modals.splice(n,1)},methods:{mounted:function(){var e=this;if(this.value){if(this.emitEvent("before-open",!1))return;var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.api.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.api.openedModals.splice(n,1),this.api.openedModals.push(this),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.api.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.api.openedModals.splice(t,1),this.api.openedModals.length>0){var n=this.api.openedModals[this.api.openedModals.length-1];(n.focusRetain||n.focusTrap)&&n.$refs.vfmContainer.focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){var e=this;this.value&&this.$nextTick((function(){e.lockScroll?S(e.$refs.vfmContainer,{reserveScrollBarGap:!0}):T(e.$refs.vfmContainer)}))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=k},afterOverlayEnter:function(){this.overlayTransitionState=C},beforeOverlayLeave:function(){this.overlayTransitionState=_},afterOverlayLeave:function(){this.overlayTransitionState=O},beforeModalEnter:function(){this.modalTransitionState=k},afterModalEnter:function(){this.modalTransitionState=C,(this.focusRetain||this.focusTrap)&&this.$refs.vfmContainer.focus(),this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.$emit("opened",this.createModalEvent({type:"opened"}))},beforeModalLeave:function(){this.modalTransitionState=_,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=O,this.modalStackIndex=null,this.lockScroll&&T(this.$refs.vfmContainer);var e=!1,t=this.createModalEvent({type:"closed",stop:function(){e=!0}});this.$emit("closed",t),e||(this.params={})},onClickContainer:function(){this.$emit("click-outside",this.createModalEvent({type:"click-outside"})),this.clickToClose&&this.$emit("input",!1)},onEsc:function(e){27===e.keyCode&&this.visible&&this.escToClose&&this.$emit("input",!1)},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({ref:this},e)},emitEvent:function(e,t){var n=!1,o=this.createModalEvent({type:e,stop:function(){n=!0}});return this.$emit(e,o),!!n&&(this.stopEvent=!0,this.$emit("input",t),!0)},toggle:function(e,t){var n="boolean"==typeof e?e:!this.value;n&&2===arguments.length&&(this.params=t),this.$emit("input",n)}}};var $,I=function(e,t,n,o,i,a,r,s,l,c){"boolean"!=typeof r&&(l=s,s=r,r=!1);var d,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=d):t&&(d=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){var f=u.render;u.render=function(e,t){return d.call(t),f(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,d):[d]}return n},N="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var j={};var L=I({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:e.bindStyle,on:{keydown:e.onEsc}},[n("transition",{attrs:{name:e.overlayTransition},on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:e.classes,style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{click:function(t){return t.target!==t.currentTarget?null:e.onClickContainer(t)}}},[n("div",{staticClass:"vfm__content",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.contentStyle},[e._t("default",null,{params:e.params})],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-392929e2_0",{source:".vfm--fixed[data-v-392929e2]{position:fixed}.vfm--absolute[data-v-392929e2]{position:absolute}.vfm--inset[data-v-392929e2]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-392929e2]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-392929e2]{pointer-events:none}.vfm--prevent-auto[data-v-392929e2]{pointer-events:auto}.vfm--outline-none[data-v-392929e2]:focus{outline:0}.vfm-enter-active[data-v-392929e2],.vfm-leave-active[data-v-392929e2]{transition:opacity .2s}.vfm-enter[data-v-392929e2],.vfm-leave-to[data-v-392929e2]{opacity:0}",map:void 0,media:void 0})}),M,"data-v-392929e2",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=N?t.media||"default":e,o=j[n]||(j[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===$&&($=document.head||document.getElementsByTagName("head")[0]),$.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,r=document.createTextNode(i),s=o.element.childNodes;s[a]&&o.element.removeChild(s[a]),s.length?o.element.insertBefore(r,s[a]):o.element.appendChild(r)}}}(e,t)}}),void 0,void 0),A=I({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modals-container"},e._l(e.api.dynamicModals,(function(t,o){return n(t.component,e._g(e._b({key:t.id,tag:"component",on:{closed:function(t){return e.slice(o)},"before-open":function(n){return e.beforeOpen(n,t)}},scopedSlots:e._u([e._l(t.slots,(function(t,o){return{key:o,fn:function(){return[n(t.component,e._g(e._b({key:o,tag:"component"},"component",t.bind,!1),t.on))]},proxy:!0}}))],null,!0),model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"modal.value"}},"component",t.bind,!1),t.on))})),1)},staticRenderFns:[]},undefined,{props:{},computed:{api:function(){return this[this.$_options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t){e.ref.params=t.params}}},undefined,false,undefined,!1,void 0,void 0,void 0);function B(e,t){var n=i({},e);return Object.assign(n.props,{$_options:{type:Object,default:function(){return t}}}),n}function D(t,n){var o=function(t,n){var o;return function(){return o={show:function(t){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];switch(e(t)){case"string":this.toggle.apply(this,[t,!0].concat(i));break;case"object":var r={value:!0,id:Symbol("dynamicModal"),component:n.componentName,bind:{},slots:{},on:{},params:i[0]};this.dynamicModals.push(Object.assign(r,t))}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.toggle(t,!1)},hideAll:function(){for(var e=this.openedModals.length-1;e>=0;e--)this.openedModals[e].$emit("input",!1)},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];(Array.isArray(e)?this.get.apply(this,a(e)):this.get(e)).forEach((function(e){return e.toggle.apply(e,n)}))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.name)}))},dynamicModals:[],openedModals:[],modals:[]},t.observable(o)}}(t,n)();Object.defineProperty(t.prototype,n.key,{get:function(){return o}})}var R={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};export default function(){return{install:function(e,t){var n=Object.assign({},R,t),o=e.prototype[n.key],i=e.options.components[n.componentName],a=e.options.components[n.dynamicContainerName];i||a?"undefined"!=typeof window&&(o&&console.error("[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal."),i&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),a&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")):(o||D(e,n),function(e,t){e.component(t.componentName,B(L,t))}(e,n),function(e,t){e.component(t.dynamicContainerName,B(A,t))}(e,n))}}}
>>>>>>> master
//# sourceMappingURL=VueFinalModal.esm.js.map
