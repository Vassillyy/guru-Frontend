function tb(a,s){for(var i=0;i<s.length;i++){const c=s[i];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in a)){const m=Object.getOwnPropertyDescriptor(c,d);m&&Object.defineProperty(a,d,m.get?m:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=i(d);fetch(d.href,m)}})();function dg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Qc={exports:{}},Pl={};var vf;function nb(){if(vf)return Pl;vf=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function i(c,d,m){var f=null;if(m!==void 0&&(f=""+m),d.key!==void 0&&(f=""+d.key),"key"in d){m={};for(var h in d)h!=="key"&&(m[h]=d[h])}else m=d;return d=m.ref,{$$typeof:a,type:c,key:f,ref:d!==void 0?d:null,props:m}}return Pl.Fragment=s,Pl.jsx=i,Pl.jsxs=i,Pl}var xf;function ob(){return xf||(xf=1,Qc.exports=nb()),Qc.exports}var w=ob(),$c={exports:{}},fe={};var Sf;function ab(){if(Sf)return fe;Sf=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),A=Symbol.iterator;function U(S){return S===null||typeof S!="object"?null:(S=A&&S[A]||S["@@iterator"],typeof S=="function"?S:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function K(S,z,q){this.props=S,this.context=z,this.refs=J,this.updater=q||I}K.prototype.isReactComponent={},K.prototype.setState=function(S,z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,z,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function G(){}G.prototype=K.prototype;function ne(S,z,q){this.props=S,this.context=z,this.refs=J,this.updater=q||I}var Ne=ne.prototype=new G;Ne.constructor=ne,X(Ne,K.prototype),Ne.isPureReactComponent=!0;var ve=Array.isArray;function Ee(){}var O={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function ye(S,z,q){var $=q.ref;return{$$typeof:a,type:S,key:z,ref:$!==void 0?$:null,props:q}}function He(S,z){return ye(S.type,z,S.props)}function je(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function ke(S){var z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(q){return z[q]})}var ht=/\/+/g;function Ie(S,z){return typeof S=="object"&&S!==null&&S.key!=null?ke(""+S.key):z.toString(36)}function xe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Ee,Ee):(S.status="pending",S.then(function(z){S.status==="pending"&&(S.status="fulfilled",S.value=z)},function(z){S.status==="pending"&&(S.status="rejected",S.reason=z)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function L(S,z,q,$,ie){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var Re=!1;if(S===null)Re=!0;else switch(pe){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(S.$$typeof){case a:case s:Re=!0;break;case E:return Re=S._init,L(Re(S._payload),z,q,$,ie)}}if(Re)return ie=ie(S),Re=$===""?"."+Ie(S,0):$,ve(ie)?(q="",Re!=null&&(q=Re.replace(ht,"$&/")+"/"),L(ie,z,q,"",function(No){return No})):ie!=null&&(je(ie)&&(ie=He(ie,q+(ie.key==null||S&&S.key===ie.key?"":(""+ie.key).replace(ht,"$&/")+"/")+Re)),z.push(ie)),1;Re=0;var rt=$===""?".":$+":";if(ve(S))for(var $e=0;$e<S.length;$e++)$=S[$e],pe=rt+Ie($,$e),Re+=L($,z,q,pe,ie);else if($e=U(S),typeof $e=="function")for(S=$e.call(S),$e=0;!($=S.next()).done;)$=$.value,pe=rt+Ie($,$e++),Re+=L($,z,q,pe,ie);else if(pe==="object"){if(typeof S.then=="function")return L(xe(S),z,q,$,ie);throw z=String(S),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return Re}function F(S,z,q){if(S==null)return S;var $=[],ie=0;return L(S,$,"","",function(pe){return z.call(q,pe,ie++)}),$}function Z(S){if(S._status===-1){var z=S._result;z=z(),z.then(function(q){(S._status===0||S._status===-1)&&(S._status=1,S._result=q)},function(q){(S._status===0||S._status===-1)&&(S._status=2,S._result=q)}),S._status===-1&&(S._status=0,S._result=z)}if(S._status===1)return S._result.default;throw S._result}var me=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ge={map:F,forEach:function(S,z,q){F(S,function(){z.apply(this,arguments)},q)},count:function(S){var z=0;return F(S,function(){z++}),z},toArray:function(S){return F(S,function(z){return z})||[]},only:function(S){if(!je(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return fe.Activity=x,fe.Children=ge,fe.Component=K,fe.Fragment=i,fe.Profiler=d,fe.PureComponent=ne,fe.StrictMode=c,fe.Suspense=y,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.__COMPILER_RUNTIME={__proto__:null,c:function(S){return O.H.useMemoCache(S)}},fe.cache=function(S){return function(){return S.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(S,z,q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var $=X({},S.props),ie=S.key;if(z!=null)for(pe in z.key!==void 0&&(ie=""+z.key),z)!le.call(z,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&z.ref===void 0||($[pe]=z[pe]);var pe=arguments.length-2;if(pe===1)$.children=q;else if(1<pe){for(var Re=Array(pe),rt=0;rt<pe;rt++)Re[rt]=arguments[rt+2];$.children=Re}return ye(S.type,ie,$)},fe.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},fe.createElement=function(S,z,q){var $,ie={},pe=null;if(z!=null)for($ in z.key!==void 0&&(pe=""+z.key),z)le.call(z,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ie[$]=z[$]);var Re=arguments.length-2;if(Re===1)ie.children=q;else if(1<Re){for(var rt=Array(Re),$e=0;$e<Re;$e++)rt[$e]=arguments[$e+2];ie.children=rt}if(S&&S.defaultProps)for($ in Re=S.defaultProps,Re)ie[$]===void 0&&(ie[$]=Re[$]);return ye(S,pe,ie)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(S){return{$$typeof:h,render:S}},fe.isValidElement=je,fe.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:Z}},fe.memo=function(S,z){return{$$typeof:p,type:S,compare:z===void 0?null:z}},fe.startTransition=function(S){var z=O.T,q={};O.T=q;try{var $=S(),ie=O.S;ie!==null&&ie(q,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Ee,me)}catch(pe){me(pe)}finally{z!==null&&q.types!==null&&(z.types=q.types),O.T=z}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(S){return O.H.use(S)},fe.useActionState=function(S,z,q){return O.H.useActionState(S,z,q)},fe.useCallback=function(S,z){return O.H.useCallback(S,z)},fe.useContext=function(S){return O.H.useContext(S)},fe.useDebugValue=function(){},fe.useDeferredValue=function(S,z){return O.H.useDeferredValue(S,z)},fe.useEffect=function(S,z){return O.H.useEffect(S,z)},fe.useEffectEvent=function(S){return O.H.useEffectEvent(S)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(S,z,q){return O.H.useImperativeHandle(S,z,q)},fe.useInsertionEffect=function(S,z){return O.H.useInsertionEffect(S,z)},fe.useLayoutEffect=function(S,z){return O.H.useLayoutEffect(S,z)},fe.useMemo=function(S,z){return O.H.useMemo(S,z)},fe.useOptimistic=function(S,z){return O.H.useOptimistic(S,z)},fe.useReducer=function(S,z,q){return O.H.useReducer(S,z,q)},fe.useRef=function(S){return O.H.useRef(S)},fe.useState=function(S){return O.H.useState(S)},fe.useSyncExternalStore=function(S,z,q){return O.H.useSyncExternalStore(S,z,q)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.2.3",fe}var Ef;function bu(){return Ef||(Ef=1,$c.exports=ab()),$c.exports}var N=bu();const lb=dg(N),rb=tb({__proto__:null,default:lb},[N]);var Wc={exports:{}},Il={},eu={exports:{}},tu={};var Tf;function sb(){return Tf||(Tf=1,(function(a){function s(L,F){var Z=L.length;L.push(F);e:for(;0<Z;){var me=Z-1>>>1,ge=L[me];if(0<d(ge,F))L[me]=F,L[Z]=ge,Z=me;else break e}}function i(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var F=L[0],Z=L.pop();if(Z!==F){L[0]=Z;e:for(var me=0,ge=L.length,S=ge>>>1;me<S;){var z=2*(me+1)-1,q=L[z],$=z+1,ie=L[$];if(0>d(q,Z))$<ge&&0>d(ie,q)?(L[me]=ie,L[$]=Z,me=$):(L[me]=q,L[z]=Z,me=z);else if($<ge&&0>d(ie,Z))L[me]=ie,L[$]=Z,me=$;else break e}}return F}function d(L,F){var Z=L.sortIndex-F.sortIndex;return Z!==0?Z:L.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var y=[],p=[],E=1,x=null,A=3,U=!1,I=!1,X=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function Ne(L){for(var F=i(p);F!==null;){if(F.callback===null)c(p);else if(F.startTime<=L)c(p),F.sortIndex=F.expirationTime,s(y,F);else break;F=i(p)}}function ve(L){if(X=!1,Ne(L),!I)if(i(y)!==null)I=!0,Ee||(Ee=!0,ke());else{var F=i(p);F!==null&&xe(ve,F.startTime-L)}}var Ee=!1,O=-1,le=5,ye=-1;function He(){return J?!0:!(a.unstable_now()-ye<le)}function je(){if(J=!1,Ee){var L=a.unstable_now();ye=L;var F=!0;try{e:{I=!1,X&&(X=!1,G(O),O=-1),U=!0;var Z=A;try{t:{for(Ne(L),x=i(y);x!==null&&!(x.expirationTime>L&&He());){var me=x.callback;if(typeof me=="function"){x.callback=null,A=x.priorityLevel;var ge=me(x.expirationTime<=L);if(L=a.unstable_now(),typeof ge=="function"){x.callback=ge,Ne(L),F=!0;break t}x===i(y)&&c(y),Ne(L)}else c(y);x=i(y)}if(x!==null)F=!0;else{var S=i(p);S!==null&&xe(ve,S.startTime-L),F=!1}}break e}finally{x=null,A=Z,U=!1}F=void 0}}finally{F?ke():Ee=!1}}}var ke;if(typeof ne=="function")ke=function(){ne(je)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Ie=ht.port2;ht.port1.onmessage=je,ke=function(){Ie.postMessage(null)}}else ke=function(){K(je,0)};function xe(L,F){O=K(function(){L(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_next=function(L){switch(A){case 1:case 2:case 3:var F=3;break;default:F=A}var Z=A;A=F;try{return L()}finally{A=Z}},a.unstable_requestPaint=function(){J=!0},a.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=A;A=L;try{return F()}finally{A=Z}},a.unstable_scheduleCallback=function(L,F,Z){var me=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Z+ge,L={id:E++,callback:F,priorityLevel:L,startTime:Z,expirationTime:ge,sortIndex:-1},Z>me?(L.sortIndex=Z,s(p,L),i(y)===null&&L===i(p)&&(X?(G(O),O=-1):X=!0,xe(ve,Z-me))):(L.sortIndex=ge,s(y,L),I||U||(I=!0,Ee||(Ee=!0,ke()))),L},a.unstable_shouldYield=He,a.unstable_wrapCallback=function(L){var F=A;return function(){var Z=A;A=F;try{return L.apply(this,arguments)}finally{A=Z}}}})(tu)),tu}var wf;function ib(){return wf||(wf=1,eu.exports=sb()),eu.exports}var nu={exports:{}},Ot={};var jf;function cb(){if(jf)return Ot;jf=1;var a=bu();function s(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var c={d:{f:i,r:function(){throw Error(s(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(y,p,E){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:y,containerInfo:p,implementation:E}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ot.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return m(y,p,null,E)},Ot.flushSync=function(y){var p=f.T,E=c.p;try{if(f.T=null,c.p=2,y)return y()}finally{f.T=p,c.p=E,c.d.f()}},Ot.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(y,p))},Ot.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},Ot.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,x=h(E,p.crossOrigin),A=typeof p.integrity=="string"?p.integrity:void 0,U=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?c.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:A,fetchPriority:U}):E==="script"&&c.d.X(y,{crossOrigin:x,integrity:A,fetchPriority:U,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ot.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=h(p.as,p.crossOrigin);c.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(y)},Ot.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,x=h(E,p.crossOrigin);c.d.L(y,E,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ot.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=h(p.as,p.crossOrigin);c.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(y)},Ot.requestFormReset=function(y){c.d.r(y)},Ot.unstable_batchedUpdates=function(y,p){return y(p)},Ot.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},Ot.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ot.version="19.2.3",Ot}var Mf;function mg(){if(Mf)return nu.exports;Mf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),nu.exports=cb(),nu.exports}var Of;function ub(){if(Of)return Il;Of=1;var a=ib(),s=bu(),i=mg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,o=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return y(l),e;if(r===o)return y(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==o.return)n=l,o=r;else{for(var u=!1,g=l.child;g;){if(g===n){u=!0,n=l,o=r;break}if(g===o){u=!0,o=l,n=r;break}g=g.sibling}if(!u){for(g=r.child;g;){if(g===n){u=!0,n=r,o=l;break}if(g===o){u=!0,o=r,n=l;break}g=g.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==o)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,A=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),He=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case K:return"Profiler";case J:return"StrictMode";case ve:return"Suspense";case Ee:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case ne:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return t=e.displayName||null,t!==null?t:Ie(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return Ie(e(t))}catch{}}return null}var xe=Array.isArray,L=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},me=[],ge=-1;function S(e){return{current:e}}function z(e){0>ge||(e.current=me[ge],me[ge]=null,ge--)}function q(e,t){ge++,me[ge]=e.current,e.current=t}var $=S(null),ie=S(null),pe=S(null),Re=S(null);function rt(e,t){switch(q(pe,t),q(ie,e),q($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ip(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ip(t),e=Yp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z($),q($,e)}function $e(){z($),z(ie),z(pe)}function No(e){e.memoizedState!==null&&q(Re,e);var t=$.current,n=Yp(t,e.type);t!==n&&(q(ie,e),q($,n))}function oa(e){ie.current===e&&(z($),z(ie)),Re.current===e&&(z(Re),kl._currentValue=Z)}var dt,Rn;function xn(e){if(dt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dt=t&&t[1]||"",Rn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+Rn}var Xa=!1;function dn(e,t){if(!e||Xa)return"";Xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(k){var C=k}Reflect.construct(e,[],P)}else{try{P.call()}catch(k){C=k}e.call(P.prototype)}}else{try{throw Error()}catch(k){C=k}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(k){if(k&&C&&typeof k.stack=="string")return[k.stack,C.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),u=r[0],g=r[1];if(u&&g){var v=u.split(`
`),D=g.split(`
`);for(l=o=0;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(o===v.length||l===D.length)for(o=v.length-1,l=D.length-1;1<=o&&0<=l&&v[o]!==D[l];)l--;for(;1<=o&&0<=l;o--,l--)if(v[o]!==D[l]){if(o!==1||l!==1)do if(o--,l--,0>l||v[o]!==D[l]){var B=`
`+v[o].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=o&&0<=l);break}}}finally{Xa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xn(n):""}function Hs(e,t){switch(e.tag){case 26:case 27:case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return e.child!==t&&t!==null?xn("Suspense Fallback"):xn("Suspense");case 19:return xn("SuspenseList");case 0:case 15:return dn(e.type,!1);case 11:return dn(e.type.render,!1);case 1:return dn(e.type,!0);case 31:return xn("Activity");default:return""}}function rr(e){try{var t="",n=null;do t+=Hs(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var aa=Object.prototype.hasOwnProperty,Ja=a.unstable_scheduleCallback,Ga=a.unstable_cancelCallback,Ps=a.unstable_shouldYield,Is=a.unstable_requestPaint,st=a.unstable_now,Ro=a.unstable_getCurrentPriorityLevel,Ka=a.unstable_ImmediatePriority,la=a.unstable_UserBlockingPriority,Dt=a.unstable_NormalPriority,mn=a.unstable_LowPriority,Za=a.unstable_IdlePriority,Ys=a.log,Qa=a.unstable_setDisableYieldValue,Do=null,We=null;function pn(e){if(typeof Ys=="function"&&Qa(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Do,e)}catch{}}var Mt=Math.clz32?Math.clz32:ir,sr=Math.log,Fs=Math.LN2;function ir(e){return e>>>=0,e===0?32:31-(sr(e)/Fs|0)|0}var Dn=256,Ao=262144,$n=4194304;function An(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Co(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,r=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var g=o&134217727;return g!==0?(o=g&~r,o!==0?l=An(o):(u&=g,u!==0?l=An(u):n||(n=g&~e,n!==0&&(l=An(n))))):(g=o&~r,g!==0?l=An(g):u!==0?l=An(u):n||(n=o&~e,n!==0&&(l=An(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function _o(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cr(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lo(){var e=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),e}function Wn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qs(e,t,n,o,l,r){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,D=e.hiddenUpdates;for(n=u&~n;0<n;){var B=31-Mt(n),P=1<<B;g[B]=0,v[B]=-1;var C=D[B];if(C!==null)for(D[B]=null,B=0;B<C.length;B++){var k=C[B];k!==null&&(k.lane&=-536870913)}n&=~P}o!==0&&ur(e,o,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(u&~t))}function ur(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Mt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function b(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Mt(n),l=1<<o;l&t|e[o]&t&&(e[o]|=t),n&=~l}}function M(e,t){var n=t&-t;return n=(n&42)!==0?1:_(n),(n&(e.suspendedLanes|t))!==0?0:n}function _(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Y(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function V(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:mf(e.type))}function re(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var W=Math.random().toString(36).slice(2),Q="__reactFiber$"+W,ee="__reactProps$"+W,ae="__reactContainer$"+W,ue="__reactEvents$"+W,se="__reactListeners$"+W,Ue="__reactHandles$"+W,De="__reactResources$"+W,et="__reactMarker$"+W;function tt(e){delete e[Q],delete e[ee],delete e[ue],delete e[se],delete e[Ue]}function nt(e){var t=e[Q];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ae]||n[Q]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kp(e);e!==null;){if(n=e[Q])return n;e=Kp(e)}return t}e=n,n=e.parentNode}return null}function Ae(e){if(e=e[Q]||e[ae]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function At(e){var t=e[De];return t||(t=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[et]=!0}var fn=new Set,Ht={};function gn(e,t){Gt(e,t),Gt(e+"Capture",t)}function Gt(e,t){for(Ht[e]=t,e=0;e<t.length;e++)fn.add(t[e])}var Cn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uo={},ko={};function Ce(e){return aa.call(ko,e)?!0:aa.call(Uo,e)?!1:Cn.test(e)?ko[e]=!0:(Uo[e]=!0,!1)}function it(e,t,n){if(Ce(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function hn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function St(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dr(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,r.call(this,u)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $a(e){if(!e._valueTracker){var t=zo(e)?"checked":"value";e._valueTracker=dr(e,t,""+e[t])}}function Lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=zo(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kg=/[\n"\\]/g;function Kt(e){return e.replace(Kg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vs(e,t,n,o,l,r,u,g){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_e(t)):e.value!==""+_e(t)&&(e.value=""+_e(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Xs(e,u,_e(t)):n!=null?Xs(e,u,_e(n)):o!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+_e(g):e.removeAttribute("name")}function Uu(e,t,n,o,l,r,u,g){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){$a(e);return}n=n!=null?""+_e(n):"",t=t!=null?""+_e(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=g?e.checked:!!o,e.defaultChecked=!!o,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),$a(e)}function Xs(e,t,n){t==="number"&&mr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ra(e,t,n,o){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+_e(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ku(e,t,n){if(t!=null&&(t=""+_e(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+_e(n):""}function zu(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(c(92));if(xe(o)){if(1<o.length)throw Error(c(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=_e(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),$a(e)}function sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bu(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||Zg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&n[l]!==o&&Bu(e,l,o)}else for(var r in t)t.hasOwnProperty(r)&&Bu(e,r,t[r])}function Js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$g=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(e){return $g.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _n(){}var Gs=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,ca=null;function Pu(e){var t=Ae(e);if(t&&(e=t.stateNode)){var n=e[ee]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var l=o[ee]||null;if(!l)throw Error(c(90));Vs(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Lu(o)}break e;case"textarea":ku(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ra(e,!!n.multiple,t,!1)}}}var Zs=!1;function Iu(e,t,n){if(Zs)return e(t,n);Zs=!0;try{var o=e(t);return o}finally{if(Zs=!1,(ia!==null||ca!==null)&&(es(),ia&&(t=ia,e=ca,ca=ia=null,Pu(t),e)))for(t=0;t<e.length;t++)Pu(e[t])}}function Wa(e,t){var n=e.stateNode;if(n===null)return null;var o=n[ee]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=!1;if(Ln)try{var el={};Object.defineProperty(el,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{Qs=!1}var to=null,$s=null,fr=null;function Yu(){if(fr)return fr;var e,t=$s,n=t.length,o,l="value"in to?to.value:to.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(o=1;o<=u&&t[n-o]===l[r-o];o++);return fr=l.slice(e,1<o?1-o:void 0)}function gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function Fu(){return!1}function Ct(e){function t(n,o,l,r,u){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=r,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(r):r[g]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hr:Fu,this.isPropagationStopped=Fu,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yr=Ct(Bo),tl=x({},Bo,{view:0,detail:0}),Wg=Ct(tl),Ws,ei,nl,br=x({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nl&&(nl&&e.type==="mousemove"?(Ws=e.screenX-nl.screenX,ei=e.screenY-nl.screenY):ei=Ws=0,nl=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),qu=Ct(br),eh=x({},br,{dataTransfer:0}),th=Ct(eh),nh=x({},tl,{relatedTarget:0}),ti=Ct(nh),oh=x({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=Ct(oh),lh=x({},Bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=Ct(lh),sh=x({},Bo,{data:0}),Vu=Ct(sh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uh[e])?!!t[e]:!1}function ni(){return dh}var mh=x({},tl,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=Ct(mh),fh=x({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Ct(fh),gh=x({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),hh=Ct(gh),yh=x({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=Ct(yh),vh=x({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=Ct(vh),Sh=x({},Bo,{newState:0,oldState:0}),Eh=Ct(Sh),Th=[9,13,27,32],oi=Ln&&"CompositionEvent"in window,ol=null;Ln&&"documentMode"in document&&(ol=document.documentMode);var wh=Ln&&"TextEvent"in window&&!ol,Ju=Ln&&(!oi||ol&&8<ol&&11>=ol),Gu=" ",Ku=!1;function Zu(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ua=!1;function jh(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(Ku=!0,Gu);case"textInput":return e=t.data,e===Gu&&Ku?null:e;default:return null}}function Mh(e,t){if(ua)return e==="compositionend"||!oi&&Zu(e,t)?(e=Yu(),fr=$s=to=null,ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function Wu(e,t,n,o){ia?ca?ca.push(o):ca=[o]:ia=o,t=ss(t,"onChange"),0<t.length&&(n=new yr("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var al=null,ll=null;function Nh(e){Up(e,0)}function vr(e){var t=bt(e);if(Lu(t))return e}function ed(e,t){if(e==="change")return t}var td=!1;if(Ln){var ai;if(Ln){var li="oninput"in document;if(!li){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),li=typeof nd.oninput=="function"}ai=li}else ai=!1;td=ai&&(!document.documentMode||9<document.documentMode)}function od(){al&&(al.detachEvent("onpropertychange",ad),ll=al=null)}function ad(e){if(e.propertyName==="value"&&vr(ll)){var t=[];Wu(t,ll,e,Ks(e)),Iu(Nh,t)}}function Rh(e,t,n){e==="focusin"?(od(),al=t,ll=n,al.attachEvent("onpropertychange",ad)):e==="focusout"&&od()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vr(ll)}function Ah(e,t){if(e==="click")return vr(t)}function Ch(e,t){if(e==="input"||e==="change")return vr(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:_h;function rl(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!aa.call(t,l)||!Pt(e[l],t[l]))return!1}return!0}function ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=ld(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ld(n)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mr(e.document)}return t}function ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lh=Ln&&"documentMode"in document&&11>=document.documentMode,da=null,si=null,sl=null,ii=!1;function cd(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ii||da==null||da!==mr(o)||(o=da,"selectionStart"in o&&ri(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),sl&&rl(sl,o)||(sl=o,o=ss(si,"onSelect"),0<o.length&&(t=new yr("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=da)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ma={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionrun:Ho("Transition","TransitionRun"),transitionstart:Ho("Transition","TransitionStart"),transitioncancel:Ho("Transition","TransitionCancel"),transitionend:Ho("Transition","TransitionEnd")},ci={},ud={};Ln&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Po(e){if(ci[e])return ci[e];if(!ma[e])return e;var t=ma[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return ci[e]=t[n];return e}var dd=Po("animationend"),md=Po("animationiteration"),pd=Po("animationstart"),Uh=Po("transitionrun"),kh=Po("transitionstart"),zh=Po("transitioncancel"),fd=Po("transitionend"),gd=new Map,ui="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ui.push("scrollEnd");function yn(e,t){gd.set(e,t),gn(t,[e])}var xr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],pa=0,di=0;function Sr(){for(var e=pa,t=di=pa=0;t<e;){var n=Zt[t];Zt[t++]=null;var o=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var r=Zt[t];if(Zt[t++]=null,o!==null&&l!==null){var u=o.pending;u===null?l.next=l:(l.next=u.next,u.next=l),o.pending=l}r!==0&&hd(n,l,r)}}function Er(e,t,n,o){Zt[pa++]=e,Zt[pa++]=t,Zt[pa++]=n,Zt[pa++]=o,di|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mi(e,t,n,o){return Er(e,t,n,o),Tr(e)}function Io(e,t){return Er(e,null,null,t),Tr(e)}function hd(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,o=r.alternate,o!==null&&(o.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Mt(n),e=r.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=n|536870912),r):null}function Tr(e){if(50<Rl)throw Rl=0,Sc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function Bh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,o){return new Bh(e,t,n,o)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Un(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wr(e,t,n,o,l,r){var u=0;if(o=e,typeof e=="function")pi(e)&&(u=1);else if(typeof e=="string")u=Fy(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=It(31,n,t,l),e.elementType=ye,e.lanes=r,e;case X:return Yo(n.children,l,r,t);case J:u=8,l|=24;break;case K:return e=It(12,n,t,l|2),e.elementType=K,e.lanes=r,e;case ve:return e=It(13,n,t,l),e.elementType=ve,e.lanes=r,e;case Ee:return e=It(19,n,t,l),e.elementType=Ee,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:u=10;break e;case G:u=9;break e;case Ne:u=11;break e;case O:u=14;break e;case le:u=16,o=null;break e}u=29,n=Error(c(130,e===null?"null":typeof e,"")),o=null}return t=It(u,n,t,l),t.elementType=e,t.type=o,t.lanes=r,t}function Yo(e,t,n,o){return e=It(7,e,o,t),e.lanes=n,e}function fi(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function bd(e){var t=It(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vd=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=vd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:rr(t)},vd.set(e,t),t)}return{value:e,source:t,stack:rr(t)}}var ga=[],ha=0,jr=null,il=0,$t=[],Wt=0,no=null,Sn=1,En="";function kn(e,t){ga[ha++]=il,ga[ha++]=jr,jr=e,il=t}function xd(e,t,n){$t[Wt++]=Sn,$t[Wt++]=En,$t[Wt++]=no,no=e;var o=Sn;e=En;var l=32-Mt(o)-1;o&=~(1<<l),n+=1;var r=32-Mt(t)+l;if(30<r){var u=l-l%5;r=(o&(1<<u)-1).toString(32),o>>=u,l-=u,Sn=1<<32-Mt(t)+l|n<<l|o,En=r+e}else Sn=1<<r|n<<l|o,En=e}function hi(e){e.return!==null&&(kn(e,1),xd(e,1,0))}function yi(e){for(;e===jr;)jr=ga[--ha],ga[ha]=null,il=ga[--ha],ga[ha]=null;for(;e===no;)no=$t[--Wt],$t[Wt]=null,En=$t[--Wt],$t[Wt]=null,Sn=$t[--Wt],$t[Wt]=null}function Sd(e,t){$t[Wt++]=Sn,$t[Wt++]=En,$t[Wt++]=no,Sn=t.id,En=t.overflow,no=e}var Et=null,Ge=null,Le=!1,oo=null,en=!1,bi=Error(c(519));function ao(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(Qt(t,e)),bi}function Ed(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[Q]=e,t[ee]=o,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<Al.length;n++)we(Al[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),Uu(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),zu(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Hp(t.textContent,n)?(o.popover!=null&&(we("beforetoggle",t),we("toggle",t)),o.onScroll!=null&&we("scroll",t),o.onScrollEnd!=null&&we("scrollend",t),o.onClick!=null&&(t.onclick=_n),t=!0):t=!1,t||ao(e,!0)}function Td(e){for(Et=e.return;Et;)switch(Et.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:Et=Et.return}}function ya(e){if(e!==Et)return!1;if(!Le)return Td(e),Le=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||kc(e.type,e.memoizedProps)),n=!n),n&&Ge&&ao(e),Td(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ge=Gp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ge=Gp(e)}else t===27?(t=Ge,vo(e.type)?(e=Ic,Ic=null,Ge=e):Ge=t):Ge=Et?nn(e.stateNode.nextSibling):null;return!0}function Fo(){Ge=Et=null,Le=!1}function vi(){var e=oo;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),oo=null),e}function cl(e){oo===null?oo=[e]:oo.push(e)}var xi=S(null),qo=null,zn=null;function lo(e,t,n){q(xi,t._currentValue),t._currentValue=n}function Bn(e){e._currentValue=xi.current,z(xi)}function Si(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t,n,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var u=l.child;r=r.firstContext;e:for(;r!==null;){var g=r;r=l;for(var v=0;v<t.length;v++)if(g.context===t[v]){r.lanes|=n,g=r.alternate,g!==null&&(g.lanes|=n),Si(r.return,n,e),o||(u=null);break e}r=g.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=n,r=u.alternate,r!==null&&(r.lanes|=n),Si(u,n,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ba(e,t,n,o){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var g=l.type;Pt(l.pendingProps.value,u.value)||(e!==null?e.push(g):e=[g])}}else if(l===Re.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}l=l.return}e!==null&&Ei(t,e,n,o),t.flags|=262144}function Mr(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vo(e){qo=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tt(e){return wd(qo,e)}function Or(e,t){return qo===null&&Vo(e),wd(e,t)}function wd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zn===null){if(e===null)throw Error(c(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return n}var Hh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ph=a.unstable_scheduleCallback,Ih=a.unstable_NormalPriority,mt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ti(){return{controller:new Hh,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&Ph(Ih,function(){e.controller.abort()})}var dl=null,wi=0,va=0,xa=null;function Yh(e,t){if(dl===null){var n=dl=[];wi=0,va=Oc(),xa={status:"pending",value:void 0,then:function(o){n.push(o)}}}return wi++,t.then(jd,jd),t}function jd(){if(--wi===0&&dl!==null){xa!==null&&(xa.status="fulfilled");var e=dl;dl=null,va=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fh(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),o}var Md=L.S;L.S=function(e,t){cp=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yh(e,t),Md!==null&&Md(e,t)};var Xo=S(null);function ji(){var e=Xo.current;return e!==null?e:Je.pooledCache}function Nr(e,t){t===null?q(Xo,Xo.current):q(Xo,t.pool)}function Od(){var e=ji();return e===null?null:{parent:mt._currentValue,pool:e}}var Sa=Error(c(460)),Mi=Error(c(474)),Rr=Error(c(542)),Dr={then:function(){}};function Nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_n,_n),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e;default:if(typeof t.status=="string")t.then(_n,_n);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e}throw Go=t,Sa}}function Jo(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Go=n,Sa):n}}var Go=null;function Dd(){if(Go===null)throw Error(c(459));var e=Go;return Go=null,e}function Ad(e){if(e===Sa||e===Rr)throw Error(c(483))}var Ea=null,ml=0;function Ar(e){var t=ml;return ml+=1,Ea===null&&(Ea=[]),Rd(Ea,e,t)}function pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===A?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cd(e){function t(j,T){if(e){var R=j.deletions;R===null?(j.deletions=[T],j.flags|=16):R.push(T)}}function n(j,T){if(!e)return null;for(;T!==null;)t(j,T),T=T.sibling;return null}function o(j){for(var T=new Map;j!==null;)j.key!==null?T.set(j.key,j):T.set(j.index,j),j=j.sibling;return T}function l(j,T){return j=Un(j,T),j.index=0,j.sibling=null,j}function r(j,T,R){return j.index=R,e?(R=j.alternate,R!==null?(R=R.index,R<T?(j.flags|=67108866,T):R):(j.flags|=67108866,T)):(j.flags|=1048576,T)}function u(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function g(j,T,R,H){return T===null||T.tag!==6?(T=fi(R,j.mode,H),T.return=j,T):(T=l(T,R),T.return=j,T)}function v(j,T,R,H){var ce=R.type;return ce===X?B(j,T,R.props.children,H,R.key):T!==null&&(T.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===le&&Jo(ce)===T.type)?(T=l(T,R.props),pl(T,R),T.return=j,T):(T=wr(R.type,R.key,R.props,null,j.mode,H),pl(T,R),T.return=j,T)}function D(j,T,R,H){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=gi(R,j.mode,H),T.return=j,T):(T=l(T,R.children||[]),T.return=j,T)}function B(j,T,R,H,ce){return T===null||T.tag!==7?(T=Yo(R,j.mode,H,ce),T.return=j,T):(T=l(T,R),T.return=j,T)}function P(j,T,R){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=fi(""+T,j.mode,R),T.return=j,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case U:return R=wr(T.type,T.key,T.props,null,j.mode,R),pl(R,T),R.return=j,R;case I:return T=gi(T,j.mode,R),T.return=j,T;case le:return T=Jo(T),P(j,T,R)}if(xe(T)||ke(T))return T=Yo(T,j.mode,R,null),T.return=j,T;if(typeof T.then=="function")return P(j,Ar(T),R);if(T.$$typeof===ne)return P(j,Or(j,T),R);Cr(j,T)}return null}function C(j,T,R,H){var ce=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ce!==null?null:g(j,T,""+R,H);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return R.key===ce?v(j,T,R,H):null;case I:return R.key===ce?D(j,T,R,H):null;case le:return R=Jo(R),C(j,T,R,H)}if(xe(R)||ke(R))return ce!==null?null:B(j,T,R,H,null);if(typeof R.then=="function")return C(j,T,Ar(R),H);if(R.$$typeof===ne)return C(j,T,Or(j,R),H);Cr(j,R)}return null}function k(j,T,R,H,ce){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return j=j.get(R)||null,g(T,j,""+H,ce);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case U:return j=j.get(H.key===null?R:H.key)||null,v(T,j,H,ce);case I:return j=j.get(H.key===null?R:H.key)||null,D(T,j,H,ce);case le:return H=Jo(H),k(j,T,R,H,ce)}if(xe(H)||ke(H))return j=j.get(R)||null,B(T,j,H,ce,null);if(typeof H.then=="function")return k(j,T,R,Ar(H),ce);if(H.$$typeof===ne)return k(j,T,R,Or(T,H),ce);Cr(T,H)}return null}function te(j,T,R,H){for(var ce=null,ze=null,oe=T,be=T=0,Oe=null;oe!==null&&be<R.length;be++){oe.index>be?(Oe=oe,oe=null):Oe=oe.sibling;var Be=C(j,oe,R[be],H);if(Be===null){oe===null&&(oe=Oe);break}e&&oe&&Be.alternate===null&&t(j,oe),T=r(Be,T,be),ze===null?ce=Be:ze.sibling=Be,ze=Be,oe=Oe}if(be===R.length)return n(j,oe),Le&&kn(j,be),ce;if(oe===null){for(;be<R.length;be++)oe=P(j,R[be],H),oe!==null&&(T=r(oe,T,be),ze===null?ce=oe:ze.sibling=oe,ze=oe);return Le&&kn(j,be),ce}for(oe=o(oe);be<R.length;be++)Oe=k(oe,j,be,R[be],H),Oe!==null&&(e&&Oe.alternate!==null&&oe.delete(Oe.key===null?be:Oe.key),T=r(Oe,T,be),ze===null?ce=Oe:ze.sibling=Oe,ze=Oe);return e&&oe.forEach(function(wo){return t(j,wo)}),Le&&kn(j,be),ce}function de(j,T,R,H){if(R==null)throw Error(c(151));for(var ce=null,ze=null,oe=T,be=T=0,Oe=null,Be=R.next();oe!==null&&!Be.done;be++,Be=R.next()){oe.index>be?(Oe=oe,oe=null):Oe=oe.sibling;var wo=C(j,oe,Be.value,H);if(wo===null){oe===null&&(oe=Oe);break}e&&oe&&wo.alternate===null&&t(j,oe),T=r(wo,T,be),ze===null?ce=wo:ze.sibling=wo,ze=wo,oe=Oe}if(Be.done)return n(j,oe),Le&&kn(j,be),ce;if(oe===null){for(;!Be.done;be++,Be=R.next())Be=P(j,Be.value,H),Be!==null&&(T=r(Be,T,be),ze===null?ce=Be:ze.sibling=Be,ze=Be);return Le&&kn(j,be),ce}for(oe=o(oe);!Be.done;be++,Be=R.next())Be=k(oe,j,be,Be.value,H),Be!==null&&(e&&Be.alternate!==null&&oe.delete(Be.key===null?be:Be.key),T=r(Be,T,be),ze===null?ce=Be:ze.sibling=Be,ze=Be);return e&&oe.forEach(function(eb){return t(j,eb)}),Le&&kn(j,be),ce}function Xe(j,T,R,H){if(typeof R=="object"&&R!==null&&R.type===X&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case U:e:{for(var ce=R.key;T!==null;){if(T.key===ce){if(ce=R.type,ce===X){if(T.tag===7){n(j,T.sibling),H=l(T,R.props.children),H.return=j,j=H;break e}}else if(T.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===le&&Jo(ce)===T.type){n(j,T.sibling),H=l(T,R.props),pl(H,R),H.return=j,j=H;break e}n(j,T);break}else t(j,T);T=T.sibling}R.type===X?(H=Yo(R.props.children,j.mode,H,R.key),H.return=j,j=H):(H=wr(R.type,R.key,R.props,null,j.mode,H),pl(H,R),H.return=j,j=H)}return u(j);case I:e:{for(ce=R.key;T!==null;){if(T.key===ce)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){n(j,T.sibling),H=l(T,R.children||[]),H.return=j,j=H;break e}else{n(j,T);break}else t(j,T);T=T.sibling}H=gi(R,j.mode,H),H.return=j,j=H}return u(j);case le:return R=Jo(R),Xe(j,T,R,H)}if(xe(R))return te(j,T,R,H);if(ke(R)){if(ce=ke(R),typeof ce!="function")throw Error(c(150));return R=ce.call(R),de(j,T,R,H)}if(typeof R.then=="function")return Xe(j,T,Ar(R),H);if(R.$$typeof===ne)return Xe(j,T,Or(j,R),H);Cr(j,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,T!==null&&T.tag===6?(n(j,T.sibling),H=l(T,R),H.return=j,j=H):(n(j,T),H=fi(R,j.mode,H),H.return=j,j=H),u(j)):n(j,T)}return function(j,T,R,H){try{ml=0;var ce=Xe(j,T,R,H);return Ea=null,ce}catch(oe){if(oe===Sa||oe===Rr)throw oe;var ze=It(29,oe,null,j.mode);return ze.lanes=H,ze.return=j,ze}}}var Ko=Cd(!0),_d=Cd(!1),ro=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ni(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function so(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function io(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=Tr(e),hd(e,null,n),t}return Er(e,o,t,n),Tr(e)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,b(e,n)}}function Ri(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=u:r=r.next=u,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Di=!1;function gl(){if(Di){var e=xa;if(e!==null)throw e}}function hl(e,t,n,o){Di=!1;var l=e.updateQueue;ro=!1;var r=l.firstBaseUpdate,u=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var v=g,D=v.next;v.next=null,u===null?r=D:u.next=D,u=v;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==u&&(g===null?B.firstBaseUpdate=D:g.next=D,B.lastBaseUpdate=v))}if(r!==null){var P=l.baseState;u=0,B=D=v=null,g=r;do{var C=g.lane&-536870913,k=C!==g.lane;if(k?(Me&C)===C:(o&C)===C){C!==0&&C===va&&(Di=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var te=e,de=g;C=t;var Xe=n;switch(de.tag){case 1:if(te=de.payload,typeof te=="function"){P=te.call(Xe,P,C);break e}P=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=de.payload,C=typeof te=="function"?te.call(Xe,P,C):te,C==null)break e;P=x({},P,C);break e;case 2:ro=!0}}C=g.callback,C!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[C]:k.push(C))}else k={lane:C,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(D=B=k,v=P):B=B.next=k,u|=C;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;k=g,g=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);B===null&&(v=P),l.baseState=v,l.firstBaseUpdate=D,l.lastBaseUpdate=B,r===null&&(l.shared.lanes=0),fo|=u,e.lanes=u,e.memoizedState=P}}function Ld(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ld(n[e],t)}var Ta=S(null),_r=S(0);function kd(e,t){e=Jn,q(_r,e),q(Ta,t),Jn=e|t.baseLanes}function Ai(){q(_r,Jn),q(Ta,Ta.current)}function Ci(){Jn=_r.current,z(Ta),z(_r)}var Yt=S(null),tn=null;function co(e){var t=e.alternate;q(ct,ct.current&1),q(Yt,e),tn===null&&(t===null||Ta.current!==null||t.memoizedState!==null)&&(tn=e)}function _i(e){q(ct,ct.current),q(Yt,e),tn===null&&(tn=e)}function zd(e){e.tag===22?(q(ct,ct.current),q(Yt,e),tn===null&&(tn=e)):uo()}function uo(){q(ct,ct.current),q(Yt,Yt.current)}function Ft(e){z(Yt),tn===e&&(tn=null),z(ct)}var ct=S(0);function Lr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hc(n)||Pc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hn=0,he=null,qe=null,pt=null,Ur=!1,wa=!1,Zo=!1,kr=0,yl=0,ja=null,qh=0;function ot(){throw Error(c(321))}function Li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function Ui(e,t,n,o,l,r){return Hn=r,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?xm:Zi,Zo=!1,r=n(o,l),Zo=!1,wa&&(r=Hd(t,n,o,l)),Bd(e),r}function Bd(e){L.H=xl;var t=qe!==null&&qe.next!==null;if(Hn=0,pt=qe=he=null,Ur=!1,yl=0,ja=null,t)throw Error(c(300));e===null||ft||(e=e.dependencies,e!==null&&Mr(e)&&(ft=!0))}function Hd(e,t,n,o){he=e;var l=0;do{if(wa&&(ja=null),yl=0,wa=!1,25<=l)throw Error(c(301));if(l+=1,pt=qe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}L.H=Sm,r=t(n,o)}while(wa);return r}function Vh(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?bl(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(he.flags|=1024),t}function ki(){var e=kr!==0;return kr=0,e}function zi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bi(e){if(Ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ur=!1}Hn=0,pt=qe=he=null,wa=!1,yl=kr=0,ja=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?he.memoizedState=pt=e:pt=pt.next=e,pt}function ut(){if(qe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=pt===null?he.memoizedState:pt.next;if(t!==null)pt=t,qe=e;else{if(e===null)throw he.alternate===null?Error(c(467)):Error(c(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},pt===null?he.memoizedState=pt=e:pt=pt.next=e}return pt}function zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var t=yl;return yl+=1,ja===null&&(ja=[]),e=Rd(ja,e,t),t=he,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?xm:Zi),e}function Br(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===ne)return Tt(e)}throw Error(c(438,String(e)))}function Hi(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zr(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=He;return t.index++,n}function Pn(e,t){return typeof t=="function"?t(e):t}function Hr(e){var t=ut();return Pi(t,qe,e)}function Pi(e,t,n){var o=e.queue;if(o===null)throw Error(c(311));o.lastRenderedReducer=n;var l=e.baseQueue,r=o.pending;if(r!==null){if(l!==null){var u=l.next;l.next=r.next,r.next=u}t.baseQueue=l=r,o.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var g=u=null,v=null,D=t,B=!1;do{var P=D.lane&-536870913;if(P!==D.lane?(Me&P)===P:(Hn&P)===P){var C=D.revertLane;if(C===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),P===va&&(B=!0);else if((Hn&C)===C){D=D.next,C===va&&(B=!0);continue}else P={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},v===null?(g=v=P,u=r):v=v.next=P,he.lanes|=C,fo|=C;P=D.action,Zo&&n(r,P),r=D.hasEagerState?D.eagerState:n(r,P)}else C={lane:P,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},v===null?(g=v=C,u=r):v=v.next=C,he.lanes|=P,fo|=P;D=D.next}while(D!==null&&D!==t);if(v===null?u=r:v.next=g,!Pt(r,e.memoizedState)&&(ft=!0,B&&(n=xa,n!==null)))throw n;e.memoizedState=r,e.baseState=u,e.baseQueue=v,o.lastRenderedState=r}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ii(e){var t=ut(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do r=e(r,u.action),u=u.next;while(u!==l);Pt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function Pd(e,t,n){var o=he,l=ut(),r=Le;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var u=!Pt((qe||l).memoizedState,n);if(u&&(l.memoizedState=n,ft=!0),l=l.queue,qi(Fd.bind(null,o,l,e),[e]),l.getSnapshot!==t||u||pt!==null&&pt.memoizedState.tag&1){if(o.flags|=2048,Ma(9,{destroy:void 0},Yd.bind(null,o,l,n,t),null),Je===null)throw Error(c(349));r||(Hn&127)!==0||Id(o,t,n)}return n}function Id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=zr(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yd(e,t,n,o){t.value=n,t.getSnapshot=o,qd(t)&&Vd(e)}function Fd(e,t,n){return n(function(){qd(t)&&Vd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Vd(e){var t=Io(e,2);t!==null&&zt(t,e,2)}function Yi(e){var t=Rt();if(typeof e=="function"){var n=e;if(e=n(),Zo){pn(!0);try{n()}finally{pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t}function Xd(e,t,n,o){return e.baseState=n,Pi(e,qe,typeof o=="function"?o:Pn)}function Xh(e,t,n,o,l){if(Yr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){r.listeners.push(u)}};L.T!==null?n(!0):r.isTransition=!1,o(r),n=t.pending,n===null?(r.next=t.pending=r,Jd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Jd(e,t){var n=t.action,o=t.payload,l=e.state;if(t.isTransition){var r=L.T,u={};L.T=u;try{var g=n(l,o),v=L.S;v!==null&&v(u,g),Gd(e,t,g)}catch(D){Fi(e,t,D)}finally{r!==null&&u.types!==null&&(r.types=u.types),L.T=r}}else try{r=n(l,o),Gd(e,t,r)}catch(D){Fi(e,t,D)}}function Gd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Kd(e,t,o)},function(o){return Fi(e,t,o)}):Kd(e,t,n)}function Kd(e,t,n){t.status="fulfilled",t.value=n,Zd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jd(e,n)))}function Fi(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,Zd(t),t=t.next;while(t!==o)}e.action=null}function Zd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function $d(e,t){if(Le){var n=Je.formState;if(n!==null){e:{var o=he;if(Le){if(Ge){t:{for(var l=Ge,r=en;l.nodeType!==8;){if(!r){l=null;break t}if(l=nn(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ge=nn(l.nextSibling),o=l.data==="F!";break e}}ao(o)}o=!1}o&&(t=n[0])}}return n=Rt(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=o,n=ym.bind(null,he,o),o.dispatch=n,o=Yi(!1),r=Ki.bind(null,he,!1,o.queue),o=Rt(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,n=Xh.bind(null,he,l,r,n),l.dispatch=n,o.memoizedState=e,[t,n,!1]}function Wd(e){var t=ut();return em(t,qe,e)}function em(e,t,n){if(t=Pi(e,t,Qd)[0],e=Hr(Pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=bl(t)}catch(u){throw u===Sa?Rr:u}else o=t;t=ut();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(he.flags|=2048,Ma(9,{destroy:void 0},Jh.bind(null,l,n),null)),[o,r,e]}function Jh(e,t){e.action=t}function tm(e){var t=ut(),n=qe;if(n!==null)return em(t,n,e);ut(),t=t.memoizedState,n=ut();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Ma(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=he.updateQueue,t===null&&(t=zr(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function nm(){return ut().memoizedState}function Pr(e,t,n,o){var l=Rt();he.flags|=e,l.memoizedState=Ma(1|t,{destroy:void 0},n,o===void 0?null:o)}function Ir(e,t,n,o){var l=ut();o=o===void 0?null:o;var r=l.memoizedState.inst;qe!==null&&o!==null&&Li(o,qe.memoizedState.deps)?l.memoizedState=Ma(t,r,n,o):(he.flags|=e,l.memoizedState=Ma(1|t,r,n,o))}function om(e,t){Pr(8390656,8,e,t)}function qi(e,t){Ir(2048,8,e,t)}function Gh(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=zr(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function am(e){var t=ut().memoizedState;return Gh({ref:t,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function lm(e,t){return Ir(4,2,e,t)}function rm(e,t){return Ir(4,4,e,t)}function sm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function im(e,t,n){n=n!=null?n.concat([e]):null,Ir(4,4,sm.bind(null,t,e),n)}function Vi(){}function cm(e,t){var n=ut();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Li(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function um(e,t){var n=ut();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Li(t,o[1]))return o[0];if(o=e(),Zo){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[o,t],o}function Xi(e,t,n){return n===void 0||(Hn&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=dp(),he.lanes|=e,fo|=e,n)}function dm(e,t,n,o){return Pt(n,t)?n:Ta.current!==null?(e=Xi(e,n,o),Pt(e,t)||(ft=!0),e):(Hn&42)===0||(Hn&1073741824)!==0&&(Me&261930)===0?(ft=!0,e.memoizedState=n):(e=dp(),he.lanes|=e,fo|=e,t)}function mm(e,t,n,o,l){var r=F.p;F.p=r!==0&&8>r?r:8;var u=L.T,g={};L.T=g,Ki(e,!1,t,n);try{var v=l(),D=L.S;if(D!==null&&D(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=Fh(v,o);vl(e,t,B,Xt(e))}else vl(e,t,o,Xt(e))}catch(P){vl(e,t,{then:function(){},status:"rejected",reason:P},Xt())}finally{F.p=r,u!==null&&g.types!==null&&(u.types=g.types),L.T=u}}function Kh(){}function Ji(e,t,n,o){if(e.tag!==5)throw Error(c(476));var l=pm(e).queue;mm(e,l,t,Z,n===null?Kh:function(){return fm(e),n(o)})}function pm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fm(e){var t=pm(e);t.next===null&&(t=e.alternate.memoizedState),vl(e,t.next.queue,{},Xt())}function Gi(){return Tt(kl)}function gm(){return ut().memoizedState}function hm(){return ut().memoizedState}function Zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xt();e=so(n);var o=io(t,e,n);o!==null&&(zt(o,t,n),fl(o,t,n)),t={cache:Ti()},e.payload=t;return}t=t.return}}function Qh(e,t,n){var o=Xt();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Yr(e)?bm(t,n):(n=mi(e,t,n,o),n!==null&&(zt(n,e,o),vm(n,t,o)))}function ym(e,t,n){var o=Xt();vl(e,t,n,o)}function vl(e,t,n,o){var l={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yr(e))bm(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var u=t.lastRenderedState,g=r(u,n);if(l.hasEagerState=!0,l.eagerState=g,Pt(g,u))return Er(e,t,l,0),Je===null&&Sr(),!1}catch{}if(n=mi(e,t,l,o),n!==null)return zt(n,e,o),vm(n,t,o),!0}return!1}function Ki(e,t,n,o){if(o={lane:2,revertLane:Oc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yr(e)){if(t)throw Error(c(479))}else t=mi(e,n,o,2),t!==null&&zt(t,e,2)}function Yr(e){var t=e.alternate;return e===he||t!==null&&t===he}function bm(e,t){wa=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vm(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,b(e,n)}}var xl={readContext:Tt,use:Br,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};xl.useEffectEvent=ot;var xm={readContext:Tt,use:Br,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:om,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Pr(4194308,4,sm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){Pr(4,2,e,t)},useMemo:function(e,t){var n=Rt();t=t===void 0?null:t;var o=e();if(Zo){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=Rt();if(n!==void 0){var l=n(t);if(Zo){pn(!0);try{n(t)}finally{pn(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=Qh.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Yi(e);var t=e.queue,n=ym.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vi,useDeferredValue:function(e,t){var n=Rt();return Xi(n,e,t)},useTransition:function(){var e=Yi(!1);return e=mm.bind(null,he,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=he,l=Rt();if(Le){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Je===null)throw Error(c(349));(Me&127)!==0||Id(o,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,om(Fd.bind(null,o,r,e),[e]),o.flags|=2048,Ma(9,{destroy:void 0},Yd.bind(null,o,r,n,t),null),n},useId:function(){var e=Rt(),t=Je.identifierPrefix;if(Le){var n=En,o=Sn;n=(o&~(1<<32-Mt(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=qh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gi,useFormState:$d,useActionState:$d,useOptimistic:function(e){var t=Rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ki.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hi,useCacheRefresh:function(){return Rt().memoizedState=Zh.bind(null,he)},useEffectEvent:function(e){var t=Rt(),n={impl:e};return t.memoizedState=n,function(){if((Pe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Zi={readContext:Tt,use:Br,useCallback:cm,useContext:Tt,useEffect:qi,useImperativeHandle:im,useInsertionEffect:lm,useLayoutEffect:rm,useMemo:um,useReducer:Hr,useRef:nm,useState:function(){return Hr(Pn)},useDebugValue:Vi,useDeferredValue:function(e,t){var n=ut();return dm(n,qe.memoizedState,e,t)},useTransition:function(){var e=Hr(Pn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:Pd,useId:gm,useHostTransitionStatus:Gi,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=ut();return Xd(n,qe,e,t)},useMemoCache:Hi,useCacheRefresh:hm};Zi.useEffectEvent=am;var Sm={readContext:Tt,use:Br,useCallback:cm,useContext:Tt,useEffect:qi,useImperativeHandle:im,useInsertionEffect:lm,useLayoutEffect:rm,useMemo:um,useReducer:Ii,useRef:nm,useState:function(){return Ii(Pn)},useDebugValue:Vi,useDeferredValue:function(e,t){var n=ut();return qe===null?Xi(n,e,t):dm(n,qe.memoizedState,e,t)},useTransition:function(){var e=Ii(Pn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:Pd,useId:gm,useHostTransitionStatus:Gi,useFormState:tm,useActionState:tm,useOptimistic:function(e,t){var n=ut();return qe!==null?Xd(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hi,useCacheRefresh:hm};Sm.useEffectEvent=am;function Qi(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $i={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Xt(),l=so(o);l.payload=t,n!=null&&(l.callback=n),t=io(e,l,o),t!==null&&(zt(t,e,o),fl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Xt(),l=so(o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=io(e,l,o),t!==null&&(zt(t,e,o),fl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),o=so(n);o.tag=2,t!=null&&(o.callback=t),t=io(e,o,n),t!==null&&(zt(t,e,n),fl(t,e,n))}};function Em(e,t,n,o,l,r,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,u):t.prototype&&t.prototype.isPureReactComponent?!rl(n,o)||!rl(l,r):!0}function Tm(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&$i.enqueueReplaceState(t,t.state,null)}function Qo(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function wm(e){xr(e)}function jm(e){console.error(e)}function Mm(e){xr(e)}function Fr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Om(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Wi(e,t,n){return n=so(n),n.tag=3,n.payload={element:null},n.callback=function(){Fr(e,t)},n}function Nm(e){return e=so(e),e.tag=3,e}function Rm(e,t,n,o){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=o.value;e.payload=function(){return l(r)},e.callback=function(){Om(t,n,o)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Om(t,n,o),typeof l!="function"&&(go===null?go=new Set([this]):go.add(this));var g=o.stack;this.componentDidCatch(o.value,{componentStack:g!==null?g:""})})}function $h(e,t,n,o,l){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&ba(t,n,l,!0),n=Yt.current,n!==null){switch(n.tag){case 31:case 13:return tn===null?ts():n.alternate===null&&at===0&&(at=3),n.flags&=-257,n.flags|=65536,n.lanes=l,o===Dr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),wc(e,o,l)),!1;case 22:return n.flags|=65536,o===Dr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),wc(e,o,l)),!1}throw Error(c(435,n.tag))}return wc(e,o,l),ts(),!1}if(Le)return t=Yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==bi&&(e=Error(c(422),{cause:o}),cl(Qt(e,n)))):(o!==bi&&(t=Error(c(423),{cause:o}),cl(Qt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Qt(o,n),l=Wi(e.stateNode,o,l),Ri(e,l),at!==4&&(at=2)),!1;var r=Error(c(520),{cause:o});if(r=Qt(r,n),Nl===null?Nl=[r]:Nl.push(r),at!==4&&(at=2),t===null)return!0;o=Qt(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Wi(n.stateNode,o,e),Ri(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(go===null||!go.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Nm(l),Rm(l,e,n,o),Ri(n,l),!1}n=n.return}while(n!==null);return!1}var ec=Error(c(461)),ft=!1;function wt(e,t,n,o){t.child=e===null?_d(t,null,n,o):Ko(t,e.child,n,o)}function Dm(e,t,n,o,l){n=n.render;var r=t.ref;if("ref"in o){var u={};for(var g in o)g!=="ref"&&(u[g]=o[g])}else u=o;return Vo(t),o=Ui(e,t,n,u,r,l),g=ki(),e!==null&&!ft?(zi(e,t,l),In(e,t,l)):(Le&&g&&hi(t),t.flags|=1,wt(e,t,o,l),t.child)}function Am(e,t,n,o,l){if(e===null){var r=n.type;return typeof r=="function"&&!pi(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Cm(e,t,r,o,l)):(e=wr(n.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ic(e,l)){var u=r.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(u,o)&&e.ref===t.ref)return In(e,t,l)}return t.flags|=1,e=Un(r,o),e.ref=t.ref,e.return=t,t.child=e}function Cm(e,t,n,o,l){if(e!==null){var r=e.memoizedProps;if(rl(r,o)&&e.ref===t.ref)if(ft=!1,t.pendingProps=o=r,ic(e,l))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,In(e,t,l)}return tc(e,t,n,o,l)}function _m(e,t,n,o){var l=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~r}else o=0,t.child=null;return Lm(e,t,r,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nr(t,r!==null?r.cachePool:null),r!==null?kd(t,r):Ai(),zd(t);else return o=t.lanes=536870912,Lm(e,t,r!==null?r.baseLanes|n:n,n,o)}else r!==null?(Nr(t,r.cachePool),kd(t,r),uo(),t.memoizedState=null):(e!==null&&Nr(t,null),Ai(),uo());return wt(e,t,l,n),t.child}function Sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lm(e,t,n,o,l){var r=ji();return r=r===null?null:{parent:mt._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Nr(t,null),Ai(),zd(t),e!==null&&ba(e,t,o,!0),t.childLanes=l,null}function qr(e,t){return t=Xr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Um(e,t,n){return Ko(t,e.child,null,n),e=qr(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function Wh(e,t,n){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Le){if(o.mode==="hidden")return e=qr(t,o),t.lanes=536870912,Sl(null,e);if(_i(t),(e=Ge)?(e=Jp(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:no!==null?{id:Sn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},n=bd(e),n.return=t,t.child=n,Et=t,Ge=null)):e=null,e===null)throw ao(t);return t.lanes=536870912,null}return qr(t,o)}var r=e.memoizedState;if(r!==null){var u=r.dehydrated;if(_i(t),l)if(t.flags&256)t.flags&=-257,t=Um(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ft||ba(e,t,n,!1),l=(n&e.childLanes)!==0,ft||l){if(o=Je,o!==null&&(u=M(o,n),u!==0&&u!==r.retryLane))throw r.retryLane=u,Io(e,u),zt(o,e,u),ec;ts(),t=Um(e,t,n)}else e=r.treeContext,Ge=nn(u.nextSibling),Et=t,Le=!0,oo=null,en=!1,e!==null&&Sd(t,e),t=qr(t,o),t.flags|=4096;return t}return e=Un(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tc(e,t,n,o,l){return Vo(t),n=Ui(e,t,n,o,void 0,l),o=ki(),e!==null&&!ft?(zi(e,t,l),In(e,t,l)):(Le&&o&&hi(t),t.flags|=1,wt(e,t,n,l),t.child)}function km(e,t,n,o,l,r){return Vo(t),t.updateQueue=null,n=Hd(t,o,n,l),Bd(e),o=ki(),e!==null&&!ft?(zi(e,t,r),In(e,t,r)):(Le&&o&&hi(t),t.flags|=1,wt(e,t,n,r),t.child)}function zm(e,t,n,o,l){if(Vo(t),t.stateNode===null){var r=fa,u=n.contextType;typeof u=="object"&&u!==null&&(r=Tt(u)),r=new n(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$i,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Oi(t),u=n.contextType,r.context=typeof u=="object"&&u!==null?Tt(u):fa,r.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Qi(t,n,u,o),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(u=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),u!==r.state&&$i.enqueueReplaceState(r,r.state,null),hl(t,o,r,l),gl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var g=t.memoizedProps,v=Qo(n,g);r.props=v;var D=r.context,B=n.contextType;u=fa,typeof B=="object"&&B!==null&&(u=Tt(B));var P=n.getDerivedStateFromProps;B=typeof P=="function"||typeof r.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g||D!==u)&&Tm(t,r,o,u),ro=!1;var C=t.memoizedState;r.state=C,hl(t,o,r,l),gl(),D=t.memoizedState,g||C!==D||ro?(typeof P=="function"&&(Qi(t,n,P,o),D=t.memoizedState),(v=ro||Em(t,n,v,o,C,D,u))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=D),r.props=o,r.state=D,r.context=u,o=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Ni(e,t),u=t.memoizedProps,B=Qo(n,u),r.props=B,P=t.pendingProps,C=r.context,D=n.contextType,v=fa,typeof D=="object"&&D!==null&&(v=Tt(D)),g=n.getDerivedStateFromProps,(D=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u!==P||C!==v)&&Tm(t,r,o,v),ro=!1,C=t.memoizedState,r.state=C,hl(t,o,r,l),gl();var k=t.memoizedState;u!==P||C!==k||ro||e!==null&&e.dependencies!==null&&Mr(e.dependencies)?(typeof g=="function"&&(Qi(t,n,g,o),k=t.memoizedState),(B=ro||Em(t,n,B,o,C,k,v)||e!==null&&e.dependencies!==null&&Mr(e.dependencies))?(D||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,k,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,k,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=k),r.props=o,r.state=k,r.context=v,o=B):(typeof r.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Vr(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Ko(t,e.child,null,l),t.child=Ko(t,null,n,l)):wt(e,t,n,l),t.memoizedState=r.state,e=t.child):e=In(e,t,l),e}function Bm(e,t,n,o){return Fo(),t.flags|=256,wt(e,t,n,o),t.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Od()}}function ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function Hm(e,t,n){var o=t.pendingProps,l=!1,r=(t.flags&128)!==0,u;if((u=r)||(u=e!==null&&e.memoizedState===null?!1:(ct.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Le){if(l?co(t):uo(),(e=Ge)?(e=Jp(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:no!==null?{id:Sn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},n=bd(e),n.return=t,t.child=n,Et=t,Ge=null)):e=null,e===null)throw ao(t);return Pc(e)?t.lanes=32:t.lanes=536870912,null}var g=o.children;return o=o.fallback,l?(uo(),l=t.mode,g=Xr({mode:"hidden",children:g},l),o=Yo(o,l,n,null),g.return=t,o.return=t,g.sibling=o,t.child=g,o=t.child,o.memoizedState=oc(n),o.childLanes=ac(e,u,n),t.memoizedState=nc,Sl(null,o)):(co(t),lc(t,g))}var v=e.memoizedState;if(v!==null&&(g=v.dehydrated,g!==null)){if(r)t.flags&256?(co(t),t.flags&=-257,t=rc(e,t,n)):t.memoizedState!==null?(uo(),t.child=e.child,t.flags|=128,t=null):(uo(),g=o.fallback,l=t.mode,o=Xr({mode:"visible",children:o.children},l),g=Yo(g,l,n,null),g.flags|=2,o.return=t,g.return=t,o.sibling=g,t.child=o,Ko(t,e.child,null,n),o=t.child,o.memoizedState=oc(n),o.childLanes=ac(e,u,n),t.memoizedState=nc,t=Sl(null,o));else if(co(t),Pc(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var D=u.dgst;u=D,o=Error(c(419)),o.stack="",o.digest=u,cl({value:o,source:null,stack:null}),t=rc(e,t,n)}else if(ft||ba(e,t,n,!1),u=(n&e.childLanes)!==0,ft||u){if(u=Je,u!==null&&(o=M(u,n),o!==0&&o!==v.retryLane))throw v.retryLane=o,Io(e,o),zt(u,e,o),ec;Hc(g)||ts(),t=rc(e,t,n)}else Hc(g)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ge=nn(g.nextSibling),Et=t,Le=!0,oo=null,en=!1,e!==null&&Sd(t,e),t=lc(t,o.children),t.flags|=4096);return t}return l?(uo(),g=o.fallback,l=t.mode,v=e.child,D=v.sibling,o=Un(v,{mode:"hidden",children:o.children}),o.subtreeFlags=v.subtreeFlags&65011712,D!==null?g=Un(D,g):(g=Yo(g,l,n,null),g.flags|=2),g.return=t,o.return=t,o.sibling=g,t.child=o,Sl(null,o),o=t.child,g=e.child.memoizedState,g===null?g=oc(n):(l=g.cachePool,l!==null?(v=mt._currentValue,l=l.parent!==v?{parent:v,pool:v}:l):l=Od(),g={baseLanes:g.baseLanes|n,cachePool:l}),o.memoizedState=g,o.childLanes=ac(e,u,n),t.memoizedState=nc,Sl(e.child,o)):(co(t),n=e.child,e=n.sibling,n=Un(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function lc(e,t){return t=Xr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Xr(e,t){return e=It(22,e,null,t),e.lanes=0,e}function rc(e,t,n){return Ko(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Si(e.return,t,n)}function sc(e,t,n,o,l,r){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l,treeForkCount:r}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=l,u.treeForkCount=r)}function Im(e,t,n){var o=t.pendingProps,l=o.revealOrder,r=o.tail;o=o.children;var u=ct.current,g=(u&2)!==0;if(g?(u=u&1|2,t.flags|=128):u&=1,q(ct,u),wt(e,t,o,n),o=Le?il:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,n,t);else if(e.tag===19)Pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Lr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),sc(t,!1,l,n,r,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Lr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}sc(t,!0,n,null,r,o);break;case"together":sc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fo|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mr(e)))}function ey(e,t,n){switch(t.tag){case 3:rt(t,t.stateNode.containerInfo),lo(t,mt,e.memoizedState.cache),Fo();break;case 27:case 5:No(t);break;case 4:rt(t,t.stateNode.containerInfo);break;case 10:lo(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_i(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(co(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Hm(e,t,n):(co(t),e=In(e,t,n),e!==null?e.sibling:null);co(t);break;case 19:var l=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(ba(e,t,n,!1),o=(n&t.childLanes)!==0),l){if(o)return Im(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(ct,ct.current),o)break;return null;case 22:return t.lanes=0,_m(e,t,n,t.pendingProps);case 24:lo(t,mt,e.memoizedState.cache)}return In(e,t,n)}function Ym(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!ic(e,n)&&(t.flags&128)===0)return ft=!1,ey(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Le&&(t.flags&1048576)!==0&&xd(t,il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Jo(t.elementType),t.type=e,typeof e=="function")pi(e)?(o=Qo(e,o),t.tag=1,t=zm(null,t,e,o,n)):(t.tag=0,t=tc(null,t,e,o,n));else{if(e!=null){var l=e.$$typeof;if(l===Ne){t.tag=11,t=Dm(null,t,e,o,n);break e}else if(l===O){t.tag=14,t=Am(null,t,e,o,n);break e}}throw t=Ie(e)||e,Error(c(306,t,""))}}return t;case 0:return tc(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,l=Qo(o,t.pendingProps),zm(e,t,o,l,n);case 3:e:{if(rt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));o=t.pendingProps;var r=t.memoizedState;l=r.element,Ni(e,t),hl(t,o,null,n);var u=t.memoizedState;if(o=u.cache,lo(t,mt,o),o!==r.cache&&Ei(t,[mt],n,!0),gl(),o=u.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Bm(e,t,o,n);break e}else if(o!==l){l=Qt(Error(c(424)),t),cl(l),t=Bm(e,t,o,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=nn(e.firstChild),Et=t,Le=!0,oo=null,en=!0,n=_d(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),o===l){t=In(e,t,n);break e}wt(e,t,o,n)}t=t.child}return t;case 26:return Vr(e,t),e===null?(n=Wp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Le||(n=t.type,e=t.pendingProps,o=is(pe.current).createElement(n),o[Q]=t,o[ee]=e,jt(o,n,e),Ze(o),t.stateNode=o):t.memoizedState=Wp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return No(t),e===null&&Le&&(o=t.stateNode=Zp(t.type,t.pendingProps,pe.current),Et=t,en=!0,l=Ge,vo(t.type)?(Ic=l,Ge=nn(o.firstChild)):Ge=l),wt(e,t,t.pendingProps.children,n),Vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Le&&((l=o=Ge)&&(o=Dy(o,t.type,t.pendingProps,en),o!==null?(t.stateNode=o,Et=t,Ge=nn(o.firstChild),en=!1,l=!0):l=!1),l||ao(t)),No(t),l=t.type,r=t.pendingProps,u=e!==null?e.memoizedProps:null,o=r.children,kc(l,r)?o=null:u!==null&&kc(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=Ui(e,t,Vh,null,null,n),kl._currentValue=l),Vr(e,t),wt(e,t,o,n),t.child;case 6:return e===null&&Le&&((e=n=Ge)&&(n=Ay(n,t.pendingProps,en),n!==null?(t.stateNode=n,Et=t,Ge=null,e=!0):e=!1),e||ao(t)),null;case 13:return Hm(e,t,n);case 4:return rt(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ko(t,null,o,n):wt(e,t,o,n),t.child;case 11:return Dm(e,t,t.type,t.pendingProps,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,lo(t,t.type,o.value),wt(e,t,o.children,n),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,Vo(t),l=Tt(l),o=o(l),t.flags|=1,wt(e,t,o,n),t.child;case 14:return Am(e,t,t.type,t.pendingProps,n);case 15:return Cm(e,t,t.type,t.pendingProps,n);case 19:return Im(e,t,n);case 31:return Wh(e,t,n);case 22:return _m(e,t,n,t.pendingProps);case 24:return Vo(t),o=Tt(mt),e===null?(l=ji(),l===null&&(l=Je,r=Ti(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:o,cache:l},Oi(t),lo(t,mt,l)):((e.lanes&n)!==0&&(Ni(e,t),hl(t,null,null,n),gl()),l=e.memoizedState,r=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),lo(t,mt,o)):(o=r.cache,lo(t,mt,o),o!==l.cache&&Ei(t,[mt],n,!0))),wt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Yn(e){e.flags|=4}function cc(e,t,n,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(gp())e.flags|=8192;else throw Go=Dr,Mi}else e.flags&=-16777217}function Fm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!af(t))if(gp())e.flags|=8192;else throw Go=Dr,Mi}function Jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lo():536870912,e.lanes|=t,Da|=t)}function El(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function ty(e,t,n){var o=t.pendingProps;switch(yi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Bn(mt),$e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ya(t)?Yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vi())),Ke(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(Yn(t),r!==null?(Ke(t),Fm(t,r)):(Ke(t),cc(t,l,null,o,n))):r?r!==e.memoizedState?(Yn(t),Ke(t),Fm(t,r)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Yn(t),Ke(t),cc(t,l,e,o,n)),null;case 27:if(oa(t),n=pe.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Yn(t);else{if(!o){if(t.stateNode===null)throw Error(c(166));return Ke(t),null}e=$.current,ya(t)?Ed(t):(e=Zp(l,o,n),t.stateNode=e,Yn(t))}return Ke(t),null;case 5:if(oa(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Yn(t);else{if(!o){if(t.stateNode===null)throw Error(c(166));return Ke(t),null}if(r=$.current,ya(t))Ed(t);else{var u=is(pe.current);switch(r){case 1:r=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=u.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?u.createElement(l,{is:o.is}):u.createElement(l)}}r[Q]=t,r[ee]=o;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=r;e:switch(jt(r,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Yn(t)}}return Ke(t),cc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Yn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(c(166));if(e=pe.current,ya(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,l=Et,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[Q]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Hp(e.nodeValue,n)),e||ao(t,!0)}else e=is(e).createTextNode(o),e[Q]=t,t.stateNode=e}return Ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=ya(t),n!==null){if(e===null){if(!o)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Q]=t}else Fo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else n=vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ke(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ya(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Q]=t}else Fo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),l=!1}else l=vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==l&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jr(t,t.updateQueue),Ke(t),null);case 4:return $e(),e===null&&Ac(t.stateNode.containerInfo),Ke(t),null;case 10:return Bn(t.type),Ke(t),null;case 19:if(z(ct),o=t.memoizedState,o===null)return Ke(t),null;if(l=(t.flags&128)!==0,r=o.rendering,r===null)if(l)El(o,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Lr(e),r!==null){for(t.flags|=128,El(o,!1),e=r.updateQueue,t.updateQueue=e,Jr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yd(n,e),n=n.sibling;return q(ct,ct.current&1|2),Le&&kn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&st()>$r&&(t.flags|=128,l=!0,El(o,!1),t.lanes=4194304)}else{if(!l)if(e=Lr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Jr(t,e),El(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Le)return Ke(t),null}else 2*st()-o.renderingStartTime>$r&&n!==536870912&&(t.flags|=128,l=!0,El(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=st(),e.sibling=null,n=ct.current,q(ct,l?n&1|2:n&1),Le&&kn(t,o.treeForkCount),e):(Ke(t),null);case 22:case 23:return Ft(t),Ci(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&Jr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&z(Xo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bn(mt),Ke(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ny(e,t){switch(yi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(mt),$e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oa(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(c(340));Fo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Fo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(ct),null;case 4:return $e(),null;case 10:return Bn(t.type),null;case 22:case 23:return Ft(t),Ci(),e!==null&&z(Xo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bn(mt),null;case 25:return null;default:return null}}function qm(e,t){switch(yi(t),t.tag){case 3:Bn(mt),$e();break;case 26:case 27:case 5:oa(t);break;case 4:$e();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:z(ct);break;case 10:Bn(t.type);break;case 22:case 23:Ft(t),Ci(),e!==null&&z(Xo);break;case 24:Bn(mt)}}function Tl(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var l=o.next;n=l;do{if((n.tag&e)===e){o=void 0;var r=n.create,u=n.inst;o=r(),u.destroy=o}n=n.next}while(n!==l)}}catch(g){Fe(t,t.return,g)}}function mo(e,t,n){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var r=l.next;o=r;do{if((o.tag&e)===e){var u=o.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,l=t;var v=n,D=g;try{D()}catch(B){Fe(l,v,B)}}}o=o.next}while(o!==r)}}catch(B){Fe(t,t.return,B)}}function Vm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ud(t,n)}catch(o){Fe(e,e.return,o)}}}function Xm(e,t,n){n.props=Qo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){Fe(e,t,o)}}function wl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(l){Fe(e,t,l)}}function Tn(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(l){Fe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Fe(e,t,l)}else n.current=null}function Jm(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(l){Fe(e,e.return,l)}}function uc(e,t,n){try{var o=e.stateNode;wy(o,e.type,n,t),o[ee]=t}catch(l){Fe(e,e.return,l)}}function Gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vo(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vo(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_n));else if(o!==4&&(o===27&&vo(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(mc(e,t,n),e=e.sibling;e!==null;)mc(e,t,n),e=e.sibling}function Gr(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&vo(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gr(e,t,n),e=e.sibling;e!==null;)Gr(e,t,n),e=e.sibling}function Km(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);jt(t,o,n),t[Q]=e,t[ee]=n}catch(r){Fe(e,e.return,r)}}var Fn=!1,gt=!1,pc=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,vt=null;function oy(e,t){if(e=e.containerInfo,Lc=gs,e=id(e),ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var u=0,g=-1,v=-1,D=0,B=0,P=e,C=null;t:for(;;){for(var k;P!==n||l!==0&&P.nodeType!==3||(g=u+l),P!==r||o!==0&&P.nodeType!==3||(v=u+o),P.nodeType===3&&(u+=P.nodeValue.length),(k=P.firstChild)!==null;)C=P,P=k;for(;;){if(P===e)break t;if(C===n&&++D===l&&(g=u),C===r&&++B===o&&(v=u),(k=P.nextSibling)!==null)break;P=C,C=P.parentNode}P=k}n=g===-1||v===-1?null:{start:g,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:e,selectionRange:n},gs=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,o=n.stateNode;try{var te=Qo(n.type,l);e=o.getSnapshotBeforeUpdate(te,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){Fe(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Bc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Qm(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(e,n),o&4&&Tl(5,n);break;case 1:if(Vn(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){Fe(n,n.return,u)}else{var l=Qo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Fe(n,n.return,u)}}o&64&&Vm(n),o&512&&wl(n,n.return);break;case 3:if(Vn(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ud(e,t)}catch(u){Fe(n,n.return,u)}}break;case 27:t===null&&o&4&&Km(n);case 26:case 5:Vn(e,n),t===null&&o&4&&Jm(n),o&512&&wl(n,n.return);break;case 12:Vn(e,n);break;case 31:Vn(e,n),o&4&&ep(e,n);break;case 13:Vn(e,n),o&4&&tp(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=my.bind(null,n),Cy(e,n))));break;case 22:if(o=n.memoizedState!==null||Fn,!o){t=t!==null&&t.memoizedState!==null||gt,l=Fn;var r=gt;Fn=o,(gt=t)&&!r?Xn(e,n,(n.subtreeFlags&8772)!==0):Vn(e,n),Fn=l,gt=r}break;case 30:break;default:Vn(e,n)}}function $m(e){var t=e.alternate;t!==null&&(e.alternate=null,$m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,_t=!1;function qn(e,t,n){for(n=n.child;n!==null;)Wm(e,t,n),n=n.sibling}function Wm(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 26:gt||Tn(n,t),qn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:gt||Tn(n,t);var o=Qe,l=_t;vo(n.type)&&(Qe=n.stateNode,_t=!1),qn(e,t,n),_l(n.stateNode),Qe=o,_t=l;break;case 5:gt||Tn(n,t);case 6:if(o=Qe,l=_t,Qe=null,qn(e,t,n),Qe=o,_t=l,Qe!==null)if(_t)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(r){Fe(n,t,r)}else try{Qe.removeChild(n.stateNode)}catch(r){Fe(n,t,r)}break;case 18:Qe!==null&&(_t?(e=Qe,Vp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ba(e)):Vp(Qe,n.stateNode));break;case 4:o=Qe,l=_t,Qe=n.stateNode.containerInfo,_t=!0,qn(e,t,n),Qe=o,_t=l;break;case 0:case 11:case 14:case 15:mo(2,n,t),gt||mo(4,n,t),qn(e,t,n);break;case 1:gt||(Tn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&Xm(n,t,o)),qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:gt=(o=gt)||n.memoizedState!==null,qn(e,t,n),gt=o;break;default:qn(e,t,n)}}function ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ba(e)}catch(n){Fe(t,t.return,n)}}}function tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ba(e)}catch(n){Fe(t,t.return,n)}}function ay(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zm),t;default:throw Error(c(435,e.tag))}}function Kr(e,t){var n=ay(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var l=py.bind(null,e,o);o.then(l,l)}})}function Lt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o],r=e,u=t,g=u;e:for(;g!==null;){switch(g.tag){case 27:if(vo(g.type)){Qe=g.stateNode,_t=!1;break e}break;case 5:Qe=g.stateNode,_t=!1;break e;case 3:case 4:Qe=g.stateNode.containerInfo,_t=!0;break e}g=g.return}if(Qe===null)throw Error(c(160));Wm(r,u,l),Qe=null,_t=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)np(t,e),t=t.sibling}var bn=null;function np(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Lt(t,e),Ut(e),o&4&&(mo(3,e,e.return),Tl(3,e),mo(5,e,e.return));break;case 1:Lt(t,e),Ut(e),o&512&&(gt||n===null||Tn(n,n.return)),o&64&&Fn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var l=bn;if(Lt(t,e),Ut(e),o&512&&(gt||n===null||Tn(n,n.return)),o&4){var r=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":r=l.getElementsByTagName("title")[0],(!r||r[et]||r[Q]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(o),l.head.insertBefore(r,l.querySelector("head > title"))),jt(r,o,n),r[Q]=e,Ze(r),o=r;break e;case"link":var u=nf("link","href",l).get(o+(n.href||""));if(u){for(var g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(g,1);break t}}r=l.createElement(o),jt(r,o,n),l.head.appendChild(r);break;case"meta":if(u=nf("meta","content",l).get(o+(n.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(g,1);break t}}r=l.createElement(o),jt(r,o,n),l.head.appendChild(r);break;default:throw Error(c(468,o))}r[Q]=e,Ze(r),o=r}e.stateNode=o}else of(l,e.type,e.stateNode);else e.stateNode=tf(l,o,e.memoizedProps);else r!==o?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,o===null?of(l,e.type,e.stateNode):tf(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Lt(t,e),Ut(e),o&512&&(gt||n===null||Tn(n,n.return)),n!==null&&o&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Lt(t,e),Ut(e),o&512&&(gt||n===null||Tn(n,n.return)),e.flags&32){l=e.stateNode;try{sa(l,"")}catch(te){Fe(e,e.return,te)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,uc(e,l,n!==null?n.memoizedProps:l)),o&1024&&(pc=!0);break;case 6:if(Lt(t,e),Ut(e),o&4){if(e.stateNode===null)throw Error(c(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(te){Fe(e,e.return,te)}}break;case 3:if(ds=null,l=bn,bn=cs(t.containerInfo),Lt(t,e),bn=l,Ut(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(te){Fe(e,e.return,te)}pc&&(pc=!1,op(e));break;case 4:o=bn,bn=cs(e.stateNode.containerInfo),Lt(t,e),Ut(e),bn=o;break;case 12:Lt(t,e),Ut(e);break;case 31:Lt(t,e),Ut(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kr(e,o)));break;case 13:Lt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qr=st()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kr(e,o)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,D=Fn,B=gt;if(Fn=D||l,gt=B||v,Lt(t,e),gt=B,Fn=D,Ut(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||Fn||gt||$o(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,l)u=r.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=v.stateNode;var P=v.memoizedProps.style,C=P!=null&&P.hasOwnProperty("display")?P.display:null;g.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(te){Fe(v,v.return,te)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(te){Fe(v,v.return,te)}}}else if(t.tag===18){if(n===null){v=t;try{var k=v.stateNode;l?Xp(k,!0):Xp(v.stateNode,!1)}catch(te){Fe(v,v.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Kr(e,n))));break;case 19:Lt(t,e),Ut(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kr(e,o)));break;case 30:break;case 21:break;default:Lt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(Gm(o)){n=o;break}o=o.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=dc(e);Gr(e,r,l);break;case 5:var u=n.stateNode;n.flags&32&&(sa(u,""),n.flags&=-33);var g=dc(e);Gr(e,g,u);break;case 3:case 4:var v=n.stateNode.containerInfo,D=dc(e);mc(e,D,v);break;default:throw Error(c(161))}}catch(B){Fe(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function op(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;op(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qm(e,t.alternate,t),t=t.sibling}function $o(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:mo(4,t,t.return),$o(t);break;case 1:Tn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Xm(t,t.return,n),$o(t);break;case 27:_l(t.stateNode);case 26:case 5:Tn(t,t.return),$o(t);break;case 22:t.memoizedState===null&&$o(t);break;case 30:$o(t);break;default:$o(t)}e=e.sibling}}function Xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,r=t,u=r.flags;switch(r.tag){case 0:case 11:case 15:Xn(l,r,n),Tl(4,r);break;case 1:if(Xn(l,r,n),o=r,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Fe(o,o.return,D)}if(o=r,l=o.updateQueue,l!==null){var g=o.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Ld(v[l],g)}catch(D){Fe(o,o.return,D)}}n&&u&64&&Vm(r),wl(r,r.return);break;case 27:Km(r);case 26:case 5:Xn(l,r,n),n&&o===null&&u&4&&Jm(r),wl(r,r.return);break;case 12:Xn(l,r,n);break;case 31:Xn(l,r,n),n&&u&4&&ep(l,r);break;case 13:Xn(l,r,n),n&&u&4&&tp(l,r);break;case 22:r.memoizedState===null&&Xn(l,r,n),wl(r,r.return);break;case 30:break;default:Xn(l,r,n)}t=t.sibling}}function fc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ul(n))}function gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e))}function vn(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ap(e,t,n,o),t=t.sibling}function ap(e,t,n,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:vn(e,t,n,o),l&2048&&Tl(9,t);break;case 1:vn(e,t,n,o);break;case 3:vn(e,t,n,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e)));break;case 12:if(l&2048){vn(e,t,n,o),e=t.stateNode;try{var r=t.memoizedProps,u=r.id,g=r.onPostCommit;typeof g=="function"&&g(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Fe(t,t.return,v)}}else vn(e,t,n,o);break;case 31:vn(e,t,n,o);break;case 13:vn(e,t,n,o);break;case 23:break;case 22:r=t.stateNode,u=t.alternate,t.memoizedState!==null?r._visibility&2?vn(e,t,n,o):jl(e,t):r._visibility&2?vn(e,t,n,o):(r._visibility|=2,Oa(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&fc(u,t);break;case 24:vn(e,t,n,o),l&2048&&gc(t.alternate,t);break;default:vn(e,t,n,o)}}function Oa(e,t,n,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,u=t,g=n,v=o,D=u.flags;switch(u.tag){case 0:case 11:case 15:Oa(r,u,g,v,l),Tl(8,u);break;case 23:break;case 22:var B=u.stateNode;u.memoizedState!==null?B._visibility&2?Oa(r,u,g,v,l):jl(r,u):(B._visibility|=2,Oa(r,u,g,v,l)),l&&D&2048&&fc(u.alternate,u);break;case 24:Oa(r,u,g,v,l),l&&D&2048&&gc(u.alternate,u);break;default:Oa(r,u,g,v,l)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,l=o.flags;switch(o.tag){case 22:jl(n,o),l&2048&&fc(o.alternate,o);break;case 24:jl(n,o),l&2048&&gc(o.alternate,o);break;default:jl(n,o)}t=t.sibling}}var Ml=8192;function Na(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)lp(e,t,n),e=e.sibling}function lp(e,t,n){switch(e.tag){case 26:Na(e,t,n),e.flags&Ml&&e.memoizedState!==null&&qy(n,bn,e.memoizedState,e.memoizedProps);break;case 5:Na(e,t,n);break;case 3:case 4:var o=bn;bn=cs(e.stateNode.containerInfo),Na(e,t,n),bn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ml,Ml=16777216,Na(e,t,n),Ml=o):Na(e,t,n));break;default:Na(e,t,n)}}function rp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];vt=o,ip(o,e)}rp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sp(e),e=e.sibling}function sp(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&mo(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zr(e)):Ol(e);break;default:Ol(e)}}function Zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];vt=o,ip(o,e)}rp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:mo(8,t,t.return),Zr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zr(t));break;default:Zr(t)}e=e.sibling}}function ip(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:mo(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ul(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,vt=o;else e:for(n=e;vt!==null;){o=vt;var l=o.sibling,r=o.return;if($m(o),o===n){vt=null;break e}if(l!==null){l.return=r,vt=l;break e}vt=r}}}var ly={getCacheForType:function(e){var t=Tt(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Tt(mt).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Je=null,Te=null,Me=0,Ye=0,qt=null,po=!1,Ra=!1,hc=!1,Jn=0,at=0,fo=0,Wo=0,yc=0,Vt=0,Da=0,Nl=null,kt=null,bc=!1,Qr=0,cp=0,$r=1/0,Wr=null,go=null,yt=0,ho=null,Aa=null,Gn=0,vc=0,xc=null,up=null,Rl=0,Sc=null;function Xt(){return(Pe&2)!==0&&Me!==0?Me&-Me:L.T!==null?Oc():V()}function dp(){if(Vt===0)if((Me&536870912)===0||Le){var e=Ao;Ao<<=1,(Ao&3932160)===0&&(Ao=262144),Vt=e}else Vt=536870912;return e=Yt.current,e!==null&&(e.flags|=32),Vt}function zt(e,t,n){(e===Je&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),yo(e,Me,Vt,!1)),eo(e,n),((Pe&2)===0||e!==Je)&&(e===Je&&((Pe&2)===0&&(Wo|=n),at===4&&yo(e,Me,Vt,!1)),wn(e))}function mp(e,t,n){if((Pe&6)!==0)throw Error(c(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||_o(e,t),l=o?cy(e,t):Tc(e,t,!0),r=o;do{if(l===0){Ra&&!o&&yo(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!sy(n)){l=Tc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var g=e;l=Nl;var v=g.current.memoizedState.isDehydrated;if(v&&(Ca(g,u).flags|=256),u=Tc(g,u,!1),u!==2){if(hc&&!v){g.errorRecoveryDisabledLanes|=r,Wo|=r,l=4;break e}r=kt,kt=l,r!==null&&(kt===null?kt=r:kt.push.apply(kt,r))}l=u}if(r=!1,l!==2)continue}}if(l===1){Ca(e,0),yo(e,t,0,!0);break}e:{switch(o=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:yo(o,t,Vt,!po);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Qr+300-st(),10<l)){if(yo(o,t,Vt,!po),Co(o,0,!0)!==0)break e;Gn=t,o.timeoutHandle=Fp(pp.bind(null,o,n,kt,Wr,bc,t,Vt,Wo,Da,po,r,"Throttled",-0,0),l);break e}pp(o,n,kt,Wr,bc,t,Vt,Wo,Da,po,r,null,-0,0)}}break}while(!0);wn(e)}function pp(e,t,n,o,l,r,u,g,v,D,B,P,C,k){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},lp(t,r,P);var te=(r&62914560)===r?Qr-st():(r&4194048)===r?cp-st():0;if(te=Vy(P,te),te!==null){Gn=r,e.cancelPendingCommit=te(Sp.bind(null,e,t,r,n,o,l,u,g,v,B,P,null,C,k)),yo(e,r,u,!D);return}}Sp(e,t,r,n,o,l,u,g,v)}function sy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var l=n[o],r=l.getSnapshot;l=l.value;try{if(!Pt(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yo(e,t,n,o){t&=~yc,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var r=31-Mt(l),u=1<<r;o[r]=-1,l&=~u}n!==0&&ur(e,n,t)}function es(){return(Pe&6)===0?(Dl(0),!1):!0}function Ec(){if(Te!==null){if(Ye===0)var e=Te.return;else e=Te,zn=qo=null,Bi(e),Ea=null,ml=0,e=Te;for(;e!==null;)qm(e.alternate,e),e=e.return;Te=null}}function Ca(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Oy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gn=0,Ec(),Je=e,Te=n=Un(e.current,null),Me=t,Ye=0,qt=null,po=!1,Ra=_o(e,t),hc=!1,Da=Vt=yc=Wo=fo=at=0,kt=Nl=null,bc=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-Mt(o),r=1<<l;t|=e[l],o&=~r}return Jn=t,Sr(),n}function fp(e,t){he=null,L.H=xl,t===Sa||t===Rr?(t=Dd(),Ye=3):t===Mi?(t=Dd(),Ye=4):Ye=t===ec?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,Te===null&&(at=1,Fr(e,Qt(t,e.current)))}function gp(){var e=Yt.current;return e===null?!0:(Me&4194048)===Me?tn===null:(Me&62914560)===Me||(Me&536870912)!==0?e===tn:!1}function hp(){var e=L.H;return L.H=xl,e===null?xl:e}function yp(){var e=L.A;return L.A=ly,e}function ts(){at=4,po||(Me&4194048)!==Me&&Yt.current!==null||(Ra=!0),(fo&134217727)===0&&(Wo&134217727)===0||Je===null||yo(Je,Me,Vt,!1)}function Tc(e,t,n){var o=Pe;Pe|=2;var l=hp(),r=yp();(Je!==e||Me!==t)&&(Wr=null,Ca(e,t)),t=!1;var u=at;e:do try{if(Ye!==0&&Te!==null){var g=Te,v=qt;switch(Ye){case 8:Ec(),u=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(t=!0);var D=Ye;if(Ye=0,qt=null,_a(e,g,v,D),n&&Ra){u=0;break e}break;default:D=Ye,Ye=0,qt=null,_a(e,g,v,D)}}iy(),u=at;break}catch(B){fp(e,B)}while(!0);return t&&e.shellSuspendCounter++,zn=qo=null,Pe=o,L.H=l,L.A=r,Te===null&&(Je=null,Me=0,Sr()),u}function iy(){for(;Te!==null;)bp(Te)}function cy(e,t){var n=Pe;Pe|=2;var o=hp(),l=yp();Je!==e||Me!==t?(Wr=null,$r=st()+500,Ca(e,t)):Ra=_o(e,t);e:do try{if(Ye!==0&&Te!==null){t=Te;var r=qt;t:switch(Ye){case 1:Ye=0,qt=null,_a(e,t,r,1);break;case 2:case 9:if(Nd(r)){Ye=0,qt=null,vp(t);break}t=function(){Ye!==2&&Ye!==9||Je!==e||(Ye=7),wn(e)},r.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Nd(r)?(Ye=0,qt=null,vp(t)):(Ye=0,qt=null,_a(e,t,r,7));break;case 5:var u=null;switch(Te.tag){case 26:u=Te.memoizedState;case 5:case 27:var g=Te;if(u?af(u):g.stateNode.complete){Ye=0,qt=null;var v=g.sibling;if(v!==null)Te=v;else{var D=g.return;D!==null?(Te=D,ns(D)):Te=null}break t}}Ye=0,qt=null,_a(e,t,r,5);break;case 6:Ye=0,qt=null,_a(e,t,r,6);break;case 8:Ec(),at=6;break e;default:throw Error(c(462))}}uy();break}catch(B){fp(e,B)}while(!0);return zn=qo=null,L.H=o,L.A=l,Pe=n,Te!==null?0:(Je=null,Me=0,Sr(),at)}function uy(){for(;Te!==null&&!Ps();)bp(Te)}function bp(e){var t=Ym(e.alternate,e,Jn);e.memoizedProps=e.pendingProps,t===null?ns(e):Te=t}function vp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=km(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=km(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Bi(t);default:qm(n,t),t=Te=yd(t,Jn),t=Ym(n,t,Jn)}e.memoizedProps=e.pendingProps,t===null?ns(e):Te=t}function _a(e,t,n,o){zn=qo=null,Bi(t),Ea=null,ml=0;var l=t.return;try{if($h(e,l,t,n,Me)){at=1,Fr(e,Qt(n,e.current)),Te=null;return}}catch(r){if(l!==null)throw Te=l,r;at=1,Fr(e,Qt(n,e.current)),Te=null;return}t.flags&32768?(Le||o===1?e=!0:Ra||(Me&536870912)!==0?e=!1:(po=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yt.current,o!==null&&o.tag===13&&(o.flags|=16384))),xp(t,e)):ns(t)}function ns(e){var t=e;do{if((t.flags&32768)!==0){xp(t,po);return}e=t.return;var n=ty(t.alternate,t,Jn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);at===0&&(at=5)}function xp(e,t){do{var n=ny(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);at=6,Te=null}function Sp(e,t,n,o,l,r,u,g,v){e.cancelPendingCommit=null;do os();while(yt!==0);if((Pe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=di,qs(e,n,r,u,g,v),e===Je&&(Te=Je=null,Me=0),Aa=t,ho=e,Gn=n,vc=r,xc=l,up=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fy(Dt,function(){return Mp(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,l=F.p,F.p=2,u=Pe,Pe|=4;try{oy(e,t,n)}finally{Pe=u,F.p=l,L.T=o}}yt=1,Ep(),Tp(),wp()}}function Ep(){if(yt===1){yt=0;var e=ho,t=Aa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var o=F.p;F.p=2;var l=Pe;Pe|=4;try{np(t,e);var r=Uc,u=id(e.containerInfo),g=r.focusedElem,v=r.selectionRange;if(u!==g&&g&&g.ownerDocument&&sd(g.ownerDocument.documentElement,g)){if(v!==null&&ri(g)){var D=v.start,B=v.end;if(B===void 0&&(B=D),"selectionStart"in g)g.selectionStart=D,g.selectionEnd=Math.min(B,g.value.length);else{var P=g.ownerDocument||document,C=P&&P.defaultView||window;if(C.getSelection){var k=C.getSelection(),te=g.textContent.length,de=Math.min(v.start,te),Xe=v.end===void 0?de:Math.min(v.end,te);!k.extend&&de>Xe&&(u=Xe,Xe=de,de=u);var j=rd(g,de),T=rd(g,Xe);if(j&&T&&(k.rangeCount!==1||k.anchorNode!==j.node||k.anchorOffset!==j.offset||k.focusNode!==T.node||k.focusOffset!==T.offset)){var R=P.createRange();R.setStart(j.node,j.offset),k.removeAllRanges(),de>Xe?(k.addRange(R),k.extend(T.node,T.offset)):(R.setEnd(T.node,T.offset),k.addRange(R))}}}}for(P=[],k=g;k=k.parentNode;)k.nodeType===1&&P.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<P.length;g++){var H=P[g];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}gs=!!Lc,Uc=Lc=null}finally{Pe=l,F.p=o,L.T=n}}e.current=t,yt=2}}function Tp(){if(yt===2){yt=0;var e=ho,t=Aa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var o=F.p;F.p=2;var l=Pe;Pe|=4;try{Qm(e,t.alternate,t)}finally{Pe=l,F.p=o,L.T=n}}yt=3}}function wp(){if(yt===4||yt===3){yt=0,Is();var e=ho,t=Aa,n=Gn,o=up;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,Aa=ho=null,jp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(go=null),Y(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Do,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=L.T,l=F.p,F.p=2,L.T=null;try{for(var r=e.onRecoverableError,u=0;u<o.length;u++){var g=o[u];r(g.value,{componentStack:g.stack})}}finally{L.T=t,F.p=l}}(Gn&3)!==0&&os(),wn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Sc?Rl++:(Rl=0,Sc=e):Rl=0,Dl(0)}}function jp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ul(t)))}function os(){return Ep(),Tp(),wp(),Mp()}function Mp(){if(yt!==5)return!1;var e=ho,t=vc;vc=0;var n=Y(Gn),o=L.T,l=F.p;try{F.p=32>n?32:n,L.T=null,n=xc,xc=null;var r=ho,u=Gn;if(yt=0,Aa=ho=null,Gn=0,(Pe&6)!==0)throw Error(c(331));var g=Pe;if(Pe|=4,sp(r.current),ap(r,r.current,u,n),Pe=g,Dl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Do,r)}catch{}return!0}finally{F.p=l,L.T=o,jp(e,t)}}function Op(e,t,n){t=Qt(n,t),t=Wi(e.stateNode,t,2),e=io(e,t,2),e!==null&&(eo(e,2),wn(e))}function Fe(e,t,n){if(e.tag===3)Op(e,e,n);else for(;t!==null;){if(t.tag===3){Op(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(go===null||!go.has(o))){e=Qt(n,e),n=Nm(2),o=io(t,n,2),o!==null&&(Rm(n,o,t,e),eo(o,2),wn(o));break}}t=t.return}}function wc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new ry;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(n)||(hc=!0,l.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function dy(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Je===e&&(Me&n)===n&&(at===4||at===3&&(Me&62914560)===Me&&300>st()-Qr?(Pe&2)===0&&Ca(e,0):yc|=n,Da===Me&&(Da=0)),wn(e)}function Np(e,t){t===0&&(t=Lo()),e=Io(e,t),e!==null&&(eo(e,t),wn(e))}function my(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Np(e,n)}function py(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(c(314))}o!==null&&o.delete(t),Np(e,n)}function fy(e,t){return Ja(e,t)}var as=null,La=null,jc=!1,ls=!1,Mc=!1,bo=0;function wn(e){e!==La&&e.next===null&&(La===null?as=La=e:La=La.next=e),ls=!0,jc||(jc=!0,hy())}function Dl(e,t){if(!Mc&&ls){Mc=!0;do for(var n=!1,o=as;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var r=0;else{var u=o.suspendedLanes,g=o.pingedLanes;r=(1<<31-Mt(42|e)+1)-1,r&=l&~(u&~g),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Cp(o,r))}else r=Me,r=Co(o,o===Je?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||_o(o,r)||(n=!0,Cp(o,r));o=o.next}while(n);Mc=!1}}function gy(){Rp()}function Rp(){ls=jc=!1;var e=0;bo!==0&&My()&&(e=bo);for(var t=st(),n=null,o=as;o!==null;){var l=o.next,r=Dp(o,t);r===0?(o.next=null,n===null?as=l:n.next=l,l===null&&(La=n)):(n=o,(e!==0||(r&3)!==0)&&(ls=!0)),o=l}yt!==0&&yt!==5||Dl(e),bo!==0&&(bo=0)}function Dp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var u=31-Mt(r),g=1<<u,v=l[u];v===-1?((g&n)===0||(g&o)!==0)&&(l[u]=cr(g,t)):v<=t&&(e.expiredLanes|=g),r&=~g}if(t=Je,n=Me,n=Co(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ga(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_o(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&Ga(o),Y(n)){case 2:case 8:n=la;break;case 32:n=Dt;break;case 268435456:n=Za;break;default:n=Dt}return o=Ap.bind(null,e),n=Ja(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&Ga(o),e.callbackPriority=2,e.callbackNode=null,2}function Ap(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(os()&&e.callbackNode!==n)return null;var o=Me;return o=Co(e,e===Je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(mp(e,o,t),Dp(e,st()),e.callbackNode!=null&&e.callbackNode===n?Ap.bind(null,e):null)}function Cp(e,t){if(os())return null;mp(e,t,!0)}function hy(){Ny(function(){(Pe&6)!==0?Ja(Ka,gy):Rp()})}function Oc(){if(bo===0){var e=va;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),bo=e}return bo}function _p(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pr(""+e)}function Lp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function yy(e,t,n,o,l){if(t==="submit"&&n&&n.stateNode===l){var r=_p((l[ee]||null).action),u=o.submitter;u&&(t=(t=u[ee]||null)?_p(t.formAction):u.getAttribute("formAction"),t!==null&&(r=t,u=null));var g=new yr("action","action",null,o,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(bo!==0){var v=u?Lp(l,u):new FormData(l);Ji(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(g.preventDefault(),v=u?Lp(l,u):new FormData(l),Ji(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Nc=0;Nc<ui.length;Nc++){var Rc=ui[Nc],by=Rc.toLowerCase(),vy=Rc[0].toUpperCase()+Rc.slice(1);yn(by,"on"+vy)}yn(dd,"onAnimationEnd"),yn(md,"onAnimationIteration"),yn(pd,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(Uh,"onTransitionRun"),yn(kh,"onTransitionStart"),yn(zh,"onTransitionCancel"),yn(fd,"onTransitionEnd"),Gt("onMouseEnter",["mouseout","mouseover"]),Gt("onMouseLeave",["mouseout","mouseover"]),Gt("onPointerEnter",["pointerout","pointerover"]),Gt("onPointerLeave",["pointerout","pointerover"]),gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],l=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var u=o.length-1;0<=u;u--){var g=o[u],v=g.instance,D=g.currentTarget;if(g=g.listener,v!==r&&l.isPropagationStopped())break e;r=g,l.currentTarget=D;try{r(l)}catch(B){xr(B)}l.currentTarget=null,r=v}else for(u=0;u<o.length;u++){if(g=o[u],v=g.instance,D=g.currentTarget,g=g.listener,v!==r&&l.isPropagationStopped())break e;r=g,l.currentTarget=D;try{r(l)}catch(B){xr(B)}l.currentTarget=null,r=v}}}}function we(e,t){var n=t[ue];n===void 0&&(n=t[ue]=new Set);var o=e+"__bubble";n.has(o)||(kp(t,e,2,!1),n.add(o))}function Dc(e,t,n){var o=0;t&&(o|=4),kp(n,e,o,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[rs]){e[rs]=!0,fn.forEach(function(n){n!=="selectionchange"&&(xy.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Dc("selectionchange",!1,t))}}function kp(e,t,n,o){switch(mf(t)){case 2:var l=Gy;break;case 8:l=Ky;break;default:l=Xc}n=l.bind(null,t,n,e),l=void 0,!Qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Cc(e,t,n,o,l){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var u=o.tag;if(u===3||u===4){var g=o.stateNode.containerInfo;if(g===l)break;if(u===4)for(u=o.return;u!==null;){var v=u.tag;if((v===3||v===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;g!==null;){if(u=nt(g),u===null)return;if(v=u.tag,v===5||v===6||v===26||v===27){o=r=u;continue e}g=g.parentNode}}o=o.return}Iu(function(){var D=r,B=Ks(n),P=[];e:{var C=gd.get(e);if(C!==void 0){var k=yr,te=e;switch(e){case"keypress":if(gr(n)===0)break e;case"keydown":case"keyup":k=ph;break;case"focusin":te="focus",k=ti;break;case"focusout":te="blur",k=ti;break;case"beforeblur":case"afterblur":k=ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=hh;break;case dd:case md:case pd:k=ah;break;case fd:k=bh;break;case"scroll":case"scrollend":k=Wg;break;case"wheel":k=xh;break;case"copy":case"cut":case"paste":k=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Xu;break;case"toggle":case"beforetoggle":k=Eh}var de=(t&4)!==0,Xe=!de&&(e==="scroll"||e==="scrollend"),j=de?C!==null?C+"Capture":null:C;de=[];for(var T=D,R;T!==null;){var H=T;if(R=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||R===null||j===null||(H=Wa(T,j),H!=null&&de.push(Cl(T,H,R))),Xe)break;T=T.return}0<de.length&&(C=new k(C,te,null,n,B),P.push({event:C,listeners:de}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",C&&n!==Gs&&(te=n.relatedTarget||n.fromElement)&&(nt(te)||te[ae]))break e;if((k||C)&&(C=B.window===B?B:(C=B.ownerDocument)?C.defaultView||C.parentWindow:window,k?(te=n.relatedTarget||n.toElement,k=D,te=te?nt(te):null,te!==null&&(Xe=m(te),de=te.tag,te!==Xe||de!==5&&de!==27&&de!==6)&&(te=null)):(k=null,te=D),k!==te)){if(de=qu,H="onMouseLeave",j="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(de=Xu,H="onPointerLeave",j="onPointerEnter",T="pointer"),Xe=k==null?C:bt(k),R=te==null?C:bt(te),C=new de(H,T+"leave",k,n,B),C.target=Xe,C.relatedTarget=R,H=null,nt(B)===D&&(de=new de(j,T+"enter",te,n,B),de.target=R,de.relatedTarget=Xe,H=de),Xe=H,k&&te)t:{for(de=Sy,j=k,T=te,R=0,H=j;H;H=de(H))R++;H=0;for(var ce=T;ce;ce=de(ce))H++;for(;0<R-H;)j=de(j),R--;for(;0<H-R;)T=de(T),H--;for(;R--;){if(j===T||T!==null&&j===T.alternate){de=j;break t}j=de(j),T=de(T)}de=null}else de=null;k!==null&&zp(P,C,k,de,!1),te!==null&&Xe!==null&&zp(P,Xe,te,de,!0)}}e:{if(C=D?bt(D):window,k=C.nodeName&&C.nodeName.toLowerCase(),k==="select"||k==="input"&&C.type==="file")var ze=ed;else if($u(C))if(td)ze=Ch;else{ze=Dh;var oe=Rh}else k=C.nodeName,!k||k.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Js(D.elementType)&&(ze=ed):ze=Ah;if(ze&&(ze=ze(e,D))){Wu(P,ze,n,B);break e}oe&&oe(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Xs(C,"number",C.value)}switch(oe=D?bt(D):window,e){case"focusin":($u(oe)||oe.contentEditable==="true")&&(da=oe,si=D,sl=null);break;case"focusout":sl=si=da=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,cd(P,n,B);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":cd(P,n,B)}var be;if(oi)e:{switch(e){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else ua?Zu(e,n)&&(Oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Oe="onCompositionStart");Oe&&(Ju&&n.locale!=="ko"&&(ua||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&ua&&(be=Yu()):(to=B,$s="value"in to?to.value:to.textContent,ua=!0)),oe=ss(D,Oe),0<oe.length&&(Oe=new Vu(Oe,e,null,n,B),P.push({event:Oe,listeners:oe}),be?Oe.data=be:(be=Qu(n),be!==null&&(Oe.data=be)))),(be=wh?jh(e,n):Mh(e,n))&&(Oe=ss(D,"onBeforeInput"),0<Oe.length&&(oe=new Vu("onBeforeInput","beforeinput",null,n,B),P.push({event:oe,listeners:Oe}),oe.data=be)),yy(P,e,D,n,B)}Up(P,t)})}function Cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",o=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Wa(e,n),l!=null&&o.unshift(Cl(e,l,r)),l=Wa(e,t),l!=null&&o.push(Cl(e,l,r))),e.tag===3)return o;e=e.return}return[]}function Sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zp(e,t,n,o,l){for(var r=t._reactName,u=[];n!==null&&n!==o;){var g=n,v=g.alternate,D=g.stateNode;if(g=g.tag,v!==null&&v===o)break;g!==5&&g!==26&&g!==27||D===null||(v=D,l?(D=Wa(n,r),D!=null&&u.unshift(Cl(n,D,v))):l||(D=Wa(n,r),D!=null&&u.push(Cl(n,D,v)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function Bp(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ty,"")}function Hp(e,t){return t=Bp(t),Bp(e)===t}function Ve(e,t,n,o,l,r){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||sa(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&sa(e,""+o);break;case"className":hn(e,"class",o);break;case"tabIndex":hn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":hn(e,n,o);break;case"style":Hu(e,o,r);break;case"data":if(t!=="object"){hn(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=pr(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",l.name,l,null),Ve(e,t,"formEncType",l.formEncType,l,null),Ve(e,t,"formMethod",l.formMethod,l,null),Ve(e,t,"formTarget",l.formTarget,l,null)):(Ve(e,t,"encType",l.encType,l,null),Ve(e,t,"method",l.method,l,null),Ve(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=pr(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=_n);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=pr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":we("beforetoggle",e),we("toggle",e),it(e,"popover",o);break;case"xlinkActuate":St(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":St(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":St(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":St(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":St(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":St(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":St(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":St(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":St(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":it(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qg.get(n)||n,it(e,n,o))}}function _c(e,t,n,o,l,r){switch(n){case"style":Hu(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof o=="string"?sa(e,o):(typeof o=="number"||typeof o=="bigint")&&sa(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=_n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[ee]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof o=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,l);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):it(e,n,o)}}}function jt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var u=n[r];if(u!=null)switch(r){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ve(e,t,r,u,n,null)}}l&&Ve(e,t,"srcSet",n.srcSet,n,null),o&&Ve(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var g=r=u=l=null,v=null,D=null;for(o in n)if(n.hasOwnProperty(o)){var B=n[o];if(B!=null)switch(o){case"name":l=B;break;case"type":u=B;break;case"checked":v=B;break;case"defaultChecked":D=B;break;case"value":r=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Ve(e,t,o,B,n,null)}}Uu(e,r,g,v,D,u,l,!1);return;case"select":we("invalid",e),o=u=r=null;for(l in n)if(n.hasOwnProperty(l)&&(g=n[l],g!=null))switch(l){case"value":r=g;break;case"defaultValue":u=g;break;case"multiple":o=g;default:Ve(e,t,l,g,n,null)}t=r,n=u,e.multiple=!!o,t!=null?ra(e,!!o,t,!1):n!=null&&ra(e,!!o,n,!0);return;case"textarea":we("invalid",e),r=l=o=null;for(u in n)if(n.hasOwnProperty(u)&&(g=n[u],g!=null))switch(u){case"value":o=g;break;case"defaultValue":l=g;break;case"children":r=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:Ve(e,t,u,g,n,null)}zu(e,o,l,r);return;case"option":for(v in n)n.hasOwnProperty(v)&&(o=n[v],o!=null)&&(v==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,t,v,o,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Al.length;o++)we(Al[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(o=n[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ve(e,t,D,o,n,null)}return;default:if(Js(t)){for(B in n)n.hasOwnProperty(B)&&(o=n[B],o!==void 0&&_c(e,t,B,o,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(o=n[g],o!=null&&Ve(e,t,g,o,n,null))}function wy(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,u=null,g=null,v=null,D=null,B=null;for(k in n){var P=n[k];if(n.hasOwnProperty(k)&&P!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=P;default:o.hasOwnProperty(k)||Ve(e,t,k,null,o,P)}}for(var C in o){var k=o[C];if(P=n[C],o.hasOwnProperty(C)&&(k!=null||P!=null))switch(C){case"type":r=k;break;case"name":l=k;break;case"checked":D=k;break;case"defaultChecked":B=k;break;case"value":u=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:k!==P&&Ve(e,t,C,k,o,P)}}Vs(e,u,g,v,D,B,r,l);return;case"select":k=u=g=C=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":k=v;default:o.hasOwnProperty(r)||Ve(e,t,r,null,o,v)}for(l in o)if(r=o[l],v=n[l],o.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":C=r;break;case"defaultValue":g=r;break;case"multiple":u=r;default:r!==v&&Ve(e,t,l,r,o,v)}t=g,n=u,o=k,C!=null?ra(e,!!n,C,!1):!!o!=!!n&&(t!=null?ra(e,!!n,t,!0):ra(e,!!n,n?[]:"",!1));return;case"textarea":k=C=null;for(g in n)if(l=n[g],n.hasOwnProperty(g)&&l!=null&&!o.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ve(e,t,g,null,o,l)}for(u in o)if(l=o[u],r=n[u],o.hasOwnProperty(u)&&(l!=null||r!=null))switch(u){case"value":C=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Ve(e,t,u,l,o,r)}ku(e,C,k);return;case"option":for(var te in n)C=n[te],n.hasOwnProperty(te)&&C!=null&&!o.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Ve(e,t,te,null,o,C));for(v in o)C=o[v],k=n[v],o.hasOwnProperty(v)&&C!==k&&(C!=null||k!=null)&&(v==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":Ve(e,t,v,C,o,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)C=n[de],n.hasOwnProperty(de)&&C!=null&&!o.hasOwnProperty(de)&&Ve(e,t,de,null,o,C);for(D in o)if(C=o[D],k=n[D],o.hasOwnProperty(D)&&C!==k&&(C!=null||k!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Ve(e,t,D,C,o,k)}return;default:if(Js(t)){for(var Xe in n)C=n[Xe],n.hasOwnProperty(Xe)&&C!==void 0&&!o.hasOwnProperty(Xe)&&_c(e,t,Xe,void 0,o,C);for(B in o)C=o[B],k=n[B],!o.hasOwnProperty(B)||C===k||C===void 0&&k===void 0||_c(e,t,B,C,o,k);return}}for(var j in n)C=n[j],n.hasOwnProperty(j)&&C!=null&&!o.hasOwnProperty(j)&&Ve(e,t,j,null,o,C);for(P in o)C=o[P],k=n[P],!o.hasOwnProperty(P)||C===k||C==null&&k==null||Ve(e,t,P,C,o,k)}function Pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var l=n[o],r=l.transferSize,u=l.initiatorType,g=l.duration;if(r&&g&&Pp(u)){for(u=0,g=l.responseEnd,o+=1;o<n.length;o++){var v=n[o],D=v.startTime;if(D>g)break;var B=v.transferSize,P=v.initiatorType;B&&Pp(P)&&(v=v.responseEnd,u+=B*(v<g?1:(g-D)/(v-D)))}if(--o,t+=8*(r+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,Uc=null;function is(e){return e.nodeType===9?e:e.ownerDocument}function Ip(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=null;function My(){var e=window.event;return e&&e.type==="popstate"?e===zc?!1:(zc=e,!0):(zc=null,!1)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(e){return qp.resolve(null).then(e).catch(Ry)}:Fp;function Ry(e){setTimeout(function(){throw e})}function vo(e){return e==="head"}function Vp(e,t){var n=t,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(l),Ba(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")_l(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_l(n);for(var r=n.firstChild;r;){var u=r.nextSibling,g=r.nodeName;r[et]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=u}}else n==="body"&&_l(e.ownerDocument.body);n=l}while(n);Ba(t)}function Xp(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function Bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bc(n),tt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Dy(e,t,n,o){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[et])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function Ay(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function Jp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=nn(e.nextSibling),e===null))return null;return e}function Hc(e){return e.data==="$?"||e.data==="$~"}function Pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function Gp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return nn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Kp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Zp(e,t,n){switch(t=is(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function _l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tt(e)}var on=new Map,Qp=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kn=F.d;F.d={f:_y,r:Ly,D:Uy,C:ky,L:zy,m:By,X:Py,S:Hy,M:Iy};function _y(){var e=Kn.f(),t=es();return e||t}function Ly(e){var t=Ae(e);t!==null&&t.tag===5&&t.type==="form"?fm(t):Kn.r(e)}var Ua=typeof document>"u"?null:document;function $p(e,t,n){var o=Ua;if(o&&typeof t=="string"&&t){var l=Kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Qp.has(l)||(Qp.add(l),e={rel:e,crossOrigin:n,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),jt(t,"link",e),Ze(t),o.head.appendChild(t)))}}function Uy(e){Kn.D(e),$p("dns-prefetch",e,null)}function ky(e,t){Kn.C(e,t),$p("preconnect",e,t)}function zy(e,t,n){Kn.L(e,t,n);var o=Ua;if(o&&e&&t){var l='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Kt(n.imageSizes)+'"]')):l+='[href="'+Kt(e)+'"]';var r=l;switch(t){case"style":r=ka(e);break;case"script":r=za(e)}on.has(r)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),on.set(r,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(Ll(r))||t==="script"&&o.querySelector(Ul(r))||(t=o.createElement("link"),jt(t,"link",e),Ze(t),o.head.appendChild(t)))}}function By(e,t){Kn.m(e,t);var n=Ua;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Kt(o)+'"][href="'+Kt(e)+'"]',r=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=za(e)}if(!on.has(r)&&(e=x({rel:"modulepreload",href:e},t),on.set(r,e),n.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ul(r)))return}o=n.createElement("link"),jt(o,"link",e),Ze(o),n.head.appendChild(o)}}}function Hy(e,t,n){Kn.S(e,t,n);var o=Ua;if(o&&e){var l=At(o).hoistableStyles,r=ka(e);t=t||"default";var u=l.get(r);if(!u){var g={loading:0,preload:null};if(u=o.querySelector(Ll(r)))g.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=on.get(r))&&Yc(e,n);var v=u=o.createElement("link");Ze(v),jt(v,"link",e),v._p=new Promise(function(D,B){v.onload=D,v.onerror=B}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,us(u,t,o)}u={type:"stylesheet",instance:u,count:1,state:g},l.set(r,u)}}}function Py(e,t){Kn.X(e,t);var n=Ua;if(n&&e){var o=At(n).hoistableScripts,l=za(e),r=o.get(l);r||(r=n.querySelector(Ul(l)),r||(e=x({src:e,async:!0},t),(t=on.get(l))&&Fc(e,t),r=n.createElement("script"),Ze(r),jt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(l,r))}}function Iy(e,t){Kn.M(e,t);var n=Ua;if(n&&e){var o=At(n).hoistableScripts,l=za(e),r=o.get(l);r||(r=n.querySelector(Ul(l)),r||(e=x({src:e,async:!0,type:"module"},t),(t=on.get(l))&&Fc(e,t),r=n.createElement("script"),Ze(r),jt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(l,r))}}function Wp(e,t,n,o){var l=(l=pe.current)?cs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ka(n.href),n=At(l).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ka(n.href);var r=At(l).hoistableStyles,u=r.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,u),(r=l.querySelector(Ll(e)))&&!r._p&&(u.instance=r,u.state.loading=5),on.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},on.set(e,n),r||Yy(l,e,n,u.state))),t&&o===null)throw Error(c(528,""));return u}if(t&&o!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=za(n),n=At(l).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ka(e){return'href="'+Kt(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function ef(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Yy(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),jt(t,"link",n),Ze(t),e.head.appendChild(t))}function za(e){return'[src="'+Kt(e)+'"]'}function Ul(e){return"script[async]"+e}function tf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(o)return t.instance=o,Ze(o),o;var l=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ze(o),jt(o,"style",l),us(o,n.precedence,e),t.instance=o;case"stylesheet":l=ka(n.href);var r=e.querySelector(Ll(l));if(r)return t.state.loading|=4,t.instance=r,Ze(r),r;o=ef(n),(l=on.get(l))&&Yc(o,l),r=(e.ownerDocument||e).createElement("link"),Ze(r);var u=r;return u._p=new Promise(function(g,v){u.onload=g,u.onerror=v}),jt(r,"link",o),t.state.loading|=4,us(r,n.precedence,e),t.instance=r;case"script":return r=za(n.src),(l=e.querySelector(Ul(r)))?(t.instance=l,Ze(l),l):(o=n,(l=on.get(r))&&(o=x({},n),Fc(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),jt(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,us(o,n.precedence,e));return t.instance}function us(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,r=l,u=0;u<o.length;u++){var g=o[u];if(g.dataset.precedence===t)r=g;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ds=null;function nf(e,t,n){if(ds===null){var o=new Map,l=ds=new Map;l.set(n,o)}else l=ds,o=l.get(n),o||(o=new Map,l.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[et]||r[Q]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var u=r.getAttribute(t)||"";u=e+u;var g=o.get(u);g?g.push(r):o.set(u,[r])}}return o}function of(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Fy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function af(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qy(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ka(o.href),r=t.querySelector(Ll(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ms.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Ze(r);return}r=t.ownerDocument||t,o=ef(o),(l=on.get(l))&&Yc(o,l),r=r.createElement("link"),Ze(r);var u=r;u._p=new Promise(function(g,v){u.onload=g,u.onerror=v}),jt(r,"link",o),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ms.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var qc=0;function Vy(e,t){return e.stylesheets&&e.count===0&&fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&qc===0&&(qc=62500*jy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function fs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(Xy,e),ps=null,ms.call(e))}function Xy(e,t){if(!(t.state.loading&4)){var n=ps.get(e);if(n)var o=n.get(null);else{n=new Map,ps.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var u=l[r];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),o=u)}o&&n.set(null,o)}l=t.instance,u=l.getAttribute("data-precedence"),r=n.get(u)||o,r===o&&n.set(null,l),n.set(u,l),this.count++,o=ms.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var kl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Jy(e,t,n,o,l,r,u,g,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.hiddenUpdates=Wn(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function lf(e,t,n,o,l,r,u,g,v,D,B,P){return e=new Jy(e,t,n,u,v,D,B,P,g),t=1,r===!0&&(t|=24),r=It(3,null,null,t),e.current=r,r.stateNode=e,t=Ti(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:n,cache:t},Oi(r),e}function rf(e){return e?(e=fa,e):fa}function sf(e,t,n,o,l,r){l=rf(l),o.context===null?o.context=l:o.pendingContext=l,o=so(t),o.payload={element:n},r=r===void 0?null:r,r!==null&&(o.callback=r),n=io(e,o,t),n!==null&&(zt(n,e,t),fl(n,e,t))}function cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vc(e,t){cf(e,t),(e=e.alternate)&&cf(e,t)}function uf(e){if(e.tag===13||e.tag===31){var t=Io(e,67108864);t!==null&&zt(t,e,67108864),Vc(e,67108864)}}function df(e){if(e.tag===13||e.tag===31){var t=Xt();t=_(t);var n=Io(e,t);n!==null&&zt(n,e,t),Vc(e,t)}}var gs=!0;function Gy(e,t,n,o){var l=L.T;L.T=null;var r=F.p;try{F.p=2,Xc(e,t,n,o)}finally{F.p=r,L.T=l}}function Ky(e,t,n,o){var l=L.T;L.T=null;var r=F.p;try{F.p=8,Xc(e,t,n,o)}finally{F.p=r,L.T=l}}function Xc(e,t,n,o){if(gs){var l=Jc(o);if(l===null)Cc(e,t,o,hs,n),pf(e,o);else if(Qy(l,e,t,n,o))o.stopPropagation();else if(pf(e,o),t&4&&-1<Zy.indexOf(e)){for(;l!==null;){var r=Ae(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var u=An(r.pendingLanes);if(u!==0){var g=r;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var v=1<<31-Mt(u);g.entanglements[1]|=v,u&=~v}wn(r),(Pe&6)===0&&($r=st()+500,Dl(0))}}break;case 31:case 13:g=Io(r,2),g!==null&&zt(g,r,2),es(),Vc(r,2)}if(r=Jc(o),r===null&&Cc(e,t,o,hs,n),r===l)break;l=r}l!==null&&o.stopPropagation()}else Cc(e,t,o,null,n)}}function Jc(e){return e=Ks(e),Gc(e)}var hs=null;function Gc(e){if(hs=null,e=nt(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hs=e,null}function mf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ro()){case Ka:return 2;case la:return 8;case Dt:case mn:return 32;case Za:return 268435456;default:return 32}default:return 32}}var Kc=!1,xo=null,So=null,Eo=null,zl=new Map,Bl=new Map,To=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(e,t){switch(e){case"focusin":case"focusout":xo=null;break;case"dragenter":case"dragleave":So=null;break;case"mouseover":case"mouseout":Eo=null;break;case"pointerover":case"pointerout":zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(t.pointerId)}}function Hl(e,t,n,o,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Ae(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Qy(e,t,n,o,l){switch(t){case"focusin":return xo=Hl(xo,e,t,n,o,l),!0;case"dragenter":return So=Hl(So,e,t,n,o,l),!0;case"mouseover":return Eo=Hl(Eo,e,t,n,o,l),!0;case"pointerover":var r=l.pointerId;return zl.set(r,Hl(zl.get(r)||null,e,t,n,o,l)),!0;case"gotpointercapture":return r=l.pointerId,Bl.set(r,Hl(Bl.get(r)||null,e,t,n,o,l)),!0}return!1}function ff(e){var t=nt(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,re(e.priority,function(){df(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,re(e.priority,function(){df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Gs=o,n.target.dispatchEvent(o),Gs=null}else return t=Ae(n),t!==null&&uf(t),e.blockedOn=n,!1;t.shift()}return!0}function gf(e,t,n){ys(e)&&n.delete(t)}function $y(){Kc=!1,xo!==null&&ys(xo)&&(xo=null),So!==null&&ys(So)&&(So=null),Eo!==null&&ys(Eo)&&(Eo=null),zl.forEach(gf),Bl.forEach(gf)}function bs(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$y)))}var vs=null;function hf(e){vs!==e&&(vs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){vs===e&&(vs=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Gc(o||n)===null)continue;break}var r=Ae(n);r!==null&&(e.splice(t,3),t-=3,Ji(r,{pending:!0,data:l,method:n.method,action:o},o,l))}}))}function Ba(e){function t(v){return bs(v,e)}xo!==null&&bs(xo,e),So!==null&&bs(So,e),Eo!==null&&bs(Eo,e),zl.forEach(t),Bl.forEach(t);for(var n=0;n<To.length;n++){var o=To[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<To.length&&(n=To[0],n.blockedOn===null);)ff(n),n.blockedOn===null&&To.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var l=n[o],r=n[o+1],u=l[ee]||null;if(typeof r=="function")u||hf(n);else if(u){var g=null;if(r&&r.hasAttribute("formAction")){if(l=r,u=r[ee]||null)g=u.formAction;else if(Gc(l)!==null)continue}else g=u.action;typeof g=="function"?n[o+1]=g:(n.splice(o,3),o-=3),hf(n)}}}function yf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Zc(e){this._internalRoot=e}xs.prototype.render=Zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,o=Xt();sf(n,o,e,t,null,null)},xs.prototype.unmount=Zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sf(e.current,2,null,e,null,null),es(),t[ae]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=V();e={blockedOn:null,target:e,priority:t};for(var n=0;n<To.length&&t!==0&&t<To[n].priority;n++);To.splice(n,0,e),n===0&&ff(e)}};var bf=s.version;if(bf!=="19.2.3")throw Error(c(527,bf,"19.2.3"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Wy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Do=Ss.inject(Wy),We=Ss}catch{}}return Il.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,o="",l=wm,r=jm,u=Mm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=lf(e,1,!1,null,null,n,o,null,l,r,u,yf),e[ae]=t.current,Ac(e),new Zc(t)},Il.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var o=!1,l="",r=wm,u=jm,g=Mm,v=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=lf(e,1,!0,t,n??null,o,l,v,r,u,g,yf),t.context=rf(null),n=t.current,o=Xt(),o=_(o),l=so(o),l.callback=null,io(n,l,o),n=o,t.current.lanes=n,eo(t,n),wn(t),e[ae]=t.current,Ac(e),new xs(t)},Il.version="19.2.3",Il}var Nf;function db(){if(Nf)return Wc.exports;Nf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Wc.exports=ub(),Wc.exports}var mb=db();var pg=a=>{throw TypeError(a)},pb=(a,s,i)=>s.has(a)||pg("Cannot "+i),ou=(a,s,i)=>(pb(a,s,"read from private field"),i?i.call(a):s.get(a)),fb=(a,s,i)=>s.has(a)?pg("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(a):s.set(a,i),Rf="popstate";function gb(a={}){function s(d,m){let{pathname:f="/",search:h="",hash:y=""}=Qn(d.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ql("",{pathname:f,search:h,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function i(d,m){let f=d.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let y=d.location.href,p=y.indexOf("#");h=p===-1?y:y.slice(0,p)}return h+"#"+(typeof m=="string"?m:Mn(m))}function c(d,m){lt(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return yb(s,i,c,a)}function Se(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function lt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function hb(){return Math.random().toString(36).substring(2,10)}function Df(a,s){return{usr:a.state,key:a.key,idx:s}}function Ql(a,s,i=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Qn(s):s,state:i,key:s&&s.key||c||hb()}}function Mn({pathname:a="/",search:s="",hash:i=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Qn(a){let s={};if(a){let i=a.indexOf("#");i>=0&&(s.hash=a.substring(i),a=a.substring(0,i));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function yb(a,s,i,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,f=d.history,h="POP",y=null,p=E();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function E(){return(f.state||{idx:null}).idx}function x(){h="POP";let J=E(),K=J==null?null:J-p;p=J,y&&y({action:h,location:X.location,delta:K})}function A(J,K){h="PUSH";let G=Ql(X.location,J,K);i&&i(G,J),p=E()+1;let ne=Df(G,p),Ne=X.createHref(G);try{f.pushState(ne,"",Ne)}catch(ve){if(ve instanceof DOMException&&ve.name==="DataCloneError")throw ve;d.location.assign(Ne)}m&&y&&y({action:h,location:X.location,delta:1})}function U(J,K){h="REPLACE";let G=Ql(X.location,J,K);i&&i(G,J),p=E();let ne=Df(G,p),Ne=X.createHref(G);f.replaceState(ne,"",Ne),m&&y&&y({action:h,location:X.location,delta:0})}function I(J){return fg(J)}let X={get action(){return h},get location(){return a(d,f)},listen(J){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Rf,x),y=J,()=>{d.removeEventListener(Rf,x),y=null}},createHref(J){return s(d,J)},createURL:I,encodeLocation(J){let K=I(J);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:A,replace:U,go(J){return f.go(J)}};return X}function fg(a,s=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Se(i,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:Mn(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=i+c),new URL(c,i)}var Gl,Af=class{constructor(a){if(fb(this,Gl,new Map),a)for(let[s,i]of a)this.set(s,i)}get(a){if(ou(this,Gl).has(a))return ou(this,Gl).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,s){ou(this,Gl).set(a,s)}};Gl=new WeakMap;var bb=new Set(["lazy","caseSensitive","path","id","index","children"]);function vb(a){return bb.has(a)}var xb=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Sb(a){return xb.has(a)}function Eb(a){return a.index===!0}function $l(a,s,i=[],c={},d=!1){return a.map((m,f)=>{let h=[...i,String(f)],y=typeof m.id=="string"?m.id:h.join("-");if(Se(m.index!==!0||!m.children,"Cannot specify children on an index route"),Se(d||!c[y],`Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`),Eb(m)){let p={...m,id:y};return c[y]=Cf(p,s(p)),p}else{let p={...m,id:y,children:void 0};return c[y]=Cf(p,s(p)),m.children&&(p.children=$l(m.children,s,h,c,d)),p}})}function Cf(a,s){return Object.assign(a,{...s,...typeof s.lazy=="object"&&s.lazy!=null?{lazy:{...a.lazy,...s.lazy}}:{}})}function jo(a,s,i="/"){return Kl(a,s,i,!1)}function Kl(a,s,i,c){let d=typeof s=="string"?Qn(s):s,m=cn(d.pathname||"/",i);if(m==null)return null;let f=gg(a);wb(f);let h=null;for(let y=0;h==null&&y<f.length;++y){let p=Ub(m);h=_b(f[y],p,c)}return h}function Tb(a,s){let{route:i,pathname:c,params:d}=a;return{id:i.id,pathname:c,params:d,data:s[i.id],loaderData:s[i.id],handle:i.handle}}function gg(a,s=[],i=[],c="",d=!1){let m=(f,h,y=d,p)=>{let E={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&y)return;Se(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let x=jn([c,E.relativePath]),A=i.concat(E);f.children&&f.children.length>0&&(Se(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),gg(f.children,s,A,x,y)),!(f.path==null&&!f.index)&&s.push({path:x,score:Ab(x,f.index),routesMeta:A})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))m(f,h);else for(let y of hg(f.path))m(f,h,!0,y)}),s}function hg(a){let s=a.split("/");if(s.length===0)return[];let[i,...c]=s,d=i.endsWith("?"),m=i.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let f=hg(c.join("/")),h=[];return h.push(...f.map(y=>y===""?m:[m,y].join("/"))),d&&h.push(...f),h.map(y=>a.startsWith("/")&&y===""?"/":y)}function wb(a){a.sort((s,i)=>s.score!==i.score?i.score-s.score:Cb(s.routesMeta.map(c=>c.childrenIndex),i.routesMeta.map(c=>c.childrenIndex)))}var jb=/^:[\w-]+$/,Mb=3,Ob=2,Nb=1,Rb=10,Db=-2,_f=a=>a==="*";function Ab(a,s){let i=a.split("/"),c=i.length;return i.some(_f)&&(c+=Db),s&&(c+=Ob),i.filter(d=>!_f(d)).reduce((d,m)=>d+(jb.test(m)?Mb:m===""?Nb:Rb),c)}function Cb(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function _b(a,s,i=!1){let{routesMeta:c}=a,d={},m="/",f=[];for(let h=0;h<c.length;++h){let y=c[h],p=h===c.length-1,E=m==="/"?s:s.slice(m.length)||"/",x=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},E),A=y.route;if(!x&&p&&i&&!c[c.length-1].route.index&&(x=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!x)return null;Object.assign(d,x.params),f.push({params:d,pathname:jn([m,x.pathname]),pathnameBase:Bb(jn([m,x.pathnameBase])),route:A}),x.pathnameBase!=="/"&&(m=jn([m,x.pathnameBase]))}return f}function Cs(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,c]=Lb(a.path,a.caseSensitive,a.end),d=s.match(i);if(!d)return null;let m=d[0],f=m.replace(/(.)\/+$/,"$1"),h=d.slice(1);return{params:c.reduce((p,{paramName:E,isOptional:x},A)=>{if(E==="*"){let I=h[A]||"";f=m.slice(0,m.length-I.length).replace(/(.)\/+$/,"$1")}const U=h[A];return x&&!U?p[E]=void 0:p[E]=(U||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:f,pattern:a}}function Lb(a,s=!1,i=!0){lt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,y)=>(c.push({paramName:h,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function Ub(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return lt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function cn(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let i=s.endsWith("/")?s.length-1:s.length,c=a.charAt(i);return c&&c!=="/"?null:a.slice(i)||"/"}function kb({basename:a,pathname:s}){return s==="/"?a:jn([a,s])}var yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_s=a=>yg.test(a);function zb(a,s="/"){let{pathname:i,search:c="",hash:d=""}=typeof a=="string"?Qn(a):a,m;if(i)if(_s(i))m=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),lt(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?m=Lf(i.substring(1),"/"):m=Lf(i,s)}else m=s;return{pathname:m,search:Hb(c),hash:Pb(d)}}function Lf(a,s){let i=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?i.length>1&&i.pop():d!=="."&&i.push(d)}),i.length>1?i.join("/"):"/"}function au(a,s,i,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bg(a){return a.filter((s,i)=>i===0||s.route.path&&s.route.path.length>0)}function vu(a){let s=bg(a);return s.map((i,c)=>c===s.length-1?i.pathname:i.pathnameBase)}function xu(a,s,i,c=!1){let d;typeof a=="string"?d=Qn(a):(d={...a},Se(!d.pathname||!d.pathname.includes("?"),au("?","pathname","search",d)),Se(!d.pathname||!d.pathname.includes("#"),au("#","pathname","hash",d)),Se(!d.search||!d.search.includes("#"),au("#","search","hash",d)));let m=a===""||d.pathname==="",f=m?"/":d.pathname,h;if(f==null)h=i;else{let x=s.length-1;if(!c&&f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),x-=1;d.pathname=A.join("/")}h=x>=0?s[x]:"/"}let y=zb(d,h),p=f&&f!=="/"&&f.endsWith("/"),E=(m||f===".")&&i.endsWith("/");return!y.pathname.endsWith("/")&&(p||E)&&(y.pathname+="/"),y}var jn=a=>a.join("/").replace(/\/\/+/g,"/"),Bb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Hb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Pb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,tr=class{constructor(a,s,i,c=!1){this.status=a,this.statusText=s||"",this.internal=c,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Wl(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function nr(a){return a.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xg(a,s){let i=a;if(typeof i!="string"||!yg.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let c=i,d=!1;if(vg)try{let m=new URL(window.location.href),f=i.startsWith("//")?new URL(m.protocol+i):new URL(i),h=cn(f.pathname,s);f.origin===m.origin&&h!=null?i=h+f.search+f.hash:d=!0}catch{lt(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:i}}var Oo=Symbol("Uninstrumented");function Ib(a,s){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(d=>d({id:s.id,index:s.index,path:s.path,instrument(m){let f=Object.keys(i);for(let h of f)m[h]&&i[h].push(m[h])}}));let c={};if(typeof s.lazy=="function"&&i.lazy.length>0){let d=Fa(i.lazy,s.lazy,()=>{});d&&(c.lazy=d)}if(typeof s.lazy=="object"){let d=s.lazy;["middleware","loader","action"].forEach(m=>{let f=d[m],h=i[`lazy.${m}`];if(typeof f=="function"&&h.length>0){let y=Fa(h,f,()=>{});y&&(c.lazy=Object.assign(c.lazy||{},{[m]:y}))}})}return["loader","action"].forEach(d=>{let m=s[d];if(typeof m=="function"&&i[d].length>0){let f=m[Oo]??m,h=Fa(i[d],f,(...y)=>Uf(y[0]));h&&(h[Oo]=f,c[d]=h)}}),s.middleware&&s.middleware.length>0&&i.middleware.length>0&&(c.middleware=s.middleware.map(d=>{let m=d[Oo]??d,f=Fa(i.middleware,m,(...h)=>Uf(h[0]));return f?(f[Oo]=m,f):d})),c}function Yb(a,s){let i={navigate:[],fetch:[]};if(s.forEach(c=>c({instrument(d){let m=Object.keys(d);for(let f of m)d[f]&&i[f].push(d[f])}})),i.navigate.length>0){let c=a.navigate[Oo]??a.navigate,d=Fa(i.navigate,c,(...m)=>{let[f,h]=m;return{to:typeof f=="number"||typeof f=="string"?f:f?Mn(f):".",...kf(a,h??{})}});d&&(d[Oo]=c,a.navigate=d)}if(i.fetch.length>0){let c=a.fetch[Oo]??a.fetch,d=Fa(i.fetch,c,(...m)=>{let[f,,h,y]=m;return{href:h??".",fetcherKey:f,...kf(a,y??{})}});d&&(d[Oo]=c,a.fetch=d)}return a}function Fa(a,s,i){return a.length===0?null:async(...c)=>{let d=await Sg(a,i(...c),()=>s(...c),a.length-1);if(d.type==="error")throw d.value;return d.value}}async function Sg(a,s,i,c){let d=a[c],m;if(d){let f,h=async()=>(f?console.error("You cannot call instrumented handlers more than once"):f=Sg(a,s,i,c-1),m=await f,Se(m,"Expected a result"),m.type==="error"&&m.value instanceof Error?{status:"error",error:m.value}:{status:"success",error:void 0});try{await d(h,s)}catch(y){console.error("An instrumentation function threw an error:",y)}f||await h(),await f}else try{m={type:"success",value:await i()}}catch(f){m={type:"error",value:f}}return m||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Uf(a){let{request:s,context:i,params:c,unstable_pattern:d}=a;return{request:Fb(s),params:{...c},unstable_pattern:d,context:qb(i)}}function kf(a,s){return{currentUrl:Mn(a.state.location),..."formMethod"in s?{formMethod:s.formMethod}:{},..."formEncType"in s?{formEncType:s.formEncType}:{},..."formData"in s?{formData:s.formData}:{},..."body"in s?{body:s.body}:{}}}function Fb(a){return{method:a.method,url:a.url,headers:{get:(...s)=>a.headers.get(...s)}}}function qb(a){if(Xb(a)){let s={...a};return Object.freeze(s),s}else return{get:s=>a.get(s)}}var Vb=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xb(a){if(a===null||typeof a!="object")return!1;const s=Object.getPrototypeOf(a);return s===Object.prototype||s===null||Object.getOwnPropertyNames(s).sort().join("\0")===Vb}var Eg=["POST","PUT","PATCH","DELETE"],Jb=new Set(Eg),Gb=["GET",...Eg],Kb=new Set(Gb),Tg=new Set([301,302,303,307,308]),Zb=new Set([307,308]),lu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qb={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},$b=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),wg="remix-router-transitions",jg=Symbol("ResetLoaderData");function Wb(a){const s=a.window?a.window:typeof window<"u"?window:void 0,i=typeof s<"u"&&typeof s.document<"u"&&typeof s.document.createElement<"u";Se(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=a.hydrationRouteProperties||[],d=a.mapRouteProperties||$b,m=d;if(a.unstable_instrumentations){let b=a.unstable_instrumentations;m=M=>({...d(M),...Ib(b.map(_=>_.route).filter(Boolean),M)})}let f={},h=$l(a.routes,m,void 0,f),y,p=a.basename||"/";p.startsWith("/")||(p=`/${p}`);let E=a.dataStrategy||av,x={...a.future},A=null,U=new Set,I=null,X=null,J=null,K=a.hydrationData!=null,G=jo(h,a.history.location,p),ne=!1,Ne=null,ve;if(G==null&&!a.patchRoutesOnNavigation){let b=rn(404,{pathname:a.history.location.pathname}),{matches:M,route:_}=Es(h);ve=!0,G=M,Ne={[_.id]:b}}else if(G&&!a.hydrationData&&Lo(G,h,a.history.location.pathname).active&&(G=null),G)if(G.some(b=>b.route.lazy))ve=!1;else if(!G.some(b=>Su(b.route)))ve=!0;else{let b=a.hydrationData?a.hydrationData.loaderData:null,M=a.hydrationData?a.hydrationData.errors:null;if(M){let _=G.findIndex(Y=>M[Y.route.id]!==void 0);ve=G.slice(0,_+1).every(Y=>!gu(Y.route,b,M))}else ve=G.every(_=>!gu(_.route,b,M))}else{ve=!1,G=[];let b=Lo(null,h,a.history.location.pathname);b.active&&b.matches&&(ne=!0,G=b.matches)}let Ee,O={historyAction:a.history.action,location:a.history.location,matches:G,initialized:ve,navigation:lu,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||Ne,fetchers:new Map,blockers:new Map},le="POP",ye=null,He=!1,je,ke=!1,ht=new Map,Ie=null,xe=!1,L=!1,F=new Set,Z=new Map,me=0,ge=-1,S=new Map,z=new Set,q=new Map,$=new Map,ie=new Set,pe=new Map,Re,rt=null;function $e(){if(A=a.history.listen(({action:b,location:M,delta:_})=>{if(Re){Re(),Re=void 0;return}lt(pe.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Y=Ao({currentLocation:O.location,nextLocation:M,historyAction:b});if(Y&&_!=null){let V=new Promise(re=>{Re=re});a.history.go(_*-1),Dn(Y,{state:"blocked",location:M,proceed(){Dn(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),V.then(()=>a.history.go(_))},reset(){let re=new Map(O.blockers);re.set(Y,Yl),dt({blockers:re})}}),ye?.resolve(),ye=null;return}return dn(b,M)}),i){Ev(s,ht);let b=()=>Tv(s,ht);s.addEventListener("pagehide",b),Ie=()=>s.removeEventListener("pagehide",b)}return O.initialized||dn("POP",O.location,{initialHydration:!0}),Ee}function No(){A&&A(),Ie&&Ie(),U.clear(),je&&je.abort(),O.fetchers.forEach((b,M)=>Qa(M)),O.blockers.forEach((b,M)=>ir(M))}function oa(b){return U.add(b),()=>U.delete(b)}function dt(b,M={}){b.matches&&(b.matches=b.matches.map(V=>{let re=f[V.route.id],W=V.route;return W.element!==re.element||W.errorElement!==re.errorElement||W.hydrateFallbackElement!==re.hydrateFallbackElement?{...V,route:re}:V})),O={...O,...b};let _=[],Y=[];O.fetchers.forEach((V,re)=>{V.state==="idle"&&(ie.has(re)?_.push(re):Y.push(re))}),ie.forEach(V=>{!O.fetchers.has(V)&&!Z.has(V)&&_.push(V)}),[...U].forEach(V=>V(O,{deletedFetchers:_,newErrors:b.errors??null,viewTransitionOpts:M.viewTransitionOpts,flushSync:M.flushSync===!0})),_.forEach(V=>Qa(V)),Y.forEach(V=>O.fetchers.delete(V))}function Rn(b,M,{flushSync:_}={}){let Y=O.actionData!=null&&O.navigation.formMethod!=null&&Nt(O.navigation.formMethod)&&O.navigation.state==="loading"&&b.state?._isRedirect!==!0,V;M.actionData?Object.keys(M.actionData).length>0?V=M.actionData:V=null:Y?V=O.actionData:V=null;let re=M.loaderData?Xf(O.loaderData,M.loaderData,M.matches||[],M.errors):O.loaderData,W=O.blockers;W.size>0&&(W=new Map(W),W.forEach((ue,se)=>W.set(se,Yl)));let Q=xe?!1:cr(b,M.matches||O.matches),ee=He===!0||O.navigation.formMethod!=null&&Nt(O.navigation.formMethod)&&b.state?._isRedirect!==!0;y&&(h=y,y=void 0),xe||le==="POP"||(le==="PUSH"?a.history.push(b,b.state):le==="REPLACE"&&a.history.replace(b,b.state));let ae;if(le==="POP"){let ue=ht.get(O.location.pathname);ue&&ue.has(b.pathname)?ae={currentLocation:O.location,nextLocation:b}:ht.has(b.pathname)&&(ae={currentLocation:b,nextLocation:O.location})}else if(ke){let ue=ht.get(O.location.pathname);ue?ue.add(b.pathname):(ue=new Set([b.pathname]),ht.set(O.location.pathname,ue)),ae={currentLocation:O.location,nextLocation:b}}dt({...M,actionData:V,loaderData:re,historyAction:le,location:b,initialized:!0,navigation:lu,revalidation:"idle",restoreScrollPosition:Q,preventScrollReset:ee,blockers:W},{viewTransitionOpts:ae,flushSync:_===!0}),le="POP",He=!1,ke=!1,xe=!1,L=!1,ye?.resolve(),ye=null,rt?.resolve(),rt=null}async function xn(b,M){if(ye?.resolve(),ye=null,typeof b=="number"){ye||(ye=Zf());let De=ye.promise;return a.history.go(b),De}let _=fu(O.location,O.matches,p,b,M?.fromRouteId,M?.relative),{path:Y,submission:V,error:re}=zf(!1,_,M),W=O.location,Q=Ql(O.location,Y,M&&M.state);Q={...Q,...a.history.encodeLocation(Q)};let ee=M&&M.replace!=null?M.replace:void 0,ae="PUSH";ee===!0?ae="REPLACE":ee===!1||V!=null&&Nt(V.formMethod)&&V.formAction===O.location.pathname+O.location.search&&(ae="REPLACE");let ue=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0,se=(M&&M.flushSync)===!0,Ue=Ao({currentLocation:W,nextLocation:Q,historyAction:ae});if(Ue){Dn(Ue,{state:"blocked",location:Q,proceed(){Dn(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),xn(b,M)},reset(){let De=new Map(O.blockers);De.set(Ue,Yl),dt({blockers:De})}});return}await dn(ae,Q,{submission:V,pendingError:re,preventScrollReset:ue,replace:M&&M.replace,enableViewTransition:M&&M.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:M&&M.unstable_defaultShouldRevalidate})}function Xa(){rt||(rt=Zf()),la(),dt({revalidation:"loading"});let b=rt.promise;return O.navigation.state==="submitting"?b:O.navigation.state==="idle"?(dn(O.historyAction,O.location,{startUninterruptedRevalidation:!0}),b):(dn(le||O.historyAction,O.navigation.location,{overrideNavigation:O.navigation,enableViewTransition:ke===!0}),b)}async function dn(b,M,_){je&&je.abort(),je=null,le=b,xe=(_&&_.startUninterruptedRevalidation)===!0,_o(O.location,O.matches),He=(_&&_.preventScrollReset)===!0,ke=(_&&_.enableViewTransition)===!0;let Y=y||h,V=_&&_.overrideNavigation,re=_?.initialHydration&&O.matches&&O.matches.length>0&&!ne?O.matches:jo(Y,M,p),W=(_&&_.flushSync)===!0;if(re&&O.initialized&&!L&&mv(O.location,M)&&!(_&&_.submission&&Nt(_.submission.formMethod))){Rn(M,{matches:re},{flushSync:W});return}let Q=Lo(re,Y,M.pathname);if(Q.active&&Q.matches&&(re=Q.matches),!re){let{error:tt,notFoundMatches:nt,route:Ae}=$n(M.pathname);Rn(M,{matches:nt,loaderData:{},errors:{[Ae.id]:tt}},{flushSync:W});return}je=new AbortController;let ee=Ia(a.history,M,je.signal,_&&_.submission),ae=a.getContext?await a.getContext():new Af,ue;if(_&&_.pendingError)ue=[Mo(re).route.id,{type:"error",error:_.pendingError}];else if(_&&_.submission&&Nt(_.submission.formMethod)){let tt=await Hs(ee,M,_.submission,re,ae,Q.active,_&&_.initialHydration===!0,{replace:_.replace,flushSync:W});if(tt.shortCircuited)return;if(tt.pendingActionResult){let[nt,Ae]=tt.pendingActionResult;if(Jt(Ae)&&Wl(Ae.error)&&Ae.error.status===404){je=null,Rn(M,{matches:tt.matches,loaderData:{},errors:{[nt]:Ae.error}});return}}re=tt.matches||re,ue=tt.pendingActionResult,V=ru(M,_.submission),W=!1,Q.active=!1,ee=Ia(a.history,ee.url,ee.signal)}let{shortCircuited:se,matches:Ue,loaderData:De,errors:et}=await rr(ee,M,re,ae,Q.active,V,_&&_.submission,_&&_.fetcherSubmission,_&&_.replace,_&&_.initialHydration===!0,W,ue,_&&_.callSiteDefaultShouldRevalidate);se||(je=null,Rn(M,{matches:Ue||re,...Jf(ue),loaderData:De,errors:et}))}async function Hs(b,M,_,Y,V,re,W,Q={}){la();let ee=xv(M,_);if(dt({navigation:ee},{flushSync:Q.flushSync===!0}),re){let se=await Wn(Y,M.pathname,b.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:De,route:et}=Es(h);return{matches:De,pendingActionResult:[et.id,{type:"error",error:se.error}]}}let Ue=Mo(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[Ue,{type:"error",error:se.error}]}}else if(se.matches)Y=se.matches;else{let{notFoundMatches:Ue,error:De,route:et}=$n(M.pathname);return{matches:Ue,pendingActionResult:[et.id,{type:"error",error:De}]}}}let ae,ue=Rs(Y,M);if(!ue.route.action&&!ue.route.lazy)ae={type:"error",error:rn(405,{method:b.method,pathname:M.pathname,routeId:ue.route.id})};else{let se=qa(m,f,b,Y,ue,W?[]:c,V),Ue=await Ro(b,se,V,null);if(ae=Ue[ue.route.id],!ae){for(let De of Y)if(Ue[De.route.id]){ae=Ue[De.route.id];break}}if(b.signal.aborted)return{shortCircuited:!0}}if(ta(ae)){let se;return Q&&Q.replace!=null?se=Q.replace:se=Ff(ae.response.headers.get("Location"),new URL(b.url),p)===O.location.pathname+O.location.search,await st(b,ae,!0,{submission:_,replace:se}),{shortCircuited:!0}}if(Jt(ae)){let se=Mo(Y,ue.route.id);return(Q&&Q.replace)!==!0&&(le="PUSH"),{matches:Y,pendingActionResult:[se.route.id,ae,ue.route.id]}}return{matches:Y,pendingActionResult:[ue.route.id,ae]}}async function rr(b,M,_,Y,V,re,W,Q,ee,ae,ue,se,Ue){let De=re||ru(M,W),et=W||Q||Kf(De),tt=!xe&&!ae;if(V){if(tt){let it=aa(se);dt({navigation:De,...it!==void 0?{actionData:it}:{}},{flushSync:ue})}let Ce=await Wn(_,M.pathname,b.signal);if(Ce.type==="aborted")return{shortCircuited:!0};if(Ce.type==="error"){if(Ce.partialMatches.length===0){let{matches:hn,route:St}=Es(h);return{matches:hn,loaderData:{},errors:{[St.id]:Ce.error}}}let it=Mo(Ce.partialMatches).route.id;return{matches:Ce.partialMatches,loaderData:{},errors:{[it]:Ce.error}}}else if(Ce.matches)_=Ce.matches;else{let{error:it,notFoundMatches:hn,route:St}=$n(M.pathname);return{matches:hn,loaderData:{},errors:{[St.id]:it}}}}let nt=y||h,{dsMatches:Ae,revalidatingFetchers:bt}=Bf(b,Y,m,f,a.history,O,_,et,M,ae?[]:c,ae===!0,L,F,ie,q,z,nt,p,a.patchRoutesOnNavigation!=null,se,Ue);if(ge=++me,!a.dataStrategy&&!Ae.some(Ce=>Ce.shouldLoad)&&!Ae.some(Ce=>Ce.route.middleware&&Ce.route.middleware.length>0)&&bt.length===0){let Ce=Mt();return Rn(M,{matches:_,loaderData:{},errors:se&&Jt(se[1])?{[se[0]]:se[1].error}:null,...Jf(se),...Ce?{fetchers:new Map(O.fetchers)}:{}},{flushSync:ue}),{shortCircuited:!0}}if(tt){let Ce={};if(!V){Ce.navigation=De;let it=aa(se);it!==void 0&&(Ce.actionData=it)}bt.length>0&&(Ce.fetchers=Ja(bt)),dt(Ce,{flushSync:ue})}bt.forEach(Ce=>{We(Ce.key),Ce.controller&&Z.set(Ce.key,Ce.controller)});let At=()=>bt.forEach(Ce=>We(Ce.key));je&&je.signal.addEventListener("abort",At);let{loaderResults:Ze,fetcherResults:fn}=await Ka(Ae,bt,b,Y);if(b.signal.aborted)return{shortCircuited:!0};je&&je.signal.removeEventListener("abort",At),bt.forEach(Ce=>Z.delete(Ce.key));let Ht=Ts(Ze);if(Ht)return await st(b,Ht.result,!0,{replace:ee}),{shortCircuited:!0};if(Ht=Ts(fn),Ht)return z.add(Ht.key),await st(b,Ht.result,!0,{replace:ee}),{shortCircuited:!0};let{loaderData:gn,errors:Gt}=Vf(O,_,Ze,se,bt,fn);ae&&O.errors&&(Gt={...O.errors,...Gt});let Cn=Mt(),Uo=sr(ge),ko=Cn||Uo||bt.length>0;return{matches:_,loaderData:gn,errors:Gt,...ko?{fetchers:new Map(O.fetchers)}:{}}}function aa(b){if(b&&!Jt(b[1]))return{[b[0]]:b[1].data};if(O.actionData)return Object.keys(O.actionData).length===0?null:O.actionData}function Ja(b){return b.forEach(M=>{let _=O.fetchers.get(M.key),Y=Fl(void 0,_?_.data:void 0);O.fetchers.set(M.key,Y)}),new Map(O.fetchers)}async function Ga(b,M,_,Y){We(b);let V=(Y&&Y.flushSync)===!0,re=y||h,W=fu(O.location,O.matches,p,_,M,Y?.relative),Q=jo(re,W,p),ee=Lo(Q,re,W);if(ee.active&&ee.matches&&(Q=ee.matches),!Q){mn(b,M,rn(404,{pathname:W}),{flushSync:V});return}let{path:ae,submission:ue,error:se}=zf(!0,W,Y);if(se){mn(b,M,se,{flushSync:V});return}let Ue=a.getContext?await a.getContext():new Af,De=(Y&&Y.preventScrollReset)===!0;if(ue&&Nt(ue.formMethod)){await Ps(b,M,ae,Q,Ue,ee.active,V,De,ue,Y&&Y.unstable_defaultShouldRevalidate);return}q.set(b,{routeId:M,path:ae}),await Is(b,M,ae,Q,Ue,ee.active,V,De,ue)}async function Ps(b,M,_,Y,V,re,W,Q,ee,ae){la(),q.delete(b);let ue=O.fetchers.get(b);Dt(b,Sv(ee,ue),{flushSync:W});let se=new AbortController,Ue=Ia(a.history,_,se.signal,ee);if(re){let _e=await Wn(Y,new URL(Ue.url).pathname,Ue.signal,b);if(_e.type==="aborted")return;if(_e.type==="error"){mn(b,M,_e.error,{flushSync:W});return}else if(_e.matches)Y=_e.matches;else{mn(b,M,rn(404,{pathname:_}),{flushSync:W});return}}let De=Rs(Y,_);if(!De.route.action&&!De.route.lazy){let _e=rn(405,{method:ee.formMethod,pathname:_,routeId:M});mn(b,M,_e,{flushSync:W});return}Z.set(b,se);let et=me,tt=qa(m,f,Ue,Y,De,c,V),nt=await Ro(Ue,tt,V,b),Ae=nt[De.route.id];if(!Ae){for(let _e of tt)if(nt[_e.route.id]){Ae=nt[_e.route.id];break}}if(Ue.signal.aborted){Z.get(b)===se&&Z.delete(b);return}if(ie.has(b)){if(ta(Ae)||Jt(Ae)){Dt(b,Zn(void 0));return}}else{if(ta(Ae))if(Z.delete(b),ge>et){Dt(b,Zn(void 0));return}else return z.add(b),Dt(b,Fl(ee)),st(Ue,Ae,!1,{fetcherSubmission:ee,preventScrollReset:Q});if(Jt(Ae)){mn(b,M,Ae.error);return}}let bt=O.navigation.location||O.location,At=Ia(a.history,bt,se.signal),Ze=y||h,fn=O.navigation.state!=="idle"?jo(Ze,O.navigation.location,p):O.matches;Se(fn,"Didn't find any matches after fetcher action");let Ht=++me;S.set(b,Ht);let gn=Fl(ee,Ae.data);O.fetchers.set(b,gn);let{dsMatches:Gt,revalidatingFetchers:Cn}=Bf(At,V,m,f,a.history,O,fn,ee,bt,c,!1,L,F,ie,q,z,Ze,p,a.patchRoutesOnNavigation!=null,[De.route.id,Ae],ae);Cn.filter(_e=>_e.key!==b).forEach(_e=>{let zo=_e.key,dr=O.fetchers.get(zo),$a=Fl(void 0,dr?dr.data:void 0);O.fetchers.set(zo,$a),We(zo),_e.controller&&Z.set(zo,_e.controller)}),dt({fetchers:new Map(O.fetchers)});let Uo=()=>Cn.forEach(_e=>We(_e.key));se.signal.addEventListener("abort",Uo);let{loaderResults:ko,fetcherResults:Ce}=await Ka(Gt,Cn,At,V);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",Uo),S.delete(b),Z.delete(b),Cn.forEach(_e=>Z.delete(_e.key)),O.fetchers.has(b)){let _e=Zn(Ae.data);O.fetchers.set(b,_e)}let it=Ts(ko);if(it)return st(At,it.result,!1,{preventScrollReset:Q});if(it=Ts(Ce),it)return z.add(it.key),st(At,it.result,!1,{preventScrollReset:Q});let{loaderData:hn,errors:St}=Vf(O,fn,ko,void 0,Cn,Ce);sr(Ht),O.navigation.state==="loading"&&Ht>ge?(Se(le,"Expected pending action"),je&&je.abort(),Rn(O.navigation.location,{matches:fn,loaderData:hn,errors:St,fetchers:new Map(O.fetchers)})):(dt({errors:St,loaderData:Xf(O.loaderData,hn,fn,St),fetchers:new Map(O.fetchers)}),L=!1)}async function Is(b,M,_,Y,V,re,W,Q,ee){let ae=O.fetchers.get(b);Dt(b,Fl(ee,ae?ae.data:void 0),{flushSync:W});let ue=new AbortController,se=Ia(a.history,_,ue.signal);if(re){let Ae=await Wn(Y,new URL(se.url).pathname,se.signal,b);if(Ae.type==="aborted")return;if(Ae.type==="error"){mn(b,M,Ae.error,{flushSync:W});return}else if(Ae.matches)Y=Ae.matches;else{mn(b,M,rn(404,{pathname:_}),{flushSync:W});return}}let Ue=Rs(Y,_);Z.set(b,ue);let De=me,et=qa(m,f,se,Y,Ue,c,V),nt=(await Ro(se,et,V,b))[Ue.route.id];if(Z.get(b)===ue&&Z.delete(b),!se.signal.aborted){if(ie.has(b)){Dt(b,Zn(void 0));return}if(ta(nt))if(ge>De){Dt(b,Zn(void 0));return}else{z.add(b),await st(se,nt,!1,{preventScrollReset:Q});return}if(Jt(nt)){mn(b,M,nt.error);return}Dt(b,Zn(nt.data))}}async function st(b,M,_,{submission:Y,fetcherSubmission:V,preventScrollReset:re,replace:W}={}){_||(ye?.resolve(),ye=null),M.response.headers.has("X-Remix-Revalidate")&&(L=!0);let Q=M.response.headers.get("Location");Se(Q,"Expected a Location header on the redirect Response"),Q=Ff(Q,new URL(b.url),p);let ee=Ql(O.location,Q,{_isRedirect:!0});if(i){let et=!1;if(M.response.headers.has("X-Remix-Reload-Document"))et=!0;else if(_s(Q)){const tt=fg(Q,!0);et=tt.origin!==s.location.origin||cn(tt.pathname,p)==null}if(et){W?s.location.replace(Q):s.location.assign(Q);return}}je=null;let ae=W===!0||M.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ue,formAction:se,formEncType:Ue}=O.navigation;!Y&&!V&&ue&&se&&Ue&&(Y=Kf(O.navigation));let De=Y||V;if(Zb.has(M.response.status)&&De&&Nt(De.formMethod))await dn(ae,ee,{submission:{...De,formAction:Q},preventScrollReset:re||He,enableViewTransition:_?ke:void 0});else{let et=ru(ee,Y);await dn(ae,ee,{overrideNavigation:et,fetcherSubmission:V,preventScrollReset:re||He,enableViewTransition:_?ke:void 0})}}async function Ro(b,M,_,Y){let V,re={};try{V=await rv(E,b,M,Y,_,!1)}catch(W){return M.filter(Q=>Q.shouldLoad).forEach(Q=>{re[Q.route.id]={type:"error",error:W}}),re}if(b.signal.aborted)return re;if(!Nt(b.method))for(let W of M){if(V[W.route.id]?.type==="error")break;!V.hasOwnProperty(W.route.id)&&!O.loaderData.hasOwnProperty(W.route.id)&&(!O.errors||!O.errors.hasOwnProperty(W.route.id))&&W.shouldCallHandler()&&(V[W.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${W.route.id}`)})}for(let[W,Q]of Object.entries(V))if(hv(Q)){let ee=Q.result;re[W]={type:"redirect",response:uv(ee,b,W,M,p)}}else re[W]=await cv(Q);return re}async function Ka(b,M,_,Y){let V=Ro(_,b,Y,null),re=Promise.all(M.map(async ee=>{if(ee.matches&&ee.match&&ee.request&&ee.controller){let ue=(await Ro(ee.request,ee.matches,Y,ee.key))[ee.match.route.id];return{[ee.key]:ue}}else return Promise.resolve({[ee.key]:{type:"error",error:rn(404,{pathname:ee.path})}})})),W=await V,Q=(await re).reduce((ee,ae)=>Object.assign(ee,ae),{});return{loaderResults:W,fetcherResults:Q}}function la(){L=!0,q.forEach((b,M)=>{Z.has(M)&&F.add(M),We(M)})}function Dt(b,M,_={}){O.fetchers.set(b,M),dt({fetchers:new Map(O.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function mn(b,M,_,Y={}){let V=Mo(O.matches,M);Qa(b),dt({errors:{[V.route.id]:_},fetchers:new Map(O.fetchers)},{flushSync:(Y&&Y.flushSync)===!0})}function Za(b){return $.set(b,($.get(b)||0)+1),ie.has(b)&&ie.delete(b),O.fetchers.get(b)||Qb}function Ys(b,M){We(b,M?.reason),Dt(b,Zn(null))}function Qa(b){let M=O.fetchers.get(b);Z.has(b)&&!(M&&M.state==="loading"&&S.has(b))&&We(b),q.delete(b),S.delete(b),z.delete(b),ie.delete(b),F.delete(b),O.fetchers.delete(b)}function Do(b){let M=($.get(b)||0)-1;M<=0?($.delete(b),ie.add(b)):$.set(b,M),dt({fetchers:new Map(O.fetchers)})}function We(b,M){let _=Z.get(b);_&&(_.abort(M),Z.delete(b))}function pn(b){for(let M of b){let _=Za(M),Y=Zn(_.data);O.fetchers.set(M,Y)}}function Mt(){let b=[],M=!1;for(let _ of z){let Y=O.fetchers.get(_);Se(Y,`Expected fetcher: ${_}`),Y.state==="loading"&&(z.delete(_),b.push(_),M=!0)}return pn(b),M}function sr(b){let M=[];for(let[_,Y]of S)if(Y<b){let V=O.fetchers.get(_);Se(V,`Expected fetcher: ${_}`),V.state==="loading"&&(We(_),S.delete(_),M.push(_))}return pn(M),M.length>0}function Fs(b,M){let _=O.blockers.get(b)||Yl;return pe.get(b)!==M&&pe.set(b,M),_}function ir(b){O.blockers.delete(b),pe.delete(b)}function Dn(b,M){let _=O.blockers.get(b)||Yl;Se(_.state==="unblocked"&&M.state==="blocked"||_.state==="blocked"&&M.state==="blocked"||_.state==="blocked"&&M.state==="proceeding"||_.state==="blocked"&&M.state==="unblocked"||_.state==="proceeding"&&M.state==="unblocked",`Invalid blocker state transition: ${_.state} -> ${M.state}`);let Y=new Map(O.blockers);Y.set(b,M),dt({blockers:Y})}function Ao({currentLocation:b,nextLocation:M,historyAction:_}){if(pe.size===0)return;pe.size>1&&lt(!1,"A router only supports one blocker at a time");let Y=Array.from(pe.entries()),[V,re]=Y[Y.length-1],W=O.blockers.get(V);if(!(W&&W.state==="proceeding")&&re({currentLocation:b,nextLocation:M,historyAction:_}))return V}function $n(b){let M=rn(404,{pathname:b}),_=y||h,{matches:Y,route:V}=Es(_);return{notFoundMatches:Y,route:V,error:M}}function An(b,M,_){if(I=b,J=M,X=_||null,!K&&O.navigation===lu){K=!0;let Y=cr(O.location,O.matches);Y!=null&&dt({restoreScrollPosition:Y})}return()=>{I=null,J=null,X=null}}function Co(b,M){return X&&X(b,M.map(Y=>Tb(Y,O.loaderData)))||b.key}function _o(b,M){if(I&&J){let _=Co(b,M);I[_]=J()}}function cr(b,M){if(I){let _=Co(b,M),Y=I[_];if(typeof Y=="number")return Y}return null}function Lo(b,M,_){if(a.patchRoutesOnNavigation)if(b){if(Object.keys(b[0].params).length>0)return{active:!0,matches:Kl(M,_,p,!0)}}else return{active:!0,matches:Kl(M,_,p,!0)||[]};return{active:!1,matches:null}}async function Wn(b,M,_,Y){if(!a.patchRoutesOnNavigation)return{type:"success",matches:b};let V=b;for(;;){let re=y==null,W=y||h,Q=f;try{await a.patchRoutesOnNavigation({signal:_,path:M,matches:V,fetcherKey:Y,patch:(ue,se)=>{_.aborted||Hf(ue,se,W,Q,m,!1)}})}catch(ue){return{type:"error",error:ue,partialMatches:V}}finally{re&&!_.aborted&&(h=[...h])}if(_.aborted)return{type:"aborted"};let ee=jo(W,M,p),ae=null;if(ee){if(Object.keys(ee[0].params).length===0)return{type:"success",matches:ee};if(ae=Kl(W,M,p,!0),!(ae&&V.length<ae.length&&eo(V,ae.slice(0,V.length))))return{type:"success",matches:ee}}if(ae||(ae=Kl(W,M,p,!0)),!ae||eo(V,ae))return{type:"success",matches:null};V=ae}}function eo(b,M){return b.length===M.length&&b.every((_,Y)=>_.route.id===M[Y].route.id)}function qs(b){f={},y=$l(b,m,void 0,f)}function ur(b,M,_=!1){let Y=y==null;Hf(b,M,y||h,f,m,_),Y&&(h=[...h],dt({}))}return Ee={get basename(){return p},get future(){return x},get state(){return O},get routes(){return h},get window(){return s},initialize:$e,subscribe:oa,enableScrollRestoration:An,navigate:xn,fetch:Ga,revalidate:Xa,createHref:b=>a.history.createHref(b),encodeLocation:b=>a.history.encodeLocation(b),getFetcher:Za,resetFetcher:Ys,deleteFetcher:Do,dispose:No,getBlocker:Fs,deleteBlocker:ir,patchRoutes:ur,_internalFetchControllers:Z,_internalSetRoutes:qs,_internalSetStateDoNotUseOrYouWillBreakYourApp(b){dt(b)}},a.unstable_instrumentations&&(Ee=Yb(Ee,a.unstable_instrumentations.map(b=>b.router).filter(Boolean))),Ee}function ev(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function fu(a,s,i,c,d,m){let f,h;if(d){f=[];for(let p of s)if(f.push(p),p.route.id===d){h=p;break}}else f=s,h=s[s.length-1];let y=xu(c||".",vu(f),cn(a.pathname,i)||a.pathname,m==="path");if(c==null&&(y.search=a.search,y.hash=a.hash),(c==null||c===""||c===".")&&h){let p=Tu(y.search);if(h.route.index&&!p)y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let E=new URLSearchParams(y.search),x=E.getAll("index");E.delete("index"),x.filter(U=>U).forEach(U=>E.append("index",U));let A=E.toString();y.search=A?`?${A}`:""}}return i!=="/"&&(y.pathname=kb({basename:i,pathname:y.pathname})),Mn(y)}function zf(a,s,i){if(!i||!ev(i))return{path:s};if(i.formMethod&&!vv(i.formMethod))return{path:s,error:rn(405,{method:i.formMethod})};let c=()=>({path:s,error:rn(400,{type:"invalid-body"})}),m=(i.formMethod||"get").toUpperCase(),f=Ag(s);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Nt(m))return c();let x=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((A,[U,I])=>`${A}${U}=${I}
`,""):String(i.body);return{path:s,submission:{formMethod:m,formAction:f,formEncType:i.formEncType,formData:void 0,json:void 0,text:x}}}else if(i.formEncType==="application/json"){if(!Nt(m))return c();try{let x=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:s,submission:{formMethod:m,formAction:f,formEncType:i.formEncType,formData:void 0,json:x,text:void 0}}}catch{return c()}}}Se(typeof FormData=="function","FormData is not available in this environment");let h,y;if(i.formData)h=yu(i.formData),y=i.formData;else if(i.body instanceof FormData)h=yu(i.body),y=i.body;else if(i.body instanceof URLSearchParams)h=i.body,y=qf(h);else if(i.body==null)h=new URLSearchParams,y=new FormData;else try{h=new URLSearchParams(i.body),y=qf(h)}catch{return c()}let p={formMethod:m,formAction:f,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:y,json:void 0,text:void 0};if(Nt(p.formMethod))return{path:s,submission:p};let E=Qn(s);return a&&E.search&&Tu(E.search)&&h.append("index",""),E.search=`?${h}`,{path:Mn(E),submission:p}}function Bf(a,s,i,c,d,m,f,h,y,p,E,x,A,U,I,X,J,K,G,ne,Ne){let ve=ne?Jt(ne[1])?ne[1].error:ne[1].data:void 0,Ee=d.createURL(m.location),O=d.createURL(y),le;if(E&&m.errors){let xe=Object.keys(m.errors)[0];le=f.findIndex(L=>L.route.id===xe)}else if(ne&&Jt(ne[1])){let xe=ne[0];le=f.findIndex(L=>L.route.id===xe)-1}let ye=ne?ne[1].statusCode:void 0,He=ye&&ye>=400,je={currentUrl:Ee,currentParams:m.matches[0]?.params||{},nextUrl:O,nextParams:f[0].params,...h,actionResult:ve,actionStatus:ye},ke=nr(f),ht=f.map((xe,L)=>{let{route:F}=xe,Z=null;if(le!=null&&L>le?Z=!1:F.lazy?Z=!0:Su(F)?E?Z=gu(F,m.loaderData,m.errors):tv(m.loaderData,m.matches[L],xe)&&(Z=!0):Z=!1,Z!==null)return hu(i,c,a,ke,xe,p,s,Z);let me=!1;typeof Ne=="boolean"?me=Ne:He?me=!1:(x||Ee.pathname+Ee.search===O.pathname+O.search||Ee.search!==O.search||nv(m.matches[L],xe))&&(me=!0);let ge={...je,defaultShouldRevalidate:me},S=Zl(xe,ge);return hu(i,c,a,ke,xe,p,s,S,ge,Ne)}),Ie=[];return I.forEach((xe,L)=>{if(E||!f.some($=>$.route.id===xe.routeId)||U.has(L))return;let F=m.fetchers.get(L),Z=F&&F.state!=="idle"&&F.data===void 0,me=jo(J,xe.path,K);if(!me){if(G&&Z)return;Ie.push({key:L,routeId:xe.routeId,path:xe.path,matches:null,match:null,request:null,controller:null});return}if(X.has(L))return;let ge=Rs(me,xe.path),S=new AbortController,z=Ia(d,xe.path,S.signal),q=null;if(A.has(L))A.delete(L),q=qa(i,c,z,me,ge,p,s);else if(Z)x&&(q=qa(i,c,z,me,ge,p,s));else{let $;typeof Ne=="boolean"?$=Ne:He?$=!1:$=x;let ie={...je,defaultShouldRevalidate:$};Zl(ge,ie)&&(q=qa(i,c,z,me,ge,p,s,ie))}q&&Ie.push({key:L,routeId:xe.routeId,path:xe.path,matches:q,match:ge,request:z,controller:S})}),{dsMatches:ht,revalidatingFetchers:Ie}}function Su(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function gu(a,s,i){if(a.lazy)return!0;if(!Su(a))return!1;let c=s!=null&&a.id in s,d=i!=null&&i[a.id]!==void 0;return!c&&d?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!c&&!d}function tv(a,s,i){let c=!s||i.route.id!==s.route.id,d=!a.hasOwnProperty(i.route.id);return c||d}function nv(a,s){let i=a.route.path;return a.pathname!==s.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==s.params["*"]}function Zl(a,s){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(s);if(typeof i=="boolean")return i}return s.defaultShouldRevalidate}function Hf(a,s,i,c,d,m){let f;if(a){let p=c[a];Se(p,`No route found to patch children into: routeId = ${a}`),p.children||(p.children=[]),f=p.children}else f=i;let h=[],y=[];if(s.forEach(p=>{let E=f.find(x=>Mg(p,x));E?y.push({existingRoute:E,newRoute:p}):h.push(p)}),h.length>0){let p=$l(h,d,[a||"_","patch",String(f?.length||"0")],c);f.push(...p)}if(m&&y.length>0)for(let p=0;p<y.length;p++){let{existingRoute:E,newRoute:x}=y[p],A=E,[U]=$l([x],d,[],{},!0);Object.assign(A,{element:U.element?U.element:A.element,errorElement:U.errorElement?U.errorElement:A.errorElement,hydrateFallbackElement:U.hydrateFallbackElement?U.hydrateFallbackElement:A.hydrateFallbackElement})}}function Mg(a,s){return"id"in a&&"id"in s&&a.id===s.id?!0:a.index===s.index&&a.path===s.path&&a.caseSensitive===s.caseSensitive?(!a.children||a.children.length===0)&&(!s.children||s.children.length===0)?!0:a.children.every((i,c)=>s.children?.some(d=>Mg(i,d))):!1}var Pf=new WeakMap,Og=({key:a,route:s,manifest:i,mapRouteProperties:c})=>{let d=i[s.id];if(Se(d,"No route found in manifest"),!d.lazy||typeof d.lazy!="object")return;let m=d.lazy[a];if(!m)return;let f=Pf.get(d);f||(f={},Pf.set(d,f));let h=f[a];if(h)return h;let y=(async()=>{let p=vb(a),x=d[a]!==void 0&&a!=="hasErrorBoundary";if(p)lt(!p,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),f[a]=Promise.resolve();else if(x)lt(!1,`Route "${d.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let A=await m();A!=null&&(Object.assign(d,{[a]:A}),Object.assign(d,c(d)))}typeof d.lazy=="object"&&(d.lazy[a]=void 0,Object.values(d.lazy).every(A=>A===void 0)&&(d.lazy=void 0))})();return f[a]=y,y},If=new WeakMap;function ov(a,s,i,c,d){let m=i[a.id];if(Se(m,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let E=If.get(m);if(E)return{lazyRoutePromise:E,lazyHandlerPromise:E};let x=(async()=>{Se(typeof a.lazy=="function","No lazy route function found");let A=await a.lazy(),U={};for(let I in A){let X=A[I];if(X===void 0)continue;let J=Sb(I),G=m[I]!==void 0&&I!=="hasErrorBoundary";J?lt(!J,"Route property "+I+" is not a supported property to be returned from a lazy route function. This property will be ignored."):G?lt(!G,`Route "${m.id}" has a static property "${I}" defined but its lazy function is also returning a value for this property. The lazy route property "${I}" will be ignored.`):U[I]=X}Object.assign(m,U),Object.assign(m,{...c(m),lazy:void 0})})();return If.set(m,x),x.catch(()=>{}),{lazyRoutePromise:x,lazyHandlerPromise:x}}let f=Object.keys(a.lazy),h=[],y;for(let E of f){if(d&&d.includes(E))continue;let x=Og({key:E,route:a,manifest:i,mapRouteProperties:c});x&&(h.push(x),E===s&&(y=x))}let p=h.length>0?Promise.all(h).then(()=>{}):void 0;return p?.catch(()=>{}),y?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:y}}async function Yf(a){let s=a.matches.filter(d=>d.shouldLoad),i={};return(await Promise.all(s.map(d=>d.resolve()))).forEach((d,m)=>{i[s[m].route.id]=d}),i}async function av(a){return a.matches.some(s=>s.route.middleware)?Ng(a,()=>Yf(a)):Yf(a)}function Ng(a,s){return lv(a,s,c=>{if(bv(c))throw c;return c},fv,i);function i(c,d,m){if(m)return Promise.resolve(Object.assign(m.value,{[d]:{type:"error",result:c}}));{let{matches:f}=a,h=Math.min(Math.max(f.findIndex(p=>p.route.id===d),0),Math.max(f.findIndex(p=>p.shouldCallHandler()),0)),y=Mo(f,f[h].route.id).route.id;return Promise.resolve({[y]:{type:"error",result:c}})}}}async function lv(a,s,i,c,d){let{matches:m,request:f,params:h,context:y,unstable_pattern:p}=a,E=m.flatMap(A=>A.route.middleware?A.route.middleware.map(U=>[A.route.id,U]):[]);return await Rg({request:f,params:h,context:y,unstable_pattern:p},E,s,i,c,d)}async function Rg(a,s,i,c,d,m,f=0){let{request:h}=a;if(h.signal.aborted)throw h.signal.reason??new Error(`Request aborted: ${h.method} ${h.url}`);let y=s[f];if(!y)return await i();let[p,E]=y,x,A=async()=>{if(x)throw new Error("You may only call `next()` once per middleware");try{return x={value:await Rg(a,s,i,c,d,m,f+1)},x.value}catch(U){return x={value:await m(U,p,x)},x.value}};try{let U=await E(a,A),I=U!=null?c(U):void 0;return d(I)?I:x?I??x.value:(x={value:await A()},x.value)}catch(U){return await m(U,p,x)}}function Dg(a,s,i,c,d){let m=Og({key:"middleware",route:c.route,manifest:s,mapRouteProperties:a}),f=ov(c.route,Nt(i.method)?"action":"loader",s,a,d);return{middleware:m,route:f.lazyRoutePromise,handler:f.lazyHandlerPromise}}function hu(a,s,i,c,d,m,f,h,y=null,p){let E=!1,x=Dg(a,s,i,d,m);return{...d,_lazyPromises:x,shouldLoad:h,shouldRevalidateArgs:y,shouldCallHandler(A){return E=!0,y?typeof p=="boolean"?Zl(d,{...y,defaultShouldRevalidate:p}):typeof A=="boolean"?Zl(d,{...y,defaultShouldRevalidate:A}):Zl(d,y):h},resolve(A){let{lazy:U,loader:I,middleware:X}=d.route,J=E||h||A&&!Nt(i.method)&&(U||I),K=X&&X.length>0&&!I&&!U;return J&&(Nt(i.method)||!K)?sv({request:i,unstable_pattern:c,match:d,lazyHandlerPromise:x?.handler,lazyRoutePromise:x?.route,handlerOverride:A,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function qa(a,s,i,c,d,m,f,h=null){return c.map(y=>y.route.id!==d.route.id?{...y,shouldLoad:!1,shouldRevalidateArgs:h,shouldCallHandler:()=>!1,_lazyPromises:Dg(a,s,i,y,m),resolve:()=>Promise.resolve({type:"data",result:void 0})}:hu(a,s,i,nr(c),y,m,f,!0,h))}async function rv(a,s,i,c,d,m){i.some(p=>p._lazyPromises?.middleware)&&await Promise.all(i.map(p=>p._lazyPromises?.middleware));let f={request:s,unstable_pattern:nr(i),params:i[0].params,context:d,matches:i},y=await a({...f,fetcherKey:c,runClientMiddleware:p=>{let E=f;return Ng(E,()=>p({...E,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return y}async function sv({request:a,unstable_pattern:s,match:i,lazyHandlerPromise:c,lazyRoutePromise:d,handlerOverride:m,scopedContext:f}){let h,y,p=Nt(a.method),E=p?"action":"loader",x=A=>{let U,I=new Promise((K,G)=>U=G);y=()=>U(),a.signal.addEventListener("abort",y);let X=K=>typeof A!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${E}" [routeId: ${i.route.id}]`)):A({request:a,unstable_pattern:s,params:i.params,context:f},...K!==void 0?[K]:[]),J=(async()=>{try{return{type:"data",result:await(m?m(G=>X(G)):X())}}catch(K){return{type:"error",result:K}}})();return Promise.race([J,I])};try{let A=p?i.route.action:i.route.loader;if(c||d)if(A){let U,[I]=await Promise.all([x(A).catch(X=>{U=X}),c,d]);if(U!==void 0)throw U;h=I}else{await c;let U=p?i.route.action:i.route.loader;if(U)[h]=await Promise.all([x(U),d]);else if(E==="action"){let I=new URL(a.url),X=I.pathname+I.search;throw rn(405,{method:a.method,pathname:X,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(A)h=await x(A);else{let U=new URL(a.url),I=U.pathname+U.search;throw rn(404,{pathname:I})}}catch(A){return{type:"error",result:A}}finally{y&&a.signal.removeEventListener("abort",y)}return h}async function iv(a){let s=a.headers.get("Content-Type");return s&&/\bapplication\/json\b/.test(s)?a.body==null?null:a.json():a.text()}async function cv(a){let{result:s,type:i}=a;if(Eu(s)){let c;try{c=await iv(s)}catch(d){return{type:"error",error:d}}return i==="error"?{type:"error",error:new tr(s.status,s.statusText,c),statusCode:s.status,headers:s.headers}:{type:"data",data:c,statusCode:s.status,headers:s.headers}}return i==="error"?Gf(s)?s.data instanceof Error?{type:"error",error:s.data,statusCode:s.init?.status,headers:s.init?.headers?new Headers(s.init.headers):void 0}:{type:"error",error:pv(s),statusCode:Wl(s)?s.status:void 0,headers:s.init?.headers?new Headers(s.init.headers):void 0}:{type:"error",error:s,statusCode:Wl(s)?s.status:void 0}:Gf(s)?{type:"data",data:s.data,statusCode:s.init?.status,headers:s.init?.headers?new Headers(s.init.headers):void 0}:{type:"data",data:s}}function uv(a,s,i,c,d){let m=a.headers.get("Location");if(Se(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!_s(m)){let f=c.slice(0,c.findIndex(h=>h.route.id===i)+1);m=fu(new URL(s.url),f,d,m),a.headers.set("Location",m)}return a}function Ff(a,s,i){if(_s(a)){let c=a,d=c.startsWith("//")?new URL(s.protocol+c):new URL(c),m=cn(d.pathname,i)!=null;if(d.origin===s.origin&&m)return d.pathname+d.search+d.hash}return a}function Ia(a,s,i,c){let d=a.createURL(Ag(s)).toString(),m={signal:i};if(c&&Nt(c.formMethod)){let{formMethod:f,formEncType:h}=c;m.method=f.toUpperCase(),h==="application/json"?(m.headers=new Headers({"Content-Type":h}),m.body=JSON.stringify(c.json)):h==="text/plain"?m.body=c.text:h==="application/x-www-form-urlencoded"&&c.formData?m.body=yu(c.formData):m.body=c.formData}return new Request(d,m)}function yu(a){let s=new URLSearchParams;for(let[i,c]of a.entries())s.append(i,typeof c=="string"?c:c.name);return s}function qf(a){let s=new FormData;for(let[i,c]of a.entries())s.append(i,c);return s}function dv(a,s,i,c=!1,d=!1){let m={},f=null,h,y=!1,p={},E=i&&Jt(i[1])?i[1].error:void 0;return a.forEach(x=>{if(!(x.route.id in s))return;let A=x.route.id,U=s[A];if(Se(!ta(U),"Cannot handle redirect results in processLoaderData"),Jt(U)){let I=U.error;if(E!==void 0&&(I=E,E=void 0),f=f||{},d)f[A]=I;else{let X=Mo(a,A);f[X.route.id]==null&&(f[X.route.id]=I)}c||(m[A]=jg),y||(y=!0,h=Wl(U.error)?U.error.status:500),U.headers&&(p[A]=U.headers)}else m[A]=U.data,U.statusCode&&U.statusCode!==200&&!y&&(h=U.statusCode),U.headers&&(p[A]=U.headers)}),E!==void 0&&i&&(f={[i[0]]:E},i[2]&&(m[i[2]]=void 0)),{loaderData:m,errors:f,statusCode:h||200,loaderHeaders:p}}function Vf(a,s,i,c,d,m){let{loaderData:f,errors:h}=dv(s,i,c);return d.filter(y=>!y.matches||y.matches.some(p=>p.shouldLoad)).forEach(y=>{let{key:p,match:E,controller:x}=y;if(x&&x.signal.aborted)return;let A=m[p];if(Se(A,"Did not find corresponding fetcher result"),Jt(A)){let U=Mo(a.matches,E?.route.id);h&&h[U.route.id]||(h={...h,[U.route.id]:A.error}),a.fetchers.delete(p)}else if(ta(A))Se(!1,"Unhandled fetcher revalidation redirect");else{let U=Zn(A.data);a.fetchers.set(p,U)}}),{loaderData:f,errors:h}}function Xf(a,s,i,c){let d=Object.entries(s).filter(([,m])=>m!==jg).reduce((m,[f,h])=>(m[f]=h,m),{});for(let m of i){let f=m.route.id;if(!s.hasOwnProperty(f)&&a.hasOwnProperty(f)&&m.route.loader&&(d[f]=a[f]),c&&c.hasOwnProperty(f))break}return d}function Jf(a){return a?Jt(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function Mo(a,s){return(s?a.slice(0,a.findIndex(c=>c.route.id===s)+1):[...a]).reverse().find(c=>c.route.hasErrorBoundary===!0)||a[0]}function Es(a){let s=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:s}],route:s}}function rn(a,{pathname:s,routeId:i,method:c,type:d,message:m}={}){let f="Unknown Server Error",h="Unknown @remix-run/router error";return a===400?(f="Bad Request",c&&s&&i?h=`You made a ${c} request to "${s}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:d==="invalid-body"&&(h="Unable to encode submission body")):a===403?(f="Forbidden",h=`Route "${i}" does not match URL "${s}"`):a===404?(f="Not Found",h=`No route matches URL "${s}"`):a===405&&(f="Method Not Allowed",c&&s&&i?h=`You made a ${c.toUpperCase()} request to "${s}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:c&&(h=`Invalid request method "${c.toUpperCase()}"`)),new tr(a||500,f,new Error(h),!0)}function Ts(a){let s=Object.entries(a);for(let i=s.length-1;i>=0;i--){let[c,d]=s[i];if(ta(d))return{key:c,result:d}}}function Ag(a){let s=typeof a=="string"?Qn(a):a;return Mn({...s,hash:""})}function mv(a,s){return a.pathname!==s.pathname||a.search!==s.search?!1:a.hash===""?s.hash!=="":a.hash===s.hash?!0:s.hash!==""}function pv(a){return new tr(a.init?.status??500,a.init?.statusText??"Internal Server Error",a.data)}function fv(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([s,i])=>typeof s=="string"&&gv(i))}function gv(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function hv(a){return Eu(a.result)&&Tg.has(a.result.status)}function Jt(a){return a.type==="error"}function ta(a){return(a&&a.type)==="redirect"}function Gf(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function Eu(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function yv(a){return Tg.has(a)}function bv(a){return Eu(a)&&yv(a.status)&&a.headers.has("Location")}function vv(a){return Kb.has(a.toUpperCase())}function Nt(a){return Jb.has(a.toUpperCase())}function Tu(a){return new URLSearchParams(a).getAll("index").some(s=>s==="")}function Rs(a,s){let i=typeof s=="string"?Qn(s).search:s.search;if(a[a.length-1].route.index&&Tu(i||""))return a[a.length-1];let c=bg(a);return c[c.length-1]}function Kf(a){let{formMethod:s,formAction:i,formEncType:c,text:d,formData:m,json:f}=a;if(!(!s||!i||!c)){if(d!=null)return{formMethod:s,formAction:i,formEncType:c,formData:void 0,json:void 0,text:d};if(m!=null)return{formMethod:s,formAction:i,formEncType:c,formData:m,json:void 0,text:void 0};if(f!==void 0)return{formMethod:s,formAction:i,formEncType:c,formData:void 0,json:f,text:void 0}}}function ru(a,s){return s?{state:"loading",location:a,formMethod:s.formMethod,formAction:s.formAction,formEncType:s.formEncType,formData:s.formData,json:s.json,text:s.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xv(a,s){return{state:"submitting",location:a,formMethod:s.formMethod,formAction:s.formAction,formEncType:s.formEncType,formData:s.formData,json:s.json,text:s.text}}function Fl(a,s){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:s}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:s}}function Sv(a,s){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:s?s.data:void 0}}function Zn(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Ev(a,s){try{let i=a.sessionStorage.getItem(wg);if(i){let c=JSON.parse(i);for(let[d,m]of Object.entries(c||{}))m&&Array.isArray(m)&&s.set(d,new Set(m||[]))}}catch{}}function Tv(a,s){if(s.size>0){let i={};for(let[c,d]of s)i[c]=[...d];try{a.sessionStorage.setItem(wg,JSON.stringify(i))}catch(c){lt(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function Zf(){let a,s,i=new Promise((c,d)=>{a=async m=>{c(m);try{await i}catch{}},s=async m=>{d(m);try{await i}catch{}}});return{promise:i,resolve:a,reject:s}}var na=N.createContext(null);na.displayName="DataRouter";var or=N.createContext(null);or.displayName="DataRouterState";var Cg=N.createContext(!1);function wv(){return N.useContext(Cg)}var wu=N.createContext({isTransitioning:!1});wu.displayName="ViewTransition";var _g=N.createContext(new Map);_g.displayName="Fetchers";var jv=N.createContext(null);jv.displayName="Await";var un=N.createContext(null);un.displayName="Navigation";var Ls=N.createContext(null);Ls.displayName="Location";var On=N.createContext({outlet:null,matches:[],isDataRoute:!1});On.displayName="Route";var ju=N.createContext(null);ju.displayName="RouteError";var Lg="REACT_ROUTER_ERROR",Mv="REDIRECT",Ov="ROUTE_ERROR_RESPONSE";function Nv(a){if(a.startsWith(`${Lg}:${Mv}:{`))try{let s=JSON.parse(a.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function Rv(a){if(a.startsWith(`${Lg}:${Ov}:{`))try{let s=JSON.parse(a.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new tr(s.status,s.statusText,s.data)}catch{}}function Dv(a,{relative:s}={}){Se(ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:c}=N.useContext(un),{hash:d,pathname:m,search:f}=lr(a,{relative:s}),h=m;return i!=="/"&&(h=m==="/"?i:jn([i,m])),c.createHref({pathname:h,search:f,hash:d})}function ar(){return N.useContext(Ls)!=null}function Nn(){return Se(ar(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ls).location}var Ug="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kg(a){N.useContext(un).static||N.useLayoutEffect(a)}function Mu(){let{isDataRoute:a}=N.useContext(On);return a?Vv():Av()}function Av(){Se(ar(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(na),{basename:s,navigator:i}=N.useContext(un),{matches:c}=N.useContext(On),{pathname:d}=Nn(),m=JSON.stringify(vu(c)),f=N.useRef(!1);return kg(()=>{f.current=!0}),N.useCallback((y,p={})=>{if(lt(f.current,Ug),!f.current)return;if(typeof y=="number"){i.go(y);return}let E=xu(y,JSON.parse(m),d,p.relative==="path");a==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:jn([s,E.pathname])),(p.replace?i.replace:i.push)(E,p.state,p)},[s,i,m,d,a])}var Cv=N.createContext(null);function _v(a){let s=N.useContext(On).outlet;return N.useMemo(()=>s&&N.createElement(Cv.Provider,{value:a},s),[s,a])}function lr(a,{relative:s}={}){let{matches:i}=N.useContext(On),{pathname:c}=Nn(),d=JSON.stringify(vu(i));return N.useMemo(()=>xu(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function Lv(a,s,i,c,d){Se(ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=N.useContext(un),{matches:f}=N.useContext(On),h=f[f.length-1],y=h?h.params:{},p=h?h.pathname:"/",E=h?h.pathnameBase:"/",x=h&&h.route;{let G=x&&x.path||"";Bg(p,!x||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let A=Nn(),U;U=A;let I=U.pathname||"/",X=I;if(E!=="/"){let G=E.replace(/^\//,"").split("/");X="/"+I.replace(/^\//,"").split("/").slice(G.length).join("/")}let J=jo(a,{pathname:X});return lt(x||J!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),lt(J==null||J[J.length-1].route.element!==void 0||J[J.length-1].route.Component!==void 0||J[J.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Hv(J&&J.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:jn([E,m.encodeLocation?m.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?E:jn([E,m.encodeLocation?m.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),f,i,c,d)}function Uv(){let a=qv(),s=Wl(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:m},"ErrorBoundary")," or"," ",N.createElement("code",{style:m},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},s),i?N.createElement("pre",{style:d},i):null,f)}var kv=N.createElement(Uv,null),zg=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){this.props.onError?this.props.onError(a,s):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=Rv(a.digest);i&&(a=i)}let s=a!==void 0?N.createElement(On.Provider,{value:this.props.routeContext},N.createElement(ju.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(zv,{error:a},s):s}};zg.contextType=Cg;var su=new WeakMap;function zv({children:a,error:s}){let{basename:i}=N.useContext(un);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=Nv(s.digest);if(c){let d=su.get(s);if(d)throw d;let m=xg(c.location,i);if(vg&&!su.get(s))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw su.set(s,f),f}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return a}function Bv({routeContext:a,match:s,children:i}){let c=N.useContext(na);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),N.createElement(On.Provider,{value:a},i)}function Hv(a,s=[],i=null,c=null,d=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(s.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let m=a,f=i?.errors;if(f!=null){let E=m.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);Se(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),m=m.slice(0,Math.min(m.length,E+1))}let h=!1,y=-1;if(i)for(let E=0;E<m.length;E++){let x=m[E];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=E),x.route.id){let{loaderData:A,errors:U}=i,I=x.route.loader&&!A.hasOwnProperty(x.route.id)&&(!U||U[x.route.id]===void 0);if(x.route.lazy||I){h=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let p=i&&c?(E,x)=>{c(E,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:nr(i.matches),errorInfo:x})}:void 0;return m.reduceRight((E,x,A)=>{let U,I=!1,X=null,J=null;i&&(U=f&&x.route.id?f[x.route.id]:void 0,X=x.route.errorElement||kv,h&&(y<0&&A===0?(Bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,J=null):y===A&&(I=!0,J=x.route.hydrateFallbackElement||null)));let K=s.concat(m.slice(0,A+1)),G=()=>{let ne;return U?ne=X:I?ne=J:x.route.Component?ne=N.createElement(x.route.Component,null):x.route.element?ne=x.route.element:ne=E,N.createElement(Bv,{match:x,routeContext:{outlet:E,matches:K,isDataRoute:i!=null},children:ne})};return i&&(x.route.ErrorBoundary||x.route.errorElement||A===0)?N.createElement(zg,{location:i.location,revalidation:i.revalidation,component:X,error:U,children:G(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):G()},null)}function Ou(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pv(a){let s=N.useContext(na);return Se(s,Ou(a)),s}function Iv(a){let s=N.useContext(or);return Se(s,Ou(a)),s}function Yv(a){let s=N.useContext(On);return Se(s,Ou(a)),s}function Nu(a){let s=Yv(a),i=s.matches[s.matches.length-1];return Se(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Fv(){return Nu("useRouteId")}function qv(){let a=N.useContext(ju),s=Iv("useRouteError"),i=Nu("useRouteError");return a!==void 0?a:s.errors?.[i]}function Vv(){let{router:a}=Pv("useNavigate"),s=Nu("useNavigate"),i=N.useRef(!1);return kg(()=>{i.current=!0}),N.useCallback(async(d,m={})=>{lt(i.current,Ug),i.current&&(typeof d=="number"?await a.navigate(d):await a.navigate(d,{fromRouteId:s,...m}))},[a,s])}var Qf={};function Bg(a,s,i){!s&&!Qf[a]&&(Qf[a]=!0,lt(!1,i))}var $f={};function Wf(a,s){!a&&!$f[s]&&($f[s]=!0,console.warn(s))}var Xv="useOptimistic",eg=rb[Xv],Jv=()=>{};function Gv(a){return eg?eg(a):[a,Jv]}function Kv(a){let s={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&lt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(s,{element:N.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&lt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(s,{hydrateFallbackElement:N.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&lt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(s,{errorElement:N.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),s}var Zv=["HydrateFallback","hydrateFallbackElement"],Qv=class{constructor(){this.status="pending",this.promise=new Promise((a,s)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",s(i))}})}};function $v({router:a,flushSync:s,onError:i,unstable_useTransitions:c}){c=wv()||c;let[m,f]=N.useState(a.state),[h,y]=Gv(m),[p,E]=N.useState(),[x,A]=N.useState({isTransitioning:!1}),[U,I]=N.useState(),[X,J]=N.useState(),[K,G]=N.useState(),ne=N.useRef(new Map),Ne=N.useCallback((le,{deletedFetchers:ye,newErrors:He,flushSync:je,viewTransitionOpts:ke})=>{He&&i&&Object.values(He).forEach(Ie=>i(Ie,{location:le.location,params:le.matches[0]?.params??{},unstable_pattern:nr(le.matches)})),le.fetchers.forEach((Ie,xe)=>{Ie.data!==void 0&&ne.current.set(xe,Ie.data)}),ye.forEach(Ie=>ne.current.delete(Ie)),Wf(je===!1||s!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ht=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(Wf(ke==null||ht,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ke||!ht){s&&je?s(()=>f(le)):c===!1?f(le):N.startTransition(()=>{c===!0&&y(Ie=>tg(Ie,le)),f(le)});return}if(s&&je){s(()=>{X&&(U?.resolve(),X.skipTransition()),A({isTransitioning:!0,flushSync:!0,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation})});let Ie=a.window.document.startViewTransition(()=>{s(()=>f(le))});Ie.finished.finally(()=>{s(()=>{I(void 0),J(void 0),E(void 0),A({isTransitioning:!1})})}),s(()=>J(Ie));return}X?(U?.resolve(),X.skipTransition(),G({state:le,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation})):(E(le),A({isTransitioning:!0,flushSync:!1,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation}))},[a.window,s,X,U,c,y,i]);N.useLayoutEffect(()=>a.subscribe(Ne),[a,Ne]),N.useEffect(()=>{x.isTransitioning&&!x.flushSync&&I(new Qv)},[x]),N.useEffect(()=>{if(U&&p&&a.window){let le=p,ye=U.promise,He=a.window.document.startViewTransition(async()=>{c===!1?f(le):N.startTransition(()=>{c===!0&&y(je=>tg(je,le)),f(le)}),await ye});He.finished.finally(()=>{I(void 0),J(void 0),E(void 0),A({isTransitioning:!1})}),J(He)}},[p,U,a.window,c,y]),N.useEffect(()=>{U&&p&&h.location.key===p.location.key&&U.resolve()},[U,X,h.location,p]),N.useEffect(()=>{!x.isTransitioning&&K&&(E(K.state),A({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}),G(void 0))},[x.isTransitioning,K]);let ve=N.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:le=>a.navigate(le),push:(le,ye,He)=>a.navigate(le,{state:ye,preventScrollReset:He?.preventScrollReset}),replace:(le,ye,He)=>a.navigate(le,{replace:!0,state:ye,preventScrollReset:He?.preventScrollReset})}),[a]),Ee=a.basename||"/",O=N.useMemo(()=>({router:a,navigator:ve,static:!1,basename:Ee,onError:i}),[a,ve,Ee,i]);return N.createElement(N.Fragment,null,N.createElement(na.Provider,{value:O},N.createElement(or.Provider,{value:h},N.createElement(_g.Provider,{value:ne.current},N.createElement(wu.Provider,{value:x},N.createElement(t0,{basename:Ee,location:h.location,navigationType:h.historyAction,navigator:ve,unstable_useTransitions:c},N.createElement(Wv,{routes:a.routes,future:a.future,state:h,onError:i})))))),null)}function tg(a,s){return{...a,navigation:s.navigation.state!=="idle"?s.navigation:a.navigation,revalidation:s.revalidation!=="idle"?s.revalidation:a.revalidation,actionData:s.navigation.state!=="submitting"?s.actionData:a.actionData,fetchers:s.fetchers}}var Wv=N.memo(e0);function e0({routes:a,future:s,state:i,onError:c}){return Lv(a,void 0,i,c,s)}function Hg(a){return _v(a.context)}function t0({basename:a="/",children:s=null,location:i,navigationType:c="POP",navigator:d,static:m=!1,unstable_useTransitions:f}){Se(!ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:h,navigator:d,static:m,unstable_useTransitions:f,future:{}}),[h,d,m,f]);typeof i=="string"&&(i=Qn(i));let{pathname:p="/",search:E="",hash:x="",state:A=null,key:U="default"}=i,I=N.useMemo(()=>{let X=cn(p,h);return X==null?null:{location:{pathname:X,search:E,hash:x,state:A,key:U},navigationType:c}},[h,p,E,x,A,U,c]);return lt(I!=null,`<Router basename="${h}"> is not able to match the URL "${p}${E}${x}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:N.createElement(un.Provider,{value:y},N.createElement(Ls.Provider,{children:s,value:I}))}var Ds="get",As="application/x-www-form-urlencoded";function Us(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function n0(a){return Us(a)&&a.tagName.toLowerCase()==="button"}function o0(a){return Us(a)&&a.tagName.toLowerCase()==="form"}function a0(a){return Us(a)&&a.tagName.toLowerCase()==="input"}function l0(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function r0(a,s){return a.button===0&&(!s||s==="_self")&&!l0(a)}var ws=null;function s0(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var i0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function iu(a){return a!=null&&!i0.has(a)?(lt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${As}"`),null):a}function c0(a,s){let i,c,d,m,f;if(o0(a)){let h=a.getAttribute("action");c=h?cn(h,s):null,i=a.getAttribute("method")||Ds,d=iu(a.getAttribute("enctype"))||As,m=new FormData(a)}else if(n0(a)||a0(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=a.getAttribute("formaction")||h.getAttribute("action");if(c=y?cn(y,s):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||Ds,d=iu(a.getAttribute("formenctype"))||iu(h.getAttribute("enctype"))||As,m=new FormData(h,a),!s0()){let{name:p,type:E,value:x}=a;if(E==="image"){let A=p?`${p}.`:"";m.append(`${A}x`,"0"),m.append(`${A}y`,"0")}else p&&m.append(p,x)}}else{if(Us(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ds,c=null,d=As,f=a}return m&&d==="text/plain"&&(f=m,m=void 0),{action:c,method:i.toLowerCase(),encType:d,formData:m,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ru(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function u0(a,s,i){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${i}`:s&&cn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${i}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${i}`,c}async function d0(a,s){if(a.id in s)return s[a.id];try{let i=await import(a.module);return s[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function m0(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function p0(a,s,i){let c=await Promise.all(a.map(async d=>{let m=s.routes[d.route.id];if(m){let f=await d0(m,i);return f.links?f.links():[]}return[]}));return y0(c.flat(1).filter(m0).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function ng(a,s,i,c,d,m){let f=(y,p)=>i[p]?y.route.id!==i[p].route.id:!0,h=(y,p)=>i[p].pathname!==y.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==y.params["*"];return m==="assets"?s.filter((y,p)=>f(y,p)||h(y,p)):m==="data"?s.filter((y,p)=>{let E=c.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(f(y,p)||h(y,p))return!0;if(y.route.shouldRevalidate){let x=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function f0(a,s,{includeHydrateFallback:i}={}){return g0(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),i&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function g0(a){return[...new Set(a)]}function h0(a){let s={},i=Object.keys(a).sort();for(let c of i)s[c]=a[c];return s}function y0(a,s){let i=new Set;return new Set(s),a.reduce((c,d)=>{let m=JSON.stringify(h0(d));return i.has(m)||(i.add(m),c.push({key:m,link:d})),c},[])}function Pg(){let a=N.useContext(na);return Ru(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function b0(){let a=N.useContext(or);return Ru(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Du=N.createContext(void 0);Du.displayName="FrameworkContext";function Ig(){let a=N.useContext(Du);return Ru(a,"You must render this element inside a <HydratedRouter> element"),a}function v0(a,s){let i=N.useContext(Du),[c,d]=N.useState(!1),[m,f]=N.useState(!1),{onFocus:h,onBlur:y,onMouseEnter:p,onMouseLeave:E,onTouchStart:x}=s,A=N.useRef(null);N.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let X=K=>{K.forEach(G=>{f(G.isIntersecting)})},J=new IntersectionObserver(X,{threshold:.5});return A.current&&J.observe(A.current),()=>{J.disconnect()}}},[a]),N.useEffect(()=>{if(c){let X=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(X)}}},[c]);let U=()=>{d(!0)},I=()=>{d(!1),f(!1)};return i?a!=="intent"?[m,A,{}]:[m,A,{onFocus:ql(h,U),onBlur:ql(y,I),onMouseEnter:ql(p,U),onMouseLeave:ql(E,I),onTouchStart:ql(x,U)}]:[!1,A,{}]}function ql(a,s){return i=>{a&&a(i),i.defaultPrevented||s(i)}}function x0({page:a,...s}){let{router:i}=Pg(),c=N.useMemo(()=>jo(i.routes,a,i.basename),[i.routes,a,i.basename]);return c?N.createElement(E0,{page:a,matches:c,...s}):null}function S0(a){let{manifest:s,routeModules:i}=Ig(),[c,d]=N.useState([]);return N.useEffect(()=>{let m=!1;return p0(a,s,i).then(f=>{m||d(f)}),()=>{m=!0}},[a,s,i]),c}function E0({page:a,matches:s,...i}){let c=Nn(),{manifest:d,routeModules:m}=Ig(),{basename:f}=Pg(),{loaderData:h,matches:y}=b0(),p=N.useMemo(()=>ng(a,s,y,d,c,"data"),[a,s,y,d,c]),E=N.useMemo(()=>ng(a,s,y,d,c,"assets"),[a,s,y,d,c]),x=N.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let I=new Set,X=!1;if(s.forEach(K=>{let G=d.routes[K.route.id];!G||!G.hasLoader||(!p.some(ne=>ne.route.id===K.route.id)&&K.route.id in h&&m[K.route.id]?.shouldRevalidate||G.hasClientLoader?X=!0:I.add(K.route.id))}),I.size===0)return[];let J=u0(a,f,"data");return X&&I.size>0&&J.searchParams.set("_routes",s.filter(K=>I.has(K.route.id)).map(K=>K.route.id).join(",")),[J.pathname+J.search]},[f,h,c,d,p,s,a,m]),A=N.useMemo(()=>f0(E,d),[E,d]),U=S0(E);return N.createElement(N.Fragment,null,x.map(I=>N.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...i})),A.map(I=>N.createElement("link",{key:I,rel:"modulepreload",href:I,...i})),U.map(({key:I,link:X})=>N.createElement("link",{key:I,nonce:i.nonce,...X})))}function T0(...a){return s=>{a.forEach(i=>{typeof i=="function"?i(s):i!=null&&(i.current=s)})}}var w0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w0&&(window.__reactRouterVersion="7.11.0")}catch{}function j0(a,s){return Wb({basename:s?.basename,getContext:s?.getContext,future:s?.future,history:gb({window:s?.window}),hydrationData:M0(),routes:a,mapRouteProperties:Kv,hydrationRouteProperties:Zv,dataStrategy:s?.dataStrategy,patchRoutesOnNavigation:s?.patchRoutesOnNavigation,window:s?.window,unstable_instrumentations:s?.unstable_instrumentations}).initialize()}function M0(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:O0(a.errors)}),a}function O0(a){if(!a)return null;let s=Object.entries(a),i={};for(let[c,d]of s)if(d&&d.__type==="RouteErrorResponse")i[c]=new tr(d.status,d.statusText,d.data,d.internal===!0);else if(d&&d.__type==="Error"){if(d.__subType){let m=window[d.__subType];if(typeof m=="function")try{let f=new m(d.message);f.stack="",i[c]=f}catch{}}if(i[c]==null){let m=new Error(d.message);m.stack="",i[c]=m}}else i[c]=d;return i}var Yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Au=N.forwardRef(function({onClick:s,discover:i="render",prefetch:c="none",relative:d,reloadDocument:m,replace:f,state:h,target:y,to:p,preventScrollReset:E,viewTransition:x,unstable_defaultShouldRevalidate:A,...U},I){let{basename:X,unstable_useTransitions:J}=N.useContext(un),K=typeof p=="string"&&Yg.test(p),G=xg(p,X);p=G.to;let ne=Dv(p,{relative:d}),[Ne,ve,Ee]=v0(c,U),O=A0(p,{replace:f,state:h,target:y,preventScrollReset:E,relative:d,viewTransition:x,unstable_defaultShouldRevalidate:A,unstable_useTransitions:J});function le(He){s&&s(He),He.defaultPrevented||O(He)}let ye=N.createElement("a",{...U,...Ee,href:G.absoluteURL||ne,onClick:G.isExternal||m?s:le,ref:T0(I,ve),target:y,"data-discover":!K&&i==="render"?"true":void 0});return Ne&&!K?N.createElement(N.Fragment,null,ye,N.createElement(x0,{page:ne})):ye});Au.displayName="Link";var N0=N.forwardRef(function({"aria-current":s="page",caseSensitive:i=!1,className:c="",end:d=!1,style:m,to:f,viewTransition:h,children:y,...p},E){let x=lr(f,{relative:p.relative}),A=Nn(),U=N.useContext(or),{navigator:I,basename:X}=N.useContext(un),J=U!=null&&k0(x)&&h===!0,K=I.encodeLocation?I.encodeLocation(x).pathname:x.pathname,G=A.pathname,ne=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;i||(G=G.toLowerCase(),ne=ne?ne.toLowerCase():null,K=K.toLowerCase()),ne&&X&&(ne=cn(ne,X)||ne);const Ne=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ve=G===K||!d&&G.startsWith(K)&&G.charAt(Ne)==="/",Ee=ne!=null&&(ne===K||!d&&ne.startsWith(K)&&ne.charAt(K.length)==="/"),O={isActive:ve,isPending:Ee,isTransitioning:J},le=ve?s:void 0,ye;typeof c=="function"?ye=c(O):ye=[c,ve?"active":null,Ee?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let He=typeof m=="function"?m(O):m;return N.createElement(Au,{...p,"aria-current":le,className:ye,ref:E,style:He,to:f,viewTransition:h},typeof y=="function"?y(O):y)});N0.displayName="NavLink";var R0=N.forwardRef(({discover:a="render",fetcherKey:s,navigate:i,reloadDocument:c,replace:d,state:m,method:f=Ds,action:h,onSubmit:y,relative:p,preventScrollReset:E,viewTransition:x,unstable_defaultShouldRevalidate:A,...U},I)=>{let{unstable_useTransitions:X}=N.useContext(un),J=L0(),K=U0(h,{relative:p}),G=f.toLowerCase()==="get"?"get":"post",ne=typeof h=="string"&&Yg.test(h),Ne=ve=>{if(y&&y(ve),ve.defaultPrevented)return;ve.preventDefault();let Ee=ve.nativeEvent.submitter,O=Ee?.getAttribute("formmethod")||f,le=()=>J(Ee||ve.currentTarget,{fetcherKey:s,method:O,navigate:i,replace:d,state:m,relative:p,preventScrollReset:E,viewTransition:x,unstable_defaultShouldRevalidate:A});X&&i!==!1?N.startTransition(()=>le()):le()};return N.createElement("form",{ref:I,method:G,action:K,onSubmit:c?y:Ne,...U,"data-discover":!ne&&a==="render"?"true":void 0})});R0.displayName="Form";function D0(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fg(a){let s=N.useContext(na);return Se(s,D0(a)),s}function A0(a,{target:s,replace:i,state:c,preventScrollReset:d,relative:m,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:y}={}){let p=Mu(),E=Nn(),x=lr(a,{relative:m});return N.useCallback(A=>{if(r0(A,s)){A.preventDefault();let U=i!==void 0?i:Mn(E)===Mn(x),I=()=>p(a,{replace:U,state:c,preventScrollReset:d,relative:m,viewTransition:f,unstable_defaultShouldRevalidate:h});y?N.startTransition(()=>I()):I()}},[E,p,x,i,c,s,a,d,m,f,h,y])}var C0=0,_0=()=>`__${String(++C0)}__`;function L0(){let{router:a}=Fg("useSubmit"),{basename:s}=N.useContext(un),i=Fv(),c=a.fetch,d=a.navigate;return N.useCallback(async(m,f={})=>{let{action:h,method:y,encType:p,formData:E,body:x}=c0(m,s);if(f.navigate===!1){let A=f.fetcherKey||_0();await c(A,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:x,formMethod:f.method||y,formEncType:f.encType||p,flushSync:f.flushSync})}else await d(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:x,formMethod:f.method||y,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[c,d,s,i])}function U0(a,{relative:s}={}){let{basename:i}=N.useContext(un),c=N.useContext(On);Se(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...lr(a||".",{relative:s})},f=Nn();if(a==null){m.search=f.search;let h=new URLSearchParams(m.search),y=h.getAll("index");if(y.some(E=>E==="")){h.delete("index"),y.filter(x=>x).forEach(x=>h.append("index",x));let E=h.toString();m.search=E?`?${E}`:""}}return(!a||a===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(m.pathname=m.pathname==="/"?i:jn([i,m.pathname])),Mn(m)}function k0(a,{relative:s}={}){let i=N.useContext(wu);Se(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Fg("useViewTransitionState"),d=lr(a,{relative:s});if(!i.isTransitioning)return!1;let m=cn(i.currentLocation.pathname,c)||i.currentLocation.pathname,f=cn(i.nextLocation.pathname,c)||i.nextLocation.pathname;return Cs(d.pathname,f)!=null||Cs(d.pathname,m)!=null}var z0=mg();function B0(a){return N.createElement($v,{flushSync:z0.flushSync,...a})}var cu={exports:{}};var og;function H0(){return og||(og=1,(function(a){(function(){var s={}.hasOwnProperty;function i(){for(var m="",f=0;f<arguments.length;f++){var h=arguments[f];h&&(m=d(m,c(h)))}return m}function c(m){if(typeof m=="string"||typeof m=="number")return m;if(typeof m!="object")return"";if(Array.isArray(m))return i.apply(null,m);if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]"))return m.toString();var f="";for(var h in m)s.call(m,h)&&m[h]&&(f=d(f,h));return f}function d(m,f){return f?m?m+" "+f:m+f:m}a.exports?(i.default=i,a.exports=i):window.classNames=i})()})(cu)),cu.exports}var P0=H0();const er=dg(P0),I0="_containerPills_1my8y_1",Y0="_pills_1my8y_8",F0="_active_1my8y_31",uu={containerPills:I0,pills:Y0,active:F0},q0=({items:a,onFilterChange:s})=>{const[i,c]=N.useState([]),d=m=>{const f=i.includes(m)?i.filter(h=>h!==m):[...i,m];c(f),s(f)};return w.jsx("div",{className:er(uu.containerPills),children:a.map(m=>w.jsx("div",{className:er(uu.pills,{[uu.active]:i.includes(m.value)}),onClick:()=>d(m.value),children:m.label},m.value))})},ks=({isOpen:a=!1})=>w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:a?"rotate(90deg)":"rotate(0deg)"},children:w.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ag=(a,s)=>{const i=[];let c=0,d=0,m=!1;for(;c<a.length;){if(a[c]==="<"){let h=c+1,y=!1;h<a.length&&a[h]==="/"&&(y=!0,h++);const p=h;for(;h<a.length&&/[a-zA-Z0-9-]/.test(a[h]);)h++;if(h>p){i.push(w.jsx("span",{children:a[c]},`char-${d++}`)),c++,y&&(i.push(w.jsx("span",{children:"/"},`char-${d++}`)),c++),i.push(w.jsx("span",{className:s.tag,children:a.slice(c,h)},`tag-${d++}`)),c=h,m=!1;continue}}if(/\s/.test(a[c])){let h=c;for(;h<a.length&&/\s/.test(a[h]);)h++;i.push(w.jsx("span",{children:a.slice(c,h)},`ws-${d++}`)),c=h;continue}if(/["'`]/.test(a[c])){const h=a[c];let y=c+1;for(;y<a.length&&a[y]!==h;)a[y]==="\\"&&y++,y++;y++,i.push(w.jsx("span",{className:s.string,children:a.slice(c,y)},`str-${d++}`)),c=y,m=!1;continue}if(a[c]==="."){i.push(w.jsx("span",{children:"."},`dot-${d++}`)),m=!0,c++;continue}let f=c;for(;f<a.length&&/[a-zA-Z0-9_$]/.test(a[f]);)f++;if(f>c){const h=a.slice(c,f);/^(if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|throw)$/.test(h)?i.push(w.jsx("span",{className:s.control,children:h},`ctrl-${d++}`)):/^(let|const|var|function|yield|await|async)$/.test(h)?i.push(w.jsx("span",{className:s.declaration,children:h},`decl-${d++}`)):/^(type|interface|enum|namespace|module|declare|implements|extends|infer|keyof|typeof|instanceof|readonly|Uppercase|Lowercase|Capitalize|Uncapitalize|Partial|Required|Readonly|Pick|Omit|Record|Exclude|Extract|NonNullable|Parameters|ReturnType|ConstructorParameters|InstanceType|Awaited|NoInfer)$/.test(h)?i.push(w.jsx("span",{className:s.tsKeyword,children:h},`ts-${d++}`)):/^(string|number|boolean|any|void|delete|in|never|unknown|object|symbol|bigint|null|undefined)$/.test(h)?i.push(w.jsx("span",{className:s.type,children:h},`type-${d++}`)):/^(class|constructor|super|public|private|protected|static|new)$/.test(h)?i.push(w.jsx("span",{className:s.classKeyword,children:h},`class-${d++}`)):/^(import|export|from|as|default|require|module)$/.test(h)?i.push(w.jsx("span",{className:s.module,children:h},`mod-${d++}`)):/^(true|false)$/.test(h)?i.push(w.jsx("span",{className:s.boolean,children:h},`bool-${d++}`)):m&&/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(h)?i.push(w.jsx("span",{className:s.method,children:h},`method-${d++}`)):/^(setTimeout|setInterval|clearTimeout|clearInterval|Promise|then|catch|finally|console|JSON|Math|Number|String|Symbol|Function|Boolean|Array|Date|Object|RegExp|Error|Map|Set|WeakMap|WeakSet|Proxy|Reflect)$/.test(h)?i.push(w.jsx("span",{className:s.global,children:h},`global-${d++}`)):/^(Infinity|-Infinity|NaN|\d+(\.\d+)?)$/.test(h)?i.push(w.jsx("span",{className:s.number,children:h},`num-${d++}`)):i.push(w.jsx("span",{children:h},`word-${d++}`)),c=f,m=!1;continue}i.push(w.jsx("span",{children:a[c]},`char-${d++}`)),m=!1,c++}return i},V0=(a,s)=>{if(!a)return[];const i=a.split(`
`),c=[];return i.forEach((d,m)=>{if(d===""){c.push(w.jsx("br",{},`empty-${m}`));return}const h=d.match(new RegExp("(?<!:)\\/\\/"))?.index??-1,y=d.indexOf("<!--");let p=-1;if(h!==-1&&y!==-1?p=Math.min(h,y):h!==-1?p=h:y!==-1&&(p=y),p!==-1){const E=d.substring(0,p),x=d.substring(p),A=ag(E,s);c.push(w.jsxs("div",{className:s.exampleLine,children:[A,w.jsx("span",{className:s.comment,children:x})]},`line-${m}`))}else{const E=ag(d,s);c.push(w.jsx("div",{className:s.exampleLine,children:E},`line-${m}`))}}),c},X0="_container_1vnuv_1",J0="_title_1vnuv_11",G0="_toggleButton_1vnuv_24",K0="_code_1vnuv_35",Z0="_control_1vnuv_46",Q0="_declaration_1vnuv_50",$0="_tsKeyword_1vnuv_54",W0="_type_1vnuv_58",ex="_classKeyword_1vnuv_62",tx="_module_1vnuv_66",nx="_method_1vnuv_70",ox="_string_1vnuv_74",ax="_number_1vnuv_78",lx="_global_1vnuv_82",rx="_comment_1vnuv_86",sx="_boolean_1vnuv_91",ix="_tag_1vnuv_95",Vl={container:X0,title:J0,toggleButton:G0,code:K0,control:Z0,declaration:Q0,tsKeyword:$0,type:W0,classKeyword:ex,module:tx,method:nx,string:ox,number:ax,global:lx,comment:rx,boolean:sx,tag:ix},Cu=({text:a,isShowToggle:s=!1,isHiddenDefault:i=!1})=>{const[c,d]=N.useState(i);return w.jsxs("div",{className:Vl.container,children:[w.jsxs("div",{className:Vl.title,children:["Примеры:",s&&w.jsx("button",{className:Vl.toggleButton,onClick:()=>d(m=>!m),children:c?"Показать":"Скрыть"})]}),!c&&w.jsx("div",{className:Vl.code,children:V0(a,Vl)})]})},cx="_container_1vuoc_1",ux="_header_1vuoc_13",dx="_title_1vuoc_18",mx="_content_1vuoc_23",js={container:cx,header:ux,title:dx,content:mx},zs=({title:a,filtersSlot:s,children:i})=>w.jsxs("div",{className:js.container,children:[w.jsx("header",{className:js.header,children:w.jsx("h1",{className:js.title,children:a})}),s,w.jsx("div",{className:js.content,children:i})]}),px=a=>N.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",...a},N.createElement("path",{d:"M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z",fillRule:"evenodd"})),fx="_container_trs0x_1",gx="_input_trs0x_6",hx="_clear_trs0x_25",du={container:fx,input:gx,clear:hx},_u=({searchQuery:a,onSearchChange:s,onSearchReset:i})=>w.jsxs("div",{className:du.container,children:[w.jsx("input",{type:"text",placeholder:"Поиск...",value:a,onChange:s,className:du.input}),a&&w.jsx("button",{className:du.clear,onClick:i,children:w.jsx(px,{})})]}),yx="_container_1po27_1",bx="_content_1po27_19",vx="_title_1po27_25",mu={container:yx,content:bx,title:vx},xx=({onClick:a,children:s})=>w.jsx("div",{className:mu.container,onClick:a,children:w.jsx("div",{className:mu.content,children:w.jsx("h3",{className:mu.title,children:s})})}),Va=(a,s={})=>{const{highlightStyle:i={fontWeight:600,color:"#1864ab"},excludeWords:c=[]}=s;return N.useMemo(()=>{const d=[],m=new Set(c.map(E=>E.toLowerCase())),f=/([A-Za-z_][A-Za-z0-9'_]*|\n)/g;let h=0,y,p=0;for(;(y=f.exec(a))!==null;){const E=y[0];y.index>h&&d.push(w.jsx("span",{children:a.substring(h,y.index)},p++)),E===`
`?d.push(w.jsx("br",{},p++)):E&&(!m.has(E.toLowerCase())?d.push(w.jsx("strong",{style:i,children:E},p++)):d.push(w.jsx("span",{children:E},p++))),h=f.lastIndex}return h<a.length&&d.push(w.jsx("span",{children:a.substring(h)},p++)),d},[a,i,c])},Xl=20,Bs=()=>{const[a,s]=N.useState([]),[i,c]=N.useState(""),[d,m]=N.useState(Xl);return{activeCategories:a,searchQuery:i,loadedCount:d,filterChange:E=>{s(E),m(Xl)},searchChange:E=>{c(E.target.value),m(Xl)},searchReset:()=>{c(""),m(Xl)},loadMore:()=>{m(E=>E+Xl)},setLoadedCount:m}},qg=({activeCategories:a,searchQuery:s="",loadedCount:i=1/0,config:c,getLabel:d})=>{const m=N.useMemo(()=>a.length===0?Object.keys(c):a,[a,c]),f=N.useMemo(()=>Object.keys(c).map(E=>({label:d(E),value:E})),[c,d]),h=N.useMemo(()=>m.reduce((E,x)=>{const U=(c[x]||[]).filter(I=>I.name.toLowerCase().includes(s.toLowerCase()));return E+U.length},0),[m,s,c]),y=N.useMemo(()=>{let E=0;const x={};for(const A of m){if(E>=i)break;const I=(c[A]||[]).filter(K=>K.name.toLowerCase().includes(s.toLowerCase())),X=i-E,J=Math.min(I.length,X);J>0&&(x[A]=I.slice(0,J),E+=J)}return x},[m,i,s,c]),p=i<h;return{pillItems:f,categoriesToShow:m,totalCount:h,itemsToShow:y,hasMore:p}},Vg=({hasMore:a,onLoadMore:s,threshold:i=.1,rootMargin:c="100px"})=>{const d=N.useRef(null);return N.useEffect(()=>{if(!a||!d.current)return;const m=new IntersectionObserver(([f])=>{f.isIntersecting&&s()},{threshold:i,rootMargin:c});return m.observe(d.current),()=>m.disconnect()},[a,s,i,c]),d},sn={MAIN:"/",JAVA_SCRIPT:"/java-script",JAVA_SCRIPT_METHODS:"/java-script-methods",JAVA_SCRIPT_BROWSER:"/java-script-browser",TYPE_SCRIPT_UTILITY_TYPES:"/type-script-utility-types"},Sx=({searchQuery:a="",loadedCount:s,config:i})=>{const c=Mu(),d=i,m=N.useMemo(()=>a?d.filter(p=>p.name.toLowerCase().includes(a.toLowerCase())):d,[d,a]),f=m.slice(0,s),h=s<m.length;return{topicsToShow:f,navigateToTopic:p=>{c(`${sn.JAVA_SCRIPT}/topic/${p.value}`,{state:{topicData:p}})},hasMore:h}},Ex="_container_2pa71_1",Tx="_noResult_2pa71_7",wx="_sentinel_2pa71_20",pu={container:Ex,noResult:Tx,sentinel:wx},Xg=({searchQuery:a,loadedCount:s,loadMore:i,topics:c})=>{const{topicsToShow:d,navigateToTopic:m,hasMore:f}=Sx({searchQuery:a,loadedCount:s,config:c}),h=Vg({hasMore:f,onLoadMore:i}),y=d.filter(p=>p.name.toLowerCase().includes(a.toLowerCase()));return w.jsxs("div",{className:pu.container,children:[y.map(p=>w.jsx(xx,{onClick:()=>m(p),children:p.name},p.value)),y.length===0&&w.jsx("div",{className:pu.noResult,children:"По данному запросу данных нет"}),f&&w.jsx("div",{ref:h,className:pu.sentinel})]})},jx={value:"currying",name:"Каррирование",content:{introduction:"Каррирование — это преобразование функции, которое позволяет вызывать её с аргументами по частям, возвращая новую функцию для каждого частичного применения, пока не будут переданы все необходимые аргументы.",sections:[{title:"Основы каррирования",content:`Каррирование трансформирует вызов f(a, b, c) в f(a)(b)(c). Это не вызывает функцию, а лишь преобразует её.
Арность — количество аргументов функции.
Чистое каррирование — каждый шаг принимает ровно один аргумент: f(a)(b)(c).`,addition:`• Каждая функция возвращает следующую функцию
• Предыдущие аргументы сохраняются в замыкании
• Работает только с фиксированным числом аргументов
• Функции с rest-параметрами (...args) не каррируются`,examples:`function multiply(a, b, c) {
  return a * b * c;
}
const result = multiply(1, 2, 3);
console.log(result); // 6

// Чистое каррирование
function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
multiply(1)(2)(3); // 6

// Разбитый вызов
const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
console.log(result); // 6`},{title:"Универсальная функция каррирования",content:"Функция curry(func) преобразует любую функцию в каррированную версию, которая поддерживает оба варианта вызова. В отличие от чистого каррирования, здесь можно передавать несколько аргументов за раз.",addition:`• Если аргументов достаточно — функция выполняется сразу
• Если аргументов недостаточно — возвращает частично применённую функцию`,examples:`function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// Использование
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);

curriedSum(1, 2, 3); // обычный вызов
curriedSum(1)(2, 3); // частичное применение
curriedSum(1)(2)(3); // чистое каррирование`},{title:"Частичное применение",content:"Частичное применение — это процесс привязки (фиксации) части аргументов к функции, в результате чего получается новая функция с меньшим количеством аргументов (меньшей арностью).",addition:`• В отличие от каррирования, можно фиксировать любое количество аргументов за раз
• Некоторые аргументы получают значения по умолчанию, остальные остаются открытыми
• При использовании bind может иметь более высокую производительность, так как напрямую привязывает аргументы без создания множественных замыканий`,examples:`// Частичное применение через bind
function greet(greeting, punctuation, name) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

const greetHello = greet.bind(null, "Привет", "!");
console.log(greetHello("Алиса")); // Привет, Алиса!

// Универсальная функция partial
function partial(fn, ...fixed) {
  return (...rest) => fn(...fixed, ...rest);
}

function discount(price, rate) {
  return price * rate;
}

const tenPercent = partial(discount, 0.1);
console.log(tenPercent(500)); // 50
console.log(tenPercent(1000)); // 100`}]}},Mx={value:"arrays",name:"Итерируемые объекты",content:{introduction:"Итерируемые объекты — это объекты, которые можно использовать в цикле for..of. Массивы, строки и многие другие коллекции являются итерируемыми.",sections:[{title:"Протокол итерации",content:`Чтобы сделать объект итерируемым, нужно добавить в него метод с именем Symbol.iterator.
Как работает for..of:
1. Вызывает Symbol.iterator один раз (или выдаёт ошибку, если метод не найден)
2. Метод должен вернуть итератор — объект с методом next
3. for..of работает только с этим возвращённым объектом
4. Для получения следующего значения вызывается next()
5. Результат next() должен иметь вид {done: Boolean, value: any}
Где done=true означает завершение цикла, а value содержит очередное значение.

Итерируемые объекты — это объекты, которые реализуют метод Symbol.iterator.`,addition:"Строки также являются итерируемыми объектами и корректно обрабатывают суррогатные пары.",examples:`// Строка — итерируемый объект
for (let letter of "JS") {
  console.log(letter); // "J", "S"
}

// Кастомный итерируемый объект
const weekDays = {
  days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  [Symbol.iterator]() {
    let index = 0;
    const days = this.days;
    return {
      next() {
        if (index < days.length) {
          return { done: false, value: days[index++] };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let day of weekDays) {
  console.log(day); // "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
}`},{title:"Псевдомассивы",content:`Псевдомассивы — это объекты, которые имеют только числовые ключи (0, 1, 2, ...) и свойство length.
Пример псевдомассива: объект arguments внутри функции.`,addition:"Псевдомассив не обязательно является итерируемым, и наоборот. Для использования for..of с псевдомассивом нужно добавить Symbol.iterator или преобразовать через Array.from().",examples:`// Псевдомассив (список покупок)
const shoppingList = {
  0: "Молоко",
  1: "Хлеб",
  length: 2
};
console.log(shoppingList[0]); // "Молоко"
console.log(shoppingList.length); // 2

// arguments — псевдомассив
function sumPrices() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumPrices(100, 250, 75)); // 425`},{title:"Создание массивов",content:`Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.
Существует несколько способов создания массивов:
1. Литерал массива (рекомендуется): []
2. Конструктор: new Array()`,addition:`Важная особенность: new Array(number) создаёт пустой (разряженный) массив заданной длины.
Элементы такого массива имеют значение undefined, но они не существуют физически — это "дыры" в массиве.`,examples:`// Литерал массива
const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = ["яблоко", "апельсин", "груша"];

// Конструктор Array
const arr4 = new Array();
console.log(arr4); // []

const arr5 = new Array(5);
console.log(arr5); // [empty × 5] (пустой массив длины 5)

const arr6 = new Array(1, 2, 3);
console.log(arr6); // [1, 2, 3]

// Разница!
console.log(new Array(3)); // [empty × 3]
console.log([3]); // [3]

// Проверка на пустые элементы
const empty = new Array(3);
console.log(empty[0]); // undefined
console.log(0 in empty); // false (элемента нет)`},{title:"Свойство length",content:"length — специальное свойство, которое возвращает длину массива (больший числовой индекс + 1). Оно обновляется автоматически при добавлении/удалении элементов.",addition:"Уменьшение length обрезает массив безвозвратно.",examples:`const fruits = ["Яблоко", "Апельсин", "Груша"];
console.log(fruits.length); // 3

// Добавление элемента
fruits[3] = "Лимон";
console.log(fruits.length); // 4

// Уменьшение length обрезает массив
fruits.length = 2;
console.log(fruits); // ["Яблоко", "Апельсин"]
console.log(fruits[2]); // undefined`},{title:"Методы массива: стек и очередь",content:`Массив в JavaScript может работать как структура данных:
• Стек (LIFO — Last In First Out): push/pop
• Очередь (FIFO — First In First Out): unshift/shift

Операции с конца массива (push/pop) работают быстро, а с начала (unshift/shift) — медленнее из-за перенумерации элементов.`,addition:"Все 4 метода изменяют исходный массив и возвращают новое значение.",examples:`// Стек: push/pop (работаем с концом)
const stack = [];
stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
console.log(stack.pop()); // 3, stack = [1, 2]
console.log(stack.pop()); // 2, stack = [1]

// Очередь: unshift/shift (работаем с началом)
const queue = [];
queue.unshift(1); // [1]
queue.unshift(2); // [2, 1]
queue.unshift(3); // [3, 2, 1]
console.log(queue.shift()); // 3, queue = [2, 1]
console.log(queue.shift()); // 2, queue = [1]

// push/unshift принимают несколько аргументов
const arr = [1];
arr.push(2, 3); // [1, 2, 3]
arr.unshift(0, -1); // [-1, 0, 1, 2, 3]`},{title:"Производительность и оптимизация",content:`Движки JavaScript оптимизируют хранение массивов в непрерывной области памяти.
Чтобы сохранить оптимизацию, следует избегать:
• Добавления нечисловых свойств (arr.test = 5)
• Создания «дыр» (arr[0] = 1; arr[1000] = 2)
• Заполнения в обратном порядке`,addition:"Нарушение этих правил может замедлить работу массива в разы.",examples:`// Хорошо — непрерывный массив
const good = [1, 2, 3, 4, 5];

// Плохо — нечисловое свойство
const bad1 = [1, 2, 3];
bad1.test = 5;

// Плохо — «дыры» в массиве
const bad2 = [];
bad2[0] = 1;
bad2[1000] = 2;

// Плохо — заполнение в обратном порядке
const bad3 = [];
bad3[100] = 1;
bad3[99] = 2;
// ... и так до 0`},{title:"Сравнение и преобразование массивов",content:`Массивы — это объекты, поэтому сравниваются по ссылке, а не по содержимому.
При преобразовании в строку элементы соединяются запятыми.
При преобразовании в число массив сначала превращается в строку, а затем в число.`,addition:"Для сравнения содержимого нужно сравнивать элементы попарно.",examples:`// Сравнение по ссылке
console.log([] == []); // false
console.log([1, 2] == [1, 2]); // false
const a = [1, 2];
const b = a;
console.log(a == b); // true (одна ссылка)

// Преобразование в строку
console.log(String([1, 2, 3])); // "1,2,3"
console.log([1, 2, 3].toString()); // "1,2,3"

// Преобразование в число
console.log(Number([1])); // 1
console.log(+[1]); // 1
console.log(Number([1, 2])); // NaN (строка "1,2" не является числом)
console.log(Number([])); // 0 (пустая строка -> 0)
console.log(Number([""])); // 0
console.log(Number(["10"])); // 10

// Правильное сравнение содержимого
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1, 2], [1, 2])); // true`}]}},Ox={value:"conditional-statements",name:"Условные конструкции",content:{introduction:"Условные конструкции позволяют выполнять различные блоки кода в зависимости от условий.",sections:[{title:"Конструкция if",content:`Выполняет блок кода, если условие истинно.

if (условие) { тело }`,addition:`• Условие приводится к boolean (falsy: false, 0, "", null, undefined, NaN)
• else if — для нескольких условий
• else — выполняется, если условие ложно
• Можно вкладывать друг в друга`,examples:`const age = 18;

if (age >= 18) {
  console.log("Доступ разрешён"); // Доступ разрешён
}

if (age < 12) {
  console.log("Ребёнок");
} else if (age < 18) {
  console.log("Подросток");
} else {
  console.log("Взрослый"); // Взрослый
}`},{title:"Конструкция switch",content:`Выполняет разные блоки кода в зависимости от значения выражения.

switch (выражение) {
- case значение1: код1; break;
- case значение2: код2; break;
- default: код;
}`,addition:`• Использует строгое сравнение (===)
• break прерывает выполнение, без него код продолжается в следующий case
• default выполняется, если ни один case не совпал
• Можно группировать несколько case для одного кода`,examples:`const userRole = 2;

switch (userRole) {
  case "2":
    console.log("Этот код не выполнится из-за строгого сравнения");
    break;

  case 2:
    console.log("Выполнится"); // Выполнится
    break;

  case 3:
  case 4:
    console.log("Числа 3 и 4");
    break;

  default:
    console.log("Если ни один case не подошел");
}`}]}},Nx={value:"constructor-and-new",name:"Функция-конструктор",content:{introduction:"Функции-конструкторы в JavaScript — это обычные функции, которые используются для многократного создания однотипных объектов.",sections:[{title:"Соглашения при использовании конструкторов",content:`Два основных соглашения при работе с функциями-конструкторами:
• Имя функции-конструктора должно начинаться с большой буквы
• Функция-конструктор должна вызываться только с оператором new`,addition:"Соблюдение этих соглашений делает код более читаемым и предсказуемым.",examples:`// Функция-конструктор User (имя с большой буквы)
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// Вызов ТОЛЬКО с оператором new
let user = new User("Jack");
console.log(user.name); // Jack
console.log(user.isAdmin); // false

// Можно создать множество объектов одного типа
let user2 = new User("Ann");
let user3 = new User("Alice");`},{title:"Вызов конструктора с оператором new (и без него)",content:`При вызове функции-конструктора с использованием оператора new (new Имя(...)) происходит следующее:
1. Создаётся новый пустой объект (неявно this = {})
2. Выполняется тело функции, добавляются свойства к this
3. Возвращается this (неявно return this)

Если вызвать без new — функция выполнится как обычная, this будет undefined (в строгом режиме) или глобальный объект, и свойства не будут добавлены в новый объект.`,addition:"Если конструктор не принимает аргументов, скобки можно опустить: new User — это то же самое, что new User().",examples:`// Что происходит внутри конструктора:
function User(name) {
  // 1. this = {}; (неявно создаётся новый пустой объект)
  // 2. Выполняется тело функции
  this.name = name;
  this.isAdmin = false;
  // 3. return this; (неявно возвращается this)
}

// Вызов с new — создаётся объект
let user = new User("Jack");
console.log(user.name); // Jack

// Вызов БЕЗ new — ошибка или неправильное поведение
let badUser = User("Jack");
// В строгом режиме: TypeError (this undefined)
// Без строгого режима: this = window (в браузере)`},{title:"new.target — проверка режима вызова",content:`Специальное свойство new.target позволяет определить, вызвана ли функция с new:
• При вызове с new — содержит саму функцию
• При вызове без new — undefined`,addition:"Это свойство полезно для создания универсальных функций, которые могут вызываться и с new, и без него.",examples:`// Проверка new.target
function CheckNewTarget() {
  console.log(new.target);
}

CheckNewTarget();  // undefined
new CheckNewTarget();  // function CheckNewTarget { ... }

// Гибкий вызов (с new и без)
function User(name) {
  if (!new.target) {
    return new User(name); // авто-добавление new
  }
  this.name = name;
}

let john = User("John"); // работает и так
console.log(john.name); // John`},{title:"Возврат значения из конструктора",content:`Правила возврата из конструктора:
• Объект: возвращается этот объект (вместо this)
• Примитив: игнорируется, возвращается this`,addition:"Это важно помнить: если конструктор возвращает объект, то все свойства, добавленные к this, будут потеряны.",examples:`// Возврат объекта (переопределяет this)
function BigUser() {
  this.name = "John";
  return { name: "Godzilla" };
}
console.log(new BigUser().name); // "Godzilla"

// Возврат примитива или пустой return (игнорируется)
function SmallUser() {
  this.name = "John";
  return;
}
console.log(new SmallUser().name); // "John"`}]}},Rx={value:"functions",name:"Функции",content:{introduction:"Функция — это объект с типом Function, который позволяет инкапсулировать код для многократного использования.",sections:[{title:"Параметры vs Аргументы",content:`Параметры — это переменные, указанные в определении функции.
Аргументы — это конкретные значения, переданные при вызове функции.`,addition:`• Параметры получают значения аргументов при вызове
• Если аргумент не передан, параметр получает undefined
• Можно задать значения по умолчанию (ES6): param = defaultValue
• Rest-параметры (...rest) собирают оставшиеся аргументы в массив`,examples:`// Параметры: a и b
function sum(a, b) {
  return a + b;
}
// Аргументы: 5 и 3
console.log(sum(5, 3)); // 8

// Значения по умолчанию
function greet(name = "Гость") {
    return \`Привет, \${name}!\`;
}
console.log(greet()); // "Привет, Гость!"
console.log(greet("Иван")); // "Привет, Иван!"

// Rest-параметры
function logAll(first, ...rest) {
    console.log("Первый:", first); // Первый: 1
    console.log("Остальные:", rest); // Остальные: [2, 3, 4]
}
logAll(1, 2, 3, 4);`},{title:"Директива return",content:"return — директива, которая возвращает значение из функции и завершает её выполнение.",addition:`• Может возвращать любое выражение или значение
• Если return вызван без значения, функция возвращает undefined
• Если return отсутствует, функция возвращает undefined
• После return код не выполняется
• Нельзя вставлять перенос строки между return и значением (ставится автозапятая)`,examples:`// Возврат значения
function multiply(a, b) {
    return a * b;
    console.log("Это не выполнится");
}
console.log(multiply(3, 4)); // 12

// return без значения
function logMessage(msg) {
    if (!msg) return; // досрочный выход, вернет undefined
    console.log(msg);
}
console.log(logMessage("")); // undefined

// Функция без return
function noReturn() {
    let x = 10;
}
console.log(noReturn()); // undefined

// Важно! Нельзя переносить строку после return
function wrong() {
    return
    { value: 42 }; // Этот объект не вернется!
}
console.log(wrong()); // undefined (из-за автозапятой)

// Правильно:
function right() {
    return { value: 42 };
}
console.log(right()); // { value: 42 }`},{title:"Function Declaration",content:`Функция, объявленная как отдельная инструкция с ключевым словом function.

 function имяФункции(списокПараметров) { тело }`,addition:`• Поднимается (hoisting) — можно вызвать до объявления
• В строгом режиме, если Function Declaration находится внутри блока {...}, функция доступна везде внутри этого блока, но не снаружи
• Имеет собственный this
• Можно использовать как конструктор с new
• Имеет псевдомассив arguments (содержит все переданные аргументы, даже если параметры не объявлены)`,examples:`// Вызов до объявления сработает
console.log(greet("Иван")); // "Привет, Иван!"
function greet(name) {
    return \`Привет, \${name}!\`;
}

// Пример с arguments
function sumAll() {
    let sum = 0;
    // arguments содержит все переданные аргументы
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4)); // 10

// arguments работает даже если параметры объявлены
function showArgs(first, second) {
    console.log(first); // 1
    console.log(second); // 2
    console.log(arguments[2]); // 3 (доступ к "лишнему" аргументу)
    console.log(arguments.length); // 3 (количество переданных аргументов)
}
showArgs(1, 2, 3);

// Использование с new (функция-конструктор)
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
const user = new User("Анна");
console.log(user); // User { name: "Анна", isAdmin: false }`},{title:"Function Expression",content:`Функция, созданная внутри другого выражения или синтаксической конструкции.

const/let/var имяПеременной = function(параметры) { тело }`,addition:`• Не поднимается — доступна только после объявления
• Имеет собственный this
• Можно использовать как конструктор с new
• Имеет объект arguments`,examples:`const greet = function(name) {
    return \`Привет, \${name}!\`;
};
console.log(greet("Мария")); // "Привет, Мария!"

// Использование с new
const Car = function(model, year) {
    this.model = model;
    this.year = year;
    this.isNew = year > 2020;
};
const myCar = new Car("Tesla", 2023);
console.log(myCar); // Car { model: "Tesla", year: 2023, isNew: true }`},{title:"Named Function Expression",content:`Function Expression, у которой есть имя.

 const/let/var имяПеременной = function имяФункции(параметры) { тело }`,addition:`• Обладает всеми свойствами Function Expression
• Имя доступно только внутри области видимости функции
• Позволяет организовывать рекурсивные вызовы`,examples:`const factorial = function calc(n) {
    return n <= 1 ? 1 : n * calc(n - 1);
};
console.log(factorial(5)); // 120
console.log(calc(5)); // Ошибка! calc не определена

// Использование с new
const Person = function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;
    // внутри доступно имя PersonConstructor
};
const person = new Person("Иван", 25);
console.log(person); // Person { name: "Иван", age: 25, canVote: true }`},{title:"Immediately Invoked Function Expressions",content:`Функция, выполняющаяся сразу после объявления.

(function(параметры) { тело })(аргументы); / ((параметры) => { тело })(аргументы);
(function(параметры) { тело }(аргументы)); / ((параметры) => { тело }(аргументы));`,addition:`• Создают изолированную область видимости
• Используются для избежания загрязнения глобальной области
• Выполняются один раз`,examples:`(function() {
    const privateVar = "Это приватно";
    console.log("Функция выполнилась сразу");
})();

(() => {
    console.log("Функция выполнилась сразу");
})();

// С параметрами
(function(global) {
    global.message = "Доступно глобально";
})(window);`},{title:"ShortArrow Functions Expression (Стрелочные функции)",content:`Современный синтаксис с использованием =>, появился в ES6.

const/let/var имяПеременной = (параметры) => { тело }`,addition:`• Не имеют собственного this (наследуют от внешнего контекста)
• Не имеют объекта arguments (наследуют от внешнего контекста)
• Не имеют собственного super
• Не имеют свойства prototype (не могут быть конструкторами, не работают с new)
• Компактный синтаксис с неявным return при отсутствии фигурных скобок`,examples:`// Один параметр и неявный return
const double = x => x * 2;
console.log(double(5)); // 10

// Возврат объекта требует круглых скобок
const createUser = (name, age) => ({ name, age });
console.log(createUser("Анна", 25)); // { name: "Анна", age: 25 }

// Нет своего this
const obj = {
    name: "Объект",
    regular: function() { console.log(this.name); },
    arrow: () => console.log(this.name)
};
obj.regular(); // "Объект"
obj.arrow(); // undefined (this взят из внешнего контекста)

// Нет arguments
const arrowArgs = () => console.log(arguments);
arrowArgs(1, 2, 3); // Ошибка - ReferenceError: arguments is not defined

// Отсутствие prototype
const arrowFunc = () => {};
console.log(arrowFunc.prototype); // undefined`},{title:"new Function",content:`Встроенный конструктор new Function(), позволяющий создавать функцию из строки кода.

let func = new Function([arg1, arg2, ...argN], functionBody);`,addition:`• Параметры передаются как строки (или одна строка с параметрами через запятую)
• Последний аргумент — тело функции в виде строки
• Замыкание сохраняется через свойство [[Environment]], ссылающееся на глобальное лексическое окружение
• Может вызываться без new: new Function === Function`,examples:`// Функция без параметров
const sayHi = new Function('return "Привет!";');
console.log(sayHi()); // "Привет!"

// Функция с параметрами
const sum = new Function('a', 'b', 'return a + b;');
console.log(sum(1, 2)); // 3

// Параметры через запятую в одной строке
const multiply = new Function('a, b', 'return a * b;');
console.log(multiply(3, 4)); // 12

// Вызов без new
const func = Function('return "работает без new";');
console.log(func()); // "работает без new"`},{title:"Higher-Order Functions (Функции высшего порядка)",content:`Функция высшего порядка — это функция, которая принимает другую функцию в качестве аргумента, возвращает функцию или делает и то, и другое.
'В JavaScript функции являются объектами первого класса (их можно передавать как аргументы, возвращать из других функций, присваивать переменным).`,addition:`• Функции высшего порядка позволяют абстрагироваться от конкретных операций, делая код более гибким и переиспользуемым
• Основа функционального программирования в JavaScript`,examples:`// Функция, возвращающая функцию (замыкание)
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // 10

// Функция, принимающая функцию как аргумент
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const add = (x, y) => x + y;
console.log(applyOperation(10, 5, add)); // 15

// Встроенная HOF: map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]`}]}},Dx={value:"javascript-introduction",name:"Введение",content:{introduction:"JavaScript — это высокоуровневый, динамически типизированный, слабо типизированный, однопоточный, встраиваемый, интерпретируемый и мультипарадигменный язык программирования.",sections:[{title:"Высокоуровневый",content:"JavaScript представляет высокий уровень абстракции (т.е. скрытия сложности низкоуровневых деталей) благодаря удобным конструкциям, таким как массивы, объекты, функции, классы и другим. Управление памятью осуществляется автоматически с помощью сборщика мусора (garbage collector), что освобождает разработчиков от необходимости ручного управления памятью.",addition:'Сборщик мусора использует алгоритм "Mark-and-Sweep": помечает все достижимые объекты, затем удаляет недостижимые.',examples:`// Пример работы сборщика мусора
function createUser() {
  const user = { name: "John", age: 30 }; // 1. Объект создается
  return user; // 2. Ссылка на объект возвращается
}

let userRef = createUser(); // 3. userRef ссылается на объект

userRef = null; // 4. Ссылка удаляется - объект становится недостижимым
// Теперь сборщик мусора может удалить объект {name: "John", age: 30}`},{title:"Динамически типизированный",content:"В JavaScript тип переменной определяется во время выполнения программы и может меняться в процессе работы. Не требуется явно указывать тип переменной при ее объявлении.",addition:"Это повышает гибкость, но делает код менее предсказуемым, так как некоторые ошибки обнаруживаются только во время выполнения.",examples:`let value = 42;
console.log(typeof value); // "number"

value = "Hello";
console.log(typeof value); // "string"

value = true;
console.log(typeof value); // "boolean"`},{title:"Слабо типизированный",content:"JavaScript позволяет выполнять автоматическое приведение типов. Это означает, что значения разных типов могут быть использованы вместе, и язык автоматически приводит их к подходящему типу.",addition:"Рекомендуется явно контролировать типы данных.",examples:`// Автоматическое приведение типов
console.log(5 + "5"); // "55" (число преобразуется в строку)
console.log("10" - 5); // 5 (строка преобразуется в число)
console.log(5 == "5"); // true (нестрогое сравнение с преобразованием)
console.log(5 === "5"); // false (строгое сравнение без преобразования)`},{title:"Однопоточный",content:"JavaScript использует однопоточную модель, где операции выполняются последовательно. Однако через механизм Event Loop и асинхронные API язык может обеспечить неблокирующую обработку параллельных операций.",addition:"Event Loop управляет выполнением через очереди: Task Queue (макрозадачи) и Microtask Queue (микрозадачи). Веб-воркеры (Web Workers) позволяют выполнять код в отдельных потоках, не нарушая основную однопоточную модель.",examples:`// Демонстрация порядка выполнения
console.log('1. Синхронный код');

setTimeout(() => console.log('4. Макрозадача'), 0);

Promise.resolve().then(() => console.log('3. Микрозадача'));

console.log('2. Синхронный код');

// Пример с веб-воркером (отдельный поток)
// main.js (основной поток):
const worker = new Worker('worker.js');
console.log('1. Отправляем данные воркеру');
worker.postMessage(5);

worker.onmessage = (e) => {
  console.log('3. Получили ответ от воркера:', e.data);
};
console.log('2. Основной поток продолжает работу');

// worker.js (отдельный поток):
onmessage = (e) => {
  console.log('  Воркер получил:', e.data);
  const result = e.data * 2;
  console.log('  Воркер отправил:', result);
  postMessage(result);
};

// Порядок вывода:
// 1. Отправляем данные воркеру
// 2. Основной поток продолжает работу
//   Воркер получил: 5
//   Воркер отправил: 10
// 3. Получили ответ от воркера: 10`},{title:"Встраиваемый",content:"JavaScript не существует в изоляции — он всегда выполняется внутри host-среды (браузер, Node.js). Среда предоставляет различные API (DOM, fetch, http) для взаимодействия с внешним миром, которых нет в самом языке. Сам код исполняется движком JavaScript (V8, SpiderMonkey), встроенным в эту среду.",addition:"Стандарт ECMAScript регламентирует базовые механизмы языка, а host-среда расширяет его возможностями для конкретной платформы. Это позволяет писать логику на одном языке и выполнять её в разнообразных экосистемах.",examples:`// В браузере
console.log(window); // объект глобального окна
console.log(document); // DOM API

// В Node.js
console.log(process); // объект процесса Node.js
console.log(__dirname); // путь к текущей директории

// API могут отличаться в зависимости от среды`},{title:"Интерпретируемый",content:"JavaScript код выполняется построчно, без предварительной компиляции в машинный код. Движок читает исходный код, преобразует его в промежуточное представление и выполняет. Современные движки используют JIT-компиляцию.",addition:"JIT-компиляция (Just-In-Time) — это современный подход, который сочетает преимущества интерпретации и компиляции: код сначала интерпретируется, а часто выполняемые фрагменты кода компилируются в машинный код для ускорения выполнения.",examples:`// Интерпретатор читает и выполняет код построчно
function calculate(a, b) {
  return a + b; // 1. Интерпретируется
}

const result = calculate(5, 3); // 2. Вызывается
console.log(result); // 3. Выводится

// После нескольких вызовов JIT-компилятор может оптимизировать функцию
// и скомпилировать её в машинный код для ускорения последующих вызовов`},{title:"Мультипарадигмальный",content:"JavaScript поддерживает несколько парадигм программирования: императивную (структурную), объектно-ориентированную (ООП) и функциональную (ФП).",addition:"Императивный подход — описание последовательности инструкций, явно указывающих, как выполнить задачу. ООП — организация кода вокруг объектов с поддержкой трёх основных принципов: инкапсуляции (сокрытие деталей реализации и контроль доступа через методы), наследования (создание иерархий для повторного использования кода) и полиморфизма (единый интерфейс для разных типов данных). Функциональный — организация кода вокруг функций как основных строительных блоков с поддержкой следующих принципов: неизменяемость данных (данные не изменяются, а создаются новые), чистые функции (результат зависит только от аргументов, без побочных эффектов), функции высшего порядка и декларативный стиль.",examples:`// Императивный стиль (как сделать)
let result = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    result.push(numbers[i]);
  }
}

// Функциональный стиль (что сделать)
const filtered = numbers.filter(n => n > 5);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// ООП: наследование
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} издает звук\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  // Полиморфизм: переопределение метода
  speak() {
    return \`\${this.name} лает\`;
  }
}

// ООП: инкапсуляция (приватное поле)
class BankAccount {
  #balance = 0; // приватное поле
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance; // контролируемый доступ
  }
}

// Полиморфизм в действии
const animals = [new Animal("Животное"), new Dog("Рекс", "овчарка")];
animals.forEach(animal => console.log(animal.speak()));
// Результат: "Животное издает звук", "Рекс лает"

// Прототипное наследование
const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;
console.log(rabbit.eats); // true (унаследовано)`}]}},Ax={value:"loops-and-iterations",name:"Циклы и итерации",content:{introduction:"Циклы позволяют выполнять блок кода многократно. В JavaScript есть 6 видов циклов для разных задач.",sections:[{title:"Цикл for",content:`Классический цикл с счётчиком. Используется, когда известно количество итераций.

for (инициализация; условие; шаг) { тело }`,addition:`• Инициализация выполняется один раз перед стартом
• Условие проверяется перед каждой итерацией
• Шаг выполняется после каждой итерации
• Любая часть может быть пропущена: for(;;) — бесконечный цикл
`,examples:`for (let i = 0; i < 5; i++) console.log(i); // 0,1,2,3,4
for (let i = 0; i < 10; i+=2) console.log(i); // 0,2,4,6,8
for (let i = 5; i > 0; i--) console.log(i); // 5,4,3,2,1`},{title:"Цикл while",content:`Выполняется пока условие истинно. Условие проверяется ДО каждой итерации.

while (условие) { тело }`,addition:`Если условие ложно с самого начала — тело не выполнится ни разу.
Важно изменять переменные в условии, иначе цикл станет бесконечным.`,examples:`let i = 0;
while (i < 5) { console.log(i); i++; } // 0,1,2,3,4

let input = "";
while (input !== "stop") { input = prompt("Команда:"); }`},{title:"Цикл do...while",content:`Выполняется пока условие истинно. Условие проверяется после каждой итерации.

do { тело } while (условие);`,addition:`Тело выполняется минимум один раз, даже если условие ложно.
Точка с запятой после условия обязательна.`,examples:`let i = 0;
do { console.log(i); i++; } while (i < 5); // 0,1,2,3,4

let password;
do { password = prompt("Пароль:"); } while (password !== "secret");`},{title:"Цикл for...in",content:`Перебирает ключи (имена свойств) объекта. Включая унаследованные перечисляемые свойства.

for (ключ in объект) { тело }`,addition:`• Для массивов НЕ рекомендуется (индексы возвращаются как строки)
• Порядок перебора не гарантирован
• Свойства, чьи ключи – символы, не перебираются`,examples:`const user = { name: "Иван", age: 30 };
for (const key in user) console.log(key, user[key]); // name Иван, age 30

// С проверкой на собственные свойства
for (const key in user) if (user.hasOwnProperty(key)) console.log(key); // name, age`},{title:"Цикл for...of",content:`Перебирает значения итерируемых объектов.

for (значение of итерируемыйОбъект) { тело }`,addition:`• Не работает с обычными объектами по умолчанию (они не итерируемы)
• Объект можно сделать итерируемым, добавив метод [Symbol.iterator]
• В отличие от for...in — перебирает значения, а не ключи`,examples:`const arr = [10, 20, 30];
for (const val of arr) console.log(val); // 10,20,30

const str = "Hello";
for (const char of str) console.log(char); // H,e,l,l,o

const map = new Map([["a",1], ["b",2]]);
for (const [k,v] of map) console.log(k, v); // a 1, b 2`},{title:"Асинхронный цикл for await...of",content:`Специальная версия цикла for...of для работы с асинхронными итерируемыми объектами.

for await (переменная of асинхронныйИтерируемыйОбъект) { тело }`,addition:`• Работает ТОЛЬКО внутри асинхронных функций (async function) или на верхнем уровне модулей
• Автоматически ожидает (await) каждый элемент перед выполнением тела цикла
• Поддерживает break, continue и метки как обычные циклы
• Может перебирать как асинхронные, так и синхронные итерируемые объекты`,examples:`// Пример: получение данных с публичного API
async function fetchFirstPhotos(albumId, limit = 3) {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/albums/\${albumId}/photos\`);
  const photos = await response.json();
  
  let count = 0;
  for await (const photo of photos) {
    if (count >= limit) break;
    console.log(\`Фото \${count + 1}:\`, photo.title);
    console.log(\`  URL: \${photo.thumbnailUrl}\\n\`);
    count++;
  }
}

// Запуск (в консоли браузера или Node.js с поддержкой fetch)
fetchFirstPhotos(1);`},{title:"break — дериктива для прерывания цикла",content:"Немедленно завершает текущий цикл. Управление передаётся за тело цикла.",addition:"Может использоваться с метками для выхода из вложенных циклов.",examples:`for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0,1,2,3,4
}

// С меткой
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j); // 0 0, 0 1, 0 2, 1 0
  }
}`},{title:"continue — дериктива для пропуска итерации",content:"Пропускает текущую итерацию и переходит к следующей.",addition:`В for сначала выполняется шаг, затем проверка условия.
Может использоваться с метками.`,examples:`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0,1,3,4
}

// С меткой
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer;
    console.log(i, j); // 0 0, 1 0, 2 0
  }
}`},{title:"Метки",content:"Позволяют дать имя циклу или блоку для использования с break/continue.",addition:"Используются редко, но полезны для выхода из глубоко вложенных циклов.",examples:`myBlock: {
  console.log("До break");
  break myBlock;
  console.log("Не выполнится");
}

loop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue loop;
    console.log(i, j); // 0 0, 1 0, 2 0
  }
}`}]}},Cx={value:"numeric-systems",name:"Системы счисления и числовые литералы",content:{introduction:"В JavaScript поддерживаются различные системы счисления для записи чисел: двоичная, восьмеричная и шестнадцатеричная. Это удобно для работы с битовыми операциями, цветами и другими низкоуровневыми задачами.",sections:[{title:"Двоичная система (Binary)",content:"Префикс 0b (или 0B) — двоичная система счисления",addition:"Двоичная система использует только цифры 0 и 1. Каждая позиция соответствует степени двойки.",examples:`const a = 0b1010; // 10 в десятичной (1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10)
const b = 0b1111; // 15 в десятичной (8 + 4 + 2 + 1 = 15)
const c = 0b10000000; // 128 в десятичной (2⁷)

console.log(a); // 10
console.log(b); // 15
console.log(c); // 128`},{title:"Восьмеричная система (Octal)",content:"Префикс 0o (или 0O) — восьмеричная система счисления",addition:"Восьмеричная система использует цифры от 0 до 7. Каждая позиция соответствует степени 8.",examples:`const a = 0o17; // 15 в десятичной (1×8¹ + 7×8⁰ = 8 + 7 = 15)
const b = 0o377; // 255 в десятичной (3×8² + 7×8¹ + 7×8⁰ = 192 + 56 + 7 = 255)
const c = 0o1000; // 512 в десятичной (1×8³)

console.log(a); // 15
console.log(b); // 255
console.log(c); // 512`},{title:"Шестнадцатеричная система (Hexadecimal)",content:"Префикс 0x (или 0X) — шестнадцатеричная система счисления",addition:"Шестнадцатеричная система использует цифры 0-9 и буквы A-F (a-f) для значений 10-15. Каждая позиция соответствует степени 16.",examples:`const a = 0x1A; // 26 в десятичной (1×16¹ + 10×16⁰ = 16 + 10 = 26)
const b = 0xFF; // 255 в десятичной (15×16¹ + 15×16⁰ = 240 + 15 = 255)
const c = 0x10; // 16 в десятичной (1×16¹ + 0×16⁰)

console.log(a); // 26
console.log(b); // 255
console.log(c); // 16`},{title:"Экспоненциальная запись (Scientific notation)",content:"e (или E) — экспоненциальная запись числа (научный формат)",addition:"Позволяет записывать очень большие или очень маленькие числа в компактной форме. Формат: [число]e[показатель] означает умножение числа на 10 в степени показателя.",examples:`const a = 5e3;   // 5 × 10³ = 5000
const b = 5e-3;  // 5 × 10⁻³ = 0.005
const c = 1.5e6; // 1.5 × 10⁶ = 1 500 000
const d = 3.2e-7; // 0.00000032

console.log(a); // 5000
console.log(b); // 0.005
console.log(c); // 1500000
console.log(d); // 3.2e-7 (при выводе может остаться экспоненциальная форма)

// Сравнение
console.log(1000000 === 1e6); // true
console.log(0.001 === 1e-3); // true`},{title:"Разделители разрядов (Numeric separators)",content:"_ (нижнее подчеркивание) — визуальное разделение разрядов",addition:"Начиная с ES2021, в числах можно использовать символ подчеркивания для улучшения читаемости длинных чисел. Разделители не влияют на значение числа и могут использоваться с любыми системами счисления.",examples:`// Разделение тысяч
const billion = 1_000_000_000; // 1 миллиард
const million = 1_000_000;     // 1 миллион
const thousand = 1_000;        // 1 тысяча

// Дробная часть
const pi = 3.1415_9265_3589; // π с разделением

// Двоичная система
const binary = 0b1010_1111_0011; // разделение байтов

// Шестнадцатеричная система
const hex = 0xFF_FF_FF_FF; // разделение байтов

// Восьмеричная система
const octal = 0o777_777; // разделение групп

console.log(billion); // 1000000000
console.log(pi);      // 3.141592653589`},{title:"Преобразование систем счисления",content:"Методы toString(radix) и parseInt(string, radix)",addition:"Для преобразования чисел между системами счисления используются методы: Number.prototype.toString(radix) для перевода в нужную систему и parseInt(string, radix) для парсинга строки с указанием системы.",examples:`// Перевод десятичного числа в другую систему
const num = 255;
console.log(num.toString(2));  // "11111111" (двоичная)
console.log(num.toString(8));  // "377" (восьмеричная)
console.log(num.toString(16)); // "ff" (шестнадцатеричная)

// Парсинг строки с указанием системы
console.log(parseInt("1010", 2));  // 10 (двоичная → десятичная)
console.log(parseInt("377", 8));   // 255 (восьмеричная → десятичная)
console.log(parseInt("ff", 16));   // 255 (шестнадцатеричная → десятичная)

// Использование унарного плюса
console.log(+0b1010); // 10
console.log(+0xFF);   // 255`}]}},_x={value:"object-basics",name:"Основы объектов",content:{introduction:"Объекты в JavaScript — это ассоциативные массивы с дополнительными возможностями. Они позволяют хранить коллекции данных и сложные структуры, где каждое значение имеет уникальный ключ (имя свойства).",sections:[{title:"Создание объектов: литерал, конструктор и Object.create()",content:`Три способа создания объектов:
- Литерал: const obj = { ключ: значение }
- Конструктор: const obj = new Object()
- Метод: const obj = Object.create(прототип)`,addition:"Литерал объекта короче, читаемее и быстрее, чем конструктор Object, потому что при литерале объект создается сразу в виде хеш-таблицы, а конструктор вызывает функцию. Object.create() используется для явного указания прототипа.",examples:`// Литерал объекта (рекомендуется)
const user = {
  name: "Иван",
  age: 30,
  isAdmin: true
};

// Конструктор Object (эквивалентно)
const user2 = new Object();
user2.name = "Иван";
user2.age = 30;

// Object.create() с явным прототипом
const animal = {
  speak() {
    console.log(\`\${this.name} издает звук\`);
  }
};

const dog = Object.create(animal);
dog.name = "Бобик";
dog.speak(); // "Бобик издает звук"`},{title:"Свойства объекта: чтение, запись, удаление",content:`Свойства объекта — это пары "ключ: значение". Ключи (имена свойств) всегда строки или символы, значения могут быть любого типа.

Доступ к свойствам:
• Через точку: obj.property
• Квадратные скобки: obj["property"]

Удаление свойств: delete obj.property`,addition:"При использовании чтения через точку имя свойства должно быть валидным идентификатором (буквы, цифры, $, _, не может начинаться с цифры). Квадратные скобки позволяют использовать динамические ключи: ключи с пробелами, спецсимволами и числа.",examples:`const user = {
  name: "Иван",
  age: 30
};

// Чтение свойства
console.log(user.name); // "Иван"
console.log(user["age"]); // 30

// Запись свойства
user.age = 31;
user["city"] = "Москва";

// Динамический ключ
const key = "name";
console.log(user[key]); // "Иван"

// Ключи с пробелами и спецсимволами
const obj = {
  "first-name": "Иван",
  "age years": 30
};
console.log(obj["first-name"]); // "Иван"
// obj.first-name — ошибка!

// Удаление свойства
delete user.age;
console.log(user.age); // undefined`},{title:"Вычисляемые свойства",content:`Вычисляемые свойства позволяют использовать выражение в квадратных скобках как ключ свойства (динамическое создание).

const obj = { [выражение]: значение }`,addition:"Выражение в квадратных скобках вычисляется и результат преобразуется в строку (если это не Symbol).",examples:`// Вычисляемое свойство при создании
const key = "id";
const obj = {
  [key]: 123,
  [\`\${key}Name\`]: "Пользователь"
};
console.log(obj.id); // 123
console.log(obj.idName); // "Пользователь"

// Symbol как вычисляемое свойство
const id = Symbol("id");
const entity = {
  [id]: 42,
  name: "Объект"
};
console.log(entity[id]); // 42`},{title:"Порядок свойств в объекте",content:`Свойства упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания.
Термин «целочисленное свойство» означает строку, которая может быть преобразована в целое число и обратно без изменений.
Порядок перечисления свойств:
1. Сначала целочисленные ключи (сортируются по возрастанию)
2. Затем строковые ключи (в порядке добавления)
3. В конце символьные ключи (в порядке добавления)`,addition:"Нет никаких ограничений к именам свойств. Ключи автоматически преобразуются в строки, за исключением Symbol — они используются как есть.",examples:`// Числа как ключи (преобразуются в строки)
const obj = {
  1: "один",
  2: "два"
};
console.log(obj[1]); // "один"
console.log(obj["1"]); // "один" (эквивалентно)

// Спецсимволы в имени (только квадратные скобки)
const special = {
  "first-name": "Иван",
  "email@domain": "test@example.com"
};
console.log(special["first-name"]); // "Иван"

// Целочисленные ключи сортируются по возрастанию
const ordered = {
  3: "три",
  1: "один",
  2: "два"
};
console.log(Object.keys(ordered)); // ["1", "2", "3"] (отсортировано!)

// Нецелочисленные ключи — в порядке создания
const notOrdered = {
  b: "b",
  a: "a",
  c: "c"
};
console.log(Object.keys(notOrdered)); // ["b", "a", "c"] (порядок создания)`}]}},Lx={value:"object-methods",name:"Методы объектов и this",content:{introduction:"Метод — это функция, которая является свойством объекта. Методы позволяют объектам выполнять действия и взаимодействовать с их данными. Ключевое слово this предоставляет доступ к свойствам объекта внутри метода.",sections:[{title:"Синтаксис объявления методов",content:`Существует два способа объявления методов:
1. Обычная запись: method: function() { ... }
2. Сокращённая запись (ES6): method() { ... } (предпочтителена)`,addition:"Оба способа создают функцию со своим this, который определяется при вызове.",examples:`// Обычная запись
const user = {
  sayHi: function() {
    console.log("Привет");
  }
};

// Сокращённая запись
const user2 = {
  sayHi() {
    console.log("Привет");
  }
};

user.sayHi(); // "Привет"
user2.sayHi(); // "Привет"`},{title:"Ключевое слово this",content:`this — это контекст вызова функции. Значение this определяется в момент вызова метода, а не объявления.

Основные правила:
this — это объект «перед точкой», через который вызван метод.
Вызов без объекта: this === undefined
Если обратиться к this в глобальной области видимости, оно будет привязано к объекту window в браузере. Однако если обратиться к this в строгом режиме, то в this будет записано undefined.`,addition:"this не является фиксированным — одна и та же функция может быть методом разных объектов, и каждый раз this будет ссылаться на тот объект, через который вызван метод.",examples:`// Одна функция — разные this
const admin = { name: "Админ" };
const guest = { name: "Гость" };

function sayName() {
  console.log(this.name);
}

admin.f = sayName;
guest.f = sayName;

admin.f(); // "Админ" (this === admin)
guest.f(); // "Гость" (this === guest)

// Вызов без объекта — нестрогий режим
function showThis() {
  console.log(this); // window (в браузере)
}
showThis();

// Вызов без объекта — строгий режим
"use strict";
function showThisStrict() {
  console.log(this); // undefined
}
showThisStrict();`},{title:"Потеря this при присваивании",content:"При присваивании метода переменной или передаче его как колбэка this теряется, так как функция вызывается без контекста.",addition:`Для сохранения this используются:
• bind() — создаёт функцию с зафиксированным this
• Стрелочные функции — наследуют this из внешнего контекста
• Явная передача контекста в колбэки`,examples:`const user = {
  name: "Иван",
  getName() {
    return this.name;
  }
};

// Потеря this
const fn = user.getName;
console.log(fn()); // undefined (this потерян)

// Решение через bind
const boundFn = user.getName.bind(user);
console.log(boundFn()); // "Иван"

// Решение через стрелочную функцию
const arrowFn = () => user.getName();
console.log(arrowFn()); // "Иван"`},{title:"This в стрелочных функциях",content:`Стрелочные функции не имеют собственного this. Они наследуют его из внешней (лексической) области видимости.

Это означает, что this в стрелочной функции берётся из того места, где она объявлена, а не где вызвана.`,addition:"Стрелочные функции удобны для сохранения контекста в колбэках (forEach, map, setTimeout), но не подходят как методы объектов.",examples:`// Стрелочная функция как метод — this не работает
const user = {
  name: "Иван",
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

user.regular(); // "Иван"
user.arrow(); // undefined

// Стрелочная функция внутри метода — наследует this метода
const user2 = {
  name: "Иван",
  sayHi() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};
user2.sayHi(); // "Иван"`}]}},Ux={value:"object-to-primitive",name:"Преобразование объектов в примитивы",content:{introduction:"Объекты в JavaScript автоматически преобразуются в примитивные значения при определённых операциях.",sections:[{title:"Автоматическое преобразование объектов (хинты)",content:`JavaScript не позволяет выполнять операции над объектами напрямую. При попытке выполнить операции, они автоматически преобразуются в примитивы (строку или число).
Преобразования к boolean не существует! Все объекты в логическом контексте всегда true.

JavaScript использует три типа хинтов (hints) для выбора способа преобразования:
1. string — когда ожидается строка:
• String(obj)
• alert(obj)
• Шаблонные строки: \`\${obj}\`
• Использование объекта в качестве ключа: anotherObj[obj] = 123
• Конкатенация: obj + "text"
2. number — когда ожидается число:
• Number(obj)
• Математические операции: obj1 (-, *, /) obj2
• Унарный плюс: +obj
• Сравнения: obj1 (>, <, <=, >=) obj2
3. default — когда допустимы оба типа:
• Бинарный плюс: obj + obj2
• Нестрогое равенство/неравенство: obj (==, !=) 5`,addition:`Хинт определяется контекстом операции. JavaScript сам решает, какую подсказку использовать.
По умолчанию у объекта нет методов для преобразования в число, поэтому математические операции возвращают NaN.`,examples:`// Хинт "string"
const user = { name: "Alice" };
console.log(String(user)); // "[object Object]"
console.log(\`Hello \${user}\`); // "Hello [object Object]"
const key = { id: 1 };
const obj = {};
obj[key] = "value";
console.log(obj["[object Object]"]); // "value"

// Хинт "number"
const num = { value: 10 };
console.log(Number(num)); // NaN
console.log(+num); // NaN
console.log(num * 2); // NaN
console.log(num > 5); // false

// Хинт "default"
const obj2 = { value: 5 };
console.log(obj2 == 5); // false
console.log(obj2 + 10); // "[object Object]10"`},{title:"Алгоритмы преобразования: Prefer-String, Prefer-Number, No-Preference",content:`При преобразовании объекта в примитив JavaScript следует определённому алгоритму, который определяет порядок вызова методов toString() и valueOf().
Существует три алгоритма (preferences), которые определяют, какой метод вызывается первым:
1. Prefer-String (предпочтение строке)
Используется при хинте "string":
• Сначала вызывается метод toString()
• Если toString() возвращает примитив — используется он
• Если toString() возвращает объект — вызывается valueOf()
• Если valueOf() возвращает примитив — используется он
• Если оба метода вернули объект — ошибка TypeError
2. Prefer-Number (предпочтение числу)
Используется при хинте "number":
• Сначала вызывается метод valueOf()
• Если valueOf() возвращает примитив — используется он
• Если valueOf() возвращает объект — вызывается toString()
• Если toString() возвращает примитив — используется он
• Если оба метода вернули объект — ошибка TypeError
3. No-Preference (нет предпочтения)
Используется при хинте "default":
• Для объектов Date: prefer-string (так как даты чаще преобразуются в строку)
• Для остальных объектов: prefer-number (исторически сложилось)
• То есть сначала вызывается valueOf(), затем toString() (кроме Date)`,addition:"Эти алгоритмы работают только когда у объекта нет метода Symbol.toPrimitive. Если Symbol.toPrimitive определён, он имеет наивысший приоритет и полностью заменяет стандартный алгоритм.",examples:`// Пример Prefer-String (хинт "string")
const stringPrefObj = {
  toString() { return "строка"; },
  valueOf() { return 42; }
};
console.log(String(stringPrefObj)); // "строка" (вызван toString)

// Пример Prefer-Number (хинт "number")
const numberPrefObj = {
  toString() { return "100"; },
  valueOf() { return 42; }
};
console.log(+numberPrefObj); // 42 (вызван valueOf)

// Пример No-Preference (хинт "default")
const noPrefObj = {
  toString() { return "100"; },
  valueOf() { return 42; }
};
console.log(noPrefObj + 10); // 52 (valueOf имеет приоритет)

// Особый случай: объект Date
const date = new Date();
date.toString = () => "строка даты";
date.valueOf = () => Date.now();
console.log(String(date)); // "строка даты" (toString)
console.log(+date); // число (valueOf)
console.log(date + 10); // "строка даты10" (для Date работает prefer-string!)`},{title:"Symbol.toPrimitive",content:`Symbol.toPrimitive — это встроенный символ, который позволяет настроить преобразование объекта в примитив. Если этот метод существует, он вызывается для всех хинтов и имеет наивысший приоритет.

obj[Symbol.toPrimitive](hint)

Параметр hint — строка с подсказкой ("string", "number", "default").

Метод должен возвращать примитивное значение. Если вернуть объект, будет ошибка TypeError.`,addition:"Это предпочтительный способ настройки преобразования в современном JavaScript. Если Symbol.toPrimitive не определён, используются toString() и valueOf().",examples:`const user = {
  name: "Alice",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.name;
    } else if (hint === "number") {
      return this.money;
    } else {
      // hint === "default"
      return this.money;
    }
  }
};

console.log(String(user)); // "Alice" (hint: "string")
console.log(+user); // 1000 (hint: "number")
console.log(user == 1000); // true (hint: "default")
console.log(user + 500); // 1500 (hint: "default")`},{title:"toString() и valueOf() — устаревший способ",content:`До появления Symbol.toPrimitive использовались методы toString() и valueOf(). Они всё ещё работают для совместимости.
Приоритет вызова:
1. Если есть Symbol.toPrimitive — вызывается только он
2. Если нет Symbol.toPrimitive:
   • Хинт "string": toString() → valueOf()
   • Хинт "number"/"default": valueOf() → toString()

valueOf() должен возвращать примитив. Если возвращает объект — игнорируется и вызывается toString().`,addition:'toString() по умолчанию возвращает "[object Object]". valueOf() по умолчанию возвращает сам объект.',examples:`// Переопределение toString()
const user = {
  name: "Alice",
  toString() {
    return this.name;
  }
};
console.log(String(user)); // "Alice"
console.log(user + " работает"); // "Alice работает"

// Переопределение valueOf()
const numberObj = {
  value: 100,
  valueOf() {
    return this.value;
  }
};
console.log(+numberObj); // 100
console.log(numberObj + 50); // 150

// Оба метода
const obj = {
  toString() { return "str"; },
  valueOf() { return 42; }
};
console.log(obj + 10); // 52 (valueOf имеет приоритет для "default")
console.log(String(obj)); // "str" (toString для "string")`}]}},kx={value:"operators-special-values",name:"Операторы, специальные значения и escape-последовательности",content:{introduction:"JavaScript предоставляет различные операторы для работы с данными и специальные значения, которые имеют уникальное поведение.",sections:[{title:"Арифметические операторы",content:`+ — Сложение
- — Вычитание
* — Умножение
/ — Деление
% — Остаток от деления
** — Возведение в степень
++ — Инкремент
-- — Декремент`,addition:`Операторы делятся на унарные (работают с одним аргументом) и бинарные (работают с двумя аргументами). Инкремент и декремент существуют в двух формах:
Префиксная форма (++x, --x):
• Оператор стоит перед переменной
• Сначала изменяет значение переменной
• Затем возвращает новое значение
Постфиксная форма (x++, x--):
• Оператор стоит после переменной
• Сначала возвращает текущее значение переменной
Затем изменяет значение переменной
`,examples:`// Бинарный плюс - оператор сложения (+)
console.log(10 + 5); // 15
console.log("Hello" + " " + "Development"); // "Hello Development"
// Унарный плюс - оператор преобразования в число (+)
console.log(+"42"); // 42 (преобразование строки в число)
console.log(+true); // 1 (преобразование булевого значения в число)
console.log(+false); // 0

// Бинарный минус - оператор вычитания (-)
console.log(10 - 5); // 5
// Унарный минус - оператор отрицания (-)
console.log(-10); // -10

// Умножение (*)
console.log(10 * 5); // 50
console.log(7.5 * 3.2); // 24.0

// Деление (/)
console.log(10 / 5); // 2
console.log(7 / 2); // 3.5

// Остаток от деления (%)
console.log(10 % 3); // 1

// Возведение в степень (**)
console.log(2 ** 3); // 8

// Инкремент (++)
let count = 5;
console.log(count++); // 5 (постфиксная форма: возвращает старое значение)
console.log(count);   // 6 (значение увеличено после возврата)
console.log(++count) // 7 (префиксная форма: сначала увеличивает, потом возвращает)

// Декремент (--)
let counter = 10;
console.log(counter--); // 10 (постфиксная форма: возвращает старое значение)
console.log(counter);   // 9 (значение уменьшено после возврата)
console.log(--counter); // 8 (префиксная форма: сначала уменьшает, потом возвращает)`},{title:"Арифметические операторы присваивания",content:`= — Простое присваивание
+= — Сложение с присваиванием
-= — Вычитание с присваиванием
*= — Умножение с присваиванием
/= — Деление с присваиванием
%= — Остаток от деления с присваиванием
**= — Возведение в степень с присваиванием`,addition:"Составные арифметические операторы сокращают запись: a += b эквивалентно a = a + b и т.д.",examples:`// Простое присваивание (=)
let a = 10;
console.log(a); // 10

// Сложение с присваиванием (+=)
a += 5; // a = a + 5
console.log(a); // 15

// Вычитание с присваиванием (-=)
a -= 3; // a = a - 3
console.log(a); // 12

// Умножение с присваиванием (*=)
a *= 2; // a = a * 2
console.log(a); // 24

// Деление с присваиванием (/=)
a /= 4; // a = a / 4
console.log(a); // 6

// Остаток от деления с присваиванием (%=)
a %= 4; // a = a % 4
console.log(a); // 2

// Возведение в степень с присваиванием (**=)
a **= 3; // a = a ** 3
console.log(a); // 8`},{title:"Логические операторы присваивания",content:`&&= — Логическое присваивание И
||= — Логическое присваивание ИЛИ
??= — Нулевое присваивание`,addition:`Оператор &&= принимает два аргумента, первый аргумент конвертируется в логическое значение и если оно является истинным, то первому аргументу присваивается значение второго аргумента.
Оператор ||= принимает два аргумента, первый аргумент конвертируется в логическое значение и если оно является ложным, то первому аргументу присваивается значение второго аргумента.
Оператор ??= присвоит первому аргументу значение второго аргумента только в том случае, если первый аргумент не определен (null/undefined).

Различия || и ?? в том, что или возвращает первое истинное значение, а ?? первое определенное значение.`,examples:`// Логическое И с присваиванием (&&=)
let x = 5;
x &&= 10; // x = x && 10
console.log(x); // 10

let y = 0;
y &&= 10; // y = y && 10
console.log(y); // 0

// Логическое ИЛИ с присваиванием (||=)
let w = 5;
w ||= 10; // w = w || 10
console.log(w); // 5

let userName = "";
userName ||= "Гость"; // "" || "Гость"
console.log(userName); // "Гость"

// Нулевое присваивание (??=)
let n = null;
n ??= 100; // n = null ?? 100
console.log(n); // 100

let m = 0;
m ??= 100; // m = 0 ?? 100
console.log(m); // 0`},{title:"Операторы сравнения",content:`== — Равенство (с приведением типов)
=== — Строгое равенство (без приведения типов)
!= — Неравенство (с приведением типов)
!== — Строгое неравенство (без приведения типов)
> — Больше
< — Меньше
>= — Больше или равно
<= — Меньше или равно`,addition:`== выполняет приведение типов перед сравнением.
=== проверяет тип и значение без приведения.`,examples:`console.log(5 == "5"); // true (приведение типов)
console.log(5 === "5"); // false (разные типы)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false`},{title:"Логические операторы",content:`&& — И
|| — ИЛИ
! — НЕ
!! — Двойное НЕ
?? — Оператор нулевого слияния`,addition:`Оператор && возвращает первый ложный аргумент или последний, если все истинные.
Оператор || возвращает первый истинный аргумент или последний, если все ложные.
Оператор ! применяется к одному аргументу, приводит его к логическому типу, после чего возвращает противоположное значение. Приоритет оператора ! является наивысшим из всех логических операторов.
Оператор !! преобразует значение в boolean тип.
Оператор ?? возвращает первый аргумент, если он определен (не null/undefined), иначе второй.`,examples:`// И (&&)
console.log(true && false); // false
console.log(5 && 0 && 10); // 0 (первый ложный)
console.log(5 && 10); // 10 (последний истинный)

// ИЛИ (||)
console.log(true || false); // true
console.log(null || 0 || "Hello"); // "Hello" (первый истинный)
console.log(null || undefined || false); // false (последний ложный)

// НЕ (!)
console.log(!true); // false
console.log(!0); // true (0 приводится к false)
console.log(!"text"); // false (непустая строка → true → !true = false)
console.log(!""); // true (пустая строка → false → !false = true)
console.log(!null); // true (null → false → !false = true)

// Двойное НЕ (!!) — приведение к boolean типу
console.log(!!"text"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true
console.log(!!null); // false
console.log(!!{}); // true (любой объект)

// Оператор нулевого слияния (??)
console.log(undefined ?? "fallback"); // "fallback"
console.log(0 ?? "default"); // 0 (0 — не null/undefined)
console.log("значение" ?? "default"); // "значение"`},{title:"Побитовые операторы",content:`& — Побитовое И
| — Побитовое ИЛИ
^ — Исключающее ИЛИ
~ — Побитовое НЕ
<< — Сдвиг влево
>> — Сдвиг вправо с сохранением знака
>>> — Беззнаковый сдвиг вправо`,addition:`Работают с 32-битными целыми числами. Результат всегда число:
& — Возвращает 1 в каждой битовой позиции, где оба соответствующих бита аргументов равны 1
| — Возвращает 1 в каждой битовой позиции, где хотя бы один из соответствующих битов аргументов равен 1
^ — Возвращает 1 в каждой битовой позиции, где только один из соответствующих битов аргументов равен 1
~ — Инвертирует все биты аргумента (меняет 0 на 1 и 1 на 0)
<< — Сдвигает биты первого аргумента влево на количество позиций, указанное во втором аргументе
>> — Сдвигает биты первого аргумента вправо с сохранением знака (левый бит заполняется значением знакового бита)
>>> — Сдвигает биты первого аргумента вправо, заполняя левые биты нулями (беззнаковый сдвиг)`,examples:`// Побитовое И (&)
console.log(5 & 1); // 1 (0101 & 0001 = 0001)

// Побитовое ИЛИ (|)
console.log(5 | 1); // 5 (0101 | 0001 = 0101)

// Исключающее ИЛИ (^)
console.log(5 ^ 1); // 4 (0101 ^ 0001 = 0100)

// Побитовое НЕ (~)
console.log(~5); // -6 (инверсия битов)

// Сдвиг влево (<<)
console.log(5 << 1); // 10 (сдвиг влево на 1 бит: 0101 → 1010)

// Сдвиг вправо (>>)
console.log(5 >> 1); // 2 (сдвиг вправо на 1 бит: 0101 → 0010)

// Беззнаковый сдвиг вправо (>>>)
console.log(-5 >>> 1); // 2147483645 (заполняет нулями)`},{title:"Тернарный оператор",content:"? : — Единственный оператор с тремя аргументами: условие ? значение1 : значение2",addition:"Возвращает значение1 если условие истинно, иначе значение2. Используется для компактной условной логики вместо if-else в выражениях.",examples:`const age = 18;
const status = age >= 18 ? 'взрослый' : 'ребенок';
console.log(status); // 'взрослый'`},{title:"Оператор опциональной цепочки",content:"?. — безопасно получает свойство или вызывает метод",addition:`Возвращает undefined если левая часть равна null или undefined, вместо выбрасывания ошибки. Работает с:
• Свойствами объектов: obj?.prop
• Вызовами методов: obj.method?.()
• Элементами массивов: arr?.[index]
• Динамическими свойствами: obj?.[expression]`,examples:`const user = {
  name: 'Иван',
  address: {
    city: 'Москва'
  }
};

// Безопасное получение свойства
console.log(user?.address?.city); // 'Москва'
console.log(user?.contacts?.phone); // undefined (без ошибки)`},{title:"Оператор typeof",content:"typeof — возвращает тип значения",addition:"Возвращает строку с типом аргумента. Возможные значения: 'undefined', 'boolean', 'number', 'string', 'bigint', 'symbol', 'object', 'function'. Для null возвращает 'object' (историческая особенность). Оператор имеет две синтаксические формы: typeof x и typeof(x).",examples:`console.log(typeof 42); // 'number'
console.log(typeof 'hello'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (особенность!)
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'`},{title:"Оператор instanceof",content:"instanceof — проверяет принадлежность объекта к классу",addition:"Проверяет, есть ли в цепочке прототипов объекта прототип конструктора.",examples:`class Car {}
const myCar = new Car();

console.log(myCar instanceof Car); // true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log('hello' instanceof String); // false (примитив)
console.log(new String('hello') instanceof String); // true`},{title:"Оператор запятая",content:", — выполняет несколько выражений, возвращает значение последнего",addition:"Используется для выполнения нескольких операций в одном выражении.",examples:`let a = (1, 2, 3, 4);
console.log(a); // 4 (возвращает последнее значение)

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j); // 0 10, 1 9, 2 8, 3 7, 4 6
}`},{title:"Операторы spread и rest",content:"... — остаточные параметры (rest) и оператор расширения (spread)",addition:`Остаточные параметры — это оператор, который используется в определении функции для сбора всех неуказанных аргументов в массив и также в деструктуризации для получения неуказанных элементов.
Оператор расширения — это оператор, который используется для извлечения элементов из итерируемого объекта.`,examples:`// Оператор расширения (spread) - объединение массивов
const firstPart = [1, 2, 3];
const secondPart = [4, 5, 6];
const combined = [...firstPart, ...secondPart];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Остаточные параметры (rest) - сбор аргументов в функцию
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
const result = multiply(2, 1, 3, 5, 7);
console.log(result); // [2, 6, 10, 14]`},{title:"Оператор void",content:"void — вычисляет выражение и возвращает undefined",addition:"Используется для выполнения выражений, результат которых не нужен.",examples:`const result = void console.log("Сообщение") // "Сообщение";
console.log(result); // undefined`},{title:"Оператор delete",content:"delete — удаляет свойство объекта",addition:"Удаляет свойство объекта или элемент массива. Возвращает true если удаление успешно, иначе false.",examples:`// Удаление пользовательского свойства объекта
const user = { name: 'Иван', age: 30 };
console.log(delete user.age); // true
console.log(user); // { name: 'Иван' }

// Удаление несуществующего свойства
console.log(delete user.city); // true (свойства не было)

// Удаление элемента массива
const numbers = [1, 2, 3, 4, 5];
console.log(delete numbers[2]); // true
console.log(numbers); // [1, 2, null, 4, 5]
console.log(numbers[2]); // undefined`},{title:"Оператор in",content:"in — проверяет наличие свойства в объекте",addition:"Возвращает true, если свойство существует в объекте или его цепочке прототипов.",examples:`const car = { brand: "Toyota", year: 2020 };
const hasBrand = "brand" in car;
const hasColor = "color" in car;
console.log(hasBrand); // true
console.log(hasColor); // false`},{title:"Оператор new",content:"new — создает экземпляр конструктора",addition:"Используется для создания экземпляров объектов на основе конструкторов.",examples:`function User(name) {
    this.name = name;
}

const admin = new User("Администратор");
console.log(admin.name); // "Администратор"`},{title:"Специальное значение NaN",content:"NaN — Not-a-Number (не число)",addition:`Специальное значение, которое означает вычислительную ошибку. Возникает при недопустимых математических операциях:
• Деление 0/0, Infinity/Infinity
• Умножение Infinity на 0
• Вычитание Infinity из Infinity
• Приведение к числу нечисловых строк
• Math.sqrt(-1) и другие недопустимые операции`,examples:`console.log(0 / 0); // NaN
console.log('hello' * 2); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt('abc')); // NaN

// Особенности NaN
console.log(NaN === NaN); // false (единственное значение, не равное себе)
console.log(isNaN(NaN)); // true (проверка через isNaN)
console.log(Number.isNaN(NaN)); // true (строгая проверка)
console.log(NaN + 5); // NaN (любая операция с NaN)
console.log(NaN ** 0); // 1 (исключение из правила)`},{title:"Специальные значения Infinity и -Infinity",content:`Infinity — положительная бесконечность
-Infinity — отрицательная бесконечность`,addition:"Бесконечность, получается при делении на ноль или переполнении числового диапазона. Infinity больше любого числа, -Infinity меньше любого числа.",examples:`console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

// Операции с бесконечностью
console.log(Infinity * 2); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(1 / Infinity); // 0`},{title:"Специальные символы (escape-последовательности)",content:"В строковых литералах JavaScript поддерживаются специальные символы, которые начинаются с обратного слеша \\.",addition:`Специальные символы используются для вставки в строку символов, которые сложно или невозможно ввести напрямую: перевод строки, кавычки, табуляция и т.д.
Основные escape-последовательности:
• \\n — перевод строки
• \\r — возврат каретки, в Windows для перевода строки используется комбинация \\r\\n
• \\' — одинарная кавычка
• \\" — двойная кавычка
• \\\` — обратный апостроф (шаблонные строки)
• \\\\ — обратный слеш
• \\t — табуляция
• \\b — backspace (удаление предыдущего символа)`,examples:`// Перевод строки
console.log("Первая строка\\nВторая строка");
// Первая строка
// Вторая строка

// Возврат каретки (Windows: \\r\\n)
console.log("Строка\\rВозврат в начало");

// Кавычки
console.log("Он сказал: \\"Привет!\\""); // Он сказал: "Привет!"
console.log('Она сказала: \\'Привет!\\''); // Она сказала: 'Привет!'
console.log(\`Обратный апостроф: \\\`\`); // Обратный апостроф: \`

// Обратный слеш
console.log("Путь: C:\\\\Users\\\\Documents"); // Путь: C:\\Users\\Documents

// Табуляция
console.log("Колонка 1\\tКолонка 2\\tКолонка 3");
// Колонка 1    Колонка 2    Колонка 3

// Backspace
console.log("ABC\\bD"); // ABD (символ C удалён)`}]}},zx={value:"type-conversion",name:"Преобразование примитивных значений",content:{introduction:"JavaScript — язык с динамической типизацией, где значения могут автоматически или явно преобразовываться к другому типу.",sections:[{title:"Преобразование Number, String, Boolean, BigInt и Symbol",content:`Преобразование к числу (Number)
• String → Number: строка парсится как число. Пустая строка → 0. Пробельные символы игнорируются. Не числовые строки → NaN.
• Boolean → Number: true → 1, false → 0.
• BigInt → Number: теряет точность для больших значений, может стать Infinity.
• Symbol → Number: невозможно, выбрасывает TypeError.

Преобразование к строке (String)
• Number → String: число записывается как строка. NaN → "NaN", Infinity → "Infinity", -0 → "0".
• Boolean → String: true → "true", false → "false".
• BigInt → String: аналогично Number, но без потери точности.
• Symbol → String: явное преобразование (String(Symbol)) всегда работает и возвращает "Symbol(...)". Неявное (конкатенация) вызывает TypeError.

Преобразование к boolean (Boolean)
• Number → Boolean: 0, -0, NaN → false, остальные → true.
• String → Boolean: пустая строка "" → false, остальные → true.
• BigInt → Boolean: 0n → false, остальные → true.
• Symbol → Boolean: все символы → true.

Преобразование к BigInt (BigInt)
• Number → BigInt: целые числа в безопасном диапазоне преобразуются точно. Дробные вызывают ошибку.
• String → BigInt: строка должна содержать только целое число, иначе ошибка.
• Boolean → BigInt: true → 1n, false → 0n.
• Symbol → BigInt: невозможно, TypeError.

Преобразование к Symbol (Symbol)
• Все типы → Symbol: создаётся новый уникальный символ с описанием из строкового представления значения.`,addition:`Явное преобразование выполняется функциями-конструкторами: Number(), String(), Boolean(), BigInt().

Неявное (автоматическое) преобразование происходит в операциях:
• Арифметические операторы (-, *, /, %, **): аргументы приводятся к числу.
• Арифметический оператор (+):  если хотя бы один аргумент является строкой — оба приводятся к строке (конкатенация), иначе оба приводятся к числу.
• Операторы сравнения (>, <, >=, <=): если оба аргумента — строки, выполняется лексикографическое сравнение строк; иначе оба приводятся к числу.
• Операторы равенства (==, !=): аргументы приводятся к общему типу.
• Логические операторы (&&, ||): аргументы приводятся к boolean.
• Унарные логические операторы (!, !!): аргумент приводится к boolean.
• Тернарный оператор (? :): условие приводится к boolean.
• Конкатенация с строкой (+): если один аргумент строка, другой приводится к строке.

Унарный плюс (+) — самый быстрый способ преобразовать значение в число.
Двойное НЕ (!!) — компактный способ преобразовать значение в boolean.`,examples:`// Number() — преобразование к числу
console.log(Number("42")); // 42
console.log(Number("  3.14  ")); // 3.14 (пробелы игнорируются)
console.log(Number("")); // 0 (пустая строка)
console.log(Number("hello")); // NaN (не числовая строка)
console.log(Number("123abc")); // NaN (символы после числа)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0 (особенность!)
console.log(Number(undefined)); // NaN
console.log(Number(Symbol("id"))); // TypeError

// Унарный плюс — компактное преобразование в число
console.log(+"42"); // 42
console.log(+true); // 1
console.log(+""); // 0

// String() — преобразование к строке
console.log(String(42)); // "42"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(-0)); // "0"
console.log(String(false)); // "false"
console.log(String(Symbol("id"))); // "Symbol(id)" — явное преобразование работает
console.log(String(Symbol())); // "Symbol()" — даже без описания

// Неявное преобразование Symbol к строке (конкатенация)
console.log("Символ: " + Symbol("id")); // TypeError
// Шаблонные строки — неявное преобразование
console.log(\`Значение: \${42}\`); // "Значение: 42"
console.log(\`Результат: \${true}\`); // "Результат: true"

// Boolean() — преобразование к boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(42)); // true
console.log(Boolean("text")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true (пробел — не пустая строка!)
console.log(Boolean(0n)); // false
console.log(Boolean(10n)); // true
console.log(Boolean(Symbol("id"))); // true

// Двойное НЕ (!!) — компактное преобразование в boolean
console.log(!!"text"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!42); // true

// BigInt() — преобразование к BigInt
console.log(BigInt("42")); // 42n
console.log(BigInt("0")); // 0n
console.log(BigInt(true)); // 1n
console.log(BigInt(false)); // 0n
console.log(BigInt(100)); // 100n
console.log(BigInt(3.14)); // RangeError (дробные не допускаются)
console.log(BigInt("hello")); // SyntaxError

// Symbol() — преобразование к символу
console.log(Symbol("id")); // Symbol(id)
console.log(Symbol(42)); // Symbol(42)
console.log(Symbol(true)); // Symbol(true)
console.log(Symbol(null)); // Symbol(null)
console.log(Symbol({})); // Symbol([object Object])

// Автоматическое преобразование в операциях
console.log("5" - 2); // 3 (строка → число)
console.log("5" + 2); // "52" (число → строка, конкатенация!)
console.log("10" * "2"); // 20 (обе строки → числа)
console.log("10" / "4"); // 2.5
console.log("5" > 2); // true (строка → число)
console.log(true + 1); // 2 (true → 1)
console.log(false * 5); // 0 (false → 0)
console.log(5 && "hello"); // "hello" (логическое И)
console.log(0 || "default"); // "default" (логическое ИЛИ)`},{title:"Преобразование undefined и null",content:`undefined и null — специальные значения, которые ведут себя уникально при преобразовании.

Преобразование undefined:
• К Number: undefined → NaN
• К String: undefined → "undefined"
• К Boolean: undefined → false
• К BigInt: undefined → TypeError

Преобразование null:
• К Number: null → 0 (особенность!)
• К String: null → "null"
• К Boolean: null → false
• К BigInt: null → TypeError`,addition:`Важная особенность: null и undefined при сравнении через == равны друг другу, но не равны никаким другим значениям.

null при преобразовании к числу даёт 0 — это историческая особенность JavaScript, которая часто вызывает путаницу.
Также: null > 0 && null == 0 – false, null >= 0 - true`,examples:`// undefined
console.log(Number(undefined)); // NaN
console.log(+undefined); // NaN
console.log(String(undefined)); // "undefined"
console.log(\`\${undefined}\`); // "undefined"
console.log(Boolean(undefined)); // false
console.log(!!undefined); // false
console.log(BigInt(undefined)); // TypeError

// null
console.log(Number(null)); // 0 (особенность!)
console.log(+null); // 0
console.log(String(null)); // "null"
console.log(\`\${null}\`); // "null"
console.log(Boolean(null)); // false
console.log(!!null); // false
console.log(BigInt(null)); // TypeError

// Сравнение null и undefined
console.log(null == undefined); // true (равны)
console.log(null === undefined); // false (строгое сравнение)
console.log(null == 0); // false (null не равно 0!)
console.log(undefined == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true (null → 0, поэтому 0 >= 0)
console.log(undefined > 0); // false (undefined → NaN)
console.log(undefined >= 0); // false (NaN >= 0 всегда false)`}]}},Bx={value:"data-types",name:"Типы данных",content:{introduction:"В JavaScript существует 8 типов данных. Из них 7 — примитивные, а один — ссылочный.",sections:[{title:"Примитивные типы",content:`Number - числовой тип представляет как целочисленные значения, так и числа с плавающей точкой, так же Infinity, -Infinity и NaN.
BigInt - числовой тип используется для работы с целыми числами произвольной длины. Обозначается добавлением суффикса n. BigInt нельзя смешивать с Number в арифметических операциях.
String - последовательность символов, заключенная в кавычки.
Boolean - логический тип, который содержит только два значения: true и false.
Null - тип, который содержит только значение null и указывает на нулевое значение. При проверке через typeof возвращает "object" (историческая особенность JavaScript).
Undefined - тип, который содержит только значение undefined, и означает, что «значение не было присвоено». Это значение присваивается переменным, которые были объявлены через let или var без инициализации (для const без значения возникает ошибка).
Symbol - используется для создания уникальных идентификаторов.`,addition:`При записи примитивного значения в переменную, значение сохраняется в статической памяти (стеке) (кроме строк, больших и дробных чисел, и пользовательских символов). При присвоении одной переменной другой копируется само значение (байты). Создаются две независимые копии. Примитивные значения являются иммутабельными (неизменяемыми). При сравнении двух примитивных значений происходит побайтовое сравнение их содержимого.
Boxing и Unboxing: Несмотря на отсутствие собственных методов и свойств, примитивы могут использовать методы через механизм автоматического оборачивания (Boxing). JavaScript неявно создает временные объекты-обертки (String, Number, Boolean, Symbol, BigInt) при обращении к методам, выполняя операцию и затем удаляя обертку (Unboxing). Null и undefined не имеют соответствующих оберток, что исключает возможность использования свойств и методов для них.`,examples:`console.log(typeof 42) // "number"
console.log(typeof 3.14) // "number"
console.log(typeof Infinity) // "number"
console.log(typeof -Infinity) // "number"
console.log(typeof NaN) // "number"

console.log(typeof 1234567890123456789012345678901234567890n) // "bigint"

console.log(typeof 'Hello') // "string"
console.log(typeof "World") // "string"
console.log(typeof \`Hello \${"World"}\`) // "string"

console.log(typeof true) // "boolean"
console.log(typeof false) // "boolean"

console.log(typeof null) // "object" (историческая особенность)

let notDefined
console.log(typeof notDefined) // "undefined"
console.log(typeof undefined) // "undefined"

console.log(typeof Symbol("id")) // "symbol"

// Пример копирования примитивов
let a = 10
let b = a // копируется значение
b = 20
console.log(a) // 10 (не изменилось)
console.log(b) // 20

// Сравнение примитивов
const x = 5
const y = 5
console.log(x === y) // true (одинаковые значения)`},{title:"Ссылочный тип",content:"Object - хранит коллекции данных или более сложные структуры.",addition:"При записи ссылочного значения в переменную, в статической памяти (стеке) сохраняется только ссылка (адрес в памяти), а само значение размещается в динамической памяти (куче). При присвоении одной переменной другой копируется только ссылка, а не само значение. Создаются две переменные, указывающие на один и тот же объект. Ссылочные типы являются мутабельными (изменяемыми). При сравнении двух ссылочных значений происходит сравнение значения ссылок, а не содержимого объектов.",examples:`const user = { name: "John", age: 30, isAdmin: true }
const numbers = [1, 2, 3, 4, 5]
const sayHello = function() { return "Hello!" }

console.log(typeof user) // "object"
console.log(typeof numbers) // "object"
console.log(typeof sayHello) // "function" (особенность языка, хотя функция тоже объект)

// Пример работы ссылок
const obj1 = { x: 10 }
const obj2 = obj1 // копируется ссылка, не значение
obj2.x = 20
console.log(obj1.x) // 20 (изменилось!)

// Сравнение объектов
const a = { x: 10 }
const b = { x: 10 }
console.log(a === b) // false (разные объекты)
console.log(obj1 === obj2) // true (одна ссылка)`},{title:"Распределение памяти и размеры типов",content:"Память делится на две основные области: стек (stack) и куча (heap). В стеке хранится большенство примитивных значений и ссылки на объекты, а в куче — сами объекты и некоторые примитивы. Размеры типов зависят от реализации движка и могут варьироваться.",addition:`Стек (Stack) — статическая память, организованная по принципу LIFO (последним пришёл — первым вышел). Содержит примитивные значения, указатели на объекты в куче и контекст выполнения функций (stack frames). Размер строго ограничен, при переполнении возникает ошибка (stack overflow - например, при бесконечной рекурсии). Каждый поток имеет свой собственный стек. Управление стеком выполняет операционная система.

Куча (Heap) — динамическая память для данных, размер которых первоначально неизвестен. Операции с кучей выполняются медленнее, чем со стеком, из-за дополнительного этапа поиска. Этот этап заключается в следующем: когда код обращается к значению по ссылке, движок должен:
• Разыменовать указатель — взять адрес из переменной в стеке
• Найти объект в памяти — перейти по этому адресу в куче
• Проверить заголовок (хидер) — определить тип данных, размер и структуру
• Получить доступ к данным — обратиться к нужным полям/элементам/символам/числам
• Возможно повторить — для вложенных объектов процесс повторяется
 В куче хранятся объекты, массивы, функции, замыкания, строки, дробные и большие числа, пользовательские символы и глобальные переменные. Куча общая для всех потоков. Управление сложнее, возможны ошибки (out of memory) при превышении доступной памяти. Размер ограничен только физической памятью устройства.

Особенности хранения в V8:
• SMI (Small Integers) — целые числа в диапазоне от -2³¹ до 2³¹-1, которые кодируются прямо в указателе (tagged pointer). Не требуют отдельного объекта в куче. Могут храниться как в стеке (переменные), так и в куче (свойства объектов, элементы массивов).
• HeapNumber — дробные числа, числа вне диапазона SMI, NaN, Infinity, -Infinity, -0. Хранятся в куче как отдельные объекты.
• Строки — хранятся в куче. V8 автоматически выбирает формат: Latin1 (1 байт/символ) для символов U+0000–U+00FF, иначе UTF-16 (2 байта/символ). Заголовок строки: 12-20 байт.

Размеры примитивных типов в V8 с учетом pointer compression - сжатие указателей (экономия памяти составляет почти 2 раза):
• Number (SMI): занимает 4 байта. Может храниться где угодно (стек или куча), так как значение кодируется прямо в указателе.
• Number (HeapNumber): в стеке ссылка (4 байта), в куче объект (минимум 12 байт: заголовок 4 байта + значение 8 байт). Числа с плавающей точкой хранятся в формате IEEE 754 double-precision (1 бит — знак, 11 бит — экспонента,  52 бита — мантисса (дробная часть)). Из-за этого представления многие десятичные дроби не могут быть точно сохранены.
• BigInt: в стеке хранится ссылка (4 байта), в куче выделяется память под само число (пропорционально количеству бит, плюс служебные данные, минимум 16-24 байта).
• Boolean: хранится в стеке как SMI-значение (4 байта).
• String: в стеке ссылка (4 байта). В куче: заголовок (12-20 байт) + символы (1 или 2 байта на символ).
• Null / Undefined: хранится в стеке, занимая 4 байта как специальные значения.
• Symbol: Может храниться двумя способами:
  - Известные символы (Symbol.iterator и др.) — как SMI (4 байта в стеке) в V8.
  - Пользовательские символы — в стеке ссылка (4 байта), в куче объект (12+ байт).

Виды хранения (Storage Modes) в V8:
• Unboxed (распакованное) — данные хранятся прямо в объекте/массиве без дополнительных оберток.
• Boxed (упакованное) — данные хранятся как отдельные объекты в куче, а в массиве/объекте лежат ссылки.

Размеры ссылочных типов:
• Объект \`{}\`: 32-48 байт + свойства.
• Массив \`[]\`: 32-64 байта + элементы.
• Функция: 32-72 байта + контекст и замыкания.

Понятия Shallow Size и Retained Size:
• Shallow Size — память самого объекта без зависимостей.
• Retained Size — память, которая освободится при удалении объекта (включая зависимые объекты, ставшие недостижимыми).`,examples:`// Примитивы в стеке
let a = 42; // SMI (если < 2^31) - 4 байта в стеке
let b = 3.14; // HeapNumber - ссылка в стеке, значение в куче (~12+ байт)
let c = true; // 4 байта в стеке
let d = "hello"; // ссылка в стеке, строка в куче (1 байт на символ + служебные)

// Объекты в куче
let obj = { // ~32-48 байт в куче
  name: "John", // строка в куче (дополнительно)
  age: 30 // SMI (если 30) - может храниться прямо в объекте
};

let arr = [1, 2, 3];  // массив в куче (~48 байт + элементы).

// Ошибка переполнения стека (stack overflow)
function recursive() {
  recursive();
}
recursive(); // бесконечная рекурсия

// Разница между Shallow и Retained Size (концептуально)
const parent = { data: "parent" };
const child = { ref: parent }; // child ссылается на parent
// Shallow Size(child) = память под сам объект child (~32 байта)
// Retained Size(child) = Shallow Size(child) + память parent.`}]}},Hx={value:"variables",name:"Переменные",content:{introduction:"JavaScript предоставляет три способа объявления переменных: let, const и var. Каждый имеет свои особенности.",sections:[{title:"Ключевое слово let",content:"let — ключевое слово для объявления переменной, введённое в ECMAScript 6 (2015).",addition:`• Блочная область видимости
• Нельзя повторно объявить в той же области видимости
• Можно изменять значение
• Нельзя использовать до объявления (ReferenceError из-за TDZ — временной мёртвой зоны, периода от входа в область видимости до фактической инициализации переменной)
• При объявлении без значения получает undefined`,examples:`// Блочная область видимости
if (true) {
  let b = 10;
  console.log(b); // 10
}
console.log(b); // Ошибка! b не видна снаружи

// Нельзя повторно объявить
let x = 1;
let x = 2; // Ошибка!

// Можно изменить значение
let y = 20;
y = 50;
console.log(y); // 50

// TDZ — нельзя использовать до объявления
console.log(z); // Ошибка!
let z = 30;

// Без инициализации = undefined
let notInit;
console.log(notInit); // undefined`},{title:"Ключевое слово const",content:"const — ключевое слово для объявления константы, введённое в ECMAScript 6 (2015).",addition:`• Блочная область видимости
• Нельзя повторно объявить в той же области видимости
• Нельзя переприсвоить значение, но можно изменять содержимое объектов и массивов (ссылка на объект/массив остаётся той же, а содержимое меняется)
• Нельзя использовать до объявления (ReferenceError из-за TDZ — временной мёртвой зоны, периода от входа в область видимости до фактической инициализации)
• Обязательно должна быть инициализирована при объявлении`,examples:`// Блочная область видимости
if (true) {
  const b = 10;
  console.log(b); // 10
}
console.log(b); // Ошибка! b не видна снаружи

// Нельзя повторно объявить
const x = 1;
const x = 2; // Ошибка!

// Нельзя переприсвоить значение
const y = 20;
y = 50; // Ошибка!

// Для объектов — нельзя переприсвоить, но можно изменять содержимое
const user = { name: "Иван" };
user.name = "Пётр"; // Можно!
console.log(user.name); // "Пётр"
user = { name: "Анна" }; // Ошибка!

// Для массивов — нельзя переприсвоить, но можно изменять содержимое
const numbers = [1, 2, 3];
numbers.push(4); // Можно!
console.log(numbers); // [1, 2, 3, 4]
numbers = [5, 6, 7]; // Ошибка!

// TDZ — нельзя использовать до объявления
console.log(z); // Ошибка!
const z = 30;

// Обязательна инициализация
const notInit; // Ошибка!`},{title:"Ключевое слово var",content:"var — ключевое слово для объявления переменной, использовавшееся до появления let и const.",addition:`• Функциональная область видимости (или глобальная, если объявлена вне функции)
• Можно повторно объявить в той же области видимости
• Можно изменять значение
• Поднимается (hoisting) — объявление перемещается в начало области видимости, переменная инициализируется значением undefined
• Можно использовать до объявления (значение undefined)
• При объявлении без значения получает undefined
• В глобальной области видимости создаёт свойство глобального объекта (window/global)
`,examples:`// Функциональная область видимости
function test() {
  var a = 10;
  console.log(a); // 10
}
test();
console.log(a); // Ошибка! a не видна снаружи функции

// Отсутствие блочной области видимости
if (true) {
  var b = 20;
}
console.log(b); // 20 (доступна и снаружи блока!)

// Можно повторно объявить
var x = 1;
var x = 2; // Работает!
console.log(x); // 2

// Можно изменить значение
var y = 20;
y = 50;
console.log(y); // 50

// Hoisting — можно использовать до объявления
console.log(z); // undefined
var z = 30;

// Без инициализации = undefined
var notInit;
console.log(notInit); // undefined

// Создаёт свойство в глобальном объекте
var globalVar = "test";
console.log(window.globalVar); // "test"`}]}},Px={value:"map-set-weakmap-weakset",name:"Map, Set, WeakMap и WeakSet",content:{introduction:"Map и Set — это современные структуры данных для работы с коллекциями. WeakMap и WeakSet — их «слабые» версии, которые позволяют сборщику мусора очищать память.",sections:[{title:"Объект Map",content:`Map — это коллекция пар вида ключ-значение.
• Ключи могут быть любого типа
• Ключи уникальны
• Сохраняет порядок вставки элементов
• Имеет свойство size для получения количества элементов`,addition:"Map предпочтительнее объектов, когда ключи неизвестны заранее или являются объектами.",examples:`// Создание Map
const map = new Map();

// Добавление элементов
map.set("name", "Иван");
map.set(1, "число");
const keyObj = {};
map.set(keyObj, "значение по объекту");

// Чтение
console.log(map.get("name")); // "Иван"
console.log(map.get(1)); // "число"
console.log(map.get(keyObj)); // "значение по объекту"

// Проверка наличия
console.log(map.has("name")); // true
console.log(map.has("age")); // false

// Удаление
map.delete(1);
console.log(map.size); // 2

// Очистка
map.clear();
console.log(map.size); // 0`},{title:"Объект Set",content:`Set — это коллекция уникальных значений.
• Хранит только уникальные значения
• Сохраняет порядок вставки элементов
• Значения могут быть любого типа
• Имеет свойство size для получения количества элементов`,addition:"Set полезен для удаления дубликатов из массива и проверки наличия значений.",examples:`// Создание Set
const set = new Set();

// Добавление элементов
set.add(1);
set.add(2);
set.add(2); // не добавится (дубликат)
set.add("строка");

// Проверка наличия
console.log(set.has(1)); // true
console.log(set.has(3)); // false

// Удаление
set.delete(2);
console.log(set.size); // 2

// Очистка
set.clear();

// Удаление дубликатов из массива
const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]`},{title:"Объект WeakMap",content:`WeakMap — это Map-подобная коллекция пар вида ключ-значение, где ключами могут быть только объекты, и ссылки на ключи являются «слабыми».
• Ключами могут быть только объекты
• Ссылки на ключи слабые (не препятствуют сборке мусора)
• Не поддерживают методы и свойства, работающие со всем содержимым или возвращающие информацию о размере коллекции
• Возможны только операции на отдельном элементе коллекции
• Автоматическая очистка памяти при удалении ключей`,addition:"WeakMap идеально подходит для кэширования данных, связанных с объектами, без утечек памяти.",examples:`// Создание WeakMap
const weakMap = new WeakMap();

// Ключ — объект
const user = { name: "Иван" };
weakMap.set(user, { age: 30 });

// Чтение
console.log(weakMap.get(user)); // { age: 30 }

// Проверка наличия
console.log(weakMap.has(user)); // true

// Удаление
weakMap.delete(user);
console.log(weakMap.has(user)); // false

// Автоматическая очистка памяти
let obj = {};
weakMap.set(obj, "данные");
obj = null; // объект будет удалён сборщиком мусора`},{title:"Объект WeakSet",content:`WeakSet — это Set-подобная коллекция уникальных объектов со слабыми ссылками.
• Хранит только объекты
• Ссылки на объекты слабые (не препятствуют сборке мусора)
• Не поддерживают методы и свойства, работающие со всем содержимым или возвращающие информацию о размере коллекции
• Возможны только операции на отдельном элементе коллекции
• Автоматическая очистка памяти при удалении объектов`,addition:"WeakSet полезен для отслеживания объектов без предотвращения их сборки мусором.",examples:`// Создание WeakSet
const weakSet = new WeakSet();

// Добавление объектов
const obj1 = { id: 1 };
const obj2 = { id: 2 };
weakSet.add(obj1);
weakSet.add(obj2);

// Проверка наличия
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Удаление
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

// Автоматическая очистка памяти
let item = { data: "value" };
weakSet.add(item);
item = null; // объект будет удалён сборщиком мусора`}]}},Ix={value:"destructuring",name:"Деструктурирующее присваивание",content:{introduction:"Деструктурирующее присваивание — специальный синтаксис для «распаковки» массивов или объектов в переменные. Исходные данные не изменяются.",sections:[{title:"Деструктуризация массивов",content:`Синтаксис: let [firstName, surname] = arr;

• Пропуск элементов: let [a, , b] = arr;
• Остаточные параметры: let [a, ...rest] = arr;
• Значения по умолчанию: let [a = "Guest"] = [];
• Обмен переменных: [x, y] = [y, x];
• Работает с любыми итерируемыми объектами.`,addition:"Ошибки не возникает, если значений меньше, чем переменных — недостающие становятся undefined.",examples:`// Базовый синтаксис
const [first, second] = [1, 2];
console.log(first); // 1
console.log(second); // 2

// Пропуск элементов
const [a, , b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 3

// Остаточные параметры
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Значения по умолчанию
const [name = "Guest"] = [];
console.log(name); // "Guest"

// Обмен переменных
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// Строка — итерируемый объект
const [c1, c2] = "AB";
console.log(c1, c2); // "A" "B"`},{title:"Деструктуризация объектов",content:`Синтаксис: let {title, width} = options;

• Порядок свойств не важен
• Переименование: let {width: w} = options;
• Остаток объекта: let {title, ...rest} = options;
• Значения по умолчанию: let {width = 100} = {};
• Для присваивания существующим переменным нужны скобки: ({prop} = obj);`,addition:"Вложенная деструктуризация поддерживает сложные шаблоны для извлечения данных из вложенных структур.",examples:`// Базовый синтаксис (порядок не важен)
const {title, width} = {width: 100, title: "Menu"};
console.log(title); // "Menu"
console.log(width); // 100

// Переименование переменных
const {width: w} = {width: 100};
console.log(w); // 100

// Остаточные свойства
const {id, ...rest} = {id: 1, x: 10, y: 20};
console.log(id); // 1
console.log(rest); // {x: 10, y: 20}

// Значения по умолчанию
const {visible = true} = {};
console.log(visible); // true

// Присваивание существующим переменным
let prop;
({prop} = {prop: "value"});
console.log(prop); // "value"`}]}},Yx={value:"json",name:"JSON",content:{introduction:"JSON (JavaScript Object Notation) — независимый от языка текстовый формат для представления данных. Спецификация задокументирована в стандарте RFC 4627.",sections:[{title:"Что такое JSON и для чего используется",content:`JSON — универсальный формат обмена данными между клиентом и сервером.
Полученная строка json называется JSON-форматированным или сериализованным объектом.
Поддерживаемые типы:
• Объекты {}
• Массивы []
• Строки, числа, логические значения (true/false) и null`,addition:"JSON является языково-независимой спецификацией данных.",examples:`// Пример JSON-объекта
{
  "name": "Иван",
  "age": 30,
  "isAdmin": true,
  "skills": ["JavaScript", "React"],
  "address": {
    "city": "Москва",
    "street": "Тверская"
  }
}`},{title:"Правила и ограничения формата",content:`JSON имеет строгий синтаксис:
• Все строки и имена свойств обязательно в двойных кавычках (")
• Одинарные и обратные кавычки недопустимы
• Формат игнорирует функции (методы), символьные ключи/значения (Symbol) и undefined
• Запрет циклических ссылок (структура не должна содержать ссылок на саму себя)
• Не поддерживаются комментарии, конструкторы (new Date()), висячие запятые`,addition:"Ключи объектов всегда должны быть в кавычках — это главное отличие от JS-литерала.",examples:`// ✅ Правильный JSON
{"name": "Иван", "age": 30}

// ❌ Ошибки:
// {name: 'Иван'} — ключ без кавычек
// {'name': 'Иван'} — одинарные кавычки
// {"sayHi": function() {}} — функции не поддерживаются
// {"id": Symbol("id")} — Symbol не поддерживается
// {"value": undefined} — undefined не поддерживается
// {"arr": [1, 2,]} — висячая запятая запрещена`}]}},Fx={value:"recursion",name:"Рекурсия",content:{introduction:"Рекурсия — это процесс, при котором функция вызывает саму себя в своем теле.",sections:[{title:"Основы рекурсии: база и шаг",content:`Когда функция вызывается, исполнение делится на две ветви:
• База рекурсии — тривиальный случай, сразу возвращающий результат и останавливающий дальнейшие вызовы
• Шаг рекурсии — упрощение задачи и вызов функции с изменёнными аргументами

Информация о процессе выполнения запущенной функции хранится в её контексте выполнения.
Контекст выполнения – специальная внутренняя структура данных, которая содержит информацию о вызове функции. Она включает в себя конкретное место в коде, на котором находится интерпретатор, локальные переменные функции, значение и прочую служебную информацию. Один вызов функции имеет ровно один контекст выполнения, связанный с ним.
Когда функция производит вложенный вызов, происходит следующее:
1. Выполнение текущей функции приостанавливается
2. Контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения
3. Выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения
4. После их завершения старый контекст достаётся из стека, и выполнение внешней функции возобновляется с того места, где она была остановлена`,addition:`Обязательно наличие базы рекурсии (условия выхода), иначе возникнет бесконечный цикл. Каждый шаг должен приближать выполнение к базовому случаю.

Глубина рекурсии — это максимальное количество одновременно хранимых в стеке контекстов вызовов (включая первый), равное общему числу вложенных вызовов.`,examples:`// Факториал через рекурсию
function factorial(n) {
  // База рекурсии
  if (n === 1) return 1;
  // Шаг рекурсии
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Сумма чисел от 1 до n
function sumTo(n) {
  if (n === 1) return 1; // база
  return n + sumTo(n - 1); // шаг
}
console.log(sumTo(5)); // 15`},{title:"Когда использовать и ограничения",content:`Рекурсию целесообразно использовать:
• Когда задачу можно естественно свести к более простым аналогичным подзадачам
• Для обхода рекурсивных структур данных (вложенные объекты, деревья, DOM)
Ограничения:
• Глубина стека вызовов ограничена (~10 000 вложенных вызовов)
• Требует больше памяти (сохранение контекста каждого вызова)
• Медленнее итеративных аналогов
• Оптимизация хвостовой рекурсии поддерживается не всеми движками
Хвостовая рекурсия — когда рекурсивный вызов является последней операцией в функции. Позволяет движку не хранить в стеке контекст текущего вызова, экономя память. Но в JavaScript поддержка есть только в Safari, в остальных движках — отключена.`,addition:"Любую рекурсию можно переписать в цикл, но это не всегда целесообразно или просто.",examples:`// Рекурсивный способ
function sumRecursive(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + sumRecursive(arr, i + 1);
}

// Итеративный способ
function sumIterative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}

const arr = Array.from({ length: 5000 }, (_, i) => i + 1);

// Замер рекурсии
const start1 = performance.now();
const res1 = sumRecursive(arr);
const end1 = performance.now();
console.log(\`Рекурсия: \${res1}, время \${(end1 - start1).toFixed(2)}ms\`);

// Замер итерации
const start2 = performance.now();
const res2 = sumIterative(arr);
const end2 = performance.now();
console.log(\`Итерация: \${res2}, время \${(end2 - start2).toFixed(2)}ms\`);

// Рекурсия: 12502500, время ~3.00ms
// Итерация: 12502500, время ~0.40ms`}]}},qx={value:"linked-list",name:"Связный список",content:{introduction:"Связный список — это структура данных, состоящая из узлов, где каждый узел содержит данные и ссылку на следующий узел или null если узел последний.",sections:[{title:"Структура и создание",content:`Каждый элемент связного списка представляет собой объект с двумя свойствами:
• value — значение элемента
• next — ссылка на следующий элемент списка или null (если это последний элемент)

list = { value, next → { value, next → ... }}
Переменная list хранит ссылку на первый элемент. Перемещение по списку происходит последовательным чтением свойства next.`,addition:"В отличие от массивов, связный список не имеет индексов — доступ к элементу осуществляется последовательным проходом от начала.",examples:`// Способ 1: Вложенная инициализация
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Способ 2: Пошаговое присваивание
let list2 = { value: 1 };
list2.next = { value: 2 };
list2.next.next = { value: 3 };
list2.next.next.next = { value: 4 };
list2.next.next.next.next = null;

// Перемещение по списку
console.log(list.value); // 1
console.log(list.next.value); // 2
console.log(list.next.next.value); // 3`},{title:"Вставка и удаление",content:`Вставка в начало:
Создаётся новый узел (newNode), его свойство next указывает на текущий список (list).
После этого переменная list переназначается на новый узел, который становится головой списка.
list = { value: newNode, next: list }; // newValue - новый узел, list - старый список

Вставка в середину или конец:
Сначала находим узел (currentNode), после которого хотим вставить новый элемент (newNode).
Затем (newNode) своим next ссылается на узел, который раньше был следующим за currentNode.
После этого currentNode.next перенаправляется на newNode.
newNode.next = currentNode.next; // newNode ссылается на следующий узел после currentNode
currentNode.next = newNode;      // currentNode теперь ссылается на newNode

Удаление элемента:
Находим узел (previousNode), который стоит непосредственно перед удаляемым узлом.
Меняем ссылку previousNode.next так, чтобы она указывала на узел, который идёт после удаляемого.
Таким образом удаляемый узел исключается из цепочки ссылок и сборщик мусора его удаляет.
previousNode.next = previousNode.next.next; // previousNode.next.next - узел после удаляемого`,addition:"Вставка и удаление не требуют переиндексации остальных элементов — это главное преимущество перед массивами.",examples:`// Создаём исходный список: 1 → 2 → 3 → null
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

// Выводим список в консоль
function printList(list) {
  let arr = [];
  let current = list;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  console.log(arr.join(" → "));
}

console.log("Исходный список:");
printList(list); // 1 → 2 → 3

// Вставка в начало
list = { value: "new", next: list };
console.log("После вставки в начало:");
printList(list); // new → 1 → 2 → 3

// Вставка в середину (после элемента со значением 1)
let newNode = { value: "inserted", next: list.next.next };
list.next.next = newNode;
console.log("После вставки после 1:");
printList(list); // new → 1 → inserted → 2 → 3

// Удаление элемента (удаляем "inserted")
list.next.next = list.next.next.next;
console.log("После удаления inserted:");
printList(list); // new → 1 → 2 → 3`},{title:"Обход списка",content:`Обход связного списка можно реализовать двумя способами:
• Итеративный — через цикл while с временной переменной
• Рекурсивный — через вызов функции самой себя

Прямой порядок: вывод значений от начала к концу.
Обратный порядок: при рекурсии сначала вызываем функцию до конца, затем выводим значения.`,addition:"Рекурсивный код обхода часто короче и читаемее, но при больших списках может привести к переполнению стека.",examples:`// Итеративный обход (прямой порядок)
function printListIterative(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

// Рекурсивный обход (прямой порядок)
function printListRecursive(list) {
  console.log(list.value);
  if (list.next) printListRecursive(list.next);
}

// Рекурсивный обход (обратный порядок)
function printReverseList(list) {
  if (list.next) printReverseList(list.next);
  console.log(list.value);
}`},{title:"Плюсы, минусы и улучшения",content:`Плюсы:
• Быстрая вставка/удаление в любом месте без переиндексации
• Лёгкое разделение и слияние частей списка изменением пары ссылок
• Идеален для очередей/деков, где операции происходят только с концов

Минусы:
• Нет доступа по индексу — нужно пройти N шагов от начала (O(n) вместо O(1) у массивов)
• Накладные расходы на память: каждый узел хранит дополнительное свойство next
• Сложнее обратный обход без дополнительных структур или рекурсии

Возможные улучшения:
• Двусвязный список — добавить свойство (prev) для ссылки на предыдущий элемент. Позволяет перемещаться по списку в обе стороны и удалять узел зная только его самого.
{ value: значение, prev: предыдущийУзел, next: следующийУзел }
• Хвостовой указатель (tail) — переменная, хранящая ссылку на последний элемент (newNode). Позволяет добавлять элементы в конец за O(1) вместо O(n).
tail.next = newNode;
tail = newNode;`,addition:"Связные списки не заменяют массивы полностью, а дополняют их. Если нужны частые вставки/удаления — список эффективнее; если нужен быстрый доступ по индексу — массив предпочтительнее.",examples:`// Двусвязный список (свойство prev)
let node1 = { value: 1, prev: null, next: null };
let node2 = { value: 2, prev: null, next: null };
let node3 = { value: 3, prev: null, next: null };

// Устанавливаем связи
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

// Прямой обход (через next)
let current = node1;
while (current) {
  console.log(current.value); // 1, 2, 3
  current = current.next;
}

// Обратный обход (через prev)
current = node3;
while (current) {
  console.log(current.value); // 3, 2, 1
  current = current.prev;
}

// Удаление узла (достаточно знать только его)
if (node2.prev) node2.prev.next = node2.next;
if (node2.next) node2.next.prev = node2.prev;
console.log(node1.next.value); // 3 (узел 2 удалён)

// Хвостовой указатель (tail) для быстрой вставки в конец
let head = null; // храним первый элемент (для доступа к началу)
let tail = null; // храним последний элемент (для быстрой вставки)

function addToEnd(value) {
  let newNode = { value: value, next: null };
  if (!head) {
    // Если список пуст, новый узел становится и головой, и хвостом
    head = newNode;
    tail = newNode;
  } else {
    // Если список не пуст, добавляем в конец
    tail.next = newNode; // старый хвост ссылается на новый узел
    tail = newNode;      // новый узел становится хвостом
  }
}

addToEnd(1);
addToEnd(2);
addToEnd(3);

console.log(head.value); // 1 — первый элемент
console.log(head.next.value); // 2 — второй элемент
console.log(head.next.next.value); // 3 — третий элемент
console.log(tail.value); // 3 — последний элемент`}]}},Vx={value:"lexical-environment",name:"Лексическое окружение",content:{introduction:"Лексическое окружение — скрытый объект, который создаётся для каждого скрипта, блока {...} и функции. Он хранит локальные переменные и ссылку на внешнее окружение, определяя область видимости и механизм работы замыканий.",sections:[{title:"Лексическое окружение",content:`У каждой выполняемой функции, блока кода {...} и скрипта есть связанный с ними внутренний объект, называемый лексическим окружением - LexicalEnvironment. Объект лексического окружения состоит из двух частей:
1. Environment Record — объект, в котором как свойства хранятся все локальные переменные (а также другая информация, такая как значение this)
2. Ссылка на внешнее лексическое окружение — указывает на лексическое окружение кода снаружи текущих фигурных скобок. У глобального лексического окружения нет внешнего окружения, так что она указывает на null.

При запуске скрипта или вызове функции лексическое окружение предварительно заполняется всеми объявленными переменными. Изначально они находятся в состоянии «Uninitialized» — движок знает о переменной, но на неё нельзя ссылаться, пока она не будет объявлена
Function Declaration сразу становится функцией, готовой к использованию (в отличие от let/const)`,addition:`Когда код хочет получить доступ к переменной – сначала происходит поиск во внутреннем лексическом окружении, затем во внешнем и так далее, до глобального.
Если переменная не была найдена, это будет ошибкой в строгом режиме. Без строгого режима, обращение к несуществующей переменной создаёт новую глобальную переменную с таким же именем.`,examples:`// Глобальное лексическое окружение
let globalVar = "global";

function outerFunc() {
  let outerVar = "outer";

  function innerFunc() {
    let innerVar = "inner";
    console.log(innerVar); // "inner" — из внутреннего окружения
    console.log(outerVar); // "outer" — из внешнего окружения
    console.log(globalVar); // "global" — из глобального окружения
  }

  return innerFunc;
}

const func = outerFunc();
func(); // inner, outer, global`},{title:"Замыкание",content:`Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ. В JavaScript, все функции изначально являются замыканиями.
При создании функции ей автоматически присваивается скрытое свойство [[Environment]], содержащее ссылку на лексическое окружение места её объявления.
Когда запускается функция, в начале её вызова автоматически создаётся новое лексическое окружение для хранения локальных переменных и параметров.
Переменная обновляется в том лексическом окружении, в котором она существует.

Альтернатива замыканиям — свойства функции. Вместо хранения переменной во внешнем лексическом окружении, можно добавить свойство непосредственно самой функции.
Свойства функции и локальные переменные — это две независимые вещи, никак не связанные друг с другом.
Основное отличие: переменная, хранящаяся в замыкании, недоступна из внешнего кода — изменить её могут только вложенные функции. А свойство функции доступно напрямую, что позволяет внешнему коду читать или изменять его значение.`,addition:"Функция всегда получает текущие значения внешних переменных, а не те, которые были на момент её создания.",examples:`// Пример 1: Классическое замыкание (переменная изолирована)
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
// console.log(count); // Ошибка: переменная недоступна извне

// Пример 2: Свойство функции (значение доступно снаружи)
function makeCounterAlt() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}
let counterAlt = makeCounterAlt();
console.log(counterAlt()); // 0
console.log(counterAlt()); // 1
console.log(counterAlt.count); // 2 (доступно из внешнего кода!)
counterAlt.count = 10; // можно изменить снаружи
console.log(counterAlt()); // 10

// Пример 3: Независимые замыкания
let counter1 = makeCounter();
let counter2 = makeCounter();
console.log(counter1()); // 0
console.log(counter2()); // 0 (каждый со своим изолированным состоянием)
console.log(counter1()); // 1`},{title:"Потеря контекста (this)",content:`Когда метод объекта сохраняется в отдельную переменную (или передаётся как колбэк), он теряет связь с исходным объектом. Это происходит потому, что this определяется в момент вызова функции, а не объявления.

При присваивании obj.method в переменную, создаётся обычная функция, которая вызывается без контекста — this становится undefined (в строгом режиме) или глобальным объектом.

Такая же ситуация возникает при передаче метода объекта в setTimeout, setInterval, addEventListener и другие функции, которые вызывают колбэки внутри себя.`,addition:`• Обычные функции теряют this при вызове без объекта
• Стрелочные функции не имеют собственного this — они наследуют его из внешнего лексического окружения, поэтому не подвержены этой проблеме
• Привязка через bind создаёт новую функцию с фиксированным this, которая также является замыканием, запоминающим привязанный контекст
• Обёртка в стрелочную функцию сохраняет this за счёт лексического наследования`,examples:`// Пример 1: Потеря this при присваивании
let user = {
  name: "Иван",
  sayHi() {
    console.log(this.name);
  }
};
user.sayHi(); // "Иван" (this = user)

let sayHi = user.sayHi;
sayHi(); // undefined (или ошибка в строгом режиме)
// this потерян, так как функция вызывается без контекста

// Пример 2: Потеря this в setTimeout
let user2 = {
  name: "Анна",
  delayedGreet() {
    setTimeout(function() {
      console.log(this.name); // undefined
    }, 1000);
  }
};
user2.delayedGreet();

// Решение 1: Стрелочная функция
let user3 = {
  name: "Мария",
  delayedGreet() {
    setTimeout(() => console.log(this.name), 1000);
  }
};
user3.delayedGreet(); // "Мария" (this наследуется из внешнего контекста)

// Решение 2: bind
let user4 = {
  name: "Пётр",
  delayedGreet() {
    setTimeout(function() {
      console.log(this.name);
    }.bind(this), 1000);
  }
};
user4.delayedGreet(); // "Пётр"

// Решение 3: Замыкание через переменную self/that
let user5 = {
  name: "Ольга",
  delayedGreet() {
    let self = this;
    setTimeout(function() {
      console.log(self.name);
    }, 1000);
  }
};
user5.delayedGreet(); // "Ольга"

// Пример 3: bind создаёт замыкание с привязанным this
let greet = user.sayHi.bind(user);
greet(); // "Иван" (this зафиксирован через bind)
let greetAgain = greet.bind({ name: "Другой" });
greetAgain(); // "Иван" (повторный bind не изменит привязанный this)`},{title:"Сборка мусора",content:"Обычно лексическое окружение удаляется из памяти вместе со всеми переменными после завершения вызова функции. Однако если существует вложенная функция, которая все еще доступна после завершения вызова функции, то она имеет свойство [[Environment]], ссылающееся на лексическое окружение.",addition:`Каждый вызов функции создаёт новое лексическое окружение, которое помещается в стек вызовов. Если количество одновременно существующих лексических окружений превышает лимит (обычно ~10 000), происходит переполнение стека, и JavaScript выбрасывает ошибку: "Maximum call stack size exceeded".

Это может произойти при слишком глубокой вложенности вызовов, когда внешние функции не успевают завершиться, и их лексические окружения продолжают накапливаться в стеке.`,examples:`// Очистка замыкания
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1

// Убираем ссылку — замыкание очищается
counter = null;
// Теперь лексическое окружение с переменной count удалено из памяти`}]}},Xx={value:"property-descriptors",name:"Дескрипторы свойств и аксессоры",content:{introduction:"Каждое свойство объекта имеет не только значение, но и скрытые атрибуты (флаги), управляющие его поведением. Дескрипторы позволяют тонко настраивать свойства: делать их доступными только для чтения, скрывать от перебора или запрещать удаление. Есть два типа свойств объекта: cвойства-данные и свойства-аксессоры. Свойства-аксессоры (геттеры и сеттеры) предоставляют механизм автоматического выполнения кода при чтении и записи свойств.",sections:[{title:"Флаги свойств-данных",content:`Каждое свойство объекта, помимо значения value, имеет три скрытых атрибута:
• writable — если true, значение можно изменять; если false — свойство только для чтения
• enumerable — если true, свойство отображается в циклах (for..in) и методах вроде Object.keys; если false — игнорируется
• configurable — если true, свойство можно удалить и изменять его флаги; если false — удаление и изменение флагов запрещено

При обычном создании свойства (obj.prop = val) все флаги автоматически равны true.
При создании через Object.defineProperty/Object.defineProperties без явного указания — флаги по умолчанию равны false.`,addition:"Флаги хранятся вместе со значением в дескрипторе свойства. Просмотреть их можно через Object.getOwnPropertyDescriptor/Object.getOwnPropertyDescriptors.",examples:`// Обычное создание — все флаги true
const user = { name: "Иван" };
console.log(Object.getOwnPropertyDescriptor(user, "name"));
// { value: "Иван", writable: true, enumerable: true, configurable: true }

// Создание через defineProperty — флаги по умолчанию false
const user2 = {};
Object.defineProperty(user2, "name", {
  value: "Мария"
});
console.log(Object.getOwnPropertyDescriptor(user2, "name"));
// { value: "Мария", writable: false, enumerable: false, configurable: false }`},{title:"Незаписываемые свойства (writable: false)",content:`Если writable: false, попытка изменения значения игнорируется в нестрогом режиме и вызывает TypeError в строгом режиме.
Флаг writable можно сбросить обратно в true только если configurable: true.`,addition:"Это самый мягкий запрет — свойство можно читать, но нельзя изменять. Используется для создания констант на уровне объекта.",examples:`const config = {};
Object.defineProperty(config, "version", {
  value: "1.0.0",
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(config.version); // "1.0.0"
config.version = "2.0.0";
console.log(config.version); // "1.0.0"

// Можно восстановить writable, т.к. configurable: true
Object.defineProperty(config, "version", {
  writable: true
});
config.version = "2.0.0";
console.log(config.version); // "2.0.0"`},{title:"Неперечислимые свойства (enumerable: false)",content:`Если enumerable: false, свойство скрывается от:
• цикла for..in
• Object.keys(), Object.values(), Object.entries()
• оператора spread {...obj}`,addition:"Свойство всё ещё доступно напрямую (obj.prop), просто не участвует в переборе.",examples:`const user = {
  name: "Иван",
  age: 30
};

// Скрытое свойство
Object.defineProperty(user, "_password", {
  value: "secret123",
  writable: true,
  enumerable: false,
  configurable: true
});

// Доступ напрямую — работает
console.log(user._password); // "secret123"

// Но скрыто от перебора
for (let key in user) {
  console.log(key); // только "name", "age"
}

console.log(Object.keys(user)); // ["name", "age"]
console.log({ ...user }); // { name: "Иван", age: 30 }`},{title:"Неконфигурируемые свойства (configurable: false)",content:`Если configurable: false:
• Свойство нельзя удалить (delete)
• Его флаги нельзя изменить
• Обратно сделать configurable: true невозможно
Единственное исключение: для неконфигурируемого свойства разрешено менять writable: true → false, но не наоборот.
Если writable: true, значение свойства всё ещё можно менять, даже если configurable: false.
Установка обоих флагов в false превращает свойство в «вечную» константу (как Math.PI).`,addition:"Это самый строгий запрет. Используется для создания настоящих констант и защиты критичных свойств от любых изменений.",examples:`const math = {};
Object.defineProperty(math, "PI", {
  value: 3.14159,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(math.PI); // 3.14159

// Нельзя изменить значение
math.PI = 3.14;

// Нельзя удалить
delete math.PI;

// Нельзя изменить флаги
Object.defineProperty(math, "PI", {
  configurable: true
});

// Исключение: можно изменить writable: true → false
const locked = {};
Object.defineProperty(locked, "value", {
  value: 42,
  writable: true,
  configurable: false
});
Object.defineProperty(locked, "value", { writable: false });`},{title:"Свойства-аксессоры: геттеры и сеттеры",content:`Свойства-аксессоры внешне выглядят как обычные свойства, но на самом деле вызывают функции:
• get — выполняется при чтении свойства
• set — выполняется при записи свойства

Свойство не может одновременно быть и аксессором, и свойством-данным (иметь value/writable и get/set).
В литерале объекта используются ключевые слова get и set перед именем свойства.`,addition:"Дескриптор свойства-аксессора: get, set, enumerable и configurable.",examples:`const user = {
  name: "Иван",
  surname: "Иванов",

  get fullName() {
    return \`\${this.name} \${this.surname}\`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// Чтение — вызывается get
console.log(user.fullName); // "Иван Иванов"

// Запись — вызывается set
user.fullName = "Пётр Петров";
console.log(user.name); // "Пётр"
console.log(user.surname); // "Петров"`}]}},Jx={value:"prototypes",name:"Прототипы и наследование",content:{introduction:"Прототипное наследование — это механизм, который позволяет объектам наследовать свойства и методы от других объектов.",sections:[{title:"__proto__ и [[Prototype]]",content:`Внутреннее свойство [[Prototype]] хранит ссылку на объект-прототип. При чтении отсутствующего свойства JavaScript автоматически поднимается по цепочке прототипов, пока не найдёт свойство или не достигнет null.

Свойство __proto__ — исторический геттер/сеттер для [[Prototype]]. Объект может иметь только один [[Prototype]]. Допустимые значения: объект или null. Циклические ссылки запрещены.

Запись в объект не влияет на прототип: операции записи и удаления выполняются напрямую над самим объектом. Прототип используется исключительно для чтения. Исключение — свойства-аксессоры (сеттеры).`,addition:"Современный стандарт рекомендует использовать Object.getPrototypeOf/setPrototypeOf вместо __proto__, но __proto__ остаётся широко поддерживаемым.",examples:`const animal = {
  eats: true,
  walk() {
    console.log("Животное ходит");
  }
};

const rabbit = {
  jumps: true,
  __proto__: animal
};

// Чтение унаследованного свойства
console.log(rabbit.eats); // true (из animal)
rabbit.walk(); // "Животное ходит" (из animal)

// Запись создаёт собственное свойство
rabbit.eats = false;
console.log(rabbit.eats); // false (собственное)
console.log(animal.eats); // true (прототип не изменился)

// Удаление собственного свойства
delete rabbit.eats;
console.log(rabbit.eats); // true (снова из прототипа)`},{title:"Контекст this в методах прототипа",content:`this всегда определяется объектом перед точкой в момент вызова, неважно, где метод найден — в самом объекте или в прототипе.
Метод прототипа работает с вызывающим объектом, а не с прототипом. Это позволяет использовать общие методы для множества объектов, экономя память и избегая дублирования кода.`,addition:"Благодаря динамической природе прототипов, методы можно добавлять в прототип в любой момент, и они сразу становятся доступны всем объектам, наследующим от него. Это позволяет расширять функциональность существующих объектов без изменения их собственных свойств.",examples:`const animal = {
  walk() {
    console.log(\`\${this.name} ходит\`);
  }
};

const rabbit = {
  name: "Кролик",
  __proto__: animal
};

const bird = {
  name: "Птица",
  __proto__: animal
};

// this определяется вызывающим объектом
rabbit.walk(); // "Кролик ходит" (this === rabbit)
bird.walk(); // "Птица ходит" (this === bird)

// Добавление нового метода в прототип
animal.run = function() {
  console.log(\`\${this.name} бежит\`);
};

rabbit.run(); // "Кролик бежит"
bird.run(); // "Птица бежит"`},{title:"Прототип для конструкторов (свойство prototype)",content:`При вызове new F() JavaScript берёт объект из F.prototype и автоматически назначает его в качестве [[Prototype]] для нового объекта. Значение F.prototype должно быть либо объектом, либо null.

Свойство F.prototype используется только в момент вызова new F() (оно является особым, только когда оно назначено функции-конструктору).

По умолчанию F.prototype равно { constructor: F }, где constructor ссылается на саму функцию. Это позволяет получить конструктор экземпляра через obj.constructor.

Замена F.prototype на новый объект (F.prototype = {}) влияет только на объекты, созданные после присваивания. Уже существующие объекты сохраняют ссылку на старый прототип.
Изменение свойств внутри текущего прототипа (F.prototype.eats = false) затрагивает все унаследованные объекты (и старые, и новые), так как они ссылаются на один и тот же объект в памяти.`,addition:`Рекомендуется не перезаписывать F.prototype целиком, а добавлять свойства к существующему объекту. Если перезапись необходима, свойство constructor следует добавить вручную.
JavaScript сам по себе не гарантирует правильное значение свойства constructor: если мы заменим прототип по умолчанию на другой объект, то свойства constructor в нём не будет.
Не меняйте [[Prototype]] существующих объектов, если важна скорость: это очень медленная операция, которая ломает внутренние оптимизации для операций доступа к свойствам объекта.`,examples:`function Rabbit(name) {
  this.name = name;
}

// Добавление методов в прототип (рекомендуется)
Rabbit.prototype.speak = function() {
  console.log(\`\${this.name} говорит\`);
};

const rabbit1 = new Rabbit("Кролик 1");
rabbit1.speak(); // "Кролик 1 говорит"

// Проверка constructor
console.log(rabbit1.constructor === Rabbit); // true

// Перезапись prototype (влияет только на новые объекты)
Rabbit.prototype = {
  jump() {
    console.log(\`\${this.name} прыгает\`);
  },
  constructor: Rabbit
};

const rabbit2 = new Rabbit("Кролик 2");
rabbit2.jump(); // "Кролик 2 прыгает"

// Старый объект — старый прототип
console.log(rabbit1.jump); // undefined
console.log(rabbit1.speak); // function (есть)

// Изменение свойств внутри прототипа (влияет на все объекты)
function Cat(name) {
  this.name = name;
}
Cat.prototype.sleeps = true;

const cat1 = new Cat("Кот 1");
Cat.prototype.sleeps = false; // изменение внутри прототипа
const cat2 = new Cat("Кот 2");

console.log(cat1.sleeps); // false (изменилось!)
console.log(cat2.sleeps); // false`},{title:"Нативные прототипы",content:`Встроенные конструкторы (Object, Array, Date, Function и др.) не хранят методы в самих экземплярах. Все методы вынесены в соответствующие прототипы.

Иерархия наследования:
• массив → Array.prototype → Object.prototype → null
• функция → Function.prototype → Object.prototype → null
• объект Date → Date.prototype → Object.prototype → null

Object.prototype находится на вершине иерархии, поэтому «всё наследует от объектов».

Примитивы (строки, числа, булевы значения) при обращении к свойствам временно оборачиваются в объекты-обёртки, чьи методы берутся из String.prototype, Number.prototype, Boolean.prototype. null и undefined не имеют обёрток и прототипов.`,addition:"При вызове метода JavaScript сначала ищет его в ближайшем прототипе, а при отсутствии поднимается вверх до Object.prototype.",examples:`// Методы массивов — из Array.prototype
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
arr.push(4); // push из Array.prototype

// toString из Object.prototype (переопределён в Array.prototype)
console.log(arr.toString()); // "1,2,3,4"

// Цепочка прототипов массива
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null

// Примитивы — временные обёртки
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"
// При вызове создаётся String-объект, вызывается метод, объект уничтожается`}]}},Gx={value:"classes",name:"Классы",content:{introduction:"Классы в JavaScript — это синтаксический сахар для настройки цепочки прототипов и функции-конструктора. Это не новая ООП-модель, а просто более удобная запись старого прототипного механизма.",sections:[{title:"Основной синтаксис класса",content:`Класс объявляется через ключевое слово class. Внутри определяется constructor() (инициализирует объект) и методы. Методы внутри класса не разделяются запятыми.
typeof класса возвращает "function".
Конструкция class создаёт именованную функцию, а все методы сохраняет в ClassName.prototype.
Конструктор класса обязательно вызывается с new. Попытка вызвать без new выбросит ошибку.
Класс создаёт именованную функцию с внутренним флагом [[IsClassConstructor]]: true.
Все методы в prototype класса автоматически получают enumerable: false
Внутри класса автоматически применяется строгий режим (use strict).
Свойства класса не устанавливаются в прототип (ClassName.prototype). Вместо этого оно создаётся оператором new перед запуском конструктора, это именно свойство объекта.
Классы поддерживают аксессоры (геттеры и сеттеры) через ключевые слова get и set.`,addition:"Класс — это по сути функция-конструктор с дополнительными возможностями и ограничениями.",examples:`class User {
  // Свойство класса (создаётся на каждом экземпляре)
  role = 'user';

  constructor(name, age) {
    this.name = name;  // свойство, добавляемое вручную
    this._age = age;  // защищённое свойство для геттера/сеттера
  }

  // Обычный метод (лежит в прототипе)
  sayHi() {
    console.log(\`Привет, \${this.name}!\`);
  }
  // Методы не разделяются запятыми!

  // Геттер — вызывается как свойство, а не метод
  get age() {
    return this._age;
  }

  // Сеттер — позволяет выполнять логику при присвоении
  set age(value) {
    if (value < 0 || value > 120) {
      console.log('Некорректный возраст!');
      return;
    }
    this._age = value;
  }
}

const user = new User('Иван', 25);

// Проверяем обычные методы
user.sayHi();  // "Привет, Иван!"
console.log(typeof User);  // "function"

// Вызов без new — ошибка (раскомментировать для проверки)
User('Петр', 30);  // TypeError

// Методы неперечисляемы
console.log(Object.keys(user));  // ["role", "name", "_age"] (без sayHi, age)

// Проверяем свойства
console.log(user.role);  // "user" (свойство экземпляра)
console.log(user.name);  // "Иван"

// Проверяем геттер и сеттер
console.log(user.age);  // 25 (геттер)
user.age = 30;  // сеттер
console.log(user.age);  // 30
user.age = -5;  // "Некорректный возраст!"
console.log(user.age);  // 30 (не изменилось)

// Важно: свойства не лежат в прототипе
console.log(User.prototype.role);  // undefined
console.log(Object.getOwnPropertyNames(User.prototype));  // ['constructor', 'sayHi', 'age']`},{title:"Class Expression",content:`Классы можно объявлять как выражения (Class Expression), аналогично Function Expression.

Именованное выражение: let User = class MyClass { ... }. Имя MyClass доступно только внутри тела класса, аналогично Named Function Expression.`,addition:"Class Expression полезен для создания классов на лету, динамической генерации и передачи классов как аргументов.",examples:`// Class Expression
function createClass() {
  return class {
    sayHi() { console.log("Привет!"); }
  };
}

const MyClass = createClass();
new MyClass().sayHi(); // "Привет!"

// Именованное выражение класса
const Animal = class Mammal {
  breathe() {
    console.log(Mammal.name); // "Mammal" — доступно внутри
  }
};
console.log(Mammal); — Ошибка! Mammal не определён снаружи`},{title:"Наследование классов: extends и super",content:`Синтаксис: class Child extends Parent. Внутренне устанавливается Child.prototype.[[Prototype]] = Parent.prototype.

После extends допустимо любое выражение (включая функцию, возвращающую класс).

Ключевое слово super:
• super(...) — вызывает конструктор родителя. В наследуемом классе вызов super() обязателен до первого обращения к this, так как конструктор потомка не создаёт this самостоятельно, а делегирует это родителю.
• super.method(...) — вызывает метод родительского класса.

При поиске метода движок проверяет: объект → Child.prototype → Parent.prototype.
Родительский конструктор всегда использует своё собственное значение поля, а не переопределённое в потомке. Это связано с тем, что на момент вызова super() поля потомка ещё не инициализированы.
Если в дочернем классе нет конструктора — JavaScript создаст его автоматически. Такой конструктор выглядит так: constructor(...args) { super(...args); }. То есть все аргументы просто передаются родителю.`,addition:"Переопределение метода в дочернем классе заменяет родительский. Для расширения функционала (не полной замены) используется super.method().",examples:`class Animal {
  type = 'животное';

  constructor(name) {
    this.name = name;
    this.speed = 0;
    console.log('В конструкторе Animal: this.type =', this.type);
  }

  run(speed) {
    this.speed = speed;
    console.log(\`\${this.type} бежит со скоростью \${this.speed}\`);
  }
}

class Rabbit extends Animal {
  type = 'кролик';

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
    console.log('В конструкторе Rabbit: this.type =', this.type);
  }
}

const rabbit = new Rabbit("Бугс", 10);
rabbit.run(5);
console.log(rabbit.type);
// В конструкторе Animal: this.type = животное
// В конструкторе Rabbit: this.type = кролик
// кролик бежит со скоростью 5
// кролик`},{title:"[[HomeObject]] и super в стрелочных функциях",content:`[[HomeObject]] — внутреннее свойство функции, объявленной как метод класса. Навсегда хранит ссылку на объект, в котором метод был определён.
super использует [[HomeObject]] для поиска родительского прототипа. Это решает проблему бесконечной рекурсии при многоуровневом наследовании.
Методы (method() {}) автоматически получают [[HomeObject]] и работают с super.
Свойства-функции (method: function() {}) не получают [[HomeObject]] — super внутри них вызовет ошибку.
Стрелочные функции не имеют собственного super — они лексически берут его из внешней области.`,addition:"Методы с super привязаны к исходному объекту через [[HomeObject]]. Копирование такого метода в другой объект нарушит логику super.",examples:`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} говорит\`);
  }
}

class Dog extends Animal {
  speak() {
    // super работает благодаря [[HomeObject]]
    super.speak();
    console.log(\`\${this.name} лает\`);
  }
}

const dog = new Dog("Бобик");
dog.speak();
// "Бобик говорит"
// "Бобик лает"

// Стрелочная функция — super из внешней области
class Cat extends Animal {
  speakLater() {
    setTimeout(() => {
      super.speak(); // OK — стрелочная наследует super
      console.log(\`\${this.name} говорит позже\`);
    }, 100);
  }
}

// Ошибка! Обычная функция не имеет super
class Broken extends Animal {
  speakLater() {
    setTimeout(function() {
      super.speak(); // SyntaxError: "super" keyword unexpected here
    }, 100);
  }
}`},{title:"Статические поля",content:`Ключевое слово static объявляет свойства и методы, привязанные к самому классу (конструктору), а не к экземплярам.
Доступ через имя класса: ClassName.member. Вызов через экземпляр (new User().staticMethod) выбросит ошибку.
this в статическом методе ссылается на сам класс.`,addition:`Статические члены полностью наследуются: Child.__proto__ === Parent. Если метод не найден в дочернем классе, JavaScript ищет его в родительском.
Встроенные классы не наследуют статические методы друг друга.`,examples:`class Article {
  static version = "2.0";
  constructor(title, date = new Date()) {
    this.title = title;
    this.date = date;
  }

  // Статический метод — утилита
  static compare(a, b) {
    return a.date - b.date;
  }

  // Фабричный метод
  static createToday(title) {
    return new Article(title);
  }

  static factory() {
    return new this(); // this === Article (сам класс)
  }
}

const article1 = Article.createToday("Статья 1");
const article2 = new Article("Статья 2", new Date(2024, 0, 1));

console.log(Article.compare(article1, article2)); // 1 (article1 новее)
console.log(Article.version); // "2.0"

// Наследование статических членов
class BlogPost extends Article {}
console.log(BlogPost.version); // "2.0" (унаследовано)
const post = BlogPost.createToday("Пост"); // тоже работает`},{title:"Приватные и защищённые поля",content:`Приватные поля объявляются с префиксом #. Это встроенный синтаксис языка, гарантирующий приватность на уровне движка.

Уровни доступа:
• Публичные — доступны отовсюду (по умолчанию)
• Защищённые — начинаются с _. Архитектурное соглашение, не проверяемое движком. Доступны в классе и наследниках.
• Приватные — начинаются с #. Доступны строго внутри объявляющего класса.  При вызове this.#parentPrivateField возникнет ошибка. Приватные поля не конфликтуют с публичными. Доступ через вычисляемые имена this["#name"] также невозможен.`,addition:"В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляцией.",examples:`class CoffeeMachine {
  #waterAmount = 0;
  #pawer = 0;

  constructor(power) {
    this.#power = power;
  }

  // Приватный метод
  #heatWater() {
    console.log("Нагреваю воду...");
  }

  _checkWater() {
    if (this.#waterAmount < 100) {
      console.log("Мало воды");
    }
  }

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество");
    this.#waterAmount = value;
  }

  brew() {
    this.#heatWater();
    console.log("Кофе готов!");
  }
}

const machine = new CoffeeMachine(150);
machine.waterAmount = 200;
machine.brew(); // "Нагреваю воду..." + "Кофе готов!"

machine.#waterAmount = 100; // SyntaxError: Private field
machine.#heatWater(); // SyntaxError

// Наследник не видит приватные поля родителя
class SuperMachine extends CoffeeMachine {
  superBrew() {
    console.log(this.#waterAmount); // SyntaxError!
    console.log(this.waterAmount); // OK — через геттер
    this._checkWater(); // OK — protected доступно
    this.brew(); // OK — публичный метод
  }
}`}]}},Kx={value:"error-handling-try-catch",name:"Обработка ошибок",content:{introduction:"Конструкция try/catch/finally перехватывает ошибки во время выполнения. Оператор throw генерирует исключения. JavaScript предоставляет встроенные классы ошибок (Error, SyntaxError, ReferenceError и др.) и позволяет создавать пользовательские ошибки через наследование от Error.",sections:[{title:"Конструкция try..catch..finally",content:`Блок try содержит код, который может вызвать ошибку.
Блок catch перехватывает ошибку, если она возникла.
Блок finally выполняется всегда — была ошибка или нет.`,addition:`• try..catch работает только для ошибок, возникающих во время выполнения.
• Синтаксические ошибки не могут быть обработаны внутри того же блока.
• Блок catch получает объект ошибки с деталями.
• Можно опустить переменную в catch: catch { ... } (если детали не нужны).
• finally выполняется даже если в try или catch есть return или throw.`,examples:`// Пример без ошибок
try {
  console.log("Блок try");
} catch (error) {
  console.log("Эта строка не выполнится");
} finally {
  console.log("Finally выполнится всегда");
}

// Пример с ошибкой
try {
  console.log(x); // ReferenceError: x не определена
  console.log("Эта строка не выполнится");
} catch (err) {
  console.log("Ошибка: " + err.message);
} finally {
  console.log("Finally выполнится даже при ошибке");
}

// Пример с return
function test() {
  try {
    return 1;
  } finally {
    console.log("Finally выполнится до return");
  }
}
console.log(test()); // сначала "Finally...", потом 1`},{title:"Объект ошибки",content:"Когда происходит ошибка, JavaScript генерирует объект с деталями. Он передаётся в блок catch.",addition:`Основные свойства объекта ошибки:
• name — имя ошибки (например, ReferenceError, TypeError).
• message — текстовое описание ошибки.
• stack — стек вызовов на момент ошибки (нестандартное, но широко поддерживается).`,examples:`try {
  undefinedFunction();
} catch (err) {
  console.log(err.name);    // "ReferenceError"
  console.log(err.message); // "undefinedFunction is not defined"
  console.log(err.stack);   // стек вызовов (строка)
}`},{title:"Встроенные ошибки JavaScript",content:"JavaScript предоставляет набор встроенных конструкторов для стандартных ошибок. Все они наследуют от базового класса Error.",addition:`Основные встроенные ошибки:
• Error — базовый класс для всех ошибок.
• SyntaxError — синтаксическая ошибка.
• ReferenceError — обращение к необъявленной переменной.
• TypeError — некорректный тип данных (например, вызов не-функции).
• RangeError — значение вне допустимого диапазона.
• URIError — ошибка в функциях работы с URI.
• EvalError — ошибка, связанная с eval (редко, в основном для совместимости).`,examples:`// ReferenceError
try { console.log(unknownVar); }
catch (e) { console.log(e.name); } // "ReferenceError"

// TypeError
try { null.toString(); }
catch (e) { console.log(e.name); } // "TypeError"

// RangeError
try { new Array(-1); }
catch (e) { console.log(e.name); } // "RangeError"

// SyntaxError (нельзя поймать в том же try..catch, но можно создать)
const syntaxErr = new SyntaxError("Неправильная структура JSON");
console.log(syntaxErr.name);    // "SyntaxError"
console.log(syntaxErr.message); // "Неправильная структура JSON"`},{title:"Генерация ошибок: throw",content:`Инструкция throw генерирует ошибку. Можно передать любой объект, но рекомендуется использовать встроенные или пользовательские классы ошибок.

throw объект ошибки`,addition:`• При генерации ошибки выполнение текущего блока try или функции останавливается.
• Если ошибка не перехвачена, скрипт «падает».
• Лучше всего выбрасывать объекты, совместимые с Error (с полями name и message).`,examples:`function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль!");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.log(err.message); // "Деление на ноль!"
}`},{title:"Глобальный перехват ошибок (window.onerror)",content:"Специфичный для браузеров способ перехватить необработанные ошибки (которые не были пойманы ни одним try..catch).",addition:`• window.onerror срабатывает только для ошибок, которые «выпали» в глобальную область.
• Не может восстановить выполнение скрипта, но полезен для логирования.`,examples:`window.onerror = function(message, url, line, col, error) {
  console.log("Глобальная ошибка:", { message, url, line, col });
  console.log("Объект ошибки:", error);
  return false; // чтобы браузер не выводил стандартное сообщение
};

// Теперь любая необработанная ошибка вызовет этот обработчик
setTimeout(() => {
  throw new Error("Ошибка в таймере");
}, 100);`}]}},Zx={value:"promises",name:"Промисы",content:{introduction:"Promise — это объект, который содержит будущее значение асинхронной операции. Промис может находиться в одном из трёх состояний: pending (ожидание), fulfilled (выполнено) или rejected (отклонено).",sections:[{title:"Создание промиса: new Promise",content:`Промис создаётся через конструктор new Promise(executor). Функция-исполнитель (executor) запускается автоматически при создании промиса.

Аргументы исполнителя:
• resolve(value) — вызывается при успехе, результат value
• reject(error) — вызывается при ошибке, error — объект ошибки

Внутренние свойства промиса:
• state — вначале "pending", меняется на "fulfilled" при resolve или "rejected" при reject
• result — вначале undefined, меняется на value при resolve или error при reject`,addition:`Свойства state ([[PromiseState]]) и result ([[PromiseResult]]) — внутренние, напрямую недоступны.
Вызвать resolve или reject можно сразу, не только после асинхронной операции.
Вызов resolve/reject после первого вызова игнорируется — состояние меняется только один раз.`,examples:`// Успешный промис
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("готово"), 1000);
});

// Промис с ошибкой
const failPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// Мгновенный результат
const instantPromise = new Promise((resolve) => {
  resolve(42); // сразу выполнится
});

// Игнорирование повторных вызовов
const ignored = new Promise((resolve, reject) => {
  resolve("первый");
  resolve("второй"); // игнорируется
  reject("ошибка"); // игнорируется
});
ignored.then(console.log); // "первый"`},{title:"Обработка результата: then, catch, finally",content:`Методы then, catch и finally добавляют в промис функции-обработчики. Они ждут результата и сработают, когда промис завершится.

then(onFulfilled, [onRejected]) — основной метод:
• Первый аргумент — функция при успешном выполнении
• Второй аргумент — функция при ошибке

catch(onRejected) — обработка ошибок, аналог then(null, onRejected).

finally(onFinally) — выполняется всегда, независимо от результата.`,addition:`Обработчики на завершённом промисе запускаются сразу.
then возвращает новый промис — это основа цепочек.
finally не имеет аргументов, результат передаётся дальше по цепочке. Также он не знает, как завершился промис и не должен ничего возвращать, иначе возвращаемое значение игнорируется. Единственным исключением из этого правила является случай, когда обработчик finally выдает ошибку. Затем эта ошибка передается следующему обработчику вместо любого предыдущего результата.`,examples:`const promise = new Promise((resolve, reject) => {
  resolve("данные");
});

// then с двумя обработчиками
promise.then(
  (result) => console.log("Успех:", result),
  (error) => console.log("Ошибка:", error)
);

// then с одним обработчиком
promise.then((result) => console.log(result));

// catch для ошибок
const failPromise = new Promise((resolve, reject) => {
  reject(new Error("Не удалось"));
});
failPromise.catch((err) => console.log(err.message));

// finally — очистка
promise
  .finally(() => console.log("Очистка"))
  .then((r) => console.log(r));`},{title:"Цепочка промисов",content:`Вызов promise.then() возвращает промис, поэтому можно строить цепочки. Результат каждого обработчика передаётся в следующий.

Если обработчик возвращает значение — оно становится результатом следующего промиса.
Если обработчик возвращает промис — следующий обработчик ждёт его выполнения.`,addition:"thenable — объект с методом then, обрабатывается как промис.",examples:`// Простая цепочка
new Promise((r) => r(1))
  .then((x) => x * 2)     // 2
  .then((x) => x * 2)     // 4
  .then(console.log);      // 4

// Возвращение промисов в обработчиках
new Promise((r) => r(1))
  .then((x) => new Promise((res) => {
    setTimeout(() => res(x * 2), 1000);
  }))
  .then(console.log); // 2 через 1 секунду

// Несколько then на одном промисе — НЕ цепочка!
const p = Promise.resolve(1);
p.then((x) => console.log(x)); // 1
p.then((x) => console.log(x)); // 1 (тоже 1)
p.then((x) => console.log(x)); // 1 (тоже 1)

// Thenable объект
const thenable = {
  then(resolve) {
    resolve("значение");
  }
};
Promise.resolve(thenable).then(console.log);`},{title:"Очередь микрозадач",content:`Методы then, catch и finally всегда выполняются асинхронно, даже если промис уже завершён. Код, расположенный ниже в синхронном потоке, всегда выполнится раньше, чем обработчики промиса.
Это происходит из-за специальной внутренней очереди, которая в спецификации называется PromiseReactionJob.`,addition:`Когда промис завершается, его обработчики не вызываются сразу, а попадают в очередь микрозадач.
Движок JavaScript сначала выполняет весь текущий синхронный код.
Только после этого он берёт задачи из очереди микрозадач (по принципу FIFO: первым пришёл — первым ушёл) и выполняет их.

Ошибка считается необработанной, если к моменту, когда очередь микрозадач опустеет, промис находится в состоянии rejected, и к нему не был добавлен обработчик .catch. В этом случае движок генерирует событие unhandledrejection.`,examples:`// Демонстрация асинхронности обработчиков
const resolvedPromise = Promise.resolve("промис выполнен");

resolvedPromise.then((value) => console.log(value));
console.log("код выполнен");

// Вывод:
// "код выполнен"
// "промис выполнен"

// Цепочка промисов и очередь
Promise.resolve("первый")
  .then((r) => console.log(r))
  .then(() => console.log("второй"));
console.log("синхронный код");

// Вывод:
// синхронный код
// первый
// второй`},{title:"Async/await: асинхронные функции",content:`async перед функцией гарантирует возврат промиса. Любое значение автоматически оборачивается в успешный промис.

await можно использовать только внутри async-функций. Он ждёт выполнения промиса и возвращает его результат.
await приостанавливает выполнение функции, не блокируя основной поток.`,addition:"await работает с thenable — если у объекта есть метод then, он будет обработан.",examples:`// async функция всегда возвращает промис
async function getData() {
  return 42;
}
getData().then(console.log); // 42

// await — ожидание результата
async function demo() {
  const promise = new Promise((r) => setTimeout(() => r("готово"), 1000));
  const result = await promise;
  console.log(result);
}
demo() // "готово"

// async метод класса
class Loader {
  async load() {
    return await fetch("/data");
  }
}

// await с thenable
const thenable = {
  then(resolve) { resolve("ok"); }
};
const result = await thenable;
console.log(result) // "ok"`}]}},Qx={value:"generators",name:"Генераторы",content:{introduction:"Генераторы — это функции, которые могут приостанавливать своё выполнение, возвращать промежуточный результат и продолжать работу позже. Они отлично работают с перебираемыми объектами. Асинхронные генераторы и итераторы позволяют работать с асинхронными потоками данных.",sections:[{title:"Функция-генератор",content:`Генератор объявляется через function* (function со звёздочкой). При вызове он не выполняет код сразу, а возвращает объект-генератор.

Метод next() запускает выполнение до ближайшего yield и приостанавливает функцию. Возвращает объект {value, done}: value — значение из yield, done — true при завершении.`,addition:`function* f() и function *f() — оба синтаксиса корректны. Предпочтителен первый вариант, так как звёздочка относится к типу функции.
Генератор можно перебирать через for..of, при этом последнее значение (где done: true) игнорируется.`,examples:`function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: true}

// Перебор через for..of
for (const value of generateSequence()) {
  console.log(value); // 1, 2 (3 не выведется!)
}

// Правильный перебор — без return
function* generateFull() {
  yield 1;
  yield 2;
  yield 3;
}
for (const v of generateFull()) console.log(v); // 1, 2, 3`},{title:"Оператор yield",content:`yield не только возвращает значение наружу, но и может принимать значение извне через next(value). Первый вызов next() всегда без аргумента.

generator.next(value) передаёт value как результат текущего yield и возобновляет выполнение.`,addition:"Можно передавать ошибки через generator.throw(err) — исключение возникнет на строке с yield.",examples:`function* ask() {
  const a = yield "2 + 2?";
  const b = yield "3 + 3?";
  return a + b;
}

const it = ask();
console.log(it.next().value); // "2 + 2?"
console.log(it.next(4).value); // "3 + 3?"
console.log(it.next(6).value); // 10

// Обработка ошибок через throw
function* errorExample() {
  try {
    const result = yield "введите число";
    console.log("Результат:", result);
  } catch (err) {
    console.log("Ошибка поймана:", err.message);
  }
}

const errGen = errorExample();
console.log(errGen.next().value); // "введите число"
errGen.throw(new Error("что-то пошло не так")); // Ошибка поймана: что-то пошло не так`},{title:"Композиция генераторов",content:`yield* позволяет вкладывать генераторы друг в друга. Это «делегирует» выполнение другому генератору, прозрачно направляя его вывод наружу.

Композиция не использует дополнительную память для промежуточных результатов.`,addition:"Можно комбинировать генераторы для создания сложных последовательностей. Результат такой же, как если бы код был встроен напрямую.",examples:`function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordChars() {
  yield* generateSequence(48, 57); // 0-9
  yield* generateSequence(65, 90); // A-Z
  yield* generateSequence(97, 122); // a-z
}

const str = [...generatePasswordChars()]
  .map(code => String.fromCharCode(code))
  .join("");
console.log(str); // "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"`},{title:"Асинхронные итераторы",content:`Асинхронные итераторы используют Symbol.asyncIterator вместо Symbol.iterator. Метод next() должен возвращать промис.

Для перебора используется for await (let item of iterable).`,addition:"Оператор расширения ... не работает с асинхронными итераторами. Функции, ожидающие синхронные итераторы, не работают с асинхронными.",examples:`const asyncRange = {
  from: 1,
  to: 3,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        await new Promise(r => setTimeout(r, 1000));
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      }
    };
  }
};

(async () => {
  for await (const value of asyncRange) {
    console.log(value); // 1, 2, 3 с задержкой
  }
})();`},{title:"Асинхронные генераторы",content:`Асинхронный генератор объявляется как async function*. Внутри можно использовать await.

Метод generator.next() теперь возвращает промис, поэтому нужно await generator.next().`,addition:"async генераторы позволяют создавать асинхронно перебираемые объекты через Symbol.asyncIterator.",examples:`async function* asyncGenerate(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(r => setTimeout(r, 1000));
    yield i;
  }
}

(async () => {
  for await (const value of asyncGenerate(1, 3)) {
    console.log(value); // 1, 2, 3 с задержкой
  }
})();

// Асинхронно перебираемый объект
const asyncRangeObj = {
  from: 1,
  to: 3,
  async *[Symbol.asyncIterator]() {
    for (let i = this.from; i <= this.to; i++) {
      await new Promise(r => setTimeout(r, 500));
      yield i;
    }
  }
};`}]}},$x={value:"modules-intro",name:"Модули",content:{introduction:"Модуль – это файл с кодом, который может экспортировать и импортировать функции, классы и переменные. На уровне языка модули появились в ES2015.",sections:[{title:"Основы модулей",content:`Модуль – это файл. Один скрипт – один модуль.
Модули используют директивы export и import для обмена функциональностью. Для работы в браузере нужен атрибут <script type="module">.`,addition:`• export отмечает переменные и функции, доступные вне модуля
• import позволяет импортировать функциональность из других модулей
• В модулях всегда включён "use strict"
• Объект import.meta содержит информацию о текущем модуле
• Каждый модуль имеет свою область видимости
• Код выполняется один раз при первом импорте
• На верхнем уровне модуля this === undefined`,examples:`// 📁 sayHi.js
export function sayHi(user) {
  return \`Hello, \${user}!\`;
}

// 📁 main.js
import {sayHi} from './sayHi.js';

console.log(sayHi("John")); // Hello, John!`},{title:"Особенности в браузерах",content:"Модули в браузере имеют ряд особенностей: отложенное выполнение, поддержка async, требование CORS для внешних модулей.",addition:`• Выполняются в отложенном режиме (defer), не блокируют HTML
• Атрибут async работает даже для встроенных модулей (в отличие от обычных скриптов)
• Внешние модули с одинаковым src выполняются один раз
• Модули с другого домена требуют заголовки CORS
• Атрибут nomodule для резервных скриптов в старых браузерах`,examples:`<!-- отложенное выполнение -->
<script type="module" src="my.js"><\/script>

<!-- async работает -->
<script async type="module">
  import {counter} from './analytics.js';
  counter.count();
<\/script>

<!-- требует CORS -->
<script type="module" src="http:/example.com/script.js"><\/script>

<!-- fallback для старых браузеров -->
<script nomodule src="fallback.js"><\/script>`},{title:"Экспорт, импорт и реэкспорт",content:"Существуют именованные экспорты и экспорт по умолчанию. Реэкспорт позволяет импортировать и сразу экспортировать.",addition:`Именованный экспорт:
• export {x, y} или export const x = ...
• import {x, y} from "module"

Экспорт по умолчанию:
• export default value
• import x from "module" (без фигурных скобок)

Переименование:
• import {x as y} или export {x as y}

Реэкспорт:
• export {x} from "module" — реэкспорт именованного
• export * from "module" — реэкспорт всех именованных (default не реэкспортится!)
• export {default as User} from "module" — реэкспорт default`,examples:`// 📁 auth/index.js — точка входа
import {login, logout} from "./helpers.js";
export {login, logout};

import User from "./user.js";
export {User};

// То же самое через реэкспорт:
export {login, logout} from "./helpers.js";
export {default as User} from "./user.js";

// export * не реэкспортирует default!
export * from "./user.js"; // только именованные
export {default} from "./user.js"; // только default`},{title:"Динамические импорты",content:"Выражение import(module) загружает модуль динамически и возвращает промис с объектом модуля.",addition:`• Путь к модулю можно формировать динамически
• Работает в обычных скриптах (без type="module")
• Это не функция, а специальный синтаксис`,examples:`// Динамический импорт
let modulePath = prompt('Какой модуль загружать?');
import(modulePath).then(obj => {
  obj.sayHi();
}).catch(err => console.error(err));

// С await
async function load() {
  let say = await import('./say.js');
  say.hi();
  say.bye();
  say.default(); // экспорт по умолчанию
}`}]}},Wx={value:"proxy",name:"Proxy и Reflect",content:{introduction:"Proxy — это специальный объект, который «оборачивается» вокруг другого объекта и позволяет перехватывать любые операции с ним (чтение, запись свойств, вызов функций и т.д.), чтобы обработать их по своему усмотрению.",sections:[{title:"Базовый синтаксис Proxy",content:`Синтаксис создания прокси: let proxy = new Proxy(target, handler), где target — объект для оборачивания, а handler — конфигурация с ловушками.
Без ловушек прокси является прозрачной обёрткой — все операции перенаправляются на target напрямую. Proxy не имеет собственных свойств.`,addition:`Внутренний метод → Ловушка → Что вызывает:
[[Get]] → get → чтение свойства
[[Set]] → set → запись свойства
[[HasProperty]] → has → оператор in
[[Delete]] → deleteProperty → оператор delete
[[Call]] → apply → вызов функции
[[Construct]] → construct → оператор new
[[GetPrototypeOf]] → getPrototypeOf → Object.getPrototypeOf
[[SetPrototypeOf]] → setPrototypeOf → Object.setPrototypeOf
[[IsExtensible]] → isExtensible → Object.isExtensible
[[PreventExtensions]] → preventExtensions → Object.preventExtensions
[[DefineOwnProperty]] → defineProperty → Object.defineProperty
[[GetOwnProperty]] → getOwnPropertyDescriptor → Object.getOwnPropertyDescriptor
[[OwnPropertyKeys]] → ownKeys → Object.keys/values/entries`,examples:`let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test); // 5

console.log(proxy.test); // 5

for(let key in proxy) console.log(key); // test`},{title:"Reflect",content:`Reflect — встроенный объект, предоставляющий методы для выполнения стандартных операций над объектами.
• Reflect.get(target, prop, receiver) — чтение свойства
• Reflect.set(target, prop, value, receiver) — запись свойства
• Reflect.has(target, prop) — оператор in
• Reflect.deleteProperty(target, prop) — оператор delete
• Reflect.apply(target, thisArg, args) — вызов функции
• Reflect.construct(target, args, newTarget) — вызов с new
• Reflect.defineProperty(target, prop, descriptor) — Object.defineProperty
• Reflect.ownKeys(target) — Object.getOwnPropertyNames + getOwnPropertySymbols
• Reflect.getPrototypeOf / setPrototypeOf — работа с прототипом
• Reflect.isExtensible / preventExtensions — контроль расширяемости`,addition:`Методы Reflect соответствуют внутренним методам JavaScript и ловушкам Proxy.

• Передаёт receiver в геттеры/сеттеры — корректный this
• Возвращает правильный результат (true/false для операций)
• Упрощает код: не нужно писать target[prop], проверять дескрипторы

Reflect нужен, когда вы хотите вызвать стандартное поведение внутри ловушки. Если вы полностью заменяете логику — Reflect не обязателен.`,examples:`const obj = { name: "Вася" };

console.log(Reflect.get(obj, "name")); // Вася
Reflect.set(obj, "age", 30);
console.log(obj.age); // 30

// Reflect в Proxy
const user = { name: "Вася", _private: "секрет" };
const proxy = new Proxy(user, {
  get(target, prop, receiver) {
    if (prop.startsWith("_")) {
      return undefined;
    }
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === "age" && (value < 0 || value > 120)) {
      throw new Error("Недопустимый возраст");
    }
    return Reflect.set(target, prop, value, receiver);
  }
});

console.log(proxy.name); // Вася
console.log(proxy._private); // undefined
proxy.age = 25;
proxy.age = 200; // Error: Недопустимый возраст`},{title:"Ловушка get",content:`get(target, property, receiver) срабатывает при чтении свойства.
• target — оригинальный объект
• property — имя свойства
• receiver — контекст this для геттеров.`,addition:"Важно использовать Reflect.get с третьим аргументом receiver при работе с наследованием, чтобы геттеры получали корректный контекст this.",examples:`let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) return target[prop];
    return 0;
  }
});

console.log(numbers[1]); // 1
console.log(numbers[123]); // 0

// С Reflect.get
const user = {
  name: "Алексей",
  get fullName() {
    return this.name + " Смирнов";
  }
};

const proxyUser = new Proxy(user, {
  get(target, prop, receiver) {
    // receiver гарантирует корректный this для геттера
    return Reflect.get(target, prop, receiver);
  }
});

console.log(proxyUser.fullName); // "Алексей Смирнов"`},{title:"Ловушка set",content:`set(target, property, value, receiver) срабатывает при записи свойства.
• target — оригинальный объект
• property — имя свойства
• value — новое значение
• receiver — контекст this для сеттеров.`,addition:`Ловушка set должна возвращать true, если операция записи прошла успешно. Если вернуть false (или любое ложное значение), то в строгом режиме возникнет ошибка TypeError.
Важно использовать Reflect.set с четвёртым аргументом receiver для корректной работы с наследованием, чтобы сеттеры получали корректный контекст this.`,examples:`let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == "number") {
      target[prop] = val;
      return true;
    }
    return false;
  }
});

numbers.push(1, 2);
console.log(numbers) // [1 , 2]
numbers.push("текст"); // Error

// С Reflect.set
const user = {
  name: "Алексей",
  set fullName(value) {
    const parts = value.split(" ");
    this.name = parts[0];
    this.surname = parts[1];
  }
};

const proxyUser = new Proxy(user, {
  set(target, prop, value, receiver) {
    // receiver гарантирует корректный this для сеттера
    return Reflect.set(target, prop, value, receiver);
  }
});

proxyUser.fullName = "Иван Петров";
console.log(proxyUser.name); // "Иван"
console.log(proxyUser.surname); // "Петров"`},{title:"Ловушка has",content:`has(target, property) срабатывает при использовании оператора in.
• target — оригинальный объект
• property — имя свойства`,addition:"Важно использовать Reflect.has для корректной проверки наличия свойства, включая свойства из прототипа.",examples:`let range = {
  start: 1,
  end: 10
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  }
});

console.log(5 in range); // true
console.log(50 in range); // false

// С Reflect.has
const dictionary = {
  apple: "яблоко",
  car: "машина"
};

const proxyDict = new Proxy(dictionary, {
  has(target, prop) {
    return Reflect.has(target, prop);
  }
});

console.log("apple" in proxyDict); // true
console.log("toString" in proxyDict); // true (из прототипа)

// Без Reflect.has
const badProxy = new Proxy(dictionary, {
  has(target, prop) {
    return prop in target;
  }
});

console.log("toString" in badProxy); // false`},{title:"Ловушка deleteProperty",content:`deleteProperty(target, property) срабатывает при использовании оператора delete.
• target — оригинальный объект
• property — имя свойства`,addition:`Ловушка deleteProperty должна возвращать true, если удаление прошло успешно, и false — если нет.
Важно использовать Reflect.deleteProperty для выполнения реального удаления свойства. Reflect.deleteProperty возвращает true, если свойство удалено или его не существовало, и false — если свойство нельзя удалить.`,examples:`let user = {
  name: "Вася",
  _password: "***"
};

user = new Proxy(user, {
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Отказано в доступе");
    }
    delete target[prop];
    return true;
  }
});

console.log(delete user.name); // true
console.log(user.name) // undefined
console.log(delete user._password); // Error: Отказано в доступе

// С Reflect.deleteProperty
const data = {
  public: "доступно",
  _private: "секрет"
};

const proxyData = new Proxy(data, {
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) return false;
    return Reflect.deleteProperty(target, prop);
  }
});

console.log(delete proxyData.public); // true
console.log(proxyData.public); // undefined
console.log(delete proxyData._private); // false
console.log(proxyData._private); // "секрет"

// Без Reflect.deleteProperty
const badProxy = new Proxy(data, {
  deleteProperty(target, prop) {
    delete target[prop];
    return true;
  }
});

Object.defineProperty(data, "fixed", {
  value: "неудаляемый",
  configurable: false
});

console.log(delete badProxy.fixed); // Error (нельзя удалить non-configurable свойство)
console.log(data.fixed); // "неудаляемый"`},{title:"Ловушки ownKeys и getOwnPropertyDescriptor",content:`ownKeys(target) перехватывает получение списка ключей (Reflect.ownKeys, Object.keys, Object.getOwnPropertyNames, for..in).
• target — оригинальный объект

getOwnPropertyDescriptor(target, prop) перехватывает получение дескриптора свойства.
• target — оригинальный объект
• prop — имя свойства`,addition:`ownKeys и getOwnPropertyDescriptor работают в паре. Если ownKeys возвращает ключи, которых нет в объекте, Object.keys их не покажет без перехвата getOwnPropertyDescriptor.
Важно использовать Reflect.ownKeys и Reflect.getOwnPropertyDescriptor для получения оригинальных ключей и дескрипторов.`,examples:`let user = {
  name: "Вася",
  age: 30,
  _password: "***"
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(k => !k.startsWith("_"));
  },
});

for(let key in user) console.log(key); // name, age
console.log(Object.keys(user)); // ["name", "age"]

// С Reflect.ownKeys и Reflect.getOwnPropertyDescriptor
const data = {
  visible: "видно",
  _hidden: "скрыто",
  [Symbol("id")]: 123
};

const proxyData = new Proxy(data, {
  ownKeys(target) {
    const keys = Reflect.ownKeys(target);
    return keys.filter(key => !String(key).startsWith("_"));
  },
  getOwnPropertyDescriptor(target, prop) {
    if (Reflect.has(target, prop)) {
      return Reflect.getOwnPropertyDescriptor(target, prop);
    }
    return undefined;
  }
});

console.log(Object.keys(proxyData)); // ["visible"]
console.log(Object.getOwnPropertyNames(proxyData)); // ["visible"]
console.log(Reflect.ownKeys(proxyData)); // ["visible", Symbol(id)]

// Без getOwnPropertyDescriptor
const badProxy = new Proxy(data, {
  ownKeys(target) {
    return ["virtualKey", ...Reflect.ownKeys(target)];
  }
  // getOwnPropertyDescriptor не перехвачен!
});

// Object.keys не покажет virtualKey, потому что нет дескриптора
console.log(Object.keys(badProxy)); // ["visible", "_hidden"]

// С правильным getOwnPropertyDescriptor
const goodProxy = new Proxy(data, {
  ownKeys(target) {
    return ["virtualKey", ...Reflect.ownKeys(target)];
  },
  getOwnPropertyDescriptor(target, prop) {
    if (prop === "virtualKey") {
      return {
        enumerable: true,
        configurable: true,
        value: "я виртуальный"
      };
    }
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
});

console.log(Object.keys(goodProxy)); // ["virtualKey", "visible", "_hidden"]
console.log(goodProxy.virtualKey); // "я виртуальный"`},{title:"Ловушка apply",content:`apply(target, thisArg, args) срабатывает при вызове прокси как функции.
• target — оригинальная функция
• thisArg — контекст this, переданный при вызове
• args — массив аргументов`,addition:`Важно использовать Reflect.apply для корректного вызова оригинальной функции с правильным this и аргументами.
Прокси сохраняет свойства оригинальной функции (name, length), в отличие от обычной функции-обёртки.`,examples:`function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => Reflect.apply(target, thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  console.log(\`Привет, \${user}!\`);
}

// С Reflect.apply
const delayedSayHi = delay(sayHi, 3000);
console.log(delayedSayHi.length); // 1
delayedSayHi("Вася"); // Привет, Вася! (через 3 сек)

const obj = { value: 10 };

function multiply(x) {
  return this.value * x;
}

const goodMultiplyProxy = new Proxy(multiply, {
  apply(target, thisArg, args) {
    return Reflect.apply(target, thisArg, args);
  }
});

console.log(goodMultiplyProxy.apply(obj, [5])); // 50

// Без Reflect.apply
const badMultiplyProxy = new Proxy(multiply, {
  apply(target, thisArg, args) {
    return target(args[0]); // this потерян
  }
});

console.log(badMultiplyProxy.apply(obj, [5])); // NaN`},{title:"Ловушка construct",content:`construct(target, args, newTarget) срабатывает при вызове прокси с оператором new.
• target — оригинальная функция-конструктор
• args — массив аргументов, переданных конструктору
• newTarget — исходный конструктор`,addition:`Ловушка construct должна возвращать объект (результат вызова конструктора).
Важно использовать Reflect.construct(target, args, newTarget) для корректного создания экземпляра с правильной цепочкой прототипов.`,examples:`function User(name) {
  this.name = name;
}

// С Reflect.construct
const GoodProxy = new Proxy(User, {
  construct(target, args, newTarget) {
    return Reflect.construct(target, args, newTarget);
  }
});

const goodUser = new GoodProxy("Олег");
console.log(goodUser.name); // Олег
console.log(goodUser instanceof User); // true

// Без Reflect.construct
const BadProxy = new Proxy(User, {
  construct(target, args) {
    return target(args[0]); // просто вызов функции, не через new
  }
});

const badUser = new BadProxy("Петя"); // Error`},{title:"Ловушки getPrototypeOf и setPrototypeOf",content:`getPrototypeOf(target) срабатывает при получении прототипа объекта.
• target — оригинальный объект

setPrototypeOf(target, proto) срабатывает при установке прототипа.
• target — оригинальный объект
• proto — новый прототип`,addition:`Важно использовать Reflect.getPrototypeOf и Reflect.setPrototypeOf внутри ловушек для корректной работы с прототипами.
Инвариант: прокси и target должны иметь одинаковый прототип. Если target нерасширяемый, то прототип нельзя менять.`,examples:`const proto = { greeting: "Привет" };
const target = {};

const proxy = new Proxy(target, {
  getPrototypeOf(target) {
    return proto;
  },
  setPrototypeOf(target, newProto) {
    throw new Error("Изменение прототипа запрещено");
  }
});

console.log(Object.getPrototypeOf(proxy) === proto); // true
Object.setPrototypeOf(proxy, {}); // Error: Изменение прототипа запрещено

// С Reflect.getPrototypeOf и Reflect.setPrototypeOf
const target2 = { a: 1 };
const proxy2 = new Proxy(target2, {
  getPrototypeOf(target) {
    return Reflect.getPrototypeOf(target);
  },
  setPrototypeOf(target, newProto) {
    return Reflect.setPrototypeOf(target, newProto);
  }
});

console.log(Object.getPrototypeOf(proxy2) === Object.prototype); // true
Object.setPrototypeOf(proxy2, proto);
console.log(Object.getPrototypeOf(proxy2) === proto); // true

// Без Reflect
const badProxy = new Proxy({}, {
  getPrototypeOf(target) {
    return "не объект"; // возвращает строку, а нужно объект или null
  }
});

Object.getPrototypeOf(badProxy); // Error`},{title:"Ловушки isExtensible и preventExtensions",content:`isExtensible(target) срабатывает при проверке возможности расширения объекта.
• target — оригинальный объект

preventExtensions(target) срабатывает при запрете расширения объекта.
• target — оригинальный объект`,addition:`Ловушка preventExtensions должна возвращать true, если операция прошла успешно, и false — если нет.
Важно использовать Reflect.isExtensible и Reflect.preventExtensions внутри ловушек.
Инвариант: после вызова preventExtensions, isExtensible должна возвращать false.`,examples:`const proxy = new Proxy({}, {
  isExtensible(target) {
    return true;
  },
  preventExtensions(target) {
    return true;
  }
});

console.log(Object.isExtensible(proxy)); // true
Object.preventExtensions(proxy); // Error
console.log(Object.isExtensible(proxy)); // true (должно быть false, но ловушка врёт)

// С Reflect.isExtensible и Reflect.preventExtensions
const target = { a: 1 };
const proxy2 = new Proxy(target, {
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    return Reflect.preventExtensions(target);
  }
});

console.log(Object.isExtensible(proxy2)); // true
Object.preventExtensions(proxy2);
console.log(Object.isExtensible(proxy2)); // false

// Без Reflect
const badProxy = new Proxy({}, {
  isExtensible(target) {
    return false;
  }
});

console.log(Object.isExtensible(badProxy)); // Error`},{title:"Ловушка defineProperty",content:`defineProperty(target, property, descriptor) срабатывает при определении или изменении свойства через Object.defineProperty.
• target — оригинальный объект
• property — имя свойства
• descriptor — дескриптор свойства (value, writable, enumerable, configurable, get, set)`,addition:`Ловушка defineProperty должна возвращать true, если операция прошла успешно, и false — если нет.
Используйте Reflect.defineProperty внутри ловушки для реального определения свойства на целевом объекте.
Важно: если свойство в target неконфигурируемое (configurable: false), то при попытке переопределить его через defineProperty будет ошибка.`,examples:`// С Reflect.defineProperty
const target = {};
const proxy = new Proxy(target, {
  defineProperty(target, prop, descriptor) {
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(proxy, "name", { value: "Вася", enumerable: true });
console.log(proxy.name); // Вася

const proxy2 = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    if (prop.startsWith("_")) {
      throw new Error("Нельзя определить свойство с _");
    }
    if (descriptor.hasOwnProperty("value") && typeof descriptor.value !== "string") {
      throw new Error("Значение должно быть строкой");
    }
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(proxy2, "name", { value: "Вася" });
console.log(proxy2.name); // Вася
Object.defineProperty(proxy2, "_secret", { value: 42 }); // Error: Нельзя определить свойство с _
Object.defineProperty(proxy2, "age", { value: 42 }); // Error: Значение должно быть строкой

// Без Reflect
const badProxy = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    return true;
  }
});

Object.defineProperty(badProxy, "name", { value: "Вася" });
console.log(badProxy.name); // undefined`},{title:"Ограничения Proxy",content:`1. Встроенные объекты и внутренние слоты — Map, Set, Date, Promise и другие используют внутренние слоты (например, [[MapData]]), к которым прокси не имеет доступа.
2. Приватные поля классов — поля #name также реализованы через внутренние слоты и недоступны из прокси.
3. Прокси ≠ оригинальный объект — при использовании оригинального объекта как ключа в Map/Set, прокси не будет найден.
4. Строгое равенство === — прокси нельзя перехватить, объект строго равен только сам себе.`,addition:`• Для встроенных объектов и приватных полей — привязывайте методы к оригинальному объекту через .bind(target) или возвращайте связанную функцию в ловушке get.
• Для Map/Set — всегда используйте прокси, а не оригинальный объект, в качестве ключа.
Array — исключение, он не использует внутренние слоты, поэтому проксируются без проблем.`,examples:`// Проблема с Map (внутренние слоты)
let map = new Map();
let proxy = new Proxy(map, {});
try {
  proxy.set("test", 1);
} catch(e) {
  console.log(e.message);  // Error
}

// Решение: привязываем методы к оригинальному объекту
let proxy2 = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(target, prop, receiver);
    if (typeof value === "function") {
      return value.bind(target);
    }
    return value;
  }
});

proxy2.set("test", 1);
console.log(proxy2.get("test")); // 1

// Проблема с приватными полями класса
class User {
  #name = "Вася";
  getName() {
    return this.#name;
  }
}

let user = new User();
let userProxy = new Proxy(user, {});
try {
  userProxy.getName();
} catch(e) {
  console.log(e.message); // Error
}

// Решение: возвращаем метод, привязанный к оригинальному объекту
let userProxy2 = new Proxy(user, {
  get(target, prop) {
    let value = target[prop];
    if (typeof value === "function") {
      return value.bind(target);
    }
    return value;
  }
});

console.log(userProxy2.getName()); // "Вася"

// Проблема: прокси и оригинальный объект — разные
const usersSet = new Set();
const obj = { id: 1 };
const proxyObj = new Proxy(obj, {});

usersSet.add(obj);
console.log(usersSet.has(proxyObj)); // false (разные объекты)

// Решение: использовать прокси везде вместо оригинального объекта
usersSet.add(proxyObj);
console.log(usersSet.has(proxyObj)); // true

// Исключение: Array не имеет проблем с внутренними слотами
let arr = [1, 2, 3];
let arrProxy = new Proxy(arr, {});
arrProxy.push(4);
console.log(arrProxy.length); // 4`},{title:"Отключаемые прокси (Proxy.revocable)",content:`Метод Proxy.revocable(target, handler) создаёт прокси, который можно отключить.
Возвращает объект: { proxy, revoke }.
• proxy — созданный прокси-объект
• revoke — функция, при вызове которой прокси отключается
После вызова revoke() любые операции с proxy вызывают ошибку.`,addition:"revoke можно вызывать только один раз. После отключения связь с целевым объектом теряется, что позволяет сборщику мусора очистить target (если на него нет других ссылок).",examples:`const target = { message: "секрет" };
const { proxy, revoke } = Proxy.revocable(target, {});

console.log(proxy.message); // "секрет"

revoke(); // отключаем прокси

try {
  console.log(proxy.message);
} catch(e) {
  console.log(e.name); // Error
}

// Хранение revoke в WeakMap
const revokes = new WeakMap();

function createRevocable(obj, handler) {
  const { proxy, revoke } = Proxy.revocable(obj, handler);
  revokes.set(proxy, revoke);
  return proxy;
}

function disable(proxy) {
  const revoke = revokes.get(proxy);
  if (revoke) revoke();
}

const user = createRevocable({ name: "Алексей" }, {});
console.log(user.name); // "Алексей"
disable(user);
console.log(user.name); // Error`}]}},e1={value:"unicode",name:"Юникод",content:{introduction:"Юникод — это стандарт кодирования символов. В JavaScript строки основаны на Юникоде: каждый символ представляет собой последовательность от 1 до 4 байтов.",sections:[{title:"Нотации для символов",content:"JavaScript позволяет вставить символ, указав его шестнадцатеричный код одной из трёх нотаций.",addition:`• \\xXX — 2 шестнадцатеричные цифры (диапазон: 00–FF)
• \\uXXXX — 4 шестнадцатеричные цифры (диапазон: 0000–FFFF)
• \\u{X…XXXXXX} — от 1 до 6 шестнадцатеричных цифр (диапазон: 0–10FFFF)`,examples:`// \\xXX — символы с кодом 0–255
console.log("\\x7A"); // z
console.log("\\xA9"); // ©

// \\uXXXX — символы с кодом 0–65535
console.log("\\u00A9"); // ©
console.log("\\u044F"); // я
console.log("\\u2191"); // ↑

// \\u{} — любые символы Юникода
console.log("\\u{20331}"); // 佫
console.log("\\u{1F60D}"); // 😍`},{title:"Суррогатные пары",content:"Символы с кодом выше U+FFFF кодируются парой 2-байтовых символов — суррогатной парой. Это нужно, так как UTF-16 в JavaScript предусматривает только 2 байта на символ.",addition:`• length показывает 2 для таких символов
• Диапазон первой части: 0xD800–0xDBFF
• Диапазон второй части: 0xDC00–0xDFFF
• Части бессмысленны по отдельности`,examples:`console.log("𝒳".length); // 2
console.log("😂".length); // 2

// charCodeAt vs codePointAt
console.log("𝒳".charCodeAt(0).toString(16)); // d835
console.log("𝒳".codePointAt(0).toString(16)); // 1d4b3

// Опасность: разделение строки может сломать суррогатную пару
"hi 😂".slice(0, 4); // "hi �" (получен битый символ)`},{title:"Диакритические знаки и нормализация",content:"Символы с надстрочными/подстрочными знаками можно составить из основного символа и одного или нескольких символов-меток.",addition:`• Метки добавляются после основного символа
• Визуально одинаковые строки могут иметь разный Юникод
• Для приведения к единому виду используется нормализация (метод normalize)`,examples:`// Составные символы
console.log("S\\u0307"); // Ṡ
console.log("S\\u0307\\u0323"); // Ṩ

// Проблема: разные коды, но одинаковый вид
let s1 = "S\\u0307\\u0323";
let s2 = "S\\u0323\\u0307";
console.log(s1 == s2); // false

// Решение: нормализация
console.log(s1.normalize() == s2.normalize()); // true
// Метод normalize() может "схлопнуть" последовательность в один символ
console.log("S\\u0307\\u0323".normalize().length); // 1`}]}},t1={value:"weakref-finalizationregistry",name:"WeakRef и FinalizationRegistry",content:{introduction:"WeakRef и FinalizationRegistry — это низкоуровневые возможности JavaScript для работы со слабыми ссылками и отслеживания удаления объектов сборщиком мусора. Эти механизмы используются в специфических сценариях оптимизации памяти.",sections:[{title:"WeakRef (Слабые ссылки)",content:`WeakRef — это объект, который содержит слабую ссылку на другой объект.
WeakRef создаётся через new WeakRef(target).

Для получения целевого объекта используется метод deref():
• Если объект ещё жив в памяти — возвращает его
• Если объект уже удалён сборщиком мусора — возвращает undefined`,addition:`• Сильная ссылка — предотвращает удаление объекта сборщиком мусора
• Слабая ссылка — не препятствует удалению объекта
• Если на объект остались только слабые ссылки, GC может его уничтожить
• deref() — единственный способ получить объект из WeakRef
• WeakRef не гарантирует мгновенного удаления объекта`,examples:`// Сильная ссылка
let user = { name: "John" }; // Объект не будет удалён
user = null; // Теперь объект может быть удалён

// Слабая ссылка
let user = { name: "John" };
const weakRef = new WeakRef(user); // Создаём слабую ссылку

user = null; // Удаляем сильную ссылку

// Пытаемся получить объект
const recovered = weakRef.deref();
if (recovered) {
  console.log("Объект ещё жив:", recovered.name);
} else {
  console.log("Объект уже удалён сборщиком мусора");
}`},{title:"FinalizationRegistry (Финализаторы)",content:`FinalizationRegistry — это объект, который позволяет зарегистрировать колбэк (финализатор), вызываемый при удалении объекта сборщиком мусора.
FinalizationRegistry создаётся через new FinalizationRegistry(handler)

Методы:
• register(target, heldValue, unregisterToken) — регистрирует объект для отслеживания
• unregister(unregisterToken) — отменяет регистрацию объекта

Колбэк handler получает heldValue — значение, переданное при регистрации (не сам объект).`,addition:`• Финализаторы не гарантируют немедленного вызова и не подходят для критической логики
• Объект FinalizationRegistry не блокирует удаление target, но блокирует удаление heldValue
• heldValue останется в памяти до вызова колбэка`,examples:`// Создаём реестр финализаторов
const registry = new FinalizationRegistry((heldValue) => {
  console.log(\`Объект "\${heldValue}" удалён сборщиком мусора\`);
});

let user = { name: "John" };
registry.register(user, user.name, user); // Регистрируем

user = null; // Удаляем ссылку

// Когда сборщик мусора удалит объект,
// в консоль будет выведено: Объект "John" удалён сборщиком мусора

// Отмена регистрации до сборки мусора:
// registry.unregister(user);`}]}},n1=[Dx,Bx,zx,e1,kx,Hx,Cx,Ax,Ox,Rx,_x,Lx,Nx,Ux,Mx,Px,Ix,Yx,Fx,qx,Vx,Xx,Jx,Gx,Kx,Zx,Qx,$x,Wx,jx,t1],o1="_filtersContainer_6m2x1_1",a1={filtersContainer:o1},l1=()=>{const{searchQuery:a,searchChange:s,searchReset:i,loadedCount:c,loadMore:d}=Bs();return w.jsx(zs,{title:"Основы языка JavaScript",filtersSlot:w.jsx("div",{className:a1.filtersContainer,children:w.jsx(_u,{searchQuery:a,onSearchChange:s,onSearchReset:i})}),children:w.jsx(Xg,{loadedCount:c,loadMore:d,searchQuery:a,topics:n1})})};var Ya=(a=>(a.OBJECT="object",a.UNION="union",a.FUNCTION="function",a.STRING="string",a.ADVANCED="advanced",a))(Ya||{});const lg={object:"Объекты",union:"Объединения",function:"Функции",string:"Строки",advanced:"Продвинутые"},r1="_container_196gl_1",s1={container:r1},Jg=({pillItems:a,searchQuery:s,onFilterChange:i,onSearchChange:c,onSearchReset:d})=>w.jsxs("div",{className:s1.container,children:[w.jsx(q0,{items:a,onFilterChange:i}),w.jsx(_u,{searchQuery:s,onSearchChange:c,onSearchReset:d})]}),i1="_container_adrm6_1",c1="_table_adrm6_6",rg={container:i1,table:c1},u1=({breakdown:a})=>w.jsx("div",{className:rg.container,children:w.jsxs("table",{className:rg.table,children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{children:"Часть кода"}),w.jsx("th",{children:"Описание"})]})}),w.jsx("tbody",{children:a.map((s,i)=>w.jsxs("tr",{children:[w.jsx("td",{children:w.jsx("code",{children:s.code})}),w.jsx("td",{children:s.description})]},i))})]})}),d1="_card_tr7jp_1",m1="_cardInfo_tr7jp_10",p1="_headerText_tr7jp_18",f1="_cardHeader_tr7jp_23",g1="_buttonArrow_tr7jp_32",h1="_description_tr7jp_46",y1="_signature_tr7jp_51",ea={card:d1,cardInfo:m1,headerText:p1,cardHeader:f1,buttonArrow:g1,description:h1,signature:y1},b1=({utility:a})=>{const[s,i]=N.useState(!1),c=Va(a.description,{highlightStyle:{fontWeight:600,color:"#1864ab"}});return w.jsxs("div",{className:ea.card,children:[w.jsxs("div",{className:ea.cardInfo,children:[w.jsxs("button",{className:ea.cardHeader,onClick:()=>i(d=>!d),children:[w.jsx("h3",{className:ea.headerText,children:a.name}),w.jsx("div",{className:ea.buttonArrow,children:w.jsx(ks,{isOpen:s})})]}),s&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:ea.signature,children:a.signature}),w.jsx("div",{className:ea.description,children:c}),a.syntaxBreakdown&&w.jsx(u1,{breakdown:a.syntaxBreakdown})]})]}),s&&w.jsx(Cu,{text:a.example})]})},v1={[Ya.OBJECT]:[{name:"Partial<T>",description:"Утилитарный тип, создает на основе T новый тип, где все свойства помечены как опциональные.",signature:"type Partial<T> = { [P in keyof T]?: T[P] }",example:`interface User {
  id: number;
  name: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string }`,syntaxBreakdown:[{code:"{ ... }",description:"Создание объектного типа"},{code:"[P in keyof T]",description:"Перебирает все ключи из типа T"},{code:"P",description:"Текущий ключ из типа T на каждой итерации"},{code:"keyof T",description:"Все ключи типа T в виде объединения (union)"},{code:"?:",description:"Делает свойство необязательным"},{code:"T[P]",description:"Тип значения свойства с ключом P из типа T"}]},{name:"Required<T>",description:"Утилитарный тип, создает на основе T новый тип, где все свойства становятся обязательными.",signature:"type Required<T> = { [P in keyof T]-?: T[P] }",example:`interface User {
  id?: number;
  name?: string;
}

type RequiredUser = Required<User>;
// { id: number; name: string }`,syntaxBreakdown:[{code:"{ ... }",description:"Создание объектного типа"},{code:"[P in keyof T]",description:"Перебирает все ключи из типа T"},{code:"P",description:"Текущий ключ из типа T на каждой итерации"},{code:"keyof T",description:"Все ключи типа T в виде объединения (union)"},{code:"-?",description:"Модификатор обязательности — убирает опциональность"},{code:"T[P]",description:"Тип значения свойства с ключом P из типа T"}]},{name:"Readonly<T>",description:"Утилитарный тип, создает на основе T новый тип, где все свойства становятся доступными только для чтения.",signature:"type Readonly<T> = { readonly [P in keyof T]: T[P] }",example:`interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string }`,syntaxBreakdown:[{code:"{ ... }",description:"Создание объектного типа"},{code:"[P in keyof T]",description:"Перебирает все ключи из типа T"},{code:"P",description:"Текущий ключ из типа T на каждой итерации"},{code:"keyof T",description:"Все ключи типа T в виде объединения (union)"},{code:"readonly",description:"Модификатор, запрещающий изменение значения свойства после инициализации"},{code:"T[P]",description:"Тип значения свойства с ключом P из типа T"}]},{name:"Pick<T, K>",description:"Утилитарный тип, создает на основе T новый тип, выбирая только указанные свойства K из T.",signature:"type Pick<T, K extends keyof T> = { [P in K]: T[P] }",example:`interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }`,syntaxBreakdown:[{code:"{ ... }",description:"Создание объектного типа"},{code:"K extends keyof T",description:"Ограничение: K должен быть ключом из T"},{code:"[P in K]",description:"Перебирает только указанные ключи K"},{code:"P",description:"Текущий ключ из набора K на каждой итерации"},{code:"T[P]",description:"Тип значения свойства с ключом P из типа T"}]},{name:"Omit<T, K>",description:"Утилитарный тип, создает на основе T новый тип, исключая указанные свойства K из T.",signature:"type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>",example:`interface User {
  id: number;
  name: string;
  password: string;
}

type UserWithoutPassword = Omit<User, "password">;
// { id: number; name: string }`,syntaxBreakdown:[{code:"K extends keyof any",description:"Ограничение: K может быть любым строковым или числовым ключом"},{code:"keyof T",description:"Все ключи типа T"},{code:"Exclude<keyof T, K>",description:"Исключает указанные ключи K из набора ключей T"},{code:"Pick<T, ...>",description:"Выбирает оставшиеся ключи из T"}]},{name:"Record<K, T>",description:"Утилитарный тип, создает тип объекта, где ключами являются значения из K, а значения свойств имеют тип T.",signature:"type Record<K extends keyof any, T> = { [P in K]: T }",example:`type Roles = "admin" | "user" | "guest";

type RoleDescriptions = Record<Roles, string>;
// { admin: string; user: string; guest: string }`,syntaxBreakdown:[{code:"K extends keyof any",description:"Ограничение: K может быть строкой, числом или символом"},{code:"[P in K]",description:"Перебирает все значения из объединения K"},{code:"P",description:"Текущий ключ из набора K на каждой итерации"},{code:"T",description:"Тип значения для каждого свойства"}]},{name:"ThisType<T>",description:"Утилитарный тип, который не возвращает новый тип, а служит маркером для контекста this в объектных литералах. Используется в сочетании с опцией компилятора noImplicitThis.",signature:"type ThisType<T> = intrinsic",example:`type Logger = { log: (msg: string) => void };

const obj: ThisType<Logger> & { foo: string } = {
  foo: "hello",
  bar() {
    this.log(this.foo); // this имеет тип Logger
  }
};`,syntaxBreakdown:[{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]}],[Ya.UNION]:[{name:"Exclude<T, U>",description:"Утилитарный тип, создает новый тип на основе T, исключая из объединения все члены, которые можно присвоить U.",signature:"type Exclude<T, U> = T extends U ? never : T",example:`type T = "a" | "b" | "c" | "d";

type Result = Exclude<T, "c" | "d">;
// "a" | "b"`,syntaxBreakdown:[{code:"T extends U",description:"Проверяет, можно ли присвоить тип T типу U"},{code:"? never : T",description:"Если T присваивается U — исключаем, иначе оставляем T"},{code:"never",description:"Тип, который никогда не должен существовать (исключается из объединения)"}]},{name:"Extract<T, U>",description:"Утилитарный тип, создает новый тип на основе T, оставляя в объединении только те члены, которые можно присвоить U.",signature:"type Extract<T, U> = T extends U ? T : never",example:`type T = "a" | "b" | "c" | "d" | 1 | 2;

type Result = Extract<T, string>;
// "c" | "d"`,syntaxBreakdown:[{code:"T extends U",description:"Проверяет, можно ли присвоить тип T типу U"},{code:"? T : never",description:"Если T присваивается U — оставляем T, иначе исключаем (never)"},{code:"never",description:"Тип, который никогда не должен существовать (исключается из объединения)"}]},{name:"NonNullable<T>",description:"Утилитарный тип, создает новый тип на основе T, исключая из объединения значения null и undefined.",signature:"type NonNullable<T> = T & {}",example:`type T = string | null | undefined;

type Result = NonNullable<T>;
// string`,syntaxBreakdown:[{code:"T & {}",description:"Пересечение типа T с пустым объектом, которое отсеивает null и undefined"},{code:"&",description:"Оператор пересечения типов (intersection)"},{code:"{}",description:"Пустой объектный тип, который несовместим с null и undefined"}]}],[Ya.FUNCTION]:[{name:"Parameters<T>",description:"Утилитарный тип, извлекает типы параметров функции T и возвращает их в виде кортежа.",signature:"type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never",example:`type Fn = (a: string, b: number) => boolean;

type Params = Parameters<Fn>;
// [string, number]`,syntaxBreakdown:[{code:"T extends (...args: any) => any",description:"Ограничение: T должен быть функцией"},{code:"infer P",description:"Захватывает типы параметров функции в выводной тип P"},{code:"? P : never",description:"Если T — функция, возвращает кортеж с типами параметров P, иначе never"},{code:"never",description:"Тип, который никогда не должен существовать (для невалидных случаев)"}]},{name:"ReturnType<T>",description:"Утилитарный тип, извлекает тип возвращаемого значения функции T.",signature:"type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any",example:`type Fn = (a: string) => boolean;

type Result = ReturnType<Fn>;
// boolean`,syntaxBreakdown:[{code:"T extends (...args: any) => any",description:"Ограничение: T должен быть функцией"},{code:"infer R",description:"Захватывает возвращаемый тип функции в выводной тип R"},{code:"? R : any",description:"Если T — функция, возвращает тип R, иначе any"}]},{name:"ConstructorParameters<T>",description:"Утилитарный тип, извлекает типы параметров конструктора класса T и возвращает их в виде кортежа.",signature:"type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never",example:`class User {
  constructor(public id: number, public name: string) {}
}

type Params = ConstructorParameters<typeof User>;
// [number, string]`,syntaxBreakdown:[{code:"T extends abstract new (...args: any) => any",description:"Ограничение: T должен быть конструктором класса (абстрактным или нет)"},{code:"infer P",description:"Захватывает типы параметров конструктора в выводной тип P"},{code:"? P : never",description:"Если T — конструктор, возвращает кортеж с типами параметров P, иначе never"},{code:"abstract",description:"Ключевое слово, указывающее, что конструктор может быть абстрактным"}]},{name:"InstanceType<T>",description:"Утилитарный тип, извлекает тип экземпляра, создаваемого конструктором класса T.",signature:"type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any",example:`class User {
  constructor(public id: number, name: string) {}
}

type UserInstance = InstanceType<typeof User>;
// User`,syntaxBreakdown:[{code:"T extends abstract new (...args: any) => any",description:"Ограничение: T должен быть конструктором класса (абстрактным или нет)"},{code:"infer R",description:"Захватывает тип экземпляра, создаваемого конструктором, в выводной тип R"},{code:"? R : any",description:"Если T — конструктор, возвращает тип экземпляра R, иначе any"},{code:"abstract",description:"Ключевое слово, указывающее, что конструктор может быть абстрактным"}]},{name:"ThisParameterType<T>",description:"Утилитарный тип, извлекает тип параметра this из функции T, если он объявлен. Если функция не имеет явного this, возвращает unknown.",signature:"type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown",example:`function toHex(this: Number) {
  return this.toString(16);
}

type ThisParam = ThisParameterType<typeof toHex>;
// Number`,syntaxBreakdown:[{code:"this: infer U",description:"Захватывает тип параметра this в выводной тип U"},{code:"...args: never",description:"Игнорирует остальные параметры функции"},{code:"? U : unknown",description:"Если this объявлен — возвращает U, иначе unknown"}]},{name:"OmitThisParameter<T>",description:"Утилитарный тип, удаляет параметр this из типа функции T, возвращая тип функции без него.",signature:"type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T",example:`function toHex(this: Number) {
  return this.toString(16);
}

type WithoutThis = OmitThisParameter<typeof toHex>;
// () => string`,syntaxBreakdown:[{code:"ThisParameterType<T>",description:"Проверяет, есть ли у функции параметр this"},{code:"(...args: infer A) => infer R",description:"Захватывает остальные параметры и возвращаемый тип"},{code:"(...args: A) => R",description:"Возвращает функцию без параметра this"}]}],[Ya.STRING]:[{name:"Uppercase<S>",description:"Утилитарный тип, преобразует все символы строкового типа S в верхний регистр.",signature:"type Uppercase<S extends string> = intrinsic",example:`type T = "hello";

type Result = Uppercase<T>;
// "HELLO"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]},{name:"Lowercase<S>",description:"Утилитарный тип, преобразует все символы строкового типа S в нижний регистр.",signature:"type Lowercase<S extends string> = intrinsic",example:`type T = "HELLO";

type Result = Lowercase<T>;
// "hello"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]},{name:"Capitalize<S>",description:"Утилитарный тип, преобразует первый символ строкового типа S в верхний регистр, остальные символы оставляет без изменений.",signature:"type Capitalize<S extends string> = intrinsic",example:`type T = "hello";

type Result = Capitalize<T>;
// "Hello"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]},{name:"Uncapitalize<S>",description:"Утилитарный тип, преобразует первый символ строкового типа S в нижний регистр, остальные символы оставляет без изменений.",signature:"type Uncapitalize<S extends string> = intrinsic",example:`type T = "Hello";

type Result = Uncapitalize<T>;
// "hello"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]}],[Ya.ADVANCED]:[{name:"Awaited<T>",description:"Утилитарный тип, рекурсивно разворачивает вложенные Promise-типы и возвращает тип итогового значения, которое будет получено после разрешения всех промисов.",signature:"type Awaited<T> = T extends null | undefined ? T : T extends object & { then(onfulfilled: infer F): any } ? F extends (value: infer V, ...args: any) => any ? Awaited<V> : never : T",example:`type P = Promise<Promise<string>>;

type Result = Awaited<P>;
// string`,syntaxBreakdown:[{code:"T extends null | undefined",description:"Если T — null или undefined, возвращает T без изменений"},{code:"T extends object & { then(onfulfilled: infer F): any }",description:"Проверяет, является ли T thenable-объектом (например, Promise) и захватывает функцию обработчика F"},{code:"infer F",description:"Захватывает тип функции-обработчика onfulfilled"},{code:"F extends (value: infer V, ...args: any) => any",description:"Проверяет, что F — функция, и захватывает тип её первого параметра V"},{code:"Awaited<V>",description:"Рекурсивно разворачивает полученный тип V"},{code:"never",description:"Возвращается, если структура не соответствует thenable"}]},{name:"NoInfer<T>",description:"Утилитарный тип, блокирует автоматический вывод (inference) типа T компилятором TypeScript. Используется для ограничения вывода в обобщенных функциях, чтобы тип определялся только по определенным аргументам.",signature:"type NoInfer<T> = T & {}",example:`function fn<T>(a: T, b: NoInfer<T>) {}

// T выводится из первого аргумента
fn(1, 2);
// ✅ (T = number)
fn(1, "2");
// ❌ (T = number, но второй аргумент не number)`,syntaxBreakdown:[{code:"T & {}",description:'Пересечение типа T с пустым объектом, которое "прячет" T от механизма вывода типов'},{code:"&",description:"Оператор пересечения типов (intersection)"},{code:"{}",description:"Пустой объектный тип, который создает контекст, не влияющий на вывод"}]},{name:"ReadonlyArray<T>",description:"Утилитарный тип, создает неизменяемый массив, где все методы, изменяющие массив, недоступны. Элементы массива доступны только для чтения.",signature:"interface ReadonlyArray<T> { ... }",example:`const arr: ReadonlyArray<number> = [1, 2, 3];

arr[0] = 10;// ❌ Ошибка!
arr.push(4); // ❌ Ошибка!
console.log(arr.map(x => x * 2)); // ✅ [2, 4, 6]`,syntaxBreakdown:[{code:"ReadonlyArray<T>",description:"Тип массива, доступного только для чтения"},{code:"T",description:"Тип элементов массива"}]}]},x1="_categorySection_8yy1a_1",S1="_categoryTitle_8yy1a_9",E1="_typesList_8yy1a_17",T1="_noResult_8yy1a_23",Ms={categorySection:x1,categoryTitle:S1,typesList:E1,noResult:T1},w1=()=>{const{activeCategories:a,searchQuery:s,loadedCount:i,filterChange:c,searchChange:d,searchReset:m}=Bs(),{pillItems:f,itemsToShow:h}=qg({activeCategories:a,searchQuery:s,loadedCount:i,config:v1,getLabel:y=>lg[y]});return w.jsxs(zs,{title:"Utility Types",filtersSlot:w.jsx(Jg,{pillItems:f,onFilterChange:c,searchQuery:s,onSearchChange:d,onSearchReset:m}),children:[Object.entries(h).map(([y,p])=>w.jsxs("div",{className:Ms.categorySection,children:[w.jsx("h2",{className:Ms.categoryTitle,children:lg[y]}),w.jsx("div",{className:Ms.typesList,children:p.map((E,x)=>w.jsx(b1,{utility:E},`${y}-${x}`))})]},y)),Object.entries(h).length===0&&w.jsx("div",{className:Ms.noResult,children:"По данному запросу данных нет"})]})},j1=()=>w.jsx("div",{children:"MainPage"});var xt=(a=>(a.ARRAY="ARRAY",a.STRING="STRING",a.NUMBER="NUMBER",a.SYMBOL="SYMBOL",a.OBJECT="OBJECT",a.MAP="MAP",a.WEAK_MAP="WEAK_MAP",a.SET="SET",a.WEAK_SET="WEAK_SET",a.MATH="MATH",a.DATE="DATE",a.JSON="JSON",a.PROMISE="PROMISE",a.FUNCTION="FUNCTION",a.REFLECT="REFLECT",a.UTIL="UTIL",a.INTL="INTL",a))(xt||{});const sg={ARRAY:"Array",STRING:"String",NUMBER:"Number",OBJECT:"Object",MAP:"Map",WEAK_MAP:"WeakMap",SET:"Set",WEAK_SET:"WeakSet",MATH:"Math",DATE:"Date",JSON:"JSON",PROMISE:"Promise",FUNCTION:"Function",SYMBOL:"Symbol",REFLECT:"Reflect",UTIL:"Util",INTL:"Intl"},M1="_container_1ch1g_1",O1="_header_1ch1g_10",N1="_list_1ch1g_19",R1="_error_1ch1g_23",Os={container:M1,header:O1,list:N1,error:R1},D1=({method:a})=>{const s=Va(a.errors,{highlightStyle:{fontWeight:600,color:"#da3030ff"}});return w.jsxs("div",{className:Os.container,children:[w.jsx("div",{className:Os.header,children:"Возможные ошибки:"}),w.jsx("ul",{className:Os.list,children:w.jsx("div",{className:Os.error,children:s})})]})},A1="_methodCard_1s7ty_1",C1="_methodInfo_1s7ty_18",_1="_methodHeader_1s7ty_26",L1="_buttonArrow_1s7ty_33",U1="_methodName_1s7ty_47",k1="_methodSyntax_1s7ty_52",z1="_parametersBlock_1s7ty_63",B1="_parametersTitle_1s7ty_70",H1="_parametersList_1s7ty_78",P1="_parameterItem_1s7ty_84",I1="_parameterName_1s7ty_97",Y1="_parameterDescription_1s7ty_107",F1="_methodDescription_1s7ty_119",q1="_specLink_1s7ty_124",Bt={methodCard:A1,methodInfo:C1,methodHeader:_1,buttonArrow:L1,methodName:U1,methodSyntax:k1,parametersBlock:z1,parametersTitle:B1,parametersList:H1,parameterItem:P1,parameterName:I1,parameterDescription:Y1,methodDescription:F1,specLink:q1},V1=({method:a})=>{const[s,i]=N.useState(!1),c=Va(a.description,{highlightStyle:{fontWeight:600,color:"#1864ab"}});return w.jsxs("div",{className:Bt.methodCard,children:[w.jsxs("div",{className:Bt.methodInfo,children:[w.jsxs("button",{className:Bt.methodHeader,onClick:()=>i(d=>!d),children:[w.jsx("h3",{className:Bt.methodName,children:a.name}),w.jsx("div",{className:Bt.buttonArrow,children:w.jsx(ks,{isOpen:s})})]}),s&&w.jsxs(w.Fragment,{children:[w.jsx("code",{className:Bt.methodSyntax,children:a.syntax}),a.parameters&&a.parameters.length>0&&w.jsxs("div",{className:Bt.parametersBlock,children:[w.jsx("div",{className:Bt.parametersTitle,children:"Параметры:"}),w.jsx("div",{className:Bt.parametersList,children:a.parameters.map((d,m)=>w.jsx("div",{className:Bt.parameterItem,children:w.jsxs("span",{className:Bt.parameterName,children:[d.name," "," - ",w.jsx("span",{className:Bt.parameterDescription,children:d.description})]})},m))})]}),w.jsxs("p",{className:Bt.methodDescription,children:[" ",c]}),a.specification&&w.jsx("a",{href:a.specification,target:"_blank",rel:"noopener noreferrer",className:Bt.specLink,children:"📖 Подробнее в спецификации"}),a.errors&&a.errors.length>0&&w.jsx(D1,{method:a})]})]}),s&&a.example&&w.jsx(Cu,{text:a.example})]})},X1={[xt.NUMBER]:[{name:"toFixed()",syntax:"num.toFixed([digits])",parameters:[{name:"digits",description:"Количество цифр после десятичной точки (от 0 до 100)"}],description:"Метод объекта Number, округляет исходное число до digits и возвращает результат в виде строки.",example:`const num = 123.123;
console.log(num.toFixed(2)); // '123.12'

// Округление до ближайшего целого:
const num2 = 123.567;
console.log(num2.toFixed(0)); // '124'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tofixed",errors:`RangeError — если digits не в диапазоне от 0 до 100.
TypeError — если this не является числом.`},{name:"toString()",syntax:"num.toString([radix])",parameters:[{name:"radix",description:"Основание системы счисления (по умолчанию 10)"}],description:"Метод объекта Number, возвращает строковое представление исходного числа в системе счисления с radix.",example:`const num = 123;
console.log(num.toString()); // '123'
console.log(num.toString(2)); // '1111011'
console.log(num.toString(16)); // '7b'
console.log(num.toString(36)); // '3f'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring",errors:`RangeError — если radix не в диапазоне от 2 до 36.
TypeError — если this является null или undefined.`},{name:"toExponential()",syntax:"num.toExponential([fractionDigits])",parameters:[{name:"fractionDigits",description:"Количество цифр после десятичной точки"}],description:"Метод объекта Number, возвращает строковое представление исходного числа в экспоненциальной записи, округлённое до fractionDigits.",example:`// Большие числа:
const bigNumber = 123456.789;
console.log(bigNumber.toExponential(4)); // '1.2346e+5'

// Маленькие числа:
const smallNumber = 0.000123456;
console.log(smallNumber.toExponential(3)); // '1.235e-4'

// Целые числа:
const integer = 42;
console.log(integer.toExponential(0)); // '4e+1'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toexponential",errors:`RangeError — если fractionDigits не в диапазоне от 0 до 100.
TypeError — если this не является числом.`},{name:"toPrecision()",syntax:"num.toPrecision([precision])",parameters:[{name:"precision",description:"Количество значащих цифр"}],description:"Метод объекта Number, возвращает строковое представление исходного числа в формате с фиксированным precision, округляя при необходимости. Если аргумент не передан, то будет возвращено исходное число. Если указанное количество знаков не достижимо обрезанием десятичной части - переводит число в экспоненциальную форму.",example:`const num = 123.456;
console.log(num.toPrecision()); // '123.456'
console.log(num.toPrecision(4)); // '123.5'
console.log(num.toPrecision(2)); // '1.2e+2'
console.log(num.toPrecision(1)); // '1e+2'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.toprecision",errors:`RangeError — если precision не в диапазоне от 1 до 100.
TypeError — если this не является числом.`},{name:"toLocaleString()",syntax:"num.toLocaleString([locales[, options]])",parameters:[{name:"locales",description:"Строка с кодом локали или массив таких строк (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками форматирования:
Основные стили (style):
 • style: 'decimal' — десятичное число (по умолчанию)
 • style: 'currency' — формат валюты (требует указания currency)
 • style: 'percent' — формат процентов (число умножается на 100)
 • style: 'unit' — формат с единицей измерения (требует указания unit)
Настройки валюты (при style: "currency"):
 • currency — код валюты (например, 'USD', 'EUR', 'RUB')
 • currencyDisplay: 'symbol' — символ валюты (по умолчанию)
 • currencyDisplay: 'code' — буквенный код
 • currencyDisplay: 'name' — полное название
Настройки единиц измерения (при style: "unit"):
 • unit — единица измерения (например, 'liter', 'meter', 'kilogram', 'celsius')
 • unitDisplay: 'short' — сокращённое обозначение (по умолчанию)
 • unitDisplay: 'long' — полное название
 • unitDisplay: 'narrow' — узкое сокращение
Форматирование чисел:
 • useGrouping — использовать разделители групп разрядов (true/false)
 • minimumIntegerDigits — минимальное количество целых цифр (1-21)
 • minimumFractionDigits — минимальное количество дробных цифр (0-20)
 • maximumFractionDigits — максимальное количество дробных цифр (0-20)
 • minimumSignificantDigits — минимальное количество значащих цифр (1-21)
 • maximumSignificantDigits — максимальное количество значащих цифр (1-21)`}],description:"Метод объекта Number, преобразует исходное число в строку с учётом локали. Поддерживает различные стили форматирования: десятичные числа, валюту, проценты, единицы измерения. Позволяет настраивать количество цифр, разделители и другие параметры отображения. Игнорирует невалидные значения.",example:`const num = 123456.789;
const result1 = num.toLocaleString('ru-RU');
console.log(result1); // '123 456,789'

const result2 = num.toLocaleString('en-US');
console.log(result2); // '123,456.789'

const result3 = num.toLocaleString('de-DE', {
  style: 'currency',
  currency: 'EUR',
});
console.log(result3); // '123.456,79 €'

const result4 = num.toLocaleString('ja-JP', {
  style: 'currency',
  currency: 'JPY',
});
console.log(result4); // '¥123,457'

const result5 = num.toLocaleString('ru-RU', {
  style: 'percent',
});

console.log(result5); // '12 345 679 %'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tolocalestring",errors:`TypeError — если this не является числом.
RangeError — если locales содержит недопустимые языковые теги.`},{name:"Number.isInteger()",syntax:"Number.isInteger(value)",parameters:[{name:"value",description:"Значение, которое нужно проверить на целочисленность"}],description:"Статический метод объекта Number, проверяет, является ли value целым числом. Возвращает true, если является целым числом, иначе false.",example:`console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.0)); // true
console.log(Number.isInteger(42.5)); // false
console.log(Number.isInteger('42')); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isinteger"},{name:"Number.isSafeInteger()",syntax:"Number.isSafeInteger(value)",parameters:[{name:"value",description:"Значение для проверки"}],description:"Статический метод объекта Number, возвращает true, если value является целым числом (тип number) и находится в безопасном диапазоне от -(2⁵³ - 1) до 2⁵³ - 1.",example:`console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(42.5)); // false`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.issafeinteger"},{name:"Number.isNaN()",syntax:"Number.isNaN(value)",parameters:[{name:"value",description:"Значение, которое нужно проверить на NaN"}],description:"Статический метод объекта Number, возвращает true только если value имеет тип number и является NaN. Во всех остальных случаях возвращает false.",example:`console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('NaN')); // false
console.log(Number.isNaN('123')); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN('abc')); // false`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isnan"},{name:"Number.isFinite()",syntax:"Number.isFinite(value)",parameters:[{name:"value",description:"Значение, которое нужно проверить на конечность"}],description:"Статический метод объекта Number, возвращает true только в том случае, если value принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.",example:`console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(42.5)); // true
console.log(Number.isFinite('42')); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(null)); // false`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.isfinite"},{name:"Number.EPSILON",syntax:"Number.EPSILON",parameters:[],description:"Статическое свойство объекта Number, представляет собой разницу между 1 и наименьшим числом, которое больше 1. Используется для проверки точности вычислений с плавающей точкой.",example:`console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
console.log(Number.EPSILON); // 2.220446049250313e-16`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.epsilon"},{name:"Number.MAX_SAFE_INTEGER",syntax:"Number.MAX_SAFE_INTEGER",parameters:[],description:"Статическое свойство объекта Number, представляет собой максимальное безопасное целое число (2⁵³ - 1 = 9007199254740991).",example:"console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.max_safe_integer"},{name:"Number.MIN_SAFE_INTEGER",syntax:"Number.MIN_SAFE_INTEGER",parameters:[],description:"Статическое свойство объекта Number, представляет собой минимальное безопасное целое число (-(2⁵³ - 1) = -9007199254740991).",example:"console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.min_safe_integer"},{name:"Number.MAX_VALUE",syntax:"Number.MAX_VALUE",parameters:[],description:"Статическое свойство объекта Number, представляет собой максимальное положительное число, которое можно представить (примерно 1.79e+308).",example:"console.log(Number.MAX_VALUE); // 1.7976931348623157e+308",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.max_value"},{name:"Number.MIN_VALUE",syntax:"Number.MIN_VALUE",parameters:[],description:"Статическое свойство объекта Number, представляет собой минимальное положительное число, которое можно представить (примерно 5e-324).",example:`console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE > 0); // true`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.min_value"},{name:"Number.NaN",syntax:"Number.NaN",parameters:[],description:'Статическое свойство объекта Number, представляет собой специальное значение "Not-a-Number".',example:`console.log(Number.NaN); // NaN
console.log(isNaN(Number.NaN)); // true
console.log(Number.NaN === NaN); // false (NaN не равно самому себе)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.nan"},{name:"Number.POSITIVE_INFINITY",syntax:"Number.POSITIVE_INFINITY",parameters:[],description:"Статическое свойство объекта Number, представляет собой положительную бесконечность.",example:"console.log(Number.POSITIVE_INFINITY); // Infinity",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.positive_infinity"},{name:"Number.NEGATIVE_INFINITY",syntax:"Number.NEGATIVE_INFINITY",parameters:[],description:"Статическое свойство объекта Number, представляет собой отрицательную бесконечность.",example:"console.log(Number.NEGATIVE_INFINITY); // -Infinity",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.negative_infinity"}]},J1={[xt.STRING]:[{name:"toUpperCase()",syntax:"str.toUpperCase()",description:"Метод объекта String, возвращает копию исходной строки, приведённую в верхний регистр.",example:`const filename = 'readme.md';
console.log(filename.toUpperCase()); // 'README.MD'

const currency = 'eur/usd';
console.log(currency.toUpperCase()); // 'EUR/USD'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.touppercase",errors:"TypeError — если this не является строкой."},{name:"toLowerCase()",syntax:"str.toLowerCase()",description:"Метод объекта String, возвращает копию исходной строки, приведённую в нижний регистр.",example:`const config = 'BACKGROUND_COLOR';
console.log(config.toLowerCase()); // 'background_color'

const domain = 'EXAMPLE.COM';
console.log(domain.toLowerCase()); // 'example.com'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolowercase",errors:"TypeError — если this не является строкой."},{name:"startsWith()",syntax:"str.startsWith(searchString[, position])",parameters:[{name:"searchString",description:"Подстрока для поиска"},{name:"position",description:"Индекс с которого начинается поиск (по умолчанию 0)"}],description:"Метод объекта String, проверяет, начинается ли исходная строка searchString, начиная с position, если да - возвращает true, иначе false.",example:`const path = '/home/user/documents';
console.log(path.startsWith('/home')); // true
console.log(path.startsWith('user')); // false
console.log(path.startsWith('user', 6)); // true`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.startswith",errors:"TypeError — если this не является строкой."},{name:"endsWith()",syntax:"str.endsWith(searchString[, position])",parameters:[{name:"searchString",description:"Подстрока для поиска"},{name:"position",description:"Индекс, до которого выполняется поиск (по умолчанию — длина строки)"}],description:"Метод объекта String, проверяет, заканчивается ли исходная строка searchString, начиная с position, если да - возвращает true, иначе false.",example:`const filename = 'document.pdf';
console.log(filename.endsWith('.pdf')); // true
console.log(filename.endsWith('.txt')); // false`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.endswith",errors:"TypeError — если this не является строкой."},{name:"replace()",syntax:"str.replace(pattern, replacement)",parameters:[{name:"pattern",description:"Строка или регулярное выражение. Если строка — заменяет только первое вхождение. Если RegExp с флагом /g — заменяет все вхождения."},{name:"replacement",description:"Строка или функция. Строка может содержать спецпоследовательности ($&, $1..$9, $`, $', $$). Функция вызывается для каждого совпадения."}],description:"Метод объекта String, возвращает новую строку с заменёнными совпадениями pattern на replacement.",example:`const text = 'Удалить пробелы';
const result1 = text.replace('пробелы', 'запятые');
console.log(result1); // 'Удалить запятые'

// Замена всех вхождений с флагом g
const str = 'a1b2c3';
console.log(str.replace(/\\d/g, '#')); // 'a#b#c#'

// Использование спецсимволов в replacement
console.log('Hello'.replace(/l/g, '$&$&')); // 'Hellllo'

// Функция в качестве replacement
const str = 'a1b2c3';
const result = str.replace(/\\d/g, match => parseInt(match) * 2);
console.log(result); // 'a2b4c6'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replace",errors:"TypeError — если this не является строкой."},{name:"replaceAll()",syntax:"str.replaceAll(pattern, replacement)",parameters:[{name:"pattern",description:"Строка или регулярное выражение с флагом /g."},{name:"replacement",description:"Строка или функция для замены всех найденных совпадений. Строка может содержать спецпоследовательности ($&, $1..$9, $`, $', $$)."}],description:"Метод объекта String, возвращает новую строку, заменяя все вхождения pattern на replacement.",example:`const version = 'Node.js v18.17.0';
const res1 = version.replaceAll('v18', 'v20');
console.log(res1); // 'Node.js v20.17.0'

const email = 'user@example.com';
const res2 = email.replaceAll(/\\./g, '-');
console.log(res2); // 'user@example-com'

// Замена всех цифр
const str = 'a1b2c3';
const res3 = str.replaceAll(/\\d/g, '#');
console.log(res3); // 'a#b#c#'

// Функция в качестве replacement
const res4 = 'a1b2c3'.replaceAll(/\\d/g, match => parseInt(match) * 2);
console.log(res4); // 'a2b4c6'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replaceall",errors:"TypeError — если this не является строкой или pattern является регулярным выражением без флага 'g'."},{name:"at()",syntax:"str.at(index)",parameters:[{name:"index",description:"Индекс символа (может быть отрицательным - отсчёт с конца)"}],description:"Метод объекта String, возвращает символ по index. Если индекс выходит за границы строки, возвращает undefined.",example:`const filename = 'config.json';
console.log(filename.at(0)); // 'c'
console.log(filename.at(-5)); // 'j'
console.log(filename.at(20)); // undefined`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.at",errors:"TypeError — если this не является строкой или массивом."},{name:"charAt()",syntax:"str.charAt(index)",parameters:[{name:"index",description:"Индекс символа"}],description:"Метод объекта String, возвращает символ по index. Если индекс выходит за границы строки - возвращает пустую строку.",example:`const domain = 'example.com';
console.log(domain.charAt(0)); // 'e'
console.log(domain.charAt(7)); // '.'
console.log(domain.charAt(20)); // ''`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.charat",errors:"TypeError — если this не является строкой."},{name:"charCodeAt()",syntax:"str.charCodeAt(index)",parameters:[{name:"index",description:"Индекс символа, код которого нужно получить"}],description:"Метод объекта String, возвращает код символа (UTF-16) по index. Возвращает целое число от 0 до 65535 или NaN, если index выходит за границы исходной строки.",example:`const str = 'ABC';
console.log(str.charCodeAt(0)); // 65
console.log(str.charCodeAt(1)); // 66
console.log(str.charCodeAt(10)); // NaN`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.charcodeat",errors:"TypeError — если this не является строкой."},{name:"indexOf()",syntax:"str.indexOf(searchValue[, startIndex])",parameters:[{name:"searchValue",description:"Подстрока для поиска"},{name:"startIndex",description:"Индекс начала поиска (по умолчанию 0)"}],description:"Метод объекта String, выполняет поиск searchValue в исходной строке, начиная с startIndex. Метод возвращает индекс первого совпадения или -1, если searchValue не найдена.",example:`const url = 'https:/site.com';
console.log(url.indexOf(':/')); // 5
console.log(url.indexOf('site')); // 7
console.log(url.indexOf('ftp')); // -1`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.indexof",errors:"TypeError — если this не является строкой или массивом."},{name:"lastIndexOf()",syntax:"str.lastIndexOf(searchValue[, fromIndex])",parameters:[{name:"searchValue",description:"Подстрока для поиска"},{name:"fromIndex",description:"Индекс начала поиска (по умолчанию равен длине строки)"}],description:"Метод объекта String, выполняет поиск searchValue в исходной строке в обратном направлении, начиная с fromIndex. Метод возвращает индекс первого совпадения или -1, если searchValue не найдена.",example:`const path = '/home/user/docs';
console.log(path.lastIndexOf('/')); // 11
console.log(path.lastIndexOf('docs')); // 12
console.log(path.lastIndexOf('user', 8)); // 6`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.lastindexof",errors:"TypeError — если this не является строкой или массивом."},{name:"includes()",syntax:"str.includes(searchString[, position])",parameters:[{name:"searchString",description:"Подстрока для поиска"},{name:"position",description:"Индекс начала поиска (по умолчанию 0)"}],description:"Метод объекта String, проверяет, содержит ли исходная строка searchString, начиная с position. Возвращает true если содержит, иначе false.",example:`const file = 'document.pdf';
console.log(file.includes('.pdf')); // true
console.log(file.includes('.txt')); // false
console.log(file.includes('doc')); // true`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.includes",errors:"TypeError — если this не является строкой или массивом."},{name:"slice()",syntax:"str.slice([start[, end]])",parameters:[{name:"start",description:"Индекс начала подстроки (может быть отрицательным)"},{name:"end",description:"Индекс конца подстроки (не включая, может быть отрицательным)"}],description:`Метод объекта String, возвращает новую строку, содержащую символы исходной строки:
• С двумя аргументами: символы от start до end;
• С одним аргументом: символы от start до конца строки;
• Без аргументов: полную копию исходной строки.`,example:`const filename = 'document.pdf';
console.log(filename.slice(0, -4)); // 'document'
console.log(filename.slice(-4)); // '.pdf'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.slice",errors:"TypeError — если this не является строкой или массивом."},{name:"substring()",syntax:"str.substring(start[, end])",parameters:[{name:"start",description:"Индекс начала подстроки"},{name:"end",description:"Индекс конца подстроки (не включая)"}],description:`Метод объекта String, возвращает новую строку, содержащую символы исходной строки:
• С двумя аргументами: символы от start до end, аргументы автоматически меняются местами, если start > end;
• С одним аргументом: символы от start до конца строки;
• Без аргументов: полную копию исходной строки.`,example:`const filename = 'image.png';
console.log(filename.substring(0, 5)); // 'image'
console.log(filename.substring(5)); // '.png'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.substring",errors:"TypeError — если this не является строкой."},{name:"codePointAt()",syntax:"str.codePointAt(index)",parameters:[{name:"index",description:"Индекс символа, код которого нужно получить"}],description:"Метод объекта String, возвращает код символа Unicode по index. Возвращает целое число от 0 до 1114111 (0x10FFFF) или undefined, если index выходит за границы исходной строки. Корректно обрабатывает суррогатные пары.",example:`const emoji = '🚀火箭';
console.log(emoji.codePointAt(0)); // 128640
console.log(emoji.codePointAt(2)); // 28779
console.log(emoji.codePointAt(10)); // undefined`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.codepointat",errors:"TypeError — если this не является строкой."},{name:"localeCompare()",syntax:"str.localeCompare(compareString[, locales[, options]])",parameters:[{name:"compareString",description:"Строка для сравнения с исходной строкой"},{name:"locales",description:"Строка с кодом локали или массив таких строк (например, 'ru-RU', 'en-US', 'de-DE')"},{name:"options",description:`Объект с настройками сравнения:
Основные настройки:
 • usage: 'sort' — для сортировки (по умолчанию), 'search' — для поиска (учитывает, что строка может быть больше или меньше)
 • sensitivity: чувствительность сравнения:
   • 'base' — различаются только базовые буквы (a ≠ b, но a = á)
   • 'accent' — различаются базовые буквы и диакритические знаки (a ≠ á, но a = A)
   • 'case' — различаются базовые буквы и регистр (a ≠ A, но a = á)
   • 'variant' — различается всё (a ≠ A ≠ á) — значение по умолчанию
 • ignorePunctuation: true/false — игнорировать знаки пунктуации (например, 'a,b' = 'ab')
 • numeric: true/false — числовое сравнение (при true '10' > '2')
 • caseFirst: порядок букв по регистру:
   • 'upper' — заглавные буквы идут первыми
   • 'lower' — строчные буквы идут первыми
   • 'false' — порядок определяется локалью (по умолчанию)
 • collation: строка с правилами сортировки (например, "phonebook" для немецкого, "pinyin" для китайского)
 • ignorePunctuation: true/false — игнорировать пунктуацию при сравнении`}],description:`Метод объекта String, сравнивает исходную строку с (compareString) с учётом правил языка (локали). Возвращает число:
 • отрицательное, если исходная строка меньше (compareString);
 • положительное, если исходная строка больше (compareString);
 • 0, если строки равны с учётом локали.`,example:`// Базовое сравнение
const result1 = 'café'.localeCompare('cafe');
console.log(result1); // 1 (é > e)

// Числовое сравнение
const result2 = '10'.localeCompare('2', undefined, {
 numeric: true
});
console.log(result2); // 1 (10 > 2)

// Чувствительность к диакритике
const result3 = 'résumé'.localeCompare('resume', 'fr', {
  sensitivity: 'base'
});
console.log(result3); // 0 (сравнение без учёта диакритики)

// Сравнение с игнорированием пунктуации
const result4 = 'a,b'.localeCompare('ab', undefined, {
 ignorePunctuation: true
});
console.log(result4); // 0 (равны после удаления пунктуации)`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.localecompare",errors:`TypeError — если this не является строкой.
RangeError — если locales содержит недопустимые языковые теги.`},{name:"toLocaleLowerCase()",syntax:"str.toLocaleLowerCase([locale])",parameters:[{name:"locale",description:"Строка или массив строк с кодом локали (например, 'tr', 'az')"}],description:"Метод объекта String, возвращает строку в нижнем регистре с учётом правил локали locale.",example:`const str = 'İstanbul';
console.log(str.toLocaleLowerCase('tr')); // 'istanbul'
console.log(str.toLocaleLowerCase('en')); // 'i̇stanbul'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolocalelowercase",errors:"TypeError — если this не является строкой."},{name:"toLocaleUpperCase()",syntax:"str.toLocaleUpperCase([locale])",parameters:[{name:"locale",description:"Строка или массив строк с кодом локали (например, 'tr', 'az')"}],description:"Метод объекта String, возвращает строку в верхнем регистре с учётом правил локали locale.",example:`const str = 'istanbul';
console.log(str.toLocaleUpperCase('tr')); // 'İSTANBUL'
console.log(str.toLocaleUpperCase('en')); // 'ISTANBUL'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.tolocaleuppercase",errors:"TypeError — если this не является строкой."},{name:"trim()",syntax:"str.trim()",description:"Метод объекта String, возвращает новую строку на основе исходной строки, удаляя все пробельные символы (пробелы, табуляции, неразрывные пробелы) с её начала и конца.",example:`const input = '   user@example.com   ';
const cleaned = input.trim();
console.log(cleaned); // 'user@example.com'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trim",errors:"TypeError — если this не является строкой."},{name:"trimStart()",syntax:"str.trimStart()",description:"Метод объекта String, возвращает новую строку с удалёнными пробельными символами в начале исходной строки.",example:`const str = '   Hello World!   ';
console.log(str.trimStart()); // 'Hello World!   '`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimstart",errors:"TypeError — если this не является строкой."},{name:"trimEnd()",syntax:"str.trimEnd()",description:"Метод объекта String, возвращает новую строку с удалёнными пробельными символами в конце исходной строки.",example:`const str = '   Hello World!   ';
console.log(str.trimEnd()); // '   Hello World!'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimend",errors:"TypeError — если this не является строкой."},{name:"padStart()",syntax:"str.padStart(targetLength[, padString])",parameters:[{name:"targetLength",description:"Целевая длина строки после дополнения"},{name:"padString",description:"Строка для дополнения (по умолчанию пробел)"}],description:"Метод объекта String, возвращает новую строку, дополняя исходную строку символами padString слева до достижения targetLength.",example:`const code = '42';
console.log(code.padStart(5, '0')); // '00042'
console.log(code.padStart(5)); // '   42'
console.log('abc'.padStart(10, '123')); // '1231231abc'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.padstart",errors:"TypeError — если this не является строкой."},{name:"padEnd()",syntax:"str.padEnd(targetLength[, padString])",parameters:[{name:"targetLength",description:"Целевая длина строки после дополнения"},{name:"padString",description:"Строка для дополнения (по умолчанию пробел)"}],description:"Метод объекта String, возвращает новую строку, дополняя исходную строку символами padString справа до достижения targetLength.",example:`const code = '42';
console.log(code.padEnd(5, '0')); // '42000'
console.log(code.padEnd(5)); // '42   '
console.log('abc'.padEnd(10, '123')); // 'abc1231231'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.padend",errors:"TypeError — если this не является строкой."},{name:"repeat()",syntax:"str.repeat(count)",parameters:[{name:"count",description:"Количество повторений строки (целое число от 0)"}],description:"Метод объекта String, возвращает новую строку, представляющую собой исходную строку, повторённую count раз. Если count равен 0, возвращает пустую строку.",example:`const separator = '---';
console.log(separator.repeat(3)); // '------------'

const loading = '.';
console.log(loading.repeat(5)); // '.....'

const pattern = 'abc';
console.log(pattern.repeat(2)); // 'abcabc'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.repeat",errors:`TypeError — если this не является строкой.
RangeError — если count отрицательный или превышает максимально допустимое значение.`},{name:"concat()",syntax:"str.concat(...strings)",parameters:[{name:"...strings",description:"Одна или несколько строк для объединения с исходной строкой"}],description:"Метод объекта String, возвращает новую строку, в которую копирует содержимое из исходной строки и ...strings.",example:`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName.concat(' ', lastName);
console.log(fullName); // 'John Doe'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.concat",errors:"TypeError — если this не является строкой или массивом."},{name:"split()",syntax:"str.split([separator[, limit]])",parameters:[{name:"separator",description:"Разделитель для разбиения строки (строка или регулярное выражение)"},{name:"limit",description:"Ограничение количества элементов в результате"}],description:"Метод объекта String, разбивает исходную строку на массив по separator. limit отвечает за ограничение количества элементов в массиве, если их больше чем указано, то остаток будет отброшен.",example:`const date = '2024-12-25';
const parts = date.split('-');
console.log(parts); // ['2024', '12', '25']`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.split",errors:"TypeError — если this не является строкой."},{name:"isWellFormed()",syntax:"str.isWellFormed()",description:"Метод объекта String, проверяет, является ли исходная строка корректной UTF-16 (не содержит одиночных суррогатов). Возвращает true, если все суррогаты образуют корректные пары или их нет, иначе false.",example:`const str = 'Hello';
console.log(str.isWellFormed()); // true
const invalid = '\\uD800';
console.log(invalid.isWellFormed()); // false`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.iswellformed",errors:"TypeError — если this не является строкой."},{name:"toWellFormed()",syntax:"str.toWellFormed()",description:"Метод объекта String, возвращает новую строку, заменяя все одиночные суррогаты в исходной строке на символ замены U+FFFD (�).",example:`const valid = 'Hello 😀';
console.log(valid.toWellFormed()); // 'Hello 😀'

const invalid = '\\uD800';
console.log(invalid.toWellFormed()); // '�'

const mixed = '\\uD800Hello\\uDC00';
console.log(mixed.toWellFormed()); // '�Hello�'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.towellformed",errors:"TypeError — если this не является строкой."},{name:"normalize()",syntax:"str.normalize([form])",parameters:[{name:"form",description:"Форма нормализации (по умолчанию 'NFC')"}],description:"Метод объекта String, возвращает строку в form Unicode.",example:`const str = 'café';
const str2 = 'cafe\\u0301';
console.log(str === str2); // false
console.log(str === str2.normalize()); // true`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.normalize",errors:`TypeError — если this не является строкой.
RangeError — если form не 'NFC', 'NFD', 'NFKC' или 'NFKD'.`},{name:"match()",syntax:"str.match(regexp)",parameters:[{name:"regexp",description:"Регулярное выражение для поиска совпадений"}],description:"Метод объекта String, возвращает массив совпадений при поиске по regexp. Без флага /g возвращает первый результат с группами захвата. С флагом /g возвращает массив всех совпадений.",example:`const str = 'The quick';
console.log(str.match(/[aeiou]/g)); // ['e', 'u', 'i']
console.log(str.match(/xyz/g)); // null

const result = str.match(/quick/);
console.log(result); // ['quick']
console.log(result.index);  // 4
console.log(result.input);  // 'The quick'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.match",errors:"TypeError — если this не является строкой."},{name:"matchAll()",syntax:"str.matchAll(regexp)",parameters:[{name:"regexp",description:"Регулярное выражение с флагом /g"}],description:"Метод объекта String, возвращает итератор по всем совпадениям regexp, включая группы захвата.",example:`const str = 'The quick';
const matches = [...str.matchAll(/[aeiou]/g)];
console.log(matches[0]); // ['e']
console.log(matches[0].index); // 2
console.log(matches[0].input); // 'The quick'

const str2 = 'test1 test2';
const matches2 = [...str2.matchAll(/test(\\d)/g)];
console.log(matches2[0]); // ['test1', '1']
console.log(matches2[0].index); // 0
console.log(matches2[0].input); // 'test1 test2'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.matchall",errors:"TypeError — если this не является строкой или regexp не имеет флага /g."},{name:"search()",syntax:"str.search(regexp)",parameters:[{name:"regexp",description:"Регулярное выражение для поиска"}],description:"Метод объекта String, возвращает индекс первого совпадения с regexp или -1, если совпадение не найдено.  Флаг /g в регулярном выражении игнорируется.",example:`const str = 'The quick brown fox';
console.log(str.search(/quick/)); // 4
console.log(str.search(/brown/)); // 10
console.log(str.search(/xyz/)); // -1`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.search",errors:"TypeError — если this не является строкой."},{name:"String.fromCodePoint()",syntax:"String.fromCodePoint(...codePoints)",parameters:[{name:"...codePoints",description:"Один или несколько кодов Unicode для преобразования в символы"}],description:"Статический метод объекта String, создаёт символ по ...codePoints.",example:`const charA = String.fromCodePoint(65);
console.log(charA); // 'A'

const rocket = String.fromCodePoint(128640);
console.log(rocket); // '🚀'

const combined = String.fromCodePoint(72, 105, 33);
console.log(combined); // 'Hi!'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.fromcodepoint",errors:"RangeError — если ...codePoints некорректен (менее 0 или более 0x10FFFF)."},{name:"String.fromCharCode()",syntax:"String.fromCharCode(...codeUnits)",parameters:[{name:"...codeUnits",description:"Один или несколько кодовых единиц UTF-16 (0–0xFFFF)"}],description:"Статический метод объекта String, возвращает строку из ...codeUnits.",example:`console.log(String.fromCharCode(65, 66, 67)); // 'ABC'
console.log(String.fromCharCode(0x4F60, 0x597D)); // '你好'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.fromcharcode"},{name:"String.raw()",syntax:"String.raw(template, ...substitutions)",parameters:[{name:"template",description:"Объект с raw-массивом шаблонных строк"},{name:"...substitutions",description:"Значения для подстановки"}],description:"Статический метод объекта String, используется как тег для шаблонных строк. Возвращает сырую строку, объединяя template.raw и ...substitutions, без интерпретации escape-последовательностей.",example:`const path = String.raw\`C:\\Users\\name\\file.txt\`;
console.log(path); // 'C:\\Users\\name\\file.txt'

// Вызов с двумя аргументами
const template = { raw: ["a", "b", "c"] };
const result = String.raw(template, "X", "Y");
console.log(result); // 'aXbYc'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.raw",errors:"TypeError — если template не имеет свойства raw."}]},G1={[xt.SYMBOL]:[{name:"Symbol.for()",syntax:"Symbol.for(key)",parameters:[{name:"key",description:"Имя символа"}],description:"Статический метод объекта Symbol, используется для поиска или создания символа с key в глобальном реестре. Если в реестре уже существует символ с key, метод возвращает этот символ. Если такого key нет, метод создаёт новый символ и записывает его в реестр.",example:`const sym1 = Symbol.for('app');
const sym2 = Symbol.for('app');
console.log(sym1 === sym2); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.for",errors:"TypeError — если key является символом."},{name:"Symbol.keyFor()",syntax:"Symbol.keyFor(sym)",parameters:[{name:"sym",description:"Глобальный символ"}],description:"Статический метод объекта Symbol, используется для получения имени sym из реестра. Метод возвращает имя sym или undefined, если sym не является глобальным.",example:`const globalSym = Symbol.for('appConfig');
console.log(Symbol.keyFor(globalSym)); // 'appConfig'

const localSym = Symbol('local');
console.log(Symbol.keyFor(localSym)); // undefined`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.keyfor",errors:"TypeError — если sym не является символом"},{name:"Symbol.toPrimitive",syntax:"obj[Symbol.toPrimitive](hint)",parameters:[{name:"hint",description:"Тип преобразования: 'number', 'string' или 'default'"}],description:"Встроенный символ, используется как ключ для определения метода преобразования объекта в примитивное значение. Значение hint определяет желаемый тип результата. Если метод определён для объекта с этим символом в качестве ключа, он будет использоваться для всех преобразований объекта в примитив.",example:`const obj = {
  value: 100,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.value;
    if (hint === 'string') return \`Value: \${this.value}\`;
    return this.value;
  }
};
console.log(Number(obj)); // 100
console.log(String(obj)); // 'Value: 100'
console.log(obj + 50); // 150`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.toprimitive",errors:"TypeError — если метод возвращает не примитивное значение."},{name:"Symbol.isConcatSpreadable",syntax:"obj[Symbol.isConcatSpreadable]",description:"Встроенный символ, определяет поведение объекта при вызове метода concat(). Если свойство установлено в true, элементы объекта будут добавлены по отдельности; если false или отсутствует, объект будет добавлен целиком как один элемент.",example:`const arrayLike = {
  0: 'a',
  1: 'b',
  length: 2,
  [Symbol.isConcatSpreadable]: true
};
const result1 = [1, 2].concat(arrayLike);
console.log(result1); // [1, 2, 'a', 'b']`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.isconcatspreadable"},{name:"Symbol.iterator",syntax:"obj[Symbol.iterator]",description:`Встроенный символ, который используется для определения метода, позволяющего объекту быть итерируемым. Если объект имеет свойство с ключом Symbol.iterator, то это свойство должно указывать на функцию, которая возвращает объект-итератор.
Объект-итератор — это объект, который должен содержать метод next(). Этот метод при каждом вызове возвращает объект с двумя свойствами:
• value — текущее значение элемента;
• done — булевое значение, указывающее, завершен ли обход (true — итерация окончена, false — продолжаем).`,example:`const range = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next: () => {
        if (current <= this.end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};
const numbers = [...range];
console.log(numbers); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.iterator",errors:"TypeError — если метод next() возвращает не объект."},{name:"Symbol.asyncIterator",syntax:"obj[Symbol.asyncIterator]",description:`Встроенный символ, который используется для определения метода, позволяющего объекту быть асинхронно итерируемым. Если объект имеет свойство с ключом Symbol.asyncIterator, то это свойство должно указывать на функцию, которая возвращает асинхронный объект-итератор.
Асинхронный объект-итератор — это объект, который должен содержать метод next(), возвращающий Promise. Когда Promise разрешается (resolves), он возвращает объект с двумя свойствами:
• value — текущее значение элемента (может быть Promise);
• done — булевое значение, указывающее, завершен ли обход (true — итерация окончена, false — продолжаем).
Если Promise завершится с ошибкой (reject), то итерация прервется.`,example:`const asyncRange = {
  start: 1,
  end: 3,
  [Symbol.asyncIterator]() {
    let current = this.start;
    return {
      next: () => {
        if (current <= this.end) {
          return Promise.resolve({ value: current++, done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};

(async () => {
  const result = [];
  for await (const num of asyncRange) {
    result.push(num);
  }
  console.log(result); // [1, 2, 3]
})();`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.asynciterator"},{name:"Symbol.species",syntax:"static get [Symbol.species]()",description:"Статический геттер, который позволяет дочерним классам (например, наследникам Array) контролировать тип объектов, возвращаемых унаследованными методами, которые создают новые экземпляры (map, filter, slice, then и т.д.). По умолчанию эти методы возвращают объекты того же класса, что и исходный. Переопределив Symbol.species и вернув конструктор родительского класса (например, Array), можно заставить эти методы возвращать экземпляры родительского класса.",example:`class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const myArr = new MyArray(1, 2, 3);
console.log(myArr instanceof MyArray); // true

const filtered = myArr.filter(x => x > 1);
console.log(filtered instanceof MyArray); // false
console.log(filtered instanceof Array); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.species"},{name:"Symbol.hasInstance",syntax:"static [Symbol.hasInstance](obj)",parameters:[{name:"obj",description:"Целевой объект"}],description:"Статический метод, используется для определения того,  является ли obj экземпляром конструктора. Метод вызывается оператором instanceof. По умолчанию проверяет, находится ли obj в цепочке прототипов конструктора. Можно переопределить этот метод в классе, чтобы настроить поведение оператора instanceof и задать кастомную логику проверки принадлежности объектов к классу.",example:`class ArrayLike {
  static [Symbol.hasInstance](obj) {
    return obj && typeof obj === 'object' && 'length' in obj;
  }
}
console.log([1, 2] instanceof ArrayLike); // true
console.log({ length: 3 } instanceof ArrayLike); // true
console.log('string' instanceof ArrayLike); // false
console.log(123 instanceof ArrayLike); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.hasinstance",errors:"TypeError — если метод вызван на не-конструкторе"},{name:"Symbol.toStringTag",syntax:"get [Symbol.toStringTag]()",description:"Встроенный символ, который позволяет объектам определять собственное строковое представление их типа. Значение этого свойства используется методом Object.prototype.toString() для создания строки '[object Type]', где Type заменяется значением Symbol.toStringTag. Если свойство не определено, используется имя конструктора по умолчанию или 'Object'.",example:`class Collection {
  get [Symbol.toStringTag]() {
    return 'Collection';
  }
}
const coll = new Collection();
const result1 = Object.prototype.toString.call(coll);
console.log(result1); // '[object Collection]'

const customObj = {
  [Symbol.toStringTag]: 'CustomObject'
};
const result2 = String(customObj);
console.log(result2); // '[object CustomObject]'`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.tostringtag"},{name:"Symbol.match",syntax:"obj[Symbol.match](str)",parameters:[{name:"str",description:"Строка, в которой выполняется поиск совпадения"}],description:`Встроенный символ, который определяет, может ли объект использоваться как регулярное выражение в методах объекта String: match(), matchAll(), replace(), search(), split().
Если объект имеет свойство [Symbol.match], JavaScript считает его "регулярноподобным" (RegExp-like).
По умолчанию все экземпляры RegExp имеют этот символ. Вы можете переопределить его, чтобы создать собственные классы, которые ведут себя как регулярные выражения.`,example:`class SimplePattern {
  constructor(pattern) {
    this.pattern = pattern;
  }
  [Symbol.match](str) {
    // Возвращаем совпадения в формате, совместимом с match()
    return str.includes(this.pattern) ? [this.pattern] : null;
  }
}

const matcher = new SimplePattern('world');
const result = 'hello world'.match(matcher);
console.log(result); // ['world']

const obj = {
  [Symbol.match]: false  // объект НЕ будет считаться RegExp
};
console.log('test'.match(obj)); // TypeError: obj is not a regexp`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.match",errors:"TypeError — если объект имеет [Symbol.match] = true, но не является RegExp-подобным"},{name:"Symbol.matchAll",syntax:"obj[Symbol.matchAll](str)",parameters:[{name:"str",description:"Строка, в которой выполняется поиск всех совпадений"}],description:"Встроенный символ, который определяет метод, возвращающий итератор для всех совпадений строки с объектом. Используется в matchAll().",example:`const customMatcher = {
  [Symbol.matchAll](str) {
    const matches = str.match(/\\d+/g);
    return matches[Symbol.iterator]();
  }
};
const result = [...'abc123def456'.matchAll(customMatcher)];
console.log(result); // ['123', '456']`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.matchall"},{name:"Symbol.replace",syntax:"obj[Symbol.replace](str, replacement)",parameters:[{name:"str",description:"Исходная строка, в которой выполняется замена"},{name:"replacement",description:"Строка или функция замены, переданная в replace()"}],description:"Встроенный символ, который определяет метод замены в str. Используется в replace() для кастомной логики замены. Значение replacement определяет, чем заменять найденные совпадения — строкой или результатом вызова функции.",example:`const customReplacer = {
  [Symbol.replace](str, replacement) {
    // Заменяем каждое слово на replacement
    return str.split(" ").map(() => replacement).join(" ");
  }
};
const res1 = 'hello world'.replace(customReplacer, '!!!');
console.log(res1); // '!!! !!!'

const logReplacer = {
  [Symbol.replace](str, replacement) {
    if (typeof replacement === "function") {
      return str.split(" ").map(word => replacement(word)).join(" ");
    }
    return str;
  }
};
const res2 = 'world'.replace(logReplacer, word => word.toUpperCase());
console.log(res2); // 'WORLD'`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.replace"},{name:"Symbol.search",syntax:"obj[Symbol.search](str)",parameters:[{name:"str",description:"Строка, в которой выполняется поиск"}],description:"Встроенный символ, который определяет метод поиска в str. Используется в search() для кастомной логики поиска.",example:`const customSearcher = {
  [Symbol.search](str) {
    return str.includes('world') ? 6 : -1;
  }
};
const result = 'hello world'.search(customSearcher);
console.log(result); // 6`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.search"},{name:"Symbol.split",syntax:"obj[Symbol.split](str, limit)",parameters:[{name:"str",description:"Строка, которую нужно разделить"},{name:"limit",description:"Ограничение на количество элементов в результате"}],description:"Встроенный символ, который определяет метод разделения строки. Используется в split() для кастомной логики разделения. Значение limit ограничивает количество элементов в возвращаемом массиве.",example:`const customSplitter = {
  [Symbol.split](str, limit) {
    return [str.slice(0, limit), str.slice(limit)];
  }
};
const result = 'hello world'.split(customSplitter, 5);
console.log(result); // ['hello', ' world']`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.split"},{name:"description",syntax:"symbol.description",description:"Свойство объекта Symbol, возвращает имя исходного символа. Для символов, созданных без описания, свойство возвращает undefined. Свойство только для чтения (read-only).",example:`const userId = Symbol('userId');
console.log(userId.description); // 'userId'

const unnamed = Symbol();
console.log(unnamed.description); // undefined`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.prototype.description"}]},K1={[xt.OBJECT]:[{name:"toString()",syntax:"obj.toString()",description:"Метод объекта Object, возвращает примитивное значение исходного объекта. По умолчанию обычный объект имеет метод toString, который возвращает строку '[object Object]'. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при строковом преобразовании.",example:`const obj = { x: 10, y: 20 };
console.log(obj.toString()); // '[object Object]'

const customObj = {
  toString() {
    return 'Custom Object';
  }
};
console.log(customObj.toString()); // 'Custom Object'`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.tostring",errors:"TypeError — если this является null или undefined."},{name:"valueOf()",syntax:"obj.valueOf()",description:"Метод объекта Object, возвращает примитивное значение исходного объекта. По умолчанию обычный объект имеет метод valueOf, который возвращает сам объект. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при математических операциях.",example:`const obj = { x: 5 };
console.log(obj.valueOf() === obj); // true

const numberObj = {
  value: 100,
  valueOf() {
    return this.value;
  }
};
console.log(numberObj + 50); // 150`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.valueof",errors:"TypeError — если this является null или undefined."},{name:"hasOwnProperty()",syntax:"obj.hasOwnProperty(prop)",parameters:[{name:"prop",description:"Имя свойства"}],description:"Метод объекта Object, возвращает true, если исходный объект содержит prop как собственное (а не унаследованное через цепочку прототипов), иначе false.",example:`const user = { id: 1, name: 'Alice' };

const hasName = user.hasOwnProperty('name');
console.log(hasName); // true

const hasAge = user.hasOwnProperty('age');
console.log(hasAge); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.hasownproperty",errors:"TypeError — если this является null или undefined."},{name:"isPrototypeOf()",syntax:"objA.isPrototypeOf(objB)",parameters:[{name:"objB",description:"Объект для проверки"}],description:"Метод объекта Object, возвращает true, если исходный объект находится где-то в прототипной цепочке objB, иначе false.",example:`const base = { x: 1 };
const obj = Object.create(base);
const isProto = base.isPrototypeOf(obj);
console.log(isProto); // true
console.log(Object.prototype.isPrototypeOf([])); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.isprototypeof",errors:"TypeError — если this или objB являются null или undefined."},{name:"propertyIsEnumerable()",syntax:"obj.propertyIsEnumerable(prop)",parameters:[{name:"prop",description:"Имя свойства для проверки (строка или символ)"}],description:"Метод объекта Object, возвращает true, если prop является собственным и перечисляемым свойством исходного объекта, иначе false.",example:`const obj = {};
obj.a = 1; // enumerable: true по умолчанию
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
Object.defineProperty(obj, 'c', { value: 3, enumerable: true });

console.log(obj.propertyIsEnumerable('a')); // true
console.log(obj.propertyIsEnumerable('b')); // false
console.log(obj.propertyIsEnumerable('c')); // true
console.log(obj.propertyIsEnumerable('toString')); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.propertyisenumerable",errors:"TypeError — если this является null или undefined."},{name:"toLocaleString()",syntax:"obj.toLocaleString()",description:"Метод объекта Object, возвращает локализованное строковое представление исходного объекта. По умолчанию просто вызывает метод toString(). Однако этот метод часто переопределяется в дочерних объектах, таких как Array, Date, Number, для предоставления локализованных строковых представлений.",example:`const obj = { x: 1, y: 2 };
console.log(obj.toLocaleString()); // '[object Object]'

const date = new Date(2024, 0, 1);
console.log(date.toLocaleString('ru-RU')); // '01.01.2024, 00:00:00'
console.log(date.toLocaleString('en-US')); // '1/1/2024, 12:00:00 AM'

const numbers = [1000, 2000, 3000];
console.log(numbers.toLocaleString('ru-RU')); // '1 000,2 000,3 000'`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.tolocalestring",errors:"TypeError — если this является null или undefined."},{name:"Object.assign()",syntax:"Object.assign(dest, source1, ..., sourceN)",parameters:[{name:"dest",description:"Целевой объект, в который будут скопированы свойства"},{name:"source1, ..., sourceN",description:"Исходные объекты, чьи свойства будут скопированы"}],description:"Статический метод объекта Object, копирует собственные перечисляемые свойства всех source1, ..., sourceN в dest. Происходит только поверхностное копирование — если свойство является объектом, то будет скопирована только ссылка. Копирует как строковые, так и символьные свойства. Если в dest уже есть свойство с таким же ключом, оно будет переопределено значением из sourceN. Возвращает dest.",example:`const defaults = { theme: 'light', lang: 'en' };
const userSettings = { lang: 'ru' };
const settings = Object.assign({}, defaults, userSettings);
console.log(settings); // { theme: 'light', lang: 'ru' }`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign",errors:"TypeError — если dest является null или undefined."},{name:"Object.is()",syntax:"Object.is(value1, value2)",parameters:[{name:"value1",description:"Первое значение для сравнения"},{name:"value2",description:"Второе значение для сравнения"}],description:`Статический метод объекта Object, сравнивает value1 и value2, и определяет, являются ли они строго равными. Работает аналогично оператору строгого равенства, кроме двух случаев:
• Object.is(NaN, NaN) === true
• Object.is(0, -0) === false`,example:`console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is('hello', 'hello')); // true
console.log(Object.is([], [])); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.is"},{name:"Object.keys()",syntax:"Object.keys(obj)",parameters:[{name:"obj",description:"Объект, ключи которого нужно получить"}],description:"Статический метод объекта Object, возвращает массив строковых ключей из obj. Игнорирует символьные свойства и перебирает только собственные.",example:`const user = { name: 'Alice', age: 30, city: 'Moscow' };
const keys = Object.keys(user);
console.log(keys); // ['name', 'age', 'city']`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.keys",errors:"TypeError — если obj является null или undefined."},{name:"Object.values()",syntax:"Object.values(obj)",parameters:[{name:"obj",description:"Объект, значения свойств которого нужно получить"}],description:"Статический метод объекта Object, возвращает массив значений из obj. Игнорирует символьные свойства и перебирает только собственные.",example:`const config = { port: 3000, host: 'localhost', debug: true };
const values = Object.values(config);
console.log(values); // [3000, 'localhost', true]`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.values",errors:"TypeError — если obj является null или undefined."},{name:"Object.entries()",syntax:"Object.entries(obj)",parameters:[{name:"obj",description:"Объект, пары ключ-значение которого нужно получить"}],description:"Статический метод объекта Object, возвращает массив массивов, где каждый вложенный массив содержит пару вида [ключ, значение] из obj. Игнорирует символьные свойства и перебирает только собственные.",example:`const product = { name: 'Laptop', price: 999 };
const entries = Object.entries(product);
console.log(entries); // [['name', 'Laptop'], ['price', 999]]`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.entries",errors:"TypeError — если obj является null или undefined."},{name:"Object.fromEntries()",syntax:"Object.fromEntries(iterable)",parameters:[{name:"iterable",description:"Итерируемый объект, содержащий пары вида [ключ, значение]"}],description:"Статический метод объекта Object, создаёт объект из списка пар вида [ключ, значение] из iterable. Является обратной операцией к Object.entries().",example:`const map = new Map([
  ['name', 'Alice'],
  ['age', 30],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { name: 'Alice', age: 30 }`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.fromentries",errors:"TypeError — если iterable не является итерируемым объектом с парами вида [ключ, значение]."},{name:"Object.getOwnPropertyDescriptor()",syntax:"Object.getOwnPropertyDescriptor(obj, prop)",parameters:[{name:"obj",description:"Объект, из которого получаем информацию о свойстве"},{name:"prop",description:"Имя свойства, для которого нужно получить дескриптор"}],description:"Статический метод объекта Object, возвращает объект-дескриптор, содержащий информацию о конфигурации prop в obj: значение value, а также флаги writable, enumerable, configurable.",example:`const obj = { name: 'Ann', age: 30 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
// {
//   value: 'Ann',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptor",errors:"TypeError — если obj равен null или undefined."},{name:"Object.defineProperty()",syntax:"Object.defineProperty(obj, prop, descriptor)",parameters:[{name:"obj",description:"Объект, в котором будет определено или изменено свойство"},{name:"prop",description:"Имя свойства, для которого нужно применить дескриптор"},{name:"descriptor",description:"Объект-дескриптор, описывающий свойство"}],description:"Статический метод объекта Object, позволяет изменить или определить свойство в obj. Если prop существует, метод обновит его значение и флаги. В противном случае метод создаёт новое свойство с указанным descriptor; если какой-либо флаг не указан явно, ему присваивается значение false.",example:`const obj = {};
Object.defineProperty(obj, 'readonlyProp', {
  value: 42,
  writable: false,
  enumerable: true
});
console.log(obj.readonlyProp); // 42
obj.readonlyProp = 100;`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperty",errors:"TypeError — если obj равен null или undefined."},{name:"Object.defineProperties()",syntax:"Object.defineProperties(obj, properties)",parameters:[{name:"obj",description:"Объект, в котором будут определены или изменены свойства"},{name:"properties",description:"Объект, ключи которого являются именами свойств, а значения — дескрипторами этих свойств"}],description:"Статический метод объекта Object, позволяет изменить или определить несколько свойств в obj одновременно. Для каждого ключа из properties применяется соответствующий дескриптор: если свойство с таким именем существует, оно обновляется; если нет — создаётся новое.",example:`const user = {};
Object.defineProperties(user, {
  name: {
    value: 'Alice',
    writable: true,
    enumerable: true
  },
  age: {
    value: 30,
    writable: true,
    enumerable: false
  }
});
console.log(Object.keys(user)); // ['name']`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperties",errors:"TypeError — если obj равен null или undefined."},{name:"Object.getOwnPropertyDescriptors()",syntax:"Object.getOwnPropertyDescriptors(obj)",parameters:[{name:"obj",description:"Объект, для которого нужно получить дескрипторы всех собственных свойств"}],description:"Статический метод объекта Object, возвращает объект, содержащий дескрипторы всех собственных свойств obj. Вместе с Object.defineProperties() позволяет клонировать объект с сохранением всех флагов свойств.",example:`const obj = {};
Object.defineProperties(obj, {
  x: { value: 10, writable: false },
  y: { value: 20, enumerable: false }
});
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.x.writable); // false
console.log(descriptors.y.enumerable); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptors",errors:"TypeError — если obj является null или undefined."},{name:"Object.preventExtensions()",syntax:"Object.preventExtensions(obj)",parameters:[{name:"obj",description:"Объект, который нужно сделать нерасширяемым"}],description:"Статический метод объекта Object, запрещает добавление новых свойств в obj. После вызова этого метода (obj) становится 'нерасширяемым' — нельзя добавлять новые свойства, но существующие можно изменять или удалять.",example:`const obj = { prop: 'value' };
Object.preventExtensions(obj);
obj.newProp = 'new';
console.log('newProp' in obj); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.preventextensions",errors:"TypeError — если obj является null или undefined."},{name:"Object.isExtensible()",syntax:"Object.isExtensible(obj)",parameters:[{name:"obj",description:"Объект, который необходимо проверить на расширяемость"}],description:"Статический метод объекта Object, проверяет, является ли obj расширяемым (можно ли добавлять к нему новые свойства). Возвращает true, если расширяемый, и false, если нет.",example:`const obj = { x: 10 };
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isextensible",errors:"TypeError — если obj является null или undefined."},{name:"Object.seal()",syntax:"Object.seal(obj)",parameters:[{name:"obj",description:"Объект, который нужно запечатать"}],description:"Статический метод объекта Object, запрещает добавление и удаление свойств в obj, а также изменение их дескрипторов. Устанавливает configurable: false для всех существующих свойств, но позволяет изменять их значения, если writable: true.",example:`const obj = { name: 'John', age: 25 };
Object.seal(obj);
obj.age = 30; // Изменение значения работает
console.log(obj.age); // 30
delete obj.name; // Не работает в strict mode`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.seal",errors:"TypeError — если obj является null или undefined."},{name:"Object.isSealed()",syntax:"Object.isSealed(obj)",parameters:[{name:"obj",description:"Объект, который необходимо проверить на запечатанность"}],description:"Статический метод объекта Object, проверяет, запечатан ли obj. Возвращает true, если запечатан (нельзя добавлять/удалять свойства и изменять их дескрипторы), иначе возвращает false.",example:`const obj = { x: 10, y: 20 };
console.log(Object.isSealed(obj)); // false
Object.seal(obj);
console.log(Object.isSealed(obj)); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.issealed",errors:"TypeError — если obj является null или undefined."},{name:"Object.freeze()",syntax:"Object.freeze(obj)",parameters:[{name:"obj",description:"Объект, который нужно заморозить"}],description:"Статический метод объекта Object, делает obj полностью неизменяемым. Запрещает добавление, удаление и изменение свойств, а также изменение их дескрипторов. Устанавливает configurable: false и writable: false для всех существующих свойств.",example:`const config = { version: '1.0', debug: false };
Object.freeze(config);
console.log(config.debug); // false
config.debug = true;
console.log(config.debug); // false (изменение не применилось)
console.log('newProp' in config); // false
config.newProp = 'test';
console.log('newProp' in config); // false (свойство не добавилось)`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.freeze",errors:"TypeError — если obj является null или undefined."},{name:"Object.isFrozen()",syntax:"Object.isFrozen(obj)",parameters:[{name:"obj",description:"Объект, который необходимо проверить на замороженность"}],description:"Статический метод объекта Object, проверяет, заморожен ли obj. Возвращает true, если полностью неизменяем (нельзя добавлять/удалять/изменять свойства), иначе возвращает false.",example:`const obj = { value: 100 };
console.log(Object.isFrozen(obj)); // false
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isfrozen",errors:"TypeError — если obj является null или undefined."},{name:"Object.create()",syntax:"Object.create(proto, [descriptors])",parameters:[{name:"proto",description:"Объект, который будет использоваться как прототип"},{name:"descriptors",description:"Объект-дескриптор для определения свойств"}],description:"Статический метод объекта Object, создаёт объект, используя proto в качестве прототипа. descriptors позволяет определять свойства нового объекта с помощью дескрипторов. Мы также можем использовать Object.create для «продвинутого» клонирования объекта с сохранением дескрипторов свойств.",example:`const proto = { greet() { return 'Hello'; } };
const obj = Object.create(proto, {
  name: { value: 'Alice', enumerable: true }
});
console.log(obj.greet()); // 'Hello'
console.log(obj.name); // 'Alice'`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.create",errors:"TypeError — если proto не является null или объектом, или descriptors указан и не является объектом."},{name:"Object.getPrototypeOf()",syntax:"Object.getPrototypeOf(obj)",parameters:[{name:"obj",description:"Объект, чей прототип нужно получить"}],description:"Статический метод объекта Object, возвращает прототип (скрытое свойство [[Prototype]]) obj. Это альтернатива использованию свойства __proto__.",example:`const proto = { base: true };
const obj = Object.create(proto);
const prototype = Object.getPrototypeOf(obj);
console.log(prototype === proto); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getprototypeof",errors:"TypeError — если obj является null или undefined."},{name:"Object.setPrototypeOf()",syntax:"Object.setPrototypeOf(obj, proto)",parameters:[{name:"obj",description:"Объект, чей прототип нужно установить"},{name:"proto",description:"Новый прототип объекта (объект или null)"}],description:"Статический метод объекта Object, устанавливает прототип (скрытое свойство [[Prototype]]) для obj равным (proto). Это альтернатива использованию свойства __proto__.",example:`const animal = { eats: true };
const rabbit = { jumps: true };
Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) === animal); // true`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.setprototypeof",errors:"TypeError — если obj или proto являются null или undefined."},{name:"Object.getOwnPropertySymbols()",syntax:"Object.getOwnPropertySymbols(obj)",parameters:[{name:"obj",description:"Объект, символьные ключи которого нужно получить"}],description:"Статический метод объекта Object, возвращает массив всех собственных символьных ключей obj.",example:`const id = Symbol('id');
const token = Symbol('token');
const obj = {
  [id]: 123,
  [token]: 'abc',
  name: 'Test'
};
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(id), Symbol(token)]`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertysymbols",errors:"TypeError — если obj является null или undefined."},{name:"Object.getOwnPropertyNames()",syntax:"Object.getOwnPropertyNames(obj)",parameters:[{name:"obj",description:"Объект, строковые ключи которого нужно получить"}],description:"Статический метод объекта Object, возвращает массив всех собственных строковых ключей obj.",example:`const obj = {};
Object.defineProperties(obj, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});
const keys = Object.keys(obj);
const names = Object.getOwnPropertyNames(obj);
console.log(keys); // ['visible']
console.log(names); // ['visible', 'hidden']`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertynames",errors:"TypeError — если obj является null или undefined."},{name:"Object.hasOwn()",syntax:"Object.hasOwn(obj, prop)",parameters:[{name:"obj",description:"Объект, в котором проверяется наличие свойства"},{name:"prop",description:"Имя свойства для проверки (строка или символ)"}],description:"Статический метод объекта Object, возвращает true, если prop является собственным (не унаследованным) для obj. Является более безопасной альтернативой методу hasOwnProperty(), так как работает даже с объектами, созданными через Object.create(null), у которых нет прототипа.",example:`const obj1 = { a: 1 };
const obj2 = Object.create(null);
obj2.b = 2;

console.log(Object.hasOwn(obj1, 'a')); // true
console.log(Object.hasOwn(obj1, 'toString')); // false (унаследовано)
console.log(Object.hasOwn(obj2, 'b')); // true
console.log(Object.hasOwn(obj2, 'toString')); // false`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.hasown",errors:"TypeError — если obj является null или undefined."},{name:"Object.groupBy()",syntax:"Object.groupBy(items, callback)",parameters:[{name:"items",description:"Итерируемый объект, элементы которого нужно сгруппировать"},{name:"callback",description:"Функция, вызываемая для каждого элемента. Должна возвращать ключ, в группу которого будет помещён элемент"}],description:"Статический метод объекта Object, группирует элементы items по ключам, возвращаемым callback. Возвращает объект, где каждый ключ соответствует массиву элементов из соответствующей группы.",example:`const inventory = [
  { name: 'asparagus', type: 'vegetables' },
  { name: 'banana', type: 'fruit' },
  { name: 'goat', type: 'meat' },
  { name: 'cherry', type: 'fruit' },
  { name: 'fish', type: 'meat' },
];

const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);
// {
//   vegetables: [{ name: 'asparagus', type: 'vegetables' }],
//   fruit: [
//     { name: 'banana', type: 'fruit' },
//     { name: 'cherry', type: 'fruit' }
//   ],
//   meat: [
//     { name: 'goat', type: 'meat' },
//     { name: 'fish', type: 'meat' }
//   ]
// }`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.groupby",errors:"TypeError — если items не является итерируемым объектом или callback не является функцией."}]},Z1={[xt.DATE]:[{name:"getFullYear()",syntax:"date.getFullYear()",description:"Метод объекта Date, возвращает год (4 цифры) исходной даты по местному времени.",example:`const date = new Date('2023-12-15');
const year = date.getFullYear();
console.log(year); // год по местному времени (2023 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getfullyear",errors:"TypeError — если this не является датой."},{name:"setFullYear()",syntax:"date.setFullYear(year[, month[, day]])",parameters:[{name:"year",description:"Год (4 цифры)"},{name:"month",description:"Месяц (0-11)"},{name:"day",description:"День месяца (1-31)"}],description:"Метод объекта Date, устанавливает year исходной даты по местному времени. Дополнительно может установить month и day. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2023-01-15');
const timestamp = date.setFullYear(2024);
const year = date.getFullYear();
console.log(year); // год по местному времени (2024 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setfullyear",errors:"TypeError — если this не является датой."},{name:"getUTCFullYear()",syntax:"date.getUTCFullYear()",description:"Метод объекта Date, возвращает год (4 цифры) исходной даты по всемирному координированному времени (UTC), игнорируя часовой пояс.",example:`const date = new Date('2023-12-15T23:00:00Z');
const utcYear = date.getUTCFullYear();
const localYear = date.getFullYear();
console.log(utcYear); // 2023
console.log(localYear); // год по местному времени (2023 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcfullyear",errors:"TypeError — если this не является датой."},{name:"setUTCFullYear()",syntax:"date.setUTCFullYear(year[, month[, day]])",parameters:[{name:"year",description:"Год (4 цифры)"},{name:"month",description:"Месяц (0-11)"},{name:"day",description:"День месяца (1-31)"}],description:"Метод объекта Date, устанавливает year исходной даты по всемирному координированному времени (UTC). Дополнительно может установить month и day. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2023-01-15T00:00:00Z');
const timestamp = date.setUTCFullYear(2025);
const year = date.getUTCFullYear();
console.log(year); // 2025`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcfullyear",errors:"TypeError — если this не является датой."},{name:"getMonth()",syntax:"date.getMonth()",description:"Метод объекта Date, возвращает месяц исходной даты по местному времени. Месяцы нумеруются с 0 (январь) до 11 (декабрь).",example:`const summer = new Date('2024-06-15');
const month = summer.getMonth();
console.log(month); // месяц по местному времени (5 - июнь по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getmonth",errors:"TypeError — если this не является датой."},{name:"setMonth()",syntax:"date.setMonth(month[, day])",parameters:[{name:"month",description:"Месяц (0-11)"},{name:"day",description:"День месяца (1-31)"}],description:"Метод объекта Date, устанавливает month исходной даты по местному времени. Дополнительно может установить day. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-15');
const timestamp = date.setMonth(5);
const month = date.getMonth();
console.log(month); // месяц по местному времени (5 - июнь по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setmonth",errors:"TypeError — если this не является датой."},{name:"getUTCMonth()",syntax:"date.getUTCMonth()",description:"Метод объекта Date, возвращает месяц исходной даты по всемирному координированному времени (UTC). Месяцы нумеруются с 0 (январь) до 11 (декабрь).",example:`const date = new Date('2024-01-01T00:00:00Z');
console.log(date.getUTCMonth()); // 0 - январь`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcmonth",errors:"TypeError — если this не является датой."},{name:"setUTCMonth()",syntax:"date.setUTCMonth(month[, day])",parameters:[{name:"month",description:"Месяц (0-11)"},{name:"day",description:"День месяца (1-31)"}],description:"Метод объекта Date, устанавливает month исходной даты по всемирному координированному времени (UTC). Дополнительно может установить day. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-15T12:00:00Z');
const timestamp = date.setUTCMonth(8);
const month = date.getUTCMonth();
console.log(month); // 8 - сентябрь`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcmonth",errors:"TypeError — если this не является датой."},{name:"getDate()",syntax:"date.getDate()",description:"Метод объекта Date, возвращает день месяца (от 1 до 31) исходной даты по местному времени.",example:`const birthday = new Date('2024-05-20');
const day = birthday.getDate();
console.log(day); // день по местному времени (20 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getdate",errors:"TypeError — если this не является датой."},{name:"setDate()",syntax:"date.setDate(day)",parameters:[{name:"day",description:"День месяца (1-31)"}],description:"Метод объекта Date, устанавливает day месяца исходной даты по местному времени. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-10');
const timestamp = date.setDate(25);
const day = date.getDate();
console.log(day); // день по местному времени (25 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setdate",errors:"TypeError — если this не является датой."},{name:"getUTCDate()",syntax:"date.getUTCDate()",description:"Метод объекта Date, возвращает день месяца (от 1 до 31) исходной даты по всемирному координированному времени (UTC).",example:`const date = new Date('2024-12-31T23:59:59Z');
console.log(date.getUTCDate()); // 31`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcdate",errors:"TypeError — если this не является датой."},{name:"setUTCDate()",syntax:"date.setUTCDate(day)",parameters:[{name:"day",description:"День месяца (1-31)"}],description:"Метод объекта Date, устанавливает day месяца исходной даты по всемирному координированному времени (UTC). Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-03-10T12:00:00Z');
const timestamp = date.setUTCDate(15);
const day = date.getUTCDate();
console.log(day); // 15`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcdate",errors:"TypeError — если this не является датой."},{name:"getHours()",syntax:"date.getHours()",description:"Метод объекта Date, возвращает часы (0-23) исходной даты по местному времени.",example:`const morning = new Date('2024-05-20T09:15:00');
const hours = morning.getHours();
console.log(hours); // часы по местному времени (9 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gethours",errors:"TypeError — если this не является датой."},{name:"setHours()",syntax:"date.setHours(hours[, minutes[, seconds[, milliseconds]]])",parameters:[{name:"hours",description:"Часы (0-23)"},{name:"minutes",description:"Минуты (0-59)"},{name:"seconds",description:"Секунды (0-59)"},{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает hours исходной даты по местному времени. Дополнительно может установить minutes, seconds и milliseconds. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T00:00:00');
const timestamp = date.setHours(14);
const hours = date.getHours();
console.log(hours); // часы по местному времени (14 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.sethours",errors:"TypeError — если this не является датой."},{name:"getUTCHours()",syntax:"date.getUTCHours()",description:"Метод объекта Date, возвращает часы (0-23) исходной даты по всемирному координированному времени (UTC).",example:`const date = new Date('2024-01-01T20:00:00Z');
const hours = date.getUTCHours();
console.log(hours); // 20`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutchours",errors:"TypeError — если this не является датой."},{name:"setUTCHours()",syntax:"date.setUTCHours(hours[, minutes[, seconds[, milliseconds]]])",parameters:[{name:"hours",description:"Часы (0-23)"},{name:"minutes",description:"Минуты (0-59)"},{name:"seconds",description:"Секунды (0-59)"},{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает hours исходной даты по всемирному координированному времени (UTC). Дополнительно может установить minutes, seconds и milliseconds. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T00:00:00Z');
const timestamp = date.setUTCHours(15);
const hours = date.getUTCHours();
console.log(hours); // 15`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutchours",errors:"TypeError — если this не является датой."},{name:"getMinutes()",syntax:"date.getMinutes()",description:"Метод объекта Date, возвращает минуты (0-59) исходной даты по местному времени.",example:`const date = new Date('2024-01-01T14:30:00');
const minutes = date.getMinutes();
console.log(minutes); // минуты по местному времени (30 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getminutes",errors:"TypeError — если this не является датой."},{name:"setMinutes()",syntax:"date.setMinutes(minutes[, seconds[, milliseconds]])",parameters:[{name:"minutes",description:"Минуты (0-59)"},{name:"seconds",description:"Секунды (0-59)"},{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает minutes исходной даты по местному времени. Дополнительно может установить seconds и milliseconds. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-03-10T12:00:00');
const timestamp = date.setMinutes(15);
const minutes = date.getMinutes();
console.log(minutes); // минуты по местному времени (15 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setminutes",errors:"TypeError — если this не является датой."},{name:"getUTCMinutes()",syntax:"date.getUTCMinutes()",description:"Метод объекта Date, возвращает минуты (0-59) исходной даты по всемирному координированному времени (UTC).",example:`const date = new Date('2024-01-01T14:30:00Z');
const minutes = date.getUTCMinutes();
console.log(minutes); // 30`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcminutes",errors:"TypeError — если this не является датой."},{name:"setUTCMinutes()",syntax:"date.setUTCMinutes(minutes[, seconds[, milliseconds]])",parameters:[{name:"minutes",description:"Минуты (0-59)"},{name:"seconds",description:"Секунды (0-59)"},{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает minutes исходной даты по всемирному координированному времени (UTC). Дополнительно может установить seconds и milliseconds. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T12:00:00Z');
const timestamp = date.setUTCMinutes(45);
const minutes = date.getUTCMinutes();
console.log(minutes); // 45`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcminutes",errors:"TypeError — если this не является датой."},{name:"getSeconds()",syntax:"date.getSeconds()",description:"Метод объекта Date, возвращает секунды (0-59) исходной даты по местному времени.",example:`const date = new Date('2024-01-01T12:30:45');
const seconds = date.getSeconds();
console.log(seconds); // секунды по местному времени (45 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getseconds",errors:"TypeError — если this не является датой."},{name:"setSeconds()",syntax:"date.setSeconds(seconds[, milliseconds])",parameters:[{name:"seconds",description:"Секунды (0-59)"},{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает seconds исходной даты по местному времени. Дополнительно может установить milliseconds. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T12:30:00');
const timestamp = date.setSeconds(45);
const seconds = date.getSeconds();
console.log(seconds); // секунды по местному времени (45 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setseconds",errors:"TypeError — если this не является датой."},{name:"getUTCSeconds()",syntax:"date.getUTCSeconds()",description:"Метод объекта Date, возвращает секунды (0-59) исходной даты по всемирному координированному времени (UTC).",example:`const date = new Date('2024-01-01T12:30:45Z');
const seconds = date.getUTCSeconds();
console.log(seconds); // 45`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcseconds",errors:"TypeError — если this не является датой."},{name:"setUTCSeconds()",syntax:"date.setUTCSeconds(seconds[, milliseconds])",parameters:[{name:"seconds",description:"Секунды (0-59)"},{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает seconds исходной даты по всемирному координированному времени (UTC). Дополнительно может установить milliseconds. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T12:30:00Z');
const timestamp = date.setUTCSeconds(45);
const seconds = date.getUTCSeconds();
console.log(seconds); // 45`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcseconds",errors:"TypeError — если this не является датой."},{name:"getMilliseconds()",syntax:"date.getMilliseconds()",description:"Метод объекта Date, возвращает миллисекунды (0-999) исходной даты по местному времени.",example:`const date = new Date('2024-01-01T12:30:45.500');
const mils = date.getMilliseconds();
console.log(mils); // миллисекунды по местному времени (500 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getmilliseconds",errors:"TypeError — если this не является датой."},{name:"setMilliseconds()",syntax:"date.setMilliseconds(milliseconds)",parameters:[{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает milliseconds исходной даты по местному времени. Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T12:30:45.000');
const timestamp = date.setMilliseconds(50);
const ms = date.getMilliseconds();
console.log(ms); // миллисекунды по местному времени (50 по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setmilliseconds",errors:"TypeError — если this не является датой."},{name:"getUTCMilliseconds()",syntax:"date.getUTCMilliseconds()",description:"Метод объекта Date, возвращает миллисекунды (0-999) исходной даты по всемирному координированному времени (UTC).",example:`const date = new Date('2024-01-01T12:30:45.750Z');
const milliseconds = date.getUTCMilliseconds();
console.log(milliseconds); // 750`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcmilliseconds",errors:"TypeError — если this не является датой."},{name:"setUTCMilliseconds()",syntax:"date.setUTCMilliseconds(milliseconds)",parameters:[{name:"milliseconds",description:"Миллисекунды (0-999)"}],description:"Метод объекта Date, устанавливает milliseconds исходной даты по всемирному координированному времени (UTC). Возвращает таймстамп обновлённой даты.",example:`const date = new Date('2024-01-01T12:30:45.000Z');
const timestamp = date.setUTCMilliseconds(50);
const ms = date.getUTCMilliseconds();
console.log(ms); // 50`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.setutcmilliseconds",errors:"TypeError — если this не является датой."},{name:"getDay()",syntax:"date.getDay()",description:"Метод объекта Date, возвращает день недели (0-6) исходной даты по местному времени, где 0 соответствует воскресенью.",example:`const date = new Date('2024-01-01');
const day = date.getDay();
console.log(day); // 1 (понедельник по Москве)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getday",errors:"TypeError — если this не является датой."},{name:"getUTCDay()",syntax:"date.getUTCDay()",description:"Метод объекта Date, возвращает день недели (0-6) исходной даты по всемирному координированному времени (UTC), где 0 соответствует воскресенью.",example:`const date = new Date('2024-01-01T00:00:00Z');
const day = date.getUTCDay();
console.log(day); // 1 - понедельник`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getutcday",errors:"TypeError — если this не является датой."},{name:"getTime()",syntax:"date.getTime()",description:"Метод объекта Date, возвращает таймстамп исходной даты (количество миллисекунд с 1 января 1970 года, 00:00:00 UTC).",example:`const date = new Date('2024-01-01');
const timestamp = date.getTime();
console.log(timestamp); // 1704067200000`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gettime",errors:"TypeError — если this не является датой."},{name:"setTime()",syntax:"date.setTime(time)",parameters:[{name:"time",description:"Таймпстамп"}],description:"Метод объекта Date, устанавливает дату и время с помощью time. Возвращает таймстамп обновлённой даты.",example:`const date = new Date();
const timestamp = date.setTime(1704067200000);
const newTime = date.getTime();
console.log(newTime); // 1704067200000`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.settime",errors:"TypeError — если this не является датой."},{name:"getTimezoneOffset()",syntax:"date.getTimezoneOffset()",description:"Метод объекта Date, возвращает разницу в минутах между UTC и местным временем из исходной даты. Значение будет положительным, если местное время отстаёт от UTC, и отрицательным, если опережает.",example:`const date = new Date('2024-01-01T00:00:00Z');
const offset = date.getTimezoneOffset();
console.log(offset); // -180 (для Москвы, UTC+3)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.gettimezoneoffset",errors:"TypeError — если this не является датой."},{name:"toString()",syntax:"date.toString()",description:'Метод объекта Date, возвращает полное строковое представление исходной даты и времени по местному времени. Формат строки: "Day Mon DD YYYY HH:MM:SS GMT+HHMM (TimeZone)".',example:`const date = new Date('2024-01-15T14:30:45');
const string = date.toString();
console.log(string); // "Mon Jan 15 2024 17:30:45 GMT+0300 (Москва, стандартное время)"`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tostring",errors:"TypeError — если this не является датой."},{name:"toUTCString()",syntax:"date.toUTCString()",description:'Метод объекта Date, возвращает полное строковое представление исходной даты и времени по всемирному координированному времени (UTC). Формат строки: "Day, DD Mon YYYY HH:MM:SS GMT".',example:`const date = new Date('2024-01-15T14:30:45');
const utcString = date.toUTCString();
console.log(utcString); // "Mon, 15 Jan 2024 11:30:45 GMT"`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.toutcstring",errors:"TypeError — если this не является датой."},{name:"toISOString()",syntax:"date.toISOString()",description:"Метод объекта Date, возвращает дату в виде строки в формате ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ) по всемирному координированному времени (UTC). Всегда содержит 24 символа (включая миллисекунды и букву Z).",example:`const date = new Date('2024-01-15T14:30:45.123Z');
const isoString = date.toISOString();
console.log(isoString); // "2024-01-15T14:30:45.123Z"`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.toisostring",errors:"RangeError — если дата некорректна (Invalid Date)."},{name:"toDateString()",syntax:"date.toDateString()",description:"Метод объекта Date, возвращает дату в виде человеко-читаемой строки (без времени) по местному времени.",example:`const date = new Date('2024-01-15T14:30:45');
const dateString = date.toDateString();
console.log(dateString); // "Mon Jan 15 2024" (по местному времени)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.todatestring",errors:"TypeError — если this не является датой."},{name:"toTimeString()",syntax:"date.toTimeString()",description:"Метод объекта Date, возвращает время в виде человеко-читаемой строки (без даты) по местному времени.",example:`const date = new Date('2024-01-15T14:30:45');
const timeString = date.toTimeString();
console.log(timeString); // "14:30:45 GMT+0300 (MSK)" (по местному времени)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.totimestring",errors:"TypeError — если this не является датой."},{name:"toLocaleString()",syntax:"date.toLocaleString([locales[, options]])",parameters:[{name:"locales",description:"Строка с языковым кодом (например, 'ru-RU', 'en-US') или массив таких строк"},{name:"options",description:`Объект с настройками форматирования даты и времени:
 • weekday: 'long' — полное название дня ('понедельник'), 'short' — короткое ('пн'), 'narrow' — узкое ('п')
 • year: 'numeric' — числовой формат ('2024'), '2-digit' — две цифры ('24')
 • month: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01'), 'long' — полное название ('январь'), 'short' — короткое ('янв.'), 'narrow' — узкое ('я')
 • day: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01')
 • hour: 'numeric' — числовой час ('2'), '2-digit' — две цифры ('02')
 • minute: 'numeric' — числовые минуты ('5'), '2-digit' — две цифры ('05')
 • second: 'numeric' — числовые секунды ('9'), '2-digit' — две цифры ('09')
 • fractionalSecondDigits: 1, 2 или 3 — количество цифр в дробной части секунды
 • era: 'long' — полное название эры ('нашей эры'), 'short' — короткое ('н.э.'), 'narrow' — узкое ('н')
 • timeZone: строка с часовым поясом (например, 'Europe/Moscow', 'America/New_York')
 • hour12: true/false — 12-часовой (true) или 24-часовой (false) формат
 • timeZoneName: 'long' — полное название ('Москва, стандартное время'), 'short' — короткое ('GMT+3'), 'shortOffset' — короткий офсет ('GMT+3'), 'longOffset' — длинный офсет ('GMT+03:00'), 'shortGeneric' — короткое общее ('MSK'), 'longGeneric' — длинное общее ('московское время')
 • formatMatcher: стратегия подбора формата — "basic" (базовая) или "best fit" (наилучшее соответствие)`}],description:"Метод объекта Date, возвращает дату и время в виде строки с учётом locales и options. Без locales и options использует стандартные настройки операционной системы (язык, формат даты и времени). Объединяет возможности toLocaleDateString() и toLocaleTimeString(). Возвращает строку с отформатированной датой и временем по местному времени.",example:`const date = new Date('2024-01-15T14:30:45');
const defaultString = date.toLocaleString();
const ruString = date.toLocaleString('ru-RU');
const enString = date.toLocaleString('en-US');
const customString = date.toLocaleString('ru-RU', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
console.log(defaultString); // зависит от системы, например '15.01.2024, 14:30:45' (для России)
console.log(ruString); // '15.01.2024, 14:30:45'
console.log(enString); // '1/15/2024, 2:30:45 PM'
console.log(customString); // 'понедельник, 15 января 2024 г. в 14:30'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tolocalestring",errors:"TypeError — если this не является датой."},{name:"toLocaleDateString()",syntax:"date.toLocaleDateString([locales[, options]])",parameters:[{name:"locales",description:"Строка с языковым кодом (например, 'ru-RU', 'en-US') или массив таких строк"},{name:"options",description:`Объект с настройками форматирования даты:
 • weekday: 'long' — полное название дня ('понедельник'), 'short' — короткое ('пн'), 'narrow' — узкое ('п')
 • year: 'numeric' — числовой формат ('2024'), '2-digit' — две цифры ('24')
 • month: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01'), 'long' — полное название ('январь'), 'short' — короткое ('янв.'), 'narrow' — узкое ('я')
 • day: 'numeric' — числовой ('1'), '2-digit' — две цифры ('01')
 • era: 'long' — полное название эры ('нашей эры'), 'short' — короткое ('н.э.'), 'narrow' — узкое ('н')
 • timeZone: строка с часовым поясом (например, 'Europe/Moscow', 'America/New_York')
 • hour12: true/false — 12-часовой или 24-часовой формат
 • formatMatcher: стратегия подбора формата — "basic" (базовая) или "best fit" (наилучшее соответствие)`}],description:"Метод объекта Date, возвращает дату в виде строки с учётом locales и options. Без locales и options использует стандартные настройки операционной системы (язык и формат даты). Позволяет гибко настраивать формат вывода (год, месяц, день и т.д.) по местному времени. Возвращает строку с отформатированной датой.",example:`const date = new Date('2024-01-15T14:30:45');
const defaultDate = date.toLocaleDateString();
const ruDate = date.toLocaleDateString('ru-RU');
const enDate = date.toLocaleDateString('en-US');
const customDate = date.toLocaleDateString('ru-RU', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log(defaultDate); // зависит от системы, например '15.01.2024' (для России)
console.log(ruDate); // '15.01.2024' (по Москве)
console.log(enDate); // '1/15/2024' (по Москве)
console.log(customDate); // 'понедельник, 15 января 2024 г.'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tolocaledatestring",errors:"TypeError — если this не является датой."},{name:"toLocaleTimeString()",syntax:"date.toLocaleTimeString([locales[, options]])",parameters:[{name:"locales",description:"Строка с языковым кодом (например, 'ru-RU', 'en-US') или массив таких строк"},{name:"options",description:`Объект с настройками форматирования времени:
 • hour: 'numeric' — числовой час ('2'), '2-digit' — две цифры ('02')
 • minute: 'numeric' — числовые минуты ('5'), '2-digit' — две цифры ('05')
 • second: 'numeric' — числовые секунды ('9'), '2-digit' — две цифры ('09')
 • fractionalSecondDigits: 1, 2 или 3 — количество цифр в дробной части секунды
 • hour12: true/false — 12-часовой (true) или 24-часовой (false) формат
 • timeZone: строка с часовым поясом (например, 'Europe/Moscow', 'America/New_York')
 • timeZoneName: 'long' — полное название ('Москва, стандартное время'), 'short' — короткое ('GMT+3'), 'shortOffset' — короткий офсет ('GMT+3'), 'longOffset' — длинный офсет ('GMT+03:00'), 'shortGeneric' — короткое общее ('MSK'), 'longGeneric' — длинное общее ('московское время')
 • formatMatcher: стратегия подбора формата — "basic" (базовая) или "best fit" (наилучшее соответствие)`}],description:"Метод объекта Date, возвращает время в виде строки с учётом locales и options. Без locales и options использует стандартные настройки операционной системы (язык и формат времени). Позволяет гибко настраивать формат вывода (час, минута, секунда, часовая система и т.д.) по местному времени. Возвращает строку с отформатированным временем.",example:`const date = new Date('2024-01-15T14:30:45');
const defaultTime = date.toLocaleTimeString();
const ruTime = date.toLocaleTimeString('ru-RU');
const enTime = date.toLocaleTimeString('en-US');
const customTime = date.toLocaleTimeString('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
console.log(defaultTime); // зависит от системы, например '14:30:45' (для России)
console.log(ruTime); // '14:30:45' (по Москве)
console.log(enTime); // '2:30:45 PM' (по Москве)
console.log(customTime); // '14:30:45'`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.tolocaletimestring",errors:"TypeError — если this не является датой."},{name:"Date.now()",syntax:"Date.now()",description:"Статический метод объекта Date, возвращает таймстамп текущей даты (количество миллисекунд с 1 января 1970 года, 00:00:00 UTC). Это то же самое, что и new Date().getTime(), однако метод не создаёт промежуточный объект Date, поэтому работает быстрее.",example:`const timestamp = Date.now();
console.log(timestamp); // таймстамп для текущей даты`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.now"},{name:"Date.parse()",syntax:"Date.parse(string)",parameters:[{name:"string",description:"Строка, представляющая дату и время в формате ISO 8601 или других поддерживаемых форматах"}],description:`Статический метод объекта Date, парсит string и возвращает таймстамп. Если формат неправильный, возвращается NaN. Предпочтительный формат: YYYY-MM-DDTHH:mm:ss.sssZ, где:
 • YYYY-MM-DD – дата: год-месяц-день;
 • 'T' – разделитель;
 • HH:mm:ss.sss – время: часы, минуты, секунды, миллисекунды;
 • 'Z' – часовой пояс в формате +-hh:mm (необязательно).`,example:`const timestamp = Date.parse('2024-01-01T00:00:00Z');
console.log(timestamp); // 1704067200000`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.parse"},{name:"Date.UTC()",syntax:"Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])",parameters:[{name:"year",description:"Год (4 цифры)"},{name:"month",description:"Месяц (0-11)"},{name:"day",description:"День месяца (1-31)"},{name:"hour",description:"Часы (0-23)"},{name:"minute",description:"Минуты (0-59)"},{name:"second",description:"Секунды (0-59)"},{name:"millisecond",description:"Миллисекунды (0-999)"}],description:"Статический метод объекта Date, возвращает таймстамп для year, month, day и hour, minute, second, millisecond по UTC. В отличие от конструктора new Date(), параметры интерпретируются как UTC время, а не локальное время.",example:`const timestamp = Date.UTC(2024, 0, 1);
console.log(timestamp); // 1704067200000`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.utc"}]},Q1={[xt.FUNCTION]:[{name:"call()",syntax:"func.call(thisArg, ...args)",parameters:[{name:"thisArg",description:"Значение, которое будет использоваться как this при вызове функции"},{name:"...args",description:"Аргументы, которые будут переданы функции"}],description:"Метод объекта Function, позволяет вызывать исходную функцию, используя thisArg как её контекст this, а ...args – как её аргументы.",example:"function greet(name) {\n console.log(`Hello, ${name}! I'm ${this.title}`);\n}\nconst person = { title: 'Mr.' };\ngreet.call(person, 'John'); // 'Hello, John! I'm Mr.'",specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.call",errors:"TypeError — если this не является функцией."},{name:"apply()",syntax:"func.apply(thisArg, argsArray)",parameters:[{name:"thisArg",description:"Значение, которое будет использоваться как this при вызове функции"},{name:"argsArray",description:"Массив или псевдомассив аргументов, которые будут переданы функции"}],description:"Метод объекта Function, позволяет вызывать функцию, используя thisArg как её контекст this, а argsArray – как массив её аргументов. Единственное отличие от call() – передача аргументов массивом.",example:`function sum(a, b, c) {
 return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum.apply(null, numbers);
console.log(result); // 6`,specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.apply",errors:"TypeError — если this не является функцией."},{name:"bind()",syntax:"func.bind(thisArg, ...args)",parameters:[{name:"thisArg",description:"Значение, которое будет использоваться как this в новой функции (или null/undefined для глобального контекста)"},{name:"...args",description:"Аргументы, которые будут частично применены к новой функции"}],description:`Метод объекта Function, создаёт новую функцию с фиксированным this и начальными аргументами. Возвращает функцию-обёртку, которая при вызове вызывает оригинальную функцию с thisArg и ...args, дополненными новыми аргументами при вызове.
Свойство name функции, возвращённой bind(), будет свойством name исходной функции с префиксом "bound ".
Привязанные функции не имеют собственного свойства prototype. При вызове такой функции в качестве конструктора (через new) используется прототип исходной функции.`,example:`function greet(greeting, name) {
  console.log(\`\${greeting}, \${name}!\`);
}
const sayHello = greet.bind(null, 'Hello');
sayHello('John'); // 'Hello, John!'

console.log(sayHello.name); // "bound greet"

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function() {
  console.log(this.type);
};
const BoundAnimal = Animal.bind(null, "cat");
const cat = new BoundAnimal();
console.log(cat.type); // "cat"
console.log(cat instanceof Animal); // true
console.log(BoundAnimal.prototype); // undefined`,specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.bind",errors:"TypeError — если this не является функцией."},{name:"name",syntax:"function.name",description:"Свойство объекта Function, возвращает имя исходной функции. Для анонимных функций возвращает пустую строку или имя переменной. Свойство только для чтения (read-only).",example:`const myFunc = function() {};
const name = myFunc.name;
console.log(name); // 'myFunc'`,specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-name",errors:"TypeError — если this не является функцией."},{name:"length",syntax:"function.length",description:"Свойство объекта Function, возвращает количество параметров исходной функции, указанных в объявлении. Не учитывает параметры по умолчанию и rest параметры. Свойство только для чтения (read-only).",example:`function sum(a, b) {};
const length = sum.length;
console.log(length); // 2`,specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-length",errors:"TypeError — если this не является функцией."}]},$1={[xt.JSON]:[{name:"JSON.stringify()",syntax:"JSON.stringify(value[, replacer[, space]])",parameters:[{name:"value",description:"Значение, которое нужно преобразовать в JSON (строку)"},{name:"replacer",description:"Функция преобразования или массив свойств для включения в результат"},{name:"space",description:"Строка или число для форматирования выходной строки (отступы)"}],description:`Статический метод объекта JSON, преобразует value в JSON-строку, replacer позволяет фильтровать или преобразовывать свойства перед сериализацией, а space задаёт отступы для форматирования. JSON является независимым от языка форматом данных, поэтому метод пропускает некоторые специфические свойства JavaScript: методы (свойства-функции), символьные ключи и значения, свойства содержащие undefined.
Значения NaN, Infinity и -Infinity сериализуются в null. Объекты Function, RegExp и Error не могут сериализироваться. Метод сериализирует только перечислимые собственные свойства объекта.
Если объект содержит циклические ссылки, будет выброшена ошибка. Если объект имеет метод toJSON(), он будет вызван, и его возвращаемое значение будет сериализовано вместо исходного объекта.`,example:`const obj = { name: "John", age: 30, city: "Moscow" };
const json1 = JSON.stringify(obj);
console.log(json1); // "{"name":"John","age":30,"city":"Moscow"}"

const json2 = JSON.stringify(obj, ["name", "city"]);
console.log(json2); // "{"name":"John","city":"Moscow"}"

const json3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") return value + 5;
  return value;
}, 2);
console.log(json3);
// {
//   "name": "John",
//   "age": 35,
//   "city": "Moscow"
// }`,specification:"https://tc39.es/ecma262/multipage/structured-data.html#sec-json.stringify",errors:"TypeError — если объект содержит циклическую ссылку."},{name:"JSON.parse()",syntax:"JSON.parse(text[, reviver])",parameters:[{name:"text",description:"JSON для преобразования в JavaScript значение"},{name:"reviver",description:"Функция, вызываемая для каждой пары ключ-значение для преобразования значений"}],description:`Статический метод объекта JSON, преобразует text в JavaScript значение, reviver вызывается для каждого свойства (включая вложенные) и позволяет преобразовывать значения перед их возвратом.
Объекты Function, RegExp и Error не могут быть преобразованы обратно в объект.`,example:`const json = '{"name":"John","age":30}';
const obj = JSON.parse(json);
console.log(obj.name); // "John"

const jsonWithDate = '{"name":"John","birth":"1980-01-01"}';
const objWithDate = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "birth") return new Date(value);
  return value;
});
console.log(objWithDate.birth.getFullYear()); // 1980`,specification:"https://tc39.es/ecma262/multipage/structured-data.html#sec-json.parse",errors:"SyntaxError — если text не является валидным JSON."}]},W1={[xt.MAP]:[{name:"forEach()",syntax:"map.forEach(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, которая будет вызвана для каждой пары ключ-значение. Принимает три аргумента:
• value - (значение текущего элемента)
• key - (ключ текущего элемента)
• map (сам объект Map, по которому производится итерация).`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Map, вызывает callbackFn для каждой пары (ключ/значение) исходной коллекции. Возвращает undefined.",example:`const map = new Map([['a', 1], ['b', 2]]);
map.forEach((value, key) => {
  console.log(key, value); // 'a' 1, 'b' 2
});`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.foreach",errors:"TypeError — если this не является множеством (set), массивом или коллекцией (map), или fn не является функцией."},{name:"set()",syntax:"map.set(key, value)",parameters:[{name:"key",description:"Ключ, по которому будет установлено значение"},{name:"value",description:"Значение, которое будет ассоциировано с ключом"}],description:"Метод объекта Map, записывает value по key в исходную коллекцию. Каждый вызов set() возвращает объект Map, что позволяет использовать цепочки вызовов. Если key уже существует в Map, его значение обновляется.",example:`const map = new Map();

map.set('key', 'value');

const result = map.get('key');
console.log(result); // 'value'`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.set",errors:"TypeError — если this не является коллекцией (map или weakMap)."},{name:"get()",syntax:"map.get(key)",parameters:[{name:"key",description:"Ключ, значение по которому нужно получить"}],description:"Метод объекта Map, возвращает значение по key или undefined если key отсутствует в исходной коллекции.",example:`const map = new Map([['a', 1], ['b', 2]]);
const value = map.get('a');
console.log(value); // 1`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.get",errors:"TypeError — если this не является коллекцией (map или weakMap)."},{name:"has()",syntax:"map.has(key)",parameters:[{name:"key",description:"Ключ, наличие которого проверяется"}],description:"Метод объекта Map, возвращает true, если key, присутствует в исходной коллекции, иначе false.",example:`const map = new Map([['a', 1], ['b', 2]]);
const hasKey = map.has('a');
console.log(hasKey); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.has",errors:"TypeError — если this не является коллекцией (map или weakMap) или множеством (Set или WeakSet)."},{name:"delete()",syntax:"map.delete(key)",parameters:[{name:"key",description:"Ключ элемента, который нужно удалить"}],description:"Метод объекта Map, удаляет элемент (пару вида «ключ/значение») по key и возвращает true, если оно было в исходной коллекции на момент вызова, иначе false.",example:`const map = new Map([['a', 1], ['b', 2]]);

const deleted = map.delete('a');

console.log(deleted); // true
console.log(map.has('a')); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.delete",errors:"TypeError — если this не является коллекцией (map или weakMap) или множеством (Set или WeakSet)."},{name:"clear()",syntax:"map.clear()",description:"Метод объекта Map, очищает исходную коллекцию от всех элементов.",example:`const map = new Map([['a', 1], ['b', 2]]);

map.clear();

console.log(map.size); // 0`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.clear",errors:"TypeError — если this не является коллекцией (map) или множеством (set)."},{name:"keys()",syntax:"map.keys()",description:"Метод объекта Map, возвращает итератор, содержащий ключи исходной коллекции в порядке вставки.",example:`const map = new Map([['a', 1], ['b', 2]]);
const keys = Array.from(map.keys());
console.log(keys); // ['a', 'b']`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.keys",errors:"TypeError — если this не является коллекцией (map), массивом или множеством (set)."},{name:"values()",syntax:"map.values()",description:"Метод объекта Map, возвращает итератор, содержащий значения исходной коллекции в порядке вставки.",example:`const map = new Map([['a', 1], ['b', 2]]);
const values = Array.from(map.values());
console.log(values); // [1, 2]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.values",errors:"TypeError — если this не является коллекцией (map), массивом или множеством (set)."},{name:"entries()",syntax:"map.entries()",description:"Метод объекта Map, возвращает итератор, содержащий пары [ключ, значение] исходной коллекции в порядке вставки. Этот вариант используется по умолчанию в for...of.",example:`const map = new Map([['a', 1], ['b', 2]]);
const entries = Array.from(map.entries());
console.log(entries); // [['a', 1], ['b', 2]]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.entries",errors:"TypeError — если this не является коллекцией (map), массивом или множеством (set)."},{name:"size",syntax:"map.size",description:"Свойство объекта Map, возвращает количество элементов исходной коллекции. Свойство только для чтения (read-only).",example:`const map = new Map([['a', 1], ['b', 2]]);
const size = map.size;
console.log(size); // 2`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-map.prototype.size",errors:"TypeError — если this не является коллекцией (map) или множеством (set)."}]},e2={[xt.WEAK_MAP]:[{name:"set()",syntax:"weakMap.set(key, value)",parameters:[{name:"key",description:"Объект-ключ, по которому будет установлено значение"},{name:"value",description:"Значение, которое будет ассоциировано с ключом"}],description:"Метод объекта WeakMap, записывает value по key. Каждый вызов set() возвращает объект WeakMap, что позволяет использовать цепочки вызовов. Ключами в WeakMap могут быть только объекты.",example:`const weakMap = new WeakMap();
const key = {};

weakMap.set(key, 'value');

const result = weakMap.get(key);
console.log(result); // 'value'`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.set",errors:"TypeError — если this не является коллекцией (map или weakMap) или key не является объектом."},{name:"get()",syntax:"weakMap.get(key)",parameters:[{name:"key",description:"Объект-ключ, для которого нужно получить связанное значение"}],description:"Метод объекта WeakMap, возвращает значение по key или undefined если key отсутствует в исходной коллекции.",example:`const weakMap = new WeakMap();
const key = {};

weakMap.set(key, 'data');

const value = weakMap.get(key);
console.log(value); // 'data'`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.get",errors:"TypeError — если this не является коллекцией (map или weakMap) или key не является объектом."},{name:"has()",syntax:"weakMap.has(key)",parameters:[{name:"key",description:"Объект-ключ, наличие которого проверяется"}],description:"Метод объекта WeakMap, возвращает true, если key присутствует в исходной коллекции, иначе false.",example:`const weakMap = new WeakMap();
const key = {};

weakMap.set(key, 'value');

const hasKey = weakMap.has(key);
console.log(hasKey); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.has",errors:"TypeError — если this не является коллекцией (map или weakMap) или множеством (set или weakSet), или key не является объектом."},{name:"delete()",syntax:"weakMap.delete(key)",parameters:[{name:"key",description:"Объект-ключ элемента, который нужно удалить"}],description:"Метод объекта WeakMap, удаляет элемент (пару вида «ключ/значение») по key и возвращает true, если оно было в исходной коллекции на момент вызова, иначе false.",example:`const weakMap = new WeakMap();
const key = {};

weakMap.set(key, 'value');

const deleted = weakMap.delete(key);
console.log(deleted); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.delete",errors:"TypeError — если this не является коллекцией (map или weakMap) или множеством (set или weakSet), или key не является объектом."}]},t2={[xt.SET]:[{name:"forEach()",syntax:"set.forEach(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, которая будет вызвана для каждого значения в множестве. Принимает три аргумента:
• value - (значение текущего элемента)
• key - (то же значение, для совместимости с Map)
• set - (сам объект Set, по которому производится итерация).`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Set, вызывает callbackFn для каждого значения исходной коллекции в порядке их добавления. Возвращает undefined.",example:`const set = new Set([1, 2, 3]);

set.forEach((value) => {
  console.log(value); // 1, 2, 3
});`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.foreach",errors:"TypeError — если this не является коллекцией (map), массивом или множеством (set), или fn не является функцией."},{name:"add()",syntax:"set.add(value)",parameters:[{name:"value",description:"Значение, которое нужно добавить в множество"}],description:"Метод объекта Set, добавляет value в исходное множество. Если value уже есть, то ничего не делает. Возвращает тот же объект Set.",example:`const set = new Set([1, 2]);

set.add(3);

const hasValue = set.has(3);
console.log(hasValue); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.add",errors:"TypeError — если this не является множеством (set или weakSet)."},{name:"has()",syntax:"set.has(value)",parameters:[{name:"value",description:"Значение, наличие которого нужно проверить в множестве"}],description:"Метод объекта Set, возвращает true, если value присутствует в исходном множестве, иначе false.",example:`const set = new Set([1, 2, 3]);
const hasValue = set.has(2);
console.log(hasValue); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.has",errors:"TypeError — если this не является множеством (set или weakSet) или коллекцией (map или weakMap)."},{name:"delete()",syntax:"set.delete(value)",parameters:[{name:"value",description:"Значение, которое нужно удалить из множества"}],description:"Метод объекта Set, удаляет value и возвращает true, если оно было в исходном множестве на момент вызова, иначе false.",example:`const set = new Set([1, 2, 3]);
const deleted = set.delete(2);
console.log(deleted); // true
console.log(set.has(2)); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.delete",errors:"TypeError — если this не является множеством (set или weakSet) или коллекцией (map или weakMap)."},{name:"clear()",syntax:"set.clear()",description:"Метод объекта Set, очищает исходную коллекцию от всех элементов.",example:`const set = new Set([1, 2, 3]);

set.clear();

console.log(set.size); // 0`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.clear",errors:"TypeError — если this не является множеством (set) или коллекцией (map)."},{name:"keys()",syntax:"set.keys()",description:"Метод объекта Set, возвращает итератор, содержащий значения исходного множества в порядке их добавления. Для Set методы keys() и values() идентичны (значения являются и ключами).",example:`const set = new Set([1, 2, 3]);
const keys = Array.from(set.keys());
console.log(keys); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.keys",errors:"TypeError — если this не является множеством (set), массивом или коллекцией (map)."},{name:"values()",syntax:"set.values()",description:"Метод объекта Set, возвращает итератор, содержащий значения исходного множества в порядке их добавления. Для Set методы values() и keys() идентичны.",example:`const set = new Set([1, 2, 3]);
const values = Array.from(set.values());
console.log(values); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.values",errors:"TypeError — если this не является множеством (set), массивом или коллекцией (map)."},{name:"entries()",syntax:"set.entries()",description:"Метод объекта Set, возвращает итератор, содержащий пары [ключ, значение] исходной коллекции в порядке вставки. Этот вариант используется по умолчанию в for...of.",example:`const set = new Set([1, 2, 3]);
const entries = Array.from(set.entries());
console.log(entries); // [[1, 1], [2, 2], [3, 3]]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.entries",errors:"TypeError — если this не является множеством (set), массивом или коллекцией (map)."},{name:"union()",syntax:"set.union(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, с которым нужно выполнить объединение"}],description:"Метод объекта Set, возвращает новое множество, содержащее все элементы исходного множества и otherSet.",example:`const set1 = new Set([1, 2]);
const set2 = new Set([2, 3]);
const unionSet = set1.union(set2);
const result = Array.from(unionSet);
console.log(result); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.union",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"intersection()",syntax:"set.intersection(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, с которым нужно найти пересечение"}],description:"Метод объекта Set, возвращает новое множество, содержащее только элементы, присутствующие в исходном множестве и в otherSet.",example:`const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersectionSet = set1.intersection(set2);
const result = Array.from(intersectionSet);
console.log(result); // [2, 3]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.intersection",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"difference()",syntax:"set.difference(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, элементы которого нужно исключить из исходного множества"}],description:"Метод объекта Set, возвращает новое множество, содержащее элементы исходного множества, которые отсутствуют в otherSet.",example:`const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([2, 4]);
const differenceSet = set1.difference(set2);
const result = Array.from(differenceSet);
console.log(result); // [1, 3]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.difference",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"isSubsetOf()",syntax:"set.isSubsetOf(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, в котором проверяется наличие всех элементов исходного множества"}],description:"Метод объекта Set, возвращает true, если все элементы исходного множества присутствуют в otherSet, иначе false.",example:`const set1 = new Set([1, 2]);
const set2 = new Set([1, 2, 3, 4]);
const isSubset = set1.isSubsetOf(set2);
console.log(isSubset); // true

const set3 = new Set([1, 5]);
const isSubset2 = set3.isSubsetOf(set2);
console.log(isSubset2); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.issubsetof",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"isSupersetOf()",syntax:"set.isSupersetOf(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, которое проверяется на вхождение в исходное множество"}],description:"Метод объекта Set, возвращает true, если исходное множество содержит все элементы otherSet, иначе false.",example:`const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([1, 2]);
const isSuperset = set1.isSupersetOf(set2);
console.log(isSuperset); // true

const set3 = new Set([1, 5]);
const isSuperset2 = set1.isSupersetOf(set3);
console.log(isSuperset2); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.issupersetof",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"isDisjointFrom()",syntax:"set.isDisjointFrom(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, с которым проверяется отсутствие общих элементов"}],description:"Метод объекта Set, возвращает true, если у исходного множества и otherSet нет общих элементов, иначе false.",example:`const set1 = new Set([1, 2]);
const set2 = new Set([3, 4]);
const isDisjoint = set1.isDisjointFrom(set2);
console.log(isDisjoint); // true

const set3 = new Set([2, 3]);
const isDisjoint2 = set1.isDisjointFrom(set3);
console.log(isDisjoint2); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.isdisjointfrom",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"symmetricDifference()",syntax:"set.symmetricDifference(otherSet)",parameters:[{name:"otherSet",description:"Другое множество, с которым нужно найти симметрическую разность"}],description:"Метод объекта Set, возвращает новое множество, содержащее элементы, которые присутствуют только в одном из множеств (исходном или otherSet), но не в обоих.",example:`const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const symmetricDiff = set1.symmetricDifference(set2);
const result = Array.from(symmetricDiff);
console.log(result); // [1, 4]`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.symmetricdifference",errors:"TypeError — если this или otherSet не являются множеством (set)."},{name:"size",syntax:"set.size",description:"Свойство объекта Set, возвращает количество элементов исходного множества. Свойство только для чтения (read-only).",example:`const set = new Set([1, 2, 3]);
const size = set.size;
console.log(size); // 3`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-set.prototype.size",errors:"TypeError —  если this не является множеством (set) или коллекцией (map)."}]},n2={[xt.WEAK_SET]:[{name:"add()",syntax:"weakSet.add(value)",parameters:[{name:"value",description:"Объект, который нужно добавить в WeakSet"}],description:"Метод объекта WeakSet, добавляет value в исходное множество. Если value уже есть, то ничего не делает. Возвращает тот же объект WeakSet.",example:`const weakSet = new WeakSet();
const obj = {};

weakSet.add(obj);

const hasObj = weakSet.has(obj);
console.log(hasObj); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.add",errors:"TypeError — если this не является множеством (set или weakSet) или value не является объектом."},{name:"has()",syntax:"weakSet.has(value)",parameters:[{name:"value",description:"Объект, наличие которого нужно проверить в WeakSet"}],description:"Метод объекта WeakSet, возвращает true, если value присутствует в исходном множестве, иначе false.",example:`const obj = {};
const weakSet = new WeakSet([obj]);
const hasObj = weakSet.has(obj);
console.log(hasObj); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.has",errors:"TypeError —  если this не является множеством (set или weakSet) или коллекцией (map или weakMap), или value не является объектом."},{name:"delete()",syntax:"weakSet.delete(value)",parameters:[{name:"value",description:"Объект, который нужно удалить из WeakSet"}],description:"Метод объекта WeakSet, удаляет value и возвращает true, если оно было в исходном множестве на момент вызова, иначе false.",example:`const obj = {};
const weakSet = new WeakSet([obj]);
const deleted = weakSet.delete(obj);
console.log(deleted); // true
console.log(weakSet.has(obj)); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.delete",errors:"TypeError —  если this не является множеством (set или weakSet) или коллекцией (map или weakMap), или (value) не является объектом."}]},o2={[xt.UTIL]:[{name:"structuredClone()",syntax:"structuredClone(value[, options])",parameters:[{name:"value",description:"Значение, которое нужно глубоко скопировать"},{name:"options",description:`Объект с параметрами клонирования:
 • transfer - массив Transferable объектов (ArrayBuffer, MessagePort, ImageBitmap) для передачи владения без копирования
 • shared - boolean, если true, то SharedArrayBuffer клонируется без копирования (по ссылке)`}],description:"Встроенная функция, возвращает глубокую копию value.",example:`const obj = { a: 1, b: { c: 2 } };
const cloned = structuredClone(obj);
console.log(cloned); // { a: 1, b: { c: 2 } }`,specification:"https://tc39.es/ecma262/multipage/structured-data.html#sec-structuredclone",errors:"DataCloneError — возникает при клонировании функций или DOM-элементов."},{name:"Symbol()",syntax:"Symbol([description])",parameters:[{name:"description",description:"Строковое описание символа"}],description:"Встроенная функция, позволяющая создавать уникальные символы с description. Не является конструктором.",example:`const sym = Symbol('id');
console.log(sym); // Symbol(id)`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol-description",errors:"TypeError — если вызывается как конструктор с оператором new."},{name:"isNaN()",syntax:"isNaN(value)",parameters:[{name:"value",description:"Значение, которое нужно проверить на NaN"}],description:"Встроенная функция, которая преобразует value в число и проверяет является ли он NaN. Возвращает true, если является, и false, если является числом.",example:`console.log(isNaN('abc')); // true
console.log(isNaN(123)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('123')); // false`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-isnan-number"},{name:"isFinite()",syntax:"isFinite(value)",parameters:[{name:"value",description:"Значение, которое нужно проверить на конечность"}],description:"Встроенная функция, которая преобразует value в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity, иначе false.",example:`console.log(isFinite('123')); // true
console.log(isFinite('abc')); // false
console.log(isFinite(Infinity)); // false
console.log(isFinite(42)); // true`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-isfinite-number"},{name:"parseInt()",syntax:"parseInt(string[, radix])",parameters:[{name:"string",description:"Строка, которую нужно преобразовать в целое число"},{name:"radix",description:"Основание системы счисления от 2 до 36 (по умолчанию 10)"}],description:"Встроенная функция, преобразует string в целое число по radix. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",example:`console.log(parseInt('123px')); // 123
console.log(parseInt('101', 2)); // 5
console.log(parseInt('0xFF')); // 255
console.log(parseInt('abc')); // NaN`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-parseint-string-radix"},{name:"parseFloat()",syntax:"parseFloat(string)",parameters:[{name:"string",description:"Строка, которую нужно преобразовать в число с плавающей точкой"}],description:"Встроенная функция, преобразует string в число с плавающей точкой. Функция 'читает' число из строки. Если в процессе чтения возникает ошибка, возвращает полученное до ошибки число. Вернёт NaN, если не смогла прочитать ни одну цифру.",example:`console.log(parseFloat('12.34px')); // 12.34
console.log(parseFloat('12.3.4')); // 12.3
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('abc')); // NaN`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-parsefloat-string"},{name:"setTimeout()",syntax:"setTimeout(func[, delay[, ...args]])",parameters:[{name:"func",description:"Функция, которую нужно вызвать после задержки"},{name:"delay",description:"Задержка в миллисекундах перед вызовом функции (по умолчанию 0)"},{name:"...args",description:"Дополнительные аргументы, которые будут переданы функции"}],description:`Функция, позволяющая вызвать func один раз через delay. Вызов setTimeout возвращает «идентификатор таймера», который можно использовать для отмены дальнейшего выполнения. ...args будут переданы в func при вызове. В браузере устанавливает this=window.
Когда func передаётся в setTimeout, на неё создаётся внутренняя ссылка и сохраняется в планировщике. Это предотвращает попадание функции в сборщик мусора, даже если на неё нет других ссылок.`,example:`setTimeout(() => {
  console.log('Выполнится через 1 секунду');
}, 1000);`,specification:"https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-setTimeout",errors:"TypeError — если func не является функцией."},{name:"clearTimeout()",syntax:"clearTimeout(timeoutID)",parameters:[{name:"timeoutID",description:"Идентификатор таймера, полученный из setTimeout()"}],description:"Встроенная функция, отменяет таймер, установленный ранее с помощью setTimeout(), предотвращая выполнение запланированной функции. Если передан неверный или уже сработавший timeoutID, ничего не происходит (ошибки не возникает).",example:`const timerId = setTimeout(() => {
 console.log('Не выполнится');
}, 1000);

clearTimeout(timerId);`,specification:"https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-clearTimeout",errors:"TypeError — если timeoutID не является числовым идентификатором таймера."},{name:"setInterval()",syntax:"setInterval(func[, delay[, ...args]])",parameters:[{name:"func",description:"Функция, которую нужно вызывать повторно"},{name:"delay",description:"Интервал в миллисекундах между вызовами функции (по умолчанию 0)"},{name:"...args",description:"Дополнительные аргументы, которые будут переданы функции"}],description:`Функция, позволяющая вызывать func регулярно, повторяя вызов через delay. Вызов setInterval возвращает «идентификатор таймера», который можно использовать для отмены дальнейшего выполнения. ...args будут переданы в func при каждом вызове. В браузере устанавливает this=window.
Когда func передаётся в setInterval, на неё создаётся внутренняя ссылка и сохраняется в планировщике. Это предотвращает попадание функции в сборщик мусора, даже если на неё нет других ссылок. func остаётся в памяти до тех пор, пока не будет вызван clearInterval.`,example:`let counter = 0;

const intervalId = setInterval(() => {
  console.log("Выведется 3 раза: 'Tick', 'Tick', 'Tick'");
  counter++;
  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);`,specification:"https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-setInterval",errors:"TypeError — если func не является функцией."},{name:"clearInterval()",syntax:"clearInterval(intervalID)",parameters:[{name:"intervalID",description:"Идентификатор таймера, полученный из setInterval()"}],description:"Встроенная функция, отменяет повторное выполнение, установленное с помощью setInterval(), предотвращая дальнейшие вызовы функции. Если передан неверный или уже остановленный intervalID, ничего не происходит (ошибки не возникает).",example:`let count = 0;
const intervalId = setInterval(() => {
  console.log('Выполнится 3 раза');
  count++;
  if (count === 3) {
    clearInterval(intervalId); // Остановка после 3 выполнений
  }
}, 1000);`,specification:"https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-clearInterval",errors:"TypeError — если intervalID не является числовым идентификатором таймера."},{name:"fetch()",syntax:"fetch(url[, options])",parameters:[{name:"url",description:"URL-адрес для отправки запроса (строка или объект URL)"},{name:"options",description:`Объект с параметрами запроса. Без него выполняется простой GET-запрос.
• method – HTTP метод, например 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'
• headers – объект с HTTP-заголовками (например, {'Content-Type': 'application/json'})
• body – тело запроса (для POST, PUT, PATCH):
  - строка (например, JSON)
  - объект FormData для form/multipart
  - Blob/BufferSource для бинарных данных
  - URLSearchParams для x-www-form-urlencoded
• mode – режим CORS: 'cors', 'no-cors', 'same-origin'
• credentials – отправка кук: 'same-origin', 'include', 'omit'
• cache – режим кэширования: 'default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'
• redirect – обработка редиректов: 'follow', 'error', 'manual'
• referrer – URL реферера или 'about:client'
• referrerPolicy – политика реферера
• integrity – хэш для проверки целостности
• keepalive – разрешает запросу "пережить" страницу
• signal – объект AbortSignal для отмены запроса

Запрещённые HTTP-заголовки:
Accept-Charset, Accept-Encoding, Access-Control-Request-Headers, Access-Control-Request-Method, Connection, Content-Length, Cookie, Cookie2, Date, DNT, Expect, Host, Keep-Alive, Origin, Referer, TE, Trailer, Transfer-Encoding, Upgrade, Via, Proxy-*, Sec-*`}],description:`Встроенная функция для отправки сетевых запросов и получения данных с сервера. Возвращает промис.
Процесс получения ответа происходит в два этапа:
1. Промис выполняется с объектом Response, как только сервер пришлёт заголовки ответа. Можно проверить статус HTTP и заголовки, но без тела ответа.
2. Для получения тела ответа используется дополнительный вызов методов Response (text(), json() и др.).
Промис завершается с ошибкой только при проблемах сети или несуществующем домене. HTTP-статусы 404 и 500 НЕ вызывают ошибку fetch.
Свойства Response:
• status – код статуса HTTP-запроса (например, 200, 404, 500)
• ok – true, если код статуса в диапазоне 200-299
• headers – объект, похожий на Map, содержащий заголовки ответа
Методы Response для получения тела ответа:
• response.text() – возвращает ответ как текст
• response.json() – декодирует ответ в JSON
• response.formData() – возвращает как объект FormData
• response.blob() – возвращает как Blob (бинарные данные)
• response.arrayBuffer() – возвращает как ArrayBuffer
• response.body – ReadableStream для чтения по частям.`,example:`fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Post', body: 'Content' })
})
 .then(response => response.json())
 .then(data => console.log(data)); // {title: 'Post', body: 'Content'}`,specification:"https://fetch.spec.whatwg.org/#fetch-method",errors:`TypeError — если URL не является валидным URL или если указаны недопустимые параметры запроса.
AbortError — если запрос был отменён через AbortSignal.
Сетевая ошибка — при проблемах сети или недоступности ресурса.`}]},a2={[xt.ARRAY]:[{name:"pop()",syntax:"arr.pop()",description:"Метод объекта Array, удаляет последний элемент из исходного массива и возвращает его.",example:`const numbers = [10, 20, 30];
const last = numbers.pop();
console.log(last); // 30
console.log(numbers); // [10, 20]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.pop",errors:"TypeError — если this не является массивом."},{name:"push()",syntax:"arr.push(...items)",parameters:[{name:"...items",description:"Элементы для добавления"}],description:"Метод объекта Array, добавляет ...items в конец исходного массива. Возвращает новую длину массива.",example:`const numbers = [];
const length = numbers.push(1, 2, 3);
console.log(length); // 3
console.log(numbers); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.push",errors:"TypeError — если this не является массивом."},{name:"shift()",syntax:"arr.shift()",description:"Метод объекта Array, удаляет первый элемент из исходного массива и возвращает его.",example:`const queue = ['first', 'second', 'third'];
const firstItem = queue.shift();
console.log(firstItem); // 'first'
console.log(queue); // ['second', 'third']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.shift",errors:"TypeError — если this не является массивом."},{name:"unshift()",syntax:"arr.unshift(...items)",parameters:[{name:"...items",description:"Элементы для добавления"}],description:"Метод объекта Array, добавляет ...items в начало исходного массива. Возвращает новую длину массива.",example:`const numbers = [3, 4];
const newLength = numbers.unshift(1, 2);
console.log(newLength); // 4
console.log(numbers); // [1, 2, 3, 4]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.unshift",errors:"TypeError — если this не является массивом."},{name:"toString()",syntax:"arr.toString()",description:"Метод объекта Array, возвращает строковое представление исходного массива в виде списка элементов, разделённых запятыми.",example:`const data = ['apple', 'banana', 'orange'];
const str = data.toString();
console.log(str); // 'apple,banana,orange'`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring",errors:"TypeError — если this является null или undefined."},{name:"toLocaleString()",syntax:"arr.toLocaleString([locales[, options]])",parameters:[{name:"locales",description:'Строка с языковой меткой (например, "ru-RU") или массив таких строк.'},{name:"options",description:"Объект с настройками форматирования."}],description:"Метод объекта Array, возвращает локализованное строковое представление исходного массива. Для каждого элемента вызывается его собственный метод toLocaleString(), после чего результаты объединяются через запятую.",example:`const prices = [1234.56, 7890.12];
const ruPrices = prices.toLocaleString("ru-RU", {
  style: "currency",
  currency: "RUB"
});
console.log(ruPrices); // '1 234,56 ₽,7 890,12 ₽'

const dates = [new Date(2024, 0, 1), new Date(2024, 11, 31)];
const ruDates = dates.toLocaleString("ru-RU", {
 dateStyle: "short"
});
console.log(ruDates); // '01.01.2024, 31.12.2024'`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tolocalestring",errors:"TypeError — если this является null или undefined."},{name:"indexOf()",syntax:"arr.indexOf(searchElement[, fromIndex])",parameters:[{name:"searchElement",description:"Элемент для поиска в массиве"},{name:"fromIndex",description:"Индекс начала поиска"}],description:"Метод объекта Array, выполняет поиск searchElement в исходном массиве, начиная с fromIndex. Возвращает индекс первого совпадения или -1, если элемент не найден.",example:`const users = ['alice', 'bob', 'charlie', 'bob'];
const index = users.indexOf('bob');
console.log(index); // 1

const secondIndex = users.indexOf('bob', 2);
console.log(secondIndex); // 3`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.indexof",errors:"TypeError — если this не является массивом или строкой."},{name:"lastIndexOf()",syntax:"arr.lastIndexOf(searchElement[, fromIndex])",parameters:[{name:"searchElement",description:"Элемент для поиска в массиве"},{name:"fromIndex",description:"Индекс начала поиска (по умолчанию равен длине массива)"}],description:"Метод объекта Array, выполняет поиск searchElement в исходном массиве с конца, начиная с fromIndex. Возвращает индекс последнего совпадения или -1, если элемент не найден.",example:`const logEntries = ['error', 'info', 'warning', 'info', 'error'];
const lastInfoIndex = logEntries.lastIndexOf('info');
console.log(lastInfoIndex); // 3

const lastErrorIndex = logEntries.lastIndexOf('error', 3);
console.log(lastErrorIndex); // 0`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.lastindexof",errors:"TypeError — если this не является массивом или строкой."},{name:"at()",syntax:"arr.at(index)",parameters:[{name:"index",description:"Индекс элемента (может быть отрицательным для отсчёта с конца)"}],description:"Метод объекта Array, возвращает элемент исходного массива по index. Если index выходит за границы массива, возвращает undefined.",example:`const colors = ['red', 'green', 'blue', 'yellow'];
const lastColor = colors.at(-1);
console.log(lastColor); // 'yellow'

const secondColor = colors.at(1);
console.log(secondColor); // 'green'`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at",errors:"TypeError — если this не является массивом или строкой."},{name:"includes()",syntax:"arr.includes(searchElement[, fromIndex])",parameters:[{name:"searchElement",description:"Элемент для поиска в массиве"},{name:"fromIndex",description:"Индекс начала поиска"}],description:`Метод объекта Array, проверяет, содержит ли исходный массив searchElement, начиная с fromIndex. Возвращает true если содержит, иначе false.
Использует алгоритм SameValueZero (правильно обрабатывает NaN)`,example:`const permissions = ['read', 'write', 'execute'];
const hasWrite = permissions.includes('write');
console.log(hasWrite); // true

const hasDelete = permissions.includes('delete');
console.log(hasDelete); // false`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.includes",errors:"TypeError — если this не является массивом или строкой."},{name:"slice()",syntax:"arr.slice([start[, end]])",parameters:[{name:"start",description:"Индекс начала подмассива (может быть отрицательным)"},{name:"end",description:"Индекс конца подмассива (не включая, может быть отрицательным)"}],description:`Метод объекта Array, возвращает новый массив, содержащий элементы исходного массива:
• С двумя аргументами: элементы от start до end;
• С одним аргументом: элементы от start до конца массива;
• Без аргументов: поверхностную копию исходного массива.`,example:`const numbers = [10, 20, 30, 40, 50];
const middle = numbers.slice(1, 4);
console.log(middle); // [20, 30, 40]

const lastTwo = numbers.slice(-2);
console.log(lastTwo); // [40, 50]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.slice",errors:"TypeError — если this не является массивом или строкой."},{name:"splice()",syntax:"arr.splice(start[, deleteCount[, ...items]])",parameters:[{name:"start",description:"Индекс, с которого начинается изменение массива"},{name:"deleteCount",description:"Количество удаляемых элементов"},{name:"...items",description:"Элементы для вставки на место удалённых"}],description:`Метод объекта Array, изменяет исходный массив начиная с start, удаляет deleteCount и затем вставляет ...items на их место. Возвращает массив удалённых элементов.
• Если deleteCount не указан — удаляются все элементы от start до конца массива
• Если start отрицательный — отсчёт с конца (-1 — последний элемент)
• Если start больше длины массива — ничего не удаляется, ...items добавляются в конец
• Если deleteCount = 0 — элементы не удаляются, только вставляются`,example:`const items = ['apple', 'banana', 'cherry', 'date'];
const removed = items.splice(1, 2, 'blueberry', 'coconut');
console.log(removed); // ['banana', 'cherry']
console.log(items); // ['apple', 'blueberry', 'coconut', 'date']

const arr1 = ['a', 'b', 'c', 'd'];
const removed1 = arr1.splice(1);
console.log(removed1); // ['b', 'c', 'd']
console.log(arr1); // ['a']

const arr2 = ['a', 'b', 'c'];
arr2.splice(1, 0, 'x', 'y');
console.log(arr2); // ['a', 'x', 'y', 'b', 'c']

const arr3 = ['a', 'b', 'c', 'd', 'e'];
const removed3 = arr3.splice(-2, 1);
console.log(removed3); // ['d']
console.log(arr3); // ['a', 'b', 'c', 'e']

const arr4 = ['a', 'b'];
arr4.splice(10, 0, 'x');
console.log(arr4); // ['a', 'b', 'x']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.splice",errors:"TypeError — если this не является массивом."},{name:"toSpliced()",syntax:"arr.toSpliced([start[, deleteCount[, ...items]]])",parameters:[{name:"start",description:"Индекс, с которого начинается изменение массива"},{name:"deleteCount",description:"Количество удаляемых элементов"},{name:"...items",description:"Элементы для вставки на место удалённых"}],description:`Метод объекта Array, возвращает новый массив на основе исходного, в котором начиная start, удаляет deleteCount и затем вставляет ...items на их место.
• Не изменяет исходный массив (в отличие от splice())
• Если deleteCount не указан — удаляются все элементы от start до конца массива
• Если start отрицательный — отсчёт с конца (-1 — последний элемент)
• Если start больше длины массива — ничего не удаляется, ...items добавляются в конец
• Если deleteCount = 0 — элементы не удаляются, только вставляются
• Если start и deleteCount не указаны — возвращает поверхностную копию массива (эквивалентно slice())`,example:`const original = ['jan', 'feb', 'mar', 'apr'];
const newArray = original.toSpliced(2, 1, 'march');
console.log(newArray); // ['jan', 'feb', 'march', 'apr']
console.log(original); // ['jan', 'feb', 'mar', 'apr'] (не изменился)

const arr1 = ['a', 'b', 'c', 'd'];
const removed1 = arr1.toSpliced(1);
console.log(removed1); // ['a']

const arr2 = ['a', 'b', 'c'];
const result2 = arr2.toSpliced(1, 0, 'x', 'y');
console.log(result2); // ['a', 'x', 'y', 'b', 'c']

const arr3 = ['a', 'b', 'c', 'd', 'e'];
const result3 = arr3.toSpliced(-2, 1);
console.log(result3); // ['a', 'b', 'c', 'e']

const arr4 = ['a', 'b'];
const result4 = arr4.toSpliced(10, 0, 'x');
console.log(result4); // ['a', 'b', 'x']

const original2 = [1, 2, 3];
const copy = original2.toSpliced();
console.log(copy === original2); // false (разные массивы)
console.log(copy); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tospliced",errors:"TypeError — если this не является массивом."},{name:"concat()",syntax:"arr.concat(...items)",parameters:[{name:"...items",description:"Элементы или массивы для объединения"}],description:"Метод объекта Array, возвращает новый массив, состоящий из элементов исходного массива и ...items.",example:`const firstHalf = ['a', 'b'];
const secondHalf = ['c', 'd'];
const combined = firstHalf.concat(secondHalf, 'e');
console.log(combined); // ['a', 'b', 'c', 'd', 'e']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.concat",errors:"TypeError — если this не является массивом или строкой."},{name:"forEach()",syntax:"arr.forEach(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, вызываемая для каждого элемента массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, вызывает callbackFn для каждого элемента исходного массива. Возвращает undefined.",example:`const scores = [85, 92, 78];
scores.forEach((score, index) => {
  console.log(\`Student \${index + 1}: \${score}\`);
});
// Student 1: 85
// Student 2: 92
// Student 3: 78`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach",errors:"TypeError — если this не является массивом, множеством (set) или коллекцией (map), или fn не является функцией"},{name:"find()",syntax:"arr.find(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, ищет первый элемент в исходном массиве, удовлетворяющий условию, заданному в callbackFn. Возвращает элемент или undefined если элемент не найден.",example:`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"findLast()",syntax:"arr.findLast(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, ищет элемент в исходном массиве, удовлетворяющий условию, заданному в callbackFn с конца массива. Возвращает элемент или undefined если элемент не найден.",example:`const logs = [
  { level: 'info', message: 'Started' },
  { level: 'error', message: 'Failed' },
  { level: 'info', message: 'Completed' }
];
const lastError = logs.findLast(log => log.level === 'error');
console.log(lastError); // { level: 'error', message: 'Failed' }`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlast",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"findIndex()",syntax:"arr.findIndex(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, ищет индекс первого элемента в исходном массиве, удовлетворяющего условию, заданному в callbackFn. Возвращает индекс или -1 если элемент не найден.",example:`const temperatures = [22, 18, 25, 19, 30];
const hotDayIndex = temperatures.findIndex(temp => temp > 25);
console.log(hotDayIndex); // 4`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findindex",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"findLastIndex()",syntax:"arr.findLastIndex(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, ищет индекс последнего элемента в исходном массиве, удовлетворяющего условию, заданному в callbackFn. Возвращает индекс или -1 если элемент не найден.",example:`const sums = [100, -50, 200, -30, 150];
const lastIndex = sums.findLastIndex(amount => amount < 0);
console.log(lastIndex); // 3`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlastindex",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"filter()",syntax:"arr.filter(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, возвращает новый массив с элементами исходного массива, прошедшими проверку, заданную в callbackFn.",example:`const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"map()",syntax:"arr.map(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, преобразующая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, возвращает новый массив, где каждый элемент получен как результат вызова callbackFn для каждого элемента исходного массива.",example:`const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9);
console.log(discounted); // [90, 180, 270]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"sort()",syntax:"arr.sort([compareFn])",parameters:[{name:"compareFn",description:`Функция сравнения для определения порядка сортировки:
• должна принимать два аргумента: a и b;
• возвращать отрицательное число, если a < b;
• возвращать положительное число, если a > b;
• возвращать 0, если a = b.
Если функция не передана, элементы сортируются по строковому представлению.`}],description:"Метод объекта Array, сортирует элементы исходного массива.",example:`const names = ['Charlie', 'Alice', 'Bob'];
names.sort();
console.log(names); // ['Alice', 'Bob', 'Charlie']

const scores = [85, 92, 78];
scores.sort((a, b) => b - a);
console.log(scores); // [92, 85, 78]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort",errors:"TypeError — если this не является массивом или compareFn не является функцией."},{name:"toSorted()",syntax:"arr.toSorted([compareFn])",parameters:[{name:"compareFn",description:`Функция сравнения для определения порядка сортировки:
 • должна принимать два аргумента: a и b;
 • возвращать отрицательное число, если a < b;
 • возвращать положительное число, если a > b;
 • возвращать 0, если a = b.
Если функция не передана, элементы сортируются по строковому представлению.`}],description:"Метод объекта Array, возвращает новый массив с отсортированными элементами исходного массива.",example:`const numbers = [3, 1, 4, 2];
const sorted = numbers.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]
console.log(numbers); // [3, 1, 4, 2]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted",errors:"TypeError — если this не является массивом или compareFn не является функцией."},{name:"reverse()",syntax:"arr.reverse()",description:"Метод объекта Array, изменяет порядок элементов исходного массива на обратный.",example:`const letters = ['a', 'b', 'c'];
letters.reverse();
console.log(letters); // ['c', 'b', 'a']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reverse",errors:"TypeError — если this не является массивом."},{name:"toReversed()",syntax:"arr.toReversed()",description:"Метод объекта Array, возвращает новый массив с элементами исходного массива в обратном порядке.",example:`const items = ['first', 'second', 'third'];
const reversed = items.toReversed();
console.log(reversed); // ['third', 'second', 'first']
console.log(items); // ['first', 'second', 'third']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.toreversed",errors:"TypeError — если this не является массивом."},{name:"join()",syntax:"arr.join([separator])",parameters:[{name:"separator",description:"Строка-разделитель (по умолчанию ',')"}],description:"Метод объекта Array, возвращает строку, состоящую из элементов массива, разделённых (separator).",example:`const path = ['usr', 'local', 'bin'];
const fullPath = path.join('/');
console.log(fullPath); // 'usr/local/bin'`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join",errors:"TypeError — если this не является массивом."},{name:"reduce()",syntax:"arr.reduce(callbackFn[, initialValue])",parameters:[{name:"callbackFn",description:`Функция, вызываемая для каждого элемента массива, может принимать до 4 аргументов:
• accumulator (аккумулятор) — значение, накопленное на предыдущем шаге
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"initialValue",description:"Начальное значение аккумулятора (по умолчанию первый элемент исходного массива)"}],description:"Метод объекта Array, применяет callbackFn к accumulator и каждому элементу массива (слева направо), сводя массив к одному значению.",example:`const cart = [
  { price: 10, quantity: 2 },
  { price: 25, quantity: 1 },
  { price: 5, quantity: 3 }
];
const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
console.log(total); // 60`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce",errors:"TypeError — если this не является массивом или fn не является функцией, или массив пуст и не указано начальное значение."},{name:"reduceRight()",syntax:"arr.reduceRight(callbackFn[, initialValue])",parameters:[{name:"callbackFn",description:`Функция, вызываемая для каждого элемента массива, может принимать до 4 аргументов:
• accumulator (аккумулятор) — значение, накопленное на предыдущем шаге
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"initialValue",description:"Начальное значение аккумулятора"}],description:"Метод объекта Array, применяет callbackFn к accumulator и каждому элементу массива (справа налево), сводя массив к одному значению.",example:`const nums = [2, 3, 4];
const rightToLeftSum = nums.reduceRight((sum, num) => sum + num);
console.log(rightToLeftSum); // 9`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduceright",errors:"TypeError — если this не является массивом или fn не является функцией, или если массив пуст и не указано начальное значение."},{name:"fill()",syntax:"arr.fill(value[, start[, end]])",parameters:[{name:"value",description:"Значение для заполнения"},{name:"start",description:"Индекс начала заполнения"},{name:"end",description:"Индекс конца заполнения (не включая)"}],description:`Метод объекта Array, заполняет исходный массив повторяющимися значениями value:
• С тремя аргументами: заполняет элементы от start до end;
• С двумя аргументами: заполняет элементы от start до конца массива;
• С одним аргументом: заполняет все элементы массива целиком.
Возвращает изменённый массив.`,example:`const arr1 = new Array(5);
arr1.fill("x");
console.log(arr1); // ["x", "x", "x", "x", "x"]

const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2);
console.log(arr2); // [1, 2, 0, 0, 0]

const arr3 = [1, 2, 3, 4, 5];
arr3.fill(9, 1, 3);
console.log(arr3); // [1, 9, 9, 4, 5]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.fill",errors:"TypeError — если this не является массивом."},{name:"copyWithin()",syntax:"arr.copyWithin(target[, start[, end]])",parameters:[{name:"target",description:"Индекс, в который копируются элементы"},{name:"start",description:"Индекс начала копирования"},{name:"end",description:"Индекс конца копирования (не включая)"}],description:`Метод объекта Array, копирует последовательность элементов внутри исходного массива в другое место этого же массива:
• С тремя аргументами: копирует элементы от start до end и вставляет на позицию target;
• С двумя аргументами: копирует элементы от start до конца массива и вставляет на позицию target;
• С одним аргументом: копирует элементы от начала массива до конца и вставляет на позицию target.
Возвращает изменённый массив.`,example:`const arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(3);
console.log(arr1); // [1, 2, 3, 1, 2]

const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(0, 3);
console.log(arr2); // [4, 5, 3, 4, 5]

const arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(1, 2, 4);
console.log(arr3); // [1, 3, 4, 4, 5]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.copywithin",errors:"TypeError — если this не является массивом."},{name:"flat()",syntax:"arr.flat([depth])",parameters:[{name:"depth",description:"Глубина выравнивания (по умолчанию 1)"}],description:"Метод объекта Array, возвращает новый массив, в котором все подмассивы исходного массива рекурсивно подняты на depth.",example:`const nested = [1, [2, [3, [4]]]];
const flattened = nested.flat(2);
console.log(flattened); // [1, 2, 3, [4]]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flat",errors:"TypeError — если this не является массивом или depth не является числом."},{name:"flatMap()",syntax:"arr.flatMap(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, преобразующая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)
Должна возвращать массив или значение, которое будет выровнено на глубину 1.`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:"Метод объекта Array, сначала применяет callbackFn к каждому элементу исходного массива, а затем выравнивает результат на глубину 1. Эквивалентен map(callbackFn).flat(1).",example:`const orders = [
  { items: ["apple", "banana"] },
  { items: ["orange"] },
];
const allItems = orders.flatMap(order => order.items);
console.log(allItems); // ["apple", "banana", "orange"]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flatmap",errors:"TypeError — если this не является массивом или callbackFn не является функцией."},{name:"some()",syntax:"arr.some(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:`Метод объекта Array, проверяет, удовлетворяет ли хотя бы один элемент условию, заданному в callbackFn. Возвращает true если удовлетворяет, иначе false.
При вызове на пустом массиве возвращает false.`,example:`const numbers = [1, 2, 3, 5];
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.some",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"every()",syntax:"arr.every(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, проверяющая каждый элемент массива, может принимать до 3 аргументов:
• element (текущий элемент)
• index (индекс элемента)
• array (массив, по которому выполняется итерация)`},{name:"thisArg",description:"Значение, используемое как this при вызове callbackFn"}],description:`Метод объекта Array, проверяет, удовлетворяют ли все элементы условию, заданному в callbackFn. Возвращает true если удовлетворяет, иначе false.
При вызове на пустом массиве возвращает true.`,example:`const ages = [18, 22, 25, 30];
const allAdult = ages.every(age => age >= 18);
console.log(allAdult); // true`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every",errors:"TypeError — если this не является массивом или fn не является функцией."},{name:"with()",syntax:"arr.with(index, value)",parameters:[{name:"index",description:"Индекс изменяемого элемента"},{name:"value",description:"Новое значение элемента"}],description:"Метод объекта Array, возвращает новый массив на основе исходного массива с изменённым элементом на value по index.",example:`const original = ['a', 'b', 'c'];
const updated = original.with(1, 'B');
console.log(updated); // ['a', 'B', 'c']
console.log(original); // ['a', 'b', 'c']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with",errors:`TypeError — если this не является массивом.
RangeError — если index выходит за границы массива.`},{name:"keys()",syntax:"arr.keys()",description:"Метод объекта Array, возвращает итератор, содержащий ключи (индексы) исходного массива.",example:`const colors = ['red', 'green', 'blue'];
const indices = [...colors.keys()];
console.log(indices); // [0, 1, 2]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.keys",errors:"TypeError — если this не является массивом, коллекцией (map) или множеством (set)."},{name:"values()",syntax:"arr.values()",description:"Метод объекта Array, возвращает итератор, содержащий значения исходного массива.",example:`const items = ['apple', 'banana', 'orange'];
const itemValues = [...items.values()];
console.log(itemValues); // ['apple', 'banana', 'orange']`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.values",errors:"TypeError — если this не является массивом, коллекцией (map) или множеством (set)."},{name:"entries()",syntax:"arr.entries()",description:"Метод объекта Array, возвращает итератор, содержащий пары ([ключ, значение]) для каждого элемента исходного массива.",example:`const fruits = ['apple', 'banana', 'orange'];
const fruitEntries = [...fruits.entries()];
console.log(fruitEntries); // [[0, 'apple'], [1, 'banana'], [2, 'orange']]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.entries",errors:"TypeError — если this не является массивом, коллекцией (map), или множеством (set)."},{name:"Array.isArray()",syntax:"Array.isArray(value)",parameters:[{name:"value",description:"Значение для проверки"}],description:"Статический метод объекта Array, определяет, является ли value массивом. Возвращает true если является, иначе false.",example:`const arr = [1, 2, 3];
const isArr = Array.isArray(arr);
console.log(isArr); // true
console.log(Array.isArray({})); // false`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.isarray"},{name:"Array.from()",syntax:"Array.from(arrayLike[, mapFn[, thisArg]])",parameters:[{name:"arrayLike",description:"Итерируемый объект или псевдомассив"},{name:"mapFn",description:"Функция преобразования для каждого элемента"},{name:"thisArg",description:"Значение this для mapFn"}],description:"Статический метод объекта Array, создаёт новый массив из arrayLike.",example:`const set = new Set([1, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.from"},{name:"Array.of()",syntax:"Array.of(...items)",parameters:[{name:"...items",description:"Элементы для включения в новый массив"}],description:"Статический метод объекта Array, создаёт новый массив из ...items. Отличается от конструктора Array() тем, что при одном числовом аргументе создаёт массив с этим значением, а не массив указанной длины.",example:`const arr1 = Array.of(7);
console.log(arr1); // [7]
console.log(arr1.length); // 1

const arr2 = Array(7);
console.log(arr2); // [,,,,,,] (пустой массив длины 7)
console.log(arr2.length); // 7

const arr3 = Array.of(1, 2, 3);
console.log(arr3); // [1, 2, 3]`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.of"},{name:"Array.fromAsync()",syntax:"Array.fromAsync(asyncItems[, mapFn[, thisArg]])",parameters:[{name:"asyncItems",description:"Асинхронно итерируемый объект (с Symbol.asyncIterator), синхронно итерируемый объект (с Symbol.iterator) или псевдомассив"},{name:"mapFn",description:"Функция преобразования для каждого элемента (выполняется асинхронно)"},{name:"thisArg",description:"Значение this для mapFn"}],description:"Статический метод объекта Array, создаёт новый массив из asyncItems. Возвращает Promise, который разрешается с новым массивом.",example:`const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};
Array.fromAsync(asyncIterable).then(arr => {
  console.log(arr); // [1, 2, 3]
});

Array.fromAsync([1, 2, 3], async x => x * 2).then(arr => {
  console.log(arr); // [2, 4, 6]
});`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.fromasync",errors:"TypeError — если asyncItems не является итерируемым или mapFn передан, но не является функцией."}]},l2={[xt.REFLECT]:[{name:"Reflect.ownKeys()",syntax:"Reflect.ownKeys(obj)",parameters:[{name:"obj",description:"Объект, все собственные ключи которого нужно получить"}],description:"Статический метод объекта Reflect, возвращает массив всех собственных ключей obj, как перечисляемых, так и неперечисляемых.",example:`const sym = Symbol('id');
const obj = { a: 1, b: 2, [sym]: 3 };
const keys = Reflect.ownKeys(obj);
console.log(keys); // ['a', 'b', Symbol(id)]`,specification:"https://tc39.es/ecma262/#sec-reflect.ownkeys",errors:"TypeError — если obj не является объектом."},{name:"Reflect.get()",syntax:"Reflect.get(target, propertyKey, receiver?)",parameters:[{name:"target",description:"Целевой объект, у которого нужно получить значение свойства"},{name:"propertyKey",description:"Имя свойства"},{name:"receiver",description:"Значение this для геттера"}],description:"Статический метод объекта Reflect, возвращает значение свойства propertyKey из target. Аналог оператора доступа к свойству (target[propertyKey]).",example:`const obj = { a: 1, b: 2 };
const value = Reflect.get(obj, "a");
console.log(value); // 1`,specification:"https://tc39.es/ecma262/#sec-reflect.get",errors:"TypeError — если target не является объектом."},{name:"Reflect.set()",syntax:"Reflect.set(target, propertyKey, value, receiver?)",parameters:[{name:"target",description:"Целевой объект, у которого нужно установить значение свойства"},{name:"propertyKey",description:"Имя свойства"},{name:"value",description:"Новое значение свойства"},{name:"receiver",description:"Значение this для сеттера"}],description:"Статический метод объекта Reflect, устанавливает value свойства propertyKey в target. Аналог оператора присваивания (target[propertyKey] = value). Возвращает true, если установка прошла успешно, иначе false.",example:`const obj = { a: 1 };
Reflect.set(obj, "a", 42);
console.log(obj.a); // 42`,specification:"https://tc39.es/ecma262/#sec-reflect.set",errors:"TypeError — если target не является объектом."},{name:"Reflect.has()",syntax:"Reflect.has(target, propertyKey)",parameters:[{name:"target",description:"Целевой объект, в котором проверяется наличие свойства"},{name:"propertyKey",description:"Имя свойства"}],description:"Статический метод объекта Reflect, проверяет наличие свойства propertyKey в target. Аналог оператора in (propertyKey in target). Возвращает true, если свойство propertyKey существует, иначе false.",example:`const obj = { a: 1 };
console.log(Reflect.has(obj, "a")); // true
console.log(Reflect.has(obj, "b")); // false`,specification:"https://tc39.es/ecma262/#sec-reflect.has",errors:"TypeError — если target не является объектом."},{name:"Reflect.deleteProperty()",syntax:"Reflect.deleteProperty(target, propertyKey)",parameters:[{name:"target",description:"Целевой объект, у которого нужно удалить свойство"},{name:"propertyKey",description:"Имя свойства"}],description:"Статический метод объекта Reflect, удаляет свойство propertyKey из target. Аналог оператора delete (delete target[propertyKey]). Возвращает true, если удаление прошло успешно, иначе false.",example:`const obj = { a: 1, b: 2 };
Reflect.deleteProperty(obj, "a");
console.log(obj); // { b: 2 }`,specification:"https://tc39.es/ecma262/#sec-reflect.deleteproperty",errors:"TypeError — если target не является объектом."},{name:"Reflect.construct()",syntax:"Reflect.construct(target, argumentsList, newTarget?)",parameters:[{name:"target",description:"Функция-конструктор, которую нужно вызвать"},{name:"argumentsList",description:"Массив аргументов для конструктора"},{name:"newTarget",description:"Функция, которая будет использоваться как new.target"}],description:"Статический метод объекта Reflect, вызывает target с argumentsList. Аналог оператора new (new (target(argumentsList)). Возвращает экземпляр созданного объекта.",example:`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
const rect = Reflect.construct(Rectangle, [10, 20]);
console.log(rect.width); // 10`,specification:"https://tc39.es/ecma262/#sec-reflect.construct",errors:"TypeError — если target не является конструктором или не функцией."},{name:"Reflect.apply()",syntax:"Reflect.apply(target, thisArgument, argumentsList)",parameters:[{name:"target",description:"Функция, которую нужно вызвать"},{name:"thisArgument",description:"Значение this для вызова функции"},{name:"argumentsList",description:"Массив аргументов для функции"}],description:"Статический метод объекта Reflect, вызывает target с thisArgument и argumentsList. Аналог Function.prototype.apply() (Function.prototype.apply.call(target, thisArgument, argumentsList)). Возвращает результат вызова функции.",example:`function sum(a, b) {
  return a + b;
}
const result = Reflect.apply(sum, null, [5, 3]);
console.log(result); // 8`,specification:"https://tc39.es/ecma262/#sec-reflect.apply",errors:"TypeError — если target не является функцией."},{name:"Reflect.defineProperty()",syntax:"Reflect.defineProperty(target, propertyKey, descriptor)",parameters:[{name:"target",description:"Целевой объект, на котором нужно определить свойство"},{name:"propertyKey",description:"Имя свойства"},{name:"descriptor",description:"Дескриптор свойства"}],description:"Статический метод объекта Reflect, определяет новое или изменяет существующее свойство propertyKey в target с descriptor. Аналог Object.defineProperty() (Object.defineProperty(target, propertyKey, descriptor)). Возвращает true, если свойство propertyKey было определено успешно, иначе false.",example:`const obj = {};
Reflect.defineProperty(obj, "a", {
  value: 42,
  writable: false
});
console.log(obj.a); // 42`,specification:"https://tc39.es/ecma262/#sec-reflect.defineproperty",errors:"TypeError — если target не является объектом или descriptor не является объектом."},{name:"Reflect.getOwnPropertyDescriptor()",syntax:"Reflect.getOwnPropertyDescriptor(target, propertyKey)",parameters:[{name:"target",description:"Целевой объект, для которого нужно получить дескриптор свойства"},{name:"propertyKey",description:"Имя свойства"}],description:"Статический метод объекта Reflect, возвращает дескриптор собственного свойства propertyKey из target. Аналог Object.getOwnPropertyDescriptor() (Object.getOwnPropertyDescriptor(target, propertyKey)). Возвращает дескриптор свойства propertyKey или undefined, если свойство propertyKey не существует.",example:`const obj = { a: 42 };
const descriptor = Reflect.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor.value); // 42`,specification:"https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor",errors:"TypeError — если target не является объектом."},{name:"Reflect.getPrototypeOf()",syntax:"Reflect.getPrototypeOf(target)",parameters:[{name:"target",description:"Целевой объект, прототип которого нужно получить"}],description:"Статический метод объекта Reflect, возвращает прототип target. Аналог Object.getPrototypeOf() (Object.getPrototypeOf(target)). Возвращает прототип target или null.",example:`const parent = { a: 1 };
const child = Object.create(parent);
const proto = Reflect.getPrototypeOf(child);
console.log(proto === parent); // true`,specification:"https://tc39.es/ecma262/#sec-reflect.getprototypeof",errors:"TypeError — если target не является объектом."},{name:"Reflect.setPrototypeOf()",syntax:"Reflect.setPrototypeOf(target, prototype)",parameters:[{name:"target",description:"Целевой объект, прототип которого нужно установить"},{name:"prototype",description:"Новый прототип (должен быть объектом или null)"}],description:"Статический метод объекта Reflect, устанавливает prototype для target. Аналог Object.setPrototypeOf()  (Object.setPrototypeOf(target, prototype)). Возвращает true, если prototype был успешно установлен, иначе false.",example:`const obj = {};
const proto = { a: 1 };
Reflect.setPrototypeOf(obj, proto);
console.log(obj.a); // 1`,specification:"https://tc39.es/ecma262/#sec-reflect.setprototypeof",errors:"TypeError — если target не является объектом или prototype не является объектом или null."},{name:"Reflect.isExtensible()",syntax:"Reflect.isExtensible(target)",parameters:[{name:"target",description:"Целевой объект, расширяемость которого нужно проверить"}],description:"Статический метод объекта Reflect, проверяет, можно ли добавлять новые свойства в target. Аналог Object.isExtensible() (Object.isExtensible(target)). Возвращает true, если target расширяемый, иначе false.",example:`const obj = {};
console.log(Reflect.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Reflect.isExtensible(obj)); // false`,specification:"https://tc39.es/ecma262/#sec-reflect.isextensible",errors:"TypeError — если target не является объектом."},{name:"Reflect.preventExtensions()",syntax:"Reflect.preventExtensions(target)",parameters:[{name:"target",description:"Целевой объект, который нужно сделать нерасширяемым"}],description:"Статический метод объекта Reflect, запрещает добавление новых свойств в target. Аналог Object.preventExtensions() (Object.preventExtensions(target)). Возвращает true, если операция прошла успешно, иначе false.",example:`const obj = { a: 1 };
Reflect.preventExtensions(obj);
obj.b = 2; // В строгом режиме вызовет ошибку
console.log(obj.b); // undefined`,specification:"https://tc39.es/ecma262/#sec-reflect.preventextensions",errors:"TypeError — если target не является объектом."}]},r2={[xt.PROMISE]:[{name:"then()",syntax:"promise.then(onFulfilled[, onRejected])",parameters:[{name:"onFulfilled",description:"Функция, вызываемая при успешном завершении промиса"},{name:"onRejected",description:"Функция, вызываемая при отклонении промиса"}],description:"Метод объекта Promise, добавляет обработчики onFulfilled и/или onRejected. Возвращает новый промис.",example:`const promise = new Promise((resolve) => resolve(42));

promise.then((value) => {
 console.log(value); // 42
 return value * 2;
}).then((result) => {
 console.log(result); // 84
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.then"},{name:"catch()",syntax:"promise.catch(onRejected)",parameters:[{name:"onRejected",description:"Функция, вызываемая при отклонении промиса"}],description:"Метод объекта Promise, добавляет onRejected. Является синтаксическим сахаром для promise.then(null, onRejected). Возвращает новый промис.",example:`const promise = new Promise((res, rej) => rej(new Error('Failed')));

promise.catch((error) => {
 console.log(error.message); // 'Failed'
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch"},{name:"finally()",syntax:"promise.finally(onFinally)",parameters:[{name:"onFinally",description:"Функция, вызываемая при завершении промиса (без аргументов)"}],description:"Метод объекта Promise, добавляет onFinally независимо от того, завершился он успешно или с ошибкой. Возвращает новый промис.",example:`const promise = new Promise((resolve) => resolve('Success'));

promise.finally(() => {
 console.log('Cleanup'); // 'Cleanup'
}).then((value) => {
 console.log(value); // 'Success'
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.finally"},{name:"Promise.all()",syntax:"Promise.all(iterable)",parameters:[{name:"iterable",description:"Итерируемый объект, содержащий промисы"}],description:"Статический метод объекта Promise, принимает iterable и возвращает новый промис. Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов. Порядок элементов массива в точности соответствует порядку исходных промисов. Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.",example:`const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((values) => {
 console.log(values); // [1, 2, 3]
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all",errors:`TypeError — если iterable не является итерируемым объектом.
Promise rejection — если любой из переданных промисов в iterable завершается с ошибкой.`},{name:"Promise.allSettled()",syntax:"Promise.allSettled(iterable)",parameters:[{name:"iterable",description:"Итерируемый объект, содержащий промисы"}],description:"Статический метод объекта Promise, принимает iterable и возвращает новый промис. Метод всегда ждёт завершения всех промисов. В массиве результатов будет объект {status: 'fulfilled', value: результат} для успешных завершений, {status: 'rejected', reason: ошибка} для ошибок.",example:`const p1 = Promise.resolve(1);
const p2 = Promise.reject('error');

Promise.allSettled([p1, p2]).then((results) => {
 console.log(results);
});
// [{status:'fulfilled',value:1},{status:'rejected',reason:'error'}]`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled",errors:"TypeError — если iterable не является итерируемым объектом."},{name:"Promise.race()",syntax:"Promise.race(iterable)",parameters:[{name:"iterable",description:"Итерируемый объект, содержащий промисы"}],description:"Статический метод объекта Promise, принимает iterable и возвращает новый промис. Метод ждёт только первый выполненный промис, из которого берёт результат (или ошибку). После этого остальные промисы игнорируются.",example:`const p1 = new Promise(res => setTimeout(() => res('First'), 100));
const p2 = new Promise(res => setTimeout(() => res('Second'), 50));

Promise.race([p1, p2]).then((result) => {
 console.log(result); // 'Second'
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.race",errors:"TypeError — если iterable не является итерируемым объектом."},{name:"Promise.any()",syntax:"Promise.any(iterable)",parameters:[{name:"iterable",description:"Итерируемый объект, содержащий промисы"}],description:"Статический метод объекта Promise, принимает iterable и возвращает новый промис. Метод ждёт только первый успешно выполненный промис, из которого берёт результат. Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.",example:`const p1 = new Promise((res, rej) => setTimeout(() => rej('Er'), 90));
const p2 = new Promise(res => setTimeout(() => res('Success'), 50));

Promise.any([p1, p2]).then((result) => {
 console.log(result); // 'Success'
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any",errors:`TypeError — если iterable не является итерируемым объектом.
AggregateError — если все промисы завершаются с ошибкой (содержит свойство errors с массивом всех ошибок).`},{name:"Promise.resolve()",syntax:"Promise.resolve(value)",parameters:[{name:"value",description:"Значение, которое будет обёрнуто в Promise"}],description:"Статический метод объекта Promise, возвращает промис, завершённый успешно с value. Если value само является промисом, метод вернёт этот промис. Если value — thenable (объект с методом then), будет создан новый промис, который следует за этим значением (thenable).",example:`// Обычное значение
const promise1 = Promise.resolve(42);
promise1.then(value => console.log(value)); // 42

// Уже существующий промис
const original = new Promise(resolve => resolve("OK"));
const promise2 = Promise.resolve(original);
console.log(promise2 === original); // true (возвращает тот же промис)

// Thenable объект
const thenable = {
  then(onFulfilled) {
    onFulfilled("из thenable");
  }
};
const promise3 = Promise.resolve(thenable);
promise3.then(value => console.log(value)); // "из thenable"

// Цепочка вызовов
Promise.resolve(10)
  .then(x => x * 2)
  .then(x => console.log(x)); // 20`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.resolve"},{name:"Promise.reject()",syntax:"Promise.reject(reason)",parameters:[{name:"reason",description:"Причина ошибки, с которой будет отклонён промис"}],description:"Статический метод объекта Promise, возвращает промис, завершённый с ошибкой с reason. В отличие от Promise.resolve(), метод не преобразует thenable объекты и не разворачивает промисы — reason всегда используется как причина отклонения, включая случаи, когда reason сам является промисом или thenable объектом.",example:`// Обычная ошибка
const promise1 = Promise.reject("Error");
promise1.catch(error => console.log(error)); // "Error"

// Объект Error
const promise2 = Promise.reject(new Error("Critical"));
promise2.catch(error => console.log(error.message)); // "Critical"

// Объект с данными
const promise3 = Promise.reject({ code: 500, message: "Error" });
promise3.catch(error => console.log(error.code)); // 500

// Thenable с ошибкой (передается как есть)
const thenable = {
  then(onFulfilled, onRejected) {
    onRejected("ошибка из thenable");
  }
};
const promise4 = Promise.reject(thenable);
promise4.catch(error => {
  error.then(null, e => console.log(e)); // "ошибка из thenable"
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject"}]},s2={[xt.MATH]:[{name:"Math.abs()",syntax:"Math.abs(x)",parameters:[{name:"x",description:"Число, для которого нужно найти абсолютное значение"}],description:"Статический метод объекта Math, возвращает абсолютное значение x (модуль числа).",example:`console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
console.log(Math.abs(0)); // 0`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.abs"},{name:"Math.round()",syntax:"Math.round(x)",parameters:[{name:"x",description:"Число, которое нужно округлить до ближайшего целого"}],description:"Статический метод объекта Math, возвращает округлённое значение x до ближайшего целого. Округляет по правилам математического округления (.5 округляется вверх).",example:`console.log(Math.round(4.2)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.5)); // 5 (округляется вверх)
console.log(Math.round(-4.5)); // -4 (округляется вверх)
console.log(Math.round(-4.2)); // -4
console.log(Math.round(-4.7)); // -5`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.round"},{name:"Math.ceil()",syntax:"Math.ceil(x)",parameters:[{name:"x",description:"Число, которое нужно округлить вверх"}],description:"Статический метод объекта Math, возвращает значение x, округлённое вверх до ближайшего целого.",example:`console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.0)); // 4
console.log(Math.ceil(-4.2)); // -4
console.log(Math.ceil(-4.7)); // -4`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.ceil"},{name:"Math.floor()",syntax:"Math.floor(x)",parameters:[{name:"x",description:"Число, которое нужно округлить вниз"}],description:"Статический метод объекта Math, возвращает значение x, округлённое вниз до ближайшего целого.",example:`console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.0)); // 4
console.log(Math.floor(-4.2)); // -5
console.log(Math.floor(-4.7)); // -5`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.floor"},{name:"Math.trunc()",syntax:"Math.trunc(x)",parameters:[{name:"x",description:"Число, у которого нужно удалить дробную часть"}],description:"Статический метод объекта Math, возвращает целую часть x, отбрасывая дробную часть.",example:`console.log(Math.trunc(4.2)); // 4
console.log(Math.trunc(-4.2)); // -4
console.log(Math.trunc(0.123)); // 0`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.trunc"},{name:"Math.pow()",syntax:"Math.pow(base, exponent)",parameters:[{name:"base",description:"Основание степени"},{name:"exponent",description:"Показатель степени"}],description:"Статический метод объекта Math, возводит base в exponent. Аналог оператора **.",example:`console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8 (аналог)
console.log(Math.pow(2, -2)); // 0.25`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.pow"},{name:"Math.sqrt()",syntax:"Math.sqrt(x)",parameters:[{name:"x",description:"Число, из которого нужно извлечь квадратный корень"}],description:"Статический метод объекта Math, возвращает квадратный корень x. Если x отрицательный, возвращает NaN.",example:`console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(-16)); // NaN`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt"},{name:"Math.cbrt()",syntax:"Math.cbrt(x)",parameters:[{name:"x",description:"Число, из которого нужно извлечь кубический корень"}],description:"Статический метод объекта Math, возвращает кубический корень x.",example:`console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(-27)); // -3
console.log(Math.cbrt(0)); // 0`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cbrt"},{name:"Math.hypot()",syntax:"Math.hypot([x1[, x2[, ...]]])",parameters:[{name:"x1, x2, ...",description:"Произвольное количество аргументов"}],description:"Статический метод объекта Math, возвращает квадратный корень из суммы квадратов x1, x2, ... (длину гипотенузы).",example:`console.log(Math.hypot(3, 4)); // 5 (√(3² + 4²))
console.log(Math.hypot(5, 12)); // 13
console.log(Math.hypot(3, 4, 5)); // 7.0710678118654755
console.log(Math.hypot(0, 0)); // 0`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.hypot"},{name:"Math.exp()",syntax:"Math.exp(x)",parameters:[{name:"x",description:"Показатель степени для числа e"}],description:"Статический метод объекта Math, возвращает e (число Эйлера, ≈2.718) в x.",example:`console.log(Math.exp(0)); // 1
console.log(Math.exp(1)); // 2.718281828459045
console.log(Math.exp(2)); // 7.38905609893065`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.exp"},{name:"Math.expm1()",syntax:"Math.expm1(x)",parameters:[{name:"x",description:"Показатель степени для числа e"}],description:"Статический метод объекта Math, возвращает e (число Эйлера, ≈2.718) в x минус 1 (e^x - 1). Обеспечивает высокую точность при очень малых значениях x. Обычное вычисление Math.exp(x) - 1 может давать погрешность из-за особенностей представления чисел с плавающей точкой.",example:`console.log(Math.expm1(0)); // 0
console.log(Math.expm1(1)); // 1.718281828459045
console.log(Math.expm1(0.000001)); // 0.0000010000005000001665`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.expm1"},{name:"Math.log()",syntax:"Math.log(x)",parameters:[{name:"x",description:"Число, для которого нужно вычислить натуральный логарифм"}],description:"Статический метод объекта Math, возвращает натуральный логарифм x по основанию e. Если (x) отрицательный, возвращает NaN.",example:`console.log(Math.log(1)); // 0
console.log(Math.log(Math.E)); // 1
console.log(Math.log(10)); // 2.302585092994046
console.log(Math.log(0)); // -Infinity
console.log(Math.log(-1)); // NaN`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log"},{name:"Math.log10()",syntax:"Math.log10(x)",parameters:[{name:"x",description:"Число, для которого нужно вычислить десятичный логарифм"}],description:"Статический метод объекта Math, возвращает логарифм x по основанию 10.",example:`console.log(Math.log10(1)); // 0
console.log(Math.log10(10)); // 1
console.log(Math.log10(100)); // 2`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log10"},{name:"Math.log2()",syntax:"Math.log2(x)",parameters:[{name:"x",description:"Число, для которого нужно вычислить двоичный логарифм"}],description:"Статический метод объекта Math, возвращает логарифм x по основанию 2.",example:`console.log(Math.log2(1)); // 0
console.log(Math.log2(2)); // 1
console.log(Math.log2(4)); // 2
console.log(Math.log2(8)); // 3`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log2"},{name:"Math.log1p()",syntax:"Math.log1p(x)",parameters:[{name:"x",description:"Число, для которого нужно вычислить Math.log(1 + x)"}],description:"Статический метод объекта Math, возвращает натуральный логарифм от 1 + x. Обеспечивает высокую точность для очень малых значений x, где обычное вычисление Math.log(1 + x) может давать существенную погрешность из-за потери значащих разрядов при округлении.",example:`console.log(Math.log1p(0)); // 0
console.log(Math.log1p(1)); // 0.6931471805599453
console.log(Math.log1p(0.0001)); // 0.00009999500033330834`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log1p"},{name:"Math.sin()",syntax:"Math.sin(x)",parameters:[{name:"x",description:"Угол в радианах"}],description:"Статический метод объекта Math, возвращает синус x.",example:`console.log(Math.sin(0)); // 0
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.sin(Math.PI)); // 1.2246467991473532e-16 (≈0)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sin"},{name:"Math.cos()",syntax:"Math.cos(x)",parameters:[{name:"x",description:"Угол в радианах"}],description:"Статический метод объекта Math, возвращает косинус угла x.",example:`console.log(Math.cos(0)); // 1
console.log(Math.cos(Math.PI / 2)); // 6.123233995736766e-17 (≈0)
console.log(Math.cos(Math.PI)); // -1`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cos"},{name:"Math.tan()",syntax:"Math.tan(x)",parameters:[{name:"x",description:"Угол в радианах"}],description:"Статический метод объекта Math, возвращает тангенс угла x.",example:`console.log(Math.tan(0)); // 0
console.log(Math.tan(Math.PI / 4)); // 0.9999999999999999 (≈1)
console.log(Math.tan(Math.PI / 2)); // 1.633123935319537e+16`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.tan"},{name:"Math.asin()",syntax:"Math.asin(x)",parameters:[{name:"x",description:"Число от -1 до 1"}],description:"Статический метод объекта Math, возвращает арксинус x в радианах.",example:`console.log(Math.asin(0)); // 0
console.log(Math.asin(1)); // 1.5707963267948966 (π/2)
console.log(Math.asin(-1)); // -1.5707963267948966 (-π/2)
console.log(Math.asin(0.5)); // 0.5235987755982989 (π/6)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.asin"},{name:"Math.acos()",syntax:"Math.acos(x)",parameters:[{name:"x",description:"Число от -1 до 1"}],description:"Статический метод объекта Math, возвращает арккосинус x в радианах.",example:`console.log(Math.acos(0)); // 1.5707963267948966 (π/2)
console.log(Math.acos(1)); // 0
console.log(Math.acos(-1)); // 3.141592653589793 (π)
console.log(Math.acos(0.5)); // 1.0471975511965979 (π/3)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.acos"},{name:"Math.atan()",syntax:"Math.atan(x)",parameters:[{name:"x",description:"Число, для которого нужно вычислить арктангенс"}],description:"Статический метод объекта Math, возвращает арктангенс x (угол в радианах от -π/2 до π/2).",example:`console.log(Math.atan(0)); // 0
console.log(Math.atan(1)); // 0.7853981633974483 (π/4)
console.log(Math.atan(Infinity)); // 1.5707963267948966 (π/2)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan"},{name:"Math.atan2()",syntax:"Math.atan2(y, x)",parameters:[{name:"y",description:"Координата по оси Y"},{name:"x",description:"Координата по оси X"}],description:"Статический метод объекта Math, возвращает угол (в радианах) между положительной осью X и точкой (x, y). Учитывает знаки x и y для определения квадранта.",example:`console.log(Math.atan2(0, 1)); // 0
console.log(Math.atan2(1, 0)); // 1.5707963267948966 (π/2)
console.log(Math.atan2(0, -1)); // 3.141592653589793 (π)
console.log(Math.atan2(-1, -1)); // -2.356194490192345 (-3π/4)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan2"},{name:"Math.sinh()",syntax:"Math.sinh(x)",parameters:[{name:"x",description:"Число, для вычисления гиперболического синуса"}],description:"Статический метод объекта Math, возвращает гиперболический синус x.",example:`console.log(Math.sinh(0)); // 0
console.log(Math.sinh(1)); // 1.1752011936438014
console.log(Math.sinh(-1)); // -1.1752011936438014`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sinh"},{name:"Math.cosh()",syntax:"Math.cosh(x)",parameters:[{name:"x",description:"Число, для вычисления гиперболического косинуса"}],description:"Статический метод объекта Math, возвращает гиперболический косинус x.",example:`console.log(Math.cosh(0)); // 1
console.log(Math.cosh(1)); // 1.5430806348152437
console.log(Math.cosh(-1)); // 1.5430806348152437`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cosh"},{name:"Math.tanh()",syntax:"Math.tanh(x)",parameters:[{name:"x",description:"Число, для вычисления гиперболического тангенса"}],description:"Статический метод объекта Math, возвращает гиперболический тангенс x.",example:`console.log(Math.tanh(0)); // 0
console.log(Math.tanh(1)); // 0.7615941559557649
console.log(Math.tanh(Infinity)); // 1
console.log(Math.tanh(-Infinity)); // -1`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.tanh"},{name:"Math.asinh()",syntax:"Math.asinh(x)",parameters:[{name:"x",description:"Число, для вычисления обратного гиперболического синуса"}],description:"Статический метод объекта Math, возвращает обратный гиперболический синус x.",example:`console.log(Math.asinh(0)); // 0
console.log(Math.asinh(1)); // 0.881373587019543
console.log(Math.asinh(-1)); // -0.881373587019543`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.asinh"},{name:"Math.acosh()",syntax:"Math.acosh(x)",parameters:[{name:"x",description:"Число (>= 1), для вычисления обратного гиперболического косинуса"}],description:"Статический метод объекта Math, возвращает обратный гиперболический косинус x.",example:`console.log(Math.acosh(1)); // 0
console.log(Math.acosh(2)); // 1.3169578969248166
console.log(Math.acosh(10)); // 2.993222846126381`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.acosh"},{name:"Math.atanh()",syntax:"Math.atanh(x)",parameters:[{name:"x",description:"Число (от -1 до 1), для вычисления обратного гиперболического тангенса"}],description:"Статический метод объекта Math, возвращает обратный гиперболический тангенс x.",example:`console.log(Math.atanh(0)); // 0
console.log(Math.atanh(0.5)); // 0.5493061443340548
console.log(Math.atanh(-0.5)); // -0.5493061443340548`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atanh"},{name:"Math.sign()",syntax:"Math.sign(x)",parameters:[{name:"x",description:"Число, для которого нужно определить знак"}],description:"Статический метод объекта Math, возвращает знак x: -1 (отрицательное), 0 (ноль), 1 (положительное). Для -0 возвращает -0, для NaN — NaN.",example:`console.log(Math.sign(10)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(NaN)); // NaN`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sign"},{name:"Math.random()",syntax:"Math.random()",description:"Статический метод объекта Math, возвращает псевдослучайное число с плавающей точкой в диапазоне от 0 до 1 (не включая).",example:`// Случайное число от 0 до 1
console.log(Math.random()); // Например 0.123456789`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.random"},{name:"Math.max()",syntax:"Math.max([value1[, value2[, ...]]])",parameters:[{name:"value1, value2, ...",description:"Произвольное количество чисел"}],description:"Статический метод объекта Math, возвращает наибольшее значение из value1, value2, ... . Если ничего не передано, то возвращает -Infinity.",example:`console.log(Math.max(10, 5, 20)); // 20
console.log(Math.max(-10, -5, -20)); // -5
console.log(Math.max()); // -Infinity`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.max"},{name:"Math.min()",syntax:"Math.min([value1[, value2[, ...]]])",parameters:[{name:"value1, value2, ...",description:"Произвольное количество чисел"}],description:"Статический метод объекта Math, возвращает наименьшее значение из value1, value2, ... . Если ничего не переднно, то возвращает Infinity.",example:`console.log(Math.min(10, 5, 20)); // 5
console.log(Math.min(-10, -5, -20)); // -20
console.log(Math.min()); // Infinity`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.min"},{name:"Math.E",syntax:"Math.E",description:"Статическое свойство объекта Math, представляет число Эйлера (основание натуральных логарифмов), приблизительно равное 2.718281828459045.",example:"console.log(Math.E); // 2.718281828459045",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.e"},{name:"Math.PI",syntax:"Math.PI",description:"Статическое свойство объекта Math, представляет число π (отношение длины окружности к диаметру), приблизительно равное 3.141592653589793.",example:"console.log(Math.PI); // 3.141592653589793",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.pi"},{name:"Math.LN10",syntax:"Math.LN10",description:"Статическое свойство объекта Math, представляет натуральный логарифм 10, приблизительно равный 2.302585092994046.",example:"console.log(Math.LN10); // 2.302585092994046",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.ln10"},{name:"Math.LN2",syntax:"Math.LN2",description:"Статическое свойство объекта Math, представляет натуральный логарифм 2, приблизительно равный 0.6931471805599453.",example:"console.log(Math.LN2); // 0.6931471805599453",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.ln2"},{name:"Math.LOG10E",syntax:"Math.LOG10E",description:"Статическое свойство объекта Math, представляет логарифм e по основанию 10, приблизительно равный 0.4342944819032518.",example:"console.log(Math.LOG10E); // 0.4342944819032518",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log10e"},{name:"Math.LOG2E",syntax:"Math.LOG2E",description:"Статическое свойство объекта Math, представляет логарифм e по основанию 2, приблизительно равный 1.4426950408889634.",example:"console.log(Math.LOG2E); // 1.4426950408889634",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log2e"},{name:"Math.SQRT1_2",syntax:"Math.SQRT1_2",description:"Статическое свойство объекта Math, представляет квадратный корень из 1/2 (или 1/√2), приблизительно равный 0.7071067811865476.",example:"console.log(Math.SQRT1_2); // 0.7071067811865476",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt1_2"},{name:"Math.SQRT2",syntax:"Math.SQRT2",description:"Статическое свойство объекта Math, представляет квадратный корень из 2, приблизительно равный 1.4142135623730951.",example:"console.log(Math.SQRT2); // 1.4142135623730951",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt2"},{name:"Math.clz32()",syntax:"Math.clz32(x)",parameters:[{name:"x",description:"Число, которое будет приведено к 32-битному целому без знака"}],description:"Статический метод объекта Math, возвращает количество ведущих нулей в 32-битном двоичном представлении x.",example:`console.log(Math.clz32(1)); // 31
console.log(Math.clz32(2)); // 30
console.log(Math.clz32(4)); // 29
console.log(Math.clz32(0)); // 32`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.clz32"},{name:"Math.imul()",syntax:"Math.imul(a, b)",parameters:[{name:"a",description:"Первый множитель"},{name:"b",description:"Второй множитель"}],description:"Статический метод объекта Math, возвращает результат умножения a и b как 32-битных целых со знаком. Результат тоже является 32-битным целым. Если результат превышает 32-битный диапазон (-2^31 до 2^31 - 1), происходит переполнение, и возвращается значение с учётом этого ограничения.",example:`console.log(Math.imul(2, 3)); // 6
console.log(Math.imul(0xffffffff, 5)); // -5`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.imul"},{name:"Math.fround()",syntax:"Math.fround(x)",parameters:[{name:"x",description:"Число, которое будет преобразовано в 32-битное представление с плавающей точкой"}],description:"Статический метод объекта Math, возвращает ближайшее 32-битное представление x с плавающей точкой.",example:`console.log(Math.fround(0.1)); // 0.10000000149011612
console.log(Math.fround(1.0)); // 1
console.log(Math.fround(1.337)); // 1.3370000123977661`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.fround"}]},i2={[xt.INTL]:[{name:"Intl.DateTimeFormat",syntax:"new Intl.DateTimeFormat([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками форматирования:
 • dateStyle: 'full' | 'long' | 'medium' | 'short'
 • timeStyle: 'full' | 'long' | 'medium' | 'short'
 • calendar: 'buddhist' | 'chinese' | 'gregory' | 'hebrew' | 'indian' | 'islamic' | 'iso8601' | 'persian'
 • day: 'numeric' | '2-digit'
 • month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
 • year: 'numeric' | '2-digit'
 • hour: 'numeric' | '2-digit' (12 или 24)
 • minute: 'numeric' | '2-digit'
 • second: 'numeric' | '2-digit'
 • timeZone: название часового пояса ('Europe/Moscow')
 • hour12: true/false (12-часовой формат)
 • weekday: 'long' | 'short' | 'narrow'
 • era: 'long' | 'short' | 'narrow'
 • timeZoneName: 'long' | 'short' | 'shortOffset' | 'longOffset'`}],description:`Конструктор объектов для форматирования дат и времени с учётом locales.
Созданный объект предоставляет следующие методы:
• format(date) — принимает date и возвращает строку с отформатированной датой.
• formatToParts(date) — принимает date и возвращает массив объектов, содержащих отдельные части форматированной даты.
• resolvedOptions() — возвращает объект с разрешёнными настройками (локали, календарь, часовой пояс и тд).`,example:`const date = new Date('2026-03-15T14:30:00');

// Русский формат
const ruFormat = new Intl.DateTimeFormat('ru-RU');
console.log(ruFormat.format(date)); // '15.3.2026'

// Американский формат
const usFormat = new Intl.DateTimeFormat('en-US');
console.log(usFormat.format(date)); // '3/15/2026'

// С настройками
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};
const detailed = new Intl.DateTimeFormat('ru-RU', options);
console.log(detailed.format(date)); // '15 марта 2026 г. в 14:30'

// formatToParts() - разбивка на компоненты
const parts = detailed.formatToParts(date);
console.log(parts);
// [{ type: 'day', value: '15' }, ..., { type: 'year', value: '2026' }, ...]

// resolvedOptions() - получение настроек
const resolved = detailed.resolvedOptions();
console.log(resolved.locale);   // "ru-RU"
console.log(resolved.timeZone); // "Europe/Moscow"`,specification:"https://tc39.es/ecma402/#sec-intl-datetimeformat-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если date невалидный тип значения (не объект Date и не число).`},{name:"Intl.NumberFormat",syntax:"new Intl.NumberFormat([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками форматирования:
 • style: 'decimal' | 'currency' | 'percent' | 'unit'
 • currency: код валюты ('USD', 'EUR', 'RUB')
 • currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name'
 • useGrouping: true/false (разделители тысяч)
 • minimumIntegerDigits: минимальное количество цифр целой части
 • minimumFractionDigits: минимальное количество цифр дробной части
 • maximumFractionDigits: максимальное количество цифр дробной части
 • minimumSignificantDigits: минимальное количество значащих цифр
 • maximumSignificantDigits: максимальное количество значащих цифр
 • notation: 'standard' | 'scientific' | 'engineering' | 'compact'
 • unit: единица измерения ('meter', 'second', 'byte')
 • unitDisplay: 'long' | 'short' | 'narrow'
 • signDisplay: 'auto' | 'never' | 'always' | 'exceptZero' | 'negative'
 • compactDisplay: 'short' | 'long'`}],description:`Конструктор объектов для форматирования чисел с учётом locales.
Созданный объект предоставляет следующие методы:
• format(number) — принимает number и возвращает строку с отформатированным числом.
• formatToParts(number) — принимает number и возвращает массив объектов, содержащих отдельные части форматированного числа
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, стиль, валюту, единицы измерения и тд).`,example:`const number = 1234567.89;

// Русский формат
const ruFormat = new Intl.NumberFormat('ru-RU');
console.log(ruFormat.format(number)); // '1 234 567,89'

console.log(ruFormat.format(1234.5)); // '1 234,50 ₽'

// Проценты
const percent = new Intl.NumberFormat('ru-RU', {
  style: 'percent',
  minimumFractionDigits: 1
});
console.log(percent.format(0.125)); // '12,5%'

// Компактный формат
const compact = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
console.log(compact.format(1234567)); // '1.2M'

// formatToParts() - разбивка на компоненты
const parts = ruFormat.formatToParts(number);
console.log(parts);
// [{ type: 'integer', value: '1 234 567' }, ..., { type: 'fraction', value: '89' }]

// resolvedOptions() - получение настроек
const resolved = ruFormat.resolvedOptions();
console.log(resolved.locale);   // "ru-RU"
console.log(resolved.numberingSystem); // "latn"`,specification:"https://tc39.es/ecma402/#sec-intl-numberformat-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если number невалидный тип значения (не число и не преобразуемый в число).`},{name:"Intl.PluralRules",syntax:"new Intl.PluralRules([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками:
 • type: 'cardinal' (количество) | 'ordinal' (порядок)
 • minimumIntegerDigits: минимальное количество цифр целой части
 • minimumFractionDigits: минимальное количество цифр дробной части
 • maximumFractionDigits: максимальное количество цифр дробной части`}],description:`Конструктор объектов для определения множественной формы числа в соответствии с правилами locales.
Созданный объект предоставляет следующие методы:
• select(number) — принимает number и возвращает строку с категорией множественной формы для этого числа.
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, тип, минимальные/максимальные цифры и тд).`,example:`// Русский язык (3 формы)
const ruRules = new Intl.PluralRules('ru-RU');
console.log(ruRules.select(1)); // 'one'
console.log(ruRules.select(2)); // 'few'
console.log(ruRules.select(5)); // 'many'
console.log(ruRules.select(0)); // 'many'

// Английский язык (2 формы)
const enRules = new Intl.PluralRules('en-US');
console.log(enRules.select(1)); // 'one'
console.log(enRules.select(2)); // 'other'

// Порядковые числительные
const ordinal = new Intl.PluralRules('en-US', {
  type: 'ordinal',
});
console.log(ordinal.select(1)); // 'one'
console.log(ordinal.select(2)); // 'two'
console.log(ordinal.select(3)); // 'few'
console.log(ordinal.select(4)); // 'other'

// resolvedOptions() - получение настроек
const resolved = ruRules.resolvedOptions();
console.log(resolved.locale); // "ru-RU"
console.log(resolved.type);   // "cardinal"`,specification:"https://tc39.es/ecma402/#sec-intl-pluralrules-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если number невалидный тип значения (не число и не преобразуемый в число).`},{name:"Intl.Collator",syntax:"new Intl.Collator([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками сравнения:
 • usage: 'sort' | 'search'
 • sensitivity: 'base' | 'accent' | 'case' | 'variant'
 • ignorePunctuation: true/false
 • numeric: true/false (числовое сравнение)
 • caseFirst: 'upper' | 'lower' | 'false'
 • collation: 'big5han' | 'compat' | 'dict' | 'direct' | 'ducet' | 'emoji' | 'eor' | 'gb2312han' | 'phonebk' | 'phonetic' | 'pinyin' | 'reformed' | 'searchjl' | 'stroke' | 'trad' | 'unihan' | 'zhuyin'`}],description:`Конструктор объектов для сравнения строк с учётом правил locales.
Созданный объект предоставляет следующие методы:
• compare(string1, string2) — принимает две строки и возвращает число:
  - отрицательное, если string1 < string2
  - 0, если string1 === string2
  - положительное, если string1 > string2
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, чувствительность, игнорирование пунктуации и тд).`,example:`const names = ['Анна', 'Борис', 'алексей', 'борис'];

// Сортировка по-русски
const ruCollator = new Intl.Collator('ru-RU');
console.log(names.sort(ruCollator.compare));
// ['алексей', 'Анна', 'борис', 'Борис']

// Сортировка с игнорированием регистра
const caseInsensitive = new Intl.Collator('ru-RU', {
  sensitivity: 'base'
});
console.log(names.sort(caseInsensitive.compare));
// ['алексей', 'Анна', 'борис', 'Борис']

// Числовое сравнение
const numbers = ['10', '2', '1', '20'];
const numericCollator = new Intl.Collator('ru-RU', {
  numeric: true
});
console.log(numbers.sort(numericCollator.compare));
// ['1', '2', '10', '20']

// resolvedOptions() - получение настроек
const resolved = ruCollator.resolvedOptions();
console.log(resolved.locale);     // 'ru'
console.log(resolved.usage);      // 'sort'
console.log(resolved.sensitivity); // 'variant'`,specification:"https://tc39.es/ecma402/#sec-intl-collator-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если string1 или string2 не являются строками (или не преобразуются в строку).`},{name:"Intl.DisplayNames",syntax:"new Intl.DisplayNames(locales[, options])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками:
 • type: 'language' | 'region' | 'script' | 'calendar' | 'currency' | 'dateTimeField' | 'key'
 • languageDisplay: 'dialect' | 'standard' (только для type: 'language')
 • style: 'long' | 'short' | 'narrow' (для некоторых типов)
 • fallback: 'code' | 'none'`}],description:`Конструктор объектов для получения названий языков, регионов, скриптов, валют и других элементов с учётом locales.
Созданный объект предоставляет следующие методы:
• of(code) — принимает code и возвращает локализованное название.
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, тип и тд).`,example:`// Названия языков
const ruLang = new Intl.DisplayNames('ru-RU', {
 type: 'language'
});
console.log(ruLang.of('de')); // 'немецкий'
console.log(ruLang.of('ja')); // 'японский'

// Названия регионов (стран)
const ruRegion = new Intl.DisplayNames('ru-RU', {
 type: 'region'
});
console.log(ruRegion.of('US')); // 'Соединённые Штаты'
console.log(ruRegion.of('DE')); // 'Германия'

// Названия валют
const ruCurrency = new Intl.DisplayNames('ru-RU', {
  type: 'currency'
});
console.log(ruCurrency.of('USD')); // 'доллар США'
console.log(ruCurrency.of('RUB')); // 'российский рубль'

// resolvedOptions() - получение настроек
const resolved = ruLang.resolvedOptions();
console.log(resolved.locale); // "ru-RU"
console.log(resolved.type);   // "language"`,specification:"https://tc39.es/ecma402/#sec-intl-displaynames-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если code невалидный тип значения (не строка) или код не найден.`},{name:"Intl.ListFormat",syntax:"new Intl.ListFormat([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками:
 • type: 'conjunction' | 'disjunction' | 'unit' (без разделителя)
 • style: 'long' | 'short' | 'narrow'`}],description:`Конструктор объектов для форматирования списков с учётом locales.
Созданный объект предоставляет следующие методы:
• format(list) — принимает list и возвращает отформатированную строку списка.
• formatToParts(list) — принимает list и возвращает массив объектов с частями форматированного списка.
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, тип, стиль и тд).`,example:`const items = ['яблоки', 'бананы', 'апельсины'];

// Союз 'и' (по умолчанию)
const ruConjunction = new Intl.ListFormat('ru-RU');
console.log(ruConjunction.format(items));
// 'яблоки, бананы и апельсины'

// Союз 'или'
const ruDisjunction = new Intl.ListFormat('ru-RU', {
  type: 'disjunction'
});
console.log(ruDisjunction.format(items));
// 'яблоки, бананы или апельсины'

// Стиль 'unit' (для отображения единиц измерения)
const ruUnit = new Intl.ListFormat('ru-RU', {
  type: 'unit'
});
console.log(ruUnit.format(['3', 'кг'])); // '3, кг'

// formatToParts() - разбивка на компоненты
const parts = ruConjunction.formatToParts(items);
console.log(parts);
// [{ type: 'element', value: 'яблоки' }, { type: 'literal', value: ', ' }, ...]

// resolvedOptions() - получение настроек
const resolved = ruConjunction.resolvedOptions();
console.log(resolved.locale); // 'ru-RU'
console.log(resolved.type);   // 'conjunction'
console.log(resolved.style);  // 'long'`,specification:"https://tc39.es/ecma402/#sec-intl-listformat-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если list не является массивом или содержит нестроковые элементы.`},{name:"Intl.RelativeTimeFormat",syntax:"new Intl.RelativeTimeFormat([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками:
 • numeric: 'auto' | 'always'
   - 'auto': использовать специальные слова (вчера, завтра)
   - 'always': всегда показывать число (1 день назад)
 • style: 'long' | 'short' | 'narrow'
   - 'long': 'через 2 дня'
   - 'short': 'через 2 дн.'
   - 'narrow': 'через 2 дн'`}],description:`Конструктор объектов для форматирования относительного времени с учётом locales.
Созданный объект предоставляет следующие методы:
• format(value, unit) — принимает value и unit (day, hour, minute, second, month, year и тд), возвращает строку.
• formatToParts(value, unit) — принимает value и unit, возвращает массив объектов с частями отформатированной строки.
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, numeric, style).`,example:`const rtf = new Intl.RelativeTimeFormat('ru-RU', {
 numeric: 'auto'
});

console.log(rtf.format(-1, 'day')); // 'вчера'
console.log(rtf.format(1, 'day')); // 'завтра'
console.log(rtf.format(-3, 'hour')); // '3 часа назад'
console.log(rtf.format(2, 'week')); // 'через 2 недели'
console.log(rtf.format(0, 'second')); // 'сейчас'

// Всегда показывать числа
const alwaysNumeric = new Intl.RelativeTimeFormat('ru-RU', {
 numeric: 'always'
});
console.log(alwaysNumeric.format(-1, 'day')); // '1 день назад'
console.log(alwaysNumeric.format(1, 'day')); // 'через 1 день'

// Разные стили
const longStyle = new Intl.RelativeTimeFormat('ru-RU', {
 numeric: 'auto',
 style: 'long'
});
console.log(longStyle.format(2, 'day')); // 'послезавтра'

const shortStyle = new Intl.RelativeTimeFormat('ru-RU', {
 numeric: 'auto',
 style: 'short'
});
console.log(shortStyle.format(3, 'day')); // 'через 3 дн.'

// formatToParts() - разбивка на компоненты
const parts = rtf.formatToParts(-1, 'day');
console.log(parts);
// [{ type: 'literal', value: 'вчера' }]

// resolvedOptions() - получение настроек
const resolved = rtf.resolvedOptions();
console.log(resolved.numeric); // 'auto'
console.log(resolved.style); // 'long'`,specification:"https://tc39.es/ecma402/#sec-intl-relativetimeformat-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если value не число или unit невалидная единица времени.`},{name:"Intl.Segmenter",syntax:"new Intl.Segmenter([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками:
 • granularity: 'grapheme' | 'word' | 'sentence'
   - 'grapheme': сегментация по графемам (видимым символам)
   - 'word': сегментация по словам
   - 'sentence': сегментация по предложениям`}],description:`Конструктор объектов для сегментации текста на графемы, слова или предложения с учётом правил locales.
Созданный объект предоставляет следующие методы:
• segment(string) — принимает string и возвращает итерируемый объект Segments с сегментами.
  Каждый сегмент содержит свойства: segment (текст сегмента), index (индекс начала), input (исходная строка).
• resolvedOptions() — возвращает объект с разрешёнными настройками (локаль, granularity).`,example:`// Сегментация по графемам (видимым символам)
const graphemeSegmenter = new Intl.Segmenter('ru-RU', {
 granularity: 'grapheme'
});
const text = 'Привет!';
const graphemeSegments = graphemeSegmenter.segment(text);
for (const segment of graphemeSegments) {
  console.log(segment.segment);
}
// 'П', 'р', 'и', 'в', 'е', 'т', '!'

// Сегментация по словам (с определением типа)
const wordSegmenter = new Intl.Segmenter('ru-RU', {
 granularity: 'word'
});
const sentence = 'Hello world!';
const wordSegments = wordSegmenter.segment(sentence);
for (const segment of wordSegments) {
  console.log(\`\${segment.segment} (\${segment.isWordLike ? 'слово' : 'не слово'})\`);
}
// 'Hello (слово)', ' (не слово)', 'world (слово)', '! (не слово)'

// Сегментация по предложениям
const sentenceSegmenter = new Intl.Segmenter('ru-RU', {
 granularity: 'sentence'
});
const paragraph = 'Первое предложение. Второе предложение!';
const sentenceSegments = sentenceSegmenter.segment(paragraph);
for (const segment of sentenceSegments) {
  console.log(segment.segment);
}
// 'Первое предложение. ', 'Второе предложение!'

// Доступ к индексу и исходной строке
const segments = graphemeSegmenter.segment(text);
for (const segment of segments) {
  console.log(\`'\${segment.segment}' на позиции \${segment.index}\`);
}
// 'П' на позиции 0, 'р' на позиции 1, 'и' на позиции 2, ...

// resolvedOptions() - получение настроек
const resolved = graphemeSegmenter.resolvedOptions();
console.log(resolved.locale);      // 'ru-RU'
console.log(resolved.granularity); // 'grapheme'`,specification:"https://tc39.es/ecma402/#sec-intl-segmenter-constructor",errors:`RangeError — если недопустимые locales или options.
TypeError — если string не является строкой.`},{name:"Intl.Locale",syntax:"new Intl.Locale(tag[, options])",parameters:[{name:"tag",description:'Строка с языковым тегом (например, "en-US", "ru-RU", "sr-Cyrl-RS")'},{name:"options",description:`Объект с настройками:
 • language: код языка ('en', 'ru')
 • script: код скрипта ('Latn', 'Cyrl')
 • region: код региона ('US', 'RU')
 • numberingSystem: система счисления ('latn', 'arab', 'hanidec')
 • calendar: календарь ('gregory', 'islamic', 'hebrew')
 • caseFirst: 'upper' | 'lower' | 'false'
 • collation: тип сортировки
 • hourCycle: 'h11' | 'h12' | 'h23' | 'h24'
 • languageDisplay: 'dialect' | 'standard'
 • numeric: true/false`}],description:`Конструктор объектов для работы с языковыми тегами. Предоставляет информацию о locales и методы для её модификации.
Созданный объект предоставляет следующие свойства:
• language — код языка
• script — код скрипта (если указан)
• region — код региона (если указан)
• baseName — базовое имя локали (язык + регион/скрипт)
• calendar — календарь (если указан)
• numberingSystem — система счисления (если указана)
• collation — тип сортировки (если указан)
• hourCycle — цикл часов (если указан)
• caseFirst — порядок регистра (если указан)
• numeric — числовое сравнение (если указано)
• toString() — возвращает строковое представление локали`,example:`// Создание базовой локали
const locale = new Intl.Locale('en-US');
console.log(locale.language); // 'en'
console.log(locale.region); // 'US'
console.log(locale.baseName); // 'en-US'
console.log(locale.toString()); // 'en-US'

// Русский язык
const ruLocale = new Intl.Locale('ru-RU');
console.log(ruLocale.language); // 'ru'
console.log(ruLocale.region); // 'RU'

// С указанием скрипта (сербский кириллицей)
const srLocale = new Intl.Locale('sr-Cyrl-RS');
console.log(srLocale.script); // 'Cyrl'
console.log(srLocale.region); // 'RS'

// Модификация через options
const modified = new Intl.Locale('en-US', {
  numberingSystem: 'latn',
  calendar: 'gregory'
});
console.log(modified.toString()); // 'en-US-u-ca-gregory-nu-latn'
console.log(modified.numberingSystem); // 'latn'

// Язык без региона
const simpleLocale = new Intl.Locale('ru');
console.log(simpleLocale.language); // 'ru'
console.log(simpleLocale.region); // undefined`,specification:"https://tc39.es/ecma402/#sec-intl-locale-constructor",errors:"RangeError — если недопустимые locales или options."},{name:"Intl.getCanonicalLocales",syntax:"Intl.getCanonicalLocales(locales)",parameters:[{name:"locales",description:'Строка или массив строк с кодами локалей для канонизации (например, "en-us", ["ru", "EN-gb"])'}],description:`Статический метод, возвращающий массив канонических кодов locales.
Приводит коды к стандартному виду: приводит регистр, заменяет устаревшие коды, удаляет некорректные расширения.
Возвращает массив строк с каноническими кодами локалей в том же порядке, что и входные данные.
Если входной параметр — строка, она преобразуется в массив с одним элементом.
При обнаружении некорректного кода локали выбрасывает исключение RangeError.`,example:`console.log(Intl.getCanonicalLocales('en-us')); // ['en-US']
console.log(Intl.getCanonicalLocales(['ru', 'EN-gb'])); // ['ru', 'en-GB']
console.log(Intl.getCanonicalLocales('zh-Hant-CN')); // ['zh-Hant-CN']
// Попытка передать некорректный код
try {
  Intl.getCanonicalLocales('12');
} catch (e) {
  console.log(e.name); // 'RangeError'
}`,specification:"https://tc39.es/ecma402/#sec-intl.getcanonicallocales",errors:"RangeError — если хотя бы один из locales невалиден."},{name:"Intl.supportedValuesOf",syntax:"Intl.supportedValuesOf(key)",parameters:[{name:"key",description:"Тип значений: 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit'"}],description:`Статический метод, возвращающий массив поддерживаемых значений для key с учётом locales.
Возвращает отсортированный массив уникальных строк, которые гарантированно поддерживаются реализацией.
Может использоваться для проверки доступности календарей, валют, часовых поясов и т.д. перед использованием в других Intl-конструкторах.`,example:`// Поддерживаемые календари
console.log(Intl.supportedValuesOf('calendar'));
// ['buddhist', 'chinese', 'gregory', 'hebrew', ...]

// Поддерживаемые валюты
console.log(Intl.supportedValuesOf('currency'));
// ['AED', 'AFN', 'ALL', 'AMD', ...]

// Поддерживаемые часовые пояса
console.log(Intl.supportedValuesOf('timeZone'));
// ['Africa/Abidjan', 'Africa/Accra', ...]

// Поддерживаемые единицы измерения
console.log(Intl.supportedValuesOf('unit'));
// ['acre', 'bit', 'byte', 'celsius', ...]`,specification:"https://tc39.es/ecma402/#sec-intl.supportedvaluesof",errors:"RangeError — если передан недопустимый key."}]},c2={...X1,...J1,...G1,...a2,...K1,...Z1,...Q1,...$1,...r2,...W1,...e2,...t2,...n2,...s2,...l2,...o2,...i2},u2="_categorySection_1iz4k_1",d2="_categoryTitle_1iz4k_9",m2="_methodsList_1iz4k_20",p2="_noResult_1iz4k_26",f2="_sentinel_1iz4k_35",Jl={categorySection:u2,categoryTitle:d2,methodsList:m2,noResult:p2,sentinel:f2},g2=()=>{const{activeCategories:a,searchQuery:s,loadedCount:i,filterChange:c,searchChange:d,searchReset:m,loadMore:f}=Bs(),{pillItems:h,itemsToShow:y,hasMore:p}=qg({activeCategories:a,searchQuery:s,loadedCount:i,config:c2,getLabel:x=>sg[x]}),E=Vg({hasMore:p,onLoadMore:f});return w.jsxs(zs,{title:"API JavaScript",filtersSlot:w.jsx(Jg,{pillItems:h,onFilterChange:c,searchQuery:s,onSearchChange:d,onSearchReset:m}),children:[Object.entries(y).map(([x,A])=>w.jsxs("div",{className:Jl.categorySection,children:[w.jsx("h2",{className:Jl.categoryTitle,children:sg[x]}),w.jsx("div",{className:Jl.methodsList,children:A.map((U,I)=>w.jsx(V1,{method:U},`${x}-${I}`))})]},x)),Object.entries(y).length===0&&w.jsx("div",{className:Jl.noResult,children:"По данному запросу данных нет"}),p&&w.jsx("div",{ref:E,className:Jl.sentinel})]})},h2="_section_1lyjs_1",y2="_header_1lyjs_8",b2="_title_1lyjs_15",v2="_content_1lyjs_20",x2="_addition_1lyjs_27",S2="_buttonArrow_1lyjs_37",Ha={section:h2,header:y2,title:b2,content:v2,addition:x2,buttonArrow:S2},E2=({section:a})=>{const[s,i]=N.useState(!0),c=Va(a.addition,{highlightStyle:{fontWeight:600,color:"#333"}}),d=Va(a.content,{highlightStyle:{fontWeight:600,color:"#3b82f6"}});return w.jsxs("div",{id:a.title,className:Ha.section,children:[w.jsxs("button",{className:Ha.header,onClick:()=>i(m=>!m),children:[w.jsx("h2",{className:Ha.title,children:a.title}),w.jsx("div",{className:Ha.buttonArrow,children:w.jsx(ks,{isOpen:s})})]}),s&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:Ha.content,children:d}),a.addition&&w.jsx("div",{className:Ha.addition,children:c}),a.examples&&w.jsx(Cu,{text:a.examples,isShowToggle:!0,isHiddenDefault:!0})]})]})},T2="_container_a7jbr_1",w2="_header_a7jbr_11",j2="_backButton_a7jbr_18",M2="_title_a7jbr_34",O2="_content_a7jbr_39",N2="_introduction_a7jbr_49",Pa={container:T2,header:w2,backButton:j2,title:M2,content:O2,introduction:N2},R2=()=>{const a=Mu(),s=Nn(),{topicData:i}=s.state,c=Va(i.content.introduction,{highlightStyle:{fontWeight:600,color:"black"}});return w.jsxs("div",{className:Pa.container,children:[w.jsxs("div",{className:Pa.header,children:[w.jsx("button",{className:Pa.backButton,onClick:()=>a(-1),children:"Вернуться к списку тем"}),w.jsx("h1",{className:Pa.title,children:i.name})]}),w.jsxs("div",{className:Pa.content,children:[w.jsx("div",{className:Pa.introduction,children:c}),i.content.sections.map((d,m)=>w.jsx(E2,{section:d},m))]})]})},D2={value:"dom-nodes",name:"DOM-дерево",content:{introduction:'DOM (Document Object Model) — это программный интерфейс, который представляет HTML- или XML-документ в виде структуры, где каждый элемент является объектом. Эта структура называется "деревом узлов", и именно с её помощью JavaScript может взаимодействовать со страницей.',sections:[{title:"Что такое DOM?",content:`Когда браузер загружает HTML-страницу, он парсит её код и на его основе создаёт DOM-дерево. Корнем этого дерева является объект document.
• Каждый HTML-тег становится "узлом-элементом".
• Вложенные теги становятся "детьми" родительского элемента.
• Текст внутри тега становится "текстовым узлом".`,addition:"Пробелы и переводы строк в коде также создают текстовые узлы в DOM.",examples:`<html>
  <head>
    <title>О лосях</title>
  </head>
  <body>
    Правда о лосях.
  </body>
</html>

// DOM-дерево для этого документа:
document
  └── html (корневой элемент)
        ├── head
        │     └── title
        │           └── #text: "О лосях"
        └── body
              └── #text: "Правда о лосях."`},{title:"Автоисправление",content:"Если браузер сталкивается с некорректно написанным HTML-кодом, он автоматически корректирует его при построении DOM.",addition:`• Браузер сам создаёт теги <html> и <body>, если их нет
• Браузер сам закрывает незакрытые теги
• Таблицы всегда содержат <tbody> (браузер добавляет его автоматически)
• Всё содержимое после </body> перемещается в конец body`,examples:`// Некорректный HTML
<p>Привет
<li>Мама
<li>и
<li>Папа
// DOM будет нормальным, браузер сам закроет теги

// Таблица без tbody
<table id="table">
  <tr>
    <td>1</td>
  </tr>
</table>
// Браузер добавит <tbody> автоматически`},{title:"Типы узлов",content:"DOM состоит из узлов разных типов. У каждого узла есть три важных свойства: nodeType (тип узла в виде числа), nodeName (имя узла) и nodeValue (значение узла).",addition:`1. document — корневой узел, "входная точка" в DOM. Представляет весь документ.
• nodeType = 9
• nodeName = "#document"
• nodeValue = null
2. Узлы-элементы — соответствуют HTML-тегам (<div>, <p>, <a>, <li> и т.д.). Формируют структуру документа и могут иметь потомков.
• nodeType = 1
• nodeName = "DIV" (имя тега в верхнем регистре)
• nodeValue = null
3. Текстовые узлы — содержат текст внутри элемента. Не могут иметь потомков, всегда находятся на самом нижнем уровне.
• nodeType = 3
• nodeName = "#text"
• nodeValue — сам текст
4. Узлы-комментарии — не влияют на визуальное отображение, но являются полноправной частью DOM и могут быть прочитаны через JavaScript.
• nodeType = 8
• nodeName = "#comment"
• nodeValue — содержимое комментария`,examples:`<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Типы узлов DOM</title>
  </head>
  <body>
    Правда о лосях.
    <div>Лось -- животное хитрое</div>
    <!-- комментарий -->

    <script>
      // Вывод всех узлов внутри body
      document.body.childNodes.forEach((node, index) => {
        console.log(\`\${index + 1}: тип \${node.nodeType}, имя "\${node.nodeName}", значение:\`, node.nodeValue);
      });
      // 1: тип 3, имя "#text", значение: "  Правда о лосях."
      // 2: тип 1, имя "DIV", значение: null
      // 3: тип 3, имя "#text", значение: (перевод строки плюс 2 пробела)
      // 4: тип 8, имя "#comment", значение: " комментарий "
      // 5: тип 3, имя "#text", значение: (перевод строки плюс 2 пробела)
      // 6: тип 1, имя "SCRIPT", значение: null
    <\/script>
  </body>
</html>`}]}},A2={value:"dom-navigation",name:"Навигация по DOM-элементам",content:{introduction:"Чтобы изменить элемент или его содержимое, сначала нужно получить ссылку на соответствующий DOM-узел. Все навигационные операции начинаются с объекта document — главной «точки входа».",sections:[{title:"Навигация от корня документа: html, head, body",content:"Для доступа к корневым элементам страницы у объекта document есть специальные свойства.",addition:`• <html> = document.documentElement — ссылка на тег html
• <body> = document.body — ссылка на тег body
• <head> = document.head — ссылка на тег head
• document.body может быть равен null, если скрипт находится в <head>`,examples:`<html>
  <body>
    <script>
      console.log(document.documentElement); // <html>...</html>
      console.log(document.head); // <head>...</head>
      console.log(document.body); // <body>...</body>
    <\/script>
  </body>
</html>


<html>
  <head>
    <script>
      console.log(document.body); // null (тело документа ещё не создано)
    <\/script>
  </head>
  <body>
    <script>
      console.log(document.body); // <body>...</body> (тело уже существует)
    <\/script>
  </body>
</html>`},{title:"Навигация по дочерним узлам и элементам",content:`Свойства childNodes, firstChild, lastChild, previousSibling, nextSibling, parentNode возвращают все типы узлов.
Свойства children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling, parentElement возвращают только узлы-элементы.`,addition:`Для всех узлов:
• childNodes — коллекция всех дочерних узлов
• firstChild, lastChild — первый и последний дочерний узел
• previousSibling, nextSibling — соседние узлы
• parentNode — родительский узел
Также есть функция hasChildNodes() — которая проверяет, есть ли дочерние узлы (возвращает true/false)
Только для узлов-элементов:
• children — коллекция дочерних элементов
• firstElementChild, lastElementChild — первый и последний дочерний элемент
• previousElementSibling, nextElementSibling — соседние элементы
• parentElement — родитель-элемент (может вернуть null для корневого <html>)

Все навигационные свойства доступны только для чтения.`,examples:`<html>
  <body>
    <div>Начало</div>
    Пробельный текст
    <!-- конец -->
    
    <script>
      // childNodes - коллекция всех дочерних узлов
      for (let node of document.body.childNodes) {
        console.log(node); // Text, DIV, Text, Comment, Text, Script
      }
      
      // firstChild, lastChild
      console.log("Первый узел:", document.body.firstChild); // Text
      console.log("Последний узел:", document.body.lastChild); // Script
      
      // hasChildNodes()
      console.log("Есть ли дети у body?", document.body.hasChildNodes()); // true
      
      // previousSibling, nextSibling
      const div = document.querySelector("div");
      console.log("Следующий сосед div:", div.nextSibling); // Text
      console.log("Предыдущий сосед div:", div.previousSibling); // Text
      
      // parentNode
      console.log("Родитель div:", div.parentNode); // BODY
      
      // children
      for (let elem of document.body.children) {
        console.log(elem.tagName); // DIV, SCRIPT
      }
      
      // firstElementChild, lastElementChild
      console.log("Первый элемент:", document.body.firstElementChild); // DIV
      console.log("Последний элемент:", document.body.lastElementChild); // SCRIPT
      
      // previousElementSibling, nextElementSibling
      console.log("Следующий элемент-сосед div:", div.nextElementSibling); // null (нет следующего элемента)
      console.log("Предыдущий элемент-сосед div:", div.previousElementSibling); // null
      
      // parentElement
      console.log("Родитель-элемент div:", div.parentElement); // BODY
      console.log("parentNode <html>:", document.documentElement.parentNode); // document
      console.log("parentElement <html>:", document.documentElement.parentElement); // null
    <\/script>
  </body>
</html>`},{title:"Навигация по таблицам",content:"Таблицы предоставляют дополнительные свойства, специфичные для их типа.",addition:`Элемент </table>:
• table.rows — коллекция всех строк <tr> (включая <thead>, <tbody>, <tfoot>)
• table.caption\` — ссылка на <caption>
• table.tHead — ссылка на <thead>
• table.tFoot — ссылка на <tfoot>
• table.tBodies — коллекция всех <tbody> (по спецификации их может быть несколько)
Секции <thead>, <tfoot>, <tbody>:
• section.rows — коллекция строк <tr> внутри конкретной секции
Строка <tr>:
• tr.cells — коллекция всех ячеек в строке (и <td>, и <th>)
• tr.sectionRowIndex — номер строки внутри текущей секции (thead/tbody/tfoot)
• tr.rowIndex — номер строки во всей таблице
Ячейки <td> и <th>:
• td.cellIndex — номер ячейки в строке`,examples:`<html>
  <body>
    <table id="table" border="1">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Анна</td>
          <td>25</td>
        </td>
        <tr>
          <td>Петр</td>
          <td>30</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Итого: 2</td>
        </tr>
      </tfoot>
    </table>

    <script>
      const table = document.getElementById("table");

      // Доступ к строкам таблицы
      console.log("Все строки:", table.rows.length); // 4
      console.log("Первая строка, вторая ячейка:", table.rows[0].cells[1].innerHTML); // "Возраст"

      // Доступ к секциям
      console.log("thead:", table.tHead); // <thead>...</thead>
      console.log("tbody:", table.tBodies[0]); // <tbody>...</tbody>
      console.log("tfoot:", table.tFoot); // <tfoot>...</tfoot>

      // Навигация по строкам внутри tbody
      const tbody = table.tBodies[0];
      console.log("Строк в tbody:", tbody.rows.length); // 2
      console.log("Первая строка tbody, ячейка Имя:", tbody.rows[0].cells[0].innerHTML); // "Анна"

      // Индексы строк
      const firstRow = tbody.rows[0];
      console.log("rowIndex (позиция в таблице):", firstRow.rowIndex); // 1 (0 - thead, 1 - первая строка tbody)
      console.log("sectionRowIndex (позиция в секции):", firstRow.sectionRowIndex); // 0

      // Индексы ячеек
      const firstCell = firstRow.cells[0];
      console.log("cellIndex (позиция в строке):", firstCell.cellIndex); // 0
    <\/script>
  </body>
</html>`}]}},C2={value:"searching-elements-dom",name:"Поиск элементов в DOM",content:{introduction:"Методы поиска позволяют получить любой элемент на странице: по id, CSS-селектору, тегу, классу или атрибуту name.",sections:[{title:"Метод getElementById",content:"Для получения элемента по атрибуту id используется метод document.getElementById(id).",addition:`• id должен быть уникальным в пределах документа
• Метод работает только на document
• Через id создаётся глобальная переменная, но не используйте это — возможны конфликты имён
• Если JS-переменная с таким же именем уже есть — она имеет приоритет`,examples:`<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // получить элемент
  let elem = document.getElementById("elem");

  // сделать его фон синим
  elem.style.background = "blue";

  // можно также обратиться через глобальную переменную
<\/script>`},{title:"Метод querySelectorAll",content:"Метод elem.querySelectorAll(css) возвращает коллекцию всех элементов внутри elem, соответствующих CSS-селектору.",addition:`• Поддерживаются любые CSS-селекторы (классы, ID, атрибуты, псевдоклассы)
• Псевдоклассы типа :hover, :active, :first-child тоже работают
• Возвращает статическую коллекцию — не обновляется при изменениях в DOM
• Для перебора можно использовать for..of или Array.from()`,examples:`<ul>
  <li>один</li>
  <li>два</li>
</ul>

<script>
  let items = document.querySelectorAll("li");
  
  for (let item of items) {
    console.log(item.innerHTML); // один, два
  }
<\/script>`},{title:"Метод querySelector",content:"Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.",addition:"Результат такой же, как при вызове elem.querySelectorAll(css)[0]. Но работает быстрее, так как находит только первый элемент и останавливается.",examples:`<div class="container">
  <p class="item">Первый</p>
  <p class="item">Второй</p>
</div>
<script>
  let firstItem = document.querySelector(".item");
  console.log(firstItem.innerHTML); // "Первый"

  // или внутри контейнера
  let container = document.querySelector(".container");
  let item = container.querySelector(".item");
  console.log(item.innerHTML); // "Первый"
<\/script>`},{title:"Метод matches",content:"Метод elem.matches(css) проверяет, удовлетворяет ли elem CSS-селектору.",addition:"Возвращает true или false",examples:`<div class="item active">Активный</div>
<div class="item">Обычный</div>
<script>
  let items = document.querySelectorAll(".item");
  
  for (let elem of items) {
    if (elem.matches(".active")) {
      console.log(elem.innerHTML); // Активный
    }
  }
<\/script>`},{title:"Метод closest",content:"Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.",addition:`• Поднимается вверх по цепочке родителей
• Если подходит сам элемент — возвращает его
• Если ничего не найдено — возвращает null`,examples:`<div class="wrapper">
  <div class="content">
    <p class="text">Привет</p>
  </div>
</div>
<script>
  let text = document.querySelector(".text");
  
  console.log(text.closest(".content")); // <div class="content">
  console.log(text.closest(".wrapper")); // <div class="wrapper">
  console.log(text.closest(".none"));    // null
<\/script>`},{title:"Методы getElementsBy*",content:"Методы getElementsByTagName, getElementsByClassName, getElementsByName ищут элементы и возвращают живую коллекцию (обновляется при изменении DOM).",addition:`• elem.getElementsByTagName(tag) — ищет по тегу ("*" — все элементы)
• elem.getElementsByClassName(className) — ищет по классу
• document.getElementsByName(name) — ищет по атрибуту name (только на document)`,examples:`<div class="chapter">Глава 1</div>
<div class="chapter">Глава 2</div>
<div class="note">Примечание</div>
<input type="text" name="username" value="Иван">
<input type="text" name="username" value="Петр">

<script>
  // Поиск по классу
  let chapters = document.getElementsByClassName("chapter");
  console.log(chapters.length); // 2

  // Поиск по тегу
  let divs = document.getElementsByTagName("div");
  console.log(divs.length); // 3

  // Поиск по атрибуту name
  let inputs = document.getElementsByName("username");
  console.log(inputs.length); // 2
  console.log(inputs[0].value); // "Иван"
<\/script>`},{title:"Метод contains",content:"Метод parent.contains(child) проверяет, является ли child потомком parent.",addition:`• Возвращает true, если child находится внутри parent
• Возвращает true, если parent === child
• Возвращает false в противном случае`,examples:`<div id="parent">
  <div id="child">Дочерний элемент</div>
</div>
<div id="other">Другой элемент</div>

<script>
  let parent = document.getElementById("parent");
  let child = document.getElementById("child");
  let other = document.getElementById("other");

  console.log(parent.contains(child)); // true
  console.log(parent.contains(parent)); // true
  console.log(parent.contains(other)); // false
<\/script>`}]}},_2={value:"basic-dom-node-properties",name:"Свойства DOM-узлов: тип, тег, содержимое",content:{introduction:"У каждого DOM-узла есть свойства, которые содержат информацию о нём: тип узла, имя тега, содержимое и т.д. Эти свойства позволяют узнать, что из себя представляет узел, и управлять им.",sections:[{title:"Иерархия классов DOM",content:"Каждый DOM-узел принадлежит определённому классу. Все классы образуют иерархию, где каждый следующий наследует от предыдущего.",addition:`Корневые классы:
• EventTarget — корень, обеспечивает поддержку событий
• Node — базовый класс для всех узлов
• Element — базовый класс для тегов
• HTMLElement — базовый класс для HTML-элементов
Проверка класса:
• elem.constructor.name — имя класса
• elem instanceof Класс — проверка принадлежности`,examples:`<div id="myDiv"></div>
<input id="myInput" type="text">

<script>
  // Проверка для элемента div
  let div = document.getElementById("myDiv");
  console.log(div instanceof HTMLDivElement); // true
  console.log(div instanceof HTMLElement); // true
  console.log(div instanceof Element); // true
  console.log(div instanceof Node); // true
  console.log(div.constructor.name); // "HTMLDivElement"

  // Проверка для элемента input
  let input = document.getElementById("myInput");
  console.log(input instanceof HTMLInputElement); // true
  console.log(input.constructor.name); // "HTMLInputElement"
<\/script>`},{title:"Свойство nodeType",content:"Свойство nodeType содержит числовой код типа узла.",addition:`Основные значения:
• 1 — элемент (ELEMENT_NODE)
• 3 — текст (TEXT_NODE)
• 8 — комментарий (COMMENT_NODE)
• 9 — документ (DOCUMENT_NODE)
• 11 — фрагмент (DOCUMENT_FRAGMENT_NODE)`,examples:`<div id="test">текст</div>
<!-- комментарий -->

<script>
  let div = document.getElementById("test");
  let comment = div.nextSibling;

  console.log(div.nodeType); // 1 (элемент)
  console.log(div.firstChild.nodeType); // 3 (текст)
  console.log(comment.nodeType); // 8 (комментарий)
  console.log(document.nodeType); // 9 (документ)
  console.log(document.createDocumentFragment().nodeType); // 11 (фрагмент)
<\/script>`},{title:"Свойства: nodeName, tagName",content:"Свойства nodeName и tagName возвращают имя тега для элементов. Для других типов узлов nodeName возвращает специальное значение.",addition:`Различия:
• tagName есть только у узлов-элементов Element
• nodeName есть у всех узлов Node:
- для элементов: равно tagName
- для текстовых узлов: "#text"
- для комментариев: "#comment"
- для документа: "#document"

В HTML имена тегов возвращаются в верхнем регистре ("BODY", "DIV").`,examples:`<div id="test">текст</div>
<!-- комментарий -->

<script>
  let div = document.getElementById("test");
  let comment = div.nextSibling;

  // Для элемента
  console.log(div.tagName); // "DIV"
  console.log(div.nodeName); // "DIV"

  // Для комментария
  console.log(comment.tagName); // undefined
  console.log(comment.nodeName); // "#comment"

  // Для документа
  console.log(document.tagName); // undefined
  console.log(document.nodeName); // "#document"
<\/script>`},{title:"Свойства: data, nodeValue",content:"Свойства data и nodeValue используются для получения или изменения содержимого текстовых узлов и комментариев.",addition:`• data и nodeValue — практически идентичны, возвращают одно и то же
• Работают только для текстовых узлов (TEXT_NODE) и комментариев (COMMENT_NODE)
• Для элементов (ELEMENT_NODE) возвращают null`,examples:`<div id="test">
  Привет<!-- комментарий -->
</div>

<script>
  let div = document.getElementById("test");
  let textNode = div.firstChild;
  let commentNode = textNode.nextSibling;

  // Для текстового узла
  console.log(textNode.data); // "Привет"
  console.log(textNode.nodeValue); // "Привет"

  // Изменение текста
  textNode.data = "Пока";
  console.log(div.innerHTML); // "Пока<!-- комментарий -->"

  // Для комментария
  console.log(commentNode.data); // " комментарий "
  console.log(commentNode.nodeValue); // " комментарий "

  // Для элемента — возвращают null
  console.log(div.data); // undefined
  console.log(div.nodeValue); // null
<\/script>`},{title:"Свойство innerHTML",content:"Свойство innerHTML позволяет получить или изменить HTML-содержимое элемента в виде строки.",addition:`• При чтении возвращает HTML внутри элемента
• При записи заменяет содержимое, браузер парсит HTML и исправляет ошибки
• Скрипты <script> вставляются, но НЕ выполняются
• Использование innerHTML+= вызывает перезапись всего содержимого`,examples:`<div id="box">
  <p>Привет</p>
</div>

<script>
  let box = document.getElementById("box");

  // Чтение
  console.log(box.innerHTML); // "  <p>Привет</p>  "

  // Замена содержимого
  box.innerHTML = "<b>Жирный текст</b>";
  console.log(box.innerHTML); // "<b>Жирный текст</b>"

  // Браузер исправляет ошибки
  box.innerHTML = "<i>курсив"; // забыли закрыть
  console.log(box.innerHTML); // "<i>курсив</i>"

  // innerHTML += перезаписывает всё
  let oldContent = box.innerHTML;
  box.innerHTML += "<p>Ещё текст</p>";
  console.log(oldContent); // <i>курсив</i>
  console.log(box.innerHTML); // <i>курсив</i><p>Ещё текст</p>
<\/script>`},{title:"Свойства: outerHTML, textContent",content:`outerHTML возвращает элемент целиком вместе с его содержимым в виде строки.
textContent возвращает только текст без HTML-тегов.`,addition:`outerHTML:
• Возвращает HTML целиком (как innerHTML + сам элемент)
• Запись в outerHTML не изменяет сам элемент, а заменяет его во внешнем контексте (старая переменная будет содержать старое значение)
textContent:
• Возвращает текст со всех вложенных элементов
• Запись в textContent безопасна — HTML-теги трактуются как текст
• Используется для защиты от XSS (вставка пользовательского текста)`,examples:`<div id="elem">Привет<b>Мир</b></div>

<script>
  let elem = document.getElementById("elem");

  console.log(elem.outerHTML); // "<div id="elem">Привет <b>Мир</b></div>"

  // Замена элемента через outerHTML
  elem.outerHTML = "<p>Новый элемент</p>";
  console.log(elem.outerHTML); // всё ещё "<div>..." — elem указывает на старый(!) элемент
  console.log(document.body.innerHTML); // "<p>Новый элемент</p>" — а в DOM новый

  let div = document.createElement("div");
  div.textContent = "<b>Винни-пух!</b>";
  console.log(div.innerHTML); // "&lt;b&gt;Винни-пух!&lt;/b&gt;" (теги экранированы)
  console.log(div.textContent); // "<b>Винни-пух!</b>" (чистый текст)
<\/script>`}]}},L2={value:"attributes-and-properties",name:"Атрибуты и свойства",content:{introduction:"Когда браузер парсит HTML, он создаёт DOM-объекты. Стандартные HTML-атрибуты становятся свойствами DOM, но это преобразование не всегда один-в-один.",sections:[{title:"DOM-свойства",content:"DOM-узлы — это обычные объекты JavaScript. Мы можем добавлять свои свойства и методы, изменять встроенные и наследовать их.",addition:`Особенности DOM-свойств:
• Им можно присвоить любое значение
• Они регистрозависимы
• Поддерживают методы, как у обычных объектов
• Стандартные DOM-свойства типизированы (не всегда строки)
Примеры типизации:
• input.checked — логический тип (true/false)
• elem.style — объект (CSSStyleDeclaration), а не строка
• a.href — полный URL (даже если атрибут относительный)
• input.value — строка
• elem.tagName — строка в верхнем регистре`,examples:`<body id="test">
<input id="checkbox" type="checkbox" checked>
<div id="div" style="color:red">Hello</div>
<a id="link" href="#hello">link</a>
<script>
  // Добавление своих свойств и методов
  document.body.myData = { name: "Caesar" };
  console.log(document.body.myData.name); // "Caesar"

  document.body.sayHi = function() {
    console.log(this.tagName);
  };
  document.body.sayHi(); // "BODY"

  // Наследование через прототип
  Element.prototype.sayHello = function() {
    console.log(\`Hello from \${this.tagName}\`);
  };
  document.body.sayHello(); // "Hello from BODY"

  // Типизация DOM-свойств
  let checkbox = document.getElementById("checkbox");
  let div = document.getElementById("div");
  let link = document.getElementById("link");

  // Логический тип (checked)
  console.log(checkbox.getAttribute("checked")); // "" (пустая строка)
  console.log(checkbox.checked); // true (boolean)

  // Объект style
  console.log(div.getAttribute("style")); // "color:red"
  console.log(div.style); // [object CSSStyleDeclaration]
  console.log(div.style.color); // "red"

  // Полный URL в href
  console.log(link.getAttribute("href")); // "#hello"
  console.log(link.href); // полный URL (например, "https://site.com/page#hello")
<\/script>`},{title:"HTML-атрибуты",content:"В HTML у тегов могут быть атрибуты. Стандартные атрибуты преобразуются в DOM-свойства, но нестандартные — нет.",addition:`Методы для работы с атрибутами:
• elem.hasAttribute(name) — проверяет наличие атрибута
• elem.getAttribute(name) — получает значение атрибута
• elem.setAttribute(name, value) — устанавливает значение
• elem.removeAttribute(name) — удаляет атрибут

Особенности атрибутов:
• Имена регистронезависимы (id = ID)
• Значения всегда являются строками
• Все атрибуты доступны через elem.attributes`,examples:`<body id="test" something="non-standard"></body>

<script>
  console.log(document.body.id); // "test"
  // Нестандартный атрибут не преобразуется в свойство
  console.log(document.body.something); // undefined

  // Чтение нестандартного атрибута
  console.log(document.body.getAttribute("something")); // "non-standard"

  // Работа с атрибутами
  let elem = document.body;
  elem.setAttribute("test", 123); // значение станет строкой "123"
  console.log(elem.getAttribute("test")); // "123"

  // Перебор всех атрибутов
  for (let attr of elem.attributes) {
    console.log(\`\${attr.name} = \${attr.value}\`); // id = test, something = non-standard, test = 123
  }
<\/script>`},{title:"Синхронизация между атрибутами и свойствами",content:"Когда стандартный атрибут изменяется, соответствующее свойство автоматически обновляется. Обычно это работает и в обратную сторону.",addition:`Синхронизация:
• Атрибут → Свойство: всегда работает
• Свойство → Атрибут: работает для большинства стандартных атрибутов
Исключения:
1. input.value — синхронизация только атрибут → свойство
2. input.checked — синхронизация только атрибут → свойство
3. a.href — свойство хранит полный URL, атрибут — исходный
4. input.type — изменение ограничено
5. style — атрибут — строка, свойство — объект`,examples:`<input id="input" type="text">

<script>
  let input = document.querySelector("input");

  // Атрибут => свойство
  input.setAttribute("id", "newId");
  console.log(input.id); // "newId"

  // Свойство => атрибут
  input.id = "anotherId";
  console.log(input.getAttribute("id")); // "anotherId" (обновлено)

  // Исключение: input.value
  input.setAttribute("value", "text");
  console.log(input.value); // "text"

  input.value = "newValue";
  console.log(input.getAttribute("value")); // "text" (не обновилось!)
<\/script>`},{title:"Нестандартные атрибуты, свойство dataset",content:"Нестандартные атрибуты полезны для передачи данных из HTML в JavaScript или для стилизации. Но чтобы избежать конфликтов с будущими стандартами, используются атрибуты data-*.",addition:`Атрибуты data-*:
• Зарезервированы для использования программистами — безопасно и валидно
• Доступны в свойстве dataset
• Имена с дефисом преобразуются в верблюжью нотацию (kebab-case → camelCase)`,examples:`<body data-about="Elephants">
<div id="order" class="order" data-order-state="new">
  A new order.
</div>

<script>
  // Чтение data-атрибута
  console.log(document.body.dataset.about); // "Elephants"

  let order = document.getElementById("order");
  console.log(order.dataset.orderState); // "new"

  // Изменение через dataset
  order.dataset.orderState = "pending";
  console.log(order.dataset.orderState); // "pending"
  console.log(order.getAttribute("data-order-state")); // "pending"

  // Многословные атрибуты
  order.dataset.someLongName = "value";
  console.log(order.getAttribute("data-some-long-name")); // "value"
<\/script>

<style>
  .order[data-order-state="new"] { color: green; }
  .order[data-order-state="pending"] { color: blue; }
  .order[data-order-state="canceled"] { color: red; }
</style>`}]}},U2={value:"modifying-document",name:"Изменение документа",content:{introduction:"Методы модификации DOM позволяют создавать элементы, вставлять их в документ, перемещать и удалять.",sections:[{title:"Создание элемента и методы вставки",content:`DOM-узел можно создать двумя методами:
document.createElement(tag) создаёт новый элемент с заданным тегом
document.createTextNode(text) создаёт новый текстовый узел с заданным текстом.
Чтобы узел появился на странице, его нужно вставить с помощью методов append, prepend, before, after или replaceWith.`,addition:`• node.append(...nodes or strings) – добавляет узлы или строки в конец node
• node.prepend(...nodes or strings) – вставляет узлы или строки в начало node
• node.before(...nodes or strings) – вставляет узлы или строки до node
• node.after(...nodes or strings) – вставляет узлы или строки после node
• node.replaceWith(...nodes or strings) – заменяет node заданными узлами или строками
Все методы вставки автоматически удаляют узлы со старых мест при перемещении.`,examples:`<html>
  <body>
    <ol id="ol">
      <li>Первый</li>
      <li>Второй</li>
    </ol>

    <script>
      // Создание элемента
      let div = document.createElement("div");
      div.className = "alert";
      div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

      // Элемент пока в памяти, на странице его не видно
      console.log(div); // <div class="alert">...</div>

      // Вставка на страницу
      document.body.append(div); // элемент появился в конце body

      // Другие методы вставки
      let ol = document.getElementById("ol");

      // Вставка строки до ol
      ol.before("До списка");

      // Вставка строки после ol
      ol.after("После списка");

      // Вставка в начало ol
      ol.prepend("Первый пункт");

      // Вставка в конец ol
      ol.append("Последний пункт");

      // Можно вставлять несколько элементов сразу
      ol.append("Один", " ", "Два", " ", "Три");

      // Перемещение элемента
      let firstLi = document.querySelector("li");
      ol.append(firstLi); // элемент переместится в конец (автоматически удалился со старого места)
    <\/script>
  </body>
</html>`},{title:"Методы: insertAdjacentHTML/*Text/*Element",content:"Метод elem.insertAdjacentHTML(where, html) позволяет вставлять HTML-строку в определённое место относительно элемента.",addition:`Параметр where указывает место вставки:
• "beforebegin" – вставить html непосредственно перед elem
• "afterbegin" – вставить html в начало elem
• "beforeend" – вставить html в конец elem
• "afterend" – вставить html непосредственно после elem

Также существуют методы:
• elem.insertAdjacentText(where, text) – вставляет текст
• elem.insertAdjacentElement(where, elem) – вставляет элемент
Отличие от append/prepend:
• insertAdjacentHTML вставляет HTML-строку, парся теги
• append/prepend вставляют строки как текст`,examples:`<html>
  <body>
    <div id="div"></div>

    <script>
      let div = document.getElementById("div");

      div.insertAdjacentHTML("beforeend", "<b>Жирный текст</b>");

      div.insertAdjacentText("beforeend", "<i>это текст</i>");

      // insertAdjacentElement — вставляет элемент
      let span = document.createElement("span");
      span.textContent = "Вставленный элемент";
      div.insertAdjacentElement("beforeend", span);

      // Итоговый HTML:
      // <div id="div">
      //   <b>Жирный текст</b>
      //   <i>это текст</i>
      //   <span>Вставленный элемент</span>
      // </div>
    <\/script>
  </body>
</html>`},{title:"Удаление и клонирование узлов",content:`Удаление узлов выполняется методом remove()
Для создания копии элемента используется cloneNode().`,addition:`Удаление:
• node.remove() — удаляет элемент из DOM
• При перемещении элемента методы remove не нужны (вставка автоматически удаляет со старого места)
Клонирование:
• elem.cloneNode(true) — глубокое клонирование (с дочерними элементами)
• elem.cloneNode(false) — поверхностное клонирование (без детей)`,examples:`<div id="first">Первый</div>
<div id="second">Второй</div>
<div class="alert" id="msg">
  <strong>Всем привет!</strong> Важное сообщение.
</div>

<script>
  // Клонирование
  let msg = document.getElementById("msg");
  let clone = msg.cloneNode(true); // глубокий клон
  clone.querySelector("strong").innerHTML = "Всем пока!"; // меняем текст в клоне
  msg.after(clone); // вставляем клон после оригинального

  // Удаление через секунду
  setTimeout(() => clone.remove(), 2000); // удаляем клон через 2 секунды
<\/script>`},{title:"DocumentFragment",content:"DocumentFragment — это специальный DOM-узел, который служит обёрткой для списка узлов. При вставке в документ он «исчезает», вместо него вставляется его содержимое.",addition:`• Создаётся через new DocumentFragment() или document.createDocumentFragment()
• Удобен для группировки узлов перед вставкой
• Используется редко — проще вставить узлы напрямую или вернуть массив`,examples:`<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();
  for(let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }
  return fragment;
}

ul.append(getListContent());

// Результат:
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>
<\/script>`},{title:"Метод document.write",content:"Метод document.write(html) записывает html на страницу в момент выполнения. Это очень старый метод из эпохи до DOM.",addition:`Важные ограничения:
• Работает только во время загрузки страницы
• Если вызвать после загрузки — полностью затрёт существующее содержимое документа
Преимущество (историческое):
• Пишет прямо в текст страницы во время создания DOM — очень быстро`,examples:`<p>Где-то на странице...</p>
<script>
  document.write('<b>Привет из JS</b>');
<\/script>
<p>Конец</p>

// Если вызвать после загрузки страницы:
<script>
  setTimeout(() => document.write('<b>Этим.</b>'), 1000);
  // Содержимое страницы будет заменено
<\/script>`}]}},k2={value:"styles-and-classes",name:"Стили и классы",content:{introduction:"Существует два способа задания стилей для элемента: через классы в CSS и через атрибут style (инлайн-стили). Классы — предпочтительный вариант. Инлайн-стили лучше не использовать без необходимости: их сложно поддерживать, их нельзя переопределить без !important, они не работают с псевдоклассами и медиа-запросами, не переиспользуются и раздувают HTML.",sections:[{title:"Свойства: className, classList",content:`Для изменения классов используются свойства className и classList.
className соответствует атрибуту class и содержит строку со всеми классами элемента.
classList — специальный объект с методами для управления отдельными классами.`,addition:`Свойства classList:
• elem.classList.add("class") — добавить класс
• elem.classList.remove("class") — удалить класс
• elem.classList.toggle("class") — добавить класс, если его нет, иначе удалить
• elem.classList.contains("class") — проверка наличия класса, возвращает true/false
• classList является перебираемым (можно использовать for..of)

className заменяет всю строку классов. classList позволяет работать с отдельными классами.`,examples:`<html>
  <body class="main page">
    <script>
      // className
      console.log(document.body.className); // "main page"
      document.body.className = "new"; // полностью заменили все классы
      console.log(document.body.className); // "new"

      // classList
      document.body.classList.add("article"); // добавляем, не удаляя старые
      console.log(document.body.className); // "new article"

      document.body.classList.remove("new"); // удаляем конкретный класс
      console.log(document.body.className); // "article"

      document.body.classList.toggle("visible"); // добавит, если нет
      console.log(document.body.classList.contains("visible")); // true
      document.body.classList.toggle("visible"); // удалит
      console.log(document.body.classList.contains("visible")); // false

      // Перебор классов
      document.body.classList.add("one", "two", "three");
      for (let name of document.body.classList) {
        console.log(name); // "article", "one", "two", "three"
      }
    <\/script>
  </body>
</html>`},{title:"Свойство style",content:"Свойство elem.style — это объект, соответствующий атрибуту style элемента.",addition:`Запись свойств:
• Одно слово: background → elem.style.background
• Несколько слов (camelCase): background-color → elem.style.backgroundColor
Префикс становится с заглавной буквы:
• -moz-border-radius → elem.style.MozBorderRadius
Свойство cssText:
• elem.style.cssText = "styles" — перезаписывает все существующие стили
• elem.style.cssText += "styles" — добавляет к существующим
Сброс стиля:
• elem.style.display = "" — удаляет свойство, возвращая стиль к CSS-правилам`,examples:`<div id="box" style="color: red">Текст</div>

<script>
  let box = document.getElementById("box");

  // Одиночные стили (camelCase)
  box.style.backgroundColor = "green";
  box.style.fontSize = "20px";
  console.log(box.style.backgroundColor); // "green"

  // Множественные стили через cssText (перезапись)
  box.style.cssText = "position: fixed; top: 100px; left: 200px;";
  // Предыдущий стиль color: red — перезаписан!
  console.log(box.style.color); // "" (пусто)

  // Добавление стиля через cssText +=
  box.style.cssText += "border: 1px solid black;";<\/script>`},{title:"Сброс стилей",content:"Для удаления стиля нужно присвоить ему пустую строку, а не использовать delete.",addition:`Правильный способ сброса стиля:
• elem.style.display = "" — сбрасывает свойство
• Браузер применит CSS-классы и встроенные стили, как если бы свойства не было
Неправильный способ:
• delete elem.style.display`,examples:`<body>
  <script>
    // Скрываем body
    document.body.style.display = "none";

    // Через секунду возвращаем к нормальному состоянию
    setTimeout(() => {
      document.body.style.display = ""; // сброс стиля
    }, 1000);
  <\/script>
</body>`},{title:"Вычисленные стили: метод getComputedStyle",content:"Свойство style видит только инлайн-стили (атрибут style). Для чтения стилей с учётом всех CSS-правил (классов, каскада, наследования) используется метод getComputedStyle.",addition:`Синтаксис:
• getComputedStyle(element, [pseudo])
• element — элемент, стили которого нужно получить
• pseudo — псевдоэлемент (например, "::before"), по умолчанию null

Возвращает объект со стилями, похожий на elem.style, но с учётом всех CSS-классов.
Нужно обращаться к точным свойствам (paddingLeft, marginTop), а не к сокращённым
Стили :visited ссылок скрыты для безопасности`,examples:`<html>
  <head>
    <style>
      body { color: red; margin: 5px; font-size: 16px; }

      .box { width: 100px; height: 50px; background: blue; }
    </style>
  </head>
  <body>
    <div class="box" style="width: 200px">Текст</div>

    <script>
      let box = document.querySelector(".box");

      // style — только инлайн-стили
      console.log(box.style.width); // "200px" (есть в инлайне)
      console.log(box.style.height); // "" (пусто, нет в инлайне)
      console.log(box.style.backgroundColor); // "" (пусто, стиль в CSS)

      // getComputedStyle — все стили (инлайн + CSS)
      let computed = getComputedStyle(box);
      console.log(computed.width); // "200px" (инлайн переопределил CSS)
      console.log(computed.height); // "50px" (из CSS)
      console.log(computed.backgroundColor); // "rgb(0, 0, 255)" (blue из CSS)

      // Для body: стили из CSS
      let bodyStyles = getComputedStyle(document.body);
      console.log(bodyStyles.color); // "rgb(255, 0, 0)" (red)
      console.log(bodyStyles.marginTop); // "5px"
      console.log(bodyStyles.fontSize); // "16px"

      // Псевдоэлементы
      let div = document.createElement("div");
      div.innerHTML = "Текст";
      document.body.append(div);

      // Добавим стиль для ::before
      let style = document.createElement("style");
      style.textContent = "div::before { content: \\"► \\"; color: red; }";
      document.head.append(style);

      let beforeWithStyle = getComputedStyle(div, "::before");
      console.log(beforeWithStyle.content); // "► "
      console.log(beforeWithStyle.color); // "rgb(255, 0, 0)"
    <\/script>
  </body>
</html>`}]}},z2={value:"size-and-scroll",name:"Размеры и прокрутка элементов",content:{introduction:"Существует множество JavaScript-свойств, которые позволяют считывать информацию об элементе: ширину, высоту и другие геометрические характеристики.",sections:[{title:"Свойства: offsetParent, offsetLeft, offsetTop",content:`Свойство offsetParent содержит предка элемента, используемого браузером для вычисления координат при рендеринге.
Свойства offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent.`,addition:`offsetParent может быть:
• CSS-позиционированный предок (position: absolute, relative, sticky)
• <td>, <th>, <table>
• <body>
offsetParent равен null для:
• скрытых элементов (display:none)
• элементов <body> и <html>
• элементов с position:fixed`,examples:`<html>
  <body>
    <main style="position: relative; padding: 20px;" id="main">
      <article>
        <div id="example" style="position: absolute; left: 180px; top: 180px;"></div>
      </article>
    </main>

    <script>
      let example = document.getElementById("example");

      console.log(example.offsetParent.id); // "main" (ближайший позиционированный предок)
      console.log(example.offsetLeft); // 180 (позиция относительно main)
      console.log(example.offsetTop); // 180

      // Для body offsetParent === null
      console.log(document.body.offsetParent); // null
    <\/script>
  </body>
</html>`},{title:"Свойства: offsetWidth, offsetHeight",content:"Свойства offsetWidth и offsetHeight содержат полный размер элемента, включая рамки (border), отступы (padding) и полосы прокрутки (если есть).",addition:`offsetWidth = CSS-ширина + padding-left + padding-right + border-left + border-right + scroll
offsetHeight = CSS-высота + padding-top + padding-bottom + border-top + border-bottom + scroll

Метрики для невидимых элементов равны нулю.`,examples:`<div id="example" style="width: 300px; height: 200px; border: 25px solid #E8C48F; padding: 20px; overflow: auto">
  Текст внутри элемента
</div>

<div id="hidden" style="display: none">Скрытый элемент</div>

<script>
  let elem = document.getElementById("example");

  console.log(elem.offsetWidth);  // 390
  console.log(elem.offsetHeight); // 290

  // Для скрытого элемента
  let hidden = document.getElementById("hidden");
  console.log(hidden.offsetWidth); // 0
  console.log(hidden.offsetHeight); // 0
<\/script>`},{title:"Свойства: clientTop, clientLeft",content:"Свойства clientTop и clientLeft возвращают ширину верхней и левой рамки (border) элемента.",addition:`clientLeft = ширина левой рамки (для Right-to-Left — плюс полоса прокрутки)
clientTop = ширина верхней рамки`,examples:`<div id="box" style="border: 25px solid #E8C48F; padding: 20px;">
  Текст внутри элемента
</div>

<div id="no-border" style="padding: 10px;">
  Без рамки
</div>

<script>
  let box = document.getElementById("box");

  console.log(box.clientLeft); // 25
  console.log(box.clientTop); // 25

  let noBorder = document.getElementById("no-border");
  console.log(noBorder.clientLeft); // 0
  console.log(noBorder.clientTop); // 0
<\/script>`},{title:"Свойства: clientWidth, clientHeight",content:"Свойства clientWidth и clientHeight возвращают внутренний размер элемента (ширину и высоту области содержимого + padding) — без рамок и полосы прокрутки.",addition:`clientWidth = width + padding-left + padding-right - scrollbar-width
clientHeight = height + padding-top + padding-bottom - scrollbar-height`,examples:`<!-- Элемент, в котором будет прокрутка -->
<div id="scrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">
  Строка текста для прокрутки.
</div>

<!-- Элемент, без прокрутки -->
<div id="noScrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">
  Короткий текст.
</div>

<div id="hidden" style="display: none">Скрытый элемент</div>

<script>
  let withScroll = document.getElementById("scrollBox");
  let noScroll = document.getElementById("noScrollBox");
  let hidden = document.getElementById("hidden");

  console.log(withScroll.clientWidth); // 105 (width + padding-right + padding-left - scroll-width)
  console.log(withScroll.clientHeight); // 70 (height + padding-top + padding-bottom - scroll-height)

  console.log(noScroll.clientWidth); // 120 (width + padding-left + padding-right - scroll-width)
  console.log(noScroll.clientHeight); // 70 (height + padding-top + padding-bottom - scroll-height)

  console.log(hidden.clientWidth); // 0
  console.log(hidden.clientHeight); // 0
<\/script>`},{title:"Свойства: scrollWidth, scrollHeight",content:"Свойства scrollWidth и scrollHeight возвращают полный внутренний размер элемента (ширину и высоту области содержимого + padding), включая (невидимую) часть.",addition:`scrollWidth = общая ширина контента + padding
scrollHeight = общая высота контента + padding`,examples:`<!-- Элемент с прокруткой по вертикали -->
<div id="scrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">
  Строка текста для прокрутки.
  Добавим ещё строк.
</div>

<!-- Элемент без прокрутки -->
<div id="noScrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">
  Короткий текст.
</div>

<div id="hidden" style="display: none">Скрытый элемент</div>

<script>
  let withScroll = document.getElementById("scrollBox");
  let noScroll = document.getElementById("noScrollBox");
  let hidden = document.getElementById("hidden");

  console.log(withScroll.scrollWidth); // 105 (полная ширина контента + padding-left + padding-right)
  console.log(withScroll.scrollHeight); // 112 (полная высота контента + padding)

  console.log(noScroll.scrollWidth); // 120 (полная ширина контента + padding-left + padding-right)
  console.log(noScroll.scrollHeight); // 70 (полная высота контента + padding-top + padding-bottom)

  console.log(hidden.scrollWidth); // 0
  console.log(hidden.scrollHeight); // 0
<\/script>`},{title:"Свойства: scrollLeft, scrollTop",content:"Свойства scrollLeft и scrollTop возвращают ширину/высоту невидимой, прокрученной в данный момент, части элемента слева и сверху.",addition:`scrollLeft = сколько уже прокручено влево
scrollTop = сколько уже прокручено вверх

Эти свойства можно изменять — браузер выполнит прокрутку элемента.`,examples:`<!-- Элемент с прокруткой -->
<div id="scrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">
  Строка текста для прокрутки.
  Добавим ещё строк.
  Чтобы появилась прокрутка.
  И ещё одну строку.
</div>

<!-- Элемент без прокрутки -->
<div id="noScrollBox" style="width: 100px; height: 50px; padding: 10px; border: 5px solid black; overflow: auto;">
  Короткий текст.
</div>

<div id="hidden" style="display: none">Скрытый элемент</div>

<script>
  let withScroll = document.getElementById("scrollBox");
  let noScroll = document.getElementById("noScrollBox");
  let hidden = document.getElementById("hidden");

  console.log(withScroll.scrollTop); // 0
  console.log(withScroll.scrollLeft); // 0

  // Прокрутим элемент
  withScroll.scrollTop = 50;
  console.log(withScroll.scrollTop); // 50 (сколько прокручено)

  console.log(noScroll.scrollTop); // 0 (нет прокрутки)
  console.log(noScroll.scrollLeft); // 0

  console.log(hidden.scrollTop); // 0
  console.log(hidden.scrollLeft); // 0

  // Прокрутка на самый низ
  withScroll.scrollTop = withScroll.scrollHeight;

  // Прокрутка на самый верх
  withScroll.scrollTop = 0;
<\/script>`},{title:"Ширина полосы прокрутки",content:"Ширину стандартной полосы прокрутки можно получить, создав элемент с прокруткой без рамок и отступов. Разница между offsetWidth и clientWidth даст ширину scrollbar.",addition:`Для Windows ширина обычно колеблется от 12px до 20px.
В macOS (при настройке "показывать только при прокрутке") полоса прокрутки не занимает место — разница offsetWidth - clientWidth будет 0.`,examples:`<script>
  function getScrollbarWidth() {
    let div = document.createElement("div");
    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";

    document.body.append(div);

    console.log(div.offsetWidth); // 50 (ширина + скролл)
    console.log(div.clientWidth); // 35 (ширина - скролл)

    let scrollWidth = div.offsetWidth - div.clientWidth;
    console.log(scrollWidth); // ширина скролла

    div.remove();
    return scrollWidth;
  }

  getScrollbarWidth();
<\/script>`}]}},B2={value:"size-and-scroll-window",name:"Размеры и прокрутка окна",content:{introduction:"Браузер предоставляет свойства и методы для определения размеров видимой области окна, полных размеров документа, текущей позиции прокрутки, а также управления прокруткой страницы.",sections:[{title:"Свойства: window.innerWidth/innerHeight",content:"Свойства window.innerWidth и window.innerHeight возвращают ширину и высоту окна браузера, включая полосу прокрутки.",addition:"В отличие от clientWidth/clientHeight, эти свойства учитывают полосу прокрутки.",examples:`<script>
  console.log(window.innerWidth);  // ширина окна включая скроллбар
  console.log(window.innerHeight); // высота окна включая скроллбар
<\/script>`},{title:"Полная высота документа",content:"Для получения полной высоты документа, включая прокрученную часть, нужно взять максимум из нескольких свойств — из-за исторических браузерных несовместимостей.",addition:`Ни document.documentElement.scrollHeight, ни document.body.scrollHeight сами по себе не дают надёжного результата во всех браузерах.
Надёжное решение — взять максимум из шести значений.`,examples:`<html>
  <body>
    <div style="height: 2000px;">Прокрути меня</div>
    <script>
      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      console.log(scrollHeight); // полная высота документа (2000+)
    <\/script>
  </body>
</html>`},{title:"Свойства: window.pageXOffset/scrollX, window.pageYOffset/scrollY",content:"Свойства window.pageXOffset и window.pageYOffset (алиасы: window.scrollX и window.scrollY) содержат текущее смещение прокрутки документа по горизонтали и вертикали.",addition:`Свойства доступны только для чтения.
• window.pageXOffset === window.scrollX
• window.pageYOffset === window.scrollY`,examples:`<script>
  // Читаем текущую позицию прокрутки
  console.log(window.pageYOffset); // сколько прокручено вертикально (px)
  console.log(window.pageXOffset); // сколько прокручено горизонтально (px)

  // Алиасы (то же самое)
  console.log(window.scrollY); // === pageYOffset
  console.log(window.scrollX); // === pageXOffset
<\/script>`},{title:"Метод window.scrollBy()",content:"Метод window.scrollBy(...) прокручивает страницу на заданное количество пикселей относительно текущей позиции. Метод поддерживает два способа вызова: два числа или объект с опциями.",addition:`Способы вызова:
1. scrollBy(x, y) — где x и y числа (горизонтальное и вертикальное смещение)
2. scrollBy(options) — объект со свойствами top, left, behavior
Значение behavior:
• "auto" — определяется браузером (зависит от CSS-свойства scroll-behavior)
• "smooth" — плавно (не поддерживается в IE и в старых версиях Safari)
• "instant" — мгновенно

Метод проверяет тип первого аргумента — если число, работает как scrollBy(x, y); если объект — как scrollBy(options).`,examples:`<script>
  // Способ 1: два числа (x, y)
  window.scrollBy(0, 100); // вниз на 100px
  window.scrollBy(0, -100); // вверх на 100px
  window.scrollBy(50, 0); // вправо на 50px

  // Способ 2: объект с опциями
  window.scrollBy({ top: 200, left: 0, behavior: "smooth" }); // плавно вниз
  window.scrollBy({ top: -100, left: 0, behavior: "smooth" }); // плавно вверх
  window.scrollBy({ top: 0, left: 100, behavior: "instant" }); // мгновенно вправо
<\/script>`},{title:"Метод window.scrollTo()",content:"Метод window.scrollTo(...) прокручивает страницу до указанных абсолютных координат. Метод поддерживает два способа вызова: два числа или объект с опциями.",addition:`Способы вызова:
1. scrollTo(x, y) — где x и y абсолютные координаты (горизонталь и вертикаль)
2. scrollTo(options) — объект со свойствами top, left, behavior
Значение behavior:
• "auto" — определяется браузером (зависит от CSS-свойства scroll-behavior)
• "smooth" — плавно
• "instant" — мгновенно

Метод проверяет тип первого аргумента — если число, работает как scrollTo(x, y); если объект — как scrollTo(options).`,examples:`<script>
  // Способ 1: два числа (x, y) — абсолютные координаты
  window.scrollTo(0, 500);   // прокрутить к 500px от верха
  window.scrollTo(0, 1000);  // прокрутить к 1000px от верха

  // Способ 2: объект с опциями
  window.scrollTo({ top: 500, left: 0, behavior: "smooth" });   // плавно к 500px
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });     // плавно в начало

  // Прокрутить в начало страницы
  window.scrollTo(0, 0);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
<\/script>`},{title:"Метод scrollIntoView()",content:"Метод elem.scrollIntoView() прокручивает страницу так, чтобы элемент стал видимым. Метод поддерживает два способа вызова: булево значение или объект с опциями.",addition:`Способы вызова:
1. scrollIntoView(alignToTop) — где true (по умолчанию) выравнивает по верхнему краю, false — по нижнему
2. scrollIntoView(options) — объект со свойствами behavior, block, inline
Значение behavior:
• "auto" — определяется браузером (зависит от CSS-свойства scroll-behavior)
• "smooth" — плавно
• "instant" — мгновенно
Значение block (вертикаль): "start" (по умолчанию), "center", "end", "nearest"
Значение inline (горизонталь): "nearest" (по умолчанию), "start", "center", "end"

Метод проверяет тип первого аргумента — если boolean, работает как scrollIntoView(alignToTop); если объект — как scrollIntoView(options).`,examples:`<body style="height: 2000px; width: 3000px;">
  <div id="target" style="margin-top: 1500px; margin-left: 1500px; padding: 20px; background: yellow; width: 200px;">
    Целевой элемент
  </div>
  <script>
    let target = document.getElementById("target");

    // Способ 1: булево значение
    target.scrollIntoView();  // элемент по верхнему краю
    target.scrollIntoView(false); // элемент по нижнему краю

    // Способ 2: объект с опциями
    target.scrollIntoView({ behavior: "smooth", block: "center" }); // плавно в центр
    target.scrollIntoView({ behavior: "smooth", block: "start" }); // плавно наверх
    target.scrollIntoView({ behavior: "smooth", block: "end" }); // плавно вниз
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }); // минимальная прокрутка
  <\/script>
</body>`}]}},H2={value:"coordinates",name:"Координаты",content:{introduction:"Большинство методов JavaScript работают в одной из двух систем координат: относительно окна браузера (clientX/clientY) и относительно документа (pageX/pageY).",sections:[{title:"Координаты относительно окна: метод getBoundingClientRect()",content:`Метод elem.getBoundingClientRect() возвращает координаты в контексте окна для минимального по размеру прямоугольника, который заключает в себе элемент elem, в виде объекта встроенного класса DOMRect.
Основные свойства:
• x — X-координата левого верхнего угла прямоугольника относительно окна
• y — Y-координата левого верхнего угла прямоугольника относительно окна
• width — ширина прямоугольника (включает padding и border)
• height — высота прямоугольника (включает padding и border)
Дополнительные свойства:
• left — левая граница (равно x)
• top — верхняя граница (равно y)
• right — правая граница (x + width)
• bottom — нижняя граница (y + height)`,addition:`Координаты могут быть отрицательными, если элемент за пределами окна.
Internet Explorer и Edge не поддерживают x/y — используйте top/left.`,examples:`<div id="example" style="position: absolute; left: 100px; top: 50px; width: 200px; height: 150px; background: #E8C48F; padding: 20px;">
  Пример элемента
</div>

<script>
  let elem = document.getElementById("example");
  let rect = elem.getBoundingClientRect();

  console.log(rect.x); // 100
  console.log(rect.y); // 50
  console.log(rect.width); // 240 (200 + 20 + 20)
  console.log(rect.height); // 190 (150 + 20 + 20)

  // Дополнительные свойства
  console.log(rect.left); // 100 (равно x)
  console.log(rect.top); // 50  (равно y)
  console.log(rect.right); // 340 (100 + 240)
  console.log(rect.bottom); // 240 (50 + 190)
<\/script>`},{title:"Метод elementFromPoint()",content:"Вызов document.elementFromPoint(x, y) возвращает самый глубоко вложенный элемент в окне, находящийся по координатам (x, y).",addition:`Координаты должны быть в пределах видимой части окна.
Если любая из координат отрицательна или превышает размер окна, возвращается null.`,examples:`<div id="box" style="width: 300px; height: 200px; background: lightblue;">
  Блок в центре
</div>

<script>
  let centerX = document.documentElement.clientWidth / 2;
  let centerY = document.documentElement.clientHeight / 2;

  let elem = document.elementFromPoint(centerX, centerY);
  console.log(elem.tagName); // Элемент в центре

  // Координаты за пределами окна
  let outside = document.elementFromPoint(-10, -10);
  console.log(outside); // null
<\/script>`},{title:"Координаты относительно документа",content:`В этой системе координат отсчёт ведётся от левого верхнего угла документа, а не окна. В CSS это соответствует position:absolute на верхнем уровне вложенности.
Стандартного метода для получения координат относительно документа нет, но можно написать свою функцию:
pageY = clientY + высота прокрученной части документа
pageX = clientX + ширина прокрученной части документа`,addition:"Координаты относительно документа подходят для position:absolute.",examples:`<body style="height: 2000px;">
  <div id="box" style="margin-top: 500px; padding: 20px; background: yellow; display: inline-block;">
    Целевой элемент
  </div>
  <div style="position: fixed; top: 10px; left: 10px; background: white; border: 1px solid black;">
    <button onclick="showCoords()">Показать координаты</button>
  </div>

  <script>
    // Функция получения координат относительно документа
    function getCoords(elem) {
      let box = elem.getBoundingClientRect(); // координаты относительно окна
      return {
        top: box.top + window.pageYOffset, // прибавляем прокрутку
        left: box.left + window.pageXOffset // прибавляем прокрутку
      };
    }

    let box = document.getElementById("box");

    function showCoords() {
      let rect = box.getBoundingClientRect(); // координаты относительно окна
      let docCoords = getCoords(box); // координаты относительно документа

      console.log("Относительно окна (top):", rect.top); // меняется при прокрутке
      console.log("Относительно документа (top):", docCoords.top); // не меняется
    }
  <\/script>
</body>`}]}},P2={value:"introduction-browser-events",name:"Браузерные события",content:{introduction:"Событие — это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы. Событию можно назначить обработчик — функцию, которая сработает, как только событие произошло.",sections:[{title:"Способы назначения обработчиков",content:"Обработчик может быть назначен через HTML-атрибут on<событие>, либо через DOM-свойство. При назначении через атрибут браузер создаёт функцию из содержимого атрибута и записывает её в DOM-свойство.",addition:`Атрибуты HTML нечувствительны к регистру: ONCLICK = onClick = onclick.
В атрибуте нужны скобки: onclick="sayThanks()", а в свойстве — без скобок: elem.onclick = sayThanks.
Убрать обработчик: elem.onclick = null.`,examples:`<!-- Через HTML-атрибут -->
<input type="button" onclick="console.log('Выведется при клике')" value="Нажми меня">

<!-- Через DOM-свойство -->
<input type="button" id="elem" value="Нажми меня">

<script>
  elem.onclick = function() {
    console.log('Выведется при клике');
  };
<\/script>`},{title:"Доступ к элементу через this",content:"Внутри обработчика события this ссылается на текущий элемент, на котором назначен обработчик.",addition:"Можно использовать this.innerHTML, this.style и другие свойства элемента.",examples:'<button onclick="console.log(this.innerHTML)">Нажми меня</button> // При клике выведет - Нажми меня'},{title:"Методы: addEventListener, removeEventListener",content:`Метод addEventListener позволяет назначать несколько обработчиков на одно событие.
Синтаксис: element.addEventListener(event, handler, [options])
• event — имя события (строка)
• handler — функция-обработчик
• options — объект с настройками (once, capture, passive) или булево значение
options:
• once: если true, обработчик автоматически удалится после первого срабатывания
• capture: фаза, на которой сработает обработчик (true — перехват, false — всплытие)
• passive: если true, обработчик никогда не вызовет preventDefault()

Метод removeEventListener удаляет обработчик. Синтаксис тот же, нужно передать ту же функцию и те же опции, что были при добавлении. Иначе удаление не сработает.`,addition:"Событие DOMContentLoaded можно назначить только через addEventListener, потому что у document нет DOM-свойства onDOMContentLoaded.",examples:`<button id="btn1">Несколько обработчиков</button>
<button id="btn2">Один раз (once)</button>
<button id="btn3">С удалением</button>

<script>
  // Пример 1: несколько обработчиков на одно событие
  let btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", () => console.log("1-й обработчик"));
  btn1.addEventListener("click", () => console.log("2-й обработчик"));

  // Пример 2: once — сработает только один раз
  let btn2 = document.getElementById("btn2");
  btn2.addEventListener("click", () => console.log("Этот лог будет только один раз"), { once: true });

  // Пример 3: добавление и удаление обработчика
  let btn3 = document.getElementById("btn3");
  function handler() {
    console.log("Обработчик сработал");
  }
  btn3.addEventListener("click", handler);
  // Удаляем обработчик через 3 секунды
  setTimeout(() => {
    btn3.removeEventListener("click", handler);
    console.log("Обработчик удалён, клики не работают");
  }, 3000);
<\/script>`},{title:"Объект события",content:`Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.
Свойства:
• event.type — тип события (строка)
• event.target — элемент, на котором произошло событие (самый глубокий)
• event.currentTarget — элемент, на котором сработал обработчик (обычно совпадает с this)
• event.clientX / event.clientY — координаты курсора относительно окна (для мыши)
• event.pageX / event.pageY — координаты курсора относительно документа (с учётом прокрутки)
• event.key — какая клавиша нажата (для клавиатуры)
• event.button — какая кнопка мыши нажата (0 — левая, 1 — средняя, 2 — правая)
• event.timeStamp — время создания события в миллисекундах
Методы:
• event.preventDefault() — отменяет действие браузера по умолчанию
• event.stopPropagation() — останавливает всплытие события
• event.stopImmediatePropagation() — останавливает всплытие и предотвращает вызов других обработчиков на этом же элементе`,addition:`Объект события также доступен в HTML-атрибуте через переменную event.
event.currentTarget обычно совпадает с this, но не при стрелочных функциях или bind.`,examples:`<button id="btn">Кликни</button>
<div id="parent" style="padding: 20px; background: lightgray; margin-top: 10px;">
  Родитель
  <button>Дочерний</button>
</div>

<script>
  let btn = document.getElementById("btn");
  let parent = document.getElementById("parent");

  parent.addEventListener("click", (event) => {
    console.log(event.type); // click
    console.log(event.target.tagName); // DIV или BUTTON (смотря по чему кликнули)
    console.log(event.currentTarget.tagName); // DIV
  });

  btn.addEventListener("click", (event) => {
    console.log(event.clientX, event.clientY); // Координаты клика (X,Y)
  });

  let link = document.createElement("a");
  link.href = "https:/example.com";
  link.textContent = "Ссылка (кликни, переход отменён)";
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Переход отменён через preventDefault");
  });
  document.body.appendChild(link);
<\/script>`},{title:"Объект-обработчик: handleEvent",content:"Через addEventListener можно назначить не только функцию, но и объект. В этом случае при событии вызывается метод объекта handleEvent(event).",addition:"handleEvent получает объект события в качестве аргумента.",examples:`<button id="btn">Нажми</button>

<script>
   let handler = {
    count: 0,

    handleEvent(event) {
      this.count++;
      console.log("Событие:", event.type);
      console.log("Счётчик кликов:", this.count);
    }
  };

  let btn = document.getElementById("btn");
  btn.addEventListener("click", handler);
<\/script>`}]}},I2={value:"bubbling-and-capturing",name:"Всплытие и перехват событий",content:{introduction:"Стандарт DOM Events предусматривает три фазы распространения события: фаза перехвата, фаза цели и фаза всплытия. Событие сначала проходит от корня документа до целевого элемента (перехват), затем достигает цели, а после поднимается обратно (всплытие).",sections:[{title:"Всплытие событий",content:`Когда событие происходит на элементе, оно сначала запускается на нём самом, а затем на его родителе, далее на родителе родителя и так далее до корня документа.
Большинство событий всплывают, но не все — например, focus не всплывает.`,addition:`• event.target — это исходный элемент, на котором произошло событие (самый глубокий)
• event.currentTarget (this) — элемент, на котором сработал обработчик
• Если на одном уровне несколько обработчиков, они выполняются в порядке назначения`,examples:`<div id="parent" style="padding: 20px; background: lightgray;">
  Родитель (DIV)
  <button id="child">Кликни меня</button>
</div>

<script>
  let parent = document.getElementById("parent");
  let child = document.getElementById("child");

  child.addEventListener("click", () => console.log("Обработчик на кнопке (target)"));
  parent.addEventListener("click", () => console.log("Обработчик на DIV (всплытие)"));
  document.body.addEventListener("click", () => console.log("Обработчик на BODY"));
<\/script>`},{title:"Перехват событий",content:`Перехват — противоположная всплытию фаза. Событие сначала спускается от корня document к целевому элементу, проходя через всех предков. Обработчики, назначенные с опцией capture: true (или третьим аргументом true), срабатывают на фазе перехвата, а не на фазе всплытия.
Полный цикл распространения события:
1. Фаза перехвата — событие идёт от window к document, затем к html, body и далее вниз до target
2. Фаза цели — событие достигает целевого элемента
3. Фаза всплытия — событие поднимается обратно вверх от target до window`,addition:`Два способа включить перехват:
• addEventListener(event, handler, true) — старый способ
• addEventListener(event, handler, { capture: true }) — современный способ`,examples:`<div id="parent" style="padding: 20px; background: lightgray;">
  Родитель
  <button id="btn">Кликни</button>
</div>

<script>
  let parent = document.getElementById("parent");
  let btn = document.getElementById("btn");

  // Перехват — сработает первым
  parent.addEventListener("click", () => console.log("1. Перехват на DIV"), true);

  // Цель
  btn.addEventListener("click", () => console.log("2. Цель — кнопка"));

  // Всплытие — сработает последним
  parent.addEventListener("click", () => console.log("3. Всплытие на DIV"));
<\/script>`},{title:"Методы: stopPropagation, stopImmediatePropagation",content:`Метод event.stopPropagation() прекращает дальнейшее распространение события — оно не будет всплывать или перехватываться на вышестоящих элементах. Однако другие обработчики на текущем элементе всё равно сработают.
Метод event.stopImmediatePropagation() не только останавливает всплытие, но и предотвращает вызов других обработчиков на том же самом элементе.`,addition:`• stopPropagation() полезен, когда нужно изолировать обработку события от родительских элементов
• stopImmediatePropagation() нужен, когда требуется гарантировать, что никакой другой обработчик не сработает`,examples:`<div id="parent" style="padding: 20px; background: lightgray;">
  Родитель
  <button id="btn1">stopPropagation</button>
  <button id="btn2">stopImmediatePropagation</button>
</div>

<script>
  let parent = document.getElementById("parent");
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");

  // stopPropagation — родитель не увидит, но второй обработчик на кнопке сработает
  btn1.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("btn1: 1-й обработчик (остановил всплытие)");
  });
  btn1.addEventListener("click", () => console.log("btn1: 2-й обработчик (сработал)"));

  // stopImmediatePropagation — второй обработчик на кнопке не сработает
  btn2.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("btn2: 1-й обработчик (остановил всё)");
  });
  btn2.addEventListener("click", () => console.log("btn2: 2-й обработчик (не сработает)"));

  parent.addEventListener("click", () => console.log("Родитель (не сработает)"));
<\/script>`},{title:"Делегирование событий",content:`Делегирование событий — техника, основанная на всплытии. Вместо назначения обработчика каждому элементу, ставим один обработчик на общего предка и ловим события через event.target.

Алгоритм:
1. Вешаем обработчик на контейнер-родитель
2. В обработчике получаем event.target — элемент, на котором произошло событие
3. Проверяем, что target — это нужный нам элемент (или находится внутри него)
4. Если проверка пройдена — выполняем нужное действие`,addition:`Делегирование экономит память (один обработчик вместо многих), избавляет от необходимости назначать/снимать обработчики при добавлении/удалении элементов.
Ограничения: событие должно всплывать (не все события всплывают, например focus).
Можно ставить атрибут (data-***), обработчик вешается на document, при клике проверяется event.target.closest("[data-...]") и выполняется действие. Позволяет добавлять поведение элементам без написания JS-кода.`,examples:`<div id="menu">
  <button data-action="save">Сохранить</button>
  <button data-action="load">Загрузить</button>
  <button data-action="search">Поиск</button>
</div>

<script>
  class Menu {
    constructor(elem) {
      this._elem = elem;
      // .bind(this) нужен, чтобы внутри _onClick this указывал на объект Menu, а не на elem
      elem.addEventListener("click", this._onClick.bind(this));
    }

    save() { console.log("Сохраняем..."); }
    load() { console.log("Загружаем..."); }
    search() { console.log("Ищем..."); }

    _onClick(event) {
      let action = event.target.dataset.action;
      if (action && this[action]) {
        this[action](); // вызов save(), load() или search()
      }
    }
  }

  new Menu(document.getElementById("menu"));
<\/script>`}]}},Y2={value:"default-browser-action",name:"Действия браузера по умолчанию",content:{introduction:"Многие события автоматически влекут за собой действие браузера по умолчанию. При обработке события в JavaScript такое действие часто не требуется — его можно отменить.",sections:[{title:"Отмена действия браузера",content:`Есть два способа отменить действие браузера:
• Основной способ — использовать метод event.preventDefault()
• Если обработчик назначен через on<событие> (не через addEventListener), можно вернуть false из обработчика
Обычно возвращаемое значение обработчика игнорируется. Единственное исключение — это return false из обработчика, назначенного через on<событие>.`,addition:`• event.preventDefault() работает в любых обработчиках (addEventListener, on<событие>)
• return false работает только при назначении через on<событие>
• return в других случаях (addEventListener) игнорируется и никак не обрабатывается`,examples:`<a href="https:/example.com" id="link1">Ссылка с return false (onclick)</a><br>
<a href="https:/example.com" id="link2">Ссылка с preventDefault (onclick)</a><br>
<a href="https:/example.com" id="link3">Ссылка с addEventListener</a><br>
<input type="checkbox" id="checkbox" checked> Чекбокс (preventDefault отменяет изменение)

<script>
  // Способ 1: return false в HTML-атрибуте
  document.getElementById("link1").setAttribute("onclick", "return false");

  // Способ 2: event.preventDefault() в HTML-атрибуте
  document.getElementById("link2").setAttribute("onclick", "event.preventDefault()");

  // Способ 3: addEventListener с preventDefault
  let link3 = document.getElementById("link3");
  link3.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Переход отменён через addEventListener");
  });

  // preventDefault на чекбоксе (отмена изменения состояния)
  let checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Изменение чекбокса отменено");
  });
<\/script>`},{title:"События, вытекающие из других",content:"Некоторые события естественным образом вытекают из других. Если отменить первое событие (через preventDefault или return false), то последующие не возникнут.",addition:"Отмена mousedown предотвращает focus при клике мышью, но клавиатурная навигация (Tab) не затрагивается.",examples:`<input value="Фокус работает" onfocus="this.value=''">

<input onmousedown="return false" onfocus="this.value=''" value="Кликни меня">

<script>
  // Первый input: при клике фокусируется и очищается через onfocus
  // Второй input: mousedown отменён, фокус через клик не сработает
  // Но Tab всё ещё переведёт фокус на второй input
<\/script>`},{title:"Опция passive для обработчика",content:"Опция passive: true для addEventListener сообщает браузеру, что обработчик не будет вызывать preventDefault(). Это позволяет браузеру немедленно выполнять действие по умолчанию (например, прокрутку) без ожидания завершения обработчика, что повышает плавность интерфейса.",addition:`• Особенно важно для событий touchmove на мобильных устройствах
• В Chrome и Firefox passive: true включён по умолчанию для touchstart и touchmove
• Если вызвать preventDefault() в passive-обработчике, он будет проигнорирован`,examples:`<div id="scrollable" style="height: 100px; overflow: auto; border: 1px solid #ccc;">
  <div style="height: 500px; background: linear-gradient(white, gray);">
    Прокручиваемый контент (на мобильных устройствах)
  </div>
</div>

<script>
  let div = document.getElementById("scrollable");

  // passive: true — браузер не ждёт выполнения обработчика
  div.addEventListener("touchmove", (event) => {
    // предотвращать прокрутку здесь нельзя — браузер уже начал её
    console.log("Прокрутка...");
  }, { passive: true });

  // Аналог для ПК: обработчик scroll с passive
  div.addEventListener("wheel", (event) => {
    console.log("Колёсико мыши");
  }, { passive: true });
<\/script>`},{title:"Свойство event.defaultPrevented",content:"Свойство event.defaultPrevented возвращает true, если действие по умолчанию было предотвращено (через preventDefault), и false, если нет. Это позволяет проверять, был ли уже обработан текущий сценарий выше по цепочке.",addition:"defaultPrevented — альтернатива stopPropagation() для координации обработчиков без блокировки всплытия",examples:`<button id="btn">Правый клик на кнопке</button>
<p>Правый клик на тексте</p>

<script>
  let btn = document.getElementById("btn");

  btn.oncontextmenu = (event) => {
    event.preventDefault();
    console.log("Меню кнопки (событие отменено)");
  };

  document.oncontextmenu = (event) => {
    // Если событие уже отменено на кнопке — ничего не делаем
    if (event.defaultPrevented) return;

    event.preventDefault();
    console.log("Меню документа (событие отменено)");
  };
<\/script>`}]}},F2={value:"dispatch-events",name:"Генерация пользовательских событий",content:{introduction:"События можно не только обрабатывать, но и создавать самостоятельно из JavaScript-кода, а затем запускать на любых элементах.",sections:[{title:"Конструктор Event",content:`Встроенные классы для событий формируют иерархию, корнем которой является класс Event:
let event = new Event(type[, options]);
• type — тип события
• options — объект с тремя необязательными свойствами:
  • bubbles: true/false — если true, событие всплывает
  • cancelable: true/false — если true, можно отменить действие по умолчанию
  • composed: true/false — если true, событие всплывает за пределы Shadow DOM
По умолчанию все три свойства установлены в false.`,addition:`• Конструктор Event — базовый, подходит для любых типов событий
• При создании встроенных событий лучше использовать специальные конструкторы (MouseEvent, KeyboardEvent и т.д.)
• Для пользовательских событий рекомендуется CustomEvent`,examples:`<script>
  // Создание простого события
  let event = new Event("my-event", {
    bubbles: true,
    cancelable: true
  });
  console.log(event.type); // "my-event"
  console.log(event.bubbles); // true
<\/script>`},{title:"Метод dispatchEvent",content:`После создания объекта события его нужно запустить на элементе, вызвав метод elem.dispatchEvent(event). Обработчики отреагируют на него, как на обычное браузерное событие. Если при создании указан флаг bubbles, то событие будет всплывать.
Свойство event.isTrusted позволяет отличить настоящее событие от сгенерированного кодом: оно true для реальных действий пользователя и false для созданных через dispatchEvent.`,addition:"dispatchEvent синхронно запускает обработчики и возвращает false, если обработчик вызвал preventDefault() и событие было cancelable",examples:`<button id="btn">Кнопка</button>

<script>
  let btn = document.getElementById("btn");

  // Обработчик с preventDefault
  btn.addEventListener("click", (event) => {
    console.log("Клик!");
    console.log(event.isTrusted); // false
    event.preventDefault();
  });

  // Генерируем событие с cancelable: true
  let event = new Event("click", { bubbles: true, cancelable: true });
  let result = btn.dispatchEvent(event);
  console.log(result); // false
<\/script>`},{title:"Всплытие пользовательских событий",content:"Пользовательские события могут всплывать. Для этого при создании нужно установить флаг bubbles: true. Механизм всплытия идентичен встроенным событиям.",addition:`• Без флага bubbles: true событие не всплывает
• Для своих событий используйте addEventListener — on<событие> не работает
• Фазы всплытия и погружения работают одинаково для любых событий`,examples:`<div id="parent">
  <button id="btn">Нажми</button>
</div>

<script>
  let parent = document.getElementById("parent");
  let btn = document.getElementById("btn");

  // Обработчик на родителе
  parent.addEventListener("my-event", () => {
    console.log("Событие всплыло до родителя");
  });

  // Обработчик на кнопке
  btn.addEventListener("my-event", () => {
    console.log("Событие на кнопке");
  });

  // Запускаем событие с bubbles: true
  let event = new Event("my-event", { bubbles: true });
  btn.dispatchEvent(event);
  // Вывод: "Событие на кнопке" → "Событие всплыло до родителя"
<\/script>`},{title:"Специальные конструкторы",content:"Для некоторых типов событий есть свои конструкторы: UIEvent, FocusEvent, MouseEvent, WheelEvent, KeyboardEvent и другие. Стоит использовать их вместо Event, если мы хотим создавать такие события. Такой конструктор позволяет указать стандартные свойства для данного типа. Обычный конструктор Event эти свойства проигнорирует.",addition:`• new MouseEvent("click") даёт доступ к clientX, clientY, button и т.д.
• new KeyboardEvent("keydown") — к key, code и т.д.
• С Event можно задать свойства вручную после создания (не рекомендуется)
• Браузерные события всегда имеют правильный тип`,examples:`<button id="btn">Кнопка</button>

<script>
  let btn = document.getElementById("btn");

  // MouseEvent с координатами
  let clickEvent = new MouseEvent("click", {
    bubbles: true,
    clientX: 150,
    clientY: 30
  });

  // KeyboardEvent с клавишей
  let keyEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    key: "Enter",
    code: "Enter"
  });

  btn.addEventListener("click", (event) => {
    console.log(event.clientX, event.clientY); // 150, 30
  });

  btn.addEventListener("keydown", (event) => {
    console.log(event.key, event.code); // Enter, Enter
  });

  // Запускаем события
  btn.dispatchEvent(clickEvent);
  btn.dispatchEvent(keyEvent);
<\/script>`},{title:"Конструктор CustomEvent",content:"Для генерации пользовательских событий следует использовать конструктор CustomEvent. Технически он идентичен Event, но у второго аргумента есть дополнительное свойство detail. Это позволяет избежать конфликтов с другими свойствами события.",addition:`• detail может содержать любые данные
• Обработчики получают данные через event.detail
• В обычный Event тоже можно записать свои свойства, но это не по стандарту`,examples:`<button id="btn">Отправить данные</button>

<script>
  let btn = document.getElementById("btn");

  // Обработчик получает данные из detail
  btn.addEventListener("user-login", (event) => {
    console.log(event.detail.name); // Вася
    console.log(event.detail.age); // 25
  });

  // Генерируем событие с данными
  btn.dispatchEvent(new CustomEvent("user-login", {
    detail: { name: "Вася", age: 25 }
  }));
<\/script>`},{title:"Синхронная обработка вложенных событий",content:"Обычно события обрабатываются асинхронно: новое событие ждёт окончания обработки текущего. Но если событие инициировано из обработчика другого события через dispatchEvent, то вложенное событие обрабатывается синхронно — управление сначала переходит во вложенный обработчик, а потом возвращается обратно.",addition:`• dispatchEvent внутри обработчика запускает вложенное событие синхронно
• Порядок: внешний код → вложенное событие → продолжение внешнего кода
• Чтобы сделать обработку асинхронной, оберните dispatchEvent в setTimeout(() => ..., 0)`,examples:`<button id="btn">Нажми</button>

<script>
  let btn = document.getElementById("btn");

  btn.onclick = function() {
    console.log("Внешний обработчик");

    // dispatchEvent срабатывает синхронно
    btn.dispatchEvent(new CustomEvent("my-event"));

    console.log("Продолжение внешнего обработчика");
  };

  btn.addEventListener("my-event", () => {
    console.log("Вложенный обработчик");
  });

  // Вывод: Внешний обработчик → Вложенный обработчик → Продолжение внешнего обработчика
<\/script>`}]}},q2={value:"mouse-events-basics",name:"События мыши",content:{introduction:"События мыши — основа взаимодействия с интерфейсом. Они генерируются не только мышью, но и эмулируются на сенсорных экранах для совместимости.",sections:[{title:"Типы событий мыши и порядок срабатывания",content:`Основные события мыши:
• mousedown/mouseup — кнопка нажата/отпущена над элементом
• mouseover/mouseout — курсор появился над элементом / ушёл с него
• mousemove — каждое движение мыши над элементом
• click — mousedown + mouseup левой кнопкой на одном элементе
• dblclick — двойной клик (после click)
• contextmenu — попытка открыть контекстное меню (правая кнопка)
Порядок срабатывания фиксирован:
• Одиночный клик: mousedown → mouseup → click
• Двойной клик: mousedown → mouseup → click → mousedown → mouseup → click → dblclick`,addition:`contextmenu не совсем событие мыши — может вызываться спецклавишей на клавиатуре.
Если между событиями прошло больше 1 секунды, dblclick может не сработать.`,examples:`<button id="demoBtn">Кликни меня</button>

<script>
  const btn = document.getElementById("demoBtn");

  // Левый клик: mousedown → mouseup → click
  btn.addEventListener("mousedown", () => console.log("mousedown"));
  btn.addEventListener("mouseup", () => console.log("mouseup"));
  btn.addEventListener("click", () => console.log("click"));

  // Двойной левый клик: mousedown → mouseup → click → mousedown → mouseup → click → dblclick
  btn.addEventListener("dblclick", () => console.log("dblclick"));

  // Правый клик: mousedown → mouseup → contextmenu
  btn.addEventListener("contextmenu", () => console.log("contextmenu"));
<\/script>`},{title:"Кнопки мыши",content:`События клика имеют свойство event.button, которое позволяет определить, какая кнопка мыши нажата.
Значения event.button:
• 0 — левая кнопка (основная)
• 1 — средняя кнопка (вспомогательная)
• 2 — правая кнопка (вторичная)
• 3 — кнопка X1 (назад)
• 4 — кнопка X2 (вперёд)`,addition:`Существует также event.buttons — битовая маска всех нажатых в данный момент кнопок.
Свойство event.which устарело и не должно использоваться (1 — левая, 2 — средняя, 3 — правая).`,examples:`<button id="btn">Нажми любую кнопку мыши</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("mousedown", (event) => {
    // Отменяем стандартное поведение браузера (например, автопрокрутку для колесика)
    event.preventDefault();
    // event.button: 0 — левая, 1 — средняя (колесико), 2 — правая, 3 — X1 (назад), 4 — X2 (вперёд)
    const buttons = { 0: "левая", 1: "средняя (колесико)", 2: "правая", 3: "X1 (назад)", 4: "X2 (вперёд)" };
    console.log(buttons[event.button], " - ", event.button);
    // При левой кнопке: "левая - 0"
    // При средней (колесико): "средняя (колесико) - 1"
    // При правой: "правая - 2"
    // При X1 (назад): "X1 (назад) - 3"
    // При X2 (вперёд): "X2 (вперёд) - 4"
  });
<\/script>`},{title:"Модификаторы: shift, alt, ctrl, meta",content:`Все события мыши содержат информацию о нажатых клавишах-модификаторах:
• event.shiftKey — Shift
• event.altKey — Alt (Opt для Mac)
• event.ctrlKey — Ctrl
• event.metaKey — Cmd для Mac
Свойства равны true, если во время события была нажата соответствующая клавиша.`,addition:`На Mac вместо Ctrl обычно используется Cmd. Поэтому для кроссплатформенности проверяйте if (event.ctrlKey || event.metaKey).
На MacOS Ctrl+клик интерпретируется как правый клик (contextmenu), а не click.`,examples:`<button id="btn">Кликни с Shift, Alt, Ctrl или Cmd</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", (event) => {
    let modifiers = [];
    if (event.shiftKey) modifiers.push("Shift");
    if (event.altKey) modifiers.push("Alt");
    if (event.ctrlKey) modifiers.push("Ctrl");
    if (event.metaKey) modifiers.push("Meta (Cmd)");

    if (modifiers.length === 0) {
      console.log("Клик без модификаторов");
    } else {
      console.log(\`Клик с модификаторами: \${modifiers.join(" + ")}\`);
    }
  });
<\/script>`},{title:"Координаты: clientX/Y, pageX/Y",content:`Все события мыши имеют координаты двух видов:
• clientX/clientY — относительно окна (как position: fixed)
• pageX/pageY — относительно документа (учитывают прокрутку)
Когда страница прокручивается, clientX/Y меняются, а pageX/Y остаются неизменными.`,addition:"При скролле clientX/Y отсчитываются от левого верхнего угла текущего окна, pageX/Y — от левого верхнего угла документа.",examples:`<button id="coordBtn">Наведи на меня мышь</button>

<script>
  let btn = document.getElementById("coordBtn");

  btn.addEventListener("mousemove", (event) => {
    console.log(\`client: \${event.clientX}, \${event.clientY} | page: \${event.pageX}, \${event.pageY}\`);
  });
<\/script>`},{title:"Отключаем выделение",content:`Двойной клик и перетаскивание с зажатой кнопкой выделяют текст. Чтобы отменить это, нужно предотвратить действие браузера по умолчанию для mousedown.
Самый надёжный способ — вернуть false из обработчика onmousedown, что отменяет выделение.`,addition:"Если нужно запретить копирование, используйте событие oncopy с return false.",examples:`<b id="noSelect" ondblclick="console.log('Двойной клик!')">
  Сделай двойной клик или веди мышкой с зажатой кнопкой
</b>

<script>
  let el = document.getElementById("noSelect");
  el.addEventListener("mousedown", (e) => {
    e.preventDefault();
    console.log("mousedown — выделение отменено");
  });
  el.addEventListener("dblclick", () => console.log("dblclick"));
  // При зажатии и движении мыши: "mousedown — выделение отменено" (один раз)
  // При двойном клике: "mousedown — выделение отменено" (дважды) → "dblclick" → "Двойной клик!"
<\/script>`},{title:"События: mouseover, mouseout и свойство relatedTarget",content:"События mouseover и mouseout возникают, когда курсор заходит на элемент или покидает его. У них есть свойство relatedTarget — элемент, с которого курсор пришёл (для mouseover) или на который ушёл (для mouseout). Свойство relatedTarget может быть null, если курсор пришёл из-за пределов окна браузера или ушёл за окно.",addition:`• События mousemove генерируются не для каждого пикселя, а с некоторой периодичностью. Если пользователь двигает мышь очень быстро, некоторые промежуточные элементы могут быть пропущены — события mouseover/mouseout на них не сработают.
• Если mouseover на элементе был, то mouseout обязательно последует.
• Событие mouseout на родителе происходит также, когда курсор переходит с родителя на его потомка. С точки зрения браузера курсор покидает родителя, переходя на дочерний элемент (хотя визуально он всё ещё внутри родительской области).`,examples:`<div id="parent" style="padding: 20px; background: lightgray; display: inline-block;">
  Родитель
  <button id="child">Дочерний элемент</button>
</div>

<script>
  let parent = document.getElementById("parent");

  parent.addEventListener("mouseover", (event) => {
    console.log(\`mouseover: target = \${event.target.tagName}, relatedTarget = \${event.relatedTarget?.tagName || "null"}\`);
  });
  parent.addEventListener("mouseout", (event) => {
    console.log(\`mouseout: target = \${event.target.tagName}, relatedTarget = \${event.relatedTarget?.tagName || "null"}\`);
  });
  // При переходе с родителя (DIV) на кнопку (BUTTON):
  // mouseout: target = DIV, relatedTarget = BUTTON
  // mouseover: target = BUTTON, relatedTarget = DIV
  // При переходе с кнопки (BUTTON) на родителя (DIV):
  // mouseout: target = BUTTON, relatedTarget = DIV
  // mouseover: target = DIV, relatedTarget = BUTTON
<\/script>`},{title:"События: mouseenter, mouseleave",content:"События mouseenter и mouseleave похожи на mouseover и mouseout, но не имеют двух ключевых особенностей: они не всплывают и не срабатывают при переходах на потомков. mouseenter — курсор зашёл на элемент (включая его детей), mouseleave — полностью покинул элемент.",addition:"Так как mouseenter и mouseleave не всплывают, их нельзя использовать для делегирования. Если нужно обрабатывать переходы между множеством дочерних элементов (например, ячейками таблицы), используют всплывающие mouseover и mouseout с дополнительной проверкой, что мы действительно перешли между интересующими элементами (через relatedTarget и closest).",examples:`<div id="enterArea" style="padding: 20px; background: lightyellow;">
  Родитель
  <button id="innerBtn">Потомок</button>
</div>

<script>
  let area = document.getElementById("enterArea");

  area.addEventListener("mouseenter", () => console.log("mouseenter (зашёл на родителя)"));
  area.addEventListener("mouseleave", () => console.log("mouseleave (ушёл с родителя)"));
  // При переходе на кнопку: mouseenter не сработает повторно
<\/script>`},{title:"Drag’n’Drop с событиями мыши",content:`Drag’n’Drop (перетаскивание) реализуется с помощью событий мыши: mousedown → mousemove → mouseup. Базовый алгоритм:
1. При mousedown — запомнить сдвиг курсора относительно элемента, сделать его абсолютно позиционированным
2. При mousemove на document — перемещать элемент, меняя left/top
3. При mouseup — остановить перенос и убрать обработчики
Для определения цели переноса используют document.elementFromPoint(x, y), предварительно скрыв перетаскиваемый элемент.`,addition:`• mousemove нужно отслеживать на document, а не на элементе, чтобы не потерять курсор при быстром движении
• Отключить встроенный браузерный Drag’n’Drop: elem.ondragstart = () => false
• Сдвиг курсора (shiftX/shiftY) — разница между координатами курсора и левым верхним углом элемента — позволяет сохранить относительное положение захвата
• Для поиска цели под курсором: временно скрыть перетаскиваемый элемент, вызвать elementFromPoint, затем снова показать`,examples:`<div id="gate" style="width: 100px; height: 60px; background: lightgreen;">Ворота</div>
<div id="ball" style="width: 40px; height: 40px; background: red; border-radius: 50%;"></div>

<script>
  const ball = document.getElementById("ball");
  let currentDroppable = null;

  // 1. Начинаем перетаскивание при нажатии на мяч
  ball.onmousedown = (e) => {
    // Запоминаем, за какую часть мяча взяли (сдвиг курсора относительно левого верхнего угла)
    const shiftX = e.clientX - ball.getBoundingClientRect().left;
    const shiftY = e.clientY - ball.getBoundingClientRect().top;

    // Делаем мяч абсолютно позиционированным и поднимаем над остальным
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;

    // Перемещаем мяч под курсор с учётом сдвига
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + "px";
      ball.style.top = pageY - shiftY + "px";
    }

    moveAt(e.pageX, e.pageY);

    // 2. Следим за движением мыши на document (чтобы не потерять курсор)
    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);

      // Определяем, над каким элементом сейчас курсор
      ball.hidden = true; // временно прячем мяч, чтобы он не заслонял цели
      let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
      ball.hidden = false;

      if (!elemBelow) return;

      // Проверяем, является ли элемент (или его родитель) целью
      let droppableBelow = elemBelow.closest("#gate");

      // Если цель сменилась — обновляем подсветку
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) currentDroppable.style.background = "lightgreen";
        currentDroppable = droppableBelow;
        if (currentDroppable) currentDroppable.style.background = "lightcoral";
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    // 3. Завершаем перетаскивание при отпускании кнопки
    ball.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
      ball.onmouseup = null;
      if (currentDroppable) console.log("Попадание!");
      currentDroppable = null;
    };
  };

  // Отключаем встроенный браузерный Drag’n’Drop, чтобы не мешал
  ball.ondragstart = () => false;
<\/script>`}]}},V2={value:"pointer-events",name:"События указателя",content:{introduction:"События указателя (Pointer Events) — современный способ обработки ввода с различных устройств: мыши, пера, сенсорного экрана. Они предоставляют единый набор событий для всех типов указывающих устройств.",sections:[{title:"Типы событий указателя",content:`Схема именования событий указателя повторяет события мыши. Для каждого mouse<события> есть соответствующее pointer<событие>:
• pointerdown (mousedown) — указатель нажат
• pointerup (mouseup) — указатель отпущен
• pointermove (mousemove) — движение указателя
• pointerover (mouseover) — указатель зашёл на элемент
• pointerout (mouseout) — указатель покинул элемент
• pointerenter (mouseenter) — указатель вошёл в элемент
• pointerleave (mouseleave) — указатель покинул элемент
• pointercancel — действие прервано браузером
• gotpointercapture — элемент получил захват указателя
• lostpointercapture — элемент потерял захват указателя
Можно заменить mouse<события> на pointer<события> в коде — с мышью всё продолжит работать, а поддержка сенсорных устройств улучшится.`,addition:"Для старых браузеров (IE10, Safari 12 и ниже) может понадобиться полифил. В современных браузерах Pointer Events Level 2 поддерживаются полностью.",examples:`<button id="btn">Нажми или коснись</button>

<script>
  const btn = document.getElementById("btn");

  // pointerdown срабатывает при нажатии (мышь, палец, перо)
  btn.addEventListener("pointerdown", () => console.log("pointerdown"));
  // pointerup — при отпускании
  btn.addEventListener("pointerup", () => console.log("pointerup"));
  // click — по-прежнему работает и срабатывает после pointerup
  btn.addEventListener("click", () => console.log("click"));
  // Порядок: pointerdown → pointerup → click
<\/script>`},{title:"Свойства событий указателя",content:`События указателя содержат все свойства событий мыши и несколько дополнительных:
• pointerId — уникальный идентификатор указателя, позволяет обрабатывать мульти-тач
• pointerType — тип устройства: "mouse", "pen" или "touch"
• isPrimary — true для основного указателя (первый палец в мульти-тач)
• width / height — ширина и высота области соприкосновения (для пальца). Для мыши — 1
• pressure — степень давления от 0 до 1. Для устройств без поддержки — 0.5 (нажато) или 0
• tangentialPressure — нормализованное тангенциальное давление
• tiltX, tiltY, twist — свойства пера (наклон и поворот)`,addition:"Свойства width, height, pressure, tangentialPressure, tiltX, tiltY, twist поддерживаются не всеми устройствами и редко используются.",examples:`<button id="infoBtn">Наведи или нажми</button>

<script>
  const btn = document.getElementById("infoBtn");

  btn.addEventListener("pointerdown", (event) => {
    const info = [
      \`pointerId: \${event.pointerId}\`,
      \`pointerType: \${event.pointerType}\`,
      \`isPrimary: \${event.isPrimary}\`,
      \`pressure: \${event.pressure}\`,
      \`width: \${event.width}, height: \${event.height}\`,
    ];
    console.log(info.join(" | "));
    // Для мыши: pointerId: 1 | pointerType: mouse | isPrimary: true | pressure: 0.5 | width: 1, height: 1
    // Для касания пальцем: pointerType: touch | width: ~30, height: ~30 | pressure: ~0-1 (зависит от силы)
    // При мульти-тач: второй палец будет иметь pointerId: 2, isPrimary: false
  });
<\/script>`},{title:"Мульти-тач",content:`События указателя поддерживают мульти-тач с помощью свойств pointerId и isPrimary:
• При касании первым пальцем: pointerdown с isPrimary=true и уникальным pointerId
• При касании вторым и последующими пальцами: pointerdown с isPrimary=false и своим pointerId для каждого пальца
• pointermove и pointerup для каждого пальца срабатывают с тем же pointerId, который был при pointerdown
События мыши всегда имеют isPrimary=true и один и тот же pointerId.`,addition:"pointerId присваивается не устройству, а каждому касающемуся пальцу. Если коснуться экрана 5 пальцами, будет 5 событий pointerdown с разными pointerId.",examples:`<script>
  // Отслеживание нескольких касаний
  document.addEventListener("pointerdown", (event) => {
    console.log(
      \`Палец \${event.pointerId}: \` +
      \`\${event.isPrimary ? "основной" : "дополнительный"} \` +
      \`на позиции (\${event.clientX}, \${event.clientY})\`
    );
  });
  // При касании первым пальцем: "Палец 2: основной на позиции (100, 200)"
  // При касании вторым пальцем: "Палец 3: дополнительный на позиции (300, 400)"
<\/script>`},{title:"Событие pointercancel",content:`pointercancel возникает, когда действие с указателем прерывается браузером, и события указателя больше не генерируются:
• Указывающее устройство физически выключено
• Изменилась ориентация устройства
• Браузер решил сам обработать действие (жест масштабирования, встроенный Drag'n'Drop)
Чтобы избежать pointercancel при реализации Drag'n'Drop:
1. Отключить встроенный Drag'n'Drop: elem.ondragstart = () => false
2. Добавить CSS: #elem { touch-action: none } — для сенсорных устройств`,addition:"touch-action в CSS запрещает браузеру обрабатывать жесты (масштабирование, прокрутку) на указанном элементе. Это необходимо для корректной работы перетаскивания на сенсорных экранах.",examples:`<div id="ball" style="width: 40px; height: 40px; position: absolute; top: 100px; left: 100px; touch-action: none;">

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");

    // Без отключения встроенного Drag’n’Drop браузер перехватит перетаскивание и вызовет pointercancel (используется для перетаскивания картинок и ссылок).
    ball.ondragstart = () => false;

    ball.addEventListener("pointerdown", () => console.log("pointerdown"));
    ball.addEventListener("pointermove", () => console.log("pointermove"));
    ball.addEventListener("pointerup", () => console.log("pointerup"));
    ball.addEventListener("pointercancel", () => console.log("pointercancel (перехвачено браузером)"));
  });
<\/script>`},{title:"Методы: setPointerCapture, releasePointerCapture",content:`Захват указателя позволяет привязать все последующие события указателя к определённому элементу, независимо от того, где они происходят в документе.
• elem.setPointerCapture(pointerId) — перенаправляет все события с данным pointerId на elem (target становится elem)
• elem.releasePointerCapture(pointerId) — явное освобождение захвата
Привязка автоматически отменяется при pointerup, pointercancel или удалении элемента из документа.
Захват упрощает Drag'n'Drop: не нужно вешать обработчики на document, нет побочных эффектов (другие обработчики pointermove не вызываются случайно).`,addition:"setPointerCapture влияет только на target/currentTarget события. Все остальные свойства остаются корректными.",examples:`<div id="slider" style="width: 200px; height: 20px; background: #ddd; border-radius: 10px; position: relative;">
  <div id="thumb" style="width: 20px; height: 30px; background: #09f; border-radius: 5px; position: absolute; top: -5px; left: 0;"></div>
</div>

<script>
  let thumb = document.getElementById("thumb");
  let slider = document.getElementById("slider");

  thumb.addEventListener("pointerdown", (e) => {
    // Захватываем указатель на thumb
    thumb.setPointerCapture(e.pointerId);

    function onPointerMove(e) {
      // Даже если курсор улетит за пределы thumb — ползунок продолжит двигаться
      let newLeft = e.clientX - slider.getBoundingClientRect().left;
      newLeft = Math.max(0, Math.min(newLeft, slider.clientWidth - thumb.clientWidth));
      thumb.style.left = newLeft + "px";
    }

    thumb.addEventListener("pointermove", onPointerMove);
    thumb.addEventListener("pointerup", () => {
      thumb.removeEventListener("pointermove", onPointerMove);
    }, { once: true });
  });
  // Без setPointerCapture при движении мыши вне thumb — ползунок бы останавливался
<\/script>`},{title:"События: gotpointercapture, lostpointercapture",content:`Два события, связанные с захватом указателя:
• gotpointercapture — срабатывает на элементе, когда setPointerCapture успешно включил захват
• lostpointercapture — срабатывает при освобождении захвата: явно через releasePointerCapture, автоматически при pointerup/pointercancel или удалении элемента из документа`,addition:"Полезны для изменения внешнего вида элемента при захвате (подсветка, курсор) и для отладки.",examples:`<div id="area" style="width: 100px; height: 100px; background: lightblue; touch-action: none;">
  Захвати меня
</div>

<script>
  const area = document.getElementById("area");

  // gotpointercapture срабатывает после setPointerCapture
  area.addEventListener("gotpointercapture", () => {
    console.log("gotpointercapture — захват включён");
    area.style.background = "lightgreen"; // подсветка при захвате
  });

  // lostpointercapture срабатывает при освобождении захвата (pointerup, releasePointerCapture и т.д.)
  area.addEventListener("lostpointercapture", () => {
    console.log("lostpointercapture — захват снят");
    area.style.background = "lightblue"; // возвращаем цвет
  });

  area.addEventListener("pointerdown", (event) => {
    // Включаем захват указателя
    area.setPointerCapture(event.pointerId);
  });
  // Порядок: pointerdown → gotpointercapture → ... → pointerup → lostpointercapture
<\/script>`}]}},X2={value:"keyboard-events",name:"Клавиатура: keydown и keyup",content:{introduction:"События клавиатуры позволяют реагировать на нажатие клавиш. Их следует использовать только для обработки взаимодействия с клавиатурой (горячие клавиши, стрелки).",sections:[{title:"События: keydown, keyup",content:`keydown — происходит при нажатии клавиши.
keyup — происходит при отпускании клавиши.
Оба события срабатывают для любых клавиш: букв, цифр, специальных (Shift, Ctrl, Enter, Backspace, стрелки и т.д.).
Исключение — клавиша Fn (на ноутбуках), она работает на уровне OC и не генерирует событий.`,addition:"События клавиатуры всплывают, поэтому можно повесить один обработчик на document.",examples:`<input id="keyInput" placeholder="Нажми любую клавишу">

<script>
  let input = document.getElementById("keyInput");

  // keydown срабатывает при нажатии клавиши
  input.addEventListener("keydown", () => {
    console.log("keydown");
  });

  // keyup срабатывает при отпускании клавиши
  input.addEventListener("keyup", () => {
    console.log("keyup");
  });

  // При нажатии и отпускании любой клавиши:
  // keydown
  // keyup
  // При долгом нажатии: несколько keydown → один keyup
<\/script>`},{title:"Свойства: event.code/key",content:`event.key — символьное значение клавиши (строка). Для буквенных клавиш возвращает сам символ ("z", "Z", "й", "Й" и т.д.). Зависит от раскладки и регистра.
event.code — физический код клавиши, привязанный к её расположению на клавиатуре. Не зависит ни от раскладки, ни от регистра.`,addition:`Регистр в event.code важен: "KeyZ", а не "keyZ".
Для горячих клавиш (Ctrl+S, Ctrl+Z) надёжнее использовать event.code, чтобы комбинация работала независимо от раскладки (но не всегда: например, в немецкой раскладке Y имеет код KeyZ).`,examples:`<input id="keyCodeInput" placeholder="Нажми клавишу">

<script>
  let input = document.getElementById("keyCodeInput");

  input.addEventListener("keydown", (e) => {
    console.log(\`key: "\${e.key}" | code: "\${e.code}"\`);
    // Примеры вывода:
    // Русская раскладка, буква "й" → key: "й", code: "KeyQ"
    // Английская раскладка, "q" → key: "q", code: "KeyQ"
    // Английская с Shift, "Q" → key: "Q", code: "KeyQ"
    // Цифра "5" на основном блоке → key: "5", code: "Digit5"
    // Стрелка вверх → key: "ArrowUp", code: "ArrowUp"
    // Пробел → key: " ", code: "Space"
    // Enter → key: "Enter", code: "Enter"
  });
<\/script>`},{title:"Автоповтор",content:`При долгом нажатии клавиши возникает автоповтор: keydown срабатывает многократно, а keyup — только один раз при отпускании.
Свойство event.repeat равно true для повторных keydown, вызванных автоповтором.`,addition:"Автоповтор отсутствует на мобильных устройствах. Для keyup event.repeat всегда false.",examples:`<input id="repeatInput" placeholder="Зажми любую букву">

<script>
  let input = document.getElementById("repeatInput");

  input.addEventListener("keydown", (e) => {
    console.log(e.repeat ? "автоповтор" : "первое нажатие", e.key);
  });

  input.addEventListener("keyup", () => {
    console.log("keyup");
  });

  // При долгом нажатии на "A":
  // первое нажатие a
  // автоповтор a
  // автоповтор a
  // ...
  // keyup
<\/script>`}]}},J2={value:"form-elements",name:"Получение и изменение значений формы, отправка данных",content:{introduction:"Формы и элементы управления имеют множество специальных свойств. Они предоставляют удобный доступ к данным формы, позволяют управлять состоянием полей, а также контролировать отправку данных на сервер.",sections:[{title:"Навигация: формы и элементы",content:`Формы в документе входят в специальную коллекцию document.forms. Это «именованная» коллекция: можно получить форму как по её имени, так и по порядковому номеру в документе.
При получении формы, любой элемент доступен в именованной коллекции form.elements. Эти навигационные свойства не зависят от структуры тегов внутри формы — все элементы управления, как бы глубоко они ни находились, доступны в коллекции form.elements.
Существует сокращённая запись: доступ к элементу можно получить через form[name], без явного обращения к form.elements.`,addition:`document.forms.my — форма с name="my"
document.forms[0] — первая форма на странице

Если в форме несколько элементов с одинаковым name, form.elements[name] вернёт коллекцию.
Если у элемента изменить атрибут name, в сокращённой записи он будет доступен и под старым, и под новым именем.`,examples:`<form name="my" id="myForm">
  <input name="one" value="1">
  <input name="two" value="2">
  <input type="radio" name="gender" value="male"> Муж
  <input type="radio" name="gender" value="female"> Жен
</form>

<script>
  // 1. document.forms по имени
  const form = document.forms.my;
  console.log(form.elements.one.value); // "1"

  // 2. document.forms по индексу
  const firstForm = document.forms[0];
  console.log(firstForm.elements.two.value); // "2"

  // 3. Сокращённая запись form.name
  console.log(form.one.value); // "1" (то же, что form.elements.one)
  console.log(form.one === form.elements.one); // true

  // 4. Коллекция для radio (несколько элементов с одним name)
  const radios = form.elements.gender;
  console.log(radios[0].value); // "male"
  console.log(radios[1].value); // "female"
<\/script>`},{title:"<fieldset> как «подформа»",content:"Форма может содержать один или несколько элементов <fieldset>, которые служат для группировки элементов управления. У <fieldset> есть свойство elements, которое работает аналогично form.elements — возвращает коллекцию вложенных элементов управления.",addition:"Можно получить элемент как через форму, так и через fieldset — результат будет одинаковым.",examples:`<form name="myForm">
  <fieldset name="userFields">
    <input name="login" type="text" placeholder="Логин">
    <input name="email" type="email" placeholder="Email">
  </fieldset>
</form>

<script>
  // Получаем форму через document.forms по имени
  const form = document.forms.myForm;

  // Доступ к элементу через форму
  console.log(form.elements.login); // <input name="login">

  // Получаем fieldset по имени
  const fieldset = form.elements.userFields;
  console.log(fieldset); // <fieldset name="userFields">

  // Доступ к элементу через fieldset (это тот же элемент, что и через форму)
  console.log(fieldset.elements.login === form.elements.login); // true

  // У fieldset тоже есть коллекция elements
  console.log(fieldset.elements.email); // <input name="email">
<\/script>`},{title:"Обратная ссылка: element.form",content:"Любой элемент управления внутри формы имеет свойство .form, которое ссылается на родительскую форму. Это обратная связь: форма ссылается на свои элементы через elements, а элементы ссылаются обратно на форму через .form.",addition:"Свойство .form есть у всех элементов управления (input, select, textarea, button) и ссылается на родительскую форму. Позволяет получить доступ к форме из любого её элемента.",examples:`<form name="myForm">
  <input name="login" value="admin">
</form>

<script>
  // Получаем элемент через форму
  const input = document.forms.myForm.elements.login;
  // Через element.form получаем обратно форму
  console.log(input.form); // <form name="myForm">
  console.log(input.form === document.forms.myForm); // true
<\/script>`},{title:"input и textarea: чтение и изменение значения",content:`Для получения или изменения содержимого элементов input и textarea используется свойство .value (строка).
Для чекбоксов (checkbox) и радиокнопок (radio) — свойство .checked (булево значение).`,addition:"У textarea нельзя использовать .innerHTML — он возвращает только изначальное содержимое, а не текущее значение. Всегда используйте .value.",examples:`<input type="text" id="nameInput" value="Привет">
<input type="checkbox" id="agreeInput" checked>
<textarea id="messageInput">Текст</textarea>

<script>
  const nameInput = document.getElementById("nameInput");
  const agreeInput = document.getElementById("agreeInput");
  const messageInput = document.getElementById("messageInput");

  // Чтение значений
  console.log(nameInput.value); // "Привет"
  console.log(agreeInput.checked); // true
  console.log(messageInput.value); // "Текст"

  // Изменение значений
  nameInput.value = "Новое значение";
  agreeInput.checked = false;
  messageInput.value = "Новый текст";
  console.log(nameInput.value); // "Новое значение"
  console.log(agreeInput.checked); // false
  console.log(messageInput.value); // "Новый текст"
<\/script>`},{title:"select и option: чтение и изменение значения",content:`Элемент <select> имеет три важных свойства:
• select.options — коллекция подэлементов <option>
• select.value — значение выбранного в данный момент <option>
• select.selectedIndex — номер выбранного <option>

Три способа установить значение в <select>:
1. option.selected = true
2. select.value = значение
3. select.selectedIndex = номер

Для создания нового <option> используется короткий синтаксис:
new Option(text, value, defaultSelected, selected)
• text — текст внутри <option>
• value — значение
• defaultSelected — если true, ставится HTML-атрибут selected
• selected — если true, элемент будет выбранным`,addition:`Для select с атрибутом multiple (множественный выбор) нужно использовать option.selected.
Свойства <option>:
• option.selected — выбрана ли опция
• option.index — номер опции среди других в <select>
• option.value — значение опции
• option.text — содержимое опции (то, что видит пользователь)`,examples:`<select id="single">
  <option value="apple">Яблоко</option>
  <option value="pear">Груша</option>
  <option value="banana">Банан</option>
</select>

<select id="multipleSelect" multiple>
  <option value="blues" selected>Блюз</option>
  <option value="rock" selected>Рок</option>
  <option value="classic">Классика</option>
</select>

<script>
  // Три способа выбрать "Банан" в single select
  const single = document.getElementById("single");
  single.options[2].selected = true;
  // single.selectedIndex = 2;
  // single.value = "banana";

  // Получение всех выбранных значений из multiple select
  const multiple = document.getElementById("multipleSelect");
  const selected = Array.from(multiple.options)
    .filter(opt => opt.selected)
    .map(opt => opt.value);
  console.log(selected); // ["blues", "rock"]

  // Создание и добавление новой опции через new Option
  const newOption = new Option("Классика", "classic");
  single.append(newOption);
  newOption.selected = true;
  console.log(single.value); // "classic"
<\/script>`},{title:"Отправка формы: submit",content:`Событие submit срабатывает при попытке отправки формы (нажатие Enter в поле или кнопка с type="submit"). Используется для валидации данных перед отправкой.
Метод form.submit() отправляет форму из JavaScript. В отличие от реальной отправки, событие submit при этом не генерируется.`,addition:`• event.preventDefault() в обработчике submit отменяет отправку
• При нажатии Enter в текстовом поле также генерируется click на кнопке submit`,examples:`<form id="testForm">
  <input type="text" name="login" placeholder="Логин">
  <input type="submit" id="submitBtn" value="Отправить">
</form>
<button id="dynamicSubmit">Отправить из JS</button>

<script>
  const form = document.getElementById("testForm");
  const submitBtn = document.getElementById("submitBtn");

  // Демонстрация: при нажатии Enter в поле генерируется click на кнопке submit
  submitBtn.onclick = () => console.log("click на кнопке submit");

  // Обработка отправки
  form.onsubmit = (event) => {
    event.preventDefault();
    console.log("submit: форма отправлена - логин", form.elements.login.value);
  };

  // Программная отправка (submit не генерируется)
  document.getElementById("dynamicSubmit").onclick = () => {
    console.log("Вызов form.submit() — событие submit не сгенерируется");
    form.submit();
  };
<\/script>`}]}},G2={value:"focus-blur",name:"Фокусировка: focus/blur",content:{introduction:"Элемент получает фокус (focus), при клике по нему или использовании клавиши Tab. Потеря фокуса (blur) происходит при клике в другое место или при переключении на другой элемент.",sections:[{title:"События: focus, blur",content:"Событие focus вызывается в момент фокусировки, а blur — когда элемент теряет фокус. Используются для валидации, подсказок, подсветки активного поля, скрытия ошибок и тд.",addition:`Фокус могут получать не только поля ввода, но и ссылки, кнопки и любые элементы с атрибутом tabindex.
HTML5-валидация (required, pattern) не требует JS, но focus/blur дают гибкость: динамическая проверка, сложные условия, отправка на сервер.`,examples:`<input type="text" id="nameInput" placeholder="Введите имя">

<script>
  const input = document.getElementById("nameInput");

  input.onfocus = () => {
    console.log("focus — поле получило фокус");
  };

  input.onblur = () => {
    console.log("blur — поле потеряло фокус");
  };
  // При клике на поле: focus — поле получило фокус
  // При клике вне поля: blur — поле потеряло фокус
<\/script>`},{title:"Методы: focus, blur",content:"Методы elem.focus() и elem.blur() программно устанавливают и снимают фокус с элемента.",addition:`Нельзя отменить потерю фокуса через event.preventDefault() в onblur — событие уже произошло.
Если элемент удалить из DOM, фокус теряется без возможности возврата.`,examples:`<input type="text" id="emailInput" placeholder="Введите email (должен содержать @)">

<script>
  const input = document.getElementById("emailInput");

  input.onblur = () => {
    console.log("blur — поле потеряло фокус");
    if (!input.value.includes("@")) {
      console.log("Возвращаем фокус на поле: email должен содержать @");
      input.focus();
    }
  };

  input.onfocus = () => {
    console.log("focus — поле получило фокус");
  };
  // При потере фокуса с неверным email: focus → blur → Ошибка → focus
<\/script>`},{title:"Включаем фокусировку на любом элементе: tabindex",content:`Многие элементы по умолчанию не поддерживают фокусировку. Метод elem.focus() не работает для них, и события focus/blur никогда не срабатывают. Это можно изменить HTML-атрибутом tabindex.
Порядок перебора Tab: сначала идут элементы с tabindex от 1 и выше в порядке возрастания, затем элементы без tabindex (обычные input, button). При совпадающих tabindex — в порядке появления в документе.`,addition:`tabindex="0" — ставит элемент в один ряд с обычными элементами (после tabindex >= 1).
tabindex="-1" — фокус только программно через elem.focus(), клавиша Tab игнорирует.

Свойство elem.tabIndex тоже работает для установки tabindex через JavaScript.`,examples:`<div tabindex="0" id="first">Элемент с tabindex="0" (нажми Tab)</div>
<div tabindex="1" id="second">Элемент с tabindex="1"</div>
<div tabindex="2" id="third">Элемент с tabindex="2"</div>
<div tabindex="-1" id="fourth">Элемент с tabindex="-1" (только программно)</div>

<script>
  // Программный фокус на элемент с tabindex="-1"
  const fourth = document.getElementById("fourth");
  fourth.focus();
  console.log("Фокус установлен на элемент с tabindex=-1");

  // Обработчики событий фокуса
  const elements = [first, second, third, fourth];
  elements.forEach(el => {
    el.onfocus = () => console.log(\`focus на: \${el.id}\`);
    el.onblur = () => console.log(\`blur на: \${el.id}\`);
  });
  // Порядок навигации Tab: second (1) → third (2) → first (0)
<\/script>`},{title:"События: focusin, focusout",content:`События focus и blur не всплывают. Это значит, что обработчик на форме не сработает при фокусировке на вложенном елементе. Существует два решения:
1) Использовать фазу перехвата (третий аргумент addEventListener — true)
2) Использовать события focusin и focusout — они аналогичны focus и blur, но всплывают`,addition:`focusin/focusout используются только с addEventListener, не с on<событие>.

Текущий элемент с фокусом можно получить из document.activeElement.`,examples:`<form id="myForm">
  <input type="text" name="name" placeholder="Имя">
  <input type="text" name="surname" placeholder="Фамилия">
</form>

<script>
  const form = document.getElementById("myForm");

  // focusin и focusout всплывают, поэтому обработчик на форме сработает
  form.addEventListener("focusin", () => console.log("focusin: элемент внутри формы получил фокус"));
  form.addEventListener("focusout", () => console.log("focusout: элемент внутри формы потерял фокус"));

  // document.activeElement показывает текущий элемент с фокусом
  form.addEventListener("focusin", () => {
    console.log("Текущий элемент с фокусом:", document.activeElement.tagName, document.activeElement.name);
  });
  // При клике на поле "Имя": focusin → вывод активного элемента
<\/script>`}]}},K2={value:"events-change-input",name:"События: change, input, cut, copy, paste",content:{introduction:"События change и input срабатывают при изменении содержимого полей формы. События cut, copy и paste связаны с работой буфера обмена (вырезание, копирование, вставка).",sections:[{title:"Событие change",content:"Событие change срабатывает по окончании изменения элемента. Для текстовых <input> это означает, что событие происходит при потере фокуса.",addition:"Для select, input type=checkbox и input type=radio событие change запускается сразу после изменения значения.",examples:`<input type="text" id="textInput" placeholder="Введите текст и кликните вне поля">
<select id="selectInput">
  <option value="">Выберите опцию</option>
  <option value="1">Опция 1</option>
  <option value="2">Опция 2</option>
</select>
<input type="checkbox" id="checkInput"> Чекбокс

<script>
  const text = document.getElementById("textInput");
  const select = document.getElementById("selectInput");
  const check = document.getElementById("checkInput");

  text.onchange = () => console.log(\`change (text): \${text.value}\`);
  select.onchange = () => console.log(\`change (select): \${select.value}\`);
  check.onchange = () => console.log(\`change (checkbox): \${check.checked}\`);
  // При вводе текста и клике вне поля: change (text): ...
  // При выборе опции из select: change (select): ...
  // При клике на чекбокс: change (checkbox): true/false
<\/script>`},{title:"Событие input",content:"Событие input срабатывает каждый раз при изменении значения элемента. В отличие от событий клавиатуры, оно работает при любых изменениях: вставка мышью, распознавание речи при диктовке текста и т.д.",addition:`• Событие input — лучший выбор для обработки каждого изменения в <input>.
• Событие не происходит при нажатии клавиш, не меняющих значение (например, стрелки влево/вправо).
• Нельзя предотвратить событие через event.preventDefault() — оно происходит уже после изменения значения.`,examples:`<input type="text" id="textInput" placeholder="Начните печатать">

<script>
  const input = document.getElementById("textInput");

  input.oninput = () => console.log(\`input: \${input.value}\`);
  // При каждом вводе символа: input: текст
  // При вставке через Ctrl+V: input: вставленный текст
<\/script>`},{title:"События: cut, copy, paste",content:"События cut, copy, paste происходят при вырезании, копировании и вставке данных соответственно. Они относятся к классу ClipboardEvent и обеспечивают доступ к буферу обмена через event.clipboardData.",addition:`Можно предотвратить действие по умолчанию через event.preventDefault().
Буфер обмена работает глобально (на уровне ОС). Большинство браузеров разрешают доступ к нему только в рамках действий пользователя (например, в onclick).
Генерировать «пользовательские» события буфера обмена через dispatchEvent нельзя во всех браузерах, кроме Firefox.`,examples:`<input type="text" id="clipInput" value="Попробуй вырезать, скопировать или вставить текст">

<script>
  const input = document.getElementById("clipInput");

  input.oncut = () => console.log("cut");
  input.oncopy = () => console.log("copy");
  input.onpaste = () => console.log("paste");
  // При вырезании: cut
  // При копировании: copy
  // При вставке: paste
<\/script>`}]}},Z2={value:"scroll",name:"Прокрутка",content:{introduction:"Событие прокрутки scroll позволяет реагировать на прокрутку страницы или элемента.",sections:[{title:"Отслеживание прокрутки",content:"Событие scroll срабатывает как на window, так и на других элементах, на которых включена прокрутка. Для отслеживания текущей позиции прокрутки используется pageYOffset (или window.scrollY).",addition:`scroll срабатывает часто и может вызываться много раз в секунду, поэтому в обработчике не должно быть тяжёлых вычислений. Если они нужны — используйте throttle/debounce.
pageYOffset — это псевдоним для window.scrollY. Оба свойства хранят текущее смещение прокрутки в пикселях.`,examples:`<div style="height: 2000px; background: linear-gradient(white, gray);">Прокрутите вниз</div>

<script>
  window.addEventListener("scroll", () => {
    console.log("Прокрутка: pageYOffset =", window.pageYOffset);
  });
  // При прокрутке в консоль выводится:
  // Прокрутка: pageYOffset = 0
  // Прокрутка: pageYOffset = 50
  // Прокрутка: pageYOffset = 100 ...
<\/script>`},{title:"Предотвращение прокрутки",content:"Нельзя предотвратить прокрутку, используя event.preventDefault() в обработчике onscroll, потому что он срабатывает после того, как прокрутка уже произошла.",addition:`Более надёжный способ полностью заблокировать прокрутку — использовать CSS-свойство overflow:
• overflow: hidden — на элементе полностью отключает прокрутку
• overflow-y: hidden — отключает только вертикальную прокрутку
• overflow-x: hidden — отключает только горизонтальную прокрутку
Этот подход работает для всех возможных способов инициировать прокрутку (клавиши, мышь, скролл-бар, тач).`,examples:`<!-- Предотвращение прокрутки через отмену keydown для PageUp/PageDown -->
<div id="scrollable" style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
  <div style="height: 500px;">
    Строка 1<br>Строка 2<br>Строка 3<br>
    Строка 4<br>Строка 5<br>Строка 6<br>
    Строка 7<br>Строка 8<br>Строка 9<br>
  </div>
</div>

<script>
  // Отмена прокрутки клавишами PageUp/PageDown
  document.addEventListener("keydown", function(event) {
    if (event.key === "PageUp" || event.key === "PageDown") {
      event.preventDefault();
      console.log("Прокрутка клавишами отменена");
    }
  });

  // Блокировка прокрутки колёсиком мыши
  document.addEventListener("wheel", function(event) {
    event.preventDefault();
    console.log("Прокрутка колёсиком отменена");
  }, { passive: false });

  // Полное отключение прокрутки через CSS
  // document.body.style.overflow = "hidden";
<\/script>`}]}},Q2={value:"script-async-defer",name:"Атрибуты: async, defer",content:{introduction:"По умолчанию браузер блокирует построение DOM при встрече тега <script> — он должен сначала загрузить и выполнить скрипт. Это ведёт к двум проблемам: скрипты не видят DOM-элементы ниже себя, а объёмные скрипты блокируют отрисовку страницы. Атрибуты async и defer решают эти проблемы, позволяя управлять загрузкой и выполнением скриптов.",sections:[{title:"Атрибут defer",content:`Атрибут defer сообщает браузеру продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а запустить его — только после того, как DOM-дерево будет полностью построено.
• Скрипты с defer никогда не блокируют страницу
• Всегда выполняются, когда DOM готов, но до события DOMContentLoaded
• Сохраняют порядок относительно друг друга, как обычные скрипты — даже если маленький скрипт загрузится первым, он будет ждать выполнения предыдущего`,addition:"Атрибут defer предназначен только для внешних скриптов. Если в теге <script> нет src, defer игнорируется.",examples:`<p>...содержимое перед скриптом...</p>
<script defer src="long.js"><\/script>
<p>...содержимое после скрипта...</p>
<!-- Содержимое отобразится сразу, скрипт выполнится после построения DOM -->

<script>
  document.addEventListener('DOMContentLoaded', () => console.log('DOM готов'));
<\/script>
<script defer src="long.js"><\/script>
// DOMContentLoaded дождётся выполнения отложенного скрипта`},{title:"Атрибут async",content:`Атрибут async делает скрипт полностью независимым:
• Страница не ждёт асинхронные скрипты — содержимое обрабатывается и отображается сразу
• DOMContentLoaded и асинхронные скрипты не ждут друг друга — событие может произойти как до, так и после async-скрипта
• Остальные скрипты не ждут async, и async не ждёт другие скрипты
• Порядок выполнения — по загрузке: какой скрипт загрузился первым, тот и выполняется первым`,addition:"Атрибут async предназначен только для внешних скриптов. Если в теге <script> нет src, async игнорируется.",examples:`<p>...содержимое перед скриптами...</p>
<script async src="long.js"><\/script>
<script async src="small.js"><\/script>
<p>...содержимое после скриптов...</p>
<!-- Содержимое отображается сразу -->
<!-- small.js скорее всего загрузится и выполнится первым -->`},{title:"Динамически загружаемые скрипты",content:`Скрипт можно добавить динамически, создав элемент script через JavaScript. Он начнёт загружаться сразу после добавления в документ.
По умолчанию динамически загружаемые скрипты ведут себя как async — они никого не ждут, и их никто не ждёт. Порядок выполнения определяется загрузкой: какой загрузился первым, тот и выполняется первым.`,addition:"Чтобы переключить динамический скрипт на поведение defer (последовательное выполнение в порядке добавления в документ), нужно явно установить свойство async в false.",examples:`<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Динамически загружаемый скрипт (async по умолчанию)
    let script = document.createElement("script");
    script.src = "/article/script-async-defer/long.js";
    document.body.append(script);

    // Принудительное отключение async — скрипт выполнится в порядке документа
    function loadScript(src) {
      let script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.append(script);
    }
    loadScript("/article/script-async-defer/long.js");
    loadScript("/article/script-async-defer/small.js");
    // long.js выполнится первым, хотя small.js может загрузиться быстрее
  });
<\/script>`}]}},$2={value:"onload-onerror",name:"Загрузка ресурсов: события - load, error",content:{introduction:"Браузер позволяет отслеживать загрузку сторонних ресурсов. Для этого существуют два события: load — успешная загрузка, и error — во время загрузки произошла ошибка.",sections:[{title:"Событие load",content:"Событие load на теге script срабатывает после того, как скрипт был загружен и выполнен. Это позволяет вызвать функцию из загруженного скрипта сразу после его готовности.",addition:`Обработчик onload отслеживает только сам процесс загрузки.
Большинство ресурсов начинают загружаться только после добавления в документ. Исключение — тег <img>: изображение начинает загружаться сразу при установке атрибута src, даже если ещё не добавлено в DOM.
Для тега <iframe> событие load срабатывает по окончании загрузки как при успехе, так и при ошибке.`,examples:`<script>
  let script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";
  document.head.append(script);
  script.onload = function() {
    console.log(_.VERSION); // версия библиотеки
  };
<\/script>`},{title:"Событие error",content:"Событие error на теге script срабатывает, если загрузка скрипта провалилась: скрипт не найден (404), сервер недоступен или сетевые проблемы.",addition:`Обработчик onerror на теге script отслеживает только ошибки загрузки (404, сеть).
Глобальные ошибки выполнения можно поймать только через window.onerror.
Параметры window.onerror:
• message — сообщение об ошибке
• source — URL скрипта
• lineno — номер строки
• colno — номер колонки
• error — объект ошибки
Через onerror на теге script нельзя получить HTTP-статус.`,examples:`<script>
  let script = document.createElement("script");
  script.src = "https://example.com/404.js"; // несуществующий скрипт
  document.head.append(script);
  // onerror сработает из-за ошибки загрузки (404)
  script.onerror = () => console.log("Ошибка загрузки:", script.src);
<\/script>

<script>
  // Глобальный обработчик для ошибок выполнения
  window.onerror = (message, source, lineno, colno, error) => {
    console.log("Ошибка выполнения:", message);
  };
<\/script>`},{title:"Ошибка в скрипте с другого источника",content:"Из-за политики Same Origin Policy (одинакового источника), если в скрипте с другого домена возникает ошибка, браузер не показывает её детали. Это сделано в целях безопасности, чтобы скрипт не мог «выведать» информацию о другом сайте.",addition:`Чтобы получить полный отчёт об ошибке, нужно выполнить два условия:
1. На теге script — указать атрибут crossorigin.
2. На сервере — настроить CORS-заголовки.
У атрибута crossorigin есть три режима:
• anonymous — браузер отправит запрос без куки и авторизации. Сервер должен ответить с заголовком Access-Control-Allow-Origin: * (или указать конкретный ваш домен).
• use-credentials — браузер будет отправлять куки и авторизацию. Сервер должен ответить с заголовками Access-Control-Allow-Origin: <ваш домен> и Access-Control-Allow-Credentials: true.
• атрибут отсутствует — доступ к деталям ошибки запрещён.
Сам скрипт при этом всё равно загрузится и выполнится. Эти настройки влияют только на уровень доступа к отладочной информации и данным ответа.`,examples:`<script>
  window.onerror = (message, url, line, col, errorObj) => {
    console.log("Ошибка:", message);
    console.log("URL:", url);
    console.log("Строка:", line, "Колонка:", col);
  };
<\/script>

<!-- 1. Без crossorigin: в логах будет только "Script error." -->
<script src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"><\/script>

<!-- 2. С crossorigin="anonymous": увидим полный отчёт об ошибке (файл, номер строки, стек) -->
<script crossorigin="anonymous" src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"><\/script>`}]}},W2={value:"mutation-observer",name:"MutationObserver: наблюдатель за изменениями",content:{introduction:"MutationObserver — это встроенный объект, наблюдающий за DOM-элементом и запускающий колбэк при изменениях. Позволяет реагировать на любые изменения в DOM-поддереве: появление/удаление узлов, изменение атрибутов и текстового содержимого.",sections:[{title:"MutationObserver",content:`Создание наблюдателя: new MutationObserver(callback). После создания его нужно прикрепить к DOM-узлу вызовом observer.observe(node, config).
Колбэк получает два параметра:
1. mutations — массив объектов MutationRecord (записи об изменениях)
2. observer — сам наблюдатель (экземпляр MutationObserver)
Параметры config (булевы):
• childList — изменения в непосредственных детях node
• subtree — во всех потомках node
• attributes — в атрибутах node
• attributeFilter — массив имён атрибутов для наблюдения только за выбранными
• characterData — наблюдать за node.data (текстовое содержимое)
• characterDataOldValue — передавать и старое, и новое значение node.data
• attributeOldValue — передавать и старое, и новое значение атрибута`,addition:"Колбэк выполняется после изменений в DOM. Объекты MutationRecord содержат детали каждого изменения (type, target, addedNodes, removedNodes, attributeName, oldValue и т.д.)",examples:`<div id="target">Текст</div>
<button id="changeBtn">Изменить текст</button>

<script>
  const target = document.getElementById("target");

  // Создаём наблюдатель
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(record => {
      console.log(record.type); // "childList"
    });
  });

  // Настраиваем наблюдение за добавлением/удалением дочерних узлов
  observer.observe(target, {
    childList: true, // следим за добавлением/удалением дочерних узлов
    subtree: true, // следим за всеми потомками
    characterData: true // следим за изменением текстовых узлов
  });

  // При клике меняем текст — сработает childList (замена текстового узла)
  document.getElementById("changeBtn").onclick = () => {
    target.innerText = "Новый текст " + Date.now();
  };
<\/script>`},{title:"MutationRecord",content:`Объекты MutationRecord имеют следующие свойства:
• type — тип изменения: "attributes", "characterData" или "childList"
• target — где произошло изменение: элемент для "attributes", текстовый узел для "characterData", элемент для "childList"
• addedNodes / removedNodes — добавленные / удалённые узлы
• previousSibling / nextSibling — соседние узлы для добавленных / удалённых
• attributeName / attributeNamespace — имя / пространство имён изменённого атрибута
• oldValue — предыдущее значение (только для атрибутов или текста, если включены соответствующие опции)`,addition:"При удалении элемента браузер может соединить соседние текстовые узлы в один — поэтому количество записей может отличаться от ожидаемого.",examples:`<div id="elem">Привет, <b>меня</b> зовут Вася</div>
<button id="changeBtn">Изменить текст внутри b</button>
<button id="deleteBtn">Удалить b</button>

<script>
  const elem = document.getElementById("elem");
  const bold = elem.querySelector("b");

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(record => {
      console.log("type:", record.type);
      if (record.type === "characterData") {
        // Изменение текста внутри текстового узла
        console.log("Старое значение:", record.oldValue);
        console.log("Новое значение:", record.target.nodeValue);
      }
      if (record.type === "childList") {
        // Добавление или удаление дочерних элементов
        if (record.removedNodes.length) {
          console.log("Удалённые узлы:", record.removedNodes[0]?.tagName);
        }
      }
    });
  });

  // Настраиваем наблюдение
  observer.observe(elem, {
    childList: true, // следить за добавлением/удалением детей
    subtree: true, // следить за всеми потомками
    characterData: true, // следить за изменением текстовых узлов
    characterDataOldValue: true // запоминать старое значение текста
  });

  // При клике меняем текст внутри b
  document.getElementById("changeBtn").onclick = () => {
    bold.innerText = "тебя"; // изменится текстовый узел внутри b
  };

  // При клике удаляем b
  document.getElementById("deleteBtn").onclick = () => {
    bold.remove(); // удалится элемент b (дочерний элемент div)
  };
<\/script>`},{title:"Дополнительные методы и сборка мусора",content:`• observer.disconnect() — останавливает наблюдение
• observer.takeRecords() — получает список необработанных записей изменений, которые произошли, но колбэк для них ещё не выполнился

Объекты MutationObserver используют слабые ссылки на узлы, за которыми наблюдают. Если узел удалён из DOM и больше не достижим, он будет удалён из памяти независимо от наличия наблюдателя.`,addition:"Метод takeRecords полезен перед вызовом disconnect, чтобы не потерять последние изменения.",examples:`<script>
  // Останавливаем наблюдение
  observer.disconnect();
  // Получаем все неприменённые записи об изменениях
  const mutationRecords = observer.takeRecords();
  // Обрабатываем оставшиеся записи
  mutationRecords.forEach(record => console.log(record));
<\/script>`}]}},eS={value:"page-loading",name:"Загрузка страницы: события - DOMContentLoaded, load, beforeunload, unload",content:{introduction:"У жизненного цикла HTML-страницы есть три важных события: DOMContentLoaded — браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы ещё могут быть не загружены; load — браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.); beforeunload/unload — пользователь покидает страницу.",sections:[{title:"Событие DOMContentLoaded",content:`Событие DOMContentLoaded срабатывает на объекте document, когда DOM-дерево полностью построено. Внешние ресурсы, такие как картинки и стили, могут быть ещё не загружены.
Назначается только через addEventListener, так как у document нет DOM-свойства onDOMContentLoaded.
Внешние таблицы стилей не блокируют DOM. Но если после стилей есть скрипт, то скрипт дожидается загрузки стилей, а DOMContentLoaded дожидается скрипта.`,addition:"DOMContentLoaded дожидается выполнения всех синхронных скриптов. Скрипты с async и динамически созданные скрипты не блокируют DOMContentLoaded.",examples:`<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // Этот скрипт выполнится только после загрузки style.css
  console.log("Скрипт после стилей");
<\/script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded — DOM готов");
  });
<\/script>
<img src="image.jpg">
// Порядок: загрузка стилей → выполнение скриптов → DOMContentLoaded → загрузка картинки`},{title:"Событие load",content:"Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы. Это событие доступно через свойство onload или addEventListener.",addition:"В отличие от DOMContentLoaded, window.onload дожидается всех изображений.",examples:`<script>
  window.onload = function() {
    console.log('Страница загружена');
    // К этому моменту все картинки загружены
  };
<\/script>

<img src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">`},{title:"Событие unload",content:`Когда посетитель покидает страницу, на объекте window генерируется событие unload.
Для отправки данных существует метод navigator.sendBeacon(url, data), который посылает данные в фоне, не задерживая переход.`,addition:"sendBeacon отправляет POST-запрос. Размер данных ограничен 64 Кб. Ответ сервера обработать не получится, так как браузер уже покинул страницу.",examples:`<script>
  window.addEventListener("unload", () => {
    console.log("unload — страница закрыта");
    navigator.sendBeacon("/analytics", JSON.stringify({ time: Date.now() }));
  });
  // При закрытии страницы в консоль выведется "unload — страница закрыта"
  // Данные отправятся на сервер, даже если страница уже закрывается
<\/script>`},{title:"Событие beforeunload",content:"Если посетитель собирается уйти со страницы или закрыть окно, обработчик beforeunload попросит дополнительное подтверждение. Если отменить событие, браузер спросит пользователя, уверен ли он.",addition:"По историческим причинам возврат непустой строки тоже считался отменой события. Современные браузеры не показывают строку-сообщение — они показывают стандартное системное сообщение.",examples:`<script>
  window.addEventListener("beforeunload", (event) => {
    console.log("beforeunload — попытка уйти со страницы");
    event.preventDefault();
    // Браузер покажет сообщение: "Вы уверены, что хотите покинуть страницу?"
  });
<\/script>`},{title:"Свойство readyState и порядок событий загрузки",content:`Свойство document.readyState показывает текущее состояние загрузки страницы. Доступно только для чтения.
Значения readyState:
• "loading" — страница загружается
• "interactive" — DOM построен (аналог DOMContentLoaded)
• "complete" — страница и все ресурсы загружены (аналог window.onload)
Событие readystatechange срабатывает при каждом изменении readyState.`,addition:`Типичный порядок событий при загрузке документа:
1. readyState: loading (начальное состояние)
2. readyState: interactive (DOM построен)
3. DOMContentLoaded
4. iframe onload
5. img onload
6. readyState: complete (все ресурсы загружены)
7. window onload

readyState становится interactive прямо перед DOMContentLoaded. readyState становится complete одновременно с загрузкой последнего ресурса (но window.onload срабатывает после всех load-обработчиков).`,examples:`<script>
  // Начальное состояние (ещё ничего не загружено)
  console.log(document.readyState); // loading

  // Срабатывает при каждом изменении readyState
  document.addEventListener("readystatechange", () => {
    console.log("readyState:", document.readyState);
  });

  // DOM построен, но ресурсы ещё грузятся
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
  });

  // Всё загружено (картинки, стили, iframe)
  window.addEventListener("load", () => {
    console.log("window onload");
  });
<\/script>

<iframe src="about:blank" onload="console.log('iframe onload')"></iframe>

<img src="https://en.jsx.cx/clipart/train.gif" id="img">

<script>
  // Картинка загрузится асинхронно
  document.getElementById("img").onload = () => console.log("img onload");
<\/script>`}]}},tS=[D2,A2,C2,_2,L2,U2,k2,z2,B2,H2,P2,I2,Y2,F2,q2,X2,V2,Z2,G2,J2,K2,eS,Q2,$2,W2],nS="_filtersContainer_6m2x1_1",oS={filtersContainer:nS},aS=()=>{const{searchQuery:a,searchChange:s,searchReset:i,loadedCount:c,loadMore:d}=Bs();return w.jsx(zs,{title:"Среда выполнения: Браузер",filtersSlot:w.jsx("div",{className:oS.filtersContainer,children:w.jsx(_u,{searchQuery:a,onSearchChange:s,onSearchReset:i})}),children:w.jsx(Xg,{loadedCount:c,loadMore:d,searchQuery:a,topics:tS})})},ig=[{path:sn.MAIN,label:"Главная страница"},{path:"#",id:"java-script",label:"Java Script",children:[{path:sn.JAVA_SCRIPT,label:"Основы языка"},{path:sn.JAVA_SCRIPT_METHODS,label:"API"},{path:sn.JAVA_SCRIPT_BROWSER,label:"Браузер"}]},{path:"#",id:"type-script",label:"Type Script",children:[{path:sn.TYPE_SCRIPT_UTILITY_TYPES,label:"Utility Types"}]}],lS=(a,s)=>{for(const i of a){if(i.path===s)return i.id||null;if(i.children&&i.children.length>0){for(const c of i.children)if(c.path===s)return i.id||null}}return null},rS="_navItem_hmy33_1",sS="_nested_hmy33_19",iS="_active_hmy33_23",cS="_content_hmy33_28",Ns={navItem:rS,nested:sS,active:iS,content:cS},cg=({to:a,children:s,isActive:i=!1,variant:c="default",hasChildren:d=!1,isExpanded:m=!1,onClick:f,...h})=>w.jsx(Au,{to:a,className:er(Ns.navItem,Ns[c],i&&Ns.active),onClick:f,...h,children:w.jsxs("span",{className:Ns.content,children:[s,d&&w.jsx(ks,{isOpen:m})]})}),uS="_sidebar_1ynxk_1",dS="_hidden_1ynxk_11",mS="_header_1ynxk_15",pS="_headerTop_1ynxk_21",fS="_title_1ynxk_28",gS="_toggle_1ynxk_36",hS="_subtitle_1ynxk_54",yS="_nav_1ynxk_59",bS="_navList_1ynxk_67",vS="_navItem_1ynxk_71",xS="_childrenList_1ynxk_75",an={sidebar:uS,hidden:dS,header:mS,headerTop:pS,title:fS,toggle:gS,subtitle:hS,nav:yS,navList:bS,navItem:vS,childrenList:xS},Gg=({isExpanded:a=!1})=>w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",style:{transform:a?"rotate(180deg)":"rotate(0deg)"},children:w.jsx("path",{d:"M 2.5 8 L 0 10.5 L 2.5 13 L 4 13 L 2 11 L 19 11 L 19 10 L 2 10 L 4 8 L 2.5 8 z",fill:"currentColor"})}),SS=()=>{const a=Nn(),[s,i]=N.useState(()=>{const p=lS(ig,a.pathname);return p?[p]:[]}),[c,d]=N.useState(!1),m=p=>a.pathname===p,f=p=>{i(E=>E.includes(p)?E.filter(x=>x!==p):[...E,p])},h=()=>{d(p=>!p)},y=()=>{window.innerWidth<=768&&d(!0)};return w.jsxs("div",{className:er(an.sidebar,c&&an.hidden),children:[w.jsxs("div",{className:an.header,children:[w.jsxs("div",{className:an.headerTop,children:[!c&&w.jsx("h2",{className:an.title,children:"Навигация"}),w.jsx("button",{className:an.toggle,onClick:h,children:w.jsx(Gg,{isExpanded:c})})]}),!c&&w.jsx("p",{className:an.subtitle,children:"Выберите раздел"})]}),!c&&w.jsx("nav",{className:an.nav,children:w.jsx("ul",{className:an.navList,children:ig.map(p=>{const E=p.children&&p.children.length>0,x=p.id?s.includes(p.id):!1;return w.jsxs("li",{className:an.navItem,children:[w.jsx(cg,{to:p.path,isActive:m(p.path),hasChildren:E,isExpanded:x,onClick:E?()=>f(p.id):y,children:p.label}),E&&x&&p.children&&w.jsx("ul",{className:an.childrenList,children:p.children.map(A=>w.jsx("li",{className:an.navItem,children:w.jsx(cg,{to:A.path,isActive:m(A.path),variant:"nested",onClick:y,children:A.label})},A.path))})]},p.id||p.path)})})})]})},ES="_layout_10w45_1",TS="_content_10w45_6",ug={layout:ES,content:TS},wS=()=>w.jsxs("div",{className:ug.layout,children:[w.jsx(SS,{}),w.jsx("main",{className:ug.content,children:w.jsx(Hg,{})})]}),jS="_layout_ayxcy_1",MS="_sidebar_ayxcy_6",OS="_hidden_ayxcy_15",NS="_header_ayxcy_19",RS="_headerTop_ayxcy_27",DS="_title_ayxcy_37",AS="_toggle_ayxcy_42",CS="_nav_ayxcy_61",_S="_navList_ayxcy_72",LS="_link_ayxcy_76",US="_content_ayxcy_93",ln={layout:jS,sidebar:MS,hidden:OS,header:NS,headerTop:RS,title:DS,toggle:AS,nav:CS,navList:_S,link:LS,content:US},kS=()=>{const a=Nn(),[s,i]=N.useState(!1),d=a.state?.topicData?.content?.sections||[],m=h=>{const y=document.getElementById(h);y&&y.scrollIntoView({behavior:"smooth"}),window.innerWidth<=768&&i(!0)},f=()=>{i(h=>!h)};return w.jsxs("div",{className:ln.layout,children:[w.jsxs("aside",{className:er(ln.sidebar,s&&ln.hidden),children:[w.jsxs("div",{className:ln.header,children:[w.jsxs("div",{className:ln.headerTop,children:[!s&&w.jsx("h2",{className:ln.title,children:"Навигация"}),w.jsx("button",{className:ln.toggle,onClick:f,children:w.jsx(Gg,{isExpanded:s})})]}),!s&&w.jsx("span",{className:ln.subtitle,children:"Выберите секцию"})]}),w.jsx("nav",{className:ln.nav,children:w.jsx("ul",{className:ln.navList,children:d.map((h,y)=>w.jsx("li",{children:w.jsx("button",{className:ln.link,onClick:()=>m(h.title),children:h.title})},y))})})]}),w.jsx("main",{className:ln.content,children:w.jsx(Hg,{})})]})},zS=j0([{path:sn.MAIN,element:w.jsx(wS,{}),children:[{index:!0,element:w.jsx(j1,{})},{path:sn.JAVA_SCRIPT,element:w.jsx(l1,{})},{path:sn.JAVA_SCRIPT_METHODS,element:w.jsx(g2,{})},{path:sn.TYPE_SCRIPT_UTILITY_TYPES,element:w.jsx(w1,{})},{path:sn.JAVA_SCRIPT_BROWSER,element:w.jsx(aS,{})}]},{path:`${sn.JAVA_SCRIPT}/topic/:topicId`,element:w.jsx(kS,{}),children:[{index:!0,element:w.jsx(R2,{})}]}]);function BS(){return w.jsx(B0,{router:zS})}mb.createRoot(document.getElementById("root")).render(w.jsx(N.StrictMode,{children:w.jsx(BS,{})}));
