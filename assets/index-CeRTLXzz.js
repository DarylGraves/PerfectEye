(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var a_={exports:{}},$c={},l_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),kx=Symbol.for("react.portal"),Bx=Symbol.for("react.fragment"),zx=Symbol.for("react.strict_mode"),Hx=Symbol.for("react.profiler"),Vx=Symbol.for("react.provider"),Gx=Symbol.for("react.context"),Wx=Symbol.for("react.forward_ref"),Xx=Symbol.for("react.suspense"),$x=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),fm=Symbol.iterator;function Yx(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u_=Object.assign,f_={};function xo(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||c_}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d_(){}d_.prototype=xo.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||c_}var Th=Eh.prototype=new d_;Th.constructor=Eh;u_(Th,xo.prototype);Th.isPureReactComponent=!0;var dm=Array.isArray,h_=Object.prototype.hasOwnProperty,wh={current:null},p_={key:!0,ref:!0,__self:!0,__source:!0};function m_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)h_.call(e,i)&&!p_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:wh.current}}function Kx(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qx(""+t.key):e.toString(36)}function Xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case kx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mu(o,0):i,dm(r)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),Xl(r,e,n,"",function(c){return c})):r!=null&&(Ah(r)&&(r=Kx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mu(s,a);o+=Xl(s,e,n,l,r)}else if(l=Yx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mu(s,a++),o+=Xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return Xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Zx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},$l={transition:null},Qx={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:$l,ReactCurrentOwner:wh};function g_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=xo;We.Fragment=Bx;We.Profiler=Hx;We.PureComponent=Eh;We.StrictMode=zx;We.Suspense=Xx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;We.act=g_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=u_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)h_.call(e,l)&&!p_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:Gx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vx,_context:t},t.Consumer=t};We.createElement=m_;We.createFactory=function(t){var e=m_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:Wx,render:t}};We.isValidElement=Ah;We.lazy=function(t){return{$$typeof:jx,_payload:{_status:-1,_result:t},_init:Zx}};We.memo=function(t,e){return{$$typeof:$x,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};We.unstable_act=g_;We.useCallback=function(t,e){return nn.current.useCallback(t,e)};We.useContext=function(t){return nn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};We.useEffect=function(t,e){return nn.current.useEffect(t,e)};We.useId=function(){return nn.current.useId()};We.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return nn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};We.useRef=function(t){return nn.current.useRef(t)};We.useState=function(t){return nn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return nn.current.useTransition()};We.version="18.3.1";l_.exports=We;var ae=l_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=ae,eS=Symbol.for("react.element"),tS=Symbol.for("react.fragment"),nS=Object.prototype.hasOwnProperty,iS=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rS={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)nS.call(e,i)&&!rS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:eS,type:t,key:s,ref:o,props:r,_owner:iS.current}}$c.Fragment=tS;$c.jsx=v_;$c.jsxs=v_;a_.exports=$c;var xe=a_.exports,__={exports:{}},Sn={},y_={exports:{}},x_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,$){var j=I.length;I.push($);e:for(;0<j;){var ie=j-1>>>1,Me=I[ie];if(0<r(Me,$))I[ie]=$,I[j]=Me,j=ie;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],j=I.pop();if(j!==$){I[0]=j;e:for(var ie=0,Me=I.length,Xe=Me>>>1;ie<Xe;){var V=2*(ie+1)-1,ne=I[V],de=V+1,fe=I[de];if(0>r(ne,j))de<Me&&0>r(fe,ne)?(I[ie]=fe,I[de]=j,ie=de):(I[ie]=ne,I[V]=j,ie=V);else if(de<Me&&0>r(fe,j))I[ie]=fe,I[de]=j,ie=de;else break e}}return $}function r(I,$){var j=I.sortIndex-$.sortIndex;return j!==0?j:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=I)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function x(I){if(v=!1,y(I),!g)if(n(l)!==null)g=!0,G(b);else{var $=n(c);$!==null&&K(x,$.startTime-I)}}function b(I,$){g=!1,v&&(v=!1,h(C),C=-1),p=!0;var j=d;try{for(y($),f=n(l);f!==null&&(!(f.expirationTime>$)||I&&!L());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,d=f.priorityLevel;var Me=ie(f.expirationTime<=$);$=t.unstable_now(),typeof Me=="function"?f.callback=Me:f===n(l)&&i(l),y($)}else i(l);f=n(l)}if(f!==null)var Xe=!0;else{var V=n(c);V!==null&&K(x,V.startTime-$),Xe=!1}return Xe}finally{f=null,d=j,p=!1}}var A=!1,w=null,C=-1,E=5,S=-1;function L(){return!(t.unstable_now()-S<E)}function H(){if(w!==null){var I=t.unstable_now();S=I;var $=!0;try{$=w(!0,I)}finally{$?B():(A=!1,w=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,W=X.port2;X.port1.onmessage=H,B=function(){W.postMessage(null)}}else B=function(){m(H,0)};function G(I){w=I,A||(A=!0,B())}function K(I,$){C=m(function(){I(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,G(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var j=d;d=$;try{return I()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=d;d=I;try{return $()}finally{d=j}},t.unstable_scheduleCallback=function(I,$,j){var ie=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=j+Me,I={id:u++,callback:$,priorityLevel:I,startTime:j,expirationTime:Me,sortIndex:-1},j>ie?(I.sortIndex=j,e(c,I),n(l)===null&&I===n(c)&&(v?(h(C),C=-1):v=!0,K(x,j-ie))):(I.sortIndex=Me,e(l,I),g||p||(g=!0,G(b))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var $=d;return function(){var j=d;d=$;try{return I.apply(this,arguments)}finally{d=j}}}})(x_);y_.exports=x_;var sS=y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=ae,xn=sS;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S_=new Set,pa={};function es(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(pa[t]=e,t=0;t<e.length;t++)S_.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function lS(t){return Vf.call(mm,t)?!0:Vf.call(pm,t)?!1:aS.test(t)?mm[t]=!0:(pm[t]=!0,!1)}function cS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uS(t,e,n,i){if(e===null||typeof e>"u"||cS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bh,Rh);zt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bh,Rh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bh,Rh);zt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ch(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uS(e,n,r,i)&&(n=null),i||r===null?lS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Ph=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),M_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Xf=Symbol.for("react.suspense_list"),Ih=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),T_=Symbol.for("react.offscreen"),gm=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Eu;function qo(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Tu=!1;function wu(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function fS(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function $f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ps:return"Portal";case Gf:return"Profiler";case Ph:return"StrictMode";case Wf:return"Suspense";case Xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E_:return(t.displayName||"Context")+".Consumer";case M_:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ih:return e=t.displayName||null,e!==null?e:$f(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return $f(t(e))}catch{}}return null}function dS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $f(e);case 8:return e===Ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hS(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=hS(t))}function A_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=w_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b_(t,e){e=e.checked,e!=null&&Ch(t,"checked",e,!1)}function Yf(t,e){b_(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kf(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kf(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function Gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Zo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function R_(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,P_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){pS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function L_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function I_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=L_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mS=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(t,e){if(e){if(mS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Ws=null,Xs=null;function Sm(t){if(t=Ba(t)){if(typeof td!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Zc(e),td(t.stateNode,t.type,e))}}function N_(t){Ws?Xs?Xs.push(t):Xs=[t]:Ws=t}function D_(){if(Ws){var t=Ws,e=Xs;if(Xs=Ws=null,Sm(t),e)for(t=0;t<e.length;t++)Sm(e[t])}}function U_(t,e){return t(e)}function F_(){}var Au=!1;function O_(t,e,n){if(Au)return t(e,n);Au=!0;try{return U_(t,e,n)}finally{Au=!1,(Ws!==null||Xs!==null)&&(F_(),D_())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var i=Zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var nd=!1;if(Ni)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){nd=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{nd=!1}function gS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ia=!1,hc=null,pc=!1,id=null,vS={onError:function(t){ia=!0,hc=t}};function _S(t,e,n,i,r,s,o,a,l){ia=!1,hc=null,gS.apply(vS,arguments)}function yS(t,e,n,i,r,s,o,a,l){if(_S.apply(this,arguments),ia){if(ia){var c=hc;ia=!1,hc=null}else throw Error(te(198));pc||(pc=!0,id=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(t){if(ts(t)!==t)throw Error(te(188))}function xS(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mm(r),t;if(s===i)return Mm(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function B_(t){return t=xS(t),t!==null?z_(t):null}function z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z_(t);if(e!==null)return e;t=t.sibling}return null}var H_=xn.unstable_scheduleCallback,Em=xn.unstable_cancelCallback,SS=xn.unstable_shouldYield,MS=xn.unstable_requestPaint,Mt=xn.unstable_now,ES=xn.unstable_getCurrentPriorityLevel,Dh=xn.unstable_ImmediatePriority,V_=xn.unstable_UserBlockingPriority,mc=xn.unstable_NormalPriority,TS=xn.unstable_LowPriority,G_=xn.unstable_IdlePriority,jc=null,oi=null;function wS(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:RS,AS=Math.log,bS=Math.LN2;function RS(t){return t>>>=0,t===0?32:31-(AS(t)/bS|0)|0}var el=64,tl=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qo(a):(s&=o,s!==0&&(i=Qo(s)))}else o=n&~r,o!==0?i=Qo(o):s!==0&&(i=Qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function CS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=CS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W_(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function LS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function X_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $_,Fh,j_,Y_,K_,sd=!1,nl=[],ir=null,rr=null,sr=null,va=new Map,_a=new Map,Zi=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function NS(t,e,n,i,r){switch(e){case"focusin":return ir=Lo(ir,t,e,n,i,r),!0;case"dragenter":return rr=Lo(rr,t,e,n,i,r),!0;case"mouseover":return sr=Lo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Lo(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Lo(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function q_(t){var e=Br(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=k_(n),e!==null){t.blockedOn=e,K_(t.priority,function(){j_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ed=i,n.target.dispatchEvent(i),ed=null}else return e=Ba(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function wm(t,e,n){jl(t)&&n.delete(e)}function DS(){sd=!1,ir!==null&&jl(ir)&&(ir=null),rr!==null&&jl(rr)&&(rr=null),sr!==null&&jl(sr)&&(sr=null),va.forEach(wm),_a.forEach(wm)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,DS)))}function ya(t){function e(r){return Io(r,t)}if(0<nl.length){Io(nl[0],t);for(var n=1;n<nl.length;n++){var i=nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&Io(ir,t),rr!==null&&Io(rr,t),sr!==null&&Io(sr,t),va.forEach(e),_a.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)q_(n),n.blockedOn===null&&Zi.shift()}var $s=ki.ReactCurrentBatchConfig,vc=!0;function US(t,e,n,i){var r=rt,s=$s.transition;$s.transition=null;try{rt=1,Oh(t,e,n,i)}finally{rt=r,$s.transition=s}}function FS(t,e,n,i){var r=rt,s=$s.transition;$s.transition=null;try{rt=4,Oh(t,e,n,i)}finally{rt=r,$s.transition=s}}function Oh(t,e,n,i){if(vc){var r=od(t,e,n,i);if(r===null)Ou(t,e,i,_c,n),Tm(t,i);else if(NS(r,t,e,n,i))i.stopPropagation();else if(Tm(t,i),e&4&&-1<IS.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&$_(s),s=od(t,e,n,i),s===null&&Ou(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ou(t,e,i,null,n)}}var _c=null;function od(t,e,n,i){if(_c=null,t=Nh(i),t=Br(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function Z_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ES()){case Dh:return 1;case V_:return 4;case mc:case TS:return 16;case G_:return 536870912;default:return 16}default:return 16}}var er=null,kh=null,Yl=null;function Q_(){if(Yl)return Yl;var t,e=kh,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Yl=r.slice(t,1<i?1-i:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Am(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:Am,this.isPropagationStopped=Am,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=Mn(So),ka=gt({},So,{view:0,detail:0}),OS=Mn(ka),Ru,Cu,No,Yc=gt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Ru=t.screenX-No.screenX,Cu=t.screenY-No.screenY):Cu=Ru=0,No=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),bm=Mn(Yc),kS=gt({},Yc,{dataTransfer:0}),BS=Mn(kS),zS=gt({},ka,{relatedTarget:0}),Pu=Mn(zS),HS=gt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),VS=Mn(HS),GS=gt({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WS=Mn(GS),XS=gt({},So,{data:0}),Rm=Mn(XS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YS[t])?!!e[t]:!1}function zh(){return KS}var qS=gt({},ka,{key:function(t){if(t.key){var e=$S[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=Mn(qS),QS=gt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Mn(QS),JS=gt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),eM=Mn(JS),tM=gt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),nM=Mn(tM),iM=gt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rM=Mn(iM),sM=[9,13,27,32],Hh=Ni&&"CompositionEvent"in window,ra=null;Ni&&"documentMode"in document&&(ra=document.documentMode);var oM=Ni&&"TextEvent"in window&&!ra,J_=Ni&&(!Hh||ra&&8<ra&&11>=ra),Pm=" ",Lm=!1;function e0(t,e){switch(t){case"keyup":return sM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function aM(t,e){switch(t){case"compositionend":return t0(e);case"keypress":return e.which!==32?null:(Lm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Lm?null:t;default:return null}}function lM(t,e){if(Is)return t==="compositionend"||!Hh&&e0(t,e)?(t=Q_(),Yl=kh=er=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return J_&&e.locale!=="ko"?null:e.data;default:return null}}var cM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cM[t.type]:e==="textarea"}function n0(t,e,n,i){N_(i),e=yc(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,xa=null;function uM(t){h0(t,0)}function Kc(t){var e=Us(t);if(A_(e))return t}function fM(t,e){if(t==="change")return e}var i0=!1;if(Ni){var Lu;if(Ni){var Iu="oninput"in document;if(!Iu){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Iu=typeof Nm.oninput=="function"}Lu=Iu}else Lu=!1;i0=Lu&&(!document.documentMode||9<document.documentMode)}function Dm(){sa&&(sa.detachEvent("onpropertychange",r0),xa=sa=null)}function r0(t){if(t.propertyName==="value"&&Kc(xa)){var e=[];n0(e,xa,t,Nh(t)),O_(uM,e)}}function dM(t,e,n){t==="focusin"?(Dm(),sa=e,xa=n,sa.attachEvent("onpropertychange",r0)):t==="focusout"&&Dm()}function hM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(xa)}function pM(t,e){if(t==="click")return Kc(e)}function mM(t,e){if(t==="input"||t==="change")return Kc(e)}function gM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:gM;function Sa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vf.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function s0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function o0(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vM(t){var e=o0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s0(n.ownerDocument.documentElement,n)){if(i!==null&&Vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fm(n,s);var o=Fm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _M=Ni&&"documentMode"in document&&11>=document.documentMode,Ns=null,ad=null,oa=null,ld=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Ns==null||Ns!==dc(i)||(i=Ns,"selectionStart"in i&&Vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oa&&Sa(oa,i)||(oa=i,i=yc(ad,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Nu={},a0={};Ni&&(a0=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function qc(t){if(Nu[t])return Nu[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in a0)return Nu[t]=e[n];return t}var l0=qc("animationend"),c0=qc("animationiteration"),u0=qc("animationstart"),f0=qc("transitionend"),d0=new Map,km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){d0.set(t,e),es(e,[t])}for(var Du=0;Du<km.length;Du++){var Uu=km[Du],yM=Uu.toLowerCase(),xM=Uu[0].toUpperCase()+Uu.slice(1);gr(yM,"on"+xM)}gr(l0,"onAnimationEnd");gr(c0,"onAnimationIteration");gr(u0,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(f0,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Bm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yS(i,e,void 0,t),t.currentTarget=null}function h0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,c),s=l}}}if(pc)throw t=id,pc=!1,id=null,t}function at(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var i=t+"__bubble";n.has(i)||(p0(e,t,2,!1),n.add(i))}function Fu(t,e,n){var i=0;e&&(i|=4),p0(n,t,i,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[sl]){t[sl]=!0,S_.forEach(function(n){n!=="selectionchange"&&(SM.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Fu("selectionchange",!1,e))}}function p0(t,e,n,i){switch(Z_(e)){case 1:var r=US;break;case 4:r=FS;break;default:r=Oh}n=r.bind(null,e,n,t),r=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}O_(function(){var c=s,u=Nh(n),f=[];e:{var d=d0.get(t);if(d!==void 0){var p=Bh,g=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":p=ZS;break;case"focusin":g="focus",p=Pu;break;case"focusout":g="blur",p=Pu;break;case"beforeblur":case"afterblur":p=Pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eM;break;case l0:case c0:case u0:p=VS;break;case f0:p=nM;break;case"scroll":p=OS;break;case"wheel":p=rM;break;case"copy":case"cut":case"paste":p=WS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Cm}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=ga(_,h),x!=null&&v.push(Ea(_,x,y)))),m)break;_=_.return}0<v.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==ed&&(g=n.relatedTarget||n.fromElement)&&(Br(g)||g[Di]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Br(g):null,g!==null&&(m=ts(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=bm,x="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Cm,x="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:Us(p),y=g==null?d:Us(g),d=new v(x,_+"leave",p,n,u),d.target=m,d.relatedTarget=y,x=null,Br(u)===c&&(v=new v(h,_+"enter",g,n,u),v.target=y,v.relatedTarget=m,x=v),m=x,p&&g)t:{for(v=p,h=g,_=0,y=v;y;y=rs(y))_++;for(y=0,x=h;x;x=rs(x))y++;for(;0<_-y;)v=rs(v),_--;for(;0<y-_;)h=rs(h),y--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=rs(v),h=rs(h)}v=null}else v=null;p!==null&&zm(f,d,p,v,!1),g!==null&&m!==null&&zm(f,m,g,v,!0)}}e:{if(d=c?Us(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=fM;else if(Im(d))if(i0)b=mM;else{b=hM;var A=dM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=pM);if(b&&(b=b(t,c))){n0(f,b,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Kf(d,"number",d.value)}switch(A=c?Us(c):window,t){case"focusin":(Im(A)||A.contentEditable==="true")&&(Ns=A,ad=c,oa=null);break;case"focusout":oa=ad=Ns=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Om(f,n,u);break;case"selectionchange":if(_M)break;case"keydown":case"keyup":Om(f,n,u)}var w;if(Hh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Is?e0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(J_&&n.locale!=="ko"&&(Is||C!=="onCompositionStart"?C==="onCompositionEnd"&&Is&&(w=Q_()):(er=u,kh="value"in er?er.value:er.textContent,Is=!0)),A=yc(c,C),0<A.length&&(C=new Rm(C,t,null,n,u),f.push({event:C,listeners:A}),w?C.data=w:(w=t0(n),w!==null&&(C.data=w)))),(w=oM?aM(t,n):lM(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(u=new Rm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}h0(f,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ga(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=ga(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ga(n,s),l!=null&&o.unshift(Ea(n,l,a))):r||(l=ga(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MM=/\r\n?/g,EM=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(MM,`
`).replace(EM,"")}function ol(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(te(425))}function xc(){}var cd=null,ud=null;function fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(t){return Vm.resolve(null).then(t).catch(AM)}:dd;function AM(t){setTimeout(function(){throw t})}function ku(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),ni="__reactFiber$"+Mo,Ta="__reactProps$"+Mo,Di="__reactContainer$"+Mo,hd="__reactEvents$"+Mo,bM="__reactListeners$"+Mo,RM="__reactHandles$"+Mo;function Br(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[ni])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[ni]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Zc(t){return t[Ta]||null}var pd=[],Fs=-1;function vr(t){return{current:t}}function ct(t){0>Fs||(t.current=pd[Fs],pd[Fs]=null,Fs--)}function ot(t,e){Fs++,pd[Fs]=t.current,t.current=e}var pr={},jt=vr(pr),an=vr(!1),jr=pr;function no(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function Sc(){ct(an),ct(jt)}function Wm(t,e,n){if(jt.current!==pr)throw Error(te(168));ot(jt,e),ot(an,n)}function m0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,dS(t)||"Unknown",r));return gt({},n,i)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,jr=jt.current,ot(jt,t),ot(an,an.current),!0}function Xm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=m0(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,ct(an),ct(jt),ot(jt,t)):ct(an),ot(an,n)}var wi=null,Qc=!1,Bu=!1;function g0(t){wi===null?wi=[t]:wi.push(t)}function CM(t){Qc=!0,g0(t)}function _r(){if(!Bu&&wi!==null){Bu=!0;var t=0,e=rt;try{var n=wi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Qc=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),H_(Dh,_r),r}finally{rt=e,Bu=!1}}return null}var Os=[],ks=0,Ec=null,Tc=0,An=[],bn=0,Yr=null,Ai=1,bi="";function Nr(t,e){Os[ks++]=Tc,Os[ks++]=Ec,Ec=t,Tc=e}function v0(t,e,n){An[bn++]=Ai,An[bn++]=bi,An[bn++]=Yr,Yr=t;var i=Ai;t=bi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-Wn(e)+r|n<<r|i,bi=s+t}else Ai=1<<s|n<<r|i,bi=t}function Gh(t){t.return!==null&&(Nr(t,1),v0(t,1,0))}function Wh(t){for(;t===Ec;)Ec=Os[--ks],Os[ks]=null,Tc=Os[--ks],Os[ks]=null;for(;t===Yr;)Yr=An[--bn],An[bn]=null,bi=An[--bn],An[bn]=null,Ai=An[--bn],An[bn]=null}var yn=null,vn=null,ft=!1,zn=null;function _0(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,vn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Ai,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,vn=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(ft){var e=vn;if(e){var n=e;if(!$m(t,e)){if(md(t))throw Error(te(418));e=or(n.nextSibling);var i=yn;e&&$m(t,e)?_0(i,n):(t.flags=t.flags&-4097|2,ft=!1,yn=t)}}else{if(md(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,yn=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function al(t){if(t!==yn)return!1;if(!ft)return jm(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fd(t.type,t.memoizedProps)),e&&(e=vn)){if(md(t))throw y0(),Error(te(418));for(;e;)_0(t,e),e=or(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=yn?or(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=vn;t;)t=or(t.nextSibling)}function io(){vn=yn=null,ft=!1}function Xh(t){zn===null?zn=[t]:zn.push(t)}var PM=ki.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ym(t){var e=t._init;return e(t._payload)}function x0(t){function e(h,_){if(t){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=ur(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,x){return _===null||_.tag!==6?(_=$u(y,h.mode,x),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,x){var b=y.type;return b===Ls?u(h,_,y.props.children,x,y.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ki&&Ym(b)===_.type)?(x=r(_,y.props),x.ref=Do(h,_,y),x.return=h,x):(x=nc(y.type,y.key,y.props,null,h.mode,x),x.ref=Do(h,_,y),x.return=h,x)}function c(h,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=ju(y,h.mode,x),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function u(h,_,y,x,b){return _===null||_.tag!==7?(_=$r(y,h.mode,x,b),_.return=h,_):(_=r(_,y),_.return=h,_)}function f(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$u(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:return y=nc(_.type,_.key,_.props,null,h.mode,y),y.ref=Do(h,null,_),y.return=h,y;case Ps:return _=ju(_,h.mode,y),_.return=h,_;case Ki:var x=_._init;return f(h,x(_._payload),y)}if(Zo(_)||Co(_))return _=$r(_,h.mode,y,null),_.return=h,_;ll(h,_)}return null}function d(h,_,y,x){var b=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(h,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return y.key===b?l(h,_,y,x):null;case Ps:return y.key===b?c(h,_,y,x):null;case Ki:return b=y._init,d(h,_,b(y._payload),x)}if(Zo(y)||Co(y))return b!==null?null:u(h,_,y,x,null);ll(h,y)}return null}function p(h,_,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(_,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return h=h.get(x.key===null?y:x.key)||null,l(_,h,x,b);case Ps:return h=h.get(x.key===null?y:x.key)||null,c(_,h,x,b);case Ki:var A=x._init;return p(h,_,y,A(x._payload),b)}if(Zo(x)||Co(x))return h=h.get(y)||null,u(_,h,x,b,null);ll(_,x)}return null}function g(h,_,y,x){for(var b=null,A=null,w=_,C=_=0,E=null;w!==null&&C<y.length;C++){w.index>C?(E=w,w=null):E=w.sibling;var S=d(h,w,y[C],x);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(h,w),_=s(S,_,C),A===null?b=S:A.sibling=S,A=S,w=E}if(C===y.length)return n(h,w),ft&&Nr(h,C),b;if(w===null){for(;C<y.length;C++)w=f(h,y[C],x),w!==null&&(_=s(w,_,C),A===null?b=w:A.sibling=w,A=w);return ft&&Nr(h,C),b}for(w=i(h,w);C<y.length;C++)E=p(w,h,C,y[C],x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?C:E.key),_=s(E,_,C),A===null?b=E:A.sibling=E,A=E);return t&&w.forEach(function(L){return e(h,L)}),ft&&Nr(h,C),b}function v(h,_,y,x){var b=Co(y);if(typeof b!="function")throw Error(te(150));if(y=b.call(y),y==null)throw Error(te(151));for(var A=b=null,w=_,C=_=0,E=null,S=y.next();w!==null&&!S.done;C++,S=y.next()){w.index>C?(E=w,w=null):E=w.sibling;var L=d(h,w,S.value,x);if(L===null){w===null&&(w=E);break}t&&w&&L.alternate===null&&e(h,w),_=s(L,_,C),A===null?b=L:A.sibling=L,A=L,w=E}if(S.done)return n(h,w),ft&&Nr(h,C),b;if(w===null){for(;!S.done;C++,S=y.next())S=f(h,S.value,x),S!==null&&(_=s(S,_,C),A===null?b=S:A.sibling=S,A=S);return ft&&Nr(h,C),b}for(w=i(h,w);!S.done;C++,S=y.next())S=p(w,h,C,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?C:S.key),_=s(S,_,C),A===null?b=S:A.sibling=S,A=S);return t&&w.forEach(function(H){return e(h,H)}),ft&&Nr(h,C),b}function m(h,_,y,x){if(typeof y=="object"&&y!==null&&y.type===Ls&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:e:{for(var b=y.key,A=_;A!==null;){if(A.key===b){if(b=y.type,b===Ls){if(A.tag===7){n(h,A.sibling),_=r(A,y.props.children),_.return=h,h=_;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ki&&Ym(b)===A.type){n(h,A.sibling),_=r(A,y.props),_.ref=Do(h,A,y),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===Ls?(_=$r(y.props.children,h.mode,x,y.key),_.return=h,h=_):(x=nc(y.type,y.key,y.props,null,h.mode,x),x.ref=Do(h,_,y),x.return=h,h=x)}return o(h);case Ps:e:{for(A=y.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=ju(y,h.mode,x),_.return=h,h=_}return o(h);case Ki:return A=y._init,m(h,_,A(y._payload),x)}if(Zo(y))return g(h,_,y,x);if(Co(y))return v(h,_,y,x);ll(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,y),_.return=h,h=_):(n(h,_),_=$u(y,h.mode,x),_.return=h,h=_),o(h)):n(h,_)}return m}var ro=x0(!0),S0=x0(!1),wc=vr(null),Ac=null,Bs=null,$h=null;function jh(){$h=Bs=Ac=null}function Yh(t){var e=wc.current;ct(wc),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){Ac=t,$h=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Ac===null)throw Error(te(308));Bs=t,Ac.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var zr=null;function Kh(t){zr===null?zr=[t]:zr.push(t)}function M0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}function Km(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=gt({},f,d);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=f}}function qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var za={},ai=vr(za),wa=vr(za),Aa=vr(za);function Hr(t){if(t===za)throw Error(te(174));return t}function Zh(t,e){switch(ot(Aa,e),ot(wa,t),ot(ai,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}ct(ai),ot(ai,e)}function so(){ct(ai),ct(wa),ct(Aa)}function T0(t){Hr(Aa.current);var e=Hr(ai.current),n=Zf(e,t.type);e!==n&&(ot(wa,t),ot(ai,n))}function Qh(t){wa.current===t&&(ct(ai),ct(wa))}var pt=vr(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function Jh(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var Zl=ki.ReactCurrentDispatcher,Hu=ki.ReactCurrentBatchConfig,Kr=0,mt=null,bt=null,It=null,Cc=!1,aa=!1,ba=0,LM=0;function Ht(){throw Error(te(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function tp(t,e,n,i,r,s){if(Kr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?UM:FM,t=n(i,r),aa){s=0;do{if(aa=!1,ba=0,25<=s)throw Error(te(301));s+=1,It=bt=null,e.updateQueue=null,Zl.current=OM,t=n(i,r)}while(aa)}if(Zl.current=Pc,e=bt!==null&&bt.next!==null,Kr=0,It=bt=mt=null,Cc=!1,e)throw Error(te(300));return t}function np(){var t=ba!==0;return ba=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=t:It=It.next=t,It}function In(){if(bt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,bt=t;else{if(t===null)throw Error(te(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},It===null?mt.memoizedState=It=t:It=It.next=t}return It}function Ra(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=In(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,mt.lanes|=u,qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=In(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w0(){}function A0(t,e){var n=mt,i=In(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,ip(C0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,Ca(9,R0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(te(349));Kr&30||b0(n,e,r)}return r}function b0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R0(t,e,n,i){e.value=n,e.getSnapshot=i,P0(e)&&L0(t)}function C0(t,e,n){return n(function(){P0(e)&&L0(t)})}function P0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function L0(t){var e=Ui(t,1);e!==null&&Xn(e,t,1,-1)}function Zm(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=DM.bind(null,mt,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function I0(){return In().memoizedState}function Ql(t,e,n,i){var r=Jn();mt.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function Jc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&ep(i,o.deps)){r.memoizedState=Ca(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function Qm(t,e){return Ql(8390656,8,t,e)}function ip(t,e){return Jc(2048,8,t,e)}function N0(t,e){return Jc(4,2,t,e)}function D0(t,e){return Jc(4,4,t,e)}function U0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function F0(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,U0.bind(null,e,t),n)}function rp(){}function O0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function k0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function B0(t,e,n){return Kr&21?(Yn(n,e)||(n=W_(),mt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function IM(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Hu.transition;Hu.transition={};try{t(!1),e()}finally{rt=n,Hu.transition=i}}function z0(){return In().memoizedState}function NM(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},H0(t))V0(e,n);else if(n=M0(t,e,n,i),n!==null){var r=Jt();Xn(n,t,i,r),G0(n,e,i)}}function DM(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(H0(t))V0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=M0(t,e,r,i),n!==null&&(r=Jt(),Xn(n,t,i,r),G0(n,e,i))}}function H0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function V0(t,e){aa=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}var Pc={readContext:Ln,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},UM={readContext:Ln,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,U0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NM.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Zm,useDebugValue:rp,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Zm(!1),e=t[0];return t=IM.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Jn();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Nt===null)throw Error(te(349));Kr&30||b0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qm(C0.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,R0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Nt.identifierPrefix;if(ft){var n=bi,i=Ai;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FM={readContext:Ln,useCallback:O0,useContext:Ln,useEffect:ip,useImperativeHandle:F0,useInsertionEffect:N0,useLayoutEffect:D0,useMemo:k0,useReducer:Vu,useRef:I0,useState:function(){return Vu(Ra)},useDebugValue:rp,useDeferredValue:function(t){var e=In();return B0(e,bt.memoizedState,t)},useTransition:function(){var t=Vu(Ra)[0],e=In().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:A0,useId:z0,unstable_isNewReconciler:!1},OM={readContext:Ln,useCallback:O0,useContext:Ln,useEffect:ip,useImperativeHandle:F0,useInsertionEffect:N0,useLayoutEffect:D0,useMemo:k0,useReducer:Gu,useRef:I0,useState:function(){return Gu(Ra)},useDebugValue:rp,useDeferredValue:function(t){var e=In();return bt===null?e.memoizedState=t:B0(e,bt.memoizedState,t)},useTransition:function(){var t=Gu(Ra)[0],e=In().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:A0,useId:z0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=cr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Xn(e,t,r,i),ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=cr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Xn(e,t,r,i),ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=cr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Xn(e,t,i,n),ql(e,t,i))}};function Jm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,i)||!Sa(r,s):!0}function W0(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=ln(e)?jr:jt.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function eg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=ln(e)?jr:jt.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&eu.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=fS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kM=typeof WeakMap=="function"?WeakMap:Map;function X0(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ic||(Ic=!0,Pd=i),xd(t,e)},n}function $0(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new kM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=QM.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var BM=ki.ReactCurrentOwner,on=!1;function qt(t,e,n,i){e.child=t===null?S0(e,null,n,i):ro(e,t.child,n,i)}function rg(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=tp(t,e,n,i,s,r),n=np(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ft&&n&&Gh(e),e.flags|=1,qt(t,e,i,r),e.child)}function sg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j0(t,e,s,i,r)):(t=nc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Sa(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return Sd(t,e,n,i,r)}function Y0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Hs,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Hs,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Hs,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Hs,mn),mn|=i;return qt(t,e,r,n),e.child}function K0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,i,r){var s=ln(n)?jr:jt.current;return s=no(e,s),js(e,r),n=tp(t,e,n,i,s,r),i=np(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ft&&i&&Gh(e),e.flags|=1,qt(t,e,n,r),e.child)}function og(t,e,n,i,r){if(ln(n)){var s=!0;Mc(e)}else s=!1;if(js(e,r),e.stateNode===null)Jl(t,e),W0(e,n,i),yd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=ln(n)?jr:jt.current,c=no(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&eg(e,o,i,c),qi=!1;var d=e.memoizedState;o.state=d,bc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||an.current||qi?(typeof u=="function"&&(_d(e,n,u,i),l=e.memoizedState),(a=qi||Jm(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,E0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=ln(n)?jr:jt.current,l=no(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&eg(e,o,i,l),qi=!1,d=e.memoizedState,o.state=d,bc(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||an.current||qi?(typeof p=="function"&&(_d(e,n,p,i),g=e.memoizedState),(c=qi||Jm(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Md(t,e,n,i,s,r)}function Md(t,e,n,i,r,s){K0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xm(e,n,!1),Fi(t,e,s);i=e.stateNode,BM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Xm(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?Wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wm(t,e.context,!1),Zh(t,e.containerInfo)}function ag(t,e,n,i,r){return io(),Xh(r),e.flags|=256,qt(t,e,n,i),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=Ed,t):sp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return zM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ed,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sp(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,i){return i!==null&&Xh(i),ro(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wu(Error(te(422))),cl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Ed,s);if(!(e.mode&1))return cl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Wu(s,i,void 0),cl(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Xn(i,t,r,-1))}return fp(),i=Wu(Error(te(421))),cl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=JM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=or(r.nextSibling),yn=e,ft=!0,zn=null,t!==null&&(An[bn++]=Ai,An[bn++]=bi,An[bn++]=Yr,Ai=t.id,bi=t.overflow,Yr=e),e=sp(e,i.children),e.flags|=4096,e)}function lg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vd(t.return,e,n)}function Xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,e);else if(t.tag===19)lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HM(t,e,n){switch(e.tag){case 3:q0(e),io();break;case 5:T0(e);break;case 1:ln(e.type)&&Mc(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Z0(t,e,n):(ot(pt,pt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Y0(t,e,n)}return Fi(t,e,n)}var J0,wd,ey,ty;J0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};ey=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(ai.current);var s=null;switch(n){case"input":r=jf(t,r),i=jf(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=qf(t,r),i=qf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xc)}Qf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ty=function(t,e,n,i){n!==i&&(e.flags|=4)};function Uo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function VM(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return ln(e.type)&&Sc(),Vt(e),null;case 3:return i=e.stateNode,so(),ct(an),ct(jt),Jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Nd(zn),zn=null))),wd(t,e),Vt(e),null;case 5:Qh(e);var r=Hr(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)ey(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Vt(e),null}if(t=Hr(ai.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Jo.length;r++)at(Jo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":vm(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":ym(i,s),at("invalid",i)}Qf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",""+a]):pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Qa(i),_m(i,s,!0);break;case"textarea":Qa(i),xm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Ta]=i,J0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Jo.length;r++)at(Jo[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":vm(t,i),r=jf(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",t);break;case"textarea":ym(t,i),r=qf(t,i),at("invalid",t);break;default:r=i}Qf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?I_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&P_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ma(t,l):typeof l=="number"&&ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Ch(t,s,l,o))}switch(n){case"input":Qa(t),_m(t,i,!1);break;case"textarea":Qa(t),xm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)ty(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Hr(Aa.current),Hr(ai.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:ol(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Vt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&vn!==null&&e.mode&1&&!(e.flags&128))y0(),io(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ni]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else zn!==null&&(Nd(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):fp())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return so(),wd(t,e),t===null&&Ma(e.stateNode.containerInfo),Vt(e),null;case 10:return Yh(e.type._context),Vt(e),null;case 17:return ln(e.type)&&Sc(),Vt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Uo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,Uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>ao&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Vt(e),null}else 2*Mt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return up(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function GM(t,e){switch(Wh(e),e.tag){case 1:return ln(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),ct(an),ct(jt),Jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return so(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var ul=!1,Xt=!1,WM=typeof WeakSet=="function"?WeakSet:Set,pe=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Ad(t,e,n){try{n()}catch(i){St(t,e,i)}}var cg=!1;function XM(t,e){if(cd=vc,t=o0(),Vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:t,selectionRange:n},vc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:kn(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){St(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=cg,cg=!1,g}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ad(e,n,s)}r=r.next}while(r!==i)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ny(t){var e=t.alternate;e!==null&&(t.alternate=null,ny(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ta],delete e[hd],delete e[bM],delete e[RM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iy(t){return t.tag===5||t.tag===3||t.tag===4}function ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xc));else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function Cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}var Ot=null,Bn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)ry(t,e,n),n=n.sibling}function ry(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:Xt||zs(n,e);case 6:var i=Ot,r=Bn;Ot=null,Hi(t,e,n),Ot=i,Bn=r,Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?ku(t.parentNode,n):t.nodeType===1&&ku(t,n),ya(t)):ku(Ot,n.stateNode));break;case 4:i=Ot,r=Bn,Ot=n.stateNode.containerInfo,Bn=!0,Hi(t,e,n),Ot=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ad(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Xt&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Hi(t,e,n),Xt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WM),e.forEach(function(i){var r=eE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Bn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ot===null)throw Error(te(160));ry(s,o,r),Ot=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sy(e,t),e=e.sibling}function sy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Qn(t),i&4){try{la(3,t,t.return),tu(3,t)}catch(v){St(t,t.return,v)}try{la(5,t,t.return)}catch(v){St(t,t.return,v)}}break;case 1:Dn(e,t),Qn(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(Dn(e,t),Qn(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{ma(r,"")}catch(v){St(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b_(r,s),Jf(a,o);var c=Jf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?I_(r,f):u==="dangerouslySetInnerHTML"?P_(r,f):u==="children"?ma(r,f):Ch(r,u,f,c)}switch(a){case"input":Yf(r,s);break;case"textarea":R_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Gs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gs(r,!!s.multiple,s.defaultValue,!0):Gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(v){St(t,t.return,v)}}break;case 6:if(Dn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){St(t,t.return,v)}}break;case 3:if(Dn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(v){St(t,t.return,v)}break;case 4:Dn(e,t),Qn(t);break;case 13:Dn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lp=Mt())),i&4&&fg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,Dn(e,t),Xt=c):Dn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(f=pe=u;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:la(4,d,d.return);break;case 1:zs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){St(i,n,v)}}break;case 5:zs(d,d.return);break;case 22:if(d.memoizedState!==null){hg(f);continue}}p!==null?(p.return=d,pe=p):hg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=L_("display",o))}catch(v){St(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){St(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Qn(t),i&4&&fg(t);break;case 21:break;default:Dn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iy(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ma(r,""),i.flags&=-33);var s=ug(t);Cd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ug(t);Rd(t,a,o);break;default:throw Error(te(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $M(t,e,n){pe=t,oy(t)}function oy(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ul;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=ul;var c=Xt;if(ul=o,(Xt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?pg(r):l!==null?(l.return=o,pe=l):pg(r);for(;s!==null;)pe=s,oy(s),s=s.sibling;pe=r,ul=a,Xt=c}dg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):dg(t)}}function dg(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&bd(e)}catch(d){St(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function hg(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function pg(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{bd(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{bd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var jM=Math.ceil,Lc=ki.ReactCurrentDispatcher,op=ki.ReactCurrentOwner,Pn=ki.ReactCurrentBatchConfig,Ye=0,Nt=null,At=null,kt=0,mn=0,Hs=vr(0),Rt=0,Pa=null,qr=0,nu=0,ap=0,ca=null,sn=null,lp=0,ao=1/0,Ei=null,Ic=!1,Pd=null,lr=null,fl=!1,tr=null,Nc=0,ua=0,Ld=null,ec=-1,tc=0;function Jt(){return Ye&6?Mt():ec!==-1?ec:ec=Mt()}function cr(t){return t.mode&1?Ye&2&&kt!==0?kt&-kt:PM.transition!==null?(tc===0&&(tc=W_()),tc):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Z_(t.type)),t):1}function Xn(t,e,n,i){if(50<ua)throw ua=0,Ld=null,Error(te(185));Oa(t,n,i),(!(Ye&2)||t!==Nt)&&(t===Nt&&(!(Ye&2)&&(nu|=n),Rt===4&&Qi(t,kt)),cn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(ao=Mt()+500,Qc&&_r()))}function cn(t,e){var n=t.callbackNode;PS(t,e);var i=gc(t,t===Nt?kt:0);if(i===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?CM(mg.bind(null,t)):g0(mg.bind(null,t)),wM(function(){!(Ye&6)&&_r()}),n=null;else{switch(X_(i)){case 1:n=Dh;break;case 4:n=V_;break;case 16:n=mc;break;case 536870912:n=G_;break;default:n=mc}n=py(n,ay.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ay(t,e){if(ec=-1,tc=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var i=gc(t,t===Nt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=Ye;Ye|=2;var s=cy();(Nt!==t||kt!==e)&&(Ei=null,ao=Mt()+500,Xr(t,e));do try{qM();break}catch(a){ly(t,a)}while(!0);jh(),Lc.current=s,Ye=r,At!==null?e=0:(Nt=null,kt=0,e=Rt)}if(e!==0){if(e===2&&(r=rd(t),r!==0&&(i=r,e=Id(t,r))),e===1)throw n=Pa,Xr(t,0),Qi(t,i),cn(t,Mt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!YM(r)&&(e=Dc(t,i),e===2&&(s=rd(t),s!==0&&(i=s,e=Id(t,s))),e===1))throw n=Pa,Xr(t,0),Qi(t,i),cn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Dr(t,sn,Ei);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=lp+500-Mt(),10<e)){if(gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dd(Dr.bind(null,t,sn,Ei),e);break}Dr(t,sn,Ei);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jM(i/1960))-i,10<i){t.timeoutHandle=dd(Dr.bind(null,t,sn,Ei),i);break}Dr(t,sn,Ei);break;case 5:Dr(t,sn,Ei);break;default:throw Error(te(329))}}}return cn(t,Mt()),t.callbackNode===n?ay.bind(null,t):null}function Id(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=sn,sn=n,e!==null&&Nd(e)),t}function Nd(t){sn===null?sn=t:sn.push.apply(sn,t)}function YM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~ap,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function mg(t){if(Ye&6)throw Error(te(327));Ys();var e=gc(t,0);if(!(e&1))return cn(t,Mt()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=rd(t);i!==0&&(e=i,n=Id(t,i))}if(n===1)throw n=Pa,Xr(t,0),Qi(t,e),cn(t,Mt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,sn,Ei),cn(t,Mt()),null}function cp(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(ao=Mt()+500,Qc&&_r())}}function Zr(t){tr!==null&&tr.tag===0&&!(Ye&6)&&Ys();var e=Ye;Ye|=1;var n=Pn.transition,i=rt;try{if(Pn.transition=null,rt=1,t)return t()}finally{rt=i,Pn.transition=n,Ye=e,!(Ye&6)&&_r()}}function up(){mn=Hs.current,ct(Hs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TM(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:so(),ct(an),ct(jt),Jh();break;case 5:Qh(i);break;case 4:so();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:Yh(i.type._context);break;case 22:case 23:up()}n=n.return}if(Nt=t,At=t=ur(t.current,null),kt=mn=e,Rt=0,Pa=null,ap=nu=qr=0,sn=ca=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function ly(t,e){do{var n=At;try{if(jh(),Zl.current=Pc,Cc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cc=!1}if(Kr=0,It=bt=mt=null,aa=!1,ba=0,op.current=null,n===null||n.return===null){Rt=1,Pa=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ng(o);if(p!==null){p.flags&=-257,ig(p,o,a,s,e),p.mode&1&&tg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){tg(s,c,e),fp();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var m=ng(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ig(m,o,a,s,e),Xh(oo(l,a));break e}}s=l=oo(l,a),Rt!==4&&(Rt=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=X0(s,l,e);Km(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=$0(s,a,e);Km(s,x);break e}}s=s.return}while(s!==null)}fy(n)}catch(b){e=b,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function cy(){var t=Lc.current;return Lc.current=Pc,t===null?Pc:t}function fp(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||!(qr&268435455)&&!(nu&268435455)||Qi(Nt,kt)}function Dc(t,e){var n=Ye;Ye|=2;var i=cy();(Nt!==t||kt!==e)&&(Ei=null,Xr(t,e));do try{KM();break}catch(r){ly(t,r)}while(!0);if(jh(),Ye=n,Lc.current=i,At!==null)throw Error(te(261));return Nt=null,kt=0,Rt}function KM(){for(;At!==null;)uy(At)}function qM(){for(;At!==null&&!SS();)uy(At)}function uy(t){var e=hy(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?fy(t):At=e,op.current=null}function fy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GM(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=VM(n,e,mn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Dr(t,e,n){var i=rt,r=Pn.transition;try{Pn.transition=null,rt=1,ZM(t,e,n,i)}finally{Pn.transition=r,rt=i}return null}function ZM(t,e,n,i){do Ys();while(tr!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LS(t,s),t===Nt&&(At=Nt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,py(mc,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=rt;rt=1;var a=Ye;Ye|=4,op.current=null,XM(t,n),sy(n,t),vM(ud),vc=!!cd,ud=cd=null,t.current=n,$M(n),MS(),Ye=a,rt=o,Pn.transition=s}else t.current=n;if(fl&&(fl=!1,tr=t,Nc=r),s=t.pendingLanes,s===0&&(lr=null),wS(n.stateNode),cn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ic)throw Ic=!1,t=Pd,Pd=null,t;return Nc&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===Ld?ua++:(ua=0,Ld=t):ua=0,_r(),null}function Ys(){if(tr!==null){var t=X_(Nc),e=Pn.transition,n=rt;try{if(Pn.transition=null,rt=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Nc=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:la(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var d=u.sibling,p=u.return;if(ny(u),u===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,pe=y;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(b){St(a,a.return,b)}if(a===o){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(Ye=r,_r(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(jc,t)}catch{}i=!0}return i}finally{rt=n,Pn.transition=e}}return!1}function gg(t,e,n){e=oo(n,e),e=X0(t,e,1),t=ar(t,e,1),e=Jt(),t!==null&&(Oa(t,1,e),cn(t,e))}function St(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=oo(n,t),t=$0(e,t,1),e=ar(e,t,1),t=Jt(),e!==null&&(Oa(e,1,t),cn(e,t));break}}e=e.return}}function QM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(kt&n)===n&&(Rt===4||Rt===3&&(kt&130023424)===kt&&500>Mt()-lp?Xr(t,0):ap|=n),cn(t,e)}function dy(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=Jt();t=Ui(t,e),t!==null&&(Oa(t,e,n),cn(t,n))}function JM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dy(t,n)}function eE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),dy(t,n)}var hy;hy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,HM(t,e,n);on=!!(t.flags&131072)}else on=!1,ft&&e.flags&1048576&&v0(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jl(t,e),t=e.pendingProps;var r=no(e,jt.current);js(e,n),r=tp(null,e,i,t,r,n);var s=np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,Mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qh(e),r.updater=eu,e.stateNode=r,r._reactInternals=e,yd(e,i,t,n),e=Md(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Gh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nE(i),t=kn(i,t),r){case 0:e=Sd(null,e,i,t,n);break e;case 1:e=og(null,e,i,t,n);break e;case 11:e=rg(null,e,i,t,n);break e;case 14:e=sg(null,e,i,kn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),og(t,e,i,r,n);case 3:e:{if(q0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,E0(t,e),bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(te(423)),e),e=ag(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(te(424)),e),e=ag(t,e,i,n,r);break e}else for(vn=or(e.stateNode.containerInfo.firstChild),yn=e,ft=!0,zn=null,n=S0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=Fi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return T0(e),t===null&&gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fd(i,r)?o=null:s!==null&&fd(i,s)&&(e.flags|=32),K0(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return Z0(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),rg(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(wc,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!an.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=Ln(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),sg(t,e,i,r,n);case 15:return j0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Jl(t,e),e.tag=1,ln(i)?(t=!0,Mc(e)):t=!1,js(e,n),W0(e,i,r),yd(e,i,r,n),Md(null,e,i,!0,t,n);case 19:return Q0(t,e,n);case 22:return Y0(t,e,n)}throw Error(te(156,e.tag))};function py(t,e){return H_(t,e)}function tE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new tE(t,e,n,i)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nE(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Ih)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return $r(n.children,r,s,e);case Ph:o=8,r|=8;break;case Gf:return t=Rn(12,n,e,r|2),t.elementType=Gf,t.lanes=s,t;case Wf:return t=Rn(13,n,e,r),t.elementType=Wf,t.lanes=s,t;case Xf:return t=Rn(19,n,e,r),t.elementType=Xf,t.lanes=s,t;case T_:return iu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M_:o=10;break e;case E_:o=9;break e;case Lh:o=11;break e;case Ih:o=14;break e;case Ki:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function iu(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=T_,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function ju(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hp(t,e,n,i,r,s,o,a,l){return t=new iE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),t}function rE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function my(t){if(!t)return pr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(ln(n))return m0(t,n,e)}return e}function gy(t,e,n,i,r,s,o,a,l){return t=hp(n,i,!0,t,r,s,o,a,l),t.context=my(null),n=t.current,i=Jt(),r=cr(n),s=Pi(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,Oa(t,r,i),cn(t,i),t}function ru(t,e,n,i){var r=e.current,s=Jt(),o=cr(r);return n=my(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(Xn(t,r,o,s),ql(t,r,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function sE(){return null}var vy=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}su.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ru(t,e,null,null)};su.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){ru(null,t,null,null)}),e[Di]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=Y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&q_(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function oE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Uc(o);s.call(c)}}var o=gy(e,i,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[Di]=o.current,Ma(t.nodeType===8?t.parentNode:t),Zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Uc(l);a.call(c)}}var l=hp(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=l,t[Di]=l.current,Ma(t.nodeType===8?t.parentNode:t),Zr(function(){ru(e,l,n,i)}),l}function au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uc(o);a.call(l)}}ru(e,o,t,r)}else o=oE(n,e,t,r,i);return Uc(o)}$_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(Uh(e,n|1),cn(e,Mt()),!(Ye&6)&&(ao=Mt()+500,_r()))}break;case 13:Zr(function(){var i=Ui(t,1);if(i!==null){var r=Jt();Xn(i,t,1,r)}}),pp(t,1)}};Fh=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=Jt();Xn(e,t,134217728,n)}pp(t,134217728)}};j_=function(t){if(t.tag===13){var e=cr(t),n=Ui(t,e);if(n!==null){var i=Jt();Xn(n,t,e,i)}pp(t,e)}};Y_=function(){return rt};K_=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};td=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zc(i);if(!r)throw Error(te(90));A_(i),Yf(i,r)}}}break;case"textarea":R_(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};U_=cp;F_=Zr;var aE={usingClientEntryPoint:!1,Events:[Ba,Us,Zc,N_,D_,cp]},Fo={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lE={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B_(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||sE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{jc=dl.inject(lE),oi=dl}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(te(200));return rE(t,e,null,n)};Sn.createRoot=function(t,e){if(!gp(t))throw Error(te(299));var n=!1,i="",r=vy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hp(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Ma(t.nodeType===8?t.parentNode:t),new mp(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=B_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Zr(t)};Sn.hydrate=function(t,e,n){if(!ou(e))throw Error(te(200));return au(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=vy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=gy(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new su(e)};Sn.render=function(t,e,n){if(!ou(e))throw Error(te(200));return au(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(te(40));return t._reactRootContainer?(Zr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Sn.unstable_batchedUpdates=cp;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return au(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function _y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)}catch(t){console.error(t)}}_y(),__.exports=Sn;var yy=__.exports,xy,yg=yy;xy=yg.createRoot,yg.hydrateRoot;var ii=function(){return ii=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ii.apply(this,arguments)};function Sy(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function cE(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var ic="right-scroll-bar-position",rc="width-before-scroll-bar",uE="with-scroll-bars-hidden",fE="--removed-body-scroll-bar-size";function Yu(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function dE(t,e){var n=ae.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(i){var r=n.value;r!==i&&(n.value=i,n.callback(i,r))}}}})[0];return n.callback=e,n.facade}var hE=typeof window<"u"?ae.useLayoutEffect:ae.useEffect,xg=new WeakMap;function pE(t,e){var n=dE(null,function(i){return t.forEach(function(r){return Yu(r,i)})});return hE(function(){var i=xg.get(n);if(i){var r=new Set(i),s=new Set(t),o=n.current;r.forEach(function(a){s.has(a)||Yu(a,null)}),s.forEach(function(a){r.has(a)||Yu(a,o)})}xg.set(n,t)},[t]),n}function mE(t){return t}function gE(t,e){e===void 0&&(e=mE);var n=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(s){var o=e(s,i);return n.push(o),function(){n=n.filter(function(a){return a!==o})}},assignSyncMedium:function(s){for(i=!0;n.length;){var o=n;n=[],o.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){i=!0;var o=[];if(n.length){var a=n;n=[],a.forEach(s),o=n}var l=function(){var u=o;o=[],u.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){o.push(u),c()},filter:function(u){return o=o.filter(u),n}}}};return r}function vE(t){t===void 0&&(t={});var e=gE(null);return e.options=ii({async:!0,ssr:!1},t),e}var My=function(t){var e=t.sideCar,n=Sy(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return ae.createElement(i,ii({},n))};My.isSideCarExport=!0;function _E(t,e){return t.useMedium(e),My}var Ey=vE(),Ku=function(){},lu=ae.forwardRef(function(t,e){var n=ae.useRef(null),i=ae.useState({onScrollCapture:Ku,onWheelCapture:Ku,onTouchMoveCapture:Ku}),r=i[0],s=i[1],o=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,u=t.enabled,f=t.shards,d=t.sideCar,p=t.noIsolation,g=t.inert,v=t.allowPinchZoom,m=t.as,h=m===void 0?"div":m,_=t.gapMode,y=Sy(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=d,b=pE([n,e]),A=ii(ii({},y),r);return ae.createElement(ae.Fragment,null,u&&ae.createElement(x,{sideCar:Ey,removeScrollBar:c,shards:f,noIsolation:p,inert:g,setCallbacks:s,allowPinchZoom:!!v,lockRef:n,gapMode:_}),o?ae.cloneElement(ae.Children.only(a),ii(ii({},A),{ref:b})):ae.createElement(h,ii({},A,{className:l,ref:b}),a))});lu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};lu.classNames={fullWidth:rc,zeroRight:ic};var yE=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function xE(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=yE();return e&&t.setAttribute("nonce",e),t}function SE(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function ME(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var EE=function(){var t=0,e=null;return{add:function(n){t==0&&(e=xE())&&(SE(e,n),ME(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},TE=function(){var t=EE();return function(e,n){ae.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},Ty=function(){var t=TE(),e=function(n){var i=n.styles,r=n.dynamic;return t(i,r),null};return e},wE={left:0,top:0,right:0,gap:0},qu=function(t){return parseInt(t||"",10)||0},AE=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],i=e[t==="padding"?"paddingTop":"marginTop"],r=e[t==="padding"?"paddingRight":"marginRight"];return[qu(n),qu(i),qu(r)]},bE=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return wE;var e=AE(t),n=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-n+e[2]-e[0])}},RE=Ty(),Ks="data-scroll-locked",CE=function(t,e,n,i){var r=t.left,s=t.top,o=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(uE,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(a,"px ").concat(i,`;
  }
  body[`).concat(Ks,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(i,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ic,` {
    right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(rc,` {
    margin-right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(ic," .").concat(ic,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(rc," .").concat(rc,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Ks,`] {
    `).concat(fE,": ").concat(a,`px;
  }
`)},Sg=function(){var t=parseInt(document.body.getAttribute(Ks)||"0",10);return isFinite(t)?t:0},PE=function(){ae.useEffect(function(){return document.body.setAttribute(Ks,(Sg()+1).toString()),function(){var t=Sg()-1;t<=0?document.body.removeAttribute(Ks):document.body.setAttribute(Ks,t.toString())}},[])},LE=function(t){var e=t.noRelative,n=t.noImportant,i=t.gapMode,r=i===void 0?"margin":i;PE();var s=ae.useMemo(function(){return bE(r)},[r]);return ae.createElement(RE,{styles:CE(s,!e,r,n?"":"!important")})},Dd=!1;if(typeof window<"u")try{var hl=Object.defineProperty({},"passive",{get:function(){return Dd=!0,!0}});window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{Dd=!1}var ss=Dd?{passive:!1}:!1,IE=function(t){return t.tagName==="TEXTAREA"},wy=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!IE(t)&&n[e]==="visible")},NE=function(t){return wy(t,"overflowY")},DE=function(t){return wy(t,"overflowX")},Mg=function(t,e){var n=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var r=Ay(t,i);if(r){var s=by(t,i),o=s[1],a=s[2];if(o>a)return!0}i=i.parentNode}while(i&&i!==n.body);return!1},UE=function(t){var e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return[e,n,i]},FE=function(t){var e=t.scrollLeft,n=t.scrollWidth,i=t.clientWidth;return[e,n,i]},Ay=function(t,e){return t==="v"?NE(e):DE(e)},by=function(t,e){return t==="v"?UE(e):FE(e)},OE=function(t,e){return t==="h"&&e==="rtl"?-1:1},kE=function(t,e,n,i,r){var s=OE(t,window.getComputedStyle(e).direction),o=s*i,a=n.target,l=e.contains(a),c=!1,u=o>0,f=0,d=0;do{var p=by(t,a),g=p[0],v=p[1],m=p[2],h=v-m-s*g;(g||h)&&Ay(t,a)&&(f+=h,d+=g),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(u&&(Math.abs(f)<1||!r)||!u&&(Math.abs(d)<1||!r))&&(c=!0),c},pl=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},Eg=function(t){return[t.deltaX,t.deltaY]},Tg=function(t){return t&&"current"in t?t.current:t},BE=function(t,e){return t[0]===e[0]&&t[1]===e[1]},zE=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},HE=0,os=[];function VE(t){var e=ae.useRef([]),n=ae.useRef([0,0]),i=ae.useRef(),r=ae.useState(HE++)[0],s=ae.useState(Ty)[0],o=ae.useRef(t);ae.useEffect(function(){o.current=t},[t]),ae.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(r));var v=cE([t.lockRef.current],(t.shards||[]).map(Tg),!0).filter(Boolean);return v.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),v.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[t.inert,t.lockRef.current,t.shards]);var a=ae.useCallback(function(v,m){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!o.current.allowPinchZoom;var h=pl(v),_=n.current,y="deltaX"in v?v.deltaX:_[0]-h[0],x="deltaY"in v?v.deltaY:_[1]-h[1],b,A=v.target,w=Math.abs(y)>Math.abs(x)?"h":"v";if("touches"in v&&w==="h"&&A.type==="range")return!1;var C=Mg(w,A);if(!C)return!0;if(C?b=w:(b=w==="v"?"h":"v",C=Mg(w,A)),!C)return!1;if(!i.current&&"changedTouches"in v&&(y||x)&&(i.current=b),!b)return!0;var E=i.current||b;return kE(E,m,v,E==="h"?y:x,!0)},[]),l=ae.useCallback(function(v){var m=v;if(!(!os.length||os[os.length-1]!==s)){var h="deltaY"in m?Eg(m):pl(m),_=e.current.filter(function(b){return b.name===m.type&&(b.target===m.target||m.target===b.shadowParent)&&BE(b.delta,h)})[0];if(_&&_.should){m.cancelable&&m.preventDefault();return}if(!_){var y=(o.current.shards||[]).map(Tg).filter(Boolean).filter(function(b){return b.contains(m.target)}),x=y.length>0?a(m,y[0]):!o.current.noIsolation;x&&m.cancelable&&m.preventDefault()}}},[]),c=ae.useCallback(function(v,m,h,_){var y={name:v,delta:m,target:h,should:_,shadowParent:GE(h)};e.current.push(y),setTimeout(function(){e.current=e.current.filter(function(x){return x!==y})},1)},[]),u=ae.useCallback(function(v){n.current=pl(v),i.current=void 0},[]),f=ae.useCallback(function(v){c(v.type,Eg(v),v.target,a(v,t.lockRef.current))},[]),d=ae.useCallback(function(v){c(v.type,pl(v),v.target,a(v,t.lockRef.current))},[]);ae.useEffect(function(){return os.push(s),t.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",l,ss),document.addEventListener("touchmove",l,ss),document.addEventListener("touchstart",u,ss),function(){os=os.filter(function(v){return v!==s}),document.removeEventListener("wheel",l,ss),document.removeEventListener("touchmove",l,ss),document.removeEventListener("touchstart",u,ss)}},[]);var p=t.removeScrollBar,g=t.inert;return ae.createElement(ae.Fragment,null,g?ae.createElement(s,{styles:zE(r)}):null,p?ae.createElement(LE,{gapMode:t.gapMode}):null)}function GE(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const WE=_E(Ey,VE);var vp=ae.forwardRef(function(t,e){return ae.createElement(lu,ii({},t,{ref:e,sideCar:WE}))});vp.classNames=lu.classNames;function Bt(t){return Object.keys(t)}function Zu(t){return t&&typeof t=="object"&&!Array.isArray(t)}function _p(t,e){const n={...t},i=e;return Zu(t)&&Zu(e)&&Object.keys(e).forEach(r=>{Zu(i[r])&&r in t?n[r]=_p(n[r],i[r]):n[r]=i[r]}),n}function XE(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function $E(t){var e;return typeof t!="string"||!t.includes("var(--mantine-scale)")?t:(e=t.match(/^calc\((.*?)\)$/))==null?void 0:e[1].split("*")[0].trim()}function Ud(t){const e=$E(t);return typeof e=="number"?e:typeof e=="string"?e.includes("calc")||e.includes("var")?e:e.includes("px")?Number(e.replace("px","")):e.includes("rem")?Number(e.replace("rem",""))*16:e.includes("em")?Number(e.replace("em",""))*16:Number(e):NaN}function Qu(t){return t==="0rem"?"0rem":`calc(${t} * var(--mantine-scale))`}function Ry(t,{shouldScale:e=!1}={}){function n(i){if(i===0||i==="0")return`0${t}`;if(typeof i=="number"){const r=`${i/16}${t}`;return e?Qu(r):r}if(typeof i=="string"){if(i===""||i.startsWith("calc(")||i.startsWith("clamp(")||i.includes("rgba("))return i;if(i.includes(","))return i.split(",").map(s=>n(s)).join(",");if(i.includes(" "))return i.split(" ").map(s=>n(s)).join(" ");if(i.includes(t))return e?Qu(i):i;const r=i.replace("px","");if(!Number.isNaN(Number(r))){const s=`${Number(r)/16}${t}`;return e?Qu(s):s}}return i}return n}const Z=Ry("rem",{shouldScale:!0}),Fc=Ry("em");function yp(t){return Object.keys(t).reduce((e,n)=>(t[n]!==void 0&&(e[n]=t[n]),e),{})}function Cy(t){return typeof t=="number"?!0:typeof t=="string"?t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&t.trim()!==""?!0:/[0-9]/.test(t.trim().replace("-","")[0]):!1}function jE(t){const e=ae.createContext(null);return[({children:r,value:s})=>xe.jsx(e.Provider,{value:s,children:r}),()=>{const r=ae.useContext(e);if(r===null)throw new Error(t);return r}]}const YE={app:100,modal:200,popover:300,overlay:400,max:9999};function KE(t){return YE[t]}function xp(t,e="size",n=!0){if(t!==void 0)return Cy(t)?n?Z(t):t:`var(--${e}-${t})`}function Sp(t){return xp(t,"mantine-spacing")}function qE(t){return xp(t,"mantine-font-size")}function ZE(t){return xp(t,"mantine-line-height",!1)}function Mp(t,e){return t in e.breakpoints?Ud(e.breakpoints[t]):Ud(t)}function wg(t,e){const n=t.map(i=>({value:i,px:Mp(i,e)}));return n.sort((i,r)=>i.px-r.px),n}function QE(t,e){try{return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}catch{return t.addListener(e),()=>t.removeListener(e)}}function JE(t,e){return typeof window<"u"&&"matchMedia"in window?window.matchMedia(t).matches:!1}function eT(t,e,{getInitialValueInEffect:n}={getInitialValueInEffect:!0}){const[i,r]=ae.useState(n?e:JE(t)),s=ae.useRef();return ae.useEffect(()=>{if("matchMedia"in window)return s.current=window.matchMedia(t),r(s.current.matches),QE(s.current,o=>r(o.matches))},[t]),i}const Ep=typeof document<"u"?ae.useLayoutEffect:ae.useEffect;function tT(t,e){const n=ae.useRef(!1);ae.useEffect(()=>()=>{n.current=!1},[]),ae.useEffect(()=>{if(n.current)return t();n.current=!0},e)}function nT(t,e,n){ae.useEffect(()=>(window.addEventListener(t,e,n),()=>window.removeEventListener(t,e,n)),[t,e])}function iT(t,e){typeof t=="function"?t(e):typeof t=="object"&&t!==null&&"current"in t&&(t.current=e)}function rT(...t){return e=>{t.forEach(n=>iT(n,e))}}function sT(t,e){return eT("(prefers-reduced-motion: reduce)",t,e)}function Py(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Py(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Eo(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Py(t))&&(i&&(i+=" "),i+=e);return i}const oT={};function aT(t){const e={};return t.forEach(n=>{Object.entries(n).forEach(([i,r])=>{e[i]?e[i]=Eo(e[i],r):e[i]=r})}),e}function Tp({theme:t,classNames:e,props:n,stylesCtx:i}){const s=(Array.isArray(e)?e:[e]).map(o=>typeof o=="function"?o(t,n,i):o||oT);return aT(s)}function Fd({theme:t,styles:e,props:n,stylesCtx:i}){return(Array.isArray(e)?e:[e]).reduce((s,o)=>typeof o=="function"?{...s,...o(t,n,i)}:{...s,...o},{})}const Ly=ae.createContext(null);function yr(){const t=ae.useContext(Ly);if(!t)throw new Error("[@mantine/core] MantineProvider was not found in tree");return t}function lT(){return yr().cssVariablesResolver}function cT(){return yr().classNamesPrefix}function wp(){return yr().getStyleNonce}function uT(){return yr().withStaticClasses}function fT(){return yr().headless}function dT(){var t;return(t=yr().stylesTransform)==null?void 0:t.sx}function hT(){var t;return(t=yr().stylesTransform)==null?void 0:t.styles}function pT(t){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(t)}function mT(t){let e=t.replace("#","");if(e.length===3){const o=e.split("");e=[o[0],o[0],o[1],o[1],o[2],o[2]].join("")}if(e.length===8){const o=parseInt(e.slice(6,8),16)/255;return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16),a:o}}const n=parseInt(e,16),i=n>>16&255,r=n>>8&255,s=n&255;return{r:i,g:r,b:s,a:1}}function gT(t){const[e,n,i,r]=t.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:e,g:n,b:i,a:r||1}}function vT(t){const e=/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,n=t.match(e);if(!n)return{r:0,g:0,b:0,a:1};const i=parseInt(n[1],10),r=parseInt(n[2],10)/100,s=parseInt(n[3],10)/100,o=n[5]?parseFloat(n[5]):void 0,a=(1-Math.abs(2*s-1))*r,l=i/60,c=a*(1-Math.abs(l%2-1)),u=s-a/2;let f,d,p;return l>=0&&l<1?(f=a,d=c,p=0):l>=1&&l<2?(f=c,d=a,p=0):l>=2&&l<3?(f=0,d=a,p=c):l>=3&&l<4?(f=0,d=c,p=a):l>=4&&l<5?(f=c,d=0,p=a):(f=a,d=0,p=c),{r:Math.round((f+u)*255),g:Math.round((d+u)*255),b:Math.round((p+u)*255),a:o||1}}function Ap(t){return pT(t)?mT(t):t.startsWith("rgb")?gT(t):t.startsWith("hsl")?vT(t):{r:0,g:0,b:0,a:1}}function ml(t,e){if(t.startsWith("var("))return`color-mix(in srgb, ${t}, black ${e*100}%)`;const{r:n,g:i,b:r,a:s}=Ap(t),o=1-e,a=l=>Math.round(l*o);return`rgba(${a(n)}, ${a(i)}, ${a(r)}, ${s})`}function La(t,e){return typeof t.primaryShade=="number"?t.primaryShade:e==="dark"?t.primaryShade.dark:t.primaryShade.light}function Ju(t){return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function _T(t){const e=t.match(/oklch\((.*?)%\s/);return e?parseFloat(e[1]):null}function yT(t){if(t.startsWith("oklch("))return(_T(t)||0)/100;const{r:e,g:n,b:i}=Ap(t),r=e/255,s=n/255,o=i/255,a=Ju(r),l=Ju(s),c=Ju(o);return .2126*a+.7152*l+.0722*c}function Oo(t,e=.179){return t.startsWith("var(")?!1:yT(t)>e}function Ha({color:t,theme:e,colorScheme:n}){if(typeof t!="string")throw new Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof t}`);if(t==="bright")return{color:t,value:n==="dark"?e.white:e.black,shade:void 0,isThemeColor:!1,isLight:Oo(n==="dark"?e.white:e.black,e.luminanceThreshold),variable:"--mantine-color-bright"};if(t==="dimmed")return{color:t,value:n==="dark"?e.colors.dark[2]:e.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:Oo(n==="dark"?e.colors.dark[2]:e.colors.gray[6],e.luminanceThreshold),variable:"--mantine-color-dimmed"};if(t==="white"||t==="black")return{color:t,value:t==="white"?e.white:e.black,shade:void 0,isThemeColor:!1,isLight:Oo(t==="white"?e.white:e.black,e.luminanceThreshold),variable:`--mantine-color-${t}`};const[i,r]=t.split("."),s=r?Number(r):void 0,o=i in e.colors;if(o){const a=s!==void 0?e.colors[i][s]:e.colors[i][La(e,n||"light")];return{color:i,value:a,shade:s,isThemeColor:o,isLight:Oo(a,e.luminanceThreshold),variable:r?`--mantine-color-${i}-${s}`:`--mantine-color-${i}-filled`}}return{color:t,value:t,isThemeColor:o,isLight:Oo(t,e.luminanceThreshold),shade:s,variable:void 0}}function Od(t,e){const n=Ha({color:t||e.primaryColor,theme:e});return n.variable?`var(${n.variable})`:t}function kd(t,e){const n={from:(t==null?void 0:t.from)||e.defaultGradient.from,to:(t==null?void 0:t.to)||e.defaultGradient.to,deg:(t==null?void 0:t.deg)||e.defaultGradient.deg||0},i=Od(n.from,e),r=Od(n.to,e);return`linear-gradient(${n.deg}deg, ${i} 0%, ${r} 100%)`}function Si(t,e){if(typeof t!="string"||e>1||e<0)return"rgba(0, 0, 0, 1)";if(t.startsWith("var(")){const s=(1-e)*100;return`color-mix(in srgb, ${t}, transparent ${s}%)`}if(t.startsWith("oklch"))return t.includes("/")?t.replace(/\/\s*[\d.]+\s*\)/,`/ ${e})`):t.replace(")",` / ${e})`);const{r:n,g:i,b:r}=Ap(t);return`rgba(${n}, ${i}, ${r}, ${e})`}const as=Si,xT=({color:t,theme:e,variant:n,gradient:i,autoContrast:r})=>{const s=Ha({color:t,theme:e}),o=typeof r=="boolean"?r:e.autoContrast;if(n==="filled"){const a=o&&s.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return s.isThemeColor?s.shade===void 0?{background:`var(--mantine-color-${t}-filled)`,hover:`var(--mantine-color-${t}-filled-hover)`,color:a,border:`${Z(1)} solid transparent`}:{background:`var(--mantine-color-${s.color}-${s.shade})`,hover:`var(--mantine-color-${s.color}-${s.shade===9?8:s.shade+1})`,color:a,border:`${Z(1)} solid transparent`}:{background:t,hover:ml(t,.1),color:a,border:`${Z(1)} solid transparent`}}if(n==="light"){if(s.isThemeColor){if(s.shade===void 0)return{background:`var(--mantine-color-${t}-light)`,hover:`var(--mantine-color-${t}-light-hover)`,color:`var(--mantine-color-${t}-light-color)`,border:`${Z(1)} solid transparent`};const a=e.colors[s.color][s.shade];return{background:Si(a,.1),hover:Si(a,.12),color:`var(--mantine-color-${s.color}-${Math.min(s.shade,6)})`,border:`${Z(1)} solid transparent`}}return{background:Si(t,.1),hover:Si(t,.12),color:t,border:`${Z(1)} solid transparent`}}if(n==="outline")return s.isThemeColor?s.shade===void 0?{background:"transparent",hover:`var(--mantine-color-${t}-outline-hover)`,color:`var(--mantine-color-${t}-outline)`,border:`${Z(1)} solid var(--mantine-color-${t}-outline)`}:{background:"transparent",hover:Si(e.colors[s.color][s.shade],.05),color:`var(--mantine-color-${s.color}-${s.shade})`,border:`${Z(1)} solid var(--mantine-color-${s.color}-${s.shade})`}:{background:"transparent",hover:Si(t,.05),color:t,border:`${Z(1)} solid ${t}`};if(n==="subtle"){if(s.isThemeColor){if(s.shade===void 0)return{background:"transparent",hover:`var(--mantine-color-${t}-light-hover)`,color:`var(--mantine-color-${t}-light-color)`,border:`${Z(1)} solid transparent`};const a=e.colors[s.color][s.shade];return{background:"transparent",hover:Si(a,.12),color:`var(--mantine-color-${s.color}-${Math.min(s.shade,6)})`,border:`${Z(1)} solid transparent`}}return{background:"transparent",hover:Si(t,.12),color:t,border:`${Z(1)} solid transparent`}}return n==="transparent"?s.isThemeColor?s.shade===void 0?{background:"transparent",hover:"transparent",color:`var(--mantine-color-${t}-light-color)`,border:`${Z(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:`var(--mantine-color-${s.color}-${Math.min(s.shade,6)})`,border:`${Z(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:t,border:`${Z(1)} solid transparent`}:n==="white"?s.isThemeColor?s.shade===void 0?{background:"var(--mantine-color-white)",hover:ml(e.white,.01),color:`var(--mantine-color-${t}-filled)`,border:`${Z(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:ml(e.white,.01),color:`var(--mantine-color-${s.color}-${s.shade})`,border:`${Z(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:ml(e.white,.01),color:t,border:`${Z(1)} solid transparent`}:n==="gradient"?{background:kd(i,e),hover:kd(i,e),color:"var(--mantine-color-white)",border:"none"}:n==="default"?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:`${Z(1)} solid var(--mantine-color-default-border)`}:{}},ST={dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},Ag="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",bp={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:ST,primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:xT,autoContrast:!1,luminanceThreshold:.3,fontFamily:Ag,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:Ag,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:Z(34),lineHeight:"1.3"},h2:{fontSize:Z(26),lineHeight:"1.35"},h3:{fontSize:Z(22),lineHeight:"1.4"},h4:{fontSize:Z(18),lineHeight:"1.45"},h5:{fontSize:Z(16),lineHeight:"1.5"},h6:{fontSize:Z(14),lineHeight:"1.5"}}},fontSizes:{xs:Z(12),sm:Z(14),md:Z(16),lg:Z(18),xl:Z(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:Z(2),sm:Z(4),md:Z(8),lg:Z(16),xl:Z(32)},spacing:{xs:Z(10),sm:Z(12),md:Z(16),lg:Z(20),xl:Z(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), 0 ${Z(1)} ${Z(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(10)} ${Z(15)} ${Z(-5)}, rgba(0, 0, 0, 0.04) 0 ${Z(7)} ${Z(7)} ${Z(-5)}`,md:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(20)} ${Z(25)} ${Z(-5)}, rgba(0, 0, 0, 0.04) 0 ${Z(10)} ${Z(10)} ${Z(-5)}`,lg:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(28)} ${Z(23)} ${Z(-7)}, rgba(0, 0, 0, 0.04) 0 ${Z(12)} ${Z(12)} ${Z(-7)}`,xl:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(36)} ${Z(28)} ${Z(-7)}, rgba(0, 0, 0, 0.04) 0 ${Z(17)} ${Z(17)} ${Z(-7)}`},other:{},components:{}};function bg(t){return t==="auto"||t==="dark"||t==="light"}function MT({key:t="mantine-color-scheme-value"}={}){let e;return{get:n=>{if(typeof window>"u")return n;try{const i=window.localStorage.getItem(t);return bg(i)?i:n}catch{return n}},set:n=>{try{window.localStorage.setItem(t,n)}catch(i){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",i)}},subscribe:n=>{e=i=>{i.storageArea===window.localStorage&&i.key===t&&bg(i.newValue)&&n(i.newValue)},window.addEventListener("storage",e)},unsubscribe:()=>{window.removeEventListener("storage",e)},clear:()=>{window.localStorage.removeItem(t)}}}const ET="[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",Rg="[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";function ef(t){return t<0||t>9?!1:parseInt(t.toString(),10)===t}function Cg(t){if(!(t.primaryColor in t.colors))throw new Error(ET);if(typeof t.primaryShade=="object"&&(!ef(t.primaryShade.dark)||!ef(t.primaryShade.light)))throw new Error(Rg);if(typeof t.primaryShade=="number"&&!ef(t.primaryShade))throw new Error(Rg)}function TT(t,e){var i;if(!e)return Cg(t),t;const n=_p(t,e);return e.fontFamily&&!((i=e.headings)!=null&&i.fontFamily)&&(n.headings.fontFamily=e.fontFamily),Cg(n),n}const Rp=ae.createContext(null),wT=()=>ae.useContext(Rp)||bp;function xr(){const t=ae.useContext(Rp);if(!t)throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return t}function Iy({theme:t,children:e,inherit:n=!0}){const i=wT(),r=ae.useMemo(()=>TT(n?i:bp,t),[t,i,n]);return xe.jsx(Rp.Provider,{value:r,children:e})}Iy.displayName="@mantine/core/MantineThemeProvider";function AT(){const t=xr(),e=wp(),n=Bt(t.breakpoints).reduce((i,r)=>{const s=t.breakpoints[r].includes("px"),o=Ud(t.breakpoints[r]),a=s?`${o-.1}px`:Fc(o-.1),l=s?`${o}px`:Fc(o);return`${i}@media (max-width: ${a}) {.mantine-visible-from-${r} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${r} {display: none !important;}}`},"");return xe.jsx("style",{"data-mantine-styles":"classes",nonce:e==null?void 0:e(),dangerouslySetInnerHTML:{__html:n}})}function tf(t){return Object.entries(t).map(([e,n])=>`${e}: ${n};`).join("")}function ko(t,e){return(Array.isArray(t)?t:[t]).reduce((i,r)=>`${r}{${i}}`,e)}function bT(t,e){const n=tf(t.variables),i=n?ko(e,n):"",r=tf(t.dark),s=tf(t.light),o=r?ko(e===":host"?`${e}([data-mantine-color-scheme="dark"])`:`${e}[data-mantine-color-scheme="dark"]`,r):"",a=s?ko(e===":host"?`${e}([data-mantine-color-scheme="light"])`:`${e}[data-mantine-color-scheme="light"]`,s):"";return`${i}${o}${a}`}function RT({color:t,theme:e,autoContrast:n}){return(typeof n=="boolean"?n:e.autoContrast)&&Ha({color:t||e.primaryColor,theme:e}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function Pg(t,e){return RT({color:t.colors[t.primaryColor][La(t,e)],theme:t,autoContrast:null})}function gl({theme:t,color:e,colorScheme:n,name:i=e,withColorValues:r=!0}){if(!t.colors[e])return{};if(n==="light"){const a=La(t,"light"),l={[`--mantine-color-${i}-text`]:`var(--mantine-color-${i}-filled)`,[`--mantine-color-${i}-filled`]:`var(--mantine-color-${i}-${a})`,[`--mantine-color-${i}-filled-hover`]:`var(--mantine-color-${i}-${a===9?8:a+1})`,[`--mantine-color-${i}-light`]:as(t.colors[e][a],.1),[`--mantine-color-${i}-light-hover`]:as(t.colors[e][a],.12),[`--mantine-color-${i}-light-color`]:`var(--mantine-color-${i}-${a})`,[`--mantine-color-${i}-outline`]:`var(--mantine-color-${i}-${a})`,[`--mantine-color-${i}-outline-hover`]:as(t.colors[e][a],.05)};return r?{[`--mantine-color-${i}-0`]:t.colors[e][0],[`--mantine-color-${i}-1`]:t.colors[e][1],[`--mantine-color-${i}-2`]:t.colors[e][2],[`--mantine-color-${i}-3`]:t.colors[e][3],[`--mantine-color-${i}-4`]:t.colors[e][4],[`--mantine-color-${i}-5`]:t.colors[e][5],[`--mantine-color-${i}-6`]:t.colors[e][6],[`--mantine-color-${i}-7`]:t.colors[e][7],[`--mantine-color-${i}-8`]:t.colors[e][8],[`--mantine-color-${i}-9`]:t.colors[e][9],...l}:l}const s=La(t,"dark"),o={[`--mantine-color-${i}-text`]:`var(--mantine-color-${i}-4)`,[`--mantine-color-${i}-filled`]:`var(--mantine-color-${i}-${s})`,[`--mantine-color-${i}-filled-hover`]:`var(--mantine-color-${i}-${s===9?8:s+1})`,[`--mantine-color-${i}-light`]:as(t.colors[e][Math.max(0,s-2)],.15),[`--mantine-color-${i}-light-hover`]:as(t.colors[e][Math.max(0,s-2)],.2),[`--mantine-color-${i}-light-color`]:`var(--mantine-color-${i}-${Math.max(s-5,0)})`,[`--mantine-color-${i}-outline`]:`var(--mantine-color-${i}-${Math.max(s-4,0)})`,[`--mantine-color-${i}-outline-hover`]:as(t.colors[e][Math.max(s-4,0)],.05)};return r?{[`--mantine-color-${i}-0`]:t.colors[e][0],[`--mantine-color-${i}-1`]:t.colors[e][1],[`--mantine-color-${i}-2`]:t.colors[e][2],[`--mantine-color-${i}-3`]:t.colors[e][3],[`--mantine-color-${i}-4`]:t.colors[e][4],[`--mantine-color-${i}-5`]:t.colors[e][5],[`--mantine-color-${i}-6`]:t.colors[e][6],[`--mantine-color-${i}-7`]:t.colors[e][7],[`--mantine-color-${i}-8`]:t.colors[e][8],[`--mantine-color-${i}-9`]:t.colors[e][9],...o}:o}function CT(t){return!!t&&typeof t=="object"&&"mantine-virtual-color"in t}function ls(t,e,n){Bt(e).forEach(i=>Object.assign(t,{[`--mantine-${n}-${i}`]:e[i]}))}const Ny=t=>{const e=La(t,"light"),n=t.defaultRadius in t.radius?t.radius[t.defaultRadius]:Z(t.defaultRadius),i={variables:{"--mantine-scale":t.scale.toString(),"--mantine-cursor-type":t.cursorType,"--mantine-color-scheme":"light dark","--mantine-webkit-font-smoothing":t.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":t.fontSmoothing?"grayscale":"unset","--mantine-color-white":t.white,"--mantine-color-black":t.black,"--mantine-line-height":t.lineHeights.md,"--mantine-font-family":t.fontFamily,"--mantine-font-family-monospace":t.fontFamilyMonospace,"--mantine-font-family-headings":t.headings.fontFamily,"--mantine-heading-font-weight":t.headings.fontWeight,"--mantine-heading-text-wrap":t.headings.textWrap,"--mantine-radius-default":n,"--mantine-primary-color-filled":`var(--mantine-color-${t.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${t.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${t.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${t.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${t.primaryColor}-light-color)`},light:{"--mantine-primary-color-contrast":Pg(t,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":t.black,"--mantine-color-body":t.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${t.primaryColor}-${e})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)"},dark:{"--mantine-primary-color-contrast":Pg(t,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${t.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)"}};ls(i.variables,t.breakpoints,"breakpoint"),ls(i.variables,t.spacing,"spacing"),ls(i.variables,t.fontSizes,"font-size"),ls(i.variables,t.lineHeights,"line-height"),ls(i.variables,t.shadows,"shadow"),ls(i.variables,t.radius,"radius"),t.colors[t.primaryColor].forEach((s,o)=>{i.variables[`--mantine-primary-color-${o}`]=`var(--mantine-color-${t.primaryColor}-${o})`}),Bt(t.colors).forEach(s=>{const o=t.colors[s];if(CT(o)){Object.assign(i.light,gl({theme:t,name:o.name,color:o.light,colorScheme:"light",withColorValues:!0})),Object.assign(i.dark,gl({theme:t,name:o.name,color:o.dark,colorScheme:"dark",withColorValues:!0}));return}o.forEach((a,l)=>{i.variables[`--mantine-color-${s}-${l}`]=a}),Object.assign(i.light,gl({theme:t,color:s,colorScheme:"light",withColorValues:!1})),Object.assign(i.dark,gl({theme:t,color:s,colorScheme:"dark",withColorValues:!1}))});const r=t.headings.sizes;return Bt(r).forEach(s=>{i.variables[`--mantine-${s}-font-size`]=r[s].fontSize,i.variables[`--mantine-${s}-line-height`]=r[s].lineHeight,i.variables[`--mantine-${s}-font-weight`]=r[s].fontWeight||t.headings.fontWeight}),i};function PT({theme:t,generator:e}){const n=Ny(t),i=e==null?void 0:e(t);return i?_p(n,i):n}const nf=Ny(bp);function LT(t){const e={variables:{},light:{},dark:{}};return Bt(t.variables).forEach(n=>{nf.variables[n]!==t.variables[n]&&(e.variables[n]=t.variables[n])}),Bt(t.light).forEach(n=>{nf.light[n]!==t.light[n]&&(e.light[n]=t.light[n])}),Bt(t.dark).forEach(n=>{nf.dark[n]!==t.dark[n]&&(e.dark[n]=t.dark[n])}),e}function IT(t){return`
  ${t}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${t}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}function Dy({cssVariablesSelector:t,deduplicateCssVariables:e}){const n=xr(),i=wp(),r=lT(),s=PT({theme:n,generator:r}),o=t===":root"&&e,a=o?LT(s):s,l=bT(a,t);return l?xe.jsx("style",{"data-mantine-styles":!0,nonce:i==null?void 0:i(),dangerouslySetInnerHTML:{__html:`${l}${o?"":IT(t)}`}}):null}Dy.displayName="@mantine/CssVariables";function NT(){const t=console.error;console.error=(...e)=>{e.length>1&&typeof e[0]=="string"&&e[0].toLowerCase().includes("extra attributes from the server")&&typeof e[1]=="string"&&e[1].toLowerCase().includes("data-mantine-color-scheme")||t(...e)}}function cs(t,e){var i;const n=t!=="auto"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";(i=e())==null||i.setAttribute("data-mantine-color-scheme",n)}function DT({manager:t,defaultColorScheme:e,getRootElement:n,forceColorScheme:i}){const r=ae.useRef(),[s,o]=ae.useState(()=>t.get(e)),a=i||s,l=ae.useCallback(u=>{i||(cs(u,n),o(u),t.set(u))},[t.set,a,i]),c=ae.useCallback(()=>{o(e),cs(e,n),t.clear()},[t.clear,e]);return ae.useEffect(()=>(t.subscribe(l),t.unsubscribe),[t.subscribe,t.unsubscribe]),Ep(()=>{cs(t.get(e),n)},[]),ae.useEffect(()=>{var f;if(i)return cs(i,n),()=>{};i===void 0&&cs(s,n),r.current=window.matchMedia("(prefers-color-scheme: dark)");const u=d=>{s==="auto"&&cs(d.matches?"dark":"light",n)};return(f=r.current)==null||f.addEventListener("change",u),()=>{var d;return(d=r.current)==null?void 0:d.removeEventListener("change",u)}},[s,i]),{colorScheme:a,setColorScheme:l,clearColorScheme:c}}function UT({respectReducedMotion:t,getRootElement:e}){Ep(()=>{var n;t&&((n=e())==null||n.setAttribute("data-respect-reduced-motion","true"))},[t])}NT();function Uy({theme:t,children:e,getStyleNonce:n,withStaticClasses:i=!0,withGlobalClasses:r=!0,deduplicateCssVariables:s=!0,withCssVariables:o=!0,cssVariablesSelector:a=":root",classNamesPrefix:l="mantine",colorSchemeManager:c=MT(),defaultColorScheme:u="light",getRootElement:f=()=>document.documentElement,cssVariablesResolver:d,forceColorScheme:p,stylesTransform:g}){const{colorScheme:v,setColorScheme:m,clearColorScheme:h}=DT({defaultColorScheme:u,forceColorScheme:p,manager:c,getRootElement:f});return UT({respectReducedMotion:(t==null?void 0:t.respectReducedMotion)||!1,getRootElement:f}),xe.jsx(Ly.Provider,{value:{colorScheme:v,setColorScheme:m,clearColorScheme:h,getRootElement:f,classNamesPrefix:l,getStyleNonce:n,cssVariablesResolver:d,cssVariablesSelector:a,withStaticClasses:i,stylesTransform:g},children:xe.jsxs(Iy,{theme:t,children:[o&&xe.jsx(Dy,{cssVariablesSelector:a,deduplicateCssVariables:s}),r&&xe.jsx(AT,{}),e]})})}Uy.displayName="@mantine/core/MantineProvider";const FT={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function OT({theme:t,options:e,unstyled:n}){return Eo((e==null?void 0:e.focusable)&&!n&&(t.focusClassName||FT[t.focusRing]),(e==null?void 0:e.active)&&!n&&t.activeClassName)}function kT({selector:t,stylesCtx:e,options:n,props:i,theme:r}){return Tp({theme:r,classNames:n==null?void 0:n.classNames,props:(n==null?void 0:n.props)||i,stylesCtx:e})[t]}function Lg({selector:t,stylesCtx:e,theme:n,classNames:i,props:r}){return Tp({theme:n,classNames:i,props:r,stylesCtx:e})[t]}function BT({rootSelector:t,selector:e,className:n}){return t===e?n:void 0}function zT({selector:t,classes:e,unstyled:n}){return n?void 0:e[t]}function HT({themeName:t,classNamesPrefix:e,selector:n,withStaticClass:i}){return i===!1?[]:t.map(r=>`${e}-${r}-${n}`)}function VT({themeName:t,theme:e,selector:n,props:i,stylesCtx:r}){return t.map(s=>{var o,a;return(a=Tp({theme:e,classNames:(o=e.components[s])==null?void 0:o.classNames,props:i,stylesCtx:r}))==null?void 0:a[n]})}function GT({options:t,classes:e,selector:n,unstyled:i}){return t!=null&&t.variant&&!i?e[`${n}--${t.variant}`]:void 0}function WT({theme:t,options:e,themeName:n,selector:i,classNamesPrefix:r,classNames:s,classes:o,unstyled:a,className:l,rootSelector:c,props:u,stylesCtx:f,withStaticClasses:d,headless:p,transformedStyles:g}){return Eo(OT({theme:t,options:e,unstyled:a||p}),VT({theme:t,themeName:n,selector:i,props:u,stylesCtx:f}),GT({options:e,classes:o,selector:i,unstyled:a}),Lg({selector:i,stylesCtx:f,theme:t,classNames:s,props:u}),Lg({selector:i,stylesCtx:f,theme:t,classNames:g,props:u}),kT({selector:i,stylesCtx:f,options:e,props:u,theme:t}),BT({rootSelector:c,selector:i,className:l}),zT({selector:i,classes:o,unstyled:a||p}),d&&!p&&HT({themeName:n,classNamesPrefix:r,selector:i,withStaticClass:e==null?void 0:e.withStaticClass}),e==null?void 0:e.className)}function XT({theme:t,themeName:e,props:n,stylesCtx:i,selector:r}){return e.map(s=>{var o;return Fd({theme:t,styles:(o=t.components[s])==null?void 0:o.styles,props:n,stylesCtx:i})[r]}).reduce((s,o)=>({...s,...o}),{})}function Bd({style:t,theme:e}){return Array.isArray(t)?[...t].reduce((n,i)=>({...n,...Bd({style:i,theme:e})}),{}):typeof t=="function"?t(e):t??{}}function $T(t){return t.reduce((e,n)=>(n&&Object.keys(n).forEach(i=>{e[i]={...e[i],...yp(n[i])}}),e),{})}function jT({vars:t,varsResolver:e,theme:n,props:i,stylesCtx:r,selector:s,themeName:o,headless:a}){var l;return(l=$T([a?{}:e==null?void 0:e(n,i,r),...o.map(c=>{var u,f,d;return(d=(f=(u=n.components)==null?void 0:u[c])==null?void 0:f.vars)==null?void 0:d.call(f,n,i,r)}),t==null?void 0:t(n,i,r)]))==null?void 0:l[s]}function YT({theme:t,themeName:e,selector:n,options:i,props:r,stylesCtx:s,rootSelector:o,styles:a,style:l,vars:c,varsResolver:u,headless:f,withStylesTransform:d}){return{...!d&&XT({theme:t,themeName:e,props:r,stylesCtx:s,selector:n}),...!d&&Fd({theme:t,styles:a,props:r,stylesCtx:s})[n],...!d&&Fd({theme:t,styles:i==null?void 0:i.styles,props:(i==null?void 0:i.props)||r,stylesCtx:s})[n],...jT({theme:t,props:r,stylesCtx:s,vars:c,varsResolver:u,selector:n,themeName:e,headless:f}),...o===n?Bd({style:l,theme:t}):null,...Bd({style:i==null?void 0:i.style,theme:t})}}function KT({props:t,stylesCtx:e,themeName:n}){var o;const i=xr(),r=(o=hT())==null?void 0:o();return{getTransformedStyles:a=>r?[...a.map(c=>r(c,{props:t,theme:i,ctx:e})),...n.map(c=>{var u;return r((u=i.components[c])==null?void 0:u.styles,{props:t,theme:i,ctx:e})})].filter(Boolean):[],withStylesTransform:!!r}}function cu({name:t,classes:e,props:n,stylesCtx:i,className:r,style:s,rootSelector:o="root",unstyled:a,classNames:l,styles:c,vars:u,varsResolver:f}){const d=xr(),p=cT(),g=uT(),v=fT(),m=(Array.isArray(t)?t:[t]).filter(y=>y),{withStylesTransform:h,getTransformedStyles:_}=KT({props:n,stylesCtx:i,themeName:m});return(y,x)=>({className:WT({theme:d,options:x,themeName:m,selector:y,classNamesPrefix:p,classNames:l,classes:e,unstyled:a,className:r,rootSelector:o,props:n,stylesCtx:i,withStaticClasses:g,headless:v,transformedStyles:_([x==null?void 0:x.styles,c])}),style:YT({theme:d,themeName:m,selector:y,options:x,props:n,stylesCtx:i,rootSelector:o,styles:c,style:s,vars:u,varsResolver:f,headless:v,withStylesTransform:h})})}function qn(t,e,n){var o;const i=xr(),r=(o=i.components[t])==null?void 0:o.defaultProps,s=typeof r=="function"?r(i):r;return{...e,...s,...yp(n)}}function rf(t){return Bt(t).reduce((e,n)=>t[n]!==void 0?`${e}${XE(n)}:${t[n]};`:e,"").trim()}function qT({selector:t,styles:e,media:n,container:i}){const r=e?rf(e):"",s=Array.isArray(n)?n.map(a=>`@media${a.query}{${t}{${rf(a.styles)}}}`):[],o=Array.isArray(i)?i.map(a=>`@container ${a.query}{${t}{${rf(a.styles)}}}`):[];return`${r?`${t}{${r}}`:""}${s.join("")}${o.join("")}`.trim()}function Fy(t){const e=wp();return xe.jsx("style",{"data-mantine-styles":"inline",nonce:e==null?void 0:e(),dangerouslySetInnerHTML:{__html:qT(t)}})}function ZT(t){const{m:e,mx:n,my:i,mt:r,mb:s,ml:o,mr:a,me:l,ms:c,p:u,px:f,py:d,pt:p,pb:g,pl:v,pr:m,pe:h,ps:_,bd:y,bg:x,c:b,opacity:A,ff:w,fz:C,fw:E,lts:S,ta:L,lh:H,fs:B,tt:X,td:W,w:G,miw:K,maw:I,h:$,mih:j,mah:ie,bgsz:Me,bgp:Xe,bgr:V,bga:ne,pos:de,top:fe,left:Ae,bottom:Ie,right:ze,inset:ut,display:P,flex:vt,hiddenFrom:Ke,visibleFrom:qe,lightHidden:Ee,darkHidden:_t,sx:Ce,...Ne}=t;return{styleProps:yp({m:e,mx:n,my:i,mt:r,mb:s,ml:o,mr:a,me:l,ms:c,p:u,px:f,py:d,pt:p,pb:g,pl:v,pr:m,pe:h,ps:_,bd:y,bg:x,c:b,opacity:A,ff:w,fz:C,fw:E,lts:S,ta:L,lh:H,fs:B,tt:X,td:W,w:G,miw:K,maw:I,h:$,mih:j,mah:ie,bgsz:Me,bgp:Xe,bgr:V,bga:ne,pos:de,top:fe,left:Ae,bottom:Ie,right:ze,inset:ut,display:P,flex:vt,hiddenFrom:Ke,visibleFrom:qe,lightHidden:Ee,darkHidden:_t,sx:Ce}),rest:Ne}}const QT={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};function Cp(t,e){const n=Ha({color:t,theme:e});return n.color==="dimmed"?"var(--mantine-color-dimmed)":n.color==="bright"?"var(--mantine-color-bright)":n.variable?`var(${n.variable})`:n.color}function JT(t,e){const n=Ha({color:t,theme:e});return n.isThemeColor&&n.shade===void 0?`var(--mantine-color-${n.color}-text)`:Cp(t,e)}function e1(t,e){if(typeof t=="number")return Z(t);if(typeof t=="string"){const[n,i,...r]=t.split(" ").filter(o=>o.trim()!=="");let s=`${Z(n)}`;return i&&(s+=` ${i}`),r.length>0&&(s+=` ${Cp(r.join(" "),e)}`),s.trim()}return t}const Ig={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};function t1(t){return typeof t=="string"&&t in Ig?Ig[t]:t}const n1=["h1","h2","h3","h4","h5","h6"];function i1(t,e){return typeof t=="string"&&t in e.fontSizes?`var(--mantine-font-size-${t})`:typeof t=="string"&&n1.includes(t)?`var(--mantine-${t}-font-size)`:typeof t=="number"||typeof t=="string"?Z(t):t}function r1(t){return t}const s1=["h1","h2","h3","h4","h5","h6"];function o1(t,e){return typeof t=="string"&&t in e.lineHeights?`var(--mantine-line-height-${t})`:typeof t=="string"&&s1.includes(t)?`var(--mantine-${t}-line-height)`:t}function a1(t){return typeof t=="number"?Z(t):t}function l1(t,e){if(typeof t=="number")return Z(t);if(typeof t=="string"){const n=t.replace("-","");if(!(n in e.spacing))return Z(t);const i=`--mantine-spacing-${n}`;return t.startsWith("-")?`calc(var(${i}) * -1)`:`var(${i})`}return t}const sf={color:Cp,textColor:JT,fontSize:i1,spacing:l1,identity:r1,size:a1,lineHeight:o1,fontFamily:t1,border:e1};function Ng(t){return t.replace("(min-width: ","").replace("em)","")}function c1({media:t,...e}){const i=Object.keys(t).sort((r,s)=>Number(Ng(r))-Number(Ng(s))).map(r=>({query:r,styles:t[r]}));return{...e,media:i}}function u1(t){if(typeof t!="object"||t===null)return!1;const e=Object.keys(t);return!(e.length===1&&e[0]==="base")}function f1(t){return typeof t=="object"&&t!==null?"base"in t?t.base:void 0:t}function d1(t){return typeof t=="object"&&t!==null?Bt(t).filter(e=>e!=="base"):[]}function h1(t,e){return typeof t=="object"&&t!==null&&e in t?t[e]:t}function p1({styleProps:t,data:e,theme:n}){return c1(Bt(t).reduce((i,r)=>{if(r==="hiddenFrom"||r==="visibleFrom"||r==="sx")return i;const s=e[r],o=Array.isArray(s.property)?s.property:[s.property],a=f1(t[r]);if(!u1(t[r]))return o.forEach(c=>{i.inlineStyles[c]=sf[s.type](a,n)}),i;i.hasResponsiveStyles=!0;const l=d1(t[r]);return o.forEach(c=>{a&&(i.styles[c]=sf[s.type](a,n)),l.forEach(u=>{const f=`(min-width: ${n.breakpoints[u]})`;i.media[f]={...i.media[f],[c]:sf[s.type](h1(t[r],u),n)}})}),i},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function m1(){return`__m__-${ae.useId().replace(/:/g,"")}`}function Oy(t,e){return Array.isArray(t)?[...t].reduce((n,i)=>({...n,...Oy(i,e)}),{}):typeof t=="function"?t(e):t??{}}function ky(t){return t.startsWith("data-")?t:`data-${t}`}function g1(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return i===void 0||i===""||i===!1||i===null||(e[ky(n)]=t[n]),e},{})}function By(t){return t?typeof t=="string"?{[ky(t)]:!0}:Array.isArray(t)?[...t].reduce((e,n)=>({...e,...By(n)}),{}):g1(t):null}function zd(t,e){return Array.isArray(t)?[...t].reduce((n,i)=>({...n,...zd(i,e)}),{}):typeof t=="function"?t(e):t??{}}function v1({theme:t,style:e,vars:n,styleProps:i}){const r=zd(e,t),s=zd(n,t);return{...r,...s,...i}}const zy=ae.forwardRef(({component:t,style:e,__vars:n,className:i,variant:r,mod:s,size:o,hiddenFrom:a,visibleFrom:l,lightHidden:c,darkHidden:u,renderRoot:f,__size:d,...p},g)=>{var C;const v=xr(),m=t||"div",{styleProps:h,rest:_}=ZT(p),y=dT(),x=(C=y==null?void 0:y())==null?void 0:C(h.sx),b=m1(),A=p1({styleProps:h,theme:v,data:QT}),w={ref:g,style:v1({theme:v,style:e,vars:n,styleProps:A.inlineStyles}),className:Eo(i,x,{[b]:A.hasResponsiveStyles,"mantine-light-hidden":c,"mantine-dark-hidden":u,[`mantine-hidden-from-${a}`]:a,[`mantine-visible-from-${l}`]:l}),"data-variant":r,"data-size":Cy(o)?void 0:o||void 0,size:d,...By(s),..._};return xe.jsxs(xe.Fragment,{children:[A.hasResponsiveStyles&&xe.jsx(Fy,{selector:`.${b}`,styles:A.styles,media:A.media}),typeof f=="function"?f(w):xe.jsx(m,{...w})]})});zy.displayName="@mantine/core/Box";const tn=zy;function Hy(t){return t}function Sr(t){const e=ae.forwardRef(t);return e.extend=Hy,e.withProps=n=>{const i=ae.forwardRef((r,s)=>xe.jsx(e,{...n,...r,ref:s}));return i.extend=e.extend,i.displayName=`WithProps(${e.displayName})`,i},e}function Pp(t){const e=ae.forwardRef(t);return e.withProps=n=>{const i=ae.forwardRef((r,s)=>xe.jsx(e,{...n,...r,ref:s}));return i.extend=e.extend,i.displayName=`WithProps(${e.displayName})`,i},e.extend=Hy,e}function _1(t){if(!t||typeof t=="string")return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function of(t){return t!=null&&t.current?t.current.scrollHeight:"auto"}const Bo=typeof window<"u"&&window.requestAnimationFrame;function y1({transitionDuration:t,transitionTimingFunction:e="ease",onTransitionEnd:n=()=>{},opened:i}){const r=ae.useRef(null),s=0,o={display:"none",height:0,overflow:"hidden"},[a,l]=ae.useState(i?{}:o),c=g=>{yy.flushSync(()=>l(g))},u=g=>{c(v=>({...v,...g}))};function f(g){const v=t||_1(g);return{transition:`height ${v}ms ${e}, opacity ${v}ms ${e}`}}tT(()=>{typeof Bo=="function"&&Bo(i?()=>{u({willChange:"height",display:"block",overflow:"hidden"}),Bo(()=>{const g=of(r);u({...f(g),height:g})})}:()=>{const g=of(r);u({...f(g),willChange:"height",height:g}),Bo(()=>u({height:s,overflow:"hidden"}))})},[i]);const d=g=>{if(!(g.target!==r.current||g.propertyName!=="height"))if(i){const v=of(r);v===a.height?c({}):u({height:v}),n()}else a.height===s&&(c(o),n())};function p({style:g={},refKey:v="ref",...m}={}){const h=m[v];return{"aria-hidden":!i,...m,[v]:rT(r,h),onTransitionEnd:d,style:{boxSizing:"border-box",...g,...a}}}return p}const x1={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},Vy=Sr((t,e)=>{const{children:n,in:i,transitionDuration:r,transitionTimingFunction:s,style:o,onTransitionEnd:a,animateOpacity:l,...c}=qn("Collapse",x1,t),u=xr(),f=sT(),p=(u.respectReducedMotion?f:!1)?0:r,g=y1({opened:i,transitionDuration:p,transitionTimingFunction:s,onTransitionEnd:a});return p===0?i?xe.jsx(tn,{...c,children:n}):null:xe.jsx(tn,{...g({style:{opacity:i||!l?1:0,transition:l?`opacity ${p}ms ${s}`:"none",...Oy(o,u)},ref:e,...c}),children:n})});Vy.displayName="@mantine/core/Collapse";var Gy={root:"m_87cf2631"};const S1={__staticSelector:"UnstyledButton"},Lp=Pp((t,e)=>{const n=qn("UnstyledButton",S1,t),{className:i,component:r="button",__staticSelector:s,unstyled:o,classNames:a,styles:l,style:c,...u}=n,f=cu({name:s,props:n,classes:Gy,className:i,style:c,classNames:a,styles:l,unstyled:o});return xe.jsx(tn,{...f("root",{focusable:!0}),component:r,ref:e,type:r==="button"?"button":void 0,...u})});Lp.classes=Gy;Lp.displayName="@mantine/core/UnstyledButton";function M1(t){return ae.Children.toArray(t).filter(Boolean)}var Wy={root:"m_4081bf90"};const E1={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},T1=(t,{grow:e,preventGrowOverflow:n,gap:i,align:r,justify:s,wrap:o},{childWidth:a})=>({root:{"--group-child-width":e&&n?a:void 0,"--group-gap":Sp(i),"--group-align":r,"--group-justify":s,"--group-wrap":o}}),Ip=Sr((t,e)=>{const n=qn("Group",E1,t),{classNames:i,className:r,style:s,styles:o,unstyled:a,children:l,gap:c,align:u,justify:f,wrap:d,grow:p,preventGrowOverflow:g,vars:v,variant:m,__size:h,mod:_,...y}=n,x=M1(l),b=x.length,A=Sp(c??"md"),C={childWidth:`calc(${100/b}% - (${A} - ${A} / ${b}))`},E=cu({name:"Group",props:n,stylesCtx:C,className:r,style:s,classes:Wy,classNames:i,styles:o,unstyled:a,vars:v,varsResolver:T1});return xe.jsx(tn,{...E("root"),ref:e,variant:m,mod:[{grow:p},_],size:h,...y,children:x})});Ip.classes=Wy;Ip.displayName="@mantine/core/Group";var Xy={root:"m_b6d8b162"};function w1(t){if(t==="start")return"start";if(t==="end"||t)return"end"}const A1={inherit:!1},b1=(t,{variant:e,lineClamp:n,gradient:i,size:r,color:s})=>({root:{"--text-fz":qE(r),"--text-lh":ZE(r),"--text-gradient":e==="gradient"?kd(i,t):void 0,"--text-line-clamp":typeof n=="number"?n.toString():void 0,"--text-color":s?Od(s,t):void 0}}),Np=Pp((t,e)=>{const n=qn("Text",A1,t),{lineClamp:i,truncate:r,inline:s,inherit:o,gradient:a,span:l,__staticSelector:c,vars:u,className:f,style:d,classNames:p,styles:g,unstyled:v,variant:m,mod:h,size:_,...y}=n,x=cu({name:["Text",c],props:n,classes:Xy,className:f,style:d,classNames:p,styles:g,unstyled:v,vars:u,varsResolver:b1});return xe.jsx(tn,{...x("root",{focusable:!0}),ref:e,component:l?"span":"p",variant:m,mod:[{"data-truncate":w1(r),"data-line-clamp":typeof i=="number","data-inline":s,"data-inherit":o},h],size:_,...y})});Np.classes=Xy;Np.displayName="@mantine/core/Text";const[R1,To]=jE("AppShell was not found in tree");var Mr={root:"m_89ab340",navbar:"m_45252eee",aside:"m_9cdde9a",header:"m_3b16f56b",main:"m_8983817",footer:"m_3840c879",section:"m_6dcfc7c7"};const C1={},Dp=Sr((t,e)=>{const n=qn("AppShellAside",C1,t),{classNames:i,className:r,style:s,styles:o,unstyled:a,vars:l,withBorder:c,zIndex:u,mod:f,...d}=n,p=To();return p.disabled?null:xe.jsx(tn,{component:"aside",ref:e,mod:[{"with-border":c??p.withBorder},f],...p.getStyles("aside",{className:r,classNames:i,styles:o,style:s}),...d,__vars:{"--app-shell-aside-z-index":`calc(${u??p.zIndex} + 1)`}})});Dp.classes=Mr;Dp.displayName="@mantine/core/AppShellAside";const P1={},Up=Sr((t,e)=>{var g;const n=qn("AppShellFooter",P1,t),{classNames:i,className:r,style:s,styles:o,unstyled:a,vars:l,withBorder:c,zIndex:u,mod:f,...d}=n,p=To();return p.disabled?null:xe.jsx(tn,{component:"footer",ref:e,mod:[{"with-border":c??p.withBorder},f],...p.getStyles("footer",{className:Eo({[vp.classNames.zeroRight]:p.offsetScrollbars},r),classNames:i,styles:o,style:s}),...d,__vars:{"--app-shell-footer-z-index":(g=u??p.zIndex)==null?void 0:g.toString()}})});Up.classes=Mr;Up.displayName="@mantine/core/AppShellFooter";const L1={},uu=Sr((t,e)=>{var g;const n=qn("AppShellHeader",L1,t),{classNames:i,className:r,style:s,styles:o,unstyled:a,vars:l,withBorder:c,zIndex:u,mod:f,...d}=n,p=To();return p.disabled?null:xe.jsx(tn,{component:"header",ref:e,mod:[{"with-border":c??p.withBorder},f],...p.getStyles("header",{className:Eo({[vp.classNames.zeroRight]:p.offsetScrollbars},r),classNames:i,styles:o,style:s}),...d,__vars:{"--app-shell-header-z-index":(g=u??p.zIndex)==null?void 0:g.toString()}})});uu.classes=Mr;uu.displayName="@mantine/core/AppShellHeader";const I1={},Fp=Sr((t,e)=>{const n=qn("AppShellMain",I1,t),{classNames:i,className:r,style:s,styles:o,vars:a,...l}=n,c=To();return xe.jsx(tn,{component:"main",ref:e,...c.getStyles("main",{className:r,style:s,classNames:i,styles:o}),...l})});Fp.classes=Mr;Fp.displayName="@mantine/core/AppShellMain";function Va(t){return typeof t=="object"?t.base:t}function Ga(t){const e=typeof t=="object"&&t!==null&&typeof t.base<"u"&&Object.keys(t).length===1;return typeof t=="number"||typeof t=="string"||e}function Wa(t){return!(typeof t!="object"||t===null||Object.keys(t).length===1&&"base"in t)}function N1({baseStyles:t,minMediaStyles:e,maxMediaStyles:n,aside:i,theme:r}){var l,c,u;const s=i==null?void 0:i.width,o="translateX(var(--app-shell-aside-width))",a="translateX(calc(var(--app-shell-aside-width) * -1))";if(i!=null&&i.breakpoint&&!((l=i==null?void 0:i.collapsed)!=null&&l.mobile)&&(n[i==null?void 0:i.breakpoint]=n[i==null?void 0:i.breakpoint]||{},n[i==null?void 0:i.breakpoint]["--app-shell-aside-width"]="100%",n[i==null?void 0:i.breakpoint]["--app-shell-aside-offset"]="0px"),Ga(s)){const f=Z(Va(s));t["--app-shell-aside-width"]=f,t["--app-shell-aside-offset"]=f}if(Wa(s)&&(typeof s.base<"u"&&(t["--app-shell-aside-width"]=Z(s.base),t["--app-shell-aside-offset"]=Z(s.base)),Bt(s).forEach(f=>{f!=="base"&&(e[f]=e[f]||{},e[f]["--app-shell-aside-width"]=Z(s[f]),e[f]["--app-shell-aside-offset"]=Z(s[f]))})),(c=i==null?void 0:i.collapsed)!=null&&c.desktop){const f=i.breakpoint;e[f]=e[f]||{},e[f]["--app-shell-aside-transform"]=o,e[f]["--app-shell-aside-transform-rtl"]=a,e[f]["--app-shell-aside-offset"]="0px !important"}if((u=i==null?void 0:i.collapsed)!=null&&u.mobile){const f=Mp(i.breakpoint,r)-.1;n[f]=n[f]||{},n[f]["--app-shell-aside-width"]="100%",n[f]["--app-shell-aside-offset"]="0px",n[f]["--app-shell-aside-transform"]=o,n[f]["--app-shell-aside-transform-rtl"]=a}}function D1({baseStyles:t,minMediaStyles:e,footer:n}){const i=n==null?void 0:n.height,r="translateY(var(--app-shell-footer-height))",s=(n==null?void 0:n.offset)??!0;if(Ga(i)){const o=Z(Va(i));t["--app-shell-footer-height"]=o,s&&(t["--app-shell-footer-offset"]=o)}Wa(i)&&(typeof i.base<"u"&&(t["--app-shell-footer-height"]=Z(i.base),s&&(t["--app-shell-footer-offset"]=Z(i.base))),Bt(i).forEach(o=>{o!=="base"&&(e[o]=e[o]||{},e[o]["--app-shell-footer-height"]=Z(i[o]),s&&(e[o]["--app-shell-footer-offset"]=Z(i[o])))})),n!=null&&n.collapsed&&(t["--app-shell-footer-transform"]=r,t["--app-shell-footer-offset"]="0px !important")}function U1({baseStyles:t,minMediaStyles:e,header:n}){const i=n==null?void 0:n.height,r="translateY(calc(var(--app-shell-header-height) * -1))",s=(n==null?void 0:n.offset)??!0;if(Ga(i)){const o=Z(Va(i));t["--app-shell-header-height"]=o,s&&(t["--app-shell-header-offset"]=o)}Wa(i)&&(typeof i.base<"u"&&(t["--app-shell-header-height"]=Z(i.base),s&&(t["--app-shell-header-offset"]=Z(i.base))),Bt(i).forEach(o=>{o!=="base"&&(e[o]=e[o]||{},e[o]["--app-shell-header-height"]=Z(i[o]),s&&(e[o]["--app-shell-header-offset"]=Z(i[o])))})),n!=null&&n.collapsed&&(t["--app-shell-header-transform"]=r,t["--app-shell-header-offset"]="0px !important")}function F1({baseStyles:t,minMediaStyles:e,maxMediaStyles:n,navbar:i,theme:r}){var l,c,u;const s=i==null?void 0:i.width,o="translateX(calc(var(--app-shell-navbar-width) * -1))",a="translateX(var(--app-shell-navbar-width))";if(i!=null&&i.breakpoint&&!((l=i==null?void 0:i.collapsed)!=null&&l.mobile)&&(n[i==null?void 0:i.breakpoint]=n[i==null?void 0:i.breakpoint]||{},n[i==null?void 0:i.breakpoint]["--app-shell-navbar-width"]="100%",n[i==null?void 0:i.breakpoint]["--app-shell-navbar-offset"]="0px"),Ga(s)){const f=Z(Va(s));t["--app-shell-navbar-width"]=f,t["--app-shell-navbar-offset"]=f}if(Wa(s)&&(typeof s.base<"u"&&(t["--app-shell-navbar-width"]=Z(s.base),t["--app-shell-navbar-offset"]=Z(s.base)),Bt(s).forEach(f=>{f!=="base"&&(e[f]=e[f]||{},e[f]["--app-shell-navbar-width"]=Z(s[f]),e[f]["--app-shell-navbar-offset"]=Z(s[f]))})),(c=i==null?void 0:i.collapsed)!=null&&c.desktop){const f=i.breakpoint;e[f]=e[f]||{},e[f]["--app-shell-navbar-transform"]=o,e[f]["--app-shell-navbar-transform-rtl"]=a,e[f]["--app-shell-navbar-offset"]="0px !important"}if((u=i==null?void 0:i.collapsed)!=null&&u.mobile){const f=Mp(i.breakpoint,r)-.1;n[f]=n[f]||{},n[f]["--app-shell-navbar-width"]="100%",n[f]["--app-shell-navbar-offset"]="0px",n[f]["--app-shell-navbar-transform"]=o,n[f]["--app-shell-navbar-transform-rtl"]=a}}function af(t){return Number(t)===0?"0px":Sp(t)}function O1({padding:t,baseStyles:e,minMediaStyles:n}){Ga(t)&&(e["--app-shell-padding"]=af(Va(t))),Wa(t)&&(t.base&&(e["--app-shell-padding"]=af(t.base)),Bt(t).forEach(i=>{i!=="base"&&(n[i]=n[i]||{},n[i]["--app-shell-padding"]=af(t[i]))}))}function k1({navbar:t,header:e,footer:n,aside:i,padding:r,theme:s}){const o={},a={},l={};F1({baseStyles:l,minMediaStyles:o,maxMediaStyles:a,navbar:t,theme:s}),N1({baseStyles:l,minMediaStyles:o,maxMediaStyles:a,aside:i,theme:s}),U1({baseStyles:l,minMediaStyles:o,header:e}),D1({baseStyles:l,minMediaStyles:o,footer:n}),O1({baseStyles:l,minMediaStyles:o,padding:r});const c=wg(Bt(o),s).map(d=>({query:`(min-width: ${Fc(d.px)})`,styles:o[d.value]})),u=wg(Bt(a),s).map(d=>({query:`(max-width: ${Fc(d.px)})`,styles:a[d.value]})),f=[...c,...u];return{baseStyles:l,media:f}}function B1({navbar:t,header:e,aside:n,footer:i,padding:r}){const s=xr(),o=yr(),{media:a,baseStyles:l}=k1({navbar:t,header:e,footer:i,aside:n,padding:r,theme:s});return xe.jsx(Fy,{media:a,styles:l,selector:o.cssVariablesSelector})}const z1={},Op=Sr((t,e)=>{const n=qn("AppShellNavbar",z1,t),{classNames:i,className:r,style:s,styles:o,unstyled:a,vars:l,withBorder:c,zIndex:u,mod:f,...d}=n,p=To();return p.disabled?null:xe.jsx(tn,{component:"nav",ref:e,mod:[{"with-border":c??p.withBorder},f],...p.getStyles("navbar",{className:r,classNames:i,styles:o,style:s}),...d,__vars:{"--app-shell-navbar-z-index":`calc(${u??p.zIndex} + 1)`}})});Op.classes=Mr;Op.displayName="@mantine/core/AppShellNavbar";const H1={},kp=Pp((t,e)=>{const n=qn("AppShellSection",H1,t),{classNames:i,className:r,style:s,styles:o,vars:a,grow:l,mod:c,...u}=n,f=To();return xe.jsx(tn,{ref:e,mod:[{grow:l},c],...f.getStyles("section",{className:r,style:s,classNames:i,styles:o}),...u})});kp.classes=Mr;kp.displayName="@mantine/core/AppShellSection";function V1({transitionDuration:t,disabled:e}){const[n,i]=ae.useState(!0),r=ae.useRef(),s=ae.useRef();return nT("resize",()=>{i(!0),clearTimeout(r.current),r.current=window.setTimeout(()=>i(!1),200)}),Ep(()=>{ae.startTransition(()=>{i(!0),clearTimeout(s.current),s.current=window.setTimeout(()=>i(!1),t||0)})},[e,t]),n}const G1={withBorder:!0,offsetScrollbars:!0,padding:0,transitionDuration:200,transitionTimingFunction:"ease",zIndex:KE("app")},W1=(t,{transitionDuration:e,transitionTimingFunction:n})=>({root:{"--app-shell-transition-duration":`${e}ms`,"--app-shell-transition-timing-function":n}}),$n=Sr((t,e)=>{const n=qn("AppShell",G1,t),{classNames:i,className:r,style:s,styles:o,unstyled:a,vars:l,navbar:c,withBorder:u,padding:f,transitionDuration:d,transitionTimingFunction:p,header:g,zIndex:v,layout:m,disabled:h,aside:_,footer:y,offsetScrollbars:x,mod:b,...A}=n,w=cu({name:"AppShell",classes:Mr,props:n,className:r,style:s,classNames:i,styles:o,unstyled:a,vars:l,varsResolver:W1}),C=V1({disabled:h,transitionDuration:d});return xe.jsxs(R1,{value:{getStyles:w,withBorder:u,zIndex:v,disabled:h,offsetScrollbars:x},children:[xe.jsx(B1,{navbar:c,header:g,aside:_,footer:y,padding:f}),xe.jsx(tn,{ref:e,...w("root"),mod:[{resizing:C,layout:m,disabled:h},b],...A})]})});$n.classes=Mr;$n.displayName="@mantine/core/AppShell";$n.Navbar=Op;$n.Header=uu;$n.Main=Fp;$n.Aside=Dp;$n.Footer=Up;$n.Section=kp;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="168",X1=0,Dg=1,$1=2,$y=1,j1=2,Mi=3,ci=0,un=1,Hn=2,fr=0,qs=1,Ug=2,Fg=3,Og=4,Y1=5,Or=100,K1=101,q1=102,Z1=103,Q1=104,J1=200,ew=201,tw=202,nw=203,Hd=204,Vd=205,iw=206,rw=207,sw=208,ow=209,aw=210,lw=211,cw=212,uw=213,fw=214,dw=0,hw=1,pw=2,Oc=3,mw=4,gw=5,vw=6,_w=7,jy=0,yw=1,xw=2,dr=0,Sw=1,Mw=2,Ew=3,Tw=4,ww=5,Aw=6,bw=7,kg="attached",Rw="detached",Yy=300,lo=301,co=302,kc=303,Gd=304,du=306,uo=1e3,si=1001,fo=1002,Qt=1003,Ky=1004,ea=1005,gn=1006,sc=1007,Ri=1008,Oi=1009,qy=1010,Zy=1011,Ia=1012,Bp=1013,Qr=1014,Gn=1015,Xa=1016,zp=1017,Hp=1018,ho=1020,Qy=35902,Jy=1021,ex=1022,Cn=1023,tx=1024,nx=1025,Zs=1026,po=1027,Vp=1028,Gp=1029,ix=1030,Wp=1031,Xp=1033,oc=33776,ac=33777,lc=33778,cc=33779,Wd=35840,Xd=35841,$d=35842,jd=35843,Yd=36196,Kd=37492,qd=37496,Zd=37808,Qd=37809,Jd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,ch=37820,uh=37821,uc=36492,fh=36494,dh=36495,rx=36283,hh=36284,ph=36285,mh=36286,Na=2300,Da=2301,lf=2302,Bg=2400,zg=2401,Hg=2402,Cw=2500,Pw=0,sx=1,gh=2,Lw=3200,Iw=3201,ox=0,Nw=1,Ji="",ei="srgb",Er="srgb-linear",$p="display-p3",hu="display-p3-linear",Bc="linear",lt="srgb",zc="rec709",Hc="p3",us=7680,Vg=519,Dw=512,Uw=513,Fw=514,ax=515,Ow=516,kw=517,Bw=518,zw=519,vh=35044,Gg="300 es",Ci=2e3,Vc=2001;class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const fa=Math.PI/180,mo=180/Math.PI;function jn(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function jp(t,e){return(t%e+e)%e}function Hw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Vw(t,e,n){return t!==e?(n-t)/(e-t):0}function da(t,e,n){return(1-n)*t+n*e}function Gw(t,e,n,i){return da(t,e,1-Math.exp(-n*i))}function Ww(t,e=1){return e-Math.abs(jp(t,e*2)-e)}function Xw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function $w(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Yw(t,e){return t+Math.random()*(e-t)}function Kw(t){return t*(.5-Math.random())}function qw(t){t!==void 0&&(Wg=t);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zw(t){return t*fa}function Qw(t){return t*mo}function Jw(t){return(t&t-1)===0&&t!==0}function eA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function tA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function nA(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const iA={DEG2RAD:fa,RAD2DEG:mo,generateUUID:jn,clamp:$t,euclideanModulo:jp,mapLinear:Hw,inverseLerp:Vw,lerp:da,damp:Gw,pingpong:Ww,smoothstep:Xw,smootherstep:$w,randInt:jw,randFloat:Yw,randFloatSpread:Kw,seededRandom:qw,degToRad:Zw,radToDeg:Qw,isPowerOfTwo:Jw,ceilPowerOfTwo:eA,floorPowerOfTwo:tA,setQuaternionFromProperEuler:nA,normalize:nt,denormalize:Vn};class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],y=r[4],x=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*v+a*_+l*b,s[3]=o*m+a*y+l*A,s[6]=o*h+a*x+l*w,s[1]=c*v+u*_+f*b,s[4]=c*m+u*y+f*A,s[7]=c*h+u*x+f*w,s[2]=d*v+p*_+g*b,s[5]=d*m+p*y+g*A,s[8]=d*h+p*x+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cf.makeScale(e,n)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,n){return this.premultiply(cf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new ke;function lx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rA(){const t=Ua("canvas");return t.style.display="block",t}const Xg={};function Qs(t){t in Xg||(Xg[t]=!0,console.warn(t))}function sA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const $g=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jg=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[Er]:{transfer:Bc,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ei]:{transfer:lt,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hu]:{transfer:Bc,primaries:Hc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(jg),fromReference:t=>t.applyMatrix3($g)},[$p]:{transfer:lt,primaries:Hc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(jg),fromReference:t=>t.applyMatrix3($g).convertLinearToSRGB()}},oA=new Set([Er,hu]),tt={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!oA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=zo[e].toReference,r=zo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return zo[t].primaries},getTransfer:function(t){return t===Ji?Bc:zo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(zo[e].luminanceCoefficients)}};function Js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class aA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Ua("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ua("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Js(n[i]/255)*255):n[i]=Js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lA=0;class cx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ff(r[o].image)):s.push(ff(r[o]))}else s=ff(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cA=0;class Dt extends ns{constructor(e=Dt.DEFAULT_IMAGE,n=Dt.DEFAULT_MAPPING,i=si,r=si,s=gn,o=Ri,a=Cn,l=Oi,c=Dt.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=jn(),this.name="",this.source=new cx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Yy;Dt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(h+1)/2,A=(u+d)/4,w=(f+v)/4,C=(g+m)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=w/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=C/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uA extends ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends uA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ux extends Dt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fA extends Dt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,h*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*_;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,f=f*m+v*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const df=new U,Yg=new Tr;class Bi{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),_l.subVectors(this.max,Ho),ds.subVectors(e.a,Ho),hs.subVectors(e.b,Ho),ps.subVectors(e.c,Ho),Vi.subVectors(hs,ds),Gi.subVectors(ps,hs),Ar.subVectors(ds,ps);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-Ar.z,Ar.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,Ar.z,0,-Ar.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-Ar.y,Ar.x,0];return!hf(n,ds,hs,ps,_l)||(n=[1,0,0,0,1,0,0,0,1],!hf(n,ds,hs,ps,_l))?!1:(yl.crossVectors(Vi,Gi),n=[yl.x,yl.y,yl.z],hf(n,ds,hs,ps,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,vl=new Bi,ds=new U,hs=new U,ps=new U,Vi=new U,Gi=new U,Ar=new U,Ho=new U,_l=new U,yl=new U,br=new U;function hf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dA=new Bi,Vo=new U,pf=new U;class ui{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(pf)),this.expandByPoint(Vo.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new U,mf=new U,xl=new U,Wi=new U,gf=new U,Sl=new U,vf=new U;class pu{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mf.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(mf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xl),a=Wi.dot(this.direction),l=-Wi.dot(xl),c=Wi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(mf).addScaledVector(xl,d),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){gf.subVectors(n,e),Sl.subVectors(i,e),vf.crossVectors(gf,Sl);let o=this.direction.dot(vf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(Wi,Sl));if(l<0)return null;const c=a*this.direction.dot(gf.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(vf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hA,e,pA)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Xi.crossVectors(i,hn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Xi.crossVectors(i,hn)),Xi.normalize(),Ml.crossVectors(hn,Xi),r[0]=Xi.x,r[4]=Ml.x,r[8]=hn.x,r[1]=Xi.y,r[5]=Ml.y,r[9]=hn.y,r[2]=Xi.z,r[6]=Ml.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],y=i[7],x=i[11],b=i[15],A=r[0],w=r[4],C=r[8],E=r[12],S=r[1],L=r[5],H=r[9],B=r[13],X=r[2],W=r[6],G=r[10],K=r[14],I=r[3],$=r[7],j=r[11],ie=r[15];return s[0]=o*A+a*S+l*X+c*I,s[4]=o*w+a*L+l*W+c*$,s[8]=o*C+a*H+l*G+c*j,s[12]=o*E+a*B+l*K+c*ie,s[1]=u*A+f*S+d*X+p*I,s[5]=u*w+f*L+d*W+p*$,s[9]=u*C+f*H+d*G+p*j,s[13]=u*E+f*B+d*K+p*ie,s[2]=g*A+v*S+m*X+h*I,s[6]=g*w+v*L+m*W+h*$,s[10]=g*C+v*H+m*G+h*j,s[14]=g*E+v*B+m*K+h*ie,s[3]=_*A+y*S+x*X+b*I,s[7]=_*w+y*L+x*W+b*$,s[11]=_*C+y*H+x*G+b*j,s[15]=_*E+y*B+x*K+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,b=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,A=n*_+i*y+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=y*w,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*w,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*w,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(g*f*s-u*v*s-g*i*p+n*v*p+u*i*h-n*f*h)*w,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*h+n*a*h)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=b*w,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*w,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,_=l*c,y=l*u,x=l*f,b=i.x,A=i.y,w=i.z;return r[0]=(1-(v+h))*b,r[1]=(p+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(d+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+y)*w,r[9]=(m-_)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ms.set(r[0],r[1],r[2]).length();const o=ms.set(r[4],r[5],r[6]).length(),a=ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,u=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Ci)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Vc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,v;if(a===Ci)g=(o+s)*f,v=-2*f;else if(a===Vc)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ms=new U,Fn=new Be,hA=new U(0,0,0),pA=new U(1,1,1),Xi=new U,Ml=new U,hn=new U,Kg=new Be,qg=new Tr;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mA=0;const Zg=new U,gs=new Tr,vi=new Be,El=new U,Go=new U,gA=new U,vA=new Tr,Qg=new U(1,0,0),Jg=new U(0,1,0),ev=new U(0,0,1),tv={type:"added"},_A={type:"removed"},vs={type:"childadded",child:null},_f={type:"childremoved",child:null};class dt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mA++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new U,n=new Kn,i=new Tr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new ke}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Qg,e)}rotateY(e){return this.rotateOnAxis(Jg,e)}rotateZ(e){return this.rotateOnAxis(ev,e)}translateOnAxis(e,n){return Zg.copy(e).applyQuaternion(this.quaternion),this.position.add(Zg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qg,e)}translateY(e){return this.translateOnAxis(Jg,e)}translateZ(e){return this.translateOnAxis(ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Go,El,this.up):vi.lookAt(El,Go,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(vi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tv),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_A),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tv),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,gA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,vA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new U(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new U,_i=new U,yf=new U,yi=new U,_s=new U,ys=new U,nv=new U,xf=new U,Sf=new U,Mf=new U;class ri{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),_i.subVectors(i,n),yf.subVectors(e,n);const o=On.dot(On),a=On.dot(_i),l=On.dot(yf),c=_i.dot(_i),u=_i.dot(yf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),_i.subVectors(e,n),On.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),On.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),ys.subVectors(s,i),xf.subVectors(e,i);const l=_s.dot(xf),c=ys.dot(xf);if(l<=0&&c<=0)return n.copy(i);Sf.subVectors(e,r);const u=_s.dot(Sf),f=ys.dot(Sf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_s,o);Mf.subVectors(e,s);const p=_s.dot(Mf),g=ys.dot(Mf);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ys,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return nv.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(nv,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(_s,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=jp(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ef(o,s,e+1/3),this.g=Ef(o,s,e),this.b=Ef(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=dx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=uf(e.r),this.g=uf(e.g),this.b=uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round($t(Wt.r*255,0,255))*65536+Math.round($t(Wt.g*255,0,255))*256+Math.round($t(Wt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ei){tt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Tl);const i=da($i.h,Tl.h,n),r=da($i.s,Tl.s,n),s=da($i.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new De;De.NAMES=dx;let yA=0;class li extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=qs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Vd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vr extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=jy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new U,wl=new Ge;class en{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vn(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vn(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vn(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}}class hx extends en{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class px extends en{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Li extends en{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xA=0;const Tn=new Be,Tf=new dt,xs=new U,pn=new Bi,Wo=new Bi,Lt=new U;class fi extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?px:hx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Li(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(pn.min,Wo.min),pn.expandByPoint(Lt),Lt.addVectors(pn.max,Wo.max),pn.expandByPoint(Lt)):(pn.expandByPoint(Wo.min),pn.expandByPoint(Wo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Lt.add(xs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new U,l[C]=new U;const c=new U,u=new U,f=new U,d=new Ge,p=new Ge,g=new Ge,v=new U,m=new U;function h(C,E,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(v),a[E].add(v),a[S].add(v),l[C].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,E=_.length;C<E;++C){const S=_[C],L=S.start,H=S.count;for(let B=L,X=L+H;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new U,x=new U,b=new U,A=new U;function w(C){b.fromBufferAttribute(r,C),A.copy(b);const E=a[C];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(A,E);const L=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,E=_.length;C<E;++C){const S=_[C],L=S.start,H=S.count;for(let B=L,X=L+H;B<X;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new en(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iv=new Be,Rr=new pu,Al=new ui,rv=new U,Ss=new U,Ms=new U,Es=new U,wf=new U,bl=new U,Rl=new Ge,Cl=new Ge,Pl=new Ge,sv=new U,ov=new U,av=new U,Ll=new U,Il=new U;class _n extends dt{constructor(e=new fi,n=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(wf.fromBufferAttribute(f,e),o?bl.addScaledVector(wf,u):bl.addScaledVector(wf.sub(n),u))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Al.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Al,rv)===null||Rr.origin.distanceToSquared(rv)>(e.far-e.near)**2))&&(iv.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(iv),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const A=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);r=Nl(this,h,e,i,c,u,f,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Nl(this,o,e,i,c,u,f,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const A=x,w=x+1,C=x+2;r=Nl(this,h,e,i,c,u,f,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,y=m+1,x=m+2;r=Nl(this,o,e,i,c,u,f,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function SA(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ci,a),l===null)return null;Il.copy(a),Il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:t}}function Nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ss),t.getVertexPosition(l,Ms),t.getVertexPosition(c,Es);const u=SA(t,e,n,i,Ss,Ms,Es,Ll);if(u){r&&(Rl.fromBufferAttribute(r,a),Cl.fromBufferAttribute(r,l),Pl.fromBufferAttribute(r,c),u.uv=ri.getInterpolation(Ll,Ss,Ms,Es,Rl,Cl,Pl,new Ge)),s&&(Rl.fromBufferAttribute(s,a),Cl.fromBufferAttribute(s,l),Pl.fromBufferAttribute(s,c),u.uv1=ri.getInterpolation(Ll,Ss,Ms,Es,Rl,Cl,Pl,new Ge)),o&&(sv.fromBufferAttribute(o,a),ov.fromBufferAttribute(o,l),av.fromBufferAttribute(o,c),u.normal=ri.getInterpolation(Ll,Ss,Ms,Es,sv,ov,av,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};ri.getNormal(Ss,Ms,Es,f.normal),u.face=f}return u}class $a extends fi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(f,2));function g(v,m,h,_,y,x,b,A,w,C,E){const S=x/w,L=b/C,H=x/2,B=b/2,X=A/2,W=w+1,G=C+1;let K=0,I=0;const $=new U;for(let j=0;j<G;j++){const ie=j*L-B;for(let Me=0;Me<W;Me++){const Xe=Me*S-H;$[v]=Xe*_,$[m]=ie*y,$[h]=X,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[h]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(Me/w),f.push(1-j/C),K+=1}}for(let j=0;j<C;j++)for(let ie=0;ie<w;ie++){const Me=d+ie+W*j,Xe=d+ie+W*(j+1),V=d+(ie+1)+W*(j+1),ne=d+(ie+1)+W*j;l.push(Me,Xe,ne),l.push(Xe,V,ne),I+=6}a.addGroup(p,I,E),p+=I,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function MA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const EA={clone:go,merge:Kt};var TA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TA,this.fragmentShader=wA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=MA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gx extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new U,lv=new Ge,cv=new Ge;class Zt extends gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,lv,cv),n.subVectors(cv,lv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,ws=1;class AA extends dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Ts,ws,e,n);r.layers=this.layers,this.add(r);const s=new Zt(Ts,ws,e,n);s.layers=this.layers,this.add(s);const o=new Zt(Ts,ws,e,n);o.layers=this.layers,this.add(o);const a=new Zt(Ts,ws,e,n);a.layers=this.layers,this.add(a);const l=new Zt(Ts,ws,e,n);l.layers=this.layers,this.add(l);const c=new Zt(Ts,ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vx extends Dt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:lo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bA extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $a(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:fr});s.uniforms.tEquirect.value=n;const o=new _n(r,s),a=n.minFilter;return n.minFilter===Ri&&(n.minFilter=gn),new AA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Af=new U,RA=new U,CA=new ke;class Ur{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Af.subVectors(i,n).cross(RA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Af),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CA.getNormalMatrix(e),r=this.coplanarPoint(Af).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ui,Dl=new U;class Yp{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],_=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+g,x+_).normalize(),i[3].setComponents(l-o,d-u,m-g,x-_).normalize(),i[4].setComponents(l-a,d-f,m-v,x-y).normalize(),n===Ci)i[5].setComponents(l+a,d+f,m+v,x+y).normalize();else if(n===Vc)i[5].setComponents(a,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _x(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function PA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class mu extends fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const _=h*d-o;for(let y=0;y<c;y++){const x=y*f-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const y=_+c*h,x=_+c*(h+1),b=_+1+c*(h+1),A=_+1+c*h;p.push(y,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new Li(g,3)),this.setAttribute("normal",new Li(v,3)),this.setAttribute("uv",new Li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var LA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",lb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_b=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_R=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:LA,alphahash_pars_fragment:IA,alphamap_fragment:NA,alphamap_pars_fragment:DA,alphatest_fragment:UA,alphatest_pars_fragment:FA,aomap_fragment:OA,aomap_pars_fragment:kA,batching_pars_vertex:BA,batching_vertex:zA,begin_vertex:HA,beginnormal_vertex:VA,bsdfs:GA,iridescence_fragment:WA,bumpmap_pars_fragment:XA,clipping_planes_fragment:$A,clipping_planes_pars_fragment:jA,clipping_planes_pars_vertex:YA,clipping_planes_vertex:KA,color_fragment:qA,color_pars_fragment:ZA,color_pars_vertex:QA,color_vertex:JA,common:eb,cube_uv_reflection_fragment:tb,defaultnormal_vertex:nb,displacementmap_pars_vertex:ib,displacementmap_vertex:rb,emissivemap_fragment:sb,emissivemap_pars_fragment:ob,colorspace_fragment:ab,colorspace_pars_fragment:lb,envmap_fragment:cb,envmap_common_pars_fragment:ub,envmap_pars_fragment:fb,envmap_pars_vertex:db,envmap_physical_pars_fragment:Eb,envmap_vertex:hb,fog_vertex:pb,fog_pars_vertex:mb,fog_fragment:gb,fog_pars_fragment:vb,gradientmap_pars_fragment:_b,lightmap_pars_fragment:yb,lights_lambert_fragment:xb,lights_lambert_pars_fragment:Sb,lights_pars_begin:Mb,lights_toon_fragment:Tb,lights_toon_pars_fragment:wb,lights_phong_fragment:Ab,lights_phong_pars_fragment:bb,lights_physical_fragment:Rb,lights_physical_pars_fragment:Cb,lights_fragment_begin:Pb,lights_fragment_maps:Lb,lights_fragment_end:Ib,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Fb,map_fragment:Ob,map_pars_fragment:kb,map_particle_fragment:Bb,map_particle_pars_fragment:zb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Vb,morphinstance_vertex:Gb,morphcolor_vertex:Wb,morphnormal_vertex:Xb,morphtarget_pars_vertex:$b,morphtarget_vertex:jb,normal_fragment_begin:Yb,normal_fragment_maps:Kb,normal_pars_fragment:qb,normal_pars_vertex:Zb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:eR,clearcoat_normal_fragment_maps:tR,clearcoat_pars_fragment:nR,iridescence_pars_fragment:iR,opaque_fragment:rR,packing:sR,premultiplied_alpha_fragment:oR,project_vertex:aR,dithering_fragment:lR,dithering_pars_fragment:cR,roughnessmap_fragment:uR,roughnessmap_pars_fragment:fR,shadowmap_pars_fragment:dR,shadowmap_pars_vertex:hR,shadowmap_vertex:pR,shadowmask_pars_fragment:mR,skinbase_vertex:gR,skinning_pars_vertex:vR,skinning_vertex:_R,skinnormal_vertex:yR,specularmap_fragment:xR,specularmap_pars_fragment:SR,tonemapping_fragment:MR,tonemapping_pars_fragment:ER,transmission_fragment:TR,transmission_pars_fragment:wR,uv_pars_fragment:AR,uv_pars_vertex:bR,uv_vertex:RR,worldpos_vertex:CR,background_vert:PR,background_frag:LR,backgroundCube_vert:IR,backgroundCube_frag:NR,cube_vert:DR,cube_frag:UR,depth_vert:FR,depth_frag:OR,distanceRGBA_vert:kR,distanceRGBA_frag:BR,equirect_vert:zR,equirect_frag:HR,linedashed_vert:VR,linedashed_frag:GR,meshbasic_vert:WR,meshbasic_frag:XR,meshlambert_vert:$R,meshlambert_frag:jR,meshmatcap_vert:YR,meshmatcap_frag:KR,meshnormal_vert:qR,meshnormal_frag:ZR,meshphong_vert:QR,meshphong_frag:JR,meshphysical_vert:eC,meshphysical_frag:tC,meshtoon_vert:nC,meshtoon_frag:iC,points_vert:rC,points_frag:sC,shadow_vert:oC,shadow_frag:aC,sprite_vert:lC,sprite_frag:cC},ce={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ti={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:Kt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ul={r:0,b:0,g:0},Pr=new Kn,uC=new Be;function fC(t,e,n,i,r,s,o){const a=new De(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?h(a,l):x&&x.isColor&&(h(x,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===du)?(u===void 0&&(u=new _n(new $a(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:go(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(y.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uC.makeRotationFromEuler(Pr)),u.material.toneMapped=tt.getTransfer(x.colorSpace)!==lt,(f!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new mu(2,2),new mr({name:"BackgroundMaterial",uniforms:go(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,y){_.getRGB(Ul,mx(t)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:v,addToRenderList:m}}function dC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,H,B,X){let W=!1;const G=f(B,H,L);s!==G&&(s=G,c(s.object)),W=p(S,B,H,X),W&&g(S,B,H,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(S,L,H,B),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,L,H){const B=H.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let W=X[L.id];W===void 0&&(W={},X[L.id]=W);let G=W[B];return G===void 0&&(G=d(l()),W[B]=G),G}function d(S){const L=[],H=[],B=[];for(let X=0;X<n;X++)L[X]=0,H[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,L,H,B){const X=s.attributes,W=L.attributes;let G=0;const K=H.getAttributes();for(const I in K)if(K[I].location>=0){const j=X[I];let ie=W[I];if(ie===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(S,L,H,B){const X={},W=L.attributes;let G=0;const K=H.getAttributes();for(const I in K)if(K[I].location>=0){let j=W[I];j===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),X[I]=ie,G++}s.attributes=X,s.attributesNum=G,s.index=B}function v(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const H=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;H[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),X[S]!==L&&(t.vertexAttribDivisor(S,L),X[S]=L)}function _(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==S[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function y(S,L,H,B,X,W,G){G===!0?t.vertexAttribIPointer(S,L,H,X,W):t.vertexAttribPointer(S,L,H,B,X,W)}function x(S,L,H,B){v();const X=B.attributes,W=H.getAttributes(),G=L.defaultAttributeValues;for(const K in W){const I=W[K];if(I.location>=0){let $=X[K];if($===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const j=$.normalized,ie=$.itemSize,Me=e.get($);if(Me===void 0)continue;const Xe=Me.buffer,V=Me.type,ne=Me.bytesPerElement,de=V===t.INT||V===t.UNSIGNED_INT||$.gpuType===Bp;if($.isInterleavedBufferAttribute){const fe=$.data,Ae=fe.stride,Ie=$.offset;if(fe.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)h(I.location+ze,fe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<I.locationSize;ze++)m(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ze=0;ze<I.locationSize;ze++)y(I.location+ze,ie/I.locationSize,V,j,Ae*ne,(Ie+ie/I.locationSize*ze)*ne,de)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<I.locationSize;fe++)h(I.location+fe,$.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<I.locationSize;fe++)m(I.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let fe=0;fe<I.locationSize;fe++)y(I.location+fe,ie/I.locationSize,V,j,ie*ne,ie/I.locationSize*fe*ne,de)}}else if(G!==void 0){const j=G[K];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(I.location,j);break;case 3:t.vertexAttrib3fv(I.location,j);break;case 4:t.vertexAttrib4fv(I.location,j);break;default:t.vertexAttrib1fv(I.location,j)}}}}_()}function b(){C();for(const S in i){const L=i[S];for(const H in L){const B=L[H];for(const X in B)u(B[X].object),delete B[X];delete L[H]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const B=L[H];for(const X in B)u(B[X].object),delete B[X];delete L[H]}delete i[S.id]}function w(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const B=H[S.id];for(const X in B)u(B[X].object),delete B[X];delete H[S.id]}}function C(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function hC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<d.length;v++)n.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Cn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,maxSamples:b}}function mC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,y=_*4;let x=h.clippingState||null;l.value=x,x=u(g,d,y,p);for(let b=0;b!==y;++b)x[b]=n[b];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gC(t){let e=new WeakMap;function n(o,a){return a===kc?o.mapping=lo:a===Gd&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kc||a===Gd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kp extends gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=4,uv=[.125,.215,.35,.446,.526,.582],kr=20,bf=new Kp,fv=new De;let Rf=null,Cf=0,Pf=0,Lf=!1;const Fr=(1+Math.sqrt(5))/2,As=1/Fr,dv=[new U(-Fr,As,0),new U(Fr,As,0),new U(-As,0,Fr),new U(As,0,Fr),new U(0,Fr,-As),new U(0,Fr,As),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Cf,Pf),this._renderer.xr.enabled=Lf,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Xa,format:Cn,colorSpace:Er,depthBuffer:!1},r=pv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vC(s)),this._blurMaterial=_C(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,bf)}_sceneToCubeUV(e,n,i,r){const a=new Zt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(fv),u.toneMapping=dr,u.autoClear=!1;const p=new Vr({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new _n(new $a,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(fv),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Fl(r,_*y,h>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===lo||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dv[(r-s-1)%dv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const h=[];let _=0;for(let w=0;w<kr;++w){const C=w/v,E=Math.exp(-C*C/2);h.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-Vs?r-y+Vs:0),A=4*(this._cubeSize-x);Fl(n,b,A,3*x,2*x),l.setRenderTarget(n),l.render(f,bf)}}function vC(t){const e=[],n=[],i=[];let r=t;const s=t-Vs+1+uv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Vs?l=uv[o-t+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,E=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];_.set(E,v*g*A),y.set(d,m*g*A);const S=[A,A,A,A,A,A];x.set(S,h*g*A)}const b=new fi;b.setAttribute("position",new en(_,v)),b.setAttribute("uv",new en(y,m)),b.setAttribute("faceIndex",new en(x,h)),e.push(b),r>Vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pv(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _C(t,e,n){const i=new Float32Array(kr),r=new U(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function mv(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function gv(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function qp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kc||l===Gd,u=l===lo||l===co;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new hv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new hv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function SC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],A=_[y+1],w=_[y+2];d.push(b,A,A,w,w,b)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,A=y+1,w=y+2;d.push(b,A,A,w,w,b)}}else return;const m=new(lx(d)?px:hx)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function MC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_];for(let _=0;_<v.length;_++)n.update(h,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function EC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TC(t,e,n){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*f),C=new ux(w,b,A,f);C.type=Gn,C.needsUpdate=!0;const E=x*4;for(let L=0;L<f;L++){const H=h[L],B=_[L],X=y[L],W=b*A*4*L;for(let G=0;G<H.count;G++){const K=G*E;g===!0&&(r.fromBufferAttribute(H,G),w[W+K+0]=r.x,w[W+K+1]=r.y,w[W+K+2]=r.z,w[W+K+3]=0),v===!0&&(r.fromBufferAttribute(B,G),w[W+K+4]=r.x,w[W+K+5]=r.y,w[W+K+6]=r.z,w[W+K+7]=0),m===!0&&(r.fromBufferAttribute(X,G),w[W+K+8]=r.x,w[W+K+9]=r.y,w[W+K+10]=r.z,w[W+K+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ge(b,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function wC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class yx extends Dt{constructor(e,n,i,r,s,o,a,l,c,u=Zs){if(u!==Zs&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zs&&(i=Qr),i===void 0&&u===po&&(i=ho),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const xx=new Dt,vv=new yx(1,1),Sx=new ux,Mx=new fA,Ex=new vx,_v=[],yv=[],xv=new Float32Array(16),Sv=new Float32Array(9),Mv=new Float32Array(4);function wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_v[r];if(s===void 0&&(s=new Float32Array(r),_v[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=yv[e];n===void 0&&(n=new Int32Array(e),yv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function PC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Mv.set(i),t.uniformMatrix2fv(this.addr,!1,Mv),Pt(n,i)}}function LC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Sv.set(i),t.uniformMatrix3fv(this.addr,!1,Sv),Pt(n,i)}}function IC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;xv.set(i),t.uniformMatrix4fv(this.addr,!1,xv),Pt(n,i)}}function NC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function OC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function HC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(vv.compareFunction=ax,s=vv):s=xx,n.setTexture2D(e||s,r)}function VC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Mx,r)}function GC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ex,r)}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sx,r)}function XC(t){switch(t){case 5126:return AC;case 35664:return bC;case 35665:return RC;case 35666:return CC;case 35674:return PC;case 35675:return LC;case 35676:return IC;case 5124:case 35670:return NC;case 35667:case 35671:return DC;case 35668:case 35672:return UC;case 35669:case 35673:return FC;case 5125:return OC;case 36294:return kC;case 36295:return BC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return VC;case 35680:case 36300:case 36308:case 36293:return GC;case 36289:case 36303:case 36311:case 36292:return WC}}function $C(t,e){t.uniform1fv(this.addr,e)}function jC(t,e){const n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function YC(t,e){const n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function KC(t,e){const n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function qC(t,e){const n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZC(t,e){const n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QC(t,e){const n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JC(t,e){t.uniform1iv(this.addr,e)}function eP(t,e){t.uniform2iv(this.addr,e)}function tP(t,e){t.uniform3iv(this.addr,e)}function nP(t,e){t.uniform4iv(this.addr,e)}function iP(t,e){t.uniform1uiv(this.addr,e)}function rP(t,e){t.uniform2uiv(this.addr,e)}function sP(t,e){t.uniform3uiv(this.addr,e)}function oP(t,e){t.uniform4uiv(this.addr,e)}function aP(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||xx,s[o])}function lP(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Mx,s[o])}function cP(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ex,s[o])}function uP(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Sx,s[o])}function fP(t){switch(t){case 5126:return $C;case 35664:return jC;case 35665:return YC;case 35666:return KC;case 35674:return qC;case 35675:return ZC;case 35676:return QC;case 5124:case 35670:return JC;case 35667:case 35671:return eP;case 35668:case 35672:return tP;case 35669:case 35673:return nP;case 5125:return iP;case 36294:return rP;case 36295:return sP;case 36296:return oP;case 35678:case 36198:case 36298:case 36306:case 35682:return aP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return cP;case 36289:case 36303:case 36311:case 36292:return uP}}class dP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XC(n.type)}}class hP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fP(n.type)}}class pP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function Ev(t,e){t.seq.push(e),t.map[e.id]=e}function mP(t,e,n){const i=t.name,r=i.length;for(If.lastIndex=0;;){const s=If.exec(i),o=If.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ev(n,c===void 0?new dP(a,t,e):new hP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new pP(a),Ev(n,f)),n=f}}}class fc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);mP(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gP=37297;let vP=0;function _P(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function yP(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Hc&&n===zc?i="LinearDisplayP3ToLinearSRGB":e===zc&&n===Hc&&(i="LinearSRGBToLinearDisplayP3"),t){case Er:case hu:return[i,"LinearTransferOETF"];case ei:case $p:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function wv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_P(t.getShaderSource(e),o)}else return r}function xP(t,e){const n=yP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function SP(t,e){let n;switch(e){case Sw:n="Linear";break;case Mw:n="Reinhard";break;case Ew:n="Cineon";break;case Tw:n="ACESFilmic";break;case Aw:n="AgX";break;case bw:n="Neutral";break;case ww:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ol=new U;function MP(){tt.getLuminanceCoefficients(Ol);const t=Ol.x.toFixed(4),e=Ol.y.toFixed(4),n=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function TP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ta(t){return t!==""}function Av(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AP=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(t){return t.replace(AP,RP)}const bP=new Map;function RP(t,e){let n=Oe[e];if(n===void 0){const i=bP.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _h(n)}const CP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(t){return t.replace(CP,PP)}function PP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$y?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===j1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function IP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function DP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jy:e="ENVMAP_BLENDING_MULTIPLY";break;case yw:e="ENVMAP_BLENDING_MIX";break;case xw:e="ENVMAP_BLENDING_ADD";break}return e}function UP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function FP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LP(n),c=IP(n),u=NP(n),f=DP(n),d=UP(n),p=EP(n),g=TP(s),v=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),h.length>0&&(h+=`
`)):(m=[Cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),h=[Cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==dr?SP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,xP("linearToOutputTexel",n.outputColorSpace),MP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),o=_h(o),o=Av(o,n),o=bv(o,n),a=_h(a),a=Av(a,n),a=bv(a,n),o=Rv(o),a=Rv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+m+o,x=_+h+a,b=Tv(r,r.VERTEX_SHADER,y),A=Tv(r,r.FRAGMENT_SHADER,x);r.attachShader(v,b),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(b).trim(),X=r.getShaderInfoLog(A).trim();let W=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,b,A);else{const K=wv(r,b,"vertex"),I=wv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+K+`
`+I)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||X==="")&&(G=!1);G&&(L.diagnostics={runnable:W,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(b),r.deleteShader(A),C=new fc(r,v),E=wP(r,v)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,gP)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let OP=0;class kP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BP(e),n.set(e,i)),i}}class BP{constructor(e){this.id=OP++,this.code=e,this.usedTimes=0}}function zP(t,e,n,i,r,s,o){const a=new fx,l=new kP,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,H,B){const X=H.fog,W=B.geometry,G=E.isMeshStandardMaterial?H.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),I=K&&K.mapping===du?K.image.height:null,$=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const j=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=j!==void 0?j.length:0;let Me=0;W.morphAttributes.position!==void 0&&(Me=1),W.morphAttributes.normal!==void 0&&(Me=2),W.morphAttributes.color!==void 0&&(Me=3);let Xe,V,ne,de;if($){const Ze=ti[$];Xe=Ze.vertexShader,V=Ze.fragmentShader}else Xe=E.vertexShader,V=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const fe=t.getRenderTarget(),Ae=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,ze=!!E.map,ut=!!E.matcap,P=!!K,vt=!!E.aoMap,Ke=!!E.lightMap,qe=!!E.bumpMap,Ee=!!E.normalMap,_t=!!E.displacementMap,Ce=!!E.emissiveMap,Ne=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,z=E.clearcoat>0,Q=E.dispersion>0,ee=E.iridescence>0,J=E.sheen>0,we=E.transmission>0,ue=M&&!!E.anisotropyMap,ge=z&&!!E.clearcoatMap,Fe=z&&!!E.clearcoatNormalMap,re=z&&!!E.clearcoatRoughnessMap,me=ee&&!!E.iridescenceMap,$e=ee&&!!E.iridescenceThicknessMap,Le=J&&!!E.sheenColorMap,ve=J&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,He=!!E.specularColorMap,ht=!!E.specularIntensityMap,N=we&&!!E.transmissionMap,se=we&&!!E.thicknessMap,Y=!!E.gradientMap,q=!!E.alphaMap,le=E.alphaTest>0,be=!!E.alphaHash,je=!!E.extensions;let Et=dr;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Et=t.toneMapping);const Ut={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:V,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:ut,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:I,aoMap:vt,lightMap:Ke,bumpMap:qe,normalMap:Ee,displacementMap:d&&_t,emissiveMap:Ce,normalMapObjectSpace:Ee&&E.normalMapType===Nw,normalMapTangentSpace:Ee&&E.normalMapType===ox,metalnessMap:Ne,roughnessMap:R,anisotropy:M,anisotropyMap:ue,clearcoat:z,clearcoatMap:ge,clearcoatNormalMap:Fe,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:$e,sheen:J,sheenColorMap:Le,sheenRoughnessMap:ve,specularMap:Ue,specularColorMap:He,specularIntensityMap:ht,transmission:we,transmissionMap:N,thicknessMap:se,gradientMap:Y,opaque:E.transparent===!1&&E.blending===qs&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:be,combine:E.combine,mapUv:ze&&v(E.map.channel),aoMapUv:vt&&v(E.aoMap.channel),lightMapUv:Ke&&v(E.lightMap.channel),bumpMapUv:qe&&v(E.bumpMap.channel),normalMapUv:Ee&&v(E.normalMap.channel),displacementMapUv:_t&&v(E.displacementMap.channel),emissiveMapUv:Ce&&v(E.emissiveMap.channel),metalnessMapUv:Ne&&v(E.metalnessMap.channel),roughnessMapUv:R&&v(E.roughnessMap.channel),anisotropyMapUv:ue&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(E.sheenRoughnessMap.channel),specularMapUv:Ue&&v(E.specularMap.channel),specularColorMapUv:He&&v(E.specularColorMap.channel),specularIntensityMapUv:ht&&v(E.specularIntensityMap.channel),transmissionMapUv:N&&v(E.transmissionMap.channel),thicknessMapUv:se&&v(E.thicknessMap.channel),alphaMapUv:q&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ee||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(ze||q),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hn,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(S,E),y(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function x(E){const S=g[E.type];let L;if(S){const H=ti[S];L=EA.clone(H.uniforms)}else L=E.uniforms;return L}function b(E,S){let L;for(let H=0,B=u.length;H<B;H++){const X=u[H];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new FP(t,S,E,s),u.push(L)),L}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function HP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function VP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||VP),i.length>1&&i.sort(d||Pv),r.length>1&&r.sort(d||Pv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Lv,t.set(i,[o])):r>=s.length?(o=new Lv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new De};break;case"SpotLight":n={position:new U,direction:new U,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function XP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $P=0;function jP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YP(t){const e=new WP,n=XP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new Be,o=new Be;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,y=0,x=0,b=0,A=0,w=0;c.sort(jP);for(let E=0,S=c.length;E<S;E++){const L=c[E],H=L.color,B=L.intensity,X=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*B,f+=H.g*B,d+=H.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],B);w++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,I=n.get(L);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=G,p++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(H).multiplyScalar(B),G.distance=X,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[v]=G;const K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=K.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=W,x++}v++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(H).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=G,m++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const K=L.shadow,I=n.get(L);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=w,i.version=$P++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Iv(t){const e=new YP(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Iv(t),e.set(r,[a])):s>=o.length?(a=new Iv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class qP extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZP extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eL(t,e,n){let i=new Yp;const r=new Ge,s=new Ge,o=new st,a=new qP({depthPacking:Iw}),l=new ZP,c={},u=n.maxTextureSize,f={[ci]:un,[un]:ci,[Hn]:Hn},d=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:QP,fragmentShader:JP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _n(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$y;let h=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(fr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=h!==Mi&&this.type===Mi,X=h===Mi&&this.type!==Mi;for(let W=0,G=A.length;W<G;W++){const K=A[W],I=K.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||B===!0||X===!0){const ie=this.type!==Mi?{minFilter:Qt,magFilter:Qt}:{};I.map!==null&&I.map.dispose(),I.map=new Jr(r.x,r.y,ie),I.map.texture.name=K.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const j=I.getViewportCount();for(let ie=0;ie<j;ie++){const Me=I.getViewport(ie);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),H.viewport(o),I.updateMatrices(K,ie),i=I.getFrustum(),x(w,C,I.camera,K,this.type)}I.isPointLightShadow!==!0&&this.type===Mi&&_(I,C),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,L)};function _(A,w){const C=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,C,p,v,null)}function y(A,w,C,E){let S=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,B=w.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let W=X[B];W===void 0&&(W=S.clone(),X[B]=W,w.addEventListener("dispose",b)),S=W}if(S.visible=w.visible,S.wireframe=w.wireframe,E===Mi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=C}return S}function x(A,w,C,E,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=e.update(A),X=A.material;if(Array.isArray(X)){const W=B.groups;for(let G=0,K=W.length;G<K;G++){const I=W[G],$=X[I.materialIndex];if($&&$.visible){const j=y(A,$,E,S);A.onBeforeShadow(t,A,w,C,B,j,I),t.renderBufferDirect(C,null,B,j,A,I),A.onAfterShadow(t,A,w,C,B,j,I)}}}else if(X.visible){const W=y(A,X,E,S);A.onBeforeShadow(t,A,w,C,B,W,null),t.renderBufferDirect(C,null,B,W,A,null),A.onAfterShadow(t,A,w,C,B,W,null)}}const H=A.children;for(let B=0,X=H.length;B<X;B++)x(H[B],w,C,E,S)}function b(A){A.target.removeEventListener("dispose",b);for(const C in c){const E=c[C],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function tL(t){function e(){let N=!1;const se=new st;let Y=null;const q=new st(0,0,0,0);return{setMask:function(le){Y!==le&&!N&&(t.colorMask(le,le,le,le),Y=le)},setLocked:function(le){N=le},setClear:function(le,be,je,Et,Ut){Ut===!0&&(le*=Et,be*=Et,je*=Et),se.set(le,be,je,Et),q.equals(se)===!1&&(t.clearColor(le,be,je,Et),q.copy(se))},reset:function(){N=!1,Y=null,q.set(-1,0,0,0)}}}function n(){let N=!1,se=null,Y=null,q=null;return{setTest:function(le){le?de(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(le){se!==le&&!N&&(t.depthMask(le),se=le)},setFunc:function(le){if(Y!==le){switch(le){case dw:t.depthFunc(t.NEVER);break;case hw:t.depthFunc(t.ALWAYS);break;case pw:t.depthFunc(t.LESS);break;case Oc:t.depthFunc(t.LEQUAL);break;case mw:t.depthFunc(t.EQUAL);break;case gw:t.depthFunc(t.GEQUAL);break;case vw:t.depthFunc(t.GREATER);break;case _w:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=le}},setLocked:function(le){N=le},setClear:function(le){q!==le&&(t.clearDepth(le),q=le)},reset:function(){N=!1,se=null,Y=null,q=null}}}function i(){let N=!1,se=null,Y=null,q=null,le=null,be=null,je=null,Et=null,Ut=null;return{setTest:function(Ze){N||(Ze?de(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!N&&(t.stencilMask(Ze),se=Ze)},setFunc:function(Ze,pi,Zn){(Y!==Ze||q!==pi||le!==Zn)&&(t.stencilFunc(Ze,pi,Zn),Y=Ze,q=pi,le=Zn)},setOp:function(Ze,pi,Zn){(be!==Ze||je!==pi||Et!==Zn)&&(t.stencilOp(Ze,pi,Zn),be=Ze,je=pi,Et=Zn)},setLocked:function(Ze){N=Ze},setClear:function(Ze){Ut!==Ze&&(t.clearStencil(Ze),Ut=Ze)},reset:function(){N=!1,se=null,Y=null,q=null,le=null,be=null,je=null,Et=null,Ut=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,_=null,y=null,x=null,b=null,A=new De(0,0,0),w=0,C=!1,E=null,S=null,L=null,H=null,B=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=G>=2);let I=null,$={};const j=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Me=new st().fromArray(j),Xe=new st().fromArray(ie);function V(N,se,Y,q){const le=new Uint8Array(4),be=t.createTexture();t.bindTexture(N,be),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<Y;je++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(se+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return be}const ne={};ne[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Oc),qe(!1),Ee(Dg),de(t.CULL_FACE),vt(fr);function de(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function fe(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ae(N,se){return u[N]!==se?(t.bindFramebuffer(N,se),u[N]=se,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ie(N,se){let Y=d,q=!1;if(N){Y=f.get(se),Y===void 0&&(Y=[],f.set(se,Y));const le=N.textures;if(Y.length!==le.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let be=0,je=le.length;be<je;be++)Y[be]=t.COLOR_ATTACHMENT0+be;Y.length=le.length,q=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,q=!0);q&&t.drawBuffers(Y)}function ze(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const ut={[Or]:t.FUNC_ADD,[K1]:t.FUNC_SUBTRACT,[q1]:t.FUNC_REVERSE_SUBTRACT};ut[Z1]=t.MIN,ut[Q1]=t.MAX;const P={[J1]:t.ZERO,[ew]:t.ONE,[tw]:t.SRC_COLOR,[Hd]:t.SRC_ALPHA,[aw]:t.SRC_ALPHA_SATURATE,[sw]:t.DST_COLOR,[iw]:t.DST_ALPHA,[nw]:t.ONE_MINUS_SRC_COLOR,[Vd]:t.ONE_MINUS_SRC_ALPHA,[ow]:t.ONE_MINUS_DST_COLOR,[rw]:t.ONE_MINUS_DST_ALPHA,[lw]:t.CONSTANT_COLOR,[cw]:t.ONE_MINUS_CONSTANT_COLOR,[uw]:t.CONSTANT_ALPHA,[fw]:t.ONE_MINUS_CONSTANT_ALPHA};function vt(N,se,Y,q,le,be,je,Et,Ut,Ze){if(N===fr){g===!0&&(fe(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),N!==Y1){if(N!==v||Ze!==C){if((m!==Or||y!==Or)&&(t.blendEquation(t.FUNC_ADD),m=Or,y=Or),Ze)switch(N){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ug:t.blendFunc(t.ONE,t.ONE);break;case Fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Og:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ug:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Og:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,_=null,x=null,b=null,A.set(0,0,0),w=0,v=N,C=Ze}return}le=le||se,be=be||Y,je=je||q,(se!==m||le!==y)&&(t.blendEquationSeparate(ut[se],ut[le]),m=se,y=le),(Y!==h||q!==_||be!==x||je!==b)&&(t.blendFuncSeparate(P[Y],P[q],P[be],P[je]),h=Y,_=q,x=be,b=je),(Et.equals(A)===!1||Ut!==w)&&(t.blendColor(Et.r,Et.g,Et.b,Ut),A.copy(Et),w=Ut),v=N,C=!1}function Ke(N,se){N.side===Hn?fe(t.CULL_FACE):de(t.CULL_FACE);let Y=N.side===un;se&&(Y=!Y),qe(Y),N.blending===qs&&N.transparent===!1?vt(fr):vt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const q=N.stencilWrite;o.setTest(q),q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(N){E!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),E=N)}function Ee(N){N!==X1?(de(t.CULL_FACE),N!==S&&(N===Dg?t.cullFace(t.BACK):N===$1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),S=N}function _t(N){N!==L&&(W&&t.lineWidth(N),L=N)}function Ce(N,se,Y){N?(de(t.POLYGON_OFFSET_FILL),(H!==se||B!==Y)&&(t.polygonOffset(se,Y),H=se,B=Y)):fe(t.POLYGON_OFFSET_FILL)}function Ne(N){N?de(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+X-1),I!==N&&(t.activeTexture(N),I=N)}function M(N,se,Y){Y===void 0&&(I===null?Y=t.TEXTURE0+X-1:Y=I);let q=$[Y];q===void 0&&(q={type:void 0,texture:void 0},$[Y]=q),(q.type!==N||q.texture!==se)&&(I!==Y&&(t.activeTexture(Y),I=Y),t.bindTexture(N,se||ne[N]),q.type=N,q.texture=se)}function z(){const N=$[I];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){Me.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function ve(N){Xe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function Ue(N,se){let Y=l.get(se);Y===void 0&&(Y=new WeakMap,l.set(se,Y));let q=Y.get(N);q===void 0&&(q=t.getUniformBlockIndex(se,N.name),Y.set(N,q))}function He(N,se){const q=l.get(se).get(N);a.get(se)!==q&&(t.uniformBlockBinding(se,q,N.__bindingPointIndex),a.set(se,q))}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,$={},u={},f=new WeakMap,d=[],p=null,g=!1,v=null,m=null,h=null,_=null,y=null,x=null,b=null,A=new De(0,0,0),w=0,C=!1,E=null,S=null,L=null,H=null,B=null,Me.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:fe,bindFramebuffer:Ae,drawBuffers:Ie,useProgram:ze,setBlending:vt,setMaterial:Ke,setFlipSided:qe,setCullFace:Ee,setLineWidth:_t,setPolygonOffset:Ce,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:me,texImage3D:$e,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:re,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Le,viewport:ve,reset:ht}}function Nv(t,e,n,i){const r=nL(i);switch(n){case Jy:return t*e;case tx:return t*e;case nx:return t*e*2;case Vp:return t*e/r.components*r.byteLength;case Gp:return t*e/r.components*r.byteLength;case ix:return t*e*2/r.components*r.byteLength;case Wp:return t*e*2/r.components*r.byteLength;case ex:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case Xp:return t*e*4/r.components*r.byteLength;case oc:case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Wd:case $d:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uc:case fh:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rx:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nL(t){switch(t){case Oi:case qy:return{byteLength:1,components:1};case Ia:case Zy:case Xa:return{byteLength:2,components:1};case zp:case Hp:return{byteLength:2,components:4};case Qr:case Bp:case Gn:return{byteLength:4,components:1};case Qy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function iL(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Ua("canvas")}function v(R,M,z){let Q=1;const ee=Ne(R);if((ee.width>z||ee.height>z)&&(Q=z/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*ee.width),we=Math.floor(Q*ee.height);f===void 0&&(f=g(J,we));const ue=M?g(J,we):f;return ue.width=J,ue.height=we,ue.getContext("2d").drawImage(R,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+we+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Qt&&R.minFilter!==gn}function h(R){t.generateMipmap(R)}function _(R,M,z,Q,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),M===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),M===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const we=ee?Bc:tt.getTransfer(Q);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=we===lt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(R,M){let z;return R?M===null||M===Qr||M===ho?z=t.DEPTH24_STENCIL8:M===Gn?z=t.DEPTH32F_STENCIL8:M===Ia&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qr||M===ho?z=t.DEPTH_COMPONENT24:M===Gn?z=t.DEPTH_COMPONENT32F:M===Ia&&(z=t.DEPTH_COMPONENT16),z}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),E(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,Q=d.get(z);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(R),Object.keys(Q).length===0&&d.delete(z)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const z=R.source,Q=d.get(z);delete Q[M.__cacheKey],o.memory.textures--}function E(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let Q=0,ee=z.length;Q<ee;Q++){const J=i.get(z[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(R)}let S=0;function L(){S=0}function H(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const z=i.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(z,R,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function W(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Xe(z,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function G(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Xe(z,R,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function K(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){V(z,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const I={[uo]:t.REPEAT,[si]:t.CLAMP_TO_EDGE,[fo]:t.MIRRORED_REPEAT},$={[Qt]:t.NEAREST,[Ky]:t.NEAREST_MIPMAP_NEAREST,[ea]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[sc]:t.LINEAR_MIPMAP_NEAREST,[Ri]:t.LINEAR_MIPMAP_LINEAR},j={[Dw]:t.NEVER,[zw]:t.ALWAYS,[Uw]:t.LESS,[ax]:t.LEQUAL,[Fw]:t.EQUAL,[Bw]:t.GEQUAL,[Ow]:t.GREATER,[kw]:t.NOTEQUAL};function ie(R,M){if(M.type===Gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===sc||M.magFilter===ea||M.magFilter===Ri||M.minFilter===gn||M.minFilter===sc||M.minFilter===ea||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==ea&&M.minFilter!==Ri||M.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Me(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const J=B(M);if(J!==R.__cacheKey){ee[J]===void 0&&(ee[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[J].usedTimes++;const we=ee[R.__cacheKey];we!==void 0&&(ee[R.__cacheKey].usedTimes--,we.usedTimes===0&&C(M)),R.__cacheKey=J,R.__webglTexture=ee[J].texture}return z}function Xe(R,M,z){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=Me(R,M),J=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+z);const we=i.get(J);if(J.version!==we.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const ue=tt.getPrimaries(tt.workingColorSpace),ge=M.colorSpace===Ji?null:tt.getPrimaries(M.colorSpace),Fe=M.colorSpace===Ji||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let re=v(M.image,!1,r.maxTextureSize);re=Ce(M,re);const me=s.convert(M.format,M.colorSpace),$e=s.convert(M.type);let Le=_(M.internalFormat,me,$e,M.colorSpace,M.isVideoTexture);ie(Q,M);let ve;const Ue=M.mipmaps,He=M.isVideoTexture!==!0,ht=we.__version===void 0||ee===!0,N=J.dataReady,se=x(M,re);if(M.isDepthTexture)Le=y(M.format===po,M.type),ht&&(He?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,me,$e,null));else if(M.isDataTexture)if(Ue.length>0){He&&ht&&n.texStorage2D(t.TEXTURE_2D,se,Le,Ue[0].width,Ue[0].height);for(let Y=0,q=Ue.length;Y<q;Y++)ve=Ue[Y],He?N&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,$e,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,me,$e,ve.data);M.generateMipmaps=!1}else He?(ht&&n.texStorage2D(t.TEXTURE_2D,se,Le,re.width,re.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,me,$e,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,me,$e,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Le,Ue[0].width,Ue[0].height,re.depth);for(let Y=0,q=Ue.length;Y<q;Y++)if(ve=Ue[Y],M.format!==Cn)if(me!==null)if(He){if(N)if(M.layerUpdates.size>0){const le=Nv(ve.width,ve.height,M.format,M.type);for(const be of M.layerUpdates){const je=ve.data.subarray(be*le/ve.data.BYTES_PER_ELEMENT,(be+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,be,ve.width,ve.height,1,me,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Le,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,me,$e,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Le,ve.width,ve.height,re.depth,0,me,$e,ve.data)}else{He&&ht&&n.texStorage2D(t.TEXTURE_2D,se,Le,Ue[0].width,Ue[0].height);for(let Y=0,q=Ue.length;Y<q;Y++)ve=Ue[Y],M.format!==Cn?me!==null?He?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,$e,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,me,$e,ve.data)}else if(M.isDataArrayTexture)if(He){if(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Le,re.width,re.height,re.depth),N)if(M.layerUpdates.size>0){const Y=Nv(re.width,re.height,M.format,M.type);for(const q of M.layerUpdates){const le=re.data.subarray(q*Y/re.data.BYTES_PER_ELEMENT,(q+1)*Y/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,re.width,re.height,1,me,$e,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,$e,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,me,$e,re.data);else if(M.isData3DTexture)He?(ht&&n.texStorage3D(t.TEXTURE_3D,se,Le,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,$e,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,me,$e,re.data);else if(M.isFramebufferTexture){if(ht)if(He)n.texStorage2D(t.TEXTURE_2D,se,Le,re.width,re.height);else{let Y=re.width,q=re.height;for(let le=0;le<se;le++)n.texImage2D(t.TEXTURE_2D,le,Le,Y,q,0,me,$e,null),Y>>=1,q>>=1}}else if(Ue.length>0){if(He&&ht){const Y=Ne(Ue[0]);n.texStorage2D(t.TEXTURE_2D,se,Le,Y.width,Y.height)}for(let Y=0,q=Ue.length;Y<q;Y++)ve=Ue[Y],He?N&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me,$e,ve):n.texImage2D(t.TEXTURE_2D,Y,Le,me,$e,ve);M.generateMipmaps=!1}else if(He){if(ht){const Y=Ne(re);n.texStorage2D(t.TEXTURE_2D,se,Le,Y.width,Y.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,$e,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,me,$e,re);m(M)&&h(Q),we.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function V(R,M,z){if(M.image.length!==6)return;const Q=Me(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const J=i.get(ee);if(ee.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const we=tt.getPrimaries(tt.workingColorSpace),ue=M.colorSpace===Ji?null:tt.getPrimaries(M.colorSpace),ge=M.colorSpace===Ji||we===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,me=[];for(let q=0;q<6;q++)!Fe&&!re?me[q]=v(M.image[q],!0,r.maxCubemapSize):me[q]=re?M.image[q].image:M.image[q],me[q]=Ce(M,me[q]);const $e=me[0],Le=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Ue=_(M.internalFormat,Le,ve,M.colorSpace),He=M.isVideoTexture!==!0,ht=J.__version===void 0||Q===!0,N=ee.dataReady;let se=x(M,$e);ie(t.TEXTURE_CUBE_MAP,M);let Y;if(Fe){He&&ht&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ue,$e.width,$e.height);for(let q=0;q<6;q++){Y=me[q].mipmaps;for(let le=0;le<Y.length;le++){const be=Y[le];M.format!==Cn?Le!==null?He?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,be.width,be.height,Le,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,be.width,be.height,Le,ve,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ue,be.width,be.height,0,Le,ve,be.data)}}}else{if(Y=M.mipmaps,He&&ht){Y.length>0&&se++;const q=Ne(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ue,q.width,q.height)}for(let q=0;q<6;q++)if(re){He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me[q].width,me[q].height,Le,ve,me[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,me[q].width,me[q].height,0,Le,ve,me[q].data);for(let le=0;le<Y.length;le++){const je=Y[le].image[q].image;He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,je.width,je.height,Le,ve,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ue,je.width,je.height,0,Le,ve,je.data)}}else{He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Le,ve,me[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,Le,ve,me[q]);for(let le=0;le<Y.length;le++){const be=Y[le];He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Le,ve,be.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ue,Le,ve,be.image[q])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,z,Q,ee,J){const we=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),ge=_(z.internalFormat,we,ue,z.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>J),me=Math.max(1,M.height>>J);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,J,ge,re,me,M.depth,0,we,ue,null):n.texImage2D(ee,J,ge,re,me,0,we,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ee(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(z).__webglTexture,0,qe(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(z).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,J=y(M.stencilBuffer,ee),we=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=qe(M);Ee(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,J,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let ee=0;ee<Q.length;ee++){const J=Q[ee],we=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),ge=_(J.internalFormat,we,ue,J.colorSpace),Fe=qe(M);z&&Ee(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,M.width,M.height):Ee(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ee=qe(M);if(M.depthTexture.format===Zs)Ee(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===po)Ee(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");fe(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=t.createRenderbuffer(),de(M.__webglDepthbuffer[Q],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,M,z){const Q=i.get(R);M!==void 0&&ne(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ae(R)}function ze(R){const M=R.texture,z=i.get(R),Q=i.get(M);R.addEventListener("dispose",A);const ee=R.textures,J=R.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let ge=0;ge<M.mipmaps.length;ge++)z.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else z.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)z.__webglFramebuffer[ue]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(we)for(let ue=0,ge=ee.length;ue<ge;ue++){const Fe=i.get(ee[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ee(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];z.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Fe=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),me=_(ge.internalFormat,Fe,re,ge.colorSpace,R.isXRRenderTarget===!0),$e=qe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),de(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(z.__webglFramebuffer[ue][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ne(z.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ue=0,ge=ee.length;ue<ge;ue++){const Fe=ee[ue],re=i.get(Fe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Fe),ne(z.__webglFramebuffer,R,Fe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Fe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),ie(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(z.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,ue,ge);else ne(z.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&h(ue),n.unbindTexture()}R.depthBuffer&&Ae(R)}function ut(R){const M=R.textures;for(let z=0,Q=M.length;z<Q;z++){const ee=M[z];if(m(ee)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ee).__webglTexture;n.bindTexture(J,we),h(J),n.unbindTexture()}}}const P=[],vt=[];function Ke(R){if(R.samples>0){if(Ee(R)===!1){const M=R.textures,z=R.width,Q=R.height;let ee=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),ue=M.length>1;if(ue)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const Fe=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,ee,t.NEAREST),l===!0&&(P.length=0,vt.length=0,P.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(P.push(J),vt.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,vt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const Fe=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(R){return Math.min(r.maxSamples,R.samples)}function Ee(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ce(R,M){const z=R.colorSpace,Q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Er&&z!==Ji&&(tt.getTransfer(z)===lt?(Q!==Cn||ee!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Ie,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ee}function rL(t,e){function n(i,r=Ji){let s;const o=tt.getTransfer(r);if(i===Oi)return t.UNSIGNED_BYTE;if(i===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Qy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===qy)return t.BYTE;if(i===Zy)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===Bp)return t.INT;if(i===Qr)return t.UNSIGNED_INT;if(i===Gn)return t.FLOAT;if(i===Xa)return t.HALF_FLOAT;if(i===Jy)return t.ALPHA;if(i===ex)return t.RGB;if(i===Cn)return t.RGBA;if(i===tx)return t.LUMINANCE;if(i===nx)return t.LUMINANCE_ALPHA;if(i===Zs)return t.DEPTH_COMPONENT;if(i===po)return t.DEPTH_STENCIL;if(i===Vp)return t.RED;if(i===Gp)return t.RED_INTEGER;if(i===ix)return t.RG;if(i===Wp)return t.RG_INTEGER;if(i===Xp)return t.RGBA_INTEGER;if(i===oc||i===ac||i===lc||i===cc)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wd||i===Xd||i===$d||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===Kd||i===qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===Kd)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uc||i===fh||i===dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uc)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rx||i===hh||i===ph||i===mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sL extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gr extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oL={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const aL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new mr({vertexShader:aL,fragmentShader:lL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uL extends ns{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new cL,m=n.getContextAttributes();let h=null,_=null;const y=[],x=[],b=new Ge;let A=null;const w=new Zt;w.layers.enable(1),w.viewport=new st;const C=new Zt;C.layers.enable(2),C.viewport=new st;const E=[w,C],S=new sL;S.layers.enable(1),S.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=y[V];return ne===void 0&&(ne=new Nf,y[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=y[V];return ne===void 0&&(ne=new Nf,y[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=y[V];return ne===void 0&&(ne=new Nf,y[V]=ne),ne.getHandSpace()};function B(V){const ne=x.indexOf(V.inputSource);if(ne===-1)return;const de=y[ne];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",W);for(let V=0;V<y.length;V++){const ne=x[V];ne!==null&&(x[V]=null,y[V].disconnect(ne))}L=null,H=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,_=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Jr(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?po:Zs,de=m.stencil?ho:Qr);const Ae={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Jr(d.textureWidth,d.textureHeight,{format:Cn,type:Oi,depthTexture:new yx(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(V){for(let ne=0;ne<V.removed.length;ne++){const de=V.removed[ne],fe=x.indexOf(de);fe>=0&&(x[fe]=null,y[fe].disconnect(de))}for(let ne=0;ne<V.added.length;ne++){const de=V.added[ne];let fe=x.indexOf(de);if(fe===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=x.length){x.push(de),fe=Ie;break}else if(x[Ie]===null){x[Ie]=de,fe=Ie;break}if(fe===-1)break}const Ae=y[fe];Ae&&Ae.connect(de)}}const G=new U,K=new U;function I(V,ne,de){G.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const fe=G.distanceTo(K),Ae=ne.projectionMatrix.elements,Ie=de.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),ut=Ae[14]/(Ae[10]+1),P=(Ae[9]+1)/Ae[5],vt=(Ae[9]-1)/Ae[5],Ke=(Ae[8]-1)/Ae[0],qe=(Ie[8]+1)/Ie[0],Ee=ze*Ke,_t=ze*qe,Ce=fe/(-Ke+qe),Ne=Ce*-Ke;if(ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ne),V.translateZ(Ce),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=ze+Ce,M=ut+Ce,z=Ee-Ne,Q=_t+(fe-Ne),ee=P*ut/M*R,J=vt*ut/M*R;V.projectionMatrix.makePerspective(z,Q,ee,J,R,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ne=V.near,de=V.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(de=v.depthFar)),S.near=C.near=w.near=ne,S.far=C.far=w.far=de,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far);const fe=V.parent,Ae=S.cameras;$(S,fe);for(let Ie=0;Ie<Ae.length;Ie++)$(Ae[Ie],fe);Ae.length===2?I(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),j(V,S,fe)};function j(V,ne,de){de===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=mo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ie=null;function Me(V,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Ie=0;Ie<de.length;Ie++){const ze=de[Ie];let ut=null;if(p!==null)ut=p.getViewport(ze);else{const vt=f.getViewSubImage(d,ze);ut=vt.viewport,Ie===0&&(e.setRenderTargetTextures(_,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(_))}let P=E[Ie];P===void 0&&(P=new Zt,P.layers.enable(Ie),P.viewport=new st,E[Ie]=P),P.matrix.fromArray(ze.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ze.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ut.x,ut.y,ut.width,ut.height),Ie===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(P)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=f.getDepthInformation(de[0]);Ie&&Ie.isValid&&Ie.texture&&v.init(e,Ie,r.renderState)}}for(let de=0;de<y.length;de++){const fe=x[de],Ae=y[de];fe!==null&&Ae!==void 0&&Ae.update(fe,ne,c||o)}ie&&ie(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new _x;Xe.setAnimationLoop(Me),this.setAnimationLoop=function(V){ie=V},this.dispose=function(){}}}const Lr=new Kn,fL=new Be;function dL(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,mx(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Lr.copy(x),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(fL.makeRotationFromEuler(Lr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(g(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function u(_){const y=f();_.__bindingPointIndex=y;const x=t.createBuffer(),b=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,w=x.length;A<w;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=C.length;E<S;E++){const L=C[E];if(p(L,A,E,b)===!0){const H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let W=0;W<B.length;W++){const G=B[W],K=v(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+X,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,x,b){const A=_.value,w=y+"_"+x;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const C=b[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return b[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const b=16;for(let w=0,C=y.length;w<C;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,L=E.length;S<L;S++){const H=E[S],B=Array.isArray(H.value)?H.value:[H.value];for(let X=0,W=B.length;X<W;X++){const G=B[X],K=v(G),I=x%b,$=I%K.boundary,j=I+$;x+=$,j!==0&&b-j<K.storage&&(x+=b-j),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=K.storage}}}const A=x%b;return A>0&&(x+=b-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class pL{constructor(e={}){const{canvas:n=rA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=dr,this.toneMappingExposure=1;const y=this;let x=!1,b=0,A=0,w=null,C=-1,E=null;const S=new st,L=new st;let H=null;const B=new De(0);let X=0,W=n.width,G=n.height,K=1,I=null,$=null;const j=new st(0,0,W,G),ie=new st(0,0,W,G);let Me=!1;const Xe=new Yp;let V=!1,ne=!1;const de=new Be,fe=new U,Ae=new st,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ut(){return w===null?K:1}let P=i;function vt(T,D){return n.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fu}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",le,!1),P===null){const D="webgl2";if(P=vt(D,T),P===null)throw vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ke,qe,Ee,_t,Ce,Ne,R,M,z,Q,ee,J,we,ue,ge,Fe,re,me,$e,Le,ve,Ue,He,ht;function N(){Ke=new xC(P),Ke.init(),Ue=new rL(P,Ke),qe=new pC(P,Ke,e,Ue),Ee=new tL(P),_t=new EC(P),Ce=new HP,Ne=new iL(P,Ke,Ee,Ce,qe,Ue,_t),R=new gC(y),M=new yC(y),z=new PA(P),He=new dC(P,z),Q=new SC(P,z,_t,He),ee=new wC(P,Q,z,_t),$e=new TC(P,qe,Ne),Fe=new mC(Ce),J=new zP(y,R,M,Ke,qe,He,Fe),we=new dL(y,Ce),ue=new GP,ge=new KP(Ke),me=new fC(y,R,M,Ee,ee,d,l),re=new eL(y,ee,qe),ht=new hL(P,_t,qe,Ee),Le=new hC(P,Ke,_t),ve=new MC(P,Ke,_t),_t.programs=J.programs,y.capabilities=qe,y.extensions=Ke,y.properties=Ce,y.renderLists=ue,y.shadowMap=re,y.state=Ee,y.info=_t}N();const se=new uL(y,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(W,G,!1))},this.getSize=function(T){return T.set(W,G)},this.setSize=function(T,D,O=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,G=D,n.width=Math.floor(T*K),n.height=Math.floor(D*K),O===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(W*K,G*K).floor()},this.setDrawingBufferSize=function(T,D,O){W=T,G=D,K=O,n.width=Math.floor(T*O),n.height=Math.floor(D*O),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,D,O,k){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,D,O,k),Ee.viewport(S.copy(j).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,D,O,k){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,D,O,k),Ee.scissor(L.copy(ie).multiplyScalar(K).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){Ee.setScissorTest(Me=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,D=!0,O=!0){let k=0;if(T){let F=!1;if(w!==null){const oe=w.texture.format;F=oe===Xp||oe===Wp||oe===Gp}if(F){const oe=w.texture.type,he=oe===Oi||oe===Qr||oe===Ia||oe===ho||oe===zp||oe===Hp,_e=me.getClearColor(),ye=me.getClearAlpha(),Re=_e.r,Pe=_e.g,Se=_e.b;he?(p[0]=Re,p[1]=Pe,p[2]=Se,p[3]=ye,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Re,g[1]=Pe,g[2]=Se,g[3]=ye,P.clearBufferiv(P.COLOR,0,g))}else k|=P.COLOR_BUFFER_BIT}D&&(k|=P.DEPTH_BUFFER_BIT),O&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),ge.dispose(),Ce.dispose(),R.dispose(),M.dispose(),ee.dispose(),He.dispose(),ht.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",Zn),se.removeEventListener("sessionend",rm),wr.stop()};function Y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=_t.autoReset,D=re.enabled,O=re.autoUpdate,k=re.needsUpdate,F=re.type;N(),_t.autoReset=T,re.enabled=D,re.autoUpdate=O,re.needsUpdate=k,re.type=F}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){const D=T.target;D.removeEventListener("dispose",be),je(D)}function je(T){Et(T),Ce.remove(T)}function Et(T){const D=Ce.get(T).programs;D!==void 0&&(D.forEach(function(O){J.releaseProgram(O)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,O,k,F,oe){D===null&&(D=Ie);const he=F.isMesh&&F.matrixWorld.determinant()<0,_e=Dx(T,D,O,k,F);Ee.setMaterial(k,he);let ye=O.index,Re=1;if(k.wireframe===!0){if(ye=Q.getWireframeAttribute(O),ye===void 0)return;Re=2}const Pe=O.drawRange,Se=O.attributes.position;let Qe=Pe.start*Re,yt=(Pe.start+Pe.count)*Re;oe!==null&&(Qe=Math.max(Qe,oe.start*Re),yt=Math.min(yt,(oe.start+oe.count)*Re)),ye!==null?(Qe=Math.max(Qe,0),yt=Math.min(yt,ye.count)):Se!=null&&(Qe=Math.max(Qe,0),yt=Math.min(yt,Se.count));const xt=yt-Qe;if(xt<0||xt===1/0)return;He.setup(F,k,_e,O,ye);let fn,Je=Le;if(ye!==null&&(fn=z.get(ye),Je=ve,Je.setIndex(fn)),F.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*ut()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(F.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),Ee.setLineWidth(Te*ut()),F.isLineSegments?Je.setMode(P.LINES):F.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else F.isPoints?Je.setMode(P.POINTS):F.isSprite&&Je.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,Ft=F._multiDrawCounts,et=F._multiDrawCount,Nn=ye?z.get(ye).bytesPerElement:1,is=Ce.get(k).currentProgram.getUniforms();for(let dn=0;dn<et;dn++)is.setValue(P,"_gl_DrawID",dn),Je.render(Te[dn]/Nn,Ft[dn])}else if(F.isInstancedMesh)Je.renderInstances(Qe,xt,F.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ft=Math.min(O.instanceCount,Te);Je.renderInstances(Qe,xt,Ft)}else Je.render(Qe,xt)};function Ut(T,D,O){T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Ka(T,D,O),T.side=ci,T.needsUpdate=!0,Ka(T,D,O),T.side=Hn):Ka(T,D,O)}this.compile=function(T,D,O=null){O===null&&(O=T),m=ge.get(O),m.init(D),_.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==O&&T.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const k=new Set;return T.traverse(function(F){const oe=F.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const _e=oe[he];Ut(_e,O,F),k.add(_e)}else Ut(oe,O,F),k.add(oe)}),_.pop(),m=null,k},this.compileAsync=function(T,D,O=null){const k=this.compile(T,D,O);return new Promise(F=>{function oe(){if(k.forEach(function(he){Ce.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){F(T);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function pi(T){Ze&&Ze(T)}function Zn(){wr.stop()}function rm(){wr.start()}const wr=new _x;wr.setAnimationLoop(pi),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(T){Ze=T,se.setAnimationLoop(T),T===null?wr.stop():wr.start()},se.addEventListener("sessionstart",Zn),se.addEventListener("sessionend",rm),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,D,w),m=ge.get(T,_.length),m.init(D),_.push(m),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Xe.setFromProjectionMatrix(de),ne=this.localClippingEnabled,V=Fe.init(this.clippingPlanes,ne),v=ue.get(T,h.length),v.init(),h.push(v),se.enabled===!0&&se.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&_u(oe,D,-1/0,y.sortObjects)}_u(T,D,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(I,$),ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ze&&me.addToRenderList(v,T),this.info.render.frame++,V===!0&&Fe.beginShadows();const O=m.state.shadowsArray;re.render(O,T,D),V===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,F=v.transmissive;if(m.setupLights(),D.isArrayCamera){const oe=D.cameras;if(F.length>0)for(let he=0,_e=oe.length;he<_e;he++){const ye=oe[he];om(k,F,T,ye)}ze&&me.render(T);for(let he=0,_e=oe.length;he<_e;he++){const ye=oe[he];sm(v,T,ye,ye.viewport)}}else F.length>0&&om(k,F,T,D),ze&&me.render(T),sm(v,T,D);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(y,T,D),He.resetDefaultState(),C=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],V===!0&&Fe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function _u(T,D,O,k){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xe.intersectsSprite(T)){k&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const he=ee.update(T),_e=T.material;_e.visible&&v.push(T,he,_e,O,Ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xe.intersectsObject(T))){const he=ee.update(T),_e=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ae.copy(he.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const ye=he.groups;for(let Re=0,Pe=ye.length;Re<Pe;Re++){const Se=ye[Re],Qe=_e[Se.materialIndex];Qe&&Qe.visible&&v.push(T,he,Qe,O,Ae.z,Se)}}else _e.visible&&v.push(T,he,_e,O,Ae.z,null)}}const oe=T.children;for(let he=0,_e=oe.length;he<_e;he++)_u(oe[he],D,O,k)}function sm(T,D,O,k){const F=T.opaque,oe=T.transmissive,he=T.transparent;m.setupLightsView(O),V===!0&&Fe.setGlobalState(y.clippingPlanes,O),k&&Ee.viewport(S.copy(k)),F.length>0&&Ya(F,D,O),oe.length>0&&Ya(oe,D,O),he.length>0&&Ya(he,D,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function om(T,D,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Jr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Xa:Oi,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=m.state.transmissionRenderTarget[k.id],he=k.viewport||S;oe.setSize(he.z,he.w);const _e=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(B),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),ze&&me.render(O);const ye=y.toneMapping;y.toneMapping=dr;const Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),V===!0&&Fe.setGlobalState(y.clippingPlanes,k),Ya(T,O,k),Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Se=0,Qe=D.length;Se<Qe;Se++){const yt=D[Se],xt=yt.object,fn=yt.geometry,Je=yt.material,Te=yt.group;if(Je.side===Hn&&xt.layers.test(k.layers)){const Ft=Je.side;Je.side=un,Je.needsUpdate=!0,am(xt,O,k,fn,Je,Te),Je.side=Ft,Je.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe))}y.setRenderTarget(_e),y.setClearColor(B,X),Re!==void 0&&(k.viewport=Re),y.toneMapping=ye}function Ya(T,D,O){const k=D.isScene===!0?D.overrideMaterial:null;for(let F=0,oe=T.length;F<oe;F++){const he=T[F],_e=he.object,ye=he.geometry,Re=k===null?he.material:k,Pe=he.group;_e.layers.test(O.layers)&&am(_e,D,O,ye,Re,Pe)}}function am(T,D,O,k,F,oe){T.onBeforeRender(y,D,O,k,F,oe),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,D,O,k,T,oe),F.transparent===!0&&F.side===Hn&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,y.renderBufferDirect(O,D,k,F,T,oe),F.side=ci,F.needsUpdate=!0,y.renderBufferDirect(O,D,k,F,T,oe),F.side=Hn):y.renderBufferDirect(O,D,k,F,T,oe),T.onAfterRender(y,D,O,k,F,oe)}function Ka(T,D,O){D.isScene!==!0&&(D=Ie);const k=Ce.get(T),F=m.state.lights,oe=m.state.shadowsArray,he=F.state.version,_e=J.getParameters(T,F.state,oe,D,O),ye=J.getProgramCacheKey(_e);let Re=k.programs;k.environment=T.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(T.isMeshStandardMaterial?M:R).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",be),Re=new Map,k.programs=Re);let Pe=Re.get(ye);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===he)return cm(T,_e),Pe}else _e.uniforms=J.getUniforms(T),T.onBeforeCompile(_e,y),Pe=J.acquireProgram(_e,ye),Re.set(ye,Pe),k.uniforms=_e.uniforms;const Se=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=Fe.uniform),cm(T,_e),k.needsLights=Fx(T),k.lightsStateVersion=he,k.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function lm(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=fc.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function cm(T,D){const O=Ce.get(T);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Dx(T,D,O,k,F){D.isScene!==!0&&(D=Ie),Ne.resetTextureUnits();const oe=D.fog,he=k.isMeshStandardMaterial?D.environment:null,_e=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Er,ye=(k.isMeshStandardMaterial?M:R).get(k.envMap||he),Re=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!O.morphAttributes.position,Qe=!!O.morphAttributes.normal,yt=!!O.morphAttributes.color;let xt=dr;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=y.toneMapping);const fn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=fn!==void 0?fn.length:0,Te=Ce.get(k),Ft=m.state.lights;if(V===!0&&(ne===!0||T!==E)){const En=T===E&&k.id===C;Fe.setState(k,T,En)}let et=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ft.state.version||Te.outputColorSpace!==_e||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==ye||k.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Pe||Te.morphTargets!==Se||Te.morphNormals!==Qe||Te.morphColors!==yt||Te.toneMapping!==xt||Te.morphTargetsCount!==Je)&&(et=!0):(et=!0,Te.__version=k.version);let Nn=Te.currentProgram;et===!0&&(Nn=Ka(k,D,F));let is=!1,dn=!1,yu=!1;const Tt=Nn.getUniforms(),zi=Te.uniforms;if(Ee.useProgram(Nn.program)&&(is=!0,dn=!0,yu=!0),k.id!==C&&(C=k.id,dn=!0),is||E!==T){Tt.setValue(P,"projectionMatrix",T.projectionMatrix),Tt.setValue(P,"viewMatrix",T.matrixWorldInverse);const En=Tt.map.cameraPosition;En!==void 0&&En.setValue(P,fe.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,dn=!0,yu=!0)}if(F.isSkinnedMesh){Tt.setOptional(P,F,"bindMatrix"),Tt.setOptional(P,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Tt.setValue(P,"boneTexture",En.boneTexture,Ne))}F.isBatchedMesh&&(Tt.setOptional(P,F,"batchingTexture"),Tt.setValue(P,"batchingTexture",F._matricesTexture,Ne),Tt.setOptional(P,F,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",F._indirectTexture,Ne),Tt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",F._colorsTexture,Ne));const xu=O.morphAttributes;if((xu.position!==void 0||xu.normal!==void 0||xu.color!==void 0)&&$e.update(F,O,Nn),(dn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,Tt.setValue(P,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(zi.envMap.value=ye,zi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(zi.envMapIntensity.value=D.environmentIntensity),dn&&(Tt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Ux(zi,yu),oe&&k.fog===!0&&we.refreshFogUniforms(zi,oe),we.refreshMaterialUniforms(zi,k,K,G,m.state.transmissionRenderTarget[T.id]),fc.upload(P,lm(Te),zi,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fc.upload(P,lm(Te),zi,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(P,"center",F.center),Tt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(P,"normalMatrix",F.normalMatrix),Tt.setValue(P,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const En=k.uniformsGroups;for(let Su=0,Ox=En.length;Su<Ox;Su++){const um=En[Su];ht.update(um,Nn),ht.bind(um,Nn)}}return Nn}function Ux(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function Fx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,D,O){Ce.get(T.texture).__webglTexture=D,Ce.get(T.depthTexture).__webglTexture=O;const k=Ce.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const O=Ce.get(T);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,O=0){w=T,b=D,A=O;let k=!0,F=null,oe=!1,he=!1;if(T){const ye=Ce.get(T);if(ye.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(ye.__webglFramebuffer===void 0)Ne.setupRenderTarget(T);else if(ye.__hasExternalTextures)Ne.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Se=T.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(T.width!==Se.image.width||T.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Pe=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?F=Pe[D][O]:F=Pe[D],oe=!0):T.samples>0&&Ne.useMultisampledRTT(T)===!1?F=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[O]:F=Pe,S.copy(T.viewport),L.copy(T.scissor),H=T.scissorTest}else S.copy(j).multiplyScalar(K).floor(),L.copy(ie).multiplyScalar(K).floor(),H=Me;if(Ee.bindFramebuffer(P.FRAMEBUFFER,F)&&k&&Ee.drawBuffers(T,F),Ee.viewport(S),Ee.scissor(L),Ee.setScissorTest(H),oe){const ye=Ce.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,O)}else if(he){const ye=Ce.get(T.texture),Re=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Re)}C=-1},this.readRenderTargetPixels=function(T,D,O,k,F,oe,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Ee.bindFramebuffer(P.FRAMEBUFFER,_e);try{const ye=T.texture,Re=ye.format,Pe=ye.type;if(!qe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-k&&O>=0&&O<=T.height-F&&P.readPixels(D,O,k,F,Ue.convert(Re),Ue.convert(Pe),oe)}finally{const ye=w!==null?Ce.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,D,O,k,F,oe,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Ee.bindFramebuffer(P.FRAMEBUFFER,_e);try{const ye=T.texture,Re=ye.format,Pe=ye.type;if(!qe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-k&&O>=0&&O<=T.height-F){const Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(D,O,k,F,Ue.convert(Re),Ue.convert(Pe),0),P.flush();const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await sA(P,Qe,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe)}finally{P.deleteBuffer(Se),P.deleteSync(Qe)}return oe}}finally{const ye=w!==null?Ce.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(T,D=null,O=0){T.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-O),F=Math.floor(T.image.width*k),oe=Math.floor(T.image.height*k),he=D!==null?D.x:0,_e=D!==null?D.y:0;Ne.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,he,_e,F,oe),Ee.unbindTexture()},this.copyTextureToTexture=function(T,D,O=null,k=null,F=0){T.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],D=arguments[2],F=arguments[3]||0,O=null);let oe,he,_e,ye,Re,Pe;O!==null?(oe=O.max.x-O.min.x,he=O.max.y-O.min.y,_e=O.min.x,ye=O.min.y):(oe=T.image.width,he=T.image.height,_e=0,ye=0),k!==null?(Re=k.x,Pe=k.y):(Re=0,Pe=0);const Se=Ue.convert(D.format),Qe=Ue.convert(D.type);Ne.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const yt=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),fn=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),Te=P.getParameter(P.UNPACK_SKIP_IMAGES),Ft=T.isCompressedTexture?T.mipmaps[F]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,ye),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Re,Pe,oe,he,Se,Qe,Ft.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Re,Pe,Ft.width,Ft.height,Se,Ft.data):P.texSubImage2D(P.TEXTURE_2D,F,Re,Pe,oe,he,Se,Qe,Ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te),F===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,D,O=null,k=null,F=0){T.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,T=arguments[2],D=arguments[3],F=arguments[4]||0);let oe,he,_e,ye,Re,Pe,Se,Qe,yt;const xt=T.isCompressedTexture?T.mipmaps[F]:T.image;O!==null?(oe=O.max.x-O.min.x,he=O.max.y-O.min.y,_e=O.max.z-O.min.z,ye=O.min.x,Re=O.min.y,Pe=O.min.z):(oe=xt.width,he=xt.height,_e=xt.depth,ye=0,Re=0,Pe=0),k!==null?(Se=k.x,Qe=k.y,yt=k.z):(Se=0,Qe=0,yt=0);const fn=Ue.convert(D.format),Je=Ue.convert(D.type);let Te;if(D.isData3DTexture)Ne.setTexture3D(D,0),Te=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Ne.setTexture2DArray(D,0),Te=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Ft=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Nn=P.getParameter(P.UNPACK_SKIP_PIXELS),is=P.getParameter(P.UNPACK_SKIP_ROWS),dn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Te,F,Se,Qe,yt,oe,he,_e,fn,Je,xt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,F,Se,Qe,yt,oe,he,_e,fn,xt.data):P.texSubImage3D(Te,F,Se,Qe,yt,oe,he,_e,fn,Je,xt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nn),P.pixelStorei(P.UNPACK_SKIP_ROWS,is),P.pixelStorei(P.UNPACK_SKIP_IMAGES,dn),F===0&&D.generateMipmaps&&P.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&Ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,Ee.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$p?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===hu?"display-p3":"srgb"}}let mL=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};class gL{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new U;class Zp{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Vn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Vn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Vn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Vn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new en(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dv=new U,Uv=new st,Fv=new st,vL=new U,Ov=new Be,kl=new U,Df=new ui,kv=new Be,Uf=new pu;class _L extends _n{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kg,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,kl),this.boundingBox.expandByPoint(kl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,kl),this.boundingSphere.expandByPoint(kl)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Df.copy(this.boundingSphere),Df.applyMatrix4(r),e.ray.intersectsSphere(Df)!==!1&&(kv.copy(r).invert(),Uf.copy(e.ray).applyMatrix4(kv),!(this.boundingBox!==null&&Uf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Uf)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rw?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;Uv.fromBufferAttribute(r.attributes.skinIndex,e),Fv.fromBufferAttribute(r.attributes.skinWeight,e),Dv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=Fv.getComponent(s);if(o!==0){const a=Uv.getComponent(s);Ov.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector(vL.copy(Dv).applyMatrix4(Ov),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Tx extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wx extends Dt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Qt,u=Qt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bv=new Be,yL=new Be;class Qp{constructor(e=[],n=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:yL;Bv.multiplyMatrices(a,n[s]),Bv.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Qp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new wx(n,e,e,Cn,Gn);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Tx),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class yh extends en{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new Be,zv=new Be,Bl=[],Hv=new Bi,xL=new Be,Xo=new _n,$o=new ui;class SL extends _n{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,xL)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,bs),Hv.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Hv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,bs),$o.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union($o)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(i),e.ray.intersectsSphere($o)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,bs),zv.multiplyMatrices(i,bs),Xo.matrixWorld=zv,Xo.raycast(e,Bl);for(let o=0,a=Bl.length;o<a;o++){const l=Bl[o];l.instanceId=s,l.object=this,n.push(l)}Bl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wx(new Float32Array(r*this.count),r,this.count,Vp,Gn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ax extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new U,Wc=new U,Vv=new Be,jo=new pu,zl=new ui,Ff=new U,Gv=new U;class Jp extends dt{constructor(e=new fi,n=new Ax){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gc.fromBufferAttribute(n,r-1),Wc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new Li(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;Vv.copy(r).invert(),jo.copy(e.ray).applyMatrix4(Vv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),_=u.getX(v+1),y=Hl(this,e,jo,l,h,_);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=Hl(this,e,jo,l,v,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=Hl(this,e,jo,l,v,v+1);h&&n.push(h)}if(this.isLineLoop){const v=Hl(this,e,jo,l,g-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Gc.fromBufferAttribute(o,r),Wc.fromBufferAttribute(o,s),n.distanceSqToSegment(Gc,Wc,Ff,Gv)>i)return;Ff.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ff);if(!(l<e.near||l>e.far))return{distance:l,point:Gv.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Wv=new U,Xv=new U;class ML extends Jp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Wv.fromBufferAttribute(n,r),Xv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wv.distanceTo(Xv);e.setAttribute("lineDistance",new Li(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class EL extends Jp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class bx extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $v=new Be,xh=new pu,Vl=new ui,Gl=new U;class TL extends dt{constructor(e=new fi,n=new bx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(r),Vl.radius+=s,e.ray.intersectsSphere(Vl)===!1)return;$v.copy(r).invert(),xh.copy(e.ray).applyMatrix4($v);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Gl.fromBufferAttribute(f,m),jv(Gl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Gl.fromBufferAttribute(f,g),jv(Gl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jv(t,e,n,i,r,s,o){const a=xh.distanceSqToPoint(t);if(a<n){const l=new U;xh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class em extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ox,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends em{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Wl(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function wL(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function AL(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function Yv(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let l=0;l!==e;++l)r[o++]=t[a+l]}return r}function Rx(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)}class ja{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){const a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bL extends ja{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bg,endingEnd:Bg}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zg:s=e,a=2*n-i;break;case Hg:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zg:o=e,l=2*i-n;break;case Hg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}const c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let b=0;b!==a;++b)s[b]=h*o[u+b]+_*o[c+b]+y*o[l+b]+x*o[f+b];return s}}class RL extends ja{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class CL extends ja{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wl(n,this.TimeBufferType),this.values=Wl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Wl(e.times,Array),values:Wl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new CL(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new RL(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bL(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Na:n=this.InterpolantFactoryMethodDiscrete;break;case Da:n=this.InterpolantFactoryMethodLinear;break;case lf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return lf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&wL(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===lf,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){const v=n[f+g];if(v!==n[d+g]||v!==n[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Da;class Ao extends hi{constructor(e,n,i){super(e,n,i)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Na;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class Cx extends hi{}Cx.prototype.ValueTypeName="color";class vo extends hi{}vo.prototype.ValueTypeName="number";class PL extends ja{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n);let c=e*a;for(let u=c+a;c!==u;c+=4)Tr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class _o extends hi{InterpolantFactoryMethodLinear(e){return new PL(this.times,this.values,this.getValueSize(),e)}}_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends hi{constructor(e,n,i){super(e,n,i)}}bo.prototype.ValueTypeName="string";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Na;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends hi{}yo.prototype.ValueTypeName="vector";class LL{constructor(e="",n=-1,i=[],r=Cw){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(NL(i[o]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(hi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=AL(l);l=Yv(l,1,u),c=Yv(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new vo(".morphTargetInfluences["+n[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],n,i));return o}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,g,v){if(p.length!==0){const m=[],h=[];Rx(p,m,h,g),m.length!==0&&v.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),h.push(y.morphTarget===v?1:0)}r.push(new vo(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+n[f].name+"]";i(yo,p+".position",d,"pos",r),i(_o,p+".quaternion",d,"rot",r),i(yo,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function IL(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return Cx;case"quaternion":return _o;case"bool":case"boolean":return Ao;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function NL(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=IL(t.type);if(t.times===void 0){const n=[],i=[];Rx(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const nr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class DL{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const UL=new DL;class Ro{constructor(e){this.manager=e!==void 0?e:UL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class FL extends Error{constructor(e,n){super(e),this.response=n}}class Px extends Ro{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(xi[e]!==void 0){xi[e].push({onLoad:n,onProgress:i,onError:r});return}xi[e]=[],xi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){_();function _(){f.read().then(({done:y,value:x})=>{if(y)h.close();else{v+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,w=u.length;A<w;A++){const C=u[A];C.onProgress&&C.onProgress(b)}h.enqueue(x),_()}},y=>{h.error(y)})}}});return new Response(m)}else throw new FL(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{nr.add(e,c);const u=xi[e];delete xi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class OL extends Ro{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ua("img");function l(){u(),nr.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Lx extends Ro{constructor(e){super(e)}load(e,n,i,r){const s=new Dt,o=new OL(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class vu extends dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class kL extends vu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Of=new Be,Kv=new U,qv=new U;class tm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Kv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kv),qv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(qv),n.updateMatrixWorld(),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BL extends tm{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=mo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zL extends vu{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new BL}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zv=new Be,Yo=new U,kf=new U;class HL extends tm{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yo),kf.copy(i.position),kf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(kf),i.updateMatrixWorld(),r.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Zv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zv)}}class VL extends vu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new HL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GL extends tm{constructor(){super(new Kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WL extends vu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new GL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ha{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,r=e.length;i<r;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class XL extends Ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{n&&n(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return nr.add(e,c),n&&n(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),nr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});nr.add(e,l),s.manager.itemStart(e)}}class $L{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qv(){return(typeof performance>"u"?Date:performance).now()}const nm="\\[\\]\\.:\\/",jL=new RegExp("["+nm+"]","g"),im="[^"+nm+"]",YL="[^"+nm.replace("\\.","")+"]",KL=/((?:WC+[\/:])*)/.source.replace("WC",im),qL=/(WCOD+)?/.source.replace("WCOD",YL),ZL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",im),QL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",im),JL=new RegExp("^"+KL+qL+ZL+QL+"$"),e2=["material","materials","bones","map"];class t2{constructor(e,n,i){const r=i||it.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class it{constructor(e,n,i){this.path=n,this.parsedPath=i||it.parseTrackName(n),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,n,i):new it(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jL,"")}static parseTrackName(e){const n=JL.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);e2.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=it.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=t2;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class n2 extends ns{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);const Rs=new Kn(0,0,0,"YXZ"),Cs=new U,i2={type:"change"},r2={type:"lock"},s2={type:"unlock"},Jv=Math.PI/2;class o2 extends n2{constructor(e,n=null){super(e,n),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=a2.bind(this),this._onPointerlockChange=l2.bind(this),this._onPointerlockError=c2.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const n=this.object;Cs.setFromMatrixColumn(n.matrix,0),Cs.crossVectors(n.up,Cs),n.position.addScaledVector(Cs,e)}moveRight(e){if(this.enabled===!1)return;const n=this.object;Cs.setFromMatrixColumn(n.matrix,0),n.position.addScaledVector(Cs,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function a2(t){if(this.enabled===!1||this.isLocked===!1)return;const e=t.movementX||t.mozMovementX||t.webkitMovementX||0,n=t.movementY||t.mozMovementY||t.webkitMovementY||0,i=this.object;Rs.setFromQuaternion(i.quaternion),Rs.y-=e*.002*this.pointerSpeed,Rs.x-=n*.002*this.pointerSpeed,Rs.x=Math.max(Jv-this.maxPolarAngle,Math.min(Jv-this.minPolarAngle,Rs.x)),i.quaternion.setFromEuler(Rs),this.dispatchEvent(i2)}function l2(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(r2),this.isLocked=!0):(this.dispatchEvent(s2),this.isLocked=!1)}function c2(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const u2=parseInt(fu.replace(/\D+/g,""));function e_(t,e){if(e===Pw)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===gh||e===sx){let n=t.getIndex();if(n===null){const o=[],a=t.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);t.setIndex(o),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=n.count-2,r=[];if(n)if(e===gh)for(let o=1;o<=i;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2))):(r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}function Xc(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}const Wr="srgb",Ii="srgb-linear",t_=3001,f2=3e3;class d2 extends Ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new v2(n)}),this.register(function(n){return new _2(n)}),this.register(function(n){return new b2(n)}),this.register(function(n){return new R2(n)}),this.register(function(n){return new C2(n)}),this.register(function(n){return new x2(n)}),this.register(function(n){return new S2(n)}),this.register(function(n){return new M2(n)}),this.register(function(n){return new E2(n)}),this.register(function(n){return new g2(n)}),this.register(function(n){return new T2(n)}),this.register(function(n){return new y2(n)}),this.register(function(n){return new A2(n)}),this.register(function(n){return new w2(n)}),this.register(function(n){return new p2(n)}),this.register(function(n){return new P2(n)}),this.register(function(n){return new L2(n)})}load(e,n,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ha.extractUrlBase(e);o=ha.resolveURL(c,this.path)}else o=ha.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Px(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){n(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Xc(new Uint8Array(e.slice(0,4)))===Ix){try{o[Ve.KHR_BINARY_GLTF]=new I2(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(Xc(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new X2(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:o[u]=new m2;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new N2(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[u]=new D2;break;case Ve.KHR_MESH_QUANTIZATION:o[u]=new U2;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,n,r,s)})}}function h2(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class p2{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,i="light:"+e;let r=n.cache.get(i);if(r)return r;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ii);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new WL(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new VL(u),c.distance=f;break;case"spot":c=new zL(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(n.cache,a,l)})}}class m2{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Vr}extendParams(e,n,i){const r=[];e.color=new De(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ii),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Wr))}return Promise.all(r)}}class g2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class v2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class _2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class y2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class x2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new De(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],Ii)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,Wr)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class S2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class M2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return n.attenuationColor=new De().setRGB(a[0],a[1],a[2],Ii),Promise.all(s)}}class E2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class T2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return n.specularColor=new De().setRGB(a[0],a[1],a[2],Ii),o.specularColorTexture!==void 0&&s.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,Wr)),Promise.all(s)}}class w2{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(s)}}class A2{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class b2{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,o)}}class R2{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class C2{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class P2{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,r.mode,r.filter),p})})}else return null}}class L2{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==wn.TRIANGLES&&c.mode!==wn.TRIANGLE_STRIP&&c.mode!==wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of f){const v=new Be,m=new U,h=new Tr,_=new U(1,1,1),y=new SL(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,h,_));for(const x in l)if(x==="_COLOR_0"){const b=l[x];y.instanceColor=new yh(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Ix="glTF",Ko=12,n_={JSON:1313821514,BIN:5130562};class I2{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Ko);if(this.header={magic:Xc(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Ix)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ko,r=new DataView(e,Ko);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===n_.JSON){const l=new Uint8Array(e,Ko+s,o);this.content=Xc(l)}else if(a===n_.BIN){const l=Ko+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class N2{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Sh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Sh[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=eo[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return n.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}f(p)},a,c,Ii,d)})})}}class D2{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class U2{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Nx extends ja{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)n[o]=i[s+o];return n}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-n,f=(i-n)/u,d=f*f,p=d*f,g=e*c,v=g-c,m=-2*p+3*d,h=p-d,_=1-m,y=h-d+f;for(let x=0;x!==a;x++){const b=o[v+x+a],A=o[v+x+l]*u,w=o[g+x+a],C=o[g+x]*u;s[x]=_*b+y*A+m*w+h*C}return s}}const F2=new Tr;class O2 extends Nx{interpolate_(e,n,i,r){const s=super.interpolate_(e,n,i,r);return F2.fromArray(s).normalize().toArray(s),s}}const wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},i_={9728:Qt,9729:gn,9984:Ky,9985:sc,9986:ea,9987:Ri},r_={33071:si,33648:fo,10497:uo},Bf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...u2>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},k2={CUBICSPLINE:void 0,LINEAR:Da,STEP:Na},zf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function B2(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new em({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),t.DefaultMaterial}function Ir(t,e,n){for(const i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function Ti(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function z2(t,e,n){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):t.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):t.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):t.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(t.morphAttributes.position=u),r&&(t.morphAttributes.normal=f),s&&(t.morphAttributes.color=d),t.morphTargetsRelative=!0,t})}function H2(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function V2(t){let e;const n=t.extensions&&t.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Hf(n.attributes):e=t.indices+":"+Hf(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+Hf(t.targets[i]);return e}function Hf(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Mh(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function G2(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const W2=new Be;class X2{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new h2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new Lx(this.options.manager):this.textureLoader=new XL(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Px(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ir(s,a,r),Ti(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const o=n[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=e(n[i]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=e(n[r]);s&&i.push(s)}return i}getDependency(e,n){const i=e+":"+n;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ha.resolveURL(n.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Bf[r.type],a=eo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new en(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Bf[r.type],c=eo[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==f){const h=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=n.cache.get(_);y||(v=new c(a,h*p,r.count*p/u),y=new gL(v,p/u),n.cache.add(_,y)),m=new Zp(y,l,d%p/u,g)}else a===null?v=new c(r.count*l):v=new c(a,d,r.count*l),m=new en(v,l,g);if(r.sparse!==void 0){const h=Bf.SCALAR,_=eo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,b=new _(o[1],y,r.sparse.count*h),A=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized));for(let w=0,C=b.length;w<C;w++){const E=b[w];if(m.setX(E,A[w*l]),l>=2&&m.setY(E,A[w*l+1]),l>=3&&m.setZ(E,A[w*l+2]),l>=4&&m.setW(E,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const n=this.json,i=this.options,s=n.textures[e].source,o=n.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,n,i){const r=this,s=this.json,o=s.textures[e],a=s.images[n],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=i_[d.magFilter]||gn,u.minFilter=i_[d.minFilter]||Ri,u.wrapS=r_[d.wrapS]||uo,u.wrapT=r_[d.wrapT]||uo,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let g=d;n.isImageBitmapLoader===!0&&(g=function(v){const m=new Dt(v);m.needsUpdate=!0,d(m)}),n.load(ha.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Ti(f,o),f.userData.mimeType=o.mimeType||G2(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(typeof r=="number"&&(r=r===t_?Wr:Ii),"colorSpace"in o?o.colorSpace=r:o.encoding=r===Wr?t_:f2),e[n]=o,o})}assignFinalMaterial(e){const n=e.geometry;let i=e.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new bx,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ax,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return em}loadMaterial(e){const n=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const f=r[Ve.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,n))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ii),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(n.assignTexture(a,"map",f.baseColorTexture,Wr)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(n.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Hn);const u=s.alphaMode||zf.OPAQUE;if(u===zf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===zf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Vr&&(c.push(n.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Vr&&(c.push(n.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Vr){const f=s.emissiveFactor;a.emissive=new De().setRGB(f[0],f[1],f[2],Ii)}return s.emissiveTexture!==void 0&&o!==Vr&&c.push(n.assignTexture(a,"emissiveMap",s.emissiveTexture,Wr)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Ti(f,s),n.associations.set(f,{materials:e}),s.extensions&&Ir(r,f,s),f})}createUniqueName(e){const n=it.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(l){return s_(l,a,n)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=V2(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=s_(new fi,c,n),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const n=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?B2(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=o[p];let h;const _=c[p];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new _L(v,_):new _n(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?h.geometry=e_(h.geometry,sx):m.mode===wn.TRIANGLE_FAN&&(h.geometry=e_(h.geometry,gh));else if(m.mode===wn.LINES)h=new ML(v,_);else if(m.mode===wn.LINE_STRIP)h=new Jp(v,_);else if(m.mode===wn.LINE_LOOP)h=new EL(v,_);else if(m.mode===wn.POINTS)h=new TL(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&H2(h,s),h.name=n.createUniqueName(s.name||"mesh_"+e),Ti(h,s),m.extensions&&Ir(r,h,m),n.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)n.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Ir(r,f[0],s),f[0];const d=new Gr;s.extensions&&Ir(r,d,s),n.associations.set(d,{meshes:e});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}loadCamera(e){let n;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Zt(iA.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new Kp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),Ti(n,i),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new Be;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Qp(a,l)})}loadAnimation(e){const n=this.json,i=this,r=n.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],g=f[2],v=f[3],m=f[4],h=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],b=p[_],A=g[_],w=v[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=i._createAnimationTracks(x,b,A,w,C);if(E)for(let S=0;S<E.length;S++)h.push(E[S])}return new LL(s,void 0,h)})}createNodeMesh(e){const n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const n=this.json,i=this,r=n.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,W2)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Tx:c.length>1?u=new Gr:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Ti(u,s),s.extensions&&Ir(i,u,s),s.matrix!==void 0){const f=new Be;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const n=this.extensions,i=this.json.scenes[e],r=this,s=new Gr;i.name&&(s.name=r.createUniqueName(i.name)),Ti(s,i),i.extensions&&Ir(n,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof li||d instanceof Dt)&&f.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,n,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Yi[s.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Yi[s.path]){case Yi.weights:c=vo;break;case Yi.rotation:c=_o;break;case Yi.position:case Yi.scale:c=yo;break;default:switch(i.itemSize){case 1:c=vo;break;case 2:case 3:default:c=yo;break}break}const u=r.interpolation!==void 0?k2[r.interpolation]:Da,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Yi[s.path],n.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const i=Mh(n.constructor),r=new Float32Array(n.length);for(let s=0,o=n.length;s<o;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof _o?O2:Nx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $2(t,e,n){const i=e.attributes,r=new Bi;if(i.POSITION!==void 0){const a=n.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=Mh(eo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new U,l=new U;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=n.json.accessors[f.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=Mh(eo[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}t.boundingBox=r;const o=new ui;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=o}function s_(t,e,n){const i=e.attributes,r=[];function s(o,a){return n.getDependency("accessor",o).then(function(l){t.setAttribute(a,l)})}for(const o in i){const a=Sh[o]||o.toLowerCase();a in t.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!t.index){const o=n.getDependency("accessor",e.indices).then(function(a){t.setIndex(a)});r.push(o)}return Ti(t,e),$2(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?z2(t,e.targets,n):t})}const j2=({scene:t})=>{const e=ae.useRef(null),[n,i]=ae.useState([]);let r,s=t.speed;const o=new U,a={w:!1,a:!1,s:!1,d:!1};let l=!1;const c=new $L,u=(p,g)=>{r=new o2(p,g),g.addEventListener("click",()=>{r.lock()}),document.addEventListener("keydown",v=>{switch(v.code){case"KeyW":a.w=!0;break;case"KeyA":a.a=!0;break;case"KeyS":a.s=!0;break;case"KeyD":a.d=!0;break;case"ShiftLeft":case"ShiftRight":l=!0;break}}),document.addEventListener("keyup",v=>{switch(v.code){case"KeyW":a.w=!1;break;case"KeyA":a.a=!1;break;case"KeyS":a.s=!1;break;case"KeyD":a.d=!1;break;case"ShiftLeft":case"ShiftRight":l=!1;break}}),g.addEventListener("wheel",v=>{v.deltaY<0?s+=t.speed*.25:v.deltaY>0&&(s=Math.max(1,s-t.speed*.25))})},f=(p,g)=>{if(!r||!r.isLocked)return;o.set(0,0,0);const v=new U(0,0,-1).applyQuaternion(p.quaternion),m=new U(1,0,0).applyQuaternion(p.quaternion),h=l?s*2:s;a.w&&o.addScaledVector(v,h*g),a.s&&o.addScaledVector(v,-h*g),a.a&&o.addScaledVector(m,-h*g),a.d&&o.addScaledVector(m,h*g),r.getObject().position.add(o)},d=()=>r&&r.isLocked;return ae.useEffect(()=>{(async()=>{try{const g=`/assets${t.path}/Content.txt`,v=await fetch(g);if(!v.ok){console.error(`Failed to fetch Content.txt from ${g}`);return}const h=(await v.text()).split(`
`).map(_=>_.trim()).filter(_=>_!=="");i(h)}catch(g){console.error("Error fetching Content.txt:",g)}})()},[t.path]),ae.useEffect(()=>{const p=e.current;if(!p){console.error("Mount ref is null");return}const g=p.clientWidth||window.innerWidth,v=p.clientHeight||window.innerHeight,m=new pL({antialias:!0});m.setSize(g,v),m.setPixelRatio(window.devicePixelRatio),m.setClearColor(11184810),p.appendChild(m.domElement),m.domElement.style.position="absolute",m.domElement.style.top="0",m.domElement.style.left="0",m.domElement.style.width="100%",m.domElement.style.height="100%";const h=new mL,_=new Zt(75,g/v,.1,1e3);_.position.set(t.startPosX,t.startPosY,t.startPosZ),_.rotation.set(t.startRotX,t.startRotY,t.startRotZ),u(_,m.domElement);const y=new kL(16777215,4473924,2);y.position.set(0,1,0),h.add(y),new Lx().load(`/assets/Skyboxes/${t.skybox}`,function(E){E.mapping=kc,h.background=E});const b=new d2;n.forEach(E=>{const S=`/assets${t.path}/${E}`;b.load(S,L=>{const H=L.scene;H.traverse(B=>{if(B.isMesh){const X=B;Array.isArray(X.material)?X.material.forEach(W=>{A(W,X,E)}):A(X.material,X,E)}}),h.add(H)},L=>{console.error(`Error loading ${S}:`,L)})});function A(E,S,L){const H=["map","normalMap","alphaMap","roughnessMap","metalnessMap","bumpMap","displacementMap","emissiveMap","lightMap","aoMap"];E.premultipliedAlpha=!0,E.depthWrite=!0,E.side=ci,E.opacity=1;const X=/Opacity(\d+\.\d+)/.exec(E.name);if(X){const j=parseFloat(X[1]);E.opacity=j}const W=E.name,G=W.includes("ClampS"),K=W.includes("ClampT"),I=W.includes("MirrorS"),$=W.includes("MirrorT");I||$?H.forEach(function(j){const ie=E[j];ie&&(I&&(ie.wrapS=fo),$&&(ie.wrapT=fo),ie.needsUpdate=!0)}):G&&K&&H.forEach(function(j){const ie=E[j];ie&&(ie.wrapS=si,ie.wrapT=si,ie.needsUpdate=!0)}),(W.includes("TopFlag")||W.includes("UNTEXTURED"))&&(E.polygonOffset=!0,E.polygonOffsetFactor=-1,E.polygonOffsetUnits=-1,S.renderOrder=999),W.includes("CullBoth")&&(E.side=Hn),L.includes("Alpha")&&(E.transparent=!0,E.alphaTest=.003,E.depthWrite=!1,S.renderOrder=9999)}const w=()=>{requestAnimationFrame(w);const E=c.getDelta();d()&&f(_,E),m.render(h,_)};w();const C=()=>{const E=p.clientWidth||window.innerWidth,S=p.clientHeight||window.innerHeight;m.setSize(E,S),_.aspect=E/S,_.updateProjectionMatrix()};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),p.contains(m.domElement)&&(p.removeChild(m.domElement),m.dispose())}},[n,t.startPosX,t.startPosY]),xe.jsx("div",{ref:e})};function Y2({setupScene:t}){return xe.jsx(j2,{scene:t})}const K2="_control_7u14k_1",q2="_link_7u14k_29",Z2="_chevron_7u14k_63",o_={control:K2,link:q2,chevron:Z2},Q2=[{label:"GoldenEye 007",links:[{label:"Dam",path:"/GoldenEye/Dam",renderer:"ThreeJs",speed:25,skybox:"blue.png",startPosX:621.6265910446157,startPosY:6.3358213464629,startPosZ:629.8439472212391,startRotX:-.037711177685525774,startRotY:1.0116802326496004,startRotZ:.03197294540578007},{label:"Facility",path:"/GoldenEye/Facility",renderer:"ThreeJs",speed:25,skybox:"blue.png",startPosX:-656.3472958065867,startPosY:45.39142087488991,startPosZ:15.483453691484591,startRotX:-2.2775483196910242,startRotY:1.5276646134062262,startRotZ:2.2780078403136947},{label:"Archives",path:"/GoldenEye/Archives",renderer:"ThreeJs",speed:25,skybox:"blue.png",startPosX:98.64691632898699,startPosY:10.018699057476924,startPosZ:170.34038117443268,startRotX:-2.951983302859254,startRotY:1.2489834964284174,startRotZ:2.9615026088592176},{label:"Complex",path:"/GoldenEye/Complex",renderer:"ThreeJs",speed:28,skybox:"blue.png",startPosX:114.96759148517313,startPosY:50.98467751193548,startPosZ:64.05877661712408,startRotX:-3.0989594528705977,startRotY:1.4851078257592285,startRotZ:3.0991156862406553},{label:"Aztec",path:"/GoldenEye/Aztec",renderer:"ThreeJs",speed:18,skybox:"blue.png",startPosX:307.1357415336462,startPosY:5.0677302893706715,startPosZ:-61.88404018086294,startRotX:1.5939641760507302,startRotY:1.5364347107930187,startRotZ:-1.5939778552614134}]},{label:"Perfect Dark",links:[{label:"Chicago Stealth",path:"/PerfectDark/ChicagoStealth",renderer:"ThreeJs",speed:25,skybox:"blue.png",startPosX:0,startPosY:0,startPosZ:0,startRotX:0,startRotY:0,startRotZ:0},{label:"Pelagic",path:"/PerfectDark/PelagicIIExploration",renderer:"ThreeJs",speed:30,skybox:"blue.png",startPosX:0,startPosY:0,startPosZ:0,startRotX:0,startRotY:0,startRotZ:0}]}];class J2{constructor(e,n,i,r,s,o,a,l,c,u,f){this.name=e,this.path=n,this.speed=r,this.renderer=i,this.skybox=s,this.startPosX=o,this.startPosY=a,this.startPosZ=l,this.startRotX=c,this.startRotY=u,this.startRotZ=f}}function eI({label:t,initiallyOpened:e,links:n,onSceneChange:i}){const r=Array.isArray(n),[s,o]=ae.useState(e||!1),a=(r?n:[]).sort((l,c)=>l.label.localeCompare(c.label)).map(l=>xe.jsx(Np,{component:"a",style:{cursor:"pointer"},className:o_.link,onClick:c=>{c.preventDefault();const u=new J2(l.label,l.path,l.renderer,l.speed,l.skybox,l.startPosX,l.startPosY,l.startPosZ,l.startRotX,l.startRotY,l.startRotZ);i(u)},children:l.label},l.label));return xe.jsxs(xe.Fragment,{children:[xe.jsx(Lp,{onClick:()=>o(l=>!l),className:o_.control,style:{borderRadius:0,borderBottom:"1px solid gray",borderTop:"1px solid gray"},children:xe.jsx(Ip,{justify:"space-between",gap:0,children:xe.jsx(tn,{style:{display:"flex",alignItems:"center"},children:xe.jsx(tn,{ml:"md",children:xe.jsx("h4",{style:{margin:0},children:t})})})})}),r?xe.jsx(Vy,{in:s,style:{textAlign:"left"},children:a}):null]})}function tI({onSceneChange:t}){return xe.jsx(tn,{mih:220,children:Q2.map(e=>xe.jsx(eI,{...e,onSceneChange:t},e.label))})}function nI({onSceneChange:t}){return xe.jsxs("div",{style:{padding:0,margin:0},children:[xe.jsx("h2",{style:{paddingBottom:19.92,marginBottom:0},children:"PerfectEye"}),xe.jsx(tI,{onSceneChange:t})]})}const iI={fontFamily:"Montserrat, sans-serif",defaultRadius:"md"};function rI(){const[t,e]=ae.useState(null),n=200;return xe.jsx(Uy,{theme:iI,forceColorScheme:"dark",children:xe.jsxs($n,{style:{overflow:"hidden"},children:[xe.jsx(uu,{style:{marginLeft:n,height:"25px"},children:xe.jsx("div",{children:t?t.name:""})}),xe.jsx($n.Navbar,{style:{width:n,position:"fixed",height:"100vh"},children:xe.jsx(nI,{onSceneChange:e})}),xe.jsx($n.Main,{style:{display:"flex",alignItems:"center",marginLeft:n,height:"calc(100vh - 25px)",overflow:"hidden"},children:xe.jsx("div",{style:{width:"100%",height:"100%"},children:t?xe.jsx(Y2,{setupScene:t}):"Select a map on the left to begin"})})]})})}xy(document.getElementById("root")).render(xe.jsx(ae.StrictMode,{children:xe.jsx(rI,{})}));
