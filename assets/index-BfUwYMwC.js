function nb(a,s){for(var i=0;i<s.length;i++){const c=s[i];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in a)){const m=Object.getOwnPropertyDescriptor(c,d);m&&Object.defineProperty(a,d,m.get?m:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=i(d);fetch(d.href,m)}})();function dg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Qc={exports:{}},Pl={};var vf;function tb(){if(vf)return Pl;vf=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function i(c,d,m){var f=null;if(m!==void 0&&(f=""+m),d.key!==void 0&&(f=""+d.key),"key"in d){m={};for(var h in d)h!=="key"&&(m[h]=d[h])}else m=d;return d=m.ref,{$$typeof:a,type:c,key:f,ref:d!==void 0?d:null,props:m}}return Pl.Fragment=s,Pl.jsx=i,Pl.jsxs=i,Pl}var xf;function ob(){return xf||(xf=1,Qc.exports=tb()),Qc.exports}var w=ob(),$c={exports:{}},fe={};var Sf;function ab(){if(Sf)return fe;Sf=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),A=Symbol.iterator;function U(S){return S===null||typeof S!="object"?null:(S=A&&S[A]||S["@@iterator"],typeof S=="function"?S:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function K(S,z,q){this.props=S,this.context=z,this.refs=J,this.updater=q||I}K.prototype.isReactComponent={},K.prototype.setState=function(S,z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,z,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function G(){}G.prototype=K.prototype;function te(S,z,q){this.props=S,this.context=z,this.refs=J,this.updater=q||I}var Ne=te.prototype=new G;Ne.constructor=te,X(Ne,K.prototype),Ne.isPureReactComponent=!0;var ve=Array.isArray;function Ee(){}var O={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function ye(S,z,q){var $=q.ref;return{$$typeof:a,type:S,key:z,ref:$!==void 0?$:null,props:q}}function He(S,z){return ye(S.type,z,S.props)}function je(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function ke(S){var z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(q){return z[q]})}var yn=/\/+/g;function Ie(S,z){return typeof S=="object"&&S!==null&&S.key!=null?ke(""+S.key):z.toString(36)}function xe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Ee,Ee):(S.status="pending",S.then(function(z){S.status==="pending"&&(S.status="fulfilled",S.value=z)},function(z){S.status==="pending"&&(S.status="rejected",S.reason=z)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function L(S,z,q,$,ie){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var Re=!1;if(S===null)Re=!0;else switch(pe){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(S.$$typeof){case a:case s:Re=!0;break;case E:return Re=S._init,L(Re(S._payload),z,q,$,ie)}}if(Re)return ie=ie(S),Re=$===""?"."+Ie(S,0):$,ve(ie)?(q="",Re!=null&&(q=Re.replace(yn,"$&/")+"/"),L(ie,z,q,"",function(No){return No})):ie!=null&&(je(ie)&&(ie=He(ie,q+(ie.key==null||S&&S.key===ie.key?"":(""+ie.key).replace(yn,"$&/")+"/")+Re)),z.push(ie)),1;Re=0;var rn=$===""?".":$+":";if(ve(S))for(var $e=0;$e<S.length;$e++)$=S[$e],pe=rn+Ie($,$e),Re+=L($,z,q,pe,ie);else if($e=U(S),typeof $e=="function")for(S=$e.call(S),$e=0;!($=S.next()).done;)$=$.value,pe=rn+Ie($,$e++),Re+=L($,z,q,pe,ie);else if(pe==="object"){if(typeof S.then=="function")return L(xe(S),z,q,$,ie);throw z=String(S),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return Re}function Y(S,z,q){if(S==null)return S;var $=[],ie=0;return L(S,$,"","",function(pe){return z.call(q,pe,ie++)}),$}function Z(S){if(S._status===-1){var z=S._result;z=z(),z.then(function(q){(S._status===0||S._status===-1)&&(S._status=1,S._result=q)},function(q){(S._status===0||S._status===-1)&&(S._status=2,S._result=q)}),S._status===-1&&(S._status=0,S._result=z)}if(S._status===1)return S._result.default;throw S._result}var me=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ge={map:Y,forEach:function(S,z,q){Y(S,function(){z.apply(this,arguments)},q)},count:function(S){var z=0;return Y(S,function(){z++}),z},toArray:function(S){return Y(S,function(z){return z})||[]},only:function(S){if(!je(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return fe.Activity=x,fe.Children=ge,fe.Component=K,fe.Fragment=i,fe.Profiler=d,fe.PureComponent=te,fe.StrictMode=c,fe.Suspense=y,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.__COMPILER_RUNTIME={__proto__:null,c:function(S){return O.H.useMemoCache(S)}},fe.cache=function(S){return function(){return S.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(S,z,q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var $=X({},S.props),ie=S.key;if(z!=null)for(pe in z.key!==void 0&&(ie=""+z.key),z)!le.call(z,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&z.ref===void 0||($[pe]=z[pe]);var pe=arguments.length-2;if(pe===1)$.children=q;else if(1<pe){for(var Re=Array(pe),rn=0;rn<pe;rn++)Re[rn]=arguments[rn+2];$.children=Re}return ye(S.type,ie,$)},fe.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},fe.createElement=function(S,z,q){var $,ie={},pe=null;if(z!=null)for($ in z.key!==void 0&&(pe=""+z.key),z)le.call(z,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ie[$]=z[$]);var Re=arguments.length-2;if(Re===1)ie.children=q;else if(1<Re){for(var rn=Array(Re),$e=0;$e<Re;$e++)rn[$e]=arguments[$e+2];ie.children=rn}if(S&&S.defaultProps)for($ in Re=S.defaultProps,Re)ie[$]===void 0&&(ie[$]=Re[$]);return ye(S,pe,ie)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(S){return{$$typeof:h,render:S}},fe.isValidElement=je,fe.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:Z}},fe.memo=function(S,z){return{$$typeof:p,type:S,compare:z===void 0?null:z}},fe.startTransition=function(S){var z=O.T,q={};O.T=q;try{var $=S(),ie=O.S;ie!==null&&ie(q,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Ee,me)}catch(pe){me(pe)}finally{z!==null&&q.types!==null&&(z.types=q.types),O.T=z}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(S){return O.H.use(S)},fe.useActionState=function(S,z,q){return O.H.useActionState(S,z,q)},fe.useCallback=function(S,z){return O.H.useCallback(S,z)},fe.useContext=function(S){return O.H.useContext(S)},fe.useDebugValue=function(){},fe.useDeferredValue=function(S,z){return O.H.useDeferredValue(S,z)},fe.useEffect=function(S,z){return O.H.useEffect(S,z)},fe.useEffectEvent=function(S){return O.H.useEffectEvent(S)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(S,z,q){return O.H.useImperativeHandle(S,z,q)},fe.useInsertionEffect=function(S,z){return O.H.useInsertionEffect(S,z)},fe.useLayoutEffect=function(S,z){return O.H.useLayoutEffect(S,z)},fe.useMemo=function(S,z){return O.H.useMemo(S,z)},fe.useOptimistic=function(S,z){return O.H.useOptimistic(S,z)},fe.useReducer=function(S,z,q){return O.H.useReducer(S,z,q)},fe.useRef=function(S){return O.H.useRef(S)},fe.useState=function(S){return O.H.useState(S)},fe.useSyncExternalStore=function(S,z,q){return O.H.useSyncExternalStore(S,z,q)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.2.3",fe}var Ef;function bu(){return Ef||(Ef=1,$c.exports=ab()),$c.exports}var N=bu();const lb=dg(N),rb=nb({__proto__:null,default:lb},[N]);var Wc={exports:{}},Il={},eu={exports:{}},nu={};var Tf;function sb(){return Tf||(Tf=1,(function(a){function s(L,Y){var Z=L.length;L.push(Y);e:for(;0<Z;){var me=Z-1>>>1,ge=L[me];if(0<d(ge,Y))L[me]=Y,L[Z]=ge,Z=me;else break e}}function i(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var Y=L[0],Z=L.pop();if(Z!==Y){L[0]=Z;e:for(var me=0,ge=L.length,S=ge>>>1;me<S;){var z=2*(me+1)-1,q=L[z],$=z+1,ie=L[$];if(0>d(q,Z))$<ge&&0>d(ie,q)?(L[me]=ie,L[$]=Z,me=$):(L[me]=q,L[z]=Z,me=z);else if($<ge&&0>d(ie,Z))L[me]=ie,L[$]=Z,me=$;else break e}}return Y}function d(L,Y){var Z=L.sortIndex-Y.sortIndex;return Z!==0?Z:L.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var y=[],p=[],E=1,x=null,A=3,U=!1,I=!1,X=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function Ne(L){for(var Y=i(p);Y!==null;){if(Y.callback===null)c(p);else if(Y.startTime<=L)c(p),Y.sortIndex=Y.expirationTime,s(y,Y);else break;Y=i(p)}}function ve(L){if(X=!1,Ne(L),!I)if(i(y)!==null)I=!0,Ee||(Ee=!0,ke());else{var Y=i(p);Y!==null&&xe(ve,Y.startTime-L)}}var Ee=!1,O=-1,le=5,ye=-1;function He(){return J?!0:!(a.unstable_now()-ye<le)}function je(){if(J=!1,Ee){var L=a.unstable_now();ye=L;var Y=!0;try{e:{I=!1,X&&(X=!1,G(O),O=-1),U=!0;var Z=A;try{n:{for(Ne(L),x=i(y);x!==null&&!(x.expirationTime>L&&He());){var me=x.callback;if(typeof me=="function"){x.callback=null,A=x.priorityLevel;var ge=me(x.expirationTime<=L);if(L=a.unstable_now(),typeof ge=="function"){x.callback=ge,Ne(L),Y=!0;break n}x===i(y)&&c(y),Ne(L)}else c(y);x=i(y)}if(x!==null)Y=!0;else{var S=i(p);S!==null&&xe(ve,S.startTime-L),Y=!1}}break e}finally{x=null,A=Z,U=!1}Y=void 0}}finally{Y?ke():Ee=!1}}}var ke;if(typeof te=="function")ke=function(){te(je)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,Ie=yn.port2;yn.port1.onmessage=je,ke=function(){Ie.postMessage(null)}}else ke=function(){K(je,0)};function xe(L,Y){O=K(function(){L(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_next=function(L){switch(A){case 1:case 2:case 3:var Y=3;break;default:Y=A}var Z=A;A=Y;try{return L()}finally{A=Z}},a.unstable_requestPaint=function(){J=!0},a.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=A;A=L;try{return Y()}finally{A=Z}},a.unstable_scheduleCallback=function(L,Y,Z){var me=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Z+ge,L={id:E++,callback:Y,priorityLevel:L,startTime:Z,expirationTime:ge,sortIndex:-1},Z>me?(L.sortIndex=Z,s(p,L),i(y)===null&&L===i(p)&&(X?(G(O),O=-1):X=!0,xe(ve,Z-me))):(L.sortIndex=ge,s(y,L),I||U||(I=!0,Ee||(Ee=!0,ke()))),L},a.unstable_shouldYield=He,a.unstable_wrapCallback=function(L){var Y=A;return function(){var Z=A;A=Y;try{return L.apply(this,arguments)}finally{A=Z}}}})(nu)),nu}var wf;function ib(){return wf||(wf=1,eu.exports=sb()),eu.exports}var tu={exports:{}},Nn={};var jf;function cb(){if(jf)return Nn;jf=1;var a=bu();function s(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var c={d:{f:i,r:function(){throw Error(s(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(y,p,E){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:y,containerInfo:p,implementation:E}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Nn.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return m(y,p,null,E)},Nn.flushSync=function(y){var p=f.T,E=c.p;try{if(f.T=null,c.p=2,y)return y()}finally{f.T=p,c.p=E,c.d.f()}},Nn.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(y,p))},Nn.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},Nn.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,x=h(E,p.crossOrigin),A=typeof p.integrity=="string"?p.integrity:void 0,U=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?c.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:A,fetchPriority:U}):E==="script"&&c.d.X(y,{crossOrigin:x,integrity:A,fetchPriority:U,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=h(p.as,p.crossOrigin);c.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(y)},Nn.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,x=h(E,p.crossOrigin);c.d.L(y,E,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=h(p.as,p.crossOrigin);c.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(y)},Nn.requestFormReset=function(y){c.d.r(y)},Nn.unstable_batchedUpdates=function(y,p){return y(p)},Nn.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var Mf;function mg(){if(Mf)return tu.exports;Mf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),tu.exports=cb(),tu.exports}var Of;function ub(){if(Of)return Il;Of=1;var a=ib(),s=bu(),i=mg();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function p(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,o=n;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(o=l.return,o!==null){t=o;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return y(l),e;if(r===o)return y(l),n;r=r.sibling}throw Error(c(188))}if(t.return!==o.return)t=l,o=r;else{for(var u=!1,g=l.child;g;){if(g===t){u=!0,t=l,o=r;break}if(g===o){u=!0,o=l,t=r;break}g=g.sibling}if(!u){for(g=r.child;g;){if(g===t){u=!0,t=r,o=l;break}if(g===o){u=!0,o=r,t=l;break}g=g.sibling}if(!u)throw Error(c(189))}}if(t.alternate!==o)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,A=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),te=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),He=Symbol.for("react.memo_cache_sentinel"),je=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=je&&e[je]||e["@@iterator"],typeof e=="function"?e:null)}var yn=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case K:return"Profiler";case J:return"StrictMode";case ve:return"Suspense";case Ee:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case te:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case Ne:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:Ie(e.type)||"Memo";case le:n=e._payload,e=e._init;try{return Ie(e(n))}catch{}}return null}var xe=Array.isArray,L=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},me=[],ge=-1;function S(e){return{current:e}}function z(e){0>ge||(e.current=me[ge],me[ge]=null,ge--)}function q(e,n){ge++,me[ge]=e.current,e.current=n}var $=S(null),ie=S(null),pe=S(null),Re=S(null);function rn(e,n){switch(q(pe,n),q(ie,e),q($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ip(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ip(n),e=Fp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z($),q($,e)}function $e(){z($),z(ie),z(pe)}function No(e){e.memoizedState!==null&&q(Re,e);var n=$.current,t=Fp(n,e.type);n!==t&&(q(ie,e),q($,t))}function oa(e){ie.current===e&&(z($),z(ie)),Re.current===e&&(z(Re),kl._currentValue=Z)}var mn,Rt;function xt(e){if(mn===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);mn=n&&n[1]||"",Rt=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mn+e+Rt}var Xa=!1;function dt(e,n){if(!e||Xa)return"";Xa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(k){var C=k}Reflect.construct(e,[],P)}else{try{P.call()}catch(k){C=k}e.call(P.prototype)}}else{try{throw Error()}catch(k){C=k}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(k){if(k&&C&&typeof k.stack=="string")return[k.stack,C.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),u=r[0],g=r[1];if(u&&g){var v=u.split(`
`),D=g.split(`
`);for(l=o=0;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(o===v.length||l===D.length)for(o=v.length-1,l=D.length-1;1<=o&&0<=l&&v[o]!==D[l];)l--;for(;1<=o&&0<=l;o--,l--)if(v[o]!==D[l]){if(o!==1||l!==1)do if(o--,l--,0>l||v[o]!==D[l]){var B=`
`+v[o].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=o&&0<=l);break}}}finally{Xa=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?xt(t):""}function Hs(e,n){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return dt(e.type,!1);case 11:return dt(e.type.render,!1);case 1:return dt(e.type,!0);case 31:return xt("Activity");default:return""}}function rr(e){try{var n="",t=null;do n+=Hs(e,t),t=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var aa=Object.prototype.hasOwnProperty,Ja=a.unstable_scheduleCallback,Ga=a.unstable_cancelCallback,Ps=a.unstable_shouldYield,Is=a.unstable_requestPaint,sn=a.unstable_now,Ro=a.unstable_getCurrentPriorityLevel,Ka=a.unstable_ImmediatePriority,la=a.unstable_UserBlockingPriority,An=a.unstable_NormalPriority,mt=a.unstable_LowPriority,Za=a.unstable_IdlePriority,Fs=a.log,Qa=a.unstable_setDisableYieldValue,Do=null,We=null;function pt(e){if(typeof Fs=="function"&&Qa(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Do,e)}catch{}}var On=Math.clz32?Math.clz32:ir,sr=Math.log,Ys=Math.LN2;function ir(e){return e>>>=0,e===0?32:31-(sr(e)/Ys|0)|0}var Dt=256,Ao=262144,$t=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Co(e,n,t){var o=e.pendingLanes;if(o===0)return 0;var l=0,r=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var g=o&134217727;return g!==0?(o=g&~r,o!==0?l=At(o):(u&=g,u!==0?l=At(u):t||(t=g&~e,t!==0&&(l=At(t))))):(g=o&~r,g!==0?l=At(g):u!==0?l=At(u):t||(t=o&~e,t!==0&&(l=At(t)))),l===0?0:n!==0&&n!==l&&(n&r)===0&&(r=l&-l,t=n&-n,r>=t||r===32&&(t&4194048)!==0)?n:l}function _o(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function cr(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lo(){var e=$t;return $t<<=1,($t&62914560)===0&&($t=4194304),e}function Wt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function eo(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qs(e,n,t,o,l,r){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,D=e.hiddenUpdates;for(t=u&~t;0<t;){var B=31-On(t),P=1<<B;g[B]=0,v[B]=-1;var C=D[B];if(C!==null)for(D[B]=null,B=0;B<C.length;B++){var k=C[B];k!==null&&(k.lane&=-536870913)}t&=~P}o!==0&&ur(e,o,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(u&~n))}function ur(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-On(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|t&261930}function b(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-On(t),l=1<<o;l&n|e[o]&n&&(e[o]|=n),t&=~l}}function M(e,n){var t=n&-n;return t=(t&42)!==0?1:_(t),(t&(e.suspendedLanes|n))!==0?0:t}function _(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function F(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function V(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:mf(e.type))}function re(e,n){var t=Y.p;try{return Y.p=e,n()}finally{Y.p=t}}var W=Math.random().toString(36).slice(2),Q="__reactFiber$"+W,ee="__reactProps$"+W,ae="__reactContainer$"+W,ue="__reactEvents$"+W,se="__reactListeners$"+W,Ue="__reactHandles$"+W,De="__reactResources$"+W,en="__reactMarker$"+W;function nn(e){delete e[Q],delete e[ee],delete e[ue],delete e[se],delete e[Ue]}function tn(e){var n=e[Q];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ae]||t[Q]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Kp(e);e!==null;){if(t=e[Q])return t;e=Kp(e)}return n}e=t,t=e.parentNode}return null}function Ae(e){if(e=e[Q]||e[ae]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function vn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function Cn(e){var n=e[De];return n||(n=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[en]=!0}var ft=new Set,Pn={};function gt(e,n){Kn(e,n),Kn(e+"Capture",n)}function Kn(e,n){for(Pn[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uo={},ko={};function Ce(e){return aa.call(ko,e)?!0:aa.call(Uo,e)?!1:Ct.test(e)?ko[e]=!0:(Uo[e]=!0,!1)}function cn(e,n,t){if(Ce(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function ht(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function En(e,n,t,o){if(o===null)e.removeAttribute(t);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dr(e,n,t){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,r=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){t=""+u,r.call(this,u)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $a(e){if(!e._valueTracker){var n=zo(e)?"checked":"value";e._valueTracker=dr(e,n,""+e[n])}}function Lu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=zo(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kg=/[\n"\\]/g;function Zn(e){return e.replace(Kg,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vs(e,n,t,o,l,r,u,g){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?Xs(e,u,_e(n)):t!=null?Xs(e,u,_e(t)):o!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+_e(g):e.removeAttribute("name")}function Uu(e,n,t,o,l,r,u,g){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||n!=null)){$a(e);return}t=t!=null?""+_e(t):"",n=n!=null?""+_e(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=g?e.checked:!!o,e.defaultChecked=!!o,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),$a(e)}function Xs(e,n,t){n==="number"&&mr(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ra(e,n,t,o){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&o&&(e[t].defaultSelected=!0)}else{for(t=""+_e(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ku(e,n,t){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+_e(t):""}function zu(e,n,t,o){if(n==null){if(o!=null){if(t!=null)throw Error(c(92));if(xe(o)){if(1<o.length)throw Error(c(93));o=o[0]}t=o}t==null&&(t=""),n=t}t=_e(n),e.defaultValue=t,o=e.textContent,o===t&&o!==""&&o!==null&&(e.value=o),$a(e)}function sa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bu(e,n,t){var o=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,t):typeof t!="number"||t===0||Zg.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Hu(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var o in t)!t.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in n)o=n[l],n.hasOwnProperty(l)&&t[l]!==o&&Bu(e,l,o)}else for(var r in n)n.hasOwnProperty(r)&&Bu(e,r,n[r])}function Js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$g=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(e){return $g.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var Gs=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,ca=null;function Pu(e){var n=Ae(e);if(n&&(e=n.stateNode)){var t=e[ee]||null;e:switch(e=n.stateNode,n.type){case"input":if(Vs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Zn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var l=o[ee]||null;if(!l)throw Error(c(90));Vs(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)o=t[n],o.form===e.form&&Lu(o)}break e;case"textarea":ku(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ra(e,!!t.multiple,n,!1)}}}var Zs=!1;function Iu(e,n,t){if(Zs)return e(n,t);Zs=!0;try{var o=e(n);return o}finally{if(Zs=!1,(ia!==null||ca!==null)&&(es(),ia&&(n=ia,e=ca,ca=ia=null,Pu(n),e)))for(n=0;n<e.length;n++)Pu(e[n])}}function Wa(e,n){var t=e.stateNode;if(t===null)return null;var o=t[ee]||null;if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=!1;if(Lt)try{var el={};Object.defineProperty(el,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{Qs=!1}var no=null,$s=null,fr=null;function Fu(){if(fr)return fr;var e,n=$s,t=n.length,o,l="value"in no?no.value:no.textContent,r=l.length;for(e=0;e<t&&n[e]===l[e];e++);var u=t-e;for(o=1;o<=u&&n[t-o]===l[r-o];o++);return fr=l.slice(e,1<o?1-o:void 0)}function gr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function Yu(){return!1}function _n(e){function n(t,o,l,r,u){this._reactName=t,this._targetInst=l,this.type=o,this.nativeEvent=r,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(r):r[g]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hr:Yu,this.isPropagationStopped=Yu,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),n}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yr=_n(Bo),nl=x({},Bo,{view:0,detail:0}),Wg=_n(nl),Ws,ei,tl,br=x({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tl&&(tl&&e.type==="mousemove"?(Ws=e.screenX-tl.screenX,ei=e.screenY-tl.screenY):ei=Ws=0,tl=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),qu=_n(br),eh=x({},br,{dataTransfer:0}),nh=_n(eh),th=x({},nl,{relatedTarget:0}),ni=_n(th),oh=x({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=_n(oh),lh=x({},Bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=_n(lh),sh=x({},Bo,{data:0}),Vu=_n(sh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=uh[e])?!!n[e]:!1}function ti(){return dh}var mh=x({},nl,{key:function(e){if(e.key){var n=ih[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=_n(mh),fh=x({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=_n(fh),gh=x({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),hh=_n(gh),yh=x({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=_n(yh),vh=x({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=_n(vh),Sh=x({},Bo,{newState:0,oldState:0}),Eh=_n(Sh),Th=[9,13,27,32],oi=Lt&&"CompositionEvent"in window,ol=null;Lt&&"documentMode"in document&&(ol=document.documentMode);var wh=Lt&&"TextEvent"in window&&!ol,Ju=Lt&&(!oi||ol&&8<ol&&11>=ol),Gu=" ",Ku=!1;function Zu(e,n){switch(e){case"keyup":return Th.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ua=!1;function jh(e,n){switch(e){case"compositionend":return Qu(n);case"keypress":return n.which!==32?null:(Ku=!0,Gu);case"textInput":return e=n.data,e===Gu&&Ku?null:e;default:return null}}function Mh(e,n){if(ua)return e==="compositionend"||!oi&&Zu(e,n)?(e=Fu(),fr=$s=no=null,ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ju&&n.locale!=="ko"?null:n.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Oh[e.type]:n==="textarea"}function Wu(e,n,t,o){ia?ca?ca.push(o):ca=[o]:ia=o,n=ss(n,"onChange"),0<n.length&&(t=new yr("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var al=null,ll=null;function Nh(e){Up(e,0)}function vr(e){var n=vn(e);if(Lu(n))return e}function ed(e,n){if(e==="change")return n}var nd=!1;if(Lt){var ai;if(Lt){var li="oninput"in document;if(!li){var td=document.createElement("div");td.setAttribute("oninput","return;"),li=typeof td.oninput=="function"}ai=li}else ai=!1;nd=ai&&(!document.documentMode||9<document.documentMode)}function od(){al&&(al.detachEvent("onpropertychange",ad),ll=al=null)}function ad(e){if(e.propertyName==="value"&&vr(ll)){var n=[];Wu(n,ll,e,Ks(e)),Iu(Nh,n)}}function Rh(e,n,t){e==="focusin"?(od(),al=n,ll=t,al.attachEvent("onpropertychange",ad)):e==="focusout"&&od()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vr(ll)}function Ah(e,n){if(e==="click")return vr(n)}function Ch(e,n){if(e==="input"||e==="change")return vr(n)}function _h(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:_h;function rl(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var l=t[o];if(!aa.call(n,l)||!In(e[l],n[l]))return!1}return!0}function ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,n){var t=ld(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ld(t)}}function sd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?sd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function id(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mr(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=mr(e.document)}return n}function ri(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Lh=Lt&&"documentMode"in document&&11>=document.documentMode,da=null,si=null,sl=null,ii=!1;function cd(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ii||da==null||da!==mr(o)||(o=da,"selectionStart"in o&&ri(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),sl&&rl(sl,o)||(sl=o,o=ss(si,"onSelect"),0<o.length&&(n=new yr("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=da)))}function Ho(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ma={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionrun:Ho("Transition","TransitionRun"),transitionstart:Ho("Transition","TransitionStart"),transitioncancel:Ho("Transition","TransitionCancel"),transitionend:Ho("Transition","TransitionEnd")},ci={},ud={};Lt&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Po(e){if(ci[e])return ci[e];if(!ma[e])return e;var n=ma[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ud)return ci[e]=n[t];return e}var dd=Po("animationend"),md=Po("animationiteration"),pd=Po("animationstart"),Uh=Po("transitionrun"),kh=Po("transitionstart"),zh=Po("transitioncancel"),fd=Po("transitionend"),gd=new Map,ui="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ui.push("scrollEnd");function yt(e,n){gd.set(e,n),gt(n,[e])}var xr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qn=[],pa=0,di=0;function Sr(){for(var e=pa,n=di=pa=0;n<e;){var t=Qn[n];Qn[n++]=null;var o=Qn[n];Qn[n++]=null;var l=Qn[n];Qn[n++]=null;var r=Qn[n];if(Qn[n++]=null,o!==null&&l!==null){var u=o.pending;u===null?l.next=l:(l.next=u.next,u.next=l),o.pending=l}r!==0&&hd(t,l,r)}}function Er(e,n,t,o){Qn[pa++]=e,Qn[pa++]=n,Qn[pa++]=t,Qn[pa++]=o,di|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mi(e,n,t,o){return Er(e,n,t,o),Tr(e)}function Io(e,n){return Er(e,null,null,n),Tr(e)}function hd(e,n,t){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t);for(var l=!1,r=e.return;r!==null;)r.childLanes|=t,o=r.alternate,o!==null&&(o.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&n!==null&&(l=31-On(t),e=r.hiddenUpdates,o=e[l],o===null?e[l]=[n]:o.push(n),n.lane=t|536870912),r):null}function Tr(e){if(50<Rl)throw Rl=0,Sc=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var fa={};function Bh(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,n,t,o){return new Bh(e,n,t,o)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,n){var t=e.alternate;return t===null?(t=Fn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function yd(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wr(e,n,t,o,l,r){var u=0;if(o=e,typeof e=="function")pi(e)&&(u=1);else if(typeof e=="string")u=Yy(e,t,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=Fn(31,t,n,l),e.elementType=ye,e.lanes=r,e;case X:return Fo(t.children,l,r,n);case J:u=8,l|=24;break;case K:return e=Fn(12,t,n,l|2),e.elementType=K,e.lanes=r,e;case ve:return e=Fn(13,t,n,l),e.elementType=ve,e.lanes=r,e;case Ee:return e=Fn(19,t,n,l),e.elementType=Ee,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:u=10;break e;case G:u=9;break e;case Ne:u=11;break e;case O:u=14;break e;case le:u=16,o=null;break e}u=29,t=Error(c(130,e===null?"null":typeof e,"")),o=null}return n=Fn(u,t,n,l),n.elementType=e,n.type=o,n.lanes=r,n}function Fo(e,n,t,o){return e=Fn(7,e,o,n),e.lanes=t,e}function fi(e,n,t){return e=Fn(6,e,null,n),e.lanes=t,e}function bd(e){var n=Fn(18,null,null,0);return n.stateNode=e,n}function gi(e,n,t){return n=Fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var vd=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var t=vd.get(e);return t!==void 0?t:(n={value:e,source:n,stack:rr(n)},vd.set(e,n),n)}return{value:e,source:n,stack:rr(n)}}var ga=[],ha=0,jr=null,il=0,Wn=[],et=0,to=null,St=1,Et="";function kt(e,n){ga[ha++]=il,ga[ha++]=jr,jr=e,il=n}function xd(e,n,t){Wn[et++]=St,Wn[et++]=Et,Wn[et++]=to,to=e;var o=St;e=Et;var l=32-On(o)-1;o&=~(1<<l),t+=1;var r=32-On(n)+l;if(30<r){var u=l-l%5;r=(o&(1<<u)-1).toString(32),o>>=u,l-=u,St=1<<32-On(n)+l|t<<l|o,Et=r+e}else St=1<<r|t<<l|o,Et=e}function hi(e){e.return!==null&&(kt(e,1),xd(e,1,0))}function yi(e){for(;e===jr;)jr=ga[--ha],ga[ha]=null,il=ga[--ha],ga[ha]=null;for(;e===to;)to=Wn[--et],Wn[et]=null,Et=Wn[--et],Wn[et]=null,St=Wn[--et],Wn[et]=null}function Sd(e,n){Wn[et++]=St,Wn[et++]=Et,Wn[et++]=to,St=n.id,Et=n.overflow,to=e}var Tn=null,Ge=null,Le=!1,oo=null,nt=!1,bi=Error(c(519));function ao(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl($n(n,e)),bi}function Ed(e){var n=e.stateNode,t=e.type,o=e.memoizedProps;switch(n[Q]=e,n[ee]=o,t){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(t=0;t<Al.length;t++)we(Al[t],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Uu(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),zu(n,o.value,o.defaultValue,o.children)}t=o.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||o.suppressHydrationWarning===!0||Hp(n.textContent,t)?(o.popover!=null&&(we("beforetoggle",n),we("toggle",n)),o.onScroll!=null&&we("scroll",n),o.onScrollEnd!=null&&we("scrollend",n),o.onClick!=null&&(n.onclick=_t),n=!0):n=!1,n||ao(e,!0)}function Td(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:nt=!1;return;case 27:case 3:nt=!0;return;default:Tn=Tn.return}}function ya(e){if(e!==Tn)return!1;if(!Le)return Td(e),Le=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||kc(e.type,e.memoizedProps)),t=!t),t&&Ge&&ao(e),Td(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ge=Gp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ge=Gp(e)}else n===27?(n=Ge,vo(e.type)?(e=Ic,Ic=null,Ge=e):Ge=n):Ge=Tn?ot(e.stateNode.nextSibling):null;return!0}function Yo(){Ge=Tn=null,Le=!1}function vi(){var e=oo;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),oo=null),e}function cl(e){oo===null?oo=[e]:oo.push(e)}var xi=S(null),qo=null,zt=null;function lo(e,n,t){q(xi,n._currentValue),n._currentValue=t}function Bt(e){e._currentValue=xi.current,z(xi)}function Si(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function Ei(e,n,t,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var u=l.child;r=r.firstContext;e:for(;r!==null;){var g=r;r=l;for(var v=0;v<n.length;v++)if(g.context===n[v]){r.lanes|=t,g=r.alternate,g!==null&&(g.lanes|=t),Si(r.return,t,e),o||(u=null);break e}r=g.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=t,r=u.alternate,r!==null&&(r.lanes|=t),Si(u,t,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ba(e,n,t,o){e=null;for(var l=n,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var g=l.type;In(l.pendingProps.value,u.value)||(e!==null?e.push(g):e=[g])}}else if(l===Re.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}l=l.return}e!==null&&Ei(n,e,t,o),n.flags|=262144}function Mr(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vo(e){qo=e,zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return wd(qo,e)}function Or(e,n){return qo===null&&Vo(e),wd(e,n)}function wd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},zt===null){if(e===null)throw Error(c(308));zt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zt=zt.next=n;return t}var Hh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Ph=a.unstable_scheduleCallback,Ih=a.unstable_NormalPriority,pn={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ti(){return{controller:new Hh,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&Ph(Ih,function(){e.controller.abort()})}var dl=null,wi=0,va=0,xa=null;function Fh(e,n){if(dl===null){var t=dl=[];wi=0,va=Oc(),xa={status:"pending",value:void 0,then:function(o){t.push(o)}}}return wi++,n.then(jd,jd),n}function jd(){if(--wi===0&&dl!==null){xa!==null&&(xa.status="fulfilled");var e=dl;dl=null,va=0,xa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Yh(e,n){var t=[],o={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(o.status="rejected",o.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),o}var Md=L.S;L.S=function(e,n){cp=sn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fh(e,n),Md!==null&&Md(e,n)};var Xo=S(null);function ji(){var e=Xo.current;return e!==null?e:Je.pooledCache}function Nr(e,n){n===null?q(Xo,Xo.current):q(Xo,n.pool)}function Od(){var e=ji();return e===null?null:{parent:pn._currentValue,pool:e}}var Sa=Error(c(460)),Mi=Error(c(474)),Rr=Error(c(542)),Dr={then:function(){}};function Nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(_t,_t),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ad(e),e;default:if(typeof n.status=="string")n.then(_t,_t);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=o}},function(o){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ad(e),e}throw Go=n,Sa}}function Jo(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Go=t,Sa):t}}var Go=null;function Dd(){if(Go===null)throw Error(c(459));var e=Go;return Go=null,e}function Ad(e){if(e===Sa||e===Rr)throw Error(c(483))}var Ea=null,ml=0;function Ar(e){var n=ml;return ml+=1,Ea===null&&(Ea=[]),Rd(Ea,e,n)}function pl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cr(e,n){throw n.$$typeof===A?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Cd(e){function n(j,T){if(e){var R=j.deletions;R===null?(j.deletions=[T],j.flags|=16):R.push(T)}}function t(j,T){if(!e)return null;for(;T!==null;)n(j,T),T=T.sibling;return null}function o(j){for(var T=new Map;j!==null;)j.key!==null?T.set(j.key,j):T.set(j.index,j),j=j.sibling;return T}function l(j,T){return j=Ut(j,T),j.index=0,j.sibling=null,j}function r(j,T,R){return j.index=R,e?(R=j.alternate,R!==null?(R=R.index,R<T?(j.flags|=67108866,T):R):(j.flags|=67108866,T)):(j.flags|=1048576,T)}function u(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function g(j,T,R,H){return T===null||T.tag!==6?(T=fi(R,j.mode,H),T.return=j,T):(T=l(T,R),T.return=j,T)}function v(j,T,R,H){var ce=R.type;return ce===X?B(j,T,R.props.children,H,R.key):T!==null&&(T.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===le&&Jo(ce)===T.type)?(T=l(T,R.props),pl(T,R),T.return=j,T):(T=wr(R.type,R.key,R.props,null,j.mode,H),pl(T,R),T.return=j,T)}function D(j,T,R,H){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=gi(R,j.mode,H),T.return=j,T):(T=l(T,R.children||[]),T.return=j,T)}function B(j,T,R,H,ce){return T===null||T.tag!==7?(T=Fo(R,j.mode,H,ce),T.return=j,T):(T=l(T,R),T.return=j,T)}function P(j,T,R){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=fi(""+T,j.mode,R),T.return=j,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case U:return R=wr(T.type,T.key,T.props,null,j.mode,R),pl(R,T),R.return=j,R;case I:return T=gi(T,j.mode,R),T.return=j,T;case le:return T=Jo(T),P(j,T,R)}if(xe(T)||ke(T))return T=Fo(T,j.mode,R,null),T.return=j,T;if(typeof T.then=="function")return P(j,Ar(T),R);if(T.$$typeof===te)return P(j,Or(j,T),R);Cr(j,T)}return null}function C(j,T,R,H){var ce=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ce!==null?null:g(j,T,""+R,H);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return R.key===ce?v(j,T,R,H):null;case I:return R.key===ce?D(j,T,R,H):null;case le:return R=Jo(R),C(j,T,R,H)}if(xe(R)||ke(R))return ce!==null?null:B(j,T,R,H,null);if(typeof R.then=="function")return C(j,T,Ar(R),H);if(R.$$typeof===te)return C(j,T,Or(j,R),H);Cr(j,R)}return null}function k(j,T,R,H,ce){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return j=j.get(R)||null,g(T,j,""+H,ce);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case U:return j=j.get(H.key===null?R:H.key)||null,v(T,j,H,ce);case I:return j=j.get(H.key===null?R:H.key)||null,D(T,j,H,ce);case le:return H=Jo(H),k(j,T,R,H,ce)}if(xe(H)||ke(H))return j=j.get(R)||null,B(T,j,H,ce,null);if(typeof H.then=="function")return k(j,T,R,Ar(H),ce);if(H.$$typeof===te)return k(j,T,R,Or(T,H),ce);Cr(T,H)}return null}function ne(j,T,R,H){for(var ce=null,ze=null,oe=T,be=T=0,Oe=null;oe!==null&&be<R.length;be++){oe.index>be?(Oe=oe,oe=null):Oe=oe.sibling;var Be=C(j,oe,R[be],H);if(Be===null){oe===null&&(oe=Oe);break}e&&oe&&Be.alternate===null&&n(j,oe),T=r(Be,T,be),ze===null?ce=Be:ze.sibling=Be,ze=Be,oe=Oe}if(be===R.length)return t(j,oe),Le&&kt(j,be),ce;if(oe===null){for(;be<R.length;be++)oe=P(j,R[be],H),oe!==null&&(T=r(oe,T,be),ze===null?ce=oe:ze.sibling=oe,ze=oe);return Le&&kt(j,be),ce}for(oe=o(oe);be<R.length;be++)Oe=k(oe,j,be,R[be],H),Oe!==null&&(e&&Oe.alternate!==null&&oe.delete(Oe.key===null?be:Oe.key),T=r(Oe,T,be),ze===null?ce=Oe:ze.sibling=Oe,ze=Oe);return e&&oe.forEach(function(wo){return n(j,wo)}),Le&&kt(j,be),ce}function de(j,T,R,H){if(R==null)throw Error(c(151));for(var ce=null,ze=null,oe=T,be=T=0,Oe=null,Be=R.next();oe!==null&&!Be.done;be++,Be=R.next()){oe.index>be?(Oe=oe,oe=null):Oe=oe.sibling;var wo=C(j,oe,Be.value,H);if(wo===null){oe===null&&(oe=Oe);break}e&&oe&&wo.alternate===null&&n(j,oe),T=r(wo,T,be),ze===null?ce=wo:ze.sibling=wo,ze=wo,oe=Oe}if(Be.done)return t(j,oe),Le&&kt(j,be),ce;if(oe===null){for(;!Be.done;be++,Be=R.next())Be=P(j,Be.value,H),Be!==null&&(T=r(Be,T,be),ze===null?ce=Be:ze.sibling=Be,ze=Be);return Le&&kt(j,be),ce}for(oe=o(oe);!Be.done;be++,Be=R.next())Be=k(oe,j,be,Be.value,H),Be!==null&&(e&&Be.alternate!==null&&oe.delete(Be.key===null?be:Be.key),T=r(Be,T,be),ze===null?ce=Be:ze.sibling=Be,ze=Be);return e&&oe.forEach(function(eb){return n(j,eb)}),Le&&kt(j,be),ce}function Xe(j,T,R,H){if(typeof R=="object"&&R!==null&&R.type===X&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case U:e:{for(var ce=R.key;T!==null;){if(T.key===ce){if(ce=R.type,ce===X){if(T.tag===7){t(j,T.sibling),H=l(T,R.props.children),H.return=j,j=H;break e}}else if(T.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===le&&Jo(ce)===T.type){t(j,T.sibling),H=l(T,R.props),pl(H,R),H.return=j,j=H;break e}t(j,T);break}else n(j,T);T=T.sibling}R.type===X?(H=Fo(R.props.children,j.mode,H,R.key),H.return=j,j=H):(H=wr(R.type,R.key,R.props,null,j.mode,H),pl(H,R),H.return=j,j=H)}return u(j);case I:e:{for(ce=R.key;T!==null;){if(T.key===ce)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){t(j,T.sibling),H=l(T,R.children||[]),H.return=j,j=H;break e}else{t(j,T);break}else n(j,T);T=T.sibling}H=gi(R,j.mode,H),H.return=j,j=H}return u(j);case le:return R=Jo(R),Xe(j,T,R,H)}if(xe(R))return ne(j,T,R,H);if(ke(R)){if(ce=ke(R),typeof ce!="function")throw Error(c(150));return R=ce.call(R),de(j,T,R,H)}if(typeof R.then=="function")return Xe(j,T,Ar(R),H);if(R.$$typeof===te)return Xe(j,T,Or(j,R),H);Cr(j,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,T!==null&&T.tag===6?(t(j,T.sibling),H=l(T,R),H.return=j,j=H):(t(j,T),H=fi(R,j.mode,H),H.return=j,j=H),u(j)):t(j,T)}return function(j,T,R,H){try{ml=0;var ce=Xe(j,T,R,H);return Ea=null,ce}catch(oe){if(oe===Sa||oe===Rr)throw oe;var ze=Fn(29,oe,null,j.mode);return ze.lanes=H,ze.return=j,ze}}}var Ko=Cd(!0),_d=Cd(!1),ro=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ni(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function so(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function io(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var l=o.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n,n=Tr(e),hd(e,null,t),n}return Er(e,o,n,t),Tr(e)}function fl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,b(e,t)}}function Ri(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=u:r=r.next=u,t=t.next}while(t!==null);r===null?l=r=n:r=r.next=n}else l=r=n;t={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Di=!1;function gl(){if(Di){var e=xa;if(e!==null)throw e}}function hl(e,n,t,o){Di=!1;var l=e.updateQueue;ro=!1;var r=l.firstBaseUpdate,u=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var v=g,D=v.next;v.next=null,u===null?r=D:u.next=D,u=v;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==u&&(g===null?B.firstBaseUpdate=D:g.next=D,B.lastBaseUpdate=v))}if(r!==null){var P=l.baseState;u=0,B=D=v=null,g=r;do{var C=g.lane&-536870913,k=C!==g.lane;if(k?(Me&C)===C:(o&C)===C){C!==0&&C===va&&(Di=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ne=e,de=g;C=n;var Xe=t;switch(de.tag){case 1:if(ne=de.payload,typeof ne=="function"){P=ne.call(Xe,P,C);break e}P=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=de.payload,C=typeof ne=="function"?ne.call(Xe,P,C):ne,C==null)break e;P=x({},P,C);break e;case 2:ro=!0}}C=g.callback,C!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[C]:k.push(C))}else k={lane:C,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(D=B=k,v=P):B=B.next=k,u|=C;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;k=g,g=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);B===null&&(v=P),l.baseState=v,l.firstBaseUpdate=D,l.lastBaseUpdate=B,r===null&&(l.shared.lanes=0),fo|=u,e.lanes=u,e.memoizedState=P}}function Ld(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Ud(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Ld(t[e],n)}var Ta=S(null),_r=S(0);function kd(e,n){e=Jt,q(_r,e),q(Ta,n),Jt=e|n.baseLanes}function Ai(){q(_r,Jt),q(Ta,Ta.current)}function Ci(){Jt=_r.current,z(Ta),z(_r)}var Yn=S(null),tt=null;function co(e){var n=e.alternate;q(un,un.current&1),q(Yn,e),tt===null&&(n===null||Ta.current!==null||n.memoizedState!==null)&&(tt=e)}function _i(e){q(un,un.current),q(Yn,e),tt===null&&(tt=e)}function zd(e){e.tag===22?(q(un,un.current),q(Yn,e),tt===null&&(tt=e)):uo()}function uo(){q(un,un.current),q(Yn,Yn.current)}function qn(e){z(Yn),tt===e&&(tt=null),z(un)}var un=S(0);function Lr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Hc(t)||Pc(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ht=0,he=null,qe=null,fn=null,Ur=!1,wa=!1,Zo=!1,kr=0,yl=0,ja=null,qh=0;function on(){throw Error(c(321))}function Li(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!In(e[t],n[t]))return!1;return!0}function Ui(e,n,t,o,l,r){return Ht=r,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?xm:Zi,Zo=!1,r=t(o,l),Zo=!1,wa&&(r=Hd(n,t,o,l)),Bd(e),r}function Bd(e){L.H=xl;var n=qe!==null&&qe.next!==null;if(Ht=0,fn=qe=he=null,Ur=!1,yl=0,ja=null,n)throw Error(c(300));e===null||gn||(e=e.dependencies,e!==null&&Mr(e)&&(gn=!0))}function Hd(e,n,t,o){he=e;var l=0;do{if(wa&&(ja=null),yl=0,wa=!1,25<=l)throw Error(c(301));if(l+=1,fn=qe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}L.H=Sm,r=n(t,o)}while(wa);return r}function Vh(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?bl(n):n,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(he.flags|=1024),n}function ki(){var e=kr!==0;return kr=0,e}function zi(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Bi(e){if(Ur){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ur=!1}Ht=0,fn=qe=he=null,wa=!1,yl=kr=0,ja=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?he.memoizedState=fn=e:fn=fn.next=e,fn}function dn(){if(qe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var n=fn===null?he.memoizedState:fn.next;if(n!==null)fn=n,qe=e;else{if(e===null)throw he.alternate===null?Error(c(467)):Error(c(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},fn===null?he.memoizedState=fn=e:fn=fn.next=e}return fn}function zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var n=yl;return yl+=1,ja===null&&(ja=[]),e=Rd(ja,e,n),n=he,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?xm:Zi),e}function Br(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===te)return wn(e)}throw Error(c(438,String(e)))}function Hi(e){var n=null,t=he.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=zr(),he.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),o=0;o<e;o++)t[o]=He;return n.index++,t}function Pt(e,n){return typeof n=="function"?n(e):n}function Hr(e){var n=dn();return Pi(n,qe,e)}function Pi(e,n,t){var o=e.queue;if(o===null)throw Error(c(311));o.lastRenderedReducer=t;var l=e.baseQueue,r=o.pending;if(r!==null){if(l!==null){var u=l.next;l.next=r.next,r.next=u}n.baseQueue=l=r,o.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{n=l.next;var g=u=null,v=null,D=n,B=!1;do{var P=D.lane&-536870913;if(P!==D.lane?(Me&P)===P:(Ht&P)===P){var C=D.revertLane;if(C===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),P===va&&(B=!0);else if((Ht&C)===C){D=D.next,C===va&&(B=!0);continue}else P={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},v===null?(g=v=P,u=r):v=v.next=P,he.lanes|=C,fo|=C;P=D.action,Zo&&t(r,P),r=D.hasEagerState?D.eagerState:t(r,P)}else C={lane:P,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},v===null?(g=v=C,u=r):v=v.next=C,he.lanes|=P,fo|=P;D=D.next}while(D!==null&&D!==n);if(v===null?u=r:v.next=g,!In(r,e.memoizedState)&&(gn=!0,B&&(t=xa,t!==null)))throw t;e.memoizedState=r,e.baseState=u,e.baseQueue=v,o.lastRenderedState=r}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ii(e){var n=dn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var o=t.dispatch,l=t.pending,r=n.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do r=e(r,u.action),u=u.next;while(u!==l);In(r,n.memoizedState)||(gn=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,o]}function Pd(e,n,t){var o=he,l=dn(),r=Le;if(r){if(t===void 0)throw Error(c(407));t=t()}else t=n();var u=!In((qe||l).memoizedState,t);if(u&&(l.memoizedState=t,gn=!0),l=l.queue,qi(Yd.bind(null,o,l,e),[e]),l.getSnapshot!==n||u||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Ma(9,{destroy:void 0},Fd.bind(null,o,l,t,n),null),Je===null)throw Error(c(349));r||(Ht&127)!==0||Id(o,n,t)}return t}function Id(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=he.updateQueue,n===null?(n=zr(),he.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fd(e,n,t,o){n.value=t,n.getSnapshot=o,qd(n)&&Vd(e)}function Yd(e,n,t){return t(function(){qd(n)&&Vd(e)})}function qd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!In(e,t)}catch{return!0}}function Vd(e){var n=Io(e,2);n!==null&&Bn(n,e,2)}function Fi(e){var n=Dn();if(typeof e=="function"){var t=e;if(e=t(),Zo){pt(!0);try{t()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},n}function Xd(e,n,t,o){return e.baseState=t,Pi(e,qe,typeof o=="function"?o:Pt)}function Xh(e,n,t,o,l){if(Fr(e))throw Error(c(485));if(e=n.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){r.listeners.push(u)}};L.T!==null?t(!0):r.isTransition=!1,o(r),t=n.pending,t===null?(r.next=n.pending=r,Jd(n,r)):(r.next=t.next,n.pending=t.next=r)}}function Jd(e,n){var t=n.action,o=n.payload,l=e.state;if(n.isTransition){var r=L.T,u={};L.T=u;try{var g=t(l,o),v=L.S;v!==null&&v(u,g),Gd(e,n,g)}catch(D){Yi(e,n,D)}finally{r!==null&&u.types!==null&&(r.types=u.types),L.T=r}}else try{r=t(l,o),Gd(e,n,r)}catch(D){Yi(e,n,D)}}function Gd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(o){Kd(e,n,o)},function(o){return Yi(e,n,o)}):Kd(e,n,t)}function Kd(e,n,t){n.status="fulfilled",n.value=t,Zd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Jd(e,t)))}function Yi(e,n,t){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=t,Zd(n),n=n.next;while(n!==o)}e.action=null}function Zd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qd(e,n){return n}function $d(e,n){if(Le){var t=Je.formState;if(t!==null){e:{var o=he;if(Le){if(Ge){n:{for(var l=Ge,r=nt;l.nodeType!==8;){if(!r){l=null;break n}if(l=ot(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ge=ot(l.nextSibling),o=l.data==="F!";break e}}ao(o)}o=!1}o&&(n=t[0])}}return t=Dn(),t.memoizedState=t.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:n},t.queue=o,t=ym.bind(null,he,o),o.dispatch=t,o=Fi(!1),r=Ki.bind(null,he,!1,o.queue),o=Dn(),l={state:n,dispatch:null,action:e,pending:null},o.queue=l,t=Xh.bind(null,he,l,r,t),l.dispatch=t,o.memoizedState=e,[n,t,!1]}function Wd(e){var n=dn();return em(n,qe,e)}function em(e,n,t){if(n=Pi(e,n,Qd)[0],e=Hr(Pt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bl(n)}catch(u){throw u===Sa?Rr:u}else o=n;n=dn();var l=n.queue,r=l.dispatch;return t!==n.memoizedState&&(he.flags|=2048,Ma(9,{destroy:void 0},Jh.bind(null,l,t),null)),[o,r,e]}function Jh(e,n){e.action=n}function nm(e){var n=dn(),t=qe;if(t!==null)return em(n,t,e);dn(),n=n.memoizedState,t=dn();var o=t.queue.dispatch;return t.memoizedState=e,[n,o,!1]}function Ma(e,n,t,o){return e={tag:e,create:t,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=zr(),he.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e),e}function tm(){return dn().memoizedState}function Pr(e,n,t,o){var l=Dn();he.flags|=e,l.memoizedState=Ma(1|n,{destroy:void 0},t,o===void 0?null:o)}function Ir(e,n,t,o){var l=dn();o=o===void 0?null:o;var r=l.memoizedState.inst;qe!==null&&o!==null&&Li(o,qe.memoizedState.deps)?l.memoizedState=Ma(n,r,t,o):(he.flags|=e,l.memoizedState=Ma(1|n,r,t,o))}function om(e,n){Pr(8390656,8,e,n)}function qi(e,n){Ir(2048,8,e,n)}function Gh(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=zr(),he.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function am(e){var n=dn().memoizedState;return Gh({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function lm(e,n){return Ir(4,2,e,n)}function rm(e,n){return Ir(4,4,e,n)}function sm(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function im(e,n,t){t=t!=null?t.concat([e]):null,Ir(4,4,sm.bind(null,n,e),t)}function Vi(){}function cm(e,n){var t=dn();n=n===void 0?null:n;var o=t.memoizedState;return n!==null&&Li(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function um(e,n){var t=dn();n=n===void 0?null:n;var o=t.memoizedState;if(n!==null&&Li(n,o[1]))return o[0];if(o=e(),Zo){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[o,n],o}function Xi(e,n,t){return t===void 0||(Ht&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=dp(),he.lanes|=e,fo|=e,t)}function dm(e,n,t,o){return In(t,n)?t:Ta.current!==null?(e=Xi(e,t,o),In(e,n)||(gn=!0),e):(Ht&42)===0||(Ht&1073741824)!==0&&(Me&261930)===0?(gn=!0,e.memoizedState=t):(e=dp(),he.lanes|=e,fo|=e,n)}function mm(e,n,t,o,l){var r=Y.p;Y.p=r!==0&&8>r?r:8;var u=L.T,g={};L.T=g,Ki(e,!1,n,t);try{var v=l(),D=L.S;if(D!==null&&D(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=Yh(v,o);vl(e,n,B,Jn(e))}else vl(e,n,o,Jn(e))}catch(P){vl(e,n,{then:function(){},status:"rejected",reason:P},Jn())}finally{Y.p=r,u!==null&&g.types!==null&&(u.types=g.types),L.T=u}}function Kh(){}function Ji(e,n,t,o){if(e.tag!==5)throw Error(c(476));var l=pm(e).queue;mm(e,l,n,Z,t===null?Kh:function(){return fm(e),t(o)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:Z},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fm(e){var n=pm(e);n.next===null&&(n=e.alternate.memoizedState),vl(e,n.next.queue,{},Jn())}function Gi(){return wn(kl)}function gm(){return dn().memoizedState}function hm(){return dn().memoizedState}function Zh(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Jn();e=so(t);var o=io(n,e,t);o!==null&&(Bn(o,n,t),fl(o,n,t)),n={cache:Ti()},e.payload=n;return}n=n.return}}function Qh(e,n,t){var o=Jn();t={lane:o,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Fr(e)?bm(n,t):(t=mi(e,n,t,o),t!==null&&(Bn(t,e,o),vm(t,n,o)))}function ym(e,n,t){var o=Jn();vl(e,n,t,o)}function vl(e,n,t,o){var l={lane:o,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Fr(e))bm(n,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var u=n.lastRenderedState,g=r(u,t);if(l.hasEagerState=!0,l.eagerState=g,In(g,u))return Er(e,n,l,0),Je===null&&Sr(),!1}catch{}if(t=mi(e,n,l,o),t!==null)return Bn(t,e,o),vm(t,n,o),!0}return!1}function Ki(e,n,t,o){if(o={lane:2,revertLane:Oc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fr(e)){if(n)throw Error(c(479))}else n=mi(e,t,o,2),n!==null&&Bn(n,e,2)}function Fr(e){var n=e.alternate;return e===he||n!==null&&n===he}function bm(e,n){wa=Ur=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function vm(e,n,t){if((t&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,b(e,t)}}var xl={readContext:wn,use:Br,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};xl.useEffectEvent=on;var xm={readContext:wn,use:Br,useCallback:function(e,n){return Dn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:om,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Pr(4194308,4,sm.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){Pr(4,2,e,n)},useMemo:function(e,n){var t=Dn();n=n===void 0?null:n;var o=e();if(Zo){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[o,n],o},useReducer:function(e,n,t){var o=Dn();if(t!==void 0){var l=t(n);if(Zo){pt(!0);try{t(n)}finally{pt(!1)}}}else l=n;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=Qh.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Dn();return e={current:e},n.memoizedState=e},useState:function(e){e=Fi(e);var n=e.queue,t=ym.bind(null,he,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Vi,useDeferredValue:function(e,n){var t=Dn();return Xi(t,e,n)},useTransition:function(){var e=Fi(!1);return e=mm.bind(null,he,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var o=he,l=Dn();if(Le){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Je===null)throw Error(c(349));(Me&127)!==0||Id(o,n,t)}l.memoizedState=t;var r={value:t,getSnapshot:n};return l.queue=r,om(Yd.bind(null,o,r,e),[e]),o.flags|=2048,Ma(9,{destroy:void 0},Fd.bind(null,o,r,t,n),null),t},useId:function(){var e=Dn(),n=Je.identifierPrefix;if(Le){var t=Et,o=St;t=(o&~(1<<32-On(o)-1)).toString(32)+t,n="_"+n+"R_"+t,t=kr++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=qh++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gi,useFormState:$d,useActionState:$d,useOptimistic:function(e){var n=Dn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Ki.bind(null,he,!0,t),t.dispatch=n,[e,n]},useMemoCache:Hi,useCacheRefresh:function(){return Dn().memoizedState=Zh.bind(null,he)},useEffectEvent:function(e){var n=Dn(),t={impl:e};return n.memoizedState=t,function(){if((Pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Zi={readContext:wn,use:Br,useCallback:cm,useContext:wn,useEffect:qi,useImperativeHandle:im,useInsertionEffect:lm,useLayoutEffect:rm,useMemo:um,useReducer:Hr,useRef:tm,useState:function(){return Hr(Pt)},useDebugValue:Vi,useDeferredValue:function(e,n){var t=dn();return dm(t,qe.memoizedState,e,n)},useTransition:function(){var e=Hr(Pt)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:bl(e),n]},useSyncExternalStore:Pd,useId:gm,useHostTransitionStatus:Gi,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,n){var t=dn();return Xd(t,qe,e,n)},useMemoCache:Hi,useCacheRefresh:hm};Zi.useEffectEvent=am;var Sm={readContext:wn,use:Br,useCallback:cm,useContext:wn,useEffect:qi,useImperativeHandle:im,useInsertionEffect:lm,useLayoutEffect:rm,useMemo:um,useReducer:Ii,useRef:tm,useState:function(){return Ii(Pt)},useDebugValue:Vi,useDeferredValue:function(e,n){var t=dn();return qe===null?Xi(t,e,n):dm(t,qe.memoizedState,e,n)},useTransition:function(){var e=Ii(Pt)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:bl(e),n]},useSyncExternalStore:Pd,useId:gm,useHostTransitionStatus:Gi,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var t=dn();return qe!==null?Xd(t,qe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Hi,useCacheRefresh:hm};Sm.useEffectEvent=am;function Qi(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:x({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var $i={enqueueSetState:function(e,n,t){e=e._reactInternals;var o=Jn(),l=so(o);l.payload=n,t!=null&&(l.callback=t),n=io(e,l,o),n!==null&&(Bn(n,e,o),fl(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=Jn(),l=so(o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=io(e,l,o),n!==null&&(Bn(n,e,o),fl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Jn(),o=so(t);o.tag=2,n!=null&&(o.callback=n),n=io(e,o,t),n!==null&&(Bn(n,e,t),fl(n,e,t))}};function Em(e,n,t,o,l,r,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,u):n.prototype&&n.prototype.isPureReactComponent?!rl(t,o)||!rl(l,r):!0}function Tm(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&$i.enqueueReplaceState(n,n.state,null)}function Qo(e,n){var t=n;if("ref"in n){t={};for(var o in n)o!=="ref"&&(t[o]=n[o])}if(e=e.defaultProps){t===n&&(t=x({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function wm(e){xr(e)}function jm(e){console.error(e)}function Mm(e){xr(e)}function Yr(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Om(e,n,t){try{var o=e.onCaughtError;o(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Wi(e,n,t){return t=so(t),t.tag=3,t.payload={element:null},t.callback=function(){Yr(e,n)},t}function Nm(e){return e=so(e),e.tag=3,e}function Rm(e,n,t,o){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=o.value;e.payload=function(){return l(r)},e.callback=function(){Om(n,t,o)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Om(n,t,o),typeof l!="function"&&(go===null?go=new Set([this]):go.add(this));var g=o.stack;this.componentDidCatch(o.value,{componentStack:g!==null?g:""})})}function $h(e,n,t,o,l){if(t.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=t.alternate,n!==null&&ba(n,t,l,!0),t=Yn.current,t!==null){switch(t.tag){case 31:case 13:return tt===null?ns():t.alternate===null&&an===0&&(an=3),t.flags&=-257,t.flags|=65536,t.lanes=l,o===Dr?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([o]):n.add(o),wc(e,o,l)),!1;case 22:return t.flags|=65536,o===Dr?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([o]):t.add(o)),wc(e,o,l)),!1}throw Error(c(435,t.tag))}return wc(e,o,l),ns(),!1}if(Le)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,o!==bi&&(e=Error(c(422),{cause:o}),cl($n(e,t)))):(o!==bi&&(n=Error(c(423),{cause:o}),cl($n(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=$n(o,t),l=Wi(e.stateNode,o,l),Ri(e,l),an!==4&&(an=2)),!1;var r=Error(c(520),{cause:o});if(r=$n(r,t),Nl===null?Nl=[r]:Nl.push(r),an!==4&&(an=2),n===null)return!0;o=$n(o,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Wi(t.stateNode,o,e),Ri(t,e),!1;case 1:if(n=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(go===null||!go.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Nm(l),Rm(l,e,t,o),Ri(t,l),!1}t=t.return}while(t!==null);return!1}var ec=Error(c(461)),gn=!1;function jn(e,n,t,o){n.child=e===null?_d(n,null,t,o):Ko(n,e.child,t,o)}function Dm(e,n,t,o,l){t=t.render;var r=n.ref;if("ref"in o){var u={};for(var g in o)g!=="ref"&&(u[g]=o[g])}else u=o;return Vo(n),o=Ui(e,n,t,u,r,l),g=ki(),e!==null&&!gn?(zi(e,n,l),It(e,n,l)):(Le&&g&&hi(n),n.flags|=1,jn(e,n,o,l),n.child)}function Am(e,n,t,o,l){if(e===null){var r=t.type;return typeof r=="function"&&!pi(r)&&r.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=r,Cm(e,n,r,o,l)):(e=wr(t.type,null,o,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!ic(e,l)){var u=r.memoizedProps;if(t=t.compare,t=t!==null?t:rl,t(u,o)&&e.ref===n.ref)return It(e,n,l)}return n.flags|=1,e=Ut(r,o),e.ref=n.ref,e.return=n,n.child=e}function Cm(e,n,t,o,l){if(e!==null){var r=e.memoizedProps;if(rl(r,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=r,ic(e,l))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,It(e,n,l)}return nc(e,n,t,o,l)}function _m(e,n,t,o){var l=o.children,r=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,e!==null){for(o=n.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~r}else o=0,n.child=null;return Lm(e,n,r,t,o)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nr(n,r!==null?r.cachePool:null),r!==null?kd(n,r):Ai(),zd(n);else return o=n.lanes=536870912,Lm(e,n,r!==null?r.baseLanes|t:t,t,o)}else r!==null?(Nr(n,r.cachePool),kd(n,r),uo(),n.memoizedState=null):(e!==null&&Nr(n,null),Ai(),uo());return jn(e,n,l,t),n.child}function Sl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lm(e,n,t,o,l){var r=ji();return r=r===null?null:{parent:pn._currentValue,pool:r},n.memoizedState={baseLanes:t,cachePool:r},e!==null&&Nr(n,null),Ai(),zd(n),e!==null&&ba(e,n,o,!0),n.childLanes=l,null}function qr(e,n){return n=Xr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Um(e,n,t){return Ko(n,e.child,null,t),e=qr(n,n.pendingProps),e.flags|=2,qn(n),n.memoizedState=null,e}function Wh(e,n,t){var o=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Le){if(o.mode==="hidden")return e=qr(n,o),n.lanes=536870912,Sl(null,e);if(_i(n),(e=Ge)?(e=Jp(e,nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:to!==null?{id:St,overflow:Et}:null,retryLane:536870912,hydrationErrors:null},t=bd(e),t.return=n,n.child=t,Tn=n,Ge=null)):e=null,e===null)throw ao(n);return n.lanes=536870912,null}return qr(n,o)}var r=e.memoizedState;if(r!==null){var u=r.dehydrated;if(_i(n),l)if(n.flags&256)n.flags&=-257,n=Um(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(gn||ba(e,n,t,!1),l=(t&e.childLanes)!==0,gn||l){if(o=Je,o!==null&&(u=M(o,t),u!==0&&u!==r.retryLane))throw r.retryLane=u,Io(e,u),Bn(o,e,u),ec;ns(),n=Um(e,n,t)}else e=r.treeContext,Ge=ot(u.nextSibling),Tn=n,Le=!0,oo=null,nt=!1,e!==null&&Sd(n,e),n=qr(n,o),n.flags|=4096;return n}return e=Ut(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vr(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function nc(e,n,t,o,l){return Vo(n),t=Ui(e,n,t,o,void 0,l),o=ki(),e!==null&&!gn?(zi(e,n,l),It(e,n,l)):(Le&&o&&hi(n),n.flags|=1,jn(e,n,t,l),n.child)}function km(e,n,t,o,l,r){return Vo(n),n.updateQueue=null,t=Hd(n,o,t,l),Bd(e),o=ki(),e!==null&&!gn?(zi(e,n,r),It(e,n,r)):(Le&&o&&hi(n),n.flags|=1,jn(e,n,t,r),n.child)}function zm(e,n,t,o,l){if(Vo(n),n.stateNode===null){var r=fa,u=t.contextType;typeof u=="object"&&u!==null&&(r=wn(u)),r=new t(o,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$i,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=o,r.state=n.memoizedState,r.refs={},Oi(n),u=t.contextType,r.context=typeof u=="object"&&u!==null?wn(u):fa,r.state=n.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Qi(n,t,u,o),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(u=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),u!==r.state&&$i.enqueueReplaceState(r,r.state,null),hl(n,o,r,l),gl(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){r=n.stateNode;var g=n.memoizedProps,v=Qo(t,g);r.props=v;var D=r.context,B=t.contextType;u=fa,typeof B=="object"&&B!==null&&(u=wn(B));var P=t.getDerivedStateFromProps;B=typeof P=="function"||typeof r.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g||D!==u)&&Tm(n,r,o,u),ro=!1;var C=n.memoizedState;r.state=C,hl(n,o,r,l),gl(),D=n.memoizedState,g||C!==D||ro?(typeof P=="function"&&(Qi(n,t,P,o),D=n.memoizedState),(v=ro||Em(n,t,v,o,C,D,u))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=D),r.props=o,r.state=D,r.context=u,o=v):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{r=n.stateNode,Ni(e,n),u=n.memoizedProps,B=Qo(t,u),r.props=B,P=n.pendingProps,C=r.context,D=t.contextType,v=fa,typeof D=="object"&&D!==null&&(v=wn(D)),g=t.getDerivedStateFromProps,(D=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u!==P||C!==v)&&Tm(n,r,o,v),ro=!1,C=n.memoizedState,r.state=C,hl(n,o,r,l),gl();var k=n.memoizedState;u!==P||C!==k||ro||e!==null&&e.dependencies!==null&&Mr(e.dependencies)?(typeof g=="function"&&(Qi(n,t,g,o),k=n.memoizedState),(B=ro||Em(n,t,B,o,C,k,v)||e!==null&&e.dependencies!==null&&Mr(e.dependencies))?(D||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,k,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,k,v)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=k),r.props=o,r.state=k,r.context=v,o=B):(typeof r.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),o=!1)}return r=o,Vr(e,n),o=(n.flags&128)!==0,r||o?(r=n.stateNode,t=o&&typeof t.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&o?(n.child=Ko(n,e.child,null,l),n.child=Ko(n,null,t,l)):jn(e,n,t,l),n.memoizedState=r.state,e=n.child):e=It(e,n,l),e}function Bm(e,n,t,o){return Yo(),n.flags|=256,jn(e,n,t,o),n.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Od()}}function ac(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Xn),e}function Hm(e,n,t){var o=n.pendingProps,l=!1,r=(n.flags&128)!==0,u;if((u=r)||(u=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),u&&(l=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(l?co(n):uo(),(e=Ge)?(e=Jp(e,nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:to!==null?{id:St,overflow:Et}:null,retryLane:536870912,hydrationErrors:null},t=bd(e),t.return=n,n.child=t,Tn=n,Ge=null)):e=null,e===null)throw ao(n);return Pc(e)?n.lanes=32:n.lanes=536870912,null}var g=o.children;return o=o.fallback,l?(uo(),l=n.mode,g=Xr({mode:"hidden",children:g},l),o=Fo(o,l,t,null),g.return=n,o.return=n,g.sibling=o,n.child=g,o=n.child,o.memoizedState=oc(t),o.childLanes=ac(e,u,t),n.memoizedState=tc,Sl(null,o)):(co(n),lc(n,g))}var v=e.memoizedState;if(v!==null&&(g=v.dehydrated,g!==null)){if(r)n.flags&256?(co(n),n.flags&=-257,n=rc(e,n,t)):n.memoizedState!==null?(uo(),n.child=e.child,n.flags|=128,n=null):(uo(),g=o.fallback,l=n.mode,o=Xr({mode:"visible",children:o.children},l),g=Fo(g,l,t,null),g.flags|=2,o.return=n,g.return=n,o.sibling=g,n.child=o,Ko(n,e.child,null,t),o=n.child,o.memoizedState=oc(t),o.childLanes=ac(e,u,t),n.memoizedState=tc,n=Sl(null,o));else if(co(n),Pc(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var D=u.dgst;u=D,o=Error(c(419)),o.stack="",o.digest=u,cl({value:o,source:null,stack:null}),n=rc(e,n,t)}else if(gn||ba(e,n,t,!1),u=(t&e.childLanes)!==0,gn||u){if(u=Je,u!==null&&(o=M(u,t),o!==0&&o!==v.retryLane))throw v.retryLane=o,Io(e,o),Bn(u,e,o),ec;Hc(g)||ns(),n=rc(e,n,t)}else Hc(g)?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Ge=ot(g.nextSibling),Tn=n,Le=!0,oo=null,nt=!1,e!==null&&Sd(n,e),n=lc(n,o.children),n.flags|=4096);return n}return l?(uo(),g=o.fallback,l=n.mode,v=e.child,D=v.sibling,o=Ut(v,{mode:"hidden",children:o.children}),o.subtreeFlags=v.subtreeFlags&65011712,D!==null?g=Ut(D,g):(g=Fo(g,l,t,null),g.flags|=2),g.return=n,o.return=n,o.sibling=g,n.child=o,Sl(null,o),o=n.child,g=e.child.memoizedState,g===null?g=oc(t):(l=g.cachePool,l!==null?(v=pn._currentValue,l=l.parent!==v?{parent:v,pool:v}:l):l=Od(),g={baseLanes:g.baseLanes|t,cachePool:l}),o.memoizedState=g,o.childLanes=ac(e,u,t),n.memoizedState=tc,Sl(e.child,o)):(co(n),t=e.child,e=t.sibling,t=Ut(t,{mode:"visible",children:o.children}),t.return=n,t.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=t,n.memoizedState=null,t)}function lc(e,n){return n=Xr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xr(e,n){return e=Fn(22,e,null,n),e.lanes=0,e}function rc(e,n,t){return Ko(n,e.child,null,t),e=lc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pm(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Si(e.return,n,t)}function sc(e,n,t,o,l,r){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:l,treeForkCount:r}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=t,u.tailMode=l,u.treeForkCount=r)}function Im(e,n,t){var o=n.pendingProps,l=o.revealOrder,r=o.tail;o=o.children;var u=un.current,g=(u&2)!==0;if(g?(u=u&1|2,n.flags|=128):u&=1,q(un,u),jn(e,n,o,t),o=Le?il:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,t,n);else if(e.tag===19)Pm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Lr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),sc(n,!1,l,t,r,o);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Lr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}sc(n,!0,t,null,r,o);break;case"together":sc(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function It(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),fo|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ba(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ic(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Mr(e)))}function ey(e,n,t){switch(n.tag){case 3:rn(n,n.stateNode.containerInfo),lo(n,pn,e.memoizedState.cache),Yo();break;case 27:case 5:No(n);break;case 4:rn(n,n.stateNode.containerInfo);break;case 10:lo(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_i(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(co(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Hm(e,n,t):(co(n),e=It(e,n,t),e!==null?e.sibling:null);co(n);break;case 19:var l=(e.flags&128)!==0;if(o=(t&n.childLanes)!==0,o||(ba(e,n,t,!1),o=(t&n.childLanes)!==0),l){if(o)return Im(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(un,un.current),o)break;return null;case 22:return n.lanes=0,_m(e,n,t,n.pendingProps);case 24:lo(n,pn,e.memoizedState.cache)}return It(e,n,t)}function Fm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!ic(e,t)&&(n.flags&128)===0)return gn=!1,ey(e,n,t);gn=(e.flags&131072)!==0}else gn=!1,Le&&(n.flags&1048576)!==0&&xd(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Jo(n.elementType),n.type=e,typeof e=="function")pi(e)?(o=Qo(e,o),n.tag=1,n=zm(null,n,e,o,t)):(n.tag=0,n=nc(null,n,e,o,t));else{if(e!=null){var l=e.$$typeof;if(l===Ne){n.tag=11,n=Dm(null,n,e,o,t);break e}else if(l===O){n.tag=14,n=Am(null,n,e,o,t);break e}}throw n=Ie(e)||e,Error(c(306,n,""))}}return n;case 0:return nc(e,n,n.type,n.pendingProps,t);case 1:return o=n.type,l=Qo(o,n.pendingProps),zm(e,n,o,l,t);case 3:e:{if(rn(n,n.stateNode.containerInfo),e===null)throw Error(c(387));o=n.pendingProps;var r=n.memoizedState;l=r.element,Ni(e,n),hl(n,o,null,t);var u=n.memoizedState;if(o=u.cache,lo(n,pn,o),o!==r.cache&&Ei(n,[pn],t,!0),gl(),o=u.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=Bm(e,n,o,t);break e}else if(o!==l){l=$n(Error(c(424)),n),cl(l),n=Bm(e,n,o,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=ot(e.firstChild),Tn=n,Le=!0,oo=null,nt=!0,t=_d(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Yo(),o===l){n=It(e,n,t);break e}jn(e,n,o,t)}n=n.child}return n;case 26:return Vr(e,n),e===null?(t=Wp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Le||(t=n.type,e=n.pendingProps,o=is(pe.current).createElement(t),o[Q]=n,o[ee]=e,Mn(o,t,e),Ze(o),n.stateNode=o):n.memoizedState=Wp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return No(n),e===null&&Le&&(o=n.stateNode=Zp(n.type,n.pendingProps,pe.current),Tn=n,nt=!0,l=Ge,vo(n.type)?(Ic=l,Ge=ot(o.firstChild)):Ge=l),jn(e,n,n.pendingProps.children,t),Vr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((l=o=Ge)&&(o=Dy(o,n.type,n.pendingProps,nt),o!==null?(n.stateNode=o,Tn=n,Ge=ot(o.firstChild),nt=!1,l=!0):l=!1),l||ao(n)),No(n),l=n.type,r=n.pendingProps,u=e!==null?e.memoizedProps:null,o=r.children,kc(l,r)?o=null:u!==null&&kc(l,u)&&(n.flags|=32),n.memoizedState!==null&&(l=Ui(e,n,Vh,null,null,t),kl._currentValue=l),Vr(e,n),jn(e,n,o,t),n.child;case 6:return e===null&&Le&&((e=t=Ge)&&(t=Ay(t,n.pendingProps,nt),t!==null?(n.stateNode=t,Tn=n,Ge=null,e=!0):e=!1),e||ao(n)),null;case 13:return Hm(e,n,t);case 4:return rn(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ko(n,null,o,t):jn(e,n,o,t),n.child;case 11:return Dm(e,n,n.type,n.pendingProps,t);case 7:return jn(e,n,n.pendingProps,t),n.child;case 8:return jn(e,n,n.pendingProps.children,t),n.child;case 12:return jn(e,n,n.pendingProps.children,t),n.child;case 10:return o=n.pendingProps,lo(n,n.type,o.value),jn(e,n,o.children,t),n.child;case 9:return l=n.type._context,o=n.pendingProps.children,Vo(n),l=wn(l),o=o(l),n.flags|=1,jn(e,n,o,t),n.child;case 14:return Am(e,n,n.type,n.pendingProps,t);case 15:return Cm(e,n,n.type,n.pendingProps,t);case 19:return Im(e,n,t);case 31:return Wh(e,n,t);case 22:return _m(e,n,t,n.pendingProps);case 24:return Vo(n),o=wn(pn),e===null?(l=ji(),l===null&&(l=Je,r=Ti(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),n.memoizedState={parent:o,cache:l},Oi(n),lo(n,pn,l)):((e.lanes&t)!==0&&(Ni(e,n),hl(n,null,null,t),gl()),l=e.memoizedState,r=n.memoizedState,l.parent!==o?(l={parent:o,cache:o},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),lo(n,pn,o)):(o=r.cache,lo(n,pn,o),o!==l.cache&&Ei(n,[pn],t,!0))),jn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function Ft(e){e.flags|=4}function cc(e,n,t,o,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(gp())e.flags|=8192;else throw Go=Dr,Mi}else e.flags&=-16777217}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!af(n))if(gp())e.flags|=8192;else throw Go=Dr,Mi}function Jr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lo():536870912,e.lanes|=n,Da|=n)}function El(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function ny(e,n,t){var o=n.pendingProps;switch(yi(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return t=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Bt(pn),$e(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ya(n)?Ft(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vi())),Ke(n),null;case 26:var l=n.type,r=n.memoizedState;return e===null?(Ft(n),r!==null?(Ke(n),Ym(n,r)):(Ke(n),cc(n,l,null,o,t))):r?r!==e.memoizedState?(Ft(n),Ke(n),Ym(n,r)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ft(n),Ke(n),cc(n,l,e,o,t)),null;case 27:if(oa(n),t=pe.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ft(n);else{if(!o){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}e=$.current,ya(n)?Ed(n):(e=Zp(l,o,t),n.stateNode=e,Ft(n))}return Ke(n),null;case 5:if(oa(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ft(n);else{if(!o){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}if(r=$.current,ya(n))Ed(n);else{var u=is(pe.current);switch(r){case 1:r=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=u.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?u.createElement(l,{is:o.is}):u.createElement(l)}}r[Q]=n,r[ee]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=r;e:switch(Mn(r,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ft(n)}}return Ke(n),cc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ft(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(c(166));if(e=pe.current,ya(n)){if(e=n.stateNode,t=n.memoizedProps,o=null,l=Tn,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[Q]=n,e=!!(e.nodeValue===t||o!==null&&o.suppressHydrationWarning===!0||Hp(e.nodeValue,t)),e||ao(n,!0)}else e=is(e).createTextNode(o),e[Q]=n,n.stateNode=e}return Ke(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(o=ya(n),t!==null){if(e===null){if(!o)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Q]=n}else Yo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else t=vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ya(n),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Q]=n}else Yo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=o!==null,e=e!==null&&e.memoizedState!==null,t&&(o=n.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==l&&(o.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Jr(n,n.updateQueue),Ke(n),null);case 4:return $e(),e===null&&Ac(n.stateNode.containerInfo),Ke(n),null;case 10:return Bt(n.type),Ke(n),null;case 19:if(z(un),o=n.memoizedState,o===null)return Ke(n),null;if(l=(n.flags&128)!==0,r=o.rendering,r===null)if(l)El(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Lr(e),r!==null){for(n.flags|=128,El(o,!1),e=r.updateQueue,n.updateQueue=e,Jr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)yd(t,e),t=t.sibling;return q(un,un.current&1|2),Le&&kt(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&sn()>$r&&(n.flags|=128,l=!0,El(o,!1),n.lanes=4194304)}else{if(!l)if(e=Lr(r),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Jr(n,e),El(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Le)return Ke(n),null}else 2*sn()-o.renderingStartTime>$r&&t!==536870912&&(n.flags|=128,l=!0,El(o,!1),n.lanes=4194304);o.isBackwards?(r.sibling=n.child,n.child=r):(e=o.last,e!==null?e.sibling=r:n.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=sn(),e.sibling=null,t=un.current,q(un,l?t&1|2:t&1),Le&&kt(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return qn(n),Ci(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(t&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),t=n.updateQueue,t!==null&&Jr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==t&&(n.flags|=2048),e!==null&&z(Xo),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Bt(pn),Ke(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function ty(e,n){switch(yi(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bt(pn),$e(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oa(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(c(340));Yo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Yo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(un),null;case 4:return $e(),null;case 10:return Bt(n.type),null;case 22:case 23:return qn(n),Ci(),e!==null&&z(Xo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bt(pn),null;case 25:return null;default:return null}}function qm(e,n){switch(yi(n),n.tag){case 3:Bt(pn),$e();break;case 26:case 27:case 5:oa(n);break;case 4:$e();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:z(un);break;case 10:Bt(n.type);break;case 22:case 23:qn(n),Ci(),e!==null&&z(Xo);break;case 24:Bt(pn)}}function Tl(e,n){try{var t=n.updateQueue,o=t!==null?t.lastEffect:null;if(o!==null){var l=o.next;t=l;do{if((t.tag&e)===e){o=void 0;var r=t.create,u=t.inst;o=r(),u.destroy=o}t=t.next}while(t!==l)}}catch(g){Ye(n,n.return,g)}}function mo(e,n,t){try{var o=n.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var r=l.next;o=r;do{if((o.tag&e)===e){var u=o.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,l=n;var v=t,D=g;try{D()}catch(B){Ye(l,v,B)}}}o=o.next}while(o!==r)}}catch(B){Ye(n,n.return,B)}}function Vm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ud(n,t)}catch(o){Ye(e,e.return,o)}}}function Xm(e,n,t){t.props=Qo(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(o){Ye(e,n,o)}}function wl(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof t=="function"?e.refCleanup=t(o):t.current=o}}catch(l){Ye(e,n,l)}}function Tt(e,n){var t=e.ref,o=e.refCleanup;if(t!==null)if(typeof o=="function")try{o()}catch(l){Ye(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ye(e,n,l)}else t.current=null}function Jm(e){var n=e.type,t=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&o.focus();break e;case"img":t.src?o.src=t.src:t.srcSet&&(o.srcset=t.srcSet)}}catch(l){Ye(e,e.return,l)}}function uc(e,n,t){try{var o=e.stateNode;wy(o,e.type,t,n),o[ee]=n}catch(l){Ye(e,e.return,l)}}function Gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vo(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vo(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=_t));else if(o!==4&&(o===27&&vo(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(mc(e,n,t),e=e.sibling;e!==null;)mc(e,n,t),e=e.sibling}function Gr(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(o===27&&vo(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Gr(e,n,t),e=e.sibling;e!==null;)Gr(e,n,t),e=e.sibling}function Km(e){var n=e.stateNode,t=e.memoizedProps;try{for(var o=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Mn(n,o,t),n[Q]=e,n[ee]=t}catch(r){Ye(e,e.return,r)}}var Yt=!1,hn=!1,pc=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,xn=null;function oy(e,n){if(e=e.containerInfo,Lc=gs,e=id(e),ri(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var l=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var u=0,g=-1,v=-1,D=0,B=0,P=e,C=null;n:for(;;){for(var k;P!==t||l!==0&&P.nodeType!==3||(g=u+l),P!==r||o!==0&&P.nodeType!==3||(v=u+o),P.nodeType===3&&(u+=P.nodeValue.length),(k=P.firstChild)!==null;)C=P,P=k;for(;;){if(P===e)break n;if(C===t&&++D===l&&(g=u),C===r&&++B===o&&(v=u),(k=P.nextSibling)!==null)break;P=C,C=P.parentNode}P=k}t=g===-1||v===-1?null:{start:g,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uc={focusedElem:e,selectionRange:t},gs=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,r=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=n,l=r.memoizedProps,r=r.memoizedState,o=t.stateNode;try{var ne=Qo(t.type,l);e=o.getSnapshotBeforeUpdate(ne,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){Ye(t,t.return,de)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Bc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Qm(e,n,t){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t),o&4&&Tl(5,t);break;case 1:if(Vt(e,t),o&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(u){Ye(t,t.return,u)}else{var l=Qo(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ye(t,t.return,u)}}o&64&&Vm(t),o&512&&wl(t,t.return);break;case 3:if(Vt(e,t),o&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ud(e,n)}catch(u){Ye(t,t.return,u)}}break;case 27:n===null&&o&4&&Km(t);case 26:case 5:Vt(e,t),n===null&&o&4&&Jm(t),o&512&&wl(t,t.return);break;case 12:Vt(e,t);break;case 31:Vt(e,t),o&4&&ep(e,t);break;case 13:Vt(e,t),o&4&&np(e,t),o&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=my.bind(null,t),Cy(e,t))));break;case 22:if(o=t.memoizedState!==null||Yt,!o){n=n!==null&&n.memoizedState!==null||hn,l=Yt;var r=hn;Yt=o,(hn=n)&&!r?Xt(e,t,(t.subtreeFlags&8772)!==0):Vt(e,t),Yt=l,hn=r}break;case 30:break;default:Vt(e,t)}}function $m(e){var n=e.alternate;n!==null&&(e.alternate=null,$m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&nn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Ln=!1;function qt(e,n,t){for(t=t.child;t!==null;)Wm(e,n,t),t=t.sibling}function Wm(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Do,t)}catch{}switch(t.tag){case 26:hn||Tt(t,n),qt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:hn||Tt(t,n);var o=Qe,l=Ln;vo(t.type)&&(Qe=t.stateNode,Ln=!1),qt(e,n,t),_l(t.stateNode),Qe=o,Ln=l;break;case 5:hn||Tt(t,n);case 6:if(o=Qe,l=Ln,Qe=null,qt(e,n,t),Qe=o,Ln=l,Qe!==null)if(Ln)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(t.stateNode)}catch(r){Ye(t,n,r)}else try{Qe.removeChild(t.stateNode)}catch(r){Ye(t,n,r)}break;case 18:Qe!==null&&(Ln?(e=Qe,Vp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ba(e)):Vp(Qe,t.stateNode));break;case 4:o=Qe,l=Ln,Qe=t.stateNode.containerInfo,Ln=!0,qt(e,n,t),Qe=o,Ln=l;break;case 0:case 11:case 14:case 15:mo(2,t,n),hn||mo(4,t,n),qt(e,n,t);break;case 1:hn||(Tt(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"&&Xm(t,n,o)),qt(e,n,t);break;case 21:qt(e,n,t);break;case 22:hn=(o=hn)||t.memoizedState!==null,qt(e,n,t),hn=o;break;default:qt(e,n,t)}}function ep(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ba(e)}catch(t){Ye(n,n.return,t)}}}function np(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ba(e)}catch(t){Ye(n,n.return,t)}}function ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Zm),n;default:throw Error(c(435,e.tag))}}function Kr(e,n){var t=ay(e);n.forEach(function(o){if(!t.has(o)){t.add(o);var l=py.bind(null,e,o);o.then(l,l)}})}function Un(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var l=t[o],r=e,u=n,g=u;e:for(;g!==null;){switch(g.tag){case 27:if(vo(g.type)){Qe=g.stateNode,Ln=!1;break e}break;case 5:Qe=g.stateNode,Ln=!1;break e;case 3:case 4:Qe=g.stateNode.containerInfo,Ln=!0;break e}g=g.return}if(Qe===null)throw Error(c(160));Wm(r,u,l),Qe=null,Ln=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tp(n,e),n=n.sibling}var bt=null;function tp(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Un(n,e),kn(e),o&4&&(mo(3,e,e.return),Tl(3,e),mo(5,e,e.return));break;case 1:Un(n,e),kn(e),o&512&&(hn||t===null||Tt(t,t.return)),o&64&&Yt&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?o:t.concat(o))));break;case 26:var l=bt;if(Un(n,e),kn(e),o&512&&(hn||t===null||Tt(t,t.return)),o&4){var r=t!==null?t.memoizedState:null;if(o=e.memoizedState,t===null)if(o===null)if(e.stateNode===null){e:{o=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(o){case"title":r=l.getElementsByTagName("title")[0],(!r||r[en]||r[Q]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(o),l.head.insertBefore(r,l.querySelector("head > title"))),Mn(r,o,t),r[Q]=e,Ze(r),o=r;break e;case"link":var u=tf("link","href",l).get(o+(t.href||""));if(u){for(var g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(g,1);break n}}r=l.createElement(o),Mn(r,o,t),l.head.appendChild(r);break;case"meta":if(u=tf("meta","content",l).get(o+(t.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(g,1);break n}}r=l.createElement(o),Mn(r,o,t),l.head.appendChild(r);break;default:throw Error(c(468,o))}r[Q]=e,Ze(r),o=r}e.stateNode=o}else of(l,e.type,e.stateNode);else e.stateNode=nf(l,o,e.memoizedProps);else r!==o?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,o===null?of(l,e.type,e.stateNode):nf(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uc(e,e.memoizedProps,t.memoizedProps)}break;case 27:Un(n,e),kn(e),o&512&&(hn||t===null||Tt(t,t.return)),t!==null&&o&4&&uc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Un(n,e),kn(e),o&512&&(hn||t===null||Tt(t,t.return)),e.flags&32){l=e.stateNode;try{sa(l,"")}catch(ne){Ye(e,e.return,ne)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,uc(e,l,t!==null?t.memoizedProps:l)),o&1024&&(pc=!0);break;case 6:if(Un(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(c(162));o=e.memoizedProps,t=e.stateNode;try{t.nodeValue=o}catch(ne){Ye(e,e.return,ne)}}break;case 3:if(ds=null,l=bt,bt=cs(n.containerInfo),Un(n,e),bt=l,kn(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Ba(n.containerInfo)}catch(ne){Ye(e,e.return,ne)}pc&&(pc=!1,op(e));break;case 4:o=bt,bt=cs(e.stateNode.containerInfo),Un(n,e),kn(e),bt=o;break;case 12:Un(n,e),kn(e);break;case 31:Un(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kr(e,o)));break;case 13:Un(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Qr=sn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kr(e,o)));break;case 22:l=e.memoizedState!==null;var v=t!==null&&t.memoizedState!==null,D=Yt,B=hn;if(Yt=D||l,hn=B||v,Un(n,e),hn=B,Yt=D,kn(e),o&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||v||Yt||hn||$o(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){v=t=n;try{if(r=v.stateNode,l)u=r.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=v.stateNode;var P=v.memoizedProps.style,C=P!=null&&P.hasOwnProperty("display")?P.display:null;g.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(ne){Ye(v,v.return,ne)}}}else if(n.tag===6){if(t===null){v=n;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(ne){Ye(v,v.return,ne)}}}else if(n.tag===18){if(t===null){v=n;try{var k=v.stateNode;l?Xp(k,!0):Xp(v.stateNode,!1)}catch(ne){Ye(v,v.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(t=o.retryQueue,t!==null&&(o.retryQueue=null,Kr(e,t))));break;case 19:Un(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kr(e,o)));break;case 30:break;case 21:break;default:Un(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var t,o=e.return;o!==null;){if(Gm(o)){t=o;break}o=o.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var l=t.stateNode,r=dc(e);Gr(e,r,l);break;case 5:var u=t.stateNode;t.flags&32&&(sa(u,""),t.flags&=-33);var g=dc(e);Gr(e,g,u);break;case 3:case 4:var v=t.stateNode.containerInfo,D=dc(e);mc(e,D,v);break;default:throw Error(c(161))}}catch(B){Ye(e,e.return,B)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function op(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;op(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(e,n.alternate,n),n=n.sibling}function $o(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:mo(4,n,n.return),$o(n);break;case 1:Tt(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Xm(n,n.return,t),$o(n);break;case 27:_l(n.stateNode);case 26:case 5:Tt(n,n.return),$o(n);break;case 22:n.memoizedState===null&&$o(n);break;case 30:$o(n);break;default:$o(n)}e=e.sibling}}function Xt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,l=e,r=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:Xt(l,r,t),Tl(4,r);break;case 1:if(Xt(l,r,t),o=r,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Ye(o,o.return,D)}if(o=r,l=o.updateQueue,l!==null){var g=o.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Ld(v[l],g)}catch(D){Ye(o,o.return,D)}}t&&u&64&&Vm(r),wl(r,r.return);break;case 27:Km(r);case 26:case 5:Xt(l,r,t),t&&o===null&&u&4&&Jm(r),wl(r,r.return);break;case 12:Xt(l,r,t);break;case 31:Xt(l,r,t),t&&u&4&&ep(l,r);break;case 13:Xt(l,r,t),t&&u&4&&np(l,r);break;case 22:r.memoizedState===null&&Xt(l,r,t),wl(r,r.return);break;case 30:break;default:Xt(l,r,t)}n=n.sibling}}function fc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ul(t))}function gc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ul(e))}function vt(e,n,t,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ap(e,n,t,o),n=n.sibling}function ap(e,n,t,o){var l=n.flags;switch(n.tag){case 0:case 11:case 15:vt(e,n,t,o),l&2048&&Tl(9,n);break;case 1:vt(e,n,t,o);break;case 3:vt(e,n,t,o),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ul(e)));break;case 12:if(l&2048){vt(e,n,t,o),e=n.stateNode;try{var r=n.memoizedProps,u=r.id,g=r.onPostCommit;typeof g=="function"&&g(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ye(n,n.return,v)}}else vt(e,n,t,o);break;case 31:vt(e,n,t,o);break;case 13:vt(e,n,t,o);break;case 23:break;case 22:r=n.stateNode,u=n.alternate,n.memoizedState!==null?r._visibility&2?vt(e,n,t,o):jl(e,n):r._visibility&2?vt(e,n,t,o):(r._visibility|=2,Oa(e,n,t,o,(n.subtreeFlags&10256)!==0||!1)),l&2048&&fc(u,n);break;case 24:vt(e,n,t,o),l&2048&&gc(n.alternate,n);break;default:vt(e,n,t,o)}}function Oa(e,n,t,o,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var r=e,u=n,g=t,v=o,D=u.flags;switch(u.tag){case 0:case 11:case 15:Oa(r,u,g,v,l),Tl(8,u);break;case 23:break;case 22:var B=u.stateNode;u.memoizedState!==null?B._visibility&2?Oa(r,u,g,v,l):jl(r,u):(B._visibility|=2,Oa(r,u,g,v,l)),l&&D&2048&&fc(u.alternate,u);break;case 24:Oa(r,u,g,v,l),l&&D&2048&&gc(u.alternate,u);break;default:Oa(r,u,g,v,l)}n=n.sibling}}function jl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,o=n,l=o.flags;switch(o.tag){case 22:jl(t,o),l&2048&&fc(o.alternate,o);break;case 24:jl(t,o),l&2048&&gc(o.alternate,o);break;default:jl(t,o)}n=n.sibling}}var Ml=8192;function Na(e,n,t){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)lp(e,n,t),e=e.sibling}function lp(e,n,t){switch(e.tag){case 26:Na(e,n,t),e.flags&Ml&&e.memoizedState!==null&&qy(t,bt,e.memoizedState,e.memoizedProps);break;case 5:Na(e,n,t);break;case 3:case 4:var o=bt;bt=cs(e.stateNode.containerInfo),Na(e,n,t),bt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ml,Ml=16777216,Na(e,n,t),Ml=o):Na(e,n,t));break;default:Na(e,n,t)}}function rp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var o=n[t];xn=o,ip(o,e)}rp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sp(e),e=e.sibling}function sp(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&mo(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zr(e)):Ol(e);break;default:Ol(e)}}function Zr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var o=n[t];xn=o,ip(o,e)}rp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:mo(8,n,n.return),Zr(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Zr(n));break;default:Zr(n)}e=e.sibling}}function ip(e,n){for(;xn!==null;){var t=xn;switch(t.tag){case 0:case 11:case 15:mo(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var o=t.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ul(t.memoizedState.cache)}if(o=t.child,o!==null)o.return=t,xn=o;else e:for(t=e;xn!==null;){o=xn;var l=o.sibling,r=o.return;if($m(o),o===t){xn=null;break e}if(l!==null){l.return=r,xn=l;break e}xn=r}}}var ly={getCacheForType:function(e){var n=wn(pn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return wn(pn).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Je=null,Te=null,Me=0,Fe=0,Vn=null,po=!1,Ra=!1,hc=!1,Jt=0,an=0,fo=0,Wo=0,yc=0,Xn=0,Da=0,Nl=null,zn=null,bc=!1,Qr=0,cp=0,$r=1/0,Wr=null,go=null,bn=0,ho=null,Aa=null,Gt=0,vc=0,xc=null,up=null,Rl=0,Sc=null;function Jn(){return(Pe&2)!==0&&Me!==0?Me&-Me:L.T!==null?Oc():V()}function dp(){if(Xn===0)if((Me&536870912)===0||Le){var e=Ao;Ao<<=1,(Ao&3932160)===0&&(Ao=262144),Xn=e}else Xn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Xn}function Bn(e,n,t){(e===Je&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),yo(e,Me,Xn,!1)),eo(e,t),((Pe&2)===0||e!==Je)&&(e===Je&&((Pe&2)===0&&(Wo|=t),an===4&&yo(e,Me,Xn,!1)),wt(e))}function mp(e,n,t){if((Pe&6)!==0)throw Error(c(327));var o=!t&&(n&127)===0&&(n&e.expiredLanes)===0||_o(e,n),l=o?cy(e,n):Tc(e,n,!0),r=o;do{if(l===0){Ra&&!o&&yo(e,n,0,!1);break}else{if(t=e.current.alternate,r&&!sy(t)){l=Tc(e,n,!1),r=!1;continue}if(l===2){if(r=n,e.errorRecoveryDisabledLanes&r)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var g=e;l=Nl;var v=g.current.memoizedState.isDehydrated;if(v&&(Ca(g,u).flags|=256),u=Tc(g,u,!1),u!==2){if(hc&&!v){g.errorRecoveryDisabledLanes|=r,Wo|=r,l=4;break e}r=zn,zn=l,r!==null&&(zn===null?zn=r:zn.push.apply(zn,r))}l=u}if(r=!1,l!==2)continue}}if(l===1){Ca(e,0),yo(e,n,0,!0);break}e:{switch(o=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:yo(o,n,Xn,!po);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(l=Qr+300-sn(),10<l)){if(yo(o,n,Xn,!po),Co(o,0,!0)!==0)break e;Gt=n,o.timeoutHandle=Yp(pp.bind(null,o,t,zn,Wr,bc,n,Xn,Wo,Da,po,r,"Throttled",-0,0),l);break e}pp(o,t,zn,Wr,bc,n,Xn,Wo,Da,po,r,null,-0,0)}}break}while(!0);wt(e)}function pp(e,n,t,o,l,r,u,g,v,D,B,P,C,k){if(e.timeoutHandle=-1,P=n.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},lp(n,r,P);var ne=(r&62914560)===r?Qr-sn():(r&4194048)===r?cp-sn():0;if(ne=Vy(P,ne),ne!==null){Gt=r,e.cancelPendingCommit=ne(Sp.bind(null,e,n,r,t,o,l,u,g,v,B,P,null,C,k)),yo(e,r,u,!D);return}}Sp(e,n,r,t,o,l,u,g,v)}function sy(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var o=0;o<t.length;o++){var l=t[o],r=l.getSnapshot;l=l.value;try{if(!In(r(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yo(e,n,t,o){n&=~yc,n&=~Wo,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var l=n;0<l;){var r=31-On(l),u=1<<r;o[r]=-1,l&=~u}t!==0&&ur(e,t,n)}function es(){return(Pe&6)===0?(Dl(0),!1):!0}function Ec(){if(Te!==null){if(Fe===0)var e=Te.return;else e=Te,zt=qo=null,Bi(e),Ea=null,ml=0,e=Te;for(;e!==null;)qm(e.alternate,e),e=e.return;Te=null}}function Ca(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Oy(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Gt=0,Ec(),Je=e,Te=t=Ut(e.current,null),Me=n,Fe=0,Vn=null,po=!1,Ra=_o(e,n),hc=!1,Da=Xn=yc=Wo=fo=an=0,zn=Nl=null,bc=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var l=31-On(o),r=1<<l;n|=e[l],o&=~r}return Jt=n,Sr(),t}function fp(e,n){he=null,L.H=xl,n===Sa||n===Rr?(n=Dd(),Fe=3):n===Mi?(n=Dd(),Fe=4):Fe=n===ec?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,Te===null&&(an=1,Yr(e,$n(n,e.current)))}function gp(){var e=Yn.current;return e===null?!0:(Me&4194048)===Me?tt===null:(Me&62914560)===Me||(Me&536870912)!==0?e===tt:!1}function hp(){var e=L.H;return L.H=xl,e===null?xl:e}function yp(){var e=L.A;return L.A=ly,e}function ns(){an=4,po||(Me&4194048)!==Me&&Yn.current!==null||(Ra=!0),(fo&134217727)===0&&(Wo&134217727)===0||Je===null||yo(Je,Me,Xn,!1)}function Tc(e,n,t){var o=Pe;Pe|=2;var l=hp(),r=yp();(Je!==e||Me!==n)&&(Wr=null,Ca(e,n)),n=!1;var u=an;e:do try{if(Fe!==0&&Te!==null){var g=Te,v=Vn;switch(Fe){case 8:Ec(),u=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var D=Fe;if(Fe=0,Vn=null,_a(e,g,v,D),t&&Ra){u=0;break e}break;default:D=Fe,Fe=0,Vn=null,_a(e,g,v,D)}}iy(),u=an;break}catch(B){fp(e,B)}while(!0);return n&&e.shellSuspendCounter++,zt=qo=null,Pe=o,L.H=l,L.A=r,Te===null&&(Je=null,Me=0,Sr()),u}function iy(){for(;Te!==null;)bp(Te)}function cy(e,n){var t=Pe;Pe|=2;var o=hp(),l=yp();Je!==e||Me!==n?(Wr=null,$r=sn()+500,Ca(e,n)):Ra=_o(e,n);e:do try{if(Fe!==0&&Te!==null){n=Te;var r=Vn;n:switch(Fe){case 1:Fe=0,Vn=null,_a(e,n,r,1);break;case 2:case 9:if(Nd(r)){Fe=0,Vn=null,vp(n);break}n=function(){Fe!==2&&Fe!==9||Je!==e||(Fe=7),wt(e)},r.then(n,n);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:Nd(r)?(Fe=0,Vn=null,vp(n)):(Fe=0,Vn=null,_a(e,n,r,7));break;case 5:var u=null;switch(Te.tag){case 26:u=Te.memoizedState;case 5:case 27:var g=Te;if(u?af(u):g.stateNode.complete){Fe=0,Vn=null;var v=g.sibling;if(v!==null)Te=v;else{var D=g.return;D!==null?(Te=D,ts(D)):Te=null}break n}}Fe=0,Vn=null,_a(e,n,r,5);break;case 6:Fe=0,Vn=null,_a(e,n,r,6);break;case 8:Ec(),an=6;break e;default:throw Error(c(462))}}uy();break}catch(B){fp(e,B)}while(!0);return zt=qo=null,L.H=o,L.A=l,Pe=t,Te!==null?0:(Je=null,Me=0,Sr(),an)}function uy(){for(;Te!==null&&!Ps();)bp(Te)}function bp(e){var n=Fm(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,n===null?ts(e):Te=n}function vp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=km(t,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=km(t,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Bi(n);default:qm(t,n),n=Te=yd(n,Jt),n=Fm(t,n,Jt)}e.memoizedProps=e.pendingProps,n===null?ts(e):Te=n}function _a(e,n,t,o){zt=qo=null,Bi(n),Ea=null,ml=0;var l=n.return;try{if($h(e,l,n,t,Me)){an=1,Yr(e,$n(t,e.current)),Te=null;return}}catch(r){if(l!==null)throw Te=l,r;an=1,Yr(e,$n(t,e.current)),Te=null;return}n.flags&32768?(Le||o===1?e=!0:Ra||(Me&536870912)!==0?e=!1:(po=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),xp(n,e)):ts(n)}function ts(e){var n=e;do{if((n.flags&32768)!==0){xp(n,po);return}e=n.return;var t=ny(n.alternate,n,Jt);if(t!==null){Te=t;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);an===0&&(an=5)}function xp(e,n){do{var t=ty(e.alternate,e);if(t!==null){t.flags&=32767,Te=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=t}while(e!==null);an=6,Te=null}function Sp(e,n,t,o,l,r,u,g,v){e.cancelPendingCommit=null;do os();while(bn!==0);if((Pe&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(r=n.lanes|n.childLanes,r|=di,qs(e,t,r,u,g,v),e===Je&&(Te=Je=null,Me=0),Aa=n,ho=e,Gt=t,vc=r,xc=l,up=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fy(An,function(){return Mp(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,l=Y.p,Y.p=2,u=Pe,Pe|=4;try{oy(e,n,t)}finally{Pe=u,Y.p=l,L.T=o}}bn=1,Ep(),Tp(),wp()}}function Ep(){if(bn===1){bn=0;var e=ho,n=Aa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=L.T,L.T=null;var o=Y.p;Y.p=2;var l=Pe;Pe|=4;try{tp(n,e);var r=Uc,u=id(e.containerInfo),g=r.focusedElem,v=r.selectionRange;if(u!==g&&g&&g.ownerDocument&&sd(g.ownerDocument.documentElement,g)){if(v!==null&&ri(g)){var D=v.start,B=v.end;if(B===void 0&&(B=D),"selectionStart"in g)g.selectionStart=D,g.selectionEnd=Math.min(B,g.value.length);else{var P=g.ownerDocument||document,C=P&&P.defaultView||window;if(C.getSelection){var k=C.getSelection(),ne=g.textContent.length,de=Math.min(v.start,ne),Xe=v.end===void 0?de:Math.min(v.end,ne);!k.extend&&de>Xe&&(u=Xe,Xe=de,de=u);var j=rd(g,de),T=rd(g,Xe);if(j&&T&&(k.rangeCount!==1||k.anchorNode!==j.node||k.anchorOffset!==j.offset||k.focusNode!==T.node||k.focusOffset!==T.offset)){var R=P.createRange();R.setStart(j.node,j.offset),k.removeAllRanges(),de>Xe?(k.addRange(R),k.extend(T.node,T.offset)):(R.setEnd(T.node,T.offset),k.addRange(R))}}}}for(P=[],k=g;k=k.parentNode;)k.nodeType===1&&P.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<P.length;g++){var H=P[g];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}gs=!!Lc,Uc=Lc=null}finally{Pe=l,Y.p=o,L.T=t}}e.current=n,bn=2}}function Tp(){if(bn===2){bn=0;var e=ho,n=Aa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=L.T,L.T=null;var o=Y.p;Y.p=2;var l=Pe;Pe|=4;try{Qm(e,n.alternate,n)}finally{Pe=l,Y.p=o,L.T=t}}bn=3}}function wp(){if(bn===4||bn===3){bn=0,Is();var e=ho,n=Aa,t=Gt,o=up;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Aa=ho=null,jp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(go=null),F(t),n=n.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Do,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,l=Y.p,Y.p=2,L.T=null;try{for(var r=e.onRecoverableError,u=0;u<o.length;u++){var g=o[u];r(g.value,{componentStack:g.stack})}}finally{L.T=n,Y.p=l}}(Gt&3)!==0&&os(),wt(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Sc?Rl++:(Rl=0,Sc=e):Rl=0,Dl(0)}}function jp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ul(n)))}function os(){return Ep(),Tp(),wp(),Mp()}function Mp(){if(bn!==5)return!1;var e=ho,n=vc;vc=0;var t=F(Gt),o=L.T,l=Y.p;try{Y.p=32>t?32:t,L.T=null,t=xc,xc=null;var r=ho,u=Gt;if(bn=0,Aa=ho=null,Gt=0,(Pe&6)!==0)throw Error(c(331));var g=Pe;if(Pe|=4,sp(r.current),ap(r,r.current,u,t),Pe=g,Dl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Do,r)}catch{}return!0}finally{Y.p=l,L.T=o,jp(e,n)}}function Op(e,n,t){n=$n(t,n),n=Wi(e.stateNode,n,2),e=io(e,n,2),e!==null&&(eo(e,2),wt(e))}function Ye(e,n,t){if(e.tag===3)Op(e,e,t);else for(;n!==null;){if(n.tag===3){Op(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(go===null||!go.has(o))){e=$n(t,e),t=Nm(2),o=io(n,t,2),o!==null&&(Rm(t,o,n,e),eo(o,2),wt(o));break}}n=n.return}}function wc(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new ry;var l=new Set;o.set(n,l)}else l=o.get(n),l===void 0&&(l=new Set,o.set(n,l));l.has(t)||(hc=!0,l.add(t),e=dy.bind(null,e,n,t),n.then(e,e))}function dy(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Je===e&&(Me&t)===t&&(an===4||an===3&&(Me&62914560)===Me&&300>sn()-Qr?(Pe&2)===0&&Ca(e,0):yc|=t,Da===Me&&(Da=0)),wt(e)}function Np(e,n){n===0&&(n=Lo()),e=Io(e,n),e!==null&&(eo(e,n),wt(e))}function my(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Np(e,t)}function py(e,n){var t=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(c(314))}o!==null&&o.delete(n),Np(e,t)}function fy(e,n){return Ja(e,n)}var as=null,La=null,jc=!1,ls=!1,Mc=!1,bo=0;function wt(e){e!==La&&e.next===null&&(La===null?as=La=e:La=La.next=e),ls=!0,jc||(jc=!0,hy())}function Dl(e,n){if(!Mc&&ls){Mc=!0;do for(var t=!1,o=as;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var r=0;else{var u=o.suspendedLanes,g=o.pingedLanes;r=(1<<31-On(42|e)+1)-1,r&=l&~(u&~g),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Cp(o,r))}else r=Me,r=Co(o,o===Je?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||_o(o,r)||(t=!0,Cp(o,r));o=o.next}while(t);Mc=!1}}function gy(){Rp()}function Rp(){ls=jc=!1;var e=0;bo!==0&&My()&&(e=bo);for(var n=sn(),t=null,o=as;o!==null;){var l=o.next,r=Dp(o,n);r===0?(o.next=null,t===null?as=l:t.next=l,l===null&&(La=t)):(t=o,(e!==0||(r&3)!==0)&&(ls=!0)),o=l}bn!==0&&bn!==5||Dl(e),bo!==0&&(bo=0)}function Dp(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var u=31-On(r),g=1<<u,v=l[u];v===-1?((g&t)===0||(g&o)!==0)&&(l[u]=cr(g,n)):v<=n&&(e.expiredLanes|=g),r&=~g}if(n=Je,t=Me,t=Co(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,t===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ga(o),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||_o(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(o!==null&&Ga(o),F(t)){case 2:case 8:t=la;break;case 32:t=An;break;case 268435456:t=Za;break;default:t=An}return o=Ap.bind(null,e),t=Ja(t,o),e.callbackPriority=n,e.callbackNode=t,n}return o!==null&&o!==null&&Ga(o),e.callbackPriority=2,e.callbackNode=null,2}function Ap(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(os()&&e.callbackNode!==t)return null;var o=Me;return o=Co(e,e===Je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(mp(e,o,n),Dp(e,sn()),e.callbackNode!=null&&e.callbackNode===t?Ap.bind(null,e):null)}function Cp(e,n){if(os())return null;mp(e,n,!0)}function hy(){Ny(function(){(Pe&6)!==0?Ja(Ka,gy):Rp()})}function Oc(){if(bo===0){var e=va;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),bo=e}return bo}function _p(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pr(""+e)}function Lp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function yy(e,n,t,o,l){if(n==="submit"&&t&&t.stateNode===l){var r=_p((l[ee]||null).action),u=o.submitter;u&&(n=(n=u[ee]||null)?_p(n.formAction):u.getAttribute("formAction"),n!==null&&(r=n,u=null));var g=new yr("action","action",null,o,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(bo!==0){var v=u?Lp(l,u):new FormData(l);Ji(t,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(g.preventDefault(),v=u?Lp(l,u):new FormData(l),Ji(t,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Nc=0;Nc<ui.length;Nc++){var Rc=ui[Nc],by=Rc.toLowerCase(),vy=Rc[0].toUpperCase()+Rc.slice(1);yt(by,"on"+vy)}yt(dd,"onAnimationEnd"),yt(md,"onAnimationIteration"),yt(pd,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(Uh,"onTransitionRun"),yt(kh,"onTransitionStart"),yt(zh,"onTransitionCancel"),yt(fd,"onTransitionEnd"),Kn("onMouseEnter",["mouseout","mouseover"]),Kn("onMouseLeave",["mouseout","mouseover"]),Kn("onPointerEnter",["pointerout","pointerover"]),Kn("onPointerLeave",["pointerout","pointerover"]),gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Up(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],l=o.event;o=o.listeners;e:{var r=void 0;if(n)for(var u=o.length-1;0<=u;u--){var g=o[u],v=g.instance,D=g.currentTarget;if(g=g.listener,v!==r&&l.isPropagationStopped())break e;r=g,l.currentTarget=D;try{r(l)}catch(B){xr(B)}l.currentTarget=null,r=v}else for(u=0;u<o.length;u++){if(g=o[u],v=g.instance,D=g.currentTarget,g=g.listener,v!==r&&l.isPropagationStopped())break e;r=g,l.currentTarget=D;try{r(l)}catch(B){xr(B)}l.currentTarget=null,r=v}}}}function we(e,n){var t=n[ue];t===void 0&&(t=n[ue]=new Set);var o=e+"__bubble";t.has(o)||(kp(n,e,2,!1),t.add(o))}function Dc(e,n,t){var o=0;n&&(o|=4),kp(t,e,o,n)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[rs]){e[rs]=!0,ft.forEach(function(t){t!=="selectionchange"&&(xy.has(t)||Dc(t,!1,e),Dc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rs]||(n[rs]=!0,Dc("selectionchange",!1,n))}}function kp(e,n,t,o){switch(mf(n)){case 2:var l=Gy;break;case 8:l=Ky;break;default:l=Xc}t=l.bind(null,n,t,e),l=void 0,!Qs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Cc(e,n,t,o,l){var r=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var u=o.tag;if(u===3||u===4){var g=o.stateNode.containerInfo;if(g===l)break;if(u===4)for(u=o.return;u!==null;){var v=u.tag;if((v===3||v===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;g!==null;){if(u=tn(g),u===null)return;if(v=u.tag,v===5||v===6||v===26||v===27){o=r=u;continue e}g=g.parentNode}}o=o.return}Iu(function(){var D=r,B=Ks(t),P=[];e:{var C=gd.get(e);if(C!==void 0){var k=yr,ne=e;switch(e){case"keypress":if(gr(t)===0)break e;case"keydown":case"keyup":k=ph;break;case"focusin":ne="focus",k=ni;break;case"focusout":ne="blur",k=ni;break;case"beforeblur":case"afterblur":k=ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=hh;break;case dd:case md:case pd:k=ah;break;case fd:k=bh;break;case"scroll":case"scrollend":k=Wg;break;case"wheel":k=xh;break;case"copy":case"cut":case"paste":k=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Xu;break;case"toggle":case"beforetoggle":k=Eh}var de=(n&4)!==0,Xe=!de&&(e==="scroll"||e==="scrollend"),j=de?C!==null?C+"Capture":null:C;de=[];for(var T=D,R;T!==null;){var H=T;if(R=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||R===null||j===null||(H=Wa(T,j),H!=null&&de.push(Cl(T,H,R))),Xe)break;T=T.return}0<de.length&&(C=new k(C,ne,null,t,B),P.push({event:C,listeners:de}))}}if((n&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",C&&t!==Gs&&(ne=t.relatedTarget||t.fromElement)&&(tn(ne)||ne[ae]))break e;if((k||C)&&(C=B.window===B?B:(C=B.ownerDocument)?C.defaultView||C.parentWindow:window,k?(ne=t.relatedTarget||t.toElement,k=D,ne=ne?tn(ne):null,ne!==null&&(Xe=m(ne),de=ne.tag,ne!==Xe||de!==5&&de!==27&&de!==6)&&(ne=null)):(k=null,ne=D),k!==ne)){if(de=qu,H="onMouseLeave",j="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(de=Xu,H="onPointerLeave",j="onPointerEnter",T="pointer"),Xe=k==null?C:vn(k),R=ne==null?C:vn(ne),C=new de(H,T+"leave",k,t,B),C.target=Xe,C.relatedTarget=R,H=null,tn(B)===D&&(de=new de(j,T+"enter",ne,t,B),de.target=R,de.relatedTarget=Xe,H=de),Xe=H,k&&ne)n:{for(de=Sy,j=k,T=ne,R=0,H=j;H;H=de(H))R++;H=0;for(var ce=T;ce;ce=de(ce))H++;for(;0<R-H;)j=de(j),R--;for(;0<H-R;)T=de(T),H--;for(;R--;){if(j===T||T!==null&&j===T.alternate){de=j;break n}j=de(j),T=de(T)}de=null}else de=null;k!==null&&zp(P,C,k,de,!1),ne!==null&&Xe!==null&&zp(P,Xe,ne,de,!0)}}e:{if(C=D?vn(D):window,k=C.nodeName&&C.nodeName.toLowerCase(),k==="select"||k==="input"&&C.type==="file")var ze=ed;else if($u(C))if(nd)ze=Ch;else{ze=Dh;var oe=Rh}else k=C.nodeName,!k||k.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Js(D.elementType)&&(ze=ed):ze=Ah;if(ze&&(ze=ze(e,D))){Wu(P,ze,t,B);break e}oe&&oe(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Xs(C,"number",C.value)}switch(oe=D?vn(D):window,e){case"focusin":($u(oe)||oe.contentEditable==="true")&&(da=oe,si=D,sl=null);break;case"focusout":sl=si=da=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,cd(P,t,B);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":cd(P,t,B)}var be;if(oi)e:{switch(e){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else ua?Zu(e,t)&&(Oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Oe="onCompositionStart");Oe&&(Ju&&t.locale!=="ko"&&(ua||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&ua&&(be=Fu()):(no=B,$s="value"in no?no.value:no.textContent,ua=!0)),oe=ss(D,Oe),0<oe.length&&(Oe=new Vu(Oe,e,null,t,B),P.push({event:Oe,listeners:oe}),be?Oe.data=be:(be=Qu(t),be!==null&&(Oe.data=be)))),(be=wh?jh(e,t):Mh(e,t))&&(Oe=ss(D,"onBeforeInput"),0<Oe.length&&(oe=new Vu("onBeforeInput","beforeinput",null,t,B),P.push({event:oe,listeners:Oe}),oe.data=be)),yy(P,e,D,t,B)}Up(P,n)})}function Cl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ss(e,n){for(var t=n+"Capture",o=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Wa(e,t),l!=null&&o.unshift(Cl(e,l,r)),l=Wa(e,n),l!=null&&o.push(Cl(e,l,r))),e.tag===3)return o;e=e.return}return[]}function Sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zp(e,n,t,o,l){for(var r=n._reactName,u=[];t!==null&&t!==o;){var g=t,v=g.alternate,D=g.stateNode;if(g=g.tag,v!==null&&v===o)break;g!==5&&g!==26&&g!==27||D===null||(v=D,l?(D=Wa(t,r),D!=null&&u.unshift(Cl(t,D,v))):l||(D=Wa(t,r),D!=null&&u.push(Cl(t,D,v)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function Bp(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ty,"")}function Hp(e,n){return n=Bp(n),Bp(e)===n}function Ve(e,n,t,o,l,r){switch(t){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||sa(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&sa(e,""+o);break;case"className":ht(e,"class",o);break;case"tabIndex":ht(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ht(e,t,o);break;case"style":Hu(e,o,r);break;case"data":if(n!=="object"){ht(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(t);break}o=pr(""+o),e.setAttribute(t,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(n!=="input"&&Ve(e,n,"name",l.name,l,null),Ve(e,n,"formEncType",l.formEncType,l,null),Ve(e,n,"formMethod",l.formMethod,l,null),Ve(e,n,"formTarget",l.formTarget,l,null)):(Ve(e,n,"encType",l.encType,l,null),Ve(e,n,"method",l.method,l,null),Ve(e,n,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(t);break}o=pr(""+o),e.setAttribute(t,o);break;case"onClick":o!=null&&(e.onclick=_t);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(t=o.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}t=pr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(t,""+o):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":o===!0?e.setAttribute(t,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(t,o):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(t,o):e.removeAttribute(t);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(t):e.setAttribute(t,o);break;case"popover":we("beforetoggle",e),we("toggle",e),cn(e,"popover",o);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":cn(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Qg.get(t)||t,cn(e,t,o))}}function _c(e,n,t,o,l,r){switch(t){case"style":Hu(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(t=o.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof o=="string"?sa(e,o):(typeof o=="number"||typeof o=="bigint")&&sa(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pn.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),r=e[ee]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(n,r,l),typeof o=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,o,l);break e}t in e?e[t]=o:o===!0?e.setAttribute(t,""):cn(e,t,o)}}}function Mn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var u=t[r];if(u!=null)switch(r){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Ve(e,n,r,u,t,null)}}l&&Ve(e,n,"srcSet",t.srcSet,t,null),o&&Ve(e,n,"src",t.src,t,null);return;case"input":we("invalid",e);var g=r=u=l=null,v=null,D=null;for(o in t)if(t.hasOwnProperty(o)){var B=t[o];if(B!=null)switch(o){case"name":l=B;break;case"type":u=B;break;case"checked":v=B;break;case"defaultChecked":D=B;break;case"value":r=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,n));break;default:Ve(e,n,o,B,t,null)}}Uu(e,r,g,v,D,u,l,!1);return;case"select":we("invalid",e),o=u=r=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":r=g;break;case"defaultValue":u=g;break;case"multiple":o=g;default:Ve(e,n,l,g,t,null)}n=r,t=u,e.multiple=!!o,n!=null?ra(e,!!o,n,!1):t!=null&&ra(e,!!o,t,!0);return;case"textarea":we("invalid",e),r=l=o=null;for(u in t)if(t.hasOwnProperty(u)&&(g=t[u],g!=null))switch(u){case"value":o=g;break;case"defaultValue":l=g;break;case"children":r=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:Ve(e,n,u,g,t,null)}zu(e,o,l,r);return;case"option":for(v in t)t.hasOwnProperty(v)&&(o=t[v],o!=null)&&(v==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,v,o,t,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Al.length;o++)we(Al[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in t)if(t.hasOwnProperty(D)&&(o=t[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Ve(e,n,D,o,t,null)}return;default:if(Js(n)){for(B in t)t.hasOwnProperty(B)&&(o=t[B],o!==void 0&&_c(e,n,B,o,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(o=t[g],o!=null&&Ve(e,n,g,o,t,null))}function wy(e,n,t,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,u=null,g=null,v=null,D=null,B=null;for(k in t){var P=t[k];if(t.hasOwnProperty(k)&&P!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=P;default:o.hasOwnProperty(k)||Ve(e,n,k,null,o,P)}}for(var C in o){var k=o[C];if(P=t[C],o.hasOwnProperty(C)&&(k!=null||P!=null))switch(C){case"type":r=k;break;case"name":l=k;break;case"checked":D=k;break;case"defaultChecked":B=k;break;case"value":u=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,n));break;default:k!==P&&Ve(e,n,C,k,o,P)}}Vs(e,u,g,v,D,B,r,l);return;case"select":k=u=g=C=null;for(r in t)if(v=t[r],t.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":k=v;default:o.hasOwnProperty(r)||Ve(e,n,r,null,o,v)}for(l in o)if(r=o[l],v=t[l],o.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":C=r;break;case"defaultValue":g=r;break;case"multiple":u=r;default:r!==v&&Ve(e,n,l,r,o,v)}n=g,t=u,o=k,C!=null?ra(e,!!t,C,!1):!!o!=!!t&&(n!=null?ra(e,!!t,n,!0):ra(e,!!t,t?[]:"",!1));return;case"textarea":k=C=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!o.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ve(e,n,g,null,o,l)}for(u in o)if(l=o[u],r=t[u],o.hasOwnProperty(u)&&(l!=null||r!=null))switch(u){case"value":C=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Ve(e,n,u,l,o,r)}ku(e,C,k);return;case"option":for(var ne in t)C=t[ne],t.hasOwnProperty(ne)&&C!=null&&!o.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Ve(e,n,ne,null,o,C));for(v in o)C=o[v],k=t[v],o.hasOwnProperty(v)&&C!==k&&(C!=null||k!=null)&&(v==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":Ve(e,n,v,C,o,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in t)C=t[de],t.hasOwnProperty(de)&&C!=null&&!o.hasOwnProperty(de)&&Ve(e,n,de,null,o,C);for(D in o)if(C=o[D],k=t[D],o.hasOwnProperty(D)&&C!==k&&(C!=null||k!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,n));break;default:Ve(e,n,D,C,o,k)}return;default:if(Js(n)){for(var Xe in t)C=t[Xe],t.hasOwnProperty(Xe)&&C!==void 0&&!o.hasOwnProperty(Xe)&&_c(e,n,Xe,void 0,o,C);for(B in o)C=o[B],k=t[B],!o.hasOwnProperty(B)||C===k||C===void 0&&k===void 0||_c(e,n,B,C,o,k);return}}for(var j in t)C=t[j],t.hasOwnProperty(j)&&C!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,C);for(P in o)C=o[P],k=t[P],!o.hasOwnProperty(P)||C===k||C==null&&k==null||Ve(e,n,P,C,o,k)}function Pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),o=0;o<t.length;o++){var l=t[o],r=l.transferSize,u=l.initiatorType,g=l.duration;if(r&&g&&Pp(u)){for(u=0,g=l.responseEnd,o+=1;o<t.length;o++){var v=t[o],D=v.startTime;if(D>g)break;var B=v.transferSize,P=v.initiatorType;B&&Pp(P)&&(v=v.responseEnd,u+=B*(v<g?1:(g-D)/(v-D)))}if(--o,n+=8*(r+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,Uc=null;function is(e){return e.nodeType===9?e:e.ownerDocument}function Ip(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zc=null;function My(){var e=window.event;return e&&e.type==="popstate"?e===zc?!1:(zc=e,!0):(zc=null,!1)}var Yp=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(e){return qp.resolve(null).then(e).catch(Ry)}:Yp;function Ry(e){setTimeout(function(){throw e})}function vo(e){return e==="head"}function Vp(e,n){var t=n,o=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(o===0){e.removeChild(l),Ba(n);return}o--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")o++;else if(t==="html")_l(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,_l(t);for(var r=t.firstChild;r;){var u=r.nextSibling,g=r.nodeName;r[en]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=u}}else t==="body"&&_l(e.ownerDocument.body);t=l}while(t);Ba(n)}function Xp(e,n){var t=e;e=0;do{var o=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=o}while(t)}function Bc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Bc(t),nn(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Dy(e,n,t,o){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[en])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ot(e.nextSibling),e===null)break}return null}function Ay(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ot(e.nextSibling),e===null))return null;return e}function Jp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ot(e.nextSibling),e===null))return null;return e}function Hc(e){return e.data==="$?"||e.data==="$~"}function Pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cy(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var o=function(){n(),t.removeEventListener("DOMContentLoaded",o)};t.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ot(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ic=null;function Gp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return ot(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Kp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Zp(e,n,t){switch(n=is(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function _l(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);nn(e)}var at=new Map,Qp=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=Y.d;Y.d={f:_y,r:Ly,D:Uy,C:ky,L:zy,m:By,X:Py,S:Hy,M:Iy};function _y(){var e=Kt.f(),n=es();return e||n}function Ly(e){var n=Ae(e);n!==null&&n.tag===5&&n.type==="form"?fm(n):Kt.r(e)}var Ua=typeof document>"u"?null:document;function $p(e,n,t){var o=Ua;if(o&&typeof n=="string"&&n){var l=Zn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Qp.has(l)||(Qp.add(l),e={rel:e,crossOrigin:t,href:n},o.querySelector(l)===null&&(n=o.createElement("link"),Mn(n,"link",e),Ze(n),o.head.appendChild(n)))}}function Uy(e){Kt.D(e),$p("dns-prefetch",e,null)}function ky(e,n){Kt.C(e,n),$p("preconnect",e,n)}function zy(e,n,t){Kt.L(e,n,t);var o=Ua;if(o&&e&&n){var l='link[rel="preload"][as="'+Zn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Zn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Zn(t.imageSizes)+'"]')):l+='[href="'+Zn(e)+'"]';var r=l;switch(n){case"style":r=ka(e);break;case"script":r=za(e)}at.has(r)||(e=x({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),at.set(r,e),o.querySelector(l)!==null||n==="style"&&o.querySelector(Ll(r))||n==="script"&&o.querySelector(Ul(r))||(n=o.createElement("link"),Mn(n,"link",e),Ze(n),o.head.appendChild(n)))}}function By(e,n){Kt.m(e,n);var t=Ua;if(t&&e){var o=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Zn(o)+'"][href="'+Zn(e)+'"]',r=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=za(e)}if(!at.has(r)&&(e=x({rel:"modulepreload",href:e},n),at.set(r,e),t.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ul(r)))return}o=t.createElement("link"),Mn(o,"link",e),Ze(o),t.head.appendChild(o)}}}function Hy(e,n,t){Kt.S(e,n,t);var o=Ua;if(o&&e){var l=Cn(o).hoistableStyles,r=ka(e);n=n||"default";var u=l.get(r);if(!u){var g={loading:0,preload:null};if(u=o.querySelector(Ll(r)))g.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},t),(t=at.get(r))&&Fc(e,t);var v=u=o.createElement("link");Ze(v),Mn(v,"link",e),v._p=new Promise(function(D,B){v.onload=D,v.onerror=B}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,us(u,n,o)}u={type:"stylesheet",instance:u,count:1,state:g},l.set(r,u)}}}function Py(e,n){Kt.X(e,n);var t=Ua;if(t&&e){var o=Cn(t).hoistableScripts,l=za(e),r=o.get(l);r||(r=t.querySelector(Ul(l)),r||(e=x({src:e,async:!0},n),(n=at.get(l))&&Yc(e,n),r=t.createElement("script"),Ze(r),Mn(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(l,r))}}function Iy(e,n){Kt.M(e,n);var t=Ua;if(t&&e){var o=Cn(t).hoistableScripts,l=za(e),r=o.get(l);r||(r=t.querySelector(Ul(l)),r||(e=x({src:e,async:!0,type:"module"},n),(n=at.get(l))&&Yc(e,n),r=t.createElement("script"),Ze(r),Mn(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(l,r))}}function Wp(e,n,t,o){var l=(l=pe.current)?cs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ka(t.href),t=Cn(l).hoistableStyles,o=t.get(n),o||(o={type:"style",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ka(t.href);var r=Cn(l).hoistableStyles,u=r.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,u),(r=l.querySelector(Ll(e)))&&!r._p&&(u.instance=r,u.state.loading=5),at.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},at.set(e,t),r||Fy(l,e,t,u.state))),n&&o===null)throw Error(c(528,""));return u}if(n&&o!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=za(t),t=Cn(l).hoistableScripts,o=t.get(n),o||(o={type:"script",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ka(e){return'href="'+Zn(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function ef(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Fy(e,n,t,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",t),Ze(n),e.head.appendChild(n))}function za(e){return'[src="'+Zn(e)+'"]'}function Ul(e){return"script[async]"+e}function nf(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Zn(t.href)+'"]');if(o)return n.instance=o,Ze(o),o;var l=x({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ze(o),Mn(o,"style",l),us(o,t.precedence,e),n.instance=o;case"stylesheet":l=ka(t.href);var r=e.querySelector(Ll(l));if(r)return n.state.loading|=4,n.instance=r,Ze(r),r;o=ef(t),(l=at.get(l))&&Fc(o,l),r=(e.ownerDocument||e).createElement("link"),Ze(r);var u=r;return u._p=new Promise(function(g,v){u.onload=g,u.onerror=v}),Mn(r,"link",o),n.state.loading|=4,us(r,t.precedence,e),n.instance=r;case"script":return r=za(t.src),(l=e.querySelector(Ul(r)))?(n.instance=l,Ze(l),l):(o=t,(l=at.get(r))&&(o=x({},t),Yc(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Mn(l,"link",o),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,us(o,t.precedence,e));return n.instance}function us(e,n,t){for(var o=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,r=l,u=0;u<o.length;u++){var g=o[u];if(g.dataset.precedence===n)r=g;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Fc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ds=null;function tf(e,n,t){if(ds===null){var o=new Map,l=ds=new Map;l.set(t,o)}else l=ds,o=l.get(t),o||(o=new Map,l.set(t,o));if(o.has(e))return o;for(o.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var r=t[l];if(!(r[en]||r[Q]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var u=r.getAttribute(n)||"";u=e+u;var g=o.get(u);g?g.push(r):o.set(u,[r])}}return o}function of(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Yy(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function af(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qy(e,n,t,o){if(t.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=ka(o.href),r=n.querySelector(Ll(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ms.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=r,Ze(r);return}r=n.ownerDocument||n,o=ef(o),(l=at.get(l))&&Fc(o,l),r=r.createElement("link"),Ze(r);var u=r;u._p=new Promise(function(g,v){u.onload=g,u.onerror=v}),Mn(r,"link",o),t.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ms.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var qc=0;function Vy(e,n){return e.stylesheets&&e.count===0&&fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var o=setTimeout(function(){if(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+n);0<e.imgBytes&&qc===0&&(qc=62500*jy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qc?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function fs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,n.forEach(Xy,e),ps=null,ms.call(e))}function Xy(e,n){if(!(n.state.loading&4)){var t=ps.get(e);if(t)var o=t.get(null);else{t=new Map,ps.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var u=l[r];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),o=u)}o&&t.set(null,o)}l=n.instance,u=l.getAttribute("data-precedence"),r=t.get(u)||o,r===o&&t.set(null,l),t.set(u,l),this.count++,o=ms.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var kl={$$typeof:te,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Jy(e,n,t,o,l,r,u,g,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function lf(e,n,t,o,l,r,u,g,v,D,B,P){return e=new Jy(e,n,t,u,v,D,B,P,g),n=1,r===!0&&(n|=24),r=Fn(3,null,null,n),e.current=r,r.stateNode=e,n=Ti(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:o,isDehydrated:t,cache:n},Oi(r),e}function rf(e){return e?(e=fa,e):fa}function sf(e,n,t,o,l,r){l=rf(l),o.context===null?o.context=l:o.pendingContext=l,o=so(n),o.payload={element:t},r=r===void 0?null:r,r!==null&&(o.callback=r),t=io(e,o,n),t!==null&&(Bn(t,e,n),fl(t,e,n))}function cf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Vc(e,n){cf(e,n),(e=e.alternate)&&cf(e,n)}function uf(e){if(e.tag===13||e.tag===31){var n=Io(e,67108864);n!==null&&Bn(n,e,67108864),Vc(e,67108864)}}function df(e){if(e.tag===13||e.tag===31){var n=Jn();n=_(n);var t=Io(e,n);t!==null&&Bn(t,e,n),Vc(e,n)}}var gs=!0;function Gy(e,n,t,o){var l=L.T;L.T=null;var r=Y.p;try{Y.p=2,Xc(e,n,t,o)}finally{Y.p=r,L.T=l}}function Ky(e,n,t,o){var l=L.T;L.T=null;var r=Y.p;try{Y.p=8,Xc(e,n,t,o)}finally{Y.p=r,L.T=l}}function Xc(e,n,t,o){if(gs){var l=Jc(o);if(l===null)Cc(e,n,o,hs,t),pf(e,o);else if(Qy(l,e,n,t,o))o.stopPropagation();else if(pf(e,o),n&4&&-1<Zy.indexOf(e)){for(;l!==null;){var r=Ae(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var u=At(r.pendingLanes);if(u!==0){var g=r;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var v=1<<31-On(u);g.entanglements[1]|=v,u&=~v}wt(r),(Pe&6)===0&&($r=sn()+500,Dl(0))}}break;case 31:case 13:g=Io(r,2),g!==null&&Bn(g,r,2),es(),Vc(r,2)}if(r=Jc(o),r===null&&Cc(e,n,o,hs,t),r===l)break;l=r}l!==null&&o.stopPropagation()}else Cc(e,n,o,null,t)}}function Jc(e){return e=Ks(e),Gc(e)}var hs=null;function Gc(e){if(hs=null,e=tn(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=f(n),e!==null)return e;e=null}else if(t===31){if(e=h(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hs=e,null}function mf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ro()){case Ka:return 2;case la:return 8;case An:case mt:return 32;case Za:return 268435456;default:return 32}default:return 32}}var Kc=!1,xo=null,So=null,Eo=null,zl=new Map,Bl=new Map,To=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(e,n){switch(e){case"focusin":case"focusout":xo=null;break;case"dragenter":case"dragleave":So=null;break;case"mouseover":case"mouseout":Eo=null;break;case"pointerover":case"pointerout":zl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(n.pointerId)}}function Hl(e,n,t,o,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:r,targetContainers:[l]},n!==null&&(n=Ae(n),n!==null&&uf(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Qy(e,n,t,o,l){switch(n){case"focusin":return xo=Hl(xo,e,n,t,o,l),!0;case"dragenter":return So=Hl(So,e,n,t,o,l),!0;case"mouseover":return Eo=Hl(Eo,e,n,t,o,l),!0;case"pointerover":var r=l.pointerId;return zl.set(r,Hl(zl.get(r)||null,e,n,t,o,l)),!0;case"gotpointercapture":return r=l.pointerId,Bl.set(r,Hl(Bl.get(r)||null,e,n,t,o,l)),!0}return!1}function ff(e){var n=tn(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=f(t),n!==null){e.blockedOn=n,re(e.priority,function(){df(t)});return}}else if(n===31){if(n=h(t),n!==null){e.blockedOn=n,re(e.priority,function(){df(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Jc(e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Gs=o,t.target.dispatchEvent(o),Gs=null}else return n=Ae(t),n!==null&&uf(n),e.blockedOn=t,!1;n.shift()}return!0}function gf(e,n,t){ys(e)&&t.delete(n)}function $y(){Kc=!1,xo!==null&&ys(xo)&&(xo=null),So!==null&&ys(So)&&(So=null),Eo!==null&&ys(Eo)&&(Eo=null),zl.forEach(gf),Bl.forEach(gf)}function bs(e,n){e.blockedOn===n&&(e.blockedOn=null,Kc||(Kc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$y)))}var vs=null;function hf(e){vs!==e&&(vs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){vs===e&&(vs=null);for(var n=0;n<e.length;n+=3){var t=e[n],o=e[n+1],l=e[n+2];if(typeof o!="function"){if(Gc(o||t)===null)continue;break}var r=Ae(t);r!==null&&(e.splice(n,3),n-=3,Ji(r,{pending:!0,data:l,method:t.method,action:o},o,l))}}))}function Ba(e){function n(v){return bs(v,e)}xo!==null&&bs(xo,e),So!==null&&bs(So,e),Eo!==null&&bs(Eo,e),zl.forEach(n),Bl.forEach(n);for(var t=0;t<To.length;t++){var o=To[t];o.blockedOn===e&&(o.blockedOn=null)}for(;0<To.length&&(t=To[0],t.blockedOn===null);)ff(t),t.blockedOn===null&&To.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(o=0;o<t.length;o+=3){var l=t[o],r=t[o+1],u=l[ee]||null;if(typeof r=="function")u||hf(t);else if(u){var g=null;if(r&&r.hasAttribute("formAction")){if(l=r,u=r[ee]||null)g=u.formAction;else if(Gc(l)!==null)continue}else g=u.action;typeof g=="function"?t[o+1]=g:(t.splice(o,3),o-=3),hf(t)}}}function yf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),o||setTimeout(t,20)}function t(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Zc(e){this._internalRoot=e}xs.prototype.render=Zc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,o=Jn();sf(t,o,e,n,null,null)},xs.prototype.unmount=Zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;sf(e.current,2,null,e,null,null),es(),n[ae]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var n=V();e={blockedOn:null,target:e,priority:n};for(var t=0;t<To.length&&n!==0&&n<To[t].priority;t++);To.splice(t,0,e),t===0&&ff(e)}};var bf=s.version;if(bf!=="19.2.3")throw Error(c(527,bf,"19.2.3"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Wy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Do=Ss.inject(Wy),We=Ss}catch{}}return Il.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,o="",l=wm,r=jm,u=Mm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=lf(e,1,!1,null,null,t,o,null,l,r,u,yf),e[ae]=n.current,Ac(e),new Zc(n)},Il.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var o=!1,l="",r=wm,u=jm,g=Mm,v=null;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(v=t.formState)),n=lf(e,1,!0,n,t??null,o,l,v,r,u,g,yf),n.context=rf(null),t=n.current,o=Jn(),o=_(o),l=so(o),l.callback=null,io(t,l,o),t=o,n.current.lanes=t,eo(n,t),wt(n),e[ae]=n.current,Ac(e),new xs(n)},Il.version="19.2.3",Il}var Nf;function db(){if(Nf)return Wc.exports;Nf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Wc.exports=ub(),Wc.exports}var mb=db();var pg=a=>{throw TypeError(a)},pb=(a,s,i)=>s.has(a)||pg("Cannot "+i),ou=(a,s,i)=>(pb(a,s,"read from private field"),i?i.call(a):s.get(a)),fb=(a,s,i)=>s.has(a)?pg("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(a):s.set(a,i),Rf="popstate";function gb(a={}){function s(d,m){let{pathname:f="/",search:h="",hash:y=""}=Qt(d.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ql("",{pathname:f,search:h,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function i(d,m){let f=d.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let y=d.location.href,p=y.indexOf("#");h=p===-1?y:y.slice(0,p)}return h+"#"+(typeof m=="string"?m:Mt(m))}function c(d,m){ln(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return yb(s,i,c,a)}function Se(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function ln(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function hb(){return Math.random().toString(36).substring(2,10)}function Df(a,s){return{usr:a.state,key:a.key,idx:s}}function Ql(a,s,i=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Qt(s):s,state:i,key:s&&s.key||c||hb()}}function Mt({pathname:a="/",search:s="",hash:i=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Qt(a){let s={};if(a){let i=a.indexOf("#");i>=0&&(s.hash=a.substring(i),a=a.substring(0,i));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function yb(a,s,i,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,f=d.history,h="POP",y=null,p=E();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function E(){return(f.state||{idx:null}).idx}function x(){h="POP";let J=E(),K=J==null?null:J-p;p=J,y&&y({action:h,location:X.location,delta:K})}function A(J,K){h="PUSH";let G=Ql(X.location,J,K);i&&i(G,J),p=E()+1;let te=Df(G,p),Ne=X.createHref(G);try{f.pushState(te,"",Ne)}catch(ve){if(ve instanceof DOMException&&ve.name==="DataCloneError")throw ve;d.location.assign(Ne)}m&&y&&y({action:h,location:X.location,delta:1})}function U(J,K){h="REPLACE";let G=Ql(X.location,J,K);i&&i(G,J),p=E();let te=Df(G,p),Ne=X.createHref(G);f.replaceState(te,"",Ne),m&&y&&y({action:h,location:X.location,delta:0})}function I(J){return fg(J)}let X={get action(){return h},get location(){return a(d,f)},listen(J){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Rf,x),y=J,()=>{d.removeEventListener(Rf,x),y=null}},createHref(J){return s(d,J)},createURL:I,encodeLocation(J){let K=I(J);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:A,replace:U,go(J){return f.go(J)}};return X}function fg(a,s=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Se(i,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:Mt(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=i+c),new URL(c,i)}var Gl,Af=class{constructor(a){if(fb(this,Gl,new Map),a)for(let[s,i]of a)this.set(s,i)}get(a){if(ou(this,Gl).has(a))return ou(this,Gl).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,s){ou(this,Gl).set(a,s)}};Gl=new WeakMap;var bb=new Set(["lazy","caseSensitive","path","id","index","children"]);function vb(a){return bb.has(a)}var xb=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Sb(a){return xb.has(a)}function Eb(a){return a.index===!0}function $l(a,s,i=[],c={},d=!1){return a.map((m,f)=>{let h=[...i,String(f)],y=typeof m.id=="string"?m.id:h.join("-");if(Se(m.index!==!0||!m.children,"Cannot specify children on an index route"),Se(d||!c[y],`Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`),Eb(m)){let p={...m,id:y};return c[y]=Cf(p,s(p)),p}else{let p={...m,id:y,children:void 0};return c[y]=Cf(p,s(p)),m.children&&(p.children=$l(m.children,s,h,c,d)),p}})}function Cf(a,s){return Object.assign(a,{...s,...typeof s.lazy=="object"&&s.lazy!=null?{lazy:{...a.lazy,...s.lazy}}:{}})}function jo(a,s,i="/"){return Kl(a,s,i,!1)}function Kl(a,s,i,c){let d=typeof s=="string"?Qt(s):s,m=ct(d.pathname||"/",i);if(m==null)return null;let f=gg(a);wb(f);let h=null;for(let y=0;h==null&&y<f.length;++y){let p=Ub(m);h=_b(f[y],p,c)}return h}function Tb(a,s){let{route:i,pathname:c,params:d}=a;return{id:i.id,pathname:c,params:d,data:s[i.id],loaderData:s[i.id],handle:i.handle}}function gg(a,s=[],i=[],c="",d=!1){let m=(f,h,y=d,p)=>{let E={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&y)return;Se(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let x=jt([c,E.relativePath]),A=i.concat(E);f.children&&f.children.length>0&&(Se(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),gg(f.children,s,A,x,y)),!(f.path==null&&!f.index)&&s.push({path:x,score:Ab(x,f.index),routesMeta:A})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))m(f,h);else for(let y of hg(f.path))m(f,h,!0,y)}),s}function hg(a){let s=a.split("/");if(s.length===0)return[];let[i,...c]=s,d=i.endsWith("?"),m=i.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let f=hg(c.join("/")),h=[];return h.push(...f.map(y=>y===""?m:[m,y].join("/"))),d&&h.push(...f),h.map(y=>a.startsWith("/")&&y===""?"/":y)}function wb(a){a.sort((s,i)=>s.score!==i.score?i.score-s.score:Cb(s.routesMeta.map(c=>c.childrenIndex),i.routesMeta.map(c=>c.childrenIndex)))}var jb=/^:[\w-]+$/,Mb=3,Ob=2,Nb=1,Rb=10,Db=-2,_f=a=>a==="*";function Ab(a,s){let i=a.split("/"),c=i.length;return i.some(_f)&&(c+=Db),s&&(c+=Ob),i.filter(d=>!_f(d)).reduce((d,m)=>d+(jb.test(m)?Mb:m===""?Nb:Rb),c)}function Cb(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function _b(a,s,i=!1){let{routesMeta:c}=a,d={},m="/",f=[];for(let h=0;h<c.length;++h){let y=c[h],p=h===c.length-1,E=m==="/"?s:s.slice(m.length)||"/",x=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},E),A=y.route;if(!x&&p&&i&&!c[c.length-1].route.index&&(x=Cs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!x)return null;Object.assign(d,x.params),f.push({params:d,pathname:jt([m,x.pathname]),pathnameBase:Bb(jt([m,x.pathnameBase])),route:A}),x.pathnameBase!=="/"&&(m=jt([m,x.pathnameBase]))}return f}function Cs(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,c]=Lb(a.path,a.caseSensitive,a.end),d=s.match(i);if(!d)return null;let m=d[0],f=m.replace(/(.)\/+$/,"$1"),h=d.slice(1);return{params:c.reduce((p,{paramName:E,isOptional:x},A)=>{if(E==="*"){let I=h[A]||"";f=m.slice(0,m.length-I.length).replace(/(.)\/+$/,"$1")}const U=h[A];return x&&!U?p[E]=void 0:p[E]=(U||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:f,pattern:a}}function Lb(a,s=!1,i=!0){ln(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,y)=>(c.push({paramName:h,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function Ub(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ln(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function ct(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let i=s.endsWith("/")?s.length-1:s.length,c=a.charAt(i);return c&&c!=="/"?null:a.slice(i)||"/"}function kb({basename:a,pathname:s}){return s==="/"?a:jt([a,s])}var yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_s=a=>yg.test(a);function zb(a,s="/"){let{pathname:i,search:c="",hash:d=""}=typeof a=="string"?Qt(a):a,m;if(i)if(_s(i))m=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),ln(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?m=Lf(i.substring(1),"/"):m=Lf(i,s)}else m=s;return{pathname:m,search:Hb(c),hash:Pb(d)}}function Lf(a,s){let i=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?i.length>1&&i.pop():d!=="."&&i.push(d)}),i.length>1?i.join("/"):"/"}function au(a,s,i,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bg(a){return a.filter((s,i)=>i===0||s.route.path&&s.route.path.length>0)}function vu(a){let s=bg(a);return s.map((i,c)=>c===s.length-1?i.pathname:i.pathnameBase)}function xu(a,s,i,c=!1){let d;typeof a=="string"?d=Qt(a):(d={...a},Se(!d.pathname||!d.pathname.includes("?"),au("?","pathname","search",d)),Se(!d.pathname||!d.pathname.includes("#"),au("#","pathname","hash",d)),Se(!d.search||!d.search.includes("#"),au("#","search","hash",d)));let m=a===""||d.pathname==="",f=m?"/":d.pathname,h;if(f==null)h=i;else{let x=s.length-1;if(!c&&f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),x-=1;d.pathname=A.join("/")}h=x>=0?s[x]:"/"}let y=zb(d,h),p=f&&f!=="/"&&f.endsWith("/"),E=(m||f===".")&&i.endsWith("/");return!y.pathname.endsWith("/")&&(p||E)&&(y.pathname+="/"),y}var jt=a=>a.join("/").replace(/\/\/+/g,"/"),Bb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Hb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Pb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,nr=class{constructor(a,s,i,c=!1){this.status=a,this.statusText=s||"",this.internal=c,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Wl(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function tr(a){return a.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xg(a,s){let i=a;if(typeof i!="string"||!yg.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let c=i,d=!1;if(vg)try{let m=new URL(window.location.href),f=i.startsWith("//")?new URL(m.protocol+i):new URL(i),h=ct(f.pathname,s);f.origin===m.origin&&h!=null?i=h+f.search+f.hash:d=!0}catch{ln(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:i}}var Oo=Symbol("Uninstrumented");function Ib(a,s){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(d=>d({id:s.id,index:s.index,path:s.path,instrument(m){let f=Object.keys(i);for(let h of f)m[h]&&i[h].push(m[h])}}));let c={};if(typeof s.lazy=="function"&&i.lazy.length>0){let d=Ya(i.lazy,s.lazy,()=>{});d&&(c.lazy=d)}if(typeof s.lazy=="object"){let d=s.lazy;["middleware","loader","action"].forEach(m=>{let f=d[m],h=i[`lazy.${m}`];if(typeof f=="function"&&h.length>0){let y=Ya(h,f,()=>{});y&&(c.lazy=Object.assign(c.lazy||{},{[m]:y}))}})}return["loader","action"].forEach(d=>{let m=s[d];if(typeof m=="function"&&i[d].length>0){let f=m[Oo]??m,h=Ya(i[d],f,(...y)=>Uf(y[0]));h&&(h[Oo]=f,c[d]=h)}}),s.middleware&&s.middleware.length>0&&i.middleware.length>0&&(c.middleware=s.middleware.map(d=>{let m=d[Oo]??d,f=Ya(i.middleware,m,(...h)=>Uf(h[0]));return f?(f[Oo]=m,f):d})),c}function Fb(a,s){let i={navigate:[],fetch:[]};if(s.forEach(c=>c({instrument(d){let m=Object.keys(d);for(let f of m)d[f]&&i[f].push(d[f])}})),i.navigate.length>0){let c=a.navigate[Oo]??a.navigate,d=Ya(i.navigate,c,(...m)=>{let[f,h]=m;return{to:typeof f=="number"||typeof f=="string"?f:f?Mt(f):".",...kf(a,h??{})}});d&&(d[Oo]=c,a.navigate=d)}if(i.fetch.length>0){let c=a.fetch[Oo]??a.fetch,d=Ya(i.fetch,c,(...m)=>{let[f,,h,y]=m;return{href:h??".",fetcherKey:f,...kf(a,y??{})}});d&&(d[Oo]=c,a.fetch=d)}return a}function Ya(a,s,i){return a.length===0?null:async(...c)=>{let d=await Sg(a,i(...c),()=>s(...c),a.length-1);if(d.type==="error")throw d.value;return d.value}}async function Sg(a,s,i,c){let d=a[c],m;if(d){let f,h=async()=>(f?console.error("You cannot call instrumented handlers more than once"):f=Sg(a,s,i,c-1),m=await f,Se(m,"Expected a result"),m.type==="error"&&m.value instanceof Error?{status:"error",error:m.value}:{status:"success",error:void 0});try{await d(h,s)}catch(y){console.error("An instrumentation function threw an error:",y)}f||await h(),await f}else try{m={type:"success",value:await i()}}catch(f){m={type:"error",value:f}}return m||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Uf(a){let{request:s,context:i,params:c,unstable_pattern:d}=a;return{request:Yb(s),params:{...c},unstable_pattern:d,context:qb(i)}}function kf(a,s){return{currentUrl:Mt(a.state.location),..."formMethod"in s?{formMethod:s.formMethod}:{},..."formEncType"in s?{formEncType:s.formEncType}:{},..."formData"in s?{formData:s.formData}:{},..."body"in s?{body:s.body}:{}}}function Yb(a){return{method:a.method,url:a.url,headers:{get:(...s)=>a.headers.get(...s)}}}function qb(a){if(Xb(a)){let s={...a};return Object.freeze(s),s}else return{get:s=>a.get(s)}}var Vb=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xb(a){if(a===null||typeof a!="object")return!1;const s=Object.getPrototypeOf(a);return s===Object.prototype||s===null||Object.getOwnPropertyNames(s).sort().join("\0")===Vb}var Eg=["POST","PUT","PATCH","DELETE"],Jb=new Set(Eg),Gb=["GET",...Eg],Kb=new Set(Gb),Tg=new Set([301,302,303,307,308]),Zb=new Set([307,308]),lu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qb={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},$b=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),wg="remix-router-transitions",jg=Symbol("ResetLoaderData");function Wb(a){const s=a.window?a.window:typeof window<"u"?window:void 0,i=typeof s<"u"&&typeof s.document<"u"&&typeof s.document.createElement<"u";Se(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=a.hydrationRouteProperties||[],d=a.mapRouteProperties||$b,m=d;if(a.unstable_instrumentations){let b=a.unstable_instrumentations;m=M=>({...d(M),...Ib(b.map(_=>_.route).filter(Boolean),M)})}let f={},h=$l(a.routes,m,void 0,f),y,p=a.basename||"/";p.startsWith("/")||(p=`/${p}`);let E=a.dataStrategy||av,x={...a.future},A=null,U=new Set,I=null,X=null,J=null,K=a.hydrationData!=null,G=jo(h,a.history.location,p),te=!1,Ne=null,ve;if(G==null&&!a.patchRoutesOnNavigation){let b=st(404,{pathname:a.history.location.pathname}),{matches:M,route:_}=Es(h);ve=!0,G=M,Ne={[_.id]:b}}else if(G&&!a.hydrationData&&Lo(G,h,a.history.location.pathname).active&&(G=null),G)if(G.some(b=>b.route.lazy))ve=!1;else if(!G.some(b=>Su(b.route)))ve=!0;else{let b=a.hydrationData?a.hydrationData.loaderData:null,M=a.hydrationData?a.hydrationData.errors:null;if(M){let _=G.findIndex(F=>M[F.route.id]!==void 0);ve=G.slice(0,_+1).every(F=>!gu(F.route,b,M))}else ve=G.every(_=>!gu(_.route,b,M))}else{ve=!1,G=[];let b=Lo(null,h,a.history.location.pathname);b.active&&b.matches&&(te=!0,G=b.matches)}let Ee,O={historyAction:a.history.action,location:a.history.location,matches:G,initialized:ve,navigation:lu,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||Ne,fetchers:new Map,blockers:new Map},le="POP",ye=null,He=!1,je,ke=!1,yn=new Map,Ie=null,xe=!1,L=!1,Y=new Set,Z=new Map,me=0,ge=-1,S=new Map,z=new Set,q=new Map,$=new Map,ie=new Set,pe=new Map,Re,rn=null;function $e(){if(A=a.history.listen(({action:b,location:M,delta:_})=>{if(Re){Re(),Re=void 0;return}ln(pe.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Ao({currentLocation:O.location,nextLocation:M,historyAction:b});if(F&&_!=null){let V=new Promise(re=>{Re=re});a.history.go(_*-1),Dt(F,{state:"blocked",location:M,proceed(){Dt(F,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),V.then(()=>a.history.go(_))},reset(){let re=new Map(O.blockers);re.set(F,Fl),mn({blockers:re})}}),ye?.resolve(),ye=null;return}return dt(b,M)}),i){Ev(s,yn);let b=()=>Tv(s,yn);s.addEventListener("pagehide",b),Ie=()=>s.removeEventListener("pagehide",b)}return O.initialized||dt("POP",O.location,{initialHydration:!0}),Ee}function No(){A&&A(),Ie&&Ie(),U.clear(),je&&je.abort(),O.fetchers.forEach((b,M)=>Qa(M)),O.blockers.forEach((b,M)=>ir(M))}function oa(b){return U.add(b),()=>U.delete(b)}function mn(b,M={}){b.matches&&(b.matches=b.matches.map(V=>{let re=f[V.route.id],W=V.route;return W.element!==re.element||W.errorElement!==re.errorElement||W.hydrateFallbackElement!==re.hydrateFallbackElement?{...V,route:re}:V})),O={...O,...b};let _=[],F=[];O.fetchers.forEach((V,re)=>{V.state==="idle"&&(ie.has(re)?_.push(re):F.push(re))}),ie.forEach(V=>{!O.fetchers.has(V)&&!Z.has(V)&&_.push(V)}),[...U].forEach(V=>V(O,{deletedFetchers:_,newErrors:b.errors??null,viewTransitionOpts:M.viewTransitionOpts,flushSync:M.flushSync===!0})),_.forEach(V=>Qa(V)),F.forEach(V=>O.fetchers.delete(V))}function Rt(b,M,{flushSync:_}={}){let F=O.actionData!=null&&O.navigation.formMethod!=null&&Rn(O.navigation.formMethod)&&O.navigation.state==="loading"&&b.state?._isRedirect!==!0,V;M.actionData?Object.keys(M.actionData).length>0?V=M.actionData:V=null:F?V=O.actionData:V=null;let re=M.loaderData?Xf(O.loaderData,M.loaderData,M.matches||[],M.errors):O.loaderData,W=O.blockers;W.size>0&&(W=new Map(W),W.forEach((ue,se)=>W.set(se,Fl)));let Q=xe?!1:cr(b,M.matches||O.matches),ee=He===!0||O.navigation.formMethod!=null&&Rn(O.navigation.formMethod)&&b.state?._isRedirect!==!0;y&&(h=y,y=void 0),xe||le==="POP"||(le==="PUSH"?a.history.push(b,b.state):le==="REPLACE"&&a.history.replace(b,b.state));let ae;if(le==="POP"){let ue=yn.get(O.location.pathname);ue&&ue.has(b.pathname)?ae={currentLocation:O.location,nextLocation:b}:yn.has(b.pathname)&&(ae={currentLocation:b,nextLocation:O.location})}else if(ke){let ue=yn.get(O.location.pathname);ue?ue.add(b.pathname):(ue=new Set([b.pathname]),yn.set(O.location.pathname,ue)),ae={currentLocation:O.location,nextLocation:b}}mn({...M,actionData:V,loaderData:re,historyAction:le,location:b,initialized:!0,navigation:lu,revalidation:"idle",restoreScrollPosition:Q,preventScrollReset:ee,blockers:W},{viewTransitionOpts:ae,flushSync:_===!0}),le="POP",He=!1,ke=!1,xe=!1,L=!1,ye?.resolve(),ye=null,rn?.resolve(),rn=null}async function xt(b,M){if(ye?.resolve(),ye=null,typeof b=="number"){ye||(ye=Zf());let De=ye.promise;return a.history.go(b),De}let _=fu(O.location,O.matches,p,b,M?.fromRouteId,M?.relative),{path:F,submission:V,error:re}=zf(!1,_,M),W=O.location,Q=Ql(O.location,F,M&&M.state);Q={...Q,...a.history.encodeLocation(Q)};let ee=M&&M.replace!=null?M.replace:void 0,ae="PUSH";ee===!0?ae="REPLACE":ee===!1||V!=null&&Rn(V.formMethod)&&V.formAction===O.location.pathname+O.location.search&&(ae="REPLACE");let ue=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0,se=(M&&M.flushSync)===!0,Ue=Ao({currentLocation:W,nextLocation:Q,historyAction:ae});if(Ue){Dt(Ue,{state:"blocked",location:Q,proceed(){Dt(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),xt(b,M)},reset(){let De=new Map(O.blockers);De.set(Ue,Fl),mn({blockers:De})}});return}await dt(ae,Q,{submission:V,pendingError:re,preventScrollReset:ue,replace:M&&M.replace,enableViewTransition:M&&M.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:M&&M.unstable_defaultShouldRevalidate})}function Xa(){rn||(rn=Zf()),la(),mn({revalidation:"loading"});let b=rn.promise;return O.navigation.state==="submitting"?b:O.navigation.state==="idle"?(dt(O.historyAction,O.location,{startUninterruptedRevalidation:!0}),b):(dt(le||O.historyAction,O.navigation.location,{overrideNavigation:O.navigation,enableViewTransition:ke===!0}),b)}async function dt(b,M,_){je&&je.abort(),je=null,le=b,xe=(_&&_.startUninterruptedRevalidation)===!0,_o(O.location,O.matches),He=(_&&_.preventScrollReset)===!0,ke=(_&&_.enableViewTransition)===!0;let F=y||h,V=_&&_.overrideNavigation,re=_?.initialHydration&&O.matches&&O.matches.length>0&&!te?O.matches:jo(F,M,p),W=(_&&_.flushSync)===!0;if(re&&O.initialized&&!L&&mv(O.location,M)&&!(_&&_.submission&&Rn(_.submission.formMethod))){Rt(M,{matches:re},{flushSync:W});return}let Q=Lo(re,F,M.pathname);if(Q.active&&Q.matches&&(re=Q.matches),!re){let{error:nn,notFoundMatches:tn,route:Ae}=$t(M.pathname);Rt(M,{matches:tn,loaderData:{},errors:{[Ae.id]:nn}},{flushSync:W});return}je=new AbortController;let ee=Ia(a.history,M,je.signal,_&&_.submission),ae=a.getContext?await a.getContext():new Af,ue;if(_&&_.pendingError)ue=[Mo(re).route.id,{type:"error",error:_.pendingError}];else if(_&&_.submission&&Rn(_.submission.formMethod)){let nn=await Hs(ee,M,_.submission,re,ae,Q.active,_&&_.initialHydration===!0,{replace:_.replace,flushSync:W});if(nn.shortCircuited)return;if(nn.pendingActionResult){let[tn,Ae]=nn.pendingActionResult;if(Gn(Ae)&&Wl(Ae.error)&&Ae.error.status===404){je=null,Rt(M,{matches:nn.matches,loaderData:{},errors:{[tn]:Ae.error}});return}}re=nn.matches||re,ue=nn.pendingActionResult,V=ru(M,_.submission),W=!1,Q.active=!1,ee=Ia(a.history,ee.url,ee.signal)}let{shortCircuited:se,matches:Ue,loaderData:De,errors:en}=await rr(ee,M,re,ae,Q.active,V,_&&_.submission,_&&_.fetcherSubmission,_&&_.replace,_&&_.initialHydration===!0,W,ue,_&&_.callSiteDefaultShouldRevalidate);se||(je=null,Rt(M,{matches:Ue||re,...Jf(ue),loaderData:De,errors:en}))}async function Hs(b,M,_,F,V,re,W,Q={}){la();let ee=xv(M,_);if(mn({navigation:ee},{flushSync:Q.flushSync===!0}),re){let se=await Wt(F,M.pathname,b.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:De,route:en}=Es(h);return{matches:De,pendingActionResult:[en.id,{type:"error",error:se.error}]}}let Ue=Mo(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[Ue,{type:"error",error:se.error}]}}else if(se.matches)F=se.matches;else{let{notFoundMatches:Ue,error:De,route:en}=$t(M.pathname);return{matches:Ue,pendingActionResult:[en.id,{type:"error",error:De}]}}}let ae,ue=Rs(F,M);if(!ue.route.action&&!ue.route.lazy)ae={type:"error",error:st(405,{method:b.method,pathname:M.pathname,routeId:ue.route.id})};else{let se=qa(m,f,b,F,ue,W?[]:c,V),Ue=await Ro(b,se,V,null);if(ae=Ue[ue.route.id],!ae){for(let De of F)if(Ue[De.route.id]){ae=Ue[De.route.id];break}}if(b.signal.aborted)return{shortCircuited:!0}}if(na(ae)){let se;return Q&&Q.replace!=null?se=Q.replace:se=Yf(ae.response.headers.get("Location"),new URL(b.url),p)===O.location.pathname+O.location.search,await sn(b,ae,!0,{submission:_,replace:se}),{shortCircuited:!0}}if(Gn(ae)){let se=Mo(F,ue.route.id);return(Q&&Q.replace)!==!0&&(le="PUSH"),{matches:F,pendingActionResult:[se.route.id,ae,ue.route.id]}}return{matches:F,pendingActionResult:[ue.route.id,ae]}}async function rr(b,M,_,F,V,re,W,Q,ee,ae,ue,se,Ue){let De=re||ru(M,W),en=W||Q||Kf(De),nn=!xe&&!ae;if(V){if(nn){let cn=aa(se);mn({navigation:De,...cn!==void 0?{actionData:cn}:{}},{flushSync:ue})}let Ce=await Wt(_,M.pathname,b.signal);if(Ce.type==="aborted")return{shortCircuited:!0};if(Ce.type==="error"){if(Ce.partialMatches.length===0){let{matches:ht,route:En}=Es(h);return{matches:ht,loaderData:{},errors:{[En.id]:Ce.error}}}let cn=Mo(Ce.partialMatches).route.id;return{matches:Ce.partialMatches,loaderData:{},errors:{[cn]:Ce.error}}}else if(Ce.matches)_=Ce.matches;else{let{error:cn,notFoundMatches:ht,route:En}=$t(M.pathname);return{matches:ht,loaderData:{},errors:{[En.id]:cn}}}}let tn=y||h,{dsMatches:Ae,revalidatingFetchers:vn}=Bf(b,F,m,f,a.history,O,_,en,M,ae?[]:c,ae===!0,L,Y,ie,q,z,tn,p,a.patchRoutesOnNavigation!=null,se,Ue);if(ge=++me,!a.dataStrategy&&!Ae.some(Ce=>Ce.shouldLoad)&&!Ae.some(Ce=>Ce.route.middleware&&Ce.route.middleware.length>0)&&vn.length===0){let Ce=On();return Rt(M,{matches:_,loaderData:{},errors:se&&Gn(se[1])?{[se[0]]:se[1].error}:null,...Jf(se),...Ce?{fetchers:new Map(O.fetchers)}:{}},{flushSync:ue}),{shortCircuited:!0}}if(nn){let Ce={};if(!V){Ce.navigation=De;let cn=aa(se);cn!==void 0&&(Ce.actionData=cn)}vn.length>0&&(Ce.fetchers=Ja(vn)),mn(Ce,{flushSync:ue})}vn.forEach(Ce=>{We(Ce.key),Ce.controller&&Z.set(Ce.key,Ce.controller)});let Cn=()=>vn.forEach(Ce=>We(Ce.key));je&&je.signal.addEventListener("abort",Cn);let{loaderResults:Ze,fetcherResults:ft}=await Ka(Ae,vn,b,F);if(b.signal.aborted)return{shortCircuited:!0};je&&je.signal.removeEventListener("abort",Cn),vn.forEach(Ce=>Z.delete(Ce.key));let Pn=Ts(Ze);if(Pn)return await sn(b,Pn.result,!0,{replace:ee}),{shortCircuited:!0};if(Pn=Ts(ft),Pn)return z.add(Pn.key),await sn(b,Pn.result,!0,{replace:ee}),{shortCircuited:!0};let{loaderData:gt,errors:Kn}=Vf(O,_,Ze,se,vn,ft);ae&&O.errors&&(Kn={...O.errors,...Kn});let Ct=On(),Uo=sr(ge),ko=Ct||Uo||vn.length>0;return{matches:_,loaderData:gt,errors:Kn,...ko?{fetchers:new Map(O.fetchers)}:{}}}function aa(b){if(b&&!Gn(b[1]))return{[b[0]]:b[1].data};if(O.actionData)return Object.keys(O.actionData).length===0?null:O.actionData}function Ja(b){return b.forEach(M=>{let _=O.fetchers.get(M.key),F=Yl(void 0,_?_.data:void 0);O.fetchers.set(M.key,F)}),new Map(O.fetchers)}async function Ga(b,M,_,F){We(b);let V=(F&&F.flushSync)===!0,re=y||h,W=fu(O.location,O.matches,p,_,M,F?.relative),Q=jo(re,W,p),ee=Lo(Q,re,W);if(ee.active&&ee.matches&&(Q=ee.matches),!Q){mt(b,M,st(404,{pathname:W}),{flushSync:V});return}let{path:ae,submission:ue,error:se}=zf(!0,W,F);if(se){mt(b,M,se,{flushSync:V});return}let Ue=a.getContext?await a.getContext():new Af,De=(F&&F.preventScrollReset)===!0;if(ue&&Rn(ue.formMethod)){await Ps(b,M,ae,Q,Ue,ee.active,V,De,ue,F&&F.unstable_defaultShouldRevalidate);return}q.set(b,{routeId:M,path:ae}),await Is(b,M,ae,Q,Ue,ee.active,V,De,ue)}async function Ps(b,M,_,F,V,re,W,Q,ee,ae){la(),q.delete(b);let ue=O.fetchers.get(b);An(b,Sv(ee,ue),{flushSync:W});let se=new AbortController,Ue=Ia(a.history,_,se.signal,ee);if(re){let _e=await Wt(F,new URL(Ue.url).pathname,Ue.signal,b);if(_e.type==="aborted")return;if(_e.type==="error"){mt(b,M,_e.error,{flushSync:W});return}else if(_e.matches)F=_e.matches;else{mt(b,M,st(404,{pathname:_}),{flushSync:W});return}}let De=Rs(F,_);if(!De.route.action&&!De.route.lazy){let _e=st(405,{method:ee.formMethod,pathname:_,routeId:M});mt(b,M,_e,{flushSync:W});return}Z.set(b,se);let en=me,nn=qa(m,f,Ue,F,De,c,V),tn=await Ro(Ue,nn,V,b),Ae=tn[De.route.id];if(!Ae){for(let _e of nn)if(tn[_e.route.id]){Ae=tn[_e.route.id];break}}if(Ue.signal.aborted){Z.get(b)===se&&Z.delete(b);return}if(ie.has(b)){if(na(Ae)||Gn(Ae)){An(b,Zt(void 0));return}}else{if(na(Ae))if(Z.delete(b),ge>en){An(b,Zt(void 0));return}else return z.add(b),An(b,Yl(ee)),sn(Ue,Ae,!1,{fetcherSubmission:ee,preventScrollReset:Q});if(Gn(Ae)){mt(b,M,Ae.error);return}}let vn=O.navigation.location||O.location,Cn=Ia(a.history,vn,se.signal),Ze=y||h,ft=O.navigation.state!=="idle"?jo(Ze,O.navigation.location,p):O.matches;Se(ft,"Didn't find any matches after fetcher action");let Pn=++me;S.set(b,Pn);let gt=Yl(ee,Ae.data);O.fetchers.set(b,gt);let{dsMatches:Kn,revalidatingFetchers:Ct}=Bf(Cn,V,m,f,a.history,O,ft,ee,vn,c,!1,L,Y,ie,q,z,Ze,p,a.patchRoutesOnNavigation!=null,[De.route.id,Ae],ae);Ct.filter(_e=>_e.key!==b).forEach(_e=>{let zo=_e.key,dr=O.fetchers.get(zo),$a=Yl(void 0,dr?dr.data:void 0);O.fetchers.set(zo,$a),We(zo),_e.controller&&Z.set(zo,_e.controller)}),mn({fetchers:new Map(O.fetchers)});let Uo=()=>Ct.forEach(_e=>We(_e.key));se.signal.addEventListener("abort",Uo);let{loaderResults:ko,fetcherResults:Ce}=await Ka(Kn,Ct,Cn,V);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",Uo),S.delete(b),Z.delete(b),Ct.forEach(_e=>Z.delete(_e.key)),O.fetchers.has(b)){let _e=Zt(Ae.data);O.fetchers.set(b,_e)}let cn=Ts(ko);if(cn)return sn(Cn,cn.result,!1,{preventScrollReset:Q});if(cn=Ts(Ce),cn)return z.add(cn.key),sn(Cn,cn.result,!1,{preventScrollReset:Q});let{loaderData:ht,errors:En}=Vf(O,ft,ko,void 0,Ct,Ce);sr(Pn),O.navigation.state==="loading"&&Pn>ge?(Se(le,"Expected pending action"),je&&je.abort(),Rt(O.navigation.location,{matches:ft,loaderData:ht,errors:En,fetchers:new Map(O.fetchers)})):(mn({errors:En,loaderData:Xf(O.loaderData,ht,ft,En),fetchers:new Map(O.fetchers)}),L=!1)}async function Is(b,M,_,F,V,re,W,Q,ee){let ae=O.fetchers.get(b);An(b,Yl(ee,ae?ae.data:void 0),{flushSync:W});let ue=new AbortController,se=Ia(a.history,_,ue.signal);if(re){let Ae=await Wt(F,new URL(se.url).pathname,se.signal,b);if(Ae.type==="aborted")return;if(Ae.type==="error"){mt(b,M,Ae.error,{flushSync:W});return}else if(Ae.matches)F=Ae.matches;else{mt(b,M,st(404,{pathname:_}),{flushSync:W});return}}let Ue=Rs(F,_);Z.set(b,ue);let De=me,en=qa(m,f,se,F,Ue,c,V),tn=(await Ro(se,en,V,b))[Ue.route.id];if(Z.get(b)===ue&&Z.delete(b),!se.signal.aborted){if(ie.has(b)){An(b,Zt(void 0));return}if(na(tn))if(ge>De){An(b,Zt(void 0));return}else{z.add(b),await sn(se,tn,!1,{preventScrollReset:Q});return}if(Gn(tn)){mt(b,M,tn.error);return}An(b,Zt(tn.data))}}async function sn(b,M,_,{submission:F,fetcherSubmission:V,preventScrollReset:re,replace:W}={}){_||(ye?.resolve(),ye=null),M.response.headers.has("X-Remix-Revalidate")&&(L=!0);let Q=M.response.headers.get("Location");Se(Q,"Expected a Location header on the redirect Response"),Q=Yf(Q,new URL(b.url),p);let ee=Ql(O.location,Q,{_isRedirect:!0});if(i){let en=!1;if(M.response.headers.has("X-Remix-Reload-Document"))en=!0;else if(_s(Q)){const nn=fg(Q,!0);en=nn.origin!==s.location.origin||ct(nn.pathname,p)==null}if(en){W?s.location.replace(Q):s.location.assign(Q);return}}je=null;let ae=W===!0||M.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ue,formAction:se,formEncType:Ue}=O.navigation;!F&&!V&&ue&&se&&Ue&&(F=Kf(O.navigation));let De=F||V;if(Zb.has(M.response.status)&&De&&Rn(De.formMethod))await dt(ae,ee,{submission:{...De,formAction:Q},preventScrollReset:re||He,enableViewTransition:_?ke:void 0});else{let en=ru(ee,F);await dt(ae,ee,{overrideNavigation:en,fetcherSubmission:V,preventScrollReset:re||He,enableViewTransition:_?ke:void 0})}}async function Ro(b,M,_,F){let V,re={};try{V=await rv(E,b,M,F,_,!1)}catch(W){return M.filter(Q=>Q.shouldLoad).forEach(Q=>{re[Q.route.id]={type:"error",error:W}}),re}if(b.signal.aborted)return re;if(!Rn(b.method))for(let W of M){if(V[W.route.id]?.type==="error")break;!V.hasOwnProperty(W.route.id)&&!O.loaderData.hasOwnProperty(W.route.id)&&(!O.errors||!O.errors.hasOwnProperty(W.route.id))&&W.shouldCallHandler()&&(V[W.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${W.route.id}`)})}for(let[W,Q]of Object.entries(V))if(hv(Q)){let ee=Q.result;re[W]={type:"redirect",response:uv(ee,b,W,M,p)}}else re[W]=await cv(Q);return re}async function Ka(b,M,_,F){let V=Ro(_,b,F,null),re=Promise.all(M.map(async ee=>{if(ee.matches&&ee.match&&ee.request&&ee.controller){let ue=(await Ro(ee.request,ee.matches,F,ee.key))[ee.match.route.id];return{[ee.key]:ue}}else return Promise.resolve({[ee.key]:{type:"error",error:st(404,{pathname:ee.path})}})})),W=await V,Q=(await re).reduce((ee,ae)=>Object.assign(ee,ae),{});return{loaderResults:W,fetcherResults:Q}}function la(){L=!0,q.forEach((b,M)=>{Z.has(M)&&Y.add(M),We(M)})}function An(b,M,_={}){O.fetchers.set(b,M),mn({fetchers:new Map(O.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function mt(b,M,_,F={}){let V=Mo(O.matches,M);Qa(b),mn({errors:{[V.route.id]:_},fetchers:new Map(O.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function Za(b){return $.set(b,($.get(b)||0)+1),ie.has(b)&&ie.delete(b),O.fetchers.get(b)||Qb}function Fs(b,M){We(b,M?.reason),An(b,Zt(null))}function Qa(b){let M=O.fetchers.get(b);Z.has(b)&&!(M&&M.state==="loading"&&S.has(b))&&We(b),q.delete(b),S.delete(b),z.delete(b),ie.delete(b),Y.delete(b),O.fetchers.delete(b)}function Do(b){let M=($.get(b)||0)-1;M<=0?($.delete(b),ie.add(b)):$.set(b,M),mn({fetchers:new Map(O.fetchers)})}function We(b,M){let _=Z.get(b);_&&(_.abort(M),Z.delete(b))}function pt(b){for(let M of b){let _=Za(M),F=Zt(_.data);O.fetchers.set(M,F)}}function On(){let b=[],M=!1;for(let _ of z){let F=O.fetchers.get(_);Se(F,`Expected fetcher: ${_}`),F.state==="loading"&&(z.delete(_),b.push(_),M=!0)}return pt(b),M}function sr(b){let M=[];for(let[_,F]of S)if(F<b){let V=O.fetchers.get(_);Se(V,`Expected fetcher: ${_}`),V.state==="loading"&&(We(_),S.delete(_),M.push(_))}return pt(M),M.length>0}function Ys(b,M){let _=O.blockers.get(b)||Fl;return pe.get(b)!==M&&pe.set(b,M),_}function ir(b){O.blockers.delete(b),pe.delete(b)}function Dt(b,M){let _=O.blockers.get(b)||Fl;Se(_.state==="unblocked"&&M.state==="blocked"||_.state==="blocked"&&M.state==="blocked"||_.state==="blocked"&&M.state==="proceeding"||_.state==="blocked"&&M.state==="unblocked"||_.state==="proceeding"&&M.state==="unblocked",`Invalid blocker state transition: ${_.state} -> ${M.state}`);let F=new Map(O.blockers);F.set(b,M),mn({blockers:F})}function Ao({currentLocation:b,nextLocation:M,historyAction:_}){if(pe.size===0)return;pe.size>1&&ln(!1,"A router only supports one blocker at a time");let F=Array.from(pe.entries()),[V,re]=F[F.length-1],W=O.blockers.get(V);if(!(W&&W.state==="proceeding")&&re({currentLocation:b,nextLocation:M,historyAction:_}))return V}function $t(b){let M=st(404,{pathname:b}),_=y||h,{matches:F,route:V}=Es(_);return{notFoundMatches:F,route:V,error:M}}function At(b,M,_){if(I=b,J=M,X=_||null,!K&&O.navigation===lu){K=!0;let F=cr(O.location,O.matches);F!=null&&mn({restoreScrollPosition:F})}return()=>{I=null,J=null,X=null}}function Co(b,M){return X&&X(b,M.map(F=>Tb(F,O.loaderData)))||b.key}function _o(b,M){if(I&&J){let _=Co(b,M);I[_]=J()}}function cr(b,M){if(I){let _=Co(b,M),F=I[_];if(typeof F=="number")return F}return null}function Lo(b,M,_){if(a.patchRoutesOnNavigation)if(b){if(Object.keys(b[0].params).length>0)return{active:!0,matches:Kl(M,_,p,!0)}}else return{active:!0,matches:Kl(M,_,p,!0)||[]};return{active:!1,matches:null}}async function Wt(b,M,_,F){if(!a.patchRoutesOnNavigation)return{type:"success",matches:b};let V=b;for(;;){let re=y==null,W=y||h,Q=f;try{await a.patchRoutesOnNavigation({signal:_,path:M,matches:V,fetcherKey:F,patch:(ue,se)=>{_.aborted||Hf(ue,se,W,Q,m,!1)}})}catch(ue){return{type:"error",error:ue,partialMatches:V}}finally{re&&!_.aborted&&(h=[...h])}if(_.aborted)return{type:"aborted"};let ee=jo(W,M,p),ae=null;if(ee){if(Object.keys(ee[0].params).length===0)return{type:"success",matches:ee};if(ae=Kl(W,M,p,!0),!(ae&&V.length<ae.length&&eo(V,ae.slice(0,V.length))))return{type:"success",matches:ee}}if(ae||(ae=Kl(W,M,p,!0)),!ae||eo(V,ae))return{type:"success",matches:null};V=ae}}function eo(b,M){return b.length===M.length&&b.every((_,F)=>_.route.id===M[F].route.id)}function qs(b){f={},y=$l(b,m,void 0,f)}function ur(b,M,_=!1){let F=y==null;Hf(b,M,y||h,f,m,_),F&&(h=[...h],mn({}))}return Ee={get basename(){return p},get future(){return x},get state(){return O},get routes(){return h},get window(){return s},initialize:$e,subscribe:oa,enableScrollRestoration:At,navigate:xt,fetch:Ga,revalidate:Xa,createHref:b=>a.history.createHref(b),encodeLocation:b=>a.history.encodeLocation(b),getFetcher:Za,resetFetcher:Fs,deleteFetcher:Do,dispose:No,getBlocker:Ys,deleteBlocker:ir,patchRoutes:ur,_internalFetchControllers:Z,_internalSetRoutes:qs,_internalSetStateDoNotUseOrYouWillBreakYourApp(b){mn(b)}},a.unstable_instrumentations&&(Ee=Fb(Ee,a.unstable_instrumentations.map(b=>b.router).filter(Boolean))),Ee}function ev(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function fu(a,s,i,c,d,m){let f,h;if(d){f=[];for(let p of s)if(f.push(p),p.route.id===d){h=p;break}}else f=s,h=s[s.length-1];let y=xu(c||".",vu(f),ct(a.pathname,i)||a.pathname,m==="path");if(c==null&&(y.search=a.search,y.hash=a.hash),(c==null||c===""||c===".")&&h){let p=Tu(y.search);if(h.route.index&&!p)y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let E=new URLSearchParams(y.search),x=E.getAll("index");E.delete("index"),x.filter(U=>U).forEach(U=>E.append("index",U));let A=E.toString();y.search=A?`?${A}`:""}}return i!=="/"&&(y.pathname=kb({basename:i,pathname:y.pathname})),Mt(y)}function zf(a,s,i){if(!i||!ev(i))return{path:s};if(i.formMethod&&!vv(i.formMethod))return{path:s,error:st(405,{method:i.formMethod})};let c=()=>({path:s,error:st(400,{type:"invalid-body"})}),m=(i.formMethod||"get").toUpperCase(),f=Ag(s);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Rn(m))return c();let x=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((A,[U,I])=>`${A}${U}=${I}
`,""):String(i.body);return{path:s,submission:{formMethod:m,formAction:f,formEncType:i.formEncType,formData:void 0,json:void 0,text:x}}}else if(i.formEncType==="application/json"){if(!Rn(m))return c();try{let x=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:s,submission:{formMethod:m,formAction:f,formEncType:i.formEncType,formData:void 0,json:x,text:void 0}}}catch{return c()}}}Se(typeof FormData=="function","FormData is not available in this environment");let h,y;if(i.formData)h=yu(i.formData),y=i.formData;else if(i.body instanceof FormData)h=yu(i.body),y=i.body;else if(i.body instanceof URLSearchParams)h=i.body,y=qf(h);else if(i.body==null)h=new URLSearchParams,y=new FormData;else try{h=new URLSearchParams(i.body),y=qf(h)}catch{return c()}let p={formMethod:m,formAction:f,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:y,json:void 0,text:void 0};if(Rn(p.formMethod))return{path:s,submission:p};let E=Qt(s);return a&&E.search&&Tu(E.search)&&h.append("index",""),E.search=`?${h}`,{path:Mt(E),submission:p}}function Bf(a,s,i,c,d,m,f,h,y,p,E,x,A,U,I,X,J,K,G,te,Ne){let ve=te?Gn(te[1])?te[1].error:te[1].data:void 0,Ee=d.createURL(m.location),O=d.createURL(y),le;if(E&&m.errors){let xe=Object.keys(m.errors)[0];le=f.findIndex(L=>L.route.id===xe)}else if(te&&Gn(te[1])){let xe=te[0];le=f.findIndex(L=>L.route.id===xe)-1}let ye=te?te[1].statusCode:void 0,He=ye&&ye>=400,je={currentUrl:Ee,currentParams:m.matches[0]?.params||{},nextUrl:O,nextParams:f[0].params,...h,actionResult:ve,actionStatus:ye},ke=tr(f),yn=f.map((xe,L)=>{let{route:Y}=xe,Z=null;if(le!=null&&L>le?Z=!1:Y.lazy?Z=!0:Su(Y)?E?Z=gu(Y,m.loaderData,m.errors):nv(m.loaderData,m.matches[L],xe)&&(Z=!0):Z=!1,Z!==null)return hu(i,c,a,ke,xe,p,s,Z);let me=!1;typeof Ne=="boolean"?me=Ne:He?me=!1:(x||Ee.pathname+Ee.search===O.pathname+O.search||Ee.search!==O.search||tv(m.matches[L],xe))&&(me=!0);let ge={...je,defaultShouldRevalidate:me},S=Zl(xe,ge);return hu(i,c,a,ke,xe,p,s,S,ge,Ne)}),Ie=[];return I.forEach((xe,L)=>{if(E||!f.some($=>$.route.id===xe.routeId)||U.has(L))return;let Y=m.fetchers.get(L),Z=Y&&Y.state!=="idle"&&Y.data===void 0,me=jo(J,xe.path,K);if(!me){if(G&&Z)return;Ie.push({key:L,routeId:xe.routeId,path:xe.path,matches:null,match:null,request:null,controller:null});return}if(X.has(L))return;let ge=Rs(me,xe.path),S=new AbortController,z=Ia(d,xe.path,S.signal),q=null;if(A.has(L))A.delete(L),q=qa(i,c,z,me,ge,p,s);else if(Z)x&&(q=qa(i,c,z,me,ge,p,s));else{let $;typeof Ne=="boolean"?$=Ne:He?$=!1:$=x;let ie={...je,defaultShouldRevalidate:$};Zl(ge,ie)&&(q=qa(i,c,z,me,ge,p,s,ie))}q&&Ie.push({key:L,routeId:xe.routeId,path:xe.path,matches:q,match:ge,request:z,controller:S})}),{dsMatches:yn,revalidatingFetchers:Ie}}function Su(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function gu(a,s,i){if(a.lazy)return!0;if(!Su(a))return!1;let c=s!=null&&a.id in s,d=i!=null&&i[a.id]!==void 0;return!c&&d?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!c&&!d}function nv(a,s,i){let c=!s||i.route.id!==s.route.id,d=!a.hasOwnProperty(i.route.id);return c||d}function tv(a,s){let i=a.route.path;return a.pathname!==s.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==s.params["*"]}function Zl(a,s){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(s);if(typeof i=="boolean")return i}return s.defaultShouldRevalidate}function Hf(a,s,i,c,d,m){let f;if(a){let p=c[a];Se(p,`No route found to patch children into: routeId = ${a}`),p.children||(p.children=[]),f=p.children}else f=i;let h=[],y=[];if(s.forEach(p=>{let E=f.find(x=>Mg(p,x));E?y.push({existingRoute:E,newRoute:p}):h.push(p)}),h.length>0){let p=$l(h,d,[a||"_","patch",String(f?.length||"0")],c);f.push(...p)}if(m&&y.length>0)for(let p=0;p<y.length;p++){let{existingRoute:E,newRoute:x}=y[p],A=E,[U]=$l([x],d,[],{},!0);Object.assign(A,{element:U.element?U.element:A.element,errorElement:U.errorElement?U.errorElement:A.errorElement,hydrateFallbackElement:U.hydrateFallbackElement?U.hydrateFallbackElement:A.hydrateFallbackElement})}}function Mg(a,s){return"id"in a&&"id"in s&&a.id===s.id?!0:a.index===s.index&&a.path===s.path&&a.caseSensitive===s.caseSensitive?(!a.children||a.children.length===0)&&(!s.children||s.children.length===0)?!0:a.children.every((i,c)=>s.children?.some(d=>Mg(i,d))):!1}var Pf=new WeakMap,Og=({key:a,route:s,manifest:i,mapRouteProperties:c})=>{let d=i[s.id];if(Se(d,"No route found in manifest"),!d.lazy||typeof d.lazy!="object")return;let m=d.lazy[a];if(!m)return;let f=Pf.get(d);f||(f={},Pf.set(d,f));let h=f[a];if(h)return h;let y=(async()=>{let p=vb(a),x=d[a]!==void 0&&a!=="hasErrorBoundary";if(p)ln(!p,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),f[a]=Promise.resolve();else if(x)ln(!1,`Route "${d.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let A=await m();A!=null&&(Object.assign(d,{[a]:A}),Object.assign(d,c(d)))}typeof d.lazy=="object"&&(d.lazy[a]=void 0,Object.values(d.lazy).every(A=>A===void 0)&&(d.lazy=void 0))})();return f[a]=y,y},If=new WeakMap;function ov(a,s,i,c,d){let m=i[a.id];if(Se(m,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let E=If.get(m);if(E)return{lazyRoutePromise:E,lazyHandlerPromise:E};let x=(async()=>{Se(typeof a.lazy=="function","No lazy route function found");let A=await a.lazy(),U={};for(let I in A){let X=A[I];if(X===void 0)continue;let J=Sb(I),G=m[I]!==void 0&&I!=="hasErrorBoundary";J?ln(!J,"Route property "+I+" is not a supported property to be returned from a lazy route function. This property will be ignored."):G?ln(!G,`Route "${m.id}" has a static property "${I}" defined but its lazy function is also returning a value for this property. The lazy route property "${I}" will be ignored.`):U[I]=X}Object.assign(m,U),Object.assign(m,{...c(m),lazy:void 0})})();return If.set(m,x),x.catch(()=>{}),{lazyRoutePromise:x,lazyHandlerPromise:x}}let f=Object.keys(a.lazy),h=[],y;for(let E of f){if(d&&d.includes(E))continue;let x=Og({key:E,route:a,manifest:i,mapRouteProperties:c});x&&(h.push(x),E===s&&(y=x))}let p=h.length>0?Promise.all(h).then(()=>{}):void 0;return p?.catch(()=>{}),y?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:y}}async function Ff(a){let s=a.matches.filter(d=>d.shouldLoad),i={};return(await Promise.all(s.map(d=>d.resolve()))).forEach((d,m)=>{i[s[m].route.id]=d}),i}async function av(a){return a.matches.some(s=>s.route.middleware)?Ng(a,()=>Ff(a)):Ff(a)}function Ng(a,s){return lv(a,s,c=>{if(bv(c))throw c;return c},fv,i);function i(c,d,m){if(m)return Promise.resolve(Object.assign(m.value,{[d]:{type:"error",result:c}}));{let{matches:f}=a,h=Math.min(Math.max(f.findIndex(p=>p.route.id===d),0),Math.max(f.findIndex(p=>p.shouldCallHandler()),0)),y=Mo(f,f[h].route.id).route.id;return Promise.resolve({[y]:{type:"error",result:c}})}}}async function lv(a,s,i,c,d){let{matches:m,request:f,params:h,context:y,unstable_pattern:p}=a,E=m.flatMap(A=>A.route.middleware?A.route.middleware.map(U=>[A.route.id,U]):[]);return await Rg({request:f,params:h,context:y,unstable_pattern:p},E,s,i,c,d)}async function Rg(a,s,i,c,d,m,f=0){let{request:h}=a;if(h.signal.aborted)throw h.signal.reason??new Error(`Request aborted: ${h.method} ${h.url}`);let y=s[f];if(!y)return await i();let[p,E]=y,x,A=async()=>{if(x)throw new Error("You may only call `next()` once per middleware");try{return x={value:await Rg(a,s,i,c,d,m,f+1)},x.value}catch(U){return x={value:await m(U,p,x)},x.value}};try{let U=await E(a,A),I=U!=null?c(U):void 0;return d(I)?I:x?I??x.value:(x={value:await A()},x.value)}catch(U){return await m(U,p,x)}}function Dg(a,s,i,c,d){let m=Og({key:"middleware",route:c.route,manifest:s,mapRouteProperties:a}),f=ov(c.route,Rn(i.method)?"action":"loader",s,a,d);return{middleware:m,route:f.lazyRoutePromise,handler:f.lazyHandlerPromise}}function hu(a,s,i,c,d,m,f,h,y=null,p){let E=!1,x=Dg(a,s,i,d,m);return{...d,_lazyPromises:x,shouldLoad:h,shouldRevalidateArgs:y,shouldCallHandler(A){return E=!0,y?typeof p=="boolean"?Zl(d,{...y,defaultShouldRevalidate:p}):typeof A=="boolean"?Zl(d,{...y,defaultShouldRevalidate:A}):Zl(d,y):h},resolve(A){let{lazy:U,loader:I,middleware:X}=d.route,J=E||h||A&&!Rn(i.method)&&(U||I),K=X&&X.length>0&&!I&&!U;return J&&(Rn(i.method)||!K)?sv({request:i,unstable_pattern:c,match:d,lazyHandlerPromise:x?.handler,lazyRoutePromise:x?.route,handlerOverride:A,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function qa(a,s,i,c,d,m,f,h=null){return c.map(y=>y.route.id!==d.route.id?{...y,shouldLoad:!1,shouldRevalidateArgs:h,shouldCallHandler:()=>!1,_lazyPromises:Dg(a,s,i,y,m),resolve:()=>Promise.resolve({type:"data",result:void 0})}:hu(a,s,i,tr(c),y,m,f,!0,h))}async function rv(a,s,i,c,d,m){i.some(p=>p._lazyPromises?.middleware)&&await Promise.all(i.map(p=>p._lazyPromises?.middleware));let f={request:s,unstable_pattern:tr(i),params:i[0].params,context:d,matches:i},y=await a({...f,fetcherKey:c,runClientMiddleware:p=>{let E=f;return Ng(E,()=>p({...E,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return y}async function sv({request:a,unstable_pattern:s,match:i,lazyHandlerPromise:c,lazyRoutePromise:d,handlerOverride:m,scopedContext:f}){let h,y,p=Rn(a.method),E=p?"action":"loader",x=A=>{let U,I=new Promise((K,G)=>U=G);y=()=>U(),a.signal.addEventListener("abort",y);let X=K=>typeof A!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${E}" [routeId: ${i.route.id}]`)):A({request:a,unstable_pattern:s,params:i.params,context:f},...K!==void 0?[K]:[]),J=(async()=>{try{return{type:"data",result:await(m?m(G=>X(G)):X())}}catch(K){return{type:"error",result:K}}})();return Promise.race([J,I])};try{let A=p?i.route.action:i.route.loader;if(c||d)if(A){let U,[I]=await Promise.all([x(A).catch(X=>{U=X}),c,d]);if(U!==void 0)throw U;h=I}else{await c;let U=p?i.route.action:i.route.loader;if(U)[h]=await Promise.all([x(U),d]);else if(E==="action"){let I=new URL(a.url),X=I.pathname+I.search;throw st(405,{method:a.method,pathname:X,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(A)h=await x(A);else{let U=new URL(a.url),I=U.pathname+U.search;throw st(404,{pathname:I})}}catch(A){return{type:"error",result:A}}finally{y&&a.signal.removeEventListener("abort",y)}return h}async function iv(a){let s=a.headers.get("Content-Type");return s&&/\bapplication\/json\b/.test(s)?a.body==null?null:a.json():a.text()}async function cv(a){let{result:s,type:i}=a;if(Eu(s)){let c;try{c=await iv(s)}catch(d){return{type:"error",error:d}}return i==="error"?{type:"error",error:new nr(s.status,s.statusText,c),statusCode:s.status,headers:s.headers}:{type:"data",data:c,statusCode:s.status,headers:s.headers}}return i==="error"?Gf(s)?s.data instanceof Error?{type:"error",error:s.data,statusCode:s.init?.status,headers:s.init?.headers?new Headers(s.init.headers):void 0}:{type:"error",error:pv(s),statusCode:Wl(s)?s.status:void 0,headers:s.init?.headers?new Headers(s.init.headers):void 0}:{type:"error",error:s,statusCode:Wl(s)?s.status:void 0}:Gf(s)?{type:"data",data:s.data,statusCode:s.init?.status,headers:s.init?.headers?new Headers(s.init.headers):void 0}:{type:"data",data:s}}function uv(a,s,i,c,d){let m=a.headers.get("Location");if(Se(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!_s(m)){let f=c.slice(0,c.findIndex(h=>h.route.id===i)+1);m=fu(new URL(s.url),f,d,m),a.headers.set("Location",m)}return a}function Yf(a,s,i){if(_s(a)){let c=a,d=c.startsWith("//")?new URL(s.protocol+c):new URL(c),m=ct(d.pathname,i)!=null;if(d.origin===s.origin&&m)return d.pathname+d.search+d.hash}return a}function Ia(a,s,i,c){let d=a.createURL(Ag(s)).toString(),m={signal:i};if(c&&Rn(c.formMethod)){let{formMethod:f,formEncType:h}=c;m.method=f.toUpperCase(),h==="application/json"?(m.headers=new Headers({"Content-Type":h}),m.body=JSON.stringify(c.json)):h==="text/plain"?m.body=c.text:h==="application/x-www-form-urlencoded"&&c.formData?m.body=yu(c.formData):m.body=c.formData}return new Request(d,m)}function yu(a){let s=new URLSearchParams;for(let[i,c]of a.entries())s.append(i,typeof c=="string"?c:c.name);return s}function qf(a){let s=new FormData;for(let[i,c]of a.entries())s.append(i,c);return s}function dv(a,s,i,c=!1,d=!1){let m={},f=null,h,y=!1,p={},E=i&&Gn(i[1])?i[1].error:void 0;return a.forEach(x=>{if(!(x.route.id in s))return;let A=x.route.id,U=s[A];if(Se(!na(U),"Cannot handle redirect results in processLoaderData"),Gn(U)){let I=U.error;if(E!==void 0&&(I=E,E=void 0),f=f||{},d)f[A]=I;else{let X=Mo(a,A);f[X.route.id]==null&&(f[X.route.id]=I)}c||(m[A]=jg),y||(y=!0,h=Wl(U.error)?U.error.status:500),U.headers&&(p[A]=U.headers)}else m[A]=U.data,U.statusCode&&U.statusCode!==200&&!y&&(h=U.statusCode),U.headers&&(p[A]=U.headers)}),E!==void 0&&i&&(f={[i[0]]:E},i[2]&&(m[i[2]]=void 0)),{loaderData:m,errors:f,statusCode:h||200,loaderHeaders:p}}function Vf(a,s,i,c,d,m){let{loaderData:f,errors:h}=dv(s,i,c);return d.filter(y=>!y.matches||y.matches.some(p=>p.shouldLoad)).forEach(y=>{let{key:p,match:E,controller:x}=y;if(x&&x.signal.aborted)return;let A=m[p];if(Se(A,"Did not find corresponding fetcher result"),Gn(A)){let U=Mo(a.matches,E?.route.id);h&&h[U.route.id]||(h={...h,[U.route.id]:A.error}),a.fetchers.delete(p)}else if(na(A))Se(!1,"Unhandled fetcher revalidation redirect");else{let U=Zt(A.data);a.fetchers.set(p,U)}}),{loaderData:f,errors:h}}function Xf(a,s,i,c){let d=Object.entries(s).filter(([,m])=>m!==jg).reduce((m,[f,h])=>(m[f]=h,m),{});for(let m of i){let f=m.route.id;if(!s.hasOwnProperty(f)&&a.hasOwnProperty(f)&&m.route.loader&&(d[f]=a[f]),c&&c.hasOwnProperty(f))break}return d}function Jf(a){return a?Gn(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function Mo(a,s){return(s?a.slice(0,a.findIndex(c=>c.route.id===s)+1):[...a]).reverse().find(c=>c.route.hasErrorBoundary===!0)||a[0]}function Es(a){let s=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:s}],route:s}}function st(a,{pathname:s,routeId:i,method:c,type:d,message:m}={}){let f="Unknown Server Error",h="Unknown @remix-run/router error";return a===400?(f="Bad Request",c&&s&&i?h=`You made a ${c} request to "${s}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:d==="invalid-body"&&(h="Unable to encode submission body")):a===403?(f="Forbidden",h=`Route "${i}" does not match URL "${s}"`):a===404?(f="Not Found",h=`No route matches URL "${s}"`):a===405&&(f="Method Not Allowed",c&&s&&i?h=`You made a ${c.toUpperCase()} request to "${s}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:c&&(h=`Invalid request method "${c.toUpperCase()}"`)),new nr(a||500,f,new Error(h),!0)}function Ts(a){let s=Object.entries(a);for(let i=s.length-1;i>=0;i--){let[c,d]=s[i];if(na(d))return{key:c,result:d}}}function Ag(a){let s=typeof a=="string"?Qt(a):a;return Mt({...s,hash:""})}function mv(a,s){return a.pathname!==s.pathname||a.search!==s.search?!1:a.hash===""?s.hash!=="":a.hash===s.hash?!0:s.hash!==""}function pv(a){return new nr(a.init?.status??500,a.init?.statusText??"Internal Server Error",a.data)}function fv(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([s,i])=>typeof s=="string"&&gv(i))}function gv(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function hv(a){return Eu(a.result)&&Tg.has(a.result.status)}function Gn(a){return a.type==="error"}function na(a){return(a&&a.type)==="redirect"}function Gf(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function Eu(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function yv(a){return Tg.has(a)}function bv(a){return Eu(a)&&yv(a.status)&&a.headers.has("Location")}function vv(a){return Kb.has(a.toUpperCase())}function Rn(a){return Jb.has(a.toUpperCase())}function Tu(a){return new URLSearchParams(a).getAll("index").some(s=>s==="")}function Rs(a,s){let i=typeof s=="string"?Qt(s).search:s.search;if(a[a.length-1].route.index&&Tu(i||""))return a[a.length-1];let c=bg(a);return c[c.length-1]}function Kf(a){let{formMethod:s,formAction:i,formEncType:c,text:d,formData:m,json:f}=a;if(!(!s||!i||!c)){if(d!=null)return{formMethod:s,formAction:i,formEncType:c,formData:void 0,json:void 0,text:d};if(m!=null)return{formMethod:s,formAction:i,formEncType:c,formData:m,json:void 0,text:void 0};if(f!==void 0)return{formMethod:s,formAction:i,formEncType:c,formData:void 0,json:f,text:void 0}}}function ru(a,s){return s?{state:"loading",location:a,formMethod:s.formMethod,formAction:s.formAction,formEncType:s.formEncType,formData:s.formData,json:s.json,text:s.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xv(a,s){return{state:"submitting",location:a,formMethod:s.formMethod,formAction:s.formAction,formEncType:s.formEncType,formData:s.formData,json:s.json,text:s.text}}function Yl(a,s){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:s}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:s}}function Sv(a,s){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:s?s.data:void 0}}function Zt(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Ev(a,s){try{let i=a.sessionStorage.getItem(wg);if(i){let c=JSON.parse(i);for(let[d,m]of Object.entries(c||{}))m&&Array.isArray(m)&&s.set(d,new Set(m||[]))}}catch{}}function Tv(a,s){if(s.size>0){let i={};for(let[c,d]of s)i[c]=[...d];try{a.sessionStorage.setItem(wg,JSON.stringify(i))}catch(c){ln(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function Zf(){let a,s,i=new Promise((c,d)=>{a=async m=>{c(m);try{await i}catch{}},s=async m=>{d(m);try{await i}catch{}}});return{promise:i,resolve:a,reject:s}}var ta=N.createContext(null);ta.displayName="DataRouter";var or=N.createContext(null);or.displayName="DataRouterState";var Cg=N.createContext(!1);function wv(){return N.useContext(Cg)}var wu=N.createContext({isTransitioning:!1});wu.displayName="ViewTransition";var _g=N.createContext(new Map);_g.displayName="Fetchers";var jv=N.createContext(null);jv.displayName="Await";var ut=N.createContext(null);ut.displayName="Navigation";var Ls=N.createContext(null);Ls.displayName="Location";var Ot=N.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var ju=N.createContext(null);ju.displayName="RouteError";var Lg="REACT_ROUTER_ERROR",Mv="REDIRECT",Ov="ROUTE_ERROR_RESPONSE";function Nv(a){if(a.startsWith(`${Lg}:${Mv}:{`))try{let s=JSON.parse(a.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function Rv(a){if(a.startsWith(`${Lg}:${Ov}:{`))try{let s=JSON.parse(a.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new nr(s.status,s.statusText,s.data)}catch{}}function Dv(a,{relative:s}={}){Se(ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:c}=N.useContext(ut),{hash:d,pathname:m,search:f}=lr(a,{relative:s}),h=m;return i!=="/"&&(h=m==="/"?i:jt([i,m])),c.createHref({pathname:h,search:f,hash:d})}function ar(){return N.useContext(Ls)!=null}function Nt(){return Se(ar(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ls).location}var Ug="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kg(a){N.useContext(ut).static||N.useLayoutEffect(a)}function Mu(){let{isDataRoute:a}=N.useContext(Ot);return a?Vv():Av()}function Av(){Se(ar(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(ta),{basename:s,navigator:i}=N.useContext(ut),{matches:c}=N.useContext(Ot),{pathname:d}=Nt(),m=JSON.stringify(vu(c)),f=N.useRef(!1);return kg(()=>{f.current=!0}),N.useCallback((y,p={})=>{if(ln(f.current,Ug),!f.current)return;if(typeof y=="number"){i.go(y);return}let E=xu(y,JSON.parse(m),d,p.relative==="path");a==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:jt([s,E.pathname])),(p.replace?i.replace:i.push)(E,p.state,p)},[s,i,m,d,a])}var Cv=N.createContext(null);function _v(a){let s=N.useContext(Ot).outlet;return N.useMemo(()=>s&&N.createElement(Cv.Provider,{value:a},s),[s,a])}function lr(a,{relative:s}={}){let{matches:i}=N.useContext(Ot),{pathname:c}=Nt(),d=JSON.stringify(vu(i));return N.useMemo(()=>xu(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function Lv(a,s,i,c,d){Se(ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=N.useContext(ut),{matches:f}=N.useContext(Ot),h=f[f.length-1],y=h?h.params:{},p=h?h.pathname:"/",E=h?h.pathnameBase:"/",x=h&&h.route;{let G=x&&x.path||"";Bg(p,!x||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let A=Nt(),U;U=A;let I=U.pathname||"/",X=I;if(E!=="/"){let G=E.replace(/^\//,"").split("/");X="/"+I.replace(/^\//,"").split("/").slice(G.length).join("/")}let J=jo(a,{pathname:X});return ln(x||J!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),ln(J==null||J[J.length-1].route.element!==void 0||J[J.length-1].route.Component!==void 0||J[J.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Hv(J&&J.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:jt([E,m.encodeLocation?m.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?E:jt([E,m.encodeLocation?m.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),f,i,c,d)}function Uv(){let a=qv(),s=Wl(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:m},"ErrorBoundary")," or"," ",N.createElement("code",{style:m},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},s),i?N.createElement("pre",{style:d},i):null,f)}var kv=N.createElement(Uv,null),zg=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){this.props.onError?this.props.onError(a,s):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=Rv(a.digest);i&&(a=i)}let s=a!==void 0?N.createElement(Ot.Provider,{value:this.props.routeContext},N.createElement(ju.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(zv,{error:a},s):s}};zg.contextType=Cg;var su=new WeakMap;function zv({children:a,error:s}){let{basename:i}=N.useContext(ut);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=Nv(s.digest);if(c){let d=su.get(s);if(d)throw d;let m=xg(c.location,i);if(vg&&!su.get(s))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw su.set(s,f),f}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return a}function Bv({routeContext:a,match:s,children:i}){let c=N.useContext(ta);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),N.createElement(Ot.Provider,{value:a},i)}function Hv(a,s=[],i=null,c=null,d=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(s.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let m=a,f=i?.errors;if(f!=null){let E=m.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);Se(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),m=m.slice(0,Math.min(m.length,E+1))}let h=!1,y=-1;if(i)for(let E=0;E<m.length;E++){let x=m[E];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=E),x.route.id){let{loaderData:A,errors:U}=i,I=x.route.loader&&!A.hasOwnProperty(x.route.id)&&(!U||U[x.route.id]===void 0);if(x.route.lazy||I){h=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let p=i&&c?(E,x)=>{c(E,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:tr(i.matches),errorInfo:x})}:void 0;return m.reduceRight((E,x,A)=>{let U,I=!1,X=null,J=null;i&&(U=f&&x.route.id?f[x.route.id]:void 0,X=x.route.errorElement||kv,h&&(y<0&&A===0?(Bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,J=null):y===A&&(I=!0,J=x.route.hydrateFallbackElement||null)));let K=s.concat(m.slice(0,A+1)),G=()=>{let te;return U?te=X:I?te=J:x.route.Component?te=N.createElement(x.route.Component,null):x.route.element?te=x.route.element:te=E,N.createElement(Bv,{match:x,routeContext:{outlet:E,matches:K,isDataRoute:i!=null},children:te})};return i&&(x.route.ErrorBoundary||x.route.errorElement||A===0)?N.createElement(zg,{location:i.location,revalidation:i.revalidation,component:X,error:U,children:G(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):G()},null)}function Ou(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pv(a){let s=N.useContext(ta);return Se(s,Ou(a)),s}function Iv(a){let s=N.useContext(or);return Se(s,Ou(a)),s}function Fv(a){let s=N.useContext(Ot);return Se(s,Ou(a)),s}function Nu(a){let s=Fv(a),i=s.matches[s.matches.length-1];return Se(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Yv(){return Nu("useRouteId")}function qv(){let a=N.useContext(ju),s=Iv("useRouteError"),i=Nu("useRouteError");return a!==void 0?a:s.errors?.[i]}function Vv(){let{router:a}=Pv("useNavigate"),s=Nu("useNavigate"),i=N.useRef(!1);return kg(()=>{i.current=!0}),N.useCallback(async(d,m={})=>{ln(i.current,Ug),i.current&&(typeof d=="number"?await a.navigate(d):await a.navigate(d,{fromRouteId:s,...m}))},[a,s])}var Qf={};function Bg(a,s,i){!s&&!Qf[a]&&(Qf[a]=!0,ln(!1,i))}var $f={};function Wf(a,s){!a&&!$f[s]&&($f[s]=!0,console.warn(s))}var Xv="useOptimistic",eg=rb[Xv],Jv=()=>{};function Gv(a){return eg?eg(a):[a,Jv]}function Kv(a){let s={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&ln(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(s,{element:N.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&ln(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(s,{hydrateFallbackElement:N.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&ln(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(s,{errorElement:N.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),s}var Zv=["HydrateFallback","hydrateFallbackElement"],Qv=class{constructor(){this.status="pending",this.promise=new Promise((a,s)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",s(i))}})}};function $v({router:a,flushSync:s,onError:i,unstable_useTransitions:c}){c=wv()||c;let[m,f]=N.useState(a.state),[h,y]=Gv(m),[p,E]=N.useState(),[x,A]=N.useState({isTransitioning:!1}),[U,I]=N.useState(),[X,J]=N.useState(),[K,G]=N.useState(),te=N.useRef(new Map),Ne=N.useCallback((le,{deletedFetchers:ye,newErrors:He,flushSync:je,viewTransitionOpts:ke})=>{He&&i&&Object.values(He).forEach(Ie=>i(Ie,{location:le.location,params:le.matches[0]?.params??{},unstable_pattern:tr(le.matches)})),le.fetchers.forEach((Ie,xe)=>{Ie.data!==void 0&&te.current.set(xe,Ie.data)}),ye.forEach(Ie=>te.current.delete(Ie)),Wf(je===!1||s!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let yn=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(Wf(ke==null||yn,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ke||!yn){s&&je?s(()=>f(le)):c===!1?f(le):N.startTransition(()=>{c===!0&&y(Ie=>ng(Ie,le)),f(le)});return}if(s&&je){s(()=>{X&&(U?.resolve(),X.skipTransition()),A({isTransitioning:!0,flushSync:!0,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation})});let Ie=a.window.document.startViewTransition(()=>{s(()=>f(le))});Ie.finished.finally(()=>{s(()=>{I(void 0),J(void 0),E(void 0),A({isTransitioning:!1})})}),s(()=>J(Ie));return}X?(U?.resolve(),X.skipTransition(),G({state:le,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation})):(E(le),A({isTransitioning:!0,flushSync:!1,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation}))},[a.window,s,X,U,c,y,i]);N.useLayoutEffect(()=>a.subscribe(Ne),[a,Ne]),N.useEffect(()=>{x.isTransitioning&&!x.flushSync&&I(new Qv)},[x]),N.useEffect(()=>{if(U&&p&&a.window){let le=p,ye=U.promise,He=a.window.document.startViewTransition(async()=>{c===!1?f(le):N.startTransition(()=>{c===!0&&y(je=>ng(je,le)),f(le)}),await ye});He.finished.finally(()=>{I(void 0),J(void 0),E(void 0),A({isTransitioning:!1})}),J(He)}},[p,U,a.window,c,y]),N.useEffect(()=>{U&&p&&h.location.key===p.location.key&&U.resolve()},[U,X,h.location,p]),N.useEffect(()=>{!x.isTransitioning&&K&&(E(K.state),A({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}),G(void 0))},[x.isTransitioning,K]);let ve=N.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:le=>a.navigate(le),push:(le,ye,He)=>a.navigate(le,{state:ye,preventScrollReset:He?.preventScrollReset}),replace:(le,ye,He)=>a.navigate(le,{replace:!0,state:ye,preventScrollReset:He?.preventScrollReset})}),[a]),Ee=a.basename||"/",O=N.useMemo(()=>({router:a,navigator:ve,static:!1,basename:Ee,onError:i}),[a,ve,Ee,i]);return N.createElement(N.Fragment,null,N.createElement(ta.Provider,{value:O},N.createElement(or.Provider,{value:h},N.createElement(_g.Provider,{value:te.current},N.createElement(wu.Provider,{value:x},N.createElement(n0,{basename:Ee,location:h.location,navigationType:h.historyAction,navigator:ve,unstable_useTransitions:c},N.createElement(Wv,{routes:a.routes,future:a.future,state:h,onError:i})))))),null)}function ng(a,s){return{...a,navigation:s.navigation.state!=="idle"?s.navigation:a.navigation,revalidation:s.revalidation!=="idle"?s.revalidation:a.revalidation,actionData:s.navigation.state!=="submitting"?s.actionData:a.actionData,fetchers:s.fetchers}}var Wv=N.memo(e0);function e0({routes:a,future:s,state:i,onError:c}){return Lv(a,void 0,i,c,s)}function Hg(a){return _v(a.context)}function n0({basename:a="/",children:s=null,location:i,navigationType:c="POP",navigator:d,static:m=!1,unstable_useTransitions:f}){Se(!ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:h,navigator:d,static:m,unstable_useTransitions:f,future:{}}),[h,d,m,f]);typeof i=="string"&&(i=Qt(i));let{pathname:p="/",search:E="",hash:x="",state:A=null,key:U="default"}=i,I=N.useMemo(()=>{let X=ct(p,h);return X==null?null:{location:{pathname:X,search:E,hash:x,state:A,key:U},navigationType:c}},[h,p,E,x,A,U,c]);return ln(I!=null,`<Router basename="${h}"> is not able to match the URL "${p}${E}${x}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:N.createElement(ut.Provider,{value:y},N.createElement(Ls.Provider,{children:s,value:I}))}var Ds="get",As="application/x-www-form-urlencoded";function Us(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function t0(a){return Us(a)&&a.tagName.toLowerCase()==="button"}function o0(a){return Us(a)&&a.tagName.toLowerCase()==="form"}function a0(a){return Us(a)&&a.tagName.toLowerCase()==="input"}function l0(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function r0(a,s){return a.button===0&&(!s||s==="_self")&&!l0(a)}var ws=null;function s0(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var i0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function iu(a){return a!=null&&!i0.has(a)?(ln(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${As}"`),null):a}function c0(a,s){let i,c,d,m,f;if(o0(a)){let h=a.getAttribute("action");c=h?ct(h,s):null,i=a.getAttribute("method")||Ds,d=iu(a.getAttribute("enctype"))||As,m=new FormData(a)}else if(t0(a)||a0(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=a.getAttribute("formaction")||h.getAttribute("action");if(c=y?ct(y,s):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||Ds,d=iu(a.getAttribute("formenctype"))||iu(h.getAttribute("enctype"))||As,m=new FormData(h,a),!s0()){let{name:p,type:E,value:x}=a;if(E==="image"){let A=p?`${p}.`:"";m.append(`${A}x`,"0"),m.append(`${A}y`,"0")}else p&&m.append(p,x)}}else{if(Us(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ds,c=null,d=As,f=a}return m&&d==="text/plain"&&(f=m,m=void 0),{action:c,method:i.toLowerCase(),encType:d,formData:m,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ru(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function u0(a,s,i){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${i}`:s&&ct(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${i}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${i}`,c}async function d0(a,s){if(a.id in s)return s[a.id];try{let i=await import(a.module);return s[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function m0(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function p0(a,s,i){let c=await Promise.all(a.map(async d=>{let m=s.routes[d.route.id];if(m){let f=await d0(m,i);return f.links?f.links():[]}return[]}));return y0(c.flat(1).filter(m0).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function tg(a,s,i,c,d,m){let f=(y,p)=>i[p]?y.route.id!==i[p].route.id:!0,h=(y,p)=>i[p].pathname!==y.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==y.params["*"];return m==="assets"?s.filter((y,p)=>f(y,p)||h(y,p)):m==="data"?s.filter((y,p)=>{let E=c.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(f(y,p)||h(y,p))return!0;if(y.route.shouldRevalidate){let x=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function f0(a,s,{includeHydrateFallback:i}={}){return g0(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),i&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function g0(a){return[...new Set(a)]}function h0(a){let s={},i=Object.keys(a).sort();for(let c of i)s[c]=a[c];return s}function y0(a,s){let i=new Set;return new Set(s),a.reduce((c,d)=>{let m=JSON.stringify(h0(d));return i.has(m)||(i.add(m),c.push({key:m,link:d})),c},[])}function Pg(){let a=N.useContext(ta);return Ru(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function b0(){let a=N.useContext(or);return Ru(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Du=N.createContext(void 0);Du.displayName="FrameworkContext";function Ig(){let a=N.useContext(Du);return Ru(a,"You must render this element inside a <HydratedRouter> element"),a}function v0(a,s){let i=N.useContext(Du),[c,d]=N.useState(!1),[m,f]=N.useState(!1),{onFocus:h,onBlur:y,onMouseEnter:p,onMouseLeave:E,onTouchStart:x}=s,A=N.useRef(null);N.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let X=K=>{K.forEach(G=>{f(G.isIntersecting)})},J=new IntersectionObserver(X,{threshold:.5});return A.current&&J.observe(A.current),()=>{J.disconnect()}}},[a]),N.useEffect(()=>{if(c){let X=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(X)}}},[c]);let U=()=>{d(!0)},I=()=>{d(!1),f(!1)};return i?a!=="intent"?[m,A,{}]:[m,A,{onFocus:ql(h,U),onBlur:ql(y,I),onMouseEnter:ql(p,U),onMouseLeave:ql(E,I),onTouchStart:ql(x,U)}]:[!1,A,{}]}function ql(a,s){return i=>{a&&a(i),i.defaultPrevented||s(i)}}function x0({page:a,...s}){let{router:i}=Pg(),c=N.useMemo(()=>jo(i.routes,a,i.basename),[i.routes,a,i.basename]);return c?N.createElement(E0,{page:a,matches:c,...s}):null}function S0(a){let{manifest:s,routeModules:i}=Ig(),[c,d]=N.useState([]);return N.useEffect(()=>{let m=!1;return p0(a,s,i).then(f=>{m||d(f)}),()=>{m=!0}},[a,s,i]),c}function E0({page:a,matches:s,...i}){let c=Nt(),{manifest:d,routeModules:m}=Ig(),{basename:f}=Pg(),{loaderData:h,matches:y}=b0(),p=N.useMemo(()=>tg(a,s,y,d,c,"data"),[a,s,y,d,c]),E=N.useMemo(()=>tg(a,s,y,d,c,"assets"),[a,s,y,d,c]),x=N.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let I=new Set,X=!1;if(s.forEach(K=>{let G=d.routes[K.route.id];!G||!G.hasLoader||(!p.some(te=>te.route.id===K.route.id)&&K.route.id in h&&m[K.route.id]?.shouldRevalidate||G.hasClientLoader?X=!0:I.add(K.route.id))}),I.size===0)return[];let J=u0(a,f,"data");return X&&I.size>0&&J.searchParams.set("_routes",s.filter(K=>I.has(K.route.id)).map(K=>K.route.id).join(",")),[J.pathname+J.search]},[f,h,c,d,p,s,a,m]),A=N.useMemo(()=>f0(E,d),[E,d]),U=S0(E);return N.createElement(N.Fragment,null,x.map(I=>N.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...i})),A.map(I=>N.createElement("link",{key:I,rel:"modulepreload",href:I,...i})),U.map(({key:I,link:X})=>N.createElement("link",{key:I,nonce:i.nonce,...X})))}function T0(...a){return s=>{a.forEach(i=>{typeof i=="function"?i(s):i!=null&&(i.current=s)})}}var w0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w0&&(window.__reactRouterVersion="7.11.0")}catch{}function j0(a,s){return Wb({basename:s?.basename,getContext:s?.getContext,future:s?.future,history:gb({window:s?.window}),hydrationData:M0(),routes:a,mapRouteProperties:Kv,hydrationRouteProperties:Zv,dataStrategy:s?.dataStrategy,patchRoutesOnNavigation:s?.patchRoutesOnNavigation,window:s?.window,unstable_instrumentations:s?.unstable_instrumentations}).initialize()}function M0(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:O0(a.errors)}),a}function O0(a){if(!a)return null;let s=Object.entries(a),i={};for(let[c,d]of s)if(d&&d.__type==="RouteErrorResponse")i[c]=new nr(d.status,d.statusText,d.data,d.internal===!0);else if(d&&d.__type==="Error"){if(d.__subType){let m=window[d.__subType];if(typeof m=="function")try{let f=new m(d.message);f.stack="",i[c]=f}catch{}}if(i[c]==null){let m=new Error(d.message);m.stack="",i[c]=m}}else i[c]=d;return i}var Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Au=N.forwardRef(function({onClick:s,discover:i="render",prefetch:c="none",relative:d,reloadDocument:m,replace:f,state:h,target:y,to:p,preventScrollReset:E,viewTransition:x,unstable_defaultShouldRevalidate:A,...U},I){let{basename:X,unstable_useTransitions:J}=N.useContext(ut),K=typeof p=="string"&&Fg.test(p),G=xg(p,X);p=G.to;let te=Dv(p,{relative:d}),[Ne,ve,Ee]=v0(c,U),O=A0(p,{replace:f,state:h,target:y,preventScrollReset:E,relative:d,viewTransition:x,unstable_defaultShouldRevalidate:A,unstable_useTransitions:J});function le(He){s&&s(He),He.defaultPrevented||O(He)}let ye=N.createElement("a",{...U,...Ee,href:G.absoluteURL||te,onClick:G.isExternal||m?s:le,ref:T0(I,ve),target:y,"data-discover":!K&&i==="render"?"true":void 0});return Ne&&!K?N.createElement(N.Fragment,null,ye,N.createElement(x0,{page:te})):ye});Au.displayName="Link";var N0=N.forwardRef(function({"aria-current":s="page",caseSensitive:i=!1,className:c="",end:d=!1,style:m,to:f,viewTransition:h,children:y,...p},E){let x=lr(f,{relative:p.relative}),A=Nt(),U=N.useContext(or),{navigator:I,basename:X}=N.useContext(ut),J=U!=null&&k0(x)&&h===!0,K=I.encodeLocation?I.encodeLocation(x).pathname:x.pathname,G=A.pathname,te=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;i||(G=G.toLowerCase(),te=te?te.toLowerCase():null,K=K.toLowerCase()),te&&X&&(te=ct(te,X)||te);const Ne=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ve=G===K||!d&&G.startsWith(K)&&G.charAt(Ne)==="/",Ee=te!=null&&(te===K||!d&&te.startsWith(K)&&te.charAt(K.length)==="/"),O={isActive:ve,isPending:Ee,isTransitioning:J},le=ve?s:void 0,ye;typeof c=="function"?ye=c(O):ye=[c,ve?"active":null,Ee?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let He=typeof m=="function"?m(O):m;return N.createElement(Au,{...p,"aria-current":le,className:ye,ref:E,style:He,to:f,viewTransition:h},typeof y=="function"?y(O):y)});N0.displayName="NavLink";var R0=N.forwardRef(({discover:a="render",fetcherKey:s,navigate:i,reloadDocument:c,replace:d,state:m,method:f=Ds,action:h,onSubmit:y,relative:p,preventScrollReset:E,viewTransition:x,unstable_defaultShouldRevalidate:A,...U},I)=>{let{unstable_useTransitions:X}=N.useContext(ut),J=L0(),K=U0(h,{relative:p}),G=f.toLowerCase()==="get"?"get":"post",te=typeof h=="string"&&Fg.test(h),Ne=ve=>{if(y&&y(ve),ve.defaultPrevented)return;ve.preventDefault();let Ee=ve.nativeEvent.submitter,O=Ee?.getAttribute("formmethod")||f,le=()=>J(Ee||ve.currentTarget,{fetcherKey:s,method:O,navigate:i,replace:d,state:m,relative:p,preventScrollReset:E,viewTransition:x,unstable_defaultShouldRevalidate:A});X&&i!==!1?N.startTransition(()=>le()):le()};return N.createElement("form",{ref:I,method:G,action:K,onSubmit:c?y:Ne,...U,"data-discover":!te&&a==="render"?"true":void 0})});R0.displayName="Form";function D0(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yg(a){let s=N.useContext(ta);return Se(s,D0(a)),s}function A0(a,{target:s,replace:i,state:c,preventScrollReset:d,relative:m,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:y}={}){let p=Mu(),E=Nt(),x=lr(a,{relative:m});return N.useCallback(A=>{if(r0(A,s)){A.preventDefault();let U=i!==void 0?i:Mt(E)===Mt(x),I=()=>p(a,{replace:U,state:c,preventScrollReset:d,relative:m,viewTransition:f,unstable_defaultShouldRevalidate:h});y?N.startTransition(()=>I()):I()}},[E,p,x,i,c,s,a,d,m,f,h,y])}var C0=0,_0=()=>`__${String(++C0)}__`;function L0(){let{router:a}=Yg("useSubmit"),{basename:s}=N.useContext(ut),i=Yv(),c=a.fetch,d=a.navigate;return N.useCallback(async(m,f={})=>{let{action:h,method:y,encType:p,formData:E,body:x}=c0(m,s);if(f.navigate===!1){let A=f.fetcherKey||_0();await c(A,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:x,formMethod:f.method||y,formEncType:f.encType||p,flushSync:f.flushSync})}else await d(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:x,formMethod:f.method||y,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[c,d,s,i])}function U0(a,{relative:s}={}){let{basename:i}=N.useContext(ut),c=N.useContext(Ot);Se(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...lr(a||".",{relative:s})},f=Nt();if(a==null){m.search=f.search;let h=new URLSearchParams(m.search),y=h.getAll("index");if(y.some(E=>E==="")){h.delete("index"),y.filter(x=>x).forEach(x=>h.append("index",x));let E=h.toString();m.search=E?`?${E}`:""}}return(!a||a===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(m.pathname=m.pathname==="/"?i:jt([i,m.pathname])),Mt(m)}function k0(a,{relative:s}={}){let i=N.useContext(wu);Se(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Yg("useViewTransitionState"),d=lr(a,{relative:s});if(!i.isTransitioning)return!1;let m=ct(i.currentLocation.pathname,c)||i.currentLocation.pathname,f=ct(i.nextLocation.pathname,c)||i.nextLocation.pathname;return Cs(d.pathname,f)!=null||Cs(d.pathname,m)!=null}var z0=mg();function B0(a){return N.createElement($v,{flushSync:z0.flushSync,...a})}var cu={exports:{}};var og;function H0(){return og||(og=1,(function(a){(function(){var s={}.hasOwnProperty;function i(){for(var m="",f=0;f<arguments.length;f++){var h=arguments[f];h&&(m=d(m,c(h)))}return m}function c(m){if(typeof m=="string"||typeof m=="number")return m;if(typeof m!="object")return"";if(Array.isArray(m))return i.apply(null,m);if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]"))return m.toString();var f="";for(var h in m)s.call(m,h)&&m[h]&&(f=d(f,h));return f}function d(m,f){return f?m?m+" "+f:m+f:m}a.exports?(i.default=i,a.exports=i):window.classNames=i})()})(cu)),cu.exports}var P0=H0();const er=dg(P0),I0="_containerPills_1my8y_1",F0="_pills_1my8y_8",Y0="_active_1my8y_31",uu={containerPills:I0,pills:F0,active:Y0},q0=({items:a,onFilterChange:s})=>{const[i,c]=N.useState([]),d=m=>{const f=i.includes(m)?i.filter(h=>h!==m):[...i,m];c(f),s(f)};return w.jsx("div",{className:er(uu.containerPills),children:a.map(m=>w.jsx("div",{className:er(uu.pills,{[uu.active]:i.includes(m.value)}),onClick:()=>d(m.value),children:m.label},m.value))})},ks=({isOpen:a=!1})=>w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:a?"rotate(90deg)":"rotate(0deg)"},children:w.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ag=(a,s)=>{const i=[];let c=0,d=0,m=!1;for(;c<a.length;){if(a[c]==="<"){let h=c+1,y=!1;h<a.length&&a[h]==="/"&&(y=!0,h++);const p=h;for(;h<a.length&&/[a-zA-Z0-9-]/.test(a[h]);)h++;if(h>p){i.push(w.jsx("span",{children:a[c]},`char-${d++}`)),c++,y&&(i.push(w.jsx("span",{children:"/"},`char-${d++}`)),c++),i.push(w.jsx("span",{className:s.tag,children:a.slice(c,h)},`tag-${d++}`)),c=h,m=!1;continue}}if(/\s/.test(a[c])){let h=c;for(;h<a.length&&/\s/.test(a[h]);)h++;i.push(w.jsx("span",{children:a.slice(c,h)},`ws-${d++}`)),c=h;continue}if(/["'`]/.test(a[c])){const h=a[c];let y=c+1;for(;y<a.length&&a[y]!==h;)a[y]==="\\"&&y++,y++;y++,i.push(w.jsx("span",{className:s.string,children:a.slice(c,y)},`str-${d++}`)),c=y,m=!1;continue}if(a[c]==="."){i.push(w.jsx("span",{children:"."},`dot-${d++}`)),m=!0,c++;continue}let f=c;for(;f<a.length&&/[a-zA-Z0-9_$]/.test(a[f]);)f++;if(f>c){const h=a.slice(c,f);/^(if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|throw)$/.test(h)?i.push(w.jsx("span",{className:s.control,children:h},`ctrl-${d++}`)):/^(let|const|var|function|yield|await|async)$/.test(h)?i.push(w.jsx("span",{className:s.declaration,children:h},`decl-${d++}`)):/^(type|interface|enum|namespace|module|declare|implements|extends|infer|keyof|typeof|instanceof|readonly|Uppercase|Lowercase|Capitalize|Uncapitalize|Partial|Required|Readonly|Pick|Omit|Record|Exclude|Extract|NonNullable|Parameters|ReturnType|ConstructorParameters|InstanceType|Awaited|NoInfer)$/.test(h)?i.push(w.jsx("span",{className:s.tsKeyword,children:h},`ts-${d++}`)):/^(string|number|boolean|any|void|delete|in|never|unknown|object|symbol|bigint|null|undefined)$/.test(h)?i.push(w.jsx("span",{className:s.type,children:h},`type-${d++}`)):/^(class|constructor|super|public|private|protected|static|new)$/.test(h)?i.push(w.jsx("span",{className:s.classKeyword,children:h},`class-${d++}`)):/^(import|export|from|as|default|require|module)$/.test(h)?i.push(w.jsx("span",{className:s.module,children:h},`mod-${d++}`)):/^(true|false)$/.test(h)?i.push(w.jsx("span",{className:s.boolean,children:h},`bool-${d++}`)):m&&/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(h)?i.push(w.jsx("span",{className:s.method,children:h},`method-${d++}`)):/^(setTimeout|setInterval|clearTimeout|clearInterval|Promise|then|catch|finally|console|JSON|Math|Number|String|Symbol|Function|Boolean|Array|Date|Object|RegExp|Error|Map|Set|WeakMap|WeakSet|Proxy|Reflect)$/.test(h)?i.push(w.jsx("span",{className:s.global,children:h},`global-${d++}`)):/^(Infinity|-Infinity|NaN|\d+(\.\d+)?)$/.test(h)?i.push(w.jsx("span",{className:s.number,children:h},`num-${d++}`)):i.push(w.jsx("span",{children:h},`word-${d++}`)),c=f,m=!1;continue}i.push(w.jsx("span",{children:a[c]},`char-${d++}`)),m=!1,c++}return i},V0=(a,s)=>{if(!a)return[];const i=a.split(`
`),c=[];return i.forEach((d,m)=>{if(d===""){c.push(w.jsx("br",{},`empty-${m}`));return}const h=d.match(new RegExp("(?<!:)\\/\\/"))?.index??-1,y=d.indexOf("<!--");let p=-1;if(h!==-1&&y!==-1?p=Math.min(h,y):h!==-1?p=h:y!==-1&&(p=y),p!==-1){const E=d.substring(0,p),x=d.substring(p),A=ag(E,s);c.push(w.jsxs("div",{className:s.exampleLine,children:[A,w.jsx("span",{className:s.comment,children:x})]},`line-${m}`))}else{const E=ag(d,s);c.push(w.jsx("div",{className:s.exampleLine,children:E},`line-${m}`))}}),c},X0="_container_1vnuv_1",J0="_title_1vnuv_11",G0="_toggleButton_1vnuv_24",K0="_code_1vnuv_35",Z0="_control_1vnuv_46",Q0="_declaration_1vnuv_50",$0="_tsKeyword_1vnuv_54",W0="_type_1vnuv_58",ex="_classKeyword_1vnuv_62",nx="_module_1vnuv_66",tx="_method_1vnuv_70",ox="_string_1vnuv_74",ax="_number_1vnuv_78",lx="_global_1vnuv_82",rx="_comment_1vnuv_86",sx="_boolean_1vnuv_91",ix="_tag_1vnuv_95",Vl={container:X0,title:J0,toggleButton:G0,code:K0,control:Z0,declaration:Q0,tsKeyword:$0,type:W0,classKeyword:ex,module:nx,method:tx,string:ox,number:ax,global:lx,comment:rx,boolean:sx,tag:ix},Cu=({text:a,isShowToggle:s=!1,isHiddenDefault:i=!1})=>{const[c,d]=N.useState(i);return w.jsxs("div",{className:Vl.container,children:[w.jsxs("div",{className:Vl.title,children:["Примеры:",s&&w.jsx("button",{className:Vl.toggleButton,onClick:()=>d(m=>!m),children:c?"Показать":"Скрыть"})]}),!c&&w.jsx("div",{className:Vl.code,children:V0(a,Vl)})]})},cx="_container_1vuoc_1",ux="_header_1vuoc_13",dx="_title_1vuoc_18",mx="_content_1vuoc_23",js={container:cx,header:ux,title:dx,content:mx},zs=({title:a,filtersSlot:s,children:i})=>w.jsxs("div",{className:js.container,children:[w.jsx("header",{className:js.header,children:w.jsx("h1",{className:js.title,children:a})}),s,w.jsx("div",{className:js.content,children:i})]}),px=a=>N.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",...a},N.createElement("path",{d:"M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z",fillRule:"evenodd"})),fx="_container_trs0x_1",gx="_input_trs0x_6",hx="_clear_trs0x_25",du={container:fx,input:gx,clear:hx},_u=({searchQuery:a,onSearchChange:s,onSearchReset:i})=>w.jsxs("div",{className:du.container,children:[w.jsx("input",{type:"text",placeholder:"Поиск...",value:a,onChange:s,className:du.input}),a&&w.jsx("button",{className:du.clear,onClick:i,children:w.jsx(px,{})})]}),yx="_container_1po27_1",bx="_content_1po27_19",vx="_title_1po27_25",mu={container:yx,content:bx,title:vx},xx=({onClick:a,children:s})=>w.jsx("div",{className:mu.container,onClick:a,children:w.jsx("div",{className:mu.content,children:w.jsx("h3",{className:mu.title,children:s})})}),Va=(a,s={})=>{const{highlightStyle:i={fontWeight:600,color:"#1864ab"},excludeWords:c=[]}=s;return N.useMemo(()=>{const d=[],m=new Set(c.map(E=>E.toLowerCase())),f=/([A-Za-z_][A-Za-z0-9'_]*|\n)/g;let h=0,y,p=0;for(;(y=f.exec(a))!==null;){const E=y[0];y.index>h&&d.push(w.jsx("span",{children:a.substring(h,y.index)},p++)),E===`
`?d.push(w.jsx("br",{},p++)):E&&(!m.has(E.toLowerCase())?d.push(w.jsx("strong",{style:i,children:E},p++)):d.push(w.jsx("span",{children:E},p++))),h=f.lastIndex}return h<a.length&&d.push(w.jsx("span",{children:a.substring(h)},p++)),d},[a,i,c])},Xl=20,Bs=()=>{const[a,s]=N.useState([]),[i,c]=N.useState(""),[d,m]=N.useState(Xl);return{activeCategories:a,searchQuery:i,loadedCount:d,filterChange:E=>{s(E),m(Xl)},searchChange:E=>{c(E.target.value),m(Xl)},searchReset:()=>{c(""),m(Xl)},loadMore:()=>{m(E=>E+Xl)},setLoadedCount:m}},qg=({activeCategories:a,searchQuery:s="",loadedCount:i=1/0,config:c,getLabel:d})=>{const m=N.useMemo(()=>a.length===0?Object.keys(c):a,[a,c]),f=N.useMemo(()=>Object.keys(c).map(E=>({label:d(E),value:E})),[c,d]),h=N.useMemo(()=>m.reduce((E,x)=>{const U=(c[x]||[]).filter(I=>I.name.toLowerCase().includes(s.toLowerCase()));return E+U.length},0),[m,s,c]),y=N.useMemo(()=>{let E=0;const x={};for(const A of m){if(E>=i)break;const I=(c[A]||[]).filter(K=>K.name.toLowerCase().includes(s.toLowerCase())),X=i-E,J=Math.min(I.length,X);J>0&&(x[A]=I.slice(0,J),E+=J)}return x},[m,i,s,c]),p=i<h;return{pillItems:f,categoriesToShow:m,totalCount:h,itemsToShow:y,hasMore:p}},Vg=({hasMore:a,onLoadMore:s,threshold:i=.1,rootMargin:c="100px"})=>{const d=N.useRef(null);return N.useEffect(()=>{if(!a||!d.current)return;const m=new IntersectionObserver(([f])=>{f.isIntersecting&&s()},{threshold:i,rootMargin:c});return m.observe(d.current),()=>m.disconnect()},[a,s,i,c]),d},it={MAIN:"/",JAVA_SCRIPT:"/java-script",JAVA_SCRIPT_METHODS:"/java-script-methods",JAVA_SCRIPT_BROWSER:"/java-script-browser",TYPE_SCRIPT_UTILITY_TYPES:"/type-script-utility-types"},Sx=({searchQuery:a="",loadedCount:s,config:i})=>{const c=Mu(),d=i,m=N.useMemo(()=>a?d.filter(p=>p.name.toLowerCase().includes(a.toLowerCase())):d,[d,a]),f=m.slice(0,s),h=s<m.length;return{topicsToShow:f,navigateToTopic:p=>{c(`${it.JAVA_SCRIPT}/topic/${p.value}`,{state:{topicData:p}})},hasMore:h}},Ex="_container_2pa71_1",Tx="_noResult_2pa71_7",wx="_sentinel_2pa71_20",pu={container:Ex,noResult:Tx,sentinel:wx},Xg=({searchQuery:a,loadedCount:s,loadMore:i,topics:c})=>{const{topicsToShow:d,navigateToTopic:m,hasMore:f}=Sx({searchQuery:a,loadedCount:s,config:c}),h=Vg({hasMore:f,onLoadMore:i}),y=d.filter(p=>p.name.toLowerCase().includes(a.toLowerCase()));return w.jsxs("div",{className:pu.container,children:[y.map(p=>w.jsx(xx,{onClick:()=>m(p),children:p.name},p.value)),y.length===0&&w.jsx("div",{className:pu.noResult,children:"По данному запросу данных нет"}),f&&w.jsx("div",{ref:h,className:pu.sentinel})]})},jx={value:"currying",name:"Каррирование",content:{introduction:"Каррирование — это преобразование функции, которое позволяет вызывать её с аргументами по частям, возвращая новую функцию для каждого частичного применения, пока не будут переданы все необходимые аргументы.",sections:[{title:"Основы каррирования",content:`Каррирование трансформирует вызов f(a, b, c) в f(a)(b)(c). Это не вызывает функцию, а лишь преобразует её.
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
console.log(doubled); // [2, 4, 6, 8]`}]}},Dx={value:"javascript-introduction",name:"Введение",content:{introduction:"JavaScript — это высокоуровневый, динамически типизированный, слабо типизированный, однопоточный, встраиваемый, интерпретируемый и мультипарадигменный язык программирования.",sections:[{title:"Высокоуровневый",content:"JavaScript представляет высокий уровень абстракции (т.е. скрытия сложности низкоуровневых деталей) благодаря удобным конструкциям, таким как массивы, объекты, функции, классы и тд. Управление памятью осуществляется автоматически с помощью сборщика мусора (garbage collector), что освобождает разработчиков от необходимости ручного управления памятью.",addition:'Сборщик мусора использует алгоритм "Mark-and-Sweep": помечает все достижимые объекты, затем удаляет недостижимые.',examples:`// Пример работы сборщика мусора
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
// и скомпилировать её в машинный код для ускорения последующих вызовов`},{title:"Мультипарадигмальный",content:"JavaScript поддерживает несколько парадигм программирования: императивную (структурную), объектно-ориентированную (ООП) и функциональную (ФП).",addition:`• Императивный подход — описание последовательности инструкций, явно указывающих, как выполнить задачу.
• ООП — организация кода вокруг объектов с поддержкой трёх основных принципов: инкапсуляции (сокрытие деталей реализации и контроль доступа через методы), наследования (создание иерархий для повторного использования кода) и полиморфизма (единый интерфейс для разных типов данных).
• Функциональный — организация кода вокруг функций как основных строительных блоков с поддержкой следующих принципов: неизменяемость данных (данные не изменяются, а создаются новые), чистые функции (результат зависит только от аргументов, без побочных эффектов), функции высшего порядка и декларативный стиль.`,examples:`// Императивный стиль (как сделать)
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

Куча (Heap) — динамическая память для данных, размер которых первоначально неизвестен. Операции с кучей выполняются медленнее, чем со стеком, из-за дополнительных этапов поиска. Когда код обращается к значению по ссылке, движок должен:
• Разыменовать указатель — взять адрес из переменной в стеке
• Найти объект в памяти — перейти по этому адресу в куче
• Проверить заголовок (хидер) — определить тип данных, размер и структуру
• Получить доступ к данным — обратиться к нужным полям/элементам/символам/числам
• Возможно повторить — для вложенных объектов процесс повторяется
 В куче хранятся объекты, массивы, функции, замыкания, строки, дробные и большие числа, пользовательские символы и глобальные переменные. Куча общая для всех потоков. Управление сложнее, возможны ошибки (out of memory) при превышении доступной памяти. Размер ограничен только физической памятью устройства.

Особенности хранения в V8:
• SMI (Small Integers) — целые числа в диапазоне от -2³¹ до 2³¹-1, которые кодируются прямо в указателе (tagged pointer) - не требуют отдельного объекта в куче. Могут храниться как в стеке (переменные), так и в куче (свойства объектов, элементы массивов).
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
• Объект: 32-48 байт + свойства.
• Массив: 32-64 байта + элементы.
• Функция: 32-72 байта + контекст и замыкания.

Понятия Shallow Size и Retained Size:
• Shallow Size — память самого объекта без зависимостей.
• Retained Size — память, которая освободится при удалении объекта (включая зависимые объекты, ставшие недостижимыми).`,examples:`// Примитивы в стеке
let a = 42; // SMI - 4 байта в стеке
let b = 3.14; // HeapNumber - ссылка в стеке, значение в куче (~12+ байт)
let c = true; // 4 байта в стеке
let d = "hello"; // ссылка в стеке, строка в куче (1/2 байт на символ + служебные)

// Объекты в куче
let obj = { // ~32-48 байт в куче
  name: "John", // строка в куче (дополнительно)
  age: 30 // SMI - может храниться прямо в объекте
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
console.log(prop); // "value"`}]}},Fx={value:"json",name:"JSON",content:{introduction:"JSON (JavaScript Object Notation) — независимый от языка текстовый формат для представления данных. Спецификация задокументирована в стандарте RFC 4627.",sections:[{title:"Что такое JSON и для чего используется",content:`JSON — универсальный формат обмена данными между клиентом и сервером.
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
// {"arr": [1, 2,]} — висячая запятая запрещена`}]}},Yx={value:"recursion",name:"Рекурсия",content:{introduction:"Рекурсия — это процесс, при котором функция вызывает саму себя в своем теле.",sections:[{title:"Основы рекурсии: база и шаг",content:`Когда функция вызывается, исполнение делится на две ветви:
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
console.log("S\\u0307\\u0323".normalize().length); // 1`}]}},n1={value:"weakref-finalizationregistry",name:"WeakRef и FinalizationRegistry",content:{introduction:"WeakRef и FinalizationRegistry — это низкоуровневые возможности JavaScript для работы со слабыми ссылками и отслеживания удаления объектов сборщиком мусора. Эти механизмы используются в специфических сценариях оптимизации памяти.",sections:[{title:"WeakRef (Слабые ссылки)",content:`WeakRef — это объект, который содержит слабую ссылку на другой объект.
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
// registry.unregister(user);`}]}},t1=[Dx,Bx,zx,e1,kx,Hx,Cx,Ax,Ox,Rx,_x,Lx,Nx,Ux,Mx,Px,Ix,Fx,Yx,qx,Vx,Xx,Jx,Gx,Kx,Zx,Qx,$x,Wx,jx,n1],o1="_filtersContainer_6m2x1_1",a1={filtersContainer:o1},l1=()=>{const{searchQuery:a,searchChange:s,searchReset:i,loadedCount:c,loadMore:d}=Bs();return w.jsx(zs,{title:"Основы языка JavaScript",filtersSlot:w.jsx("div",{className:a1.filtersContainer,children:w.jsx(_u,{searchQuery:a,onSearchChange:s,onSearchReset:i})}),children:w.jsx(Xg,{loadedCount:c,loadMore:d,searchQuery:a,topics:t1})})};var Fa=(a=>(a.OBJECT="object",a.UNION="union",a.FUNCTION="function",a.STRING="string",a.ADVANCED="advanced",a))(Fa||{});const lg={object:"Объекты",union:"Объединения",function:"Функции",string:"Строки",advanced:"Продвинутые"},r1="_container_196gl_1",s1={container:r1},Jg=({pillItems:a,searchQuery:s,onFilterChange:i,onSearchChange:c,onSearchReset:d})=>w.jsxs("div",{className:s1.container,children:[w.jsx(q0,{items:a,onFilterChange:i}),w.jsx(_u,{searchQuery:s,onSearchChange:c,onSearchReset:d})]}),i1="_container_adrm6_1",c1="_table_adrm6_6",rg={container:i1,table:c1},u1=({breakdown:a})=>w.jsx("div",{className:rg.container,children:w.jsxs("table",{className:rg.table,children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{children:"Часть кода"}),w.jsx("th",{children:"Описание"})]})}),w.jsx("tbody",{children:a.map((s,i)=>w.jsxs("tr",{children:[w.jsx("td",{children:w.jsx("code",{children:s.code})}),w.jsx("td",{children:s.description})]},i))})]})}),d1="_card_tr7jp_1",m1="_cardInfo_tr7jp_10",p1="_headerText_tr7jp_18",f1="_cardHeader_tr7jp_23",g1="_buttonArrow_tr7jp_32",h1="_description_tr7jp_46",y1="_signature_tr7jp_51",ea={card:d1,cardInfo:m1,headerText:p1,cardHeader:f1,buttonArrow:g1,description:h1,signature:y1},b1=({utility:a})=>{const[s,i]=N.useState(!1),c=Va(a.description,{highlightStyle:{fontWeight:600,color:"#1864ab"}});return w.jsxs("div",{className:ea.card,children:[w.jsxs("div",{className:ea.cardInfo,children:[w.jsxs("button",{className:ea.cardHeader,onClick:()=>i(d=>!d),children:[w.jsx("h3",{className:ea.headerText,children:a.name}),w.jsx("div",{className:ea.buttonArrow,children:w.jsx(ks,{isOpen:s})})]}),s&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:ea.signature,children:a.signature}),w.jsx("div",{className:ea.description,children:c}),a.syntaxBreakdown&&w.jsx(u1,{breakdown:a.syntaxBreakdown})]})]}),s&&w.jsx(Cu,{text:a.example})]})},v1={[Fa.OBJECT]:[{name:"Partial<T>",description:"Утилитарный тип, создает на основе T новый тип, где все свойства помечены как опциональные.",signature:"type Partial<T> = { [P in keyof T]?: T[P] }",example:`interface User {
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
};`,syntaxBreakdown:[{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]}],[Fa.UNION]:[{name:"Exclude<T, U>",description:"Утилитарный тип, создает новый тип на основе T, исключая из объединения все члены, которые можно присвоить U.",signature:"type Exclude<T, U> = T extends U ? never : T",example:`type T = "a" | "b" | "c" | "d";

type Result = Exclude<T, "c" | "d">;
// "a" | "b"`,syntaxBreakdown:[{code:"T extends U",description:"Проверяет, можно ли присвоить тип T типу U"},{code:"? never : T",description:"Если T присваивается U — исключаем, иначе оставляем T"},{code:"never",description:"Тип, который никогда не должен существовать (исключается из объединения)"}]},{name:"Extract<T, U>",description:"Утилитарный тип, создает новый тип на основе T, оставляя в объединении только те члены, которые можно присвоить U.",signature:"type Extract<T, U> = T extends U ? T : never",example:`type T = "a" | "b" | "c" | "d" | 1 | 2;

type Result = Extract<T, string>;
// "c" | "d"`,syntaxBreakdown:[{code:"T extends U",description:"Проверяет, можно ли присвоить тип T типу U"},{code:"? T : never",description:"Если T присваивается U — оставляем T, иначе исключаем (never)"},{code:"never",description:"Тип, который никогда не должен существовать (исключается из объединения)"}]},{name:"NonNullable<T>",description:"Утилитарный тип, создает новый тип на основе T, исключая из объединения значения null и undefined.",signature:"type NonNullable<T> = T & {}",example:`type T = string | null | undefined;

type Result = NonNullable<T>;
// string`,syntaxBreakdown:[{code:"T & {}",description:"Пересечение типа T с пустым объектом, которое отсеивает null и undefined"},{code:"&",description:"Оператор пересечения типов (intersection)"},{code:"{}",description:"Пустой объектный тип, который несовместим с null и undefined"}]}],[Fa.FUNCTION]:[{name:"Parameters<T>",description:"Утилитарный тип, извлекает типы параметров функции T и возвращает их в виде кортежа.",signature:"type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never",example:`type Fn = (a: string, b: number) => boolean;

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
// () => string`,syntaxBreakdown:[{code:"ThisParameterType<T>",description:"Проверяет, есть ли у функции параметр this"},{code:"(...args: infer A) => infer R",description:"Захватывает остальные параметры и возвращаемый тип"},{code:"(...args: A) => R",description:"Возвращает функцию без параметра this"}]}],[Fa.STRING]:[{name:"Uppercase<S>",description:"Утилитарный тип, преобразует все символы строкового типа S в верхний регистр.",signature:"type Uppercase<S extends string> = intrinsic",example:`type T = "hello";

type Result = Uppercase<T>;
// "HELLO"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]},{name:"Lowercase<S>",description:"Утилитарный тип, преобразует все символы строкового типа S в нижний регистр.",signature:"type Lowercase<S extends string> = intrinsic",example:`type T = "HELLO";

type Result = Lowercase<T>;
// "hello"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]},{name:"Capitalize<S>",description:"Утилитарный тип, преобразует первый символ строкового типа S в верхний регистр, остальные символы оставляет без изменений.",signature:"type Capitalize<S extends string> = intrinsic",example:`type T = "hello";

type Result = Capitalize<T>;
// "Hello"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]},{name:"Uncapitalize<S>",description:"Утилитарный тип, преобразует первый символ строкового типа S в нижний регистр, остальные символы оставляет без изменений.",signature:"type Uncapitalize<S extends string> = intrinsic",example:`type T = "Hello";

type Result = Uncapitalize<T>;
// "hello"`,syntaxBreakdown:[{code:"S extends string",description:"Ограничение: S должен быть строковым типом"},{code:"intrinsic",description:"Встроенная реализация компилятора TypeScript (не может быть реализована пользователем)"}]}],[Fa.ADVANCED]:[{name:"Awaited<T>",description:"Утилитарный тип, рекурсивно разворачивает вложенные Promise-типы и возвращает тип итогового значения, которое будет получено после разрешения всех промисов.",signature:"type Awaited<T> = T extends null | undefined ? T : T extends object & { then(onfulfilled: infer F): any } ? F extends (value: infer V, ...args: any) => any ? Awaited<V> : never : T",example:`type P = Promise<Promise<string>>;

type Result = Awaited<P>;
// string`,syntaxBreakdown:[{code:"T extends null | undefined",description:"Если T — null или undefined, возвращает T без изменений"},{code:"T extends object & { then(onfulfilled: infer F): any }",description:"Проверяет, является ли T thenable-объектом (например, Promise) и захватывает функцию обработчика F"},{code:"infer F",description:"Захватывает тип функции-обработчика onfulfilled"},{code:"F extends (value: infer V, ...args: any) => any",description:"Проверяет, что F — функция, и захватывает тип её первого параметра V"},{code:"Awaited<V>",description:"Рекурсивно разворачивает полученный тип V"},{code:"never",description:"Возвращается, если структура не соответствует thenable"}]},{name:"NoInfer<T>",description:"Утилитарный тип, блокирует автоматический вывод (inference) типа T компилятором TypeScript. Используется для ограничения вывода в обобщенных функциях, чтобы тип определялся только по определенным аргументам.",signature:"type NoInfer<T> = T & {}",example:`function fn<T>(a: T, b: NoInfer<T>) {}

// T выводится из первого аргумента
fn(1, 2);
// ✅ (T = number)
fn(1, "2");
// ❌ (T = number, но второй аргумент не number)`,syntaxBreakdown:[{code:"T & {}",description:'Пересечение типа T с пустым объектом, которое "прячет" T от механизма вывода типов'},{code:"&",description:"Оператор пересечения типов (intersection)"},{code:"{}",description:"Пустой объектный тип, который создает контекст, не влияющий на вывод"}]},{name:"ReadonlyArray<T>",description:"Утилитарный тип, создает неизменяемый массив, где все методы, изменяющие массив, недоступны. Элементы массива доступны только для чтения.",signature:"interface ReadonlyArray<T> { ... }",example:`const arr: ReadonlyArray<number> = [1, 2, 3];

arr[0] = 10;// ❌ Ошибка!
arr.push(4); // ❌ Ошибка!
console.log(arr.map(x => x * 2)); // ✅ [2, 4, 6]`,syntaxBreakdown:[{code:"ReadonlyArray<T>",description:"Тип массива, доступного только для чтения"},{code:"T",description:"Тип элементов массива"}]}]},x1="_categorySection_8yy1a_1",S1="_categoryTitle_8yy1a_9",E1="_typesList_8yy1a_17",T1="_noResult_8yy1a_23",Ms={categorySection:x1,categoryTitle:S1,typesList:E1,noResult:T1},w1=()=>{const{activeCategories:a,searchQuery:s,loadedCount:i,filterChange:c,searchChange:d,searchReset:m}=Bs(),{pillItems:f,itemsToShow:h}=qg({activeCategories:a,searchQuery:s,loadedCount:i,config:v1,getLabel:y=>lg[y]});return w.jsxs(zs,{title:"Utility Types",filtersSlot:w.jsx(Jg,{pillItems:f,onFilterChange:c,searchQuery:s,onSearchChange:d,onSearchReset:m}),children:[Object.entries(h).map(([y,p])=>w.jsxs("div",{className:Ms.categorySection,children:[w.jsx("h2",{className:Ms.categoryTitle,children:lg[y]}),w.jsx("div",{className:Ms.typesList,children:p.map((E,x)=>w.jsx(b1,{utility:E},`${y}-${x}`))})]},y)),Object.entries(h).length===0&&w.jsx("div",{className:Ms.noResult,children:"По данному запросу данных нет"})]})},j1=()=>w.jsx("div",{children:"MainPage"});var Sn=(a=>(a.ARRAY="ARRAY",a.STRING="STRING",a.NUMBER="NUMBER",a.SYMBOL="SYMBOL",a.OBJECT="OBJECT",a.MAP="MAP",a.WEAK_MAP="WEAK_MAP",a.SET="SET",a.WEAK_SET="WEAK_SET",a.MATH="MATH",a.DATE="DATE",a.JSON="JSON",a.PROMISE="PROMISE",a.FUNCTION="FUNCTION",a.REFLECT="REFLECT",a.UTIL="UTIL",a.INTL="INTL",a))(Sn||{});const sg={ARRAY:"Array",STRING:"String",NUMBER:"Number",OBJECT:"Object",MAP:"Map",WEAK_MAP:"WeakMap",SET:"Set",WEAK_SET:"WeakSet",MATH:"Math",DATE:"Date",JSON:"JSON",PROMISE:"Promise",FUNCTION:"Function",SYMBOL:"Symbol",REFLECT:"Reflect",UTIL:"Util",INTL:"Intl"},M1="_container_1ch1g_1",O1="_header_1ch1g_10",N1="_list_1ch1g_19",R1="_error_1ch1g_23",Os={container:M1,header:O1,list:N1,error:R1},D1=({method:a})=>{const s=Va(a.errors,{highlightStyle:{fontWeight:600,color:"#da3030ff"}});return w.jsxs("div",{className:Os.container,children:[w.jsx("div",{className:Os.header,children:"Возможные ошибки:"}),w.jsx("ul",{className:Os.list,children:w.jsx("div",{className:Os.error,children:s})})]})},A1="_methodCard_1s7ty_1",C1="_methodInfo_1s7ty_18",_1="_methodHeader_1s7ty_26",L1="_buttonArrow_1s7ty_33",U1="_methodName_1s7ty_47",k1="_methodSyntax_1s7ty_52",z1="_parametersBlock_1s7ty_63",B1="_parametersTitle_1s7ty_70",H1="_parametersList_1s7ty_78",P1="_parameterItem_1s7ty_84",I1="_parameterName_1s7ty_97",F1="_parameterDescription_1s7ty_107",Y1="_methodDescription_1s7ty_119",q1="_specLink_1s7ty_124",Hn={methodCard:A1,methodInfo:C1,methodHeader:_1,buttonArrow:L1,methodName:U1,methodSyntax:k1,parametersBlock:z1,parametersTitle:B1,parametersList:H1,parameterItem:P1,parameterName:I1,parameterDescription:F1,methodDescription:Y1,specLink:q1},V1=({method:a})=>{const[s,i]=N.useState(!1),c=Va(a.description,{highlightStyle:{fontWeight:600,color:"#1864ab"}});return w.jsxs("div",{className:Hn.methodCard,children:[w.jsxs("div",{className:Hn.methodInfo,children:[w.jsxs("button",{className:Hn.methodHeader,onClick:()=>i(d=>!d),children:[w.jsx("h3",{className:Hn.methodName,children:a.name}),w.jsx("div",{className:Hn.buttonArrow,children:w.jsx(ks,{isOpen:s})})]}),s&&w.jsxs(w.Fragment,{children:[w.jsx("code",{className:Hn.methodSyntax,children:a.syntax}),a.parameters&&a.parameters.length>0&&w.jsxs("div",{className:Hn.parametersBlock,children:[w.jsx("div",{className:Hn.parametersTitle,children:"Параметры:"}),w.jsx("div",{className:Hn.parametersList,children:a.parameters.map((d,m)=>w.jsx("div",{className:Hn.parameterItem,children:w.jsxs("span",{className:Hn.parameterName,children:[d.name," "," - ",w.jsx("span",{className:Hn.parameterDescription,children:d.description})]})},m))})]}),w.jsxs("p",{className:Hn.methodDescription,children:[" ",c]}),a.specification&&w.jsx("a",{href:a.specification,target:"_blank",rel:"noopener noreferrer",className:Hn.specLink,children:"📖 Подробнее в спецификации"}),a.errors&&a.errors.length>0&&w.jsx(D1,{method:a})]})]}),s&&a.example&&w.jsx(Cu,{text:a.example})]})},X1={[Sn.NUMBER]:[{name:"toFixed()",syntax:"num.toFixed([digits])",parameters:[{name:"digits",description:"Количество цифр после десятичной точки (от 0 до 100)"}],description:"Метод объекта Number, округляет исходное число до digits и возвращает результат в виде строки.",example:`const num = 123.123;
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
console.log(Number.NaN === NaN); // false (NaN не равно самому себе)`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.nan"},{name:"Number.POSITIVE_INFINITY",syntax:"Number.POSITIVE_INFINITY",parameters:[],description:"Статическое свойство объекта Number, представляет собой положительную бесконечность.",example:"console.log(Number.POSITIVE_INFINITY); // Infinity",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.positive_infinity"},{name:"Number.NEGATIVE_INFINITY",syntax:"Number.NEGATIVE_INFINITY",parameters:[],description:"Статическое свойство объекта Number, представляет собой отрицательную бесконечность.",example:"console.log(Number.NEGATIVE_INFINITY); // -Infinity",specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.negative_infinity"}]},J1={[Sn.STRING]:[{name:"toUpperCase()",syntax:"str.toUpperCase()",description:"Метод объекта String, возвращает копию исходной строки, приведённую в верхний регистр.",example:`const filename = 'readme.md';
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
console.log(result); // 'aXbYc'`,specification:"https://tc39.es/ecma262/multipage/text-processing.html#sec-string.raw",errors:"TypeError — если template не имеет свойства raw."}]},G1={[Sn.SYMBOL]:[{name:"Symbol.for()",syntax:"Symbol.for(key)",parameters:[{name:"key",description:"Имя символа"}],description:"Статический метод объекта Symbol, используется для поиска или создания символа с key в глобальном реестре. Если в реестре уже существует символ с key, метод возвращает этот символ. Если такого key нет, метод создаёт новый символ и записывает его в реестр.",example:`const sym1 = Symbol.for('app');
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
console.log(unnamed.description); // undefined`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol.prototype.description"}]},K1={[Sn.OBJECT]:[{name:"toString()",syntax:"obj.toString()",description:"Метод объекта Object, возвращает примитивное значение исходного объекта. По умолчанию обычный объект имеет метод toString, который возвращает строку '[object Object]'. Но метод можно переопределить. Если имеются другие методы преобразования, то данный метод имеет приоритет при строковом преобразовании.",example:`const obj = { x: 10, y: 20 };
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
// }`,specification:"https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.groupby",errors:"TypeError — если items не является итерируемым объектом или callback не является функцией."}]},Z1={[Sn.DATE]:[{name:"getFullYear()",syntax:"date.getFullYear()",description:"Метод объекта Date, возвращает год (4 цифры) исходной даты по местному времени.",example:`const date = new Date('2023-12-15');
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
console.log(timestamp); // 1704067200000`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.utc"}]},Q1={[Sn.FUNCTION]:[{name:"call()",syntax:"func.call(thisArg, ...args)",parameters:[{name:"thisArg",description:"Значение, которое будет использоваться как this при вызове функции"},{name:"...args",description:"Аргументы, которые будут переданы функции"}],description:"Метод объекта Function, позволяет вызывать исходную функцию, используя thisArg как её контекст this, а ...args – как её аргументы.",example:"function greet(name) {\n console.log(`Hello, ${name}! I'm ${this.title}`);\n}\nconst person = { title: 'Mr.' };\ngreet.call(person, 'John'); // 'Hello, John! I'm Mr.'",specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function.prototype.call",errors:"TypeError — если this не является функцией."},{name:"apply()",syntax:"func.apply(thisArg, argsArray)",parameters:[{name:"thisArg",description:"Значение, которое будет использоваться как this при вызове функции"},{name:"argsArray",description:"Массив или псевдомассив аргументов, которые будут переданы функции"}],description:"Метод объекта Function, позволяет вызывать функцию, используя thisArg как её контекст this, а argsArray – как массив её аргументов. Единственное отличие от call() – передача аргументов массивом.",example:`function sum(a, b, c) {
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
console.log(length); // 2`,specification:"https://tc39.es/ecma262/multipage/functions-and-classes.html#sec-function-instances-length",errors:"TypeError — если this не является функцией."}]},$1={[Sn.JSON]:[{name:"JSON.stringify()",syntax:"JSON.stringify(value[, replacer[, space]])",parameters:[{name:"value",description:"Значение, которое нужно преобразовать в JSON (строку)"},{name:"replacer",description:"Функция преобразования или массив свойств для включения в результат"},{name:"space",description:"Строка или число для форматирования выходной строки (отступы)"}],description:`Статический метод объекта JSON, преобразует value в JSON-строку, replacer позволяет фильтровать или преобразовывать свойства перед сериализацией, а space задаёт отступы для форматирования. JSON является независимым от языка форматом данных, поэтому метод пропускает некоторые специфические свойства JavaScript: методы (свойства-функции), символьные ключи и значения, свойства содержащие undefined.
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
console.log(objWithDate.birth.getFullYear()); // 1980`,specification:"https://tc39.es/ecma262/multipage/structured-data.html#sec-json.parse",errors:"SyntaxError — если text не является валидным JSON."}]},W1={[Sn.MAP]:[{name:"forEach()",syntax:"map.forEach(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, которая будет вызвана для каждой пары ключ-значение. Принимает три аргумента:
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
console.log(size); // 2`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-map.prototype.size",errors:"TypeError — если this не является коллекцией (map) или множеством (set)."}]},e2={[Sn.WEAK_MAP]:[{name:"set()",syntax:"weakMap.set(key, value)",parameters:[{name:"key",description:"Объект-ключ, по которому будет установлено значение"},{name:"value",description:"Значение, которое будет ассоциировано с ключом"}],description:"Метод объекта WeakMap, записывает value по key. Каждый вызов set() возвращает объект WeakMap, что позволяет использовать цепочки вызовов. Ключами в WeakMap могут быть только объекты.",example:`const weakMap = new WeakMap();
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
console.log(deleted); // true`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakmap.prototype.delete",errors:"TypeError — если this не является коллекцией (map или weakMap) или множеством (set или weakSet), или key не является объектом."}]},n2={[Sn.SET]:[{name:"forEach()",syntax:"set.forEach(callbackFn[, thisArg])",parameters:[{name:"callbackFn",description:`Функция, которая будет вызвана для каждого значения в множестве. Принимает три аргумента:
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
console.log(size); // 3`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-set.prototype.size",errors:"TypeError —  если this не является множеством (set) или коллекцией (map)."}]},t2={[Sn.WEAK_SET]:[{name:"add()",syntax:"weakSet.add(value)",parameters:[{name:"value",description:"Объект, который нужно добавить в WeakSet"}],description:"Метод объекта WeakSet, добавляет value в исходное множество. Если value уже есть, то ничего не делает. Возвращает тот же объект WeakSet.",example:`const weakSet = new WeakSet();
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
console.log(weakSet.has(obj)); // false`,specification:"https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.delete",errors:"TypeError —  если this не является множеством (set или weakSet) или коллекцией (map или weakMap), или (value) не является объектом."}]},o2={[Sn.UTIL]:[{name:"structuredClone()",syntax:"structuredClone(value[, options])",parameters:[{name:"value",description:"Значение, которое нужно глубоко скопировать"},{name:"options",description:`Объект с параметрами клонирования:
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
Сетевая ошибка — при проблемах сети или недоступности ресурса.`}]},a2={[Sn.ARRAY]:[{name:"pop()",syntax:"arr.pop()",description:"Метод объекта Array, удаляет последний элемент из исходного массива и возвращает его.",example:`const numbers = [10, 20, 30];
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
});`,specification:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.fromasync",errors:"TypeError — если asyncItems не является итерируемым или mapFn передан, но не является функцией."}]},l2={[Sn.REFLECT]:[{name:"Reflect.ownKeys()",syntax:"Reflect.ownKeys(obj)",parameters:[{name:"obj",description:"Объект, все собственные ключи которого нужно получить"}],description:"Статический метод объекта Reflect, возвращает массив всех собственных ключей obj, как перечисляемых, так и неперечисляемых.",example:`const sym = Symbol('id');
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
console.log(obj.b); // undefined`,specification:"https://tc39.es/ecma262/#sec-reflect.preventextensions",errors:"TypeError — если target не является объектом."}]},r2={[Sn.PROMISE]:[{name:"then()",syntax:"promise.then(onFulfilled[, onRejected])",parameters:[{name:"onFulfilled",description:"Функция, вызываемая при успешном завершении промиса"},{name:"onRejected",description:"Функция, вызываемая при отклонении промиса"}],description:"Метод объекта Promise, добавляет обработчики onFulfilled и/или onRejected. Возвращает новый промис.",example:`const promise = new Promise((resolve) => resolve(42));

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
});`,specification:"https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject"}]},s2={[Sn.MATH]:[{name:"Math.abs()",syntax:"Math.abs(x)",parameters:[{name:"x",description:"Число, для которого нужно найти абсолютное значение"}],description:"Статический метод объекта Math, возвращает абсолютное значение x (модуль числа).",example:`console.log(Math.abs(-5)); // 5
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
console.log(Math.fround(1.337)); // 1.3370000123977661`,specification:"https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.fround"}]},i2={[Sn.INTL]:[{name:"Intl.DateTimeFormat",syntax:"new Intl.DateTimeFormat([locales[, options]])",parameters:[{name:"locales",description:"Строка или массив строк с кодом локали (например, 'ru-RU', 'en-US')"},{name:"options",description:`Объект с настройками форматирования:
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
// ['acre', 'bit', 'byte', 'celsius', ...]`,specification:"https://tc39.es/ecma402/#sec-intl.supportedvaluesof",errors:"RangeError — если передан недопустимый key."}]},c2={...X1,...J1,...G1,...a2,...K1,...Z1,...Q1,...$1,...r2,...W1,...e2,...n2,...t2,...s2,...l2,...o2,...i2},u2="_categorySection_1iz4k_1",d2="_categoryTitle_1iz4k_9",m2="_methodsList_1iz4k_20",p2="_noResult_1iz4k_26",f2="_sentinel_1iz4k_35",Jl={categorySection:u2,categoryTitle:d2,methodsList:m2,noResult:p2,sentinel:f2},g2=()=>{const{activeCategories:a,searchQuery:s,loadedCount:i,filterChange:c,searchChange:d,searchReset:m,loadMore:f}=Bs(),{pillItems:h,itemsToShow:y,hasMore:p}=qg({activeCategories:a,searchQuery:s,loadedCount:i,config:c2,getLabel:x=>sg[x]}),E=Vg({hasMore:p,onLoadMore:f});return w.jsxs(zs,{title:"API JavaScript",filtersSlot:w.jsx(Jg,{pillItems:h,onFilterChange:c,searchQuery:s,onSearchChange:d,onSearchReset:m}),children:[Object.entries(y).map(([x,A])=>w.jsxs("div",{className:Jl.categorySection,children:[w.jsx("h2",{className:Jl.categoryTitle,children:sg[x]}),w.jsx("div",{className:Jl.methodsList,children:A.map((U,I)=>w.jsx(V1,{method:U},`${x}-${I}`))})]},x)),Object.entries(y).length===0&&w.jsx("div",{className:Jl.noResult,children:"По данному запросу данных нет"}),p&&w.jsx("div",{ref:E,className:Jl.sentinel})]})},h2="_section_1lyjs_1",y2="_header_1lyjs_8",b2="_title_1lyjs_15",v2="_content_1lyjs_20",x2="_addition_1lyjs_27",S2="_buttonArrow_1lyjs_37",Ha={section:h2,header:y2,title:b2,content:v2,addition:x2,buttonArrow:S2},E2=({section:a})=>{const[s,i]=N.useState(!0),c=Va(a.addition,{highlightStyle:{fontWeight:600,color:"#333"}}),d=Va(a.content,{highlightStyle:{fontWeight:600,color:"#3b82f6"}});return w.jsxs("div",{id:a.title,className:Ha.section,children:[w.jsxs("button",{className:Ha.header,onClick:()=>i(m=>!m),children:[w.jsx("h2",{className:Ha.title,children:a.title}),w.jsx("div",{className:Ha.buttonArrow,children:w.jsx(ks,{isOpen:s})})]}),s&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:Ha.content,children:d}),a.addition&&w.jsx("div",{className:Ha.addition,children:c}),a.examples&&w.jsx(Cu,{text:a.examples,isShowToggle:!0,isHiddenDefault:!0})]})]})},T2="_container_a7jbr_1",w2="_header_a7jbr_11",j2="_backButton_a7jbr_18",M2="_title_a7jbr_34",O2="_content_a7jbr_39",N2="_introduction_a7jbr_49",Pa={container:T2,header:w2,backButton:j2,title:M2,content:O2,introduction:N2},R2=()=>{const a=Mu(),s=Nt(),{topicData:i}=s.state,c=Va(i.content.introduction,{highlightStyle:{fontWeight:600,color:"black"}});return w.jsxs("div",{className:Pa.container,children:[w.jsxs("div",{className:Pa.header,children:[w.jsx("button",{className:Pa.backButton,onClick:()=>a(-1),children:"Вернуться к списку тем"}),w.jsx("h1",{className:Pa.title,children:i.name})]}),w.jsxs("div",{className:Pa.content,children:[w.jsx("div",{className:Pa.introduction,children:c}),i.content.sections.map((d,m)=>w.jsx(E2,{section:d},m))]})]})},D2={value:"dom-nodes",name:"DOM-дерево",content:{introduction:'DOM (Document Object Model) — это программный интерфейс, который представляет HTML- или XML-документ в виде структуры, где каждый элемент является объектом. Эта структура называется "деревом узлов", и именно с её помощью JavaScript может взаимодействовать со страницей.',sections:[{title:"Что такое DOM?",content:`Когда браузер загружает HTML-страницу, он парсит её код и на его основе создаёт DOM-дерево. Корнем этого дерева является объект document.
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
<\/script>`}]}},F2={value:"default-browser-action",name:"Действия браузера по умолчанию",content:{introduction:"Многие события автоматически влекут за собой действие браузера по умолчанию. При обработке события в JavaScript такое действие часто не требуется — его можно отменить.",sections:[{title:"Отмена действия браузера",content:`Есть два способа отменить действие браузера:
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
<\/script>`}]}},Y2={value:"dispatch-events",name:"Генерация пользовательских событий",content:{introduction:"События можно не только обрабатывать, но и создавать самостоятельно из JavaScript-кода, а затем запускать на любых элементах.",sections:[{title:"Конструктор Event",content:`Встроенные классы для событий формируют иерархию, корнем которой является класс Event:
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
<\/script>`}]}},nS={value:"selection-range",name:"Объекты Selection и Range",content:{introduction:"JavaScript позволяет получать существующее выделение, выделять и снимать выделение как целиком, так и по частям, убирать выделенную часть из документа, оборачивать её в тег и так далее. В основе выделения лежит объект Range, а само выделение представлено объектом Selection.",sections:[{title:"Range — создание и границы диапазона",content:`Объект Range представляет пару «граничных точек»: начало и конец диапазона. Каждая точка задаётся DOM-узлом и смещением от его начала. Для элемента смещение — номер дочернего узла, для текстового узла — позиция в тексте.
const range = new Range(); - конструктор без параметров
Установка границ:
• range.setStart(node, offset) — начало в позиции offset внутри node
• range.setEnd(node, offset) — конец в позиции offset внутри node`,addition:"setStart и setEnd не обязаны использовать один и тот же элемент — диапазон может охватывать любые узлы, важно лишь чтобы конец шёл после начала.",examples:`<p id="p">Example: <i>italic</i> and <b>bold</b></p>

<script>
  const p = document.getElementById("p");

  // Диапазон: от 0-го до 2-го дочернего элемента p
  const range = new Range();
  range.setStart(p, 0); // начало: 0-й дочерний узел (текст "Example: ")
  range.setEnd(p, 2);   // конец: 2-й дочерний узел (текст " and "), не включая
  console.log(range.toString()); // "Example: italic"

  // Частичное выделение внутри текстовых узлов
  const range2 = new Range();
  // начало: с 3-го символа первого текстового узла (после "Ex")
  range2.setStart(p.firstChild, 2);
  // конец: первые 3 символа текста внутри <b>
  range2.setEnd(p.querySelector("b").firstChild, 3);
  console.log(range2.toString()); // "ample: italic and bol"
<\/script>`},{title:"Свойства Range",content:`Объект Range имеет следующие свойства:
• startContainer — узел, в котором начинается диапазон
• startOffset — смещение внутри startContainer
• endContainer — узел, в котором заканчивается диапазон
• endOffset — смещение внутри endContainer
• collapsed — true, если начало и конец совпадают (диапазон пуст)
• commonAncestorContainer — ближайший общий предок всех узлов диапазона`,addition:"Свойство collapsed полезно для проверки, есть ли выделение. Если collapsed === true, значит ничего не выбрано.",examples:`<p id="p">Example: <i>italic</i> and <b>bold</b></p>

<script>
  const p = document.getElementById("p");
  const range = new Range();
  range.setStart(p, 0);
  range.setEnd(p, 2);

  console.log("startContainer:", range.startContainer); // <p>...
  console.log("startOffset:", range.startOffset); // 0
  console.log("endContainer:", range.endContainer); // <p>...
  console.log("endOffset:", range.endOffset); // 2
  console.log("collapsed:", range.collapsed); // false (есть выделение)
  console.log("commonAncestorContainer:", range.commonAncestorContainer); // <p>...

  // Пример с пустым диапазоном
  const emptyRange = new Range();
  emptyRange.setStart(p, 1);
  emptyRange.setEnd(p, 1);
  console.log("emptyRange collapsed:", emptyRange.collapsed); // true
<\/script>`},{title:"Методы Range — установка границ",content:`Дополнительные методы для установки начала и конца диапазона:
Установка начала:
• setStart(node, offset) — начало в позиции offset в node
• setStartBefore(node) — начало прямо перед node
• setStartAfter(node) — начало прямо после node
Установка конца:
• setEnd(node, offset) — конец в позиции offset в node
• setEndBefore(node) — конец прямо перед node
• setEndAfter(node) — конец прямо после node

Для текстовых узлов offset — количество символов, для элементов — количество дочерних узлов.`,addition:`Дополнительные методы:
• selectNode(node) — выделить node вместе со всем его содержимым
• selectNodeContents(node) — выделить только содержимое node (без самого узла)
• collapse(toStart) — схлопнуть диапазон: true — к началу, false — к концу
• cloneRange() — создать точную копию диапазона (независимую от оригинала)`,examples:`<p id="p">Example: <i>italic</i> and <b>bold</b></p>

<script>
  const p = document.getElementById("p");
  const italic = p.querySelector("i");
  const bold = p.querySelector("b");

  // 1. setStartBefore / setEndAfter
  const range1 = new Range();
  range1.setStartBefore(italic); // начало перед <i>
  range1.setEndAfter(bold); // конец после <b>
  console.log("setStartBefore/setEndAfter:", range1.toString()); // "italic and bold"

  // 2. setStartAfter / setEndBefore
  const range2 = new Range();
  range2.setStartAfter(italic); // начало после <i> (перед текстом " and ")
  range2.setEndBefore(bold); // конец перед <b>
  console.log("setStartAfter/setEndBefore:", range2.toString()); // " and "

  // 3. selectNode / selectNodeContents
  const range3 = new Range();
  range3.selectNode(italic);
  console.log("selectNode(italic):", range3.toString()); // "italic"
  const range4 = new Range();
  range4.selectNodeContents(italic);
  console.log("selectNodeContents(italic):", range4.toString()); // "italic"

  // 4. collapse
  const range5 = new Range();
  range5.selectNode(bold);
  console.log("До collapse:", range5.toString()); // "bold"
  range5.collapse(true); // схлопнуть к началу
  console.log("После collapse(true):", range5.toString()); // ""

  // 5. cloneRange
  const range6 = new Range();
  range6.selectNode(bold);
  const clonedRange = range6.cloneRange();
  console.log("Оригинал:", range6.toString()); // "bold"
  console.log("Клон:", clonedRange.toString()); // "bold"
  console.log("Диапазоны независимы:", range6 !== clonedRange); // true
<\/script>`},{title:"Методы Range — манипуляции содержимым",content:`Методы для управления содержимым внутри диапазона:
• deleteContents() — удалить содержимое диапазона из документа
• extractContents() — удалить содержимое и вернуть как DocumentFragment
• cloneContents() — склонировать содержимое и вернуть как DocumentFragment
• insertNode(node) — вставить node в документ в начале диапазона
• surroundContents(node) — обернуть node вокруг содержимого диапазона (диапазон должен содержать целые теги)`,addition:"surroundContents требует, чтобы диапазон содержал полные открывающие/закрывающие теги — частичные диапазоны вида <i>abc не допускаются.",examples:`<div id="demo">
  <p id="p">Example: <i>italic</i> and <b>bold</b></p>
</div>
<button id="cloneBtn">Клонировать содержимое</button>
<button id="extractBtn">Извлечь содержимое</button>
<button id="wrapBtn">Обернуть в <u></button>

<script>
  const p = document.getElementById("p");
  const demo = document.getElementById("demo");

  // cloneContents — копирование без удаления
  document.getElementById("cloneBtn").onclick = () => {
    const range = new Range();
    range.selectNodeContents(p);
    const fragment = range.cloneContents();
    demo.appendChild(fragment);
    console.log("cloneContents: содержимое скопировано вниз");
  };

  // extractContents — удаление с возвратом в DocumentFragment
  document.getElementById("extractBtn").onclick = () => {
    const range = new Range();
    range.selectNodeContents(p);
    const fragment = range.extractContents();
    console.log("extractContents: извлечено:", fragment);
    // p теперь пуст
  };

  // surroundContents — оборачивание
  document.getElementById("wrapBtn").onclick = () => {
    const range = new Range();
    range.selectNodeContents(p);
    const wrapper = document.createElement("u");
    range.surroundContents(wrapper);
    console.log("surroundContents: содержимое обёрнуто в <u>");
  };
<\/script>`},{title:"Selection — свойства и события",content:`Выделение в документе представлено объектом Selection, который получается через window.getSelection() или document.getSelection().
Основные свойства:
• anchorNode — узел, с которого начинается выделение (якорь)
• anchorOffset — смещение в anchorNode
• focusNode — узел, на котором выделение заканчивается (фокус)
• focusOffset — смещение в focusNode
• isCollapsed — true, если выделение пусто или не существует
• rangeCount — количество диапазонов (максимум 1, кроме Firefox)

События для отслеживания выделения:
• elem.onselectstart — когда пользователь начинает выделение на elem (можно отменить через preventDefault())
• document.onselectionchange — когда выделение изменяется (только на document)`,addition:"Выделение может быть «направлено вперёд» или «назад». Range всегда направлен вперёд. onselectionchange срабатывает при любом изменении выделения в документе.",examples:`<p id="p">Выдели меня: <i>курсив</i> и <b>жирный</b></p>

<script>
  document.onselectionchange = function() {
    const sel = document.getSelection();
    // При выделении "Выдели м"
    console.log(sel.anchorNode, sel.anchorOffset); // "Выдели меня: ", 0
    console.log(sel.focusNode, sel.focusOffset); // "Выдели меня: ", 8
    console.log(sel.toString()); // "Выдели м"
  };
<\/script>`},{title:"Методы Selection",content:`Управление диапазонами выделения:
• getRangeAt(i) — получить i-й диапазон (0 — первый)
• addRange(range) — добавить диапазон в выделение
• removeRange(range) — удалить диапазон из выделения
• removeAllRanges() — удалить все диапазоны
• empty() — сокращение для removeAllRanges()

Управление без обращения к Range:
• collapse(node, offset) — заменить выделение новым, схлопнутым на node, offset
• setPosition(node, offset) — то же самое, что collapse
• collapseToStart() — схлопнуть (заменить на пустой диапазон) к началу выделения
• collapseToEnd() — схлопнуть диапазон к концу выделения
• extend(node, offset) — переместить фокус выделения к данному node, с позиции offset
• setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) — заменить диапазон выделения на заданные начало anchorNode/anchorOffset и конец focusNode/focusOffset. Будет выделено всё содержимое между этими границами
• selectAllChildren(node) — выделить все дочерние узлы node
• deleteFromDocument() — удалить содержимое выделения из документа
• containsNode(node, allowPartial) — проверить, содержит ли выделение node`,addition:"Перед добавлением нового диапазона через addRange() нужно очистить текущее выделение removeAllRanges(), иначе в браузерах, кроме Firefox, новый диапазон будет проигнорирован. Исключение — методы, которые сами заменяют выделение, например setBaseAndExtent.",examples:`<p id="p">Выдели меня: <i>курсив</i> и <b>жирный</b></p>

<button id="btn1">Выделить через setBaseAndExtent</button>
<button id="btn2">Выделить через Range</button>

<script>
  const p = document.getElementById("p");
  const sel = document.getSelection();

  // Способ 1: через setBaseAndExtent
  document.getElementById("btn1").onclick = () => {
    sel.setBaseAndExtent(p, 0, p, p.childNodes.length);
    console.log(sel.toString()); // "Выдели меня: курсив и жирный"
    console.log(sel.rangeCount); // 1
  };

  // Способ 2: через Range
  document.getElementById("btn2").onclick = () => {
    const range = new Range();
    range.selectNodeContents(p);
    sel.removeAllRanges();
    sel.addRange(range);
    console.log(sel.toString()); // "Выдели меня: курсив и жирный"
    console.log(sel.rangeCount); // 1
  };
<\/script>`},{title:"Выделение в элементах форм (input/textarea)",content:`Элементы форм предоставляют отдельное упрощённое API для выделения, так как их содержимое — простой текст.
Свойства:
• input.selectionStart — позиция начала выделения (можно изменять)
• input.selectionEnd — позиция конца выделения (можно изменять)
• input.selectionDirection — направление: "forward", "backward" или "none"
Событие:
• input.onselect — срабатывает при завершении выделения
Методы:
• input.select() — выделить всё содержимое
• input.setSelectionRange(start, end, direction) — установить выделение от start до end
• input.setRangeText(replacement, start, end, selectionMode) — заменить выделенный текст`,addition:'selectionMode в setRangeText: "select" — выделить вставленный текст, "start" — курсор перед текстом, "end" — курсор после текста, "preserve" — сохранить выделение (по умолчанию).',examples:`<input id="input" style="width:200px" value="Замените ЭТО в тексте">
<button id="button">Заменить ЭТО</button>

<script>
  // При выделении текста мышью
  input.onselect = () => {
    console.log("выделено:", input.value.substring(input.selectionStart, input.selectionEnd));
  };

  // При клике на кнопку заменяем "ЭТО" на "*ЭТО*"
  button.onclick = () => {
    let pos = input.value.indexOf("ЭТО");
    if (pos >= 0) {
      input.setRangeText("*ЭТО*", pos, pos + 3, "select");
      input.focus();
    }
  };
<\/script>`},{title:"Как сделать элемент невыделяемым",content:`Три способа запретить выделение:
1. CSS: user-select: none — запрещает начало выделения на элементе, но элемент может быть включён в выделение, начатое с соседнего узла.
2. JavaScript: elem.onselectstart = () => false — отменяет начало выделения через preventDefault (не защищает от расширения выделения с соседних элементов).
3. Сброс выделения: document.getSelection().empty() — очищает выделение после его появления (вызывает мерцание).`,addition:"user-select: none — самый простой и часто используемый способ. onselectstart удобен, когда на элементе есть собственный обработчик mousedown и выделение мешает.",examples:`<style>
  #no-select { user-select: none; }
</style>
<div>Можно выделить <div id="no-select">Нельзя выделить</div> Можно выделить</div>`}]}},tS=[D2,A2,C2,_2,L2,U2,k2,z2,B2,H2,P2,I2,F2,Y2,q2,X2,V2,Z2,G2,J2,K2,eS,Q2,$2,W2,nS],oS="_filtersContainer_6m2x1_1",aS={filtersContainer:oS},lS=()=>{const{searchQuery:a,searchChange:s,searchReset:i,loadedCount:c,loadMore:d}=Bs();return w.jsx(zs,{title:"Среда выполнения: Браузер",filtersSlot:w.jsx("div",{className:aS.filtersContainer,children:w.jsx(_u,{searchQuery:a,onSearchChange:s,onSearchReset:i})}),children:w.jsx(Xg,{loadedCount:c,loadMore:d,searchQuery:a,topics:tS})})},ig=[{path:it.MAIN,label:"Главная страница"},{path:"#",id:"java-script",label:"Java Script",children:[{path:it.JAVA_SCRIPT,label:"Основы языка"},{path:it.JAVA_SCRIPT_METHODS,label:"API"},{path:it.JAVA_SCRIPT_BROWSER,label:"Браузер"}]},{path:"#",id:"type-script",label:"Type Script",children:[{path:it.TYPE_SCRIPT_UTILITY_TYPES,label:"Utility Types"}]}],rS=(a,s)=>{for(const i of a){if(i.path===s)return i.id||null;if(i.children&&i.children.length>0){for(const c of i.children)if(c.path===s)return i.id||null}}return null},sS="_navItem_hmy33_1",iS="_nested_hmy33_19",cS="_active_hmy33_23",uS="_content_hmy33_28",Ns={navItem:sS,nested:iS,active:cS,content:uS},cg=({to:a,children:s,isActive:i=!1,variant:c="default",hasChildren:d=!1,isExpanded:m=!1,onClick:f,...h})=>w.jsx(Au,{to:a,className:er(Ns.navItem,Ns[c],i&&Ns.active),onClick:f,...h,children:w.jsxs("span",{className:Ns.content,children:[s,d&&w.jsx(ks,{isOpen:m})]})}),dS="_sidebar_1ynxk_1",mS="_hidden_1ynxk_11",pS="_header_1ynxk_15",fS="_headerTop_1ynxk_21",gS="_title_1ynxk_28",hS="_toggle_1ynxk_36",yS="_subtitle_1ynxk_54",bS="_nav_1ynxk_59",vS="_navList_1ynxk_67",xS="_navItem_1ynxk_71",SS="_childrenList_1ynxk_75",lt={sidebar:dS,hidden:mS,header:pS,headerTop:fS,title:gS,toggle:hS,subtitle:yS,nav:bS,navList:vS,navItem:xS,childrenList:SS},Gg=({isExpanded:a=!1})=>w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",style:{transform:a?"rotate(180deg)":"rotate(0deg)"},children:w.jsx("path",{d:"M 2.5 8 L 0 10.5 L 2.5 13 L 4 13 L 2 11 L 19 11 L 19 10 L 2 10 L 4 8 L 2.5 8 z",fill:"currentColor"})}),ES=()=>{const a=Nt(),[s,i]=N.useState(()=>{const p=rS(ig,a.pathname);return p?[p]:[]}),[c,d]=N.useState(!1),m=p=>a.pathname===p,f=p=>{i(E=>E.includes(p)?E.filter(x=>x!==p):[...E,p])},h=()=>{d(p=>!p)},y=()=>{window.innerWidth<=768&&d(!0)};return w.jsxs("div",{className:er(lt.sidebar,c&&lt.hidden),children:[w.jsxs("div",{className:lt.header,children:[w.jsxs("div",{className:lt.headerTop,children:[!c&&w.jsx("h2",{className:lt.title,children:"Навигация"}),w.jsx("button",{className:lt.toggle,onClick:h,children:w.jsx(Gg,{isExpanded:c})})]}),!c&&w.jsx("p",{className:lt.subtitle,children:"Выберите раздел"})]}),!c&&w.jsx("nav",{className:lt.nav,children:w.jsx("ul",{className:lt.navList,children:ig.map(p=>{const E=p.children&&p.children.length>0,x=p.id?s.includes(p.id):!1;return w.jsxs("li",{className:lt.navItem,children:[w.jsx(cg,{to:p.path,isActive:m(p.path),hasChildren:E,isExpanded:x,onClick:E?()=>f(p.id):y,children:p.label}),E&&x&&p.children&&w.jsx("ul",{className:lt.childrenList,children:p.children.map(A=>w.jsx("li",{className:lt.navItem,children:w.jsx(cg,{to:A.path,isActive:m(A.path),variant:"nested",onClick:y,children:A.label})},A.path))})]},p.id||p.path)})})})]})},TS="_layout_10w45_1",wS="_content_10w45_6",ug={layout:TS,content:wS},jS=()=>w.jsxs("div",{className:ug.layout,children:[w.jsx(ES,{}),w.jsx("main",{className:ug.content,children:w.jsx(Hg,{})})]}),MS="_layout_ayxcy_1",OS="_sidebar_ayxcy_6",NS="_hidden_ayxcy_15",RS="_header_ayxcy_19",DS="_headerTop_ayxcy_27",AS="_title_ayxcy_37",CS="_toggle_ayxcy_42",_S="_nav_ayxcy_61",LS="_navList_ayxcy_72",US="_link_ayxcy_76",kS="_content_ayxcy_93",rt={layout:MS,sidebar:OS,hidden:NS,header:RS,headerTop:DS,title:AS,toggle:CS,nav:_S,navList:LS,link:US,content:kS},zS=()=>{const a=Nt(),[s,i]=N.useState(()=>window.innerWidth<=768),d=a.state?.topicData?.content?.sections||[],m=h=>{const y=document.getElementById(h);y&&y.scrollIntoView({behavior:"smooth"}),window.innerWidth<=768&&i(!0)},f=()=>{i(h=>!h)};return w.jsxs("div",{className:rt.layout,children:[w.jsxs("aside",{className:er(rt.sidebar,s&&rt.hidden),children:[w.jsxs("div",{className:rt.header,children:[w.jsxs("div",{className:rt.headerTop,children:[!s&&w.jsx("h2",{className:rt.title,children:"Навигация"}),w.jsx("button",{className:rt.toggle,onClick:f,children:w.jsx(Gg,{isExpanded:s})})]}),!s&&w.jsx("span",{className:rt.subtitle,children:"Выберите секцию"})]}),w.jsx("nav",{className:rt.nav,children:w.jsx("ul",{className:rt.navList,children:d.map((h,y)=>w.jsx("li",{children:w.jsx("button",{className:rt.link,onClick:()=>m(h.title),children:h.title})},y))})})]}),w.jsx("main",{className:rt.content,children:w.jsx(Hg,{})})]})},BS=j0([{path:it.MAIN,element:w.jsx(jS,{}),children:[{index:!0,element:w.jsx(j1,{})},{path:it.JAVA_SCRIPT,element:w.jsx(l1,{})},{path:it.JAVA_SCRIPT_METHODS,element:w.jsx(g2,{})},{path:it.TYPE_SCRIPT_UTILITY_TYPES,element:w.jsx(w1,{})},{path:it.JAVA_SCRIPT_BROWSER,element:w.jsx(lS,{})}]},{path:`${it.JAVA_SCRIPT}/topic/:topicId`,element:w.jsx(zS,{}),children:[{index:!0,element:w.jsx(R2,{})}]}]);function HS(){return w.jsx(B0,{router:BS})}mb.createRoot(document.getElementById("root")).render(w.jsx(N.StrictMode,{children:w.jsx(HS,{})}));
