!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).immer={})}(this,function(e){"use strict";var r,t="undefined"!=typeof Symbol?Symbol("immer-nothing"):((r={})["immer-nothing"]=!0,r),n="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("immer-draftable"):"__$immer_draftable",o="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("immer-state"):"__$immer_state";function i(e){return!!e&&!!e[o]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e))return!0;var r=Object.getPrototypeOf(e);return!r||r===Object.prototype}(e)||!!e[n]||!!e.constructor[n]||g(e)||w(e))}function u(e){if(e&&e[o])return e[o].base}var f=Object.assign||function(e){for(var r=[],t=arguments.length-1;t-- >0;)r[t]=arguments[t+1];return r.forEach(function(r){"object"==typeof r&&null!==r&&Object.keys(r).forEach(function(t){return e[t]=r[t]})}),e},c="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function s(e,r){if(void 0===r&&(r=!1),Array.isArray(e))return e.slice();if(g(e))return new Map(e);if(w(e))return new Set(e);var t=Object.create(Object.getPrototypeOf(e));return c(e).forEach(function(n){if(n!==o){var i=Object.getOwnPropertyDescriptor(e,n),a=i.value;if(i.get){if(!r)throw new Error("Immer drafts cannot have computed properties");a=i.get.call(e)}i.enumerable?t[n]=a:Object.defineProperty(t,n,{value:a,writable:!0,configurable:!0})}}),t}function p(e,r){Array.isArray(e)||g(e)||w(e)?e.forEach(function(t,n){return r(n,t,e)}):c(e).forEach(function(t){return r(t,e[t],e)})}function l(e,r){var t=Object.getOwnPropertyDescriptor(e,r);return!!t&&t.enumerable}function d(e,r){return g(e)?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function h(e,r){return g(e)?e.get(r):e[r]}function y(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var v="undefined"!=typeof Symbol,b="undefined"!=typeof Map;function g(e){return b&&e instanceof Map}var m="undefined"!=typeof Set;function w(e){return m&&e instanceof Set}function P(e){var r,t;return(r={})[Symbol.iterator]=function(){return t},r.next=e,t=r}function O(e,r,t){var n="values"!==r;return function(){var r=j(e)[Symbol.iterator]();return P(function(){var e=r.next();if(!e.done){var o=e.value[0],i=t.get(o);e.value=n?[o,i]:i}return e})}}function z(e){return function(r,t){var n="entries"===t;return function(){var t=j(r)[Symbol.iterator]();return P(function(){var o=t.next();if(!o.done){var i=function(r,t){var n=u(t)||t,o=r.drafts.get(n);if(!o){if(r.finalized||!a(t)||r.finalizing)return t;o=e(t,r),r.drafts.set(n,o),r.modified&&r.copy.add(o)}return o}(r,o.value);o.value=n?[i,i]:i}return o})}}}function j(e){return e.copy||e.base}function E(e){if(!a(e))return e;if(Array.isArray(e))return e.map(E);if(g(e))return new Map(e);if(w(e))return new Set(e);var r=Object.create(Object.getPrototypeOf(e));for(var t in e)r[t]=E(e[t]);return r}function A(e,r){void 0===r&&(r=!1),!a(e)||i(e)||Object.isFrozen(e)||(w(e)?e.add=e.clear=e.delete=k:g(e)&&(e.set=e.clear=e.delete=k),Object.freeze(e),r&&p(e,function(e,r){return A(r,!0)}))}function k(){throw new Error("This object has been frozen and should not be mutated")}var x=function(e){this.drafts=[],this.parent=e,this.canAutoFreeze=!0,this.patches=null};function D(e){e[o].revoke()}function S(e,r){var t,n=Array.isArray(e),i=_(e);g(e)?(t=i,Object.defineProperties(t,W),v&&Object.defineProperty(t,Symbol.iterator,$(O))):w(e)?function(e){Object.defineProperties(e,K),v&&Object.defineProperty(e,Symbol.iterator,$(C))}(i):p(i,function(r){!function(e,r,t){var n=T[r];n?n.enumerable=t:T[r]=n={configurable:!0,enumerable:t,get:function(){return function(e,r){J(e);var t=R(M(e),r);if(e.finalizing)return t;if(t===R(e.base,r)&&a(t))return N(e),e.copy[r]=S(t,e);return t}(this[o],r)},set:function(e){!function(e,r,t){if(J(e),e.assigned[r]=!0,!e.modified){if(y(t,R(M(e),r)))return;I(e),N(e)}e.copy[r]=t}(this[o],r,e)}};Object.defineProperty(e,r,n)}(i,r,n||l(e,r))});var u=r?r.scope:x.current,f={scope:u,modified:!1,finalizing:!1,finalized:!1,assigned:g(e)?new Map:{},parent:r,base:e,draft:i,drafts:w(e)?new Map:null,copy:null,revoke:F,revoked:!1};return function(e,r,t){Object.defineProperty(e,r,{value:t,enumerable:!1,writable:!0})}(i,o,f),u.drafts.push(i),i}function F(){this.revoked=!0}function M(e){return e.copy||e.base}function R(e,r){var t=e[o];if(t&&!t.finalizing){t.finalizing=!0;var n=e[r];return t.finalizing=!1,n}return e[r]}function I(e){e.modified||(e.modified=!0,e.parent&&I(e.parent))}function N(e){e.copy||(e.copy=_(e.base))}function _(e){var r=e&&e[o];if(r){r.finalizing=!0;var t=s(r.draft,!0);return r.finalizing=!1,t}return s(e)}x.prototype.usePatches=function(e){e&&(this.patches=[],this.inversePatches=[],this.patchListener=e)},x.prototype.revoke=function(){this.leave(),this.drafts.forEach(D),this.drafts=null},x.prototype.leave=function(){this===x.current&&(x.current=this.parent)},x.current=null,x.enter=function(){return this.current=new x(this.current)};var T={};var W=U({size:function(e){return M(e).size},has:function(e){return function(r){return M(e).has(r)}},set:function(e){return function(r,t){return M(e).get(r)!==t&&(N(e),I(e),e.assigned.set(r,!0),e.copy.set(r,t)),e.draft}},delete:function(e){return function(r){return N(e),I(e),e.assigned.set(r,!1),e.copy.delete(r),!1}},clear:function(e){return function(){e.copy||N(e),I(e),e.assigned=new Map;for(var r=0,t=M(e).keys();r<t.length;r+=1){var n=t[r];e.assigned.set(n,!1)}return e.copy.clear()}},forEach:function(e,r,t){return function(r){M(e).forEach(function(e,n,o){r(t.get(n),n,o)})}},get:function(e){return function(r){var t=M(e).get(r);if(e.finalizing||e.finalized||!a(t))return t;if(t!==e.base.get(r))return t;var n=S(t,e);return N(e),e.copy.set(r,n),n}},keys:function(e){return function(){return M(e).keys()}},values:O,entries:O});var C=z(S),K=U({size:function(e){return M(e).size},add:function(e){return function(r){return M(e).has(r)||(I(e),e.copy||N(e),e.copy.add(r)),e.draft}},delete:function(e){return function(r){return I(e),e.copy||N(e),e.copy.delete(r)}},has:function(e){return function(r){return M(e).has(r)}},clear:function(e){return function(){return I(e),e.copy||N(e),e.copy.clear()}},keys:C,entries:C,values:C,forEach:function(e){return function(r,t){for(var n=C(e)(),o=n.next();!o.done;)r.call(t,o.value,o.value,e.draft),o=n.next()}}});function U(e){return Object.keys(e).reduce(function(r,t){var n="size"===t?L:$;return r[t]=n(e[t],t),r},{})}function L(e){return{get:function(){var r=this[o];return J(r),e(r)}}}function $(e,r){return{get:function(){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var i=this[o];return J(i),e(i,r,i.draft).apply(void 0,t)}}}}function J(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(M(e)))}function V(e){for(var r=e.length-1;r>=0;r--){var t=e[r][o];t.modified||(Array.isArray(t.base)?B(t)&&I(t):g(t.base)?G(t)&&I(t):w(t.base)?H(t)&&I(t):q(t)&&I(t))}}function q(e){for(var r=e.base,t=e.draft,n=Object.keys(t),i=n.length-1;i>=0;i--){var a=n[i],u=r[a];if(void 0===u&&!d(r,a))return!0;var f=t[a],c=f&&f[o];if(c?c.base!==u:!y(f,u))return!0}return n.length!==Object.keys(r).length}function B(e){var r=e.draft;if(r.length!==e.base.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!t||t.get)}function G(e){var r=e.base,t=e.draft;if(r.size!==t.size)return!0;var n=!1;return t.forEach(function(e,t){n||(n=a(e)?e.modified:e!==r.get(t))}),n}function H(e){var r=e.base,t=e.draft;if(r.size!==t.size)return!0;var n=!1;return t.forEach(function(e,t){n||(n=a(e)?e.modified:!r.has(t))}),n}var Q,X,Y=Object.freeze({willFinalize:function(e,r,t){e.drafts.forEach(function(e){e[o].finalizing=!0}),t?i(r)&&r[o].scope===e&&V(e.drafts):(e.patches&&function e(r){if(r&&"object"==typeof r){var t=r[o];if(t){var n=t.base,i=t.draft,a=t.assigned;if(Array.isArray(r)){if(B(t)){if(I(t),a.length=!0,i.length<n.length)for(var u=i.length;u<n.length;u++)a[u]=!1;else for(var f=n.length;f<i.length;f++)a[f]=!0;for(var c=0;c<i.length;c++)void 0===a[c]&&e(i[c])}}else Object.keys(i).forEach(function(r){void 0!==n[r]||d(n,r)?a[r]||e(i[r]):(a[r]=!0,I(t))}),Object.keys(n).forEach(function(e){void 0!==i[e]||d(i,e)||(a[e]=!1,I(t))})}}}(e.drafts[0]),V(e.drafts))},createProxy:S});function Z(e,r){var t=r?r.scope:x.current,n={scope:t,modified:!1,finalized:!1,assigned:{},parent:r,base:e,draft:null,drafts:{},copy:null,revoke:null},o=n,i=ee;Array.isArray(e)?(o=[n],i=re):g(e)?(i=ne,n.drafts=new Map,n.assigned=new Map):w(e)&&(i=ie,n.drafts=new Map);var a=Proxy.revocable(o,i),u=a.revoke,f=a.proxy;return n.draft=f,n.revoke=u,t.drafts.push(f),f}var ee={get:function(e,r){if(r===o)return e;var t=e.drafts;if(!e.modified&&d(t,r))return t[r];var n=ae(e)[r];if(e.finalized||!a(n))return n;if(e.modified){if(n!==ue(e.base,r))return n;t=e.copy}return t[r]=Z(n,e)},has:function(e,r){return r in ae(e)},ownKeys:function(e){return Reflect.ownKeys(ae(e))},set:function(e,r,t){if(!e.modified){var n=ue(e.base,r);if(t?y(n,t)||t===e.drafts[r]:y(n,t)&&r in e.base)return!0;fe(e)}return e.assigned[r]=!0,e.copy[r]=t,!0},deleteProperty:function(e,r){return void 0!==ue(e.base,r)||r in e.base?(e.assigned[r]=!1,fe(e)):e.assigned[r]&&delete e.assigned[r],e.copy&&delete e.copy[r],!0},getOwnPropertyDescriptor:function(e,r){var t=ae(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n&&(n.writable=!0,n.configurable=!Array.isArray(t)||"length"!==r),n},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},re={};p(ee,function(e,r){re[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),re.deleteProperty=function(e,r){if(isNaN(parseInt(r)))throw new Error("Immer only supports deleting array indices");return ee.deleteProperty.call(this,e[0],r)},re.set=function(e,r,t){if("length"!==r&&isNaN(parseInt(r)))throw new Error("Immer only supports setting array indices and the 'length' property");return ee.set.call(this,e[0],r,t)};var te=["ownKeys","has","set","deleteProperty","defineProperty","getOwnPropertyDescriptor","preventExtensions","isExtensible","getPrototypeOf"].reduce(function(e,r){return e[r]=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return Reflect[r].apply(Reflect,[ae(e)].concat(t))},e},{}),ne=ce(((Q={})[o]=function(e){return e},Q.size=function(e){return ae(e).size},Q.has=function(e){return function(r){return ae(e).has(r)}},Q.set=function(e){return function(r,t){var n=ae(e);return n.has(r)&&n.get(r)===t||(fe(e),e.assigned.set(r,!0),e.copy.set(r,t)),e.draft}},Q.delete=function(e){return function(r){return!!ae(e).has(r)&&(fe(e),e.assigned.set(r,!1),e.copy.delete(r))}},Q.clear=function(e){return function(){fe(e),e.assigned=new Map;for(var r=0,t=ae(e).keys();r<t.length;r+=1){var n=t[r];e.assigned.set(n,!1)}return e.copy.clear()}},Q.forEach=function(e,r,t){return function(r,n){return ae(e).forEach(function(e,o,i){var a=t.get(o);r.call(n,a,o,i)})}},Q.get=function(e){return function(r){var t=e[e.modified?"copy":"drafts"];if(t.has(r))return t.get(r);var n=ae(e).get(r);if(e.finalized||!a(n))return n;var o=Z(n,e);return t.set(r,o),o}},Q.keys=function(e){return function(){return ae(e).keys()}},Q.values=O,Q.entries=O,Q[v?Symbol.iterator:"@@iterator"]=O,Q)),oe=z(Z),ie=ce(((X={})[o]=function(e){return e},X.size=function(e){return ae(e).size},X.has=function(e){return function(r){return ae(e).has(r)}},X.add=function(e){return function(r){return ae(e).has(r)||(fe(e),e.copy.add(r)),e.draft}},X.delete=function(e){return function(r){return fe(e),e.copy.delete(r)}},X.clear=function(e){return function(){return fe(e),e.copy.clear()}},X.forEach=function(e){return function(r,t){for(var n=oe(e)(),o=n.next();!o.done;)r.call(t,o.value,o.value,e.draft),o=n.next()}},X.keys=oe,X.values=oe,X.entries=oe,X[v?Symbol.iterator:"@@iterator"]=oe,X));function ae(e){return e.copy||e.base}function ue(e,r){var t=e[o],n=Reflect.getOwnPropertyDescriptor(t?ae(t):e,r);return n&&n.value}function fe(e){if(!e.modified){e.modified=!0;var r=e.base,t=e.drafts,n=e.parent,o=s(r);w(r)?(i=o,t.forEach(function(e){var r=u(e);r&&i.delete(r),i.add(e)})):(g(r)?function(e,r){r.forEach(function(r,t){return e.set(t,r)})}(o,t):f(o,t),e.drafts=null),e.copy=o,n&&fe(n)}var i}function ce(e){return Object.assign({},te,{get:function(r,t,n){return e.hasOwnProperty(t)?e[t](r,t,n):Reflect.get(r,t,n)},setPrototypeOf:function(e){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}})}var se=Object.freeze({willFinalize:function(){},createProxy:Z});function pe(e,r,t,n){var o,i,a=e.base,u=e.copy,f=e.assigned;u.length<a.length&&(a=(o=[u,a])[0],u=o[1],t=(i=[n,t])[0],n=i[1]);for(var c=u.length-a.length,s=0;a[s]===u[s]&&s<a.length;)++s;for(var p=a.length;p>s&&a[p-1]===u[p+c-1];)--p;for(var l=s;l<p;++l)if(f[l]&&u[l]!==a[l]){var d=r.concat([l]);t.push({op:"replace",path:d,value:u[l]}),n.push({op:"replace",path:d,value:a[l]})}for(var h=t.length,y=p+c-1;y>=p;--y){var v=r.concat([y]);t[h+y-p]={op:"add",path:v,value:u[y]},n.push({op:"remove",path:v})}}function le(e,r,t,n){var o=e.base,i=e.copy;p(e.assigned,function(e,a){var u=h(o,e),f=h(i,e),c=a?d(o,e)?"replace":"add":"remove";if(u!==f||"replace"!==c){var s=r.concat(e);t.push("remove"===c?{op:c,path:s}:{op:c,path:s,value:f}),n.push("add"===c?{op:"remove",path:s}:"remove"===c?{op:"add",path:s,value:u}:{op:"replace",path:s,value:u})}})}function de(e,r,t,n){for(var o=e.base,i=e.copy,a=0,u=0,f=o;u<f.length;u+=1){var c=f[u];if(!i.has(c)){var s=r.concat([a]);t.push({op:"remove",path:s,value:c}),n.unshift({op:"add",path:s,value:c})}a++}a=0;for(var p=0,l=i;p<l.length;p+=1){var d=l[p];if(!o.has(d)){var h=r.concat([a]);t.push({op:"add",path:h,value:d}),n.unshift({op:"remove",path:h,value:d})}a++}}var he=function(e,r){for(var t=0,n=r;t<n.length;t+=1){var o=n[t],i=o.path,a=o.op;if(!i.length)throw new Error("Illegal state");for(var u=e,f=0;f<i.length-1;f++)if(!(u=h(u,i[f]))||"object"!=typeof u)throw new Error("Cannot apply patch, path doesn't resolve: "+i.join("/"));var c=E(o.value),s=i[i.length-1];switch(a){case"replace":if(g(u))u.set(s,c);else{if(w(u))throw new Error('Sets cannot have "replace" patches.');u[s]=c}break;case"add":w(u)&&u.delete(o.value),Array.isArray(u)?u.splice(s,0,c):g(u)?u.set(s,c):w(u)?u.add(c):u[s]=c;break;case"remove":Array.isArray(u)?u.splice(s,1):g(u)?u.delete(s):w(u)?u.delete(o.value):delete u[s];break;default:throw new Error("Unsupported patch operation: "+a)}}return e};var ye={useProxies:"undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,autoFreeze:"undefined"!=typeof process?"production"!==process.env.NODE_ENV:"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},ve=function(e){f(this,ye,e),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)};ve.prototype.produce=function(e,r,n){var o,i=this;if("function"==typeof e&&"function"!=typeof r){var u=r;r=e;var f=this;return function(e){var t=this;void 0===e&&(e=u);for(var n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];return f.produce(e,function(e){return r.call.apply(r,[t,e].concat(n))})}}if("function"!=typeof r)throw new Error("The first or second argument to `produce` must be a function");if(void 0!==n&&"function"!=typeof n)throw new Error("The third argument to `produce` must be a function or undefined");if(a(e)){var c=x.enter(),s=this.createProxy(e),p=!0;try{o=r(s),p=!1}finally{p?c.revoke():c.leave()}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return c.usePatches(n),i.processResult(e,c)},function(e){throw c.revoke(),e}):(c.usePatches(n),this.processResult(o,c))}if((o=r(e))!==t)return void 0===o&&(o=e),this.maybeFreeze(o,!0),o},ve.prototype.produceWithPatches=function(e,r,t){var n,o,i=this;if("function"==typeof e)return function(r){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return i.produceWithPatches(r,function(r){return e.apply(void 0,[r].concat(t))})};if(t)throw new Error("A patch listener cannot be passed to produceWithPatches");return[this.produce(e,r,function(e,r){n=e,o=r}),n,o]},ve.prototype.createDraft=function(e){if(!a(e))throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object");var r=x.enter(),t=this.createProxy(e);return t[o].isManual=!0,r.leave(),t},ve.prototype.finishDraft=function(e,r){var t=e&&e[o];if(!t||!t.isManual)throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`");if(t.finalized)throw new Error("The given draft is already finalized");var n=t.scope;return n.usePatches(r),this.processResult(void 0,n)},ve.prototype.setAutoFreeze=function(e){this.autoFreeze=e},ve.prototype.setUseProxies=function(e){this.useProxies=e,f(this,e?se:Y)},ve.prototype.applyPatches=function(e,r){var t;for(t=r.length-1;t>=0;t--){var n=r[t];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}return i(e)?he(e,r):this.produce(e,function(e){return he(e,r.slice(t+1))})},ve.prototype.processResult=function(e,r){var n=r.drafts[0],i=void 0!==e&&e!==n;if(this.willFinalize(r,e,i),i){if(n[o].modified)throw r.revoke(),new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");a(e)&&(e=this.finalize(e,null,r),this.maybeFreeze(e)),r.patches&&(r.patches.push({op:"replace",path:[],value:e}),r.inversePatches.push({op:"replace",path:[],value:n[o].base}))}else e=this.finalize(n,[],r);return r.revoke(),r.patches&&r.patchListener(r.patches,r.inversePatches),e!==t?e:void 0},ve.prototype.finalize=function(e,r,t){var n=this,i=e[o];if(!i)return Object.isFrozen(e)?e:this.finalizeTree(e,null,t);if(i.scope!==t)return e;if(!i.modified)return this.maybeFreeze(i.base,!0),i.base;if(!i.finalized){if(i.finalized=!0,this.finalizeTree(i.draft,r,t),this.onDelete&&!w(i.base))if(this.useProxies){p(i.assigned,function(e,r){r||n.onDelete(i,e)})}else{var a=i.base,u=i.copy;p(a,function(e){d(u,e)||n.onDelete(i,e)})}this.onCopy&&this.onCopy(i),this.autoFreeze&&t.canAutoFreeze&&A(i.copy,!1),r&&t.patches&&function(e,r,t,n){(Array.isArray(e.base)?pe:w(e.base)?de:le)(e,r,t,n)}(i,r,t.patches,t.inversePatches)}return i.copy},ve.prototype.finalizeTree=function(e,r,t){var n=this,u=e[o];u&&(this.useProxies||(u.copy=s(u.draft,!0)),e=u.copy);var f=!!r&&!!t.patches,c=function(o,s,v){if(s===v)throw Error("Immer forbids circular references");var b=!!u&&v===e,m=w(v);if(i(s)){var P=b&&f&&!m&&!d(u.assigned,o)?r.concat(o):null;if(function(e,r,t){g(e)?e.set(r,t):w(e)?(e.delete(r),e.add(t)):Array.isArray(e)||l(e,r)?e[r]=t:Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0})}(v,o,s=n.finalize(s,P,t)),i(s)&&(t.canAutoFreeze=!1),b&&s===h(u.base,o))return}else{if(b&&y(s,h(u.base,o)))return;a(s)&&!Object.isFrozen(s)&&(p(s,c),n.maybeFreeze(s))}b&&n.onAssign&&!m&&n.onAssign(u,o,s)};return p(e,c),e},ve.prototype.maybeFreeze=function(e,r){void 0===r&&(r=!1),this.autoFreeze&&!i(e)&&A(e,r)};var be=new ve,ge=be.produce,me=be.produceWithPatches.bind(be),we=be.setAutoFreeze.bind(be),Pe=be.setUseProxies.bind(be),Oe=be.applyPatches.bind(be),ze=be.createDraft.bind(be),je=be.finishDraft.bind(be);e.Immer=ve,e.applyPatches=Oe,e.createDraft=ze,e.default=ge,e.finishDraft=je,e.immerable=n,e.isDraft=i,e.isDraftable=a,e.nothing=t,e.original=u,e.produce=ge,e.produceWithPatches=me,e.setAutoFreeze=we,e.setUseProxies=Pe,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=immer.umd.js.map
